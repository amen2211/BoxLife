function renderHeaderFooter() {
    const headerHTML = `
        <h1>BoxLife</h1>
        <nav>
            <ul>
                <li><a href="index.html">الرئيسية</a></li>
                <li><a href="dashboard.html">لوحة التحكم</a></li>
                <li><a href="workouts.html">التمارين</a></li>
                <li><a href="nutrition.html">التغذية</a></li>
                <li><a href="fights.html">النزالات</a></li>
                <li><a href="profile.html">الملف الشخصي</a></li>
            </ul>
        </nav>
    `;
    const footerHTML = `<p>جميع الحقوق محفوظة &copy; BoxLife 2024</p>`;
    if (document.querySelector('header')) document.querySelector('header').innerHTML = headerHTML;
    if (document.querySelector('footer')) document.querySelector('footer').innerHTML = footerHTML;
}
window.addEventListener('DOMContentLoaded', renderHeaderFooter);
