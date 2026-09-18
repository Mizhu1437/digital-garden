// ============================================
// 页面切换 - 点击导航链接时显示对应的 section
// ============================================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // 移除所有链接和区块的 active 状态
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        // 给被点击的链接和对应区块加上 active
        link.classList.add('active');
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');
    });
});

// ============================================
// 暗色模式切换
// ============================================
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️ 亮色模式' : '🌙 暗色模式';
    // 记住用户的选择，下次打开还是同样的主题
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// 读取之前保存的主题偏好
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️ 亮色模式';
}

// ============================================
// 统计数字 - 自动计算各类内容的数量
// ============================================
function updateStats() {
    const imageCount = document.querySelectorAll('.image-card').length;
    const docCount = document.querySelectorAll('.doc-card').length;
    const linkCount = document.querySelectorAll('.link-card').length;

    document.getElementById('imageCount').textContent = imageCount;
    document.getElementById('docCount').textContent = docCount;
    document.getElementById('linkCount').textContent = linkCount;
}

updateStats();
