from fastapi import FastAPI
app=FastAPI()

@app.get("/")
def home():
    return {"app":"MPK Rezerwa"}

@app.get("/bus/{line}/{brigade}")
def bus(line:str,brigade:str):
    return {
        "line":line,
        "brigade":brigade,
        "vehicle":None,
        "gps":None,
        "status":"waiting for ZTP feed"
    }
