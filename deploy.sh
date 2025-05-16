set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:sysol8/test-case_VG-L.git master:gh-pages

cd -