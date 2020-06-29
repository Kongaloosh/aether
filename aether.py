from flask import Flask, request, session, g, redirect, url_for, abort, render_template, flash, Response, jsonify
import sqlite3
import json
from configparser import ConfigParser
from random import shuffle
from os import listdir
from os.path import isfile, join
import os

__author__ = 'kongaloosh'

# create our little application :)
app = Flask(__name__)
app.config.from_object(__name__)
app.config['STATIC_FOLDER'] = os.getcwd()
cfg = None

config = ConfigParser()
config.read('config.ini')

FILEPATH = config.get('Global', 'file_path')

@app.route('/')
def show_entries():
    """The index page; what is presented when the user lands at the site. This is where the dashboard will be setup."""
    if request.headers.get('Accept') == "application/json":  # if someone else is consuming
        photos = []
        for f in os.listdir(FILEPATH):
            photos.append("images/" +f)
        shuffle(photos)
        photos = photos[:20]
        return jsonify(photos)
    else:
        return render_template('index.html')


if __name__ == "__main__":
    # if the database does not exist, initialize it
    app.run()
