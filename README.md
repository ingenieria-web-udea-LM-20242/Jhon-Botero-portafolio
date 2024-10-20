# Portafolio de Jhon Botero

Bienvenido a mi portafolio, donde puedes explorar mis proyectos y habilidades en desarrollo web. Este portafolio está diseñado para mostrar mi experiencia en tecnologías como React, Node.js, Java con Spring Boot, Angular, y más.

## Despliegue

Puedes ver el portafolio en el siguiente enlace:

[https://jhon-botero-portafolio.vercel.app/](https://jhon-botero-portafolio.vercel.app/) 

Este es un proyecto de [Next.js](https://nextjs.org/) creado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).  

## Descripción del Diseño Atómico (Atomic Design)

Este proyecto sigue la metodología **Atomic Design**, que divide la interfaz de usuario en componentes específicos según su rol y reutilización. Esta metodología permite mantener un sistema de diseño escalable y consistente organizando los componentes en las siguientes categorías:

### **Estructura de Atomic Design**

1. **Átomos**:  
   - Son los componentes más pequeños y reutilizables, como botones, íconos o campos de entrada.  
   - **Ubicación:** `components/atoms/`  

2. **Moléculas**:  
   - Son combinaciones de átomos que trabajan juntos, como un campo de formulario con una etiqueta y un botón.  
   - **Ubicación:** `components/molecules/`  

3. **Organismos**:  
   - Son secciones más complejas que agrupan moléculas y átomos, como una barra de navegación o una tarjeta de perfil.  
   - **Ubicación:** `components/organisms/`  

4. **Páginas (Pages)**:  
   - Representan las vistas completas de la aplicación utilizando plantillas y componentes previamente definidos.  
   - **Ubicación:** `pages/`  

Esta estructura facilita el mantenimiento del código, permite la reutilización de componentes y asegura la coherencia en toda la aplicación.  

### utils/const.ts

Este archivo contiene varias estructuras de datos que se utilizan para llenar información en la aplicación.
