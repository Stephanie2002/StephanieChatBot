import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from groq import Groq

# Cargar variables de entorno
load_dotenv()

app = Flask(__name__)
# Permitir peticiones desde el frontend (CORS)
CORS(app)

# Obtener API key y configurar cliente Groq
GROQ_API_KEY = os.environ.get("GROQ_API_KEY")

if not GROQ_API_KEY:
    raise ValueError("GROQ_API_KEY no se encuentra en el archivo .env")

client = Groq(api_key=GROQ_API_KEY)

# Leer archivo de información para usar de contexto
# El archivo de información está en el directorio padre de la carpeta 'api'
INFO_FILE_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), "información.txt")
try:
    with open(INFO_FILE_PATH, "r", encoding="utf-8") as file:
        informacion_texto = file.read()
except FileNotFoundError:
    informacion_texto = "Información no encontrada."

SYSTEM_PROMPT = f"""
Eres "Bot Lector", un asistente bibliotecario amigable para la página web "Reino de Fantasía".
Tu trabajo es responder a las preguntas de los usuarios basándote ÚNICAMENTE en la siguiente información:

{informacion_texto}

Reglas:
1. Responde de forma amable, entusiasta y útil como si fueras un bibliotecario real de fantasía.
2. Si te preguntan algo que NO está en la información provista, responde amablemente que no tienes esa información y sugiéreles preguntar sobre los libros, géneros o autores disponibles.
3. Sé conciso pero claro en tus respuestas, manteniendo un tono mágico y literario.
"""

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message', '')
        
        if not user_message:
            return jsonify({"error": "Mensaje vacío"}), 400

        # Historial de mensajes (si se quiere mantener contexto conversacional se pasaría desde el frontend, aquí es simple por cada petición)
        messages = [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_message}
        ]

        # Llamar a la API de Groq
        chat_completion = client.chat.completions.create(
            messages=messages,
            model="llama-3.3-70b-versatile", # O el modelo que prefieras usar de Groq
            temperature=0.7,
            max_tokens=500,
        )
        
        bot_response = chat_completion.choices[0].message.content

        return jsonify({"response": bot_response})

    except Exception as e:
        error_msg = str(e)
        return jsonify({"error": error_msg}), 500

if __name__ == '__main__':
    # Ejecutar en el puerto 5000 por defecto
    app.run(debug=True, port=5000)
