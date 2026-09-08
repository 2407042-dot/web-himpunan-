@echo off
title HIMASISFO Web Server
echo ===================================================
echo Starting HIMASISFO Web Development Server...
echo ===================================================
echo.

cd /d "%~dp0himasisfo-web"
npm run dev

pause
