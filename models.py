from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

# SQLAlchemy Base and Session
Base = declarative_base()

# Define a sample table model
class VehicleDets(Base):
    __tablename__ = "VehicleDets"
    id = Column(Integer, primary_key=True)
    year = Column(String, index=True)
    make = Column(String, index=True)
    model = Column(String, index=True)
    trims = Column(String, index=True)
    body  = Column(String, index=True)
    transmission  = Column(String, index=True)
    vin  = Column(String, index=True)
    states  = Column(String, index=True)
    conditions = Column(Integer)
    odometer = Column(Integer)
    color = Column(String, index=True)
    interior = Column(String, index=True)
    seller = Column(String, index=True)
    mmr = Column(Integer)
    sellingprice = Column(Integer)
    saledate = Column(String, index=True)
    
# Database URL
DATABASE_URL = "postgresql+asyncpg://postgres:421765@localhost/vsds"

# Create an async engine and session
async_engine = create_async_engine(DATABASE_URL, echo=True)
AsyncSessionLocal = sessionmaker(bind=async_engine, class_=AsyncSession, expire_on_commit=False)

# Dependency to get the database session
async def get_db():
    async with AsyncSessionLocal() as session:
        yield session
