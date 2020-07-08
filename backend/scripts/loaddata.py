from pathlib import Path
from gui.models import Service

services = Service.objects.all()

for service in services:
    p = Path(f"/services_files/service_{service.id}.txt")
    with p.open() as f: 
        service.description = f.read()
        service.save()
