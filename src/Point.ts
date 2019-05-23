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

import { VectorInterface } from './Interfaces';
import Utils from './Utils';

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
    getX(x: number) {
        return x;
    }
    getY(y: number) {
        return y;
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
    toString() {
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
    add(point: Point) {
        this.x += point.x;
        this.y += point.y;
        return this;
    }
    addX(point: Point) {
        this.x += point.x;
        return this;
    }
    addY(point: Point) {
        this.y = point.y;
        return this;
    }
    substract(point: Point) {
        this.x -= point.x;
        this.y -= point.y;
        return this;
    }
    substractX(point: Point) {
        this.x -= point.x;
        return this;
    }
    substractY(point: Point) {
        this.y -= point.y;
        return this;
    }
    equals(point: Point) {
        return point.x === this.x && point.y === this.y;
    }
    equalsX(point: Point) {
        return point.x === this.x;
    }
    equalsY(point: Point) {
        return point.y === this.y;
    }
    multiply(point: Point) {
        this.x *= point.x;
        this.y *= point.y;
        return this;
    }
    multiplyX(point: Point) {
        this.x *= point.x;
        return this;
    }
    multiplyY(point: Point) {
        this.y *= point.y;
        return this;
    }
    multiplyByScalar(n: number) {
        this.x *= n;
        this.y *= n;
        return this;
    }
    devide(point: Point) {
        this.x /= point.x;
        this.y /= point.y;
        return this;
    }
    devideX(point: Point) {
        this.x /= point.x;
        return this;
    }
    devideY(point: Point) {
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
    dot(point: Point) {
        return point.x * this.x + point.y * this.y;
    }
    cross(point: Point) {
        return this.x * point.y - this.y * point.x;
    }
    distance(point: Point) {
        var x = this.x - point.x;
        var y = this.y - point.y;
        return Math.sqrt(x * x + y * y);
    }
    distanceX(point: Point) {
        return this.x - point.x;
    }
    distanceY(point: Point) {
        return this.y - point.y;
    }
    distanceSqr(point: Point) {
        var dx = this.distanceX(point), dy = this.distanceY(point);
        return dx * dx + dy * dy;
    }
    horizontalAngle = function () {
        return Math.atan2(this.y, this.x);
    };
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
    randomizeX(topLeft: Point, bottomRight: Point) {
        var min = Math.min(topLeft.x, bottomRight.x);
        var max = Math.max(topLeft.x, bottomRight.x);
        this.x = Utils.random(min, max);
        return this;
    }
    randomizeY(topLeft: Point, bottomRight: Point) {
        var min = Math.min(topLeft.y, bottomRight.y);
        var max = Math.max(topLeft.y, bottomRight.y);
        this.y = Utils.random(min, max);
        return this;
    }
    randomize(topLeft: Point, bottomRight: Point) {
        this.randomizeX(topLeft, bottomRight);
        this.randomizeY(topLeft, bottomRight);
        return this;
    }
}