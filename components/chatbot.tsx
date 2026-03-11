"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; sender: "usuario" | "bot" | "carga" }[]>([
    { text: "¡Hola! Soy el robot de la biblioteca. ¿Qué libro estás buscando hoy?", sender: "bot" }
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll al final
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const toggleChat = () => setIsOpen(!isOpen)

  const enviarMensaje = async () => {
    const texto = inputValue.trim()
    if (!texto) return

    // Agrega el mensaje del usuario y un mensaje de carga inicial
    setMessages((prev) => [
      ...prev,
      { text: texto, sender: "usuario" },
      { text: "Escribiendo...", sender: "carga" }
    ])
    setInputValue("")

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: texto })
      })

      const data = await response.json()

      // Reemplaza el mensaje de carga con la respuesta real
      setMessages((prev) => {
        const withoutCarga = prev.filter((msg) => msg.sender !== "carga")
        if (response.ok) {
          return [...withoutCarga, { text: data.response, sender: "bot" }]
        } else {
          return [...withoutCarga, { text: "Lo siento, tuve un problema mágico intentando encontrar el libro. (Error de API)", sender: "bot" }]
        }
      })
    } catch (error) {
      console.error("Error connecting to API:", error)
      setMessages((prev) => {
        const withoutCarga = prev.filter((msg) => msg.sender !== "carga")
        return [...withoutCarga, { text: "Lo siento, parece que mi conexión mágica (servidor) está caída en este momento.", sender: "bot" }]
      })
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      enviarMensaje()
    }
  }

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
      {isOpen && (
        <div style={{
          width: "320px",
          height: "450px",
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          marginBottom: "15px",
          overflow: "hidden",
          border: "1px solid #eee",
        }}>
          {/* Cabecera */}
          <div style={{
            backgroundColor: "rgba(15, 15, 20, 0.9)",
            color: "white",
            padding: "15px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <span style={{ color: "#d4a853" }}>🤖 Bot Lector</span>
            <button onClick={toggleChat} style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "16px" }}>✕</button>
          </div>

          {/* Área de mensajes */}
          <div style={{
            flexGrow: 1,
            padding: "15px",
            overflowY: "auto",
            backgroundColor: "#f9f9f9",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
          }}>
            {messages.map((m, index) => (
              <div
                key={index}
                style={{
                  maxWidth: "80%",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  fontSize: "0.9em",
                  lineHeight: 1.4,
                  alignSelf: m.sender === "usuario" ? "flex-end" : "flex-start",
                  backgroundColor: m.sender === "usuario" ? "#4a90e2" : "#e8e8e8",
                  color: m.sender === "usuario" ? "white" : "#333",
                  borderBottomRightRadius: m.sender === "usuario" ? "2px" : "12px",
                  borderBottomLeftRadius: m.sender === "usuario" ? "12px" : "2px",
                  fontStyle: m.sender === "carga" ? "italic" : "normal"
                }}
                dangerouslySetInnerHTML={{ __html: m.text.replace(/\n/g, "<br>") }}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input y Botón */}
          <div style={{
            display: "flex",
            padding: "10px",
            borderTop: "1px solid #eee",
            backgroundColor: "white"
          }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Escribe algo..."
              autoComplete="off"
              style={{
                flexGrow: 1,
                border: "1px solid #ddd",
                padding: "8px",
                borderRadius: "20px",
                outline: "none",
                paddingLeft: "15px",
                color: "black"
              }}
            />
            <button
              onClick={enviarMensaje}
              style={{
                backgroundColor: "rgba(15, 15, 20, 0.9)",
                color: "white",
                border: "none",
                marginLeft: "8px",
                padding: "8px 15px",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Ir
            </button>
          </div>
        </div>
      )}

      {/* Botón con la imagen del robot */}
      <button
        onClick={toggleChat}
        style={{
          width: "70px",
          height: "70px",
          backgroundColor: "#fff",
          border: "2px solid #e0e0e0",
          cursor: "pointer",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          padding: 0,
          transition: "transform 0.2s"
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <Image src="/chat_bot_libros.jpg" alt="Icono Chatbot" width={70} height={70} style={{ objectFit: "cover" }} />
      </button>
    </div>
  )
}
