// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.fill
description: >
  %TypedArray%.prototype.fill.length is 1.
info: |
  %TypedArray%.prototype.fill (value [ , start [ , end ] ] )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, has a length
    property whose value is an integer. Unless otherwise specified, this
    value is equal to the largest number of named arguments shown in the
    subclause headings for the function description, including optional
    parameters. However, rest parameters shown using the form “...name”
    are not included in the default argument count.

    Unless otherwise specified, the length property of a built-in Function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js, testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

assert.sameValue(TypedArray.prototype.fill.length, 1);

verifyNotEnumerable(TypedArray.prototype.fill, "length");
verifyNotWritable(TypedArray.prototype.fill, "length");
verifyConfigurable(TypedArray.prototype.fill, "length");
