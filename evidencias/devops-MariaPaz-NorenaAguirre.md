# Evidencias individuales - Práctica 1 DevOps

## 1. Colaboración DevOps - RA1.a

Explica en 1-2 frases qué aporta cada acción al trabajo colaborativo:

### a) Trabajar en una rama feature

Respuesta: diferenciación de entornos de trabajo concretos para diferenciar los trabajos y cambios asignados a cada persona por rama.

### b) Abrir un Pull Request y que otro compañero lo revise

Respuesta: Que un compañero revise los Pull Requests  aporta seguridad y comprobación de que el código que has hecho está correcto o que no te hayas dejado fallos que no hayas visto, ya que al ser tu propio código es más facil que no detectes ciertos errores.

### c) Resolver un conflicto de README.md entre varios cambios

Respuesta: Aporta poder ver como al trabar sobre un mismo archivo y realizar cambios desde varias ramas se genera un conflicto que luego hay que consensuar y resolver.

## 2. CI/CD - RA1.b

### a) Integración Continua (CI)

Explica con tus palabras qué podría automatizarse al hacer `push` o abrir un Pull Request:

Respuesta: podríamos automatizar la ejecución de los tests unitarios para comprobar al instante si los nuevos cambios rompen alguna función de la app. También podríamos pasar un linter para verificar que el código cumple con las reglas de estilo del equipo.

### b) Entrega / Despliegue Continuo (CD)

Explica qué podría ocurrir automáticamente después de superar las comprobaciones:

Respuesta: Si todo el código pasa las pruebas en verde, la aplicación podría compilarse y subirse automáticamente al servidor de producción. Así, los usuarios tendrían disponible la nueva versión de inmediato sin que nosotros tengamos que desplegarla a mano por FTP o SSH.

### c) Dos comprobaciones de esta práctica que automatizarías en un pipeline futuro

1. Pasar una herramienta de análisis estático (como ESLint) sobre archivos como anadir.js para asegurar que no hay errores de sintaxis o variables sin usar.
2. Ejecutar un bloque de pruebas automáticas para confirmar que la lógica de añadir tareas funciona bien antes de fusionar el código.

## 3. Selección de herramientas - RA1.e

Herramientas de referencia: Git, GitHub, GitHub Actions, Jenkins, SonarQube y OWASP ZAP.

### Contexto A
Equipo pequeño que ya trabaja en GitHub y quiere ejecutar pruebas automáticamente en cada Pull Request.

Herramienta principal de CI/CD elegida: GitHub Actions.

Justificación (2-3 líneas): Es la opción más rápida y cómoda porque ya viene integrada de forma nativa en los repositorios de GitHub. Nos ahorramos tener que instalar o mantener servidores externos solo para pasar los tests de los Pull Requests.

### Contexto B
Empresa que quiere administrar su propio servidor de automatización y conectarlo con repositorios y entornos internos.

Herramienta principal de CI/CD elegida: Jenkins.

Justificación (2-3 líneas): Jenkins se puede instalar en las propias máquinas de la empresa (es self-hosted), lo que les da control total sobre la seguridad y les permite conectarlo fácilmente con sus bases de datos y entornos locales a puerta cerrada.

### Herramienta adicional opcional

Si añadirías SonarQube u OWASP ZAP, indica cuál y qué comprobaría: Añadiría SonarQube integrado en el pipeline para analizar la calidad del código. Nos serviría para detectar automáticamente code smells, código duplicado o malas prácticas en nuestro JavaScript antes de que lleguen a la rama principal.