from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def data():
    return {"data": "some data"}