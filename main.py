from flask import Flask
from config import  config, DevelopmentConfig
from vistas.empresa import devslops_blueprint
from flask_mail import Mail

mail = Mail()
def create_app(enviroment):
    app = Flask(__name__)
    app.config.from_object(enviroment)
  
    return app
enviroment = config['development']
app = create_app(enviroment)
app.register_blueprint(devslops_blueprint, url_prefix="/")

if __name__ == "__main__":
    mail.init_app(app)
    app.run(port=5000, debug=True)




