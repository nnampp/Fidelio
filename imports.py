from flask import Flask,request

app = Flask(__name__)

@app.route('/', methods=["POST","GET"], strict_slashes=False)
def importSong():   
    Link = request.json['Link']
    SongName = request.json['SongName']
    Artist = request.json['Artist']
    return Link+"-"+SongName+"-"+Artist

if __name__ == "__main__":
    app.run(debug=True)