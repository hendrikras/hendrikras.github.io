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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVvYmplY3RzL0NvbGxpZGVzV2l0aE9iamVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVvYmplY3RzL0NyYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lb2JqZWN0cy9DcmF0ZUZhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVvYmplY3RzL0VuZW15LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lb2JqZWN0cy9QZXJzcGVjdGl2ZU1peGluLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lb2JqZWN0cy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVvYmplY3RzL1ByaXNvbkZhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVvYmplY3RzL1NwaGVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZW9iamVjdHMvV2FsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2lucy9ncGMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbnMvbmF2bWVzaC9zcmMvY2hhbm5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2lucy9uYXZtZXNoL3NyYy9tYXRoL2xpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbnMvbmF2bWVzaC9zcmMvbWF0aC9wb2x5Z29uLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW5zL25hdm1lc2gvc3JjL21hdGgvdmVjdG9yLTIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbnMvbmF2bWVzaC9zcmMvbmF2Z3JhcGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbnMvbmF2bWVzaC9zcmMvbmF2bWVzaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2lucy9uYXZtZXNoL3NyYy9uYXZwb2x5LnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW5zL25hdm1lc2gvc3JjL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW5zL3BoYXNlci1uYXZtZXNoL3NyYy9waGFzZXItbmF2bWVzaC1wbHVnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbnMvcGhhc2VyLW5hdm1lc2gvc3JjL3BoYXNlci1uYXZtZXNoLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tbWVudS1zY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxtQkFBbUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsS0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsb0JBQW9CO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZTtBQUMvQyxtQkFBbUIsYUFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDO0FBQ25DO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMs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O0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkRBQVksY0FBYyw4REFBYTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxrRUFBa0UsK0RBQWM7QUFDaEY7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBLG9CQUFvQixtRUFBa0I7QUFDdEM7QUFDQTtBQUNBLGFBQWE7QUFDYixnQkFBZ0IsNkRBQVk7QUFDNUI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywwREFBSztBQUN0QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6T0E7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDVDtBQUNBO0FBQzFCO0FBQ2YsSUFBSSxxREFBUztBQUNiLElBQUksOERBQWE7QUFDakIsSUFBSSxxREFBUztBQUNiLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1BGO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUhBQW1ILGtCQUFrQjtBQUNySTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBDb250YWluZXJMaXRlIGZyb20gJ3BoYXNlcjMtcmV4LXBsdWdpbnMvcGx1Z2lucy9jb250YWluZXJsaXRlJztcbnZhciBDSVJDTEUgPSBQaGFzZXIuR2VvbS5DSVJDTEU7XG52YXIgRUxMSVBTRSA9IFBoYXNlci5HZW9tLkVMTElQU0U7XG5pbXBvcnQgeyBEaXJlY3Rpb24sIGdldEhvbW9UaGV0aWNDZW50ZXIsIGxpbmVJbnRlcnNlY3QsIHBvaW50MlZlYywgcHl0LCB1bmJsb2NrQnV0IH0gZnJvbSAnLi4vaGVscGVycyc7XG52YXIgTm9ybWFsaXplID0gUGhhc2VyLk1hdGguQW5nbGUuTm9ybWFsaXplO1xudmFyIEJldHdlZW5Qb2ludHMgPSBQaGFzZXIuTWF0aC5BbmdsZS5CZXR3ZWVuUG9pbnRzO1xudmFyIEdldENpcmNsZVRvQ2lyY2xlID0gUGhhc2VyLkdlb20uSW50ZXJzZWN0cy5HZXRDaXJjbGVUb0NpcmNsZTtcbnZhciBMaW5lID0gUGhhc2VyLkdlb20uTGluZTtcbnZhciBDaXJjbGUgPSBQaGFzZXIuR2VvbS5DaXJjbGU7XG52YXIgTElORSA9IFBoYXNlci5HZW9tLkxJTkU7XG52YXIgUGF0aCA9IFBoYXNlci5DdXJ2ZXMuUGF0aDtcbnZhciBRdWFkcmF0aWNCZXppZXIgPSBQaGFzZXIuQ3VydmVzLlF1YWRyYXRpY0JlemllcjtcbnZhciBSYWRUb0RlZyA9IFBoYXNlci5NYXRoLlJhZFRvRGVnO1xudmFyIERlZ1RvUmFkID0gUGhhc2VyLk1hdGguRGVnVG9SYWQ7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaWRlc1dpdGhPYmplY3RzIGV4dGVuZHMgQ29udGFpbmVyTGl0ZSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIHNpemUsIHNjYWxlKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCBzaXplLCBzaXplKTtcbiAgICAgICAgdGhpcy5ibG9ja2VkRGlyZWN0aW9uID0geyB1cDogZmFsc2UsIGRvd246IGZhbHNlLCByaWdodDogZmFsc2UsIGxlZnQ6IGZhbHNlLCBub25lOiB0cnVlIH07XG4gICAgICAgIHRoaXMucHVzaENyYXRlID0gKGRpciwgY3JhdGUpID0+IGNvbnNvbGUuZXJyb3IoJ25vdCBpbXBsZW1lbnRlZCEnKTtcbiAgICAgICAgdGhpcy5yZXNldEJsb2NrZWREaXJlY3Rpb25zID0gKGNyYXRlKSA9PiB7XG4gICAgICAgICAgICB1bmJsb2NrQnV0KERpcmVjdGlvblt0aGlzLmZhY2luZ1NpZGUoY3JhdGUpXSwgdGhpcy5ibG9ja2VkRGlyZWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVDcmF0ZUNvbGxpc29uID0gKGNyYXRlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnB1c2hDcmF0ZShEaXJlY3Rpb25bdGhpcy5mYWNpbmdTaWRlKGNyYXRlKV0sIGNyYXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xuICAgICAgICBzY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5sYXN0RGlyZWN0aW9uID0gTWF0aC5QSSAvIDI7XG4gICAgfVxuICAgIGlzQmxvY2tlZERpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tlZERpcmVjdGlvbltkaXJlY3Rpb25dO1xuICAgIH1cbiAgICBmYWNpbmdTaWRlKGNyYXRlKSB7XG4gICAgICAgIGNvbnN0IHsgcG9pbnQgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gQmV0d2VlblBvaW50cyhjcmF0ZSwgcG9pbnQpO1xuICAgICAgICBpZiAoYW5nbGUgPiAwLjc4ICYmIGFuZ2xlIDwgMi4yOSkge1xuICAgICAgICAgICAgcmV0dXJuIERpcmVjdGlvbi51cDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbmdsZSA+IC0yLjI5ICYmIGFuZ2xlIDwgLTAuNzgpIHtcbiAgICAgICAgICAgIHJldHVybiBEaXJlY3Rpb24uZG93bjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbmdsZSA+IC0wLjc5ICYmIGFuZ2xlIDwgMC43OCkge1xuICAgICAgICAgICAgcmV0dXJuIERpcmVjdGlvbi5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIERpcmVjdGlvbi5yaWdodDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRUcmVwYXpvaWQoY2lyY2xlMSwgY2lyY2xlMiwgY29sb3IsIHBlcmNlbnQsIGludGVyc2VjdFBvaW50ID0gbnVsbCwgc3Ryb2tlQ29sb3IgPSAtMSkge1xuICAgICAgICBjb25zdCB7IGdyYXBoaWNzLCBwb2ludCwgZHAgfSA9IHRoaXM7XG4gICAgICAgIGxldCBjcm9zcztcbiAgICAgICAgaWYgKCFpbnRlcnNlY3RQb2ludCkge1xuICAgICAgICAgICAgY3Jvc3MgPSBnZXRIb21vVGhldGljQ2VudGVyKGNpcmNsZTEsIGNpcmNsZTIpO1xuICAgICAgICAgICAgaWYgKGNyb3NzID09PSBudWxsKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMywgMHgwMDAsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3Jvc3MgPSBpbnRlcnNlY3RQb2ludDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0cCA9IHRoaXMuZ2V0RXh0ZXJuYWxUYW5nZW50KGNpcmNsZTEsIGNpcmNsZTIsIGNyb3NzKTtcbiAgICAgICAgLy8gY29uc3QgdHAyID0gZmluZEV4dGVybmFsVGFuZ2VudHMoY2lyY2xlMiwgY2lyY2xlMSwgY3Jvc3MpO1xuICAgICAgICBpZiAoKHRwID09PSBudWxsIHx8IHRwID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0cC5sZW5ndGgpID4gMCAmJiBjcm9zcykge1xuICAgICAgICAgICAgY29uc3QgW3AxLCBwMiwgcDMsIHA0XSA9IHRwO1xuICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgUGF0aChwMS54LCBwMS55KTtcbiAgICAgICAgICAgIGNvbnN0IG1pID0gY3Jvc3MuY2xvbmUoKS5sZXJwKHBvaW50LCBwZXJjZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnZlID0gbmV3IFF1YWRyYXRpY0JlemllcihwMSwgbWksIHAyKTtcbiAgICAgICAgICAgIHNoYXBlLmFkZChjdXJ2ZSk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8ocDIueCwgcDIueSk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8ocDMueCwgcDMueSk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8ocDQueCwgcDQueSk7XG4gICAgICAgICAgICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IC0zLCBzaGFwZSwgY29sb3IsIHN0cm9rZUNvbG9yLCBwb2ludHM6IHsgcDEsIHAyLCBwMywgcDQgfSB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXdTaGFwZXMoaXRlbXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpdGVtcy5mb3JFYWNoKCh7IHR5cGUsIHNoYXBlLCBjb2xvciA9IC0xLCBzdHJva2VDb2xvciA9IC0xLCBsaW5lV2lkdGggPSB0aGlzLmdyaWRVbml0IC8gNCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGdyYXBoaWNzIH0gPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IENJUkNMRSkge1xuICAgICAgICAgICAgICAgIGlmIChjb2xvciAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKGNvbG9yLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENpcmNsZVNoYXBlKHNoYXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZUNvbG9yICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5saW5lU3R5bGUobGluZVdpZHRoLCBzdHJva2VDb2xvciwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZUNpcmNsZVNoYXBlKHNoYXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBFTExJUFNFKSB7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKGNvbG9yLCAxKTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsRWxsaXBzZVNoYXBlKHNoYXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IExJTkUpIHtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5saW5lU3R5bGUobGluZVdpZHRoLCBjb2xvciwgMSk7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlTGluZVNoYXBlKHNoYXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IC0yKSB7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaXMuZ3JpZFVuaXQgLyA0LCBjb2xvciwgMSk7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlUG9pbnRzKHNoYXBlLmdldFBvaW50cygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlIH0gPSBzaGFwZTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5saW5lU3R5bGUobGluZVdpZHRoLCBzdHJva2VDb2xvciwgMSk7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKGNvbG9yLCAxKTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSk7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbFBhdGgoKTtcbiAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlQ29sb3IgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsU3R5bGUoY29sb3IsIDEpO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlzLmdyaWRVbml0IC8gNCwgc3Ryb2tlQ29sb3IsIDEpO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxQb2ludHMoc2hhcGUuZ2V0UG9pbnRzKCkpO1xuICAgICAgICAgICAgICAgIGlmIChzdHJva2VDb2xvciAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlUG9pbnRzKHNoYXBlLmdldFBvaW50cygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAoX2EgPSBpdGVtcyA9PT0gbnVsbCB8fCBpdGVtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaXRlbXMuc2hhcGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZXN0cm95KCk7XG4gICAgfVxuICAgIGdldEJvZHlBbmdsZSgpIHtcbiAgICAgICAgY29uc3QgZ2FtZU9iamVjdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBnYW1lT2JqZWN0LmJvZHk7XG4gICAgICAgIGlmIChib2R5LnNwZWVkID4gMCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0RGlyZWN0aW9uID0gYm9keS5hbmdsZTtcbiAgICAgICAgICAgIHJldHVybiBib2R5LmFuZ2xlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFzdERpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRFeHRlcm5hbFRhbmdlbnQoY2lyY2xlMSwgY2lyY2xlMiwgaG9tb1RoZXRpY0NlbnRlcikge1xuICAgICAgICBpZiAoY2lyY2xlMSAmJiBjaXJjbGUyICYmIGhvbW9UaGV0aWNDZW50ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZ3JhcGhpY3MgfSA9IHRoaXM7XG4gICAgICAgICAgICBncmFwaGljcy5maWxsU3R5bGUoMHhiNGQ0NTUsIDEpO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDQsIDB4MDAwLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGdldEFuZ2xlID0gKGMpID0+IE5vcm1hbGl6ZShCZXR3ZWVuUG9pbnRzKGMsIGhvbW9UaGV0aWNDZW50ZXIpKSAvICgyICogTWF0aC5QSSk7XG4gICAgICAgICAgICBjb25zdCBhbmdsZTEgPSAoZ2V0QW5nbGUoY2lyY2xlMSkgKyAwLjI1KSAlIDE7XG4gICAgICAgICAgICBjb25zdCBhbmdsZTIgPSAoYW5nbGUxICsgMC41KSAlIDE7XG4gICAgICAgICAgICBjb25zdCBhbmdsZTMgPSAoZ2V0QW5nbGUoY2lyY2xlMikgKyAwLjI1KSAlIDE7XG4gICAgICAgICAgICBjb25zdCBhbmdsZTQgPSAoYW5nbGUzICsgMC41KSAlIDE7XG4gICAgICAgICAgICBjb25zdCBwcDIgPSBjaXJjbGUxLmdldFBvaW50KGFuZ2xlMik7XG4gICAgICAgICAgICBjb25zdCBwcDQgPSBjaXJjbGUyLmdldFBvaW50KGFuZ2xlNCk7XG4gICAgICAgICAgICBjb25zdCBsaW5lQSA9IFBoYXNlci5HZW9tLkxpbmUuRXh0ZW5kKHRoaXMuZ2V0TGluZShwcDIsIHBwNCksIGNpcmNsZTEucmFkaXVzLCBjaXJjbGUxLnJhZGl1cyk7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3RQb2ludCA9IGxpbmVJbnRlcnNlY3QobGluZUEuZ2V0UG9pbnRBKCksIGxpbmVBLmdldFBvaW50QigpLCBjaXJjbGUxLCBob21vVGhldGljQ2VudGVyKTtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uXG4gICAgICAgICAgICBsZXQgaW50ZXJzZWN0cyA9IFtdO1xuICAgICAgICAgICAgaWYgKGludGVyc2VjdFBvaW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZnBvaW50ID0gcG9pbnQyVmVjKGNpcmNsZTIpLmxlcnAoaW50ZXJzZWN0UG9pbnQsIDAuNSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVhc3VyZUNpcmNsZSA9IG5ldyBDaXJjbGUoaGFsZnBvaW50LngsIGhhbGZwb2ludC55LCBoYWxmcG9pbnQuZGlzdGFuY2UoaW50ZXJzZWN0UG9pbnQpKTtcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3RzID0gR2V0Q2lyY2xlVG9DaXJjbGUobWVhc3VyZUNpcmNsZSwgY2lyY2xlMikubWFwKHAgPT4gcG9pbnQyVmVjKHApKTtcbiAgICAgICAgICAgICAgICBpZiAoKGludGVyc2VjdHMgPT09IG51bGwgfHwgaW50ZXJzZWN0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW50ZXJzZWN0cy5sZW5ndGgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgW3AxLCBwMl0gPSBpbnRlcnNlY3RzO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVCID0gbmV3IExpbmUocDEueCwgcDEueSwgaW50ZXJzZWN0UG9pbnQueCwgaW50ZXJzZWN0UG9pbnQueSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZUMgPSBuZXcgTGluZShwMi54LCBwMi55LCBpbnRlcnNlY3RQb2ludC54LCBpbnRlcnNlY3RQb2ludC55KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gcG9pbnQyVmVjKGNpcmNsZTEpLmRpc3RhbmNlKGNpcmNsZTIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVEID0gUGhhc2VyLkdlb20uTGluZS5FeHRlbmQobGluZUIsIGQsIDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVFID0gUGhhc2VyLkdlb20uTGluZS5FeHRlbmQobGluZUMsIGQsIDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHA0ID0gbGluZUQuZ2V0UG9pbnRBKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcDMgPSBsaW5lRS5nZXRQb2ludEEoKTtcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3RzLnB1c2gocDMpO1xuICAgICAgICAgICAgICAgIGludGVyc2VjdHMucHVzaChwNCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBnZXRMaW5lKHAxLCBwMikge1xuICAgICAgICBjb25zdCBsaW5lID0gbmV3IExpbmUocDEueCwgcDEueSwgcDIueCwgcDIueSk7XG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgIH1cbiAgICBnZXREb21lU2hhcGUocG9zaXRpb24sIHJhZGl1cykge1xuICAgICAgICBjb25zdCB7IHNoYXBlLCBwaTI6IGFsbCB9ID0gdGhpcy5oZWFkO1xuICAgICAgICBjb25zdCBiZXR3ZWVuID0gTm9ybWFsaXplKEJldHdlZW5Qb2ludHMocG9zaXRpb24sIHNoYXBlKSk7XG4gICAgICAgIGNvbnN0IG1pZFJhZCA9IGJldHdlZW4gLyBhbGw7XG4gICAgICAgIGNvbnN0IGRpc3QgPSAocG9zaXRpb24uZGlzdGFuY2Uoc2hhcGUpIC8gKHNoYXBlLnJhZGl1cykgLSAwLjUpICogMjtcbiAgICAgICAgY29uc3QgbWlkUG9pbnQgPSBwb2ludDJWZWMoc2hhcGUuZ2V0UG9pbnQobWlkUmFkKSkubGVycChzaGFwZSwgZGlzdCk7XG4gICAgICAgIGNvbnN0IGwgPSBuZXcgTGluZShtaWRQb2ludC54LCBtaWRQb2ludC55LCBzaGFwZS54LCBzaGFwZS55KTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBzaGFwZS5yYWRpdXMgKiAoMSAtIGRpc3QpO1xuICAgICAgICBjb25zdCBzaXplID0gcHl0KGRpc3RhbmNlLCBzaGFwZS5yYWRpdXMpO1xuICAgICAgICBjb25zdCBhbmcgPSBSYWRUb0RlZyhiZXR3ZWVuKSArIDkwICUgMzYwO1xuICAgICAgICBMaW5lLlNldFRvQW5nbGUobCwgbWlkUG9pbnQueCwgbWlkUG9pbnQueSwgRGVnVG9SYWQoYW5nKSwgc2l6ZSk7XG4gICAgICAgIGNvbnN0IGNpcmNBbmcgPSAoYmV0d2VlbiAvIGFsbCArIDAuMjUpICUgMTtcbiAgICAgICAgY29uc3QgcG9pbnRCID0gbC5nZXRQb2ludEIoKTtcbiAgICAgICAgY29uc3Qgc3RhcnRBbmdsZSA9IE5vcm1hbGl6ZShCZXR3ZWVuUG9pbnRzKHNoYXBlLCBwb2ludEIpKTtcbiAgICAgICAgY29uc3QgY2lyY0FuZzIgPSAoY2lyY0FuZyArIDAuNSkgJSAxO1xuICAgICAgICBjb25zdCByZWZsZWN0UG9pbnQxID0gc2hhcGUuZ2V0UG9pbnQoY2lyY0FuZyk7XG4gICAgICAgIGNvbnN0IHJlZmxlY3RQb2ludDIgPSBzaGFwZS5nZXRQb2ludChjaXJjQW5nMik7XG4gICAgICAgIGNvbnN0IHJlZmxlY3RpbmdMaW5lID0gbmV3IExpbmUocmVmbGVjdFBvaW50MS54LCByZWZsZWN0UG9pbnQxLnksIHJlZmxlY3RQb2ludDIueCwgcmVmbGVjdFBvaW50Mi55KTtcbiAgICAgICAgY29uc3QgdG9DZW50ZXIgPSBuZXcgTGluZShwb2ludEIueCwgcG9pbnRCLnksIHNoYXBlLngsIHNoYXBlLnkpO1xuICAgICAgICBjb25zdCBlbmRBbmdsZSA9IE5vcm1hbGl6ZShMaW5lLlJlZmxlY3RBbmdsZSh0b0NlbnRlciwgcmVmbGVjdGluZ0xpbmUpKTtcbiAgICAgICAgcmV0dXJuIHsgeDogcG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZTogZmFsc2UgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQaHlzaWNzLCBNYXRoIGFzIFBNYXRoIH0gZnJvbSAncGhhc2VyJztcbmNsYXNzIENyYXRlIGV4dGVuZHMgUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgeCwgeSwgbmFtZSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgbmFtZSk7XG4gICAgICAgIHRoaXMuJHBsYXllciA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRlbmVteSA9IG51bGw7XG4gICAgICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICAgICAgc2NlbmUucGh5c2ljcy5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc2V0RnJhbWUoUE1hdGguQmV0d2VlbigwLCA0KSk7XG4gICAgICAgIHRoaXMuc2V0Q29sbGlkZVdvcmxkQm91bmRzKCk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLmJvZHk7XG4gICAgICAgIGJvZHkub25Xb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0UHVzaGFibGUoZmFsc2UpO1xuICAgICAgICAvLyBib2R5LnNldEVuYWJsZSh0cnVlKTtcbiAgICAgICAgLy8gYm9keS5zZXRCb3VuY2UoMywzKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmRyYXdQb2ludHMgPSB0aGlzLmRyYXdGYWNlO1xuICAgIH1cbiAgICBnZXQgZW5lbXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbmVteTtcbiAgICB9XG4gICAgc2V0IGVuZW15KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGVuZW15ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBwbGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRwbGF5ZXI7XG4gICAgfVxuICAgIHNldCBwbGF5ZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyID0gdmFsdWU7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoYXQuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhhdC5wcmVkcmF3KCk7XG4gICAgICAgIHRoYXQuZHJhd0luVmlldygpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENyYXRlO1xuIiwiZXhwb3J0IGRlZmF1bHQgKEJhc2UpID0+IGNsYXNzIGV4dGVuZHMgQmFzZSB7XG4gICAgZHJhd0ZhY2UodG9wLCBib3R0b20sIGZsb29yVG9wLCBmbG9vckJvdHRvbSkge1xuICAgICAgICAvLyB0aGlzIHdpbGwgZHJhdyBhIHNpbXBsZSBjcmF0ZSAndGV4dHVyZSdcbiAgICAgICAgLy8gYXMgcGhhc2VyIHNlZW1zIHRvIGhhdmUgbG9zdCB0aGUgYWJpbGl0eSB0byBkcmF3IGEgdGV4dHVyZSBvbiB0aGUgZ3JhcGhpY3MgZ2FtZSBvYmplY3QgaW4gMy41eC5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGdyYXBoaWNzLCB2YW5pc2hQb2ludCwgcG9pbnQsIGdyaWRVbml0IH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBtYWdpY1ogPSAoMTAwMCAtIHZhbmlzaFBvaW50LmRpc3RhbmNlKHBvaW50KSkgLyAxMDAwICsgMTtcbiAgICAgICAgZ3JhcGhpY3Muc2V0RGVwdGgobWFnaWNaKTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKDB4OTk2NjMzLCAxKTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKGdyaWRVbml0IC8gNCwgMHg2NjMzMDAsIDIpO1xuICAgICAgICBjb25zdCBkaXZpZGUgPSAxIC8gNTtcbiAgICAgICAgY29uc3QgdG9wYm9hcmQgPSB0b3AuY2xvbmUoKS5sZXJwKGZsb29yVG9wLCBkaXZpZGUpLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGJvdHRvbWJvYXJkID0gYm90dG9tLmNsb25lKCkubGVycChmbG9vckJvdHRvbSwgZGl2aWRlKS5jbG9uZSgpO1xuICAgICAgICBjb25zdCB0b3BmbG9vcmJvYXJkID0gZmxvb3JUb3AuY2xvbmUoKS5sZXJwKHRvcCwgZGl2aWRlKS5jbG9uZSgpO1xuICAgICAgICBjb25zdCBib3R0b21mbG9vcmJvYXJkID0gZmxvb3JCb3R0b20uY2xvbmUoKS5sZXJwKGJvdHRvbSwgZGl2aWRlKS5jbG9uZSgpO1xuICAgICAgICBncmFwaGljcy5maWxsUG9pbnRzKFt0b3AsIGJvdHRvbSwgYm90dG9tYm9hcmQsIHRvcGJvYXJkXSwgdHJ1ZSk7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbFBvaW50cyhbdG9wYm9hcmQsIGJvdHRvbWJvYXJkLCBib3R0b21mbG9vcmJvYXJkLCB0b3BmbG9vcmJvYXJkXSwgdHJ1ZSk7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbFBvaW50cyhbdG9wZmxvb3Jib2FyZCwgYm90dG9tZmxvb3Jib2FyZCwgZmxvb3JCb3R0b20sIGZsb29yVG9wXSwgdHJ1ZSk7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcbiAgICAgICAgLy8gZHJhdyA3IHNlbWkgdHJhbnNwYXJhbnQgdmVydGljYWwgd29vZGVuIGJlYW1zIG9uIHRoZSBjZW50ZXIgb2YgdGhlIGNyYXRlXG4gICAgICAgIGxldCBwcmV2VG9wID0gdG9wYm9hcmQ7XG4gICAgICAgIGxldCBwcmV2Q29ybmVyID0gdG9wZmxvb3Jib2FyZDtcbiAgICAgICAgY29uc3QgYmVhbXMgPSA3O1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBiZWFtczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsZXJwID0gaSAvIGJlYW1zO1xuICAgICAgICAgICAgY29uc3QgdG9wc2lkZWJvYXJkID0gdG9wYm9hcmQuY2xvbmUoKS5sZXJwKGJvdHRvbWJvYXJkLCBsZXJwKS5jbG9uZSgpO1xuICAgICAgICAgICAgY29uc3QgYm90dG9tc2lkZWJvYXJkID0gdG9wZmxvb3Jib2FyZC5jbG9uZSgpLmxlcnAoYm90dG9tZmxvb3Jib2FyZCwgbGVycCkuY2xvbmUoKTtcbiAgICAgICAgICAgIGxldCBhbHBoYSA9IDA7XG4gICAgICAgICAgICBpZiAoaSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIGFscGhhID0gaSAvIDEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKDB4NjYzMzAwLCBhbHBoYSk7XG4gICAgICAgICAgICBncmFwaGljcy5maWxsUG9pbnRzKFtwcmV2VG9wLCBwcmV2Q29ybmVyLCBib3R0b21zaWRlYm9hcmQsIHRvcHNpZGVib2FyZF0sIHRydWUpO1xuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlUGF0aCgpO1xuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKDB4OTk2NjMzLCAxKTtcbiAgICAgICAgICAgIHByZXZUb3AgPSB0b3BzaWRlYm9hcmQ7XG4gICAgICAgICAgICBwcmV2Q29ybmVyID0gYm90dG9tc2lkZWJvYXJkO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsImltcG9ydCBDb2xsaWRlc1dpdGhPYmplY3RzIGZyb20gJy4vQ29sbGlkZXNXaXRoT2JqZWN0cyc7XG5pbXBvcnQgUGVyc3BlY3RpdmVPYmplY3QgZnJvbSAnLi9QZXJzcGVjdGl2ZU1peGluJztcbmltcG9ydCBTcGhlcmVDbGFzcyBmcm9tICcuL1NwaGVyZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb24sIHBvaW50MlZlYywgc2V0UG9zaXRpb24gfSBmcm9tICcuLi9oZWxwZXJzJztcbnZhciBCZXR3ZWVuUG9pbnRzID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2VlblBvaW50cztcbnZhciBOb3JtYWxpemUgPSBQaGFzZXIuTWF0aC5BbmdsZS5Ob3JtYWxpemU7XG52YXIgVmVjdG9yMiA9IFBoYXNlci5NYXRoLlZlY3RvcjI7XG52YXIgQ2lyY2xlID0gUGhhc2VyLkdlb20uQ2lyY2xlO1xudmFyIExpbmUgPSBQaGFzZXIuR2VvbS5MaW5lO1xudmFyIFF1YWRyYXRpY0JlemllciA9IFBoYXNlci5DdXJ2ZXMuUXVhZHJhdGljQmV6aWVyO1xudmFyIENJUkNMRSA9IFBoYXNlci5HZW9tLkNJUkNMRTtcbnZhciBMSU5FID0gUGhhc2VyLkdlb20uTElORTtcbmltcG9ydCBkZWNvbXBvc2UgZnJvbSAncmVjdGFuZ2xlLWRlY29tcG9zaXRpb24nO1xudmFyIEJldHdlZW4gPSBQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuO1xudmFyIFBhdGggPSBQaGFzZXIuQ3VydmVzLlBhdGg7XG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnLi4vcGx1Z2lucy9ncGMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBDb2xsaWRlc1dpdGhPYmplY3RzIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIGdyaWRVbml0LCBzaXplLCBzY2FsZSkge1xuICAgICAgICBzdXBlcihjb25maWcuc2NlbmUsIGNvbmZpZy54LCBjb25maWcueSwgc2l6ZSwgc2NhbGUpO1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy4kY2hhc2VQbGF5ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jcmF0ZXNPdmVybGFwID0gKG1lLCBjcmF0ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucHVzaGVkQ3JhdGUgJiYgdGhpcy5wbGF5ZXJzQ3JhdGUgIT09IGNyYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoZWRDcmF0ZS5lbmVteSA9IHRoaXMuYmxhbmtFbmVteTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHVzaGVkQ3JhdGUgPSBjcmF0ZTtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tlZERpcmVjdGlvbi5ub25lID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLmRpc3RhbmNlVG9Cb3hDb3JuZXIgPSBjcmF0ZS53aWR0aDtcbiAgICAgICAgICAgIGNyYXRlLmVuZW15ID0gbWU7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNyYXRlQ29sbGlzb24oY3JhdGUpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuYXZNZXNoID0gY29uZmlnLnNjZW5lLm5hdk1lc2hQbHVnaW47XG4gICAgICAgIHRoaXMubmF2TWVzaCA9IG5hdk1lc2g7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBjb25maWcuc2NlbmU7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gY29uZmlnO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgLy8gdGhhdC5ib2R5LnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcbiAgICAgICAgY29uc3QgYm9keSA9IHRoaXMuYm9keTtcbiAgICAgICAgYm9keS5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSk7XG4gICAgICAgIC8vIGJvZHkuc2V0RW5hYmxlKHRydWUpO1xuICAgICAgICAvLyBib2R5LnNldEJvdW5jZSgxMCwgMTApO1xuICAgICAgICB0aGlzLmNvbG9yID0gMFgwQjYzODI7XG4gICAgICAgIGNvbnN0IHNoYWRvd0NvbG9yID0gMFgwMzE5MjA7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMud29ybGRCb3VuZHMgPSBjb25maWcuc2NlbmUucGh5c2ljcy53b3JsZC5ib3VuZHM7XG4gICAgICAgIHRoaXMuc2hhZG93ID0gY29uZmlnLnNjZW5lLmFkZC5jaXJjbGUoeCwgeSwgc2l6ZSAvIDMuNSwgc2hhZG93Q29sb3IsIDAuNCk7XG4gICAgICAgIHRoYXQuYWRkKHRoaXMuc2hhZG93KTtcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBuZXcgQ2lyY2xlKHgsIHksIHNpemUgKiAxLjIpO1xuICAgICAgICB0aGlzLnBhdGhIZWxwZXIgPSBuZXcgQ2lyY2xlKHgsIHksIHNpemUpO1xuICAgICAgICBjb25zdCBTcGhlcmUgPSBQZXJzcGVjdGl2ZU9iamVjdChTcGhlcmVDbGFzcyk7XG4gICAgICAgIGNvbnN0IHF1YXJ0ZXIgPSBzaXplICogMjtcbiAgICAgICAgdGhpcy5oZWFkID0gbmV3IFNwaGVyZShjb25maWcuc2NlbmUsIHgsIHksIHF1YXJ0ZXIsIHF1YXJ0ZXIsIHF1YXJ0ZXIsIHRoaXMuY29sb3IpO1xuICAgICAgICB0aGlzLmhlYWQuc2V0RGVwdGgoMik7XG4gICAgICAgIHRoYXQuc2V0U2NhbGUoc2NhbGUsIHNjYWxlKTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IGdyaWRVbml0ICogMjA7XG4gICAgICAgIHRoaXMuZ3JpZFVuaXQgPSBncmlkVW5pdCAvIDEwO1xuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xuICAgICAgICB0aGlzLnB1c2hDcmF0ZSA9IHRoaXMucHVzaENyYXRlSW1wbDtcbiAgICB9XG4gICAgZ2V0IGNoYXNlUGxheWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kY2hhc2VQbGF5ZXI7XG4gICAgfVxuICAgIHNldCBjaGFzZVBsYXllcih2YWx1ZSkge1xuICAgICAgICB0aGlzLiRjaGFzZVBsYXllciA9IHZhbHVlO1xuICAgIH1cbiAgICBzZXRCbG9ja2VkRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLmJsb2NrZWREaXJlY3Rpb25bZGlyZWN0aW9uXSA9IHRydWU7XG4gICAgfVxuICAgIGNsZWFyTWVzaCgpIHtcbiAgICAgICAgdGhpcy5uYXZNZXNoLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgZXh0ZXJtaW5hdGUocGxheWVyLCBjcmF0ZXMpIHtcbiAgICAgICAgY29uc3QgeyBwb2ludCB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgYm9keSA9IHRoaXMuYm9keTtcbiAgICAgICAgLy8gY29uc3QgdHJlZSA9IG5ldyBSVHJlZSgpO1xuICAgICAgICAvLyAgICAgY29uc3QgcmVhY2hTaXplID0gYm9keS53aWR0aDtcbiAgICAgICAgLy8gICAgIGNvbnN0IGJib3ggPSB7XG4gICAgICAgIC8vICAgICAgICAgbWluWDogY3JhdGUueCAtIHJlYWNoU2l6ZSxcbiAgICAgICAgLy8gICAgICAgICBtaW5ZOiBjcmF0ZS55IC0gcmVhY2hTaXplLFxuICAgICAgICAvLyAgICAgICAgIG1heFg6IGNyYXRlLnggKyByZWFjaFNpemUsXG4gICAgICAgIC8vICAgICAgICAgbWF4WTogY3JhdGUueSArIHJlYWNoU2l6ZSxcbiAgICAgICAgLy8gICAgIH07XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gKHRyZWUgYXMgYW55KS5zZWFyY2goYmJveCkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNyYXRlICE9PSBjcmF0ZSk7XG4gICAgICAgIGNvbnN0IHsgbGVmdCwgdG9wLCBib3R0b20sIHJpZ2h0IH0gPSB0aGlzLnNjZW5lLnBoeXNpY3Mud29ybGQuYm91bmRzO1xuICAgICAgICBjb25zdCBob2xlQ3ViZXMgPSBbXTtcbiAgICAgICAgY3JhdGVzLmNoaWxkcmVuLml0ZXJhdGUoKGNyYXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjcmF0ZUJvZHkgPSBjcmF0ZS5ib2R5O1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gYm9keS53aWR0aCAvIDI7XG4gICAgICAgICAgICBjb25zdCB3ID0gKGNyYXRlQm9keS53aWR0aCAvIDIpICsgZGl2O1xuICAgICAgICAgICAgY29uc3QgaCA9IChjcmF0ZUJvZHkuaGVpZ2h0IC8gMikgKyBkaXY7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGNyYXRlO1xuICAgICAgICAgICAgY29uc3QgbGVmdFggPSB4IC0gdztcbiAgICAgICAgICAgIGNvbnN0IHRvcFkgPSB5IC0gaDtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0WCA9IHggKyB3O1xuICAgICAgICAgICAgY29uc3QgYm90dG9tWSA9IHkgKyBoO1xuICAgICAgICAgICAgY29uc3QgcG9seXMgPSBbeyB4OiBsZWZ0WCwgeTogdG9wWSB9LCB7IHg6IGxlZnRYLCB5OiBib3R0b21ZIH0sIHsgeDogcmlnaHRYLCB5OiBib3R0b21ZIH0sIHsgeDogcmlnaHRYLCB5OiB0b3BZIH1dO1xuICAgICAgICAgICAgaG9sZUN1YmVzLnB1c2gocG9seXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVnaW9uID0gW3sgeDogbGVmdCwgeTogdG9wIH0sIHsgeDogcmlnaHQsIHk6IHRvcCB9LCB7IHg6IHJpZ2h0LCB5OiBib3R0b20gfSwgeyB4OiBsZWZ0LCB5OiBib3R0b20gfV07XG4gICAgICAgIGNvbnN0IHdvcmxkYm94ID0gUG9seWdvbi5mcm9tUG9pbnRzKHJlZ2lvbik7XG4gICAgICAgIGNvbnN0IHsgYm91bmRzOiBpbmJvdW5kcyB9ID0gd29ybGRib3gudG9WZXJ0aWNlcygpO1xuICAgICAgICBjb25zdCBjcmF0ZVJlZ2lvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgeyBib3VuZHMsIGhvbGVzIH0gPSBQb2x5Z29uLmZyb21WZXJ0aWNlcyh7IGJvdW5kczogaW5ib3VuZHMsIGhvbGVzOiBob2xlQ3ViZXMgfSkudG9WZXJ0aWNlcygpO1xuICAgICAgICBjb25zdCBtYXBwZXIgPSAoeyB4LCB5IH0pID0+IFt4LCB5XTtcbiAgICAgICAgaG9sZXMuZm9yRWFjaChob2xlID0+IGNyYXRlUmVnaW9ucy5wdXNoKGhvbGUubWFwKG1hcHBlcikpKTtcbiAgICAgICAgYm91bmRzLmZvckVhY2goYm91bmQgPT4gY3JhdGVSZWdpb25zLnB1c2goYm91bmQubWFwKG1hcHBlcikpKTtcbiAgICAgICAgY29uc3QgcGFydGl0aW9uZWQgPSBkZWNvbXBvc2UoY3JhdGVSZWdpb25zKTtcbiAgICAgICAgY29uc3QgcG9seXMgPSBwYXJ0aXRpb25lZC5tYXAoKGRlY29tcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9wTGVmdCA9IG5ldyBWZWN0b3IyKGRlY29tcFswXVswXSwgZGVjb21wWzBdWzFdKTtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gbmV3IFZlY3RvcjIoZGVjb21wWzFdWzBdLCBkZWNvbXBbMV1bMV0pO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICB7IHg6IHRvcExlZnQueCwgeTogdG9wTGVmdC55IH0sXG4gICAgICAgICAgICAgICAgeyB4OiBib3R0b21SaWdodC54LCB5OiB0b3BMZWZ0LnkgfSxcbiAgICAgICAgICAgICAgICB7IHg6IGJvdHRvbVJpZ2h0LngsIHk6IGJvdHRvbVJpZ2h0LnkgfSxcbiAgICAgICAgICAgICAgICB7IHg6IHRvcExlZnQueCwgeTogYm90dG9tUmlnaHQueSB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5hdk1lc2ggPSB0aGlzLm5hdk1lc2guYnVpbGRNZXNoZnJvbVBvbHlnb25zKCdtZXNoJywgcG9seXMpO1xuICAgICAgICAvLyBuYXZNZXNoLmVuYWJsZURlYnVnKCk7IC8vIENyZWF0ZXMgYSBQaGFzZXIuR3JhcGhpY3Mgb3ZlcmxheSBvbiB0b3Agb2YgdGhlIHNjcmVlblxuICAgICAgICBuYXZNZXNoLmRlYnVnRHJhd0NsZWFyKCk7IC8vIENsZWFycyB0aGUgb3ZlcmxheVxuICAgICAgICAvLyBWaXN1YWxpemUgdGhlIHVuZGVybHlpbmcgbmF2bWVzaFxuICAgICAgICBuYXZNZXNoLmRlYnVnRHJhd01lc2goe1xuICAgICAgICAgICAgZHJhd0NlbnRyb2lkOiBmYWxzZSxcbiAgICAgICAgICAgIGRyYXdCb3VuZHM6IGZhbHNlLFxuICAgICAgICAgICAgZHJhd05laWdoYm9yczogZmFsc2UsXG4gICAgICAgICAgICBkcmF3UG9ydGFsczogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuYXZQYXRoID0gbmF2TWVzaC5maW5kUGF0aChwb2ludCwgcGxheWVyKTtcbiAgICAgICAgbmF2TWVzaC5kZWJ1Z0RyYXdQYXRoKG5hdlBhdGgsIDB4ZmZkOTAwKTtcbiAgICAgICAgaWYgKG5hdlBhdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmF2UGF0aC5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IG5ldyBQYXRoKHN0YXJ0LngsIHN0YXJ0LnkpO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgICAgICAgICAobmF2UGF0aCA9PT0gbnVsbCB8fCBuYXZQYXRoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYXZQYXRoLmxlbmd0aCkgPiAwICYmIChuYXZQYXRoID09PSBudWxsIHx8IG5hdlBhdGggPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hdlBhdGguZm9yRWFjaCgoeyB4LCB5IH0pID0+IHtcbiAgICAgICAgICAgICAgICBwYXRoLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHRoaXMuZm9sbG93KHBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoYXQucHJlZHJhdygpO1xuICAgICAgICBjb25zdCB7IGRwLCBncmFwaGljcywgcG9pbnQsIGNlbnRlckJvdHRvbSwgY2VudGVyQ2VudGVyLCB2YW5pc2hQb2ludCwgcGFzdENlbnRlciB9ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucHVzaGVkQ3JhdGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnB1c2hlZENyYXRlICYmIHBvaW50MlZlYyh0aGlzLnB1c2hlZENyYXRlKS5kaXN0YW5jZShwb2ludCkgPiB0aGlzLnB1c2hlZENyYXRlLmJvZHkud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hlZENyYXRlLmVuZW15ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBncmFwaGljcy5zZXREZXB0aCgyKTtcbiAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgY29uc3Qgb2JzY3VyZWRTaGFwZXMgPSBbXTtcbiAgICAgICAgY29uc3QgdW51YnNjdXJlZFNoYXBlcyA9IFtdO1xuICAgICAgICBzZXRQb3NpdGlvbih0aGlzLnBhdGhIZWxwZXIsIHRoYXQpO1xuICAgICAgICBzZXRQb3NpdGlvbih0aGlzLmhlYWQsIHRoYXQpO1xuICAgICAgICBzZXRQb3NpdGlvbih0aGlzLmNlbnRlciwgY2VudGVyQ2VudGVyKTtcbiAgICAgICAgdGhpcy5oZWFkLnVwZGF0ZSgpO1xuICAgICAgICBjb25zdCB7IGVxdWF0b3IsIHBpMjogYWxsLCBzaGFwZTogc3BoZXJlIH0gPSB0aGlzLmhlYWQ7XG4gICAgICAgIGNvbnN0IHsgY3VydmU6IGV5ZUxpbmUsIGlzT2JzY3VyZWQgfSA9IHRoaXMuaGVhZC5nZXRTbGljZSgneCcsIDAuNjUpO1xuICAgICAgICBjb25zdCB7IGN1cnZlOiBicm93IH0gPSB0aGlzLmhlYWQuZ2V0U2xpY2UoJ3gnLCAwLjc1KTtcbiAgICAgICAgY29uc3QgaG92ZXJQb3NpdGlvbiA9IGNlbnRlckJvdHRvbS5jbG9uZSgpLmxlcnAocG9pbnQsIDAuMSk7XG4gICAgICAgIGNvbnN0IGZlZXRDaXJjbGUgPSBuZXcgQ2lyY2xlKGhvdmVyUG9zaXRpb24ueCwgaG92ZXJQb3NpdGlvbi55LCBzcGhlcmUucmFkaXVzIC8gMi4zKTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENpcmNsZVNoYXBlKGZlZXRDaXJjbGUpO1xuICAgICAgICB0aGF0LnNldENoaWxkUG9zaXRpb24odGhpcy5zaGFkb3csIGNlbnRlckJvdHRvbS54LCBjZW50ZXJCb3R0b20ueSk7XG4gICAgICAgIGNvbnN0IGJvZHlBbmdsZSA9IHRoaXMuZ2V0Qm9keUFuZ2xlKCk7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IE5vcm1hbGl6ZShib2R5QW5nbGUpIC8gYWxsO1xuICAgICAgICBjb25zdCByZWxhdGl2ZUFuZ2xlID0gTm9ybWFsaXplKEJldHdlZW5Qb2ludHModmFuaXNoUG9pbnQsIHBvaW50KSkgLyBhbGw7XG4gICAgICAgIGNvbnN0IHJpZ2h0U2hvdWxkZXIgPSAoZGlyZWN0aW9uICsgMC4yNSkgJSAxO1xuICAgICAgICBjb25zdCBsZWZ0U2hvdWxkZXIgPSAoZGlyZWN0aW9uICsgMC43NSkgJSAxO1xuICAgICAgICBjb25zdCBzaG91bGRlcjFQb2ludCA9IGVxdWF0b3IuZ2V0UG9pbnQocmVsYXRpdmVBbmdsZSAtIGRpcmVjdGlvbiAtIDAuMjUgJSAxKTtcbiAgICAgICAgY29uc3Qgc2hvdWxkZXIyUG9pbnQgPSBlcXVhdG9yLmdldFBvaW50KHJlbGF0aXZlQW5nbGUgLSBkaXJlY3Rpb24gLSAwLjc1ICUgMSk7XG4gICAgICAgIGNvbnN0IGhhbmQxID0gbmV3IFZlY3RvcjIoQ2lyY2xlLkdldFBvaW50KHRoaXMuY2VudGVyLCByaWdodFNob3VsZGVyKSk7XG4gICAgICAgIGNvbnN0IGhhbmQyID0gbmV3IFZlY3RvcjIoQ2lyY2xlLkdldFBvaW50KHRoaXMuY2VudGVyLCBsZWZ0U2hvdWxkZXIpKTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKHRoaXMuY29sb3IpO1xuICAgICAgICBjb25zdCBoYW5kQ29sb3IgPSAwWDI0MDVCO1xuICAgICAgICBjb25zdCB0b3JzbyA9IHRoaXMuZ2V0VHJlcGF6b2lkKHRoaXMuaGVhZC5zaGFwZSwgZmVldENpcmNsZSwgdGhpcy5jb2xvciwgMC45LCB2YW5pc2hQb2ludCwgaGFuZENvbG9yKTtcbiAgICAgICAgY29uc3QgdHlwZSA9IENJUkNMRTtcbiAgICAgICAgY29uc3QgeyBzaGFwZTogeyB4LCB5LCByYWRpdXMgfSB9ID0gdGhpcy5oZWFkO1xuICAgICAgICBpZiAodG9yc28pIHtcbiAgICAgICAgICAgIG9ic2N1cmVkU2hhcGVzLnB1c2godG9yc28pO1xuICAgICAgICAgICAgY29uc3QgeyBwMywgcDQgfSA9IHRvcnNvLnBvaW50cztcbiAgICAgICAgICAgIGNvbnN0IGFuZzEgPSAoQmV0d2VlblBvaW50cyh0aGlzLmhlYWQuc2hhcGUsIHAzKSk7XG4gICAgICAgICAgICBjb25zdCBhbmcyID0gKEJldHdlZW5Qb2ludHModGhpcy5oZWFkLnNoYXBlLCBwNCkpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRBbmdsZSA9IHBhc3RDZW50ZXIoJ3knKSA/IGFuZzIgOiBhbmcxO1xuICAgICAgICAgICAgY29uc3QgZW5kQW5nbGUgPSBzdGFydEFuZ2xlID09PSBhbmcxID8gYW5nMiA6IGFuZzE7XG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IHsgeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZTogZmFsc2UgfTtcbiAgICAgICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaCh7IHR5cGU6IC0xLCBzaGFwZSwgY29sb3I6IHRoaXMuY29sb3IsIHN0cm9rZUNvbG9yOiBoYW5kQ29sb3IgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1bnVic2N1cmVkU2hhcGVzLnB1c2goeyB0eXBlLCBzaGFwZTogbmV3IENpcmNsZSh4LCB5LCByYWRpdXMpLCBjb2xvcjogdGhpcy5jb2xvciwgc3Ryb2tlQ29sb3I6IGhhbmRDb2xvciB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kMVNoYXBlID0geyB0eXBlLCBzaGFwZTogbmV3IENpcmNsZShoYW5kMS54LCBoYW5kMS55LCB0aGlzLmdyaWRVbml0KSwgY29sb3I6IGhhbmRDb2xvciwgc3Ryb2tlQ29sb3I6IDB4MDAwIH07XG4gICAgICAgIGNvbnN0IGhhbmQyU2hhcGUgPSB7IHR5cGUsIHNoYXBlOiBuZXcgQ2lyY2xlKGhhbmQyLngsIGhhbmQyLnksIHRoaXMuZ3JpZFVuaXQpLCBjb2xvcjogaGFuZENvbG9yLCBzdHJva2VDb2xvcjogMHgwMDAgfTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKHRoaXMuY29sb3IsIDEpO1xuICAgICAgICBncmFwaGljcy5maWxsUGF0aCgpO1xuICAgICAgICBjb25zdCBub3NlID0gcmVsYXRpdmVBbmdsZSAtIGRpcmVjdGlvbjtcbiAgICAgICAgY29uc3QgZXllMUFuZ2xlID0gbm9zZSAtIDAuOTUgJSAxO1xuICAgICAgICBjb25zdCBleWUyQW5nbGUgPSBub3NlIC0gMC4wNSAlIDE7XG4gICAgICAgIGNvbnN0IGV5ZTEgPSBleWVMaW5lLmdldFBvaW50KGV5ZTFBbmdsZSk7XG4gICAgICAgIGNvbnN0IGV5ZTIgPSBleWVMaW5lLmdldFBvaW50KGV5ZTJBbmdsZSk7XG4gICAgICAgIGNvbnN0IGJyb3dTdGFydCA9IGJyb3cuZ2V0UG9pbnQobm9zZSAtIDAuOSAlIDEpO1xuICAgICAgICBjb25zdCBicm93bWlkZGxlID0gYnJvdy5nZXRQb2ludChub3NlKTtcbiAgICAgICAgY29uc3QgYnJvd0VuZCA9IGJyb3cuZ2V0UG9pbnQobm9zZSAtIDAuMSAlIDEpO1xuICAgICAgICBjb25zdCBmYWNlRmVhdENvbG9yID0gMHgxNkQ4RDg7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IHRoaXMuc2l6ZSAvIDQ7XG4gICAgICAgIGNvbnN0IGFybTEgPSB7IHR5cGU6IExJTkUsIGxpbmVXaWR0aCwgc2hhcGU6IG5ldyBMaW5lKHNob3VsZGVyMVBvaW50LngsIHNob3VsZGVyMVBvaW50LnksIGhhbmQxLngsIGhhbmQxLnkpLCBjb2xvcjogMHgwMDAgfTtcbiAgICAgICAgY29uc3QgYXJtMiA9IHsgdHlwZTogTElORSwgbGluZVdpZHRoLCBzaGFwZTogbmV3IExpbmUoc2hvdWxkZXIyUG9pbnQueCwgc2hvdWxkZXIyUG9pbnQueSwgaGFuZDIueCwgaGFuZDIueSksIGNvbG9yOiAweDAwMCB9O1xuICAgICAgICBsZXQgbW91dGgyID0gZXF1YXRvci5nZXRQb2ludChleWUyQW5nbGUpO1xuICAgICAgICBsZXQgbW91dGgxID0gZXF1YXRvci5nZXRQb2ludChleWUxQW5nbGUpO1xuICAgICAgICBjb25zdCBub3NlUG9pbnQgPSBlcXVhdG9yLmdldFBvaW50KG5vc2UpO1xuICAgICAgICBjb25zdCBub3NlT2JzY3VyZWQgPSBpc09ic2N1cmVkKG5vc2VQb2ludCk7XG4gICAgICAgIGNvbnN0IG1vdXRoMU9ic2N1cmVkID0gaXNPYnNjdXJlZChtb3V0aDEpO1xuICAgICAgICBjb25zdCBtb3V0aDJPYnNjdXJlZCA9IGlzT2JzY3VyZWQobW91dGgyKTtcbiAgICAgICAgaWYgKG1vdXRoMU9ic2N1cmVkICYmICFub3NlT2JzY3VyZWQpIHtcbiAgICAgICAgICAgIG1vdXRoMSA9IG1vdXRoMS5kaXN0YW5jZShtb3V0aDFPYnNjdXJlZFswXSkgPCBtb3V0aDEuZGlzdGFuY2UobW91dGgxT2JzY3VyZWRbMV0pID8gbW91dGgxT2JzY3VyZWRbMF0gOiBtb3V0aDFPYnNjdXJlZFsxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW91dGgyT2JzY3VyZWQgJiYgIW5vc2VPYnNjdXJlZCkge1xuICAgICAgICAgICAgbW91dGgyID0gbW91dGgyLmRpc3RhbmNlKG1vdXRoMk9ic2N1cmVkWzBdKSA8IG1vdXRoMS5kaXN0YW5jZShtb3V0aDJPYnNjdXJlZFsxXSkgPyBtb3V0aDJPYnNjdXJlZFswXSA6IG1vdXRoMk9ic2N1cmVkWzFdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbm9zZU9ic2N1cmVkKSB7XG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IG5ldyBRdWFkcmF0aWNCZXppZXIobW91dGgxLCBub3NlUG9pbnQsIG1vdXRoMik7XG4gICAgICAgICAgICB1bnVic2N1cmVkU2hhcGVzLnB1c2goeyB0eXBlOiAtMiwgc2hhcGUsIGNvbG9yOiAweDAwMCB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oZWFkLmlzT2JzY3VyZWQoc2hvdWxkZXIxUG9pbnQpKSB7XG4gICAgICAgICAgICBvYnNjdXJlZFNoYXBlcy5wdXNoKGFybTEpO1xuICAgICAgICAgICAgb2JzY3VyZWRTaGFwZXMucHVzaChoYW5kMVNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaChhcm0xKTtcbiAgICAgICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaChoYW5kMVNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oZWFkLmlzT2JzY3VyZWQoc2hvdWxkZXIyUG9pbnQpKSB7XG4gICAgICAgICAgICBvYnNjdXJlZFNoYXBlcy5wdXNoKGFybTIpO1xuICAgICAgICAgICAgb2JzY3VyZWRTaGFwZXMucHVzaChoYW5kMlNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaChhcm0yKTtcbiAgICAgICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaChoYW5kMlNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3aCA9IHRoaXMuZ3JpZFVuaXQgLyAxLjc7XG4gICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaCh7IHR5cGU6IC0xLCBzaGFwZTogdGhpcy5nZXREb21lU2hhcGUoZXllMSwgd2gpLCBjb2xvcjogZmFjZUZlYXRDb2xvciwgc3Ryb2tlQ29sb3I6IGhhbmRDb2xvciB9KTtcbiAgICAgICAgdW51YnNjdXJlZFNoYXBlcy5wdXNoKHsgdHlwZTogLTEsIHNoYXBlOiB0aGlzLmdldERvbWVTaGFwZShleWUyLCB3aCksIGNvbG9yOiBmYWNlRmVhdENvbG9yLCBzdHJva2VDb2xvcjogaGFuZENvbG9yIH0pO1xuICAgICAgICB0aGlzLmRyYXdTaGFwZXMob2JzY3VyZWRTaGFwZXMpO1xuICAgICAgICBncmFwaGljcy5maWxsU3R5bGUodGhpcy5jb2xvciwgMSk7XG4gICAgICAgIGNvbnN0IHsgc2hhcGU6IGhlYWQgfSA9IHRoaXMuaGVhZDtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENpcmNsZVNoYXBlKGhlYWQpO1xuICAgICAgICBncmFwaGljcy5maWxsU3R5bGUoZmFjZUZlYXRDb2xvciwgMSk7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uUG9pbnQgJiYgZHAodGhpcy5jb2xsaXNpb25Qb2ludCk7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uUmVjdCAmJiBncmFwaGljcy5zdHJva2VSZWN0KHRoaXMuY29sbGlzaW9uUmVjdC54LCB0aGlzLmNvbGxpc2lvblJlY3QueSwgdGhpcy5jb2xsaXNpb25SZWN0LndpZHRoLCB0aGlzLmNvbGxpc2lvblJlY3QuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5wYXRoICYmIHRoaXMucGF0aC5kcmF3KGdyYXBoaWNzKTtcbiAgICAgICAgLy8gc2V0IHRoZSBsaW5lIHRvIG9yYW5nZVxuICAgICAgICAvLyAgIGdyYXBoaWNzLmxpbmVTdHlsZShsaW5lV2lkdGgsIGhhbmRDb2xvcik7XG4gICAgICAgIHRoaXMucGF0aExpbmUgJiYgZ3JhcGhpY3Muc3Ryb2tlUG9pbnRzKFt0aGlzLnBhdGhMaW5lLmdldFBvaW50QSgpLCB0aGlzLnBhdGhMaW5lLmdldFBvaW50QigpXSk7XG4gICAgICAgIGlmICh0aGlzLnBhdGhUcmlhbmdsZSkge1xuICAgICAgICAgICAgY29uc3QgcDEgPSB0aGlzLnBhdGhUcmlhbmdsZS5nZXRQb2ludCgwKTtcbiAgICAgICAgICAgIGNvbnN0IHAyID0gdGhpcy5wYXRoVHJpYW5nbGUuZ2V0UG9pbnQoMC4zMzMzKTtcbiAgICAgICAgICAgIGNvbnN0IHAzID0gdGhpcy5wYXRoVHJpYW5nbGUuZ2V0UG9pbnQoMC42NjY2KTtcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZVRyaWFuZ2xlKHAxLngsIHAxLnksIHAyLngsIHAyLnksIHAzLngsIHAzLnkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhdGhUcmlhbmdsZTIpIHtcbiAgICAgICAgICAgIGNvbnN0IFAxID0gdGhpcy5wYXRoVHJpYW5nbGUyLmdldFBvaW50KDApO1xuICAgICAgICAgICAgY29uc3QgUDIgPSB0aGlzLnBhdGhUcmlhbmdsZTIuZ2V0UG9pbnQoMC4zMzMzKTtcbiAgICAgICAgICAgIGNvbnN0IFAzID0gdGhpcy5wYXRoVHJpYW5nbGUyLmdldFBvaW50KDAuNjY2Nik7XG4gICAgICAgICAgICB0aGlzLnBhdGhUcmlhbmdsZTIgJiYgZ3JhcGhpY3Muc3Ryb2tlVHJpYW5nbGUoUDEueCwgUDEueSwgUDIueCwgUDIueSwgUDMueCwgUDMueSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5jb2xsaXNpb25SZWN0ICYmIGdyYXBoaWNzLmZpbGxSZWN0U2hhcGUodGhpcy5jb2xsaXNpb25SZWN0KTtcbiAgICAgICAgY29uc3QgY3VydmUgPSBuZXcgUXVhZHJhdGljQmV6aWVyKGJyb3dTdGFydCwgYnJvd21pZGRsZSwgYnJvd0VuZCk7XG4gICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaCh7IHR5cGU6IC0yLCBzaGFwZTogY3VydmUsIGNvbG9yOiBoYW5kQ29sb3IgfSk7XG4gICAgICAgIHRoaXMuZHJhd1NoYXBlcyh1bnVic2N1cmVkU2hhcGVzKTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDAsIDApO1xuICAgIH1cbiAgICBnZXRDbG9zZXN0UG9pbnQocG9pbnQsIHBhdGgpIHtcbiAgICAgICAgbGV0IGNsb3Nlc3QgPSBwYXRoWzBdO1xuICAgICAgICBsZXQgY2xvc2VzdERpc3RhbmNlID0gQmV0d2Vlbihwb2ludC54LCBwb2ludC55LCBwYXRoWzBdLngsIHBhdGhbMF0ueSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBCZXR3ZWVuKHBvaW50LngsIHBvaW50LnksIHBhdGhbaV0ueCwgcGF0aFtpXS55KTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IGNsb3Nlc3REaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGNsb3Nlc3QgPSBwYXRoW2ldO1xuICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbG9zZXN0O1xuICAgIH1cbiAgICBwdXNoQ3JhdGVJbXBsKGRpcmVjdGlvbiwgY3JhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRCbG9ja2VkRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgICAgIGNvbnN0IGdhbWVvYmplY3QgPSB0aGlzO1xuICAgICAgICBjb25zdCBib2R5ID0gZ2FtZW9iamVjdC5ib2R5O1xuICAgICAgICBjb25zdCBkaXIgPSBEaXJlY3Rpb25bZGlyZWN0aW9uXTtcbiAgICAgICAgY29uc3QgdmVsID0gdGhpcy5zcGVlZCAvIDM7XG4gICAgICAgIHN3aXRjaCAoZGlyKSB7XG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvbi51cDpcbiAgICAgICAgICAgICAgICBib2R5LnNldFZlbG9jaXR5WSh2ZWwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uZG93bjpcbiAgICAgICAgICAgICAgICBib2R5LnNldFZlbG9jaXR5WSgtdmVsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLmxlZnQ6XG4gICAgICAgICAgICAgICAgYm9keS5zZXRWZWxvY2l0eVgodmVsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLnJpZ2h0OlxuICAgICAgICAgICAgICAgIGJvZHkuc2V0VmVsb2NpdHlYKC12ZWwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBib2R5LnNldFZlbG9jaXR5KDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFNpZGUoY3JhdGUsIHBhdGhSZWN0KSB7XG4gICAgICAgIGNvbnN0IHNpZGUgPSB0aGlzLmZhY2luZ1NpZGUoY3JhdGUpO1xuICAgICAgICBzd2l0Y2ggKHNpZGUpIHtcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLnVwOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXRoUmVjdC5nZXRMaW5lQygpO1xuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24ucmlnaHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGhSZWN0LmdldExpbmVEKCk7XG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5kb3duOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXRoUmVjdC5nZXRMaW5lQSgpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0aFJlY3QuZ2V0TGluZUIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb2xsb3cocGF0aCkge1xuICAgICAgICAvLyB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICBjb25zdCB7IHBvaW50IH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBnZXRDdXJ2ZUxlbmd0aHMgPSBwYXRoLmdldEN1cnZlTGVuZ3RocygpO1xuICAgICAgICBjb25zdCBsbmcgPSBnZXRDdXJ2ZUxlbmd0aHNbMF07XG4gICAgICAgIGNvbnN0IHRvdGFsTGVuZ3RoID0gZ2V0Q3VydmVMZW5ndGhzW2dldEN1cnZlTGVuZ3Rocy5sZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IHdvcmxkUmVjb3JkID0gSW5maW5pdHk7XG4gICAgICAgIGxldCBjbG9zZXN0UG9pbnQ7XG4gICAgICAgIGNvbnN0IGdldERlbHRhID0gKCkgPT4gdGhpcy5yZXZlcnNlID8gLTAuMDIgOiAwLjAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGguY3VydmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgbGluZSBmcm9tIGN1cnZlXG4gICAgICAgICAgICBjb25zdCBjdXJ2ZSA9IHBhdGguY3VydmVzW2ldO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBjdXJ2ZS5nZXRTdGFydFBvaW50KCk7XG4gICAgICAgICAgICBjb25zdCBlbmQgPSBjdXJ2ZS5nZXRFbmRQb2ludCgpO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBwb2ludC5kaXN0YW5jZShzdGFydCk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCB3b3JsZFJlY29yZCkge1xuICAgICAgICAgICAgICAgIHdvcmxkUmVjb3JkID0gZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgY2xvc2VzdFBvaW50ID0gc3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbmV3IExpbmUoc3RhcnQueCwgc3RhcnQueSwgZW5kLngsIGVuZC55KTtcbiAgICAgICAgICAgIGlmIChQaGFzZXIuR2VvbS5JbnRlcnNlY3RzLlBvaW50VG9MaW5lKHBvaW50LCBsaW5lLCB0aGlzLmdyaWRVbml0ICogMS4yNSkpIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGxpbmUgYmFzZWQgb24gdGhlIHBvaW50XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9ICgoaSAqIGxuZykgKyBCZXR3ZWVuKHBvaW50LngsIHBvaW50LnksIHN0YXJ0LngsIHN0YXJ0LnkpKSAvIHRvdGFsTGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJldmVyc2UgPyBpID4gMCA6IGkgPCBwYXRoLmN1cnZlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHBhdGguZ2V0UG9pbnQocGVyY2VudGFnZSArIGdldERlbHRhKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZWsodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB3ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIHBhdGhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlcmNlbnRhZ2UgPiAwLjk2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJldmVyc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChwZXJjZW50YWdlIDwgMC4wNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXZlcnNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gcGF0aC5nZXRQb2ludChwZXJjZW50YWdlICsgZ2V0RGVsdGEoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vlayh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBzZWVrIHRoZSBjbG9zZXN0IHBvaW50IG9uIHRoZSBwYXRoXG4gICAgICAgICAgICAgICAgdGhpcy5zZWVrKGNsb3Nlc3RQb2ludCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZnVuY3Rpb24gdGhhdCBjb21wYXJlcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvaW50cyBhbmQgYSByZWZlcmVuY2UgcG9pbnQgYW5kIHJldHVybnMgdGhlIGZ1cnRoZXN0IHBvaW50XG4gICAgZ2V0RnVydGhlc3RQb2ludChhLCBiLCBwb2ludCkge1xuICAgICAgICAvLyBnZXQgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgY29uc3QgZGlzdGFuY2VBID0gcG9pbnQuZGlzdGFuY2UoYSk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlQiA9IHBvaW50LmRpc3RhbmNlKGIpO1xuICAgICAgICAvLyByZXR1cm4gdGhlIGZ1cnRoZXN0IHBvaW50XG4gICAgICAgIHJldHVybiBkaXN0YW5jZUEgPiBkaXN0YW5jZUIgPyBiIDogYTtcbiAgICB9XG4gICAgcmVjdDJQYXRoKHBhdGhSZWN0KSB7XG4gICAgICAgIC8vIHR1cm4gcmVjdCBpbnRvIHBhdGhcbiAgICAgICAgbGV0IHBhdGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb3JuZXIgPSBwb2ludDJWZWMocGF0aFJlY3QuZ2V0UG9pbnQoMC4yNSAqIGkpKTtcbiAgICAgICAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IG5ldyBQYXRoKGNvcm5lci54LCBjb3JuZXIueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRoLmxpbmVUbyhjb3JuZXIueCwgY29ybmVyLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbiAgICBzaGFwZTJQYXRoKHBvaW50cykge1xuICAgICAgICAvLyB0dXJuIGNpcmNsZSBpbnRvIHBhdGhcbiAgICAgICAgbGV0IHBhdGg7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IHBvaW50c1tpXTtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IG5ldyBQYXRoKHBvaW50WzBdLCBwb2ludFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRoLmxpbmVUbyhwb2ludFswXSwgcG9pbnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbiAgICBzZWVrKHRhcmdldCkge1xuICAgICAgICAvLyBzZXQgdGhlIHZlbG9jaXR5IHRvIHRoZSB0YXJnZXRcbiAgICAgICAgY29uc3QgZ2FtZW9iamVjdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBnYW1lb2JqZWN0LmJvZHk7XG4gICAgICAgIC8vIGdldCB0aGUgY2VudGVyIG9mIHRoZSBib2R5XG4gICAgICAgIGNvbnN0IHsgcG9pbnQ6IGNlbnRlciB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgZGlyID0gdGFyZ2V0LmNsb25lKCkuc3VidHJhY3QoY2VudGVyKTtcbiAgICAgICAgZGlyLm5vcm1hbGl6ZSgpO1xuICAgICAgICBkaXIuc2NhbGUodGhpcy5zcGVlZCk7XG4gICAgICAgIC8vIHRoaXMuY29sbGlzaW9uUG9pbnQgPSBwb2ludDJWZWMoY2VudGVyKTtcbiAgICAgICAgYm9keS5zZXRWZWxvY2l0eShkaXIueCwgZGlyLnkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdGggYXMgUE1hdGggfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHsgRGlyZWN0aW9uLCBsaW5lSW50ZXJzZWN0IH0gZnJvbSAnLi4vaGVscGVycyc7XG52YXIgVmVjdG9yMiA9IFBoYXNlci5NYXRoLlZlY3RvcjI7XG5pbXBvcnQgV2FsbCBmcm9tICcuL1dhbGwnO1xuZXhwb3J0IGRlZmF1bHQgKEJhc2UpID0+IGNsYXNzIGV4dGVuZHMgQmFzZSB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5kcCA9IChwKSA9PiB0aGlzLmdyYXBoaWNzLmZpbGxQb2ludChwLngsIHAueSwgdGhpcy5ncmlkVW5pdCAvIDIpO1xuICAgICAgICB0aGlzLmdldFhGYWNlSW5WaWV3ID0gKCkgPT4gdGhpcy5wYXN0Q2VudGVyKCd4JylcbiAgICAgICAgICAgID8gdGhpcy5nZXRGYWNlQnlEaXJlY3Rpb24oRGlyZWN0aW9uLmxlZnQpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0RmFjZUJ5RGlyZWN0aW9uKERpcmVjdGlvbi5yaWdodCk7XG4gICAgICAgIHRoaXMuZ2V0WUZhY2VJblZpZXcgPSAoKSA9PiB0aGlzLnBhc3RDZW50ZXIoJ3knKVxuICAgICAgICAgICAgPyB0aGlzLmdldEZhY2VCeURpcmVjdGlvbihEaXJlY3Rpb24udXApXG4gICAgICAgICAgICA6IHRoaXMuZ2V0RmFjZUJ5RGlyZWN0aW9uKERpcmVjdGlvbi5kb3duKTtcbiAgICAgICAgdGhpcy5wYXN0Q2VudGVyID0gKGF4aXMpID0+IHRoaXNbYXhpc10gPiB0aGlzLnZhbmlzaFBvaW50W2F4aXNdO1xuICAgICAgICBjb25zdCBzY2VuZSA9IGFyZ3NbMF0ueCA/IGFyZ3NbMF0uc2NlbmUgOiBhcmdzWzBdOyAvLyA/XG4gICAgICAgIGNvbnN0IHggPSBhcmdzWzFdO1xuICAgICAgICBjb25zdCB5ID0gYXJnc1syXTtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHNjZW5lLmFkZC5ncmFwaGljcygpO1xuICAgICAgICB0aGlzLnBvaW50ID0gbmV3IFBNYXRoLlZlY3RvcjIoeCwgeSk7XG4gICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcbiAgICAgICAgY29uc3QgeyBwaHlzaWNzOiB7IHdvcmxkOiB7IGJvdW5kczogeyBsZWZ0LCByaWdodCwgY2VudGVyWCwgY2VudGVyWSB9IH0gfSB9ID0gc2NlbmU7XG4gICAgICAgIGNvbnN0IHZhbCA9IChsZWZ0IC0gcmlnaHQpO1xuICAgICAgICB0aGlzLnZhbmlzaFBvaW50ID0gbmV3IFBNYXRoLlZlY3RvcjIoY2VudGVyWCwgY2VudGVyWSk7XG4gICAgICAgIHRoaXMuZ3JpZFVuaXQgPSBzY2VuZS5kYXRhLmdldCgnZ3JpZFVuaXQnKTtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3RNYXAgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBXYWxsKSB7XG4gICAgICAgICAgICBjb25zdCB3ID0gYXJnc1szXTtcbiAgICAgICAgICAgIGNvbnN0IGggPSBhcmdzWzRdO1xuICAgICAgICAgICAgY29uc3QgZCA9IGFyZ3NbNV07XG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBuZXcgVmVjdG9yMih3LCBoKTtcbiAgICAgICAgICAgIGNvbnN0IHdydCA9ICh0aGlzLmRpbWVuc2lvbnMueCAvIGQpO1xuICAgICAgICAgICAgY29uc3QgaHJ0ID0gKHRoaXMuZGltZW5zaW9ucy55IC8gZCk7XG4gICAgICAgICAgICBjb25zdCBhc3BlY3RIID0gaCA8IHcgPyB2YWwgKiBocnQgOiB2YWwgKiBocnQ7XG4gICAgICAgICAgICBjb25zdCBhc3BlY3RXID0gaCA8IHcgPyB2YWwgKiB3cnQgOiB2YWwgKiB3cnQ7XG4gICAgICAgICAgICB0aGlzLnNldE1lYXN1cmVQb2ludHMoYXNwZWN0VywgYXNwZWN0SCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmtleSA9IGFyZ3NbM107XG4gICAgICAgICAgICAvLyB0aGlzIG15c3RlcnkgdmFsdWUgd2lsbCB0YWtlIHVzIHRvIHRoZSBlZGdlIG9mIHRoZSBjdWJlXG4gICAgICAgICAgICBjb25zdCB4eSA9ICh0aGlzLmdyaWRVbml0ICogMi42KSAqIDQ7XG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBuZXcgVmVjdG9yMih4eSwgeHkpO1xuICAgICAgICAgICAgdGhpcy5zZXRNZWFzdXJlUG9pbnRzKHZhbCwgdmFsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgY2VudGVyQm90dG9tKCkge1xuICAgICAgICBpZiAoIXRoaXMudmVydGljZXNbOV0pIHtcbiAgICAgICAgICAgIHRoaXMudmVydGljZXNbOV0gPSB0aGlzLmNhbGNWZXJ0ZXhQb3MoMykubGVycCh0aGlzLmNhbGNWZXJ0ZXhQb3MoNCksIDAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmVydGljZXNbOV07XG4gICAgfVxuICAgIGdldCBjZW50ZXJDZW50ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy52ZXJ0aWNlc1s4LjVdKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzWzguNV0gPSB0aGlzLmNlbnRlckJvdHRvbS5jbG9uZSgpLmxlcnAodGhpcy5wb2ludCwgMC41KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1s4LjVdO1xuICAgIH1cbiAgICBwcmVkcmF3KCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgeCwgeSwgZGltZW5zaW9ucywgdmFuaXNoUG9pbnQsIG1wIH0gPSB0aGlzO1xuICAgICAgICB0aGlzLnBvaW50LnggPSB4O1xuICAgICAgICB0aGlzLnBvaW50LnkgPSB5O1xuICAgICAgICBjb25zdCB4aGFsZiA9IGRpbWVuc2lvbnMueCAvIDI7XG4gICAgICAgIGNvbnN0IHloYWxmID0gZGltZW5zaW9ucy55IC8gMjtcbiAgICAgICAgLy8gZWFjaCBjb3JuZXIgKHZlcnRpY2UpIG9mIHRoZSBjdWJlIGhhcyBiZWVuIGdpdmVuIGEgbnVtYmVyLiBBIHBpY3R1cmUgcmVhbGx5IGRvZXMgc3BlYWsgYSAxMDAwIHdvcmRzOlxuICAgICAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Qb2x5Z29uX21lc2gjL21lZGlhL0ZpbGU6VmVydGV4LVZlcnRleF9NZXNoZXNfKFZWKS5wbmdcbiAgICAgICAgdGhpcy52ZXJ0aWNlc1sxXSA9IG5ldyBQTWF0aC5WZWN0b3IyKHggLSB4aGFsZiwgeSArIHloYWxmKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlc1syXSA9IG5ldyBQTWF0aC5WZWN0b3IyKHggKyB4aGFsZiwgeSArIHloYWxmKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlc1s1XSA9IG5ldyBQTWF0aC5WZWN0b3IyKHggLSB4aGFsZiwgeSAtIHloYWxmKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlc1s2XSA9IG5ldyBQTWF0aC5WZWN0b3IyKHggKyB4aGFsZiwgeSAtIHloYWxmKTtcbiAgICAgICAgLy8gd2VyZSBnb2luZyB0byBjYWxjdWxhdGUgdGhlc2UgaWYgbmVlZGVkLiBidXQgd2UgbmVlZCB0byBnZXQgcmlkIG9mIGFueSBvbGQgdmFsdWVzIGZyb20gdGhlIHByZXZpb3VzIHBvc2l0aW9uXG4gICAgICAgIGRlbGV0ZSB0aGlzLnZlcnRpY2VzWzBdO1xuICAgICAgICBkZWxldGUgdGhpcy52ZXJ0aWNlc1szXTtcbiAgICAgICAgZGVsZXRlIHRoaXMudmVydGljZXNbNF07XG4gICAgICAgIGRlbGV0ZSB0aGlzLnZlcnRpY2VzWzddO1xuICAgICAgICBkZWxldGUgdGhpcy52ZXJ0aWNlc1s4LjVdOyAvLyBjZW50ZXJcbiAgICAgICAgZGVsZXRlIHRoaXMudmVydGljZXNbOV07XG4gICAgfVxuICAgIGRyYXdJblZpZXcoKSB7XG4gICAgICAgIHRoaXMuZHJhd1ZlcnRpY2VzKHRoaXMuZ2V0WUZhY2VJblZpZXcoKSk7XG4gICAgICAgIHRoaXMuZHJhd1ZlcnRpY2VzKHRoaXMuZ2V0WEZhY2VJblZpZXcoKSk7XG4gICAgfVxuICAgIGNhbGNWZXJ0ZXhQb3MobnVtKSB7XG4gICAgICAgIGNvbnN0IHsgdmVydGljZXM6IHYsIHZhbmlzaFBvaW50LCBpbnRlcnNlY3RNYXAgfSA9IHRoaXM7XG4gICAgICAgIGlmICghdltudW1dKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFwID0gaW50ZXJzZWN0TWFwID09PSBudWxsIHx8IGludGVyc2VjdE1hcCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW50ZXJzZWN0TWFwW251bV07XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBsaW5lSW50ZXJzZWN0KHZhbmlzaFBvaW50LCB2W2ltYXAuaWR4MV0sIHZbaW1hcC5pZHgyXSwgaW1hcC5tcCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdltudW1dID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2W251bV07XG4gICAgfVxuICAgIGRyYXdWZXJ0aWNlcyhwb2ludHMpIHtcbiAgICAgICAgdGhpcy5kcmF3UG9pbnRzKHBvaW50c1swXSwgcG9pbnRzWzFdLCBwb2ludHNbMl0sIHBvaW50c1szXSk7XG4gICAgfVxuICAgIGdldEZhY2VCeURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgeyB2ZXJ0aWNlczogdiB9ID0gdGhpcztcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLnVwOlxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY1ZlcnRleFBvcyg0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNWZXJ0ZXhQb3MoNyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFt2WzVdLCB2WzZdLCB2WzRdLCB2WzddXTtcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLmRvd246XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjVmVydGV4UG9zKDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsY1ZlcnRleFBvcygzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3ZbMV0sIHZbMl0sIHZbMF0sIHZbM11dO1xuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24ubGVmdDpcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNWZXJ0ZXhQb3MoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjVmVydGV4UG9zKDQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbdlsxXSwgdls1XSwgdlswXSwgdls0XV07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY1ZlcnRleFBvcygzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNWZXJ0ZXhQb3MoNyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFt2WzJdLCB2WzZdLCB2WzNdLCB2WzddXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNZWFzdXJlUG9pbnRzKG9mZnNldFgsIG9mZnNldFkpIHtcbiAgICAgICAgLy8gbWVhc3VyZXBvaW50cyBhcmUgcGxhY2VkIG9uIHRoZSBob3Jpem9uIGxpbmUgb2YgdGhlIHZhbmlzaHBvaW50LFxuICAgICAgICAvLyB0aGV5IGFyZSBzcGFjZWQgZXF1YWxseSBhcGFydCB3aXRoIHRoZSB2YW5pc2hwb2ludCBpbiB0aGUgZXhhY3QgY2VudGVyXG4gICAgICAgIC8vIHdoZW4geW91IGRyYXcgYSBsaW5lIGZyb20gdGhlIG1lYXN1cmVwb2ludCB0b3dhcmRzIHRoZSBjZW50ZXIgb2YgdGhlIGN1YmUgaXQgd2lsbCBpbnRlcnNlY3QgMiBvcHBvc2luZyBjb3JuZXJzIG9mIGEgZmFjZSBvbiB0aGF0IGN1YmVcbiAgICAgICAgLy8gd2hlbiBib3RoIG1lYXN1cmVwb2ludHMgb2YgdGhlIHNhbWUgYXhpcyBhcmUgZHJhd24sXG4gICAgICAgIC8vIGFuIFggd2lsbCB0aGVuIGJlIGRyYXduIG9uIHRoYXQgZmFjZSwgc3RhcnRpbmcgZnJvbSB0aGUgY29ybmVycyBhbmQgaW50ZXJzZWN0aW5nIGluIHRoZSBjZW50ZXJcbiAgICAgICAgLy9cbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgZ2FtZSB3b3JsZCBpcyBub3QgYSBwZXJmZWN0IHNxdWFyZS4gd2UgbmVlZCB0byBjb21wZW5zYXRlIGZvciB0aGUgYXNwZWN0IHJhdGlvLlxuICAgICAgICB0aGlzLk1lYXN1cmVQb2ludFkxID0gbmV3IFZlY3RvcjIodGhpcy52YW5pc2hQb2ludC54LCB0aGlzLnZhbmlzaFBvaW50LnkgKyBvZmZzZXRZKTtcbiAgICAgICAgdGhpcy5NZWFzdXJlUG9pbnRZMiA9IG5ldyBWZWN0b3IyKHRoaXMudmFuaXNoUG9pbnQueCwgdGhpcy52YW5pc2hQb2ludC55IC0gb2Zmc2V0WSk7XG4gICAgICAgIHRoaXMuTWVhc3VyZVBvaW50WDEgPSBuZXcgVmVjdG9yMih0aGlzLnZhbmlzaFBvaW50LnggKyBvZmZzZXRYLCB0aGlzLnZhbmlzaFBvaW50LnkpO1xuICAgICAgICB0aGlzLk1lYXN1cmVQb2ludFgyID0gbmV3IFZlY3RvcjIodGhpcy52YW5pc2hQb2ludC54IC0gb2Zmc2V0WCwgdGhpcy52YW5pc2hQb2ludC55KTtcbiAgICAgICAgY29uc3QgY3JlYXRlU3RydWN0ID0gKGlkeDEsIGlkeDIsIG1wKSA9PiAoeyBpZHgxLCBpZHgyLCBtcCB9KTtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3RNYXBbMF0gPSBjcmVhdGVTdHJ1Y3QoMSwgNSwgdGhpcy5NZWFzdXJlUG9pbnRZMik7XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0TWFwWzNdID0gY3JlYXRlU3RydWN0KDIsIDEsIHRoaXMuTWVhc3VyZVBvaW50WDIpO1xuICAgICAgICB0aGlzLmludGVyc2VjdE1hcFs0XSA9IGNyZWF0ZVN0cnVjdCg1LCAxLCB0aGlzLk1lYXN1cmVQb2ludFkxKTtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3RNYXBbN10gPSBjcmVhdGVTdHJ1Y3QoNiwgMiwgdGhpcy5NZWFzdXJlUG9pbnRZMSk7XG4gICAgfVxuICAgIGRyYXdQb2ludHModG9wLCBib3R0b20sIGZsb29yVG9wLCBmbG9vckJvdHRvbSkge1xuICAgICAgICBjb25zdCB7IGdyYXBoaWNzIH0gPSB0aGlzO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlzLmxpbmVXaWR0aCwgMHgwMDAsIHRoaXMuYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5maWxsUG9pbnRzKFt0b3AsIGJvdHRvbSwgZmxvb3JCb3R0b20sIGZsb29yVG9wXSwgdHJ1ZSk7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgY29sbGlkZXNPbkF4ZXMsIGdldEFyY1NoYXBlLCBpbXBhc3NhYmxlLCBwb2ludDJWZWMsIHNldFBvc2l0aW9uLCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IENvbGxpZGVzV2l0aE9iamVjdHMgZnJvbSAnLi9Db2xsaWRlc1dpdGhPYmplY3RzJztcbnZhciBDaXJjbGUgPSBQaGFzZXIuR2VvbS5DaXJjbGU7XG52YXIgVmVjdG9yMiA9IFBoYXNlci5NYXRoLlZlY3RvcjI7XG52YXIgQmV0d2VlblBvaW50cyA9IFBoYXNlci5NYXRoLkFuZ2xlLkJldHdlZW5Qb2ludHM7XG52YXIgTm9ybWFsaXplID0gUGhhc2VyLk1hdGguQW5nbGUuTm9ybWFsaXplO1xuaW1wb3J0IFBlcnNwZWN0aXZlT2JqZWN0IGZyb20gJy4uL2dhbWVvYmplY3RzL1BlcnNwZWN0aXZlTWl4aW4nO1xuaW1wb3J0IFNwaGVyZUNsYXNzIGZyb20gJy4vU3BoZXJlJztcbnZhciBDSVJDTEUgPSBQaGFzZXIuR2VvbS5DSVJDTEU7XG52YXIgTElORSA9IFBoYXNlci5HZW9tLkxJTkU7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDb2xsaWRlc1dpdGhPYmplY3RzIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIGdyaWRVbml0LCBjcmF0ZXMsIHNpemUsIHNjYWxlKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZy5zY2VuZSwgY29uZmlnLngsIGNvbmZpZy55LCBzaXplLCBzaXplKTtcbiAgICAgICAgdGhpcy5wYWNlID0gMzA7XG4gICAgICAgIHRoaXMuZmFjdG9yID0gKHRoaXMucGFjZSAvIDEwKSAqIDIuNTtcbiAgICAgICAgdGhpcy5jcmF0ZUNvbGxpZGVyID0gKG1lLCBjcmF0ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wdXNoZWRDcmF0ZSA9IGNyYXRlO1xuICAgICAgICAgICAgaWYgKCFjcmF0ZS5wbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBjcmF0ZS5wbGF5ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDcmF0ZUNvbGxpc29uKGNyYXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYm9keSA9IHRoaXMuYm9keTtcbiAgICAgICAgYm9keS5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSk7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBjb25maWcuc2NlbmU7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5jb2xvciA9IDBYRUZDQUI3O1xuICAgICAgICBjb25zdCBzaGFkb3dDb2xvciA9IDBYMDMxOTIwO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLnNoYWRvdyA9IGNvbmZpZy5zY2VuZS5hZGQuY2lyY2xlKHgsIHksIHNpemUsIHNoYWRvd0NvbG9yLCAwLjQpO1xuICAgICAgICBjb25zdCBxdWFydGVyID0gc2l6ZSAqIDEuODtcbiAgICAgICAgdGhpcy5zaG9lMUNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnN0ZXAgPSArMTtcbiAgICAgICAgdGhpcy5ub3cgPSAwO1xuICAgICAgICBjb25zdCBTcGhlcmUgPSBQZXJzcGVjdGl2ZU9iamVjdChTcGhlcmVDbGFzcyk7XG4gICAgICAgIHRoaXMuaGVhZCA9IG5ldyBTcGhlcmUoY29uZmlnLnNjZW5lLCB4LCB5LCBxdWFydGVyLCBxdWFydGVyLCBxdWFydGVyLCB0aGlzLmNvbG9yKTtcbiAgICAgICAgdGhpcy5oZWFkLnNldERlcHRoKDIpO1xuICAgICAgICBjb25zdCBzaG9lQ29sb3IgPSAweEFENjYxRjtcbiAgICAgICAgY29uc3Qgc2hvZVN0eWxlID0gW3RoaXMuc2l6ZSAvIDUsIDB4NjYzMzAwLCAxXTtcbiAgICAgICAgdGhpcy5zaG9lMSA9IGNvbmZpZy5zY2VuZS5hZGQucmV4Um91bmRSZWN0YW5nbGUoeCwgeSwgc2l6ZSAqIDIsIHNpemUsIHNpemUgLyAyLCBzaG9lQ29sb3IpO1xuICAgICAgICB0aGlzLnNob2UxLnNldFN0cm9rZVN0eWxlKC4uLnNob2VTdHlsZSk7XG4gICAgICAgIHRoaXMuc2hvZTEuc2V0U2NhbGUoMC41KTtcbiAgICAgICAgdGhpcy5zaG9lMiA9IGNvbmZpZy5zY2VuZS5hZGQucmV4Um91bmRSZWN0YW5nbGUoeCwgeSwgc2l6ZSAqIDIsIHNpemUsIHNpemUgLyAyLCBzaG9lQ29sb3IpO1xuICAgICAgICB0aGlzLnNob2UyLnNldFNjYWxlKDAuNSk7XG4gICAgICAgIHRoaXMuc2hvZTIuc2V0U3Ryb2tlU3R5bGUoLi4uc2hvZVN0eWxlKTtcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBuZXcgQ2lyY2xlKHgsIHksIHNpemUgKiAxLjEpO1xuICAgICAgICB0aGlzLnBhdGhIZWxwZXIgPSBuZXcgQ2lyY2xlKHgsIHksIHNpemUpO1xuICAgICAgICB0aGlzLmZlZXRDaXJjbGUgPSBuZXcgQ2lyY2xlKHgsIHksIHNpemUpO1xuICAgICAgICB0aGF0LmFkZCh0aGlzLnNoYWRvdyk7XG4gICAgICAgIHRoYXQuYWRkKHRoaXMuc2hvZTEpO1xuICAgICAgICB0aGF0LmFkZCh0aGlzLnNob2UyKTtcbiAgICAgICAgdGhpcy5zaG9lMS5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuc2hvZTIuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmNyYXRlcyA9IGNyYXRlcy5jaGlsZHJlbi5nZXRBcnJheSgpO1xuICAgICAgICB0aGlzLnNwZWVkID0gZ3JpZFVuaXQgKiB0aGlzLnBhY2U7XG4gICAgICAgIHRoaXMuZ3JpZFVuaXQgPSBncmlkVW5pdCAvIDEwO1xuICAgICAgICB0aGlzLmN1cnNvcktleXMgPSBjb25maWcuc2NlbmUuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuICAgICAgICB0aGlzLnB1c2hDcmF0ZSA9IHRoaXMucHVzaENyYXRlSW1wbDtcbiAgICAgICAgdGhpcy53b3JsZEJvdW5kcyA9IGNvbmZpZy5zY2VuZS5waHlzaWNzLndvcmxkLmJvdW5kcztcbiAgICB9XG4gICAgaXNNb3ZpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0lucHV0O1xuICAgIH1cbiAgICByZXNldFBsYXllck9uQ3JhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnB1c2hlZENyYXRlICYmIHRoaXMucHVzaGVkQ3JhdGUucGxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlZENyYXRlLnBsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wdXNoZWRDcmF0ZS5lbmVteSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wdXNoZWRDcmF0ZSA9IG51bGw7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5oYXNJbnB1dCA9IGZhbHNlO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhhdC5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGF0LmdyYXBoaWNzLmxpbmVTdHlsZSgpO1xuICAgICAgICBjb25zdCBvYnNjdXJlZFNoYXBlcyA9IFtdO1xuICAgICAgICBjb25zdCB1bnVic2N1cmVkU2hhcGVzID0gW107XG4gICAgICAgIHRoYXQucHJlZHJhdygpO1xuICAgICAgICBjb25zdCB7IHgsIHksIGRwLCBncmFwaGljcywgcG9pbnQsIGNlbnRlckJvdHRvbSwgY2VudGVyQ2VudGVyLCB2YW5pc2hQb2ludCwgcGFzdENlbnRlciB9ID0gdGhpcztcbiAgICAgICAgc2V0UG9zaXRpb24odGhpcy5wYXRoSGVscGVyLCB0aGF0KTtcbiAgICAgICAgc2V0UG9zaXRpb24odGhpcy5oZWFkLCB0aGF0KTtcbiAgICAgICAgc2V0UG9zaXRpb24odGhpcy5jZW50ZXIsIGNlbnRlckNlbnRlcik7XG4gICAgICAgIHNldFBvc2l0aW9uKHRoaXMuZmVldENpcmNsZSwgY2VudGVyQm90dG9tKTtcbiAgICAgICAgdGhpcy5oZWFkLnVwZGF0ZSgpO1xuICAgICAgICBjb25zdCB7IGVxdWF0b3IsIHBpMjogYWxsIH0gPSB0aGlzLmhlYWQ7XG4gICAgICAgIGNvbnN0IHsgY3VydmU6IGV5ZVRvcExpbmUgfSA9IHRoaXMuaGVhZC5nZXRTbGljZSgneCcsIDAuOCk7XG4gICAgICAgIGNvbnN0IHsgY3VydmU6IGV5ZUNlbnRlckxpbmUsIGlzT2JzY3VyZWQgfSA9IHRoaXMuaGVhZC5nZXRTbGljZSgneCcsIDAuNjUpO1xuICAgICAgICBjb25zdCB7IGN1cnZlOiBleWVCb3R0b21MaW5lIH0gPSB0aGlzLmhlYWQuZ2V0U2xpY2UoJ3gnLCAwLjQpO1xuICAgICAgICB0aGF0LnNldENoaWxkUG9zaXRpb24odGhpcy5zaGFkb3csIGNlbnRlckJvdHRvbS54LCBjZW50ZXJCb3R0b20ueSk7XG4gICAgICAgIHRoYXQuc2hhZG93LmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5zaG9lMS5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuc2hvZTIuZGVwdGggPSAwO1xuICAgICAgICBncmFwaGljcy5zZXREZXB0aCgyKTtcbiAgICAgICAgY29uc3QgYm9keUFuZ2xlID0gdGhpcy5nZXRCb2R5QW5nbGUoKTtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gTm9ybWFsaXplKGJvZHlBbmdsZSkgLyBhbGw7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlQW5nbGUgPSBOb3JtYWxpemUoQmV0d2VlblBvaW50cyh2YW5pc2hQb2ludCwgcG9pbnQpKSAvIGFsbDtcbiAgICAgICAgdGhhdC5zZXRDaGlsZFJvdGF0aW9uKHRoaXMuc2hvZTEsIGJvZHlBbmdsZSk7XG4gICAgICAgIHRoYXQuc2V0Q2hpbGRSb3RhdGlvbih0aGlzLnNob2UyLCBib2R5QW5nbGUpO1xuICAgICAgICBjb25zdCByaWdodFNob3VsZGVyID0gKGRpcmVjdGlvbiArIDAuMjUpICUgMTtcbiAgICAgICAgY29uc3QgbGVmdFNob3VsZGVyID0gKGRpcmVjdGlvbiArIDAuNzUpICUgMTtcbiAgICAgICAgY29uc3Qgc2hvdWxkZXIxUG9pbnQgPSBlcXVhdG9yLmdldFBvaW50KHJlbGF0aXZlQW5nbGUgLSBkaXJlY3Rpb24gLSAwLjI1ICUgMSk7XG4gICAgICAgIGNvbnN0IHNob3VsZGVyMlBvaW50ID0gZXF1YXRvci5nZXRQb2ludChyZWxhdGl2ZUFuZ2xlIC0gZGlyZWN0aW9uIC0gMC43NSAlIDEpO1xuICAgICAgICBjb25zdCBoYW5kMSA9IG5ldyBWZWN0b3IyKENpcmNsZS5HZXRQb2ludCh0aGlzLmNlbnRlciwgcmlnaHRTaG91bGRlcikpO1xuICAgICAgICBjb25zdCBoYW5kMiA9IG5ldyBWZWN0b3IyKENpcmNsZS5HZXRQb2ludCh0aGlzLmNlbnRlciwgbGVmdFNob3VsZGVyKSk7XG4gICAgICAgIGdyYXBoaWNzLmZpbGxTdHlsZSh0aGlzLmNvbG9yKTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKHRoaXMuY29sb3IsIDEpO1xuICAgICAgICBncmFwaGljcy5maWxsUGF0aCgpO1xuICAgICAgICBjb25zdCBub3NlID0gcmVsYXRpdmVBbmdsZSAtIGRpcmVjdGlvbjtcbiAgICAgICAgY29uc3QgZXllMUFuZ2xlID0gbm9zZSAtIDAuOTQgJSAxO1xuICAgICAgICBjb25zdCBleWUyQW5nbGUgPSBub3NlICsgMC45NCAlIDE7XG4gICAgICAgIGNvbnN0IGV5ZTFBbmdsZUIgPSBub3NlIC0gMC45NCAlIDE7XG4gICAgICAgIGNvbnN0IGV5ZTJBbmdsZUIgPSBub3NlICsgMC45NCAlIDE7XG4gICAgICAgIGNvbnN0IGNoZWVrMSA9IG5vc2UgLSAwLjEyICUgMTtcbiAgICAgICAgY29uc3QgY2hlZWsyID0gbm9zZSArIDAuMTIgJSAxO1xuICAgICAgICBjb25zdCBmYWNlRmVhdENvbG9yID0gMHhGRkZGRkY7XG4gICAgICAgIGNvbnN0IGV5ZTFCb3R0b20gPSBleWVCb3R0b21MaW5lLmdldFBvaW50KGV5ZTFBbmdsZUIpO1xuICAgICAgICBjb25zdCBleWUyQm90dG9tID0gZXllQm90dG9tTGluZS5nZXRQb2ludChleWUyQW5nbGVCKTtcbiAgICAgICAgY29uc3QgZXllVG9wID0gZXllVG9wTGluZS5nZXRQb2ludChleWUxQW5nbGUpO1xuICAgICAgICBjb25zdCBleWUxQ2VudGVyID0gZXllQ2VudGVyTGluZS5nZXRQb2ludChleWUxQW5nbGUpO1xuICAgICAgICBjb25zdCBleWUyQ2VudGVyID0gZXllQ2VudGVyTGluZS5nZXRQb2ludChleWUyQW5nbGUpO1xuICAgICAgICBjb25zdCBub3NlUG9pbnQgPSBleWVCb3R0b21MaW5lLmdldFBvaW50KG5vc2UpO1xuICAgICAgICBjb25zdCBtb3V0aFBvaW50ID0gZXF1YXRvci5nZXRQb2ludChub3NlKS5sZXJwKG5vc2VQb2ludCwgMC40KTtcbiAgICAgICAgY29uc3QgZXllMURpc3RhbmNlID0gZXllVG9wLmRpc3RhbmNlKGV5ZTFCb3R0b20pO1xuICAgICAgICBjb25zdCBleWUyRGlzdGFuY2UgPSBleWVUb3AuZGlzdGFuY2UoZXllMkJvdHRvbSk7XG4gICAgICAgIGNvbnN0IGxpbmUxID0gMi4yIC0gKGV5ZTFEaXN0YW5jZSAvIHRoaXMuZ3JpZFVuaXQpO1xuICAgICAgICBjb25zdCBsaW5lMiA9IDEuOCAtIChleWUyRGlzdGFuY2UgLyB0aGlzLmdyaWRVbml0KTtcbiAgICAgICAgY29uc3QgZXllV2lkdGggPSB0aGlzLmdyaWRVbml0ICogMC41O1xuICAgICAgICBjb25zdCBpcmlzU2l6ZSA9IHRoaXMuZ3JpZFVuaXQgKiAwLjI1O1xuICAgICAgICBjb25zdCBleWUxID0gZ2V0QXJjU2hhcGUoZXllMUNlbnRlciwgZXllV2lkdGgsIGxpbmUyLCBsaW5lMSwgYm9keUFuZ2xlKTtcbiAgICAgICAgY29uc3QgZXllMUlyaXMgPSBnZXRBcmNTaGFwZShleWUxQ2VudGVyLCBpcmlzU2l6ZSwgbGluZTIsIGxpbmUxLCBib2R5QW5nbGUpO1xuICAgICAgICBjb25zdCBleWUyID0gZ2V0QXJjU2hhcGUoZXllMkNlbnRlciwgZXllV2lkdGgsIGxpbmUxLCBsaW5lMiwgYm9keUFuZ2xlKTtcbiAgICAgICAgY29uc3QgZXllMklyaXMgPSBnZXRBcmNTaGFwZShleWUyQ2VudGVyLCBpcmlzU2l6ZSwgbGluZTEsIGxpbmUyLCBib2R5QW5nbGUpO1xuICAgICAgICBjb25zdCBpcmlzQ29sb3IgPSAweDM1NzM4ODtcbiAgICAgICAgdGhpcy53YWxrKGRpcmVjdGlvbik7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IHRoaXMuZ3JpZFVuaXQgLyAxMDtcbiAgICAgICAgdW51YnNjdXJlZFNoYXBlcy5wdXNoKHsgdHlwZTogLTEsIHNoYXBlOiBleWUxLCBjb2xvcjogMHhGRkZGRkYsIHN0cm9rZUNvbG9yOiAweDAwMCwgbGluZVdpZHRoIH0pO1xuICAgICAgICB1bnVic2N1cmVkU2hhcGVzLnB1c2goeyB0eXBlOiAtMSwgc2hhcGU6IGV5ZTFJcmlzLCBjb2xvcjogaXJpc0NvbG9yLCBzdHJva2VDb2xvcjogMHgwMDAsIGxpbmVXaWR0aCB9KTtcbiAgICAgICAgdW51YnNjdXJlZFNoYXBlcy5wdXNoKHsgdHlwZTogLTEsIHNoYXBlOiBleWUyLCBjb2xvcjogMHhGRkZGRkYsIHN0cm9rZUNvbG9yOiAweDAwMCwgbGluZVdpZHRoIH0pO1xuICAgICAgICB1bnVic2N1cmVkU2hhcGVzLnB1c2goeyB0eXBlOiAtMSwgc2hhcGU6IGV5ZTJJcmlzLCBjb2xvcjogaXJpc0NvbG9yLCBzdHJva2VDb2xvcjogMHgwMDAsIGxpbmVXaWR0aCB9KTtcbiAgICAgICAgdW51YnNjdXJlZFNoYXBlcy5wdXNoKHsgdHlwZTogQ0lSQ0xFLCBzdHJva2VDb2xvcjogMHgwMDAsIHNoYXBlOiB0aGlzLmhlYWQuc2hhcGUgfSk7XG4gICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaCh7IHR5cGU6IC0xLCBjb2xvcjogdGhpcy5jb2xvciwgc3Ryb2tlQ29sb3I6IDB4MDAwLCBsaW5lV2lkdGg6IHRoaXMuZ3JpZFVuaXQgLyAxMCwgc2hhcGU6IHRoaXMuZ2V0RG9tZVNoYXBlKG5vc2VQb2ludCwgdGhpcy5ncmlkVW5pdCAqIDAuMzUpIH0pO1xuICAgICAgICBjb25zdCBsZWcxID0geyB0eXBlOiBMSU5FLCBzaGFwZTogdGhpcy5nZXRMaW5lKHRoaXMuc2hvZTEsIHBvaW50KSwgY29sb3I6IHRoaXMuY29sb3IsIGxpbmVXaWR0aDogdGhpcy5ncmlkVW5pdCAqIDEuMiB9O1xuICAgICAgICBjb25zdCBsZWcyID0geyB0eXBlOiBMSU5FLCBzaGFwZTogdGhpcy5nZXRMaW5lKHRoaXMuc2hvZTIsIHBvaW50KSwgY29sb3I6IHRoaXMuY29sb3IsIGxpbmVXaWR0aDogdGhpcy5ncmlkVW5pdCAqIDEuMiB9O1xuICAgICAgICBvYnNjdXJlZFNoYXBlcy5wdXNoKGxlZzEpO1xuICAgICAgICBvYnNjdXJlZFNoYXBlcy5wdXNoKGxlZzIpO1xuICAgICAgICBjb25zdCB0b3JzbyA9IG5ldyBDaXJjbGUoY2VudGVyQ2VudGVyLngsIGNlbnRlckNlbnRlci55LCB0aGlzLmdyaWRVbml0ICogMik7XG4gICAgICAgIGNvbnN0IHNraXJ0TGVuZ3RoID0gY2VudGVyQ2VudGVyLmNsb25lKCkubGVycChjZW50ZXJCb3R0b20sIDAuNyk7XG4gICAgICAgIGNvbnN0IGJvdHRvbUNvbG9yID0gMHg0MzZiOTQ7XG4gICAgICAgIGNvbnN0IHNraXJ0ID0gdGhpcy5nZXRUcmVwYXpvaWQodGhpcy5wYXRoSGVscGVyLCBuZXcgQ2lyY2xlKHNraXJ0TGVuZ3RoLngsIHNraXJ0TGVuZ3RoLnksIHRoaXMuZ3JpZFVuaXQgKiAyLjU1KSwgYm90dG9tQ29sb3IsIDAuOTcsIG51bGwsIDB4MDAwKTtcbiAgICAgICAgaWYgKHNraXJ0KSB7XG4gICAgICAgICAgICBvYnNjdXJlZFNoYXBlcy5wdXNoKHNraXJ0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b3BDb2xvciA9IDB4NmQ4Y2FjO1xuICAgICAgICBvYnNjdXJlZFNoYXBlcy5wdXNoKHsgdHlwZTogQ0lSQ0xFLCBjb2xvcjogdG9wQ29sb3IsIHNoYXBlOiB0b3Jzbywgc3Ryb2tlQ29sb3I6IDB4MDAwIH0pO1xuICAgICAgICBsZXQgaGFuZFBvczEgPSBoYW5kMTtcbiAgICAgICAgbGV0IGhhbmRQb3MyID0gaGFuZDI7XG4gICAgICAgIGlmICh0aGlzLnB1c2hlZENyYXRlICYmIHBvaW50MlZlYyh0aGlzLnB1c2hlZENyYXRlKS5kaXN0YW5jZShwb2ludCkgPCB0aGlzLnNpemUgKiA0LjUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2VudGVyQ2VudGVyOiBjZW50ZXIgfSA9IHRoYXQuaGVhZDtcbiAgICAgICAgICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBDaXJjbGUoY2VudGVyLngsIGNlbnRlci55LCB0aGlzLnNpemUgKiAxLjQpO1xuICAgICAgICAgICAgY29uc3QgYTIgPSAoZGlyZWN0aW9uICsgMC4xKSAlIDE7XG4gICAgICAgICAgICBjb25zdCBiMiA9IChkaXJlY3Rpb24gKyAwLjkpICUgMTtcbiAgICAgICAgICAgIGhhbmRQb3MxID0gcG9pbnQyVmVjKGNpcmNsZS5nZXRQb2ludChhMikpO1xuICAgICAgICAgICAgaGFuZFBvczIgPSBwb2ludDJWZWMoY2lyY2xlLmdldFBvaW50KGIyKSk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzY3VyZWRTaGFwZXMucHVzaCh7IHR5cGU6IENJUkNMRSwgY29sb3I6IHRoaXMuY29sb3IsIHNoYXBlOiBuZXcgQ2lyY2xlKGhhbmRQb3MxLngsIGhhbmRQb3MxLnksIHRoaXMuZ3JpZFVuaXQgKiAwLjgpLCBzdHJva2VDb2xvcjogMHgwMDAgfSk7XG4gICAgICAgIG9ic2N1cmVkU2hhcGVzLnB1c2goeyB0eXBlOiBDSVJDTEUsIGNvbG9yOiB0aGlzLmNvbG9yLCBzaGFwZTogbmV3IENpcmNsZShoYW5kUG9zMi54LCBoYW5kUG9zMi55LCB0aGlzLmdyaWRVbml0ICogMC44KSwgc3Ryb2tlQ29sb3I6IDB4MDAwIH0pO1xuICAgICAgICBjb25zdCBhcm0xTGluZSA9IHRoaXMuZ2V0TGluZShzaG91bGRlcjFQb2ludCwgaGFuZFBvczEpO1xuICAgICAgICBjb25zdCBhcm0yTGluZSA9IHRoaXMuZ2V0TGluZShzaG91bGRlcjJQb2ludCwgaGFuZFBvczIpO1xuICAgICAgICBjb25zdCBhcm0xID0geyB0eXBlOiBMSU5FLCBzaGFwZTogYXJtMUxpbmUsIGNvbG9yOiB0b3BDb2xvciwgbGluZVdpZHRoOiB0aGlzLmdyaWRVbml0ICogMS4yIH07XG4gICAgICAgIGNvbnN0IGFybTFPdXRsaW5lID0geyB0eXBlOiBMSU5FLCBzaGFwZTogYXJtMUxpbmUsIGNvbG9yOiAweDAwMCwgbGluZVdpZHRoOiB0aGlzLmdyaWRVbml0ICogMS44IH07XG4gICAgICAgIGNvbnN0IGFybTIgPSB7IHR5cGU6IExJTkUsIHNoYXBlOiBhcm0yTGluZSwgY29sb3I6IHRvcENvbG9yLCBsaW5lV2lkdGg6IHRoaXMuZ3JpZFVuaXQgKiAxLjIgfTtcbiAgICAgICAgY29uc3QgYXJtMk91dGxpbmUgPSB7IHR5cGU6IExJTkUsIHNoYXBlOiBhcm0yTGluZSwgY29sb3I6IDB4MDAwLCBsaW5lV2lkdGg6IHRoaXMuZ3JpZFVuaXQgKiAxLjggfTtcbiAgICAgICAgb2JzY3VyZWRTaGFwZXMucHVzaCh7IHR5cGU6IENJUkNMRSwgY29sb3I6IHRvcENvbG9yLCBzdHJva2VDb2xvcjogMHgwMDAsIHNoYXBlOiBuZXcgQ2lyY2xlKHNob3VsZGVyMVBvaW50LngsIHNob3VsZGVyMVBvaW50LnksIHRoaXMuZ3JpZFVuaXQgKiAwLjY1KSB9KTtcbiAgICAgICAgb2JzY3VyZWRTaGFwZXMucHVzaCh7IHR5cGU6IENJUkNMRSwgY29sb3I6IHRvcENvbG9yLCBzdHJva2VDb2xvcjogMHgwMDAsIHNoYXBlOiBuZXcgQ2lyY2xlKHNob3VsZGVyMlBvaW50LngsIHNob3VsZGVyMlBvaW50LnksIHRoaXMuZ3JpZFVuaXQgKiAwLjY1KSB9KTtcbiAgICAgICAgb2JzY3VyZWRTaGFwZXMucHVzaChhcm0xT3V0bGluZSk7XG4gICAgICAgIG9ic2N1cmVkU2hhcGVzLnB1c2goYXJtMk91dGxpbmUpO1xuICAgICAgICBvYnNjdXJlZFNoYXBlcy5wdXNoKGFybTEpO1xuICAgICAgICBvYnNjdXJlZFNoYXBlcy5wdXNoKGFybTIpO1xuICAgICAgICBncmFwaGljcy5maWxsU3R5bGUoZmFjZUZlYXRDb2xvcik7XG4gICAgICAgIHRoaXMuZHJhd1NoYXBlcyhvYnNjdXJlZFNoYXBlcyk7XG4gICAgICAgIGdyYXBoaWNzLmZpbGxTdHlsZSh0aGlzLmNvbG9yLCAxKTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENpcmNsZVNoYXBlKHRoaXMuaGVhZC5zaGFwZSk7XG4gICAgICAgIC8vIGNvbnN0IGxvazEgPSAgZ2V0QXJjU2hhcGUocG9pbnQsIHRoaXMuZ3JpZFVuaXQsIDEuOCwgMS41LCBib2R5QW5nbGUgKyBNYXRoLlBJKTsgLy97IHgsIHksIHJhZGl1czogdGhpcy5ncmlkVW5pdCAsIHN0YXJ0QW5nbGU6IGJvZHlBbmdsZSAtIDAuMSwgZW5kQW5nbGU6IGJvZHlBbmdsZSB9O1xuICAgICAgICBjb25zdCBsb2sxID0geyB4LCB5LCByYWRpdXM6IHRoaXMuZ3JpZFVuaXQsIHN0YXJ0QW5nbGU6IGJvZHlBbmdsZSAtIDAuMSwgZW5kQW5nbGU6IGJvZHlBbmdsZSB9O1xuICAgICAgICBjb25zdCB0b3BCbG9uZGUgPSAweGQ5YjM4MDtcbiAgICAgICAgY29uc3QgYm90dG9tQmxvbmRlID0gMHhkYzg5ZjczO1xuICAgICAgICBjb25zdCBidW5wID0gZXF1YXRvci5nZXRQb2ludChyZWxhdGl2ZUFuZ2xlIC0gZGlyZWN0aW9uIC0gMC41ICUgMSk7XG4gICAgICAgIGNvbnN0IGhhaXIgPSB0aGlzLmdldFRyZXBhem9pZCh0aGlzLnBhdGhIZWxwZXIsIG5ldyBDaXJjbGUoYnVucC54LCBidW5wLnksIHRoaXMuZ3JpZFVuaXQgKiAyLjU1KSwgYm90dG9tQmxvbmRlLCAwLjk2LCBudWxsLCAweDA4NjYyNTEpO1xuICAgICAgICBpZiAoaGFpcikge1xuICAgICAgICAgICAgdW51YnNjdXJlZFNoYXBlcy5wdXNoKGhhaXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnN0IHNoYXBlID0gZ2V0QXJjQ3VydmUobG9rMSk7XG4gICAgICAgIGNvbnN0IHRvcEhhaXIxID0gZ2V0QXJjU2hhcGUocG9pbnQsIHRoaXMuc2l6ZSwgMSwgMi43LCBib2R5QW5nbGUpO1xuICAgICAgICBjb25zdCB0b3BIYWlyMiA9IGdldEFyY1NoYXBlKHBvaW50LCB0aGlzLnNpemUsIDEuNiwgMSwgYm9keUFuZ2xlKTtcbiAgICAgICAgdW51YnNjdXJlZFNoYXBlcy5wdXNoKHsgdHlwZTogLTEsIHNoYXBlOiB0b3BIYWlyMSwgY29sb3I6IHRvcEJsb25kZSwgc3Ryb2tlQ29sb3I6IDBYMDg2NjI1MSB9KTtcbiAgICAgICAgdW51YnNjdXJlZFNoYXBlcy5wdXNoKHsgdHlwZTogLTEsIHNoYXBlOiB0b3BIYWlyMiwgY29sb3I6IHRvcEJsb25kZSwgc3Ryb2tlQ29sb3I6IDBYMDg2NjI1MSB9KTtcbiAgICAgICAgdW51YnNjdXJlZFNoYXBlcy5wdXNoKHsgdHlwZTogQ0lSQ0xFLCBzaGFwZTogbG9rMSwgY29sb3I6IHRvcEJsb25kZSB9KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaXMuZ3JpZFVuaXQgLyA0LCAweDAwMCk7XG4gICAgICAgIGdyYXBoaWNzLmZpbGxTdHlsZSh0aGlzLmNvbG9yLCAxKTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKDB4OWYxZjE5LCAwLjcpO1xuICAgICAgICBkcChtb3V0aFBvaW50KTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKDB4OWYxZjE5LCAwLjIpO1xuICAgICAgICBkcChleWVCb3R0b21MaW5lLmdldFBvaW50KGNoZWVrMSkpO1xuICAgICAgICBkcChleWVCb3R0b21MaW5lLmdldFBvaW50KGNoZWVrMikpO1xuICAgICAgICBncmFwaGljcy5maWxsU3R5bGUoZmFjZUZlYXRDb2xvciwgMSk7XG4gICAgICAgIGdyYXBoaWNzLmZpbGxTdHlsZSgweEZGRkZGRiwgMSk7XG4gICAgICAgIHRoaXMuZHJhd1NoYXBlcyh1bnVic2N1cmVkU2hhcGVzKTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDAsIDApO1xuICAgIH1cbiAgICB3YWxrKGRpcmVjdGlvbikge1xuICAgICAgICBjb25zdCB7IGdyYXBoaWNzLCBwb2ludCB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcztcbiAgICAgICAgLy8gcmUtZW5hYmxlIG1vdmluZyBpbiBhIGNlcnRhaW4gZGlyZWN0aW9uIGlmIHBhc3NlZCBhIGJsb2NrYWRlXG4gICAgICAgIGlmICh0aGlzLnB1c2hlZENyYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QmxvY2tlZERpcmVjdGlvbnModGhpcy5wdXNoZWRDcmF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRXZlcnkgZnJhbWUsIHdlIGNyZWF0ZSBhIG5ldyB2ZWxvY2l0eSBmb3IgdGhlIHNwcml0ZSBiYXNlZCBvbiB3aGF0IGtleXMgdGhlIHBsYXllciBpcyBob2xkaW5nIGRvd24uXG4gICAgICAgIGNvbnN0IHZlbG9jaXR5ID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIoMCwgMCk7XG4gICAgICAgIGNvbnN0IHsgbGVmdDogeyBpc0Rvd246IGxlZnREb3duIH0sIHJpZ2h0OiB7IGlzRG93bjogcmlnaHREb3duIH0sIHVwOiB7IGlzRG93bjogdXBEb3duIH0sIGRvd246IHsgaXNEb3duOiBkb3duRG93biB9IH0gPSB0aGlzLmN1cnNvcktleXM7XG4gICAgICAgIGlmIChsZWZ0RG93biAmJiAhdGhpcy5ibG9ja2VkRGlyZWN0aW9uLmxlZnQpIHtcbiAgICAgICAgICAgIHZlbG9jaXR5LnggLT0gMTtcbiAgICAgICAgICAgIHRoaXMuaGFzSW5wdXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ibG9ja2VkRGlyZWN0aW9uLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0RG93biAmJiAhdGhpcy5ibG9ja2VkRGlyZWN0aW9uLnJpZ2h0KSB7XG4gICAgICAgICAgICB2ZWxvY2l0eS54ICs9IDE7XG4gICAgICAgICAgICB0aGlzLmhhc0lucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tlZERpcmVjdGlvbi5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVwRG93biAmJiAhdGhpcy5ibG9ja2VkRGlyZWN0aW9uLnVwKSB7XG4gICAgICAgICAgICB2ZWxvY2l0eS55IC09IDE7XG4gICAgICAgICAgICB0aGlzLmhhc0lucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tlZERpcmVjdGlvbi5kb3duID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvd25Eb3duICYmICF0aGlzLmJsb2NrZWREaXJlY3Rpb24uZG93bikge1xuICAgICAgICAgICAgdmVsb2NpdHkueSArPSAxO1xuICAgICAgICAgICAgdGhpcy5oYXNJbnB1dCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJsb2NrZWREaXJlY3Rpb24udXAgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNJbnB1dCkge1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLnBhY2UgLyA2MDA7XG4gICAgICAgICAgICBpZiAodGhpcy5ub3cgPj0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RlcCA9IC1jb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm5vdyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwID0gK2NvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub3cgKz0gdGhpcy5zdGVwO1xuICAgICAgICAgICAgY29uc3QgYTEgPSAoZGlyZWN0aW9uICsgMC40NSkgJSAxO1xuICAgICAgICAgICAgY29uc3QgYTIgPSAoZGlyZWN0aW9uICsgMC4wNSkgJSAxO1xuICAgICAgICAgICAgY29uc3QgYjEgPSAoZGlyZWN0aW9uICsgMC41NSkgJSAxO1xuICAgICAgICAgICAgY29uc3QgYjIgPSAoZGlyZWN0aW9uICsgMC45NSkgJSAxO1xuICAgICAgICAgICAgY29uc3QgcDEgPSBwb2ludDJWZWModGhpcy5mZWV0Q2lyY2xlLmdldFBvaW50KGExKSk7XG4gICAgICAgICAgICBjb25zdCBwMiA9IHBvaW50MlZlYyh0aGlzLmZlZXRDaXJjbGUuZ2V0UG9pbnQoYjEpKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxTdHlsZSgweDBGRkZGRiwgMSk7XG4gICAgICAgICAgICBjb25zdCBwcCA9IHRoaXMuZmVldENpcmNsZS5nZXRQb2ludChhMik7XG4gICAgICAgICAgICBjb25zdCBwcGIgPSB0aGlzLmZlZXRDaXJjbGUuZ2V0UG9pbnQoYjIpO1xuICAgICAgICAgICAgY29uc3QgcGEgPSBwMS5jbG9uZSgpLmxlcnAocHAsIHRoaXMubm93KTtcbiAgICAgICAgICAgIGNvbnN0IHBiID0gcDIuY2xvbmUoKS5sZXJwKHBwYiwgTWF0aC5hYnModGhpcy5ub3cgLSAxKSk7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0Q2hpbGRQb3NpdGlvbih0aGlzLnNob2UxLCBwYS54LCBwYS55KTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRDaGlsZFBvc2l0aW9uKHRoaXMuc2hvZTIsIHBiLngsIHBiLnkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIG5vcm1hbGl6ZSB0aGUgdmVsb2NpdHkgc28gdGhhdCB0aGUgcGxheWVyIGlzIGFsd2F5cyBtb3ZpbmcgYXQgdGhlIHNhbWUgc3BlZWQsIHJlZ2FyZGxlc3Mgb2YgZGlyZWN0aW9uLlxuICAgICAgICBjb25zdCBub3JtYWxpemVkVmVsb2NpdHkgPSB2ZWxvY2l0eS5ub3JtYWxpemUoKTtcbiAgICAgICAgY29uc3QgZ2FtZU9iamVjdCA9IHRoaXM7XG4gICAgICAgIGdhbWVPYmplY3QuYm9keVxuICAgICAgICAgICAgLnNldFZlbG9jaXR5KG5vcm1hbGl6ZWRWZWxvY2l0eS54ICogdGhpcy5zcGVlZCwgbm9ybWFsaXplZFZlbG9jaXR5LnkgKiB0aGlzLnNwZWVkKTtcbiAgICB9XG4gICAgcHVzaENyYXRlSW1wbChkaXJlY3Rpb24sIGNyYXRlKSB7XG4gICAgICAgIGNvbnN0IHVwID0gZGlyZWN0aW9uID09PSAndXAnO1xuICAgICAgICBjb25zdCBkb3duID0gZGlyZWN0aW9uID09PSAnZG93bic7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZGlyZWN0aW9uID09PSAncmlnaHQnO1xuICAgICAgICBjb25zdCBsZWZ0ID0gZGlyZWN0aW9uID09PSAnbGVmdCc7XG4gICAgICAgIGNvbnN0IG5vbmUgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY29sbGlzaW9uID0geyB1cCwgZG93biwgcmlnaHQsIGxlZnQsIG5vbmUgfTtcbiAgICAgICAgY29uc3QgYXhpcyA9IHVwIHx8IGRvd24gPyAneScgOiAneCc7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuY3JhdGVzLmZpbHRlcigoaXRlbSkgPT4gY29sbGlkZXNPbkF4ZXMoY3JhdGUsIGl0ZW0sIGNvbGxpc2lvbikpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYVtheGlzXSA8IGJbYXhpc10gPyAtMSA6IDEpO1xuICAgICAgICBjb25zdCBjb2xsaWRpbmdDcmF0ZSA9IHVwIHx8IGxlZnQgPyBzZWxlY3Rpb24ucG9wKCkgOiBzZWxlY3Rpb25bMF07XG4gICAgICAgIGlmIChpbXBhc3NhYmxlKGNyYXRlLCBjb2xsaWRpbmdDcmF0ZSwgdGhpcy5mYWN0b3IsIGNvbGxpc2lvbiwgdGhpcy53b3JsZEJvdW5kcykpIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tlZERpcmVjdGlvbiA9IHsgdXAsIGRvd24sIHJpZ2h0LCBsZWZ0LCBub25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgY29uc3Qgb3BBeGlzID0gcmlnaHQgfHwgbGVmdCA/ICd5JyA6ICd4JztcbiAgICAgICAgICAgIHRoaXNbYCR7b3BBeGlzfVRocmVzaG9sZGBdID0gY3JhdGVbb3BBeGlzXSAvIHRoaXMuZ3JpZFVuaXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1cCB8fCBsZWZ0ID8gY3JhdGVbYXhpc10gLT0gdGhpcy5mYWN0b3IgOiBjcmF0ZVtheGlzXSArPSB0aGlzLmZhY3RvcjtcbiAgICAgICAgfVxuICAgICAgICBjcmF0ZS51cGRhdGUoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoQmFzZSkgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcbiAgICBkcmF3RmFjZSh0b3AsIGJvdHRvbSwgZmxvb3JUb3AsIGZsb29yQm90dG9tKSB7XG4gICAgICAgIC8vIHRoaXMgd2lsbCBkcmF3IGEgc2ltcGxlIGNyYXRlICd0ZXh0dXJlJ1xuICAgICAgICAvLyBhcyBwaGFzZXIgc2VlbXMgdG8gaGF2ZSBsb3N0IHRoZSBhYmlsaXR5IHRvIGRyYXcgYSB0ZXh0dXJlIG9uIHRoZSBncmFwaGljcyBnYW1lIG9iamVjdCBpbiAzLjV4LlxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgZ3JhcGhpY3MsIHZhbmlzaFBvaW50LCBwb2ludCwgZ3JpZFVuaXQgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG1hZ2ljWiA9ICgxMDAwIC0gdmFuaXNoUG9pbnQuZGlzdGFuY2UocG9pbnQpKSAvIDEwMDAgKyAxO1xuICAgICAgICBncmFwaGljcy5zZXREZXB0aChtYWdpY1opO1xuICAgICAgICBncmFwaGljcy5maWxsU3R5bGUoMHhDQ0NDQ0MsIDEpO1xuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoZ3JpZFVuaXQgLyA0LCAweDAwMCwgMSk7XG4gICAgICAgIGNvbnN0IGRpdmlkZSA9IDEgLyA1O1xuICAgICAgICBjb25zdCB0b3Bib2FyZCA9IHRvcC5jbG9uZSgpLmxlcnAoZmxvb3JUb3AsIGRpdmlkZSk7XG4gICAgICAgIGNvbnN0IGJvdHRvbWJvYXJkID0gYm90dG9tLmNsb25lKCkubGVycChmbG9vckJvdHRvbSwgZGl2aWRlKTtcbiAgICAgICAgY29uc3QgdG9wZmxvb3Jib2FyZCA9IGZsb29yVG9wLmNsb25lKCkubGVycCh0b3AsIGRpdmlkZSk7XG4gICAgICAgIGNvbnN0IGJvdHRvbWZsb29yYm9hcmQgPSBmbG9vckJvdHRvbS5jbG9uZSgpLmxlcnAoYm90dG9tLCBkaXZpZGUpO1xuICAgICAgICBncmFwaGljcy5maWxsUG9pbnRzKFt0b3AsIGJvdHRvbSwgYm90dG9tYm9hcmQsIHRvcGJvYXJkXSwgdHJ1ZSk7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbFBvaW50cyhbdG9wZmxvb3Jib2FyZCwgYm90dG9tZmxvb3Jib2FyZCwgZmxvb3JCb3R0b20sIGZsb29yVG9wXSwgdHJ1ZSk7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcbiAgICAgICAgLy8gZHJhdyA3IHNlbWkgdHJhbnNwYXJhbnQgdmVydGljYWwgd29vZGVuIGJlYW1zIG9uIHRoZSBjZW50ZXIgb2YgdGhlIGNyYXRlXG4gICAgICAgIGxldCBwcmV2VG9wID0gdG9wYm9hcmQ7XG4gICAgICAgIGxldCBwcmV2Q29ybmVyID0gdG9wZmxvb3Jib2FyZDtcbiAgICAgICAgY29uc3QgYmVhbXMgPSA3O1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBiZWFtczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsZXJwID0gaSAvIGJlYW1zO1xuICAgICAgICAgICAgY29uc3QgdG9wc2lkZWJvYXJkID0gdG9wYm9hcmQuY2xvbmUoKS5sZXJwKGJvdHRvbWJvYXJkLCBsZXJwKTtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbXNpZGVib2FyZCA9IHRvcGZsb29yYm9hcmQuY2xvbmUoKS5sZXJwKGJvdHRvbWZsb29yYm9hcmQsIGxlcnApO1xuICAgICAgICAgICAgbGV0IGFscGhhID0gMTtcbiAgICAgICAgICAgIGlmIChpID09PSA0IHx8IGkgPT09IDYgfHwgaSA9PT0gMikge1xuICAgICAgICAgICAgICAgIGFscGhhID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxTdHlsZSgweENDQ0NDQywgYWxwaGEpO1xuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbFBvaW50cyhbcHJldlRvcCwgcHJldkNvcm5lciwgYm90dG9tc2lkZWJvYXJkLCB0b3BzaWRlYm9hcmRdLCB0cnVlKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcbiAgICAgICAgICAgIHByZXZUb3AgPSB0b3BzaWRlYm9hcmQ7XG4gICAgICAgICAgICBwcmV2Q29ybmVyID0gYm90dG9tc2lkZWJvYXJkO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsImltcG9ydCBXYWxsIGZyb20gJy4vV2FsbCc7XG5pbXBvcnQgeyBwb2ludDJWZWMsIHB5dCwgY2FsY3VsYXRlQ2lyY2xlQ2VudGVyIH0gZnJvbSAnLi4vaGVscGVycyc7XG52YXIgRWxsaXBzZSA9IFBoYXNlci5DdXJ2ZXMuRWxsaXBzZTtcbnZhciBWZWN0b3IyID0gUGhhc2VyLk1hdGguVmVjdG9yMjtcbnZhciBDaXJjbGUgPSBQaGFzZXIuR2VvbS5DaXJjbGU7XG52YXIgUmFkVG9EZWcgPSBQaGFzZXIuTWF0aC5SYWRUb0RlZztcbnZhciBOb3JtYWxpemUgPSBQaGFzZXIuTWF0aC5BbmdsZS5Ob3JtYWxpemU7XG52YXIgQmV0d2VlblBvaW50cyA9IFBoYXNlci5NYXRoLkFuZ2xlLkJldHdlZW5Qb2ludHM7XG52YXIgTGluZSA9IFBoYXNlci5HZW9tLkxpbmU7XG52YXIgR2V0Q2lyY2xlVG9DaXJjbGUgPSBQaGFzZXIuR2VvbS5JbnRlcnNlY3RzLkdldENpcmNsZVRvQ2lyY2xlO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXYWxsIHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgeCwgeSwgdywgaCwgZCwgY29sb3IsIHVwID0gZmFsc2UsIGRvd24gPSBmYWxzZSwgbGVmdCA9IGZhbHNlLCByaWdodCA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCB3LCBoLCBkLCBjb2xvciwgJ3NwaGVyZScsIHsgbm9uZTogZmFsc2UsIHVwLCBkb3duLCByaWdodCwgbGVmdCB9KTtcbiAgICAgICAgdGhpcy5hbHBoYSA9IDA7XG4gICAgICAgIHRoaXMucmFkaXVzID0gdyAvIDI7XG4gICAgICAgIHRoaXMuJHBpMiA9IDIgKiBNYXRoLlBJO1xuICAgIH1cbiAgICBnZXQgcGkyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcGkyO1xuICAgIH1cbiAgICBnZXQgaXNPYnNjdXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGlzT2JzY3VyZWQ7XG4gICAgfVxuICAgIGdldCBtZXJpZGlhbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJG1lcmlkaWFuO1xuICAgIH1cbiAgICBnZXQgZXF1YXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVxdWF0b3I7XG4gICAgfVxuICAgIGdldCBzaGFwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlO1xuICAgIH1cbiAgICBnZXRTbGljZShheGlzLCBwZXJjKSB7XG4gICAgICAgIGNvbnN0IHsgY2VudGVyQ2VudGVyLCBwb2ludCwgZ3JhcGhpY3MgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVsbGlwc2UgPSBheGlzID09PSAneCcgPyB0aGlzLiRlcXVhdG9yIDogdGhpcy4kbWVyaWRpYW47XG4gICAgICAgIGNvbnN0IGxlcnAgPSBheGlzID09PSAneCcgPyBwb2ludCA6IHRoaXMuZXF1YXRvci5nZXRQb2ludCgwKTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLnJhZGl1cyAqIHBlcmM7XG4gICAgICAgIGNvbnN0IHNpemUgPSBweXQoZGlzdGFuY2UsIHRoaXMucmFkaXVzKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjZW50ZXJDZW50ZXIuY2xvbmUoKS5sZXJwKGxlcnAsIHBlcmMpO1xuICAgICAgICBjb25zdCBhcmVhQ2lyY2xlID0gbmV3IENpcmNsZShwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplKTtcbiAgICAgICAgbGV0IGludGVyc2VjdGlvbjtcbiAgICAgICAgaW50ZXJzZWN0aW9uID0gR2V0Q2lyY2xlVG9DaXJjbGUoYXJlYUNpcmNsZSwgdGhpcy5jaXJjbGUsIGludGVyc2VjdGlvbik7XG4gICAgICAgIGNvbnN0IGN1cnZlID0gbmV3IEVsbGlwc2UocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgZWxsaXBzZVtgJHtheGlzfVJhZGl1c2BdIC8gKHRoaXMucmFkaXVzIC8gc2l6ZSksIHNpemUsIDAsIDM2MCwgdHJ1ZSwgdGhpcy5hbmdsZTJWUCk7XG4gICAgICAgIGxldCBpc09ic2N1cmVkID0gKGIpID0+IGZhbHNlO1xuICAgICAgICBpZiAoaW50ZXJzZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHAxID0gcG9pbnQyVmVjKGludGVyc2VjdGlvblswXSk7XG4gICAgICAgICAgICBjb25zdCBwMiA9IHBvaW50MlZlYyhpbnRlcnNlY3Rpb25bMV0pO1xuICAgICAgICAgICAgY29uc3QgbWlkZGxlID0gcDEubGVycChwMiwgMC41KTtcbiAgICAgICAgICAgIGlzT2JzY3VyZWQgPSAocCkgPT4gbWlkZGxlLmRpc3RhbmNlKHApIDw9IHAxLmRpc3RhbmNlKHAyKSAmJiBpbnRlcnNlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgLy8gY3VydmUuZHJhdyhncmFwaGljcyk7XG4gICAgICAgIHJldHVybiB7IGN1cnZlLCBpc09ic2N1cmVkIH07XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wcmVkcmF3KCk7IC8vIGNhdXNhbGl0eVxuICAgICAgICBjb25zdCB7IHZlcnRpY2VzOiB2LCBjZW50ZXJDZW50ZXIsIHZhbmlzaFBvaW50LCBwb2ludCwgZ3JpZFVuaXQsIGdyYXBoaWNzIH0gPSB0aGlzO1xuICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICBncmFwaGljcy5zZXREZXB0aCg0KTtcbiAgICAgICAgY29uc3QgbmV3Q2lyY2xlID0gbmV3IENpcmNsZShjZW50ZXJDZW50ZXIueCwgY2VudGVyQ2VudGVyLnksIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdGhpcy5jaXJjbGUgPSBuZXdDaXJjbGU7XG4gICAgICAgIGNvbnN0IGJwID0gQmV0d2VlblBvaW50cyh2YW5pc2hQb2ludCwgcG9pbnQpO1xuICAgICAgICB0aGlzLmFuZ2xlMlZQUmFkID0gYnAgLyB0aGlzLiRwaTI7XG4gICAgICAgIHRoaXMuYW5nbGUyVlAgPSBSYWRUb0RlZyhicCk7XG4gICAgICAgIGNvbnN0IHsgeDogeFJhZGl1cywgeTogeVJhZGl1cyB9ID0gdGhpcy5nZXRQbGFuZXMoY2VudGVyQ2VudGVyLCBwb2ludCwgbmV3Q2lyY2xlKTtcbiAgICAgICAgdGhpcy4kZXF1YXRvciA9IG5ldyBFbGxpcHNlKGNlbnRlckNlbnRlci54LCBjZW50ZXJDZW50ZXIueSwgeFJhZGl1cywgdGhpcy5yYWRpdXMsIDAsIDEsIHRydWUsIHRoaXMuYW5nbGUyVlApO1xuICAgICAgICB0aGlzLiRtZXJpZGlhbiA9IG5ldyBFbGxpcHNlKGNlbnRlckNlbnRlci54LCBjZW50ZXJDZW50ZXIueSwgeVJhZGl1cywgdGhpcy5yYWRpdXMsIDAsIDEsIHRydWUsIHRoaXMuYW5nbGUyVlApO1xuICAgICAgICAvLyB0aGlzLmVxdWF0b3IuZHJhdyhncmFwaGljcyk7XG4gICAgICAgIGdyYXBoaWNzLmZpbGxTdHlsZSgweEZGRjAwMCk7XG4gICAgICAgIGNvbnN0IGVxYXV0b3JBeGlzMSA9IHRoaXMuZXF1YXRvci5nZXRQb2ludCgwLjI1KTtcbiAgICAgICAgY29uc3QgZXFhdXRvckF4aXMyID0gdGhpcy5lcXVhdG9yLmdldFBvaW50KDAuNzUpO1xuICAgICAgICBjb25zdCBtaWRQb2ludCA9IHRoaXMuZXF1YXRvci5nZXRQb2ludCgwLjUpLmxlcnAoY2VudGVyQ2VudGVyLCAwLjUpO1xuICAgICAgICBjb25zdCBtaWRkbGUgPSBjYWxjdWxhdGVDaXJjbGVDZW50ZXIoZXFhdXRvckF4aXMxLCBlcWF1dG9yQXhpczIsIG1pZFBvaW50KTtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXdDaXJjbGUuZ2V0UG9pbnQoMC41KTtcbiAgICAgICAgY29uc3QgZW5kID0gbmV3Q2lyY2xlLmdldFBvaW50KDEpO1xuICAgICAgICB0aGlzLiRpc09ic2N1cmVkID0gKHApID0+IG1pZGRsZS5kaXN0YW5jZShwKSA8PSBlcWF1dG9yQXhpczEuZGlzdGFuY2UoZXFhdXRvckF4aXMyKSAmJiBbZXFhdXRvckF4aXMxLCBlcWF1dG9yQXhpczJdO1xuICAgICAgICB0aGlzLiRlcXVhdG9yQXhpcyA9IG5ldyBMaW5lKGVxYXV0b3JBeGlzMS54LCBlcWF1dG9yQXhpczIueSwgZXFhdXRvckF4aXMyLngsIGVxYXV0b3JBeGlzMi55KTtcbiAgICAgICAgLy8gZ3JhcGhpY3Muc3Ryb2tlQ2lyY2xlU2hhcGUoYXJlYUNpcmNsZSk7XG4gICAgICAgIC8vIHRoaXMubWVyaWRpYW4uZHJhdyhncmFwaGljcyk7XG4gICAgfVxuICAgIGdldFBsYW5lcyhjZW50ZXIsIHBvbGUsIGNpcmNsZSkge1xuICAgICAgICBjb25zdCBsID0gY2VudGVyLmRpc3RhbmNlKHBvbGUpO1xuICAgICAgICBjb25zdCBzID0gcHl0KGwsIGNpcmNsZS5yYWRpdXMpO1xuICAgICAgICBjb25zdCBhbmdsZSA9IE5vcm1hbGl6ZShMaW5lLkFuZ2xlKG5ldyBMaW5lKHMsIGwpKSkgLyB0aGlzLiRwaTI7XG4gICAgICAgIGNvbnN0IG1pcnJvciA9IChhbmdsZSArIDAuNSkgJSAxO1xuICAgICAgICBjb25zdCBhID0gY2lyY2xlLmdldFBvaW50KGFuZ2xlKTtcbiAgICAgICAgY29uc3QgYiA9IGNpcmNsZS5nZXRQb2ludChtaXJyb3IpO1xuICAgICAgICBjb25zdCB5ID0gKGIueSAtIGEueSkgLyAyO1xuICAgICAgICBjb25zdCB4ID0gKGIueCAtIGEueCkgLyAyO1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoeCwgeSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aW9uLCBDb2xsaXNpb240RGlyZWN0aW9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5jbGFzcyBXYWxsIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIHcsIGgsIGQsIGNvbG9yLCBrZXkgPSAnd2FsbCcsIGRpcmVjdGlvbiA9IENvbGxpc2lvbjREaXJlY3Rpb24oRGlyZWN0aW9uLm5vbmUpKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCB3LCBoLCBjb2xvcik7XG4gICAgICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICAgICAgLy8gc2NlbmUucGh5c2ljcy5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDE7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLm5hbWUgPSBrZXk7XG4gICAgICAgIHRoaXMuJGRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG4gICAgZ2V0IGRpcmVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGRpcmVjdGlvbjtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhhdC5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGF0LmdyYXBoaWNzLmZpbGxTdHlsZSh0aGlzLmNvbG9yLCAxKTtcbiAgICAgICAgdGhhdC5wcmVkcmF3KCk7XG4gICAgICAgIC8vIHRoZSB3YWxscyBzaG91bGQgZHJhdyB0aGUgZmFjZSB0aGF0IGlzIHZpc2libGUuIGZvciB0aGUgcmVzdCB0aGUgZHJhdyBvcmRlciBpcyBiYXNlZCBvbiBwb3NpdGlvbi5cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uLm5vbmUpIHtcbiAgICAgICAgICAgIHRoYXQuZHJhd0luVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5kaXJlY3Rpb24pLmZvckVhY2goKHZhbHVlKSA9PiB2YWx1ZVsxXSAmJiB0aGF0LmRyYXdWZXJ0aWNlcyh0aGF0LmdldEZhY2VCeURpcmVjdGlvbihEaXJlY3Rpb25bdmFsdWVbMF1dKSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgV2FsbDtcbiIsImltcG9ydCB7IE1hdGggYXMgUE1hdGgsIEdlb20gfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IFdhbGwgZnJvbSAnLi9nYW1lb2JqZWN0cy9XYWxsJztcbnZhciBWZWN0b3IyID0gUGhhc2VyLk1hdGguVmVjdG9yMjtcbnZhciBQYXRoID0gUGhhc2VyLkN1cnZlcy5QYXRoO1xudmFyIFJhZFRvRGVnID0gUGhhc2VyLk1hdGguUmFkVG9EZWc7XG52YXIgRkFDSU5HX1VQID0gUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkZBQ0lOR19VUDtcbnZhciBGQUNJTkdfRE9XTiA9IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5GQUNJTkdfRE9XTjtcbnZhciBGQUNJTkdfTEVGVCA9IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5GQUNJTkdfTEVGVDtcbnZhciBGQUNJTkdfUklHSFQgPSBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuRkFDSU5HX1JJR0hUO1xudmFyIEZBQ0lOR19OT05FID0gUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkZBQ0lOR19OT05FO1xuZXhwb3J0IHZhciBEaXJlY3Rpb247XG4oZnVuY3Rpb24gKERpcmVjdGlvbikge1xuICAgIERpcmVjdGlvbltEaXJlY3Rpb25bXCJub25lXCJdID0gRkFDSU5HX05PTkVdID0gXCJub25lXCI7XG4gICAgRGlyZWN0aW9uW0RpcmVjdGlvbltcInVwXCJdID0gRkFDSU5HX1VQXSA9IFwidXBcIjtcbiAgICBEaXJlY3Rpb25bRGlyZWN0aW9uW1wiZG93blwiXSA9IEZBQ0lOR19ET1dOXSA9IFwiZG93blwiO1xuICAgIERpcmVjdGlvbltEaXJlY3Rpb25bXCJsZWZ0XCJdID0gRkFDSU5HX0xFRlRdID0gXCJsZWZ0XCI7XG4gICAgRGlyZWN0aW9uW0RpcmVjdGlvbltcInJpZ2h0XCJdID0gRkFDSU5HX1JJR0hUXSA9IFwicmlnaHRcIjtcbn0pKERpcmVjdGlvbiB8fCAoRGlyZWN0aW9uID0ge30pKTtcbmV4cG9ydCBjb25zdCBnZXRHYW1lV2lkdGggPSAoc2NlbmUpID0+IHtcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcbn07XG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZSkgPT4ge1xuICAgIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodDtcbn07XG5leHBvcnQgY29uc3QgY29sbGlkZXNPbkF4ZXMgPSAoY3JhdGUsIGl0ZW0sIGRpcmVjdGlvbikgPT4ge1xuICAgIGNvbnN0IGF4aXMgPSBkaXJlY3Rpb24udXAgfHwgZGlyZWN0aW9uLmRvd24gPyAneCcgOiAneSc7XG4gICAgY29uc3Qgb3BheGlzID0gZGlyZWN0aW9uLnVwIHx8IGRpcmVjdGlvbi5kb3duID8gJ3knIDogJ3gnO1xuICAgIGNvbnN0IGhhbGZTaXplID0gY3JhdGUuYm9keS5oZWlnaHQgLyAyO1xuICAgIC8vIHRoZSBmb2xsb3dpbmcgdmFyIG5hbWVzIGFyZSBwcmVzdW1pbmcgZGlyZWN0aW9uIGluIHkgYXhpcy4gQ291bGQgbWFrZSBpdCBtb3JlIGdlbmVyYWwsXG4gICAgLy8gYXMgdGhpcyBmdW5jdGlvbiBpcyB1c2VkIG9uIHRoZSB4IGF4aXMgdG9vLiBidXQgdGhpcyBpcyBhbHJlYWR5IGNvbmZ1c2luZyBhcyBpcy5cbiAgICBjb25zdCBsZWZ0Q29ybmVySXRlbSA9IGl0ZW1bYXhpc10gLSBoYWxmU2l6ZTtcbiAgICBjb25zdCByaWdodENvcm5lckl0ZW0gPSBpdGVtW2F4aXNdICsgaGFsZlNpemU7XG4gICAgLy8gcmVtaW5kZXI6IGNoYW5nZSBoYWxmc2l6ZSBpbnRvIGhhbGZ3aWR0aC8gaGVpZ2h0IGlmIHRoZSBpdGVtIGlzIG5vdCBzcXVhcmUuXG4gICAgY29uc3QgbGVmdENvcm5lckNyYXRlID0gY3JhdGVbYXhpc10gLSBoYWxmU2l6ZTtcbiAgICBjb25zdCByaWdodENvcm5lckNyYXRlID0gY3JhdGVbYXhpc10gKyBoYWxmU2l6ZTtcbiAgICBjb25zdCB1cExlZnRDb25kaXRpb24gPSBpdGVtW29wYXhpc10gKyBoYWxmU2l6ZSA8PSBjcmF0ZVtvcGF4aXNdIC0gaGFsZlNpemU7XG4gICAgY29uc3QgZG93blJpZ2h0Q29uZGl0aW9uID0gaXRlbVtvcGF4aXNdIC0gaGFsZlNpemUgPj0gY3JhdGVbb3BheGlzXSArIGhhbGZTaXplO1xuICAgIHJldHVybiBpdGVtICE9PSBjcmF0ZVxuICAgICAgICAmJiAoZGlyZWN0aW9uLnVwIHx8IGRpcmVjdGlvbi5sZWZ0ID8gdXBMZWZ0Q29uZGl0aW9uIDogZG93blJpZ2h0Q29uZGl0aW9uKVxuICAgICAgICAmJiAoKGxlZnRDb3JuZXJJdGVtIDw9IHJpZ2h0Q29ybmVyQ3JhdGUgJiYgbGVmdENvcm5lckl0ZW0gPj0gbGVmdENvcm5lckNyYXRlKVxuICAgICAgICAgICAgfHwgKHJpZ2h0Q29ybmVySXRlbSA8PSByaWdodENvcm5lckNyYXRlICYmIHJpZ2h0Q29ybmVySXRlbSA+PSBsZWZ0Q29ybmVyQ3JhdGUpKTtcbn07XG5leHBvcnQgY29uc3QgQ29sbGlzaW9uNERpcmVjdGlvbiA9IChkaXIpID0+ICh7IG5vbmU6IGRpciA9PT0gRGlyZWN0aW9uLm5vbmUsIHVwOiBkaXIgPT09IERpcmVjdGlvbi51cCwgZG93bjogZGlyID09PSBEaXJlY3Rpb24uZG93biwgbGVmdDogZGlyID09PSBEaXJlY3Rpb24ubGVmdCwgcmlnaHQ6IGRpciA9PT0gRGlyZWN0aW9uLnJpZ2h0IH0pO1xuZXhwb3J0IGNvbnN0IGltcGFzc2FibGUgPSAoY3JhdGUsIG90aGVyQ3JhdGUsIHNwZWVkLCBkaXJlY3Rpb24sIHdvcmxkKSA9PiByZWFjaGVkQm91bmQoY3JhdGUsIHNwZWVkLCBkaXJlY3Rpb24sIHdvcmxkKSB8fCBibG9ja2VkSW5EaXJlY3Rpb24oY3JhdGUsIG90aGVyQ3JhdGUsIHNwZWVkLCBkaXJlY3Rpb24pIHx8IGNyYXRlIGluc3RhbmNlb2YgV2FsbDtcbmV4cG9ydCBjb25zdCBibG9ja2VkSW5EaXJlY3Rpb24gPSAoY3JhdGUsIG90aGVyQ3JhdGUsIHNwZWVkLCBkaXJlY3Rpb24pID0+IHtcbiAgICBpZiAoY3JhdGUuZW5lbXkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChvdGhlckNyYXRlKSB7XG4gICAgICAgIGNvbnN0IGhhbGZTaXplID0gY3JhdGUuYm9keS5oZWlnaHQgLyAyO1xuICAgICAgICBjb25zdCBheGlzID0gZGlyZWN0aW9uLnVwIHx8IGRpcmVjdGlvbi5kb3duID8gJ3knIDogJ3gnO1xuICAgICAgICBjb25zdCB1cExlZnRDb25kaXRpb24gPSBvdGhlckNyYXRlW2F4aXNdICsgaGFsZlNpemUgPj0gY3JhdGVbYXhpc10gLSBoYWxmU2l6ZSAtIHNwZWVkO1xuICAgICAgICBjb25zdCBkb3duUmlnaHRDb25kaXRpb24gPSBvdGhlckNyYXRlW2F4aXNdIC0gaGFsZlNpemUgPD0gY3JhdGVbYXhpc10gKyBoYWxmU2l6ZSArIHNwZWVkO1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uLnVwIHx8IGRpcmVjdGlvbi5sZWZ0ID8gdXBMZWZ0Q29uZGl0aW9uIDogZG93blJpZ2h0Q29uZGl0aW9uO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgcmVhY2hlZEJvdW5kID0gKGNyYXRlLCBzcGVlZCwgZGlyZWN0aW9uLCB3b3JsZCkgPT4ge1xuICAgIGNvbnN0IGhhbGZTaXplID0gY3JhdGUuYm9keS5oZWlnaHQgLyAyO1xuICAgIGNvbnN0IGF4aXMgPSBkaXJlY3Rpb24udXAgfHwgZGlyZWN0aW9uLmRvd24gPyAneScgOiAneCc7XG4gICAgY29uc3QgZDJzdHIgPSBkaXJlY3Rpb24ubGVmdCA/ICdsZWZ0JyA6IGRpcmVjdGlvbi5yaWdodCA/ICdyaWdodCcgOiBkaXJlY3Rpb24udXAgPyAndG9wJyA6IGRpcmVjdGlvbi5kb3duID8gJ2JvdHRvbScgOiAnbm9uZSc7XG4gICAgY29uc3QgdXBsZWZ0ID0gd29ybGRbZDJzdHJdID49IGNyYXRlW2F4aXNdIC0gaGFsZlNpemU7XG4gICAgY29uc3QgZG93bnJpZ2h0ID0gd29ybGRbZDJzdHJdIDw9IGNyYXRlW2F4aXNdICsgaGFsZlNpemU7XG4gICAgcmV0dXJuIGRpcmVjdGlvbi51cCB8fCBkaXJlY3Rpb24ubGVmdCA/IHVwbGVmdCA6IGRvd25yaWdodDtcbn07XG5leHBvcnQgZnVuY3Rpb24gbGluZUludGVyc2VjdChwMSwgcDIsIHAzLCBwNCkge1xuICAgIGNvbnN0IGRlbm9tID0gKHA0LnkgLSBwMy55KSAqIChwMi54IC0gcDEueCkgLSAocDQueCAtIHAzLngpICogKHAyLnkgLSBwMS55KTtcbiAgICBpZiAoZGVub20gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHVhID0gKChwNC54IC0gcDMueCkgKiAocDEueSAtIHAzLnkpIC0gKHA0LnkgLSBwMy55KSAqIChwMS54IC0gcDMueCkpIC8gZGVub207XG4gICAgcmV0dXJuIG5ldyBQTWF0aC5WZWN0b3IyKHtcbiAgICAgICAgeDogcDEueCArIHVhICogKHAyLnggLSBwMS54KSxcbiAgICAgICAgeTogcDEueSArIHVhICogKHAyLnkgLSBwMS55KSxcbiAgICB9KTtcbn1cbmNvbnN0IHZhclRvU3RyaW5nID0gKHZhck9iaikgPT4gT2JqZWN0LmtleXModmFyT2JqKVswXTtcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9wZXJ0eShvYmplY3QsIHZhbCkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJUb1N0cmluZyh2YWwpO1xuICAgIG9iamVjdFtuYW1lXSA9IE9iamVjdC52YWx1ZXModmFsKVswXTtcbiAgICByZXR1cm4gb2JqZWN0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdjZCh4LCB5KSB7XG4gICAgY29uc3QgY2IgPSAoYSwgYikgPT4gKGIgPT09IDAgPyBhIDogY2IoYiwgYSAlIGIpKTtcbiAgICByZXR1cm4gY2IoTWF0aC5hYnMoeCksIE1hdGguYWJzKHkpKTtcbn1cbmV4cG9ydCBjb25zdCBweXQgPSAoZCwgcmFkKSA9PiBNYXRoLnNxcnQoTWF0aC5wb3cocmFkLCAyKSAtIE1hdGgucG93KGQsIDIpKTsgLy8gdXNlIHRoZSBQeXRoYWdvcmVhbiBUaGVvcmVtIHRvIGdldCB0aGUgbmV3IHJhZGl1cyBsZW5ndGhcXFxuZXhwb3J0IGNvbnN0IHBvaW50MlZlYyA9ICgoeyB4LCB5IH0pID0+IG5ldyBWZWN0b3IyKHgsIHkpKTtcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVDaXJjbGVDZW50ZXIoQSwgQiwgQykge1xuICAgIGNvbnN0IHlEZWx0YUEgPSBCLnkgLSBBLnk7XG4gICAgY29uc3QgeERlbHRhQSA9IEIueCAtIEEueDtcbiAgICBjb25zdCB5RGVsdGFCID0gQy55IC0gQi55O1xuICAgIGNvbnN0IHhEZWx0YUIgPSBDLnggLSBCLng7XG4gICAgY29uc3QgYVNsb3BlID0geURlbHRhQSAvIHhEZWx0YUE7XG4gICAgY29uc3QgYlNsb3BlID0geURlbHRhQiAvIHhEZWx0YUI7XG4gICAgY29uc3QgeCA9IChhU2xvcGUgKiBiU2xvcGUgKiAoQS55IC0gQy55KSArIGJTbG9wZSAqIChBLnggKyBCLngpIC0gYVNsb3BlICogKEIueCArIEMueCkpIC8gKDIgKiAoYlNsb3BlIC0gYVNsb3BlKSk7XG4gICAgY29uc3QgeSA9IC0xICogKHggLSAoQS54ICsgQi54KSAvIDIpIC8gYVNsb3BlICsgKEEueSArIEIueSkgLyAyO1xuICAgIHJldHVybiBuZXcgVmVjdG9yMih4LCB5KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRQb3NpdGlvbih0YXJnZXQsIHBvc2l0aW9uKSB7XG4gICAgdGFyZ2V0LnggPSBwb3NpdGlvbi54O1xuICAgIHRhcmdldC55ID0gcG9zaXRpb24ueTtcbn1cbmV4cG9ydCBjb25zdCBDcmVhdGVTaGFwZSA9IChzY2VuZSkgPT4ge1xuICAgIHJldHVybiBzY2VuZS5hZGQucmV4Q3VzdG9tU2hhcGVzKHtcbiAgICAgICAgdHlwZTogJ1NwZWVjaEJ1YmJsZScsXG4gICAgICAgIGNyZWF0ZTogeyBsaW5lczogMSB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IDIwO1xuICAgICAgICAgICAgY29uc3Qgc3Ryb2tlQ29sb3IgPSB0aGlzLmdldERhdGEoJ3N0cm9rZUNvbG9yJyk7XG4gICAgICAgICAgICBjb25zdCBmaWxsQ29sb3IgPSB0aGlzLmdldERhdGEoJ2ZpbGxDb2xvcicpO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb25cbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSAwLCByaWdodCA9IHRoaXMud2lkdGgsIHRvcCA9IDAsIGJvdHRvbSA9IHRoaXMuaGVpZ2h0LCBib3hCb3R0b20gPSBib3R0b207XG4gICAgICAgICAgICB0aGlzLmdldFNoYXBlcygpWzBdXG4gICAgICAgICAgICAgICAgLmxpbmVTdHlsZSgyLCBzdHJva2VDb2xvciwgMSlcbiAgICAgICAgICAgICAgICAuZmlsbFN0eWxlKGZpbGxDb2xvciwgMSlcbiAgICAgICAgICAgICAgICAvLyB0b3AgbGluZSwgcmlnaHQgYXJjXG4gICAgICAgICAgICAgICAgLnN0YXJ0QXQobGVmdCArIHJhZGl1cywgdG9wKVxuICAgICAgICAgICAgICAgIC8vIC5hcmMocmlnaHQgLSByYWRpdXMsIHRvcCArIHJhZGl1cywgcmFkaXVzLCAyNzAsIDM2MClcbiAgICAgICAgICAgICAgICAvLyByaWdodCBsaW5lLCBib3R0b20gYXJjXG4gICAgICAgICAgICAgICAgLy8gLmxpbmVUbyhyaWdodCwgYm94Qm90dG9tIC0gcmFkaXVzKVxuICAgICAgICAgICAgICAgIC8vIC5hcmMocmlnaHQgLSByYWRpdXMsIGJveEJvdHRvbSAtIHJhZGl1cywgcmFkaXVzLCAwLCA5MClcbiAgICAgICAgICAgICAgICAvLyAubGluZVRvKGxlZnQgKyByYWRpdXMsIGJveEJvdHRvbSlcbiAgICAgICAgICAgICAgICAuYXJjKGxlZnQgKyByYWRpdXMsIGJveEJvdHRvbSAtIHJhZGl1cywgcmFkaXVzLCA2MCwgMTgwKVxuICAgICAgICAgICAgICAgIC8vIC8vIGxlZnQgbGluZSwgdG9wIGFyY1xuICAgICAgICAgICAgICAgIC8vIC5saW5lVG8obGVmdCwgdG9wICsgcmFkaXVzKVxuICAgICAgICAgICAgICAgIC5hcmMobGVmdCArIHJhZGl1cywgdG9wICsgcmFkaXVzLCByYWRpdXMsIDE4MCwgMzAwKVxuICAgICAgICAgICAgICAgIC8vIC5saW5lVG8obGVmdCwgdG9wICsgcmFkaXVzKVxuICAgICAgICAgICAgICAgIC5jbG9zZSgpO1xuICAgICAgICB9LFxuICAgIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRBcmNDdXJ2ZSh7IHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUgfSkge1xuICAgIGNvbnN0IHBhdGggPSBuZXcgUGF0aCgpO1xuICAgIHBhdGgubW92ZVRvKHgsIHkpO1xuICAgIHBhdGguZWxsaXBzZVRvKHJhZGl1cywgcmFkaXVzLCBSYWRUb0RlZyhzdGFydEFuZ2xlKSwgUmFkVG9EZWcoZW5kQW5nbGUpKTtcbiAgICBwYXRoLmNsb3NlUGF0aCgpO1xuICAgIHJldHVybiBwYXRoO1xufVxuZXhwb3J0IGNvbnN0IGdldEFyY1NoYXBlID0gKHBvc2l0aW9uLCByYWRpdXMsIGhsMSwgaGwyLCBkaXJlY3Rpb24pID0+ICh7IHg6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnksIHJhZGl1cywgc3RhcnRBbmdsZTogZGlyZWN0aW9uICsgaGwxICUgTWF0aC5QSSwgZW5kQW5nbGU6IGRpcmVjdGlvbiAtIGhsMiAlIE1hdGguUEkgfSk7XG5leHBvcnQgY29uc3QgdW5ibG9ja0J1dCA9IChkaXJlY3Rpb24sIGl0ZW1zKSA9PiBPYmplY3QuZW50cmllcyhpdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtWzBdICE9PSBkaXJlY3Rpb24pIHtcbiAgICAgICAgaXRlbXNbaXRlbVswXV0gPSBmYWxzZTtcbiAgICB9XG59KTtcbmV4cG9ydCBjb25zdCBnZXRSYW5kb21JbnQgPSAobWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldEhvbW9UaGV0aWNDZW50ZXIoY2lyY2xlMSwgY2lyY2xlMikge1xuICAgIGlmIChjaXJjbGUxLnJhZGl1cyA9PT0gY2lyY2xlMi5yYWRpdXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaXJjbGVzIG11c3QgaGF2ZSBkaWZmZXJlbnQgcmFkaWknKTtcbiAgICB9XG4gICAgY29uc3QgZXh0ZW5kTGluZUJ5ID0gY2lyY2xlMS5yYWRpdXM7XG4gICAgY29uc3QgZXh0ID0gbmV3IEdlb20uTGluZShjaXJjbGUxLngsIGNpcmNsZTEueSwgY2lyY2xlMi54LCBjaXJjbGUyLnkpO1xuICAgIGNvbnN0IGNyb3NzYiA9IFBoYXNlci5HZW9tLkxpbmUuRXh0ZW5kKGV4dCwgMCwgZXh0ZW5kTGluZUJ5KTtcbiAgICBjb25zdCBjcCA9IHBvaW50MlZlYyhjaXJjbGUxLmdldFBvaW50KDApKTtcbiAgICBjb25zdCBjcDIgPSBwb2ludDJWZWMoY2lyY2xlMi5nZXRQb2ludCgwKSk7XG4gICAgY29uc3QgY3Jvc3NhID0gUGhhc2VyLkdlb20uTGluZS5FeHRlbmQobmV3IEdlb20uTGluZShjcC54LCBjcC55LCBjcDIueCwgY3AyLnkpLCBleHRlbmRMaW5lQnkpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGxpbmVJbnRlcnNlY3QoY3Jvc3NiLmdldFBvaW50QSgpLCBjcm9zc2IuZ2V0UG9pbnRCKCksIGNyb3NzYS5nZXRQb2ludEEoKSwgY3Jvc3NhLmdldFBvaW50QigpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUYW5nZW50cyh7IHgsIHksIHJhZGl1cyB9LCBwb2ludCkge1xuICAgIGlmIChwb2ludCkge1xuICAgICAgICBjb25zdCBkeCA9IHggLSBwb2ludC54O1xuICAgICAgICBjb25zdCBkeSA9IHkgLSBwb2ludC55O1xuICAgICAgICBjb25zdCBkZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgIGNvbnN0IGEgPSBNYXRoLmFzaW4ocmFkaXVzIC8gZGQpO1xuICAgICAgICBjb25zdCBiID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgICAgICBjb25zdCB0ID0gYiAtIGE7XG4gICAgICAgIGNvbnN0IHRhID0geyB4OiByYWRpdXMgKiBNYXRoLnNpbih0KSwgeTogcmFkaXVzICogLU1hdGguY29zKHQpIH07XG4gICAgICAgIGNvbnN0IHQyID0gYiArIGE7XG4gICAgICAgIGNvbnN0IHRiID0geyB4OiByYWRpdXMgKiAtTWF0aC5zaW4odDIpLCB5OiByYWRpdXMgKiBNYXRoLmNvcyh0MikgfTtcbiAgICAgICAgY29uc3QgcDEgPSBuZXcgVmVjdG9yMih4ICsgdGEueCwgeSArIHRhLnkpO1xuICAgICAgICBjb25zdCBwMiA9IG5ldyBWZWN0b3IyKHggKyB0Yi54LCB5ICsgdGIueSk7XG4gICAgICAgIHJldHVybiBbcDEsIHAyXTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufVxuLy8gZnVuY3Rpb24gdG8gZ2V0IHRoZSBwZXJwZWRpY3VsYXIgdmVjdG9yIG9mIGEgbGluZVxuZXhwb3J0IGZ1bmN0aW9uIGdldFBlcnBlbmRpY3VsYXIobGluZSkge1xuICAgIC8vIGdldCBhIGRpcmVjdGlvbiB2ZWN0b3IgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgIGNvbnN0IGRpciA9IG5ldyBWZWN0b3IyKGxpbmUuZ2V0UG9pbnRCKCkueCAtIGxpbmUuZ2V0UG9pbnRBKCkueCwgbGluZS5nZXRQb2ludEIoKS55IC0gbGluZS5nZXRQb2ludEEoKS55KTtcbiAgICBjb25zdCB2MSA9IHBvaW50MlZlYyhsaW5lLmdldFBvaW50QSgpKTtcbiAgICBjb25zdCB2MiA9IHBvaW50MlZlYyhsaW5lLmdldFBvaW50QigpKTtcbiAgICAvLyBjb252ZXJ0IHRoZSBsaW5lIHRvIGEgbm9ybWFsaXplZCB1bml0IHZlY3RvclxuICAgIGNvbnN0IGIgPSAodjIuY2xvbmUoKS5zdWJ0cmFjdCh2MSkpLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IHAgPSBsaW5lLmdldFJhbmRvbVBvaW50KCk7XG4gICAgY29uc3QgbGFtZGEgPSBwb2ludDJWZWMocCkuc3VidHJhY3QodjEpLmRvdChiKTtcbiAgICByZXR1cm4gYi5zY2FsZShsYW1kYSkuYWRkKHYxKTtcbn1cbi8vIGZ1bmN0aW9udCB0byBnZXQgdGhlIGlubmVyIGhvbW90aGV0aWMgY2VudGVyIGJldHdlZW4gdHdvIGNpcmNsZXNcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbm5lckhvbW9UaGV0aWNDZW50ZXIoY2lyY2xlMSwgY2lyY2xlMikge1xuICAgIC8vIGdldCBhIGRpcmVjdGlvbmFsIHZlY3RvciBiZXR3ZWVuIHRoZSB0d28gY2lyY2xlc1xuICAgIC8vIEdldCB0aGUgcGVycGVkaWN1bGFyIHZlY3Rvci5cbiAgICBjb25zdCB2ID0gZ2V0UGVycGVuZGljdWxhcihuZXcgR2VvbS5MaW5lKGNpcmNsZTEueCwgY2lyY2xlMS55LCBjaXJjbGUyLngsIGNpcmNsZTIueSkpO1xuICAgIC8vIGdldCBwb2ludCBvbiB0aGUgZmlyc3QgY2lyY2xlXG4gICAgY29uc3QgcDEgPSBjaXJjbGUxLmdldFBvaW50KDApO1xuICAgIC8vIGdldCBwb2ludCBvbiB0aGUgc2Vjb25kIGNpcmNsZVxuICAgIGNvbnN0IHAyID0gY2lyY2xlMi5nZXRQb2ludCgwKTtcbiAgICAvLyBDYWxjdWxhdGUgaW5uZXIgaG9tb3RoZXRpYyBjZW50ZXIuXG4gICAgY29uc3QgYSA9IHYubGVuZ3RoKCk7XG4gICAgY29uc3QgYiA9IGNpcmNsZTEucmFkaXVzO1xuICAgIGNvbnN0IGMgPSBjaXJjbGUyLnJhZGl1cztcbiAgICBjb25zdCBkID0gMiAqICh2LnggKiAocDEueCAtIHAyLngpICsgdi55ICogKHAxLnkgLSBwMi55KSk7XG4gICAgY29uc3QgZSA9IE1hdGgucG93KHAxLnggLSBwMi54LCAyKSArIE1hdGgucG93KHAxLnkgLSBwMi55LCAyKSAtIE1hdGgucG93KGMsIDIpICsgTWF0aC5wb3coYiwgMik7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KGUsIDIpIC0gNCAqIGQgKiAoTWF0aC5wb3coYiwgMikgLSBNYXRoLnBvdyhjLCAyKSk7XG4gICAgaWYgKGYgPCAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB4ID0gKGUgLSBNYXRoLnNxcnQoZikpIC8gKDIgKiBkKTtcbiAgICBjb25zdCB5ID0gKGUgKyBNYXRoLnNxcnQoZikpIC8gKDIgKiBkKTtcbiAgICBjb25zdCBjZW50ZXIxID0gbmV3IFZlY3RvcjIocDEueCArIHggKiAocDIueCAtIHAxLngpLCBwMS55ICsgeCAqIChwMi55IC0gcDEueSkpO1xuICAgIC8vIENhbGN1bGF0ZSBvdXRlciBob21vdGhldGljIGNlbnRlci5cbiAgICAvLyBpZiAoY2lyY2xlMS5yYWRpdXMgIT09IGNpcmNsZTIucmFkaXVzKSB7XG4gICAgLy8gfVxuICAgIHJldHVybiBjZW50ZXIxO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRFeHRlcm5hbFRhbmdlbnRzKGNpcmNsZTEsIGNpcmNsZTIsIGhvbW9UaGV0aWNDZW50ZXIpIHtcbiAgICBpZiAoaG9tb1RoZXRpY0NlbnRlcikge1xuICAgICAgICBjb25zdCBbcDIsIHAxXSA9IGZpbmRUYW5nZW50cyhjaXJjbGUxLCBob21vVGhldGljQ2VudGVyKTtcbiAgICAgICAgY29uc3QgW3AzLCBwNF0gPSBmaW5kVGFuZ2VudHMoY2lyY2xlMiwgaG9tb1RoZXRpY0NlbnRlcik7XG4gICAgICAgIHJldHVybiBbcDEsIHAyLCBwMywgcDRdO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59XG5mdW5jdGlvbiBhbmdsZUJldHdlZW4ob2JqMSwgb2JqMikge1xuICAgIC8vIGFuZ2xlIGluIHJhZGlhbnNcbiAgICB2YXIgYW5nbGVSYWRpYW5zID0gTWF0aC5hdGFuMihvYmoyLnkgLSBvYmoxLnksIG9iajIueCAtIG9iajEueCk7XG4gICAgLy8gYW5nbGUgaW4gZGVncmVlc1xuICAgIHZhciBhbmdsZURlZyA9IChNYXRoLmF0YW4yKG9iajIueSAtIG9iajEueSwgb2JqMi54IC0gb2JqMS54KSAqIDE4MCAvIE1hdGguUEkpO1xuICAgIHJldHVybiBhbmdsZURlZztcbn1cbmV4cG9ydCBjb25zdCBnZXRUcmlhbmdsZSA9IChwMSwgcDIsIHAzKSA9PiBuZXcgR2VvbS5UcmlhbmdsZShwMS54LCBwMS55LCBwMi54LCBwMi55LCBwMy54LCBwMy55KTtcbi8vIGZ1bmN0aW9uIHRoYXQgZmluZHMgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIGNpcmNsZXNcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShjaXJjbGUxLCBjaXJjbGUyKSB7XG4gICAgY29uc3QgdjEgPSBwb2ludDJWZWMoY2lyY2xlMS5nZXRQb2ludCgwKSk7XG4gICAgY29uc3QgdjIgPSBwb2ludDJWZWMoY2lyY2xlMi5nZXRQb2ludCgwKSk7XG4gICAgY29uc3QgdjMgPSB2Mi5jbG9uZSgpLnN1YnRyYWN0KHYxKTtcbiAgICAvLyBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIodjMueSwgdjMueCk7XG4gICAgLy8gY29uc3QgYW5nbGUgPSBcbiAgICBjb25zdCBub3JtID0gUGhhc2VyLk1hdGguQW5nbGUuTm9ybWFsaXplKFBoYXNlci5NYXRoLkFuZ2xlLkJldHdlZW5Qb2ludHModjEsIHYyKSkgLyBNYXRoLlBJICogMjtcbiAgICAvLyBjb25zdCByZWxhdGl2ZUFuZ2xlICA9IE5vcm1hbGl6ZShCZXR3ZWVuUG9pbnRzKHZhbmlzaFBvaW50LCBwb2ludCkpIC8gYWxsO1xuICAgIGNvbnNvbGUubG9nKCdhbmdsZScsIG5vcm0pO1xuICAgIHJldHVybiBub3JtO1xufVxuLy9mdW5jdGlvbiB0aGF0IGZpbmRzIHRoZSBob21vdGhldGljIGNlbnRlciBvZiB0d28gY2lyY2xlc1xuZXhwb3J0IGZ1bmN0aW9uIGdldEhvbW9UaGV0aWNDZW50ZXJBbmdsZShjaXJjbGUxLCBjaXJjbGUyKSB7XG4gICAgY29uc3QgYW5nbGUgPSBQaGFzZXIuTWF0aC5BbmdsZS5Ob3JtYWxpemUoUGhhc2VyLk1hdGguQW5nbGUuQmV0d2VlblBvaW50cyhjaXJjbGUxLCBjaXJjbGUyKSk7XG4gICAgY29uc3QgcGVyY2VudGFnZSA9IGFuZ2xlIC8gKE1hdGguUEkgKiAyKTtcbiAgICBjb25zb2xlLmxvZygncGVyY2VudGFnZScsIHBlcmNlbnRhZ2UpO1xuICAgIGNvbnN0IHYxID0gcG9pbnQyVmVjKGNpcmNsZTEuZ2V0UG9pbnQoMCkpO1xuICAgIGNvbnN0IHYyID0gcG9pbnQyVmVjKGNpcmNsZTIuZ2V0UG9pbnQoMCkpO1xuICAgIGNvbnN0IHYzID0gdjEuY2xvbmUoKS5zdWJ0cmFjdCh2Mik7XG4gICAgY29uc3QgdjQgPSB2My5jbG9uZSgpLnJvdGF0ZShhbmdsZSk7XG4gICAgY29uc3QgdjUgPSB2NC5jbG9uZSgpLmFkZCh2Mik7XG4gICAgcmV0dXJuIHY1O1xufVxuLy8gQ2hlY2sgaWYgcmVjdGFuZ2xlIGEgY29udGFpbnMgcmVjdGFuZ2xlIGJcbi8vIEVhY2ggb2JqZWN0IChhIGFuZCBiKSBzaG91bGQgaGF2ZSAyIHByb3BlcnRpZXMgdG8gcmVwcmVzZW50IHRoZVxuLy8gdG9wLWxlZnQgY29ybmVyICh4MSwgeTEpIGFuZCAyIGZvciB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciAoeDIsIHkyKS5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWlucyhhLCBiKSB7XG4gICAgcmV0dXJuICEoYi54MSA8IGEueDEgfHxcbiAgICAgICAgYi55MSA8IGEueTEgfHxcbiAgICAgICAgYi54MiA+IGEueDIgfHxcbiAgICAgICAgYi55MiA+IGEueTIpO1xufVxuLy8gQ2hlY2sgaWYgcmVjdGFuZ2xlIGEgb3ZlcmxhcHMgcmVjdGFuZ2xlIGJcbi8vIEVhY2ggb2JqZWN0IChhIGFuZCBiKSBzaG91bGQgaGF2ZSAyIHByb3BlcnRpZXMgdG8gcmVwcmVzZW50IHRoZVxuLy8gdG9wLWxlZnQgY29ybmVyICh4MSwgeTEpIGFuZCAyIGZvciB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciAoeDIsIHkyKS5cbmV4cG9ydCBmdW5jdGlvbiBvdmVybGFwcyhhLCBiKSB7XG4gICAgLy8gbm8gaG9yaXpvbnRhbCBvdmVybGFwXG4gICAgaWYgKGEueDEgPj0gYi54MiB8fCBiLngxID49IGEueDIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyBubyB2ZXJ0aWNhbCBvdmVybGFwXG4gICAgaWYgKGEueTEgPj0gYi55MiB8fCBiLnkxID49IGEueTIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8vIENoZWNrIGlmIHJlY3RhbmdsZSBhIHRvdWNoZXMgcmVjdGFuZ2xlIGJcbi8vIEVhY2ggb2JqZWN0IChhIGFuZCBiKSBzaG91bGQgaGF2ZSAyIHByb3BlcnRpZXMgdG8gcmVwcmVzZW50IHRoZVxuLy8gdG9wLWxlZnQgY29ybmVyICh4MSwgeTEpIGFuZCAyIGZvciB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciAoeDIsIHkyKS5cbmV4cG9ydCBmdW5jdGlvbiB0b3VjaGVzKGEsIGIpIHtcbiAgICAvLyBoYXMgaG9yaXpvbnRhbCBnYXBcbiAgICBpZiAoYS54MSA+IGIueDIgfHwgYi54MSA+IGEueDIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyBoYXMgdmVydGljYWwgZ2FwXG4gICAgaWYgKGEueTEgPiBiLnkyIHx8IGIueTEgPiBhLnkyKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgY29uc3Qgb3ZlcmxhcCA9IChbdG9wTGVmdCwgYm90dG9tUmlnaHRdLCBbdG9wTGVmdDIsIGJvdHRvbVJpZ2h0Ml0sIHh5ID0gMCkgPT4gISh0b3BMZWZ0W3h5XSA+PSBib3R0b21SaWdodDJbeHldIHx8IHRvcExlZnQyW3h5XSA+PSBib3R0b21SaWdodFt4eV0pO1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgU2NlbmVzIGZyb20gJy4vc2NlbmVzJztcbmltcG9ydCBDb250YWluZXJMaXRlUGx1Z2luIGZyb20gJ3BoYXNlcjMtcmV4LXBsdWdpbnMvcGx1Z2lucy9jb250YWluZXJsaXRlLXBsdWdpbi5qcyc7XG5pbXBvcnQgQ3VzdG9tU2hhcGVzUGx1Z2luIGZyb20gJ3BoYXNlcjMtcmV4LXBsdWdpbnMvcGx1Z2lucy9jdXN0b21zaGFwZXMtcGx1Z2luLmpzJztcbmltcG9ydCBSb3VuZFJlY3RhbmdsZVBsdWdpbiBmcm9tICdwaGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvcm91bmRyZWN0YW5nbGUtcGx1Z2luJztcbi8vIGltcG9ydCB7IFBoYXNlck5hdk1lc2hQbHVnaW4gfSBmcm9tIFwicGhhc2VyLW5hdm1lc2hcIjtcbmltcG9ydCBQaGFzZXJOYXZNZXNoUGx1Z2luIGZyb20gJy4vcGx1Z2lucy9waGFzZXItbmF2bWVzaC9zcmMvcGhhc2VyLW5hdm1lc2gtcGx1Z2luJztcbmltcG9ydCBwYXN1dW5hIGZyb20gJ0BwaW5ra2lzL3BoYXNlci1wbHVnaW4tcGFzdXVuYSc7XG5jb25zdCBnYW1lQ29uZmlnID0ge1xuICAgIHRpdGxlOiAnYmxhc3RvZmYnLFxuICAgIHR5cGU6IFBoYXNlci5BVVRPLFxuICAgIHNjYWxlOiB7XG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgfSxcbiAgICBzY2VuZTogU2NlbmVzLFxuICAgIHBoeXNpY3M6IHtcbiAgICAgICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgICAgIGFyY2FkZToge1xuICAgICAgICAvLyBkZWJ1ZzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IHtcbiAgICAgICAgc2NlbmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiUGhhc2VyTmF2TWVzaFBsdWdpblwiLFxuICAgICAgICAgICAgICAgIHBsdWdpbjogUGhhc2VyTmF2TWVzaFBsdWdpbixcbiAgICAgICAgICAgICAgICBtYXBwaW5nOiBcIm5hdk1lc2hQbHVnaW5cIixcbiAgICAgICAgICAgICAgICBzdGFydDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZ2xvYmFsOiBbXG4gICAgICAgICAgICB7IGtleTogJ3Bhc3V1bmFwbHVnaW4nLCBwbHVnaW46IHBhc3V1bmEsIHN0YXJ0OiB0cnVlIH0sXG4gICAgICAgICAgICB7IGtleTogJ3JleENvbnRhaW5lckxpdGVQbHVnaW4nLCBwbHVnaW46IENvbnRhaW5lckxpdGVQbHVnaW4sIHN0YXJ0OiB0cnVlIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAncmV4Q3VzdG9tU2hhcGVzUGx1Z2luJyxcbiAgICAgICAgICAgICAgICBwbHVnaW46IEN1c3RvbVNoYXBlc1BsdWdpbixcbiAgICAgICAgICAgICAgICBzdGFydDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAncmV4Um91bmRSZWN0YW5nbGVQbHVnaW4nLFxuICAgICAgICAgICAgICAgIHBsdWdpbjogUm91bmRSZWN0YW5nbGVQbHVnaW4sXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgcGFyZW50OiAnZ2FtZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXG59O1xuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIGdhbWUuc2NhbGUucmVmcmVzaCgpO1xufSk7XG4iLCJjbGFzcyBWZXJ0ZXgge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG4gICAgZXF1YWxzKG9iaikge1xuICAgICAgICBpZiAodGhpcyA9PT0gb2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gb2JqLnggJiYgdGhpcy55ID09PSBvYmoueTtcbiAgICB9XG59XG5jb25zdCBFUFNJTE9OID0gMi4yMjA0NDYwNDkyNTAzMTMxZS0xNjtcbmNvbnN0IExFRlQgPSAwO1xuY29uc3QgUklHSFQgPSAxO1xuY29uc3QgQ0xJUCA9IDA7XG5jb25zdCBTVUJKID0gMTtcbmNvbnN0IGlzQ29udHJpYnV0aW5nID0gU3ltYm9sKCk7XG5jb25zdCBzZXRDb250cmlidXRpbmcgPSBTeW1ib2woKTtcbnZhciBPcGVyYXRpb25UeXBlO1xuKGZ1bmN0aW9uIChPcGVyYXRpb25UeXBlKSB7XG4gICAgT3BlcmF0aW9uVHlwZVtPcGVyYXRpb25UeXBlW1wiRElGXCJdID0gMF0gPSBcIkRJRlwiO1xuICAgIE9wZXJhdGlvblR5cGVbT3BlcmF0aW9uVHlwZVtcIklOVFwiXSA9IDFdID0gXCJJTlRcIjtcbiAgICBPcGVyYXRpb25UeXBlW09wZXJhdGlvblR5cGVbXCJYT1JcIl0gPSAyXSA9IFwiWE9SXCI7XG4gICAgT3BlcmF0aW9uVHlwZVtPcGVyYXRpb25UeXBlW1wiQUREXCJdID0gM10gPSBcIkFERFwiO1xufSkoT3BlcmF0aW9uVHlwZSB8fCAoT3BlcmF0aW9uVHlwZSA9IHt9KSk7XG5mdW5jdGlvbiBjbGlwKG9wLCBzdWJqZWN0LCBjbGlwcGVyKSB7XG4gICAgY29uc3Qgc0VtcHR5ID0gc3ViamVjdC5pc0VtcHR5O1xuICAgIGNvbnN0IGNFbXB0eSA9IGNsaXBwZXIuaXNFbXB0eTtcbiAgICAvKiBUZXN0IGZvciB0cml2aWFsIE5VTEwgcmVzdWx0IGNhc2VzICovXG4gICAgaWYgKChjRW1wdHkgJiYgb3AgPT09IE9wZXJhdGlvblR5cGUuSU5UKSB8fFxuICAgICAgICAoc0VtcHR5ICYmIChjRW1wdHkgfHwgb3AgPT09IE9wZXJhdGlvblR5cGUuSU5UIHx8IG9wID09PSBPcGVyYXRpb25UeXBlLkRJRikpKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2ltcGxlUG9seWdvbihbXSk7XG4gICAgfVxuICAgIC8qIElkZW50aWZ5IHBvdGVudGlhbHkgY29udHJpYnV0aW5nIGNvbnRvdXJzICovXG4gICAgaWYgKChvcCA9PT0gT3BlcmF0aW9uVHlwZS5JTlQgfHwgb3AgPT09IE9wZXJhdGlvblR5cGUuRElGKSAmJiAhKHNFbXB0eSB8fCBjRW1wdHkpKSB7XG4gICAgICAgIG1pbmlNYXhUZXN0KHN1YmplY3QsIGNsaXBwZXIsIG9wKTtcbiAgICB9XG4gICAgLyogQnVpbGQgTE1UICovXG4gICAgY29uc3QgbG10VGFibGUgPSBuZXcgTG10VGFibGUoKTtcbiAgICBjb25zdCBzYnRlID0gbmV3IFNjYW5CZWFtVHJlZUVudHJpZXMoKTtcbiAgICBpZiAoIXNFbXB0eSkge1xuICAgICAgICBidWlsZExtdChsbXRUYWJsZSwgc2J0ZSwgc3ViamVjdCwgU1VCSiwgb3ApO1xuICAgIH1cbiAgICBpZiAoIWNFbXB0eSkge1xuICAgICAgICBidWlsZExtdChsbXRUYWJsZSwgc2J0ZSwgY2xpcHBlciwgQ0xJUCwgb3ApO1xuICAgIH1cbiAgICAvKiBSZXR1cm4gYSBOVUxMIHJlc3VsdCBpZiBubyBjb250b3VycyBjb250cmlidXRlICovXG4gICAgaWYgKGxtdFRhYmxlLnRvcCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbmV3IFNpbXBsZVBvbHlnb24oW10pO1xuICAgIH1cbiAgICBjb25zdCBwYXJpdHkgPSB7XG4gICAgICAgIC8qIEludmVydCBjbGlwIHBvbHlnb24gZm9yIGRpZmZlcmVuY2Ugb3BlcmF0aW9uICovXG4gICAgICAgIGNsaXA6IG9wID09PSBPcGVyYXRpb25UeXBlLkRJRiA/IFJJR0hUIDogTEVGVCxcbiAgICAgICAgc3ViajogTEVGVCxcbiAgICB9O1xuICAgIC8qIEJ1aWxkIHNjYW5iZWFtIHRhYmxlIGZyb20gc2NhbmJlYW0gdHJlZSAqL1xuICAgIGNvbnN0IHNidCA9IHNidGUuYnVpbGRTQlQoKTtcbiAgICAvKiBVc2VkIHRvIGNyZWF0ZSByZXN1bHRpbmcgUG9seWdvbiAqL1xuICAgIGNvbnN0IG91dFBvbHkgPSBuZXcgVG9wUG9seWdvbk5vZGUoKTtcbiAgICBjb25zdCBhZXQgPSBuZXcgQWV0VHJlZSgpO1xuICAgIGxldCBzY2FuYmVhbSA9IDA7XG4gICAgbGV0IGxvY2FsTWluID0gbG10VGFibGUudG9wO1xuICAgIC8qIFByb2Nlc3MgZWFjaCBzY2FuYmVhbSAqL1xuICAgIHdoaWxlIChzY2FuYmVhbSA8IHNidC5sZW5ndGgpIHtcbiAgICAgICAgLyogU2V0IHliIGFuZCB5dCB0byB0aGUgYm90dG9tIGFuZCB0b3Agb2YgdGhlIHNjYW5iZWFtICovXG4gICAgICAgIGNvbnN0IHliID0gc2J0W3NjYW5iZWFtKytdO1xuICAgICAgICBsZXQgeXQgPSAwO1xuICAgICAgICBsZXQgZHkgPSAwO1xuICAgICAgICBpZiAoc2NhbmJlYW0gPCBzYnQubGVuZ3RoKSB7XG4gICAgICAgICAgICB5dCA9IHNidFtzY2FuYmVhbV07XG4gICAgICAgICAgICBkeSA9IHl0IC0geWI7XG4gICAgICAgIH1cbiAgICAgICAgLyogPT09IFNDQU5CRUFNIEJPVU5EQVJZIFBST0NFU1NJTkcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAgICAgLyogSWYgTE1UIG5vZGUgY29ycmVzcG9uZGluZyB0byB5YiBleGlzdHMgKi9cbiAgICAgICAgaWYgKGxvY2FsTWluICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxNaW4ueSA9PT0geWIpIHtcbiAgICAgICAgICAgICAgICAvKiBBZGQgZWRnZXMgc3RhcnRpbmcgYXQgdGhpcyBsb2NhbCBtaW5pbXVtIHRvIHRoZSBBRVQgKi9cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBlZGdlID0gbG9jYWxNaW4uZmlyc3RCb3VuZDsgZWRnZSAhPT0gbnVsbDsgZWRnZSA9IGVkZ2UubmV4dEJvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGFldC5hZGRFZGdlKGVkZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2NhbE1pbiA9IGxvY2FsTWluLm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFldC50b3AgPT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbmNvdW50ZXJlZCBVbmV4cGVjdGVkIE51bGwgRWRnZVwiKTtcbiAgICAgICAgLyogQ3JlYXRlIGJ1bmRsZXMgd2l0aGluIEFFVCAqL1xuICAgICAgICBsZXQgZTAgPSBhZXQudG9wO1xuICAgICAgICBsZXQgZTEgPSBhZXQudG9wO1xuICAgICAgICAvKiBTZXQgdXAgYnVuZGxlIGZpZWxkcyBvZiBmaXJzdCBlZGdlICovXG4gICAgICAgIGFldC50b3AuYnVuZGxlLmFib3ZlW2FldC50b3AudHlwZV0gPSAoYWV0LnRvcC50b3AueSAhPT0geWIpID8gMSA6IDA7XG4gICAgICAgIGFldC50b3AuYnVuZGxlLmFib3ZlWzEgLSBhZXQudG9wLnR5cGVdID0gMDtcbiAgICAgICAgYWV0LnRvcC5ic3RhdGUuYWJvdmUgPSBCdW5kbGVTdGF0ZS5VTkJVTkRMRUQ7XG4gICAgICAgIGZvciAobGV0IG5leHRFZGdlID0gYWV0LnRvcC5uZXh0OyBuZXh0RWRnZSAhPT0gbnVsbDsgbmV4dEVkZ2UgPSBuZXh0RWRnZS5uZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0VHlwZSA9IG5leHRFZGdlLnR5cGU7XG4gICAgICAgICAgICBjb25zdCBuZXh0VHlwZU9wcG9zaXRlID0gMSAtIG5leHRUeXBlO1xuICAgICAgICAgICAgLyogU2V0IHVwIGJ1bmRsZSBmaWVsZHMgb2YgbmV4dCBlZGdlICovXG4gICAgICAgICAgICBuZXh0RWRnZS5idW5kbGUuYWJvdmVbbmV4dFR5cGVdID0gKG5leHRFZGdlLnRvcC55ICE9PSB5YikgPyAxIDogMDtcbiAgICAgICAgICAgIG5leHRFZGdlLmJ1bmRsZS5hYm92ZVtuZXh0VHlwZU9wcG9zaXRlXSA9IDA7XG4gICAgICAgICAgICBuZXh0RWRnZS5ic3RhdGUuYWJvdmUgPSBCdW5kbGVTdGF0ZS5VTkJVTkRMRUQ7XG4gICAgICAgICAgICAvKiBCdW5kbGUgZWRnZXMgYWJvdmUgdGhlIHNjYW5iZWFtIGJvdW5kYXJ5IGlmIHRoZXkgY29pbmNpZGUgKi9cbiAgICAgICAgICAgIGlmIChuZXh0RWRnZS5idW5kbGUuYWJvdmVbbmV4dFR5cGVdID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKEVRKGUwLnhiLCBuZXh0RWRnZS54YikgJiYgRVEoZTAuZHgsIG5leHRFZGdlLmR4KSAmJiAoZTAudG9wLnkgIT09IHliKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0RWRnZS5idW5kbGUuYWJvdmVbbmV4dFR5cGVdIF49IGUwLmJ1bmRsZS5hYm92ZVtuZXh0VHlwZV07XG4gICAgICAgICAgICAgICAgICAgIG5leHRFZGdlLmJ1bmRsZS5hYm92ZVtuZXh0VHlwZU9wcG9zaXRlXSA9IGUwLmJ1bmRsZS5hYm92ZVtuZXh0VHlwZU9wcG9zaXRlXTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVkZ2UuYnN0YXRlLmFib3ZlID0gQnVuZGxlU3RhdGUuQlVORExFX0hFQUQ7XG4gICAgICAgICAgICAgICAgICAgIGUwLmJ1bmRsZS5hYm92ZVtDTElQXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGUwLmJ1bmRsZS5hYm92ZVtTVUJKXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGUwLmJzdGF0ZS5hYm92ZSA9IEJ1bmRsZVN0YXRlLkJVTkRMRV9UQUlMO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlMCA9IG5leHRFZGdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhvcml6ID0geyBjbGlwOiBIU3RhdGUuTkgsIHN1Ymo6IEhTdGF0ZS5OSCB9O1xuICAgICAgICBjb25zdCBleGlzdHMgPSB7IGNsaXA6IDAsIHN1Ymo6IDAgfTtcbiAgICAgICAgLyogU2V0IGR1bW15IHByZXZpb3VzIHggdmFsdWUgKi9cbiAgICAgICAgbGV0IHB4ID0gLU51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGxldCBjZiA9IG51bGw7XG4gICAgICAgIC8qIFByb2Nlc3MgZWFjaCBlZGdlIGF0IHRoaXMgc2NhbmJlYW0gYm91bmRhcnkgKi9cbiAgICAgICAgZm9yIChsZXQgZWRnZSA9IGFldC50b3A7IGVkZ2UgIT09IG51bGw7IGVkZ2UgPSBlZGdlLm5leHQpIHtcbiAgICAgICAgICAgIGV4aXN0cy5jbGlwID0gZWRnZS5idW5kbGUuYWJvdmVbQ0xJUF0gKyAoZWRnZS5idW5kbGUuYmVsb3dbQ0xJUF0gPDwgMSk7XG4gICAgICAgICAgICBleGlzdHMuc3ViaiA9IGVkZ2UuYnVuZGxlLmFib3ZlW1NVQkpdICsgKGVkZ2UuYnVuZGxlLmJlbG93W1NVQkpdIDw8IDEpO1xuICAgICAgICAgICAgaWYgKChleGlzdHMuY2xpcCB8IGV4aXN0cy5zdWJqKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogU2V0IGJ1bmRsZSBzaWRlICovXG4gICAgICAgICAgICBlZGdlLmJzaWRlLmNsaXAgPSBwYXJpdHkuY2xpcDtcbiAgICAgICAgICAgIGVkZ2UuYnNpZGUuc3ViaiA9IHBhcml0eS5zdWJqO1xuICAgICAgICAgICAgbGV0IGNvbnRyaWJ1dGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGJyID0gMDtcbiAgICAgICAgICAgIGxldCBibCA9IDA7XG4gICAgICAgICAgICBsZXQgdHIgPSAwO1xuICAgICAgICAgICAgbGV0IHRsID0gMDtcbiAgICAgICAgICAgIC8qIERldGVybWluZSBjb250cmlidXRpbmcgc3RhdHVzIGFuZCBxdWFkcmFudCBvY2N1cGFuY2llcyAqL1xuICAgICAgICAgICAgaWYgKChvcCA9PT0gT3BlcmF0aW9uVHlwZS5ESUYpIHx8IChvcCA9PT0gT3BlcmF0aW9uVHlwZS5JTlQpKSB7XG4gICAgICAgICAgICAgICAgY29udHJpYnV0aW5nID0gKChleGlzdHMuY2xpcCAhPT0gMCkgJiYgKChwYXJpdHkuc3ViaiAhPT0gMCkgfHwgKGhvcml6LnN1YmogIT09IDApKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKChleGlzdHMuc3ViaiAhPT0gMCkgJiYgKChwYXJpdHkuY2xpcCAhPT0gMCkgfHwgKGhvcml6LmNsaXAgIT09IDApKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKChleGlzdHMuY2xpcCAhPT0gMCkgJiYgKGV4aXN0cy5zdWJqICE9PSAwKSAmJiAocGFyaXR5LmNsaXAgPT09IHBhcml0eS5zdWJqKSk7XG4gICAgICAgICAgICAgICAgYnIgPSBwYXJpdHkuY2xpcCAmIHBhcml0eS5zdWJqO1xuICAgICAgICAgICAgICAgIGJsID0gKHBhcml0eS5jbGlwIF4gZWRnZS5idW5kbGUuYWJvdmVbQ0xJUF0pICYgKHBhcml0eS5zdWJqIF4gZWRnZS5idW5kbGUuYWJvdmVbU1VCSl0pO1xuICAgICAgICAgICAgICAgIHRyID0gKHBhcml0eS5jbGlwIF4gKGhvcml6LmNsaXAgIT09IEhTdGF0ZS5OSCA/IDEgOiAwKSkgJiAocGFyaXR5LnN1YmogXiAoaG9yaXouc3ViaiAhPT0gSFN0YXRlLk5IID8gMSA6IDApKTtcbiAgICAgICAgICAgICAgICB0bCA9IChwYXJpdHkuY2xpcCBeIChob3Jpei5jbGlwICE9PSBIU3RhdGUuTkggPyAxIDogMCkgXiBlZGdlLmJ1bmRsZS5iZWxvd1tDTElQXSkgJlxuICAgICAgICAgICAgICAgICAgICAocGFyaXR5LnN1YmogXiAoaG9yaXouc3ViaiAhPT0gSFN0YXRlLk5IID8gMSA6IDApIF4gZWRnZS5idW5kbGUuYmVsb3dbU1VCSl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3AgPT09IE9wZXJhdGlvblR5cGUuWE9SKSB7XG4gICAgICAgICAgICAgICAgY29udHJpYnV0aW5nID0gKGV4aXN0cy5jbGlwICE9PSAwKSB8fCAoZXhpc3RzLnN1YmogIT09IDApO1xuICAgICAgICAgICAgICAgIGJyID0gcGFyaXR5LmNsaXAgXiBwYXJpdHkuc3ViajtcbiAgICAgICAgICAgICAgICBibCA9IChwYXJpdHkuY2xpcCBeIGVkZ2UuYnVuZGxlLmFib3ZlW0NMSVBdKSBeIChwYXJpdHkuc3ViaiBeIGVkZ2UuYnVuZGxlLmFib3ZlW1NVQkpdKTtcbiAgICAgICAgICAgICAgICB0ciA9IHBhcml0eS5jbGlwIF4gKGhvcml6LmNsaXAgIT09IEhTdGF0ZS5OSCA/IDEgOiAwKSBeIHBhcml0eS5zdWJqIF4gKGhvcml6LnN1YmogIT09IEhTdGF0ZS5OSCA/IDEgOiAwKTtcbiAgICAgICAgICAgICAgICB0bCA9IHBhcml0eS5jbGlwIF4gKGhvcml6LmNsaXAgIT09IEhTdGF0ZS5OSCA/IDEgOiAwKSBeIGVkZ2UuYnVuZGxlLmJlbG93W0NMSVBdXG4gICAgICAgICAgICAgICAgICAgIF4gcGFyaXR5LnN1YmogXiAoaG9yaXouc3ViaiAhPT0gSFN0YXRlLk5IID8gMSA6IDApIF4gZWRnZS5idW5kbGUuYmVsb3dbU1VCSl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcCA9PT0gT3BlcmF0aW9uVHlwZS5BREQpIHtcbiAgICAgICAgICAgICAgICBjb250cmlidXRpbmcgPSAoKGV4aXN0cy5jbGlwICE9PSAwKSAmJiAoIShwYXJpdHkuc3ViaiAhPT0gMCkgfHwgKGhvcml6LnN1YmogIT09IDApKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKChleGlzdHMuc3ViaiAhPT0gMCkgJiYgKCEocGFyaXR5LmNsaXAgIT09IDApIHx8IChob3Jpei5jbGlwICE9PSAwKSkpIHx8XG4gICAgICAgICAgICAgICAgICAgICgoZXhpc3RzLmNsaXAgIT09IDApICYmIChleGlzdHMuc3ViaiAhPT0gMCkgJiYgKHBhcml0eS5jbGlwID09PSBwYXJpdHkuc3ViaikpO1xuICAgICAgICAgICAgICAgIGJyID0gcGFyaXR5LmNsaXAgfCBwYXJpdHkuc3ViajtcbiAgICAgICAgICAgICAgICBibCA9IChwYXJpdHkuY2xpcCBeIGVkZ2UuYnVuZGxlLmFib3ZlW0NMSVBdKSB8IChwYXJpdHkuc3ViaiBeIGVkZ2UuYnVuZGxlLmFib3ZlW1NVQkpdKTtcbiAgICAgICAgICAgICAgICB0ciA9IChwYXJpdHkuY2xpcCBeIChob3Jpei5jbGlwICE9PSBIU3RhdGUuTkggPyAxIDogMCkpIHwgKHBhcml0eS5zdWJqIF4gKChob3Jpei5zdWJqICE9PSBIU3RhdGUuTkgpID8gMSA6IDApKTtcbiAgICAgICAgICAgICAgICB0bCA9IChwYXJpdHkuY2xpcCBeIChob3Jpei5jbGlwICE9PSBIU3RhdGUuTkggPyAxIDogMCkgXiBlZGdlLmJ1bmRsZS5iZWxvd1tDTElQXSkgfFxuICAgICAgICAgICAgICAgICAgICAocGFyaXR5LnN1YmogXiAoaG9yaXouc3ViaiAhPT0gSFN0YXRlLk5IID8gMSA6IDApIF4gZWRnZS5idW5kbGUuYmVsb3dbU1VCSl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogVXBkYXRlIHBhcml0eSAqL1xuICAgICAgICAgICAgcGFyaXR5LmNsaXAgXj0gZWRnZS5idW5kbGUuYWJvdmVbQ0xJUF07XG4gICAgICAgICAgICBwYXJpdHkuc3ViaiBePSBlZGdlLmJ1bmRsZS5hYm92ZVtTVUJKXTtcbiAgICAgICAgICAgIC8qIFVwZGF0ZSBob3Jpem9udGFsIHN0YXRlICovXG4gICAgICAgICAgICBpZiAoZXhpc3RzLmNsaXAgIT09IDApIHtcbiAgICAgICAgICAgICAgICBob3Jpei5jbGlwID0gSFN0YXRlLm5leHRTdGF0ZVtob3Jpei5jbGlwXVsoKGV4aXN0cy5jbGlwIC0gMSkgPDwgMSkgKyBwYXJpdHkuY2xpcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXhpc3RzLnN1YmogIT09IDApIHtcbiAgICAgICAgICAgICAgICBob3Jpei5zdWJqID0gSFN0YXRlLm5leHRTdGF0ZVtob3Jpei5zdWJqXVsoKGV4aXN0cy5zdWJqIC0gMSkgPDwgMSkgKyBwYXJpdHkuc3Vial07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNvbnRyaWJ1dGluZykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB4YiB9ID0gZWRnZTtcbiAgICAgICAgICAgIHN3aXRjaCAoZ2V0VmVydGV4VHlwZSh0ciwgdGwsIGJyLCBibCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuRU1OOlxuICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5JTU46XG4gICAgICAgICAgICAgICAgICAgIGNmID0gb3V0UG9seS5hZGRMb2NhbE1pbih4YiwgeWIpO1xuICAgICAgICAgICAgICAgICAgICBweCA9IHhiO1xuICAgICAgICAgICAgICAgICAgICBlZGdlLm91dHAuYWJvdmUgPSBjZjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLkVSSTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNmID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBOdWxsIFBvbHlnb25cIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4YiAhPT0gcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNmLmFkZFJpZ2h0KHhiLCB5Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICBweCA9IHhiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVkZ2Uub3V0cC5hYm92ZSA9IGNmO1xuICAgICAgICAgICAgICAgICAgICBjZiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5FTEk6XG4gICAgICAgICAgICAgICAgICAgIGNmID0gZWRnZS5vdXRwLmJlbG93O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2YgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIE51bGwgUG9seWdvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2YuYWRkTGVmdCh4YiwgeWIpO1xuICAgICAgICAgICAgICAgICAgICBweCA9IHhiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuRU1YOlxuICAgICAgICAgICAgICAgICAgICBpZiAoY2YgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIE51bGwgUG9seWdvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVkZ2Uub3V0cC5iZWxvdyA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgTnVsbCBQb2x5Z29uXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGIgIT09IHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZi5hZGRMZWZ0KHhiLCB5Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICBweCA9IHhiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG91dFBvbHkubWVyZ2VSaWdodChjZiwgZWRnZS5vdXRwLmJlbG93KTtcbiAgICAgICAgICAgICAgICAgICAgY2YgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuSUxJOlxuICAgICAgICAgICAgICAgICAgICBpZiAoY2YgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIE51bGwgUG9seWdvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhiICE9PSBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2YuYWRkTGVmdCh4YiwgeWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHggPSB4YjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlZGdlLm91dHAuYWJvdmUgPSBjZjtcbiAgICAgICAgICAgICAgICAgICAgY2YgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuSVJJOlxuICAgICAgICAgICAgICAgICAgICBjZiA9IGVkZ2Uub3V0cC5iZWxvdztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNmID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBOdWxsIFBvbHlnb25cIik7XG4gICAgICAgICAgICAgICAgICAgIGNmLmFkZFJpZ2h0KHhiLCB5Yik7XG4gICAgICAgICAgICAgICAgICAgIHB4ID0geGI7XG4gICAgICAgICAgICAgICAgICAgIGVkZ2Uub3V0cC5iZWxvdyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5JTVg6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZiA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgTnVsbCBQb2x5Z29uXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWRnZS5vdXRwLmJlbG93ID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBOdWxsIFBvbHlnb25cIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4YiAhPT0gcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNmLmFkZFJpZ2h0KHhiLCB5Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICBweCA9IHhiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG91dFBvbHkubWVyZ2VMZWZ0KGNmLCBlZGdlLm91dHAuYmVsb3cpO1xuICAgICAgICAgICAgICAgICAgICBjZiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGVkZ2Uub3V0cC5iZWxvdyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5JTU06XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZiA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgTnVsbCBQb2x5Z29uXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWRnZS5vdXRwLmJlbG93ID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBOdWxsIFBvbHlnb25cIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4YiAhPT0gcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNmLmFkZFJpZ2h0KHhiLCB5Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICBweCA9IHhiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG91dFBvbHkubWVyZ2VMZWZ0KGNmLCBlZGdlLm91dHAuYmVsb3cpO1xuICAgICAgICAgICAgICAgICAgICBlZGdlLm91dHAuYmVsb3cgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBjZiA9IG91dFBvbHkuYWRkTG9jYWxNaW4oeGIsIHliKTtcbiAgICAgICAgICAgICAgICAgICAgZWRnZS5vdXRwLmFib3ZlID0gY2Y7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5FTU06XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZiA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgTnVsbCBQb2x5Z29uXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWRnZS5vdXRwLmJlbG93ID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBOdWxsIFBvbHlnb25cIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4YiAhPT0gcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNmLmFkZExlZnQoeGIsIHliKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB4ID0geGI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3V0UG9seS5tZXJnZVJpZ2h0KGNmLCBlZGdlLm91dHAuYmVsb3cpO1xuICAgICAgICAgICAgICAgICAgICBlZGdlLm91dHAuYmVsb3cgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBjZiA9IG91dFBvbHkuYWRkTG9jYWxNaW4oeGIsIHliKTtcbiAgICAgICAgICAgICAgICAgICAgZWRnZS5vdXRwLmFib3ZlID0gY2Y7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5MRUQ6XG4gICAgICAgICAgICAgICAgICAgIGlmIChlZGdlLm91dHAuYmVsb3cgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIE51bGwgUG9seWdvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVkZ2UuYm90LnkgPT09IHliKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGdlLm91dHAuYmVsb3cuYWRkTGVmdCh4YiwgeWIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVkZ2Uub3V0cC5hYm92ZSA9IGVkZ2Uub3V0cC5iZWxvdztcbiAgICAgICAgICAgICAgICAgICAgcHggPSB4YjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLlJFRDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVkZ2Uub3V0cC5iZWxvdyA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgTnVsbCBQb2x5Z29uXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWRnZS5ib3QueSA9PT0geWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2Uub3V0cC5iZWxvdy5hZGRSaWdodCh4YiwgeWIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVkZ2Uub3V0cC5hYm92ZSA9IGVkZ2Uub3V0cC5iZWxvdztcbiAgICAgICAgICAgICAgICAgICAgcHggPSB4YjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiBEZWxldGUgdGVybWluYXRpbmcgZWRnZXMgZnJvbSB0aGUgQUVULCBvdGhlcndpc2UgY29tcHV0ZSB4dCAqL1xuICAgICAgICBmb3IgKGxldCBlZGdlID0gYWV0LnRvcDsgZWRnZSAhPT0gbnVsbDsgZWRnZSA9IGVkZ2UubmV4dCkge1xuICAgICAgICAgICAgaWYgKGVkZ2UudG9wLnkgPT09IHliKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwcmV2LCBuZXh0IH0gPSBlZGdlO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFldC50b3AgPSBuZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldi5uZXh0ID0gbmV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5leHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dC5wcmV2ID0gcHJldjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyogQ29weSBidW5kbGUgaGVhZCBzdGF0ZSB0byB0aGUgYWRqYWNlbnQgdGFpbCBlZGdlIGlmIHJlcXVpcmVkICovXG4gICAgICAgICAgICAgICAgaWYgKChlZGdlLmJzdGF0ZS5iZWxvdyA9PT0gQnVuZGxlU3RhdGUuQlVORExFX0hFQUQpICYmIChwcmV2ICE9PSBudWxsKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJldi5ic3RhdGUuYmVsb3cgPT09IEJ1bmRsZVN0YXRlLkJVTkRMRV9UQUlMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2Lm91dHAuYmVsb3cgPSBlZGdlLm91dHAuYmVsb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2LmJzdGF0ZS5iZWxvdyA9IEJ1bmRsZVN0YXRlLlVOQlVORExFRDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2LnByZXYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldi5wcmV2LmJzdGF0ZS5iZWxvdyA9PT0gQnVuZGxlU3RhdGUuQlVORExFX1RBSUwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldi5ic3RhdGUuYmVsb3cgPSBCdW5kbGVTdGF0ZS5CVU5ETEVfSEVBRDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlZGdlLnh0ID0gZWRnZS50b3AueSA9PT0geXQgP1xuICAgICAgICAgICAgICAgICAgICBlZGdlLnRvcC54IDogKGVkZ2UuYm90LnggKyBlZGdlLmR4ICogKHl0IC0gZWRnZS5ib3QueSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzY2FuYmVhbSA+PSBzYnRlLnNidEVudHJpZXMpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8qID09PSBTQ0FOQkVBTSBJTlRFUklPUiBQUk9DRVNTSU5HID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgICAgICAvKiBCdWlsZCBpbnRlcnNlY3Rpb24gdGFibGUgZm9yIHRoZSBjdXJyZW50IHNjYW5iZWFtICovXG4gICAgICAgIGNvbnN0IGl0VGFibGUgPSBuZXcgSXROb2RlVGFibGUoKTtcbiAgICAgICAgaXRUYWJsZS5idWlsZEludGVyc2VjdGlvblRhYmxlKGFldCwgZHkpO1xuICAgICAgICAvKiBQcm9jZXNzIGVhY2ggbm9kZSBpbiB0aGUgaW50ZXJzZWN0aW9uIHRhYmxlICovXG4gICAgICAgIGZvciAobGV0IGludGVyc2VjdCA9IGl0VGFibGUudG9wOyBpbnRlcnNlY3QgIT09IG51bGw7IGludGVyc2VjdCA9IGludGVyc2VjdC5uZXh0KSB7XG4gICAgICAgICAgICBbZTAsIGUxXSA9IGludGVyc2VjdC5pZTtcbiAgICAgICAgICAgIC8qIE9ubHkgZ2VuZXJhdGUgb3V0cHV0IGZvciBjb250cmlidXRpbmcgaW50ZXJzZWN0aW9ucyAqL1xuICAgICAgICAgICAgaWYgKCgoZTAuYnVuZGxlLmFib3ZlW0NMSVBdICE9PSAwKSB8fCAoZTAuYnVuZGxlLmFib3ZlW1NVQkpdICE9PSAwKSkgJiZcbiAgICAgICAgICAgICAgICAoKGUxLmJ1bmRsZS5hYm92ZVtDTElQXSAhPT0gMCkgfHwgKGUxLmJ1bmRsZS5hYm92ZVtTVUJKXSAhPT0gMCkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IGUwLm91dHAuYWJvdmU7XG4gICAgICAgICAgICAgICAgY29uc3QgcSA9IGUxLm91dHAuYWJvdmU7XG4gICAgICAgICAgICAgICAgY29uc3QgaXggPSBpbnRlcnNlY3QucG9pbnQueDtcbiAgICAgICAgICAgICAgICBjb25zdCBpeSA9IGludGVyc2VjdC5wb2ludC55ICsgeWI7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5DbGlwID0gKCgoZTAuYnVuZGxlLmFib3ZlW0NMSVBdICE9PSAwKSAmJiAoZTAuYnNpZGUuY2xpcCA9PT0gMCkpIHx8XG4gICAgICAgICAgICAgICAgICAgICgoZTEuYnVuZGxlLmFib3ZlW0NMSVBdICE9PSAwKSAmJiAoZTEuYnNpZGUuY2xpcCAhPT0gMCkpIHx8XG4gICAgICAgICAgICAgICAgICAgICgoZTAuYnVuZGxlLmFib3ZlW0NMSVBdID09PSAwKSAmJiAoZTEuYnVuZGxlLmFib3ZlW0NMSVBdID09PSAwKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKChlMC5ic2lkZS5jbGlwICYgZTEuYnNpZGUuY2xpcCkgPT09IDEpKSkgPyAxIDogMDtcbiAgICAgICAgICAgICAgICBjb25zdCBpblN1YmogPSAoKChlMC5idW5kbGUuYWJvdmVbU1VCSl0gIT09IDApICYmIChlMC5ic2lkZS5zdWJqID09PSAwKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKChlMS5idW5kbGUuYWJvdmVbU1VCSl0gIT09IDApICYmIChlMS5ic2lkZS5zdWJqICE9PSAwKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKChlMC5idW5kbGUuYWJvdmVbU1VCSl0gPT09IDApICYmIChlMS5idW5kbGUuYWJvdmVbU1VCSl0gPT09IDApICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoKGUwLmJzaWRlLnN1YmogJiBlMS5ic2lkZS5zdWJqKSA9PT0gMSkpKSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIGxldCB0ciA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IHRsID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgYnIgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBibCA9IDA7XG4gICAgICAgICAgICAgICAgLyogRGV0ZXJtaW5lIHF1YWRyYW50IG9jY3VwYW5jaWVzICovXG4gICAgICAgICAgICAgICAgaWYgKChvcCA9PT0gT3BlcmF0aW9uVHlwZS5ESUYpIHx8IChvcCA9PT0gT3BlcmF0aW9uVHlwZS5JTlQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyID0gaW5DbGlwICYgaW5TdWJqO1xuICAgICAgICAgICAgICAgICAgICB0bCA9IChpbkNsaXAgXiBlMS5idW5kbGUuYWJvdmVbQ0xJUF0pICYgKGluU3ViaiBeIGUxLmJ1bmRsZS5hYm92ZVtTVUJKXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyID0gKGluQ2xpcCBeIGUwLmJ1bmRsZS5hYm92ZVtDTElQXSkgJiAoaW5TdWJqIF4gZTAuYnVuZGxlLmFib3ZlW1NVQkpdKTtcbiAgICAgICAgICAgICAgICAgICAgYmwgPSAoaW5DbGlwIF4gZTEuYnVuZGxlLmFib3ZlW0NMSVBdIF4gZTAuYnVuZGxlLmFib3ZlW0NMSVBdKSAmIChpblN1YmogXiBlMS5idW5kbGUuYWJvdmVbU1VCSl0gXiBlMC5idW5kbGUuYWJvdmVbU1VCSl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcCA9PT0gT3BlcmF0aW9uVHlwZS5YT1IpIHtcbiAgICAgICAgICAgICAgICAgICAgdHIgPSBpbkNsaXAgXiBpblN1Ymo7XG4gICAgICAgICAgICAgICAgICAgIHRsID0gKGluQ2xpcCBeIGUxLmJ1bmRsZS5hYm92ZVtDTElQXSkgXiAoaW5TdWJqIF4gZTEuYnVuZGxlLmFib3ZlW1NVQkpdKTtcbiAgICAgICAgICAgICAgICAgICAgYnIgPSAoaW5DbGlwIF4gZTAuYnVuZGxlLmFib3ZlW0NMSVBdKSBeIChpblN1YmogXiBlMC5idW5kbGUuYWJvdmVbU1VCSl0pO1xuICAgICAgICAgICAgICAgICAgICBibCA9IChpbkNsaXAgXiBlMS5idW5kbGUuYWJvdmVbQ0xJUF0gXiBlMC5idW5kbGUuYWJvdmVbQ0xJUF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBeIChpblN1YmogXiBlMS5idW5kbGUuYWJvdmVbU1VCSl0gXiBlMC5idW5kbGUuYWJvdmVbU1VCSl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcCA9PT0gT3BlcmF0aW9uVHlwZS5BREQpIHtcbiAgICAgICAgICAgICAgICAgICAgdHIgPSBpbkNsaXAgfCBpblN1Ymo7XG4gICAgICAgICAgICAgICAgICAgIHRsID0gKGluQ2xpcCBeIGUxLmJ1bmRsZS5hYm92ZVtDTElQXSkgfCAoaW5TdWJqIF4gZTEuYnVuZGxlLmFib3ZlW1NVQkpdKTtcbiAgICAgICAgICAgICAgICAgICAgYnIgPSAoaW5DbGlwIF4gZTAuYnVuZGxlLmFib3ZlW0NMSVBdKSB8IChpblN1YmogXiBlMC5idW5kbGUuYWJvdmVbU1VCSl0pO1xuICAgICAgICAgICAgICAgICAgICBibCA9IChpbkNsaXAgXiBlMS5idW5kbGUuYWJvdmVbQ0xJUF0gXiBlMC5idW5kbGUuYWJvdmVbQ0xJUF0pIHwgKGluU3ViaiBeIGUxLmJ1bmRsZS5hYm92ZVtTVUJKXSBeIGUwLmJ1bmRsZS5hYm92ZVtTVUJKXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZ2V0VmVydGV4VHlwZSh0ciwgdGwsIGJyLCBibCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLkVNTjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUwLm91dHAuYWJvdmUgPSBvdXRQb2x5LmFkZExvY2FsTWluKGl4LCBpeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlMS5vdXRwLmFib3ZlID0gZTAub3V0cC5hYm92ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuRVJJOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmFkZFJpZ2h0KGl4LCBpeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZTEub3V0cC5hYm92ZSA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZTAub3V0cC5hYm92ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLkVMSTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5hZGRMZWZ0KGl4LCBpeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZTAub3V0cC5hYm92ZSA9IHE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZTEub3V0cC5hYm92ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLkVNWDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocCAhPT0gbnVsbCkgJiYgKHEgIT09IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5hZGRMZWZ0KGl4LCBpeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0UG9seS5tZXJnZVJpZ2h0KHAsIHEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUwLm91dHAuYWJvdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUxLm91dHAuYWJvdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5JTU46XG4gICAgICAgICAgICAgICAgICAgICAgICBlMC5vdXRwLmFib3ZlID0gb3V0UG9seS5hZGRMb2NhbE1pbihpeCwgaXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZTEub3V0cC5hYm92ZSA9IGUwLm91dHAuYWJvdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLklMSTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5hZGRMZWZ0KGl4LCBpeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZTEub3V0cC5hYm92ZSA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZTAub3V0cC5hYm92ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhUeXBlLklSSTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5hZGRSaWdodChpeCwgaXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUwLm91dHAuYWJvdmUgPSBxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUxLm91dHAuYWJvdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4VHlwZS5JTVg6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHAgIT09IG51bGwpICYmIChxICE9PSBudWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuYWRkUmlnaHQoaXgsIGl5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRQb2x5Lm1lcmdlTGVmdChwLCBxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlMC5vdXRwLmFib3ZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlMS5vdXRwLmFib3ZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuSU1NOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChwICE9PSBudWxsKSAmJiAocSAhPT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmFkZFJpZ2h0KGl4LCBpeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0UG9seS5tZXJnZUxlZnQocCwgcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZTAub3V0cC5hYm92ZSA9IG91dFBvbHkuYWRkTG9jYWxNaW4oaXgsIGl5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlMS5vdXRwLmFib3ZlID0gZTAub3V0cC5hYm92ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleFR5cGUuRU1NOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChwICE9PSBudWxsKSAmJiAocSAhPT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmFkZExlZnQoaXgsIGl5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRQb2x5Lm1lcmdlUmlnaHQocCwgcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZTAub3V0cC5hYm92ZSA9IG91dFBvbHkuYWRkTG9jYWxNaW4oaXgsIGl5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlMS5vdXRwLmFib3ZlID0gZTAub3V0cC5hYm92ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIFN3YXAgYnVuZGxlIHNpZGVzIGluIHJlc3BvbnNlIHRvIGVkZ2UgY3Jvc3NpbmcgKi9cbiAgICAgICAgICAgIGlmIChlMC5idW5kbGUuYWJvdmVbQ0xJUF0gIT09IDApIHtcbiAgICAgICAgICAgICAgICBlMS5ic2lkZS5jbGlwID0gMSAtIGUxLmJzaWRlLmNsaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZTEuYnVuZGxlLmFib3ZlW0NMSVBdICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgZTAuYnNpZGUuY2xpcCA9IDEgLSBlMC5ic2lkZS5jbGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUwLmJ1bmRsZS5hYm92ZVtTVUJKXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGUxLmJzaWRlLnN1YmogPSAxIC0gZTEuYnNpZGUuc3ViajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlMS5idW5kbGUuYWJvdmVbU1VCSl0gIT09IDApIHtcbiAgICAgICAgICAgICAgICBlMC5ic2lkZS5zdWJqID0gMSAtIGUwLmJzaWRlLnN1Ymo7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBTd2FwIGUwIGFuZCBlMSBidW5kbGVzIGluIHRoZSBBRVQgKi9cbiAgICAgICAgICAgIGxldCB7IHByZXYgfSA9IGUwO1xuICAgICAgICAgICAgY29uc3QgeyBuZXh0IH0gPSBlMTtcbiAgICAgICAgICAgIGlmIChuZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV4dC5wcmV2ID0gZTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZTAuYnN0YXRlLmFib3ZlID09PSBCdW5kbGVTdGF0ZS5CVU5ETEVfSEVBRCkge1xuICAgICAgICAgICAgICAgIHdoaWxlIChwcmV2ICE9PSBudWxsICYmIHByZXYuYnN0YXRlLmFib3ZlID09PSBCdW5kbGVTdGF0ZS5CVU5ETEVfVEFJTCkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2ID0gcHJldi5wcmV2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhZXQudG9wID09PSBudWxsKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVuY291bnRlcmVkIFVuZXhwZWN0ZWQgTnVsbCBFZGdlXCIpO1xuICAgICAgICAgICAgaWYgKHByZXYgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhZXQudG9wLnByZXYgPSBlMTtcbiAgICAgICAgICAgICAgICBlMS5uZXh0ID0gYWV0LnRvcDtcbiAgICAgICAgICAgICAgICBhZXQudG9wID0gZTAubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2Lm5leHQgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVuY291bnRlcmVkIFVuZXhwZWN0ZWQgTnVsbCBFZGdlXCIpO1xuICAgICAgICAgICAgICAgIHByZXYubmV4dC5wcmV2ID0gZTE7XG4gICAgICAgICAgICAgICAgZTEubmV4dCA9IHByZXYubmV4dDtcbiAgICAgICAgICAgICAgICBwcmV2Lm5leHQgPSBlMC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUwLm5leHQgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW5jb3VudGVyZWQgVW5leHBlY3RlZCBOdWxsIEVkZ2VcIik7XG4gICAgICAgICAgICBlMC5uZXh0LnByZXYgPSBwcmV2O1xuICAgICAgICAgICAgZTEubmV4dC5wcmV2ID0gZTE7XG4gICAgICAgICAgICBlMC5uZXh0ID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgICAvKiBQcmVwYXJlIGZvciBuZXh0IHNjYW5iZWFtICovXG4gICAgICAgIGZvciAobGV0IGVkZ2UgPSBhZXQudG9wOyBlZGdlICE9PSBudWxsOyBlZGdlID0gZWRnZS5uZXh0KSB7XG4gICAgICAgICAgICBjb25zdCB7IG5leHQsIHN1Y2MgfSA9IGVkZ2U7XG4gICAgICAgICAgICBpZiAoKGVkZ2UudG9wLnkgPT09IHl0KSAmJiAoc3VjYyAhPT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAvKiBSZXBsYWNlIEFFVCBlZGdlIGJ5IGl0cyBzdWNjZXNzb3IgKi9cbiAgICAgICAgICAgICAgICBzdWNjLm91dHAuYmVsb3cgPSBlZGdlLm91dHAuYWJvdmU7XG4gICAgICAgICAgICAgICAgc3VjYy5ic3RhdGUuYmVsb3cgPSBlZGdlLmJzdGF0ZS5hYm92ZTtcbiAgICAgICAgICAgICAgICBzdWNjLmJ1bmRsZS5iZWxvd1tDTElQXSA9IGVkZ2UuYnVuZGxlLmFib3ZlW0NMSVBdO1xuICAgICAgICAgICAgICAgIHN1Y2MuYnVuZGxlLmJlbG93W1NVQkpdID0gZWRnZS5idW5kbGUuYWJvdmVbU1VCSl07XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwcmV2IH0gPSBlZGdlO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXYubmV4dCA9IHN1Y2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhZXQudG9wID0gc3VjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5leHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dC5wcmV2ID0gc3VjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3VjYy5wcmV2ID0gcHJldjtcbiAgICAgICAgICAgICAgICBzdWNjLm5leHQgPSBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLyogVXBkYXRlIHRoaXMgZWRnZSAqL1xuICAgICAgICAgICAgICAgIGVkZ2Uub3V0cC5iZWxvdyA9IGVkZ2Uub3V0cC5hYm92ZTtcbiAgICAgICAgICAgICAgICBlZGdlLmJzdGF0ZS5iZWxvdyA9IGVkZ2UuYnN0YXRlLmFib3ZlO1xuICAgICAgICAgICAgICAgIGVkZ2UuYnVuZGxlLmJlbG93W0NMSVBdID0gZWRnZS5idW5kbGUuYWJvdmVbQ0xJUF07XG4gICAgICAgICAgICAgICAgZWRnZS5idW5kbGUuYmVsb3dbU1VCSl0gPSBlZGdlLmJ1bmRsZS5hYm92ZVtTVUJKXTtcbiAgICAgICAgICAgICAgICBlZGdlLnhiID0gZWRnZS54dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVkZ2Uub3V0cC5hYm92ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dFBvbHkuZ2V0UmVzdWx0KCk7XG59XG5mdW5jdGlvbiBFUShhLCBiKSB7XG4gICAgcmV0dXJuIChNYXRoLmFicyhhIC0gYikgPD0gRVBTSUxPTik7XG59XG5mdW5jdGlvbiBQUkVWX0lOREVYKGksIG4pIHtcbiAgICByZXR1cm4gKChpIC0gMSArIG4pICUgbik7XG59XG5mdW5jdGlvbiBORVhUX0lOREVYKGksIG4pIHtcbiAgICByZXR1cm4gKChpICsgMSkgJSBuKTtcbn1cbmZ1bmN0aW9uIE9QVElNQUwocCwgaSkge1xuICAgIGNvbnN0IHsgeTogeWkgfSA9IHAuZ2V0KGkpO1xuICAgIGNvbnN0IG51bVBvaW50cyA9IHAuZ2V0TnVtUG9pbnRzKCk7XG4gICAgcmV0dXJuIChwLmdldChQUkVWX0lOREVYKGksIG51bVBvaW50cykpLnkgIT09IHlpKSB8fFxuICAgICAgICAocC5nZXQoTkVYVF9JTkRFWChpLCBudW1Qb2ludHMpKS55ICE9PSB5aSk7XG59XG5mdW5jdGlvbiBtaW5pTWF4VGVzdChzdWJqZWN0LCBjbGlwcGVyLCBvcCkge1xuICAgIGNvbnN0IHNCQm94ZXMgPSBzdWJqZWN0LmdldElubmVyUG9saWVzKCkubWFwKChpcCkgPT4gaXAuYm91bmRzKTtcbiAgICBjb25zdCBjQkJveGVzID0gY2xpcHBlci5nZXRJbm5lclBvbGllcygpLm1hcCgoaXApID0+IGlwLmJvdW5kcyk7XG4gICAgLyogQ2hlY2sgYWxsIHN1YmplY3QgY29udG91ciBib3VuZGluZyBib3hlcyBhZ2FpbnN0IGNsaXAgYm94ZXMgKi9cbiAgICBjb25zdCBvVGFibGUgPSBjQkJveGVzLm1hcCgoYykgPT4gc0JCb3hlcy5tYXAoKHMpID0+ICEoKHMubWF4eCA8IGMubWlueCkgfHwgKHMubWlueCA+IGMubWF4eCkpICYmXG4gICAgICAgICEoKHMubWF4eSA8IGMubWlueSkgfHwgKHMubWlueSA+IGMubWF4eSkpKSk7XG4gICAgLyogRm9yIGVhY2ggY2xpcCBjb250b3VyLCBzZWFyY2ggZm9yIGFueSBzdWJqZWN0IGNvbnRvdXIgb3ZlcmxhcHMgKi9cbiAgICBjb25zdCBjbGlwTnVtUG9seSA9IGNCQm94ZXMubGVuZ3RoO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY2xpcE51bVBvbHk7IGMrKykge1xuICAgICAgICBjb25zdCBvdmVybGFwID0gb1RhYmxlW2NdLmV2ZXJ5KChzKSA9PiBzKTtcbiAgICAgICAgaWYgKCFvdmVybGFwKSB7XG4gICAgICAgICAgICBjbGlwcGVyW3NldENvbnRyaWJ1dGluZ10oYywgZmFsc2UpOyAvLyBGbGFnIG5vbiBjb250cmlidXRpbmcgc3RhdHVzXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wID09PSBPcGVyYXRpb25UeXBlLklOVCkge1xuICAgICAgICAvKiBGb3IgZWFjaCBzdWJqZWN0IGNvbnRvdXIsIHNlYXJjaCBmb3IgYW55IGNsaXAgY29udG91ciBvdmVybGFwcyAqL1xuICAgICAgICBjb25zdCBzdWJqTnVtUG9seSA9IHNCQm94ZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IHN1YmpOdW1Qb2x5OyBzKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXAgPSBvVGFibGUuZXZlcnkoKGMpID0+IGNbc10pO1xuICAgICAgICAgICAgaWYgKCFvdmVybGFwKSB7XG4gICAgICAgICAgICAgICAgc3ViamVjdFtzZXRDb250cmlidXRpbmddKHMsIGZhbHNlKTsgLy8gRmxhZyBub24gY29udHJpYnV0aW5nIHN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYm91bmRMaXN0KGxtdFRhYmxlLCB5KSB7XG4gICAgaWYgKGxtdFRhYmxlLnRvcCA9PT0gbnVsbCkge1xuICAgICAgICBsbXRUYWJsZS50b3AgPSBuZXcgTG10Tm9kZSh5KTtcbiAgICAgICAgcmV0dXJuIGxtdFRhYmxlLnRvcDtcbiAgICB9XG4gICAgbGV0IHByZXYgPSBudWxsO1xuICAgIGxldCBub2RlID0gbG10VGFibGUudG9wO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGlmICh5ID4gbm9kZS55KSB7XG4gICAgICAgICAgICAvKiBIZWFkIGZ1cnRoZXIgdXAgdGhlIExNVCAqL1xuICAgICAgICAgICAgaWYgKG5vZGUubmV4dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5vZGUubmV4dCA9IG5ldyBMbXROb2RlKHkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBbcHJldiwgbm9kZV0gPSBbbm9kZSwgbm9kZS5uZXh0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh5IDwgbm9kZS55KSB7XG4gICAgICAgICAgICAgICAgLyogSW5zZXJ0IGEgbmV3IExNVCBub2RlIGJlZm9yZSB0aGUgY3VycmVudCBub2RlICovXG4gICAgICAgICAgICAgICAgbm9kZSA9IG5ldyBMbXROb2RlKHksIG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxtdFRhYmxlLnRvcCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmV2Lm5leHQgPSBub2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIFVzZSB0aGlzIGV4aXN0aW5nIExNVCBub2RlICovXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGluc2VydEJvdW5kKGxtdE5vZGUsIGUpIHtcbiAgICBpZiAobG10Tm9kZS5maXJzdEJvdW5kID09PSBudWxsKSB7XG4gICAgICAgIC8qIExpbmsgbm9kZSBlIHRvIHRoZSB0YWlsIG9mIHRoZSBsaXN0ICovXG4gICAgICAgIGxtdE5vZGUuZmlyc3RCb3VuZCA9IGU7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHByZXZCb3VuZCA9IG51bGw7XG4gICAgbGV0IGN1cnJlbnRCb3VuZCA9IGxtdE5vZGUuZmlyc3RCb3VuZDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAvKiBEbyBwcmltYXJ5IHNvcnQgb24gdGhlIHggZmllbGQgYW5kIHNlY29uZGFyeSBzb3J0IG9uIHRoZSBkeCBmaWVsZC4gKi9cbiAgICAgICAgaWYgKGUuYm90LnggPCBjdXJyZW50Qm91bmQuYm90LnggfHwgKGUuYm90LnggPT09IGN1cnJlbnRCb3VuZC5ib3QueCAmJiBlLmR4IDwgY3VycmVudEJvdW5kLmR4KSkge1xuICAgICAgICAgICAgLyogSW5zZXJ0IGEgbmV3IG5vZGUgbWlkLWxpc3QgKi9cbiAgICAgICAgICAgIGlmIChwcmV2Qm91bmQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsbXROb2RlLmZpcnN0Qm91bmQgPSBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJldkJvdW5kLm5leHRCb3VuZCA9IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLm5leHRCb3VuZCA9IGN1cnJlbnRCb3VuZDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvKiBIZWFkIGZ1cnRoZXIgZG93biB0aGUgbGlzdCAqL1xuICAgICAgICBpZiAoY3VycmVudEJvdW5kLm5leHRCb3VuZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY3VycmVudEJvdW5kLm5leHRCb3VuZCA9IGU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmV2Qm91bmQgPSBjdXJyZW50Qm91bmQ7XG4gICAgICAgICAgICBjdXJyZW50Qm91bmQgPSBjdXJyZW50Qm91bmQubmV4dEJvdW5kO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gY29udG91clBhc3MoZWRnZVRhYmxlLCBsbXRUYWJsZSwgdmVydGV4Q291bnQsIGVJbmRleCwgdHlwZSwgb3AsIGZ3ZCkge1xuICAgIGNvbnN0IG5leHQgPSBmd2QgPyBORVhUX0lOREVYIDogUFJFVl9JTkRFWDtcbiAgICBmb3IgKGxldCBtaW4gPSAwOyBtaW4gPCB2ZXJ0ZXhDb3VudDsgbWluKyspIHtcbiAgICAgICAgLyogSWYgYSBmb3J3YXJkIGxvY2FsIG1pbmltdW0uLi4gKi9cbiAgICAgICAgaWYgKGZ3ZCA/IGVkZ2VUYWJsZS5GV0RfTUlOKG1pbikgOiBlZGdlVGFibGUuUkVWX01JTihtaW4pKSB7XG4gICAgICAgICAgICAvKiBTZWFyY2ggZm9yIHRoZSBuZXh0IGxvY2FsIG1heGltdW0uLi4gKi9cbiAgICAgICAgICAgIGxldCBlZGdlQ291bnQgPSAxO1xuICAgICAgICAgICAgbGV0IG1heCA9IG5leHQobWluLCB2ZXJ0ZXhDb3VudCk7XG4gICAgICAgICAgICB3aGlsZSAoZndkID8gZWRnZVRhYmxlLk5PVF9GTUFYKG1heCkgOiBlZGdlVGFibGUuTk9UX1JNQVgobWF4KSkge1xuICAgICAgICAgICAgICAgIGVkZ2VDb3VudCsrO1xuICAgICAgICAgICAgICAgIG1heCA9IG5leHQobWF4LCB2ZXJ0ZXhDb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBCdWlsZCB0aGUgbmV4dCBlZGdlIGxpc3QgKi9cbiAgICAgICAgICAgIGxldCB2ID0gbWluO1xuICAgICAgICAgICAgY29uc3QgZSA9IGVkZ2VUYWJsZS5nZXROb2RlKGVJbmRleCk7XG4gICAgICAgICAgICBlLmJzdGF0ZS5iZWxvdyA9IEJ1bmRsZVN0YXRlLlVOQlVORExFRDtcbiAgICAgICAgICAgIGUuYnVuZGxlLmJlbG93W0NMSVBdID0gMDtcbiAgICAgICAgICAgIGUuYnVuZGxlLmJlbG93W1NVQkpdID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWRnZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlaSA9IGVkZ2VUYWJsZS5nZXROb2RlKGVJbmRleCArIGkpO1xuICAgICAgICAgICAgICAgIGxldCBldiA9IGVkZ2VUYWJsZS5nZXROb2RlKHYpO1xuICAgICAgICAgICAgICAgIGVpLnhiID0gZXYudmVydGV4Lng7XG4gICAgICAgICAgICAgICAgZWkuYm90LnggPSBldi52ZXJ0ZXgueDtcbiAgICAgICAgICAgICAgICBlaS5ib3QueSA9IGV2LnZlcnRleC55O1xuICAgICAgICAgICAgICAgIHYgPSBuZXh0KHYsIHZlcnRleENvdW50KTtcbiAgICAgICAgICAgICAgICBldiA9IGVkZ2VUYWJsZS5nZXROb2RlKHYpO1xuICAgICAgICAgICAgICAgIGVpLnRvcC54ID0gZXYudmVydGV4Lng7XG4gICAgICAgICAgICAgICAgZWkudG9wLnkgPSBldi52ZXJ0ZXgueTtcbiAgICAgICAgICAgICAgICBlaS5keCA9IChldi52ZXJ0ZXgueCAtIGVpLmJvdC54KSAvIChlaS50b3AueSAtIGVpLmJvdC55KTtcbiAgICAgICAgICAgICAgICBlaS50eXBlID0gdHlwZTtcbiAgICAgICAgICAgICAgICBlaS5vdXRwLmFib3ZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBlaS5vdXRwLmJlbG93ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBlaS5uZXh0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBlaS5wcmV2ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBlaS5zdWNjID0gKChlZGdlQ291bnQgPiAxKSAmJiAoaSA8IChlZGdlQ291bnQgLSAxKSkpID8gZWRnZVRhYmxlLmdldE5vZGUoZUluZGV4ICsgaSArIDEpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBlaS5wcmVkID0gKChlZGdlQ291bnQgPiAxKSAmJiAoaSA+IDApKSA/IGVkZ2VUYWJsZS5nZXROb2RlKGVJbmRleCArIGkgLSAxKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgZWkubmV4dEJvdW5kID0gbnVsbDtcbiAgICAgICAgICAgICAgICBlaS5ic2lkZS5jbGlwID0gKG9wID09PSBPcGVyYXRpb25UeXBlLkRJRikgPyBSSUdIVCA6IExFRlQ7XG4gICAgICAgICAgICAgICAgZWkuYnNpZGUuc3ViaiA9IExFRlQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnNlcnRCb3VuZChib3VuZExpc3QobG10VGFibGUsIGVkZ2VUYWJsZS5nZXROb2RlKG1pbikudmVydGV4LnkpLCBlKTtcbiAgICAgICAgICAgIGVJbmRleCArPSBlZGdlQ291bnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVJbmRleDtcbn1cbmZ1bmN0aW9uIGJ1aWxkTG10KGxtdFRhYmxlLCBzYnRlLCBwLCB0eXBlLCAvLyBwb2x5IHR5cGUgU1VCSi9DTElQXG5vcCkge1xuICAgIC8qIENyZWF0ZSB0aGUgZW50aXJlIGlucHV0IHBvbHlnb24gZWRnZSB0YWJsZSBpbiBvbmUgZ28gKi9cbiAgICBmb3IgKGNvbnN0IGlwIG9mIHAuZ2V0SW5uZXJQb2xpZXMoKSkge1xuICAgICAgICBpZiAoIWlwW2lzQ29udHJpYnV0aW5nXSgwKSkge1xuICAgICAgICAgICAgLyogSWdub3JlIHRoZSBub24tY29udHJpYnV0aW5nIGNvbnRvdXIgKi9cbiAgICAgICAgICAgIGlwW3NldENvbnRyaWJ1dGluZ10oMCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvKiBQZXJmb3JtIGNvbnRvdXIgb3B0aW1pc2F0aW9uICovXG4gICAgICAgICAgICBsZXQgdmVydGV4Q291bnQgPSAwO1xuICAgICAgICAgICAgY29uc3QgZWRnZVRhYmxlID0gbmV3IEVkZ2VUYWJsZSgpO1xuICAgICAgICAgICAgY29uc3QgcG9pbnRMZW4gPSBpcC5nZXROdW1Qb2ludHMoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRMZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChPUFRJTUFMKGlwLCBpKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGlwLmdldChpKTtcbiAgICAgICAgICAgICAgICAgICAgZWRnZVRhYmxlLmFkZE5vZGUoeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIC8qIFJlY29yZCB2ZXJ0ZXggaW4gdGhlIHNjYW5iZWFtIHRhYmxlICovXG4gICAgICAgICAgICAgICAgICAgIHNidGUuYWRkVG9TQlRyZWUoeSk7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRleENvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogRG8gdGhlIGNvbnRvdXIgZm9yd2FyZCBwYXNzICovXG4gICAgICAgICAgICBjb25zdCBlSW5kZXggPSBjb250b3VyUGFzcyhlZGdlVGFibGUsIGxtdFRhYmxlLCB2ZXJ0ZXhDb3VudCwgMCwgdHlwZSwgb3AsIHRydWUpO1xuICAgICAgICAgICAgLyogRG8gdGhlIGNvbnRvdXIgcmV2ZXJzZSBwYXNzICovXG4gICAgICAgICAgICBjb250b3VyUGFzcyhlZGdlVGFibGUsIGxtdFRhYmxlLCB2ZXJ0ZXhDb3VudCwgZUluZGV4LCB0eXBlLCBvcCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkU1RFZGdlKHN0LCBpdCwgZWRnZSwgZHkpIHtcbiAgICBpZiAoc3QgPT09IG51bGwpIHtcbiAgICAgICAgLyogQXBwZW5kIGVkZ2Ugb250byB0aGUgdGFpbCBlbmQgb2YgdGhlIFNUICovXG4gICAgICAgIHJldHVybiBuZXcgU3ROb2RlKGVkZ2UsIG51bGwpO1xuICAgIH1cbiAgICBjb25zdCBkZW4gPSAoc3QueHQgLSBzdC54YikgLSAoZWRnZS54dCAtIGVkZ2UueGIpO1xuICAgIC8qIElmIG5ldyBlZGdlIGFuZCBTVCBlZGdlIGRvbid0IGNyb3NzICovXG4gICAgaWYgKChlZGdlLnh0ID49IHN0Lnh0KSB8fCAoZWRnZS5keCA9PT0gc3QuZHgpIHx8IChNYXRoLmFicyhkZW4pIDw9IEVQU0lMT04pKSB7XG4gICAgICAgIC8qIE5vIGludGVyc2VjdGlvbiAtIGluc2VydCBlZGdlIGhlcmUgKGJlZm9yZSB0aGUgU1QgZWRnZSkgKi9cbiAgICAgICAgcmV0dXJuIG5ldyBTdE5vZGUoZWRnZSwgc3QpO1xuICAgIH1cbiAgICAvKiBDb21wdXRlIGludGVyc2VjdGlvbiBiZXR3ZWVuIG5ldyBlZGdlIGFuZCBTVCBlZGdlICovXG4gICAgY29uc3QgciA9IChlZGdlLnhiIC0gc3QueGIpIC8gZGVuO1xuICAgIGNvbnN0IHggPSBzdC54YiArIHIgKiAoc3QueHQgLSBzdC54Yik7XG4gICAgY29uc3QgeSA9IHIgKiBkeTtcbiAgICAvKiBJbnNlcnQgdGhlIGVkZ2UgcG9pbnRlcnMgYW5kIHRoZSBpbnRlcnNlY3Rpb24gcG9pbnQgaW4gdGhlIElUICovXG4gICAgaXQudG9wID0gYWRkSW50ZXJzZWN0aW9uKGl0LnRvcCwgc3QuZWRnZSwgZWRnZSwgeCwgeSk7XG4gICAgLyogSGVhZCBmdXJ0aGVyIGludG8gdGhlIFNUICovXG4gICAgc3QucHJldiA9IGFkZFNURWRnZShzdC5wcmV2LCBpdCwgZWRnZSwgZHkpO1xuICAgIHJldHVybiBzdDtcbn1cbmZ1bmN0aW9uIGFkZEludGVyc2VjdGlvbihpdE5vZGUsIGVkZ2UwLCBlZGdlMSwgeCwgeSkge1xuICAgIGlmIChpdE5vZGUgPT09IG51bGwgfHwgaXROb2RlLnBvaW50LnkgPiB5KSB7XG4gICAgICAgIC8qIEFwcGVuZCBhIG5ldyBub2RlIHRvIHRoZSB0YWlsIChpdE5vZGUgPT09IG51bGwpIG9yIG1pZC1saXN0ICovXG4gICAgICAgIHJldHVybiBuZXcgSXROb2RlKGVkZ2UwLCBlZGdlMSwgeCwgeSwgaXROb2RlKTtcbiAgICB9XG4gICAgLyogSGVhZCBmdXJ0aGVyIGRvd24gdGhlIGxpc3QgKi9cbiAgICBpdE5vZGUubmV4dCA9IGFkZEludGVyc2VjdGlvbihpdE5vZGUubmV4dCwgZWRnZTAsIGVkZ2UxLCB4LCB5KTtcbiAgICByZXR1cm4gaXROb2RlO1xufVxudmFyIEJ1bmRsZVN0YXRlO1xuKGZ1bmN0aW9uIChCdW5kbGVTdGF0ZSkge1xuICAgIEJ1bmRsZVN0YXRlW0J1bmRsZVN0YXRlW1wiVU5CVU5ETEVEXCJdID0gMF0gPSBcIlVOQlVORExFRFwiO1xuICAgIEJ1bmRsZVN0YXRlW0J1bmRsZVN0YXRlW1wiQlVORExFX0hFQURcIl0gPSAxXSA9IFwiQlVORExFX0hFQURcIjtcbiAgICBCdW5kbGVTdGF0ZVtCdW5kbGVTdGF0ZVtcIkJVTkRMRV9UQUlMXCJdID0gMl0gPSBcIkJVTkRMRV9UQUlMXCI7XG59KShCdW5kbGVTdGF0ZSB8fCAoQnVuZGxlU3RhdGUgPSB7fSkpO1xuY2xhc3MgRWRnZU5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy5ib3QgPSBuZXcgVmVydGV4KE5hTiwgTmFOKTsgLyogRWRnZSBsb3dlciAoeCwgeSkgY29vcmRpbmF0ZSAgICAgICovXG4gICAgICAgIHRoaXMudG9wID0gbmV3IFZlcnRleChOYU4sIE5hTik7IC8qIEVkZ2UgdXBwZXIgKHgsIHkpIGNvb3JkaW5hdGUgICAgICAqL1xuICAgICAgICB0aGlzLnhiID0gTmFOOyAvKiBTY2FuYmVhbSBib3R0b20geCBjb29yZGluYXRlICAgICAgKi9cbiAgICAgICAgdGhpcy54dCA9IE5hTjsgLyogU2NhbmJlYW0gdG9wIHggY29vcmRpbmF0ZSAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHggPSBOYU47IC8qIENoYW5nZSBpbiB4IGZvciBhIHVuaXQgeSBpbmNyZWFzZSAqL1xuICAgICAgICB0aGlzLnR5cGUgPSAwOyAvKiBDbGlwIC8gc3ViamVjdCBlZGdlIGZsYWcgICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wcmV2ID0gbnVsbDsgLyogUHJldmlvdXMgZWRnZSBpbiB0aGUgQUVUICAgICAgICAgICovXG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7IC8qIE5leHQgZWRnZSBpbiB0aGUgQUVUICAgICAgICAgICAgICAqL1xuICAgICAgICB0aGlzLnByZWQgPSBudWxsOyAvKiBFZGdlIGNvbm5lY3RlZCBhdCB0aGUgbG93ZXIgZW5kICAgKi9cbiAgICAgICAgdGhpcy5zdWNjID0gbnVsbDsgLyogRWRnZSBjb25uZWN0ZWQgYXQgdGhlIHVwcGVyIGVuZCAgICovXG4gICAgICAgIHRoaXMubmV4dEJvdW5kID0gbnVsbDsgLyogUG9pbnRlciB0byBuZXh0IGJvdW5kIGluIExNVCAgICAgICovXG4gICAgICAgIHRoaXMudmVydGV4ID0gbmV3IFZlcnRleCh4LCB5KTtcbiAgICAgICAgdGhpcy5ic2lkZSA9IHsgY2xpcDogMCwgc3ViajogMCB9O1xuICAgICAgICB0aGlzLmJ1bmRsZSA9IHsgYWJvdmU6IFswLCAwXSwgYmVsb3c6IFswLCAwXSB9O1xuICAgICAgICB0aGlzLmJzdGF0ZSA9IHsgYWJvdmU6IG51bGwsIGJlbG93OiBudWxsIH07XG4gICAgICAgIHRoaXMub3V0cCA9IHsgYWJvdmU6IG51bGwsIGJlbG93OiBudWxsIH07XG4gICAgfVxufVxuY2xhc3MgQWV0VHJlZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudG9wID0gbnVsbDtcbiAgICB9XG4gICAgYWRkRWRnZShlZGdlKSB7XG4gICAgICAgIGlmICh0aGlzLnRvcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgLyogQXBwZW5kIGVkZ2Ugb250byB0aGUgdGFpbCBlbmQgb2YgdGhlIEFFVCAqL1xuICAgICAgICAgICAgdGhpcy50b3AgPSBlZGdlO1xuICAgICAgICAgICAgZWRnZS5wcmV2ID0gbnVsbDtcbiAgICAgICAgICAgIGVkZ2UubmV4dCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByZXZFZGdlID0gbnVsbDtcbiAgICAgICAgbGV0IGN1cnJlbnRFZGdlID0gdGhpcy50b3A7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAvKiBEbyBwcmltYXJ5IHNvcnQgb24gdGhlIHhiIGZpZWxkLCBhbmQgc2Vjb25kYXJ5IHNvcnQgb24gdGhlIGR4IGZpZWxkLiAqL1xuICAgICAgICAgICAgaWYgKGVkZ2UueGIgPCBjdXJyZW50RWRnZS54YiB8fCAoZWRnZS54YiA9PT0gY3VycmVudEVkZ2UueGIgJiYgZWRnZS5keCA8IGN1cnJlbnRFZGdlLmR4KSkge1xuICAgICAgICAgICAgICAgIC8qIEluc2VydCBlZGdlIGhlcmUgKGJlZm9yZSB0aGUgQUVUIGVkZ2UpICovXG4gICAgICAgICAgICAgICAgZWRnZS5wcmV2ID0gcHJldkVkZ2U7XG4gICAgICAgICAgICAgICAgZWRnZS5uZXh0ID0gY3VycmVudEVkZ2U7XG4gICAgICAgICAgICAgICAgY3VycmVudEVkZ2UucHJldiA9IGVkZ2U7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZFZGdlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wID0gZWRnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZFZGdlLm5leHQgPSBlZGdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBIZWFkIGZ1cnRoZXIgaW50byB0aGUgQUVUICovXG4gICAgICAgICAgICBwcmV2RWRnZSA9IGN1cnJlbnRFZGdlO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRFZGdlLm5leHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RWRnZS5uZXh0ID0gZWRnZTtcbiAgICAgICAgICAgICAgICBlZGdlLnByZXYgPSBjdXJyZW50RWRnZTtcbiAgICAgICAgICAgICAgICBlZGdlLm5leHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFZGdlID0gY3VycmVudEVkZ2UubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEVkZ2VUYWJsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubm9kZUxpc3QgPSBbXTtcbiAgICB9XG4gICAgYWRkTm9kZSh4LCB5KSB7XG4gICAgICAgIHRoaXMubm9kZUxpc3QucHVzaChuZXcgRWRnZU5vZGUoeCwgeSkpO1xuICAgIH1cbiAgICBnZXROb2RlKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVMaXN0W2luZGV4XTtcbiAgICB9XG4gICAgRldEX01JTihpKSB7XG4gICAgICAgIGNvbnN0IG5vZGVMaXN0ID0gdGhpcy5ub2RlTGlzdDtcbiAgICAgICAgY29uc3QgcHJldiA9IG5vZGVMaXN0W1BSRVZfSU5ERVgoaSwgbm9kZUxpc3QubGVuZ3RoKV07XG4gICAgICAgIGNvbnN0IG5leHQgPSBub2RlTGlzdFtORVhUX0lOREVYKGksIG5vZGVMaXN0Lmxlbmd0aCldO1xuICAgICAgICBjb25zdCBpdGggPSBub2RlTGlzdFtpXTtcbiAgICAgICAgcmV0dXJuICgocHJldi52ZXJ0ZXgueSA+PSBpdGgudmVydGV4LnkpICYmXG4gICAgICAgICAgICAobmV4dC52ZXJ0ZXgueSA+IGl0aC52ZXJ0ZXgueSkpO1xuICAgIH1cbiAgICBOT1RfRk1BWChpKSB7XG4gICAgICAgIGNvbnN0IG5vZGVMaXN0ID0gdGhpcy5ub2RlTGlzdDtcbiAgICAgICAgY29uc3QgbmV4dCA9IG5vZGVMaXN0W05FWFRfSU5ERVgoaSwgbm9kZUxpc3QubGVuZ3RoKV07XG4gICAgICAgIGNvbnN0IGl0aCA9IG5vZGVMaXN0W2ldO1xuICAgICAgICByZXR1cm4gbmV4dC52ZXJ0ZXgueSA+IGl0aC52ZXJ0ZXgueTtcbiAgICB9XG4gICAgUkVWX01JTihpKSB7XG4gICAgICAgIGNvbnN0IG5vZGVMaXN0ID0gdGhpcy5ub2RlTGlzdDtcbiAgICAgICAgY29uc3QgcHJldiA9IG5vZGVMaXN0W1BSRVZfSU5ERVgoaSwgbm9kZUxpc3QubGVuZ3RoKV07XG4gICAgICAgIGNvbnN0IG5leHQgPSBub2RlTGlzdFtORVhUX0lOREVYKGksIG5vZGVMaXN0Lmxlbmd0aCldO1xuICAgICAgICBjb25zdCBpdGggPSBub2RlTGlzdFtpXTtcbiAgICAgICAgcmV0dXJuICgocHJldi52ZXJ0ZXgueSA+IGl0aC52ZXJ0ZXgueSkgJiYgKG5leHQudmVydGV4LnkgPj0gaXRoLnZlcnRleC55KSk7XG4gICAgfVxuICAgIE5PVF9STUFYKGkpIHtcbiAgICAgICAgY29uc3Qgbm9kZUxpc3QgPSB0aGlzLm5vZGVMaXN0O1xuICAgICAgICBjb25zdCBwcmV2ID0gbm9kZUxpc3RbUFJFVl9JTkRFWChpLCBub2RlTGlzdC5sZW5ndGgpXTtcbiAgICAgICAgY29uc3QgaXRoID0gbm9kZUxpc3RbaV07XG4gICAgICAgIHJldHVybiBwcmV2LnZlcnRleC55ID4gaXRoLnZlcnRleC55O1xuICAgIH1cbn1cbnZhciBIU3RhdGU7XG4oZnVuY3Rpb24gKEhTdGF0ZSkge1xuICAgIEhTdGF0ZS5OSCA9IDA7IC8qIE5vIGhvcml6b250YWwgZWRnZSAgICAgICAgICAgICAgICAqL1xuICAgIEhTdGF0ZS5CSCA9IDE7IC8qIEJvdHRvbSBob3Jpem9udGFsIGVkZ2UgICAgICAgICAgICAqL1xuICAgIEhTdGF0ZS5USCA9IDI7IC8qIFRvcCBob3Jpem9udGFsIGVkZ2UgICAgICAgICAgICAgICAqL1xuICAgIC8qIEhvcml6b250YWwgZWRnZSBzdGF0ZSB0cmFuc2l0aW9ucyB3aXRoaW4gc2NhbmJlYW0gYm91bmRhcnkgKi9cbiAgICBIU3RhdGUubmV4dFN0YXRlID0gW1xuICAgICAgICAvKiAgICAgICAgQUJPVkUgICAgIEJFTE9XICAgICBDUk9TUyAqL1xuICAgICAgICAvKiAgICAgICAgTCAgIFIgICAgIEwgICBSICAgICBMICAgUiAqL1xuICAgICAgICAvKiBOSCAqLyBbSFN0YXRlLkJILCBIU3RhdGUuVEgsIEhTdGF0ZS5USCwgSFN0YXRlLkJILCBIU3RhdGUuTkgsIEhTdGF0ZS5OSF0sXG4gICAgICAgIC8qIEJIICovIFtIU3RhdGUuTkgsIEhTdGF0ZS5OSCwgSFN0YXRlLk5ILCBIU3RhdGUuTkgsIEhTdGF0ZS5USCwgSFN0YXRlLlRIXSxcbiAgICAgICAgLyogVEggKi8gW0hTdGF0ZS5OSCwgSFN0YXRlLk5ILCBIU3RhdGUuTkgsIEhTdGF0ZS5OSCwgSFN0YXRlLkJILCBIU3RhdGUuQkhdLFxuICAgIF07XG59KShIU3RhdGUgfHwgKEhTdGF0ZSA9IHt9KSk7XG5jbGFzcyBJdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGVkZ2UwLCBlZGdlMSwgeCwgeSwgbmV4dCkge1xuICAgICAgICB0aGlzLmllID0gW2VkZ2UwLCBlZGdlMV07XG4gICAgICAgIHRoaXMucG9pbnQgPSBuZXcgVmVydGV4KHgsIHkpO1xuICAgICAgICB0aGlzLm5leHQgPSBuZXh0O1xuICAgIH1cbn1cbmNsYXNzIEl0Tm9kZVRhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50b3AgPSBudWxsO1xuICAgIH1cbiAgICBidWlsZEludGVyc2VjdGlvblRhYmxlKGFldCwgZHkpIHtcbiAgICAgICAgbGV0IHN0ID0gbnVsbDtcbiAgICAgICAgLyogUHJvY2VzcyBlYWNoIEFFVCBlZGdlICovXG4gICAgICAgIGZvciAobGV0IGVkZ2UgPSBhZXQudG9wOyBlZGdlICE9PSBudWxsOyBlZGdlID0gZWRnZS5uZXh0KSB7XG4gICAgICAgICAgICBpZiAoKGVkZ2UuYnN0YXRlLmFib3ZlID09PSBCdW5kbGVTdGF0ZS5CVU5ETEVfSEVBRCkgfHxcbiAgICAgICAgICAgICAgICAoZWRnZS5idW5kbGUuYWJvdmVbQ0xJUF0gIT09IDApIHx8XG4gICAgICAgICAgICAgICAgKGVkZ2UuYnVuZGxlLmFib3ZlW1NVQkpdICE9PSAwKSkge1xuICAgICAgICAgICAgICAgIHN0ID0gYWRkU1RFZGdlKHN0LCB0aGlzLCBlZGdlLCBkeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBMbXROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih5LCAvKiBZIGNvb3JkaW5hdGUgYXQgbG9jYWwgbWluaW11bSAgICAgKi8gbmV4dCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5uZXh0ID0gbmV4dDtcbiAgICAgICAgdGhpcy5maXJzdEJvdW5kID0gbnVsbDsgLyogUG9pbnRlciB0byBib3VuZCBsaXN0ICAgICAgICAgICAgICovXG4gICAgfVxufVxuY2xhc3MgTG10VGFibGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRvcCA9IG51bGw7XG4gICAgfVxufVxuY2xhc3MgVmVydGV4Tm9kZSBleHRlbmRzIFZlcnRleCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgbmV4dCA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoeCwgeSk7XG4gICAgICAgIHRoaXMubmV4dCA9IG5leHQ7XG4gICAgfVxufVxudmFyIFZlcnRleFR5cGU7XG4oZnVuY3Rpb24gKFZlcnRleFR5cGUpIHtcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJOVUxcIl0gPSAwXSA9IFwiTlVMXCI7XG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiRU1YXCJdID0gMV0gPSBcIkVNWFwiO1xuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIkVMSVwiXSA9IDJdID0gXCJFTElcIjtcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJURURcIl0gPSAzXSA9IFwiVEVEXCI7XG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiRVJJXCJdID0gNF0gPSBcIkVSSVwiO1xuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIlJFRFwiXSA9IDVdID0gXCJSRURcIjtcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJJTU1cIl0gPSA2XSA9IFwiSU1NXCI7XG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiSU1OXCJdID0gN10gPSBcIklNTlwiO1xuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIkVNTlwiXSA9IDhdID0gXCJFTU5cIjtcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJFTU1cIl0gPSA5XSA9IFwiRU1NXCI7XG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiTEVEXCJdID0gMTBdID0gXCJMRURcIjtcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJJTElcIl0gPSAxMV0gPSBcIklMSVwiO1xuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIkJFRFwiXSA9IDEyXSA9IFwiQkVEXCI7XG4gICAgVmVydGV4VHlwZVtWZXJ0ZXhUeXBlW1wiSVJJXCJdID0gMTNdID0gXCJJUklcIjtcbiAgICBWZXJ0ZXhUeXBlW1ZlcnRleFR5cGVbXCJJTVhcIl0gPSAxNF0gPSBcIklNWFwiO1xuICAgIFZlcnRleFR5cGVbVmVydGV4VHlwZVtcIkZVTFwiXSA9IDE1XSA9IFwiRlVMXCI7XG59KShWZXJ0ZXhUeXBlIHx8IChWZXJ0ZXhUeXBlID0ge30pKTtcbmZ1bmN0aW9uIGdldFZlcnRleFR5cGUodHIsIHRsLCBiciwgYmwpIHtcbiAgICByZXR1cm4gdHIgKyAodGwgPDwgMSkgKyAoYnIgPDwgMikgKyAoYmwgPDwgMyk7XG59XG5jbGFzcyBQb2x5Z29uTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmV4dCwgeCwgeSkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7IC8qIEFjdGl2ZSBmbGFnIC8gdmVydGV4IGNvdW50ICAgICAgICAqL1xuICAgICAgICB0aGlzLmhvbGUgPSBmYWxzZTsgLyogSG9sZSAvIGV4dGVybmFsIGNvbnRvdXIgZmxhZyAgICAgICovXG4gICAgICAgIGNvbnN0IHZuID0gbmV3IFZlcnRleE5vZGUoeCwgeSk7XG4gICAgICAgIHRoaXMubGVmdCA9IHZuO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gdm47XG4gICAgICAgIHRoaXMubmV4dCA9IG5leHQ7XG4gICAgICAgIHRoaXMucHJveHkgPSB0aGlzO1xuICAgIH1cbiAgICBhZGRSaWdodCh4LCB5KSB7XG4gICAgICAgIGNvbnN0IG52ID0gbmV3IFZlcnRleE5vZGUoeCwgeSk7XG4gICAgICAgIC8qIEFkZCB2ZXJ0ZXggbnYgdG8gdGhlIHJpZ2h0IGVuZCBvZiB0aGUgcG9seWdvbidzIHZlcnRleCBsaXN0ICovXG4gICAgICAgIHRoaXMucHJveHkucmlnaHQubmV4dCA9IG52O1xuICAgICAgICB0aGlzLnByb3h5LnJpZ2h0ID0gbnY7XG4gICAgfVxuICAgIGFkZExlZnQoeCwgeSkge1xuICAgICAgICAvKiBBZGQgdmVydGV4IG52IHRvIHRoZSBsZWZ0IGVuZCBvZiB0aGUgcG9seWdvbidzIHZlcnRleCBsaXN0ICovXG4gICAgICAgIHRoaXMucHJveHkubGVmdCA9IG5ldyBWZXJ0ZXhOb2RlKHgsIHksIHRoaXMucHJveHkubGVmdCk7XG4gICAgfVxufVxuY2xhc3MgUmVjdGFuZ2xlIHtcbiAgICBjb25zdHJ1Y3RvcihtaW54LCBtaW55LCBtYXh4LCBtYXh5KSB7XG4gICAgICAgIHRoaXMubWlueCA9IG1pbng7XG4gICAgICAgIHRoaXMubWlueSA9IG1pbnk7XG4gICAgICAgIHRoaXMubWF4eCA9IG1heHg7XG4gICAgICAgIHRoaXMubWF4eSA9IG1heHk7XG4gICAgfVxufVxuY2xhc3MgU2NhbkJlYW1UcmVlIHtcbiAgICBjb25zdHJ1Y3Rvcih5KSB7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMubGVzcyA9IG51bGw7IC8qIFBvaW50ZXIgdG8gbm9kZXMgd2l0aCBsb3dlciB5ICAgICAqL1xuICAgICAgICB0aGlzLm1vcmUgPSBudWxsOyAvKiBQb2ludGVyIHRvIG5vZGVzIHdpdGggaGlnaGVyIHkgICAgKi9cbiAgICB9IC8qIFNjYW5iZWFtIG5vZGUgeSB2YWx1ZSAgICAgICAgICAgICAqL1xufVxuY2xhc3MgU2NhbkJlYW1UcmVlRW50cmllcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2J0RW50cmllcyA9IDA7XG4gICAgICAgIHRoaXMuc2JUcmVlID0gbnVsbDtcbiAgICB9XG4gICAgYWRkVG9TQlRyZWUoeSkge1xuICAgICAgICBpZiAodGhpcy5zYlRyZWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIC8qIEFkZCBhIG5ldyB0cmVlIG5vZGUgaGVyZSAqL1xuICAgICAgICAgICAgdGhpcy5zYlRyZWUgPSBuZXcgU2NhbkJlYW1UcmVlKHkpO1xuICAgICAgICAgICAgdGhpcy5zYnRFbnRyaWVzKys7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRyZWVOb2RlID0gdGhpcy5zYlRyZWU7XG4gICAgICAgIHdoaWxlICh0cmVlTm9kZS55ICE9PSB5KSB7XG4gICAgICAgICAgICBjb25zdCBkaXIgPSB0cmVlTm9kZS55ID4geSA/IFwibGVzc1wiIDogXCJtb3JlXCI7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRyZWVOb2RlW2Rpcl07XG4gICAgICAgICAgICBpZiAoY2hpbGQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0cmVlTm9kZVtkaXJdID0gbmV3IFNjYW5CZWFtVHJlZSh5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNidEVudHJpZXMrKztcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cmVlTm9kZSA9IGNoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGJ1aWxkU0JUKCkge1xuICAgICAgICBpZiAodGhpcy5zYlRyZWUgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIGNvbnN0IHNidCA9IFtdO1xuICAgICAgICAoZnVuY3Rpb24gaW5uZXIoZW50cmllcywgdGFibGUsIHNidE5vZGUpIHtcbiAgICAgICAgICAgIGlmIChzYnROb2RlLmxlc3MgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzID0gaW5uZXIoZW50cmllcywgdGFibGUsIHNidE5vZGUubGVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJsZVtlbnRyaWVzXSA9IHNidE5vZGUueTtcbiAgICAgICAgICAgIGVudHJpZXMrKztcbiAgICAgICAgICAgIGlmIChzYnROb2RlLm1vcmUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzID0gaW5uZXIoZW50cmllcywgdGFibGUsIHNidE5vZGUubW9yZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZW50cmllcztcbiAgICAgICAgfSkoMCwgc2J0LCB0aGlzLnNiVHJlZSk7XG4gICAgICAgIHJldHVybiBzYnQ7XG4gICAgfVxufVxuY2xhc3MgU3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihlZGdlLCBwcmV2KSB7XG4gICAgICAgIHRoaXMuZWRnZSA9IGVkZ2U7XG4gICAgICAgIHRoaXMueGIgPSBlZGdlLnhiO1xuICAgICAgICB0aGlzLnh0ID0gZWRnZS54dDtcbiAgICAgICAgdGhpcy5keCA9IGVkZ2UuZHg7XG4gICAgICAgIHRoaXMucHJldiA9IHByZXY7XG4gICAgfVxufVxuY2xhc3MgVG9wUG9seWdvbk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRvcCA9IG51bGw7XG4gICAgfVxuICAgIGFkZExvY2FsTWluKHgsIHkpIHtcbiAgICAgICAgY29uc3QgbiA9IG5ldyBQb2x5Z29uTm9kZSh0aGlzLnRvcCwgeCwgeSk7XG4gICAgICAgIHRoaXMudG9wID0gbjtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIG1lcmdlTGVmdChwLCBxKSB7XG4gICAgICAgIC8qIExhYmVsIGNvbnRvdXIgYXMgYSBob2xlICovXG4gICAgICAgIHEucHJveHkuaG9sZSA9IHRydWU7XG4gICAgICAgIGlmIChwLnByb3h5ICE9PSBxLnByb3h5KSB7XG4gICAgICAgICAgICAvKiBBc3NpZ24gcCdzIHZlcnRleCBsaXN0IHRvIHRoZSBsZWZ0IGVuZCBvZiBxJ3MgbGlzdCAqL1xuICAgICAgICAgICAgcC5wcm94eS5yaWdodC5uZXh0ID0gcS5wcm94eS5sZWZ0O1xuICAgICAgICAgICAgcS5wcm94eS5sZWZ0ID0gcC5wcm94eS5sZWZ0O1xuICAgICAgICAgICAgLyogUmVkaXJlY3QgYW55IHAucHJveHkgcmVmZXJlbmNlcyB0byBxLnByb3h5ICovXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBwLnByb3h5O1xuICAgICAgICAgICAgZm9yIChsZXQgbm9kZSA9IHRoaXMudG9wOyBub2RlICE9PSBudWxsOyBub2RlID0gbm9kZS5uZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUucHJveHkgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnByb3h5ID0gcS5wcm94eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWVyZ2VSaWdodChwLCBxKSB7XG4gICAgICAgIC8qIExhYmVsIGNvbnRvdXIgYXMgZXh0ZXJuYWwgKi9cbiAgICAgICAgcS5wcm94eS5ob2xlID0gZmFsc2U7XG4gICAgICAgIGlmIChwLnByb3h5ICE9PSBxLnByb3h5KSB7XG4gICAgICAgICAgICAvKiBBc3NpZ24gcCdzIHZlcnRleCBsaXN0IHRvIHRoZSByaWdodCBlbmQgb2YgcSdzIGxpc3QgKi9cbiAgICAgICAgICAgIHEucHJveHkucmlnaHQubmV4dCA9IHAucHJveHkubGVmdDtcbiAgICAgICAgICAgIHEucHJveHkucmlnaHQgPSBwLnByb3h5LnJpZ2h0O1xuICAgICAgICAgICAgLyogUmVkaXJlY3QgYW55IHAtPnByb3h5IHJlZmVyZW5jZXMgdG8gcS0+cHJveHkgKi9cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHAucHJveHk7XG4gICAgICAgICAgICBmb3IgKGxldCBub2RlID0gdGhpcy50b3A7IG5vZGUgIT09IG51bGw7IG5vZGUgPSBub2RlLm5leHQpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5wcm94eSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucHJveHkgPSBxLnByb3h5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDb250b3VycygpIHtcbiAgICAgICAgY29uc3QgY29udG91cnMgPSBbXTtcbiAgICAgICAgb3V0ZXI6IGZvciAobGV0IHBvbHlnb24gPSB0aGlzLnRvcDsgcG9seWdvbiAhPT0gbnVsbDsgcG9seWdvbiA9IHBvbHlnb24ubmV4dCkge1xuICAgICAgICAgICAgaWYgKCFwb2x5Z29uLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogQ291bnQgdGhlIHZlcnRpY2VzIGluIHRoZSBjdXJyZW50IGNvbnRvdXIgKi9cbiAgICAgICAgICAgIGxldCBudiA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCB2dHggPSBwb2x5Z29uLnByb3h5LmxlZnQ7IHZ0eCAhPT0gbnVsbDsgdnR4ID0gdnR4Lm5leHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoKCsrbnYpID4gMikge1xuICAgICAgICAgICAgICAgICAgICBjb250b3Vycy5wdXNoKHBvbHlnb24pO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2x5Z29uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250b3VycztcbiAgICB9XG4gICAgZ2V0UmVzdWx0KCkge1xuICAgICAgICBjb25zdCBjb250b3VycyA9IHRoaXMuZ2V0Q29udG91cnMoKTtcbiAgICAgICAgaWYgKGNvbnRvdXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTaW1wbGVQb2x5Z29uKFtdKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbm5lclBvbGllcyA9IGNvbnRvdXJzLm1hcCgocG9seU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2VzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCB2dHggPSBwb2x5Tm9kZS5wcm94eS5sZWZ0OyB2dHggIT09IG51bGw7IHZ0eCA9IHZ0eC5uZXh0KSB7XG4gICAgICAgICAgICAgICAgdmVydGljZXMucHVzaCh2dHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2ltcGxlID0gbmV3IFNpbXBsZVBvbHlnb24odmVydGljZXMpO1xuICAgICAgICAgICAgcmV0dXJuIHBvbHlOb2RlLnByb3h5LmhvbGUgPyBuZXcgTXVsdGlQb2x5Z29uKFtzaW1wbGVdLCB0cnVlKSA6IHNpbXBsZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoaW5uZXJQb2xpZXMubGVuZ3RoID09PSAxKSA/IGlubmVyUG9saWVzWzBdIDogbmV3IE11bHRpUG9seWdvbihpbm5lclBvbGllcyk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFBvbHlnb24ge1xuICAgIHN0YXRpYyBuX2FyeShvcCwgLi4ucG9seXMpIHtcbiAgICAgICAgcmV0dXJuIHBvbHlzLnJlZHVjZSgoYWNjLCBwKSA9PiBjbGlwKG9wLCBhY2MsIHApKTtcbiAgICB9XG4gICAgc3RhdGljIGludGVyc2VjdGlvbiguLi5wKSB7XG4gICAgICAgIHJldHVybiBQb2x5Z29uLm5fYXJ5KE9wZXJhdGlvblR5cGUuSU5ULCAuLi5wKTtcbiAgICB9XG4gICAgaW50ZXJzZWN0aW9uKC4uLnApIHtcbiAgICAgICAgcmV0dXJuIFBvbHlnb24uaW50ZXJzZWN0aW9uKHRoaXMsIC4uLnApO1xuICAgIH1cbiAgICBzdGF0aWMgdW5pb24oLi4ucCkge1xuICAgICAgICByZXR1cm4gUG9seWdvbi5uX2FyeShPcGVyYXRpb25UeXBlLkFERCwgLi4ucCk7XG4gICAgfVxuICAgIHVuaW9uKC4uLnApIHtcbiAgICAgICAgcmV0dXJuIFBvbHlnb24udW5pb24odGhpcywgLi4ucCk7XG4gICAgfVxuICAgIHN0YXRpYyB4b3IoLi4ucCkge1xuICAgICAgICByZXR1cm4gUG9seWdvbi5uX2FyeShPcGVyYXRpb25UeXBlLlhPUiwgLi4ucCk7XG4gICAgfVxuICAgIHhvciguLi5wKSB7XG4gICAgICAgIHJldHVybiBQb2x5Z29uLnhvcih0aGlzLCAuLi5wKTtcbiAgICB9XG4gICAgc3RhdGljIGRpZmZlcmVuY2UoZmlyc3QsIC4uLnApIHtcbiAgICAgICAgc3dpdGNoIChwLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gZmlyc3Q7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBjbGlwKE9wZXJhdGlvblR5cGUuRElGLCBmaXJzdCwgcFswXSk7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpcHBlciA9IHAucmVkdWNlKChhY2MsIG4pID0+IGNsaXAoT3BlcmF0aW9uVHlwZS5BREQsIGFjYywgbikpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjbGlwKE9wZXJhdGlvblR5cGUuRElGLCBmaXJzdCwgY2xpcHBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlmZmVyZW5jZSguLi5wKSB7XG4gICAgICAgIHJldHVybiBQb2x5Z29uLmRpZmZlcmVuY2UodGhpcywgLi4ucCk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tUG9pbnRzKHBvaW50cykge1xuICAgICAgICByZXR1cm4gbmV3IFNpbXBsZVBvbHlnb24ocG9pbnRzLm1hcCgocCkgPT4gQXJyYXkuaXNBcnJheShwKSA/IHsgeDogcFswXSB8fCAwLCB5OiBwWzFdIHx8IDAgfSA6IHApKTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21WZXJ0aWNlcyh7IGJvdW5kcywgaG9sZXMgfSkge1xuICAgICAgICByZXR1cm4gUG9seWdvbi5uX2FyeShPcGVyYXRpb25UeXBlLkFERCwgLi4uYm91bmRzLm1hcChQb2x5Z29uLmZyb21Qb2ludHMpKVxuICAgICAgICAgICAgLmRpZmZlcmVuY2UoLi4uaG9sZXMubWFwKFBvbHlnb24uZnJvbVBvaW50cykpO1xuICAgIH1cbn1cbi8vIE11bHRpUG9seWdvbiBwcm92aWRlcyBzdXBwb3J0IGZvciBjb21wbGV4ICh3aXRoIG11bHRpcGxlIGRpc2pvaW50IGN5Y2xlcykgYW5kIHNpbXBsZSBwb2x5Z29ucyBhbmQgaG9sZXMuXG5jbGFzcyBNdWx0aVBvbHlnb24gZXh0ZW5kcyBQb2x5Z29uIHtcbiAgICBjb25zdHJ1Y3Rvcihwb2x5TGlzdCwgX2lzSG9sZSA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucG9seUxpc3QgPSBwb2x5TGlzdDtcbiAgICAgICAgdGhpcy5faXNIb2xlID0gX2lzSG9sZTtcbiAgICAgICAgdGhpcy5fYm91bmRzID0gbnVsbDtcbiAgICAgICAgaWYgKF9pc0hvbGUgJiYgcG9seUxpc3QubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29tcGxleCBwb2x5Z29ucyBjYW5ub3QgYmUgaG9sZXMuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVxdWFscyh0aGF0KSB7XG4gICAgICAgIHJldHVybiAodGhhdCBpbnN0YW5jZW9mIE11bHRpUG9seWdvbikgJiZcbiAgICAgICAgICAgIHRoaXMuX2lzSG9sZSA9PT0gdGhhdC5faXNIb2xlICYmXG4gICAgICAgICAgICB0aGlzLnBvbHlMaXN0LmV2ZXJ5KChwLCBpKSA9PiBwLmVxdWFscyh0aGF0LnBvbHlMaXN0W2ldKSk7XG4gICAgfVxuICAgIGdldCBpc0hvbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0hvbGU7XG4gICAgfVxuICAgIGdldCBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb2x5TGlzdC5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIGdldCBib3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib3VuZHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcG9seUxpc3QgfSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAocG9seUxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYm91bmRzID0gbmV3IFJlY3RhbmdsZShOYU4sIE5hTiwgTmFOLCBOYU4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocG9seUxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYm91bmRzID0gdGhpcy5wb2x5TGlzdFswXS5ib3VuZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgeG1pbiA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICAgICAgbGV0IHltaW4gPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICAgICAgICAgIGxldCB4bWF4ID0gLU51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICAgICAgbGV0IHltYXggPSAtTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHAgb2YgdGhpcy5wb2x5TGlzdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG1heHgsIG1heHksIG1pbngsIG1pbnkgfSA9IHAuYm91bmRzO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlueCA8IHhtaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtaW4gPSBtaW54O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXh4ID4geG1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeG1heCA9IG1heHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbnkgPCB5bWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5bWluID0gbWlueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobWF4eSA+IHltYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHltYXggPSBtYXh5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2JvdW5kcyA9IG5ldyBSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kcztcbiAgICB9XG4gICAgZ2V0SW5uZXJQb2xpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlMaXN0O1xuICAgIH1cbiAgICBnZXROdW1Qb2ludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlMaXN0WzBdLmdldE51bVBvaW50cygpO1xuICAgIH1cbiAgICBnZXQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9seUxpc3RbMF0uZ2V0KGluZGV4KTtcbiAgICB9XG4gICAgW2lzQ29udHJpYnV0aW5nXShwb2x5SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9seUxpc3RbcG9seUluZGV4XVtpc0NvbnRyaWJ1dGluZ10oMCk7XG4gICAgfVxuICAgIFtzZXRDb250cmlidXRpbmddKHBvbHlJbmRleCwgY29udHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5wb2x5TGlzdFtwb2x5SW5kZXhdW3NldENvbnRyaWJ1dGluZ10oMCwgY29udHJpYnV0ZXMpO1xuICAgIH1cbiAgICB0b1ZlcnRpY2VzKCkge1xuICAgICAgICBpZiAodGhpcy5faXNIb2xlKSB7XG4gICAgICAgICAgICBjb25zdCB7IGJvdW5kcyB9ID0gdGhpcy5wb2x5TGlzdFswXS50b1ZlcnRpY2VzKCk7XG4gICAgICAgICAgICByZXR1cm4geyBib3VuZHM6IFtdLCBob2xlczogYm91bmRzIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBib3VuZHMgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGhvbGVzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBvbHkgb2YgdGhpcy5wb2x5TGlzdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYm91bmRzOiBuYiwgaG9sZXM6IG5oIH0gPSBwb2x5LnRvVmVydGljZXMoKTtcbiAgICAgICAgICAgICAgICBib3VuZHMucHVzaCguLi5uYik7XG4gICAgICAgICAgICAgICAgaG9sZXMucHVzaCguLi5uaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBib3VuZHMsIGhvbGVzIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBjeWNsaWNFcXVhbCh1LCB2KSB7XG4gICAgY29uc3QgbiA9IHUubGVuZ3RoO1xuICAgIGlmIChuID09PSB2Lmxlbmd0aCkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGxldCBrID0gMTtcbiAgICAgICAgICAgIHdoaWxlIChrIDw9IG4gJiYgdVsoaSArIGspICUgbl0uZXF1YWxzKHZbayAlIG5dKSkge1xuICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrID4gbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSArPSBrO1xuICAgICAgICB9IHdoaWxlIChpIDwgbik7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8vIEEgc2ltcGxlIHBvbHlnb24sIHdpdGggb25seSBvbmUgaW5uZXIgcG9seWdvbi0taXRzZWxmLiBDYW5ub3QgYmUgdXNlZCB0byByZXByZXNlbnQgYSBob2xlLlxuY2xhc3MgU2ltcGxlUG9seWdvbiBleHRlbmRzIFBvbHlnb24ge1xuICAgIGNvbnN0cnVjdG9yKHBvaW50cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvKiogRmxhZyB1c2VkIGJ5IHRoZSBDbGlwIGFsZ29yaXRobSAqL1xuICAgICAgICB0aGlzLmNvbnRyaWJ1dGVzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fYm91bmRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5wb2ludExpc3QgPSBwb2ludHMubWFwKCh7IHgsIHkgfSkgPT4gbmV3IFZlcnRleCh4LCB5KSk7XG4gICAgfVxuICAgIGVxdWFscyh0aGF0KSB7XG4gICAgICAgIGlmICghKHRoYXQgaW5zdGFuY2VvZiBTaW1wbGVQb2x5Z29uKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjeWNsaWNFcXVhbCh0aGlzLnBvaW50TGlzdCwgdGhhdC5wb2ludExpc3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXZlcnNlZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5wb2ludExpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHJldmVyc2VkLnB1c2godGhpcy5wb2ludExpc3RbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjeWNsaWNFcXVhbChyZXZlcnNlZCwgdGhhdC5wb2ludExpc3QpO1xuICAgIH1cbiAgICAvLyBBbHdheXMgcmV0dXJucyBmYWxzZSBzaW5jZSBTaW1wbGVQb2x5Z29ucyBjYW5ub3QgYmUgaG9sZXMuXG4gICAgZ2V0IGlzSG9sZSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXQgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRMaXN0Lmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gICAgZ2V0IGJvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvdW5kcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHhtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICAgICAgbGV0IHltaW4gPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICAgICAgbGV0IHhtYXggPSAtTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgIGxldCB5bWF4ID0gLU51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHsgeCwgeSB9IG9mIHRoaXMucG9pbnRMaXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHggPCB4bWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHhtaW4gPSB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoeCA+IHhtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgeG1heCA9IHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh5IDwgeW1pbikge1xuICAgICAgICAgICAgICAgICAgICB5bWluID0geTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHkgPiB5bWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHltYXggPSB5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2JvdW5kcyA9IG5ldyBSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kcztcbiAgICB9XG4gICAgZ2V0SW5uZXJQb2xpZXMoKSB7XG4gICAgICAgIHJldHVybiBbdGhpc107XG4gICAgfVxuICAgIGdldE51bVBvaW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRMaXN0Lmxlbmd0aDtcbiAgICB9XG4gICAgZ2V0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50TGlzdFtpbmRleF07XG4gICAgfVxuICAgIFtpc0NvbnRyaWJ1dGluZ10ocG9seUluZGV4KSB7XG4gICAgICAgIGlmIChwb2x5SW5kZXggIT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBvbHlTaW1wbGUgb25seSBoYXMgb25lIHBvbHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJpYnV0ZXM7XG4gICAgfVxuICAgIFtzZXRDb250cmlidXRpbmddKHBvbHlJbmRleCwgY29udHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKHBvbHlJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUG9seVNpbXBsZSBvbmx5IGhhcyBvbmUgcG9seVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRyaWJ1dGVzID0gY29udHJpYnV0ZXM7XG4gICAgfVxuICAgIHRvVmVydGljZXMoKSB7XG4gICAgICAgIHJldHVybiB7IGJvdW5kczogW3RoaXMucG9pbnRMaXN0XSwgaG9sZXM6IFtdIH07XG4gICAgfVxufVxuLy8gZXhwb3J0IHsgIGNsaXAsIFBvbHlnb24sIFNpbXBsZVBvbHlnb24gfTtcbmV4cG9ydCBkZWZhdWx0IFBvbHlnb247XG4iLCIvLyBNb3N0bHkgc291cmNlZCBmcm9tIFBhdHJvbEpTIGF0IHRoZSBtb21lbnQuIFRPRE86IGNvbWUgYmFjayBhbmQgcmVpbXBsZW1lbnQgdGhpcyBhcyBhbiBpbmNvbXBsZXRlXG4vLyBmdW5uZWwgYWxnb3JpdGhtIHNvIGFzdGFyIGNoZWNrcyBjYW4gYmUgbW9yZSBhY2N1cmF0ZS5cbmltcG9ydCB7IHRyaWFyZWEyIH0gZnJvbSBcIi4vdXRpbHNcIjtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbm5lbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9ydGFscyA9IFtdO1xuICAgICAgICB0aGlzLnBhdGggPSBbXTtcbiAgICB9XG4gICAgcHVzaChwMSwgcDIpIHtcbiAgICAgICAgaWYgKHAyID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBwMiA9IHAxO1xuICAgICAgICB0aGlzLnBvcnRhbHMucHVzaCh7XG4gICAgICAgICAgICBsZWZ0OiBwMSxcbiAgICAgICAgICAgIHJpZ2h0OiBwMixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0cmluZ1B1bGwoKSB7XG4gICAgICAgIGNvbnN0IHBvcnRhbHMgPSB0aGlzLnBvcnRhbHM7XG4gICAgICAgIGNvbnN0IHB0cyA9IFtdO1xuICAgICAgICAvLyBJbml0IHNjYW4gc3RhdGVcbiAgICAgICAgbGV0IGFwZXhJbmRleCA9IDA7XG4gICAgICAgIGxldCBsZWZ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgcmlnaHRJbmRleCA9IDA7XG4gICAgICAgIGxldCBwb3J0YWxBcGV4ID0gcG9ydGFsc1swXS5sZWZ0O1xuICAgICAgICBsZXQgcG9ydGFsTGVmdCA9IHBvcnRhbHNbMF0ubGVmdDtcbiAgICAgICAgbGV0IHBvcnRhbFJpZ2h0ID0gcG9ydGFsc1swXS5yaWdodDtcbiAgICAgICAgLy8gQWRkIHN0YXJ0IHBvaW50LlxuICAgICAgICBwdHMucHVzaChwb3J0YWxBcGV4KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb3J0YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBuZXh0IHBvcnRhbCB2ZXJ0aWNlc1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IHBvcnRhbHNbaV0ubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gcG9ydGFsc1tpXS5yaWdodDtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSByaWdodCB2ZXJ0ZXguXG4gICAgICAgICAgICBpZiAodHJpYXJlYTIocG9ydGFsQXBleCwgcG9ydGFsUmlnaHQsIHJpZ2h0KSA8PSAwLjApIHtcbiAgICAgICAgICAgICAgICBpZiAocG9ydGFsQXBleC5lcXVhbHMocG9ydGFsUmlnaHQpIHx8IHRyaWFyZWEyKHBvcnRhbEFwZXgsIHBvcnRhbExlZnQsIHJpZ2h0KSA+IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaWdodGVuIHRoZSBmdW5uZWwuXG4gICAgICAgICAgICAgICAgICAgIHBvcnRhbFJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0SW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmlnaHQgdmVydGV4IGp1c3QgY3Jvc3NlZCBvdmVyIHRoZSBsZWZ0IHZlcnRleCwgc28gdGhlIGxlZnQgdmVydGV4IHNob3VsZFxuICAgICAgICAgICAgICAgICAgICAvLyBub3cgYmUgcGFydCBvZiB0aGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgcHRzLnB1c2gocG9ydGFsTGVmdCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc3RhcnQgc2NhbiBmcm9tIHBvcnRhbCBsZWZ0IHBvaW50LlxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIGN1cnJlbnQgbGVmdCB0aGUgbmV3IGFwZXguXG4gICAgICAgICAgICAgICAgICAgIHBvcnRhbEFwZXggPSBwb3J0YWxMZWZ0O1xuICAgICAgICAgICAgICAgICAgICBhcGV4SW5kZXggPSBsZWZ0SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHBvcnRhbFxuICAgICAgICAgICAgICAgICAgICBwb3J0YWxMZWZ0ID0gcG9ydGFsQXBleDtcbiAgICAgICAgICAgICAgICAgICAgcG9ydGFsUmlnaHQgPSBwb3J0YWxBcGV4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0SW5kZXggPSBhcGV4SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0SW5kZXggPSBhcGV4SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc3RhcnQgc2NhblxuICAgICAgICAgICAgICAgICAgICBpID0gYXBleEluZGV4O1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgbGVmdCB2ZXJ0ZXguXG4gICAgICAgICAgICBpZiAodHJpYXJlYTIocG9ydGFsQXBleCwgcG9ydGFsTGVmdCwgbGVmdCkgPj0gMC4wKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBvcnRhbEFwZXguZXF1YWxzKHBvcnRhbExlZnQpIHx8IHRyaWFyZWEyKHBvcnRhbEFwZXgsIHBvcnRhbFJpZ2h0LCBsZWZ0KSA8IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaWdodGVuIHRoZSBmdW5uZWwuXG4gICAgICAgICAgICAgICAgICAgIHBvcnRhbExlZnQgPSBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0SW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGVmdCB2ZXJ0ZXgganVzdCBjcm9zc2VkIG92ZXIgdGhlIHJpZ2h0IHZlcnRleCwgc28gdGhlIHJpZ2h0IHZlcnRleCBzaG91bGRcbiAgICAgICAgICAgICAgICAgICAgLy8gbm93IGJlIHBhcnQgb2YgdGhlIHBhdGhcbiAgICAgICAgICAgICAgICAgICAgcHRzLnB1c2gocG9ydGFsUmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXN0YXJ0IHNjYW4gZnJvbSBwb3J0YWwgcmlnaHQgcG9pbnQuXG4gICAgICAgICAgICAgICAgICAgIC8vIE1ha2UgY3VycmVudCByaWdodCB0aGUgbmV3IGFwZXguXG4gICAgICAgICAgICAgICAgICAgIHBvcnRhbEFwZXggPSBwb3J0YWxSaWdodDtcbiAgICAgICAgICAgICAgICAgICAgYXBleEluZGV4ID0gcmlnaHRJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgcG9ydGFsXG4gICAgICAgICAgICAgICAgICAgIHBvcnRhbExlZnQgPSBwb3J0YWxBcGV4O1xuICAgICAgICAgICAgICAgICAgICBwb3J0YWxSaWdodCA9IHBvcnRhbEFwZXg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRJbmRleCA9IGFwZXhJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRJbmRleCA9IGFwZXhJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzdGFydCBzY2FuXG4gICAgICAgICAgICAgICAgICAgIGkgPSBhcGV4SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHRzLmxlbmd0aCA9PT0gMCB8fCAhcHRzW3B0cy5sZW5ndGggLSAxXS5lcXVhbHMocG9ydGFsc1twb3J0YWxzLmxlbmd0aCAtIDFdLmxlZnQpKSB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgbGFzdCBwb2ludCB0byBwYXRoLlxuICAgICAgICAgICAgcHRzLnB1c2gocG9ydGFsc1twb3J0YWxzLmxlbmd0aCAtIDFdLmxlZnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGF0aCA9IHB0cztcbiAgICAgICAgcmV0dXJuIHB0cztcbiAgICB9XG59XG4iLCJpbXBvcnQgVmVjdG9yMiBmcm9tIFwiLi92ZWN0b3ItMlwiO1xuLyoqXG4gKiBTdHJpcHBlZCBkb3duIHZlcnNpb24gb2YgUGhhc2VyJ3MgTGluZSB3aXRoIGp1c3QgdGhlIGZ1bmN0aW9uYWxpdHkgbmVlZGVkIGZvciBuYXZtZXNoZXMuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIExpbmVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSB7XG4gICAgY29uc3RydWN0b3IoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBWZWN0b3IyKHgxLCB5MSk7XG4gICAgICAgIHRoaXMuZW5kID0gbmV3IFZlY3RvcjIoeDIsIHkyKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gTWF0aC5taW4oeDEsIHgyKTtcbiAgICAgICAgdGhpcy5yaWdodCA9IE1hdGgubWF4KHgxLCB4Mik7XG4gICAgICAgIHRoaXMudG9wID0gTWF0aC5taW4oeTEsIHkyKTtcbiAgICAgICAgdGhpcy5ib3R0b20gPSBNYXRoLm1heCh5MSwgeTIpO1xuICAgIH1cbiAgICBwb2ludE9uU2VnbWVudCh4LCB5KSB7XG4gICAgICAgIHJldHVybiAoeCA+PSB0aGlzLmxlZnQgJiZcbiAgICAgICAgICAgIHggPD0gdGhpcy5yaWdodCAmJlxuICAgICAgICAgICAgeSA+PSB0aGlzLnRvcCAmJlxuICAgICAgICAgICAgeSA8PSB0aGlzLmJvdHRvbSAmJlxuICAgICAgICAgICAgdGhpcy5wb2ludE9uTGluZSh4LCB5KSk7XG4gICAgfVxuICAgIHBvaW50T25MaW5lKHgsIHkpIHtcbiAgICAgICAgLy8gQ29tcGFyZSBzbG9wZSBvZiBsaW5lIHN0YXJ0IC0+IHh5IHRvIGxpbmUgc3RhcnQgLT4gbGluZSBlbmRcbiAgICAgICAgcmV0dXJuICh4IC0gdGhpcy5sZWZ0KSAqICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKSA9PT0gKHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpICogKHkgLSB0aGlzLnRvcCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IExpbmUgZnJvbSBcIi4vbGluZVwiO1xuLyoqXG4gKiBTdHJpcHBlZCBkb3duIHZlcnNpb24gb2YgUGhhc2VyJ3MgUG9seWdvbiB3aXRoIGp1c3QgdGhlIGZ1bmN0aW9uYWxpdHkgbmVlZGVkIGZvciBuYXZtZXNoZXMuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIFBvbHlnb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWdvbiB7XG4gICAgY29uc3RydWN0b3IocG9pbnRzLCBjbG9zZWQgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuaXNDbG9zZWQgPSBjbG9zZWQ7XG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuICAgICAgICB0aGlzLmVkZ2VzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwMSA9IHBvaW50c1tpIC0gMV07XG4gICAgICAgICAgICBjb25zdCBwMiA9IHBvaW50c1tpXTtcbiAgICAgICAgICAgIHRoaXMuZWRnZXMucHVzaChuZXcgTGluZShwMS54LCBwMS55LCBwMi54LCBwMi55KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNDbG9zZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gcG9pbnRzWzBdO1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB0aGlzLmVkZ2VzLnB1c2gobmV3IExpbmUoZmlyc3QueCwgZmlyc3QueSwgbGFzdC54LCBsYXN0LnkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb250YWlucyh4LCB5KSB7XG4gICAgICAgIGxldCBpbnNpZGUgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IC0xLCBqID0gdGhpcy5wb2ludHMubGVuZ3RoIC0gMTsgKytpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBqID0gaSkge1xuICAgICAgICAgICAgY29uc3QgaXggPSB0aGlzLnBvaW50c1tpXS54O1xuICAgICAgICAgICAgY29uc3QgaXkgPSB0aGlzLnBvaW50c1tpXS55O1xuICAgICAgICAgICAgY29uc3QganggPSB0aGlzLnBvaW50c1tqXS54O1xuICAgICAgICAgICAgY29uc3QgankgPSB0aGlzLnBvaW50c1tqXS55O1xuICAgICAgICAgICAgaWYgKCgoaXkgPD0geSAmJiB5IDwgankpIHx8IChqeSA8PSB5ICYmIHkgPCBpeSkpICYmXG4gICAgICAgICAgICAgICAgeCA8ICgoanggLSBpeCkgKiAoeSAtIGl5KSkgLyAoankgLSBpeSkgKyBpeCkge1xuICAgICAgICAgICAgICAgIGluc2lkZSA9ICFpbnNpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc2lkZTtcbiAgICB9XG59XG4iLCIvKipcbiAqIFN0cmlwcGVkIGRvd24gdmVyc2lvbiBvZiBQaGFzZXIncyBWZWN0b3IyIHdpdGgganVzdCB0aGUgZnVuY3Rpb25hbGl0eSBuZWVkZWQgZm9yIG5hdm1lc2hlcy5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgVmVjdG9yMlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyIHtcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG4gICAgZXF1YWxzKHYpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gdi54ICYmIHRoaXMueSA9PT0gdi55O1xuICAgIH1cbiAgICBhbmdsZSh2KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHYueSAtIHRoaXMueSwgdi54IC0gdGhpcy54KTtcbiAgICB9XG4gICAgZGlzdGFuY2Uodikge1xuICAgICAgICBjb25zdCBkeCA9IHYueCAtIHRoaXMueDtcbiAgICAgICAgY29uc3QgZHkgPSB2LnkgLSB0aGlzLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cbiAgICBhZGQodikge1xuICAgICAgICB0aGlzLnggKz0gdi54O1xuICAgICAgICB0aGlzLnkgKz0gdi55O1xuICAgIH1cbiAgICBzdWJ0cmFjdCh2KSB7XG4gICAgICAgIHRoaXMueCAtPSB2Lng7XG4gICAgICAgIHRoaXMueSAtPSB2Lnk7XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBqc2FzdGFyIGZyb20gXCJqYXZhc2NyaXB0LWFzdGFyXCI7XG4vKipcbiAqIEdyYXBoIGZvciBqYXZhc2NyaXB0LWFzdGFyLiBJdCBpbXBsZW1lbnRzIHRoZSBmdW5jdGlvbmFsaXR5IGZvciBhc3Rhci4gU2VlIEdQUyB0ZXN0IGZyb20gYXN0YXJcbiAqIHJlcG8gZm9yIHN0cnVjdHVyZTogaHR0cHM6Ly9naXRodWIuY29tL2Jncmlucy9qYXZhc2NyaXB0LWFzdGFyL2Jsb2IvbWFzdGVyL3Rlc3QvdGVzdHMuanNcbiAqXG4gKiBAY2xhc3MgTmF2R3JhcGhcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIE5hdkdyYXBoIHtcbiAgICBjb25zdHJ1Y3RvcihuYXZQb2x5Z29ucykge1xuICAgICAgICB0aGlzLmdyaWQgPSBbXTtcbiAgICAgICAgdGhpcy5pbml0ID0ganNhc3Rhci5HcmFwaC5wcm90b3R5cGUuaW5pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsZWFuRGlydHkgPSBqc2FzdGFyLkdyYXBoLnByb3RvdHlwZS5jbGVhbkRpcnR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubWFya0RpcnR5ID0ganNhc3Rhci5HcmFwaC5wcm90b3R5cGUubWFya0RpcnR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9TdHJpbmcgPSBqc2FzdGFyLkdyYXBoLnByb3RvdHlwZS50b1N0cmluZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGVzID0gbmF2UG9seWdvbnM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBuZWlnaGJvcnMobmF2UG9seWdvbikge1xuICAgICAgICByZXR1cm4gbmF2UG9seWdvbi5uZWlnaGJvcnM7XG4gICAgfVxuICAgIG5hdkhldXJpc3RpYyhuYXZQb2x5Z29uMSwgbmF2UG9seWdvbjIpIHtcbiAgICAgICAgcmV0dXJuIG5hdlBvbHlnb24xLmNlbnRyb2lkRGlzdGFuY2UobmF2UG9seWdvbjIpO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmNsZWFuRGlydHkoKTtcbiAgICAgICAgdGhpcy5ub2RlcyA9IFtdO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5hdkdyYXBoO1xuIiwiaW1wb3J0IHsgYXN0YXIgfSBmcm9tICdqYXZhc2NyaXB0LWFzdGFyJztcbmltcG9ydCBOYXZQb2x5IGZyb20gJy4vbmF2cG9seSc7XG5pbXBvcnQgTmF2R3JhcGggZnJvbSAnLi9uYXZncmFwaCc7XG5pbXBvcnQgQ2hhbm5lbCBmcm9tICcuL2NoYW5uZWwnO1xuaW1wb3J0IHsgYW5nbGVEaWZmZXJlbmNlLCBhcmVDb2xsaW5lYXIsIHByb2plY3RQb2ludFRvRWRnZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IFZlY3RvcjIgZnJvbSAnLi9tYXRoL3ZlY3Rvci0yJztcbmltcG9ydCBMaW5lIGZyb20gJy4vbWF0aC9saW5lJztcbmltcG9ydCBQb2x5Z29uIGZyb20gJy4vbWF0aC9wb2x5Z29uJztcbi8qKlxuICogVGhlIGBOYXZNZXNoYCBjbGFzcyBpcyB0aGUgd29ya2hvcnNlIHRoYXQgcmVwcmVzZW50cyBhIG5hdmlnYXRpb24gbWVzaCBidWlsdCBmcm9tIGEgc2VyaWVzIG9mXG4gKiBwb2x5Z29ucy4gT25jZSBidWlsdCwgdGhlIG1lc2ggY2FuIGJlIGFza2VkIGZvciBhIHBhdGggZnJvbSBvbmUgcG9pbnQgdG8gYW5vdGhlciBwb2ludC4gU29tZVxuICogaW50ZXJuYWwgdGVybWlub2xvZ3kgdXNhZ2U6XG4gKiAtIG5laWdoYm9yOiBhIHBvbHlnb24gdGhhdCBzaGFyZXMgcGFydCBvZiBhbiBlZGdlIHdpdGggYW5vdGhlciBwb2x5Z29uXG4gKiAtIHBvcnRhbDogd2hlbiB0d28gbmVpZ2hib3IncyBoYXZlIGVkZ2VzIHRoYXQgb3ZlcmxhcCwgdGhlIHBvcnRhbCBpcyB0aGUgb3ZlcmxhcHBpbmcgbGluZSBzZWdtZW50XG4gKiAtIGNoYW5uZWw6IHRoZSBwYXRoIG9mIHBvbHlnb25zIGZyb20gc3RhcnRpbmcgcG9pbnQgdG8gZW5kIHBvaW50XG4gKiAtIHB1bGwgdGhlIHN0cmluZzogcnVuIHRoZSBmdW5uZWwgYWxnb3JpdGhtIG9uIHRoZSBjaGFubmVsIHNvIHRoYXQgdGhlIHBhdGggaHVncyB0aGUgZWRnZXMgb2YgdGhlXG4gKiAgIGNoYW5uZWwuIEVxdWl2YWxlbnQgdG8gaGF2aW5nIGEgc3RyaW5nIHNuYWtpbmcgdGhyb3VnaCBhIGhhbGx3YXkgYW5kIHRoZW4gcHVsbGluZyBpdCB0YXV0LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZNZXNoIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbWVzaFBvbHlnb25Qb2ludHMgQXJyYXkgd2hlcmUgZWFjaCBlbGVtZW50IGlzIGFuIGFycmF5IG9mIHBvaW50LWxpa2Ugb2JqZWN0cyB0aGF0XG4gICAgICogZGVmaW5lcyBhIHBvbHlnb24uXG4gICAgICogQHBhcmFtIG1lc2hTaHJpbmtBbW91bnQgVGhlIGFtb3VudCAoaW4gcGl4ZWxzKSB0aGF0IHRoZSBuYXZtZXNoIGhhcyBiZWVuIHNocnVuayBhcm91bmRcbiAgICAgKiBvYnN0YWNsZXMgKGEuay5hIHRoZSBhbW91bnQgb2JzdGFjbGVzIGhhdmUgYmVlbiBleHBhbmRlZCkuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobWVzaFBvbHlnb25Qb2ludHMsIG1lc2hTaHJpbmtBbW91bnQgPSAwKSB7XG4gICAgICAgIHRoaXMubWVzaFNocmlua0Ftb3VudCA9IG1lc2hTaHJpbmtBbW91bnQ7XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIFBvbHlQb2ludHNbXSBpbnRvIE5hdlBvbHkgaW5zdGFuY2VzLlxuICAgICAgICBjb25zdCBuZXdQb2x5cyA9IG1lc2hQb2x5Z29uUG9pbnRzLm1hcCgocG9seVBvaW50cykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVjdG9ycyA9IHBvbHlQb2ludHMubWFwKChwKSA9PiBuZXcgVmVjdG9yMihwLngsIHAueSkpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2x5Z29uKHZlY3RvcnMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uYXZQb2x5Z29ucyA9IG5ld1BvbHlzLm1hcCgocG9seWdvbiwgaSkgPT4gbmV3IE5hdlBvbHkoaSwgcG9seWdvbikpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZU5laWdoYm9ycygpO1xuICAgICAgICAvLyBBc3RhciBncmFwaCBvZiBjb25uZWN0aW9ucyBiZXR3ZWVuIHBvbHlnb25zXG4gICAgICAgIHRoaXMuZ3JhcGggPSBuZXcgTmF2R3JhcGgodGhpcy5uYXZQb2x5Z29ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgTmF2UG9seXMgdGhhdCBhcmUgaW4gdGhpcyBuYXZtZXNoLlxuICAgICAqL1xuICAgIGdldFBvbHlnb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYXZQb2x5Z29ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYW51cCBtZXRob2QgdG8gcmVtb3ZlIHJlZmVyZW5jZXMuXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5ncmFwaC5kZXN0cm95KCk7XG4gICAgICAgIGZvciAoY29uc3QgcG9seSBvZiB0aGlzLm5hdlBvbHlnb25zKSB7XG4gICAgICAgICAgICBwb2x5LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hdlBvbHlnb25zID0gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbmQgaWYgdGhlIGdpdmVuIHBvaW50IGlzIHdpdGhpbiBhbnkgb2YgdGhlIHBvbHlnb25zIGluIHRoZSBtZXNoLlxuICAgICAqIEBwYXJhbSBwb2ludFxuICAgICAqL1xuICAgIGlzUG9pbnRJbk1lc2gocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmF2UG9seWdvbnMuc29tZSgobmF2UG9seSkgPT4gbmF2UG9seS5jb250YWlucyhwb2ludCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBjbG9zZXN0IHBvaW50IGluIHRoZSBtZXNoIHRvIHRoZSBnaXZlbiBwb2ludC4gSWYgdGhlIHBvaW50IGlzIGFscmVhZHkgaW4gdGhlIG1lc2gsXG4gICAgICogdGhpcyB3aWxsIGdpdmUgeW91IHRoYXQgcG9pbnQuIElmIHRoZSBwb2ludCBpcyBvdXRzaWRlIG9mIHRoZSBtZXNoLCB0aGlzIHdpbGwgYXR0ZW1wdCB0b1xuICAgICAqIHByb2plY3QgdGhpcyBwb2ludCBpbnRvIHRoZSBtZXNoICh1cCB0byB0aGUgZ2l2ZW4gbWF4QWxsb3dhYmxlRGlzdCkuIFRoaXMgcmV0dXJucyBhbiBvYmplY3RcbiAgICAgKiB3aXRoOlxuICAgICAqIC0gZGlzdGFuY2UgLSBmcm9tIHRoZSBnaXZlbiBwb2ludCB0byB0aGUgbWVzaFxuICAgICAqIC0gcG9seWdvbiAtIHRoZSBvbmUgdGhlIHBvaW50IGlzIGNsb3Nlc3QgdG8sIG9yIG51bGxcbiAgICAgKiAtIHBvaW50IC0gdGhlIHBvaW50IGluc2lkZSB0aGUgbWVzaCwgb3IgbnVsbFxuICAgICAqIEBwYXJhbSBwb2ludFxuICAgICAqIEBwYXJhbSBtYXhBbGxvd2FibGVEaXN0XG4gICAgICovXG4gICAgZmluZENsb3Nlc3RNZXNoUG9pbnQocG9pbnQsIG1heEFsbG93YWJsZURpc3QgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHtcbiAgICAgICAgbGV0IG1pbkRpc3RhbmNlID0gbWF4QWxsb3dhYmxlRGlzdDtcbiAgICAgICAgbGV0IGNsb3Nlc3RQb2x5ID0gbnVsbDtcbiAgICAgICAgbGV0IHBvaW50T25DbG9zZXN0UG9seSA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgbmF2UG9seSBvZiB0aGlzLm5hdlBvbHlnb25zKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBhcmUgaW5zaWRlIGEgcG9seSwgd2UndmUgZ290IHRoZSBjbG9zZXN0LlxuICAgICAgICAgICAgaWYgKG5hdlBvbHkuY29udGFpbnMocG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgbWluRGlzdGFuY2UgPSAwO1xuICAgICAgICAgICAgICAgIGNsb3Nlc3RQb2x5ID0gbmF2UG9seTtcbiAgICAgICAgICAgICAgICBwb2ludE9uQ2xvc2VzdFBvbHkgPSBwb2ludDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElzIHRoZSBwb2x5IGNsb3NlIGVub3VnaCB0byB3YXJyYW50IGEgbW9yZSBhY2N1cmF0ZSBjaGVjaz8gUG9pbnQgaXMgZGVmaW5pdGVseSBvdXRzaWRlIG9mXG4gICAgICAgICAgICAvLyB0aGUgcG9seWdvbi4gRGlzdGFuY2UgLSBSYWRpdXMgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIGRpc3RhbmNlIHRvIGFuIGVkZ2Ugb2YgdGhlIHBvbHkuXG4gICAgICAgICAgICAvLyBUaGlzIHdpbGwgdW5kZXJlc3RpbWF0ZSBkaXN0YW5jZSwgYnV0IHRoYXQncyBwZXJmZWN0bHkgZmluZS5cbiAgICAgICAgICAgIGNvbnN0IHIgPSBuYXZQb2x5LmJvdW5kaW5nUmFkaXVzO1xuICAgICAgICAgICAgY29uc3QgZCA9IG5hdlBvbHkuY2VudHJvaWQuZGlzdGFuY2UocG9pbnQpO1xuICAgICAgICAgICAgaWYgKGQgLSByIDwgbWluRGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb2plY3RQb2ludFRvUG9seWdvbihwb2ludCwgbmF2UG9seSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kaXN0YW5jZSA8IG1pbkRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkRpc3RhbmNlID0gcmVzdWx0LmRpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0UG9seSA9IG5hdlBvbHk7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50T25DbG9zZXN0UG9seSA9IHJlc3VsdC5wb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZGlzdGFuY2U6IG1pbkRpc3RhbmNlLCBwb2x5Z29uOiBjbG9zZXN0UG9seSwgcG9pbnQ6IHBvaW50T25DbG9zZXN0UG9seSB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaW5kIGEgcGF0aCBmcm9tIHRoZSBzdGFydCBwb2ludCB0byB0aGUgZW5kIHBvaW50IHVzaW5nIHRoaXMgbmF2IG1lc2guXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0YXJ0UG9pbnQgQSBwb2ludC1saWtlIG9iamVjdCBpbiB0aGUgZm9ybSB7eCwgeX1cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZW5kUG9pbnQgQSBwb2ludC1saWtlIG9iamVjdCBpbiB0aGUgZm9ybSB7eCwgeX1cbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMltdfG51bGx9IEFuIGFycmF5IG9mIHBvaW50cyBpZiBhIHBhdGggaXMgZm91bmQsIG9yIG51bGwgaWYgbm8gcGF0aFxuICAgICAqL1xuICAgIGZpbmRQYXRoKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgICAgIGxldCBzdGFydFBvbHkgPSBudWxsO1xuICAgICAgICBsZXQgZW5kUG9seSA9IG51bGw7XG4gICAgICAgIGxldCBzdGFydERpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgbGV0IGVuZERpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgbGV0IGQ7XG4gICAgICAgIGxldCByO1xuICAgICAgICBjb25zdCBzdGFydFZlY3RvciA9IG5ldyBWZWN0b3IyKHN0YXJ0UG9pbnQueCwgc3RhcnRQb2ludC55KTtcbiAgICAgICAgY29uc3QgZW5kVmVjdG9yID0gbmV3IFZlY3RvcjIoZW5kUG9pbnQueCwgZW5kUG9pbnQueSk7XG4gICAgICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3QgcG9seSBmb3IgdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgcG9pbnRcbiAgICAgICAgZm9yIChjb25zdCBuYXZQb2x5IG9mIHRoaXMubmF2UG9seWdvbnMpIHtcbiAgICAgICAgICAgIHIgPSBuYXZQb2x5LmJvdW5kaW5nUmFkaXVzO1xuICAgICAgICAgICAgLy8gU3RhcnRcbiAgICAgICAgICAgIGQgPSBuYXZQb2x5LmNlbnRyb2lkLmRpc3RhbmNlKHN0YXJ0VmVjdG9yKTtcbiAgICAgICAgICAgIGlmIChkIDw9IHN0YXJ0RGlzdGFuY2UgJiYgZCA8PSByICYmIG5hdlBvbHkuY29udGFpbnMoc3RhcnRWZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRQb2x5ID0gbmF2UG9seTtcbiAgICAgICAgICAgICAgICBzdGFydERpc3RhbmNlID0gZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEVuZFxuICAgICAgICAgICAgZCA9IG5hdlBvbHkuY2VudHJvaWQuZGlzdGFuY2UoZW5kVmVjdG9yKTtcbiAgICAgICAgICAgIGlmIChkIDw9IGVuZERpc3RhbmNlICYmIGQgPD0gciAmJiBuYXZQb2x5LmNvbnRhaW5zKGVuZFZlY3RvcikpIHtcbiAgICAgICAgICAgICAgICBlbmRQb2x5ID0gbmF2UG9seTtcbiAgICAgICAgICAgICAgICBlbmREaXN0YW5jZSA9IGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGVuZCBwb2ludCB3YXNuJ3QgaW5zaWRlIGEgcG9seWdvbiwgcnVuIGEgbW9yZSBsaWJlcmFsIGNoZWNrIHRoYXQgYWxsb3dzIGEgcG9pbnRcbiAgICAgICAgLy8gdG8gYmUgd2l0aGluIG1lc2hTaHJpbmtBbW91bnQgcmFkaXVzIG9mIGEgcG9seWdvblxuICAgICAgICBpZiAoIWVuZFBvbHkgJiYgdGhpcy5tZXNoU2hyaW5rQW1vdW50ID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBuYXZQb2x5IG9mIHRoaXMubmF2UG9seWdvbnMpIHtcbiAgICAgICAgICAgICAgICByID0gbmF2UG9seS5ib3VuZGluZ1JhZGl1cyArIHRoaXMubWVzaFNocmlua0Ftb3VudDtcbiAgICAgICAgICAgICAgICBkID0gbmF2UG9seS5jZW50cm9pZC5kaXN0YW5jZShlbmRWZWN0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChkIDw9IHIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkaXN0YW5jZSB9ID0gdGhpcy5wcm9qZWN0UG9pbnRUb1BvbHlnb24oZW5kVmVjdG9yLCBuYXZQb2x5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDw9IHRoaXMubWVzaFNocmlua0Ftb3VudCAmJiBkaXN0YW5jZSA8IGVuZERpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRQb2x5ID0gbmF2UG9seTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm8gbWF0Y2hpbmcgcG9seWdvbnMgbG9jYXRpb25zIGZvciB0aGUgZW5kLCBzbyBubyBwYXRoIGZvdW5kXG4gICAgICAgIC8vIGJlY2F1c2Ugc3RhcnQgcG9pbnQgaXMgdmFsaWQgbm9ybWFsbHksIGNoZWNrIGVuZCBwb2ludCBmaXJzdFxuICAgICAgICBpZiAoIWVuZFBvbHkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNhbWUgY2hlY2sgYXMgYWJvdmUsIGJ1dCBmb3IgdGhlIHN0YXJ0IHBvaW50XG4gICAgICAgIGlmICghc3RhcnRQb2x5ICYmIHRoaXMubWVzaFNocmlua0Ftb3VudCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmF2UG9seSBvZiB0aGlzLm5hdlBvbHlnb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgcG9pbnQgaXMgd2l0aGluIGJvdW5kaW5nIGNpcmNsZSB0byBhdm9pZCBleHRyYSBwcm9qZWN0aW9uIGNhbGN1bGF0aW9uc1xuICAgICAgICAgICAgICAgIHIgPSBuYXZQb2x5LmJvdW5kaW5nUmFkaXVzICsgdGhpcy5tZXNoU2hyaW5rQW1vdW50O1xuICAgICAgICAgICAgICAgIGQgPSBuYXZQb2x5LmNlbnRyb2lkLmRpc3RhbmNlKHN0YXJ0VmVjdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoZCA8PSByKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHByb2plY3RlZCBwb2ludCBpcyB3aXRoaW4gcmFuZ2Ugb2YgYSBwb2xneW9uIGFuZCBpcyBjbG9zZXIgdGhhbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJldmlvdXMgcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkaXN0YW5jZSB9ID0gdGhpcy5wcm9qZWN0UG9pbnRUb1BvbHlnb24oc3RhcnRWZWN0b3IsIG5hdlBvbHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPD0gdGhpcy5tZXNoU2hyaW5rQW1vdW50ICYmIGRpc3RhbmNlIDwgc3RhcnREaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRQb2x5ID0gbmF2UG9seTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBObyBtYXRjaGluZyBwb2x5Z29ucyBsb2NhdGlvbnMgZm9yIHRoZSBzdGFydCwgc28gbm8gcGF0aCBmb3VuZFxuICAgICAgICBpZiAoIXN0YXJ0UG9seSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHN0YXJ0IGFuZCBlbmQgcG9seWdvbnMgYXJlIHRoZSBzYW1lLCByZXR1cm4gYSBkaXJlY3QgcGF0aFxuICAgICAgICBpZiAoc3RhcnRQb2x5ID09PSBlbmRQb2x5KSB7XG4gICAgICAgICAgICByZXR1cm4gW3N0YXJ0VmVjdG9yLCBlbmRWZWN0b3JdO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNlYXJjaCFcbiAgICAgICAgY29uc3QgYXN0YXJQYXRoID0gYXN0YXIuc2VhcmNoKHRoaXMuZ3JhcGgsIHN0YXJ0UG9seSwgZW5kUG9seSwge1xuICAgICAgICAgICAgaGV1cmlzdGljOiB0aGlzLmdyYXBoLm5hdkhldXJpc3RpYyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFdoaWxlIHRoZSBzdGFydCBhbmQgZW5kIHBvbHlnb25zIG1heSBiZSB2YWxpZCwgbm8gcGF0aCBiZXR3ZWVuIHRoZW1cbiAgICAgICAgaWYgKGFzdGFyUGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIGpzYXN0YXIgZHJvcHMgdGhlIGZpcnN0IHBvaW50IGZyb20gdGhlIHBhdGgsIGJ1dCB0aGUgZnVubmVsIGFsZ29yaXRobSBuZWVkcyBpdFxuICAgICAgICBhc3RhclBhdGgudW5zaGlmdChzdGFydFBvbHkpO1xuICAgICAgICAvLyBXZSBoYXZlIGEgcGF0aCwgc28gbm93IHRpbWUgZm9yIHRoZSBmdW5uZWwgYWxnb3JpdGhtXG4gICAgICAgIGNvbnN0IGNoYW5uZWwgPSBuZXcgQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnB1c2goc3RhcnRWZWN0b3IpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzdGFyUGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5hdlBvbHlnb24gPSBhc3RhclBhdGhbaV07XG4gICAgICAgICAgICBjb25zdCBuZXh0TmF2UG9seWdvbiA9IGFzdGFyUGF0aFtpICsgMV07XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBwb3J0YWxcbiAgICAgICAgICAgIGxldCBwb3J0YWwgPSBudWxsO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuYXZQb2x5Z29uLm5laWdoYm9ycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChuYXZQb2x5Z29uLm5laWdoYm9yc1tqXS5pZCA9PT0gbmV4dE5hdlBvbHlnb24uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9ydGFsID0gbmF2UG9seWdvbi5wb3J0YWxzW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcG9ydGFsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXRoIHdhcyBzdXBwb3NlZCB0byBiZSBmb3VuZCwgYnV0IHBvcnRhbCBpcyBtaXNzaW5nIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHVzaCB0aGUgcG9ydGFsIHZlcnRpY2VzIGludG8gdGhlIGNoYW5uZWxcbiAgICAgICAgICAgIGNoYW5uZWwucHVzaChwb3J0YWwuc3RhcnQsIHBvcnRhbC5lbmQpO1xuICAgICAgICB9XG4gICAgICAgIGNoYW5uZWwucHVzaChlbmRWZWN0b3IpO1xuICAgICAgICAvLyBQdWxsIGEgc3RyaW5nIGFsb25nIHRoZSBjaGFubmVsIHRvIHJ1biB0aGUgZnVubmVsXG4gICAgICAgIGNoYW5uZWwuc3RyaW5nUHVsbCgpO1xuICAgICAgICAvLyBDbG9uZSBwYXRoLCBleGNsdWRpbmcgZHVwbGljYXRlc1xuICAgICAgICBsZXQgbGFzdFBvaW50ID0gbnVsbDtcbiAgICAgICAgY29uc3QgcGhhc2VyUGF0aCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgY2hhbm5lbC5wYXRoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQb2ludCA9IHAuY2xvbmUoKTtcbiAgICAgICAgICAgIGlmICghbGFzdFBvaW50IHx8ICFuZXdQb2ludC5lcXVhbHMobGFzdFBvaW50KSkge1xuICAgICAgICAgICAgICAgIHBoYXNlclBhdGgucHVzaChuZXdQb2ludCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0UG9pbnQgPSBuZXdQb2ludDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGhhc2VyUGF0aDtcbiAgICB9XG4gICAgY2FsY3VsYXRlTmVpZ2hib3JzKCkge1xuICAgICAgICAvLyBGaWxsIG91dCB0aGUgbmVpZ2hib3IgaW5mb3JtYXRpb24gZm9yIGVhY2ggbmF2cG9seVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmF2UG9seWdvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5hdlBvbHkgPSB0aGlzLm5hdlBvbHlnb25zW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5uYXZQb2x5Z29ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG90aGVyTmF2UG9seSA9IHRoaXMubmF2UG9seWdvbnNbal07XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG90aGVyIG5hdnBvbHkgaXMgd2l0aGluIHJhbmdlIHRvIHRvdWNoXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IG5hdlBvbHkuY2VudHJvaWQuZGlzdGFuY2Uob3RoZXJOYXZQb2x5LmNlbnRyb2lkKTtcbiAgICAgICAgICAgICAgICBpZiAoZCA+IG5hdlBvbHkuYm91bmRpbmdSYWRpdXMgKyBvdGhlck5hdlBvbHkuYm91bmRpbmdSYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRoZSBhcmUgaW4gcmFuZ2UsIHNvIGNoZWNrIGVhY2ggZWRnZSBwYWlyaW5nXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlZGdlIG9mIG5hdlBvbHkuZWRnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvdGhlckVkZ2Ugb2Ygb3RoZXJOYXZQb2x5LmVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBlZGdlcyBhcmVuJ3QgY29sbGluZWFyLCBub3QgYW4gb3B0aW9uIGZvciBjb25uZWN0aW5nIG5hdnBvbHlzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFyZUNvbGxpbmVhcihlZGdlLCBvdGhlckVkZ2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGV5IGFyZSBjb2xsaW5lYXIsIGNoZWNrIGlmIHRoZXkgb3ZlcmxhcFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxhcCA9IHRoaXMuZ2V0U2VnbWVudE92ZXJsYXAoZWRnZSwgb3RoZXJFZGdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3ZlcmxhcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29ubmVjdGlvbnMgYXJlIHN5bW1ldHJpYyFcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdlBvbHkubmVpZ2hib3JzLnB1c2gob3RoZXJOYXZQb2x5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTmF2UG9seS5uZWlnaGJvcnMucHVzaChuYXZQb2x5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcG9ydGFsIGJldHdlZW4gdGhlIHR3byBwb2x5Z29ucyAtIHRoaXMgbmVlZHMgdG8gYmUgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvdW50ZXItY2xvY2t3aXNlIG9yZGVyLCByZWxhdGl2ZSB0byBlYWNoIHBvbHlnb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFtwMSwgcDJdID0gb3ZlcmxhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlZGdlU3RhcnRBbmdsZSA9IG5hdlBvbHkuY2VudHJvaWQuYW5nbGUoZWRnZS5zdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYTEgPSBuYXZQb2x5LmNlbnRyb2lkLmFuZ2xlKG92ZXJsYXBbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGEyID0gbmF2UG9seS5jZW50cm9pZC5hbmdsZShvdmVybGFwWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkMSA9IGFuZ2xlRGlmZmVyZW5jZShlZGdlU3RhcnRBbmdsZSwgYTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGQyID0gYW5nbGVEaWZmZXJlbmNlKGVkZ2VTdGFydEFuZ2xlLCBhMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZDEgPCBkMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdlBvbHkucG9ydGFscy5wdXNoKG5ldyBMaW5lKHAxLngsIHAxLnksIHAyLngsIHAyLnkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdlBvbHkucG9ydGFscy5wdXNoKG5ldyBMaW5lKHAyLngsIHAyLnksIHAxLngsIHAxLnkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VTdGFydEFuZ2xlID0gb3RoZXJOYXZQb2x5LmNlbnRyb2lkLmFuZ2xlKG90aGVyRWRnZS5zdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhMSA9IG90aGVyTmF2UG9seS5jZW50cm9pZC5hbmdsZShvdmVybGFwWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEyID0gb3RoZXJOYXZQb2x5LmNlbnRyb2lkLmFuZ2xlKG92ZXJsYXBbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZDEgPSBhbmdsZURpZmZlcmVuY2UoZWRnZVN0YXJ0QW5nbGUsIGExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQyID0gYW5nbGVEaWZmZXJlbmNlKGVkZ2VTdGFydEFuZ2xlLCBhMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZDEgPCBkMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTmF2UG9seS5wb3J0YWxzLnB1c2gobmV3IExpbmUocDEueCwgcDEueSwgcDIueCwgcDIueSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJOYXZQb2x5LnBvcnRhbHMucHVzaChuZXcgTGluZShwMi54LCBwMi55LCBwMS54LCBwMS55KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUd28gY29udmV4IHBvbHlnb25zIHNob3VsZG4ndCBiZSBjb25uZWN0ZWQgbW9yZSB0aGFuIG9uY2UhIChVbmxlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZXJlIGFyZSB1bm5lY2Vzc2FyeSB2ZXJ0aWNlcy4uLilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBDaGVjayB0d28gY29sbGluZWFyIGxpbmUgc2VnbWVudHMgdG8gc2VlIGlmIHRoZXkgb3ZlcmxhcCBieSBzb3J0aW5nIHRoZSBwb2ludHMuXG4gICAgLy8gQWxnb3JpdGhtIHNvdXJjZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTcxNTIyNDdcbiAgICBnZXRTZWdtZW50T3ZlcmxhcChsaW5lMSwgbGluZTIpIHtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gW1xuICAgICAgICAgICAgeyBsaW5lOiBsaW5lMSwgcG9pbnQ6IGxpbmUxLnN0YXJ0IH0sXG4gICAgICAgICAgICB7IGxpbmU6IGxpbmUxLCBwb2ludDogbGluZTEuZW5kIH0sXG4gICAgICAgICAgICB7IGxpbmU6IGxpbmUyLCBwb2ludDogbGluZTIuc3RhcnQgfSxcbiAgICAgICAgICAgIHsgbGluZTogbGluZTIsIHBvaW50OiBsaW5lMi5lbmQgfSxcbiAgICAgICAgXTtcbiAgICAgICAgcG9pbnRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLnBvaW50LnggPCBiLnBvaW50LngpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhLnBvaW50LnggPiBiLnBvaW50LngpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhLnBvaW50LnkgPCBiLnBvaW50LnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhLnBvaW50LnkgPiBiLnBvaW50LnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBJZiB0aGUgZmlyc3QgdHdvIHBvaW50cyBpbiB0aGUgYXJyYXkgY29tZSBmcm9tIHRoZSBzYW1lIGxpbmUsIG5vIG92ZXJsYXBcbiAgICAgICAgY29uc3Qgbm9PdmVybGFwID0gcG9pbnRzWzBdLmxpbmUgPT09IHBvaW50c1sxXS5saW5lO1xuICAgICAgICAvLyBJZiB0aGUgdHdvIG1pZGRsZSBwb2ludHMgaW4gdGhlIGFycmF5IGFyZSB0aGUgc2FtZSBjb29yZGluYXRlcywgdGhlbiB0aGVyZSBpcyBhXG4gICAgICAgIC8vIHNpbmdsZSBwb2ludCBvZiBvdmVybGFwLlxuICAgICAgICBjb25zdCBzaW5nbGVQb2ludE92ZXJsYXAgPSBwb2ludHNbMV0ucG9pbnQuZXF1YWxzKHBvaW50c1syXS5wb2ludCk7XG4gICAgICAgIGlmIChub092ZXJsYXAgfHwgc2luZ2xlUG9pbnRPdmVybGFwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbcG9pbnRzWzFdLnBvaW50LCBwb2ludHNbMl0ucG9pbnRdO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByb2plY3QgYSBwb2ludCBvbnRvIGEgcG9seWdvbiBpbiB0aGUgc2hvcnRlc3QgZGlzdGFuY2UgcG9zc2libGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BoYXNlci5Qb2ludH0gcG9pbnQgVGhlIHBvaW50IHRvIHByb2plY3RcbiAgICAgKiBAcGFyYW0ge05hdlBvbHl9IG5hdlBvbHkgVGhlIG5hdmlnYXRpb24gcG9seWdvbiB0byB0ZXN0IGFnYWluc3RcbiAgICAgKiBAcmV0dXJucyB7e3BvaW50OiBQaGFzZXIuUG9pbnQsIGRpc3RhbmNlOiBudW1iZXJ9fVxuICAgICAqL1xuICAgIHByb2plY3RQb2ludFRvUG9seWdvbihwb2ludCwgbmF2UG9seSkge1xuICAgICAgICBsZXQgY2xvc2VzdFByb2plY3Rpb24gPSBudWxsO1xuICAgICAgICBsZXQgY2xvc2VzdERpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgZm9yIChjb25zdCBlZGdlIG9mIG5hdlBvbHkuZWRnZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RlZFBvaW50ID0gcHJvamVjdFBvaW50VG9FZGdlKHBvaW50LCBlZGdlKTtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBwb2ludC5kaXN0YW5jZShwcm9qZWN0ZWRQb2ludCk7XG4gICAgICAgICAgICBpZiAoY2xvc2VzdFByb2plY3Rpb24gPT09IG51bGwgfHwgZCA8IGNsb3Nlc3REaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0YW5jZSA9IGQ7XG4gICAgICAgICAgICAgICAgY2xvc2VzdFByb2plY3Rpb24gPSBwcm9qZWN0ZWRQb2ludDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwb2ludDogY2xvc2VzdFByb2plY3Rpb24sIGRpc3RhbmNlOiBjbG9zZXN0RGlzdGFuY2UgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVmVjdG9yMiBmcm9tIFwiLi9tYXRoL3ZlY3Rvci0yXCI7XG4vKipcbiAqIEEgY2xhc3MgdGhhdCByZXByZXNlbnRzIGEgbmF2aWdhYmxlIHBvbHlnb24gd2l0aCBhIG5hdm1lc2guIEl0IGlzIGJ1aWx0IG9uIHRvcCBvZiBhXG4gKiB7QGxpbmsgUG9seWdvbn0uIEl0IGltcGxlbWVudHMgdGhlIHByb3BlcnRpZXMgYW5kIGZpZWxkcyB0aGF0IGphdmFzY3JpcHQtYXN0YXIgbmVlZHMgLSB3ZWlnaHQsXG4gKiB0b1N0cmluZywgaXNXYWxsIGFuZCBnZXRDb3N0LiBTZWUgR1BTIHRlc3QgZnJvbSBhc3RhciByZXBvIGZvciBzdHJ1Y3R1cmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmdyaW5zL2phdmFzY3JpcHQtYXN0YXIvYmxvYi9tYXN0ZXIvdGVzdC90ZXN0cy5qc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZQb2x5IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE5hdlBvbHkuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWQsIHBvbHlnb24pIHtcbiAgICAgICAgLy8ganNhc3RhciBwcm9wZXJ0eTpcbiAgICAgICAgdGhpcy53ZWlnaHQgPSAxO1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucG9seWdvbiA9IHBvbHlnb247XG4gICAgICAgIHRoaXMuZWRnZXMgPSBwb2x5Z29uLmVkZ2VzO1xuICAgICAgICB0aGlzLm5laWdoYm9ycyA9IFtdO1xuICAgICAgICB0aGlzLnBvcnRhbHMgPSBbXTtcbiAgICAgICAgdGhpcy5jZW50cm9pZCA9IHRoaXMuY2FsY3VsYXRlQ2VudHJvaWQoKTtcbiAgICAgICAgdGhpcy5ib3VuZGluZ1JhZGl1cyA9IHRoaXMuY2FsY3VsYXRlUmFkaXVzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgcG9pbnRzIHRoYXQgZm9ybSB0aGUgcG9seWdvbi5cbiAgICAgKi9cbiAgICBnZXRQb2ludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlnb24ucG9pbnRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gcG9pbnQtbGlrZSBvYmplY3QgaXMgd2l0aGluIHRoZSBwb2x5Z29uLlxuICAgICAqL1xuICAgIGNvbnRhaW5zKHBvaW50KSB7XG4gICAgICAgIC8vIFBoYXNlcidzIHBvbHlnb24gY2hlY2sgZG9lc24ndCBoYW5kbGUgd2hlbiBhIHBvaW50IGlzIG9uIG9uZSBvZiB0aGUgZWRnZXMgb2YgdGhlIGxpbmUuIE5vdGU6XG4gICAgICAgIC8vIGNoZWNrIG51bWVyaWNhbCBzdGFiaWxpdHkgaGVyZS4gSXQgd291bGQgYWxzbyBiZSBnb29kIHRvIG9wdGltaXplIHRoaXMgZm9yIGRpZmZlcmVudCBzaGFwZXMuXG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlnb24uY29udGFpbnMocG9pbnQueCwgcG9pbnQueSkgfHwgdGhpcy5pc1BvaW50T25FZGdlKHBvaW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT25seSByZWN0YW5nbGVzIGFyZSBzdXBwb3J0ZWQsIHNvIHRoaXMgY2FsY3VsYXRpb24gd29ya3MsIGJ1dCB0aGlzIGlzIG5vdCBhY3R1YWxseSB0aGUgY2VudHJvaWRcbiAgICAgKiBjYWxjdWxhdGlvbiBmb3IgYSBwb2x5Z29uLiBUaGlzIGlzIGp1c3QgdGhlIGF2ZXJhZ2Ugb2YgdGhlIHZlcnRpY2VzIC0gcHJvcGVyIGNlbnRyb2lkIG9mIGFcbiAgICAgKiBwb2x5Z29uIGZhY3RvcnMgaW4gdGhlIGFyZWEuXG4gICAgICovXG4gICAgY2FsY3VsYXRlQ2VudHJvaWQoKSB7XG4gICAgICAgIGNvbnN0IGNlbnRyb2lkID0gbmV3IFZlY3RvcjIoMCwgMCk7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMucG9seWdvbi5wb2ludHMubGVuZ3RoO1xuICAgICAgICB0aGlzLnBvbHlnb24ucG9pbnRzLmZvckVhY2goKHApID0+IGNlbnRyb2lkLmFkZChwKSk7XG4gICAgICAgIGNlbnRyb2lkLnggLz0gbGVuZ3RoO1xuICAgICAgICBjZW50cm9pZC55IC89IGxlbmd0aDtcbiAgICAgICAgcmV0dXJuIGNlbnRyb2lkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIHJhZGl1cyBvZiBhIGNpcmNsZSB0aGF0IGNpcmN1bXNjcmliZXMgdGhlIHBvbHlnb24uXG4gICAgICovXG4gICAgY2FsY3VsYXRlUmFkaXVzKCkge1xuICAgICAgICBsZXQgYm91bmRpbmdSYWRpdXMgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMucG9seWdvbi5wb2ludHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLmNlbnRyb2lkLmRpc3RhbmNlKHBvaW50KTtcbiAgICAgICAgICAgIGlmIChkID4gYm91bmRpbmdSYWRpdXMpXG4gICAgICAgICAgICAgICAgYm91bmRpbmdSYWRpdXMgPSBkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3VuZGluZ1JhZGl1cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHBvaW50LWxpa2Ugb2JqZWN0IGlzIG9uIG9uZSBvZiB0aGUgZWRnZXMgb2YgdGhlIHBvbHlnb24uXG4gICAgICovXG4gICAgaXNQb2ludE9uRWRnZSh7IHgsIHkgfSkge1xuICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgdGhpcy5lZGdlcykge1xuICAgICAgICAgICAgaWYgKGVkZ2UucG9pbnRPblNlZ21lbnQoeCwgeSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLm5laWdoYm9ycyA9IFtdO1xuICAgICAgICB0aGlzLnBvcnRhbHMgPSBbXTtcbiAgICB9XG4gICAgLy8gPT09IGpzYXN0YXIgbWV0aG9kcyA9PT1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBOYXZQb2x5KGlkOiAke3RoaXMuaWR9IGF0OiAke3RoaXMuY2VudHJvaWR9KWA7XG4gICAgfVxuICAgIGlzV2FsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2VpZ2h0ID09PSAwO1xuICAgIH1cbiAgICBjZW50cm9pZERpc3RhbmNlKG5hdlBvbHlnb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VudHJvaWQuZGlzdGFuY2UobmF2UG9seWdvbi5jZW50cm9pZCk7XG4gICAgfVxuICAgIGdldENvc3QobmF2UG9seWdvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5jZW50cm9pZERpc3RhbmNlKG5hdlBvbHlnb24pO1xuICAgIH1cbn1cbiIsImltcG9ydCBWZWN0b3IyIGZyb20gXCIuL21hdGgvdmVjdG9yLTJcIjtcbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBzcXVhcmVkIGJldHdlZW4gdHdvIHBvaW50cy4gVGhpcyBpcyBhbiBvcHRpbWl6YXRpb24gdG8gYSBzcXVhcmUgcm9vdCB3aGVuXG4gKiB5b3UganVzdCBuZWVkIHRvIGNvbXBhcmUgcmVsYXRpdmUgZGlzdGFuY2VzIHdpdGhvdXQgbmVlZGluZyB0byBrbm93IHRoZSBzcGVjaWZpYyBkaXN0YW5jZS5cbiAqIEBwYXJhbSBhXG4gKiBAcGFyYW0gYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2VTcXVhcmVkKGEsIGIpIHtcbiAgICBjb25zdCBkeCA9IGIueCAtIGEueDtcbiAgICBjb25zdCBkeSA9IGIueSAtIGEueTtcbiAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG59XG4vKipcbiAqIFByb2plY3QgYSBwb2ludCBvbnRvIGEgbGluZSBzZWdtZW50LlxuICogSlMgU291cmNlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzg0OTIxMS9zaG9ydGVzdC1kaXN0YW5jZS1iZXR3ZWVuLWEtcG9pbnQtYW5kLWEtbGluZS1zZWdtZW50XG4gKiBAcGFyYW0gcG9pbnRcbiAqIEBwYXJhbSBsaW5lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0UG9pbnRUb0VkZ2UocG9pbnQsIGxpbmUpIHtcbiAgICBjb25zdCBhID0gbGluZS5zdGFydDtcbiAgICBjb25zdCBiID0gbGluZS5lbmQ7XG4gICAgLy8gQ29uc2lkZXIgdGhlIHBhcmFtZXRyaWMgZXF1YXRpb24gZm9yIHRoZSBlZGdlJ3MgbGluZSwgcCA9IGEgKyB0IChiIC0gYSkuIFdlIHdhbnQgdG8gZmluZFxuICAgIC8vIHdoZXJlIG91ciBwb2ludCBsaWVzIG9uIHRoZSBsaW5lIGJ5IHNvbHZpbmcgZm9yIHQ6XG4gICAgLy8gIHQgPSBbKHAtYSkgLiAoYi1hKV0gLyB8Yi1hfF4yXG4gICAgY29uc3QgbDIgPSBkaXN0YW5jZVNxdWFyZWQoYSwgYik7XG4gICAgbGV0IHQgPSAoKHBvaW50LnggLSBhLngpICogKGIueCAtIGEueCkgKyAocG9pbnQueSAtIGEueSkgKiAoYi55IC0gYS55KSkgLyBsMjtcbiAgICAvLyBXZSBjbGFtcCB0IGZyb20gWzAsMV0gdG8gaGFuZGxlIHBvaW50cyBvdXRzaWRlIHRoZSBzZWdtZW50IHZ3LlxuICAgIHQgPSBjbGFtcCh0LCAwLCAxKTtcbiAgICAvLyBQcm9qZWN0IG9udG8gdGhlIHNlZ21lbnRcbiAgICBjb25zdCBwID0gbmV3IFZlY3RvcjIoYS54ICsgdCAqIChiLnggLSBhLngpLCBhLnkgKyB0ICogKGIueSAtIGEueSkpO1xuICAgIHJldHVybiBwO1xufVxuLyoqXG4gKiBUd2ljZSB0aGUgYXJlYSBvZiB0aGUgdHJpYW5nbGUgZm9ybWVkIGJ5IGEsIGIgYW5kIGMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmlhcmVhMihhLCBiLCBjKSB7XG4gICAgY29uc3QgYXggPSBiLnggLSBhLng7XG4gICAgY29uc3QgYXkgPSBiLnkgLSBhLnk7XG4gICAgY29uc3QgYnggPSBjLnggLSBhLng7XG4gICAgY29uc3QgYnkgPSBjLnkgLSBhLnk7XG4gICAgcmV0dXJuIGJ4ICogYXkgLSBheCAqIGJ5O1xufVxuLyoqXG4gKiBDbGFtcCB0aGUgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuICAgIGlmICh2YWx1ZSA8IG1pbilcbiAgICAgICAgdmFsdWUgPSBtaW47XG4gICAgaWYgKHZhbHVlID4gbWF4KVxuICAgICAgICB2YWx1ZSA9IG1heDtcbiAgICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIENoZWNrIGlmIHR3byB2YWx1ZXMgYXJlIHdpdGhpbiBhIHNtYWxsIG1hcmdpbiBvZiBvbmUgYW5vdGhlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFsbW9zdEVxdWFsKHZhbHVlMSwgdmFsdWUyLCBlcnJvck1hcmdpbiA9IDAuMDAwMSkge1xuICAgIGlmIChNYXRoLmFicyh2YWx1ZTEgLSB2YWx1ZTIpIDw9IGVycm9yTWFyZ2luKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogRmluZCB0aGUgc21hbGxlc3QgYW5nbGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBhbmdsZXNcbiAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0Fhcm9uZHVpbm8vNDA2OGIwNThmOGRiYzM0YjRkM2E5ZWVkYzhiMmNiZTBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFuZ2xlRGlmZmVyZW5jZSh4LCB5KSB7XG4gICAgbGV0IGEgPSB4IC0geTtcbiAgICBjb25zdCBpID0gYSArIE1hdGguUEk7XG4gICAgY29uc3QgaiA9IE1hdGguUEkgKiAyO1xuICAgIGEgPSBpIC0gTWF0aC5mbG9vcihpIC8gaikgKiBqOyAvLyAoYSsxODApICUgMzYwOyB0aGlzIGVuc3VyZXMgdGhlIGNvcnJlY3Qgc2lnblxuICAgIGEgLT0gTWF0aC5QSTtcbiAgICByZXR1cm4gYTtcbn1cbi8qKlxuICogQ2hlY2sgaWYgdHdvIGxpbmVzIGFyZSBjb2xsaW5lYXIgKHdpdGhpbiBhIHNtYWxsIGVycm9yIG1hcmdpbikuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmVDb2xsaW5lYXIobGluZTEsIGxpbmUyLCBlcnJvck1hcmdpbiA9IDAuMDAwMSkge1xuICAgIC8vIEZpZ3VyZSBvdXQgaWYgdGhlIHR3byBsaW5lcyBhcmUgZXF1YWwgYnkgbG9va2luZyBhdCB0aGUgYXJlYSBvZiB0aGUgdHJpYW5nbGUgZm9ybWVkXG4gICAgLy8gYnkgdGhlaXIgcG9pbnRzXG4gICAgY29uc3QgYXJlYTEgPSB0cmlhcmVhMihsaW5lMS5zdGFydCwgbGluZTEuZW5kLCBsaW5lMi5zdGFydCk7XG4gICAgY29uc3QgYXJlYTIgPSB0cmlhcmVhMihsaW5lMS5zdGFydCwgbGluZTEuZW5kLCBsaW5lMi5lbmQpO1xuICAgIGlmIChhbG1vc3RFcXVhbChhcmVhMSwgMCwgZXJyb3JNYXJnaW4pICYmIGFsbW9zdEVxdWFsKGFyZWEyLCAwLCBlcnJvck1hcmdpbikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJ1dGh5KGlucHV0KSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oaW5wdXQpO1xufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQgUGhhc2VyTmF2TWVzaCBmcm9tIFwiLi9waGFzZXItbmF2bWVzaFwiO1xuLyoqXG4gKiBUaGlzIGNsYXNzIGNhbiBjcmVhdGUgbmF2aWdhdGlvbiBtZXNoZXMgZm9yIHVzZSBpbiBQaGFzZXIgMy4gVGhlIG5hdm1lc2hlcyBjYW4gYmUgY29uc3RydWN0ZWRcbiAqIGZyb20gY29udmV4IHBvbHlnb25zIGVtYmVkZGVkIGluIGEgVGlsZWQgbWFwLiBUaGUgY2xhc3MgdGhhdCBjb25mb3JtcyB0byBQaGFzZXIgMydzIHBsdWdpblxuICogc3RydWN0dXJlLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBQaGFzZXJOYXZNZXNoUGx1Z2luXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoYXNlck5hdk1lc2hQbHVnaW4gZXh0ZW5kcyBQaGFzZXIuUGx1Z2lucy5TY2VuZVBsdWdpbiB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmUsIHBsdWdpbk1hbmFnZXIsIHBsdWdpbktleSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgcGx1Z2luTWFuYWdlciwgcGx1Z2luS2V5KTtcbiAgICAgICAgdGhpcy5waGFzZXJOYXZNZXNoZXMgPSB7fTtcbiAgICB9XG4gICAgLyoqIFBoYXNlci5TY2VuZSBsaWZlY3ljbGUgZXZlbnQgKi9cbiAgICBib290KCkge1xuICAgICAgICBjb25zdCBlbWl0dGVyID0gdGhpcy5zeXN0ZW1zLmV2ZW50cztcbiAgICAgICAgZW1pdHRlci5vbmNlKFwiZGVzdHJveVwiLCB0aGlzLmRlc3Ryb3ksIHRoaXMpO1xuICAgIH1cbiAgICAvKiogUGhhc2VyLlNjZW5lIGxpZmVjeWNsZSBldmVudCAtIG5vb3AgaW4gdGhpcyBwbHVnaW4sIGJ1dCBzdGlsbCByZXF1aXJlZC4gKi9cbiAgICBpbml0KCkgeyB9XG4gICAgLyoqIFBoYXNlci5TY2VuZSBsaWZlY3ljbGUgZXZlbnQgLSBub29wIGluIHRoaXMgcGx1Z2luLCBidXQgc3RpbGwgcmVxdWlyZWQuKi9cbiAgICBzdGFydCgpIHsgfVxuICAgIC8qKiBQaGFzZXIuU2NlbmUgbGlmZWN5Y2xlIGV2ZW50IC0gd2lsbCBkZXN0cm95IGFsbCBuYXZtZXNoZXMgY3JlYXRlZC4gKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN5c3RlbXMuZXZlbnRzLm9mZihcImJvb3RcIiwgdGhpcy5ib290LCB0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxNZXNoZXMoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCB0aGUgbWVzaGVzIGZyb20gdGhlIG5hdm1lc2guXG4gICAgICovXG4gICAgcmVtb3ZlQWxsTWVzaGVzKCkge1xuICAgICAgICBjb25zdCBtZXNoZXMgPSBPYmplY3QudmFsdWVzKHRoaXMucGhhc2VyTmF2TWVzaGVzKTtcbiAgICAgICAgdGhpcy5waGFzZXJOYXZNZXNoZXMgPSB7fTtcbiAgICAgICAgbWVzaGVzLmZvckVhY2goKG0pID0+IG0uZGVzdHJveSgpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSBuYXZtZXNoIHN0b3JlZCB1bmRlciB0aGUgZ2l2ZW4ga2V5IGZyb20gdGhlIHBsdWdpbi4gVGhpcyBkb2VzIG5vdCBkZXN0cm95IHRoZVxuICAgICAqIG5hdm1lc2guXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqL1xuICAgIHJlbW92ZU1lc2goa2V5KSB7XG4gICAgICAgIGlmICh0aGlzLnBoYXNlck5hdk1lc2hlc1trZXldKVxuICAgICAgICAgICAgZGVsZXRlIHRoaXMucGhhc2VyTmF2TWVzaGVzW2tleV07XG4gICAgfVxuICAgIGJ1aWxkTWVzaGZyb21Qb2x5Z29ucyhrZXksIHBvbHlnb25zLCBzaHJpbmtBbW91bnQgPSAwKSB7XG4gICAgICAgIC8vIE9mZnNldCBhbmQgc2NhbGUgZWFjaCBwb2x5Z29uIGlmIG5lY2Vzc2FyeS5cbiAgICAgICAgLy8gaWYgKHNjYWxlWCAhPT0gMSAmJiBzY2FsZVkgIT09IDEgJiYgb2Zmc2V0WCAhPT0gMCAmJiBvZmZzZXRZICE9PSAwKSB7XG4gICAgICAgIC8vICAgcG9seWdvbnMgPSBwb2x5Z29ucy5tYXAoKHBvbHkpID0+XG4gICAgICAgIC8vICAgICBwb2x5Lm1hcCgocCkgPT4gKHsgeDogcC54ICogc2NhbGVYICsgb2Zmc2V0WCwgeTogcC55ICogc2NhbGVZICsgb2Zmc2V0WSB9KSlcbiAgICAgICAgLy8gICApO1xuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IG1lc2ggPSBuZXcgUGhhc2VyTmF2TWVzaCh0aGlzLCB0aGlzLnNjZW5lLCBrZXksIHBvbHlnb25zLCAwKTtcbiAgICAgICAgdGhpcy5waGFzZXJOYXZNZXNoZXNba2V5XSA9IG1lc2g7XG4gICAgICAgIHJldHVybiBtZXNoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2FkIGEgbmF2bWVzaCBmcm9tIFRpbGVkLiBDdXJyZW50bHkgYXNzdW1lcyB0aGF0IHRoZSBwb2x5Z29ucyBhcmUgc3F1YXJlcyEgRG9lcyBub3Qgc3VwcG9ydFxuICAgICAqIHRpbGVtYXAgbGF5ZXIgc2NhbGluZywgcm90YXRpb24gb3IgcG9zaXRpb24uXG4gICAgICogQHBhcmFtIGtleSBLZXkgdG8gdXNlIHdoZW4gc3RvcmluZyB0aGlzIG5hdm1lc2ggd2l0aGluIHRoZSBwbHVnaW4uXG4gICAgICogQHBhcmFtIG9iamVjdExheWVyIFRoZSBPYmplY3RMYXllciBmcm9tIGEgdGlsZW1hcCB0aGF0IGNvbnRhaW5zIHRoZSBwb2x5Z29ucyB0aGF0IG1ha2UgdXAgdGhlXG4gICAgICogbmF2bWVzaC5cbiAgICAgKiBAcGFyYW0gbWVzaFNocmlua0Ftb3VudCBUaGUgYW1vdW50IChpbiBwaXhlbHMpIHRoYXQgdGhlIG5hdm1lc2ggaGFzIGJlZW4gc2hydW5rIGFyb3VuZFxuICAgICAqIG9ic3RhY2xlcyAoYS5rLmEgdGhlIGFtb3VudCBvYnN0YWNsZXMgaGF2ZSBiZWVuIGV4cGFuZGVkKVxuICAgICAqL1xuICAgIGJ1aWxkTWVzaEZyb21UaWxlZChrZXksIG9iamVjdExheWVyLCBtZXNoU2hyaW5rQW1vdW50ID0gMCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aGlzLnBoYXNlck5hdk1lc2hlc1trZXldKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYE5hdk1lc2hQbHVnaW46IGEgbmF2bWVzaCBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoZSBnaXZlbiBrZXk6ICR7a2V5fWApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGhhc2VyTmF2TWVzaGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvYmplY3RMYXllciB8fCBvYmplY3RMYXllci5vYmplY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBOYXZNZXNoUGx1Z2luOiBUaGUgZ2l2ZW4gdGlsZW1hcCBvYmplY3QgbGF5ZXIgaXMgZW1wdHkgb3IgdW5kZWZpbmVkOiAke29iamVjdExheWVyfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9iamVjdHMgPSAoX2EgPSBvYmplY3RMYXllci5vYmplY3RzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXTtcbiAgICAgICAgLy8gTG9vcCBvdmVyIHRoZSBvYmplY3RzIGFuZCBjb25zdHJ1Y3QgYSBwb2x5Z29uIC0gYXNzdW1lcyBhIHJlY3RhbmdsZSBmb3Igbm93IVxuICAgICAgICAvLyBUT0RPOiBzdXBwb3J0IGxheWVyIHBvc2l0aW9uLCBzY2FsZSwgcm90YXRpb25cbiAgICAgICAgY29uc3QgcG9seWdvbnMgPSBvYmplY3RzLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICBjb25zdCBoID0gKF9hID0gb2JqLmhlaWdodCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMDtcbiAgICAgICAgICAgIGNvbnN0IHcgPSAoX2IgPSBvYmoud2lkdGgpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IDA7XG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gKF9jID0gb2JqLngpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IDA7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSAoX2QgPSBvYmoueSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogMDtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIGg7XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IGxlZnQgKyB3O1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICB7IHg6IGxlZnQsIHk6IHRvcCB9LFxuICAgICAgICAgICAgICAgIHsgeDogbGVmdCwgeTogYm90dG9tIH0sXG4gICAgICAgICAgICAgICAgeyB4OiByaWdodCwgeTogYm90dG9tIH0sXG4gICAgICAgICAgICAgICAgeyB4OiByaWdodCwgeTogdG9wIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbWVzaCA9IG5ldyBQaGFzZXJOYXZNZXNoKHRoaXMsIHRoaXMuc2NlbmUsIGtleSwgcG9seWdvbnMsIG1lc2hTaHJpbmtBbW91bnQpO1xuICAgICAgICB0aGlzLnBoYXNlck5hdk1lc2hlc1trZXldID0gbWVzaDtcbiAgICAgICAgcmV0dXJuIG1lc2g7XG4gICAgfVxufVxuIiwiaW1wb3J0IE5hdk1lc2ggZnJvbSAnLi4vLi4vbmF2bWVzaC9zcmMvbmF2bWVzaCc7XG5pbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCB7QGxpbmsgTmF2TWVzaH0gZm9yIFBoYXNlciAzLiBDcmVhdGUgaW5zdGFuY2VzIG9mIHRoaXMgY2xhc3MgZnJvbVxuICoge0BsaW5rIFBoYXNlck5hdk1lc2hQbHVnaW59LiBUaGlzIGlzIHRoZSB3b3JraG9yc2UgdGhhdCByZXByZXNlbnRzIGEgbmF2aWdhdGlvbiBtZXNoIGJ1aWx0IGZyb20gYVxuICogc2VyaWVzIG9mIHBvbHlnb25zLiBPbmNlIGJ1aWx0LCB0aGUgbWVzaCBjYW4gYmUgYXNrZWQgZm9yIGEgcGF0aCBmcm9tIG9uZSBwb2ludCB0byBhbm90aGVyIHBvaW50LlxuICpcbiAqIENvbXBhcmVkIHRvIHtAbGluayBOYXZNZXNofSwgdGhpcyBhZGRzIHZpc3VhbCBkZWJ1Z2dpbmcgY2FwYWJpbGl0aWVzIGFuZCBjb252ZXJ0cyBwYXRocyB0b1xuICogUGhhc2VyLWNvbXBhdGlibGUgcG9pbnQgaW5zdGFuY2VzLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBQaGFzZXJOYXZNZXNoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoYXNlck5hdk1lc2gge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUGhhc2VyTmF2TWVzaC5cbiAgICAgKiBAcGFyYW0gcGx1Z2luIFRoZSBwbHVnaW4gdGhhdCBvd25zIHRoaXMgbWVzaC5cbiAgICAgKiBAcGFyYW0gc2NlbmVcbiAgICAgKiBAcGFyYW0ga2V5IFRoZSBrZXkgdGhlIG1lc2ggaXMgc3RvcmVkIHVuZGVyIHdpdGhpbiB0aGUgcGx1Z2luLlxuICAgICAqIEBwYXJhbSBtZXNoUG9seWdvblBvaW50cyBBcnJheSB3aGVyZSBlYWNoIGVsZW1lbnQgaXMgYW4gYXJyYXkgb2YgcG9pbnQtbGlrZSBvYmplY3RzIHRoYXRcbiAgICAgKiBkZWZpbmVzIGEgcG9seWdvbi5cbiAgICAgKiBAcGFyYW0gbWVzaFNocmlua0Ftb3VudCBUaGUgYW1vdW50IChpbiBwaXhlbHMpIHRoYXQgdGhlIG5hdm1lc2ggaGFzIGJlZW4gc2hydW5rIGFyb3VuZFxuICAgICAqIG9ic3RhY2xlcyAoYS5rLmEgdGhlIGFtb3VudCBvYnN0YWNsZXMgaGF2ZSBiZWVuIGV4cGFuZGVkKVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHBsdWdpbiwgc2NlbmUsIGtleSwgbWVzaFBvbHlnb25Qb2ludHMsIG1lc2hTaHJpbmtBbW91bnQgPSAwKSB7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgICAgICB0aGlzLmRlYnVnR3JhcGhpY3MgPSBudWxsO1xuICAgICAgICB0aGlzLm5hdk1lc2ggPSBuZXcgTmF2TWVzaChtZXNoUG9seWdvblBvaW50cywgbWVzaFNocmlua0Ftb3VudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbmQgaWYgdGhlIGdpdmVuIHBvaW50IGlzIHdpdGhpbiBhbnkgb2YgdGhlIHBvbHlnb25zIGluIHRoZSBtZXNoLlxuICAgICAqIEBwYXJhbSBwb2ludFxuICAgICAqL1xuICAgIGlzUG9pbnRJbk1lc2gocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmF2TWVzaC5pc1BvaW50SW5NZXNoKHBvaW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VlIHtAbGluayBOYXZNZXNoI2ZpbmRQYXRofS4gVGhpcyBpbXBsZW1lbnRzIHRoZSBzYW1lIGZ1bmN0aW9uYWxpdHksIGV4Y2VwdCB0aGF0IHRoZSByZXR1cm5lZFxuICAgICAqIHBhdGggaXMgY29udmVydGVkIHRvIFBoYXNlci1jb21wYXRpYmxlIHBvaW50cy5cbiAgICAgKiBAcGFyYW0gc3RhcnRQb2ludCBBIHBvaW50LWxpa2Ugb2JqZWN0XG4gICAgICogQHBhcmFtIGVuZFBvaW50IEEgcG9pbnQtbGlrZSBvYmplY3RcbiAgICAgKiBAcGFyYW0gUG9pbnRDbGFzcyBUaGUgY2xhc3MgdXNlZCB0byByZXByZXNlbnQgcG9pbnRzIGluIHRoZSBmaW5hbCBwYXRoXG4gICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgcG9pbnRzIGlmIGEgcGF0aCBpcyBmb3VuZCwgb3IgbnVsbCBpZiBubyBwYXRoXG4gICAgICovXG4gICAgZmluZFBhdGgoc3RhcnRQb2ludCwgZW5kUG9pbnQsIFBvaW50Q2xhc3MgPSBQaGFzZXIuR2VvbS5Qb2ludCkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5uYXZNZXNoLmZpbmRQYXRoKHN0YXJ0UG9pbnQsIGVuZFBvaW50KTtcbiAgICAgICAgcmV0dXJuIHBhdGggPyBwYXRoLm1hcCgoeyB4LCB5IH0pID0+IG5ldyBQb2ludENsYXNzKHgsIHkpKSA6IHBhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0aGUgZGVidWcgZHJhd2luZyBncmFwaGljcy4gSWYgbm8gZ3JhcGhpY3Mgb2JqZWN0IGlzIHByb3ZpZGVkLCBhIG5ldyBpbnN0YW5jZSB3aWxsIGJlXG4gICAgICogY3JlYXRlZC5cbiAgICAgKiBAcGFyYW0gZ3JhcGhpY3MgQW4gb3B0aW9uYWwgZ3JhcGhpY3Mgb2JqZWN0IGZvciB0aGUgbWVzaCB0byB1c2UgZm9yIGRlYnVnIGRyYXdpbmcuIE5vdGUsIHRoZVxuICAgICAqIG1lc2ggd2lsbCBkZXN0cm95IHRoaXMgZ3JhcGhpY3Mgb2JqZWN0IHdoZW4gdGhlIG1lc2ggaXMgZGVzdHJveWVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBncmFwaGljcyBvYmplY3QgdGhpcyBtZXNoIHVzZXMuXG4gICAgICovXG4gICAgZW5hYmxlRGVidWcoZ3JhcGhpY3MpIHtcbiAgICAgICAgaWYgKCFncmFwaGljcyAmJiAhdGhpcy5kZWJ1Z0dyYXBoaWNzKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnR3JhcGhpY3MgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdyYXBoaWNzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWJ1Z0dyYXBoaWNzKVxuICAgICAgICAgICAgICAgIHRoaXMuZGVidWdHcmFwaGljcy5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmRlYnVnR3JhcGhpY3MgPSBncmFwaGljcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlYnVnR3JhcGhpY3MudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLmRlYnVnR3JhcGhpY3M7XG4gICAgfVxuICAgIC8qKiBIaWRlIHRoZSBkZWJ1ZyBncmFwaGljcywgYnV0IGRvbid0IGRlc3Ryb3kgaXQuICovXG4gICAgZGlzYWJsZURlYnVnKCkge1xuICAgICAgICBpZiAodGhpcy5kZWJ1Z0dyYXBoaWNzKVxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0dyYXBoaWNzLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZGVidWcgZ3JhcGhpY3Mgb2JqZWN0IGlzIGVuYWJsZWQgYW5kIHZpc2libGUuICovXG4gICAgaXNEZWJ1Z0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlYnVnR3JhcGhpY3MgJiYgdGhpcy5kZWJ1Z0dyYXBoaWNzLnZpc2libGU7XG4gICAgfVxuICAgIC8qKiBDbGVhciB0aGUgZGVidWcgZ3JhcGhpY3MuICovXG4gICAgZGVidWdEcmF3Q2xlYXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRlYnVnR3JhcGhpY3MpXG4gICAgICAgICAgICB0aGlzLmRlYnVnR3JhcGhpY3MuY2xlYXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVmlzdWFsaXplIHRoZSBwb2x5Z29ucyBpbiB0aGUgbmF2bWVzaCBieSBkcmF3aW5nIHRoZW0gdG8gdGhlIGRlYnVnIGdyYXBoaWNzLlxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICogQHBhcmFtIFtvcHRpb25zLmRyYXdDZW50cm9pZD10cnVlXSBGb3IgZWFjaCBwb2x5Z29uLCBzaG93IHRoZSBhcHByb3ggY2VudHJvaWRcbiAgICAgKiBAcGFyYW0gW29wdGlvbnMuZHJhd0JvdW5kcz1mYWxzZV0gRm9yIGVhY2ggcG9seWdvbiwgc2hvdyB0aGUgYm91bmRpbmcgcmFkaXVzXG4gICAgICogQHBhcmFtIFtvcHRpb25zLmRyYXdOZWlnaGJvcnM9dHJ1ZV0gRm9yIGVhY2ggcG9seWdvbiwgc2hvdyB0aGUgY29ubmVjdGlvbnMgdG8gbmVpZ2hib3JzXG4gICAgICogQHBhcmFtIFtvcHRpb25zLmRyYXdQb3J0YWxzPXRydWVdIEZvciBlYWNoIHBvbHlnb24sIHNob3cgdGhlIHBvcnRhbCBlZGdlc1xuICAgICAqIEBwYXJhbSBbb3B0aW9ucy5wYWxldHRlPVsweDAwYTBiMCwgMHg2YTRhM2MsIDB4Y2MzMzNmLCAweGViNjg0MSwgMHhlZGM5NTFdXSBBbiBhcnJheSBvZlxuICAgICAqIFBoYXNlci1jb21wYXRpYmxlIGZvcm1hdCBjb2xvcnMgdG8gdXNlIHdoZW4gZHJhd2luZyB0aGUgaW5kaXZpZHVhbCBwb2x5Z29ucy4gVGhlIGZpcnN0IHBvbHlcbiAgICAgKiB1c2VzIHRoZSBmaXJzdCBjb2xvciwgdGhlIHNlY29uZCBwb2x5IHVzZXMgdGhlIHNlY29uZCBjb2xvciwgZXRjLlxuICAgICAqL1xuICAgIGRlYnVnRHJhd01lc2goeyBkcmF3Q2VudHJvaWQgPSB0cnVlLCBkcmF3Qm91bmRzID0gZmFsc2UsIGRyYXdOZWlnaGJvcnMgPSB0cnVlLCBkcmF3UG9ydGFscyA9IHRydWUsIHBhbGV0dGUgPSBbMHgwMGEwYjAsIDB4NmE0YTNjLCAweGNjMzMzZiwgMHhlYjY4NDEsIDB4ZWRjOTUxXSwgfSA9IHt9KSB7XG4gICAgICAgIGlmICghdGhpcy5kZWJ1Z0dyYXBoaWNzKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBncmFwaGljcyA9IHRoaXMuZGVidWdHcmFwaGljcztcbiAgICAgICAgY29uc3QgbmF2UG9seXMgPSB0aGlzLm5hdk1lc2guZ2V0UG9seWdvbnMoKTtcbiAgICAgICAgbmF2UG9seXMuZm9yRWFjaCgocG9seSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBwYWxldHRlW3BvbHkuaWQgJSBwYWxldHRlLmxlbmd0aF07XG4gICAgICAgICAgICBncmFwaGljcy5maWxsU3R5bGUoY29sb3IpO1xuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbFBvaW50cyhwb2x5LmdldFBvaW50cygpLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChkcmF3Q2VudHJvaWQpIHtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsU3R5bGUoMHgwMDAwMDApO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxDaXJjbGUocG9seS5jZW50cm9pZC54LCBwb2x5LmNlbnRyb2lkLnksIDQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRyYXdCb3VuZHMpIHtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgMHhmZmZmZmYpO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZUNpcmNsZShwb2x5LmNlbnRyb2lkLngsIHBvbHkuY2VudHJvaWQueSwgcG9seS5ib3VuZGluZ1JhZGl1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZHJhd05laWdoYm9ycykge1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgyLCAweDAwMDAwMCk7XG4gICAgICAgICAgICAgICAgcG9seS5uZWlnaGJvcnMuZm9yRWFjaCgobikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5saW5lQmV0d2Vlbihwb2x5LmNlbnRyb2lkLngsIHBvbHkuY2VudHJvaWQueSwgbi5jZW50cm9pZC54LCBuLmNlbnRyb2lkLnkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRyYXdQb3J0YWxzKSB7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEwLCAweDAwMDAwMCk7XG4gICAgICAgICAgICAgICAgcG9seS5wb3J0YWxzLmZvckVhY2goKHBvcnRhbCkgPT4gZ3JhcGhpY3MubGluZUJldHdlZW4ocG9ydGFsLnN0YXJ0LngsIHBvcnRhbC5zdGFydC55LCBwb3J0YWwuZW5kLngsIHBvcnRhbC5lbmQueSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVmlzdWFsaXplIGEgcGF0aCAoYXJyYXkgb2YgcG9pbnRzKSBvbiB0aGUgZGVidWcgZ3JhcGhpY3MuXG4gICAgICogQHBhcmFtIHBhdGggQXJyYXkgb2YgcG9pbnQtbGlrZSBvYmplY3RzIGluIHRoZSBmb3JtIHt4LCB5fVxuICAgICAqIEBwYXJhbSBjb2xvclxuICAgICAqIEBwYXJhbSB0aGlja25lc3NcbiAgICAgKiBAcGFyYW0gYWxwaGFcbiAgICAgKi9cbiAgICBkZWJ1Z0RyYXdQYXRoKHBhdGgsIGNvbG9yID0gMHgwMGZmMDAsIHRoaWNrbmVzcyA9IDEwLCBhbHBoYSA9IDEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRlYnVnR3JhcGhpY3MpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBEcmF3IGxpbmUgZm9yIHBhdGhcbiAgICAgICAgICAgIHRoaXMuZGVidWdHcmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICAgICAgdGhpcy5kZWJ1Z0dyYXBoaWNzLnN0cm9rZVBvaW50cyhwYXRoKTtcbiAgICAgICAgICAgIC8vIERyYXcgY2lyY2xlIGF0IHN0YXJ0IGFuZCBlbmQgb2YgcGF0aFxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0dyYXBoaWNzLmZpbGxTdHlsZShjb2xvciwgYWxwaGEpO1xuICAgICAgICAgICAgY29uc3QgZCA9IDEuMiAqIHRoaWNrbmVzcztcbiAgICAgICAgICAgIHRoaXMuZGVidWdHcmFwaGljcy5maWxsQ2lyY2xlKHBhdGhbMF0ueCwgcGF0aFswXS55LCBkKTtcbiAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0UG9pbnQgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgdGhpcy5kZWJ1Z0dyYXBoaWNzLmZpbGxDaXJjbGUobGFzdFBvaW50LngsIGxhc3RQb2ludC55LCBkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVNZXNoKG1lc2hQb2x5Z29uUG9pbnRzKSB7XG4gICAgICAgIHRoaXMubmF2TWVzaCA9IG5ldyBOYXZNZXNoKG1lc2hQb2x5Z29uUG9pbnRzLCAwKTtcbiAgICB9XG4gICAgLyoqIERlc3Ryb3kgdGhlIG1lc2gsIGtpbGwgdGhlIGRlYnVnIGdyYXBoaWMgYW5kIHVucmVnaXN0ZXIgaXRzZWxmIHdpdGggdGhlIHBsdWdpbi4gKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5uYXZNZXNoKVxuICAgICAgICAgICAgdGhpcy5uYXZNZXNoLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHRoaXMuZGVidWdHcmFwaGljcylcbiAgICAgICAgICAgIHRoaXMuZGVidWdHcmFwaGljcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMucGx1Z2luLnJlbW92ZU1lc2godGhpcy5rZXkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuY29uc3Qgc2NlbmVDb25maWcgPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBrZXk6ICdCb290Jyxcbn07XG4vKipcbiAqIFRoZSBpbml0aWFsIHNjZW5lIHRoYXQgbG9hZHMgYWxsIG5lY2Vzc2FyeSBhc3NldHMgdG8gdGhlIGdhbWUgYW5kIGRpc3BsYXlzIGEgbG9hZGluZyBiYXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb290U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gICAgfVxuICAgIHByZWxvYWQoKSB7XG4gICAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IGdldEdhbWVXaWR0aCh0aGlzKSAqIDAuNTtcbiAgICAgICAgY29uc3QgaGFsZkhlaWdodCA9IGdldEdhbWVIZWlnaHQodGhpcykgKiAwLjU7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzQmFySGVpZ2h0ID0gMTAwO1xuICAgICAgICBjb25zdCBwcm9ncmVzc0JhcldpZHRoID0gNDAwO1xuICAgICAgICBjb25zdCBwcm9ncmVzc0JhckNvbnRhaW5lciA9IHRoaXMuYWRkLnJlY3RhbmdsZShoYWxmV2lkdGgsIGhhbGZIZWlnaHQsIHByb2dyZXNzQmFyV2lkdGgsIHByb2dyZXNzQmFySGVpZ2h0LCAweDAwMDAwMCk7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzQmFyID0gdGhpcy5hZGQucmVjdGFuZ2xlKGhhbGZXaWR0aCArIDIwIC0gcHJvZ3Jlc3NCYXJDb250YWluZXIud2lkdGggKiAwLjUsIGhhbGZIZWlnaHQsIDEwLCBwcm9ncmVzc0JhckhlaWdodCAtIDIwLCAweDg4ODg4OCk7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSA3NSwgaGFsZkhlaWdodCAtIDEwMCwgJ0xvYWRpbmcuLi4nKS5zZXRGb250U2l6ZSgyNCk7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCwgJzAlJykuc2V0Rm9udFNpemUoMjQpO1xuICAgICAgICBjb25zdCBhc3NldFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0ICsgMTAwLCAnJykuc2V0Rm9udFNpemUoMjQpO1xuICAgICAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBwcm9ncmVzc0Jhci53aWR0aCA9IChwcm9ncmVzc0JhcldpZHRoIC0gMzApICogdmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gdmFsdWUgKiAxMDA7XG4gICAgICAgICAgICBwZXJjZW50VGV4dC5zZXRUZXh0KGAke3BlcmNlbnR9JWApO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2FkLm9uKCdmaWxlcHJvZ3Jlc3MnLCAoZmlsZSkgPT4ge1xuICAgICAgICAgICAgYXNzZXRUZXh0LnNldFRleHQoZmlsZS5rZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcbiAgICAgICAgICAgIGxvYWRpbmdUZXh0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHBlcmNlbnRUZXh0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGFzc2V0VGV4dC5kZXN0cm95KCk7XG4gICAgICAgICAgICBwcm9ncmVzc0Jhci5kZXN0cm95KCk7XG4gICAgICAgICAgICBwcm9ncmVzc0JhckNvbnRhaW5lci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNYWluTWVudScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2FkQXNzZXRzKCk7XG4gICAgICAgIC8vIHRoaXMubG9hZC5wbHVnaW4oJ3JleGNvbnRhaW5lcmxpdGVwbHVnaW4nLCAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3JleHJhaW5ib3cvcGhhc2VyMy1yZXgtbm90ZXMvbWFzdGVyL2Rpc3QvcmV4Y29udGFpbmVybGl0ZXBsdWdpbi5taW4uanMnLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxsIGFzc2V0cyB0aGF0IG5lZWQgdG8gYmUgbG9hZGVkIGJ5IHRoZSBnYW1lIChzcHJpdGVzLCBpbWFnZXMsIGFuaW1hdGlvbnMsIHRpbGVzLCBtdXNpYywgZXRjKVxuICAgICAqIHNob3VsZCBiZSBhZGRlZCB0byB0aGlzIG1ldGhvZC4gT25jZSBsb2FkZWQgaW4sIHRoZSBsb2FkZXIgd2lsbCBrZWVwIHRyYWNrIG9mIHRoZW0sIGluZGVwZWRlbnQgb2Ygd2hpY2ggc2NlbmVcbiAgICAgKiBpcyBjdXJyZW50bHkgYWN0aXZlLCBzbyB0aGV5IGNhbiBiZSBhY2Nlc3NlZCBhbnl3aGVyZS5cbiAgICAgKi9cbiAgICBsb2FkQXNzZXRzKCkge1xuICAgICAgICAvLyBMb2FkIHNhbXBsZSBhc3NldHNcbiAgICAgICAgLy8gU291cmNlOiBPcGVuIEdhbWUgQXJ0XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncHJpc29uJywgJ2Fzc2V0cy9wcmlzb24uc3ZnJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncm9ja2V0JywgJ2Fzc2V0cy9yb2NrZXQuc3ZnJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndGlsZScsICdhc3NldHMvcGFya2F5LWZsb29yLnN2ZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3N0YXJzJywgJ2Fzc2V0cy9zdGFycy5zdmcnKTtcbiAgICAgICAgLy8gdGhpcy5sb2FkLmltYWdlKCdlbmVteScsICdhc3NldHMvcm9ib3RzLnN2ZycpO1xuICAgICAgICAvLyB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2VuZW15JywgJ2Fzc2V0cy9yb2JvdHMuc3ZnJywgeyBmcmFtZVdpZHRoOiA1MDAsIGZyYW1lSGVpZ2h0OiA1MDUgfSk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnY3JhdGVzJywgJ2Fzc2V0cy9DcmF0ZXMuc3ZnJywgeyBmcmFtZVdpZHRoOiAxMDUsIGZyYW1lSGVpZ2h0OiAxMDUgfSk7XG4gICAgICAgIC8vICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAvLyAgICAga2V5OiAnZmFjZScsXG4gICAgICAgIC8vICAgICBmcmFtZXM6IFsgeyBrZXk6ICdlbmVteScsIGZyYW1lOiAxIH0gXSxcbiAgICAgICAgLy8gICAgIGZyYW1lUmF0ZTogLTEsXG4gICAgICAgIC8vIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBDcmF0ZSBmcm9tICcuLi9nYW1lb2JqZWN0cy9DcmF0ZSc7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi4vZ2FtZW9iamVjdHMvRW5lbXknO1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9nYW1lb2JqZWN0cy9QbGF5ZXInO1xuaW1wb3J0IFdhbGwgZnJvbSAnLi4vZ2FtZW9iamVjdHMvV2FsbCc7XG5pbXBvcnQgeyBibG9ja2VkSW5EaXJlY3Rpb24sIGNvbGxpZGVzT25BeGVzLCBDb2xsaXNpb240RGlyZWN0aW9uLCBEaXJlY3Rpb24sIGdldEdhbWVIZWlnaHQsIGdldEdhbWVXaWR0aCwgcG9pbnQyVmVjLCByZWFjaGVkQm91bmQsIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgUGVyc3BlY3RpdmVPYmplY3QgZnJvbSAnLi4vZ2FtZW9iamVjdHMvUGVyc3BlY3RpdmVNaXhpbic7XG5pbXBvcnQgQ3JhdGVGYWNlIGZyb20gJy4uL2dhbWVvYmplY3RzL0NyYXRlRmFjZSc7XG5pbXBvcnQgUHJpc29uRmFjZSBmcm9tICcuLi9nYW1lb2JqZWN0cy9Qcmlzb25GYWNlJztcbnZhciBWZWN0b3IyID0gUGhhc2VyLk1hdGguVmVjdG9yMjtcbmNvbnN0IHNjZW5lQ29uZmlnID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAga2V5OiAnR2FtZScsXG4gICAgcGh5c2ljczoge30sXG59O1xuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcbiAgICAgICAgdGhpcy5ncmlkVW5pdCA9IDA7XG4gICAgICAgIHRoaXMuYmFja2dvdW5kSW5jID0gMDtcbiAgICB9XG4gICAgY3JlYXRlKCkge1xuICAgICAgICBjb25zdCBtZWFzdXJlWCA9IGdldEdhbWVXaWR0aCh0aGlzKTtcbiAgICAgICAgY29uc3QgbWVhc3VyZVkgPSBnZXRHYW1lSGVpZ2h0KHRoaXMpO1xuICAgICAgICBjb25zdCBpc0xhbmRzY2FwZSA9IG1lYXN1cmVYID4gbWVhc3VyZVk7XG4gICAgICAgIGNvbnN0IG1lYXN1cmVTaG9ydCA9IGlzTGFuZHNjYXBlID8gbWVhc3VyZVkgOiBtZWFzdXJlWDtcbiAgICAgICAgY29uc3QgbWVhc3VyZUxvbmcgPSBtZWFzdXJlU2hvcnQgKiAxLjM7XG4gICAgICAgIHRoaXMuZ3JpZFVuaXQgPSBNYXRoLnJvdW5kKG1lYXN1cmVTaG9ydCAvIDEwMCk7XG4gICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gdGhpcy5ncmlkVW5pdCAqIDI7XG4gICAgICAgIHRoaXMuZGF0YS5zZXQoJ2dyaWRVbml0JywgdGhpcy5ncmlkVW5pdCk7XG4gICAgICAgIHRoaXMuZGF0YS5zZXQoJ3Nob3J0JywgbWVhc3VyZVNob3J0KTtcbiAgICAgICAgY29uc3QgZ2V0U2l6ZSA9IChpbnB1dCkgPT4gaW5wdXQgPyBtZWFzdXJlTG9uZyA6IG1lYXN1cmVTaG9ydDtcbiAgICAgICAgbGV0IHN0YXJ0WCA9IG1lYXN1cmVYIC0gZ2V0U2l6ZShpc0xhbmRzY2FwZSk7XG4gICAgICAgIHN0YXJ0WCA9IHN0YXJ0WCA9PT0gMCA/IDAgOiBzdGFydFggLyAyO1xuICAgICAgICBsZXQgc3RhcnRZID0gbWVhc3VyZVkgLSBnZXRTaXplKCFpc0xhbmRzY2FwZSk7XG4gICAgICAgIHN0YXJ0WSA9IHN0YXJ0WSA9PT0gMCA/IDAgOiBzdGFydFkgLyAyO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIGJpZ2dlc3Qgd29ybGQgdGhhdCB3aWxsIGZpdCBvbiB0aGlzIHNjcmVlbi5cbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5waHlzaWNzLnNjZW5lLmFkZC50aWxlU3ByaXRlKGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsIGdldEdhbWVIZWlnaHQodGhpcykgLyAyLCBnZXRHYW1lV2lkdGgodGhpcyksIGdldEdhbWVIZWlnaHQodGhpcyksICdzdGFycycpO1xuICAgICAgICBjb25zdCBzZXRCb3VuZHMgPSAoaXRlbSkgPT4gaXRlbS5zZXRCb3VuZHMoc3RhcnRYLCBzdGFydFksIGdldFNpemUoaXNMYW5kc2NhcGUpLCBnZXRTaXplKCFpc0xhbmRzY2FwZSkpO1xuICAgICAgICBzZXRCb3VuZHModGhpcy5waHlzaWNzLndvcmxkKTtcbiAgICAgICAgY29uc3QgeyBsZWZ0LCByaWdodCwgdG9wLCBib3R0b20sIGhlaWdodCwgd2lkdGgsIGNlbnRlclgsIGNlbnRlclkgfSA9IHRoaXMucGh5c2ljcy53b3JsZC5ib3VuZHM7XG4gICAgICAgIGNvbnN0IHRpbGVzID0gdGhpcy5waHlzaWNzLnNjZW5lLmFkZC50aWxlU3ByaXRlKGdldFNpemUoaXNMYW5kc2NhcGUpIC8gMiArIHN0YXJ0WCwgZ2V0U2l6ZSghaXNMYW5kc2NhcGUpIC8gMiArIHN0YXJ0WSwgd2lkdGgsIGhlaWdodCwgJ3RpbGUnKTtcbiAgICAgICAgdGlsZXMuc2V0VGlsZVNjYWxlKHRoaXMuZ3JpZFVuaXQgLyA3KTtcbiAgICAgICAgY29uc3QgQ3JhdGVUeXBlID0gUGVyc3BlY3RpdmVPYmplY3QoQ3JhdGVGYWNlKENyYXRlKSk7XG4gICAgICAgIGNvbnN0IFByaXNvbiA9IFBlcnNwZWN0aXZlT2JqZWN0KFByaXNvbkZhY2UoQ3JhdGUpKTtcbiAgICAgICAgY29uc3QgRW5lbXlUeXBlID0gUGVyc3BlY3RpdmVPYmplY3QoRW5lbXkpO1xuICAgICAgICBjb25zdCBQbGF5ZXJUeXBlID0gUGVyc3BlY3RpdmVPYmplY3QoUGxheWVyKTtcbiAgICAgICAgY29uc3QgY3JhdGVDb25maWcgPSB7XG4gICAgICAgICAgICBjbGFzc1R5cGU6IENyYXRlVHlwZSxcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICByZXBlYXQ6IDksXG4gICAgICAgICAgICBzZXRTY2FsZTogeyB4OiB0aGlzLmdyaWRVbml0IC8gMTAsIHk6IHRoaXMuZ3JpZFVuaXQgLyAxMCB9LFxuICAgICAgICAgICAgY29sbGlkZVdvcmxkQm91bmRzOiB0cnVlLFxuICAgICAgICAgICAga2V5OiAnY3JhdGVzJyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jcmF0ZXMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKGNyYXRlQ29uZmlnKTtcbiAgICAgICAgY29uc3QgcXVhcnRlckNyYXRlID0gdGhpcy5ncmlkVW5pdCAqIDIuNjtcbiAgICAgICAgdGhpcy5wcmlzb24gPSBuZXcgUHJpc29uKHRoaXMucGh5c2ljcy5zY2VuZSwgY2VudGVyWCwgYm90dG9tLCAncHJpc29uJyk7XG4gICAgICAgIHRoaXMucHJpc29uLnNldFNjYWxlKHRoaXMuZ3JpZFVuaXQgLyAxNC4xKTtcbiAgICAgICAgdGhpcy5wcmlzb24uZGVwdGggPSAyO1xuICAgICAgICB0aGlzLmNyYXRlcy5hZGQodGhpcy5wcmlzb24pO1xuICAgICAgICBjb25zdCBDdWJlVHlwZSA9IFBlcnNwZWN0aXZlT2JqZWN0KFdhbGwpO1xuICAgICAgICAvLyBjb25zdCB3YWxsID0gbmV3IFdhbGwodGhpcywgMCAsIDAsICdwcmlzb24nLCBuZXcgVmVjdG9yMigyLDQpKTtcbiAgICAgICAgY29uc3Qgd2FsbGNvbG9yID0gMHhjMGJkYzM7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBxdWFydGVyQ3JhdGUgLyAyO1xuICAgICAgICBjb25zdCB1cCA9ICd1cCc7XG4gICAgICAgIGNvbnN0IGRvd24gPSAnZG93bic7XG4gICAgICAgIGNvbnN0IGRpcnJpZ2h0ID0gJ3JpZ2h0JztcbiAgICAgICAgY29uc3QgZGlybGVmdCA9ICdsZWZ0JztcbiAgICAgICAgY29uc3Qgd2FsbHRvcCA9IG5ldyBDdWJlVHlwZSh0aGlzLCBjZW50ZXJYLCB0b3AgLSBlZGdlIC8gMiwgd2lkdGgsIGVkZ2UsIHF1YXJ0ZXJDcmF0ZSAqIDQsIHdhbGxjb2xvciwgZG93biwgQ29sbGlzaW9uNERpcmVjdGlvbihEaXJlY3Rpb24uZG93bikpO1xuICAgICAgICBjb25zdCB3YWxsYm90dG9tID0gbmV3IEN1YmVUeXBlKHRoaXMsIGNlbnRlclgsIGJvdHRvbSArIGVkZ2UgLyAyLCB3aWR0aCwgZWRnZSwgcXVhcnRlckNyYXRlICogNCwgd2FsbGNvbG9yLCB1cCwgQ29sbGlzaW9uNERpcmVjdGlvbihEaXJlY3Rpb24udXApKTtcbiAgICAgICAgY29uc3Qgd2FsbGxlZnQgPSBuZXcgQ3ViZVR5cGUodGhpcywgbGVmdCAtIGVkZ2UgLyAyLCBjZW50ZXJZLCBlZGdlLCBoZWlnaHQsIHF1YXJ0ZXJDcmF0ZSAqIDQsIHdhbGxjb2xvciwgZGlycmlnaHQsIENvbGxpc2lvbjREaXJlY3Rpb24oRGlyZWN0aW9uLnJpZ2h0KSk7XG4gICAgICAgIGNvbnN0IHdhbGxyaWdodCA9IG5ldyBDdWJlVHlwZSh0aGlzLCByaWdodCArIGVkZ2UgLyAyLCBjZW50ZXJZLCBlZGdlLCBoZWlnaHQsIHF1YXJ0ZXJDcmF0ZSAqIDQsIHdhbGxjb2xvciwgZGlybGVmdCwgQ29sbGlzaW9uNERpcmVjdGlvbihEaXJlY3Rpb24ubGVmdCkpO1xuICAgICAgICBjb25zdCB3YWxscyA9IFt3YWxsdG9wLCB3YWxsYm90dG9tLCB3YWxsbGVmdCwgd2FsbHJpZ2h0XTtcbiAgICAgICAgd2FsbHMuZm9yRWFjaCgodykgPT4ge1xuICAgICAgICAgICAgdy5zZXRTdHJva2VTdHlsZSh0aGlzLmdyaWRVbml0IC8gNCwgMHgwMDAsIDEpO1xuICAgICAgICAgICAgdy51cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V0UmFuZG9tSW50KDQpOyBpKyspIHtcbiAgICAgICAgLy8gICBjb25zdCBjdWJlID0gbmV3IEN1YmVUeXBlKHRoaXMsIGNlbnRlclksIGNlbnRlclgsIHF1YXJ0ZXJDcmF0ZSAqIDQsIHF1YXJ0ZXJDcmF0ZSAqIDQsIHF1YXJ0ZXJDcmF0ZSAqIDQsIDB4NDM0NjRCLCAnY3ViZScpIGFzIFdhbGw7XG4gICAgICAgIC8vICAgY3ViZS5zZXRTdHJva2VTdHlsZSh0aGlzLmdyaWRVbml0IC8gNCwgMHgwMDAsIDEpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHRoaXMuY3JhdGVzLmFkZChjdWJlKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnJvY2tldCA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKGNlbnRlclgsIHRvcCArIHF1YXJ0ZXJDcmF0ZSAqIDIsICdyb2NrZXQnKTtcbiAgICAgICAgdGhpcy5yb2NrZXQuc2V0U2NhbGUodGhpcy5ncmlkVW5pdCAvIDE1KTtcbiAgICAgICAgdGhpcy5yb2NrZXQuc2V0RGVwdGgoMSk7XG4gICAgICAgIHRoaXMuY3JhdGVzLnNldERlcHRoKDMpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXJUeXBlKHsgc2NlbmU6IHRoaXMsIHg6IGNlbnRlclgsIHk6IGNlbnRlclkgfSwgdGhpcy5ncmlkVW5pdCwgdGhpcy5jcmF0ZXMsIHF1YXJ0ZXJDcmF0ZSwgdGhpcy5ncmlkVW5pdCAvIDQpO1xuICAgICAgICB0aGlzLnBsYXllci5zY2FsZSA9IDM7XG4gICAgICAgIHRoaXMuZW5lbXkgPSBuZXcgRW5lbXlUeXBlKHsgc2NlbmU6IHRoaXMsIHg6IGNlbnRlclgsIHk6IHRvcCArIHF1YXJ0ZXJDcmF0ZSAqIDIgfSwgdGhpcy5ncmlkVW5pdCwgcXVhcnRlckNyYXRlICogMS4yLCB0aGlzLmdyaWRVbml0IC8gNCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMucGxheWVyLCB0aGlzLmNyYXRlcywgdGhpcy5wbGF5ZXIuY3JhdGVDb2xsaWRlciwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMucGxheWVyLCB0aGlzLmVuZW15LCAoKSA9PiB0aGlzLmVuZEdhbWUoKSwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgY3JhdGVzQ29sbGlkZXIgPSB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuZW5lbXksIHRoaXMuY3JhdGVzKTtcbiAgICAgICAgdGhpcy5lbmVteUNvbGxpZGVyID0gdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMuZW5lbXksIHRoaXMuY3JhdGVzLCB0aGlzLmVuZW15LmNyYXRlc092ZXJsYXApO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMucm9ja2V0Q29sbGlkZXIgPSB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5wbGF5ZXIsIHRoaXMucm9ja2V0LCAoKSA9PiB0aGlzLmJsYXN0T2ZmKCksIG51bGwsIHRydWUpO1xuICAgICAgICB0aGlzLmZhbGxpbmdDcmF0ZXMgPSBbXTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBlbmVteSA9IHRoaXMuZW5lbXk7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXMucGxheWVyO1xuICAgICAgICBmdW5jdGlvbiBwbGFjZUNyYXRlKGNyYXRlLCBjcmF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgd2lkdGg6IHcsIGhlaWdodDogaCB9ID0gY3JhdGU7XG4gICAgICAgICAgICBjb25zdCBwMSA9IG5ldyBWZWN0b3IyKHcsIDApO1xuICAgICAgICAgICAgY29uc3QgcDIgPSBuZXcgVmVjdG9yMigwLCBoKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHJhZCA9IHAxLmRpc3RhbmNlKHAyKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHcsIHAxLmRpc3RhbmNlKHAyKSwgdyAqIDEuNSk7XG4gICAgICAgICAgICBjcmF0ZS5zZXRSYW5kb21Qb3NpdGlvbihzdGFydFgsIHN0YXJ0WSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICBjcmF0ZXMuY2hpbGRyZW4uaXRlcmF0ZSgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9PSBjcmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSBwb2ludDJWZWMoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyYXRlUG9zID0gcG9pbnQyVmVjKGNyYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFkID0gY3JhdGUud2lkdGggKiAxLjU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3MuZGlzdGFuY2UoY3JhdGUpIDw9IHJhZCB8fCBjcmF0ZVBvcy5kaXN0YW5jZShlbmVteSkgPD0gcmFkIHx8IGNyYXRlUG9zLmRpc3RhbmNlKHBsYXllcikgPD0gcmFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUNyYXRlKGNyYXRlLCBjcmF0ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc3QgYXJyYXkgPSBbWzAsMSwyXSwgWzMsNCw1XSwgWzYsNyw4XV07XG4gICAgICAgIC8vIGNvbnN0IG1hcCA9IHRoaXMubWFrZS50aWxlbWFwKHtkYXRhOiBhcnJheSwgdGlsZVdpZHRoOiB0aGlzLmdyaWRVbml0LCB0aWxlSGVpZ2h0OiB0aGlzLmdyaWRVbml0fSk7XG4gICAgICAgIC8vIGNvbnN0IGxheWVyID0gbWFwLmNyZWF0ZUxheWVyKDAsICd0aWxlcycsIDAgLCAwKTtcbiAgICAgICAgLy8gY29uc3QgbmF2TWVzaCA9IHRoaXMubmF2TWVzaFBsdWdpbi5idWlsZE1lc2hGcm9tVGlsZW1hcChcIm1lc2hcIiwgbWFwLCBbbGF5ZXJdKTtcbiAgICAgICAgdGhpcy5jcmF0ZXMuY2hpbGRyZW4uaXRlcmF0ZSgoY3JhdGUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgcGxhY2VDcmF0ZShjcmF0ZSwgdGhpcy5jcmF0ZXMpO1xuICAgICAgICAgICAgdGhpcy5mYWxsaW5nQ3JhdGVzLnB1c2goY3JhdGUpO1xuICAgICAgICAgICAgLy8gY29uc3QgbGF5ZXIgPSBtYXAuY3JlYXRlTGF5ZXIoMCwgJ2NyYXRlcycsIDAgLCAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW5lbXkuc2V0RGF0YUVuYWJsZWQoKTtcbiAgICAgICAgLy8gdGhpcy5lbmVteS5kYXRhLnNldCgnbWVzaCcsIGRlY29tcCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRlY29tcCk7XG4gICAgICAgIHRoaXMuYm91bmRlZENyYXRlcyA9IFtdO1xuICAgICAgICB0aGlzLnVwZGF0ZVBlcnNwZWN0aXZlRHJhd2luZygpO1xuICAgICAgICB0aGlzLnBoeXNpY3Mud29ybGQub24oJ3dvcmxkYm91bmRzJywgKGJvZHkgLyosIHVwLCBkb3duLCBsZWZ0LCByaWdodCovKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBlcnNwZWN0aXZlRHJhd2luZyhib2R5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIC8vIHNldCBtb3Rpb24gb24gdGhlIHN0YXJzXG4gICAgICAgIGlmICghdGhpcy5yb2NrZXQudmlzaWJsZSkge1xuICAgICAgICAgICAgLy8gdGhpcy5lbmVteS5cbiAgICAgICAgICAgIHRoaXMuZHJvcEV2ZXJ5dGhpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tnb3VuZEluYyA9PT0gMFxuICAgICAgICAgICAgPyB0aGlzLmJhY2tncm91bmQudGlsZVBvc2l0aW9uWCAtPSAxXG4gICAgICAgICAgICA6IHRoaXMuYmFja2dyb3VuZC50aWxlUG9zaXRpb25ZIC09IHRoaXMuYmFja2dvdW5kSW5jO1xuICAgICAgICBjb25zdCBwb3MgPSBuZXcgVmVjdG9yMih0aGlzLnBsYXllci54LCB0aGlzLnBsYXllci55KTtcbiAgICAgICAgdGhpcy5lbmVteS5leHRlcm1pbmF0ZShwb3MsIHRoaXMuY3JhdGVzKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuZW5lbXkudXBkYXRlKCk7XG4gICAgfVxuICAgIHVwZGF0ZVBlcnNwZWN0aXZlRHJhd2luZyhib2R5ID0gbnVsbCkge1xuICAgICAgICB0aGlzLmNyYXRlc1ByZVJlbmRlckV2ZW50ID0gdGhpcy5waHlzaWNzLnNjZW5lLmdhbWUuZXZlbnRzLm9uKCdwcmVyZW5kZXInLCAocmVuZGVyZXIsIHRpbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGJvZHkuZ2FtZU9iamVjdC51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB0aGlzLmNyYXRlcy5jaGlsZHJlbi5pdGVyYXRlKChjcmF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY3JhdGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNyYXRlc1ByZVJlbmRlckV2ZW50LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG4gICAgZW5kR2FtZSh3b24gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmVuZW15LmNsZWFyTWVzaCgpO1xuICAgICAgICB0aGlzLmFkZFxuICAgICAgICAgICAgLnRleHQoZ2V0R2FtZVdpZHRoKHRoaXMpIC8gMi41LCBnZXRHYW1lSGVpZ2h0KHRoaXMpIC8gMiwgd29uID8gJ3lvdSB3aW4nIDogJ2dhbWUgb3ZlcicpLnNldEZvbnRTaXplKHRoaXMuZ3JpZFVuaXQgKiA1KVxuICAgICAgICAgICAgLnNldERlcHRoKDUpO1xuICAgICAgICB0aGlzLnBoeXNpY3MucGF1c2UoKTtcbiAgICAgICAgdGhpcy5zY2VuZS5wYXVzZSgpO1xuICAgIH1cbiAgICBkcm9wRXZlcnl0aGluZygpIHtcbiAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgIGNvbnN0IGJsb2NrZWRDcmF0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5mYWxsaW5nQ3JhdGVzLmZvckVhY2goKGNyYXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub25lID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBjb2xsaXNpb24gPSB7IHVwOiBmYWxzZSwgZG93bjogdHJ1ZSwgcmlnaHQ6IGZhbHNlLCBsZWZ0OiBmYWxzZSwgbm9uZSB9O1xuICAgICAgICAgICAgY29uc3QgYXhpcyA9ICd5JztcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuZmFsbGluZ0NyYXRlcy5maWx0ZXIoKGl0ZW0pID0+IGNvbGxpZGVzT25BeGVzKGNyYXRlLCBpdGVtLCBjb2xsaXNpb24pKVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhW2F4aXNdIDwgYltheGlzXSA/IC0xIDogMSk7XG4gICAgICAgICAgICBjb25zdCB7IGJvdW5kcyB9ID0gdGhpcy5waHlzaWNzLndvcmxkO1xuICAgICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goKGNvbGxpZGluZ0NyYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrZWRJbkRpcmVjdGlvbihjcmF0ZSwgY29sbGlkaW5nQ3JhdGUsIHRoaXMuZ3Jhdml0eVNwZWVkLCBjb2xsaXNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrZWRDcmF0ZXMucHVzaChjcmF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocmVhY2hlZEJvdW5kKGNyYXRlLCB0aGlzLmdyYXZpdHlTcGVlZCwgY29sbGlzaW9uLCBib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3VuZGVkQ3JhdGVzLnB1c2goY3JhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mYWxsaW5nQ3JhdGVzXG4gICAgICAgICAgICAuZmlsdGVyKChjcmF0ZSkgPT4gIWJsb2NrZWRDcmF0ZXMuaW5jbHVkZXMoY3JhdGUpKVxuICAgICAgICAgICAgLmZpbHRlcigoY3JhdGUpID0+ICF0aGlzLmJvdW5kZWRDcmF0ZXMuaW5jbHVkZXMoY3JhdGUpKVxuICAgICAgICAgICAgLmZvckVhY2goKGNyYXRlKSA9PiB7XG4gICAgICAgICAgICBpZiAoY3JhdGUgaW5zdGFuY2VvZiBDcmF0ZSkge1xuICAgICAgICAgICAgICAgIGNyYXRlLnkgKz0gdGhpcy5ncmF2aXR5U3BlZWQ7XG4gICAgICAgICAgICAgICAgY3JhdGUudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyLmlzQmxvY2tlZERpcmVjdGlvbignZG93bicpKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci55ICs9IHRoaXMuZ3Jhdml0eVNwZWVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5lbmVteS5pc0Jsb2NrZWREaXJlY3Rpb24oJ2Rvd24nKSkge1xuICAgICAgICAgICAgdGhpcy5lbmVteS55ICs9IHRoaXMuZ3Jhdml0eVNwZWVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJsYXN0T2ZmKCkge1xuICAgICAgICBpZiAodGhpcy5yb2NrZXQudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5zY2VuZS5jYW1lcmFzLm1haW4uc2hha2UoNTAwLCAwLjAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvY2tldC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm9ja2V0Q29sbGlkZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmJhY2tnb3VuZEluYyA9IDEwO1xuICAgICAgICAvLyBpZiAodGhpcy5wbGF5ZXIueSA8PSB0aGlzLnBoeXNpY3Mud29ybGQuYm91bmRzLmJvdHRvbSAtIHRoaXMucGxheWVyLmhlaWdodCkge1xuICAgICAgICAvLyAgIC8vIGNvbnNvbGUubG9nICh0aGlzLnBsYXllci55KTtcbiAgICAgICAgLy8gICB0aGlzLmVuZEdhbWUoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5wcmlzb24sIHRoaXMuZW5lbXksICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZW15LnkgPD0gdGhpcy5waHlzaWNzLndvcmxkLmJvdW5kcy5ib3R0b20gLSB0aGlzLmVuZW15LmhlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kR2FtZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15LnggPSB0aGlzLnByaXNvbi54O1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXkueSA9IHRoaXMucHJpc29uLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1haW5NZW51U2NlbmUgfSBmcm9tICcuL21haW4tbWVudS1zY2VuZSc7XG5pbXBvcnQgeyBCb290U2NlbmUgfSBmcm9tICcuL2Jvb3Qtc2NlbmUnO1xuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9nYW1lLXNjZW5lJztcbmV4cG9ydCBkZWZhdWx0IFtcbiAgICBCb290U2NlbmUsXG4gICAgTWFpbk1lbnVTY2VuZSxcbiAgICBHYW1lU2NlbmUsXG5dO1xuIiwiY29uc3Qgc2NlbmVDb25maWcgPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBrZXk6ICdNYWluTWVudScsXG59O1xuLyoqXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IHN0YXJ0cywgc2hvd3MgdGhlIHNwbGFzaCBzY3JlZW5zLCBhbmQgbG9hZHMgdGhlIG5lY2Vzc2FyeSBhc3NldHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICAgIH1cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnKTtcbiAgICAgICAgLy8gdGhpcy5hZGQudGV4dCgxMDAsIDUwLCAnVGhpcyBpcyBhIHNhbXBsZSBtYWluIG1lbnUuIENsaWNrIHRoZSBcIlN0YXJ0XCIgYnV0dG9uIGJlbG93IHRvIHJ1biB5b3VyIGdhbWUuJywgeyBmaWxsOiAnI0ZGRkZGRicgfSkuc2V0Rm9udFNpemUoMjQpO1xuICAgICAgICAvLyBuZXcgTWVudUJ1dHRvbih0aGlzLCAxMDAsIDE1MCwgJ1N0YXJ0IEdhbWUnLCAoKSA9PiB7XG4gICAgICAgIC8vICAgdGhpcy5zY2VuZS5zdGFydCgnR2FtZScpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAyNTAsICdTZXR0aW5ncycsICgpID0+IGNvbnNvbGUubG9nKCdzZXR0aW5ncyBidXR0b24gY2xpY2tlZCcpKTtcbiAgICAgICAgLy8gbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAzNTAsICdIZWxwJywgKCkgPT4gY29uc29sZS5sb2coJ2hlbHAgYnV0dG9uIGNsaWNrZWQnKSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==