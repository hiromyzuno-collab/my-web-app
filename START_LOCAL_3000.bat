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
if not exist node_modules (
  echo 初回セットアップ中です。npm install を実行します...
  call npm install
  if errorlevel 1 (
    echo npm install に失敗しました。
    pause
    exit /b 1
  )
)
echo.
echo 大地のムクナ LP v6 を起動します。
echo ブラウザで http://localhost:3000 を開いてください。
echo.
call npm run dev
pause
