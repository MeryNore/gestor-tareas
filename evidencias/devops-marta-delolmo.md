# Evidencias individuales - Práctica 1 DevOps

Renombra este fichero como `devops-nombre-apellido.md` y complétalo dentro de tu rama feature.

## 1. Colaboración DevOps - RA1.a

Explica en 1-2 frases qué aporta cada acción al trabajo colaborativo:

### a) Trabajar en una rama feature

Respuesta: Permite desarrollar y probar una funcionalidad de forma aislada sin afectar al codigo estable que usa el resto del equipo ni romper la rama principal mientras se trabaja.

### b) Abrir un Pull Request y que otro compañero lo revise

Respuesta: Otorga visibilidad a los cambios realizados, garantiza la calidad mediante la validación entre pares y fomenta la transferencia de conocimiento en el equipo antes de integrar el codigo en develop.

### c) Resolver un conflicto de README.md entre varios cambios

Respuesta: Obliga al equipo a comunicarse y coordinar decisiones cuando dos camibios afectan al mismo fichero, asegurando que la version final sea coherente y acordada por todos.

## 2. CI/CD - RA1.b

### a) Integración Continua (CI)

Explica con tus palabras qué podría automatizarse al hacer `push` o abrir un Pull Request:

Respuesta: proceso automotizado que se activa al hacer push o abrir un PR para ejecutar pruebas de codigo, detectar errores de sintaxis y validar que la nueva funcionalidad no rompa nada existente.

### b) Entrega / Despliegue Continuo (CD)

Explica qué podría ocurrir automáticamente después de superar las comprobaciones:

Respuesta: proceso posterior que empaqueta y despliega automaticamente el software en un entorno de pruebas o produccion una vez que el codigo ha superado todas las validaciones de CI.

### c) Dos comprobaciones de esta práctica que automatizarías en un pipeline futuro

1. Ejecucion de pruebas unitarias para comprobar las funciones de tareas (como verificar que deleteTarea elimine el ID correcto sin alterar otras tareas)
2. verii8cacion sintactica e inspeccion de formateo/calidad del codigo  para aesegurar normas de estilo antes de permitir el merge

## 3. Selección de herramientas - RA1.e

Herramientas de referencia: Git, GitHub, GitHub Actions, Jenkins, SonarQube y OWASP ZAP.

### Contexto A
Equipo pequeño que ya trabaja en GitHub y quiere ejecutar pruebas automáticamente en cada Pull Request.

Herramienta principal de CI/CD elegida: GitHubs Actions

Justificación (2-3 líneas): Al estar ya integrados en GitHub, no requiere gestionar infraestructura externa ni servidores propios. Permite definir workflows en YAML que se ejecutan automaticamente en cada PR de forma nativa y rapida.

### Contexto B
Empresa que quiere administrar su propio servidor de automatización y conectarlo con repositorios y entornos internos.

Herramienta principal de CI/CD elegida: Jenkins

Justificación (2-3 líneas): Es un servidor de automatizacion open-source y autohospedado que ofrece control total sobre la infraestructura entornos y politas de seguridad internas. Cuenta con una gran ecosistema de plugins para conectar diversos repositorios y despliegues.

### Herramienta adicional opcional

Si añadirías SonarQube u OWASP ZAP, indica cuál y qué comprobaría:
Herramienta: SonarQube.
Realizaria un analidad estatico del cofigo para detectar eroores potenciales, vulnerabilidades de seguridad, codigo deplicado o malas practicas antes de aprobar la intgracion en develop.
