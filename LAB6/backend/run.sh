#!/bin/bash

alembic revision --autogenerate -m "Init"
alembic upgrade head

python3 main.py