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
          "image": "/images/pexels-cantuariabruno-774487.jpg",
          "tooltip": "Popular",
          "allergens": ["gluten", "dairy"],
          "weight": 500
        },
        {
          "id": 2,
          "title": "Pizza Mozarella",
          "description": "Tomato sauce, Fresh mozzarella cheese, Olive oil, Fresh basil leaves, Oregano, Pizza dough",
          "price": 7.99,
          "image": "/images/pexels-sonali-mehta-1514525371-31596394.jpg",
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
          "image": "/images/pexels-efeburakbaydar-26575540.jpg",
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
          "image": "/images/pexels-max-griss-16866522-37180268.jpg",
          "tooltip": "",
          "allergens": ["gluten", "dairy"],
          "weight": 400
        },
        {
          "id": 5,
          "title": "Linguine",
          "description": "Linguine pasta, Olive oil, Garlic, Parmesan cheese, Fresh parsley, Lemon zest",
          "price": 12.99,
          "image": "/images/pexels-oceanofstars-37274226.jpg",
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
          "image": "/images/pexels-nadin-sh-78971847-16594957.jpg",
          "tooltip": "",
          "allergens": ["gluten", "egg", "soy"],
          "weight": 600
        },
        {
          "id": 7,
          "title": "Seafood soup",
          "description": "Shrimp, White fish fillet, Clams or mussels, Tomato-based broth, Garlic, Fresh parsley",
          "price": 12.99,
          "image": "/images/pexels-sylwester-ficek-154797634-36842305.jpg",
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
          "image": "/images/pexels-monika-balciuniene-1144471-13871661.jpg",
          "tooltip": "Popular",
          "allergens": ["dairy", "nutmeg"],
          "weight": 450
        },
        {
          "id": 9,
          "title": "Pho soup",
          "description": "Pumpkin, Vegetable broth, Heavy cream or coconut milk, Onion, Garlic, Nutmeg",
          "price": 12.99,
          "image": "/images/pexels-streetwindy-4153908.jpg",
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
          "image": "/images/pexels-valeriya-24604679.jpg",
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
          "image": "/images/pexels-natan-machado-fotografia-gastronomica-162809799-15141035.jpg",
          "tooltip": "",
          "allergens": ["gluten", "dairy"],
          "weight": 350
        },
        {
          "id": 12,
          "title": "Dumplings",
          "description": "Ground beef patty, Burger bun, Lettuce, Tomato, Cheddar cheese, Pickles",
          "price": 13.99,
          "image": "/images/pexels-noam-k-lna-626381151-34912738.jpg",
          "tooltip": "",
          "allergens": ["gluten", "soy"],
          "weight": 200
        },
        {
          "id": 13,
          "title": "Fruit salad",
          "description": "Ground beef patty, Burger bun, Lettuce, Tomato, Cheddar cheese, Pickles",
          "price": 10.99,
          "image": "/images/pexels-novkov-visuals-34618713.jpg",
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
          "image": "/images/pexels-towfiqu-barbhuiya-3440682-12625113.jpg",
          "tooltip": "",
          "tags": ["vegetarian"],
          "allergens": ["dairy"],
          "weight": 250
        }
      ]
    }
  ];
})