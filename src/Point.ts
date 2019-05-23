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

import { VectorInterface } from './interfaces';

/**
 * @name Point
 * @class The Point object represents a point in the two dimensional space
 *
 */

export abstract class Point {
    constructor(protected point: VectorInterface<Point>) {}

    abstract set x(x: number)
    abstract get x(): number
    abstract set y(y: number)
    abstract get y(): number

    setAxes(x: number, y: number) {
        this.x = x;
        this.y = y;
        return this;
    }
    setX(x: number) {
        this.x = x;
        return this;
    }
    setY(y: number) {
        this.y = y;
        return;
    }
}