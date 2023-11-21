npm run build && (
  rmdir /s /q docs
  ren build docs
  git add .
  git commit -m "update"
  git push
  pause
)
