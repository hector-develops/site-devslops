from flask import Blueprint, render_template, request, jsonify
from flask_mail import Mail, Message
from config import config, DevelopmentConfig as datos
mail = Mail()
devslops_blueprint = Blueprint('/', __name__)


@devslops_blueprint.route('/', methods=['GET', 'POST'])
def principal_devslops():
    if request.method == "POST":
        nombre = request.form['nombre']
        email = request.form['email']
        msg = Message('Devslops Contacto!!', sender= datos.MAIL_USERNAME, recipients=[email])
        msg.html = render_template('email.html', nombre = nombre)
        mail.send(msg)
    return render_template('main.html')

