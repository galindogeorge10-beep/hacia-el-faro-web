# Hacia el Faro - Landing Page

## Descripción del Proyecto

Landing page cinematográfica y moderna para la banda musical "Hacia el Faro", diseñada con una estética oscura de alto contraste inspirada en sitios web profesionales de bandas musicales.

## Características Implementadas

### ✅ Secciones Completadas

1. **Header Minimalista**
   - Logo alineado a la izquierda
   - Menú de navegación sticky con efecto blur
   - Responsive con menú hamburguesa
   - Animaciones suaves en enlaces

2. **Hero Section Cinematográfica**
   - Imagen de fondo a pantalla completa
   - Overlay oscuro con degradado
   - Logo de la banda con animación
   - Frase principal: "Queremos ser la banda sonora de tu vida"
   - Botones de acción con efectos hover
   - Indicador de scroll animado

3. **Próximo Lanzamiento**
   - Sección destacada con fondo degradado
   - Título "ENEMIGO" en tipografía impactante
   - Contador regresivo en tiempo real
   - Cuenta regresiva hasta el 31 de marzo a las 6:00 PM

4. **Sección Nosotros**
   - Fondo de imagen con overlay oscuro
   - Texto en dos columnas
   - Tipografía Poppins jerárquica
   - Contenido sobre la historia de la banda

5. **Eventos**
   - Diseño de cards moderno
   - Cada evento muestra fecha, ciudad y lugar
   - Botones "Más información"
   - Formato de fecha visual atractivo

6. **Galería**
   - Grid visual con efectos hover
   - Zoom en imágenes al pasar el mouse
   - Lightbox para ver imágenes en grande
   - Animaciones suaves

7. **Discografía**
   - Cards de álbum con portadas
   - Información de título y año
   - Botones para plataformas de streaming
   - Efectos hover con escala

8. **Tienda**
   - Grid de productos
   - Imágenes con efecto zoom
   - Precios destacados
   - Botones de compra

9. **Contacto**
   - Formulario funcional
   - Campos: Nombre, Email, Mensaje
   - Redes sociales integradas
   - Diseño de dos columnas

10. **Footer Minimalista**
    - Logo de la banda
    - Enlaces rápidos
    - Redes sociales
    - Copyright

### ✅ Características Técnicas

- **Tipografía**: Poppins (300, 400, 600, 700)
- **Paleta de colores**: Fondo oscuro (#0a0a0a), acento rojo (#dc3545)
- **Animaciones**: Scroll-triggered, hover effects, smooth transitions
- **Responsive**: Mobile-first, tablet y desktop
- **JavaScript**: Contador regresivo, navegación, galería lightbox

## Tecnologías Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Animaciones)
- JavaScript (ES6+)
- Font Awesome para íconos
- Google Fonts (Poppins)

## Estructura del Proyecto

```
/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos principales
├── js/
│   └── main.js         # Funcionalidades interactivas
└── images/
    ├── logo-banda.png
    ├── hero-bg.jpg
    ├── nosotros-bg.jpg
    ├── galeria1.jpg
    ├── galeria2.jpg
    ├── album1.jpg
    └── album2.jpg
```

## Características No Implementadas

- Integración con APIs de streaming (Spotify, YouTube, Apple Music)
- Sistema de pago real para la tienda
- Base de datos para eventos dinámicos
- Sistema de administración de contenido
- Newsletter/suscripción

## Recomendaciones para Desarrollo Futuro

1. **Integración con Plataformas**: Conectar botones de streaming con APIs reales
2. **E-commerce**: Implementar pasarela de pago para la tienda
3. **CMS**: Desarrollar sistema para actualizar eventos y contenido
4. **Newsletter**: Agregar formulario de suscripción con email marketing
5. **SEO**: Optimizar para motores de búsqueda
6. **Performance**: Optimizar imágenes y cargar con lazy loading

## URLs de la Aplicación

- **Página principal**: `/index.html`
- **Secciones internas**: `#nosotros`, `#eventos`, `#galeria`, `#discografia`, `#tienda`, `#contacto`

## Modelo de Datos

El sitio utiliza almacenamiento estático con archivos JSON para:
- Eventos musicales
- Discografía
- Productos de tienda
- Imágenes de galería

## Instrucciones de Despliegue

1. Subir todos los archivos a un servidor web
2. Asegurarse de que las rutas de imágenes sean correctas
3. Verificar que el servidor soporte HTTPS para todas las funcionalidades
4. El sitio es completamente estático, no requiere backend

## Notas de Desarrollo

- El contador regresivo está configurado para el 31 de marzo de 2024 a las 6:00 PM
- Las imágenes están optimizadas para web
- El diseño es mobile-first y completamente responsive
- Se incluyen animaciones suaves para mejorar la experiencia de usuario