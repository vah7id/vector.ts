/*
 * Line.ts - typescript lightweight geometry library
 * https://github.com/vah7id/vector.ts
 *
 * Copyright (c) 2019 Vahid Taghizadeh
 * http://vah7id.github.io
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 */

import Point from './Vector';
import { DistanceInterface } from '../Interfaces';

/**
 * @name Line
 * @class The line class represents a line in the two dimensional space
 *
 */

export class Line {

    protected point1: Point;
    protected point2: Point;

    constructor(point1: Point, point2: Point) {
        this.point1 = point1;
        this.point2 = point2;
    }
    setPoint1(point1: Point) {
        this.point1 = point1;
    }
    getPoint1(): Point {
        return this.point1;
    }
    setPoint2(point2: Point) {
        this
            .point2 = point2;
    }
    getPoint2(): Point {
        return this.point2;
    }
    getPoints(): Array<Point> {
        return [this.point1, this.point2];
    }
    getLength(calculator: DistanceInterface): number {
        return calculator.getDistance(this.point1, this.point2);
    }
    getReverse(): Line {
        return new Line(this.point2, this.point1);
    }
}

export default Line