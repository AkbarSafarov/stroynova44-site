const pr = document.getElementById('pr-info');
const vc = document.querySelector('.vsplyv');
const cl = document.querySelector('.clsoo');

pr.addEventListener('click', (e) => {
    e.preventDefault();
    vc.classList.add("active");
    return false;
})
cl.addEventListener('click', (e) => {
    e.preventDefault();
    vc.classList.remove("active");
    return false;
})

// Скрипт для работы с основными табами и вложенными табами
document.addEventListener('DOMContentLoaded', function() {
    
    // Функция для работы с основными табами
    function initMainTabs() {
        const mainTabLinks = document.querySelectorAll('.tabs_main_title ul li a');
        const mainTabBodies = document.querySelectorAll('.tabs_main_body > .tabs_body');
        
        mainTabLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Получаем ID таба
                const tabId = this.getAttribute('href').substring(1);
                
                // Убираем активный класс у всех основных табов
                document.querySelectorAll('.tabs_main_title ul li').forEach(li => {
                    li.classList.remove('active');
                });
                
                mainTabBodies.forEach(body => {
                    body.classList.remove('active');
                });
                
                // Добавляем активный класс к выбранному табу
                this.parentElement.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // Функция для работы с вложенными табами (таб в табе)
    function initNestedTabs() {
        // Находим все блоки с вложенными табами
        const contentTabsBlocks = document.querySelectorAll('.content_tabs');
        
        contentTabsBlocks.forEach(block => {
            // Для каждого блока находим его собственные ссылки и контент
            const nestedTabLinks = block.querySelectorAll('.content_tabs_title ul li a');
            const nestedTabBodies = block.querySelectorAll('.content_tabs_body .content_body');
            
            nestedTabLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Получаем ID вложенного таба
                    const tabId = this.getAttribute('href').substring(1);
                    
                    // Убираем активный класс только у табов внутри текущего блока
                    block.querySelectorAll('.content_tabs_title ul li').forEach(li => {
                        li.classList.remove('active');
                    });
                    
                    nestedTabBodies.forEach(body => {
                        body.classList.remove('active');
                    });
                    
                    // Добавляем активный класс к выбранному вложенному табу
                    this.parentElement.classList.add('active');
                    const targetTab = document.getElementById(tabId);
                    if (targetTab) {
                        targetTab.classList.add('active');
                    }
                });
            });
        });
    }
    
    // Инициализация обоих уровней табов
    initMainTabs();
    initNestedTabs();
});