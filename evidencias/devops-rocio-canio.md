Evidencias individuales - Práctica 1 DevOps

Renombra este fichero como devops-nombre-apellido.md y complétalo dentro de tu rama feature.

### 1. Colaboración DevOps - RA1.a

Explica en 1-2 frases qué aporta cada acción al trabajo colaborativo:

## a) Trabajar en una rama feature

Respuesta: Trabajar en la rama feature/completar-tarea permite desarrollar la funcionalidad de completar tareas de forma independiente, sin afectar al trabajo de otros compañeros. Así, los cambios se pueden probar antes de integrarlos en la rama develop.

## b) Abrir un Pull Request y que otro compañero lo revise

Respuesta: Abrir un Pull Request permite que otro compañero revise los cambios realizados en la funcionalidad de completar tareas antes de fusionarlos con develop. Esto ayuda a detectar errores y comprobar que el código funciona correctamente antes de integrarlo en el proyecto.

## c) Resolver un conflicto de README.md entre varios cambios

Respuesta: Resolver un conflicto en README.md permite solucionar las diferencias cuando varios compañeros modifican las mismas partes de un archivo desde distintas ramas. Para ello, hay que revisar los cambios y acordar una versión final que mantenga la información correcta.

### 2. CI/CD - RA1.b
## a) Integración Continua (CI)

Explica con tus palabras qué podría automatizarse al hacer push o abrir un Pull Request:

Respuesta: Se podrían automatizar pruebas para comprobar que la funcionalidad de completar tareas funciona correctamente y que los cambios no afectan al resto de la aplicación. También se podría ejecutar un linter para detectar errores de sintaxis y comprobar el estilo del código JavaScript.

## b) Entrega / Despliegue Continuo (CD)

Explica qué podría ocurrir automáticamente después de superar las comprobaciones:

Respuesta: Si los cambios superan todas las pruebas, se podría generar una nueva versión de la aplicación y desplegarla automáticamente en un entorno de pruebas. Después de revisar y aprobar los cambios, se podría publicar la nueva versión en producción sin tener que realizar manualmente todo el proceso.

### c) Dos comprobaciones de esta práctica que automatizarías en un pipeline futuro
Ejecutar pruebas automáticas para comprobar que la funcionalidad de completar tareas cambia correctamente el estado de una tarea y no afecta al resto.
Utilizar ESLint para analizar el código JavaScript y detectar errores de sintaxis, variables sin utilizar y problemas de estilo antes de fusionar los cambios.
###  3. Selección de herramientas - RA1.e

Herramientas de referencia: Git, GitHub, GitHub Actions, Jenkins, SonarQube y OWASP ZAP.

### Contexto A

Equipo pequeño que ya trabaja en GitHub y quiere ejecutar pruebas automáticamente en cada Pull Request.

Herramienta principal de CI/CD elegida: GitHub Actions.

Justificación (2-3 líneas): Es una herramienta integrada en GitHub que permite ejecutar pruebas automáticamente al abrir un Pull Request o subir cambios. Así, se puede comprobar que la funcionalidad de completar tareas funciona correctamente sin necesidad de mantener un servidor externo.

### Contexto B

Empresa que quiere administrar su propio servidor de automatización y conectarlo con repositorios y entornos internos.

Herramienta principal de CI/CD elegida: Jenkins.

Justificación (2-3 líneas): Jenkins permite instalar y administrar un servidor de automatización propio, ofreciendo mayor control sobre los procesos de integración y despliegue. También permite conectarse con repositorios y entornos internos para ejecutar pruebas de forma automática.

### Herramienta adicional opcional

Si añadirías SonarQube u OWASP ZAP, indica cuál y qué comprobaría: Añadiría SonarQube para analizar la calidad del código JavaScript de la funcionalidad de completar tareas. Permitiría detectar posibles errores, código duplicado y problemas de mantenibilidad antes de integrar los cambios en develop.