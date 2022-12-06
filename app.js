import {
	Engine,
	Render,
	Runner,
	Bodies,
	Composite,
} from 'matter-js';


/* Globals */
const _engine = Engine.create();

const _render = Render.create({
	element: document.body,
	engine: _engine,
	options: {
        width: 1024,
        height: 800,
        // pixelRatio: 1,
        // background: '#fafafa',
        // wireframeBackground: '#222',
        hasBounds: true,
        // enabled: true,
        // wireframes: true,
        // showSleeping: true,
        // showDebug: false,
        // showBroadphase: false,
        // showBounds: false,
        // showVelocity: false,
        // showCollisions: false,
        // showSeparations: false,
        // showAxes: false,
        // showPositions: false,
        // showAngleIndicator: false,
        // showIds: false,
        // showShadows: false,
        // showVertexNumbers: false,
        // showConvexHulls: false,
        // showInternalEdges: false,
        // showMousePosition: false
    },
});

/* Main */
function main() {
	// create two boxes and a ground
	const boxA = Bodies.rectangle(400, 200, 80, 80);
	const boxB = Bodies.rectangle(450, 50, 80, 80);
	const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

	// add all of the bodies to the world
	Composite.add(_engine.world, [boxA, boxB, ground]);

	// run the renderer
	Render.run(_render);

	// create runner
	const runner = Runner.create();

	// run the engine
	Runner.run(runner, _engine);
}

window.addEventListener('DOMContentLoaded', () => {
	main();
});
