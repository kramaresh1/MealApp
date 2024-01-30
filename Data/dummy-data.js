import Category from '../Model/category';
import Meal from '../Model/meals';
export const CATEGORIES=[
    new Category('c1', 'Italian', 'pink'),
    new Category('c2', 'Mexican', '#ff0000'),
    new Category('c3', 'Chinese', '#00ff00'),
    new Category('c4', 'Japanese', '#0000ff'),
    new Category('c5', 'Indian', '#ffcc00'),
    new Category('c6', 'Mediterranean', '#9900cc'),
    new Category('c7', 'American', '#ff6600'),
    new Category('c8', 'Thai', '#3366ff'),
    new Category('c9', 'Greek', '#cc0000'),
    new Category('c10', 'French', '#00cc66')
];

export const MEAL=[

    new Meal('m1', ['c1','c6','c10'], 'Spaghetti Bolognese', 'Affordable', 'Simple', 'https://media.istockphoto.com/id/608005280/photo/mutton-rogan-josh-mutton-curry-indian-cuisine.jpg?s=1024x1024&w=is&k=20&c=Ka0i46-DbhWqy2pOhiNJwXsrr9g1n7pubF0aXiwMCSY=',
    [
        'Boil water and cook spaghetti according to package instructions.',
        'In a separate pan, brown the ground chicken.',
        'Add chopped onions, garlic, and tomatoes to the chicken.',
        'Season with salt, pepper, and herbs.',
        'Simmer until the sauce thickens.',
        'Serve the Bolognese sauce over the cooked spaghetti.'
      ],
      ['Spaghetti', 'Ground bechickenef', 'Onions', 'Garlic', 'Tomatoes', 'Herbs'], true),
    new Meal('m2',  ['c2','c8','c6','c3'], 'Tacos', 'Affordable', 'Intermediate', 'https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=1024x1024&w=is&k=20&c=X8Fq8SVoZRTEs-Rwt5iAaX3dbZehWmFssd857ez66D8=',
    [
        'Season ground chicken with taco seasoning.',
        'Cook the seasoned chicken until browned.',
        'Warm the tortillas in a pan or microwave.',
        'Assemble tacos with chicken, lettuce, tomatoes, and cheese.',
        'Top with salsa and sour cream.'
      ],
      ['Ground chicken', 'Taco seasoning', 'Tortillas', 'Lettuce', 'Tomatoes', 'Cheese', 'Salsa', 'Sour cream'], true),
    new Meal('m3', ['c3','c9'], 'Sweet and Sour Chicken', 'Moderate', 'Complex', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    [
        'Marinate chicken in a sweet and sour sauce.',
        'Cook chicken until browned and cooked through.',
        'Prepare the sweet and sour sauce separately.',
        'Combine the cooked chicken with the sauce.',
        'Serve over rice or noodles.'
      ],
      ['Chicken', 'Sweet and sour sauce', 'Rice or noodles'], true),
    new Meal('m4', ['c4','c8','c6','c3'], 'Sushi', 'Expensive', 'Intermediate', 'https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    [
        'Prepare sushi rice and let it cool.',
        'Lay out a sheet of nori on a bamboo mat.',
        'Spread a thin layer of rice over the nori.',
        'Add your favorite sushi fillings.',
        'Roll the sushi tightly and slice into bite-sized pieces.'
      ],
      ['Sushi rice', 'Nori', 'Sushi fillings (e.g., fish, vegetables)'], true),
    new Meal('m5', ['c1','c6','c10'], 'Butter Chicken', 'Affordable', 'Intermediate', 'https://media.istockphoto.com/id/838927480/photo/onam-sadya-on-a-banana-leaf.jpg?s=1024x1024&w=is&k=20&c=muzWqdwIGG_giMihE3Cr4vE1fx-I5-07tyLdn71lcvg=',
    [
        'Marinate chicken in a mixture of yogurt and spices.',
        'Cook marinated chicken until browned.',
        'Prepare a buttery tomato-based sauce.',
        'Combine cooked chicken with the sauce.',
        'Serve over rice or with naan.'
      ],
      ['Chicken', 'Yogurt', 'Spices', 'Tomatoes', 'Butter', 'Rice or naan'], true),
    new Meal('m6', ['c6','c2','c5'], 'Greek Salad', 'Affordable', 'Simple', 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    [
        'Chop cucumbers, tomatoes, and red onions.',
        'Add feta cheese and olives to the mix.',
        'Drizzle olive oil and sprinkle oregano on top.',
        'Toss the ingredients to combine.',
        'Serve chilled.'
      ],
      ['Cucumbers', 'Tomatoes', 'Red onions', 'Feta cheese', 'Olives', 'Olive oil', 'Oregano'], false),
    new Meal('m7', ['c6','c2','c7','c5'], 'Burger', 'Affordable', 'Simple', 'https://images.unsplash.com/photo-1530554764233-e79e16c91d08?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    [
        'Season ground chicken and form into burger patties.',
        'Cook the burger patties until fully cooked.',
        'Toast burger buns on a griddle.',
        'Assemble burgers with lettuce, tomatoes, and condiments.',
        'Serve with fries or your favorite side.'
      ],
      ['Ground chicken', 'Burger buns', 'Lettuce', 'Tomatoes', 'Condiments', 'Fries'], true),
    new Meal('m8', ['c4','c8','c6','c3'], 'Toc','Moderate', 'Complex', 'https://media.istockphoto.com/id/537817390/photo/vada-pav-or-vada-pav.jpg?s=1024x1024&w=is&k=20&c=GJ5t5uf0HvbU_GA7Snx8s5Zo14790XDhYU4hlSm4eXQ=', 
    [
        'Make a batter with gram flour, water, and spices.',
        'Form small balls of spiced mashed potatoes.',
        'Dip the potato balls in the batter and deep fry until golden brown.',
        'Slice pav (bread rolls) and assemble with chutneys.',
        'Serve hot with a side of chutney.'
      ],
      ['Gram flour', 'Potatoes', 'Spices', 'Pav (bread rolls)', 'Chutneys'], true),
    new Meal('m9', ['c1','c6','c7','c4','c2','c5'], 'Moussaka', 'Expensive', 'Complex', 'https://media.istockphoto.com/id/1449635300/photo/chicken-salad-with-veggies.jpg?s=1024x1024&w=is&k=20&c=E2ITLoWXj6BC-3Co_aXof14k4aUCdiscZEh2tLGelC4=', 
    [
        'Peel and slice the eggplants.',
        'Salt the eggplant slices and let them sit for 30 minutes.',
        'Prepare the meat sauce with ground chicken, tomatoes, and spices.',
        'Layer the eggplant slices and meat sauce in a baking dish.',
        'Top with béchamel sauce.',
        'Bake in the oven until golden brown and bubbly.'
      ],
      ['Eggplants', 'Ground chicken', 'Tomatoes', 'Spices', 'Béchamel sauce'], true),
    new Meal('m10', ['c1','c6','c10','c7'], 'Croissant', 'Affordable', 'Simple', 'https://media.istockphoto.com/id/1203754537/photo/south-indian-thali.jpg?s=1024x1024&w=is&k=20&c=G4cyHCjebTu9uXK-zXrcyEnYyIwVeV4Ec1DezexzV8Y=', 
    [
        'Combine flour, yeast, sugar, and warm milk in a bowl.',
        'Knead the dough until smooth and let it rise until doubled in size.',
        'Roll out the dough and shape it into croissants.',
        'Let the croissants rise again before baking.',
        'Bake until golden brown and flaky.'
      ],
      ['Flour', 'Yeast', 'Sugar', 'Warm milk'], true),
 
];