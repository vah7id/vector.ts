/*
 * Rectangle.ts - typescript lightweight geometry library
 * https://github.com/vah7id/vector.ts
 *
 * Copyright (c) 2019 Vahid Taghizadeh
 * http://vah7id.github.io
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 */

import Point from './Point';
import { SvgInterface } from '../Interfaces';

/**
 * @name Rectangle
 * @class The rectangle class represents a rectangle in the two dimensional space
 *
 */


export class Rectangle {

    protected xmin: number;
    protected ymin: number;
    protected xmax: number;
    protected ymax: number;

    constructor(xmin: number, ymin: number, xmax: number, ymax: number) {
        this.xmin = xmin;
        this.ymin = ymin;
        this.xmax = xmax;
        this.ymax = ymax;
    }
    get topLeft() {
        return new Point(this.xmin, this.ymin);
    }
    get bottomRight() {
        return new Point(this.xmax, this.ymax);
    }
    get center() {
        return new Point((this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2);
    }
    equals(rect: Rectangle) {
        return (this.topLeft.equals(rect.topLeft) && this.bottomRight.equals(rect.bottomRight));
    }
    set(xmin: number, ymin: number, xmax: number, ymax: number) {
        this.xmin = xmin;
        this.ymin = ymin;
        this.xmax = xmax;
        this.ymax = ymax;
    }
    intercept(rect: Rectangle) {
        return (
            this.xmax < rect.xmin ||
            this.xmin > rect.xmax ||
            this.ymax < rect.ymin ||
            this.ymin > rect.ymax
        );
    }
    merge(rect: Rectangle) {
        return new Rectangle(
            this.xmin === undefined ? rect.xmin : Math.min(this.xmin, rect.xmin),
            this.ymin === undefined ? rect.ymin : Math.min(this.ymin, rect.ymin),
            this.xmax === undefined ? rect.xmax : Math.max(this.xmax, rect.xmax),
            this.ymax === undefined ? rect.ymax : Math.max(this.ymax, rect.ymax)
        );
    }
    less(rect: Rectangle) {
        if (this.topLeft.less(rect.topLeft)) {
            return true;
        }
        if (this.topLeft.equals(rect.topLeft) && this.bottomRight.equals(rect.bottomRight)) {
            return true;
        }
        return false;
    }
    clone() {
        return new Rectangle(this.xmin, this.ymin, this.xmax, this.ymax);
    }
};

export default Rectangle;
