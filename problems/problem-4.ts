interface Circle {
  shape: "circle";
  radius: number;
}

interface Rectangle {
  shape: "rectangle";
  width: number;
  height: number;
}
const calculateShapeArea = (structure: Circle | Rectangle): number => {
  if (structure.shape === "circle") {
    const res = Number((Math.PI * structure.radius ** 2).toFixed(2));
    return res;
  } else {
    return structure.width * structure.height;
  }
};
