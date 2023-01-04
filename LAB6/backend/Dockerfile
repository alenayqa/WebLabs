FROM python:latest
WORKDIR /app

# install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN apt update -y
RUN apt install iproute2 -y

COPY . .

# RUN alembic revision --autogenerate -m "Init"
# RUN alembic upgrade head

CMD ["./run.sh"]
