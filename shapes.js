// 
// .  
// ├── examples/           // Example svg file(s) created with the app
// ├── lib/                // Folder for classes or functions
//     ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
//     ├── shapes.test.js  // Jest tests for shapes
//     └── more...         // Additional files and tests
// ├── .gitignore          // Indicates which folders and files Git should ignore
// ├── index.js            // Runs the application using imports from lib/
// ├── package.json
// └── README.md           // App description, link to video, setup and usage instructions   

// Important: Make sure that you remove dist from the .gitignore 
        // file so that Git will track this folder and include 
        // it when you push up to your application's repository. 
        // The application must include Triangle, Circle, and 
        // Square classes, as well as tests for each of these 
        // classes using Jest. While not a requirement, it is 
        // recommended that you place any common functionality 
        // and properties shared by the Triangle, Circle, and 
        // Square classes in a parent Shape class and use 
        // inheritance to reuse the code in the child classes.