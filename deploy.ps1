# 确保脚本在出错时停止执行
$ErrorActionPreference = 'Stop'

Write-Host "开始部署..." -ForegroundColor Green

# 配置Git
Write-Host "配置Git..." -ForegroundColor Yellow
git config --global http.sslVerify false
git config --global http.postBuffer 524288000
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999

# 删除旧的构建目录
if (Test-Path dist) {
    Write-Host "正在删除旧的dist目录..." -ForegroundColor Yellow
    Remove-Item -Path dist -Recurse -Force
}
if (Test-Path docs) {
    Write-Host "正在删除旧的docs目录..." -ForegroundColor Yellow
    Remove-Item -Path docs -Recurse -Force
}

# 生成静态文件
Write-Host "正在构建项目..." -ForegroundColor Yellow
npm run build

# 确保docs目录存在
if (-not (Test-Path docs)) {
    Write-Host "构建失败：未找到docs目录" -ForegroundColor Red
    exit 1
}

# 获取当前分支名称
$currentBranch = git rev-parse --abbrev-ref HEAD
Write-Host "当前分支: $currentBranch" -ForegroundColor Yellow

Write-Host "正在提交更改..." -ForegroundColor Yellow
git add docs -f
git commit -m "deploy to GitHub Pages"

# 设置最大重试次数
$maxRetries = 3
$retryCount = 0
$success = $false

while (-not $success -and $retryCount -lt $maxRetries) {
    try {
        Write-Host "正在推送到GitHub... (尝试 $($retryCount + 1)/$maxRetries)" -ForegroundColor Yellow
        
        # 尝试使用 HTTPS
        git remote set-url origin https://github.com/wuxiaoyu-123/YunSite.git
        git push origin $currentBranch
        
        $success = $true
        Write-Host "推送成功！" -ForegroundColor Green
    }
    catch {
        $retryCount++
        if ($retryCount -lt $maxRetries) {
            Write-Host "推送失败，5秒后重试..." -ForegroundColor Red
            Start-Sleep -Seconds 5
        }
        else {
            Write-Host "推送失败，尝试使用SSH..." -ForegroundColor Yellow
            try {
                # 尝试使用 SSH
                git remote set-url origin git@github.com:wuxiaoyu-123/YunSite.git
                git push origin $currentBranch
                $success = $true
                Write-Host "使用SSH推送成功！" -ForegroundColor Green
            }
            catch {
                Write-Host "所有推送尝试都失败了！" -ForegroundColor Red
                Write-Host $_.Exception.Message
                exit 1
            }
        }
    }
}

if ($success) {
    Write-Host "部署完成!" -ForegroundColor Green
    Write-Host "请访问 https://wuxiaoyu-123.github.io/YunSite/ 查看部署结果" -ForegroundColor Green
} 