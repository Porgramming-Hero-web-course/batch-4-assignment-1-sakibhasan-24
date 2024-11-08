# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

### `Type Guard` is a technique not tool.it helps narrow down the type.Based on the type (whether it's number, string, object, array, or even a custom interface) we can perform action or execute code.Typescript infer it.

### Types of Type Guards

1. `typeof` Type Guard(check type (string or number or whatever primitive types))
2. `instanceof` Type Guard(if an object is an instance of a class)
3. `in` Type Guard(check if a property exists in an object or interface)
4. `keyof` Type Guard(check if a key exists in an object or interface)
5. `custom type guard`(check based on own logic)

### `typeof` Type Guard

```typescript
const doSomething = (x: number | string) => {
  if (typeof x === "string") {
    console.log(x.toUpperCase());
  } else {
    console.log(id);
  }
};
```

### `instanceof` Type Guard

```typescript
class Car {
  constructor(public make: string, public model: string, public year: number) {}
}
const carHasModel = (car: Car | string) => {
  if (car instanceof Car) {
    console.log(`This is a car made by ${car.model}`);
  } else {
    console.log(`This is a car made by unKnown person`);
  }
};
```

### `in` Type Guard

```typescript
interface Employee {
  name: string;
  work: string;
  optionForLeave: boolean;
}

interface Admin {
  name: string;
  work: string;
  removeEmployee: string;
}

function userControl(user: Employee | Admin) {
  if ("optionForLeave" in user) {
    console.log("Caught!you are a user");
  } else {
    console.log("Admin");
  }
}
```

### `keyof` Type Guard

```typescript
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};
```

### `custom type` Type Guard

```typescript
interface Circle {
  shape: "circle";
  radius: number;
}

interface Rectangle {
  shape: "rectangle";
  width: number;
  height: number;
}
const findMyShape = (shape: Circle | Rectangle): shape is Circle => {
  return shape.shape === "circle";
};
```

### using Type Guard we can handle many type of data and we can make our code more readable and maintainable.
