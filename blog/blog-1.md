# The significance of union and intersection types in Typescript.

Union and intersection types are two important concepts in Typescript.Typescript Provides us many tools for make our development easy and flexible.Union and intersection types are two of those tools.

Union types allow us to define different type.it makes type annotation more flexible.We can use is it in primitive types,non primitive types,arrays,objects and more.
it declare with `|` sign.

example:
let valueOne:number=12;
valueOne=true//error we can not assign here.
But using Union we can assign
let valueTwo:number|boolean=12;
valueTwo=true//correct
