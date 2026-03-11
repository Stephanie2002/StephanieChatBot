import requests

try:
    response = requests.post("http://127.0.0.1:5000/api/chat", json={"message": "Hola, ¿de qué trata el libro El Nombre del Viento?"})
    print(response.status_code)
    print(response.text)
except Exception as e:
    print("Error:", e)
