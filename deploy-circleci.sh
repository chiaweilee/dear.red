git config --global user.email "$EMAIL"
git config --global user.name "$NAME"
git pull
yarn build
git add -f dist
git commit -m "build"
git push
