from frontend.main import create_app
from frontend.config import DevConfig, ProdConfig

# if __name__ == '__main__':
app = create_app(ProdConfig)
    # app.run()