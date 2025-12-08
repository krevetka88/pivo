/**
 * Базовые винно-пивные правила подобраны по типичным рекомендациям сомелье:
 * - Красное мясо, гриль → Каберне, Сира, Мальбек, крепкое пиво
 * - Рыба/морепродукты → Совиньон Блан, Шабли, сухой Рислинг
 * - Острое/азиатское → Рислинг полусухой, Гевюрцтраминер, пшеничное пиво
 * - Сливочные/грибные соусы → Шардоне, Пино Нуар
 * и т.п.
 */

/** НАБОР СТИЛЕЙ НАПИТКОВ (ИМЕНА, КОТОРЫЕ МЫ БУДЕМ ИСПОЛЬЗОВАТЬ В ЛОГИКЕ) */
const REAL_PAIRINGS = {
  // КОНКРЕТНЫЕ БЛЮДА
  'борщ': ['Пино Нуар', 'Гаме', 'Темпранильо молодое'],
  'том ям': ['Рислинг (полусухой)', 'Гевюрцтраминер', 'Пшеничное пиво'],
  'суши': ['Саке', 'Рислинг (сухой)', 'Совиньон Блан'],
  'ролл': ['Саке', 'Рислинг (сухой)', 'Совиньон Блан'],
  'цезарь': ['Шардоне (легкое)', 'Совиньон Блан', 'Просекко'],
  'капрезе': ['Совиньон Блан', 'Пино Гриджио', 'Просекко'],
  'оливье': ['Классическая водка', 'Игристое брют', 'Совиньон Блан'],
  // для греческого салата жёстко фиксируем лёгкие белые/игристые
  'греческий салат': ['Совиньон Блан', 'Пино Гриджио', 'Просекко'],
  'паста': ['Кьянти', 'Барбера', 'Санджовезе'],
  'пицца': ['Кьянти', 'Санджовезе', 'Ламбруско (сухое)'],
  'бургер': ['Зинфандель', 'Американский IPA', 'Портер'],
  'стейк': ['Каберне совиньон', 'Сира', 'Мальбек'],
  'шашлык': ['Сира', 'Темпранильо', 'IPA'],
  'люля': ['Сира', 'Темпранильо', 'Зинфандель'],
  'утка': ['Пино Нуар', 'Гевюрцтраминер', 'Сира'],
};

const CATEGORY_PAIRINGS = {
  meat: ['Каберне совиньон', 'Сира', 'Мальбек'],
  fish: ['Совиньон Блан', 'Шабли', 'Рислинг (сухой)'],
  seafood: ['Совиньон Блан', 'Верментино', 'Шампанское Брют'],
  salad: ['Совиньон Блан', 'Пино Гриджио', 'Просекко'],
  soup_light: ['Шардоне (легкое)', 'Совиньон Блан'],
  soup_cream: ['Шардоне (легкое)', 'Пино Нуар'],
  soup_spicy: ['Рислинг (полусухой)', 'Гевюрцтраминер', 'Пшеничное пиво'],
  grill: ['Сира', 'Зинфандель', 'IPA'],
  fried_snack: ['Лагер', 'Пшеничное пиво', 'Пилснер'],
  spicy: ['Рислинг (полусухой)', 'Гевюрцтраминер', 'Пшеничное пиво'],
  creamy: ['Шардоне (выдержанное)', 'Пино Нуар'],
  tomato: ['Кьянти', 'Барбера', 'Санджовезе'],
  mushroom: ['Пино Нуар', 'Шардоне (выдержанное)'],
  duck: ['Пино Нуар', 'Гевюрцтраминер'],
  lamb: ['Сира', 'Темпранильо', 'Каберне совиньон'],
  beef: ['Каберне совиньон', 'Мальбек', 'Мерло'],
  pork: ['Пино Нуар', 'Рислинг (полусухой)'],
  chicken: ['Шардоне (легкое)', 'Совиньон Блан'],
};

/** ГЛОБАЛЬНЫЕ ДАННЫЕ */
let allMeals = [];
let allProducts = [];
let drinkUsageCount = new Map();     // сколько раз уже рекомендовали напиток
let fixedDrinkSets = new Map();      // фиксированные наборы напитков по имени блюда
let productsStyled = false;          // флаг, что мы разметили стили продуктов

/** СТРУКТУРА СТИЛЕЙ У ПРОДУКТОВ
 * product._styleTags = ['red-wine','cabernet-sauvignon','dry-wine',...]
 */
function computeProductStyles() {
  allProducts.forEach(product => {
    const name = (product.name || '').toLowerCase();
    const description = (product.description || '').toLowerCase();
    const text = `${name} ${description}`;
    const category = (product.category || '').toLowerCase();

    const tags = [];

    if (category === 'wine') {
      // цвет
      if (text.includes('красное')) tags.push('red-wine');
      if (text.includes('белое')) tags.push('white-wine');
      if (text.includes('розовое') || text.includes('розе') || text.includes('rosé') || text.includes('rose')) {
        tags.push('rose-wine');
      }
      if (
        text.includes('игрист') ||
        text.includes('брют') ||
        text.includes('шампан') ||
        text.includes('sparkling')
      ) {
        tags.push('sparkling');
      }

      // сладость
      if (
        text.includes('сладкое') ||
        text.includes('полусладкое') ||
        text.includes('ликёрное') ||
        text.includes('десертное')
      ) {
        tags.push('sweet-wine');
      }
      if (text.includes('сухое') || text.includes('полусухое')) {
        tags.push('dry-wine');
      }

      // сорта
      if (text.includes('совиньон') || text.includes('sauvignon')) tags.push('sauvignon-blanc');
      if (text.includes('рислинг') || text.includes('riesling')) tags.push('riesling');
      if (text.includes('шардоне') || text.includes('chardonnay')) tags.push('chardonnay');
      if (text.includes('каберне') || text.includes('cabernet')) tags.push('cabernet-sauvignon');
      if (text.includes('мерло') || text.includes('merlot')) tags.push('merlot');
      if (text.includes('пино гриджио') || text.includes('pinot grigio')) tags.push('pinot-grigio');
      if (text.includes('пино нуар') || text.includes('pinot noir')) tags.push('pinot-noir');
      if (text.includes('зинфандель') || text.includes('zinfandel')) tags.push('zinfandel');
      if (text.includes('гевюрц') || text.includes('gewurz')) tags.push('gewurztraminer');
      if (text.includes('москато') || text.includes('moscato')) tags.push('moscato');
      if (text.includes('сотерн') || text.includes('sauternes')) tags.push('sauternes');
    }

    if (category === 'beer') {
      if (text.includes('ipa')) tags.push('ipa');
      if (text.includes('пшенич') || text.includes('weiss') || text.includes('wit')) tags.push('wheat-beer');
      if (text.includes('lager') || text.includes('лагер')) tags.push('lager');
      if (text.includes('pils') || text.includes('пилс') || text.includes('пилз')) tags.push('pilsner');
      if (
        text.includes('темное') ||
        text.includes('dark') ||
        text.includes('porter') ||
        text.includes('портер') ||
        text.includes('stout')
      ) {
        tags.push('dark-beer');
      }
      if (text.includes('светлое') || text.includes('hell') || text.includes('gold')) {
        tags.push('pale-lager');
      }
    }

    // общее резервное тегирование
    if (!tags.length) {
      if (category === 'wine') tags.push('wine-generic');
      if (category === 'beer') tags.push('beer-generic');
      if (!category) tags.push('generic-drink');
    }

    product._styleTags = tags;
  });

  productsStyled = true;
}

/** ИНИЦИАЛИЗАЦИЯ СЧЁТЧИКОВ ИСПОЛЬЗОВАНИЯ НАПИТКОВ */
function initializeDrinkUsage() {
  drinkUsageCount = new Map();
  allProducts.forEach(product => {
    const key = (product.name || '').toLowerCase();
    if (key) drinkUsageCount.set(key, 0);
  });
}

/** МАППИНГ ИМЕНИ СТИЛЯ НАПИТКА → ТРЕБУЕМЫЕ ТЕГИ / КАТЕГОРИЯ */
function getStyleTagsForDrinkName(drinkName) {
  const s = (drinkName || '').toLowerCase();
  const requiredTags = [];
  let fallbackCategory = null;

  // ВИНО
  if (s.includes('каберне')) {
    requiredTags.push('cabernet-sauvignon', 'red-wine', 'dry-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('шираз') || s.includes('syrah')) {
    requiredTags.push('red-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('мальбек') || s.includes('malbec')) {
    requiredTags.push('red-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('совиньон')) {
    requiredTags.push('sauvignon-blanc', 'white-wine', 'dry-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('шабли')) {
    requiredTags.push('chardonnay', 'white-wine', 'dry-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('рислинг') && s.includes('полусух')) {
    requiredTags.push('riesling', 'white-wine', 'sweet-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('рислинг')) {
    requiredTags.push('riesling', 'white-wine', 'dry-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('шардоне')) {
    requiredTags.push('chardonnay', 'white-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('пино гриджио')) {
    requiredTags.push('pinot-grigio', 'white-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('пино нуар')) {
    requiredTags.push('pinot-noir', 'red-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('зинфандель')) {
    requiredTags.push('zinfandel', 'red-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('гевюрц')) {
    requiredTags.push('gewurztraminer', 'white-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('портвейн')) {
    requiredTags.push('sweet-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('сотерн')) {
    requiredTags.push('sauternes', 'sweet-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('москато')) {
    requiredTags.push('moscato', 'sweet-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('шампан') || s.includes('брют') || s.includes('просекко')) {
    requiredTags.push('sparkling');
    fallbackCategory = 'wine';
  } else if (s.includes('ламбруско')) {
    requiredTags.push('sparkling', 'sweet-wine');
    fallbackCategory = 'wine';
  } else if (s.includes('розовое') || s.includes('розе') || s.includes('rosé') || s.includes('rose')) {
    requiredTags.push('rose-wine');
    fallbackCategory = 'wine';
  }

  // ПИВО
  else if (s.includes('ipa')) {
    requiredTags.push('ipa');
    fallbackCategory = 'beer';
  } else if (s.includes('лагер')) {
    requiredTags.push('lager', 'pale-lager');
    fallbackCategory = 'beer';
  } else if (s.includes('пилснер') || s.includes('pilsner') || s.includes('пилс')) {
    requiredTags.push('pilsner', 'pale-lager');
    fallbackCategory = 'beer';
  } else if (s.includes('пшенич') || s.includes('weiss')) {
    requiredTags.push('wheat-beer');
    fallbackCategory = 'beer';
  } else if (s.includes('темное пиво') || s.includes('портер') || s.includes('стаут')) {
    requiredTags.push('dark-beer');
    fallbackCategory = 'beer';
  }

   // ПРОЧЕЕ
  else if (s.includes('сидр')) {
    fallbackCategory = 'cider';
  } else if (s.includes('саке')) {
    fallbackCategory = 'sake';
  } else if (s.includes('вермут')) {
    fallbackCategory = 'vermouth';
  } else if (s.includes('водка')) {
    fallbackCategory = 'vodka';
  } else if (s.includes('виски') || s.includes('whisky') || s.includes('whiskey')) {
    fallbackCategory = 'whiskey';
  } else if (s.includes('коньяк')) {
    fallbackCategory = 'cognac';
  } else if (s.includes('ром')) {
    fallbackCategory = 'rum';
  } else if (s.includes('ликёр') || s.includes('ликер') || s.includes('liqueur')) {
    fallbackCategory = 'liquor';
  } else if (s.includes('сок')) {
    fallbackCategory = 'juice';
  }

  // Общий резерв
  if (!requiredTags.length && !fallbackCategory) {
    if (s.includes('пиво')) fallbackCategory = 'beer';
    if (s.includes('вино')) fallbackCategory = 'wine';
  }

  return { requiredTags, fallbackCategory };
}

/** ПОИСК ПРОДУКТОВ ПО СТИЛЮ */
function getProductsForStyle(drinkStyle, maxCount, usedNames) {
  if (!productsStyled) computeProductStyles();

  const { requiredTags, fallbackCategory } = getStyleTagsForDrinkName(drinkStyle);
  let matches = [];

  if (requiredTags.length) {
    matches = allProducts.filter(p => {
      const tags = p._styleTags || [];
      return requiredTags.some(tag => tags.includes(tag));
    });
  }

  if (!matches.length && fallbackCategory) {
    matches = allProducts.filter(
      p => (p.category || '').toLowerCase() === fallbackCategory
    );
  }

  if (!matches.length) return [];

  // сортируем по: менее использованные → более дешёвые → по имени
  matches.sort((a, b) => {
    const nameA = (a.name || '').toLowerCase();
    const nameB = (b.name || '').toLowerCase();
    const usageA = drinkUsageCount.get(nameA) || 0;
    const usageB = drinkUsageCount.get(nameB) || 0;
    if (usageA !== usageB) return usageA - usageB;
    const priceA = typeof a.price === 'number' ? a.price : Infinity;
    const priceB = typeof b.price === 'number' ? b.price : Infinity;
    if (priceA !== priceB) return priceA - priceB;
    return nameA.localeCompare(nameB);
  });

  const result = [];
  for (const product of matches) {
    if (result.length >= maxCount) break;
    const key = (product.name || '').toLowerCase();
    if (!usedNames.has(key)) {
      result.push(product);
      usedNames.add(key);
    }
  }

  return result;
}

/** ОПРЕДЕЛЕНИЕ ФИЧ БЛЮДА (МЯСО, РЫБА, ОСТРОЕ И Т.Д.) */
function getMealFeatures(meal) {
  const name = (meal.name || '').toLowerCase();
  const description = (meal.description || '').toLowerCase();
  const ingredients = (meal.ingredients || '').toLowerCase();
  const category = (meal.category || '').toLowerCase();
  const text = `${name} ${description} ${ingredients}`;

  const isSalad = category === 'салаты' || text.includes('салат');
  const isSoup = category === 'супы' || text.includes('суп') || text.includes('борщ') || text.includes('лагман');
  const isSushi = category === 'суши' || /суши|ролл|филадельфия|калифорния|сашими|нигири/.test(text);
  const isGrill = category === 'шашлыки' || /шашлык|люля|мангал|гриль|ребрышки|уч-панжа/.test(text);
  const isSnack = category === 'закуски';
  const isHot = category === 'горячее' || category === 'домашняя кухня';
  const isPasta = /паста|спагетти|фетучч|тальятелле/.test(text);
  const isBurger = /бургер/.test(text);
  const isPizza = /пицца/.test(text);

  const hasFish = /рыба|семг|лосос|дорадо|тунец|форел/.test(text);
  const hasSeafood = /кревет|мидии|кальмар|осьминог|морепродукт/.test(text);
  const hasBeef = /говядин|теляти|ростбиф|котлеты из говядины|бифстроганов/.test(text);
  const hasLamb = /баран|долма|хинкал/.test(text);
  const hasPork = /свинина|свиной|бекон/.test(text);
  const hasChicken = /куриц|цыплен|куриные/.test(text);
  const hasDuck = /утка|утиная/.test(text);

  const isSpicy = /остр(ый|ая|ое|ые)|чили|перец чили|том ям|карри/.test(text);
  const isCreamy =
    /сливк|сливочн|сливки|сыр|пармезан|моцарелл|сливочное масло|сметанн|крем-суп/.test(text);
  const hasTomato = /томат|помидор|соус томат|борщ|лагман|пицц/.test(text);
  const hasMushroom = /гриб|шампиньон|белые грибы/.test(text);

  return {
    isSalad,
    isSoup,
    isSushi,
    isGrill,
    isSnack,
    isHot,
    isPasta,
    isBurger,
    isPizza,
    hasFish,
    hasSeafood,
    hasBeef,
    hasLamb,
    hasPork,
    hasChicken,
    hasDuck,
    isSpicy,
    isCreamy,
    hasTomato,
    hasMushroom,
    text,
    category,
  };
}

/** ПОЛУЧАЕМ СПИСОК СТИЛЕЙ НАПИТКОВ ДЛЯ БЛЮДА (2–4 СТИЛЯ, ИЗ КОТОРЫХ ПОТОМ ВЫБЕРЕМ ПРОДУКТЫ) */
function collectDrinkStylesForMeal(meal) {
  const features = getMealFeatures(meal);
  const styles = new Set();
  const text = features.text;

  // 1. Точные совпадения по ключам REAL_PAIRINGS
  Object.entries(REAL_PAIRINGS).forEach(([dishKey, drinkList]) => {
    if (text.includes(dishKey)) {
      drinkList.forEach(d => styles.add(d));
    }
  });

  // 2. Категориальные правила
  if (features.isSushi || (features.hasSeafood && !features.hasTomato)) {
    ['seafood'].forEach(cat => CATEGORY_PAIRINGS[cat].forEach(d => styles.add(d)));
  }

  if (features.hasFish && !features.isSushi) {
    CATEGORY_PAIRINGS.fish.forEach(d => styles.add(d));
  }

  if (features.isSalad) {
    CATEGORY_PAIRINGS.salad.forEach(d => styles.add(d));
  }

  if (features.isSoup) {
    if (text.includes('борщ')) {
      REAL_PAIRINGS['борщ'].forEach(d => styles.add(d));
    } else if (features.isSpicy) {
      CATEGORY_PAIRINGS.soup_spicy.forEach(d => styles.add(d));
    } else if (features.isCreamy) {
      CATEGORY_PAIRINGS.soup_cream.forEach(d => styles.add(d));
    } else {
      CATEGORY_PAIRINGS.soup_light.forEach(d => styles.add(d));
    }
  }

  if (features.isPasta) {
    if (features.hasTomato) {
      CATEGORY_PAIRINGS.tomato.forEach(d => styles.add(d));
    } else if (features.hasSeafood || features.hasFish) {
      CATEGORY_PAIRINGS.fish.forEach(d => styles.add(d));
    } else if (features.isCreamy || features.hasMushroom || features.hasChicken) {
      CATEGORY_PAIRINGS.creamy.forEach(d => styles.add(d));
    } else {
      CATEGORY_PAIRINGS.creamy.forEach(d => styles.add(d));
    }
  }

  if (features.isPizza) {
    REAL_PAIRINGS['пицца'].forEach(d => styles.add(d));
  }

  if (features.isBurger) {
    REAL_PAIRINGS['бургер'].forEach(d => styles.add(d));
  }

  if (features.isGrill) {
    CATEGORY_PAIRINGS.grill.forEach(d => styles.add(d));
  }

  if (features.isSnack) {
    if (/гренки|крылышки|чебурек|шаурма|кутабы/.test(text)) {
      CATEGORY_PAIRINGS.fried_snack.forEach(d => styles.add(d));
    } else {
      CATEGORY_PAIRINGS.salad.forEach(d => styles.add(d));
    }
  }

  if (features.hasLamb) CATEGORY_PAIRINGS.lamb.forEach(d => styles.add(d));
  if (features.hasBeef) CATEGORY_PAIRINGS.beef.forEach(d => styles.add(d));
  if (features.hasPork) CATEGORY_PAIRINGS.pork.forEach(d => styles.add(d));
  if (features.hasDuck) CATEGORY_PAIRINGS.duck.forEach(d => styles.add(d));
  if (features.hasChicken && !features.isPasta && !features.isSalad && !features.isSoup) {
    CATEGORY_PAIRINGS.chicken.forEach(d => styles.add(d));
  }

  if (features.hasMushroom) CATEGORY_PAIRINGS.mushroom.forEach(d => styles.add(d));
  if (features.isSpicy) CATEGORY_PAIRINGS.spicy.forEach(d => styles.add(d));
  if (features.isCreamy && !features.isSoup && !features.isPasta) {
    CATEGORY_PAIRINGS.creamy.forEach(d => styles.add(d));
  }
  if (features.hasTomato && !features.isPasta && !features.isPizza) {
    CATEGORY_PAIRINGS.tomato.forEach(d => styles.add(d));
  }

  // 3. Общий резерв, если всё ещё пусто
  if (!styles.size) {
    if (features.isHot || features.hasBeef || features.hasLamb || features.hasPork) {
      ['Каберне совиньон', 'Мерло', 'Пино Нуар'].forEach(d => styles.add(d));
    } else if (features.isSalad || features.isSnack || features.hasChicken || features.hasFish) {
      ['Совиньон Блан', 'Пино Гриджио', 'Просекко'].forEach(d => styles.add(d));
    } else {
      ['Просекко', 'Совиньон Блан'].forEach(d => styles.add(d));
    }
  }

  return Array.from(styles);
}

/** ГЛАВНАЯ ФУНКЦИЯ ПОДБОРА НАПИТКОВ ДЛЯ БЛЮДА (2–3 НАПИТКА) */
function findDrinksForMeal(meal) {
  const mealKey = (meal.name || '').toLowerCase();

  console.log('=== Подбор напитков для блюда:', meal.name, '===');

  const drinkStyles = collectDrinkStylesForMeal(meal);
  console.log('Подобранные стили напитков:', drinkStyles);

  const usedNames = new Set();
  const selectedProducts = [];

  // 1. Идём по стилям в порядке приоритета и подбираем реальные продукты
  drinkStyles.forEach(styleName => {
    if (selectedProducts.length >= 3) return;
    const products = getProductsForStyle(styleName, 2, usedNames);
    products.forEach(p => {
      if (selectedProducts.length < 3) {
        selectedProducts.push(p);
      }
    });
  });

  // 2. Если меньше 2 — общая подстраховка: подбираем по базовой логике категория/мясо/рыба
  if (selectedProducts.length < 2) {
    const features = getMealFeatures(meal);

    let fallbackCategory = 'wine';
    if (features.hasFish || features.hasSeafood || features.isSalad || features.isSoup) {
      fallbackCategory = 'wine';
    } else if (features.isSnack || features.isGrill || features.isBurger || features.isPizza) {
      fallbackCategory = 'beer';
    }

    const extra = allProducts
      .filter(p => (p.category || '').toLowerCase() === fallbackCategory)
      .sort((a, b) => {
        const nameA = (a.name || '').toLowerCase();
        const nameB = (b.name || '').toLowerCase();
        const usageA = drinkUsageCount.get(nameA) || 0;
        const usageB = drinkUsageCount.get(nameB) || 0;
        if (usageA !== usageB) return usageA - usageB;
        const priceA = typeof a.price === 'number' ? a.price : Infinity;
        const priceB = typeof b.price === 'number' ? b.price : Infinity;
        if (priceA !== priceB) return priceA - priceB;
        return nameA.localeCompare(nameB);
      });

    for (const p of extra) {
      if (selectedProducts.length >= 3) break;
      const key = (p.name || '').toLowerCase();
      if (!usedNames.has(key)) {
        usedNames.add(key);
        selectedProducts.push(p);
      }
    }
  }

  // 3. Если всё равно мало — просто добиваем любыми уникальными напитками
  if (selectedProducts.length < 2) {
    for (const p of allProducts) {
      if (selectedProducts.length >= 3) break;
      const key = (p.name || '').toLowerCase();
      if (!usedNames.has(key)) {
        usedNames.add(key);
        selectedProducts.push(p);
      }
    }
  }

  // 4. Обновляем статистику использования и фиксируем сет для блюда
  selectedProducts.forEach(p => {
    const key = (p.name || '').toLowerCase();
    const current = drinkUsageCount.get(key) || 0;
    drinkUsageCount.set(key, current + 1);
  });

  fixedDrinkSets.set(mealKey, selectedProducts);

  console.log(
    `Итоговый набор (${selectedProducts.length}) для "${meal.name}":`,
    selectedProducts.map(p => p.name)
  );

  return selectedProducts;
}

/** === UI / РАБОТА С DOM === */

// Переключение секций
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

// Каталог блюд
function displayCatalog() {
  const catalogGrid = document.getElementById('catalog-grid');
  const catalogFilters = document.getElementById('catalog-filters');

  catalogGrid.innerHTML = '';
  catalogFilters.innerHTML = '';

  const categories = [...new Set(allMeals.map(meal => meal.category))].filter(Boolean);

  const allFilter = document.createElement('button');
  allFilter.className = 'filter-btn active';
  allFilter.textContent = 'Все блюда';
  allFilter.addEventListener('click', () => filterCatalog('all', allFilter));
  catalogFilters.appendChild(allFilter);

  categories.forEach(category => {
    const filterBtn = document.createElement('button');
    filterBtn.className = 'filter-btn';
    filterBtn.textContent = category;
    filterBtn.addEventListener('click', () => filterCatalog(category, filterBtn));
    catalogFilters.appendChild(filterBtn);
  });

  displayMealsInCatalog(allMeals);
}

function filterCatalog(category, clickedButton) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (clickedButton) clickedButton.classList.add('active');

  const filteredMeals =
    category === 'all' ? allMeals : allMeals.filter(meal => meal.category === category);

  displayMealsInCatalog(filteredMeals);
}

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
        ${
          meal.image || meal.imageUrl
            ? `<img src="${meal.image || meal.imageUrl}" alt="${meal.name}"
                 onerror="this.style.display='none';
                          this.parentNode.innerHTML='🍽️';
                          this.parentNode.style.display='flex';
                          this.parentNode.style.alignItems='center';
                          this.parentNode.style.justifyContent='center';
                          this.parentNode.style.fontSize='48px';">`
            : '🍽️'
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

// при клике из каталога сразу подбираем напитки, без повторного поиска
function selectMealFromCatalog(meal) {
  showSection('main');
  document.getElementById('meal-search').value = meal.name;
  if (typeof window.selectMeal === 'function') {
    window.selectMeal(meal);
  }
  document.getElementById('recommendations').scrollIntoView({ behavior: 'smooth' });
}

// Модалка напитка
function openDrinkModal(product) {
  const modal = document.getElementById('drink-modal');

  document.getElementById('modal-drink-name').textContent = product.name || 'Без названия';
  document.getElementById('modal-drink-description').textContent =
    product.description || 'Описание отсутствует';
  document.getElementById('modal-drink-volume').textContent = product.volume || 'Не указан';
  document.getElementById('modal-drink-strength').textContent = product.strength || 'Не указана';
  document.getElementById('modal-drink-country').textContent = product.country || 'Не указана';
  document.getElementById('modal-drink-type').textContent = getProductType(product.category);
  document.getElementById('modal-drink-price').textContent = product.price
    ? `${product.price} ₽`
    : 'Цена не указана';
  document.getElementById('modal-drink-pairing').textContent =
    product.recommendedDishes || 'Различные блюда';

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

function closeModal() {
  document.getElementById('drink-modal').classList.remove('active');
}

// Тип напитка по категории
function getProductType(category) {
  const types = {
    wine: 'Вино',
    beer: 'Пиво',
    whiskey: 'Виски',
    vodka: 'Водка',
    rum: 'Ром',
    vermouth: 'Вермут',
    cognac: 'Коньяк',
    liquor: 'Ликёр',
    sparkling: 'Игристое',
    coffee: 'Кофе',
    tea: 'Чай',
    juice: 'Сок',
    sake: 'Саке',
    tequila: 'Текила',
    brandy: 'Бренди',
    absinthe: 'Абсент',
    gin: 'Джин',
  };
  return types[category] || 'Напиток';
}

function getDrinkEmoji(category) {
  const emojis = {
    wine: '🍷',
    beer: '🍺',
    whiskey: '🥃',
    vodka: '🍸',
    rum: '🍹',
    vermouth: '🍷',
    cognac: '🥃',
    liquor: '🥂',
    sparkling: '🥂',
    coffee: '☕',
    tea: '🍵',
    juice: '🧃',
    sake: '🍶',
    tequila: '🍸',
    brandy: '🥃',
    absinthe: '🍸',
    gin: '🍸',
  };
  return emojis[category] || '🥤';
}

/** === ЗАГРУЗКА ДАННЫХ И ЛОГИКА ПОИСКА === */

document.addEventListener('DOMContentLoaded', function () {
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

  async function loadAllData() {
    try {
      loading.style.display = 'block';
      errorMessage.style.display = 'none';

      const [mealsResponse, productsResponse] = await Promise.all([
        fetch(MEALS_API),
        fetch(PRODUCTS_API),
      ]);

      if (!mealsResponse.ok) throw new Error(`Ошибка загрузки блюд: ${mealsResponse.status}`);
      if (!productsResponse.ok) throw new Error(`Ошибка загрузки напитков: ${productsResponse.status}`);

      allMeals = await mealsResponse.json();
      allProducts = await productsResponse.json();

      initializeDrinkUsage();
      computeProductStyles();

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

  // берём случайный поднабор блюд для блока "популярные"
  function getRandomMeals(source, count) {
    const copy = source.slice();
    const result = [];
    const max = Math.min(count, copy.length);

    for (let i = 0; i < max; i++) {
      const idx = Math.floor(Math.random() * copy.length);
      result.push(copy[idx]);
      copy.splice(idx, 1);
    }

    return result;
  }

  function displayPopularDishes() {
    popularDishes.innerHTML = '';
    const popularMeals = getRandomMeals(allMeals, 8);

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

    const mealNameKey = meal.name.toLowerCase();
    let recommendedDrinks;

    if (fixedDrinkSets.has(mealNameKey)) {
      recommendedDrinks = fixedDrinkSets.get(mealNameKey);
      console.log('Используем сохранённый набор напитков для', mealNameKey);
    } else {
      recommendedDrinks = findDrinksForMeal(meal);
    }

    displayProducts(recommendedDrinks);

    document.querySelector('.section-title').textContent = `Идеальные напитки для "${meal.name}" (${recommendedDrinks.length} найдено)`;
  }

  // делаем функцию выбора блюда доступной глобально, чтобы её мог вызывать selectMealFromCatalog
  window.selectMeal = selectMeal;

  // автодополнение
  mealSearch.addEventListener('input', function () {
    const query = this.value.toLowerCase().trim();
    searchSuggestions.innerHTML = '';

    if (query.length < 2) {
      searchSuggestions.style.display = 'none';
      return;
    }

    const filteredMeals = allMeals
      .filter(meal => meal.name.toLowerCase().includes(query))
      .slice(0, 5);

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

  document.addEventListener('click', function (e) {
    if (!mealSearch.contains(e.target) && !searchSuggestions.contains(e.target)) {
      searchSuggestions.style.display = 'none';
    }
  });

  function displayProducts(products) {
    drinkCards.innerHTML = '';

    if (!products || products.length === 0) {
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
          ${
            product.image || product.imageUrl
              ? `<img src="${product.image || product.imageUrl}" alt="${product.name}"
                     onerror="this.style.display='none';
                              this.parentNode.innerHTML='${getDrinkEmoji(product.category)}';
                              this.parentNode.style.display='flex';
                              this.parentNode.style.alignItems='center';
                              this.parentNode.style.justifyContent='center';
                              this.parentNode.style.fontSize='48px';">`
              : getDrinkEmoji(product.category)
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

  searchBtn.addEventListener('click', function () {
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
        document.querySelector('.section-title').textContent = 'Подбор напитков';
      }
    }
  });

  // стартуем загрузку данных
  loadAllData();
});
