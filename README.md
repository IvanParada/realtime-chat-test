# Realtime Chat - Multi-Framework Project

Este proyecto es una plataforma de mensajería en tiempo real que demuestra la interoperabilidad entre **React** y **Vue 3** compartiendo un único servidor centralizado. Desarrollado como parte de una evaluación técnica, el proyecto prioriza la modularidad, el manejo eficiente de sockets y la persistencia de datos.

---

## 🚀 Instrucciones para Ejecutar el Proyecto

### 1. Servidor Backend
```bash
cd backend
npm install
node server.js
```
*Puerto por defecto: `3001`.*

### 2. Cliente React
```bash
cd react-chat
npm install
npm run dev
```

### 3. Cliente Vue 3
```bash
cd vue-chat
npm install
npm run dev
```

---

## 🏗️ Arquitectura Utilizada

Se ha implementado una **Arquitectura por Capas** adaptada a frameworks modernos, con el objetivo de cumplir con el principio de responsabilidad única (Single Responsibility Principle):

1.  **Capa de Servicios**: Localizada en `services/socket.js`. Actúa como un puente entre la aplicación y la librería `socket.io-client`. El objetivo es aislar la configuración de red para que el resto de la app sea "agnóstica" a la implementación del transporte.
2.  **Capa de Dominio y Estado (Stores)**: 
    *   Utiliza **Zustand** (React) y **Pinia** (Vue). 
    *   Centraliza la inicialización del socket y los listeners. Esto garantiza que solo exista **una conexión activa por cliente** (Singleton) y evita la duplicación de listeners al montar/desmontar componentes.
3.  **Capa de Presentación (UI)**: Componentes funcionales y reactivos que consumen el estado global. Se dividió la UI en componentes atómicos (`StatusIndicator`, `MessageList`, `MessageInput`) para optimizar los re-renders.

---

## 🛠️ Decisiones Técnicas Relevantes

Más allá de los requerimientos básicos, se tomaron decisiones específicas para optimizar la robustez del sistema:

*   **Zustand sobre Redux/Context (React)**: Se eligió Zustand por su API basada en hooks que reduce radicalmente el *boilerplate* en comparación con Redux Toolkit. Permite acceder y modificar el estado fuera de los componentes (ideal para los eventos del socket), ofreciendo mayor rendimiento que Context API al evitar renders innecesarios en toda la jerarquía de componentes.
*   **Gestión Centralizada de Listeners**: En lugar de configurar los listeners (`socket.on`) dentro de los componentes, se configuraron dentro del Store. Esto soluciona la "Red Flag" de listeners duplicados y garantiza que los mensajes se procesen incluso si el componente de la lista de mensajes no está montado en ese momento.
*   **Limpieza de Ciclo de Vida**: Se implementaron métodos `cleanup` en los stores que invocan `socket.removeAllListeners()`. Esto asegura una desconexión limpia y evita fugas de memoria, cumpliendo con los estándares de buenas prácticas de WebSockets.
*   **Estrategia de Persistencia Transversal**: Se utilizaron middlewares oficiales (`persist` en Zustand y `pinia-plugin-persistedstate`) para garantizar que la sesión (usuario y mensajes) sea idéntica en ambos frameworks. Se optó por persistencia selectiva (partialize) para no guardar estados efímeros como `connected`.
*   **Identificación Dinámica de Usuario**: Se implementó una lógica que genera automáticamente un nombre de usuario aleatorio (`User_XXXX`) al primer inicio. Para mejorar la UX, este nombre es **completamente editable** por el usuario desde la interfaz, persistiendo el cambio automáticamente para futuras sesiones.
*   **Tailwind CSS + DaisyUI**: Se utilizó este stack para entregar una interfaz pulida y profesional en el tiempo estipulado, permitiendo centrar el esfuerzo en la arquitectura del código y la lógica de los sockets en lugar de escribir CSS manual.
*   **Auto-Scroll Proactivo**: Se implementó una lógica de scroll mediante `useRef/useEffect` (React) y `watch/nextTick` (Vue) para asegurar que el último mensaje sea siempre visible, mejorando la usabilidad general (Bonus).

---

## 📋 Características Implementadas

*   ✅ **Multi-Framework**: Comunicación fluida entre clientes React y Vue.
*   ✅ **Estado de Conexión**: Indicadores visuales reactivos (🟢/🔴).
*   ✅ **Persistencia Local**: Recuperación de historial y nombre de usuario tras recargar.
*   ✅ **Optimización de Sockets**: Manejo correcto de reconexión y limpieza de eventos.
*   ✅ **UX**: Avatares generados dinámicamente y scroll automático.
