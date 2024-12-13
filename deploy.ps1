# 确保脚本在出错时停止执行
$ErrorActionPreference = 'Stop'

Write-Host "开始部署..." -ForegroundColor Green

# 生成静态文件
Write-Host "正在构建项目..." -ForegroundColor Yellow
npm run build

# 进入构建输出目录
cd docs

# 初始化 git 仓库
git init
git add -A
git commit -m "deploy to GitHub Pages"

# 推送到 gh-pages 分支
Write-Host "正在推送到 gh-pages 分支..." -ForegroundColor Yellow
git push -f git@github.com:wuxiaoyu-123/YunSite.git master:gh-pages

cd ..

Write-Host "部署完成!" -ForegroundColor Green
Write-Host "请访问 https://wuxiaoyu-123.github.io/YunSite/ 查看部署结果" -ForegroundColor Green 