// export class Ingredient { 
//   public name: string;
//   public amount: number;

//   constructor(name: string, amount: number){
//     this.name = name;
//     this.amount = amount;
//   }
// }

// The above setup is so commonly used, that TypeScript offers a shortcut by adding an accessor. See below set up

export class Ingredient {
  constructor(public name: string, public amount: number){}
}

// this will give us the same result as the above example with the identified property names