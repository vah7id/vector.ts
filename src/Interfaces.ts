import Point from './shapes/Vector';

export interface VectorInterface<T> {
    new (x: number, y: number): T
}

export interface DistanceInterface {
    getDistance(point1: Point, point2: Point): number;
}

export interface SvgInterface {
    stroke: string;
    strokeWidth: number;
    fill: string;
    id: string;
    className: string;
}