@echo off
title Локальный сервер архива стримов
cd /d "%~dp0"
echo Запуск локального сервера...
echo.

:: Проверка Python
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Найден Python. Запускаю...
    start http://localhost:8000
    python -m http.server 8000
    goto :eof
)

:: Проверка Python Launcher (py)
py --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Найден Python (py). Запускаю...
    start http://localhost:8000
    py -m http.server 8000
    goto :eof
)

:: Проверка Node.js
npx --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Найден Node.js. Запускаю...
    start http://localhost:8000
    npx http-server -p 8000 -c-1
    goto :eof
)

echo.
echo [!] ОШИБКА: У вас не установлен Python или Node.js!
echo.
echo ВАМ НУЖНО СДЕЛАТЬ ОДНО ИЗ ДВУХ:
echo 1. Скачать и установить Python (python.org) и ОБЯЗАТЕЛЬНО поставить галочку "Add Python to PATH".
echo 2. Или использовать VS Code с расширением "Live Server".
echo.
pause