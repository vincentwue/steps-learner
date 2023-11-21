
git config --global user.name "vincentwue"
git config --global user.email "vini96@web.de"

npm run build && (
  rmdir /s /q docs
  ren build docs
  git add .
  git commit -m "update"
  git push

)
