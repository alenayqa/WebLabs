from fastapi import APIRouter

from .library.api import router as library_router


router = APIRouter()

router.include_router(library_router, prefix="/v1")