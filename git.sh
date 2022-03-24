git add .
sleep 1
echo 'type your commit'
read commit
git commit -m "$commit"
sleep 1
git push
sleep 1
clear
git status
sleep 4
clear