FROM python:3.7-alpine
ADD . /code
WORKDIR /code
RUN pip install -r requirements.txt
RUN ["flake8"]
CMD ["pytest", "--tb=short"]