// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.reduce
description: >
  %TypedArray%.prototype.reduce.name is "reduce".
info: |
  %TypedArray%.prototype.reduce ( callbackfn [ , thisArg ] )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js, testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

assert.sameValue(TypedArray.prototype.reduce.name, "reduce");

verifyNotEnumerable(TypedArray.prototype.reduce, "name");
verifyNotWritable(TypedArray.prototype.reduce, "name");
verifyConfigurable(TypedArray.prototype.reduce, "name");
