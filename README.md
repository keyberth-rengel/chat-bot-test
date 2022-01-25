# Chat bot

Esta es una Clean Architecture usando

- React Navigation
- Async Storage
- React Redux
- Redux toolkit
- React Native Bootsplash
- React Native Tab View
- Navigation Components
- Styled Components

# Run App

- Descargar el Repositorio con los archivos fuentes.
- Abrir una terminal y escribir yarn o npm install para descargar las dependencias.
- Dirigirse a la carpeta de ios y correr el comando npx pop install.
- Para correr la app en android escribir en la terminal yarn android o npm run android.

- Para correr la app en ios escribir en la terminal yarn ios o npm run ios.

# Screenshots

<img src='https://user-images.githubusercontent.com/45502428/151078596-33f0dadc-6a1b-49ba-b411-ac82638653e7.jpg' width="300px" />
<img src='https://user-images.githubusercontent.com/45502428/151078757-d145e312-042d-4a86-989d-9935bd8f5e33.jpg' width="300px" />
<img src='https://user-images.githubusercontent.com/45502428/151078765-cec854e2-692a-4ad3-a3d9-e65844c89c1c.jpg' width="300px" />
<img src='https://user-images.githubusercontent.com/45502428/151078781-1ee82899-ae25-4f5d-a221-d756e06870bb.jpg' width="300px" />


- El proyecto cuenta con 3 vistas - Register | Chat Screen | Profile Screen

# Flujo de la aplicacion

- (Splash Screen) Inicia un Pequeño splash con la imagen de android.

- (Register) Al iniciar la por completo nos aparecera un formulario donde tendremos que ingresar algunas credenciales como username, email, password.

  - El formulario del register no hara algunas validaciones como, username en blanco, username no valido, email en blanco, email no valido, contraseña en blanco, contraseña invalida ( igual o mayor a 6 caracteres ).

- (Chat) Al iniciar sesion correctamente nos redireccionara al la pantalla del Home donde nos salda podremos apreciar unas tabs con el chat y el profile.

  - En la vista del chat podemos apreciar un chat donde podemos observar un mensaje con un name o owner quien lo envia y su contenido.
  - Podemos escribir en el chat y este nos respondera con algunas frases motivadoras que se obtienen de forma random.

- (Profile) Al ingresar a la vista de profile podemos observar un avatar generico, el username con el que ingresamos y el email.

  - En la vista podemos visualizar en la parte inferior un boton de cerrar session que nos devolvera a la vista de register.

# Persistencia de datos

- Al registarse en la app esta podra persistir los datos en el local storage para usarlos luego, tambien se agregar la informacion al estado global de la app.
- Al iniciar la app y ya con anterioridad hemos ingresado esta busca en el local storage y validara que exita una sesion abierta o no, esto lo hacemos de manera sencilla con almacenar solo un objecto con los datos del usuario.
- Al ingresar al profile y cerrar session el usuario eliminar la informacion almacenada en el local storage, si quiere el usuario nuevamente ingresar a la app este tendra que proporcionar sus datos nuevamente.
