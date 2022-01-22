rm -rf dist &&
npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin https://github.com/estibulish/cm-ui.git &&
git push -f -u origin master &&
cd -   
echo https://estibulish.github.io/cm-ui/