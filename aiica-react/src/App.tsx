import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * Componente principal de la aplicación
 * Muestra una página de bienvenida con Vite + React + TypeScript + Tailwind CSS
 */
function App() {
  // Estado para el contador
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      {/* Contenedor principal */}
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        {/* Header con logos */}
        <div className="flex justify-center space-x-8 mb-8">
          <a 
            href="https://vite.dev" 
            target="_blank" 
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
          </a>
          <a 
            href="https://react.dev" 
            target="_blank"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <img src={reactLogo} className="h-16 w-16 animate-spin" alt="React logo" />
          </a>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Vite + React + TypeScript + Tailwind
        </h1>

        {/* Tarjeta del contador */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg 
                     transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            count is {count}
          </button>
          <p className="text-gray-600 text-center mt-4">
            Edit <code className="bg-gray-200 px-2 py-1 rounded text-sm">src/App.tsx</code> and save to test HMR
          </p>
        </div>

        {/* Mensaje de éxito de Tailwind */}
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-2xl mr-2">✅</span>
            <div>
              <p className="font-semibold">¡Tailwind CSS está funcionando perfectamente!</p>
              <p className="text-sm">Proyecto configurado con Vite, React, TypeScript y Tailwind CSS v3</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-center text-sm">
          Click en los logos de Vite y React para aprender más
        </p>
      </div>
    </div>
  )
}

export default App
