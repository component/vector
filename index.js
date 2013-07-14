
/**
 * Expose `Vector`.
 */

module.exports = Vector;

/**
 * Initialize a new `Vector` with x / y.
 *
 * @param {Number} x
 * @param {Number} y
 * @api public
 */

function Vector(x, y) {
  if (!(this instanceof Vector)) return new Vector(x, y);
  this.x = x;
  this.y = y;
}

/**
 * Return a negated vector.
 *
 * @return {Vector}
 * @api public
 */

Vector.prototype.negate = function(){
  return new Vector(-this.x, -this.y);
};

/**
 * Add x / y.
 *
 * @param {Vector} p
 * @return {Vector} new vector
 * @api public
 */

Vector.prototype.add = function(v){
  return new Vector(this.x + v.x, this.y + v.y);
};

/**
 * Sub x / y.
 *
 * @param {Vector} p
 * @return {Vector} new vector
 * @api public
 */

Vector.prototype.sub = function(v){
  return new Vector(this.x - v.x, this.y - v.y);
};

/**
 * Multiply x / y.
 *
 * @param {Vector} p
 * @return {Vector} new vector
 * @api public
 */

Vector.prototype.mul = function(v){
  return new Vector(this.x * v.x, this.y * v.y);
};

/**
 * Divide x / y.
 *
 * @param {Vector} p
 * @return {Vector} new vector
 * @api public
 */

Vector.prototype.div = function(v){
  return new Vector(this.x / v.x, this.y / v.y);
};

/**
 * Check if these vectors are the same.
 *
 * @param {Vector} p
 * @return {Boolean}
 * @api public
 */

Vector.prototype.equals = function(v){
  return this.x == v.x && this.y == v.y;
};

/**
 * Return a clone of this vector.
 *
 * @return {Vector} new vector
 * @api public
 */

Vector.prototype.clone = function(){
  return new Vector(this.x, this.y);
};

/**
 * Return angle in radians.
 *
 * @return {Number}
 * @api public
 */

Vector.prototype.angle = function(){
  return Math.atan2(this.x, this.y);
};

/**
 * Return angle in degrees.
 *
 * @return {Number}
 * @api public
 */

Vector.prototype.degrees = function(){
  return this.angle() * 180 / Math.PI;
};

/**
 * Return the distance between vectors.
 *
 * @param {Vector} v
 * @return {Number}
 * @api public
 */

Vector.prototype.distance = function(v){
  var x = this.x - v.x;
  var y = this.y - v.y;
  return Math.sqrt(x * x + y * y);
};

/**
 * Return the magnitude of this vector.
 *
 * @return {Number}
 * @api public
 */

Vector.prototype.magnitude = function(){
  return Math.sqrt(this.x * this.x + this.y * this.y);
};

/**
 * Return the linear interpolation between vectors given a step point.
 *
 * @param {Vector} v
 * @param {Number} a
 * @return {Vector}
 * @api public
 */

Vector.prototype.interpolated = function(v, a){
  return new Vector(this.x * (1 - a) + v.x * a, this.y * (1 - a) + v.y * a);
};

/**
 * Return the middle position between vectors.
 *
 * @param {Vector} v
 * @return {Vector}
 * @api public
 */

Vector.prototype.middle = function(v){
  return this.interpolated(v, .5);
};

/**
 * Return the dot product between vectors.
 *
 * @param {Vector} v
 * @return {Number}
 * @api public
 */

Vector.prototype.dot = function(v) {
  return this.x * v.x + this.y * v.y;
};

/**
 * Return the angle between vectors in radians.
 *
 * @param {Vector} v
 * @return {Number}
 * @api public
 */

Vector.prototype.angleBetween = function(v){
  var dot = this.dot(v);
  var magA = this.magnitude();
  var magB = v.magnitude();
  return Math.acos(dot / (magA * magB))
};

/**
 * Return "(x, y)" string representation.
 *
 * @return {String}
 * @api public
 */

Vector.prototype.toString = function(){
  return '(' + this.x + ', ' + this.y + ')';
};



