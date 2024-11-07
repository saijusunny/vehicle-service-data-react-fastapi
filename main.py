# main.py
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS so React can access FastAPI server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Change to your React app's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define a data model for requests
class Item(BaseModel):
    name: str
    description: str

# Define a sample route
@app.get("/items/")
async def read_items():
    return [{"name": "Item 1", "description": "A sample item"}, {"name": "Item 2", "description": "Another item"}]

# Define a route to accept POST requests
@app.post("/items/")
async def create_item(item: Item):
    return {"message": f"Item '{item.name}' created", "item": item}
