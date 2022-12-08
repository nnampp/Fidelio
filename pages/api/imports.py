import datetime
import glob
import math
import os
# from flask_cors import CORS
from fileinput import filename
from html.entities import name2codepoint

import firebase_admin
import numpy as np
# เอาไฟล์ลงดาต้าเบส
import pyrebase
from firebase_admin import credentials, firestore, storage
from flask import Flask, jsonify, make_response, request
from flask_cors import CORS, cross_origin
from pydub import AudioSegment
from pytube import YouTube

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/reciever', methods=["GET","POST"])
@cross_origin()
def importSong():
    
    data = request.get_json()
    Link = data['Link']
    NameSong_unreplace = data['Songname'] 
    NameSong = NameSong_unreplace.replace(' ','_')
    ArtistName_unreplace = data['Artist']
    ArtistName = ArtistName_unreplace.replace(' ','_')

    try:
        app = firebase_admin.get_app()
    except ValueError as e:
        cred = credentials.Certificate("Bootsbase\\fidelio-a5340-firebase-adminsdk-l14hw-bbf8c866d3.json") # past key
        firebase_admin.initialize_app(cred, {
        'storageBucket': 'gs://fidelio-a5340.appspot.com'
        })

    config = {
        "apiKey": "AIzaSyAfkjuMhBt46PPW36XDmesayi-k5jQvVT4",
        "authDomain": "my-first-project-d7b77.firebaseapp.com",
        "databaseURL": "https://my-first-project-d7b77.firebaseio.com",
        "projectId": "my-first-project-d7b77",
        "storageBucket": "my-first-project-d7b77.appspot.com",
        "messagingSenderId": "766071481517",
        "appId": "1:766071481517:web:fe12e4076a9e6436091224",
        "measurementId": "G-17004Y30QN"
    }

    firebase = pyrebase.initialize_app(config)

    db = firestore.client()
    storage = firebase.storage()

    link = Link or "https://youtu.be/W42btIESAJo" #ลิ้งค์ ที่จะได้มาจากหน้าเว็บ
    try:
        yt = YouTube(link)
    except:
        print("Error: Not able to find your link")

    print(yt.title) #ปริ้นมาให้ตัวเองดู


    time = str( datetime.timedelta( seconds = yt.length ) )
    M = time.split(':')
    minute = M[1]+'.'+M[2] #เวลาของเพลงเป็นนาที

    iTagHighestResaudio = yt.streams.filter(only_audio=True).get_audio_only().itag

    attenuate_db = 0
    accentuate_db = 5

    artist = ArtistName or "artist_temp"
    name = NameSong or "name_temp"
    path_on_cloud = "song/"+artist+"_"+name+".mp3"

    def bass_line_freq(track):
        sample_track = list(track)

        # c-value
        est_mean = np.mean(sample_track)
        
        # a-value
        est_std = 5 * np.std(sample_track) / (math.sqrt(2))

        bass_factor = int(round((est_std - est_mean) * 0.005))

        return bass_factor

    try:
        mumu = yt.streams.get_by_itag(iTagHighestResaudio).download(output_path='Bootsbase', filename=artist+"_"+name+'.mp3') 
        #เอาเพลงลงเครื่องก่อน
    except:
        print("Error in downloading the audio")
    print("audio downloaded!")

    lst = glob.glob("Bootsbase\*.mp3")
    print(lst)

    for file in lst:  
        song = os.system(f"""ffmpeg -i {file} -acodec pcm_u8 -ar 22050 {file[:-4]}.wav""") #แปลงเป็น wav ลงเครื่อง
        os.remove(file) #เอาเพลง mp3 ในเครื่องออก

    sample =  AudioSegment.from_file('Bootsbase\\'+artist+"_"+name+'.wav') #อ่านไฟล์ wav *เเก้ตรงนี้ Path

    os.remove('Bootsbase\\'+artist+"_"+name+'.wav') #เอาเพลง wav ในเครื่องออก *เเก้ตรงนี้ Path

    filtered = sample.low_pass_filter(bass_line_freq(sample.get_array_of_samples())) #Bootsbass

    combined = (sample - attenuate_db).overlay(filtered + accentuate_db)
    path_local = combined.export(format="mp3") 
    storage.child(path_on_cloud).put(path_local) #export ขึ้น storage

    doc_ref = db.collection(u'Song').document(name)
    doc_ref.set({
        u'NameSong': NameSong_unreplace,
        u'ArtistName': ArtistName_unreplace,
        u'Path': path_on_cloud,
        u'Time' : minute
    })

    print("Boots")

    return make_response(jsonify(message = "Successful !!!"), 200)

if __name__ == "__main__":
    app.run(host='localhost', port=3000,debug=True)