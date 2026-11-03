@echo off
echo ========================================
echo Starting telespace.io Development Server
echo ========================================
echo.
echo Server will start at: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.
cd /d "%~dp0"
npm run dev
pause
