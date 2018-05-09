import { Observable, defer, interval, of } from 'rxjs';
import { animationFrame } from 'rxjs/scheduler/animationFrame';

import "rxjs/add/operator/map";
import "rxjs/add/operator/takeWhile";

// Exported Functions

const animate = (time, easingF, dist) =>
    duration(time).map(mapEasingF(easingF)).map(distance(dist));

export { animate };

// Internal Functions

const msElapsed = (scheduler = animationFrame) => (
    defer(() => {
        const start = scheduler.now();
        return interval(0, scheduler)
            .map(() => scheduler.now() - start);
    })
);

const distance = (d) => (t) => t * d;

const duration = (ms) =>
    msElapsed()
        .map(ems => ems / ms)
        .takeWhile(t => t <= 1);


const mapEasingF = (easingFunction) => {
    switch (easingFunction) {
        case 'elasticOut':
            return elasticOut;
        case 'easeOutQuad':
            return easeOutQuad;
        default:
            return linear;
    }
}

// Easing Functions

const elasticOut = (t) => Math.sin(-13.0 * (t + 1.0) * Math.PI/2) * Math.pow(2.0, -10.0 * t) + 1.0;
const easeOutQuad = (t) => t*(2-t);
const linear = (t) => t;
