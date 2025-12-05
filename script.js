// Глобальные переменные для хранения данных
let allMeals = [];
let allProducts = [];

// РЕАЛЬНЫЕ СОЧЕТАНИЯ ИЗ КУЛИНАРНЫХ ЭКСПЕРТОВ (обновленные)
const REAL_PAIRINGS = {
    // РЫБА И МОРЕПРОДУКТЫ
    'лосось': ['пино нуар', 'шардоне', 'совиньон блан', 'розовое вино'],
    'тунец': ['совиньон блан', 'пино гриджио', 'розовое вино'],
    'форель': ['совиньон блан', 'рислинг', 'пино гриджио'],
    'сибас': ['шардоне', 'совиньон блан', 'верментино'],
    'окунь': ['рислинг', 'совиньон блан', 'пино гриджио'],
    'карп': ['рислинг', 'совиньон блан', 'гевюрцтраминер'],
    'сельдь': ['аквавит', 'водка', 'пильзнер'],
    'креветки': ['совиньон блан', 'шампанское', 'пино гриджио'],
    'кальмары': ['совиньон блан', 'пино гриджио', 'пино нуар'],
    'мидии': ['шардоне', 'совиньон блан', 'шампанское'],
    'устрицы': ['шампанское', 'совиньон блан', 'мускаде'],
    'скумбрия': ['рислинг', 'совиньон блан', 'гевюрцтраминер'],
    'судак': ['шардоне', 'рислинг', 'совиньон блан'],
    'дорадо': ['совиньон блан', 'пино гриджио', 'верментино'],
    
    // МЯСНЫЕ БЛЮДА
    'стейк': ['каберне совиньон', 'шираз', 'мальбек', 'бордо'],
    'говядина': ['каберне совиньон', 'мерло', 'бордо', 'портвейн'],
    'баранина': ['шираз', 'каберне совиньон', 'бордо'],
    'свинина': ['пино нуар', 'мерло', 'шардоне'],
    'телятина': ['пино нуар', 'шардоне', 'божоле'],
    'антрекот': ['каберне совиньон', 'мерло', 'шираз'],
    'ребрышки': ['зинфандель', 'шираз', 'пино нуар'],
    'грудинка': ['каберне совиньон', 'портвейн', 'бордо'],
    'вырезка': ['каберне совиньон', 'бордо', 'мерло'],
    
    // ПТИЦА
    'курица': ['шардоне', 'пино гриджио', 'совиньон блан', 'рислинг'],
    'утка': ['пино нуар', 'мерло', 'шираз'],
    'индейка': ['шардоне', 'рислинг', 'совиньон блан'],
    'гусь': ['пино нуар', 'каберне совиньон', 'бордо'],
    'перепел': ['пино нуар', 'божоле', 'шардоне'],
    'фазан': ['пино нуар', 'бордо', 'каберне совиньон'],
    
    // ПАСТА И ПИЦЦА
    'паста': ['кьянти', 'барбера', 'дольчетто'],
    'пицца': ['кьянти', 'сангрия', 'барбера'],
    'равиоли': ['барбера', 'дольчетто', 'шардоне'],
    'лазанья': ['кьянти', 'барбера', 'неббиоло'],
    'спагетти': ['кьянти', 'барбера', 'дольчетто'],
    'ризотто': ['шардоне', 'пино гриджио', 'арнеис'],
    
    // САЛАТЫ
    'цезарь': ['шардоне', 'совиньон блан', 'вердиккьо'],
    'греческий': ['розовое вино', 'рецина', 'ассортико'],
    'оливье': ['водка', 'шампанское', 'пиво'],
    'винегрет': ['пино гриджио', 'совиньон блан'],
    
    // СУПЫ
    'борщ': ['херес', 'водка', 'темное пиво'],
    'щи': ['херес', 'водка', 'светлое пиво'],
    'том ям': ['пиво', 'рислинг', 'совиньон блан'],
    'куриный': ['шардоне', 'рислинг', 'совиньон блан'],
    'грибной': ['пино нуар', 'шардоне', 'бордо'],
    
    // ДЕСЕРТЫ
    'шоколад': ['портвейн', 'каберне совиньон', 'мадера'],
    'чизкейк': ['сотерн', 'асти', 'мускат'],
    'тирамису': ['марсала', 'сотерн', 'асти'],
    'мороженое': ['сотерн', 'асти', 'ликёр'],
    'фруктовый': ['сотерн', 'мускат', 'асти'],
    'медовик': ['сотерн', 'асти', 'херес'],
    
    // АЗИАТСКАЯ КУХНЯ
    'суши': ['саке', 'пино гриджио', 'рислинг'],
    'роллы': ['саке', 'совиньон блан', 'пино гриджио'],
    'том ям': ['пиво', 'рислинг', 'совиньон блан'],
    'пад тай': ['рислинг', 'совиньон блан', 'пино гриджио'],
    'вок': ['пино гриджио', 'рислинг', 'совиньон блан'],
    
    // РУССКАЯ КУХНЯ
    'пельмени': ['водка', 'пиво', 'красное вино'],
    'блины': ['шампанское', 'игристое вино', 'белое вино'],
    'сало': ['водка', 'самогон', 'пиво'],
    'хачапури': ['белое вино', 'розовое вино', 'пиво'],
    
    // СЫРЫ
    'пармезан': ['кьянти', 'барбера', 'красное вино'],
    'бри': ['шампанское', 'шардоне', 'игристое вино'],
    'рокфор': ['сотерн', 'портвейн', 'красное вино'],
    'моцарелла': ['совиньон блан', 'пино гриджио', 'розовое вино'],
    
    // ЯЙЦА И ЗАВТРАКИ
    'омлет': ['шампанское', 'игристое вино', 'белое вино'],
    'яичница': ['пино гриджио', 'совиньон блан', 'рислинг'],
    'бенедикт': ['шардоне', 'совиньон блан', 'игристое вино']
};

// Дополнительные сочетания для ключевых слов
const KEYWORD_PAIRINGS = {
    'гриль': ['каберне совиньон', 'шираз', 'мальбек'],
    'запеченный': ['шардоне', 'пино нуар', 'каберне совиньон'],
    'тушеный': ['мерло', 'бордо', 'каберне совиньон'],
    'жареный': ['каберне совиньон', 'шираз', 'мальбек'],
    'копченый': ['виски', 'портвейн', 'пино нуар'],
    'маринованный': ['рислинг', 'совиньон блан', 'гевюрцтраминер'],
    'острый': ['рислинг', 'пиво', 'гевюрцтраминер'],
    'сладкий': ['сотерн', 'асти', 'мускат'],
    'кислый': ['рислинг', 'совиньон блан', 'пино гриджио'],
    'соленый': ['рислинг', 'совиньон блан', 'пино гриджио'],
    'жирный': ['каберне совиньон', 'шираз', 'мальбек'],
    'нежный': ['шардоне', 'пино гриджио', 'совиньон блан'],
    'пряный': ['шираз', 'гевюрцтраминер', 'рислинг']
};

// Категорийные сочетания (если не нашли точное блюдо)
const CATEGORY_PAIRINGS = {
    'рыба': ['совиньон блан', 'рислинг', 'пино гриджио'],
    'морепродукты': ['шардоне', 'совиньон блан', 'шампанское'],
    'красное мясо': ['каберне совиньон', 'шираз', 'мальбек'],
    'птица': ['шардоне', 'пино нуар', 'рислинг'],
    'паста': ['кьянти', 'барбера', 'дольчетто'],
    'салат': ['совиньон блан', 'пино гриджио', 'розовое вино'],
    'суп': ['рислинг', 'совиньон блан', 'херес'],
    'десерт': ['сотерн', 'асти', 'мускат'],
    'сыр': ['красное вино', 'портвейн', 'шампанское'],
    'пицца': ['кьянти', 'барбера', 'пиво']
};

// Функция для поиска подходящих напитков
function findDrinksForMeal(meal) {
    const mealName = meal.name.toLowerCase();
    const mealDescription = (meal.description || '').toLowerCase();
    const mealCategory = (meal.category || '').toLowerCase();
    
    console.log('Поиск напитков для:', mealName);
    
    // 1. Пробуем найти точное совпадение в REAL_PAIRINGS
    let recommendedDrinks = [];
    
    // Проверяем точное совпадение
    if (REAL_PAIRINGS[mealName]) {
        recommendedDrinks = [...REAL_PAIRINGS[mealName]];
        console.log('Найдено точное совпадение в базе:', recommendedDrinks);
    } else {
        // Ищем частичное совпадение
        for (const [dish, drinks] of Object.entries(REAL_PAIRINGS)) {
            if (mealName.includes(dish)) {
                recommendedDrinks = [...drinks];
                console.log('Найдено частичное совпадение:', dish, drinks);
                break;
            }
        }
    }
    
    // 2. Если не нашли, ищем по ключевым словам в описании
    if (recommendedDrinks.length === 0) {
        for (const [keyword, drinks] of Object.entries(KEYWORD_PAIRINGS)) {
            if (mealDescription.includes(keyword)) {
                recommendedDrinks = [...drinks];
                console.log('Найдено по ключевому слову:', keyword, drinks);
                break;
            }
        }
    }
    
    // 3. Если все еще не нашли, используем категорию
    if (recommendedDrinks.length === 0 && mealCategory) {
        for (const [category, drinks] of Object.entries(CATEGORY_PAIRINGS)) {
            if (mealCategory.includes(category)) {
                recommendedDrinks = [...drinks];
                console.log('Найдено по категории:', category, drinks);
                break;
            }
        }
    }
    
    // 4. Если ничего не нашли, возвращаем универсальные напитки
    if (recommendedDrinks.length === 0) {
        recommendedDrinks = ['шардоне', 'совиньон блан', 'каберне совиньон'];
        console.log('Используем универсальные напитки');
    }
    
    // 5. Ищем реальные напитки в базе данных, соответствующие рекомендациям
    const matchedProducts = findMatchingProducts(recommendedDrinks);
    
    console.log('Найдено подходящих напитков:', matchedProducts.length);
    return matchedProducts;
}

// Функция для поиска реальных напитков в базе
function findMatchingProducts(recommendedDrinks) {
    const matched = [];
    const usedNames = new Set();
    
    // Ищем точные совпадения
    for (const drinkName of recommendedDrinks) {
        for (const product of allProducts) {
            const productName = (product.name || '').toLowerCase();
            const productCategory = (product.category || '').toLowerCase();
            
            if (productName.includes(drinkName.toLowerCase()) || 
                productCategory.includes(drinkName.toLowerCase())) {
                
                if (!usedNames.has(productName)) {
                    matched.push(product);
                    usedNames.add(productName);
                    
                    if (matched.length >= 3) break;
                }
            }
        }
        if (matched.length >= 3) break;
    }
    
    // Если нашли меньше 3 напитков, добавляем подходящие по категории
    if (matched.length < 3) {
        // Определяем общую категорию по найденным напиткам
        let mainCategory = '';
        if (matched.length > 0) {
            const categories = matched.map(p => p.category).filter(Boolean);
            if (categories.length > 0) {
                // Находим самую частую категорию
                const categoryCount = {};
                categories.forEach(cat => {
                    categoryCount[cat] = (categoryCount[cat] || 0) + 1;
                });
                mainCategory = Object.entries(categoryCount)
                    .sort((a, b) => b[1] - a[1])[0][0];
            }
        }
        
        // Добавляем напитки из той же категории
        if (mainCategory) {
            for (const product of allProducts) {
                if (matched.length >= 3) break;
                
                const productName = (product.name || '').toLowerCase();
                if (product.category === mainCategory && !usedNames.has(productName)) {
                    matched.push(product);
                    usedNames.add(productName);
                }
            }
        }
    }
    
    // Если все еще мало напитков, добавляем любые
    if (matched.length < 3) {
        for (const product of allProducts) {
            if (matched.length >= 3) break;
            
            const productName = (product.name || '').toLowerCase();
            if (!usedNames.has(productName)) {
                matched.push(product);
                usedNames.add(productName);
            }
        }
    }
    
    return matched.slice(0, 3); // Возвращаем максимум 3 напитка
}

// Вспомогательная функция для получения типа напитка
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

// Функция для получения эмодзи напитка
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

// Функция для переключения секций
function showSection(sectionName) {
    document.getElementById('main-section').style.display = 'none';
    document.getElementById('catalog-section').classList.remove('active');
    document.getElementById('about-section').classList.remove('active');
    
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
    
    catalogGrid.innerHTML = '';
    catalogFilters.innerHTML = '';
    
    const categories = [...new Set(allMeals.map(meal => meal.category))].filter(Boolean);
    
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
    
    displayMealsInCatalog(allMeals);
}

// Функция фильтрации каталога
function filterCatalog(category) {
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
    document.getElementById('meal-search').value = meal.name;
    selectMeal(meal);
    document.getElementById('recommendations').scrollIntoView({ behavior: 'smooth' });
}

// Функция открытия модального окна с информацией о напитке
function openDrinkModal(product) {
    const modal = document.getElementById('drink-modal');
    
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

// Основная функция при загрузке страницы
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
            
            displayPopularDishes();
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
        mealSearch.value = meal.name;
        
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
        
        if (filteredMeals.length > 0) {
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
            displayProducts(allProducts);
            selectedMealInfo.classList.remove('active');
            document.querySelector('.section-title').textContent = `Весь каталог напитков (${allProducts.length} наименований)`;
        } else {
            const foundMeal = allMeals.find(meal => 
                meal.name.toLowerCase().includes(query.toLowerCase())
            );
            
            if (foundMeal) {
                selectMeal(foundMeal);
            } else {
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
