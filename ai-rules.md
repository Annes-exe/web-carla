# Reglas de Desarrollo - Proyecto Web Psicóloga Carla

## 1. Contexto y Perfil del Proyecto
- **Objetivo:** Landing page profesional y acogedora para la psicóloga Carla.
- **Ubicación del profesional:** Maracay, Aragua, Venezuela.
- **Público objetivo:** Personas en busca de bienestar y salud mental.
- **Vibra:** Profesional, segura y cálida. Transmitir confianza y calma.

## 2. Stack Tecnológico
- **Framework:** Next.js 15 (App Router).
- **Lenguaje:** TypeScript (Tipado estricto, sin `any`).
- **Estilos:** Tailwind CSS.
  - **Paleta:** Tonos crema (fondo), verde salvia (acentos), gris oscuro suave (texto).
- **Animaciones:** Framer Motion (siempre sutiles y fluidas).
- **Gestión de Paquetes:** npm.

## 3. Estándares de Codificación (Prioridad Máxima)
- **Arquitectura Modular (Atomic Design):**
  - `components/ui`: Componentes atómicos reutilizables (Botones, Inputs, Cards).
  - `components/sections`: Secciones completas de la página (Hero, About, ServicesGrid).
- **Clean Code:** Funciones pequeñas, nombres de variables descriptivos en inglés, principio DRY.
- **RSC (React Server Components):** Usar Server Components por defecto para velocidad. Solo usar `'use client'` en hojas (leaves) del árbol de componentes que requieran interactividad (hooks, eventos).
- **Imágenes:** Usar **exclusivamente** el componente `<Image />` de `next/image`.
  - Configurar dominios externos (ej. Unsplash) en `next.config.ts`.

## 4. Diseño y Experiencia de Usuario (UX/UI)
- **Formas:** Uso intensivo de bordes redondeados (`rounded-3xl`) para suavizar la interfaz.
- **Espaciado:** Generoso espacio en blanco (padding/margin) para evitar fatiga visual.
- **Tipografía:**
  - **Títulos:** Fuente Serif elegante (ej. Playfair Display o Lora) para autoridad.
  - **Cuerpo:** Fuente Sans-serif limpia (ej. Inter o Lato) para legibilidad.
- **Interacción:** Animaciones de entrada tipo "Fade In Up" al hacer scroll.

## 5. Reglas de SEO y Optimización para IA (AEO)
- **SEO Local:** Optimizar todos los textos y metadatos para palabras clave: "Psicóloga en Maracay", "Terapia en Aragua", "Salud Mental".
- **Estructura Semántica:** Uso estricto de etiquetas HTML5 (`<main>`, `<section>`, `<article>`, `<h1>`-`<h6>`) para jerarquía clara.
- **Datos Estructurados (JSON-LD):** Implementar script de Schema.org tipo `Psychologist` o `MedicalBusiness` en el layout principal.
- **Accesibilidad:** Mantener puntuación Lighthouse > 90. Todas las imágenes deben tener etiqueta `alt` descriptiva.
- **Metadatos:** Usar la API de Metadata de Next.js para títulos y descripciones dinámicas.

## 6. Funcionalidades Específicas
- **WhatsApp Link:** El formato del enlace debe ser:
  `https://wa.me/TU_NUMERO?text=MENSAJE_CODIFICADO`
  *Regla:* Asegúrate de usar `encodeURIComponent` o reemplazar espacios con `%20`.

## 7. Protocolo de Verificación y Calidad
1. **Linting:** Antes de finalizar cualquier tarea, ejecuta `npm run lint` para asegurar cero errores de TypeScript.
2. **Visual Check:** Usa el navegador interno para verificar la responsividad (Mobile First).
3. **Consola Limpia:** Verifica que no existan errores (rojos) ni advertencias de hidratación (amarillas) en la consola del navegador.