git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/walkercz/html5.git
git config --global user.email "lastovka.cz@gmail.com"
git config --global user.name "walkercz"

git add .
git commit -m "$(Get-Date)"
git push origin master

git config --global --unset-all
# DO NOT FORGET TO DELETE STORED CREDENTIALS FROM Control Panel\User Accounts and Family Safety\Credential Manager