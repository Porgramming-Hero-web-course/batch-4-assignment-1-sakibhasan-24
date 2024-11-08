# Problem - 1

### Description

This function Takes an Array <number> as input and return sum of this number.

### Key Points

- The return type is `number`,
- The function sumArray take parameter as an array
- Not Handle Negative Value,focus on only typescript basic type annotation

# Problem - 2

### Description

This function takes an Array and return Unique Array .The function remove `duplicate` element

### Key Points

- The return type is `Array`,
- The function `removeDuplicates` take parameter as an array
- typescript basic type annotation
- indexOf method

# Problem - 3

### Description

This function `countWordOccurrences` accept a sentence as a string,and accept a word as string and return number of count as number exist in sentence .

### Key Points

- The return type is `Number`,
- Convert both sentence and word as lowercase
- split `sentenceLowerCase.split(/[\s,.;!?]+/)` remove common punctuation
- typescript basic type annotation
- length method

# Problem - 4

### Description

This function `calculateShapeArea` calculates the area of shape based on the onput type shape .it accept an `object` as structure it can be Circle Or Rectangular

### Key Points

- The return type is `Number`,
- Structure is Union Type
- use type guard for different calculation

# Problem - 5

### Description

This function `getProperty` that takes an object and a property name as arguments and returns the property value.Add a constraint to ensure the property name exists on the object.

### Key Points

- The function returns the type of the specified property.,
- Uses `Generics` to allow any object type
- The `constraint K extends keyof T` ensures that only existing property names are accepted.

# Problem - 6

### Description

The `updateProfile` function allows updating specific properties of a `Profile` object. updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function return the updated profile.

### Key Points

- The function returns the type is `Profile`.,
- `Partial<Profile>` is used for `fieldsToUpdate`

# Problem - 7

### Description

class `Car` with properties make, model, and year. Include a method `getCarAge` that returns the car's age based on the current year

### Key Points

- Return the car's age as a `number` type
- Age calculate based on current Year
- focus only `class`
- keep all properties `public`

# Problem - 8

### Description

`validateKeys(obj: T, keys: (keyof T)[])` that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

### Key Points

- Return type is `Boolean`
- `T` is used for `obj`
- `keyof T` is used for `keys`
- manually check is it object or not because in runtime their may be error occurs
