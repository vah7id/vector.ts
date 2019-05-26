import Point from './shapes/Point';

export interface VectorInterface<T> {
    new (x: number, y: number): T
}

export interface DistanceInterface {
    getDistance(point1: Point, point2: Point): number;
}
