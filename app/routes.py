# from app import app
from flask import Blueprint

bp = Blueprint("blog", __name__)


@bp.route("/")
def home():
    # app.logger.info("test log")
    return "Hello, World Cloud Builder!"


@bp.route("/test")
def test():
    # app.logger.info("test root log")
    return "Hello, World test!"
