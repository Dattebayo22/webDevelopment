from app import app
from flask import render_template,request,redirect,url_for
from markupsafe import escape

users_data = [
    {
        'username': 'john_doe',
        'password': 'secure_password_123'
    },
    {
        'username': 'jane_smith',
        'password': 'strong_password_456'
    },
    {
        'username': 'alex_dev',
        'password': 'safe_password_789'
    },
    # Add more users as needed
]

@app.route('/')
def index():
    return render_template('form/signup.html')

@app.route('/check',methods=['POST'])
def check():
    username = request.form['username']
    password = request.form['password']
    for user in users_data:
        if user['username'] == username:
            return redirect('/')
    users_data.append({'username': username, 'password': password})
    return redirect(url_for('display_users'))
@app.route('/display_users')
def display_users():
    return render_template('display_users.html', users=users_data)

@app.route('/jinja')
def jinja():
    name = "Anubhav"
    age = 30
    language = ["English", "Hindi", "Japanese"]
    dost = {
        "name": "Prakhar",
        "age": 24,
        "College": "NIT Jamshedpur"
    }
    colors = ("red", "green", "yellow")
    class student:
        def __init__(self,name,age):
            self.name = name
            self.age = age
        def display(self):
            print("Student: " + self.name + "Age:" + str(self.age))
    mayank = student("Mayank",50)
    return render_template('jinja.html',student=student,name=name,age=age,language=language,dost=dost,mayank=mayank,
                           colors=colors)
