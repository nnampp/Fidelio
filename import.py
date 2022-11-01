from flask import Flask

app = Flask(__name__)

@app.route('/imports', methods=["POST"], strict_slashes=False)
def importSong():   
    return {
        "Link": "blablaLink",
        "SongName": "songnamevoyyy",
        "Aritist": "wowArtist",
        "Role": "Admin"
    }

if __name__ == "__main__":
    app.run()