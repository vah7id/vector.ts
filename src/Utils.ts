/*
 * Vector.ts - typescript lightweight geometry library
 * https://github.com/vah7id/vector.ts
 *
 * Copyright (c) 2019 Vahid Taghizadeh
 * http://vah7id.github.io
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 */

export const degrees = 180 / Math.PI;
export const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const radian2degrees = (rad: number) => rad * degrees;
export const degrees2radian = (deg: number) => deg / degrees;

export default {
    random,
    degrees,
    radian2degrees,
    degrees2radian
}