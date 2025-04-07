# Explora Neiva - Plataforma de Turismo Interactivo

Aplicación móvil para mejorar la experiencia turística en Neiva, Huila.

## Equipo de desarrollo

- Jordan Ramírez Gallego
- Sergio Andrés Ordoñez Díaz
- Ángel Gustavo Solano Trujillo
- David Santiago Gómez Gutiérrez

## Estructura del proyecto

- `backend/`: Código del servidor
- `database/`: Modelo y scripts de base de datos
- `docs/`: Documentación del proyecto
- `frontend/`: Código de la aplicación móvil

# 📌 Comandos básicos de Git

## 🔹 Configuración inicial de Git

```bash
git config --global user.name "TuNombre"
git config --global user.email "tuemail@example.com"
git config --global credential.helper wincred  # (Solo en Windows)
```

## 🔹 Iniciar un repositorio nuevo

```bash
git init  # Inicializa un repositorio en la carpeta actual
```

## 🔹 Clonar un repositorio

```bash
git clone https://github.com/usuario/repositorio.git
```

## 🔹 Verificar el estado del repositorio

```bash
git status  # Muestra el estado actual de los archivos
```

## 🔹 Agregar archivos al seguimiento

```bash
git add archivo.txt  # Agregar un solo archivo
git add .  # Agregar todos los archivos en el repositorio
```

## 🔹 Confirmar cambios (commit)

```bash
git commit -m "Mensaje del commit"  # Guarda los cambios en el historial
```

## 🔹 Ver el historial de commits

```bash
git log --oneline --graph --all  # Ver historial de commits en forma resumida
```

## 🔹 Ver las ramas disponibles

```bash
git branch  # Listar ramas locales
git branch -r  # Listar ramas remotas
```

## 🔹 Crear y cambiar de rama

```bash
git checkout -b nueva-rama  # Crea y cambia a una nueva rama
git checkout main  # Cambiar a la rama main
```

## 🔹 Enlazar el repositorio con GitHub

```bash
git remote add origin https://github.com/usuario/repositorio.git
git remote -v  # Verificar la URL del remoto
```

## 🔹 Subir cambios a GitHub

```bash
git push origin main  # Enviar commits a la rama main
```

## 🔹 Traer cambios del remoto

```bash
git pull origin main  # Obtener cambios desde GitHub
```

## 🔹 Fusionar ramas

```bash
git merge otra-rama  # Fusionar otra-rama con la rama actual
```

## 🔹 Eliminar una rama

```bash
git branch -d nombre-rama  # Eliminar una rama local
git push origin --delete nombre-rama  # Eliminar una rama remota
```

## 🔹 Restablecer cambios

```bash
git reset --hard HEAD  # Deshacer todos los cambios no confirmados
git checkout -- archivo.txt  # Restaurar un archivo específico
```

## 🔹 Verificar y eliminar configuraciones

```bash
git config --list --global  # Ver configuraciones globales
git config --global --unset user.name  # Eliminar configuración de usuario
```

## 🔹 Eliminar completamente Git en una carpeta

```bash
rm -rf .git  # Elimina toda la configuración y el historial del repositorio
```
