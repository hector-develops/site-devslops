class Config:
    pass    


class DevelopmentConfig(Config):
    DEBUG = True
    MAIL_SERVER ='smtp.gmail.com'
    MAIL_PORT= 587
    MAIL_USERNAME='devslops.leon@gmail.com' 
    MAIL_PASSWORD='HL20219503*L'
    MAIL_USE_TLS= True
    MAIL_USE_SSL= False 
config = {
    'development': DevelopmentConfig,
}
