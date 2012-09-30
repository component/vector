
var Vector = require('vector')
  , assert = require('component-assert');

describe('Vector(x, y)', function(){
  it('should return a new vector', function(){
    var p = Vector(5, 10);
    assert(p instanceof Vector);
    assert(5 == p.x);
    assert(10 == p.y);
  })

  describe('#negate()', function(){
    it('should return a negated vector', function(){
      var p = Vector(5, 10).negate();
      assert(-5 == p.x);
      assert(-10 == p.y);
    })
  })

  describe('#add(p)', function(){
    it('should add', function(){
      var p = Vector(0, 5).add(Vector(5, 10));
      assert(5 == p.x);
      assert(15 == p.y);
    })
  })

  describe('#sub(p)', function(){
    it('should subtract', function(){
      var p = Vector(10, 10).sub(Vector(5, 2));
      assert(5 == p.x);
      assert(8 == p.y);
    })
  })

  describe('#mul(p)', function(){
    it('should multiply', function(){
      var p = Vector(10, 10).mul(Vector(5, 5));
      assert(50 == p.x);
      assert(50 == p.y);
    })
  })

  describe('#div(p)', function(){
    it('should divide', function(){
      var p = Vector(50, 50).div(Vector(5, 5));
      assert(10 == p.x);
      assert(10 == p.y);
    })
  })

  describe('#angle()', function(){
    it('should return the angle in radians', function(){
      var rad = Vector(50, 50).angle();
      assert('0.79' == rad.toFixed(2));
    })
  })

  describe('#degress()', function(){
    it('should return the angle in degrees', function(){
      var deg = Vector(50, 50).degrees();
      assert(45 == deg);
    })
  })

  describe('#clone()', function(){
    it('should return a clone of the vector', function(){
      var p = Vector(5, 5);
      var a = p.clone();
      assert(p !== a);
      assert(5 == a.x);
      assert(5 == a.y);
    })
  })

  describe('#distance(p)', function(){
    it('should return the distance between vectors', function(){
      var a = Vector(5, 5);
      var b = Vector(5, 5);
      assert(0 == a.distance(b));

      a = Vector(2, 2);
      b = Vector(10, 10);
      assert('11.3' == a.distance(b).toFixed(1));
    })
  })

  describe('#equals(p)', function(){
    it('should check if the vectors are equivalent', function(){
      var a = Vector(5, 5);
      var b = Vector(5, 10);
      var c = Vector(5, 5);
      assert(false == a.equals(b));
      assert(true == a.equals(c));
    })
  })

  describe('#toString()', function(){
    it('should return a string representation', function(){
      var p = new Vector(15, 30);
      assert('(15, 30)' == p.toString());
      var p = new Vector(-5, 0);
      assert('(-5, 0)' == p.toString());
    })
  })
})
