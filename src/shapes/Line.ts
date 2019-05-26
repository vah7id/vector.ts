import Point from './Point';
import { DistanceInterface } from '../Interfaces';

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