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

import { VectorInterface } from '../Interfaces';
import Utils from '../Utils';

/**
 * @name AbstractPoint
 * @class The AbstractPoint object represents a point in the two dimensional space
 *
 */

export abstract class AbstractPoint {
    constructor(protected point: VectorInterface<AbstractPoint>) {}

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
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    angle() {
        return this.horizontalAngle();
    }
    angleDeg() {
        return this.horizontalAngleDeg();
    }
    direction() {
        return this.horizontalAngle();
    }
    toArray() {
        return [this.x, this.y];
    }
    toObject() {
        return { x: this.x, y: this.y };
    }
    toString(this: AbstractPoint) {
        return `(${this.x}, ${this.y})`;
    }
    abs() {
        this.x = Math.abs(this.x);
        this.y = Math.abs(this.y);
        return this;
    }
    reverse() {
        this.x = -this.x;
        this.y = -this.y;
    }
    reverseX() {
        this.x = -this.x;
        return this;
    }
    reverseY() {
        this.y = -this.y;
        return this;
    }
    clone() {
        return new this.point(this.x, this.y);
    }
    add(point: AbstractPoint) {
        this.x += point.x;
        this.y += point.y;
        return this;
    }
    addX(point: AbstractPoint) {
        this.x += point.x;
        return this;
    }
    addY(point: AbstractPoint) {
        this.y = point.y;
        return this;
    }
    substract(point: AbstractPoint) {
        this.x -= point.x;
        this.y -= point.y;
        return this;
    }
    substractX(point: AbstractPoint) {
        this.x -= point.x;
        return this;
    }
    substractY(point: AbstractPoint) {
        this.y -= point.y;
        return this;
    }
    equals(point: AbstractPoint) {
        return point.x === this.x && point.y === this.y;
    }
    equalsX(point: AbstractPoint) {
        return point.x === this.x;
    }
    equalsY(point: AbstractPoint) {
        return point.y === this.y;
    }
    multiply(point: AbstractPoint) {
        this.x *= point.x;
        this.y *= point.y;
        return this;
    }
    multiplyX(point: AbstractPoint) {
        this.x *= point.x;
        return this;
    }
    multiplyY(point: AbstractPoint) {
        this.y *= point.y;
        return this;
    }
    multiplyByScalar(n: number) {
        this.x *= n;
        this.y *= n;
        return this;
    }
    devide(point: AbstractPoint) {
        this.x /= point.x;
        this.y /= point.y;
        return this;
    }
    devideX(point: AbstractPoint) {
        this.x /= point.x;
        return this;
    }
    devideY(point: AbstractPoint) {
        this.y /= point.y;
        return this;
    }
    divideByScalar(n: number) {
        this.x /= n;
        this.y /= n;
        return this;
    }
    parseInt() {
        this.x = parseInt(this.x.toString(), 10);
        this.y = parseInt(this.y.toString(), 10);
    }
    magnitude() {
        const x = this.x;
        const y = this.y;
        return Math.sqrt(x * x + y * y);
    }
    length() {
        return this.magnitude();
    }
    lengthSq() {
        const x = this.x;
        const y = this.y;
        return x * x + y * y;
    }
    normalize() {
        return this.divideByScalar(this.magnitude());
    }
    dot(point: AbstractPoint) {
        return point.x * this.x + point.y * this.y;
    }
    cross(point: AbstractPoint) {
        return this.x * point.y - this.y * point.x;
    }
    distance(point: AbstractPoint) {
        var x = this.x - point.x;
        var y = this.y - point.y;
        return Math.sqrt(x * x + y * y);
    }
    distanceX(point: AbstractPoint) {
        return this.x - point.x;
    }
    distanceY(point: AbstractPoint) {
        return this.y - point.y;
    }
    distanceSqr(point: AbstractPoint) {
        var dx = this.distanceX(point), dy = this.distanceY(point);
        return dx * dx + dy * dy;
    }
    horizontalAngle() {
        return Math.atan2(this.y, this.x);
    }
    horizontalAngleDeg() {
        return Utils.radian2degrees(this.horizontalAngle());
    }
    verticalAngle() {
        return Math.atan2(this.x, this.y);
    }
    verticalAngleDeg() {
        return Utils.radian2degrees(this.verticalAngle());;
    }
    rotate(angel: number) {
        const cos = Math.cos(angel);
        const sin = Math.sin(angel);
        const tmpX = this.x;
        const tmpY = this.y;
        this.x = tmpX * cos - tmpY * sin;
        this.y = tmpX * sin + tmpY * cos;
        return this;
    }
    rotateDeg(angle: number) {
        angle = Utils.degrees2radian(angle);
        return this.rotate(angle);
    }
    round(n = 2) {
        var p = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000][n];
        this.x = ((0.5 + this.x * p) << 0) / p;
        this.y = ((0.5 + this.y * p) << 0) / p;
        return this;
    }
    randomizeX(topLeft: AbstractPoint, bottomRight: AbstractPoint) {
        var min = Math.min(topLeft.x, bottomRight.x);
        var max = Math.max(topLeft.x, bottomRight.x);
        this.x = Utils.random(min, max);
        return this;
    }
    randomizeY(topLeft: AbstractPoint, bottomRight: AbstractPoint) {
        var min = Math.min(topLeft.y, bottomRight.y);
        var max = Math.max(topLeft.y, bottomRight.y);
        this.y = Utils.random(min, max);
        return this;
    }
    randomize(topLeft: AbstractPoint, bottomRight: AbstractPoint) {
        this.randomizeX(topLeft, bottomRight);
        this.randomizeY(topLeft, bottomRight);
        return this;
    }
}

export class Point extends AbstractPoint {
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