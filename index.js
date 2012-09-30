
/**
 * Expose `Point`.
 */

module.exports = Point;

/**
 * Initialize a new `Point` with x / y.
 *
 * @param {Number} x
 * @param {Number} y
 * @api public
 */

function Point(x, y) {
  if (!(this instanceof Point)) return new Point(x, y);
  this.x = x;
  this.y = y;
}

/**
 * Return a negated point.
 *
 * @return {Point}
 * @api public
 */

Point.prototype.negate = function(){
  return new Point(-this.x, -this.y);
};

/**
 * Add x / y.
 *
 * @param {Point} p
 * @return {Point} new point
 * @api public
 */

Point.prototype.add = function(p){
  return new Point(this.x + p.x, this.y + p.y);
};

/**
 * Sub x / y.
 *
 * @param {Point} p
 * @return {Point} new point
 * @api public
 */

Point.prototype.sub = function(p){
  return new Point(this.x - p.x, this.y - p.y);
};

/**
 * Multiply x / y.
 *
 * @param {Point} p
 * @return {Point} new point
 * @api public
 */

Point.prototype.mul = function(p){
  return new Point(this.x * p.x, this.y * p.y);
};

/**
 * Divide x / y.
 *
 * @param {Point} p
 * @return {Point} new point
 * @api public
 */

Point.prototype.div = function(p){
  return new Point(this.x / p.x, this.y / p.y);
};

/**
 * Check if these points are the same.
 *
 * @param {Point} p
 * @return {Boolean}
 * @api public
 */

Point.prototype.equals = function(p){
  return this.x == p.x && this.y == p.y;
};

/**
 * Return a clone of this point.
 *
 * @return {Point} new point
 * @api public
 */

Point.prototype.clone = function(){
  return new Point(this.x, this.y);
};

/**
 * Return angle in radians.
 *
 * @return {Number}
 * @api public
 */

Point.prototype.angle = function(){
  return Math.atan2(this.x, this.y);
};

/**
 * Return angle in degrees.
 *
 * @return {Number}
 * @api public
 */

Point.prototype.degrees = function(){
  return this.angle() * 180 / Math.PI;
};

/**
 * Return the distance between points.
 *
 * @param {Point} p
 * @return {Number}
 * @api public
 */

Point.prototype.distance = function(p){
  var x = this.x - p.x;
  var y = this.y - p.y;
  return Math.sqrt(x * x + y * y);
};

/**
 * Return "(x, y)" string representation.
 *
 * @return {String}
 * @api public
 */

Point.prototype.toString = function(){
  return '(' + this.x + ', ' + this.y + ')';
};



