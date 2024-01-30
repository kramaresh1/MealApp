class Meal {
    constructor(
        id, categoryId, title,affordability,complexity,imageURL,isVegan,isVegetarian,isLactoseFree,steps,ingredients
    ) {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageURL = imageURL;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
        this.steps=steps;
        this.ingredients=ingredients;
    }
}
export default Meal;