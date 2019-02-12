from app import flask_app as app


@app.route("/")
def home():
    app.logger.info("test log")
    return "Hello, Wasdforld!"

@app.route("/test")
def test():
    app.logger.info("test root log")
    return "Hello, World 2!"