@echo off
chcp 65001 >nul
cd /d %~dp0
where node >nul 2>&1
if errorlevel 1 (
  echo Node.js が見つかりません。
  echo https://nodejs.org/ から LTS版をインストールしてください。
  pause
  exit /b 1
)
call npm install
if errorlevel 1 goto error
call npm run build
if errorlevel 1 goto error
echo.
echo 本番ビルドを http://localhost:3000 で起動します。
echo.
call npm run start
pause
exit /b 0
:error
echo 処理に失敗しました。
pause
exit /b 1
