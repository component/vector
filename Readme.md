
# point

  `Point` object for canvas etc.

## Installation

```
$ component install component/point
```

## Example

```js
var Point = require('point');
var a = new Point(5, 5);
var b = new Point(10, 10);
a.distance(b);
```

  or without `new`:

```js
var p = require('point');
var a = p(5, 5);
var b = p(10, 10);
a.distance(b);
```

## API

### Vector(x, y)

  Initialize a new `Vector` with x / y.

### Vector#negate()

  Return a negated vector.

### Vector#add(v:Vector)

  Add x / y.

### Vector#sub(v:Vector)

  Sub x / y.

### Vector#mul(v:Vector)

  Multiply x / y.

### Vector#div(v:Vector)

  Divide x / y.

### Vector#equals(v:Vector)

  Check if these vectors are the same.

### Vector#clone()

  Return a clone of this vector.

### Vector#angle()

  Return angle in radians.

### Vector#degrees()

  Return angle in degrees.

### Vector#distance(v:Vector)

  Return the distance between vectors.

### Vector#toString()

  Return "(x, y)" string representation.

## License 

  MIT