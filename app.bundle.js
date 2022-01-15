/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gameobjects/CollidesWithObjects.ts":
/*!************************************************!*\
  !*** ./src/gameobjects/CollidesWithObjects.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CollidesWithObjects; });
/* harmony import */ var phaser3_rex_plugins_plugins_containerlite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser3-rex-plugins/plugins/containerlite */ "./node_modules/phaser3-rex-plugins/plugins/containerlite.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");

var CIRCLE = Phaser.Geom.CIRCLE;
var ELLIPSE = Phaser.Geom.ELLIPSE;

var Normalize = Phaser.Math.Angle.Normalize;
var BetweenPoints = Phaser.Math.Angle.BetweenPoints;
var GetCircleToCircle = Phaser.Geom.Intersects.GetCircleToCircle;
var Line = Phaser.Geom.Line;
var Circle = Phaser.Geom.Circle;
var LINE = Phaser.Geom.LINE;
var Path = Phaser.Curves.Path;
var QuadraticBezier = Phaser.Curves.QuadraticBezier;
var RadToDeg = Phaser.Math.RadToDeg;
var DegToRad = Phaser.Math.DegToRad;
class CollidesWithObjects extends phaser3_rex_plugins_plugins_containerlite__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(scene, x, y, size, scale) {
        super(scene, x, y, size, size);
        this.blockedDirection = { up: false, down: false, right: false, left: false, none: true };
        this.pushCrate = (dir, crate) => console.error('not implemented!');
        this.resetBlockedDirections = (crate) => {
            Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["unblockBut"])(_helpers__WEBPACK_IMPORTED_MODULE_1__["Direction"][this.facingSide(crate)], this.blockedDirection);
        };
        this.handleCrateCollison = (crate) => {
            this.pushCrate(_helpers__WEBPACK_IMPORTED_MODULE_1__["Direction"][this.facingSide(crate)], crate);
        };
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.lastDirection = Math.PI / 2;
    }
    isBlockedDirection(direction) {
        return this.blockedDirection[direction];
    }
    facingSide(crate) {
        const { point } = this;
        const angle = BetweenPoints(crate, point);
        if (angle > 0.78 && angle < 2.29) {
            return _helpers__WEBPACK_IMPORTED_MODULE_1__["Direction"].up;
        }
        else if (angle > -2.29 && angle < -0.78) {
            return _helpers__WEBPACK_IMPORTED_MODULE_1__["Direction"].down;
        }
        else if (angle > -0.79 && angle < 0.78) {
            return _helpers__WEBPACK_IMPORTED_MODULE_1__["Direction"].left;
        }
        else {
            return _helpers__WEBPACK_IMPORTED_MODULE_1__["Direction"].right;
        }
    }
    getTrepazoid(circle1, circle2, color, percent, intersectPoint = null, strokeColor = -1) {
        const { graphics, point, dp } = this;
        let cross;
        if (!intersectPoint) {
            cross = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getHomoTheticCenter"])(circle1, circle2);
            if (cross === null) {
            }
            graphics.lineStyle(3, 0x000, 1);
        }
        else {
            cross = intersectPoint;
        }
        const tp = this.getExternalTangent(circle1, circle2, cross);
        // const tp2 = findExternalTangents(circle2, circle1, cross);
        if ((tp === null || tp === void 0 ? void 0 : tp.length) > 0 && cross) {
            const [p1, p2, p3, p4] = tp;
            const shape = new Path(p1.x, p1.y);
            const mi = cross.clone().lerp(point, percent);
            const curve = new QuadraticBezier(p1, mi, p2);
            shape.add(curve);
            shape.lineTo(p2.x, p2.y);
            shape.lineTo(p3.x, p3.y);
            shape.lineTo(p4.x, p4.y);
            shape.closePath();
            return { type: -3, shape, color, strokeColor, points: { p1, p2, p3, p4 } };
        }
    }
    drawShapes(items) {
        var _a;
        items.forEach(({ type, shape, color = -1, strokeColor = -1, lineWidth = this.gridUnit / 4 }) => {
            const { graphics } = this;
            if (type === CIRCLE) {
                if (color !== -1) {
                    graphics.fillStyle(color, 1);
                    graphics.fillCircleShape(shape);
                }
                if (strokeColor !== -1) {
                    graphics.lineStyle(lineWidth, strokeColor, 1);
                    graphics.strokeCircleShape(shape);
                }
            }
            else if (type === ELLIPSE) {
                graphics.fillStyle(color, 1);
                graphics.fillEllipseShape(shape);
            }
            else if (type === LINE) {
                graphics.lineStyle(lineWidth, color, 1);
                graphics.strokeLineShape(shape);
            }
            else if (type === -2) {
                graphics.lineStyle(this.gridUnit / 4, color, 1);
                graphics.strokePoints(shape.getPoints());
            }
            else if (type === -1) {
                const { x, y, radius, startAngle, endAngle, anticlockwise } = shape;
                graphics.beginPath();
                graphics.lineStyle(lineWidth, strokeColor, 1);
                graphics.fillStyle(color, 1);
                graphics.arc(x, y, radius, startAngle, endAngle, anticlockwise);
                graphics.fillPath();
                if (strokeColor !== -1) {
                    graphics.strokePath();
                }
            }
            else {
                graphics.fillStyle(color, 1);
                graphics.lineStyle(this.gridUnit / 4, strokeColor, 1);
                graphics.fillPoints(shape.getPoints());
                if (strokeColor !== -1) {
                    graphics.strokePoints(shape.getPoints());
                }
            }
        });
        (_a = items === null || items === void 0 ? void 0 : items.shape) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    getBodyAngle() {
        const gameObject = this;
        const body = gameObject.body;
        if (body.speed > 0) {
            this.lastDirection = body.angle;
            return body.angle;
        }
        else {
            return this.lastDirection;
        }
    }
    getExternalTangent(circle1, circle2, homoTheticCenter) {
        if (circle1 && circle2 && homoTheticCenter) {
            const { graphics } = this;
            graphics.fillStyle(0xb4d455, 1);
            graphics.lineStyle(4, 0x000, 1);
            const getAngle = (c) => Normalize(BetweenPoints(c, homoTheticCenter)) / (2 * Math.PI);
            const angle1 = (getAngle(circle1) + 0.25) % 1;
            const angle2 = (angle1 + 0.5) % 1;
            const angle3 = (getAngle(circle2) + 0.25) % 1;
            const angle4 = (angle3 + 0.5) % 1;
            const pp2 = circle1.getPoint(angle2);
            const pp4 = circle2.getPoint(angle4);
            const lineA = Phaser.Geom.Line.Extend(this.getLine(pp2, pp4), circle1.radius, circle1.radius);
            const intersectPoint = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["lineIntersect"])(lineA.getPointA(), lineA.getPointB(), circle1, homoTheticCenter);
            // tslint:disable-next-line:one-variable-per-declaration
            let intersects = [];
            if (intersectPoint) {
                const halfpoint = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["point2Vec"])(circle2).lerp(intersectPoint, 0.5);
                const measureCircle = new Circle(halfpoint.x, halfpoint.y, halfpoint.distance(intersectPoint));
                intersects = GetCircleToCircle(measureCircle, circle2).map(p => Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["point2Vec"])(p));
                if ((intersects === null || intersects === void 0 ? void 0 : intersects.length) === 0) {
                    return [];
                }
                const [p1, p2] = intersects;
                const lineB = new Line(p1.x, p1.y, intersectPoint.x, intersectPoint.y);
                const lineC = new Line(p2.x, p2.y, intersectPoint.x, intersectPoint.y);
                const d = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["point2Vec"])(circle1).distance(circle2);
                const lineD = Phaser.Geom.Line.Extend(lineB, d, 0);
                const lineE = Phaser.Geom.Line.Extend(lineC, d, 0);
                const p4 = lineD.getPointA();
                const p3 = lineE.getPointA();
                intersects.push(p3);
                intersects.push(p4);
                return intersects;
            }
        }
        return [];
    }
    getLine(p1, p2) {
        const line = new Line(p1.x, p1.y, p2.x, p2.y);
        return line;
    }
    getDomeShape(position, radius) {
        const { shape, pi2: all } = this.head;
        const between = Normalize(BetweenPoints(position, shape));
        const midRad = between / all;
        const dist = (position.distance(shape) / (shape.radius) - 0.5) * 2;
        const midPoint = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["point2Vec"])(shape.getPoint(midRad)).lerp(shape, dist);
        const l = new Line(midPoint.x, midPoint.y, shape.x, shape.y);
        const distance = shape.radius * (1 - dist);
        const size = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["pyt"])(distance, shape.radius);
        const ang = RadToDeg(between) + 90 % 360;
        Line.SetToAngle(l, midPoint.x, midPoint.y, DegToRad(ang), size);
        const circAng = (between / all + 0.25) % 1;
        const pointB = l.getPointB();
        const startAngle = Normalize(BetweenPoints(shape, pointB));
        const circAng2 = (circAng + 0.5) % 1;
        const reflectPoint1 = shape.getPoint(circAng);
        const reflectPoint2 = shape.getPoint(circAng2);
        const reflectingLine = new Line(reflectPoint1.x, reflectPoint1.y, reflectPoint2.x, reflectPoint2.y);
        const toCenter = new Line(pointB.x, pointB.y, shape.x, shape.y);
        const endAngle = Normalize(Line.ReflectAngle(toCenter, reflectingLine));
        return { x: position.x, y: position.y, radius, startAngle, endAngle, anticlockwise: false };
    }
}


/***/ }),

/***/ "./src/gameobjects/Crate.ts":
/*!**********************************!*\
  !*** ./src/gameobjects/Crate.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);

class Crate extends phaser__WEBPACK_IMPORTED_MODULE_0__["Physics"].Arcade.Sprite {
    constructor(scene, x, y, name) {
        super(scene, x, y, name);
        this.$player = false;
        this.$enemy = null;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.name = name;
        this.setFrame(phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Between(0, 4));
        this.setCollideWorldBounds();
        const body = this.body;
        body.onWorldBounds = true;
        this.setPushable(false);
        // body.setEnable(true);
        // body.setBounce(3,3);
        // @ts-ignore
        this.drawPoints = this.drawFace;
    }
    get enemy() {
        return this.$enemy;
    }
    set enemy(value) {
        this.$enemy = value;
    }
    get player() {
        return this.$player;
    }
    set player(value) {
        this.$player = value;
    }
    update() {
        const that = this;
        that.graphics.clear();
        that.predraw();
        that.drawInView();
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Crate);


/***/ }),

/***/ "./src/gameobjects/CrateFace.ts":
/*!**************************************!*\
  !*** ./src/gameobjects/CrateFace.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((Base) => class extends Base {
    drawFace(top, bottom, floorTop, floorBottom) {
        // this will draw a simple crate 'texture'
        // as phaser seems to have lost the ability to draw a texture on the graphics game object in 3.5x.
        // @ts-ignore
        const { graphics, vanishPoint, point, gridUnit } = this;
        const magicZ = (1000 - vanishPoint.distance(point)) / 1000 + 1;
        graphics.setDepth(magicZ);
        graphics.fillStyle(0x996633, 1);
        graphics.lineStyle(gridUnit / 4, 0x663300, 2);
        const divide = 1 / 5;
        const topboard = top.clone().lerp(floorTop, divide).clone();
        const bottomboard = bottom.clone().lerp(floorBottom, divide).clone();
        const topfloorboard = floorTop.clone().lerp(top, divide).clone();
        const bottomfloorboard = floorBottom.clone().lerp(bottom, divide).clone();
        graphics.fillPoints([top, bottom, bottomboard, topboard], true);
        graphics.strokePath();
        graphics.fillPoints([topboard, bottomboard, bottomfloorboard, topfloorboard], true);
        graphics.strokePath();
        graphics.fillPoints([topfloorboard, bottomfloorboard, floorBottom, floorTop], true);
        graphics.strokePath();
        // draw 7 semi transparant vertical wooden beams on the center of the crate
        let prevTop = topboard;
        let prevCorner = topfloorboard;
        const beams = 7;
        for (let i = 1; i <= beams; i++) {
            const lerp = i / beams;
            const topsideboard = topboard.clone().lerp(bottomboard, lerp).clone();
            const bottomsideboard = topfloorboard.clone().lerp(bottomfloorboard, lerp).clone();
            let alpha = 0;
            if (i !== 1) {
                alpha = i / 10;
            }
            graphics.fillStyle(0x663300, alpha);
            graphics.fillPoints([prevTop, prevCorner, bottomsideboard, topsideboard], true);
            graphics.strokePath();
            graphics.fillStyle(0x996633, 1);
            prevTop = topsideboard;
            prevCorner = bottomsideboard;
        }
    }
});


/***/ }),

/***/ "./src/gameobjects/Enemy.ts":
/*!**********************************!*\
  !*** ./src/gameobjects/Enemy.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
/* harmony import */ var _CollidesWithObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollidesWithObjects */ "./src/gameobjects/CollidesWithObjects.ts");
/* harmony import */ var _PerspectiveMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PerspectiveMixin */ "./src/gameobjects/PerspectiveMixin.ts");
/* harmony import */ var _Sphere__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sphere */ "./src/gameobjects/Sphere.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var rectangle_decomposition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rectangle-decomposition */ "./node_modules/rectangle-decomposition/decomp.js");
/* harmony import */ var rectangle_decomposition__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rectangle_decomposition__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plugins_gpc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plugins/gpc */ "./src/plugins/gpc.ts");




var BetweenPoints = Phaser.Math.Angle.BetweenPoints;
var Normalize = Phaser.Math.Angle.Normalize;
var Vector2 = Phaser.Math.Vector2;
var Circle = Phaser.Geom.Circle;
var Line = Phaser.Geom.Line;
var QuadraticBezier = Phaser.Curves.QuadraticBezier;
var CIRCLE = Phaser.Geom.CIRCLE;
var LINE = Phaser.Geom.LINE;

var Between = Phaser.Math.Distance.Between;
var Path = Phaser.Curves.Path;

class Enemy extends _CollidesWithObjects__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(config, gridUnit, size, scale) {
        super(config.scene, config.x, config.y, size, scale);
        this.speed = 0;
        this.$chasePlayer = true;
        this.reverse = false;
        this.cratesOverlap = (me, crate) => {
            if (this.pushedCrate && this.playersCrate !== crate) {
                this.pushedCrate.enemy = this.blankEnemy;
            }
            this.pushedCrate = crate;
            this.blockedDirection.none = false;
            // this.distanceToBoxCorner = crate.width;
            crate.enemy = me;
            this.handleCrateCollison(crate);
        };
        const navMesh = config.scene.navMeshPlugin;
        this.navMesh = navMesh;
        this.scene = config.scene;
        const { x, y } = config;
        const that = this;
        // that.body.setCollideWorldBounds(true);
        const body = this.body;
        body.setCollideWorldBounds(true);
        // body.setEnable(true);
        // body.setBounce(10, 10);
        this.color = 0X0B6382;
        const shadowColor = 0X031920;
        this.size = size;
        this.worldBounds = config.scene.physics.world.bounds;
        this.shadow = config.scene.add.circle(x, y, size / 3.5, shadowColor, 0.4);
        that.add(this.shadow);
        this.center = new Circle(x, y, size * 1.2);
        this.pathHelper = new Circle(x, y, size);
        const Sphere = Object(_PerspectiveMixin__WEBPACK_IMPORTED_MODULE_1__["default"])(_Sphere__WEBPACK_IMPORTED_MODULE_2__["default"]);
        const quarter = size * 2;
        this.head = new Sphere(config.scene, x, y, quarter, quarter, quarter, this.color);
        this.head.setDepth(2);
        that.setScale(scale, scale);
        this.speed = gridUnit * 20;
        this.gridUnit = gridUnit / 10;
        this.acceleration = new Vector2(0, 0);
        this.pushCrate = this.pushCrateImpl;
    }
    get chasePlayer() {
        return this.$chasePlayer;
    }
    set chasePlayer(value) {
        this.$chasePlayer = value;
    }
    setBlockedDirection(direction) {
        this.blockedDirection[direction] = true;
    }
    clearMesh() {
        this.navMesh.destroy();
    }
    exterminate(player, crates) {
        const { point } = this;
        const body = this.body;
        // const tree = new RTree();
        //     const reachSize = body.width;
        //     const bbox = {
        //         minX: crate.x - reachSize,
        //         minY: crate.y - reachSize,
        //         maxX: crate.x + reachSize,
        //         maxY: crate.y + reachSize,
        //     };
        //         const result = (tree as any).search(bbox).filter((item) => item.crate !== crate);
        const { left, top, bottom, right } = this.scene.physics.world.bounds;
        const holeCubes = [];
        crates.children.iterate((crate) => {
            const crateBody = crate.body;
            const div = body.width / 2;
            const w = (crateBody.width / 2) + div;
            const h = (crateBody.height / 2) + div;
            const { x, y } = crate;
            const leftX = x - w;
            const topY = y - h;
            const rightX = x + w;
            const bottomY = y + h;
            const polys = [{ x: leftX, y: topY }, { x: leftX, y: bottomY }, { x: rightX, y: bottomY }, { x: rightX, y: topY }];
            holeCubes.push(polys);
        });
        const region = [{ x: left, y: top }, { x: right, y: top }, { x: right, y: bottom }, { x: left, y: bottom }];
        const worldbox = _plugins_gpc__WEBPACK_IMPORTED_MODULE_5__["Polygon"].fromPoints(region);
        const { bounds: inbounds } = worldbox.toVertices();
        const crateRegions = [];
        const { bounds, holes } = _plugins_gpc__WEBPACK_IMPORTED_MODULE_5__["Polygon"].fromVertices({ bounds: inbounds, holes: holeCubes }).toVertices();
        const mapper = ({ x, y }) => [x, y];
        holes.forEach(hole => crateRegions.push(hole.map(mapper)));
        bounds.forEach(bound => crateRegions.push(bound.map(mapper)));
        const partitioned = rectangle_decomposition__WEBPACK_IMPORTED_MODULE_4___default()(crateRegions);
        const polys = partitioned.map((decomp) => {
            const topLeft = new Vector2(decomp[0][0], decomp[0][1]);
            const bottomRight = new Vector2(decomp[1][0], decomp[1][1]);
            return [
                { x: topLeft.x, y: topLeft.y },
                { x: bottomRight.x, y: topLeft.y },
                { x: bottomRight.x, y: bottomRight.y },
                { x: topLeft.x, y: bottomRight.y },
            ];
        });
        const navMesh = this.navMesh.buildMeshfromPolygons('mesh', polys);
        // navMesh.enableDebug(); // Creates a Phaser.Graphics overlay on top of the screen
        navMesh.debugDrawClear(); // Clears the overlay
        // Visualize the underlying navmesh
        navMesh.debugDrawMesh({
            drawCentroid: false,
            drawBounds: false,
            drawNeighbors: false,
            drawPortals: false,
        });
        const navPath = navMesh.findPath(point, player);
        navMesh.debugDrawPath(navPath, 0xffd900);
        if (navPath) {
            const start = navPath.shift();
            const path = new Path(start.x, start.y);
            // tslint:disable-next-line:no-unused-expression
            (navPath === null || navPath === void 0 ? void 0 : navPath.length) > 0 && (navPath === null || navPath === void 0 ? void 0 : navPath.forEach(({ x, y }) => {
                path.lineTo(x, y);
            }));
            this.follow(path);
        }
    }
    update() {
        const that = this;
        that.predraw();
        const { dp, graphics, point, centerBottom, centerCenter, vanishPoint, pastCenter } = this;
        if (this.pushedCrate) {
            if (this.pushedCrate && Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["point2Vec"])(this.pushedCrate).distance(point) > this.pushedCrate.body.width) {
                this.pushedCrate.enemy = null;
            }
        }
        graphics.setDepth(2);
        graphics.clear();
        const obscuredShapes = [];
        const unubscuredShapes = [];
        Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["setPosition"])(this.pathHelper, that);
        Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["setPosition"])(this.head, that);
        Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["setPosition"])(this.center, centerCenter);
        this.head.update();
        const { equator, pi2: all, shape: sphere } = this.head;
        const { curve: eyeLine, isObscured } = this.head.getSlice('x', 0.65);
        const { curve: brow } = this.head.getSlice('x', 0.75);
        const hoverPosition = centerBottom.clone().lerp(point, 0.1);
        const feetCircle = new Circle(hoverPosition.x, hoverPosition.y, sphere.radius / 2.3);
        graphics.fillCircleShape(feetCircle);
        that.setChildPosition(this.shadow, centerBottom.x, centerBottom.y);
        const bodyAngle = this.getBodyAngle();
        const direction = Normalize(bodyAngle) / all;
        const relativeAngle = Normalize(BetweenPoints(vanishPoint, point)) / all;
        const rightShoulder = (direction + 0.25) % 1;
        const leftShoulder = (direction + 0.75) % 1;
        const shoulder1Point = equator.getPoint(relativeAngle - direction - 0.25 % 1);
        const shoulder2Point = equator.getPoint(relativeAngle - direction - 0.75 % 1);
        const hand1 = new Vector2(Circle.GetPoint(this.center, rightShoulder));
        const hand2 = new Vector2(Circle.GetPoint(this.center, leftShoulder));
        graphics.fillStyle(this.color);
        const handColor = 0X2405B;
        const torso = this.getTrepazoid(this.head.shape, feetCircle, this.color, 0.9, vanishPoint, handColor);
        const type = CIRCLE;
        const { shape: { x, y, radius } } = this.head;
        if (torso) {
            obscuredShapes.push(torso);
            const { p3, p4 } = torso.points;
            const ang1 = (BetweenPoints(this.head.shape, p3));
            const ang2 = (BetweenPoints(this.head.shape, p4));
            const startAngle = pastCenter('y') ? ang2 : ang1;
            const endAngle = startAngle === ang1 ? ang2 : ang1;
            const shape = { x, y, radius, startAngle, endAngle, anticlockwise: false };
            unubscuredShapes.push({ type: -1, shape, color: this.color, strokeColor: handColor });
        }
        else {
            unubscuredShapes.push({ type, shape: new Circle(x, y, radius), color: this.color, strokeColor: handColor });
        }
        const hand1Shape = { type, shape: new Circle(hand1.x, hand1.y, this.gridUnit), color: handColor, strokeColor: 0x000 };
        const hand2Shape = { type, shape: new Circle(hand2.x, hand2.y, this.gridUnit), color: handColor, strokeColor: 0x000 };
        graphics.fillStyle(this.color, 1);
        graphics.fillPath();
        const nose = relativeAngle - direction;
        const eye1Angle = nose - 0.95 % 1;
        const eye2Angle = nose - 0.05 % 1;
        const eye1 = eyeLine.getPoint(eye1Angle);
        const eye2 = eyeLine.getPoint(eye2Angle);
        const browStart = brow.getPoint(nose - 0.9 % 1);
        const browmiddle = brow.getPoint(nose);
        const browEnd = brow.getPoint(nose - 0.1 % 1);
        const faceFeatColor = 0x16D8D8;
        const lineWidth = this.size / 4;
        const arm1 = { type: LINE, lineWidth, shape: new Line(shoulder1Point.x, shoulder1Point.y, hand1.x, hand1.y), color: 0x000 };
        const arm2 = { type: LINE, lineWidth, shape: new Line(shoulder2Point.x, shoulder2Point.y, hand2.x, hand2.y), color: 0x000 };
        let mouth2 = equator.getPoint(eye2Angle);
        let mouth1 = equator.getPoint(eye1Angle);
        const nosePoint = equator.getPoint(nose);
        const noseObscured = isObscured(nosePoint);
        const mouth1Obscured = isObscured(mouth1);
        const mouth2Obscured = isObscured(mouth2);
        if (mouth1Obscured && !noseObscured) {
            mouth1 = mouth1.distance(mouth1Obscured[0]) < mouth1.distance(mouth1Obscured[1]) ? mouth1Obscured[0] : mouth1Obscured[1];
        }
        if (mouth2Obscured && !noseObscured) {
            mouth2 = mouth2.distance(mouth2Obscured[0]) < mouth1.distance(mouth2Obscured[1]) ? mouth2Obscured[0] : mouth2Obscured[1];
        }
        if (!noseObscured) {
            const shape = new QuadraticBezier(mouth1, nosePoint, mouth2);
            unubscuredShapes.push({ type: -2, shape, color: 0x000 });
        }
        if (this.head.isObscured(shoulder1Point)) {
            obscuredShapes.push(arm1);
            obscuredShapes.push(hand1Shape);
        }
        else {
            unubscuredShapes.push(arm1);
            unubscuredShapes.push(hand1Shape);
        }
        if (this.head.isObscured(shoulder2Point)) {
            obscuredShapes.push(arm2);
            obscuredShapes.push(hand2Shape);
        }
        else {
            unubscuredShapes.push(arm2);
            unubscuredShapes.push(hand2Shape);
        }
        const wh = this.gridUnit / 1.7;
        unubscuredShapes.push({ type: -1, shape: this.getDomeShape(eye1, wh), color: faceFeatColor, strokeColor: handColor });
        unubscuredShapes.push({ type: -1, shape: this.getDomeShape(eye2, wh), color: faceFeatColor, strokeColor: handColor });
        this.drawShapes(obscuredShapes);
        graphics.fillStyle(this.color, 1);
        const { shape: head } = this.head;
        graphics.fillCircleShape(head);
        graphics.fillStyle(faceFeatColor, 1);
        this.collisionPoint && dp(this.collisionPoint);
        this.collisionRect && graphics.strokeRect(this.collisionRect.x, this.collisionRect.y, this.collisionRect.width, this.collisionRect.height);
        this.path && this.path.draw(graphics);
        // set the line to orange
        //   graphics.lineStyle(lineWidth, handColor);
        this.pathLine && graphics.strokePoints([this.pathLine.getPointA(), this.pathLine.getPointB()]);
        if (this.pathTriangle) {
            const p1 = this.pathTriangle.getPoint(0);
            const p2 = this.pathTriangle.getPoint(0.3333);
            const p3 = this.pathTriangle.getPoint(0.6666);
            graphics.strokeTriangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
        }
        if (this.pathTriangle2) {
            const P1 = this.pathTriangle2.getPoint(0);
            const P2 = this.pathTriangle2.getPoint(0.3333);
            const P3 = this.pathTriangle2.getPoint(0.6666);
            this.pathTriangle2 && graphics.strokeTriangle(P1.x, P1.y, P2.x, P2.y, P3.x, P3.y);
        }
        // this.collisionRect && graphics.fillRectShape(this.collisionRect);
        const curve = new QuadraticBezier(browStart, browmiddle, browEnd);
        unubscuredShapes.push({ type: -2, shape: curve, color: handColor });
        this.drawShapes(unubscuredShapes);
        graphics.lineStyle(0, 0);
    }
    getClosestPoint(point, path) {
        let closest = path[0];
        let closestDistance = Between(point.x, point.y, path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) {
            const distance = Between(point.x, point.y, path[i].x, path[i].y);
            if (distance < closestDistance) {
                closest = path[i];
                closestDistance = distance;
            }
        }
        return closest;
    }
    pushCrateImpl(direction, crate) {
        this.setBlockedDirection(direction);
        const gameobject = this;
        const body = gameobject.body;
        const dir = _helpers__WEBPACK_IMPORTED_MODULE_3__["Direction"][direction];
        const vel = this.speed / 3;
        switch (dir) {
            case _helpers__WEBPACK_IMPORTED_MODULE_3__["Direction"].up:
                body.setVelocityY(vel);
                break;
            case _helpers__WEBPACK_IMPORTED_MODULE_3__["Direction"].down:
                body.setVelocityY(-vel);
                break;
            case _helpers__WEBPACK_IMPORTED_MODULE_3__["Direction"].left:
                body.setVelocityX(vel);
                break;
            case _helpers__WEBPACK_IMPORTED_MODULE_3__["Direction"].right:
                body.setVelocityX(-vel);
                break;
            default:
                body.setVelocity(0);
        }
    }
    getSide(crate, pathRect) {
        const side = this.facingSide(crate);
        switch (side) {
            case _helpers__WEBPACK_IMPORTED_MODULE_3__["Direction"].up:
                return pathRect.getLineC();
            case _helpers__WEBPACK_IMPORTED_MODULE_3__["Direction"].right:
                return pathRect.getLineD();
            case _helpers__WEBPACK_IMPORTED_MODULE_3__["Direction"].down:
                return pathRect.getLineA();
            default:
                return pathRect.getLineB();
        }
    }
    follow(path) {
        // this.path = path;
        const { point } = this;
        const getCurveLengths = path.getCurveLengths();
        const lng = getCurveLengths[0];
        const totalLength = getCurveLengths[getCurveLengths.length - 1];
        let worldRecord = Infinity;
        let closestPoint;
        const getDelta = () => this.reverse ? -0.02 : 0.01;
        for (let i = 0; i < path.curves.length; i++) {
            // get line from curve
            const curve = path.curves[i];
            const start = curve.getStartPoint();
            const end = curve.getEndPoint();
            const distance = point.distance(start);
            if (distance < worldRecord) {
                worldRecord = distance;
                closestPoint = start;
            }
            const line = new Line(start.x, start.y, end.x, end.y);
            if (Phaser.Geom.Intersects.PointToLine(point, line, this.gridUnit * 1.25)) {
                // get the percentage of the line based on the point
                const percentage = ((i * lng) + Between(point.x, point.y, start.x, start.y)) / totalLength;
                if (this.reverse ? i > 0 : i < path.curves.length - 1) {
                    const target = path.getPoint(percentage + getDelta());
                    this.seek(target);
                    break;
                }
                else {
                    // check if we reached the end of the path
                    if (percentage > 0.96) {
                        this.reverse = true;
                    }
                    if (percentage < 0.04) {
                        this.reverse = false;
                    }
                    const target = path.getPoint(percentage + getDelta());
                    this.seek(target);
                    break;
                }
            }
            else {
                // seek the closest point on the path
                this.seek(closestPoint);
            }
        }
    }
    // function that compares the distance between 2 points and a reference point and returns the furthest point
    getFurthestPoint(a, b, point) {
        // get the distance between the two points
        const distanceA = point.distance(a);
        const distanceB = point.distance(b);
        // return the furthest point
        return distanceA > distanceB ? b : a;
    }
    rect2Path(pathRect) {
        // turn rect into path
        let path;
        for (let i = 1; i < 5; i++) {
            const corner = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["point2Vec"])(pathRect.getPoint(0.25 * i));
            if (i === 1) {
                path = new Path(corner.x, corner.y);
            }
            else {
                path.lineTo(corner.x, corner.y);
            }
        }
        path.closePath();
        return path;
    }
    shape2Path(points) {
        // turn circle into path
        let path;
        this.path = path;
        for (let i = 0; i < points.length; i++) {
            const point = points[i];
            if (i === 0) {
                path = new Path(point[0], point[1]);
            }
            else {
                path.lineTo(point[0], point[1]);
            }
        }
        path.closePath();
        return path;
    }
    seek(target) {
        // set the velocity to the target
        const gameobject = this;
        const body = gameobject.body;
        // get the center of the body
        const { point: center } = this;
        const dir = target.clone().subtract(center);
        dir.normalize();
        dir.scale(this.speed);
        // this.collisionPoint = point2Vec(center);
        body.setVelocity(dir.x, dir.y);
    }
}


/***/ }),

/***/ "./src/gameobjects/PerspectiveMixin.ts":
/*!*********************************************!*\
  !*** ./src/gameobjects/PerspectiveMixin.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _Wall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wall */ "./src/gameobjects/Wall.ts");


var Vector2 = Phaser.Math.Vector2;

/* harmony default export */ __webpack_exports__["default"] = ((Base) => class extends Base {
    constructor(...args) {
        super(...args);
        this.dp = (p) => this.graphics.fillPoint(p.x, p.y, this.gridUnit / 2);
        this.getXFaceInView = () => this.pastCenter('x')
            ? this.getFaceByDirection(_helpers__WEBPACK_IMPORTED_MODULE_1__["Direction"].left)
            : this.getFaceByDirection(_helpers__WEBPACK_IMPORTED_MODULE_1__["Direction"].right);
        this.getYFaceInView = () => this.pastCenter('y')
            ? this.getFaceByDirection(_helpers__WEBPACK_IMPORTED_MODULE_1__["Direction"].up)
            : this.getFaceByDirection(_helpers__WEBPACK_IMPORTED_MODULE_1__["Direction"].down);
        this.pastCenter = (axis) => this[axis] > this.vanishPoint[axis];
        const scene = args[0].x ? args[0].scene : args[0]; // ?
        const x = args[1];
        const y = args[2];
        this.graphics = scene.add.graphics();
        this.point = new phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Vector2(x, y);
        this.vertices = [];
        const { physics: { world: { bounds: { left, right, centerX, centerY } } } } = scene;
        const val = (left - right);
        this.vanishPoint = new phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Vector2(centerX, centerY);
        this.gridUnit = scene.data.get('gridUnit');
        this.intersectMap = [];
        if (this instanceof _Wall__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            const w = args[3];
            const h = args[4];
            const d = args[5];
            this.dimensions = new Vector2(w, h);
            const wrt = (this.dimensions.x / d);
            const hrt = (this.dimensions.y / d);
            const aspectH = h < w ? val * hrt : val * hrt;
            const aspectW = h < w ? val * wrt : val * wrt;
            this.setMeasurePoints(aspectW, aspectH);
        }
        else {
            this.key = args[3];
            // this mystery value will take us to the edge of the cube
            const xy = (this.gridUnit * 2.6) * 4;
            this.dimensions = new Vector2(xy, xy);
            this.setMeasurePoints(val, val);
        }
    }
    get centerBottom() {
        if (!this.vertices[9]) {
            this.vertices[9] = this.calcVertexPos(3).lerp(this.calcVertexPos(4), 0.5);
        }
        return this.vertices[9];
    }
    get centerCenter() {
        if (!this.vertices[8.5]) {
            this.vertices[8.5] = this.centerBottom.clone().lerp(this.point, 0.5);
        }
        return this.vertices[8.5];
    }
    predraw() {
        // @ts-ignore
        const { x, y, dimensions, vanishPoint, mp } = this;
        this.point.x = x;
        this.point.y = y;
        const xhalf = dimensions.x / 2;
        const yhalf = dimensions.y / 2;
        // each corner (vertice) of the cube has been given a number. A picture really does speak a 1000 words:
        // https://en.wikipedia.org/wiki/Polygon_mesh#/media/File:Vertex-Vertex_Meshes_(VV).png
        this.vertices[1] = new phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Vector2(x - xhalf, y + yhalf);
        this.vertices[2] = new phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Vector2(x + xhalf, y + yhalf);
        this.vertices[5] = new phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Vector2(x - xhalf, y - yhalf);
        this.vertices[6] = new phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Vector2(x + xhalf, y - yhalf);
        // were going to calculate these if needed. but we need to get rid of any old values from the previous position
        delete this.vertices[0];
        delete this.vertices[3];
        delete this.vertices[4];
        delete this.vertices[7];
        delete this.vertices[8.5]; // center
        delete this.vertices[9];
    }
    drawInView() {
        this.drawVertices(this.getYFaceInView());
        this.drawVertices(this.getXFaceInView());
    }
    calcVertexPos(num) {
        const { vertices: v, vanishPoint, intersectMap } = this;
        if (!v[num]) {
            const imap = intersectMap === null || intersectMap === void 0 ? void 0 : intersectMap[num];
            const result = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["lineIntersect"])(vanishPoint, v[imap.idx1], v[imap.idx2], imap.mp);
            if (result) {
                v[num] = result;
            }
        }
        return v[num];
    }
    drawVertices(points) {
        this.drawPoints(points[0], points[1], points[2], points[3]);
    }
    getFaceByDirection(direction) {
        const { vertices: v } = this;
        switch (direction) {
            case _helpers__WEBPACK_IMPORTED_MODULE_1__["Direction"].up:
                this.calcVertexPos(4);
                this.calcVertexPos(7);
                return [v[5], v[6], v[4], v[7]];
            case _helpers__WEBPACK_IMPORTED_MODULE_1__["Direction"].down:
                this.calcVertexPos(0);
                this.calcVertexPos(3);
                return [v[1], v[2], v[0], v[3]];
            case _helpers__WEBPACK_IMPORTED_MODULE_1__["Direction"].left:
                this.calcVertexPos(0);
                this.calcVertexPos(4);
                return [v[1], v[5], v[0], v[4]];
            default:
                this.calcVertexPos(3);
                this.calcVertexPos(7);
                return [v[2], v[6], v[3], v[7]];
        }
    }
    setMeasurePoints(offsetX, offsetY) {
        // measurepoints are placed on the horizon line of the vanishpoint,
        // they are spaced equally apart with the vanishpoint in the exact center
        // when you draw a line from the measurepoint towards the center of the cube it will intersect 2 opposing corners of a face on that cube
        // when both measurepoints of the same axis are drawn,
        // an X will then be drawn on that face, starting from the corners and intersecting in the center
        //
        // because the game world is not a perfect square. we need to compensate for the aspect ratio.
        this.MeasurePointY1 = new Vector2(this.vanishPoint.x, this.vanishPoint.y + offsetY);
        this.MeasurePointY2 = new Vector2(this.vanishPoint.x, this.vanishPoint.y - offsetY);
        this.MeasurePointX1 = new Vector2(this.vanishPoint.x + offsetX, this.vanishPoint.y);
        this.MeasurePointX2 = new Vector2(this.vanishPoint.x - offsetX, this.vanishPoint.y);
        const createStruct = (idx1, idx2, mp) => ({ idx1, idx2, mp });
        this.intersectMap[0] = createStruct(1, 5, this.MeasurePointY2);
        this.intersectMap[3] = createStruct(2, 1, this.MeasurePointX2);
        this.intersectMap[4] = createStruct(5, 1, this.MeasurePointY1);
        this.intersectMap[7] = createStruct(6, 2, this.MeasurePointY1);
    }
    drawPoints(top, bottom, floorTop, floorBottom) {
        const { graphics } = this;
        // @ts-ignore
        graphics.lineStyle(this.lineWidth, 0x000, this.alpha);
        graphics.fillPoints([top, bottom, floorBottom, floorTop], true);
        graphics.strokePath();
    }
});


/***/ }),

/***/ "./src/gameobjects/Player.ts":
/*!***********************************!*\
  !*** ./src/gameobjects/Player.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _CollidesWithObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollidesWithObjects */ "./src/gameobjects/CollidesWithObjects.ts");
/* harmony import */ var _gameobjects_PerspectiveMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gameobjects/PerspectiveMixin */ "./src/gameobjects/PerspectiveMixin.ts");
/* harmony import */ var _Sphere__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sphere */ "./src/gameobjects/Sphere.ts");


var Circle = Phaser.Geom.Circle;
var Vector2 = Phaser.Math.Vector2;
var BetweenPoints = Phaser.Math.Angle.BetweenPoints;
var Normalize = Phaser.Math.Angle.Normalize;


var CIRCLE = Phaser.Geom.CIRCLE;
var LINE = Phaser.Geom.LINE;
class Player extends _CollidesWithObjects__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(config, gridUnit, crates, size, scale) {
        super(config.scene, config.x, config.y, size, size);
        this.pace = 30;
        this.factor = (this.pace / 10) * 2.5;
        this.crateCollider = (me, crate) => {
            this.pushedCrate = crate;
            if (!crate.player) {
                crate.player = true;
            }
            this.handleCrateCollison(crate);
        };
        const body = this.body;
        body.setCollideWorldBounds(true);
        this.scene = config.scene;
        const that = this;
        const { x, y } = config;
        this.color = 0XEFCAB7;
        const shadowColor = 0X031920;
        this.size = size;
        this.shadow = config.scene.add.circle(x, y, size, shadowColor, 0.4);
        const quarter = size * 1.8;
        this.shoe1Counter = 0;
        this.step = +1;
        this.now = 0;
        const Sphere = Object(_gameobjects_PerspectiveMixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_Sphere__WEBPACK_IMPORTED_MODULE_3__["default"]);
        this.head = new Sphere(config.scene, x, y, quarter, quarter, quarter, this.color);
        this.head.setDepth(2);
        const shoeColor = 0xAD661F;
        const shoeStyle = [this.size / 5, 0x663300, 1];
        this.shoe1 = config.scene.add.rexRoundRectangle(x, y, size * 2, size, size / 2, shoeColor);
        this.shoe1.setStrokeStyle(...shoeStyle);
        this.shoe1.setScale(0.5);
        this.shoe2 = config.scene.add.rexRoundRectangle(x, y, size * 2, size, size / 2, shoeColor);
        this.shoe2.setScale(0.5);
        this.shoe2.setStrokeStyle(...shoeStyle);
        this.center = new Circle(x, y, size * 1.1);
        this.pathHelper = new Circle(x, y, size);
        this.feetCircle = new Circle(x, y, size);
        that.add(this.shadow);
        that.add(this.shoe1);
        that.add(this.shoe2);
        this.shoe1.depth = 0;
        this.shoe2.depth = 0;
        this.crates = crates.children.getArray();
        this.speed = gridUnit * this.pace;
        this.gridUnit = gridUnit / 10;
        this.cursorKeys = config.scene.input.keyboard.createCursorKeys();
        this.pushCrate = this.pushCrateImpl;
        this.worldBounds = config.scene.physics.world.bounds;
    }
    isMoving() {
        return this.hasInput;
    }
    resetPlayerOnCrate() {
        if (this.pushedCrate && this.pushedCrate.player) {
            this.pushedCrate.player = false;
            this.pushedCrate.enemy = null;
        }
        this.pushedCrate = null;
    }
    update() {
        this.hasInput = false;
        const that = this;
        that.graphics.clear();
        that.graphics.lineStyle();
        const obscuredShapes = [];
        const unubscuredShapes = [];
        that.predraw();
        const { x, y, dp, graphics, point, centerBottom, centerCenter, vanishPoint, pastCenter } = this;
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["setPosition"])(this.pathHelper, that);
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["setPosition"])(this.head, that);
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["setPosition"])(this.center, centerCenter);
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["setPosition"])(this.feetCircle, centerBottom);
        this.head.update();
        const { equator, pi2: all } = this.head;
        const { curve: eyeTopLine } = this.head.getSlice('x', 0.8);
        const { curve: eyeCenterLine, isObscured } = this.head.getSlice('x', 0.65);
        const { curve: eyeBottomLine } = this.head.getSlice('x', 0.4);
        that.setChildPosition(this.shadow, centerBottom.x, centerBottom.y);
        that.shadow.depth = 0;
        this.shoe1.depth = 0;
        this.shoe2.depth = 0;
        graphics.setDepth(2);
        const bodyAngle = this.getBodyAngle();
        const direction = Normalize(bodyAngle) / all;
        const relativeAngle = Normalize(BetweenPoints(vanishPoint, point)) / all;
        that.setChildRotation(this.shoe1, bodyAngle);
        that.setChildRotation(this.shoe2, bodyAngle);
        const rightShoulder = (direction + 0.25) % 1;
        const leftShoulder = (direction + 0.75) % 1;
        const shoulder1Point = equator.getPoint(relativeAngle - direction - 0.25 % 1);
        const shoulder2Point = equator.getPoint(relativeAngle - direction - 0.75 % 1);
        const hand1 = new Vector2(Circle.GetPoint(this.center, rightShoulder));
        const hand2 = new Vector2(Circle.GetPoint(this.center, leftShoulder));
        graphics.fillStyle(this.color);
        graphics.fillStyle(this.color, 1);
        graphics.fillPath();
        const nose = relativeAngle - direction;
        const eye1Angle = nose - 0.94 % 1;
        const eye2Angle = nose + 0.94 % 1;
        const eye1AngleB = nose - 0.94 % 1;
        const eye2AngleB = nose + 0.94 % 1;
        const cheek1 = nose - 0.12 % 1;
        const cheek2 = nose + 0.12 % 1;
        const faceFeatColor = 0xFFFFFF;
        const eye1Bottom = eyeBottomLine.getPoint(eye1AngleB);
        const eye2Bottom = eyeBottomLine.getPoint(eye2AngleB);
        const eyeTop = eyeTopLine.getPoint(eye1Angle);
        const eye1Center = eyeCenterLine.getPoint(eye1Angle);
        const eye2Center = eyeCenterLine.getPoint(eye2Angle);
        const nosePoint = eyeBottomLine.getPoint(nose);
        const mouthPoint = equator.getPoint(nose).lerp(nosePoint, 0.4);
        const eye1Distance = eyeTop.distance(eye1Bottom);
        const eye2Distance = eyeTop.distance(eye2Bottom);
        const line1 = 2.2 - (eye1Distance / this.gridUnit);
        const line2 = 1.8 - (eye2Distance / this.gridUnit);
        const eyeWidth = this.gridUnit * 0.5;
        const irisSize = this.gridUnit * 0.25;
        const eye1 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getArcShape"])(eye1Center, eyeWidth, line2, line1, bodyAngle);
        const eye1Iris = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getArcShape"])(eye1Center, irisSize, line2, line1, bodyAngle);
        const eye2 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getArcShape"])(eye2Center, eyeWidth, line1, line2, bodyAngle);
        const eye2Iris = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getArcShape"])(eye2Center, irisSize, line1, line2, bodyAngle);
        const irisColor = 0x357388;
        this.walk(direction);
        const lineWidth = this.gridUnit / 10;
        unubscuredShapes.push({ type: -1, shape: eye1, color: 0xFFFFFF, strokeColor: 0x000, lineWidth });
        unubscuredShapes.push({ type: -1, shape: eye1Iris, color: irisColor, strokeColor: 0x000, lineWidth });
        unubscuredShapes.push({ type: -1, shape: eye2, color: 0xFFFFFF, strokeColor: 0x000, lineWidth });
        unubscuredShapes.push({ type: -1, shape: eye2Iris, color: irisColor, strokeColor: 0x000, lineWidth });
        unubscuredShapes.push({ type: CIRCLE, strokeColor: 0x000, shape: this.head.shape });
        unubscuredShapes.push({ type: -1, color: this.color, strokeColor: 0x000, lineWidth: this.gridUnit / 10, shape: this.getDomeShape(nosePoint, this.gridUnit * 0.35) });
        const leg1 = { type: LINE, shape: this.getLine(this.shoe1, point), color: this.color, lineWidth: this.gridUnit * 1.2 };
        const leg2 = { type: LINE, shape: this.getLine(this.shoe2, point), color: this.color, lineWidth: this.gridUnit * 1.2 };
        obscuredShapes.push(leg1);
        obscuredShapes.push(leg2);
        const torso = new Circle(centerCenter.x, centerCenter.y, this.gridUnit * 2);
        const skirtLength = centerCenter.clone().lerp(centerBottom, 0.7);
        const bottomColor = 0x436b94;
        const skirt = this.getTrepazoid(this.pathHelper, new Circle(skirtLength.x, skirtLength.y, this.gridUnit * 2.55), bottomColor, 0.97, null, 0x000);
        if (skirt) {
            obscuredShapes.push(skirt);
        }
        const topColor = 0x6d8cac;
        obscuredShapes.push({ type: CIRCLE, color: topColor, shape: torso, strokeColor: 0x000 });
        let handPos1 = hand1;
        let handPos2 = hand2;
        if (this.pushedCrate && Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["point2Vec"])(this.pushedCrate).distance(point) < this.size * 4.5) {
            const { centerCenter: center } = that.head;
            const circle = new Circle(center.x, center.y, this.size * 1.4);
            const a2 = (direction + 0.1) % 1;
            const b2 = (direction + 0.9) % 1;
            handPos1 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["point2Vec"])(circle.getPoint(a2));
            handPos2 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["point2Vec"])(circle.getPoint(b2));
        }
        obscuredShapes.push({ type: CIRCLE, color: this.color, shape: new Circle(handPos1.x, handPos1.y, this.gridUnit * 0.8), strokeColor: 0x000 });
        obscuredShapes.push({ type: CIRCLE, color: this.color, shape: new Circle(handPos2.x, handPos2.y, this.gridUnit * 0.8), strokeColor: 0x000 });
        const arm1Line = this.getLine(shoulder1Point, handPos1);
        const arm2Line = this.getLine(shoulder2Point, handPos2);
        const arm1 = { type: LINE, shape: arm1Line, color: topColor, lineWidth: this.gridUnit * 1.2 };
        const arm1Outline = { type: LINE, shape: arm1Line, color: 0x000, lineWidth: this.gridUnit * 1.8 };
        const arm2 = { type: LINE, shape: arm2Line, color: topColor, lineWidth: this.gridUnit * 1.2 };
        const arm2Outline = { type: LINE, shape: arm2Line, color: 0x000, lineWidth: this.gridUnit * 1.8 };
        obscuredShapes.push({ type: CIRCLE, color: topColor, strokeColor: 0x000, shape: new Circle(shoulder1Point.x, shoulder1Point.y, this.gridUnit * 0.65) });
        obscuredShapes.push({ type: CIRCLE, color: topColor, strokeColor: 0x000, shape: new Circle(shoulder2Point.x, shoulder2Point.y, this.gridUnit * 0.65) });
        obscuredShapes.push(arm1Outline);
        obscuredShapes.push(arm2Outline);
        obscuredShapes.push(arm1);
        obscuredShapes.push(arm2);
        graphics.fillStyle(faceFeatColor);
        this.drawShapes(obscuredShapes);
        graphics.fillStyle(this.color, 1);
        graphics.fillCircleShape(this.head.shape);
        // const lok1 =  getArcShape(point, this.gridUnit, 1.8, 1.5, bodyAngle + Math.PI); //{ x, y, radius: this.gridUnit , startAngle: bodyAngle - 0.1, endAngle: bodyAngle };
        const lok1 = { x, y, radius: this.gridUnit, startAngle: bodyAngle - 0.1, endAngle: bodyAngle };
        const topBlonde = 0xd9b380;
        const bottomBlonde = 0xdc89f73;
        const bunp = equator.getPoint(relativeAngle - direction - 0.5 % 1);
        const hair = this.getTrepazoid(this.pathHelper, new Circle(bunp.x, bunp.y, this.gridUnit * 2.55), bottomBlonde, 0.96, null, 0x0866251);
        if (hair) {
            unubscuredShapes.push(hair);
        }
        // const shape = getArcCurve(lok1);
        const topHair1 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getArcShape"])(point, this.size, 1, 2.7, bodyAngle);
        const topHair2 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getArcShape"])(point, this.size, 1.6, 1, bodyAngle);
        unubscuredShapes.push({ type: -1, shape: topHair1, color: topBlonde, strokeColor: 0X0866251 });
        unubscuredShapes.push({ type: -1, shape: topHair2, color: topBlonde, strokeColor: 0X0866251 });
        unubscuredShapes.push({ type: CIRCLE, shape: lok1, color: topBlonde });
        graphics.lineStyle(this.gridUnit / 4, 0x000);
        graphics.fillStyle(this.color, 1);
        graphics.fillStyle(0x9f1f19, 0.7);
        dp(mouthPoint);
        graphics.fillStyle(0x9f1f19, 0.2);
        dp(eyeBottomLine.getPoint(cheek1));
        dp(eyeBottomLine.getPoint(cheek2));
        graphics.fillStyle(faceFeatColor, 1);
        graphics.fillStyle(0xFFFFFF, 1);
        this.drawShapes(unubscuredShapes);
        graphics.lineStyle(0, 0);
    }
    walk(direction) {
        const { graphics, point } = this;
        const container = this;
        // re-enable moving in a certain direction if passed a blockade
        if (this.pushedCrate) {
            this.resetBlockedDirections(this.pushedCrate);
        }
        // Every frame, we create a new velocity for the sprite based on what keys the player is holding down.
        const velocity = new Phaser.Math.Vector2(0, 0);
        const { left: { isDown: leftDown }, right: { isDown: rightDown }, up: { isDown: upDown }, down: { isDown: downDown } } = this.cursorKeys;
        if (leftDown && !this.blockedDirection.left) {
            velocity.x -= 1;
            this.hasInput = true;
            this.blockedDirection.right = false;
        }
        if (rightDown && !this.blockedDirection.right) {
            velocity.x += 1;
            this.hasInput = true;
            this.blockedDirection.left = false;
        }
        if (upDown && !this.blockedDirection.up) {
            velocity.y -= 1;
            this.hasInput = true;
            this.blockedDirection.down = false;
        }
        if (downDown && !this.blockedDirection.down) {
            velocity.y += 1;
            this.hasInput = true;
            this.blockedDirection.up = false;
        }
        if (this.hasInput) {
            const count = this.pace / 600;
            if (this.now >= 1) {
                this.step = -count;
            }
            if (this.now <= 0) {
                this.step = +count;
            }
            this.now += this.step;
            const a1 = (direction + 0.45) % 1;
            const a2 = (direction + 0.05) % 1;
            const b1 = (direction + 0.55) % 1;
            const b2 = (direction + 0.95) % 1;
            const p1 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["point2Vec"])(this.feetCircle.getPoint(a1));
            const p2 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["point2Vec"])(this.feetCircle.getPoint(b1));
            graphics.fillStyle(0x0FFFFF, 1);
            const pp = this.feetCircle.getPoint(a2);
            const ppb = this.feetCircle.getPoint(b2);
            const pa = p1.clone().lerp(pp, this.now);
            const pb = p2.clone().lerp(ppb, Math.abs(this.now - 1));
            container.setChildPosition(this.shoe1, pa.x, pa.y);
            container.setChildPosition(this.shoe2, pb.x, pb.y);
        }
        // We normalize the velocity so that the player is always moving at the same speed, regardless of direction.
        const normalizedVelocity = velocity.normalize();
        const gameObject = this;
        gameObject.body
            .setVelocity(normalizedVelocity.x * this.speed, normalizedVelocity.y * this.speed);
    }
    pushCrateImpl(direction, crate) {
        const up = direction === 'up';
        const down = direction === 'down';
        const right = direction === 'right';
        const left = direction === 'left';
        const none = false;
        const collision = { up, down, right, left, none };
        const axis = up || down ? 'y' : 'x';
        const selection = this.crates.filter((item) => Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["collidesOnAxes"])(crate, item, collision))
            .sort((a, b) => a[axis] < b[axis] ? -1 : 1);
        const collidingCrate = up || left ? selection.pop() : selection[0];
        if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["impassable"])(crate, collidingCrate, this.factor, collision, this.worldBounds)) {
            this.blockedDirection = { up, down, right, left, none: false };
            const opAxis = right || left ? 'y' : 'x';
            this[`${opAxis}Threshold`] = crate[opAxis] / this.gridUnit;
        }
        else {
            up || left ? crate[axis] -= this.factor : crate[axis] += this.factor;
        }
        crate.update();
    }
}


/***/ }),

/***/ "./src/gameobjects/PrisonFace.ts":
/*!***************************************!*\
  !*** ./src/gameobjects/PrisonFace.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((Base) => class extends Base {
    drawFace(top, bottom, floorTop, floorBottom) {
        // this will draw a simple crate 'texture'
        // as phaser seems to have lost the ability to draw a texture on the graphics game object in 3.5x.
        // @ts-ignore
        const { graphics, vanishPoint, point, gridUnit } = this;
        const magicZ = (1000 - vanishPoint.distance(point)) / 1000 + 1;
        graphics.setDepth(magicZ);
        graphics.fillStyle(0xCCCCCC, 1);
        graphics.lineStyle(gridUnit / 4, 0x000, 1);
        const divide = 1 / 5;
        const topboard = top.clone().lerp(floorTop, divide);
        const bottomboard = bottom.clone().lerp(floorBottom, divide);
        const topfloorboard = floorTop.clone().lerp(top, divide);
        const bottomfloorboard = floorBottom.clone().lerp(bottom, divide);
        graphics.fillPoints([top, bottom, bottomboard, topboard], true);
        graphics.strokePath();
        graphics.fillPoints([topfloorboard, bottomfloorboard, floorBottom, floorTop], true);
        graphics.strokePath();
        // draw 7 semi transparant vertical wooden beams on the center of the crate
        let prevTop = topboard;
        let prevCorner = topfloorboard;
        const beams = 7;
        for (let i = 1; i <= beams; i++) {
            const lerp = i / beams;
            const topsideboard = topboard.clone().lerp(bottomboard, lerp);
            const bottomsideboard = topfloorboard.clone().lerp(bottomfloorboard, lerp);
            let alpha = 1;
            if (i === 4 || i === 6 || i === 2) {
                alpha = 0;
            }
            graphics.fillStyle(0xCCCCCC, alpha);
            graphics.fillPoints([prevTop, prevCorner, bottomsideboard, topsideboard], true);
            graphics.strokePath();
            prevTop = topsideboard;
            prevCorner = bottomsideboard;
        }
    }
});


/***/ }),

/***/ "./src/gameobjects/Sphere.ts":
/*!***********************************!*\
  !*** ./src/gameobjects/Sphere.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Wall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wall */ "./src/gameobjects/Wall.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");


var Ellipse = Phaser.Curves.Ellipse;
var Vector2 = Phaser.Math.Vector2;
var Circle = Phaser.Geom.Circle;
var RadToDeg = Phaser.Math.RadToDeg;
var Normalize = Phaser.Math.Angle.Normalize;
var BetweenPoints = Phaser.Math.Angle.BetweenPoints;
var Line = Phaser.Geom.Line;
var GetCircleToCircle = Phaser.Geom.Intersects.GetCircleToCircle;
/* harmony default export */ __webpack_exports__["default"] = (class extends _Wall__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(scene, x, y, w, h, d, color, up = false, down = false, left = false, right = false) {
        super(scene, x, y, w, h, d, color, 'sphere', { none: false, up, down, right, left });
        this.alpha = 0;
        this.radius = w / 2;
        this.$pi2 = 2 * Math.PI;
    }
    get pi2() {
        return this.$pi2;
    }
    get isObscured() {
        return this.$isObscured;
    }
    get meridian() {
        return this.$meridian;
    }
    get equator() {
        return this.$equator;
    }
    get shape() {
        return this.circle;
    }
    getSlice(axis, perc) {
        const { centerCenter, point, graphics } = this;
        const ellipse = axis === 'x' ? this.$equator : this.$meridian;
        const lerp = axis === 'x' ? point : this.equator.getPoint(0);
        const distance = this.radius * perc;
        const size = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["pyt"])(distance, this.radius);
        const position = centerCenter.clone().lerp(lerp, perc);
        const areaCircle = new Circle(position.x, position.y, size);
        let intersection;
        intersection = GetCircleToCircle(areaCircle, this.circle, intersection);
        const curve = new Ellipse(position.x, position.y, ellipse[`${axis}Radius`] / (this.radius / size), size, 0, 360, true, this.angle2VP);
        let isObscured = (b) => false;
        if (intersection.length > 0) {
            const p1 = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["point2Vec"])(intersection[0]);
            const p2 = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["point2Vec"])(intersection[1]);
            const middle = p1.lerp(p2, 0.5);
            isObscured = (p) => middle.distance(p) <= p1.distance(p2) && intersection;
        }
        // curve.draw(graphics);
        return { curve, isObscured };
    }
    update() {
        this.predraw(); // causality
        const { vertices: v, centerCenter, vanishPoint, point, gridUnit, graphics } = this;
        graphics.clear();
        graphics.setDepth(4);
        const newCircle = new Circle(centerCenter.x, centerCenter.y, this.radius);
        this.circle = newCircle;
        const bp = BetweenPoints(vanishPoint, point);
        this.angle2VPRad = bp / this.$pi2;
        this.angle2VP = RadToDeg(bp);
        const { x: xRadius, y: yRadius } = this.getPlanes(centerCenter, point, newCircle);
        this.$equator = new Ellipse(centerCenter.x, centerCenter.y, xRadius, this.radius, 0, 1, true, this.angle2VP);
        this.$meridian = new Ellipse(centerCenter.x, centerCenter.y, yRadius, this.radius, 0, 1, true, this.angle2VP);
        // this.equator.draw(graphics);
        graphics.fillStyle(0xFFF000);
        const eqautorAxis1 = this.equator.getPoint(0.25);
        const eqautorAxis2 = this.equator.getPoint(0.75);
        const midPoint = this.equator.getPoint(0.5).lerp(centerCenter, 0.5);
        const middle = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["calculateCircleCenter"])(eqautorAxis1, eqautorAxis2, midPoint);
        const start = newCircle.getPoint(0.5);
        const end = newCircle.getPoint(1);
        this.$isObscured = (p) => middle.distance(p) <= eqautorAxis1.distance(eqautorAxis2) && [eqautorAxis1, eqautorAxis2];
        this.$equatorAxis = new Line(eqautorAxis1.x, eqautorAxis2.y, eqautorAxis2.x, eqautorAxis2.y);
        // graphics.strokeCircleShape(areaCircle);
        // this.meridian.draw(graphics);
    }
    getPlanes(center, pole, circle) {
        const l = center.distance(pole);
        const s = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["pyt"])(l, circle.radius);
        const angle = Normalize(Line.Angle(new Line(s, l))) / this.$pi2;
        const mirror = (angle + 0.5) % 1;
        const a = circle.getPoint(angle);
        const b = circle.getPoint(mirror);
        const y = (b.y - a.y) / 2;
        const x = (b.x - a.x) / 2;
        return new Vector2(x, y);
    }
});


/***/ }),

/***/ "./src/gameobjects/Wall.ts":
/*!*********************************!*\
  !*** ./src/gameobjects/Wall.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");

class Wall extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y, w, h, d, color, key = 'wall', direction = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["Collision4Direction"])(_helpers__WEBPACK_IMPORTED_MODULE_0__["Direction"].none)) {
        super(scene, x, y, w, h, color);
        scene.add.existing(this);
        // scene.physics.add.existing(this);
        this.color = color;
        this.depth = 1;
        this.key = key;
        this.name = key;
        this.$direction = direction;
    }
    get direction() {
        return this.$direction;
    }
    update() {
        const that = this;
        that.graphics.clear();
        that.graphics.fillStyle(this.color, 1);
        that.predraw();
        // the walls should draw the face that is visible. for the rest the draw order is based on position.
        if (this.direction.none) {
            that.drawInView();
        }
        else {
            Object.entries(this.direction).forEach((value) => value[1] && that.drawVertices(that.getFaceByDirection(_helpers__WEBPACK_IMPORTED_MODULE_0__["Direction"][value[0]])));
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Wall);


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! exports provided: Direction, getGameWidth, getGameHeight, collidesOnAxes, Collision4Direction, impassable, blockedInDirection, reachedBound, lineIntersect, addProperty, gcd, pyt, point2Vec, calculateCircleCenter, setPosition, CreateShape, getArcCurve, getArcShape, unblockBut, getRandomInt, getHomoTheticCenter, findTangents, getPerpendicular, getInnerHomoTheticCenter, findExternalTangents, getTriangle, getAngle, getHomoTheticCenterAngle, contains, overlaps, touches, overlap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameWidth", function() { return getGameWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameHeight", function() { return getGameHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collidesOnAxes", function() { return collidesOnAxes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collision4Direction", function() { return Collision4Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impassable", function() { return impassable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockedInDirection", function() { return blockedInDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reachedBound", function() { return reachedBound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineIntersect", function() { return lineIntersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProperty", function() { return addProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gcd", function() { return gcd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pyt", function() { return pyt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point2Vec", function() { return point2Vec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateCircleCenter", function() { return calculateCircleCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPosition", function() { return setPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateShape", function() { return CreateShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArcCurve", function() { return getArcCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArcShape", function() { return getArcShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unblockBut", function() { return unblockBut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomoTheticCenter", function() { return getHomoTheticCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findTangents", function() { return findTangents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerpendicular", function() { return getPerpendicular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInnerHomoTheticCenter", function() { return getInnerHomoTheticCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findExternalTangents", function() { return findExternalTangents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTriangle", function() { return getTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAngle", function() { return getAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomoTheticCenterAngle", function() { return getHomoTheticCenterAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overlaps", function() { return overlaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return touches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overlap", function() { return overlap; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gameobjects_Wall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameobjects/Wall */ "./src/gameobjects/Wall.ts");


var Vector2 = Phaser.Math.Vector2;
var Path = Phaser.Curves.Path;
var RadToDeg = Phaser.Math.RadToDeg;
var FACING_UP = Phaser.Physics.Arcade.FACING_UP;
var FACING_DOWN = Phaser.Physics.Arcade.FACING_DOWN;
var FACING_LEFT = Phaser.Physics.Arcade.FACING_LEFT;
var FACING_RIGHT = Phaser.Physics.Arcade.FACING_RIGHT;
var FACING_NONE = Phaser.Physics.Arcade.FACING_NONE;
var Direction;
(function (Direction) {
    Direction[Direction["none"] = FACING_NONE] = "none";
    Direction[Direction["up"] = FACING_UP] = "up";
    Direction[Direction["down"] = FACING_DOWN] = "down";
    Direction[Direction["left"] = FACING_LEFT] = "left";
    Direction[Direction["right"] = FACING_RIGHT] = "right";
})(Direction || (Direction = {}));
const getGameWidth = (scene) => {
    return scene.game.scale.width;
};
const getGameHeight = (scene) => {
    return scene.game.scale.height;
};
const collidesOnAxes = (crate, item, direction) => {
    const axis = direction.up || direction.down ? 'x' : 'y';
    const opaxis = direction.up || direction.down ? 'y' : 'x';
    const halfSize = crate.body.height / 2;
    // the following var names are presuming direction in y axis. Could make it more general,
    // as this function is used on the x axis too. but this is already confusing as is.
    const leftCornerItem = item[axis] - halfSize;
    const rightCornerItem = item[axis] + halfSize;
    // reminder: change halfsize into halfwidth/ height if the item is not square.
    const leftCornerCrate = crate[axis] - halfSize;
    const rightCornerCrate = crate[axis] + halfSize;
    const upLeftCondition = item[opaxis] + halfSize <= crate[opaxis] - halfSize;
    const downRightCondition = item[opaxis] - halfSize >= crate[opaxis] + halfSize;
    return item !== crate
        && (direction.up || direction.left ? upLeftCondition : downRightCondition)
        && ((leftCornerItem <= rightCornerCrate && leftCornerItem >= leftCornerCrate)
            || (rightCornerItem <= rightCornerCrate && rightCornerItem >= leftCornerCrate));
};
const Collision4Direction = (dir) => ({ none: dir === Direction.none, up: dir === Direction.up, down: dir === Direction.down, left: dir === Direction.left, right: dir === Direction.right });
const impassable = (crate, otherCrate, speed, direction, world) => reachedBound(crate, speed, direction, world) || blockedInDirection(crate, otherCrate, speed, direction) || crate instanceof _gameobjects_Wall__WEBPACK_IMPORTED_MODULE_1__["default"];
const blockedInDirection = (crate, otherCrate, speed, direction) => {
    if (crate.enemy) {
        return true;
    }
    if (otherCrate) {
        const halfSize = crate.body.height / 2;
        const axis = direction.up || direction.down ? 'y' : 'x';
        const upLeftCondition = otherCrate[axis] + halfSize >= crate[axis] - halfSize - speed;
        const downRightCondition = otherCrate[axis] - halfSize <= crate[axis] + halfSize + speed;
        return direction.up || direction.left ? upLeftCondition : downRightCondition;
    }
    else {
        return false;
    }
};
const reachedBound = (crate, speed, direction, world) => {
    const halfSize = crate.body.height / 2;
    const axis = direction.up || direction.down ? 'y' : 'x';
    const d2str = direction.left ? 'left' : direction.right ? 'right' : direction.up ? 'top' : direction.down ? 'bottom' : 'none';
    const upleft = world[d2str] >= crate[axis] - halfSize;
    const downright = world[d2str] <= crate[axis] + halfSize;
    return direction.up || direction.left ? upleft : downright;
};
function lineIntersect(p1, p2, p3, p4) {
    const denom = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
    if (denom === 0) {
        return null;
    }
    const ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denom;
    return new phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Vector2({
        x: p1.x + ua * (p2.x - p1.x),
        y: p1.y + ua * (p2.y - p1.y),
    });
}
const varToString = (varObj) => Object.keys(varObj)[0];
function addProperty(object, val) {
    const name = varToString(val);
    object[name] = Object.values(val)[0];
    return object;
}
function gcd(x, y) {
    const cb = (a, b) => (b === 0 ? a : cb(b, a % b));
    return cb(Math.abs(x), Math.abs(y));
}
const pyt = (d, rad) => Math.sqrt(Math.pow(rad, 2) - Math.pow(d, 2)); // use the Pythagorean Theorem to get the new radius length\
const point2Vec = (({ x, y }) => new Vector2(x, y));
function calculateCircleCenter(A, B, C) {
    const yDeltaA = B.y - A.y;
    const xDeltaA = B.x - A.x;
    const yDeltaB = C.y - B.y;
    const xDeltaB = C.x - B.x;
    const aSlope = yDeltaA / xDeltaA;
    const bSlope = yDeltaB / xDeltaB;
    const x = (aSlope * bSlope * (A.y - C.y) + bSlope * (A.x + B.x) - aSlope * (B.x + C.x)) / (2 * (bSlope - aSlope));
    const y = -1 * (x - (A.x + B.x) / 2) / aSlope + (A.y + B.y) / 2;
    return new Vector2(x, y);
}
function setPosition(target, position) {
    target.x = position.x;
    target.y = position.y;
}
const CreateShape = (scene) => {
    return scene.add.rexCustomShapes({
        type: 'SpeechBubble',
        create: { lines: 1 },
        update: function () {
            const radius = 20;
            const strokeColor = this.getData('strokeColor');
            const fillColor = this.getData('fillColor');
            // tslint:disable-next-line:one-variable-per-declaration
            const left = 0, right = this.width, top = 0, bottom = this.height, boxBottom = bottom;
            this.getShapes()[0]
                .lineStyle(2, strokeColor, 1)
                .fillStyle(fillColor, 1)
                // top line, right arc
                .startAt(left + radius, top)
                // .arc(right - radius, top + radius, radius, 270, 360)
                // right line, bottom arc
                // .lineTo(right, boxBottom - radius)
                // .arc(right - radius, boxBottom - radius, radius, 0, 90)
                // .lineTo(left + radius, boxBottom)
                .arc(left + radius, boxBottom - radius, radius, 60, 180)
                // // left line, top arc
                // .lineTo(left, top + radius)
                .arc(left + radius, top + radius, radius, 180, 300)
                // .lineTo(left, top + radius)
                .close();
        },
    });
};
function getArcCurve({ x, y, radius, startAngle, endAngle }) {
    const path = new Path();
    path.moveTo(x, y);
    path.ellipseTo(radius, radius, RadToDeg(startAngle), RadToDeg(endAngle));
    path.closePath();
    return path;
}
const getArcShape = (position, radius, hl1, hl2, direction) => ({ x: position.x, y: position.y, radius, startAngle: direction + hl1 % Math.PI, endAngle: direction - hl2 % Math.PI });
const unblockBut = (direction, items) => Object.entries(items).forEach((item) => {
    if (item[0] !== direction) {
        items[item[0]] = false;
    }
});
const getRandomInt = (max) => Math.floor(Math.random() * max);
function getHomoTheticCenter(circle1, circle2) {
    if (circle1.radius === circle2.radius) {
        throw new Error('Circles must have different radii');
    }
    const extendLineBy = circle1.radius;
    const ext = new phaser__WEBPACK_IMPORTED_MODULE_0__["Geom"].Line(circle1.x, circle1.y, circle2.x, circle2.y);
    const crossb = Phaser.Geom.Line.Extend(ext, 0, extendLineBy);
    const cp = point2Vec(circle1.getPoint(0));
    const cp2 = point2Vec(circle2.getPoint(0));
    const crossa = Phaser.Geom.Line.Extend(new phaser__WEBPACK_IMPORTED_MODULE_0__["Geom"].Line(cp.x, cp.y, cp2.x, cp2.y), extendLineBy);
    const result = lineIntersect(crossb.getPointA(), crossb.getPointB(), crossa.getPointA(), crossa.getPointB());
    return result;
}
function findTangents({ x, y, radius }, point) {
    if (point) {
        const dx = x - point.x;
        const dy = y - point.y;
        const dd = Math.sqrt(dx * dx + dy * dy);
        const a = Math.asin(radius / dd);
        const b = Math.atan2(dy, dx);
        const t = b - a;
        const ta = { x: radius * Math.sin(t), y: radius * -Math.cos(t) };
        const t2 = b + a;
        const tb = { x: radius * -Math.sin(t2), y: radius * Math.cos(t2) };
        const p1 = new Vector2(x + ta.x, y + ta.y);
        const p2 = new Vector2(x + tb.x, y + tb.y);
        return [p1, p2];
    }
    return [];
}
// function to get the perpedicular vector of a line
function getPerpendicular(line) {
    // get a direction vector between the two points
    const dir = new Vector2(line.getPointB().x - line.getPointA().x, line.getPointB().y - line.getPointA().y);
    const v1 = point2Vec(line.getPointA());
    const v2 = point2Vec(line.getPointB());
    // convert the line to a normalized unit vector
    const b = (v2.clone().subtract(v1)).normalize();
    const p = line.getRandomPoint();
    const lamda = point2Vec(p).subtract(v1).dot(b);
    return b.scale(lamda).add(v1);
}
// functiont to get the inner homothetic center between two circles
function getInnerHomoTheticCenter(circle1, circle2) {
    // get a directional vector between the two circles
    // Get the perpedicular vector.
    const v = getPerpendicular(new phaser__WEBPACK_IMPORTED_MODULE_0__["Geom"].Line(circle1.x, circle1.y, circle2.x, circle2.y));
    // get point on the first circle
    const p1 = circle1.getPoint(0);
    // get point on the second circle
    const p2 = circle2.getPoint(0);
    // Calculate inner homothetic center.
    const a = v.length();
    const b = circle1.radius;
    const c = circle2.radius;
    const d = 2 * (v.x * (p1.x - p2.x) + v.y * (p1.y - p2.y));
    const e = Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) - Math.pow(c, 2) + Math.pow(b, 2);
    const f = Math.pow(e, 2) - 4 * d * (Math.pow(b, 2) - Math.pow(c, 2));
    if (f < 0) {
        return null;
    }
    const x = (e - Math.sqrt(f)) / (2 * d);
    const y = (e + Math.sqrt(f)) / (2 * d);
    const center1 = new Vector2(p1.x + x * (p2.x - p1.x), p1.y + x * (p2.y - p1.y));
    // Calculate outer homothetic center.
    // if (circle1.radius !== circle2.radius) {
    // }
    return center1;
}
function findExternalTangents(circle1, circle2, homoTheticCenter) {
    if (homoTheticCenter) {
        const [p2, p1] = findTangents(circle1, homoTheticCenter);
        const [p3, p4] = findTangents(circle2, homoTheticCenter);
        return [p1, p2, p3, p4];
    }
    return [];
}
function angleBetween(obj1, obj2) {
    // angle in radians
    var angleRadians = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x);
    // angle in degrees
    var angleDeg = (Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x) * 180 / Math.PI);
    return angleDeg;
}
const getTriangle = (p1, p2, p3) => new phaser__WEBPACK_IMPORTED_MODULE_0__["Geom"].Triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
// function that finds the angle between two circles
function getAngle(circle1, circle2) {
    const v1 = point2Vec(circle1.getPoint(0));
    const v2 = point2Vec(circle2.getPoint(0));
    const v3 = v2.clone().subtract(v1);
    // const angle = Math.atan2(v3.y, v3.x);
    // const angle = 
    const norm = Phaser.Math.Angle.Normalize(Phaser.Math.Angle.BetweenPoints(v1, v2)) / Math.PI * 2;
    // const relativeAngle  = Normalize(BetweenPoints(vanishPoint, point)) / all;
    console.log('angle', norm);
    return norm;
}
//function that finds the homothetic center of two circles
function getHomoTheticCenterAngle(circle1, circle2) {
    const angle = Phaser.Math.Angle.Normalize(Phaser.Math.Angle.BetweenPoints(circle1, circle2));
    const percentage = angle / (Math.PI * 2);
    console.log('percentage', percentage);
    const v1 = point2Vec(circle1.getPoint(0));
    const v2 = point2Vec(circle2.getPoint(0));
    const v3 = v1.clone().subtract(v2);
    const v4 = v3.clone().rotate(angle);
    const v5 = v4.clone().add(v2);
    return v5;
}
// Check if rectangle a contains rectangle b
// Each object (a and b) should have 2 properties to represent the
// top-left corner (x1, y1) and 2 for the bottom-right corner (x2, y2).
function contains(a, b) {
    return !(b.x1 < a.x1 ||
        b.y1 < a.y1 ||
        b.x2 > a.x2 ||
        b.y2 > a.y2);
}
// Check if rectangle a overlaps rectangle b
// Each object (a and b) should have 2 properties to represent the
// top-left corner (x1, y1) and 2 for the bottom-right corner (x2, y2).
function overlaps(a, b) {
    // no horizontal overlap
    if (a.x1 >= b.x2 || b.x1 >= a.x2)
        return false;
    // no vertical overlap
    if (a.y1 >= b.y2 || b.y1 >= a.y2)
        return false;
    return true;
}
// Check if rectangle a touches rectangle b
// Each object (a and b) should have 2 properties to represent the
// top-left corner (x1, y1) and 2 for the bottom-right corner (x2, y2).
function touches(a, b) {
    // has horizontal gap
    if (a.x1 > b.x2 || b.x1 > a.x2)
        return false;
    // has vertical gap
    if (a.y1 > b.y2 || b.y1 > a.y2)
        return false;
    return true;
}
const overlap = ([topLeft, bottomRight], [topLeft2, bottomRight2], xy = 0) => !(topLeft[xy] >= bottomRight2[xy] || topLeft2[xy] >= bottomRight[xy]);


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
/* harmony import */ var phaser3_rex_plugins_plugins_containerlite_plugin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser3-rex-plugins/plugins/containerlite-plugin.js */ "./node_modules/phaser3-rex-plugins/plugins/containerlite-plugin.js");
/* harmony import */ var phaser3_rex_plugins_plugins_customshapes_plugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! phaser3-rex-plugins/plugins/customshapes-plugin.js */ "./node_modules/phaser3-rex-plugins/plugins/customshapes-plugin.js");
/* harmony import */ var phaser3_rex_plugins_plugins_roundrectangle_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! phaser3-rex-plugins/plugins/roundrectangle-plugin */ "./node_modules/phaser3-rex-plugins/plugins/roundrectangle-plugin.js");
/* harmony import */ var _plugins_phaser_navmesh_src_phaser_navmesh_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/phaser-navmesh/src/phaser-navmesh-plugin */ "./src/plugins/phaser-navmesh/src/phaser-navmesh-plugin.ts");
/* harmony import */ var _pinkkis_phaser_plugin_pasuuna__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pinkkis/phaser-plugin-pasuuna */ "./node_modules/@pinkkis/phaser-plugin-pasuuna/dist/pasuunaplugin.js");
/* harmony import */ var _pinkkis_phaser_plugin_pasuuna__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pinkkis_phaser_plugin_pasuuna__WEBPACK_IMPORTED_MODULE_6__);





// import { PhaserNavMeshPlugin } from "phaser-navmesh";


const gameConfig = {
    title: 'blastoff',
    type: phaser__WEBPACK_IMPORTED_MODULE_0__["AUTO"],
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    scene: _scenes__WEBPACK_IMPORTED_MODULE_1__["default"],
    physics: {
        default: 'arcade',
        arcade: {
        // debug: true,
        },
    },
    plugins: {
        scene: [
            {
                key: "PhaserNavMeshPlugin",
                plugin: _plugins_phaser_navmesh_src_phaser_navmesh_plugin__WEBPACK_IMPORTED_MODULE_5__["default"],
                mapping: "navMeshPlugin",
                start: true
            },
        ],
        global: [
            { key: 'pasuunaplugin', plugin: _pinkkis_phaser_plugin_pasuuna__WEBPACK_IMPORTED_MODULE_6___default.a, start: true },
            { key: 'rexContainerLitePlugin', plugin: phaser3_rex_plugins_plugins_containerlite_plugin_js__WEBPACK_IMPORTED_MODULE_2__["default"], start: true },
            {
                key: 'rexCustomShapesPlugin',
                plugin: phaser3_rex_plugins_plugins_customshapes_plugin_js__WEBPACK_IMPORTED_MODULE_3__["default"],
                start: true,
            },
            {
                key: 'rexRoundRectanglePlugin',
                plugin: phaser3_rex_plugins_plugins_roundrectangle_plugin__WEBPACK_IMPORTED_MODULE_4__["default"],
                start: true,
            },
        ],
    },
    parent: 'game',
    backgroundColor: '#000000',
};
const game = new phaser__WEBPACK_IMPORTED_MODULE_0__["Game"](gameConfig);
window.addEventListener('resize', () => {
    game.scale.refresh();
});


/***/ }),

/***/ "./src/plugins/gpc.ts":
/*!****************************!*\
  !*** ./src/plugins/gpc.ts ***!
  \****************************/
/*! exports provided: Polygon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
class Vertex {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    equals(obj) {
        if (this === obj) {
            return true;
        }
        if (obj === null || obj === void 0) {
            return false;
        }
        return this.x === obj.x && this.y === obj.y;
    }
}
const EPSILON = 2.2204460492503131e-16;
const LEFT = 0;
const RIGHT = 1;
const CLIP = 0;
const SUBJ = 1;
const isContributing = Symbol();
const setContributing = Symbol();
var OperationType;
(function (OperationType) {
    OperationType[OperationType["DIF"] = 0] = "DIF";
    OperationType[OperationType["INT"] = 1] = "INT";
    OperationType[OperationType["XOR"] = 2] = "XOR";
    OperationType[OperationType["ADD"] = 3] = "ADD";
})(OperationType || (OperationType = {}));
function clip(op, subject, clipper) {
    const sEmpty = subject.isEmpty;
    const cEmpty = clipper.isEmpty;
    /* Test for trivial NULL result cases */
    if ((cEmpty && op === OperationType.INT) ||
        (sEmpty && (cEmpty || op === OperationType.INT || op === OperationType.DIF))) {
        return new SimplePolygon([]);
    }
    /* Identify potentialy contributing contours */
    if ((op === OperationType.INT || op === OperationType.DIF) && !(sEmpty || cEmpty)) {
        miniMaxTest(subject, clipper, op);
    }
    /* Build LMT */
    const lmtTable = new LmtTable();
    const sbte = new ScanBeamTreeEntries();
    if (!sEmpty) {
        buildLmt(lmtTable, sbte, subject, SUBJ, op);
    }
    if (!cEmpty) {
        buildLmt(lmtTable, sbte, clipper, CLIP, op);
    }
    /* Return a NULL result if no contours contribute */
    if (lmtTable.top === null) {
        return new SimplePolygon([]);
    }
    const parity = {
        /* Invert clip polygon for difference operation */
        clip: op === OperationType.DIF ? RIGHT : LEFT,
        subj: LEFT,
    };
    /* Build scanbeam table from scanbeam tree */
    const sbt = sbte.buildSBT();
    /* Used to create resulting Polygon */
    const outPoly = new TopPolygonNode();
    const aet = new AetTree();
    let scanbeam = 0;
    let localMin = lmtTable.top;
    /* Process each scanbeam */
    while (scanbeam < sbt.length) {
        /* Set yb and yt to the bottom and top of the scanbeam */
        const yb = sbt[scanbeam++];
        let yt = 0;
        let dy = 0;
        if (scanbeam < sbt.length) {
            yt = sbt[scanbeam];
            dy = yt - yb;
        }
        /* === SCANBEAM BOUNDARY PROCESSING ================================ */
        /* If LMT node corresponding to yb exists */
        if (localMin !== null) {
            if (localMin.y === yb) {
                /* Add edges starting at this local minimum to the AET */
                for (let edge = localMin.firstBound; edge !== null; edge = edge.nextBound) {
                    aet.addEdge(edge);
                }
                localMin = localMin.next;
            }
        }
        if (aet.top === null)
            throw new Error("Encountered Unexpected Null Edge");
        /* Create bundles within AET */
        let e0 = aet.top;
        let e1 = aet.top;
        /* Set up bundle fields of first edge */
        aet.top.bundle.above[aet.top.type] = (aet.top.top.y !== yb) ? 1 : 0;
        aet.top.bundle.above[1 - aet.top.type] = 0;
        aet.top.bstate.above = BundleState.UNBUNDLED;
        for (let nextEdge = aet.top.next; nextEdge !== null; nextEdge = nextEdge.next) {
            const nextType = nextEdge.type;
            const nextTypeOpposite = 1 - nextType;
            /* Set up bundle fields of next edge */
            nextEdge.bundle.above[nextType] = (nextEdge.top.y !== yb) ? 1 : 0;
            nextEdge.bundle.above[nextTypeOpposite] = 0;
            nextEdge.bstate.above = BundleState.UNBUNDLED;
            /* Bundle edges above the scanbeam boundary if they coincide */
            if (nextEdge.bundle.above[nextType] === 1) {
                if (EQ(e0.xb, nextEdge.xb) && EQ(e0.dx, nextEdge.dx) && (e0.top.y !== yb)) {
                    nextEdge.bundle.above[nextType] ^= e0.bundle.above[nextType];
                    nextEdge.bundle.above[nextTypeOpposite] = e0.bundle.above[nextTypeOpposite];
                    nextEdge.bstate.above = BundleState.BUNDLE_HEAD;
                    e0.bundle.above[CLIP] = 0;
                    e0.bundle.above[SUBJ] = 0;
                    e0.bstate.above = BundleState.BUNDLE_TAIL;
                }
                e0 = nextEdge;
            }
        }
        const horiz = { clip: HState.NH, subj: HState.NH };
        const exists = { clip: 0, subj: 0 };
        /* Set dummy previous x value */
        let px = -Number.MAX_VALUE;
        let cf = null;
        /* Process each edge at this scanbeam boundary */
        for (let edge = aet.top; edge !== null; edge = edge.next) {
            exists.clip = edge.bundle.above[CLIP] + (edge.bundle.below[CLIP] << 1);
            exists.subj = edge.bundle.above[SUBJ] + (edge.bundle.below[SUBJ] << 1);
            if ((exists.clip | exists.subj) === 0) {
                continue;
            }
            /* Set bundle side */
            edge.bside.clip = parity.clip;
            edge.bside.subj = parity.subj;
            let contributing = false;
            let br = 0;
            let bl = 0;
            let tr = 0;
            let tl = 0;
            /* Determine contributing status and quadrant occupancies */
            if ((op === OperationType.DIF) || (op === OperationType.INT)) {
                contributing = ((exists.clip !== 0) && ((parity.subj !== 0) || (horiz.subj !== 0))) ||
                    ((exists.subj !== 0) && ((parity.clip !== 0) || (horiz.clip !== 0))) ||
                    ((exists.clip !== 0) && (exists.subj !== 0) && (parity.clip === parity.subj));
                br = parity.clip & parity.subj;
                bl = (parity.clip ^ edge.bundle.above[CLIP]) & (parity.subj ^ edge.bundle.above[SUBJ]);
                tr = (parity.clip ^ (horiz.clip !== HState.NH ? 1 : 0)) & (parity.subj ^ (horiz.subj !== HState.NH ? 1 : 0));
                tl = (parity.clip ^ (horiz.clip !== HState.NH ? 1 : 0) ^ edge.bundle.below[CLIP]) &
                    (parity.subj ^ (horiz.subj !== HState.NH ? 1 : 0) ^ edge.bundle.below[SUBJ]);
            }
            else if (op === OperationType.XOR) {
                contributing = (exists.clip !== 0) || (exists.subj !== 0);
                br = parity.clip ^ parity.subj;
                bl = (parity.clip ^ edge.bundle.above[CLIP]) ^ (parity.subj ^ edge.bundle.above[SUBJ]);
                tr = parity.clip ^ (horiz.clip !== HState.NH ? 1 : 0) ^ parity.subj ^ (horiz.subj !== HState.NH ? 1 : 0);
                tl = parity.clip ^ (horiz.clip !== HState.NH ? 1 : 0) ^ edge.bundle.below[CLIP]
                    ^ parity.subj ^ (horiz.subj !== HState.NH ? 1 : 0) ^ edge.bundle.below[SUBJ];
            }
            else if (op === OperationType.ADD) {
                contributing = ((exists.clip !== 0) && (!(parity.subj !== 0) || (horiz.subj !== 0))) ||
                    ((exists.subj !== 0) && (!(parity.clip !== 0) || (horiz.clip !== 0))) ||
                    ((exists.clip !== 0) && (exists.subj !== 0) && (parity.clip === parity.subj));
                br = parity.clip | parity.subj;
                bl = (parity.clip ^ edge.bundle.above[CLIP]) | (parity.subj ^ edge.bundle.above[SUBJ]);
                tr = (parity.clip ^ (horiz.clip !== HState.NH ? 1 : 0)) | (parity.subj ^ ((horiz.subj !== HState.NH) ? 1 : 0));
                tl = (parity.clip ^ (horiz.clip !== HState.NH ? 1 : 0) ^ edge.bundle.below[CLIP]) |
                    (parity.subj ^ (horiz.subj !== HState.NH ? 1 : 0) ^ edge.bundle.below[SUBJ]);
            }
            /* Update parity */
            parity.clip ^= edge.bundle.above[CLIP];
            parity.subj ^= edge.bundle.above[SUBJ];
            /* Update horizontal state */
            if (exists.clip !== 0) {
                horiz.clip = HState.nextState[horiz.clip][((exists.clip - 1) << 1) + parity.clip];
            }
            if (exists.subj !== 0) {
                horiz.subj = HState.nextState[horiz.subj][((exists.subj - 1) << 1) + parity.subj];
            }
            if (!contributing) {
                continue;
            }
            const { xb } = edge;
            switch (getVertexType(tr, tl, br, bl)) {
                case VertexType.EMN:
                case VertexType.IMN:
                    cf = outPoly.addLocalMin(xb, yb);
                    px = xb;
                    edge.outp.above = cf;
                    break;
                case VertexType.ERI:
                    if (cf === null)
                        throw new Error("Unexpected Null Polygon");
                    if (xb !== px) {
                        cf.addRight(xb, yb);
                        px = xb;
                    }
                    edge.outp.above = cf;
                    cf = null;
                    break;
                case VertexType.ELI:
                    cf = edge.outp.below;
                    if (cf === null)
                        throw new Error("Unexpected Null Polygon");
                    cf.addLeft(xb, yb);
                    px = xb;
                    break;
                case VertexType.EMX:
                    if (cf === null)
                        throw new Error("Unexpected Null Polygon");
                    if (edge.outp.below === null)
                        throw new Error("Unexpected Null Polygon");
                    if (xb !== px) {
                        cf.addLeft(xb, yb);
                        px = xb;
                    }
                    outPoly.mergeRight(cf, edge.outp.below);
                    cf = null;
                    break;
                case VertexType.ILI:
                    if (cf === null)
                        throw new Error("Unexpected Null Polygon");
                    if (xb !== px) {
                        cf.addLeft(xb, yb);
                        px = xb;
                    }
                    edge.outp.above = cf;
                    cf = null;
                    break;
                case VertexType.IRI:
                    cf = edge.outp.below;
                    if (cf === null)
                        throw new Error("Unexpected Null Polygon");
                    cf.addRight(xb, yb);
                    px = xb;
                    edge.outp.below = null;
                    break;
                case VertexType.IMX:
                    if (cf === null)
                        throw new Error("Unexpected Null Polygon");
                    if (edge.outp.below === null)
                        throw new Error("Unexpected Null Polygon");
                    if (xb !== px) {
                        cf.addRight(xb, yb);
                        px = xb;
                    }
                    outPoly.mergeLeft(cf, edge.outp.below);
                    cf = null;
                    edge.outp.below = null;
                    break;
                case VertexType.IMM:
                    if (cf === null)
                        throw new Error("Unexpected Null Polygon");
                    if (edge.outp.below === null)
                        throw new Error("Unexpected Null Polygon");
                    if (xb !== px) {
                        cf.addRight(xb, yb);
                        px = xb;
                    }
                    outPoly.mergeLeft(cf, edge.outp.below);
                    edge.outp.below = null;
                    cf = outPoly.addLocalMin(xb, yb);
                    edge.outp.above = cf;
                    break;
                case VertexType.EMM:
                    if (cf === null)
                        throw new Error("Unexpected Null Polygon");
                    if (edge.outp.below === null)
                        throw new Error("Unexpected Null Polygon");
                    if (xb !== px) {
                        cf.addLeft(xb, yb);
                        px = xb;
                    }
                    outPoly.mergeRight(cf, edge.outp.below);
                    edge.outp.below = null;
                    cf = outPoly.addLocalMin(xb, yb);
                    edge.outp.above = cf;
                    break;
                case VertexType.LED:
                    if (edge.outp.below === null)
                        throw new Error("Unexpected Null Polygon");
                    if (edge.bot.y === yb) {
                        edge.outp.below.addLeft(xb, yb);
                    }
                    edge.outp.above = edge.outp.below;
                    px = xb;
                    break;
                case VertexType.RED:
                    if (edge.outp.below === null)
                        throw new Error("Unexpected Null Polygon");
                    if (edge.bot.y === yb) {
                        edge.outp.below.addRight(xb, yb);
                    }
                    edge.outp.above = edge.outp.below;
                    px = xb;
                    break;
                default:
            }
        }
        /* Delete terminating edges from the AET, otherwise compute xt */
        for (let edge = aet.top; edge !== null; edge = edge.next) {
            if (edge.top.y === yb) {
                const { prev, next } = edge;
                if (prev === null) {
                    aet.top = next;
                }
                else {
                    prev.next = next;
                }
                if (next !== null) {
                    next.prev = prev;
                }
                /* Copy bundle head state to the adjacent tail edge if required */
                if ((edge.bstate.below === BundleState.BUNDLE_HEAD) && (prev !== null)) {
                    if (prev.bstate.below === BundleState.BUNDLE_TAIL) {
                        prev.outp.below = edge.outp.below;
                        prev.bstate.below = BundleState.UNBUNDLED;
                        if (prev.prev !== null) {
                            if (prev.prev.bstate.below === BundleState.BUNDLE_TAIL) {
                                prev.bstate.below = BundleState.BUNDLE_HEAD;
                            }
                        }
                    }
                }
            }
            else {
                edge.xt = edge.top.y === yt ?
                    edge.top.x : (edge.bot.x + edge.dx * (yt - edge.bot.y));
            }
        }
        if (scanbeam >= sbte.sbtEntries) {
            continue;
        }
        /* === SCANBEAM INTERIOR PROCESSING ============================== */
        /* Build intersection table for the current scanbeam */
        const itTable = new ItNodeTable();
        itTable.buildIntersectionTable(aet, dy);
        /* Process each node in the intersection table */
        for (let intersect = itTable.top; intersect !== null; intersect = intersect.next) {
            [e0, e1] = intersect.ie;
            /* Only generate output for contributing intersections */
            if (((e0.bundle.above[CLIP] !== 0) || (e0.bundle.above[SUBJ] !== 0)) &&
                ((e1.bundle.above[CLIP] !== 0) || (e1.bundle.above[SUBJ] !== 0))) {
                const p = e0.outp.above;
                const q = e1.outp.above;
                const ix = intersect.point.x;
                const iy = intersect.point.y + yb;
                const inClip = (((e0.bundle.above[CLIP] !== 0) && (e0.bside.clip === 0)) ||
                    ((e1.bundle.above[CLIP] !== 0) && (e1.bside.clip !== 0)) ||
                    ((e0.bundle.above[CLIP] === 0) && (e1.bundle.above[CLIP] === 0) &&
                        ((e0.bside.clip & e1.bside.clip) === 1))) ? 1 : 0;
                const inSubj = (((e0.bundle.above[SUBJ] !== 0) && (e0.bside.subj === 0)) ||
                    ((e1.bundle.above[SUBJ] !== 0) && (e1.bside.subj !== 0)) ||
                    ((e0.bundle.above[SUBJ] === 0) && (e1.bundle.above[SUBJ] === 0) &&
                        ((e0.bside.subj & e1.bside.subj) === 1))) ? 1 : 0;
                let tr = 0;
                let tl = 0;
                let br = 0;
                let bl = 0;
                /* Determine quadrant occupancies */
                if ((op === OperationType.DIF) || (op === OperationType.INT)) {
                    tr = inClip & inSubj;
                    tl = (inClip ^ e1.bundle.above[CLIP]) & (inSubj ^ e1.bundle.above[SUBJ]);
                    br = (inClip ^ e0.bundle.above[CLIP]) & (inSubj ^ e0.bundle.above[SUBJ]);
                    bl = (inClip ^ e1.bundle.above[CLIP] ^ e0.bundle.above[CLIP]) & (inSubj ^ e1.bundle.above[SUBJ] ^ e0.bundle.above[SUBJ]);
                }
                else if (op === OperationType.XOR) {
                    tr = inClip ^ inSubj;
                    tl = (inClip ^ e1.bundle.above[CLIP]) ^ (inSubj ^ e1.bundle.above[SUBJ]);
                    br = (inClip ^ e0.bundle.above[CLIP]) ^ (inSubj ^ e0.bundle.above[SUBJ]);
                    bl = (inClip ^ e1.bundle.above[CLIP] ^ e0.bundle.above[CLIP])
                        ^ (inSubj ^ e1.bundle.above[SUBJ] ^ e0.bundle.above[SUBJ]);
                }
                else if (op === OperationType.ADD) {
                    tr = inClip | inSubj;
                    tl = (inClip ^ e1.bundle.above[CLIP]) | (inSubj ^ e1.bundle.above[SUBJ]);
                    br = (inClip ^ e0.bundle.above[CLIP]) | (inSubj ^ e0.bundle.above[SUBJ]);
                    bl = (inClip ^ e1.bundle.above[CLIP] ^ e0.bundle.above[CLIP]) | (inSubj ^ e1.bundle.above[SUBJ] ^ e0.bundle.above[SUBJ]);
                }
                switch (getVertexType(tr, tl, br, bl)) {
                    case VertexType.EMN:
                        e0.outp.above = outPoly.addLocalMin(ix, iy);
                        e1.outp.above = e0.outp.above;
                        break;
                    case VertexType.ERI:
                        if (p !== null) {
                            p.addRight(ix, iy);
                            e1.outp.above = p;
                            e0.outp.above = null;
                        }
                        break;
                    case VertexType.ELI:
                        if (q !== null) {
                            q.addLeft(ix, iy);
                            e0.outp.above = q;
                            e1.outp.above = null;
                        }
                        break;
                    case VertexType.EMX:
                        if ((p !== null) && (q !== null)) {
                            p.addLeft(ix, iy);
                            outPoly.mergeRight(p, q);
                            e0.outp.above = null;
                            e1.outp.above = null;
                        }
                        break;
                    case VertexType.IMN:
                        e0.outp.above = outPoly.addLocalMin(ix, iy);
                        e1.outp.above = e0.outp.above;
                        break;
                    case VertexType.ILI:
                        if (p !== null) {
                            p.addLeft(ix, iy);
                            e1.outp.above = p;
                            e0.outp.above = null;
                        }
                        break;
                    case VertexType.IRI:
                        if (q !== null) {
                            q.addRight(ix, iy);
                            e0.outp.above = q;
                            e1.outp.above = null;
                        }
                        break;
                    case VertexType.IMX:
                        if ((p !== null) && (q !== null)) {
                            p.addRight(ix, iy);
                            outPoly.mergeLeft(p, q);
                            e0.outp.above = null;
                            e1.outp.above = null;
                        }
                        break;
                    case VertexType.IMM:
                        if ((p !== null) && (q !== null)) {
                            p.addRight(ix, iy);
                            outPoly.mergeLeft(p, q);
                            e0.outp.above = outPoly.addLocalMin(ix, iy);
                            e1.outp.above = e0.outp.above;
                        }
                        break;
                    case VertexType.EMM:
                        if ((p !== null) && (q !== null)) {
                            p.addLeft(ix, iy);
                            outPoly.mergeRight(p, q);
                            e0.outp.above = outPoly.addLocalMin(ix, iy);
                            e1.outp.above = e0.outp.above;
                        }
                        break;
                    default:
                }
            }
            /* Swap bundle sides in response to edge crossing */
            if (e0.bundle.above[CLIP] !== 0) {
                e1.bside.clip = 1 - e1.bside.clip;
            }
            if (e1.bundle.above[CLIP] !== 0) {
                e0.bside.clip = 1 - e0.bside.clip;
            }
            if (e0.bundle.above[SUBJ] !== 0) {
                e1.bside.subj = 1 - e1.bside.subj;
            }
            if (e1.bundle.above[SUBJ] !== 0) {
                e0.bside.subj = 1 - e0.bside.subj;
            }
            /* Swap e0 and e1 bundles in the AET */
            let { prev } = e0;
            const { next } = e1;
            if (next !== null) {
                next.prev = e0;
            }
            if (e0.bstate.above === BundleState.BUNDLE_HEAD) {
                while (prev !== null && prev.bstate.above === BundleState.BUNDLE_TAIL) {
                    prev = prev.prev;
                }
            }
            if (aet.top === null)
                throw new Error("Encountered Unexpected Null Edge");
            if (prev === null) {
                aet.top.prev = e1;
                e1.next = aet.top;
                aet.top = e0.next;
            }
            else {
                if (prev.next === null)
                    throw new Error("Encountered Unexpected Null Edge");
                prev.next.prev = e1;
                e1.next = prev.next;
                prev.next = e0.next;
            }
            if (e0.next === null)
                throw new Error("Encountered Unexpected Null Edge");
            e0.next.prev = prev;
            e1.next.prev = e1;
            e0.next = next;
        }
        /* Prepare for next scanbeam */
        for (let edge = aet.top; edge !== null; edge = edge.next) {
            const { next, succ } = edge;
            if ((edge.top.y === yt) && (succ !== null)) {
                /* Replace AET edge by its successor */
                succ.outp.below = edge.outp.above;
                succ.bstate.below = edge.bstate.above;
                succ.bundle.below[CLIP] = edge.bundle.above[CLIP];
                succ.bundle.below[SUBJ] = edge.bundle.above[SUBJ];
                const { prev } = edge;
                if (prev !== null) {
                    prev.next = succ;
                }
                else {
                    aet.top = succ;
                }
                if (next !== null) {
                    next.prev = succ;
                }
                succ.prev = prev;
                succ.next = next;
            }
            else {
                /* Update this edge */
                edge.outp.below = edge.outp.above;
                edge.bstate.below = edge.bstate.above;
                edge.bundle.below[CLIP] = edge.bundle.above[CLIP];
                edge.bundle.below[SUBJ] = edge.bundle.above[SUBJ];
                edge.xb = edge.xt;
            }
            edge.outp.above = null;
        }
    }
    return outPoly.getResult();
}
function EQ(a, b) {
    return (Math.abs(a - b) <= EPSILON);
}
function PREV_INDEX(i, n) {
    return ((i - 1 + n) % n);
}
function NEXT_INDEX(i, n) {
    return ((i + 1) % n);
}
function OPTIMAL(p, i) {
    const { y: yi } = p.get(i);
    const numPoints = p.getNumPoints();
    return (p.get(PREV_INDEX(i, numPoints)).y !== yi) ||
        (p.get(NEXT_INDEX(i, numPoints)).y !== yi);
}
function miniMaxTest(subject, clipper, op) {
    const sBBoxes = subject.getInnerPolies().map((ip) => ip.bounds);
    const cBBoxes = clipper.getInnerPolies().map((ip) => ip.bounds);
    /* Check all subject contour bounding boxes against clip boxes */
    const oTable = cBBoxes.map((c) => sBBoxes.map((s) => !((s.maxx < c.minx) || (s.minx > c.maxx)) &&
        !((s.maxy < c.miny) || (s.miny > c.maxy))));
    /* For each clip contour, search for any subject contour overlaps */
    const clipNumPoly = cBBoxes.length;
    for (let c = 0; c < clipNumPoly; c++) {
        const overlap = oTable[c].every((s) => s);
        if (!overlap) {
            clipper[setContributing](c, false); // Flag non contributing status
        }
    }
    if (op === OperationType.INT) {
        /* For each subject contour, search for any clip contour overlaps */
        const subjNumPoly = sBBoxes.length;
        for (let s = 0; s < subjNumPoly; s++) {
            const overlap = oTable.every((c) => c[s]);
            if (!overlap) {
                subject[setContributing](s, false); // Flag non contributing status
            }
        }
    }
}
function boundList(lmtTable, y) {
    if (lmtTable.top === null) {
        lmtTable.top = new LmtNode(y);
        return lmtTable.top;
    }
    let prev = null;
    let node = lmtTable.top;
    while (true) {
        if (y > node.y) {
            /* Head further up the LMT */
            if (node.next === null) {
                node.next = new LmtNode(y);
                return node.next;
            }
            else {
                [prev, node] = [node, node.next];
            }
        }
        else {
            if (y < node.y) {
                /* Insert a new LMT node before the current node */
                node = new LmtNode(y, node);
                if (prev === null) {
                    lmtTable.top = node;
                }
                else {
                    prev.next = node;
                }
            }
            /* Use this existing LMT node */
            return node;
        }
    }
}
function insertBound(lmtNode, e) {
    if (lmtNode.firstBound === null) {
        /* Link node e to the tail of the list */
        lmtNode.firstBound = e;
        return;
    }
    let prevBound = null;
    let currentBound = lmtNode.firstBound;
    while (true) {
        /* Do primary sort on the x field and secondary sort on the dx field. */
        if (e.bot.x < currentBound.bot.x || (e.bot.x === currentBound.bot.x && e.dx < currentBound.dx)) {
            /* Insert a new node mid-list */
            if (prevBound === null) {
                lmtNode.firstBound = e;
            }
            else {
                prevBound.nextBound = e;
            }
            e.nextBound = currentBound;
            return;
        }
        /* Head further down the list */
        if (currentBound.nextBound === null) {
            currentBound.nextBound = e;
            return;
        }
        else {
            prevBound = currentBound;
            currentBound = currentBound.nextBound;
        }
    }
}
function contourPass(edgeTable, lmtTable, vertexCount, eIndex, type, op, fwd) {
    const next = fwd ? NEXT_INDEX : PREV_INDEX;
    for (let min = 0; min < vertexCount; min++) {
        /* If a forward local minimum... */
        if (fwd ? edgeTable.FWD_MIN(min) : edgeTable.REV_MIN(min)) {
            /* Search for the next local maximum... */
            let edgeCount = 1;
            let max = next(min, vertexCount);
            while (fwd ? edgeTable.NOT_FMAX(max) : edgeTable.NOT_RMAX(max)) {
                edgeCount++;
                max = next(max, vertexCount);
            }
            /* Build the next edge list */
            let v = min;
            const e = edgeTable.getNode(eIndex);
            e.bstate.below = BundleState.UNBUNDLED;
            e.bundle.below[CLIP] = 0;
            e.bundle.below[SUBJ] = 0;
            for (let i = 0; i < edgeCount; i++) {
                const ei = edgeTable.getNode(eIndex + i);
                let ev = edgeTable.getNode(v);
                ei.xb = ev.vertex.x;
                ei.bot.x = ev.vertex.x;
                ei.bot.y = ev.vertex.y;
                v = next(v, vertexCount);
                ev = edgeTable.getNode(v);
                ei.top.x = ev.vertex.x;
                ei.top.y = ev.vertex.y;
                ei.dx = (ev.vertex.x - ei.bot.x) / (ei.top.y - ei.bot.y);
                ei.type = type;
                ei.outp.above = null;
                ei.outp.below = null;
                ei.next = null;
                ei.prev = null;
                ei.succ = ((edgeCount > 1) && (i < (edgeCount - 1))) ? edgeTable.getNode(eIndex + i + 1) : null;
                ei.pred = ((edgeCount > 1) && (i > 0)) ? edgeTable.getNode(eIndex + i - 1) : null;
                ei.nextBound = null;
                ei.bside.clip = (op === OperationType.DIF) ? RIGHT : LEFT;
                ei.bside.subj = LEFT;
            }
            insertBound(boundList(lmtTable, edgeTable.getNode(min).vertex.y), e);
            eIndex += edgeCount;
        }
    }
    return eIndex;
}
function buildLmt(lmtTable, sbte, p, type, // poly type SUBJ/CLIP
op) {
    /* Create the entire input polygon edge table in one go */
    for (const ip of p.getInnerPolies()) {
        if (!ip[isContributing](0)) {
            /* Ignore the non-contributing contour */
            ip[setContributing](0, true);
        }
        else {
            /* Perform contour optimisation */
            let vertexCount = 0;
            const edgeTable = new EdgeTable();
            const pointLen = ip.getNumPoints();
            for (let i = 0; i < pointLen; i++) {
                if (OPTIMAL(ip, i)) {
                    const { x, y } = ip.get(i);
                    edgeTable.addNode(x, y);
                    /* Record vertex in the scanbeam table */
                    sbte.addToSBTree(y);
                    vertexCount++;
                }
            }
            /* Do the contour forward pass */
            const eIndex = contourPass(edgeTable, lmtTable, vertexCount, 0, type, op, true);
            /* Do the contour reverse pass */
            contourPass(edgeTable, lmtTable, vertexCount, eIndex, type, op, false);
        }
    }
}
function addSTEdge(st, it, edge, dy) {
    if (st === null) {
        /* Append edge onto the tail end of the ST */
        return new StNode(edge, null);
    }
    const den = (st.xt - st.xb) - (edge.xt - edge.xb);
    /* If new edge and ST edge don't cross */
    if ((edge.xt >= st.xt) || (edge.dx === st.dx) || (Math.abs(den) <= EPSILON)) {
        /* No intersection - insert edge here (before the ST edge) */
        return new StNode(edge, st);
    }
    /* Compute intersection between new edge and ST edge */
    const r = (edge.xb - st.xb) / den;
    const x = st.xb + r * (st.xt - st.xb);
    const y = r * dy;
    /* Insert the edge pointers and the intersection point in the IT */
    it.top = addIntersection(it.top, st.edge, edge, x, y);
    /* Head further into the ST */
    st.prev = addSTEdge(st.prev, it, edge, dy);
    return st;
}
function addIntersection(itNode, edge0, edge1, x, y) {
    if (itNode === null || itNode.point.y > y) {
        /* Append a new node to the tail (itNode === null) or mid-list */
        return new ItNode(edge0, edge1, x, y, itNode);
    }
    /* Head further down the list */
    itNode.next = addIntersection(itNode.next, edge0, edge1, x, y);
    return itNode;
}
var BundleState;
(function (BundleState) {
    BundleState[BundleState["UNBUNDLED"] = 0] = "UNBUNDLED";
    BundleState[BundleState["BUNDLE_HEAD"] = 1] = "BUNDLE_HEAD";
    BundleState[BundleState["BUNDLE_TAIL"] = 2] = "BUNDLE_TAIL";
})(BundleState || (BundleState = {}));
class EdgeNode {
    constructor(x, y) {
        this.bot = new Vertex(NaN, NaN); /* Edge lower (x, y) coordinate      */
        this.top = new Vertex(NaN, NaN); /* Edge upper (x, y) coordinate      */
        this.xb = NaN; /* Scanbeam bottom x coordinate      */
        this.xt = NaN; /* Scanbeam top x coordinate         */
        this.dx = NaN; /* Change in x for a unit y increase */
        this.type = 0; /* Clip / subject edge flag          */
        this.prev = null; /* Previous edge in the AET          */
        this.next = null; /* Next edge in the AET              */
        this.pred = null; /* Edge connected at the lower end   */
        this.succ = null; /* Edge connected at the upper end   */
        this.nextBound = null; /* Pointer to next bound in LMT      */
        this.vertex = new Vertex(x, y);
        this.bside = { clip: 0, subj: 0 };
        this.bundle = { above: [0, 0], below: [0, 0] };
        this.bstate = { above: null, below: null };
        this.outp = { above: null, below: null };
    }
}
class AetTree {
    constructor() {
        this.top = null;
    }
    addEdge(edge) {
        if (this.top === null) {
            /* Append edge onto the tail end of the AET */
            this.top = edge;
            edge.prev = null;
            edge.next = null;
            return;
        }
        let prevEdge = null;
        let currentEdge = this.top;
        while (true) {
            /* Do primary sort on the xb field, and secondary sort on the dx field. */
            if (edge.xb < currentEdge.xb || (edge.xb === currentEdge.xb && edge.dx < currentEdge.dx)) {
                /* Insert edge here (before the AET edge) */
                edge.prev = prevEdge;
                edge.next = currentEdge;
                currentEdge.prev = edge;
                if (prevEdge === null) {
                    this.top = edge;
                }
                else {
                    prevEdge.next = edge;
                }
                return;
            }
            /* Head further into the AET */
            prevEdge = currentEdge;
            if (currentEdge.next === null) {
                currentEdge.next = edge;
                edge.prev = currentEdge;
                edge.next = null;
                return;
            }
            else {
                currentEdge = currentEdge.next;
            }
        }
    }
}
class EdgeTable {
    constructor() {
        this.nodeList = [];
    }
    addNode(x, y) {
        this.nodeList.push(new EdgeNode(x, y));
    }
    getNode(index) {
        return this.nodeList[index];
    }
    FWD_MIN(i) {
        const nodeList = this.nodeList;
        const prev = nodeList[PREV_INDEX(i, nodeList.length)];
        const next = nodeList[NEXT_INDEX(i, nodeList.length)];
        const ith = nodeList[i];
        return ((prev.vertex.y >= ith.vertex.y) &&
            (next.vertex.y > ith.vertex.y));
    }
    NOT_FMAX(i) {
        const nodeList = this.nodeList;
        const next = nodeList[NEXT_INDEX(i, nodeList.length)];
        const ith = nodeList[i];
        return next.vertex.y > ith.vertex.y;
    }
    REV_MIN(i) {
        const nodeList = this.nodeList;
        const prev = nodeList[PREV_INDEX(i, nodeList.length)];
        const next = nodeList[NEXT_INDEX(i, nodeList.length)];
        const ith = nodeList[i];
        return ((prev.vertex.y > ith.vertex.y) && (next.vertex.y >= ith.vertex.y));
    }
    NOT_RMAX(i) {
        const nodeList = this.nodeList;
        const prev = nodeList[PREV_INDEX(i, nodeList.length)];
        const ith = nodeList[i];
        return prev.vertex.y > ith.vertex.y;
    }
}
var HState;
(function (HState) {
    HState.NH = 0; /* No horizontal edge                */
    HState.BH = 1; /* Bottom horizontal edge            */
    HState.TH = 2; /* Top horizontal edge               */
    /* Horizontal edge state transitions within scanbeam boundary */
    HState.nextState = [
        /*        ABOVE     BELOW     CROSS */
        /*        L   R     L   R     L   R */
        /* NH */ [HState.BH, HState.TH, HState.TH, HState.BH, HState.NH, HState.NH],
        /* BH */ [HState.NH, HState.NH, HState.NH, HState.NH, HState.TH, HState.TH],
        /* TH */ [HState.NH, HState.NH, HState.NH, HState.NH, HState.BH, HState.BH],
    ];
})(HState || (HState = {}));
class ItNode {
    constructor(edge0, edge1, x, y, next) {
        this.ie = [edge0, edge1];
        this.point = new Vertex(x, y);
        this.next = next;
    }
}
class ItNodeTable {
    constructor() {
        this.top = null;
    }
    buildIntersectionTable(aet, dy) {
        let st = null;
        /* Process each AET edge */
        for (let edge = aet.top; edge !== null; edge = edge.next) {
            if ((edge.bstate.above === BundleState.BUNDLE_HEAD) ||
                (edge.bundle.above[CLIP] !== 0) ||
                (edge.bundle.above[SUBJ] !== 0)) {
                st = addSTEdge(st, this, edge, dy);
            }
        }
    }
}
class LmtNode {
    constructor(y, /* Y coordinate at local minimum     */ next = null) {
        this.y = y;
        this.next = next;
        this.firstBound = null; /* Pointer to bound list             */
    }
}
class LmtTable {
    constructor() {
        this.top = null;
    }
}
class VertexNode extends Vertex {
    constructor(x, y, next = null) {
        super(x, y);
        this.next = next;
    }
}
var VertexType;
(function (VertexType) {
    VertexType[VertexType["NUL"] = 0] = "NUL";
    VertexType[VertexType["EMX"] = 1] = "EMX";
    VertexType[VertexType["ELI"] = 2] = "ELI";
    VertexType[VertexType["TED"] = 3] = "TED";
    VertexType[VertexType["ERI"] = 4] = "ERI";
    VertexType[VertexType["RED"] = 5] = "RED";
    VertexType[VertexType["IMM"] = 6] = "IMM";
    VertexType[VertexType["IMN"] = 7] = "IMN";
    VertexType[VertexType["EMN"] = 8] = "EMN";
    VertexType[VertexType["EMM"] = 9] = "EMM";
    VertexType[VertexType["LED"] = 10] = "LED";
    VertexType[VertexType["ILI"] = 11] = "ILI";
    VertexType[VertexType["BED"] = 12] = "BED";
    VertexType[VertexType["IRI"] = 13] = "IRI";
    VertexType[VertexType["IMX"] = 14] = "IMX";
    VertexType[VertexType["FUL"] = 15] = "FUL";
})(VertexType || (VertexType = {}));
function getVertexType(tr, tl, br, bl) {
    return tr + (tl << 1) + (br << 2) + (bl << 3);
}
class PolygonNode {
    constructor(next, x, y) {
        this.active = true; /* Active flag / vertex count        */
        this.hole = false; /* Hole / external contour flag      */
        const vn = new VertexNode(x, y);
        this.left = vn;
        this.right = vn;
        this.next = next;
        this.proxy = this;
    }
    addRight(x, y) {
        const nv = new VertexNode(x, y);
        /* Add vertex nv to the right end of the polygon's vertex list */
        this.proxy.right.next = nv;
        this.proxy.right = nv;
    }
    addLeft(x, y) {
        /* Add vertex nv to the left end of the polygon's vertex list */
        this.proxy.left = new VertexNode(x, y, this.proxy.left);
    }
}
class Rectangle {
    constructor(minx, miny, maxx, maxy) {
        this.minx = minx;
        this.miny = miny;
        this.maxx = maxx;
        this.maxy = maxy;
    }
}
class ScanBeamTree {
    constructor(y) {
        this.y = y;
        this.less = null; /* Pointer to nodes with lower y     */
        this.more = null; /* Pointer to nodes with higher y    */
    } /* Scanbeam node y value             */
}
class ScanBeamTreeEntries {
    constructor() {
        this.sbtEntries = 0;
        this.sbTree = null;
    }
    addToSBTree(y) {
        if (this.sbTree === null) {
            /* Add a new tree node here */
            this.sbTree = new ScanBeamTree(y);
            this.sbtEntries++;
            return;
        }
        let treeNode = this.sbTree;
        while (treeNode.y !== y) {
            const dir = treeNode.y > y ? "less" : "more";
            const child = treeNode[dir];
            if (child === null) {
                treeNode[dir] = new ScanBeamTree(y);
                this.sbtEntries++;
                return;
            }
            else {
                treeNode = child;
            }
        }
    }
    buildSBT() {
        if (this.sbTree === null)
            return [];
        const sbt = [];
        (function inner(entries, table, sbtNode) {
            if (sbtNode.less !== null) {
                entries = inner(entries, table, sbtNode.less);
            }
            table[entries] = sbtNode.y;
            entries++;
            if (sbtNode.more !== null) {
                entries = inner(entries, table, sbtNode.more);
            }
            return entries;
        })(0, sbt, this.sbTree);
        return sbt;
    }
}
class StNode {
    constructor(edge, prev) {
        this.edge = edge;
        this.xb = edge.xb;
        this.xt = edge.xt;
        this.dx = edge.dx;
        this.prev = prev;
    }
}
class TopPolygonNode {
    constructor() {
        this.top = null;
    }
    addLocalMin(x, y) {
        const n = new PolygonNode(this.top, x, y);
        this.top = n;
        return n;
    }
    mergeLeft(p, q) {
        /* Label contour as a hole */
        q.proxy.hole = true;
        if (p.proxy !== q.proxy) {
            /* Assign p's vertex list to the left end of q's list */
            p.proxy.right.next = q.proxy.left;
            q.proxy.left = p.proxy.left;
            /* Redirect any p.proxy references to q.proxy */
            const target = p.proxy;
            for (let node = this.top; node !== null; node = node.next) {
                if (node.proxy === target) {
                    node.active = false;
                    node.proxy = q.proxy;
                }
            }
        }
    }
    mergeRight(p, q) {
        /* Label contour as external */
        q.proxy.hole = false;
        if (p.proxy !== q.proxy) {
            /* Assign p's vertex list to the right end of q's list */
            q.proxy.right.next = p.proxy.left;
            q.proxy.right = p.proxy.right;
            /* Redirect any p->proxy references to q->proxy */
            const target = p.proxy;
            for (let node = this.top; node !== null; node = node.next) {
                if (node.proxy === target) {
                    node.active = false;
                    node.proxy = q.proxy;
                }
            }
        }
    }
    getContours() {
        const contours = [];
        outer: for (let polygon = this.top; polygon !== null; polygon = polygon.next) {
            if (!polygon.active) {
                continue;
            }
            /* Count the vertices in the current contour */
            let nv = 0;
            for (let vtx = polygon.proxy.left; vtx !== null; vtx = vtx.next) {
                if ((++nv) > 2) {
                    contours.push(polygon);
                    continue outer;
                }
            }
            polygon.active = false;
        }
        return contours;
    }
    getResult() {
        const contours = this.getContours();
        if (contours.length === 0) {
            return new SimplePolygon([]);
        }
        const innerPolies = contours.map((polyNode) => {
            const vertices = [];
            for (let vtx = polyNode.proxy.left; vtx !== null; vtx = vtx.next) {
                vertices.push(vtx);
            }
            const simple = new SimplePolygon(vertices);
            return polyNode.proxy.hole ? new MultiPolygon([simple], true) : simple;
        });
        return (innerPolies.length === 1) ? innerPolies[0] : new MultiPolygon(innerPolies);
    }
}
class Polygon {
    static n_ary(op, ...polys) {
        return polys.reduce((acc, p) => clip(op, acc, p));
    }
    static intersection(...p) {
        return Polygon.n_ary(OperationType.INT, ...p);
    }
    intersection(...p) {
        return Polygon.intersection(this, ...p);
    }
    static union(...p) {
        return Polygon.n_ary(OperationType.ADD, ...p);
    }
    union(...p) {
        return Polygon.union(this, ...p);
    }
    static xor(...p) {
        return Polygon.n_ary(OperationType.XOR, ...p);
    }
    xor(...p) {
        return Polygon.xor(this, ...p);
    }
    static difference(first, ...p) {
        switch (p.length) {
            case 0: return first;
            case 1: return clip(OperationType.DIF, first, p[0]);
            default: {
                const clipper = p.reduce((acc, n) => clip(OperationType.ADD, acc, n));
                return clip(OperationType.DIF, first, clipper);
            }
        }
    }
    difference(...p) {
        return Polygon.difference(this, ...p);
    }
    static fromPoints(points) {
        return new SimplePolygon(points.map((p) => Array.isArray(p) ? { x: p[0] || 0, y: p[1] || 0 } : p));
    }
    static fromVertices({ bounds, holes }) {
        return Polygon.n_ary(OperationType.ADD, ...bounds.map(Polygon.fromPoints))
            .difference(...holes.map(Polygon.fromPoints));
    }
}
// MultiPolygon provides support for complex (with multiple disjoint cycles) and simple polygons and holes.
class MultiPolygon extends Polygon {
    constructor(polyList, _isHole = false) {
        super();
        this.polyList = polyList;
        this._isHole = _isHole;
        this._bounds = null;
        if (_isHole && polyList.length > 1) {
            throw new Error("Complex polygons cannot be holes.");
        }
    }
    equals(that) {
        return (that instanceof MultiPolygon) &&
            this._isHole === that._isHole &&
            this.polyList.every((p, i) => p.equals(that.polyList[i]));
    }
    get isHole() {
        return this._isHole;
    }
    get isEmpty() {
        return this.polyList.length === 0;
    }
    get bounds() {
        if (this._bounds === null) {
            const { polyList } = this;
            if (polyList.length === 0) {
                this._bounds = new Rectangle(NaN, NaN, NaN, NaN);
            }
            else if (polyList.length === 1) {
                this._bounds = this.polyList[0].bounds;
            }
            else {
                let xmin = Number.MAX_VALUE;
                let ymin = Number.MAX_VALUE;
                let xmax = -Number.MAX_VALUE;
                let ymax = -Number.MAX_VALUE;
                for (const p of this.polyList) {
                    const { maxx, maxy, minx, miny } = p.bounds;
                    if (minx < xmin) {
                        xmin = minx;
                    }
                    if (maxx > xmax) {
                        xmax = maxx;
                    }
                    if (miny < ymin) {
                        ymin = miny;
                    }
                    if (maxy > ymax) {
                        ymax = maxy;
                    }
                }
                this._bounds = new Rectangle(xmin, ymin, xmax, ymax);
            }
        }
        return this._bounds;
    }
    getInnerPolies() {
        return this.polyList;
    }
    getNumPoints() {
        return this.polyList[0].getNumPoints();
    }
    get(index) {
        return this.polyList[0].get(index);
    }
    [isContributing](polyIndex) {
        return this.polyList[polyIndex][isContributing](0);
    }
    [setContributing](polyIndex, contributes) {
        this.polyList[polyIndex][setContributing](0, contributes);
    }
    toVertices() {
        if (this._isHole) {
            const { bounds } = this.polyList[0].toVertices();
            return { bounds: [], holes: bounds };
        }
        else {
            const bounds = [];
            const holes = [];
            for (const poly of this.polyList) {
                const { bounds: nb, holes: nh } = poly.toVertices();
                bounds.push(...nb);
                holes.push(...nh);
            }
            return { bounds, holes };
        }
    }
}
function cyclicEqual(u, v) {
    const n = u.length;
    if (n === v.length) {
        let i = 0;
        do {
            let k = 1;
            while (k <= n && u[(i + k) % n].equals(v[k % n])) {
                k++;
            }
            if (k > n) {
                return true;
            }
            i += k;
        } while (i < n);
    }
    return false;
}
// A simple polygon, with only one inner polygon--itself. Cannot be used to represent a hole.
class SimplePolygon extends Polygon {
    constructor(points) {
        super();
        /** Flag used by the Clip algorithm */
        this.contributes = true;
        this._bounds = null;
        this.pointList = points.map(({ x, y }) => new Vertex(x, y));
    }
    equals(that) {
        if (!(that instanceof SimplePolygon)) {
            return false;
        }
        if (cyclicEqual(this.pointList, that.pointList)) {
            return true;
        }
        const reversed = [];
        for (let i = this.pointList.length - 1; i >= 0; i--) {
            reversed.push(this.pointList[i]);
        }
        return cyclicEqual(reversed, that.pointList);
    }
    // Always returns false since SimplePolygons cannot be holes.
    get isHole() {
        return false;
    }
    get isEmpty() {
        return this.pointList.length === 0;
    }
    get bounds() {
        if (this._bounds === null) {
            let xmin = Number.MAX_VALUE;
            let ymin = Number.MAX_VALUE;
            let xmax = -Number.MAX_VALUE;
            let ymax = -Number.MAX_VALUE;
            for (const { x, y } of this.pointList) {
                if (x < xmin) {
                    xmin = x;
                }
                if (x > xmax) {
                    xmax = x;
                }
                if (y < ymin) {
                    ymin = y;
                }
                if (y > ymax) {
                    ymax = y;
                }
            }
            this._bounds = new Rectangle(xmin, ymin, xmax, ymax);
        }
        return this._bounds;
    }
    getInnerPolies() {
        return [this];
    }
    getNumPoints() {
        return this.pointList.length;
    }
    get(index) {
        return this.pointList[index];
    }
    [isContributing](polyIndex) {
        if (polyIndex !== 0) {
            throw new Error("PolySimple only has one poly");
        }
        return this.contributes;
    }
    [setContributing](polyIndex, contributes) {
        if (polyIndex !== 0) {
            throw new Error("PolySimple only has one poly");
        }
        this.contributes = contributes;
    }
    toVertices() {
        return { bounds: [this.pointList], holes: [] };
    }
}
// export {  clip, Polygon, SimplePolygon };
/* harmony default export */ __webpack_exports__["default"] = (Polygon);


/***/ }),

/***/ "./src/plugins/navmesh/src/channel.ts":
/*!********************************************!*\
  !*** ./src/plugins/navmesh/src/channel.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Channel; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/plugins/navmesh/src/utils.ts");
// Mostly sourced from PatrolJS at the moment. TODO: come back and reimplement this as an incomplete
// funnel algorithm so astar checks can be more accurate.

/**
 * @private
 */
class Channel {
    constructor() {
        this.portals = [];
        this.path = [];
    }
    push(p1, p2) {
        if (p2 === undefined)
            p2 = p1;
        this.portals.push({
            left: p1,
            right: p2,
        });
    }
    stringPull() {
        const portals = this.portals;
        const pts = [];
        // Init scan state
        let apexIndex = 0;
        let leftIndex = 0;
        let rightIndex = 0;
        let portalApex = portals[0].left;
        let portalLeft = portals[0].left;
        let portalRight = portals[0].right;
        // Add start point.
        pts.push(portalApex);
        for (var i = 1; i < portals.length; i++) {
            // Find the next portal vertices
            const left = portals[i].left;
            const right = portals[i].right;
            // Update right vertex.
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["triarea2"])(portalApex, portalRight, right) <= 0.0) {
                if (portalApex.equals(portalRight) || Object(_utils__WEBPACK_IMPORTED_MODULE_0__["triarea2"])(portalApex, portalLeft, right) > 0.0) {
                    // Tighten the funnel.
                    portalRight = right;
                    rightIndex = i;
                }
                else {
                    // Right vertex just crossed over the left vertex, so the left vertex should
                    // now be part of the path.
                    pts.push(portalLeft);
                    // Restart scan from portal left point.
                    // Make current left the new apex.
                    portalApex = portalLeft;
                    apexIndex = leftIndex;
                    // Reset portal
                    portalLeft = portalApex;
                    portalRight = portalApex;
                    leftIndex = apexIndex;
                    rightIndex = apexIndex;
                    // Restart scan
                    i = apexIndex;
                    continue;
                }
            }
            // Update left vertex.
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["triarea2"])(portalApex, portalLeft, left) >= 0.0) {
                if (portalApex.equals(portalLeft) || Object(_utils__WEBPACK_IMPORTED_MODULE_0__["triarea2"])(portalApex, portalRight, left) < 0.0) {
                    // Tighten the funnel.
                    portalLeft = left;
                    leftIndex = i;
                }
                else {
                    // Left vertex just crossed over the right vertex, so the right vertex should
                    // now be part of the path
                    pts.push(portalRight);
                    // Restart scan from portal right point.
                    // Make current right the new apex.
                    portalApex = portalRight;
                    apexIndex = rightIndex;
                    // Reset portal
                    portalLeft = portalApex;
                    portalRight = portalApex;
                    leftIndex = apexIndex;
                    rightIndex = apexIndex;
                    // Restart scan
                    i = apexIndex;
                    continue;
                }
            }
        }
        if (pts.length === 0 || !pts[pts.length - 1].equals(portals[portals.length - 1].left)) {
            // Append last point to path.
            pts.push(portals[portals.length - 1].left);
        }
        this.path = pts;
        return pts;
    }
}


/***/ }),

/***/ "./src/plugins/navmesh/src/math/line.ts":
/*!**********************************************!*\
  !*** ./src/plugins/navmesh/src/math/line.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Line; });
/* harmony import */ var _vector_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector-2 */ "./src/plugins/navmesh/src/math/vector-2.ts");

/**
 * Stripped down version of Phaser's Line with just the functionality needed for navmeshes.
 *
 * @export
 * @class Line
 */
class Line {
    constructor(x1, y1, x2, y2) {
        this.start = new _vector_2__WEBPACK_IMPORTED_MODULE_0__["default"](x1, y1);
        this.end = new _vector_2__WEBPACK_IMPORTED_MODULE_0__["default"](x2, y2);
        this.left = Math.min(x1, x2);
        this.right = Math.max(x1, x2);
        this.top = Math.min(y1, y2);
        this.bottom = Math.max(y1, y2);
    }
    pointOnSegment(x, y) {
        return (x >= this.left &&
            x <= this.right &&
            y >= this.top &&
            y <= this.bottom &&
            this.pointOnLine(x, y));
    }
    pointOnLine(x, y) {
        // Compare slope of line start -> xy to line start -> line end
        return (x - this.left) * (this.bottom - this.top) === (this.right - this.left) * (y - this.top);
    }
}


/***/ }),

/***/ "./src/plugins/navmesh/src/math/polygon.ts":
/*!*************************************************!*\
  !*** ./src/plugins/navmesh/src/math/polygon.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polygon; });
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line */ "./src/plugins/navmesh/src/math/line.ts");

/**
 * Stripped down version of Phaser's Polygon with just the functionality needed for navmeshes.
 *
 * @export
 * @class Polygon
 */
class Polygon {
    constructor(points, closed = true) {
        this.isClosed = closed;
        this.points = points;
        this.edges = [];
        for (let i = 1; i < points.length; i++) {
            const p1 = points[i - 1];
            const p2 = points[i];
            this.edges.push(new _line__WEBPACK_IMPORTED_MODULE_0__["default"](p1.x, p1.y, p2.x, p2.y));
        }
        if (this.isClosed) {
            const first = points[0];
            const last = points[points.length - 1];
            this.edges.push(new _line__WEBPACK_IMPORTED_MODULE_0__["default"](first.x, first.y, last.x, last.y));
        }
    }
    contains(x, y) {
        let inside = false;
        for (let i = -1, j = this.points.length - 1; ++i < this.points.length; j = i) {
            const ix = this.points[i].x;
            const iy = this.points[i].y;
            const jx = this.points[j].x;
            const jy = this.points[j].y;
            if (((iy <= y && y < jy) || (jy <= y && y < iy)) &&
                x < ((jx - ix) * (y - iy)) / (jy - iy) + ix) {
                inside = !inside;
            }
        }
        return inside;
    }
}


/***/ }),

/***/ "./src/plugins/navmesh/src/math/vector-2.ts":
/*!**************************************************!*\
  !*** ./src/plugins/navmesh/src/math/vector-2.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector2; });
/**
 * Stripped down version of Phaser's Vector2 with just the functionality needed for navmeshes.
 *
 * @export
 * @class Vector2
 */
class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    equals(v) {
        return this.x === v.x && this.y === v.y;
    }
    angle(v) {
        return Math.atan2(v.y - this.y, v.x - this.x);
    }
    distance(v) {
        const dx = v.x - this.x;
        const dy = v.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    add(v) {
        this.x += v.x;
        this.y += v.y;
    }
    subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
}


/***/ }),

/***/ "./src/plugins/navmesh/src/navgraph.ts":
/*!*********************************************!*\
  !*** ./src/plugins/navmesh/src/navgraph.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var javascript_astar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! javascript-astar */ "./node_modules/javascript-astar/astar.js");
/* harmony import */ var javascript_astar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_astar__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Graph for javascript-astar. It implements the functionality for astar. See GPS test from astar
 * repo for structure: https://github.com/bgrins/javascript-astar/blob/master/test/tests.js
 *
 * @class NavGraph
 * @private
 */
class NavGraph {
    constructor(navPolygons) {
        this.grid = [];
        this.init = javascript_astar__WEBPACK_IMPORTED_MODULE_0___default.a.Graph.prototype.init.bind(this);
        this.cleanDirty = javascript_astar__WEBPACK_IMPORTED_MODULE_0___default.a.Graph.prototype.cleanDirty.bind(this);
        this.markDirty = javascript_astar__WEBPACK_IMPORTED_MODULE_0___default.a.Graph.prototype.markDirty.bind(this);
        this.toString = javascript_astar__WEBPACK_IMPORTED_MODULE_0___default.a.Graph.prototype.toString.bind(this);
        this.nodes = navPolygons;
        this.init();
    }
    neighbors(navPolygon) {
        return navPolygon.neighbors;
    }
    navHeuristic(navPolygon1, navPolygon2) {
        return navPolygon1.centroidDistance(navPolygon2);
    }
    destroy() {
        this.cleanDirty();
        this.nodes = [];
    }
}
/* harmony default export */ __webpack_exports__["default"] = (NavGraph);


/***/ }),

/***/ "./src/plugins/navmesh/src/navmesh.ts":
/*!********************************************!*\
  !*** ./src/plugins/navmesh/src/navmesh.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavMesh; });
/* harmony import */ var javascript_astar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! javascript-astar */ "./node_modules/javascript-astar/astar.js");
/* harmony import */ var javascript_astar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_astar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navpoly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navpoly */ "./src/plugins/navmesh/src/navpoly.ts");
/* harmony import */ var _navgraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navgraph */ "./src/plugins/navmesh/src/navgraph.ts");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./channel */ "./src/plugins/navmesh/src/channel.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/plugins/navmesh/src/utils.ts");
/* harmony import */ var _math_vector_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math/vector-2 */ "./src/plugins/navmesh/src/math/vector-2.ts");
/* harmony import */ var _math_line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./math/line */ "./src/plugins/navmesh/src/math/line.ts");
/* harmony import */ var _math_polygon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./math/polygon */ "./src/plugins/navmesh/src/math/polygon.ts");








/**
 * The `NavMesh` class is the workhorse that represents a navigation mesh built from a series of
 * polygons. Once built, the mesh can be asked for a path from one point to another point. Some
 * internal terminology usage:
 * - neighbor: a polygon that shares part of an edge with another polygon
 * - portal: when two neighbor's have edges that overlap, the portal is the overlapping line segment
 * - channel: the path of polygons from starting point to end point
 * - pull the string: run the funnel algorithm on the channel so that the path hugs the edges of the
 *   channel. Equivalent to having a string snaking through a hallway and then pulling it taut.
 */
class NavMesh {
    /**
     * @param meshPolygonPoints Array where each element is an array of point-like objects that
     * defines a polygon.
     * @param meshShrinkAmount The amount (in pixels) that the navmesh has been shrunk around
     * obstacles (a.k.a the amount obstacles have been expanded).
     */
    constructor(meshPolygonPoints, meshShrinkAmount = 0) {
        this.meshShrinkAmount = meshShrinkAmount;
        // Convert the PolyPoints[] into NavPoly instances.
        const newPolys = meshPolygonPoints.map((polyPoints) => {
            const vectors = polyPoints.map((p) => new _math_vector_2__WEBPACK_IMPORTED_MODULE_5__["default"](p.x, p.y));
            return new _math_polygon__WEBPACK_IMPORTED_MODULE_7__["default"](vectors);
        });
        this.navPolygons = newPolys.map((polygon, i) => new _navpoly__WEBPACK_IMPORTED_MODULE_1__["default"](i, polygon));
        this.calculateNeighbors();
        // Astar graph of connections between polygons
        this.graph = new _navgraph__WEBPACK_IMPORTED_MODULE_2__["default"](this.navPolygons);
    }
    /**
     * Get the NavPolys that are in this navmesh.
     */
    getPolygons() {
        return this.navPolygons;
    }
    /**
     * Cleanup method to remove references.
     */
    destroy() {
        this.graph.destroy();
        for (const poly of this.navPolygons) {
            poly.destroy();
        }
        this.navPolygons = [];
    }
    /**
     * Find if the given point is within any of the polygons in the mesh.
     * @param point
     */
    isPointInMesh(point) {
        return this.navPolygons.some((navPoly) => navPoly.contains(point));
    }
    /**
     * Find the closest point in the mesh to the given point. If the point is already in the mesh,
     * this will give you that point. If the point is outside of the mesh, this will attempt to
     * project this point into the mesh (up to the given maxAllowableDist). This returns an object
     * with:
     * - distance - from the given point to the mesh
     * - polygon - the one the point is closest to, or null
     * - point - the point inside the mesh, or null
     * @param point
     * @param maxAllowableDist
     */
    findClosestMeshPoint(point, maxAllowableDist = Number.POSITIVE_INFINITY) {
        let minDistance = maxAllowableDist;
        let closestPoly = null;
        let pointOnClosestPoly = null;
        for (const navPoly of this.navPolygons) {
            // If we are inside a poly, we've got the closest.
            if (navPoly.contains(point)) {
                minDistance = 0;
                closestPoly = navPoly;
                pointOnClosestPoly = point;
                break;
            }
            // Is the poly close enough to warrant a more accurate check? Point is definitely outside of
            // the polygon. Distance - Radius is the smallest possible distance to an edge of the poly.
            // This will underestimate distance, but that's perfectly fine.
            const r = navPoly.boundingRadius;
            const d = navPoly.centroid.distance(point);
            if (d - r < minDistance) {
                const result = this.projectPointToPolygon(point, navPoly);
                if (result.distance < minDistance) {
                    minDistance = result.distance;
                    closestPoly = navPoly;
                    pointOnClosestPoly = result.point;
                }
            }
        }
        return { distance: minDistance, polygon: closestPoly, point: pointOnClosestPoly };
    }
    /**
     * Find a path from the start point to the end point using this nav mesh.
     * @param {object} startPoint A point-like object in the form {x, y}
     * @param {object} endPoint A point-like object in the form {x, y}
     * @returns {Vector2[]|null} An array of points if a path is found, or null if no path
     */
    findPath(startPoint, endPoint) {
        let startPoly = null;
        let endPoly = null;
        let startDistance = Number.MAX_VALUE;
        let endDistance = Number.MAX_VALUE;
        let d;
        let r;
        const startVector = new _math_vector_2__WEBPACK_IMPORTED_MODULE_5__["default"](startPoint.x, startPoint.y);
        const endVector = new _math_vector_2__WEBPACK_IMPORTED_MODULE_5__["default"](endPoint.x, endPoint.y);
        // Find the closest poly for the starting and ending point
        for (const navPoly of this.navPolygons) {
            r = navPoly.boundingRadius;
            // Start
            d = navPoly.centroid.distance(startVector);
            if (d <= startDistance && d <= r && navPoly.contains(startVector)) {
                startPoly = navPoly;
                startDistance = d;
            }
            // End
            d = navPoly.centroid.distance(endVector);
            if (d <= endDistance && d <= r && navPoly.contains(endVector)) {
                endPoly = navPoly;
                endDistance = d;
            }
        }
        // If the end point wasn't inside a polygon, run a more liberal check that allows a point
        // to be within meshShrinkAmount radius of a polygon
        if (!endPoly && this.meshShrinkAmount > 0) {
            for (const navPoly of this.navPolygons) {
                r = navPoly.boundingRadius + this.meshShrinkAmount;
                d = navPoly.centroid.distance(endVector);
                if (d <= r) {
                    const { distance } = this.projectPointToPolygon(endVector, navPoly);
                    if (distance <= this.meshShrinkAmount && distance < endDistance) {
                        endPoly = navPoly;
                        endDistance = distance;
                    }
                }
            }
        }
        // No matching polygons locations for the end, so no path found
        // because start point is valid normally, check end point first
        if (!endPoly) {
            return null;
        }
        // Same check as above, but for the start point
        if (!startPoly && this.meshShrinkAmount > 0) {
            for (const navPoly of this.navPolygons) {
                // Check if point is within bounding circle to avoid extra projection calculations
                r = navPoly.boundingRadius + this.meshShrinkAmount;
                d = navPoly.centroid.distance(startVector);
                if (d <= r) {
                    // Check if projected point is within range of a polgyon and is closer than the
                    // previous point
                    const { distance } = this.projectPointToPolygon(startVector, navPoly);
                    if (distance <= this.meshShrinkAmount && distance < startDistance) {
                        startPoly = navPoly;
                        startDistance = distance;
                    }
                }
            }
        }
        // No matching polygons locations for the start, so no path found
        if (!startPoly) {
            return null;
        }
        // If the start and end polygons are the same, return a direct path
        if (startPoly === endPoly) {
            return [startVector, endVector];
        }
        // Search!
        const astarPath = javascript_astar__WEBPACK_IMPORTED_MODULE_0__["astar"].search(this.graph, startPoly, endPoly, {
            heuristic: this.graph.navHeuristic,
        });
        // While the start and end polygons may be valid, no path between them
        if (astarPath.length === 0) {
            return null;
        }
        // jsastar drops the first point from the path, but the funnel algorithm needs it
        astarPath.unshift(startPoly);
        // We have a path, so now time for the funnel algorithm
        const channel = new _channel__WEBPACK_IMPORTED_MODULE_3__["default"]();
        channel.push(startVector);
        for (let i = 0; i < astarPath.length - 1; i++) {
            const navPolygon = astarPath[i];
            const nextNavPolygon = astarPath[i + 1];
            // Find the portal
            let portal = null;
            for (let j = 0; j < navPolygon.neighbors.length; j++) {
                if (navPolygon.neighbors[j].id === nextNavPolygon.id) {
                    portal = navPolygon.portals[j];
                }
            }
            if (!portal) {
                throw new Error('Path was supposed to be found, but portal is missing!');
            }
            // Push the portal vertices into the channel
            channel.push(portal.start, portal.end);
        }
        channel.push(endVector);
        // Pull a string along the channel to run the funnel
        channel.stringPull();
        // Clone path, excluding duplicates
        let lastPoint = null;
        const phaserPath = [];
        for (const p of channel.path) {
            const newPoint = p.clone();
            if (!lastPoint || !newPoint.equals(lastPoint)) {
                phaserPath.push(newPoint);
            }
            lastPoint = newPoint;
        }
        return phaserPath;
    }
    calculateNeighbors() {
        // Fill out the neighbor information for each navpoly
        for (let i = 0; i < this.navPolygons.length; i++) {
            const navPoly = this.navPolygons[i];
            for (let j = i + 1; j < this.navPolygons.length; j++) {
                const otherNavPoly = this.navPolygons[j];
                // Check if the other navpoly is within range to touch
                const d = navPoly.centroid.distance(otherNavPoly.centroid);
                if (d > navPoly.boundingRadius + otherNavPoly.boundingRadius) {
                    continue;
                }
                // The are in range, so check each edge pairing
                for (const edge of navPoly.edges) {
                    for (const otherEdge of otherNavPoly.edges) {
                        // If edges aren't collinear, not an option for connecting navpolys
                        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_4__["areCollinear"])(edge, otherEdge)) {
                            continue;
                        }
                        // If they are collinear, check if they overlap
                        const overlap = this.getSegmentOverlap(edge, otherEdge);
                        if (!overlap) {
                            continue;
                        }
                        // Connections are symmetric!
                        navPoly.neighbors.push(otherNavPoly);
                        otherNavPoly.neighbors.push(navPoly);
                        // Calculate the portal between the two polygons - this needs to be in
                        // counter-clockwise order, relative to each polygon
                        const [p1, p2] = overlap;
                        let edgeStartAngle = navPoly.centroid.angle(edge.start);
                        let a1 = navPoly.centroid.angle(overlap[0]);
                        let a2 = navPoly.centroid.angle(overlap[1]);
                        let d1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["angleDifference"])(edgeStartAngle, a1);
                        let d2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["angleDifference"])(edgeStartAngle, a2);
                        if (d1 < d2) {
                            navPoly.portals.push(new _math_line__WEBPACK_IMPORTED_MODULE_6__["default"](p1.x, p1.y, p2.x, p2.y));
                        }
                        else {
                            navPoly.portals.push(new _math_line__WEBPACK_IMPORTED_MODULE_6__["default"](p2.x, p2.y, p1.x, p1.y));
                        }
                        edgeStartAngle = otherNavPoly.centroid.angle(otherEdge.start);
                        a1 = otherNavPoly.centroid.angle(overlap[0]);
                        a2 = otherNavPoly.centroid.angle(overlap[1]);
                        d1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["angleDifference"])(edgeStartAngle, a1);
                        d2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["angleDifference"])(edgeStartAngle, a2);
                        if (d1 < d2) {
                            otherNavPoly.portals.push(new _math_line__WEBPACK_IMPORTED_MODULE_6__["default"](p1.x, p1.y, p2.x, p2.y));
                        }
                        else {
                            otherNavPoly.portals.push(new _math_line__WEBPACK_IMPORTED_MODULE_6__["default"](p2.x, p2.y, p1.x, p1.y));
                        }
                        // Two convex polygons shouldn't be connected more than once! (Unless
                        // there are unnecessary vertices...)
                    }
                }
            }
        }
    }
    // Check two collinear line segments to see if they overlap by sorting the points.
    // Algorithm source: http://stackoverflow.com/a/17152247
    getSegmentOverlap(line1, line2) {
        const points = [
            { line: line1, point: line1.start },
            { line: line1, point: line1.end },
            { line: line2, point: line2.start },
            { line: line2, point: line2.end },
        ];
        points.sort((a, b) => {
            if (a.point.x < b.point.x) {
                return -1;
            }
            else if (a.point.x > b.point.x) {
                return 1;
            }
            else {
                if (a.point.y < b.point.y) {
                    return -1;
                }
                else if (a.point.y > b.point.y) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
        });
        // If the first two points in the array come from the same line, no overlap
        const noOverlap = points[0].line === points[1].line;
        // If the two middle points in the array are the same coordinates, then there is a
        // single point of overlap.
        const singlePointOverlap = points[1].point.equals(points[2].point);
        if (noOverlap || singlePointOverlap) {
            return null;
        }
        else {
            return [points[1].point, points[2].point];
        }
    }
    /**
     * Project a point onto a polygon in the shortest distance possible.
     *
     * @param {Phaser.Point} point The point to project
     * @param {NavPoly} navPoly The navigation polygon to test against
     * @returns {{point: Phaser.Point, distance: number}}
     */
    projectPointToPolygon(point, navPoly) {
        let closestProjection = null;
        let closestDistance = Number.MAX_VALUE;
        for (const edge of navPoly.edges) {
            const projectedPoint = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["projectPointToEdge"])(point, edge);
            const d = point.distance(projectedPoint);
            if (closestProjection === null || d < closestDistance) {
                closestDistance = d;
                closestProjection = projectedPoint;
            }
        }
        return { point: closestProjection, distance: closestDistance };
    }
}


/***/ }),

/***/ "./src/plugins/navmesh/src/navpoly.ts":
/*!********************************************!*\
  !*** ./src/plugins/navmesh/src/navpoly.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavPoly; });
/* harmony import */ var _math_vector_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/vector-2 */ "./src/plugins/navmesh/src/math/vector-2.ts");

/**
 * A class that represents a navigable polygon with a navmesh. It is built on top of a
 * {@link Polygon}. It implements the properties and fields that javascript-astar needs - weight,
 * toString, isWall and getCost. See GPS test from astar repo for structure:
 * https://github.com/bgrins/javascript-astar/blob/master/test/tests.js
 */
class NavPoly {
    /**
     * Creates an instance of NavPoly.
     */
    constructor(id, polygon) {
        // jsastar property:
        this.weight = 1;
        this.x = 0;
        this.y = 0;
        this.id = id;
        this.polygon = polygon;
        this.edges = polygon.edges;
        this.neighbors = [];
        this.portals = [];
        this.centroid = this.calculateCentroid();
        this.boundingRadius = this.calculateRadius();
    }
    /**
     * Returns an array of points that form the polygon.
     */
    getPoints() {
        return this.polygon.points;
    }
    /**
     * Check if the given point-like object is within the polygon.
     */
    contains(point) {
        // Phaser's polygon check doesn't handle when a point is on one of the edges of the line. Note:
        // check numerical stability here. It would also be good to optimize this for different shapes.
        return this.polygon.contains(point.x, point.y) || this.isPointOnEdge(point);
    }
    /**
     * Only rectangles are supported, so this calculation works, but this is not actually the centroid
     * calculation for a polygon. This is just the average of the vertices - proper centroid of a
     * polygon factors in the area.
     */
    calculateCentroid() {
        const centroid = new _math_vector_2__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        const length = this.polygon.points.length;
        this.polygon.points.forEach((p) => centroid.add(p));
        centroid.x /= length;
        centroid.y /= length;
        return centroid;
    }
    /**
     * Calculate the radius of a circle that circumscribes the polygon.
     */
    calculateRadius() {
        let boundingRadius = 0;
        for (const point of this.polygon.points) {
            const d = this.centroid.distance(point);
            if (d > boundingRadius)
                boundingRadius = d;
        }
        return boundingRadius;
    }
    /**
     * Check if the given point-like object is on one of the edges of the polygon.
     */
    isPointOnEdge({ x, y }) {
        for (const edge of this.edges) {
            if (edge.pointOnSegment(x, y))
                return true;
        }
        return false;
    }
    destroy() {
        this.neighbors = [];
        this.portals = [];
    }
    // === jsastar methods ===
    toString() {
        return `NavPoly(id: ${this.id} at: ${this.centroid})`;
    }
    isWall() {
        return this.weight === 0;
    }
    centroidDistance(navPolygon) {
        return this.centroid.distance(navPolygon.centroid);
    }
    getCost(navPolygon) {
        return this.centroidDistance(navPolygon);
    }
}


/***/ }),

/***/ "./src/plugins/navmesh/src/utils.ts":
/*!******************************************!*\
  !*** ./src/plugins/navmesh/src/utils.ts ***!
  \******************************************/
/*! exports provided: distanceSquared, projectPointToEdge, triarea2, clamp, almostEqual, angleDifference, areCollinear, isTruthy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceSquared", function() { return distanceSquared; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPointToEdge", function() { return projectPointToEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triarea2", function() { return triarea2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "almostEqual", function() { return almostEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angleDifference", function() { return angleDifference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areCollinear", function() { return areCollinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTruthy", function() { return isTruthy; });
/* harmony import */ var _math_vector_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/vector-2 */ "./src/plugins/navmesh/src/math/vector-2.ts");

/**
 * Calculate the distance squared between two points. This is an optimization to a square root when
 * you just need to compare relative distances without needing to know the specific distance.
 * @param a
 * @param b
 */
function distanceSquared(a, b) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return dx * dx + dy * dy;
}
/**
 * Project a point onto a line segment.
 * JS Source: http://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment
 * @param point
 * @param line
 */
function projectPointToEdge(point, line) {
    const a = line.start;
    const b = line.end;
    // Consider the parametric equation for the edge's line, p = a + t (b - a). We want to find
    // where our point lies on the line by solving for t:
    //  t = [(p-a) . (b-a)] / |b-a|^2
    const l2 = distanceSquared(a, b);
    let t = ((point.x - a.x) * (b.x - a.x) + (point.y - a.y) * (b.y - a.y)) / l2;
    // We clamp t from [0,1] to handle points outside the segment vw.
    t = clamp(t, 0, 1);
    // Project onto the segment
    const p = new _math_vector_2__WEBPACK_IMPORTED_MODULE_0__["default"](a.x + t * (b.x - a.x), a.y + t * (b.y - a.y));
    return p;
}
/**
 * Twice the area of the triangle formed by a, b and c.
 */
function triarea2(a, b, c) {
    const ax = b.x - a.x;
    const ay = b.y - a.y;
    const bx = c.x - a.x;
    const by = c.y - a.y;
    return bx * ay - ax * by;
}
/**
 * Clamp the given value between min and max.
 */
function clamp(value, min, max) {
    if (value < min)
        value = min;
    if (value > max)
        value = max;
    return value;
}
/**
 * Check if two values are within a small margin of one another.
 */
function almostEqual(value1, value2, errorMargin = 0.0001) {
    if (Math.abs(value1 - value2) <= errorMargin)
        return true;
    else
        return false;
}
/**
 * Find the smallest angle difference between two angles
 * https://gist.github.com/Aaronduino/4068b058f8dbc34b4d3a9eedc8b2cbe0
 */
function angleDifference(x, y) {
    let a = x - y;
    const i = a + Math.PI;
    const j = Math.PI * 2;
    a = i - Math.floor(i / j) * j; // (a+180) % 360; this ensures the correct sign
    a -= Math.PI;
    return a;
}
/**
 * Check if two lines are collinear (within a small error margin).
 */
function areCollinear(line1, line2, errorMargin = 0.0001) {
    // Figure out if the two lines are equal by looking at the area of the triangle formed
    // by their points
    const area1 = triarea2(line1.start, line1.end, line2.start);
    const area2 = triarea2(line1.start, line1.end, line2.end);
    if (almostEqual(area1, 0, errorMargin) && almostEqual(area2, 0, errorMargin)) {
        return true;
    }
    else
        return false;
}
function isTruthy(input) {
    return Boolean(input);
}


/***/ }),

/***/ "./src/plugins/phaser-navmesh/src/phaser-navmesh-plugin.ts":
/*!*****************************************************************!*\
  !*** ./src/plugins/phaser-navmesh/src/phaser-navmesh-plugin.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhaserNavMeshPlugin; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _phaser_navmesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phaser-navmesh */ "./src/plugins/phaser-navmesh/src/phaser-navmesh.ts");


/**
 * This class can create navigation meshes for use in Phaser 3. The navmeshes can be constructed
 * from convex polygons embedded in a Tiled map. The class that conforms to Phaser 3's plugin
 * structure.
 *
 * @export
 * @class PhaserNavMeshPlugin
 */
class PhaserNavMeshPlugin extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Plugins.ScenePlugin {
    constructor(scene, pluginManager, pluginKey) {
        super(scene, pluginManager, pluginKey);
        this.phaserNavMeshes = {};
    }
    /** Phaser.Scene lifecycle event */
    boot() {
        const emitter = this.systems.events;
        emitter.once("destroy", this.destroy, this);
    }
    /** Phaser.Scene lifecycle event - noop in this plugin, but still required. */
    init() { }
    /** Phaser.Scene lifecycle event - noop in this plugin, but still required.*/
    start() { }
    /** Phaser.Scene lifecycle event - will destroy all navmeshes created. */
    destroy() {
        this.systems.events.off("boot", this.boot, this);
        this.removeAllMeshes();
    }
    /**
     * Remove all the meshes from the navmesh.
     */
    removeAllMeshes() {
        const meshes = Object.values(this.phaserNavMeshes);
        this.phaserNavMeshes = {};
        meshes.forEach((m) => m.destroy());
    }
    /**
     * Remove the navmesh stored under the given key from the plugin. This does not destroy the
     * navmesh.
     * @param key
     */
    removeMesh(key) {
        if (this.phaserNavMeshes[key])
            delete this.phaserNavMeshes[key];
    }
    buildMeshfromPolygons(key, polygons, shrinkAmount = 0) {
        // Offset and scale each polygon if necessary.
        // if (scaleX !== 1 && scaleY !== 1 && offsetX !== 0 && offsetY !== 0) {
        //   polygons = polygons.map((poly) =>
        //     poly.map((p) => ({ x: p.x * scaleX + offsetX, y: p.y * scaleY + offsetY }))
        //   );
        // }
        const mesh = new _phaser_navmesh__WEBPACK_IMPORTED_MODULE_1__["default"](this, this.scene, key, polygons, 0);
        this.phaserNavMeshes[key] = mesh;
        return mesh;
    }
    /**
     * Load a navmesh from Tiled. Currently assumes that the polygons are squares! Does not support
     * tilemap layer scaling, rotation or position.
     * @param key Key to use when storing this navmesh within the plugin.
     * @param objectLayer The ObjectLayer from a tilemap that contains the polygons that make up the
     * navmesh.
     * @param meshShrinkAmount The amount (in pixels) that the navmesh has been shrunk around
     * obstacles (a.k.a the amount obstacles have been expanded)
     */
    buildMeshFromTiled(key, objectLayer, meshShrinkAmount = 0) {
        var _a;
        if (this.phaserNavMeshes[key]) {
            console.warn(`NavMeshPlugin: a navmesh already exists with the given key: ${key}`);
            return this.phaserNavMeshes[key];
        }
        if (!objectLayer || objectLayer.objects.length === 0) {
            console.warn(`NavMeshPlugin: The given tilemap object layer is empty or undefined: ${objectLayer}`);
        }
        const objects = (_a = objectLayer.objects) !== null && _a !== void 0 ? _a : [];
        // Loop over the objects and construct a polygon - assumes a rectangle for now!
        // TODO: support layer position, scale, rotation
        const polygons = objects.map((obj) => {
            var _a, _b, _c, _d;
            const h = (_a = obj.height) !== null && _a !== void 0 ? _a : 0;
            const w = (_b = obj.width) !== null && _b !== void 0 ? _b : 0;
            const left = (_c = obj.x) !== null && _c !== void 0 ? _c : 0;
            const top = (_d = obj.y) !== null && _d !== void 0 ? _d : 0;
            const bottom = top + h;
            const right = left + w;
            return [
                { x: left, y: top },
                { x: left, y: bottom },
                { x: right, y: bottom },
                { x: right, y: top },
            ];
        });
        const mesh = new _phaser_navmesh__WEBPACK_IMPORTED_MODULE_1__["default"](this, this.scene, key, polygons, meshShrinkAmount);
        this.phaserNavMeshes[key] = mesh;
        return mesh;
    }
}


/***/ }),

/***/ "./src/plugins/phaser-navmesh/src/phaser-navmesh.ts":
/*!**********************************************************!*\
  !*** ./src/plugins/phaser-navmesh/src/phaser-navmesh.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhaserNavMesh; });
/* harmony import */ var _navmesh_src_navmesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../navmesh/src/navmesh */ "./src/plugins/navmesh/src/navmesh.ts");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);


/**
 * A wrapper around {@link NavMesh} for Phaser 3. Create instances of this class from
 * {@link PhaserNavMeshPlugin}. This is the workhorse that represents a navigation mesh built from a
 * series of polygons. Once built, the mesh can be asked for a path from one point to another point.
 *
 * Compared to {@link NavMesh}, this adds visual debugging capabilities and converts paths to
 * Phaser-compatible point instances.
 *
 * @export
 * @class PhaserNavMesh
 */
class PhaserNavMesh {
    /**
     * Creates an instance of PhaserNavMesh.
     * @param plugin The plugin that owns this mesh.
     * @param scene
     * @param key The key the mesh is stored under within the plugin.
     * @param meshPolygonPoints Array where each element is an array of point-like objects that
     * defines a polygon.
     * @param meshShrinkAmount The amount (in pixels) that the navmesh has been shrunk around
     * obstacles (a.k.a the amount obstacles have been expanded)
     */
    constructor(plugin, scene, key, meshPolygonPoints, meshShrinkAmount = 0) {
        this.key = key;
        this.plugin = plugin;
        this.scene = scene;
        this.debugGraphics = null;
        this.navMesh = new _navmesh_src_navmesh__WEBPACK_IMPORTED_MODULE_0__["default"](meshPolygonPoints, meshShrinkAmount);
    }
    /**
     * Find if the given point is within any of the polygons in the mesh.
     * @param point
     */
    isPointInMesh(point) {
        return this.navMesh.isPointInMesh(point);
    }
    /**
     * See {@link NavMesh#findPath}. This implements the same functionality, except that the returned
     * path is converted to Phaser-compatible points.
     * @param startPoint A point-like object
     * @param endPoint A point-like object
     * @param PointClass The class used to represent points in the final path
     * @returns An array of points if a path is found, or null if no path
     */
    findPath(startPoint, endPoint, PointClass = phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Geom.Point) {
        const path = this.navMesh.findPath(startPoint, endPoint);
        return path ? path.map(({ x, y }) => new PointClass(x, y)) : path;
    }
    /**
     * Enable the debug drawing graphics. If no graphics object is provided, a new instance will be
     * created.
     * @param graphics An optional graphics object for the mesh to use for debug drawing. Note, the
     * mesh will destroy this graphics object when the mesh is destroyed.
     * @returns The graphics object this mesh uses.
     */
    enableDebug(graphics) {
        if (!graphics && !this.debugGraphics) {
            this.debugGraphics = this.scene.add.graphics();
        }
        else if (graphics) {
            if (this.debugGraphics)
                this.debugGraphics.destroy();
            this.debugGraphics = graphics;
        }
        this.debugGraphics.visible = true;
        return this.debugGraphics;
    }
    /** Hide the debug graphics, but don't destroy it. */
    disableDebug() {
        if (this.debugGraphics)
            this.debugGraphics.visible = false;
    }
    /** Returns true if the debug graphics object is enabled and visible. */
    isDebugEnabled() {
        return this.debugGraphics && this.debugGraphics.visible;
    }
    /** Clear the debug graphics. */
    debugDrawClear() {
        if (this.debugGraphics)
            this.debugGraphics.clear();
    }
    /**
     * Visualize the polygons in the navmesh by drawing them to the debug graphics.
     * @param options
     * @param [options.drawCentroid=true] For each polygon, show the approx centroid
     * @param [options.drawBounds=false] For each polygon, show the bounding radius
     * @param [options.drawNeighbors=true] For each polygon, show the connections to neighbors
     * @param [options.drawPortals=true] For each polygon, show the portal edges
     * @param [options.palette=[0x00a0b0, 0x6a4a3c, 0xcc333f, 0xeb6841, 0xedc951]] An array of
     * Phaser-compatible format colors to use when drawing the individual polygons. The first poly
     * uses the first color, the second poly uses the second color, etc.
     */
    debugDrawMesh({ drawCentroid = true, drawBounds = false, drawNeighbors = true, drawPortals = true, palette = [0x00a0b0, 0x6a4a3c, 0xcc333f, 0xeb6841, 0xedc951], } = {}) {
        if (!this.debugGraphics)
            return;
        const graphics = this.debugGraphics;
        const navPolys = this.navMesh.getPolygons();
        navPolys.forEach((poly) => {
            const color = palette[poly.id % palette.length];
            graphics.fillStyle(color);
            graphics.fillPoints(poly.getPoints(), true);
            if (drawCentroid) {
                graphics.fillStyle(0x000000);
                graphics.fillCircle(poly.centroid.x, poly.centroid.y, 4);
            }
            if (drawBounds) {
                graphics.lineStyle(1, 0xffffff);
                graphics.strokeCircle(poly.centroid.x, poly.centroid.y, poly.boundingRadius);
            }
            if (drawNeighbors) {
                graphics.lineStyle(2, 0x000000);
                poly.neighbors.forEach((n) => {
                    graphics.lineBetween(poly.centroid.x, poly.centroid.y, n.centroid.x, n.centroid.y);
                });
            }
            if (drawPortals) {
                graphics.lineStyle(10, 0x000000);
                poly.portals.forEach((portal) => graphics.lineBetween(portal.start.x, portal.start.y, portal.end.x, portal.end.y));
            }
        });
    }
    /**
     * Visualize a path (array of points) on the debug graphics.
     * @param path Array of point-like objects in the form {x, y}
     * @param color
     * @param thickness
     * @param alpha
     */
    debugDrawPath(path, color = 0x00ff00, thickness = 10, alpha = 1) {
        if (!this.debugGraphics)
            return;
        if (path && path.length) {
            // Draw line for path
            this.debugGraphics.lineStyle(thickness, color, alpha);
            this.debugGraphics.strokePoints(path);
            // Draw circle at start and end of path
            this.debugGraphics.fillStyle(color, alpha);
            const d = 1.2 * thickness;
            this.debugGraphics.fillCircle(path[0].x, path[0].y, d);
            if (path.length > 1) {
                const lastPoint = path[path.length - 1];
                this.debugGraphics.fillCircle(lastPoint.x, lastPoint.y, d);
            }
        }
    }
    updateMesh(meshPolygonPoints) {
        this.navMesh = new _navmesh_src_navmesh__WEBPACK_IMPORTED_MODULE_0__["default"](meshPolygonPoints, 0);
    }
    /** Destroy the mesh, kill the debug graphic and unregister itself with the plugin. */
    destroy() {
        if (this.navMesh)
            this.navMesh.destroy();
        if (this.debugGraphics)
            this.debugGraphics.destroy();
        this.plugin.removeMesh(this.key);
    }
}


/***/ }),

/***/ "./src/scenes/boot-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/boot-scene.ts ***!
  \**********************************/
/*! exports provided: BootScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootScene", function() { return BootScene; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");

const sceneConfig = {
    active: false,
    visible: false,
    key: 'Boot',
};
/**
 * The initial scene that loads all necessary assets to the game and displays a loading bar.
 */
class BootScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }
    preload() {
        const halfWidth = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getGameWidth"])(this) * 0.5;
        const halfHeight = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getGameHeight"])(this) * 0.5;
        const progressBarHeight = 100;
        const progressBarWidth = 400;
        const progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, 0x000000);
        const progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, 0x888888);
        const loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);
        const percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);
        const assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);
        this.load.on('progress', (value) => {
            progressBar.width = (progressBarWidth - 30) * value;
            const percent = value * 100;
            percentText.setText(`${percent}%`);
        });
        this.load.on('fileprogress', (file) => {
            assetText.setText(file.key);
        });
        this.load.on('complete', () => {
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            progressBar.destroy();
            progressBarContainer.destroy();
            this.scene.start('MainMenu');
        });
        this.loadAssets();
        // this.load.plugin('rexcontainerliteplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexcontainerliteplugin.min.js', true);
    }
    /**
     * All assets that need to be loaded by the game (sprites, images, animations, tiles, music, etc)
     * should be added to this method. Once loaded in, the loader will keep track of them, indepedent of which scene
     * is currently active, so they can be accessed anywhere.
     */
    loadAssets() {
        // Load sample assets
        // Source: Open Game Art
        this.load.image('prison', 'assets/prison.svg');
        this.load.image('rocket', 'assets/rocket.svg');
        this.load.image('tile', 'assets/parkay-floor.svg');
        this.load.image('stars', 'assets/stars.svg');
        // this.load.image('enemy', 'assets/robots.svg');
        // this.load.spritesheet('enemy', 'assets/robots.svg', { frameWidth: 500, frameHeight: 505 });
        this.load.spritesheet('crates', 'assets/Crates.svg', { frameWidth: 105, frameHeight: 105 });
        //   this.anims.create({
        //     key: 'face',
        //     frames: [ { key: 'enemy', frame: 1 } ],
        //     frameRate: -1,
        // });
    }
}


/***/ }),

/***/ "./src/scenes/game-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/game-scene.ts ***!
  \**********************************/
/*! exports provided: GameScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScene", function() { return GameScene; });
/* harmony import */ var _gameobjects_Crate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameobjects/Crate */ "./src/gameobjects/Crate.ts");
/* harmony import */ var _gameobjects_Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameobjects/Enemy */ "./src/gameobjects/Enemy.ts");
/* harmony import */ var _gameobjects_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gameobjects/Player */ "./src/gameobjects/Player.ts");
/* harmony import */ var _gameobjects_Wall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gameobjects/Wall */ "./src/gameobjects/Wall.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _gameobjects_PerspectiveMixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gameobjects/PerspectiveMixin */ "./src/gameobjects/PerspectiveMixin.ts");
/* harmony import */ var _gameobjects_CrateFace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gameobjects/CrateFace */ "./src/gameobjects/CrateFace.ts");
/* harmony import */ var _gameobjects_PrisonFace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gameobjects/PrisonFace */ "./src/gameobjects/PrisonFace.ts");








var Vector2 = Phaser.Math.Vector2;
const sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
    physics: {},
};
class GameScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
        this.gridUnit = 0;
        this.backgoundInc = 0;
    }
    create() {
        const measureX = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getGameWidth"])(this);
        const measureY = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getGameHeight"])(this);
        const isLandscape = measureX > measureY;
        const measureShort = isLandscape ? measureY : measureX;
        const measureLong = measureShort * 1.3;
        this.gridUnit = Math.round(measureShort / 100);
        this.gravitySpeed = this.gridUnit * 2;
        this.data.set('gridUnit', this.gridUnit);
        this.data.set('short', measureShort);
        const getSize = (input) => input ? measureLong : measureShort;
        let startX = measureX - getSize(isLandscape);
        startX = startX === 0 ? 0 : startX / 2;
        let startY = measureY - getSize(!isLandscape);
        startY = startY === 0 ? 0 : startY / 2;
        // create the biggest world that will fit on this screen.
        this.background = this.physics.scene.add.tileSprite(Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getGameWidth"])(this) / 2, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getGameHeight"])(this) / 2, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getGameWidth"])(this), Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getGameHeight"])(this), 'stars');
        const setBounds = (item) => item.setBounds(startX, startY, getSize(isLandscape), getSize(!isLandscape));
        setBounds(this.physics.world);
        const { left, right, top, bottom, height, width, centerX, centerY } = this.physics.world.bounds;
        const tiles = this.physics.scene.add.tileSprite(getSize(isLandscape) / 2 + startX, getSize(!isLandscape) / 2 + startY, width, height, 'tile');
        tiles.setTileScale(this.gridUnit / 7);
        const CrateType = Object(_gameobjects_PerspectiveMixin__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_gameobjects_CrateFace__WEBPACK_IMPORTED_MODULE_6__["default"])(_gameobjects_Crate__WEBPACK_IMPORTED_MODULE_0__["default"]));
        const Prison = Object(_gameobjects_PerspectiveMixin__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_gameobjects_PrisonFace__WEBPACK_IMPORTED_MODULE_7__["default"])(_gameobjects_Crate__WEBPACK_IMPORTED_MODULE_0__["default"]));
        const EnemyType = Object(_gameobjects_PerspectiveMixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_gameobjects_Enemy__WEBPACK_IMPORTED_MODULE_1__["default"]);
        const PlayerType = Object(_gameobjects_PerspectiveMixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_gameobjects_Player__WEBPACK_IMPORTED_MODULE_2__["default"]);
        const crateConfig = {
            classType: CrateType,
            active: true,
            visible: true,
            repeat: 9,
            setScale: { x: this.gridUnit / 10, y: this.gridUnit / 10 },
            collideWorldBounds: true,
            key: 'crates',
        };
        this.crates = this.physics.add.group(crateConfig);
        const quarterCrate = this.gridUnit * 2.6;
        this.prison = new Prison(this.physics.scene, centerX, bottom, 'prison');
        this.prison.setScale(this.gridUnit / 14.1);
        this.prison.depth = 2;
        this.crates.add(this.prison);
        const CubeType = Object(_gameobjects_PerspectiveMixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_gameobjects_Wall__WEBPACK_IMPORTED_MODULE_3__["default"]);
        // const wall = new Wall(this, 0 , 0, 'prison', new Vector2(2,4));
        const wallcolor = 0xc0bdc3;
        const edge = quarterCrate / 2;
        const up = 'up';
        const down = 'down';
        const dirright = 'right';
        const dirleft = 'left';
        const walltop = new CubeType(this, centerX, top - edge / 2, width, edge, quarterCrate * 4, wallcolor, down, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["Collision4Direction"])(_helpers__WEBPACK_IMPORTED_MODULE_4__["Direction"].down));
        const wallbottom = new CubeType(this, centerX, bottom + edge / 2, width, edge, quarterCrate * 4, wallcolor, up, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["Collision4Direction"])(_helpers__WEBPACK_IMPORTED_MODULE_4__["Direction"].up));
        const wallleft = new CubeType(this, left - edge / 2, centerY, edge, height, quarterCrate * 4, wallcolor, dirright, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["Collision4Direction"])(_helpers__WEBPACK_IMPORTED_MODULE_4__["Direction"].right));
        const wallright = new CubeType(this, right + edge / 2, centerY, edge, height, quarterCrate * 4, wallcolor, dirleft, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["Collision4Direction"])(_helpers__WEBPACK_IMPORTED_MODULE_4__["Direction"].left));
        const walls = [walltop, wallbottom, wallleft, wallright];
        walls.forEach((w) => {
            w.setStrokeStyle(this.gridUnit / 4, 0x000, 1);
            w.update();
        });
        // for (let i = 0; i < getRandomInt(4); i++) {
        //   const cube = new CubeType(this, centerY, centerX, quarterCrate * 4, quarterCrate * 4, quarterCrate * 4, 0x43464B, 'cube') as Wall;
        //   cube.setStrokeStyle(this.gridUnit / 4, 0x000, 1);
        //
        //   this.crates.add(cube);
        // }
        this.rocket = this.physics.add.sprite(centerX, top + quarterCrate * 2, 'rocket');
        this.rocket.setScale(this.gridUnit / 15);
        this.rocket.setDepth(1);
        this.crates.setDepth(3);
        this.player = new PlayerType({ scene: this, x: centerX, y: centerY }, this.gridUnit, this.crates, quarterCrate, this.gridUnit / 4);
        this.player.scale = 3;
        this.enemy = new EnemyType({ scene: this, x: centerX, y: top + quarterCrate * 2 }, this.gridUnit, quarterCrate * 1.2, this.gridUnit / 4);
        // @ts-ignore
        this.physics.add.overlap(this.player, this.crates, this.player.crateCollider, null, true);
        // @ts-ignore
        this.physics.add.overlap(this.player, this.enemy, () => this.endGame(), null, true);
        // @ts-ignore
        const cratesCollider = this.physics.add.collider(this.enemy, this.crates);
        this.enemyCollider = this.physics.add.overlap(this.enemy, this.crates, this.enemy.cratesOverlap);
        // @ts-ignore
        this.rocketCollider = this.physics.add.overlap(this.player, this.rocket, () => this.blastOff(), null, true);
        this.fallingCrates = [];
        // @ts-ignore
        const enemy = this.enemy;
        const player = this.player;
        function placeCrate(crate, crates) {
            const { width: w, height: h } = crate;
            const p1 = new Vector2(w, 0);
            const p2 = new Vector2(0, h);
            // const rad = p1.distance(p2);
            // console.log(w, p1.distance(p2), w * 1.5);
            crate.setRandomPosition(startX, startY, width, height);
            crates.children.iterate((item) => {
                if (item !== crate) {
                    const pos = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["point2Vec"])(item);
                    const cratePos = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["point2Vec"])(crate);
                    const rad = crate.width * 1.5;
                    if (pos.distance(crate) <= rad || cratePos.distance(enemy) <= rad || cratePos.distance(player) <= rad) {
                        placeCrate(crate, crates);
                    }
                }
            });
        }
        // const array = [[0,1,2], [3,4,5], [6,7,8]];
        // const map = this.make.tilemap({data: array, tileWidth: this.gridUnit, tileHeight: this.gridUnit});
        // const layer = map.createLayer(0, 'tiles', 0 , 0);
        // const navMesh = this.navMeshPlugin.buildMeshFromTilemap("mesh", map, [layer]);
        this.crates.children.iterate((crate, idx) => {
            placeCrate(crate, this.crates);
            this.fallingCrates.push(crate);
            // const layer = map.createLayer(0, 'crates', 0 , 0);
        });
        this.enemy.setDataEnabled();
        // this.enemy.data.set('mesh', decomp);
        // console.log(decomp);
        this.boundedCrates = [];
        this.updatePerspectiveDrawing();
        this.physics.world.on('worldbounds', (body /*, up, down, left, right*/) => {
            this.updatePerspectiveDrawing(body);
        });
    }
    update(time) {
        // set motion on the stars
        if (!this.rocket.visible) {
            // this.enemy.
            this.dropEverything();
        }
        this.backgoundInc === 0
            ? this.background.tilePositionX -= 1
            : this.background.tilePositionY -= this.backgoundInc;
        const pos = new Vector2(this.player.x, this.player.y);
        this.enemy.exterminate(pos, this.crates);
        this.player.update();
        this.enemy.update();
    }
    updatePerspectiveDrawing(body = null) {
        this.cratesPreRenderEvent = this.physics.scene.game.events.on('prerender', (renderer, time) => {
            if (body) {
                // @ts-ignore
                body.gameObject.update();
            }
            else {
                // @ts-ignore
                this.crates.children.iterate((crate) => {
                    // console.log(time);
                    crate.update();
                });
            }
            this.cratesPreRenderEvent.removeAllListeners();
        }, this);
    }
    endGame(won = false) {
        this.enemy.clearMesh();
        this.add
            .text(Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getGameWidth"])(this) / 2.5, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getGameHeight"])(this) / 2, won ? 'you win' : 'game over').setFontSize(this.gridUnit * 5)
            .setDepth(5);
        this.physics.pause();
        this.scene.pause();
    }
    dropEverything() {
        // debugger;
        const blockedCrates = [];
        this.fallingCrates.forEach((crate) => {
            const none = false;
            const collision = { up: false, down: true, right: false, left: false, none };
            const axis = 'y';
            const selection = this.fallingCrates.filter((item) => Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["collidesOnAxes"])(crate, item, collision))
                .sort((a, b) => a[axis] < b[axis] ? -1 : 1);
            const { bounds } = this.physics.world;
            selection.forEach((collidingCrate) => {
                if (Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["blockedInDirection"])(crate, collidingCrate, this.gravitySpeed, collision)) {
                    blockedCrates.push(crate);
                }
            });
            if (Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["reachedBound"])(crate, this.gravitySpeed, collision, bounds)) {
                this.boundedCrates.push(crate);
            }
        });
        this.fallingCrates
            .filter((crate) => !blockedCrates.includes(crate))
            .filter((crate) => !this.boundedCrates.includes(crate))
            .forEach((crate) => {
            if (crate instanceof _gameobjects_Crate__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                crate.y += this.gravitySpeed;
                crate.update();
            }
        });
        if (!this.player.isBlockedDirection('down')) {
            this.player.y += this.gravitySpeed;
        }
        if (!this.enemy.isBlockedDirection('down')) {
            this.enemy.y += this.gravitySpeed;
        }
    }
    blastOff() {
        if (this.rocket.visible) {
            this.scene.scene.cameras.main.shake(500, 0.01);
        }
        this.rocket.visible = false;
        this.rocketCollider.destroy();
        this.backgoundInc = 10;
        // if (this.player.y <= this.physics.world.bounds.bottom - this.player.height) {
        //   // console.log (this.player.y);
        //   this.endGame();
        // }
        this.physics.add.overlap(this.prison, this.enemy, () => {
            if (this.enemy.y <= this.physics.world.bounds.bottom - this.enemy.height) {
                this.endGame(true);
                this.enemy.x = this.prison.x;
                this.enemy.y = this.prison.y;
            }
        });
    }
}


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_menu_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-menu-scene */ "./src/scenes/main-menu-scene.ts");
/* harmony import */ var _boot_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boot-scene */ "./src/scenes/boot-scene.ts");
/* harmony import */ var _game_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-scene */ "./src/scenes/game-scene.ts");



/* harmony default export */ __webpack_exports__["default"] = ([
    _boot_scene__WEBPACK_IMPORTED_MODULE_1__["BootScene"],
    _main_menu_scene__WEBPACK_IMPORTED_MODULE_0__["MainMenuScene"],
    _game_scene__WEBPACK_IMPORTED_MODULE_2__["GameScene"],
]);


/***/ }),

/***/ "./src/scenes/main-menu-scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/main-menu-scene.ts ***!
  \***************************************/
/*! exports provided: MainMenuScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuScene", function() { return MainMenuScene; });
const sceneConfig = {
    active: false,
    visible: false,
    key: 'MainMenu',
};
/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
class MainMenuScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }
    create() {
        this.scene.start('Game');
        // this.add.text(100, 50, 'This is a sample main menu. Click the "Start" button below to run your game.', { fill: '#FFFFFF' }).setFontSize(24);
        // new MenuButton(this, 100, 150, 'Start Game', () => {
        //   this.scene.start('Game');
        // });
        // new MenuButton(this, 100, 250, 'Settings', () => console.log('settings button clicked'));
        // new MenuButton(this, 100, 350, 'Help', () => console.log('help button clicked'));
    }
}


/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map