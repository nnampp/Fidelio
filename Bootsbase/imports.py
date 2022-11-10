# from flask import Flask,request, jsonify
# import os
# # from flask_cors import CORS

# app = Flask(__name__)
# # CORS(app)

# @app.route('/reciever', methods=["GET"])
# def importSong():
#     data = "CRAVITY"   
#     os.system("python Bootsbase/boostbase_function.py")
#     return data

# if __name__ == "__main__":
#     app.run(debug=True)

#####################################################################################################
#####################################################################################################
#####################################################################################################

from flask import Flask,request, jsonify
import os
# from flask_cors import CORS
from fileinput import filename
from html.entities import name2codepoint
from pytube import YouTube
from pydub import AudioSegment
import math
import numpy as np
import os
import glob
import datetime
# เอาไฟล์ลงดาต้าเบส
### import pyrebase
import firebase_admin
from firebase_admin import firestore
from firebase_admin import storage
from firebase_admin import credentials

app = Flask(__name__)
# CORS(app)

@app.route('/reciever', methods=["GET"])
def importSong():
    data = "CRAVITY"   
    cred = credentials.Certificate("Bootsbase\\fidelio-a5340-firebase-adminsdk-l14hw-bbf8c866d3.json") # past key
    firebase_admin.initialize_app(cred)

    config = {
        "apiKey": "AIzaSyCrqd-SqgXVmyjCW2ExVCzJ-YH-E274bv8",
        "authDomain": "fidelio-a5340.firebaseapp.com",
        "databaseURL": "https://fidelio-a5340.firebaseio.com",
        "projectId": "fidelio-a5340",
        "storageBucket": "fidelio-a5340.appspot.com",
        "messagingSenderId": "166063536125",
        "appId": "1:166063536125:web:b439a508e7ef61481a0b94"
    }

    ### firebase = pyrebase.initialize_app(config)

    db = firestore.client()
    ### storage = firebase.storage()

    link ="https://youtu.be/W42btIESAJo" #ลิ้งค์ ที่จะได้มาจากหน้าเว็บ
    try:
        yt = YouTube(link)
    except:
        print("Error: Not able to find your link")

    print(yt.title) #ปริ้นมาให้ตัวเองดู


    time = str( datetime.timedelta( seconds = yt.length ) )
    M = time.split(':')
    minute = M[1]+'.'+M[2] #เวลาของเพลงเป็นนาที

    iTagHighestResaudio = yt.streams.filter(only_audio=True).get_audio_only().itag

    attenuate_db = 50
    accentuate_db = 50

    artist = 'KLEAR x TILLY BIRDS' #ชื่อศิลปิน
    name = data #ชื่อเพลงที่จะมาจาก หน้าเว็บที่กรอก ***********************************************************
    path_on_cloud = "songgithup/"+ name +".mp3"

    def bass_line_freq(track):
        sample_track = list(track)

        # c-value
        est_mean = np.mean(sample_track)
        
        # a-value
        est_std = 5 * np.std(sample_track) / (math.sqrt(2))

        bass_factor = int(round((est_std - est_mean) * 0.005))

        return bass_factor

    try:
        mumu = yt.streams.get_by_itag(iTagHighestResaudio).download(output_path='Bootsbase', filename=name+'.mp3') 
        #เอาเพลงลงเครื่องก่อน
    except:
        print("Error in downloading the audio")
    print("audio downloaded!")

    lst = glob.glob("Bootsbase\*.mp3")
    print(lst)

    for file in lst:  
        song = os.system(f"""ffmpeg -i {file} -acodec pcm_u8 -ar 22050 {file[:-4]}.wav""") #แปลงเป็น wav ลงเครื่อง
        os.remove(file) #เอาเพลง mp3 ในเครื่องออก

    sample =  AudioSegment.from_file('Bootsbase\\'+name+'.wav') #อ่านไฟล์ wav

    os.remove('Bootsbase\\'+name+'.wav') #เอาเพลง wav ในเครื่องออก

    filtered = sample.low_pass_filter(bass_line_freq(sample.get_array_of_samples())) #Bootsbass

    combined = (sample - attenuate_db).overlay(filtered + accentuate_db)
    path_local = combined.export(format="mp3") 
    ### storage.child(path_on_cloud).put(path_local) #export ขึ้น storage

    doc_ref = db.collection(u'Song Boots').document(name)
    doc_ref.set({
        u'Name': name,
        u'Artist': artist,
        u'path': path_on_cloud,
        u'time' : minute
    })

    print("Boots")
    return data

if __name__ == "__main__":
    app.run(debug=True)