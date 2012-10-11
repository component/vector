
# vector

  `Vector` object for canvas etc.

## Installation

```
$ component install component/vector
```

## Example

```js
var Vector = require('vector');
var a = new Vector(5, 5);
var b = new Vector(10, 10);
a.distance(b);
```

  or without `new`:

```js
var vec = require('vector');
var a = vec(5, 5);
var b = vec(10, 10);
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