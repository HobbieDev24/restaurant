export default defineEventHandler((event) => {
  return [
    {
      "categoryName": "Pizza",
      "categoryDescription": "Delicious and freshly baked pizzas with a variety of toppings.",
      "products": [
        {
          "id": 1,
          "title": "Pizza Salami",
          "description": "Tomato sauce, Mozzarella cheese, Salami slices, Olive oil, Oregano, Pizza dough",
          "price": 9.99,
          "image": "https://www.foodiesfeed.com/wp-content/uploads/2023/05/pizza-salami.jpg",
          "tooltip": "Popular",
          "allergens": ["gluten", "dairy"],
          "weight": 500
        },
        {
          "id": 2,
          "title": "Pizza Mozarella",
          "description": "Tomato sauce, Fresh mozzarella cheese, Olive oil, Fresh basil leaves, Oregano, Pizza dough",
          "price": 7.99,
          "image": "https://www.foodiesfeed.com/wp-content/uploads/2023/05/pizza-cinematic.jpg",
          "tooltip": "",
          "tags": ["vegetarian"],
          "allergens": ["gluten", "dairy"],
          "weight": 480
        },
        {
          "id": 3,
          "title": "Pizza Hawaii",
          "description": "Tomato sauce, Fresh mozzarella cheese, Olive oil, Fresh basil leaves, Oregano, Pizza dough",
          "price": 9.99,
          "image": "https://www.foodiesfeed.com/wp-content/uploads/2022/07/pizza-with-pineapple-and-thin-crust.jpg",
          "tooltip": "",
          "tags": ["vegetarian"],
          "allergens": ["gluten", "dairy", "pineapple"],
          "weight": 490
        }
      ]
    },
    {
      "categoryName": "Pasta",
      "categoryDescription": "Classic Italian pasta dishes made with fresh ingredients.",
      "products": [
        {
          "id": 4,
          "title": "Rigatoni",
          "description": "Rigatoni pasta, Tomato sauce, Ground beef or sausage, Garlic, Parmesan cheese, Fresh basil",
          "price": 12.99,
          "image": "https://www.foodiesfeed.com/wp-content/uploads/2023/08/rigatoni-with-cream-sauce.jpg",
          "tooltip": "",
          "allergens": ["gluten", "dairy"],
          "weight": 400
        },
        {
          "id": 5,
          "title": "Linguine",
          "description": "Linguine pasta, Olive oil, Garlic, Parmesan cheese, Fresh parsley, Lemon zest",
          "price": 12.99,
          "image": "https://www.foodiesfeed.com/wp-content/uploads/2015/03/fresh-pasta-linguine-with-dill-and-vegetables.jpg",
          "tooltip": "",
          "allergens": ["gluten", "dairy"],
          "weight": 420
        }
      ]
    },
    {
      "categoryName": "Soup",
      "categoryDescription": "Warm and hearty soups to comfort your soul.",
      "products": [
        {
          "id": 6,
          "title": "Ramen",
          "description": "Ramen noodles, Chicken or pork broth, Soft-boiled egg, Sliced pork belly (chashu), Green onions, Nori sheets",
          "price": 15.99,
          "image": "https://www.foodiesfeed.com/wp-content/uploads/2023/05/bowl-of-ramen-soup.jpg",
          "tooltip": "",
          "allergens": ["gluten", "egg", "soy"],
          "weight": 600
        },
        {
          "id": 7,
          "title": "Seafood soup",
          "description": "Shrimp, White fish fillet, Clams or mussels, Tomato-based broth, Garlic, Fresh parsley",
          "price": 12.99,
          "image": "https://www.foodiesfeed.com/wp-content/uploads/2023/12/seafood-soup.jpg",
          "tooltip": "",
          "tags": ["spicy"],
          "allergens": ["shellfish", "fish"],
          "weight": 500
        },
        {
          "id": 8,
          "title": "Pumpkin soup",
          "description": "Pumpkin, Vegetable broth, Heavy cream or coconut milk, Onion, Garlic, Nutmeg",
          "price": 12.99,
          "image": "https://www.foodiesfeed.com/wp-content/uploads/2023/08/pumpkin-coconut-soup.jpg",
          "tooltip": "Popular",
          "allergens": ["dairy", "nutmeg"],
          "weight": 450
        },
        {
          "id": 9,
          "title": "Vietnamese soup",
          "description": "Pumpkin, Vegetable broth, Heavy cream or coconut milk, Onion, Garlic, Nutmeg",
          "price": 12.99,
          "image": "https://www.foodiesfeed.com/wp-content/uploads/2020/03/vietnamese-soup-with-chicken-balls.jpg",
          "tooltip": "Popular",
          "allergens": ["gluten", "soy"],
          "weight": 550
        }
      ]
    },
    {
      "categoryName": "Other",
      "categoryDescription": "Explore our diverse selection of dishes beyond the usual.",
      "products": [
        {
          "id": 10,
          "title": "Poke Bowl",
          "description": "Sushi rice, Raw tuna or salmon, Soy sauce, Avocado, Seaweed salad, Sesame seeds",
          "price": 15.99,
          "image": "https://www.foodiesfeed.com/wp-content/uploads/2023/05/hawaiian-poke-bowl.jpg",
          "tooltip": "New",
          "tags": ["vegetarian"],
          "allergens": ["soy", "fish", "sesame"],
          "weight": 400
        },
        {
          "id": 11,
          "title": "Burger",
          "description": "Ground beef patty, Burger bun, Lettuce, Tomato, Cheddar cheese, Pickles",
          "price": 14.99,
          "image": "https://www.foodiesfeed.com/wp-content/uploads/2024/01/best-burger-in-town.jpg",
          "tooltip": "",
          "allergens": ["gluten", "dairy"],
          "weight": 350
        },
        {
          "id": 12,
          "title": "Chinese dumplings",
          "description": "Ground beef patty, Burger bun, Lettuce, Tomato, Cheddar cheese, Pickles",
          "price": 13.99,
          "image": "https://www.foodiesfeed.com/wp-content/uploads/2023/06/xiaolongbao-dumplings.jpg",
          "tooltip": "",
          "allergens": ["gluten", "soy"],
          "weight": 200
        },
        {
          "id": 13,
          "title": "Fruit salad",
          "description": "Ground beef patty, Burger bun, Lettuce, Tomato, Cheddar cheese, Pickles",
          "price": 10.99,
          "image": "https://www.foodiesfeed.com/wp-content/uploads/2023/07/fresh-fruit-platter.jpg",
          "tooltip": "",
          "tags": ["spicy", "vegetarian"],
          "allergens": ["nuts"],
          "weight": 300
        },
        {
          "id": 14,
          "title": "Chocolate Ice Cream",
          "description": "Ground beef patty, Burger bun, Lettuce, Tomato, Cheddar cheese, Pickles",
          "price": 8.99,
          "image": "https://www.foodiesfeed.com/wp-content/uploads/2023/10/bowl-of-ice-cream-with-chocolate.jpg",
          "tooltip": "",
          "tags": ["vegetarian"],
          "allergens": ["dairy"],
          "weight": 250
        }
      ]
    }
  ];
})

//QUESTION 4: Несмотря на то что деплой на netlify работает корректно, есть такая проблема:
// при попытке превью локального билда, не находит ссылку на файл и выдает ошибку (скрин прикреплю), не могу понять как этого избежать (аналогичное и с файлом coupons)

//QUESTION 5: Связано с 4-ым вопросом. До этого я деплоил проекты на github pages через vite plugin, в этот раз не разобрался, т.к при деплое все ссылки ломаются,
// не мог понять причину, от того задеплоил на netlify где такой проблемы нет.