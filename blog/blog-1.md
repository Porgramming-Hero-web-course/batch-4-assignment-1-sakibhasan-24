# The Significance of Union and Intersection Types in TypeScript

Union and intersection types are two important concepts in Typescript.Typescript Provides us many tools for make our development easy and flexible.Union and intersection types are two of those tools.

## Union Types

### What are Union Types?

**Union Types** we use when we need to use a value more than one type.Not Value we can use it for different purpose.

In TypeScript, union types are defined using the `|` (pipe) symbol.

### Why we use Union

    -when we need a variable to hold more than one type value
    -handle different types of value in function,Array and object

### Example:

```typescript
let valueOne: number = 12;
// valueOne = true; // Error: .

let valueTwo: number | boolean = 12;
valueTwo = true; // Correct:
```

## Intersection Types

### What are Intersection Types?

**Intersection Types** combine multiple types in single type.Ensuring that a variable has must be all proerties

In TypeScript, Intersection types are defined using the `&` (ampersand) symbol.

### Why we use Intersection

    -Combine Different interfaces or types in a Single Type
    -When we need multiple property from different interface

### Example:

```typescript
interface Common {
  name: string;
  id: string | number;
  age: number;
  position: string;
}
interface Employee {
  currentTask: string;
}
interface Manager {
  team: Array<string>;
}
type employeeUser = Common & Employee;
type managerUser = Common & Manager;
```

### Conclusion

it enhance flexibility and type safety in TypeScript.It makes our code `DRY`(don't repeat yourcode) procedure.
