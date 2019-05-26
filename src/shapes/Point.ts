/*
 * Point.ts - typescript lightweight geometry library
 * https://github.com/vah7id/vector.ts
 *
 * Copyright (c) 2019 Vahid Taghizadeh
 * http://vah7id.github.io
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 */

import { Vector } from "./Vector";

/**
 * @name Point
 * @class The point class represents a point in the two dimensional space
 *
 */

export class Point extends Vector {

    protected _x: number
    protected _y: number

    constructor(x: number, y: number) {
        super(Point)
        this._x = x
        this._y = y
    }

    get x(): number {
        return this._x
    }
    set x(x: number) {
        this._x = x
    }

    get y(): number {
        return this._y
    }
    set y(y: number) {
        this._y = y
    }
}

export default Point;