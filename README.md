# Parcial_2_Byron_Josue_Rodriguez_Reyes
# Sistema de Inventario de Productos

Este proyecto es una aplicación Full Stack para gestionar un sistema de inventario de productos. Permite a los usuarios agregar, ver, editar y eliminar productos, así como cambiar el estado de disponibilidad de los mismos.

## Tecnologías Utilizadas

- **Backend**: Java 17, Spring Framework
- **Frontend**: React
- **Base de Datos**: H2 (en memoria)


## Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas en tu máquina:

- [Java 17](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- [Maven](https://maven.apache.org/download.cgi)
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) (que se instala junto a Node.js)


## Instrucciones para Ejecutar el Backend

1. **Clonar el repositorio:**
   
   git clone https://github.com/Rodreyjosue/Parcial_2_Byron_Josue_Rodriguez_Reyes.git
   
2. Navegar al directorio del backend:

  cd inventario/backend

3. Compilar y ejecutar el proyecto:
   
  mvn spring-boot:run
  
4. El backend se ejecutará en el puerto 8080 por defecto.



## Instrucciones para Ejecutar el Frontend
1. Navegar al directorio del frontend:

  cd ../frontend

2. Instalar las dependencias:

  npm install

3. Ejecutar la aplicación:
   
  npm start

4. El frontend se abrirá automáticamente en tu navegador en http://localhost:3000.



# Instrucciones de Uso del Sistema de Inventario de Productos

Bienvenido al Sistema de Inventario de Productos. Esta aplicación te permite gestionar productos de manera eficiente. A continuación, encontrarás una guía sobre cómo utilizar las diferentes funciones de la aplicación.

## Instrucciones para Usar la Aplicación

### 1. Agregar un Producto

- **Paso 1**: En la pantalla principal, completa el formulario de agregar producto.
  - **Nombre**: Introduce el nombre del producto.
  - **Descripción**: Escribe una breve descripción del producto.
  - **Precio**: Ingresa el precio del producto. Asegúrate de usar dos decimales (ejemplo: 10.00).
  - **Disponible**: Especifica si el producto esta disponible.

 ![image](https://github.com/user-attachments/assets/2c908881-5251-4648-a02a-c0382f329dfb)

- **Paso 2**: Haz clic en el botón **"Agregar Ítem"**. El producto se añadirá a la lista.

![image](https://github.com/user-attachments/assets/a6d48369-e2f8-4d2f-9f5c-b7e3f5952f38)

### 2. Editar un Producto

- **Paso 1**: Busca el producto que deseas editar en la lista.
- **Paso 2**: Haz clic en el botón **"Editar"** junto al producto. Los campos del formulario se llenarán automáticamente con la información existente.
- **Paso 3**: Realiza los cambios necesarios y haz clic en **"Guardar Cambios"**.

![image](https://github.com/user-attachments/assets/e1d1203d-643d-4458-8f19-54c2be2d0393)

![image](https://github.com/user-attachments/assets/1bff3a61-c029-4576-ae2c-b241e565ad65)

### 3. Eliminar un Producto

- **Paso 1**: Localiza el producto que deseas eliminar en la lista.
- **Paso 2**: Haz clic en el botón **"Eliminar"** junto al producto.
- **Paso 3**: Confirma la eliminación si se te solicita.

![image](https://github.com/user-attachments/assets/a071e6ab-1f1a-40eb-aed3-8120d0eca167)

![image](https://github.com/user-attachments/assets/75166049-0906-49f1-b903-7a113270f26f)



### 4. Ver Productos

- La aplicación muestra todos los productos en una lista, junto con su estado de disponibilidad (disponible o no disponible).
- Puedes revisar la lista para ver la información de cada producto.

![image](https://github.com/user-attachments/assets/2267ca58-fa81-4c8f-bb30-39ba0375a2a7)

### 4. Manejo de Errores

![image](https://github.com/user-attachments/assets/2c22fa48-f88d-4bd0-87af-79fe679dfaa7)

Contacto
Para cualquier duda o consulta, puedes contactarme en bjrodriguez@grupotecun.com
