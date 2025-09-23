# ❤️ Devtalles-Blog ❤️
<img width="1896" height="967" alt="image" src="https://github.com/user-attachments/assets/ace3e3b9-98ab-4850-8a59-450e1854c091" />


# 🚀 Funcionamiento general del blog

El blog DevTallesBlog está diseñado para ser una plataforma completa de publicación, consulta y administración de contenido sobre desarrollo de software y tecnología. A continuación se describe el flujo principal para el usuario:

1. 🏠 **Página principal:**
	- Al ingresar, se muestra un resumen de las últimas publicaciones, noticias, equipo y secciones destacadas.

2. 🧭 **Navegación:**
	- El usuario puede navegar entre las secciones: Blogs, FAQs, About, Contacto, Login y Registro.

3. 📖 **Lectura de blogs:**
	- Se pueden consultar artículos publicados, ver detalles, comentarios y compartir contenido.

4. 🔐 **Registro e inicio de sesión:**
	- El usuario puede crear una cuenta o iniciar sesión usando email, Discord u otros proveedores.

5. ✍️ **Creación y edición de blogs:**
	- Los usuarios autenticados pueden crear nuevos artículos, editarlos y gestionarlos desde el panel correspondiente.

6. 🛠️ **Panel de administración:**
	- Los administradores pueden gestionar usuarios, publicaciones y moderar comentarios.

7. 🤝 **Contacto y comunidad:**
	- Se puede contactar al autor, enviar sugerencias y participar en la comunidad.

8. 📱 **Responsive y accesible:**
	- El blog está optimizado para dispositivos móviles y accesibilidad.

9. ✨ **Animaciones y experiencia:**
	- El blog utiliza animaciones y transiciones para mejorar la experiencia de usuario.

10. 🔗 **Integración con backend:**
	- Todas las acciones (login, registro, publicación, comentarios) se comunican con el backend para persistencia y seguridad.
## 🔑 Autenticación con Discord

El blog permite autenticación de usuarios mediante Discord, además de otros métodos tradicionales (email, etc.).

### ⚙️ ¿Cómo funciona?
- El usuario puede iniciar sesión usando su cuenta de Discord.
- Al hacer clic en el botón de Discord, se redirige al flujo de OAuth de Discord.
- Una vez autenticado, el backend recibe el token y los datos del usuario para crear o vincular la cuenta.

### 🛠️ Configuración
Para habilitar la autenticación con Discord, debes configurar las credenciales de la aplicación en el panel de desarrolladores de Discord:

1. Ve a [Discord Developer Portal](https://discord.com/developers/applications) y crea una nueva aplicación.
2. En la sección "OAuth2", agrega la URL de callback de tu frontend, por ejemplo:
	- `http://localhost:3000/api/auth/callback/discord`
3. Copia el `Client ID` y el `Client Secret` y agrégalos a tu archivo `.env.local`:
	```env
	DISCORD_CLIENT_ID=tu_client_id
	DISCORD_CLIENT_SECRET=tu_client_secret
	```
4. Asegúrate de que NextAuth esté configurado para usar el proveedor Discord en el backend.

Con esto, los usuarios podrán autenticarse usando Discord y acceder a las funcionalidades del blog.
## 🌐 Conexión con el backend

La aplicación se conecta a un backend (API) para obtener y enviar datos, como blogs, usuarios y comentarios. Para que la conexión funcione correctamente, debes configurar las variables de entorno en el archivo `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://tu-backend-url
ADDRESS_SERVER=http://tu-backend-url
AUTH_SECRET=tu_clave_secreta
```

Donde `tu-backend-url` debe ser la URL donde está corriendo tu backend (por ejemplo, `http://localhost:3001` o la IP pública de tu servidor).

El frontend utiliza estas variables para hacer peticiones HTTP (fetch, axios, etc.) a los endpoints del backend. Si el backend requiere autenticación, asegúrate de que el token o credenciales estén correctamente configurados.

# 📝 Frontend de DevTallesBlog  

## 🧩 ¿Cómo funciona este blog?

Este proyecto es un blog moderno construido con Next.js, TypeScript y Tailwind CSS. Permite publicar, leer y administrar artículos sobre desarrollo de software, tecnología y comunidad.

### 🗂️ Estructura principal
- **Frontend:** Next.js + TypeScript + Tailwind CSS.
- **src/app:** Páginas principales del blog (Home, Blogs, About, Contact, FAQs, Auth, Admin).
- **src/components:** Componentes reutilizables (Navbar, formularios, UI, etc).
- **src/lib, src/interfaces, src/types:** Utilidades, modelos y tipos para la lógica y datos.
- **public:** Imágenes y archivos estáticos.

### ⚡ Funcionamiento


---

# �️ Estructura del proyecto

La estructura de carpetas y archivos está organizada para facilitar el desarrollo y la escalabilidad:

```text
📦 Devtalles_Blog_Qwerty_Team_Frontend
 ┣ 📁 public/           # Imágenes y archivos estáticos
 ┣ 📁 src/
 ┃ ┣ 📁 app/           # Páginas principales (Home, Blogs, Auth, Admin, etc.)
 ┃ ┣ 📁 components/    # Componentes reutilizables (Navbar, UI, etc.)
 ┃ ┣ 📁 interfaces/    # Modelos y tipos de datos
 ┃ ┣ 📁 lib/           # Utilidades y lógica compartida
 ┃ ┣ 📁 server/        # Lógica del servidor y acciones
 ┃ ┣ 📁 store/         # Manejo de estado global
 ┃ ┣ 📁 types/         # Tipos y validaciones
 ┃ ┣ 📁 utils/         # Funciones utilitarias
 ┣ .env.local          # Variables de entorno
 ┣ package.json        # Dependencias y scripts
 ┣ tailwind.config.ts  # Configuración de Tailwind CSS
 ┣ tsconfig.json       # Configuración de TypeScript
 ┣ README.md           # Documentación principal
```

## 📦 Dependencias principales instaladas

Este proyecto utiliza las siguientes librerías y herramientas:

- **Next.js**: 🚀 Framework React para SSR y SSG.
- **React** y **React DOM**: ⚛️ Librería base para interfaces.
- **TypeScript**: 🟦 Tipado estático para JavaScript.
- **Tailwind CSS**: 💨 Utilidades CSS para estilos rápidos.
- **Zod**: 🛡️ Validación de esquemas y formularios.
- **Next Auth**: 🔐 Autenticación de usuarios.
- **GSAP** y **@gsap/react**: ✨ Animaciones avanzadas.
- **Lucide React** y **Heroicons**: 🎨 Iconos SVG.
- **Radix UI**: 🧩 Componentes accesibles y personalizables.
- **Recharts**: 📊 Gráficas y visualización de datos.
- **Framer Motion**: 🎬 Animaciones y transiciones.
- **Sonner**: 🔔 Notificaciones y toasts.
- **Styled Components**: 🎨 Estilos en componentes.
- **Uploadthing**: 📤 Subida de archivos.
- **Zustand**: 🗃️ Manejo de estado global.
- **Embla Carousel**: 🖼️ Carrusel de imágenes.
- **Tiptap**: 📝 Editor de texto enriquecido.
- **Date-fns**: 📅 Utilidades para fechas.
- **Vaul**: 🧰 Componentes de UI.
- **Dnd-kit**: 🖱️ Drag & drop.
- **TanStack Table**: 🧮 Tablas avanzadas.
- **Lenis**: 🌀 Scroll suave.
- **Cmdk**: 🗂️ Command palette.
- **Tailwind Merge** y **Tailwindcss Animate**: 🎨 Utilidades para Tailwind.

Para ver todas las dependencias, revisa el archivo `package.json`.


---

## Desarrollado por: 

### EQUIPO # 01 Qwerty: 

- restoker12
- pastflex_39864
- silence_0908


## 🚀 Clonación del repositorio

Para comenzar, clona el repositorio con el siguiente comando:

```bash
git clone https://github.com/restoker/Devtalles_Blog_Qwerty_Team_Frontend.git
cd Devtalles_Blog_Qwerty_Team_Frontend
```

```
## 🏁 Getting Started

First, run the development server:
# 📦 Instalar dependencias
npm install
# ▶️ Luego
npm run dev
```

