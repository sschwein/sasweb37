FROM python:3.7-alpine
ADD . /code
WORKDIR /code
RUN pip install -r requirements.txt
CMD ["flake8"]
CMD ["pytest", "--tb=short"]