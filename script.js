// Глобальные переменные для хранения данных
let allMeals = [];
let allProducts = [];
let lastRecommendedDrinks = new Set(); // Для отслеживания последних рекомендованных напитков
let drinkUsageCount = new Map(); // Для подсчета использования напитков

// РАСШИРЕННАЯ онтологическая модель сочетаний с большим разнообразием
const flavorProfiles = {
    // Конкретные блюда -> конкретные напитки (уникальные для каждого блюда)
    exactMatches: {
        // Рыба и морепродукты
        'лосось': ['пино нуар', 'шардоне', 'совиньон блан', 'розовое вино'],
        'тунец': ['розовое вино', 'пино гриджио', 'совиньон блан'],
        'форель': ['совиньон блан', 'рислинг', 'пино гриджио'],
        'сибас': ['шардоне', 'верментино', 'совиньон блан'],
        'дорадо': ['совиньон блан', 'пино гриджио', 'верментино'],
        'креветки': ['совиньон блан', 'пино гриджио', 'шампанское'],
        'кальмары': ['совиньон блан', 'пино гриджио', 'пино нуар'],
        'мидии': ['шардоне', 'шампанское', 'совиньон блан'],
        'устрицы': ['шампанское', 'совиньон блан', 'мускаде'],
        'окунь': ['рислинг', 'пино гриджио', 'совиньон блан'],
        'карп': ['рислинг', 'совиньон блан', 'гевюрцтраминер'],
        'судак': ['шардоне', 'рислинг', 'совиньон блан'],
        'скумбрия': ['рислинг', 'совиньон блан', 'гевюрцтраминер'],
        'сельдь': ['аквавит', 'водка', 'пильзнер'],
        
        // Мясо красное
        'стейк': ['каберне совиньон', 'шираз', 'мальбек', 'бордо'],
        'говядина': ['каберне', 'мерло', 'бордо', 'портвейн'],
        'баранина': ['шираз', 'каберне', 'божоле', 'мерло'],
        'свинина': ['пино нуар', 'мерло', 'божоле', 'шардоне'],
        'телятина': ['пино нуар', 'шардоне', 'божоле'],
        'антрекот': ['каберне', 'мерло', 'божоле'],
        'ребрышки': ['зинфандель', 'шираз', 'пино нуар'],
        'грудинка': ['каберне', 'портвейн', 'бордо'],
        'вырезка': ['каберне совиньон', 'бордо', 'мерло'],
        
        // Птица
        'курица': ['шардоне', 'пино гриджио', 'совиньон блан', 'рислинг'],
        'утка': ['пино нуар', 'мерло', 'шираз', 'каберне'],
        'индейка': ['шардоне', 'рислинг', 'совиньон блан'],
        'гусь': ['пино нуар', 'каберне', 'бордо'],
        'перепел': ['пино нуар', 'божоле', 'шардоне'],
        'фазан': ['пино нуар', 'бордо', 'каберне'],
        
        // Паста и пицца
        'паста': ['кьянти', 'барбера', 'дольчетто', 'примитиво'],
        'пицца': ['кьянти', 'сангрия', 'барбера', 'пиво'],
        'равиоли': ['барбера', 'дольчетто', 'шардоне'],
        'лазанья': ['кьянти', 'барбера', 'неббиоло'],
        'спагетти': ['кьянти', 'барбера', 'дольчетто'],
        'ризотто': ['шардоне', 'пино гриджио', 'арнеис'],
        
        // Салаты
        'цезарь': ['шардоне', 'совиньон блан', 'вердиккьо'],
        'греческий': ['розовое вино', 'рецина', 'ассортико'],
        'оливье': ['водка', 'шампанское', 'пиво'],
        'винегрет': ['пино гриджио', 'совиньон блан', 'совиньон'],
        
        // Супы
        'борщ': ['херес', 'водка', 'темное пиво'],
        'щи': ['херес', 'водка', 'светлое пиво'],
        'том ям': ['пиво', 'рислинг', 'совиньон блан'],
        'куриный': ['шардоне', 'рислинг', 'совиньон блан'],
        'грибной': ['пино нуар', 'шардоне', 'бордо'],
        
        // Десерты
        'шоколад': ['портвейн', 'каберне', 'мадера'],
        'чизкейк': ['сотерн', 'асти', 'мускат'],
        'тирамису': ['марсала', 'сотерн', 'асти'],
        'мороженое': ['сотерн', 'асти', 'ликёр'],
        'фруктовый': ['сотерн', 'мускат', 'асти'],
        'медовик': ['сотерн', 'асти', 'херес']
    },

    // Категории блюд и их общие сочетания (уникальные для каждой категории)
    categoryPairs: {
        'рыба': ['совиньон блан', 'рислинг', 'пино гриджио', 'гевюрцтраминер'],
        'морепродукты': ['шардоне', 'шампанское', 'мускаде', 'верментино'],
        'красное мясо': ['каберне', 'шираз', 'мальбек', 'бордо'],
        'птица': ['пино нуар', 'мерло', 'шардоне', 'рислинг'],
        'паста': ['кьянти', 'барбера', 'дольчетто', 'примитиво'],
        'салаты': ['совиньон блан', 'пино гриджио', 'розовое вино'],
        'супы': ['рислинг', 'совиньон блан', 'херес'],
        'десерты': ['сотерн', 'асти', 'мускат', 'портвейн']
    },

    // Ключевые слова в описаниях (уникальные для каждого типа)
    keywordPairs: {
        'сливочный': ['шардоне', 'шардоне резерв', 'бургундское'],
        'острый': ['рислинг', 'пиво', 'гевюрцтраминер'],
        'сладкий': ['сотерн', 'асти', 'мускат'],
        'копченый': ['виски', 'портвейн', 'божоле'],
        'жареный': ['каберне', 'шираз', 'мальбек'],
        'тушеный': ['мерло', 'бордо', 'каберне'],
        'запеченный': ['шардоне', 'пино нуар', 'божоле'],
        'гриль': ['каберне', 'шираз', 'бордо'],
        'маринованный': ['рислинг', 'совиньон блан', 'гевюрцтраминер']
    }
};

// Функция для переключения секций
function showSection(sectionName) {
    // Скрываем все секции
    document.getElementById('main-section').style.display = 'none';
    document.getElementById('catalog-section').classList.remove('active');
    document.getElementById('about-section').classList.remove('active');
    
    // Показываем выбранную секцию
    if (sectionName === 'main') {
        document.getElementById('main-section').style.display = 'block';
    } else if (sectionName === 'catalog') {
        document.getElementById('catalog-section').classList.add('active');
        displayCatalog();
    } else if (sectionName === 'about') {
        document.getElementById('about-section').classList.add('active');
    }
}

// Функция для отображения каталога
function displayCatalog() {
    const catalogGrid = document.getElementById('catalog-grid');
    const catalogFilters = document.getElementById('catalog-filters');
    
    // Очищаем содержимое
    catalogGrid.innerHTML = '';
    catalogFilters.innerHTML = '';
    
    // Получаем уникальные категории
    const categories = [...new Set(allMeals.map(meal => meal.category))].filter(Boolean);
    
    // Создаем кнопки фильтров
    const allFilter = document.createElement('button');
    allFilter.className = 'filter-btn active';
    allFilter.textContent = 'Все блюда';
    allFilter.onclick = () => filterCatalog('all');
    catalogFilters.appendChild(allFilter);
    
    categories.forEach(category => {
        const filterBtn = document.createElement('button');
        filterBtn.className = 'filter-btn';
        filterBtn.textContent = category;
        filterBtn.onclick = () => filterCatalog(category);
        catalogFilters.appendChild(filterBtn);
    });
    
    // Отображаем все блюда
    displayMealsInCatalog(allMeals);
}

// Функция фильтрации каталога
function filterCatalog(category) {
    // Обновляем активную кнопку
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const filteredMeals = category === 'all' 
        ? allMeals 
        : allMeals.filter(meal => meal.category === category);
    
    displayMealsInCatalog(filteredMeals);
}

// Функция отображения блюд в каталоге
function displayMealsInCatalog(meals) {
    const catalogGrid = document.getElementById('catalog-grid');
    catalogGrid.innerHTML = '';
    
    if (meals.length === 0) {
        catalogGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
                <p>Блюда не найдены.</p>
            </div>
        `;
        return;
    }
    
    meals.forEach(meal => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Создаем безопасную строку для передачи данных
        const mealData = JSON.stringify(meal).replace(/"/g, '&quot;');
        
        card.innerHTML = `
            <div class="card-image">
                ${meal.image || meal.imageUrl ? 
                    `<img src="${meal.image || meal.imageUrl}" alt="${meal.name}" 
                          onerror="this.style.display='none'; 
                                   this.parentNode.innerHTML='🍽️'; 
                                   this.parentNode.style.display='flex'; 
                                   this.parentNode.style.alignItems='center'; 
                                   this.parentNode.style.justifyContent='center'; 
                                   this.parentNode.style.fontSize='48px';">` : 
                    '🍽️'
                }
            </div>
            <div class="card-content">
                <div class="card-type">${meal.category || 'Блюдо'}</div>
                <h3 class="card-title">${meal.name || 'Без названия'}</h3>
                <div class="card-actions">
                    <button class="btn btn-primary" onclick="selectMealFromCatalog(${mealData})">
                        Подобрать напитки
                    </button>
                </div>
            </div>
        `;
        
        catalogGrid.appendChild(card);
    });
}

// Функция выбора блюда из каталога
function selectMealFromCatalog(meal) {
    showSection('main');
    // Заполняем поле поиска названием блюда
    document.getElementById('meal-search').value = meal.name;
    // Выбираем блюдо
    selectMeal(meal);
    // Прокручиваем к результатам
    document.getElementById('recommendations').scrollIntoView({ behavior: 'smooth' });
}

// Функция открытия модального окна с информацией о напитке
function openDrinkModal(product) {
    console.log('Opening modal for product:', product);
    
    const modal = document.getElementById('drink-modal');
    
    // Заполняем данные о напитке
    document.getElementById('modal-drink-name').textContent = product.name || 'Без названия';
    document.getElementById('modal-drink-description').textContent = product.description || 'Описание отсутствует';
    document.getElementById('modal-drink-volume').textContent = product.volume || 'Не указан';
    document.getElementById('modal-drink-strength').textContent = product.strength || 'Не указана';
    document.getElementById('modal-drink-country').textContent = product.country || 'Не указана';
    document.getElementById('modal-drink-type').textContent = getProductType(product.category);
    document.getElementById('modal-drink-price').textContent = product.price ? `${product.price} ₽` : 'Цена не указана';
    document.getElementById('modal-drink-pairing').textContent = product.recommendedDishes || 'Различные блюда';
    
    const modalImage = document.getElementById('modal-drink-image');
    if (product.image || product.imageUrl) {
        modalImage.innerHTML = `<img src="${product.image || product.imageUrl}" alt="${product.name}" 
            onerror="this.style.display='none'; 
                     this.parentNode.innerHTML='${getDrinkEmoji(product.category)}'; 
                     this.parentNode.style.display='flex'; 
                     this.parentNode.style.alignItems='center'; 
                     this.parentNode.style.justifyContent='center'; 
                     this.parentNode.style.fontSize='72px';">`;
    } else {
        modalImage.innerHTML = getDrinkEmoji(product.category);
        modalImage.style.display = 'flex';
        modalImage.style.alignItems = 'center';
        modalImage.style.justifyContent = 'center';
        modalImage.style.fontSize = '72px';
    }
    
    modal.classList.add('active');
}

// Функция закрытия модального окна
function closeModal() {
    document.getElementById('drink-modal').classList.remove('active');
}

// Вспомогательные функции
function getProductType(category) {
    const types = {
        'wine': 'Вино',
        'beer': 'Пиво',
        'whiskey': 'Виски',
        'vodka': 'Водка',
        'rum': 'Ром',
        'vermouth': 'Вермут',
        'cognac': 'Коньяк',
        'liquor': 'Ликёр',
        'sparkling': 'Игристое',
        'coffee': 'Кофе',
        'tea': 'Чай',
        'juice': 'Сок'
    };
    return types[category] || 'Напиток';
}

function getDrinkEmoji(category) {
    const emojis = {
        'wine': '🍷',
        'beer': '🍺',
        'whiskey': '🥃',
        'vodka': '🍸',
        'rum': '🍹',
        'vermouth': '🍷',
        'cognac': '🥃',
        'liquor': '🥂',
        'sparkling': '🥂',
        'coffee': '☕',
        'tea': '🍵',
        'juice': '🧃'
    };
    return emojis[category] || '🥤';
}

// ИНИЦИАЛИЗАЦИЯ подсчета использования напитков
function initializeDrinkUsage() {
    // Сбрасываем счетчики
    drinkUsageCount = new Map();
    // Инициализируем все напитки с нулевым использованием
    allProducts.forEach(product => {
        const drinkKey = (product.name || '').toLowerCase();
        if (drinkKey) {
            drinkUsageCount.set(drinkKey, 0);
        }
    });
}

// ФУНКЦИЯ ПОДБОРА НАПИТКОВ С МИНИМУМОМ ПОВТОРЕНИЙ
function findDrinksForMeal(meal) {
    const mealName = meal.name.toLowerCase();
    const mealDescription = (meal.description || '').toLowerCase();
    const mealCategory = (meal.category || '').toLowerCase();
    
    console.log('Поиск напитков для:', mealName);
    
    // Шаг 1: Получаем ВСЕ возможные рекомендации по онтологии
    const allPossibleDrinks = new Set();
    
    // 1. Точные совпадения
    for (const [dishName, drinks] of Object.entries(flavorProfiles.exactMatches)) {
        if (mealName.includes(dishName)) {
            drinks.forEach(drink => allPossibleDrinks.add(drink.toLowerCase()));
        }
    }
    
    // 2. Совпадения по категории
    if (flavorProfiles.categoryPairs[mealCategory]) {
        flavorProfiles.categoryPairs[mealCategory].forEach(drink => {
            allPossibleDrinks.add(drink.toLowerCase());
        });
    }
    
    // 3. Совпадения по ключевым словам
    for (const [keyword, drinks] of Object.entries(flavorProfiles.keywordPairs)) {
        if (mealDescription.includes(keyword) || mealName.includes(keyword)) {
            drinks.forEach(drink => allPossibleDrinks.add(drink.toLowerCase()));
        }
    }
    
    console.log('Все возможные напитки по онтологии:', Array.from(allPossibleDrinks));
    
    // Шаг 2: Ищем напитки в базе данных, которые совпадают с рекомендациями
    const matchingProducts = [];
    
    allPossibleDrinks.forEach(drinkName => {
        // Ищем все напитки, которые содержат это название
        const foundProducts = allProducts.filter(product => {
            const productName = (product.name || '').toLowerCase();
            const productCategory = (product.category || '').toLowerCase();
            const productDescription = (product.description || '').toLowerCase();
            
            // Проверяем совпадение с названием напитка
            const matches = productName.includes(drinkName) || 
                           productCategory.includes(drinkName) ||
                           productDescription.includes(drinkName);
            
            // Также проверяем, не был ли этот напиток недавно рекомендован
            const recentlyUsed = lastRecommendedDrinks.has(productName);
            
            return matches && !recentlyUsed;
        });
        
        matchingProducts.push(...foundProducts);
    });
    
    console.log('Найдено совпадающих напитков:', matchingProducts.length);
    
    // Шаг 3: Если есть совпадения, выбираем 2 наименее используемых
    if (matchingProducts.length > 0) {
        // Сортируем по частоте использования (наименее используемые - в начале)
        const sortedProducts = matchingProducts.sort((a, b) => {
            const aKey = (a.name || '').toLowerCase();
            const bKey = (b.name || '').toLowerCase();
            const aUsage = drinkUsageCount.get(aKey) || 0;
            const bUsage = drinkUsageCount.get(bKey) || 0;
            return aUsage - bUsage;
        });
        
        // Берем первые 2 уникальных напитка
        const selectedProducts = [];
        const selectedNames = new Set();
        
        for (const product of sortedProducts) {
            if (selectedProducts.length >= 2) break;
            
            const productName = (product.name || '').toLowerCase();
            if (!selectedNames.has(productName)) {
                selectedProducts.push(product);
                selectedNames.add(productName);
                
                // Обновляем счетчик использования
                const currentCount = drinkUsageCount.get(productName) || 0;
                drinkUsageCount.set(productName, currentCount + 1);
                
                // Добавляем в список последних рекомендованных
                lastRecommendedDrinks.add(productName);
            }
        }
        
        // Ограничиваем размер lastRecommendedDrinks (храним только последние 10)
        if (lastRecommendedDrinks.size > 10) {
            const array = Array.from(lastRecommendedDrinks);
            lastRecommendedDrinks = new Set(array.slice(-10));
        }
        
        console.log('Выбраны напитки:', selectedProducts.map(p => p.name));
        return selectedProducts;
    }
    
    // Шаг 4: Если нет совпадений по онтологии, ищем альтернативные напитки
    console.log('Совпадений по онтологии нет, ищем альтернативы');
    
    // Фильтруем напитки по категории блюда
    let alternativeProducts = [];
    
    if (mealCategory) {
        // Пытаемся найти напитки, подходящие по категории
        alternativeProducts = allProducts.filter(product => {
            // Пропускаем недавно использованные
            const productName = (product.name || '').toLowerCase();
            return !lastRecommendedDrinks.has(productName);
        });
    }
    
    // Если альтернатив нет, берем случайные напитки
    if (alternativeProducts.length === 0) {
        alternativeProducts = [...allProducts];
    }
    
    // Сортируем по частоте использования
    alternativeProducts.sort((a, b) => {
        const aKey = (a.name || '').toLowerCase();
        const bKey = (b.name || '').toLowerCase();
        const aUsage = drinkUsageCount.get(aKey) || 0;
        const bUsage = drinkUsageCount.get(bKey) || 0;
        return aUsage - bUsage;
    });
    
    // Берем первые 2 наименее используемых
    const finalProducts = [];
    const finalNames = new Set();
    
    for (const product of alternativeProducts) {
        if (finalProducts.length >= 2) break;
        
        const productName = (product.name || '').toLowerCase();
        if (!finalNames.has(productName)) {
            finalProducts.push(product);
            finalNames.add(productName);
            
            // Обновляем счетчик использования
            const currentCount = drinkUsageCount.get(productName) || 0;
            drinkUsageCount.set(productName, currentCount + 1);
            
            // Добавляем в список последних рекомендованных
            lastRecommendedDrinks.add(productName);
        }
    }
    
    console.log('Выбраны альтернативные напитки:', finalProducts.map(p => p.name));
    return finalProducts;
}

// Документ загружен
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const mealSearch = document.getElementById('meal-search');
    const searchSuggestions = document.getElementById('search-suggestions');
    const loading = document.getElementById('loading');
    const drinkCards = document.getElementById('drink-cards');
    const popularDishes = document.getElementById('popular-dishes');
    const errorMessage = document.getElementById('error-message');
    const selectedMealInfo = document.getElementById('selected-meal-info');
    
    const PRODUCTS_API = 'https://6925ffcd82b59600d725f256.mockapi.io/v1/products';
    const MEALS_API = 'https://6925ffcd82b59600d725f256.mockapi.io/v1/meals';
    
    // Загрузка всех данных
    async function loadAllData() {
        try {
            loading.style.display = 'block';
            errorMessage.style.display = 'none';
            
            console.log('Загрузка данных...');
            
            // Загружаем блюда и напитки параллельно
            const [mealsResponse, productsResponse] = await Promise.all([
                fetch(MEALS_API),
                fetch(PRODUCTS_API)
            ]);
            
            if (!mealsResponse.ok) throw new Error(`Ошибка загрузки блюд: ${mealsResponse.status}`);
            if (!productsResponse.ok) throw new Error(`Ошибка загрузки напитков: ${productsResponse.status}`);
            
            allMeals = await mealsResponse.json();
            allProducts = await productsResponse.json();
            
            console.log('Блюда загружены:', allMeals.length);
            console.log('Напитки загружены:', allProducts.length);
            
            // Инициализируем счетчики использования напитков
            initializeDrinkUsage();
            
            // Показываем популярные блюда
            displayPopularDishes();
            
            // Показываем только первые 6 напитков по умолчанию
            displayProducts(allProducts.slice(0, 6));
            
        } catch (error) {
            console.error('Error loading data:', error);
            errorMessage.style.display = 'block';
            errorMessage.textContent = `Ошибка загрузки данных: ${error.message}. Проверьте подключение к интернету.`;
        } finally {
            loading.style.display = 'none';
        }
    }
    
    // Показ популярных блюд
    function displayPopularDishes() {
        popularDishes.innerHTML = '';
        
        // Берем первые 8 блюд для показа
        const popularMeals = allMeals.slice(0, 8);
        
        popularMeals.forEach(meal => {
            const dishTag = document.createElement('div');
            dishTag.className = 'dish-tag';
            dishTag.textContent = meal.name;
            dishTag.addEventListener('click', () => {
                selectMeal(meal);
            });
            popularDishes.appendChild(dishTag);
        });
    }
    
    // Выбор блюда
    function selectMeal(meal) {
        // Заполняем поле поиска
        mealSearch.value = meal.name;
        
        // Показываем информацию о блюде
        document.getElementById('selected-meal-name').textContent = meal.name;
        document.getElementById('selected-meal-description').textContent = 
            meal.description || 'Вкусное блюдо для идеального ужина';
        
        const mealImage = document.getElementById('selected-meal-image');
        if (meal.image || meal.imageUrl) {
            mealImage.innerHTML = `<img src="${meal.image || meal.imageUrl}" alt="${meal.name}">`;
        } else {
            mealImage.innerHTML = '🍽️';
            mealImage.style.display = 'flex';
            mealImage.style.alignItems = 'center';
            mealImage.style.justifyContent = 'center';
            mealImage.style.fontSize = '24px';
        }
        
        selectedMealInfo.classList.add('active');
        
        // Ищем подходящие напитки с алгоритмом минимизации повторений
        const recommendedDrinks = findDrinksForMeal(meal);
        displayProducts(recommendedDrinks);
        
        document.querySelector('.section-title').textContent = 
            `Идеальные напитки для "${meal.name}" (${recommendedDrinks.length} найдено)`;
    }
    
    // Автодополнение при вводе
    mealSearch.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        searchSuggestions.innerHTML = '';
        
        if (query.length < 2) {
            searchSuggestions.style.display = 'none';
            return;
        }
        
        const filteredMeals = allMeals.filter(meal => 
            meal.name.toLowerCase().includes(query)
        ).slice(0, 5);
        
        if (filtermedMeals.length > 0) {
            filteredMeals.forEach(meal => {
                const suggestion = document.createElement('div');
                suggestion.className = 'suggestion-item';
                suggestion.textContent = meal.name;
                suggestion.addEventListener('click', () => {
                    selectMeal(meal);
                    searchSuggestions.style.display = 'none';
                });
                searchSuggestions.appendChild(suggestion);
            });
            searchSuggestions.style.display = 'block';
        } else {
            searchSuggestions.style.display = 'none';
        }
    });
    
    // Скрываем suggestions при клике вне
    document.addEventListener('click', function(e) {
        if (!mealSearch.contains(e.target) && !searchSuggestions.contains(e.target)) {
            searchSuggestions.style.display = 'none';
        }
    });
    
    // Функция для отображения карточек продуктов
    function displayProducts(products) {
        drinkCards.innerHTML = '';
        
        if (products.length === 0) {
            drinkCards.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
                    <p>К сожалению, подходящие напитки не найдены.</p>
                    <p>Попробуйте выбрать другое блюдо.</p>
                </div>
            `;
            return;
        }
        
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            
            const productType = getProductType(product.category);
            const productPrice = product.price ? `${product.price} ₽` : 'Цена не указана';
            const inStock = product.inStock !== false;
            
            // Создаем безопасную строку JSON для передачи в функцию
            const productData = JSON.stringify(product).replace(/"/g, '&quot;');
            
            card.innerHTML = `
                <div class="card-image">
                    ${product.image || product.imageUrl ? 
                        `<img src="${product.image || product.imageUrl}" alt="${product.name}" 
                              onerror="this.style.display='none'; 
                                       this.parentNode.innerHTML='${getDrinkEmoji(product.category)}'; 
                                       this.parentNode.style.display='flex'; 
                                       this.parentNode.style.alignItems='center'; 
                                       this.parentNode.style.justifyContent='center'; 
                                       this.parentNode.style.fontSize='48px';">` : 
                        getDrinkEmoji(product.category)
                    }
                </div>
                <div class="card-content">
                    <div class="card-type">${productType}</div>
                    <h3 class="card-title">${product.name || 'Без названия'}</h3>
                    <div class="card-price">${productPrice}</div>
                    <div class="card-actions">
                        <span class="availability ${inStock ? '' : 'out-of-stock'}">
                            ${inStock ? '✓ В наличии' : '✗ Нет в наличии'}
                        </span>
                        <button class="btn btn-primary" onclick="openDrinkModal(${productData})">
                            Информация
                        </button>
                    </div>
                </div>
            `;
            
            drinkCards.appendChild(card);
        });
    }
    
    // Обработчики событий для кнопки поиска
    searchBtn.addEventListener('click', function() {
        const query = mealSearch.value.trim();
        
        if (query === '') {
            // Показываем ВСЕ напитки из базы данных
            displayProducts(allProducts);
            selectedMealInfo.classList.remove('active');
            document.querySelector('.section-title').textContent = `Весь каталог напитков (${allProducts.length} наименований)`;
        } else {
            // Ищем блюдо по названию
            const foundMeal = allMeals.find(meal => 
                meal.name.toLowerCase().includes(query.toLowerCase())
            );
            
            if (foundMeal) {
                selectMeal(foundMeal);
            } else {
                // Если блюдо не найдено, показываем сообщение
                displayProducts([]);
                selectedMealInfo.classList.remove('active');
                document.querySelector('.section-title').textContent = `Блюдо "${query}" не найдено`;
            }
        }
    });
    
    // Закрытие модального окна при клике вне его
    document.getElementById('drink-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Закрытие модального окна по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Обработка нажатия Enter в поле поиска
    mealSearch.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
    
    // Загружаем данные при старте
    loadAllData();
});