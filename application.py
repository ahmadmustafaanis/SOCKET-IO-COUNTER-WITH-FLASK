import os
import requests

from flask import Flask , render_template , request, jsonify

from flask_socketio import SocketIO , emit

app=FLask(__name__)

app.config["SECRET_KEY"]=os.getenv("SECRET_KEY")
soceketio=SocketIO(app)

@app.route("/")
def index():
    return render_template("index.html")

@socket.on("submit vote")
def vote("data"):
    selection=data["selection"]
    emit("announce vote" , {"selection":selection},broadcast=True)
