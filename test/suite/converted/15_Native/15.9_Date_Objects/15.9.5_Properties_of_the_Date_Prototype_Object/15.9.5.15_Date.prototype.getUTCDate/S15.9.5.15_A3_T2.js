// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.getUTCDate property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @id: S15.9.5.15_A3_T2;
 * @section: 15.9.5.15;
 * @description: Checking DontDelete attribute;
 */

if (delete Date.prototype.getUTCDate.length  !== false) {
  $ERROR('#1: The Date.prototype.getUTCDate.length property has the attributes DontDelete');
}

if (!Date.prototype.getUTCDate.hasOwnProperty('length')) {
  $FAIL('#2: The Date.prototype.getUTCDate.length property has the attributes DontDelete');
}

