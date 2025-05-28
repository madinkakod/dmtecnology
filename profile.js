document.addEventListener('DOMContentLoaded', function() {
    const profileNav = document.querySelector('.profile-nav');
    const navItems = profileNav.querySelectorAll('li');
    const profileSections = document.querySelectorAll('.profile-section');

    // Функция для скрытия всех разделов профиля
    function hideAllSections() {
        profileSections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Функция для деактивации всех элементов навигации
    function deactivateAllNavItems() {
        navItems.forEach(item => {
            item.classList.remove('active');
        });
    }

    // Функция для отображения выбранного раздела и активации элемента навигации
    function showSection(sectionId) {
        hideAllSections();
        deactivateAllNavItems();

        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';

            const navItem = profileNav.querySelector(`[data-section="${sectionId}"]`);
            if (navItem) {
                navItem.classList.add('active');
            }
        }
    }

    // Обработчик клика на элементы навигации
    profileNav.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI' || event.target.parentNode.tagName === "LI") {
            let target = event.target;
            if(event.target.tagName !== 'LI'){
                target = event.target.parentNode;
            }
            const sectionId = target.dataset.section;
            if (sectionId) {
                showSection(sectionId);
            }
        }
    });

    // Показать первый раздел при загрузке страницы
    showSection('personal-info');
});

