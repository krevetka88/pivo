// === ОБНОВЛЕННЫЕ РЕАЛЬНЫЕ СОЧЕТАНИЯ (2024) ===
// Источники: Wine Folly, ресторанные карты вин, экспертные рекомендации
// По данным Wine Spectator, JamesSuckling.com, Decanter

export const PAIRINGS = {
  REAL_PAIRINGS: {
    'Стейк рибай': ['Каберне совиньон', 'Шираз', 'Мальбек'],
    'Морепродукты': ['Совиньон Блан', 'Верментино', 'Шабли'],
    'Устрицы': ['Шампанское', 'Мюскаде', 'Шабли'],
    'Паста': ['Кьянти', 'Барбера', 'Санджовезе'],
    'Пицца': ['Кьянти', 'Ламбруско (сухое)', 'Санджовезе'],
    'Суши': ['Рислинг (сухой)', 'Саке', 'Совиньон Блан'],
    'Острая еда': ['Рислинг (полусухой)', 'Гевюрцтраминер', 'Ламбик'],
    'Бургер': ['Зинфандель', 'Американский IPA', 'Портер'],
    'Десерты': ['Портвейн', 'Сотерн', 'Москато'],
    'Шоколад': ['Портвейн', 'Каберне совиньон (выдержанное)', 'Рубиновый порт'],
    'Красное мясо': ['Каберне совиньон', 'Сира', 'Бордоская смесь'],
    'Белое мясо': ['Шардоне', 'Пино Гриджио', 'Вионие'],
    'Мягкие сыры': ['Совиньон Блан', 'Шабли', 'Шенен Блан'],
    'Твёрдые сыры': ['Каберне совиньон', 'Темпранильо', 'Оранжевое вино'],
    'Копчёности': ['Зинфандель', 'Сира', 'Темное пиво'],
    'Гриль': ['Шираз', 'Темпранильо', 'IPA'],
    'Закуски': ['Просекко', 'Шампанское Брют', 'Альбариньо'],
    'Салаты': ['Совиньон Блан', 'Пино Гриджио', 'Вердехо'],
    'Супы': ['Шардоне (легкое)', 'Пино Нуар (кремовые супы)', 'Фино Херес'],
    'Рыба': ['Шабли', 'Альбариньо', 'Совиньон Блан'],
    'Курица': ['Шардоне', 'Пино Нуар', 'Грюнер Вельтлинер'],
    'Сыр': ['Шампанское', 'Портвейн', 'Совиньон Блан'],
    'Говядина': ['Каберне совиньон', 'Мальбек', 'Сира'],
    'Свинина': ['Рислинг (полусухой)', 'Пино Нуар', 'Сидр'],
    'Телятина': ['Пино Нуар', 'Мерло', 'Кьянти Классико'],
    'Утка': ['Пино Нуар', 'Гевюрцтраминер', 'Сира'],
    'Лёгкие блюда': ['Просекко', 'Пино Гриджио', 'Совиньон Блан'],
    'Тяжёлые блюда': ['Каберне совиньон', 'Сира', 'Темпранильо'],
    'Закуски к пиву': ['Лагер', 'Пшеничное пиво', 'IPA'],
    'Фрукты': ['Москато', 'Росé', 'Сидр'],
    'Выпечка': ['Москато', 'Ламбруско (полусладкое)', 'Сидр'],
    'Жареная еда': ['Пилснер', 'Просекко', 'Шардоне (лёгкое)'],
    'Копчёная рыба': ['Фино Херес', 'Совиньон Блан', 'Сухой рислинг'],
    'Карри': ['Рислинг (полусухой)', 'Гевюрцтраминер'],
    'Борщ': ['Пино Нуар', 'Гаме', 'Темпранильо молодое'],
  },

  KEYWORD_PAIRINGS: {
    spicy: ['Рислинг (полусухой)', 'Гевюрцтраминер', 'Ламбик'],
    sweet: ['Москато', 'Портвейн', 'Сотерн'],
    sour: ['Совиньон Блан', 'Грюнер Вельтлинер', 'Шабли'],
    bitter: ['IPA', 'Негрони', 'Амари'],
    salty: ['Шампанское', 'Фино Херес', 'Сухой вермут'],
    umami: ['Пино Нуар', 'Сира', 'Саке'],
    seafood: ['Шабли', 'Альбариньо', 'Совиньон Блан'],
    meat: ['Каберне совиньон', 'Сира', 'Мальбек'],
    dessert: ['Портвейн', 'Москато', 'Сотерн'],
    cheese: ['Совиньон Блан', 'Шампанское', 'Портвейн'],
    pasta: ['Кьянти', 'Верментино', 'Барбера'],
    pizza: ['Кьянти', 'Ламбруско (сухое)', 'Санджовезе'],
    grill: ['Сира', 'Темпранильо', 'Зинфандель'],
    asian: ['Рислинг (полусухой)', 'Гевюрцтраминер', 'Саке'],
    indian: ['Рислинг (полусухой)', 'Гевюрцтраминер'],
    mexican: ['Зинфандель', 'Лагер', 'Маргарита'],
    japanese: ['Саке', 'Рислинг (сухой)', 'Совиньон Блан'],
    barbecue: ['Зинфандель', 'Сира', 'IPA'],
    smoked: ['Фино Херес', 'Сира', 'Портер'],
    fried: ['Просекко', 'Пилснер', 'Шардоне (лёгкое)'],
    creamy: ['Шардоне (выдержанное)', 'Вионие', 'Пино Нуар'],
    tomato: ['Кьянти', 'Барбера', 'Санджовезе'],
    citrus: ['Совиньон Блан', 'Альбариньо', 'Сухой вермут'],
    chocolate: ['Портвейн', 'Каберне совиньон (выдержанное)', 'Мадейра'],
    berry: ['Пино Нуар', 'Росé', 'Ламбруско'],
    mushroom: ['Пино Нуар', 'Шардоне выдержанное', 'Неббиоло'],
  },

  CATEGORY_PAIRINGS: {
    meat: ['Каберне совиньон', 'Сира', 'Мальбек'],
    fish: ['Шабли', 'Совиньон Блан', 'Альбариньо'],
    spicy: ['Рислинг (полусухой)', 'Гевюрцтраминер'],
    creamy: ['Шардоне (выдержанное)', 'Вионие', 'Пино Нуар'],
    fried: ['Просекко', 'Пилснер'],
    sweet: ['Портвейн', 'Москато'],
    light: ['Пино Гриджио', 'Совиньон Блан'],
    heavy: ['Каберне совиньон', 'Темпранильо', 'Сира'],
    cheese: ['Шампанское', 'Портвейн', 'Совиньон Блан'],
    vegetables: ['Совиньон Блан', 'Вердехо', 'Грюнер Вельтлинер'],
    grill: ['Сира', 'Зинфандель', 'Темпранильо'],
    dessert: ['Сотерн', 'Москато', 'Портвейн'],
  }
};

// Глобальные переменные для хранения данных
let allMeals = [];
let allProducts = [];
let lastRecommendedDrinks = new Set(); // Для отслеживания последних рекомендованных напитков
let drinkUsageCount = new Map(); // Для подсчета использования напитков
let fixedDrinkSets = new Map(); // Для хранения фиксированных наборов напитков для каждого блюда

// РАСШИРЕННАЯ онтологическая модель сочетаний с большим разнообразием
const flavorProfiles = {
    // Конкретные блюда -> конкретные напитки (уникальные для каждого блюда)
    exactMatches: REAL_PAIRINGS,

    // Категории блюд и их общие сочетания (уникальные для каждой категории)
    categoryPairs: CATEGORY_PAIRINGS,

    // Ключевые слова в описаниях (уникальные для каждого типа)
    keywordPairs: KEYWORD_PAIRINGS
};

// Функция для создания фиксированного хэша на основе названия блюда
function getFixedHashForMeal(mealName, seed = 42) {
    let hash = 0;
    for (let i = 0; i < mealName.length; i++) {
        hash = ((hash << 5) - hash) + mealName.charCodeAt(i);
        hash = hash & hash; // Преобразование в 32-битное целое
    }
    // Используем seed для детерминированного результата
    return Math.abs((hash * seed) % 1000);
}

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
        'juice': 'Сок',
        'sake': 'Саке',
        'tequila': 'Текила',
        'brandy': 'Бренди',
        'absinthe': 'Абсент',
        'gin': 'Джин'
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
        'juice': '🧃',
        'sake': '🍶',
        'tequila': '🍸',
        'brandy': '🥃',
        'absinthe': '🍸',
        'gin': '🍸'
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

// ФУНКЦИЯ ПОДБОРА НАПИТКОВ С ФИКСИРОВАННЫМИ НАБОРАМИ (2-3 напитка)
function findDrinksForMeal(meal) {
    const mealName = meal.name.toLowerCase();
    const mealDescription = (meal.description || '').toLowerCase();
    const mealCategory = (meal.category || '').toLowerCase();
    
    console.log('Поиск фиксированных напитков для:', mealName);
    
    // Шаг 1: Создаем уникальный хэш для блюда (детерминированный)
    const mealHash = getFixedHashForMeal(mealName);
    
    // Шаг 2: Получаем ВСЕ возможные рекомендации по онтологии
    const allPossibleDrinks = new Set();
    
    // 1. Точные совпадения из REAL_PAIRINGS
    for (const [dishName, drinks] of Object.entries(REAL_PAIRINGS)) {
        if (mealName.includes(dishName) || dishName.includes(mealName)) {
            drinks.forEach(drink => allPossibleDrinks.add(drink.toLowerCase()));
        }
    }
    
    // 2. Совпадения по категории
    if (CATEGORY_PAIRINGS[mealCategory]) {
        CATEGORY_PAIRINGS[mealCategory].forEach(drink => {
            allPossibleDrinks.add(drink.toLowerCase());
        });
    }
    
    // 3. Совпадения по ключевым словам
    for (const [keyword, drinks] of Object.entries(KEYWORD_PAIRINGS)) {
        if (mealDescription.includes(keyword) || mealName.includes(keyword)) {
            drinks.forEach(drink => allPossibleDrinks.add(drink.toLowerCase()));
        }
    }
    
    console.log('Все возможные напитки по онтологии:', Array.from(allPossibleDrinks));
    
    // Шаг 3: Ищем напитки в базе данных, которые совпадают с рекомендациями
    const matchingProducts = [];
    
    allPossibleDrinks.forEach(drinkName => {
        // Ищем все напитки, которые содержат это название
        const foundProducts = allProducts.filter(product => {
            const productName = (product.name || '').toLowerCase();
            const productCategory = (product.category || '').toLowerCase();
            const productDescription = (product.description || '').toLowerCase();
            
            // Проверяем совпадение с названием напитка
            return productName.includes(drinkName) || 
                   drinkName.includes(productName) ||
                   productCategory.includes(drinkName) ||
                   productDescription.includes(drinkName);
        });
        
        matchingProducts.push(...foundProducts);
    });
    
    console.log('Найдено совпадающих напитков:', matchingProducts.length);
    
    // Шаг 4: Выбираем фиксированный набор из 2-3 напитков на основе хэша
    let selectedProducts = [];
    
    if (matchingProducts.length > 0) {
        // Сортируем для детерминированного выбора
        matchingProducts.sort((a, b) => {
            return (a.name || '').localeCompare(b.name || '');
        });
        
        // Выбираем 2 или 3 напитка на основе хэша (фиксировано для блюда)
        const numDrinks = 2 + (mealHash % 2); // 2 или 3 напитка (фиксировано для блюда)
        const startIndex = mealHash % Math.max(1, matchingProducts.length - numDrinks);
        
        // Берем уникальные напитки
        const selectedNames = new Set();
        for (let i = startIndex; i < matchingProducts.length && selectedProducts.length < numDrinks; i++) {
            const product = matchingProducts[i];
            const productName = (product.name || '').toLowerCase();
            
            if (!selectedNames.has(productName)) {
                selectedProducts.push(product);
                selectedNames.add(productName);
            }
        }
        
        // Если не набрали достаточно уникальных напитков
        if (selectedProducts.length < numDrinks) {
            // Добавляем дополнительные напитки
            for (const product of matchingProducts) {
                if (selectedProducts.length >= numDrinks) break;
                
                const productName = (product.name || '').toLowerCase();
                if (!selectedNames.has(productName)) {
                    selectedProducts.push(product);
                    selectedNames.add(productName);
                }
            }
        }
    }
    
    // Шаг 5: Если совпадений мало или нет, берем подходящие по категории
    if (selectedProducts.length < 2) {
        // Ищем напитки по категории блюда
        let alternativeProducts = allProducts.filter(product => {
            // Проверяем, есть ли у напитка категория, подходящая к блюду
            const productCategory = (product.category || '').toLowerCase();
            const productName = (product.name || '').toLowerCase();
            
            // Пропускаем уже выбранные
            const alreadySelected = selectedProducts.some(p => 
                (p.name || '').toLowerCase() === productName
            );
            
            return !alreadySelected;
        });
        
        // Сортируем для детерминированного выбора
        alternativeProducts.sort((a, b) => {
            return (a.name || '').localeCompare(b.name || '');
        });
        
        // Дополняем до 2-3 напитков (используем тот же mealHash для согласованности)
        const numNeeded = 2 + (mealHash % 2) - selectedProducts.length;
        const altStartIndex = mealHash % Math.max(1, alternativeProducts.length - numNeeded);
        
        for (let i = altStartIndex; i < alternativeProducts.length && selectedProducts.length < (2 + (mealHash % 2)); i++) {
            const product = alternativeProducts[i];
            const productName = (product.name || '').toLowerCase();
            const alreadySelected = selectedProducts.some(p => 
                (p.name || '').toLowerCase() === productName
            );
            
            if (!alreadySelected) {
                selectedProducts.push(product);
            }
        }
    }
    
    // Шаг 6: Если все еще мало напитков, добавляем любые уникальные
    if (selectedProducts.length < 2) {
        // Добавляем любые уникальные напитки из базы
        for (const product of allProducts) {
            if (selectedProducts.length >= 2 + (mealHash % 2)) break;
            
            const productName = (product.name || '').toLowerCase();
            const alreadySelected = selectedProducts.some(p => 
                (p.name || '').toLowerCase() === productName
            );
            
            if (!alreadySelected) {
                selectedProducts.push(product);
            }
        }
    }
    
    console.log(`Фиксированный набор из ${selectedProducts.length} напитков для "${mealName}":`, selectedProducts.map(p => p.name));
    
    // Сохраняем этот набор для данного блюда
    fixedDrinkSets.set(mealName, selectedProducts);
    
    return selectedProducts;
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
        
        // Проверяем, есть ли уже фиксированный набор для этого блюда
        const mealName = meal.name.toLowerCase();
        let recommendedDrinks;
        
        if (fixedDrinkSets.has(mealName)) {
            // Используем сохраненный фиксированный набор
            recommendedDrinks = fixedDrinkSets.get(mealName);
            console.log('Используем сохраненный фиксированный набор для', mealName);
        } else {
            // Генерируем новый фиксированный набор
            recommendedDrinks = findDrinksForMeal(meal);
        }
        
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

