import { products, categories, ingredients } from "./dataArrays";
import { shops } from "./shopArrays";

export function getCategoryById(categoryId) {
  let category;
  categories.map((data) => {
    if (data.id == categoryId) {
      category = data;
    }
  });
  return category;
}

export function getProductById(productId) {
  let product;
  products.map((data) => {
    if (data.id == productId) {
      product = data;
    }
  });
  return product;
}

export function getShopByID(shopID) {
  let shop;
  shops.map((data) => {
    if (data.id == shopID) {
      shop = data;
    }
  });
  return shop;
}

export function getProductsByCategory(categoryId) {
  return products.filter((product) => product.categoryId === categoryId);
}

export function getIngredientName(ingredientID) {
  let name;
  ingredients.map((data) => {
    if (data.ingredientId == ingredientID) {
      name = data.name;
    }
  });
  return name;
}

export function getIngredientUrl(ingredientID) {
  let url;
  ingredients.map((data) => {
    if (data.ingredientId == ingredientID) {
      url = data.photo_url;
    }
  });
  return url;
}

export function getCategoryName(categoryId) {
  let name;
  categories.map((data) => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getRecipes(categoryId) {
  const recipesArray = [];
  products.map((data) => {
    if (data.categoryID == categoryId) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}

// modifica
export function getRecipesByIngredient(ingredientId) {
  const recipesArray = [];
  products.map((data) => {
    data.ingredients.map((index) => {
      if (index[0] == ingredientId) {
        recipesArray.push(data);
      }
    });
  });
  return recipesArray;
}

export function getNumberOfRecipes(categoryId) {
  let count = 0;
  products.map((data) => {
    if (data.categoryId == categoryId) {
      count++;
    }
  });
  return count;
}

export function getAllIngredients(idArray) {
  const ingredientsArray = [];
  idArray.map((index) => {
    ingredients.map((data) => {
      if (data.ingredientId == index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
}

// functions for search
export function getRecipesByIngredientName(ingredientName) {
  const nameUpper = ingredientName.toUpperCase();
  const recipesArray = [];
  ingredients.map((data) => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      // data.name.yoUpperCase() == nameUpper
      const recipes = getRecipesByIngredient(data.ingredientId);
      const unique = [...new Set(recipes)];
      unique.map((item) => {
        recipesArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(recipesArray)];
  return uniqueArray;
}

export function getRecipesByCategoryName(categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const recipesArray = [];
  categories.map((data) => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipes = getRecipes(data.id); // return a vector of recipes
      recipes.map((item) => {
        recipesArray.push(item);
      });
    }
  });
  return recipesArray;
}

export function getRecipesByRecipeName(recipeName) {
  const nameUpper = recipeName.toUpperCase();
  const recipesArray = [];
  products.map((data) => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}
