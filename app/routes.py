# from app import app
from flask import Blueprint, render_template

bp = Blueprint("blog", __name__)


@bp.route("/")
def home():
    # app.logger.info("test log")
    return render_template("home.html")


@bp.route("/test")
def test():
    # app.logger.info("test root log")
    return "Hello, World test!"
