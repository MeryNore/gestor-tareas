# Evidencias individuales - Práctica 1 DevOps

Renombra este fichero como `devops-nombre-apellido.md` y complétalo dentro de tu rama feature.

## 1. Colaboración DevOps - RA1.a

Explica en 1-2 frases qué aporta cada acción al trabajo colaborativo:

### a) Trabajar en una rama feature

Respuesta: Trabajar en una rama feature me permite desarrollar mi funcionalidad de filtrado de tareas de forma independiente, sin modificar directamente la rama común del proyecto. Así puedo probar mis cambios y evitar interferir en el trabajo de mis compañeros.

### b) Abrir un Pull Request y que otro compañero lo revise

Respuesta: Al abrir un Pull Request puedo mostrar los cambios que he realizado para que otro compañero los revise antes de integrarlos en develop. En mi caso, revisaré el Pull Request de María, que ha desarrollado la funcionalidad de añadir tareas, para comprobar que funciona correctamente y proponer mejoras si fueran necesarias.

### c) Resolver un conflicto de README.md entre varios cambios

Respuesta: Resolver un conflicto en README.md nos obliga a coordinarnos y decidir qué cambios deben mantenerse cuando varias ramas modifican la misma parte del archivo. De esta forma, evitamos perder información y conseguimos que el documento final sea coherente.

## 2. CI/CD - RA1.b

### a) Integración Continua (CI)

Explica con tus palabras qué podría automatizarse al hacer `push` o abrir un Pull Request:

Respuesta: La Integración Continua permite automatizar comprobaciones del proyecto cada vez que hacemos un push o abrimos un Pull Request. Por ejemplo, se podrían ejecutar pruebas automáticas para comprobar que las funcionalidades siguen funcionando antes de integrar los cambios en develop.

### b) Entrega / Despliegue Continuo (CD)

Explica qué podría ocurrir automáticamente después de superar las comprobaciones:

Respuesta: Después de superar las comprobaciones, el sistema podría preparar automáticamente una versión del proyecto para su entrega o desplegarla en un entorno de pruebas. Esto reduce el trabajo manual y ayuda a detectar problemas antes de publicar una versión.

### c) Dos comprobaciones de esta práctica que automatizarías en un pipeline futuro

1. Comprobar automáticamente que las tareas se pueden añadir, eliminar, completar y filtrar correctamente.
2. Verificar que los archivos JavaScript no contienen errores de sintaxis y que la aplicación se puede cargar sin errores.

## 3. Selección de herramientas - RA1.e

Herramientas de referencia: Git, GitHub, GitHub Actions, Jenkins, SonarQube y OWASP ZAP.

### Contexto A
Equipo pequeño que ya trabaja en GitHub y quiere ejecutar pruebas automáticamente en cada Pull Request.

Herramienta principal de CI/CD elegida: GitHub Actions.

Justificación (2-3 líneas): Elegiría GitHub Actions porque el equipo ya trabaja con GitHub y esta herramienta permite automatizar pruebas y comprobaciones directamente en el repositorio. Se puede configurar para que se ejecute automáticamente al abrir un Pull Request, antes de integrar los cambios.

### Contexto B
Empresa que quiere administrar su propio servidor de automatización y conectarlo con repositorios y entornos internos.

Herramienta principal de CI/CD elegida:  Jenkins.

Justificación (2-3 líneas): Elegiría Jenkins porque permite instalar y administrar un servidor de automatización propio. Esto resulta útil para una empresa que necesita controlar su infraestructura y conectar sus procesos de CI/CD con repositorios y entornos internos.

### Herramienta adicional opcional

Si añadirías SonarQube u OWASP ZAP, indica cuál y qué comprobaría:

Añadiría SonarQube para analizar automáticamente el código fuente y detectar posibles errores, problemas de calidad y malas prácticas. Así podríamos mejorar la calidad del código antes de integrar los cambios en el proyecto.
