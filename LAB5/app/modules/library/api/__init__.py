from fastapi import APIRouter

from .v1.library import router as library_router


router = APIRouter()

router.include_router(library_router, prefix="/library")