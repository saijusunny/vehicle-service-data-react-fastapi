from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
from models import VehicleDets, get_db
from pydantic import BaseModel

# Initialize FastAPI
app = FastAPI()

# Define a Pydantic model for VehicleDet response
class VehicleDetResponse(BaseModel):
   
    year: str
    

    class Config:
        orm_mode = True  # Enable ORM mode to read data as SQLAlchemy objects

# Endpoint to get all VehicleDet entries
@app.get("/vehicles/", response_model=List[VehicleDetResponse])
async def get_vehicles(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(VehicleDets))
    vehicles = result.scalars().all()
    return vehicles
