var assert = require("assert");
var ArrayBuilder = require('./util/arraybuilder.js');
var builder = new ArrayBuilder();

builder.appendText("helio");

assert.equal(5, builder.getLength());

assert.equal(104, builder.toByteBuffer()[0]);
assert.equal(101, builder.toByteBuffer()[1]);
assert.equal(108, builder.toByteBuffer()[2]);
assert.equal(105, builder.toByteBuffer()[3]);
assert.equal(111, builder.toByteBuffer()[4]);
assert.equal(5, builder.toByteBuffer().byteLength);
