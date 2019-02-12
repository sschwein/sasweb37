# from app import app
from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)

bp = Blueprint('blog', __name__)

@bp.route("/")
def home():
    # app.logger.info("test log")
    return "Hello, World!"

@bp.route("/test")
def test():
    # app.logger.info("test root log")
    return "Hello, World test!"