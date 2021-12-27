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
            const ext = new Line(circle1.x, circle1.y, circle2.x, circle2.y);
            const crossb = Phaser.Geom.Line.Extend(ext, 0, this.gridUnit * 40);
            const cp = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["point2Vec"])(circle1.getPoint(0));
            const cp2 = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["point2Vec"])(circle2.getPoint(0));
            const crossa = Phaser.Geom.Line.Extend(new Line(cp.x, cp.y, cp2.x, cp2.y), this.gridUnit * 40);
            cross = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["lineIntersect"])(crossb.getPointA(), crossb.getPointB(), crossa.getPointA(), crossa.getPointB());
            graphics.lineStyle(3, 0x000, 1);
        }
        else {
            cross = intersectPoint;
        }
        const tp = this.getExternalTangent(circle1, circle2, cross);
        if (tp && cross) {
            const { p1, p2, p3, p4 } = tp;
            const shape = new Path();
            shape.moveTo(p1);
            const mi = cross.clone().lerp(point, percent);
            const curve = new QuadraticBezier(p1, mi, p2);
            shape.add(curve);
            shape.lineTo(p2);
            shape.lineTo(p3);
            shape.lineTo(p4);
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
    getExternalTangent(circle1, circle2, crossPoint) {
        if (circle1 && circle2 && crossPoint) {
            const { graphics } = this;
            graphics.fillStyle(0xb4d455, 1);
            graphics.lineStyle(4, 0x000, 1);
            const getAngle = (c) => Normalize(BetweenPoints(c, crossPoint)) / (2 * Math.PI);
            const angle1 = (getAngle(circle1) + 0.25) % 1;
            const angle2 = (angle1 + 0.5) % 1;
            const angle3 = (getAngle(circle2) + 0.25) % 1;
            const angle4 = (angle3 + 0.5) % 1;
            const pp2 = circle1.getPoint(angle2);
            const pp4 = circle2.getPoint(angle4);
            const lineA = Phaser.Geom.Line.Extend(this.getLine(pp2, pp4), circle1.radius, circle1.radius);
            const intersectPoint = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["lineIntersect"])(lineA.getPointA(), lineA.getPointB(), circle1, crossPoint);
            // tslint:disable-next-line:one-variable-per-declaration
            let p1, p2, p3, p4, intersects;
            if (intersectPoint) {
                const halfpoint = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["point2Vec"])(circle2).lerp(intersectPoint, 0.5);
                const measureCircle = new Circle(halfpoint.x, halfpoint.y, halfpoint.distance(intersectPoint));
                intersects = GetCircleToCircle(measureCircle, circle2);
            }
            if ((intersects === null || intersects === void 0 ? void 0 : intersects.length) > 0) {
                p1 = intersects[0];
                p2 = intersects[1];
                const lineB = new Line(p1.x, p1.y, intersectPoint.x, intersectPoint.y);
                const lineC = new Line(p2.x, p2.y, intersectPoint.x, intersectPoint.y);
                const d = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["point2Vec"])(circle1).distance(circle2);
                const lineD = Phaser.Geom.Line.Extend(lineB, d, 0);
                const lineE = Phaser.Geom.Line.Extend(lineC, d, 0);
                p4 = lineD.getPointA();
                p3 = lineE.getPointA();
            }
            const result = { p1, p2, p3, p4 };
            return p1 && p2 && p3 && p4 ? result : false;
        }
        return false;
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




var BetweenPoints = Phaser.Math.Angle.BetweenPoints;
var Normalize = Phaser.Math.Angle.Normalize;
var Vector2 = Phaser.Math.Vector2;
var Circle = Phaser.Geom.Circle;
var Line = Phaser.Geom.Line;
var QuadraticBezier = Phaser.Curves.QuadraticBezier;
var CIRCLE = Phaser.Geom.CIRCLE;
var LINE = Phaser.Geom.LINE;
var Rectangle = Phaser.Geom.Rectangle;
var LineToRectangle = Phaser.Geom.Intersects.LineToRectangle;
var RTree = Phaser.Structs.RTree;
class Enemy extends _CollidesWithObjects__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(config, gridUnit, size, scale) {
        super(config.scene, config.x, config.y, size, scale);
        this.speed = 0;
        this.$chasePlayer = true;
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
        this.shadow = config.scene.add.circle(x, y, size / 3.5, shadowColor, 0.4);
        // const path1 = this.getLine(that.point, )
        const path1 = new Phaser.Curves.Path(x, y).circleTo(100);
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
    exterminate(player, crates) {
        const { point, graphics, dp } = this;
        const body = this.body;
        let target;
        const line = this.getLine(point, player);
        // const { add } = this as unknown as Sce;
        const tree = new RTree();
        crates.children.iterate((crate) => {
            const { left, right, top, bottom } = crate.getBounds();
            //  Insert our entry into the RTree:
            tree.insert({ left, right, top, bottom, crate });
        });
        let path;
        crates.children.iterate((crate) => {
            const { body: crateBody } = crate;
            const rect = new Rectangle(crate.x - crateBody.width / 2, crate.y - crateBody.height / 2, crateBody.width, crateBody.height);
            const prectSize = crateBody.width * 2;
            const pathRect = new Rectangle(crate.x - prectSize / 2, crate.y - prectSize / 2, prectSize, prectSize);
            const bbox = {
                minX: crate.x - prectSize / 2,
                minY: crate.y - prectSize / 2,
                maxX: crate.x + prectSize,
                maxY: crate.y + prectSize,
            };
            if (LineToRectangle(line, rect)) {
                const result = tree.search(bbox).filter(({ crate: res }) => res !== crate);
                const useCrate = crate; // result.length > 0 ? result[0].crate : crate;
                this.collisionRect = useCrate.getBounds();
                // pathRect.setPosition(useCrate.x, useCrate.y);
                const useRect = new Rectangle(useCrate.x - prectSize / 2, useCrate.y - prectSize / 2, prectSize, prectSize);
                // const path = pathRect.getPoints(4);
                path = this.getSide(crate, pathRect);
            }
            else {
                // this.seek(player);
            }
        });
        const predict = body.velocity.clone();
        predict.normalize();
        predict.scale(this.gridUnit);
        predict.add(point);
        if (!path) {
            path = this.getLine(point, player);
        }
        this.follow(path, predict);
        body.velocity.add(this.acceleration);
        body.velocity.limit(this.speed);
        //
        // const enemyVelocity = new Vector2(target.x - point.x , target.y  - point.y).normalize();
        // const xSpeed = this.blockedDirection.left || this.blockedDirection.right ? 0 : this.speed;
        // const ySpeed = this.blockedDirection.up || this.blockedDirection.down ? 0 : this.speed;
        //
        // if (this.pushedCrate) {
        //     this.resetBlockedDirections(this.pushedCrate);
        // }
        // // body.setVelocity(this.seek(target));
        // body.setVelocity(enemyVelocity.x * xSpeed, enemyVelocity.y * ySpeed);
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
        const curve = new QuadraticBezier(browStart, browmiddle, browEnd);
        unubscuredShapes.push({ type: -2, shape: curve, color: handColor });
        this.drawShapes(unubscuredShapes);
        graphics.lineStyle(0, 0);
    }
    pushCrateImpl(direction, crate) {
        this.setBlockedDirection(direction);
        const body = this.body;
        const dir = _helpers__WEBPACK_IMPORTED_MODULE_3__["Direction"][direction];
        switch (dir) {
            case _helpers__WEBPACK_IMPORTED_MODULE_3__["Direction"].up:
            case _helpers__WEBPACK_IMPORTED_MODULE_3__["Direction"].down:
                body.setVelocityY(0);
                break;
            case _helpers__WEBPACK_IMPORTED_MODULE_3__["Direction"].left:
            case _helpers__WEBPACK_IMPORTED_MODULE_3__["Direction"].right:
                body.setVelocityX(0);
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
    getNormalPoint(p, a, b) {
        // PVector that points from a to p
        const ap = a.clone();
        ap.subtract(p);
        // PVector that points from a to b
        const ab = a.clone();
        ab.subtract(b);
        // Using the dot product for scalar projection
        ab.normalize();
        ab.scale(ap.dot(ab));
        // Finding the normal point along the line segment
        const res = a.clone();
        res.add(ab);
        return res;
    }
    follow(p, predictLoc) {
        // Find the normal point along the path.
        const a = p.getPointA();
        const b = p.getPointB();
        this.pathLine = p;
        const normalPoint = this.getNormalPoint(predictLoc, a, b);
        // Move a little further along the path and set a target.
        const dir = b.subtract(a);
        dir.normalize();
        dir.scale(this.gridUnit * 25);
        const target = normalPoint.add(dir);
        // If we are off the path, seek that target in order to stay on the path.
        const distance = normalPoint.distance(predictLoc);
        if (distance > this.gridUnit * 10) {
            this.collisionPoint = target;
            this.seek(target);
        }
    }
    seek(target) {
        const { point } = this;
        const desired = target.clone();
        desired.subtract(point);
        desired.normalize();
        const maxSpeed = new Vector2(this.speed, this.speed);
        // // Calculating the desired velocity to target at max speed
        desired.multiply(maxSpeed);
        // Reynolds’s formula for steering force
        const body = this.body;
        const steer = desired.clone();
        steer.subtract(body.velocity);
        steer.limit(0.3);
        this.acceleration.add(steer);
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
/*! exports provided: Direction, getGameWidth, getGameHeight, collidesOnAxes, Collision4Direction, impassable, blockedInDirection, reachedBound, lineIntersect, addProperty, gcd, pyt, point2Vec, calculateCircleCenter, setPosition, CreateShape, getArcCurve, getArcShape, unblockBut, getRandomInt */
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





const gameConfig = {
    title: 'Sample',
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
        global: [
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
        this.load.image('man', 'assets/character.png');
        this.load.image('prison', 'assets/prison.svg');
        this.load.image('rocket', 'assets/rocket.svg');
        this.load.image('tile', 'assets/parkay-floor.svg');
        this.load.image('stars', 'assets/stars.svg');
        this.load.image('flower', 'assets/buttercup_flower.svg');
        // this.load.image('enemy', 'assets/robots.svg');
        this.load.spritesheet('enemy', 'assets/robots.svg', { frameWidth: 500, frameHeight: 505 });
        this.load.spritesheet('crates', 'assets/Crates.svg', { frameWidth: 105, frameHeight: 105 });
        this.anims.create({
            key: 'face',
            frames: [{ key: 'enemy', frame: 1 }],
            frameRate: -1,
        });
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
        this.prison = new Prison(this.physics.scene, centerX, bottom, 'prison');
        const quarterCrate = this.gridUnit * 2.6;
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
        // const cratesCollider = this.physics.add.collider(this.enemy, this.crates);
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
        this.crates.children.iterate((crate, idx) => {
            placeCrate(crate, this.crates);
            this.fallingCrates.push(crate);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVvYmplY3RzL0NvbGxpZGVzV2l0aE9iamVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVvYmplY3RzL0NyYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lb2JqZWN0cy9DcmF0ZUZhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVvYmplY3RzL0VuZW15LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lb2JqZWN0cy9QZXJzcGVjdGl2ZU1peGluLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lb2JqZWN0cy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVvYmplY3RzL1ByaXNvbkZhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVvYmplY3RzL1NwaGVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZW9iamVjdHMvV2FsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3Qtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLW1lbnUtc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxr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RUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFH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LEdBQUcsUUFBUSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDckMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDL0YsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDcEcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDL0YsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDcEcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDbEYsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUVuSyxNQUFNLElBQUksR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUMsQ0FBQztRQUN0SCxNQUFNLElBQUksR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUMsQ0FBQztRQUN0SCxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUUsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakUsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLE1BQU0sQ0FBRSxXQUFXLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsSixJQUFJLEtBQUssRUFBRTtZQUNQLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7UUFDRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDMUIsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBRXZGLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLDBEQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRTtZQUNuRixNQUFNLEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekMsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDL0QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxRQUFRLEdBQUcsMERBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsUUFBUSxHQUFHLDBEQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBRUQsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQzNJLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUMzSSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4RCxNQUFNLElBQUksR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsRUFBQyxDQUFDO1FBQzdGLE1BQU0sV0FBVyxHQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFDLENBQUM7UUFDakcsTUFBTSxJQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFHLEtBQUssRUFBRSxRQUFR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QUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLE1BQU0sR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN2Qyx5REFBeUQ7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLDZEQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLDhEQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLDZEQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsOERBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2SixNQUFNLFNBQVMsR0FBRyxDQUFDLElBQWlDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNySSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixNQUFNLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUU5RixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5SSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsTUFBTSxTQUFTLEdBQUksNkVBQWlCLENBQUMsc0VBQVMsQ0FBQywwREFBSyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLE1BQU0sR0FBSSw2RUFBaUIsQ0FBQyx1RUFBVSxDQUFDLDBEQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sU0FBUyxHQUFHLDZFQUFpQixDQUFDLDBEQUFLLENBQUMsQ0FBQztRQUUzQyxNQUFNLFVBQVUsR0FBRyw2RUFBaUIsQ0FBQywyREFBTSxDQUFDLENBQUM7UUFFN0MsTUFBTSxXQUFXLEdBQUc7WUFDbEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsTUFBTSxFQUFFLElBQUk7WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLE1BQU0sRUFBRSxDQUFDO1lBQ1QsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsRUFBQztZQUN6RCxrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLEdBQUcsRUFBRSxRQUFRO1NBQ2QsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4RSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUV6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBRSxDQUFDO1FBRTVDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsTUFBTSxRQUFRLEdBQUcsNkVBQWlCLENBQUMseURBQUksQ0FBQyxDQUFDO1FBRXpDLGtFQUFrRTtRQUNsRSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDM0IsTUFBTSxJQUFJLEdBQUcsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUM5QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDaEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN6QixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRyxLQUFLLEVBQUUsSUFBSSxFQUFFLFlBQVksR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxvRUFBbUIsQ0FBQyxrREFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEosTUFBTSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRyxLQUFLLEVBQUUsSUFBSSxFQUFFLFlBQVksR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxvRUFBbUIsQ0FBQyxrREFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEosTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxvRUFBbUIsQ0FBQyxrREFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUosTUFBTSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxvRUFBbUIsQ0FBQyxrREFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUosTUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN6RCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTyxFQUFFLEVBQUU7WUFDeEIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFFO1FBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDSCw4Q0FBOEM7UUFDOUMsdUlBQXVJO1FBQ3ZJLHNEQUFzRDtRQUN0RCxFQUFFO1FBQ0YsMkJBQTJCO1FBQzNCLElBQUk7UUFFSixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLFlBQVksR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxZQUFZLEdBQUcsQ0FBQyxFQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxZQUFZLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkksYUFBYTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFGLGFBQWE7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEYsYUFBYTtRQUNiLDZFQUE2RTtRQUM3RSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRyxhQUFhO1FBQ2IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsYUFBYTtRQUNiLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixTQUFTLFVBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTTtZQUMvQixNQUFNLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLE1BQU0sRUFBRSxHQUFHLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLEVBQUUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsK0JBQStCO1lBQy9CLDRDQUE0QztZQUM1QyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdkQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFO29CQUNsQixNQUFNLEdBQUcsR0FBRywwREFBUyxDQUFDLElBQWUsQ0FBQyxDQUFDO29CQUN2QyxNQUFNLFFBQVEsR0FBRywwREFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztvQkFDOUIsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRTt3QkFDckcsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztxQkFDM0I7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDMUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBYyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEVBQUU7WUFDeEUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxJQUFJO1FBRWhCLDBCQUEwQjtRQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDeEIsY0FBYztZQUNkLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksQ0FBQyxZQUFZLEtBQUssQ0FBQztZQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLElBQUksQ0FBQztZQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztRQUV6RCxNQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRXRCLENBQUM7SUFDTyx3QkFBd0IsQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUMxQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQzVGLElBQUksSUFBSSxFQUFFO2dCQUNSLGFBQWE7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUMxQjtpQkFBTTtnQkFDTCxhQUFhO2dCQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO29CQUM1QyxxQkFBcUI7b0JBQ3JCLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2pELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTyxPQUFPLENBQUMsTUFBZSxLQUFLO1FBQ2xDLElBQUksQ0FBQyxHQUFHO2FBQ0gsSUFBSSxDQUFFLDZEQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLDhEQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7YUFDdEgsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ08sY0FBYztRQUNwQixZQUFZO1FBQ1osTUFBTSxhQUFhLEdBQVksRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFFMUMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBRW5CLE1BQU0sU0FBUyxHQUE2QyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDdkgsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBVyxFQUFFLEVBQUUsQ0FBQywrREFBYyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7aUJBQy9GLElBQUksQ0FBQyxDQUFDLENBQVEsRUFBRSxDQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztZQUMvRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFFdEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNuQyxJQUFJLG1FQUFrQixDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsRUFBRTtvQkFDM0UsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDM0I7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksNkRBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYTthQUNiLE1BQU0sQ0FBRSxDQUFFLEtBQUssRUFBRyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFFLEtBQUssQ0FBRSxDQUFFO2FBQ3ZELE1BQU0sQ0FBRSxDQUFFLEtBQUssRUFBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBRSxLQUFLLENBQUUsQ0FBRTthQUM1RCxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNqQixJQUFJLEtBQUssWUFBWSwwREFBSyxFQUFFO2dCQUMxQixLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNoQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNwQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBQ08sUUFBUTtRQUNkLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsZ0ZBQWdGO1FBQ2hGLG9DQUFvQztRQUNwQyxvQkFBb0I7UUFDcEIsSUFBSTtRQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBRW5ELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7QUNuUkQ7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDVDtBQUNBO0FBRTFCO0lBQ2IscURBQVM7SUFDVCw4REFBYTtJQUNiLHFEQUFTO0NBQ1YsRUFBQzs7Ozs7Ozs7Ozs7OztBQ05GO0FBQUE7QUFBQSxNQUFNLFdBQVcsR0FBdUM7SUFDdEQsTUFBTSxFQUFFLEtBQUs7SUFDYixPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSxVQUFVO0NBQ2hCLENBQUM7QUFFRjs7R0FFRztBQUNJLE1BQU0sYUFBYyxTQUFRLE1BQU0sQ0FBQyxLQUFLO0lBQzdDO1FBQ0UsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxNQUFNO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsK0lBQStJO1FBRS9JLHVEQUF1RDtRQUN2RCw4QkFBOEI7UUFDOUIsTUFBTTtRQUVOLDRGQUE0RjtRQUU1RixvRkFBb0Y7SUFDdEYsQ0FBQztDQUNGIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IFBoeXNpY3MsIFR5cGVzLCBHYW1lT2JqZWN0cyB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgQ3JhdGUgZnJvbSAnLi9DcmF0ZSc7XG5pbXBvcnQgQ29udGFpbmVyTGl0ZSBmcm9tICdwaGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvY29udGFpbmVybGl0ZSc7XG5pbXBvcnQge1BlcnNwZWN0aXZlTWl4aW5UeXBlfSBmcm9tICcuL1BlcnNwZWN0aXZlTWl4aW4nO1xuaW1wb3J0IENJUkNMRSA9IFBoYXNlci5HZW9tLkNJUkNMRTtcbmltcG9ydCBFTExJUFNFID0gUGhhc2VyLkdlb20uRUxMSVBTRTtcbmltcG9ydCB7RGlyZWN0aW9uLCBnZXRBcmNTaGFwZSwgbGluZUludGVyc2VjdCwgcG9pbnQyVmVjLCBweXQsIHVuYmxvY2tCdXR9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IE5vcm1hbGl6ZSA9IFBoYXNlci5NYXRoLkFuZ2xlLk5vcm1hbGl6ZTtcbmltcG9ydCBCZXR3ZWVuUG9pbnRzID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2VlblBvaW50cztcbmltcG9ydCBHZXRDaXJjbGVUb0NpcmNsZSA9IFBoYXNlci5HZW9tLkludGVyc2VjdHMuR2V0Q2lyY2xlVG9DaXJjbGU7XG5pbXBvcnQgTGluZSA9IFBoYXNlci5HZW9tLkxpbmU7XG5pbXBvcnQgVmVjdG9yMiA9IFBoYXNlci5NYXRoLlZlY3RvcjI7XG5pbXBvcnQgQ2lyY2xlID0gUGhhc2VyLkdlb20uQ2lyY2xlO1xuaW1wb3J0IExJTkUgPSBQaGFzZXIuR2VvbS5MSU5FO1xuaW1wb3J0IFBhdGggPSBQaGFzZXIuQ3VydmVzLlBhdGg7XG5pbXBvcnQgUXVhZHJhdGljQmV6aWVyID0gUGhhc2VyLkN1cnZlcy5RdWFkcmF0aWNCZXppZXI7XG5pbXBvcnQgUmFkVG9EZWcgPSBQaGFzZXIuTWF0aC5SYWRUb0RlZztcbmltcG9ydCBEZWdUb1JhZCA9IFBoYXNlci5NYXRoLkRlZ1RvUmFkO1xuaW1wb3J0IFNwaGVyZUNsYXNzIGZyb20gJy4vU3BoZXJlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlkZXNXaXRoT2JqZWN0cyBleHRlbmRzIENvbnRhaW5lckxpdGUge1xuICAgIHByb3RlY3RlZCBkaXN0YW5jZVRvQm94Q29ybmVyOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIHB1c2hlZENyYXRlOiBDcmF0ZSB8IG51bGw7XG4gICAgcHJvdGVjdGVkIGdyaWRVbml0OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGJsb2NrZWREaXJlY3Rpb246IFR5cGVzLlBoeXNpY3MuQXJjYWRlLkFyY2FkZUJvZHlDb2xsaXNpb24gPSB7IHVwOiBmYWxzZSwgZG93bjogZmFsc2UsIHJpZ2h0OiBmYWxzZSwgbGVmdDogZmFsc2UsIG5vbmU6IHRydWUgfTtcbiAgICBwcm90ZWN0ZWQgbGFzdERpcmVjdGlvbjogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBoZWFkOiBTcGhlcmVDbGFzcztcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2l6ZTogbnVtYmVyLCBzY2FsZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCBzaXplLCBzaXplKTtcbiAgICAgICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xuICAgICAgICBzY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5sYXN0RGlyZWN0aW9uID0gTWF0aC5QSSAvIDI7XG4gICAgfVxuICAgIHB1YmxpYyBpc0Jsb2NrZWREaXJlY3Rpb24oZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tlZERpcmVjdGlvbltkaXJlY3Rpb25dO1xuICAgIH1cbiAgICBwdWJsaWMgcHVzaENyYXRlID0gKGRpcjogc3RyaW5nLCBjcmF0ZTogQ3JhdGUpID0+IGNvbnNvbGUuZXJyb3IoJ25vdCBpbXBsZW1lbnRlZCEnKTtcbiAgICBwcm90ZWN0ZWQgcmVzZXRCbG9ja2VkRGlyZWN0aW9ucyA9IChjcmF0ZSkgPT4ge1xuICAgICAgICB1bmJsb2NrQnV0KERpcmVjdGlvblt0aGlzLmZhY2luZ1NpZGUoY3JhdGUpXSwgdGhpcy5ibG9ja2VkRGlyZWN0aW9uKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGZhY2luZ1NpZGUoY3JhdGU6IENyYXRlKSB7XG4gICAgICAgIGNvbnN0IHsgcG9pbnQgfSA9IHRoaXMgYXMgdW5rbm93biBhcyBQZXJzcGVjdGl2ZU1peGluVHlwZTtcbiAgICAgICAgY29uc3QgYW5nbGUgPSBCZXR3ZWVuUG9pbnRzKGNyYXRlLCBwb2ludCk7XG4gICAgICAgIGlmIChhbmdsZSA+IDAuNzggJiYgYW5nbGUgPCAyLjI5ICkge1xuICAgICAgICAgICAgcmV0dXJuIERpcmVjdGlvbi51cDtcbiAgICAgICAgfSBlbHNlIGlmIChhbmdsZSA+IC0yLjI5ICYmIGFuZ2xlIDwgLTAuNzggKSB7XG4gICAgICAgICAgIHJldHVybiBEaXJlY3Rpb24uZG93bjtcbiAgICAgICAgfSBlbHNlIGlmIChhbmdsZSA+IC0wLjc5ICYmIGFuZ2xlIDwgMC43OCApIHtcbiAgICAgICAgICAgIHJldHVybiBEaXJlY3Rpb24ubGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgcmV0dXJuIERpcmVjdGlvbi5yaWdodDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgaGFuZGxlQ3JhdGVDb2xsaXNvbiA9IChjcmF0ZTogQ3JhdGUpID0+IHtcbiAgICAgICB0aGlzLnB1c2hDcmF0ZShEaXJlY3Rpb25bdGhpcy5mYWNpbmdTaWRlKGNyYXRlKV0sIGNyYXRlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldFRyZXBhem9pZChjaXJjbGUxLCBjaXJjbGUyLCBjb2xvciwgcGVyY2VudCwgaW50ZXJzZWN0UG9pbnQ6IFZlY3RvcjIgfCBudWxsID0gbnVsbCwgc3Ryb2tlQ29sb3IgPSAtMSkge1xuICAgICAgICBjb25zdCB7IGdyYXBoaWNzLCBwb2ludCwgZHAgfSA9IHRoaXMgYXMgdW5rbm93biBhcyBQZXJzcGVjdGl2ZU1peGluVHlwZTtcbiAgICAgICAgbGV0IGNyb3NzO1xuICAgICAgICBpZiAoIWludGVyc2VjdFBvaW50KSB7XG4gICAgICAgICAgICBjb25zdCBleHQgPSBuZXcgTGluZShjaXJjbGUxLngsIGNpcmNsZTEueSwgY2lyY2xlMi54LCBjaXJjbGUyLnkpO1xuICAgICAgICAgICAgY29uc3QgY3Jvc3NiID0gUGhhc2VyLkdlb20uTGluZS5FeHRlbmQoZXh0LCAwLCB0aGlzLmdyaWRVbml0ICogNDApO1xuICAgICAgICAgICAgY29uc3QgY3AgPSBwb2ludDJWZWMoY2lyY2xlMS5nZXRQb2ludCgwKSk7XG4gICAgICAgICAgICBjb25zdCBjcDIgPSBwb2ludDJWZWMoY2lyY2xlMi5nZXRQb2ludCgwKSk7XG4gICAgICAgICAgICBjb25zdCBjcm9zc2EgPSBQaGFzZXIuR2VvbS5MaW5lLkV4dGVuZChuZXcgTGluZShjcC54LCBjcC55LCBjcDIueCwgY3AyLnkpLCB0aGlzLmdyaWRVbml0ICogNDApO1xuICAgICAgICAgICAgY3Jvc3MgPSBsaW5lSW50ZXJzZWN0KGNyb3NzYi5nZXRQb2ludEEoKSwgY3Jvc3NiLmdldFBvaW50QigpLCBjcm9zc2EuZ2V0UG9pbnRBKCksIGNyb3NzYS5nZXRQb2ludEIoKSk7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMywgMHgwMDAsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3Jvc3MgPSBpbnRlcnNlY3RQb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRwID0gdGhpcy5nZXRFeHRlcm5hbFRhbmdlbnQoY2lyY2xlMSwgY2lyY2xlMiwgY3Jvc3MpO1xuICAgICAgICBpZiAodHAgJiYgY3Jvc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHtwMSwgcDIsIHAzLCBwNH0gPSB0cDtcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gbmV3IFBhdGgoKTtcbiAgICAgICAgICAgIHNoYXBlLm1vdmVUbyhwMSk7XG4gICAgICAgICAgICBjb25zdCBtaSA9IGNyb3NzLmNsb25lKCkubGVycChwb2ludCwgcGVyY2VudCk7XG4gICAgICAgICAgICBjb25zdCBjdXJ2ZSA9IG5ldyBRdWFkcmF0aWNCZXppZXIocDEsIG1pLCBwMik7XG4gICAgICAgICAgICBzaGFwZS5hZGQoY3VydmUpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKHAyKTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbyhwMyk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8ocDQpO1xuXG4gICAgICAgICAgICBzaGFwZS5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHt0eXBlOiAtMywgc2hhcGUsIGNvbG9yLCBzdHJva2VDb2xvciwgcG9pbnRzOiB7cDEsIHAyLCBwMywgcDR9fTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgZHJhd1NoYXBlcyhpdGVtcykge1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKHt0eXBlLCBzaGFwZSwgY29sb3IgPSAtMSwgc3Ryb2tlQ29sb3IgPSAtMSwgbGluZVdpZHRoID0gdGhpcy5ncmlkVW5pdCAvIDR9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7Z3JhcGhpY3N9ID0gdGhpcyBhcyB1bmtub3duIGFzIFBlcnNwZWN0aXZlTWl4aW5UeXBlO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IENJUkNMRSkge1xuICAgICAgICAgICAgICAgIGlmIChjb2xvciAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKGNvbG9yLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENpcmNsZVNoYXBlKHNoYXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZUNvbG9yICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5saW5lU3R5bGUobGluZVdpZHRoLCBzdHJva2VDb2xvciwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZUNpcmNsZVNoYXBlKHNoYXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IEVMTElQU0UpIHtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsU3R5bGUoY29sb3IsIDEpO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxFbGxpcHNlU2hhcGUoc2hhcGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBMSU5FKSB7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKGxpbmVXaWR0aCwgY29sb3IsIDEpO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZUxpbmVTaGFwZShzaGFwZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IC0yKSB7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaXMuZ3JpZFVuaXQgLyA0LCBjb2xvciwgMSk7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlUG9pbnRzKHNoYXBlLmdldFBvaW50cygpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7eCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZX0gPSBzaGFwZTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5saW5lU3R5bGUobGluZVdpZHRoLCBzdHJva2VDb2xvciwgMSk7XG5cbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsU3R5bGUoY29sb3IsIDEpO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsUGF0aCgpO1xuICAgICAgICAgICAgICAgIGlmIChzdHJva2VDb2xvciAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlUGF0aCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKGNvbG9yLCAxKTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpcy5ncmlkVW5pdCAvIDQsIHN0cm9rZUNvbG9yLCAxKTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsUG9pbnRzKHNoYXBlLmdldFBvaW50cygpKTtcbiAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlQ29sb3IgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZVBvaW50cyhzaGFwZS5nZXRQb2ludHMoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaXRlbXM/LnNoYXBlPy5kZXN0cm95KCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRCb2R5QW5nbGUoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVPYmplY3QgPSAodGhpcyBhcyB1bmtub3duIGFzIEdhbWVPYmplY3RzLkdhbWVPYmplY3QpO1xuICAgICAgICBjb25zdCBib2R5ID0gKGdhbWVPYmplY3QuYm9keSBhcyBQaHlzaWNzLkFyY2FkZS5Cb2R5KTtcbiAgICAgICAgaWYgKGJvZHkuc3BlZWQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3REaXJlY3Rpb24gPSBib2R5LmFuZ2xlO1xuICAgICAgICAgICAgcmV0dXJuIGJvZHkuYW5nbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXN0RGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRFeHRlcm5hbFRhbmdlbnQoY2lyY2xlMSwgY2lyY2xlMiwgY3Jvc3NQb2ludCkge1xuICAgICAgICBpZiAoY2lyY2xlMSAmJiBjaXJjbGUyICYmIGNyb3NzUG9pbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZ3JhcGhpY3MgfSA9IHRoaXMgYXMgdW5rbm93biBhcyBQZXJzcGVjdGl2ZU1peGluVHlwZTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxTdHlsZSgweGI0ZDQ1NSwgMSk7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoNCwgMHgwMDAsIDEpO1xuICAgICAgICAgICAgY29uc3QgZ2V0QW5nbGUgPSAoYykgPT4gTm9ybWFsaXplKEJldHdlZW5Qb2ludHMoYywgY3Jvc3NQb2ludCkpIC8gKDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlMSA9IChnZXRBbmdsZShjaXJjbGUxKSArIDAuMjUpICUgMTtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlMiA9IChhbmdsZTEgKyAwLjUpICUgMTtcblxuICAgICAgICAgICAgY29uc3QgYW5nbGUzID0gKGdldEFuZ2xlKGNpcmNsZTIpICsgMC4yNSkgJSAxO1xuICAgICAgICAgICAgY29uc3QgYW5nbGU0ID0gKGFuZ2xlMyArIDAuNSkgJSAxO1xuICAgICAgICAgICAgY29uc3QgcHAyID0gY2lyY2xlMS5nZXRQb2ludChhbmdsZTIpO1xuICAgICAgICAgICAgY29uc3QgcHA0ID0gY2lyY2xlMi5nZXRQb2ludChhbmdsZTQpO1xuICAgICAgICAgICAgY29uc3QgbGluZUEgPSBQaGFzZXIuR2VvbS5MaW5lLkV4dGVuZCh0aGlzLmdldExpbmUocHAyLCBwcDQpLCBjaXJjbGUxLnJhZGl1cywgY2lyY2xlMS5yYWRpdXMpO1xuXG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3RQb2ludCA9IGxpbmVJbnRlcnNlY3QobGluZUEuZ2V0UG9pbnRBKCksIGxpbmVBLmdldFBvaW50QigpLCBjaXJjbGUxLCBjcm9zc1BvaW50KSBhcyBWZWN0b3IyO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb25cbiAgICAgICAgICAgIGxldCBwMSwgcDIsIHAzLCBwNCwgaW50ZXJzZWN0cztcbiAgICAgICAgICAgIGlmIChpbnRlcnNlY3RQb2ludCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbGZwb2ludCA9IHBvaW50MlZlYyhjaXJjbGUyKS5sZXJwKGludGVyc2VjdFBvaW50LCAwLjUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lYXN1cmVDaXJjbGUgPSBuZXcgQ2lyY2xlKGhhbGZwb2ludC54LCBoYWxmcG9pbnQueSwgaGFsZnBvaW50LmRpc3RhbmNlKGludGVyc2VjdFBvaW50KSk7XG4gICAgICAgICAgICAgICAgaW50ZXJzZWN0cyA9IEdldENpcmNsZVRvQ2lyY2xlKG1lYXN1cmVDaXJjbGUsIGNpcmNsZTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGludGVyc2VjdHM/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwMSA9IGludGVyc2VjdHNbMF07XG4gICAgICAgICAgICAgICAgcDIgPSBpbnRlcnNlY3RzWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVCID0gbmV3IExpbmUocDEueCwgcDEueSwgaW50ZXJzZWN0UG9pbnQueCwgaW50ZXJzZWN0UG9pbnQueSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZUMgPSBuZXcgTGluZShwMi54LCBwMi55LCBpbnRlcnNlY3RQb2ludC54LCBpbnRlcnNlY3RQb2ludC55KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gcG9pbnQyVmVjKGNpcmNsZTEpLmRpc3RhbmNlKGNpcmNsZTIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVEID0gUGhhc2VyLkdlb20uTGluZS5FeHRlbmQobGluZUIsIGQsIDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVFID0gUGhhc2VyLkdlb20uTGluZS5FeHRlbmQobGluZUMsIGQsIDApO1xuICAgICAgICAgICAgICAgIHA0ID0gbGluZUQuZ2V0UG9pbnRBKCk7XG4gICAgICAgICAgICAgICAgcDMgPSBsaW5lRS5nZXRQb2ludEEoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0ge3AxLCBwMiwgcDMsIHA0fTtcbiAgICAgICAgICAgIHJldHVybiBwMSAmJiBwMiAmJiBwMyAmJiBwNCA/IHJlc3VsdCA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldExpbmUocDEsIHAyKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBuZXcgTGluZShwMS54LCBwMS55LCBwMi54LCBwMi55KTtcbiAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldERvbWVTaGFwZShwb3NpdGlvbiwgcmFkaXVzKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUsIHBpMjogYWxsIH0gPSB0aGlzLmhlYWQ7XG4gICAgICAgIGNvbnN0IGJldHdlZW4gPSBOb3JtYWxpemUoQmV0d2VlblBvaW50cyhwb3NpdGlvbiwgc2hhcGUpKTtcbiAgICAgICAgY29uc3QgbWlkUmFkID0gYmV0d2VlbiAvIGFsbDtcbiAgICAgICAgY29uc3QgZGlzdCA9IChwb3NpdGlvbi5kaXN0YW5jZShzaGFwZSkgLyAoc2hhcGUucmFkaXVzKSAtIDAuNSkgKiAyO1xuICAgICAgICBjb25zdCBtaWRQb2ludCA9IHBvaW50MlZlYyhzaGFwZS5nZXRQb2ludChtaWRSYWQpKS5sZXJwKHNoYXBlLCBkaXN0KTtcbiAgICAgICAgY29uc3QgbCA9IG5ldyBMaW5lKG1pZFBvaW50LngsIG1pZFBvaW50LnksIHNoYXBlLngsIHNoYXBlLnkpO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHNoYXBlLnJhZGl1cyAqICgxIC0gZGlzdCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBweXQoZGlzdGFuY2UsIHNoYXBlLnJhZGl1cyk7XG5cbiAgICAgICAgY29uc3QgYW5nID0gUmFkVG9EZWcoYmV0d2VlbikgKyA5MCAlIDM2MDtcbiAgICAgICAgTGluZS5TZXRUb0FuZ2xlKGwsIG1pZFBvaW50LngsIG1pZFBvaW50LnksIERlZ1RvUmFkKGFuZyksIHNpemUpO1xuXG4gICAgICAgIGNvbnN0IGNpcmNBbmcgPSAoYmV0d2VlbiAvIGFsbCArIDAuMjUpICUgMTtcbiAgICAgICAgY29uc3QgcG9pbnRCID0gbC5nZXRQb2ludEIoKTtcbiAgICAgICAgY29uc3Qgc3RhcnRBbmdsZSA9IE5vcm1hbGl6ZShCZXR3ZWVuUG9pbnRzKHNoYXBlLCBwb2ludEIpKTtcbiAgICAgICAgY29uc3QgY2lyY0FuZzIgPSAoY2lyY0FuZyArIDAuNSkgJSAxO1xuICAgICAgICBjb25zdCByZWZsZWN0UG9pbnQxID0gc2hhcGUuZ2V0UG9pbnQoY2lyY0FuZyk7XG4gICAgICAgIGNvbnN0IHJlZmxlY3RQb2ludDIgPSBzaGFwZS5nZXRQb2ludChjaXJjQW5nMik7XG4gICAgICAgIGNvbnN0IHJlZmxlY3RpbmdMaW5lID0gbmV3IExpbmUocmVmbGVjdFBvaW50MS54LCByZWZsZWN0UG9pbnQxLnksIHJlZmxlY3RQb2ludDIueCwgcmVmbGVjdFBvaW50Mi55KTtcbiAgICAgICAgY29uc3QgdG9DZW50ZXIgPSBuZXcgTGluZShwb2ludEIueCwgcG9pbnRCLnksIHNoYXBlLngsIHNoYXBlLnkpO1xuICAgICAgICBjb25zdCBlbmRBbmdsZSA9IE5vcm1hbGl6ZShMaW5lLlJlZmxlY3RBbmdsZSggdG9DZW50ZXIsIHJlZmxlY3RpbmdMaW5lKSk7XG4gICAgICAgIHJldHVybiB7IHg6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2U6IGZhbHNlICB9O1xuICAgIH1cbiAgfVxuIiwiaW1wb3J0IHsgUGh5c2ljcywgTWF0aCBhcyBQTWF0aCwgU2NlbmUgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IEVuZW15IGZyb20gJy4vRW5lbXknO1xuaW1wb3J0IHtQZXJzcGVjdGl2ZU1peGluVHlwZX0gZnJvbSAnLi9QZXJzcGVjdGl2ZU1peGluJztcbmltcG9ydCB7RGlyZWN0aW9ufSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBWZWN0b3IyID0gUGhhc2VyLk1hdGguVmVjdG9yMjtcbmltcG9ydCBHYW1lT2JqZWN0ID0gUGhhc2VyLkdhbWVPYmplY3RzLkdhbWVPYmplY3Q7XG5cbmNsYXNzIENyYXRlIGV4dGVuZHMgUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcbiAgICBnZXQgZW5lbXkoKTogRW5lbXkgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVuZW15O1xuICAgIH1cbiAgICBzZXQgZW5lbXkodmFsdWU6IEVuZW15IHwgbnVsbCkge1xuICAgICAgICB0aGlzLiRlbmVteSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgcGxheWVyKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy4kcGxheWVyO1xuICAgIH1cbiAgICBzZXQgcGxheWVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuJHBsYXllciA9IHZhbHVlO1xuXG4gICAgfVxuICAgIHByaXZhdGUgJHBsYXllcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgJGVuZW15OiBFbmVteSB8IG51bGwgPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSwgeDogbnVtYmVyICwgeTogbnVtYmVyLCBuYW1lKSB7XG4gICAgICAgc3VwZXIoc2NlbmUsIHgsIHksIG5hbWUpO1xuXG4gICAgICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xuICAgICAgIHNjZW5lLnBoeXNpY3MuYWRkLmV4aXN0aW5nKHRoaXMpO1xuICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgdGhpcy5zZXRGcmFtZShQTWF0aC5CZXR3ZWVuKDAsIDQpKTtcbiAgICAgICB0aGlzLnNldENvbGxpZGVXb3JsZEJvdW5kcygpO1xuICAgICAgIGNvbnN0IGJvZHkgPSAoKHRoaXMgYXMgdW5rbm93biBhcyBHYW1lT2JqZWN0KS5ib2R5IGFzIFBoeXNpY3MuQXJjYWRlLkJvZHkpO1xuICAgICAgIGJvZHkub25Xb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgdGhpcy5zZXRQdXNoYWJsZShmYWxzZSk7XG4gICAgICAgLy8gYm9keS5zZXRFbmFibGUodHJ1ZSk7XG4gICAgICAgLy8gYm9keS5zZXRCb3VuY2UoMywzKTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgdGhpcy5kcmF3UG9pbnRzID0gdGhpcy5kcmF3RmFjZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyB1bmtub3duIGFzIFBlcnNwZWN0aXZlTWl4aW5UeXBlO1xuICAgICAgICB0aGF0LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIHRoYXQucHJlZHJhdygpO1xuICAgICAgICB0aGF0LmRyYXdJblZpZXcoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyYXRlO1xuIiwiaW1wb3J0IHtDb25zdHJ1Y3Rvcn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IDxUQmFzZSBleHRlbmRzIENvbnN0cnVjdG9yPihCYXNlOiBUQmFzZSkgPT5cbiAgICBjbGFzcyBleHRlbmRzIEJhc2Uge1xuICAgICAgICBwcml2YXRlIGRyYXdGYWNlKHRvcCwgYm90dG9tLCBmbG9vclRvcCwgZmxvb3JCb3R0b20pIHtcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBkcmF3IGEgc2ltcGxlIGNyYXRlICd0ZXh0dXJlJ1xuICAgICAgICAgICAgLy8gYXMgcGhhc2VyIHNlZW1zIHRvIGhhdmUgbG9zdCB0aGUgYWJpbGl0eSB0byBkcmF3IGEgdGV4dHVyZSBvbiB0aGUgZ3JhcGhpY3MgZ2FtZSBvYmplY3QgaW4gMy41eC5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHtncmFwaGljcywgdmFuaXNoUG9pbnQsIHBvaW50LCBncmlkVW5pdH0gPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgbWFnaWNaID0gKDEwMDAgLSB2YW5pc2hQb2ludC5kaXN0YW5jZShwb2ludCkpIC8gMTAwMCArIDE7XG4gICAgICAgICAgICBncmFwaGljcy5zZXREZXB0aChtYWdpY1opO1xuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKDB4OTk2NjMzLCAxKTtcblxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKGdyaWRVbml0IC8gNCwgMHg2NjMzMDAsIDIpO1xuICAgICAgICAgICAgY29uc3QgZGl2aWRlID0gMSAvIDU7XG4gICAgICAgICAgICBjb25zdCB0b3Bib2FyZCA9IHRvcC5jbG9uZSgpLmxlcnAoZmxvb3JUb3AsIGRpdmlkZSkuY2xvbmUoKTtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbWJvYXJkID0gYm90dG9tLmNsb25lKCkubGVycChmbG9vckJvdHRvbSwgZGl2aWRlKS5jbG9uZSgpO1xuICAgICAgICAgICAgY29uc3QgdG9wZmxvb3Jib2FyZCA9IGZsb29yVG9wLmNsb25lKCkubGVycCh0b3AsIGRpdmlkZSkuY2xvbmUoKTtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbWZsb29yYm9hcmQgPSBmbG9vckJvdHRvbS5jbG9uZSgpLmxlcnAoYm90dG9tLCBkaXZpZGUpLmNsb25lKCk7XG4gICAgICAgICAgICBncmFwaGljcy5maWxsUG9pbnRzKFt0b3AsIGJvdHRvbSwgYm90dG9tYm9hcmQsIHRvcGJvYXJkXSwgdHJ1ZSk7XG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2VQYXRoKCk7XG5cbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxQb2ludHMoW3RvcGJvYXJkLCBib3R0b21ib2FyZCwgYm90dG9tZmxvb3Jib2FyZCwgdG9wZmxvb3Jib2FyZF0sIHRydWUpO1xuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlUGF0aCgpO1xuXG4gICAgICAgICAgICBncmFwaGljcy5maWxsUG9pbnRzKFt0b3BmbG9vcmJvYXJkLCBib3R0b21mbG9vcmJvYXJkLCBmbG9vckJvdHRvbSwgZmxvb3JUb3BdLCB0cnVlKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcblxuICAgICAgICAgICAgLy8gZHJhdyA3IHNlbWkgdHJhbnNwYXJhbnQgdmVydGljYWwgd29vZGVuIGJlYW1zIG9uIHRoZSBjZW50ZXIgb2YgdGhlIGNyYXRlXG4gICAgICAgICAgICBsZXQgcHJldlRvcCA9IHRvcGJvYXJkO1xuICAgICAgICAgICAgbGV0IHByZXZDb3JuZXIgPSB0b3BmbG9vcmJvYXJkO1xuICAgICAgICAgICAgY29uc3QgYmVhbXMgPSA3O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYmVhbXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlcnAgPSBpIC8gYmVhbXM7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wc2lkZWJvYXJkID0gdG9wYm9hcmQuY2xvbmUoKS5sZXJwKGJvdHRvbWJvYXJkLCBsZXJwKS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvdHRvbXNpZGVib2FyZCA9IHRvcGZsb29yYm9hcmQuY2xvbmUoKS5sZXJwKGJvdHRvbWZsb29yYm9hcmQsIGxlcnApLmNsb25lKCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgYWxwaGEgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChpICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGFscGhhID0gaSAvIDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsU3R5bGUoMHg2NjMzMDAsIGFscGhhKTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsUG9pbnRzKFtwcmV2VG9wLCBwcmV2Q29ybmVyLCBib3R0b21zaWRlYm9hcmQsIHRvcHNpZGVib2FyZF0sIHRydWUpO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxTdHlsZSgweDk5NjYzMywgMSk7XG4gICAgICAgICAgICAgICAgcHJldlRvcCA9IHRvcHNpZGVib2FyZDtcbiAgICAgICAgICAgICAgICBwcmV2Q29ybmVyID0gYm90dG9tc2lkZWJvYXJkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiIsImltcG9ydCB7UGh5c2ljc30gZnJvbSAncGhhc2VyJztcbmltcG9ydCBDcmF0ZSBmcm9tICcuL0NyYXRlJztcbmltcG9ydCBDb2xsaWRlc1dpdGhPYmplY3RzIGZyb20gJy4vQ29sbGlkZXNXaXRoT2JqZWN0cyc7XG5pbXBvcnQgQ29udGFpbmVyTGl0ZSBmcm9tICdwaGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvY29udGFpbmVybGl0ZSc7XG5pbXBvcnQgUGVyc3BlY3RpdmVPYmplY3QsIHtQZXJzcGVjdGl2ZU1peGluVHlwZX0gZnJvbSAnLi9QZXJzcGVjdGl2ZU1peGluJztcbmltcG9ydCBTcGhlcmVDbGFzcyBmcm9tICcuL1NwaGVyZSc7XG5pbXBvcnQge0RpcmVjdGlvbiwgcG9pbnQyVmVjLCBzZXRQb3NpdGlvbiwgU2hhcGVDb2xsZWN0aW9uSXRlbX0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgQmV0d2VlblBvaW50cyA9IFBoYXNlci5NYXRoLkFuZ2xlLkJldHdlZW5Qb2ludHM7XG5pbXBvcnQgTm9ybWFsaXplID0gUGhhc2VyLk1hdGguQW5nbGUuTm9ybWFsaXplO1xuaW1wb3J0IFZlY3RvcjIgPSBQaGFzZXIuTWF0aC5WZWN0b3IyO1xuaW1wb3J0IENpcmNsZSA9IFBoYXNlci5HZW9tLkNpcmNsZTtcbmltcG9ydCBMaW5lID0gUGhhc2VyLkdlb20uTGluZTtcbmltcG9ydCBRdWFkcmF0aWNCZXppZXIgPSBQaGFzZXIuQ3VydmVzLlF1YWRyYXRpY0JlemllcjtcbmltcG9ydCBDSVJDTEUgPSBQaGFzZXIuR2VvbS5DSVJDTEU7XG5pbXBvcnQgTElORSA9IFBoYXNlci5HZW9tLkxJTkU7XG5pbXBvcnQgR2FtZU9iamVjdCA9IFBoYXNlci5HYW1lT2JqZWN0cy5HYW1lT2JqZWN0O1xuaW1wb3J0IFJlY3RhbmdsZSA9IFBoYXNlci5HZW9tLlJlY3RhbmdsZTtcbmltcG9ydCBMaW5lVG9SZWN0YW5nbGUgPSBQaGFzZXIuR2VvbS5JbnRlcnNlY3RzLkxpbmVUb1JlY3RhbmdsZTtcbmltcG9ydCBQYXRoRm9sbG93ZXIgPSBQaGFzZXIuR2FtZU9iamVjdHMuUGF0aEZvbGxvd2VyO1xuaW1wb3J0IFJUcmVlID0gUGhhc2VyLlN0cnVjdHMuUlRyZWU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IGV4dGVuZHMgQ29sbGlkZXNXaXRoT2JqZWN0cyB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGVlZDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHBsYXllcnNDcmF0ZTogQ3JhdGU7XG4gICAgcHJpdmF0ZSAkY2hhc2VQbGF5ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgYmxhbmtFbmVteTogRW5lbXk7XG4gICAgcHJpdmF0ZSBjZW50ZXI6IENpcmNsZTtcbiAgICBwcml2YXRlIHNoYWRvdzogQ2lyY2xlO1xuICAgIHByaXZhdGUgY29sb3I6IG51bWJlcjtcbiAgICBwcml2YXRlIHNpemU6IG51bWJlcjtcbiAgICBwcml2YXRlIHBhdGhIZWxwZXI6IENpcmNsZTtcbiAgICBwcml2YXRlIGNvbGxpc2lvblBvaW50OiBWZWN0b3IyO1xuICAgIHByaXZhdGUgY29sbGlzaW9uUmVjdDogUmVjdGFuZ2xlO1xuICAgIHByaXZhdGUgcGF0aExpbmU6IExpbmU7XG4gICAgcHJpdmF0ZSBmb2xsb3dlcjogUGF0aEZvbGxvd2VyO1xuICAgIHByaXZhdGUgYWNjZWxlcmF0aW9uOiBWZWN0b3IyO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBncmlkVW5pdDogbnVtYmVyLCBzaXplOiBudW1iZXIsIHNjYWxlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLnNjZW5lLCBjb25maWcueCwgY29uZmlnLnksIHNpemUsIHNjYWxlKTtcbiAgICAgICAgY29uc3Qge3gsIHl9ID0gY29uZmlnO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBDb250YWluZXJMaXRlO1xuICAgICAgICAvLyB0aGF0LmJvZHkuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xuICAgICAgICBjb25zdCBib2R5ID0gKCh0aGlzIGFzIHVua25vd24gYXMgR2FtZU9iamVjdCkuYm9keSBhcyBQaHlzaWNzLkFyY2FkZS5Cb2R5KTtcbiAgICAgICAgYm9keS5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSk7XG4gICAgICAgIC8vIGJvZHkuc2V0RW5hYmxlKHRydWUpO1xuXG4gICAgICAgIC8vIGJvZHkuc2V0Qm91bmNlKDEwLCAxMCk7XG4gICAgICAgIHRoaXMuY29sb3IgPSAwWDBCNjM4MjtcbiAgICAgICAgY29uc3Qgc2hhZG93Q29sb3IgPSAwWDAzMTkyMDtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcblxuICAgICAgICB0aGlzLnNoYWRvdyA9IGNvbmZpZy5zY2VuZS5hZGQuY2lyY2xlKHgsIHksIHNpemUgLyAzLjUsIHNoYWRvd0NvbG9yLCAwLjQpO1xuICAgICAgICAvLyBjb25zdCBwYXRoMSA9IHRoaXMuZ2V0TGluZSh0aGF0LnBvaW50LCApXG4gICAgICAgIGNvbnN0IHBhdGgxID0gbmV3IFBoYXNlci5DdXJ2ZXMuUGF0aCh4LCB5KS5jaXJjbGVUbygxMDApO1xuXG4gICAgICAgIHRoYXQuYWRkKHRoaXMuc2hhZG93KTtcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBuZXcgQ2lyY2xlKHgsIHksIHNpemUgKiAxLjIpO1xuICAgICAgICB0aGlzLnBhdGhIZWxwZXIgPSBuZXcgQ2lyY2xlKHgsIHksIHNpemUpO1xuXG4gICAgICAgIGNvbnN0IFNwaGVyZSA9IFBlcnNwZWN0aXZlT2JqZWN0KFNwaGVyZUNsYXNzKTtcbiAgICAgICAgY29uc3QgcXVhcnRlciA9IHNpemUgKiAyO1xuICAgICAgICB0aGlzLmhlYWQgPSBuZXcgU3BoZXJlKGNvbmZpZy5zY2VuZSwgeCwgeSwgcXVhcnRlciwgcXVhcnRlciwgcXVhcnRlciwgIHRoaXMuY29sb3IpO1xuICAgICAgICB0aGlzLmhlYWQuc2V0RGVwdGgoMik7XG4gICAgICAgIHRoYXQuc2V0U2NhbGUoc2NhbGUsIHNjYWxlKTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IGdyaWRVbml0ICogMjA7XG4gICAgICAgIHRoaXMuZ3JpZFVuaXQgPSBncmlkVW5pdCAvIDEwO1xuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xuICAgICAgICB0aGlzLnB1c2hDcmF0ZSA9IHRoaXMucHVzaENyYXRlSW1wbDtcbiAgICB9XG4gICAgcHVibGljIGdldCBjaGFzZVBsYXllcigpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjaGFzZVBsYXllcjtcbiAgICB9XG4gICAgcHVibGljIHNldCBjaGFzZVBsYXllcih2YWx1ZTogYm9vbGVhbikge1xuICAgICAgdGhpcy4kY2hhc2VQbGF5ZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldEJsb2NrZWREaXJlY3Rpb24oZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuYmxvY2tlZERpcmVjdGlvbltkaXJlY3Rpb25dID0gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIGV4dGVybWluYXRlKHBsYXllcjogVmVjdG9yMiwgY3JhdGVzKSB7XG4gICAgICAgIGNvbnN0IHtwb2ludCwgZ3JhcGhpY3MsIGRwfSA9IHRoaXMgYXMgdW5rbm93biBhcyBQZXJzcGVjdGl2ZU1peGluVHlwZTtcbiAgICAgICAgY29uc3QgYm9keSA9ICgodGhpcyBhcyB1bmtub3duIGFzIEdhbWVPYmplY3QpLmJvZHkgYXMgUGh5c2ljcy5BcmNhZGUuQm9keSk7XG4gICAgICAgIGxldCB0YXJnZXQ7XG4gICAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLmdldExpbmUocG9pbnQsIHBsYXllcik7XG4gICAgICAgIC8vIGNvbnN0IHsgYWRkIH0gPSB0aGlzIGFzIHVua25vd24gYXMgU2NlO1xuICAgICAgICBjb25zdCB0cmVlID0gbmV3IFJUcmVlKCk7XG5cbiAgICAgICAgY3JhdGVzLmNoaWxkcmVuLml0ZXJhdGUoKGNyYXRlOiBDcmF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2xlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbX0gPSBjcmF0ZS5nZXRCb3VuZHMoKTtcblxuICAgICAgICAgICAgLy8gIEluc2VydCBvdXIgZW50cnkgaW50byB0aGUgUlRyZWU6XG4gICAgICAgICAgICAodHJlZSBhcyBhbnkpLmluc2VydCh7bGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tLCBjcmF0ZX0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcGF0aDtcbiAgICAgICAgY3JhdGVzLmNoaWxkcmVuLml0ZXJhdGUoKGNyYXRlOiBDcmF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2JvZHk6IGNyYXRlQm9keX0gPSBjcmF0ZTtcblxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IG5ldyBSZWN0YW5nbGUoY3JhdGUueCAtIGNyYXRlQm9keS53aWR0aCAvIDIsIGNyYXRlLnkgLSBjcmF0ZUJvZHkuaGVpZ2h0IC8gMiwgY3JhdGVCb2R5LndpZHRoLCBjcmF0ZUJvZHkuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnN0IHByZWN0U2l6ZSA9IGNyYXRlQm9keS53aWR0aCAqIDI7XG4gICAgICAgICAgICBjb25zdCBwYXRoUmVjdCA9IG5ldyBSZWN0YW5nbGUoY3JhdGUueCAtIHByZWN0U2l6ZSAvIDIsIGNyYXRlLnkgLSBwcmVjdFNpemUgLyAyLCBwcmVjdFNpemUsIHByZWN0U2l6ZSk7XG4gICAgICAgICAgICBjb25zdCBiYm94ID0ge1xuICAgICAgICAgICAgICAgIG1pblg6IGNyYXRlLnggLSBwcmVjdFNpemUgLyAyLFxuICAgICAgICAgICAgICAgIG1pblk6IGNyYXRlLnkgLSBwcmVjdFNpemUgLyAyLFxuICAgICAgICAgICAgICAgIG1heFg6IGNyYXRlLnggKyBwcmVjdFNpemUsXG4gICAgICAgICAgICAgICAgbWF4WTogY3JhdGUueSArIHByZWN0U2l6ZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChMaW5lVG9SZWN0YW5nbGUobGluZSwgcmVjdCkpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICh0cmVlIGFzIGFueSkuc2VhcmNoKGJib3gpLmZpbHRlcigoe2NyYXRlOiByZXN9KSA9PiByZXMgIT09IGNyYXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VDcmF0ZSA9ICBjcmF0ZSA7Ly8gcmVzdWx0Lmxlbmd0aCA+IDAgPyByZXN1bHRbMF0uY3JhdGUgOiBjcmF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvblJlY3QgPSB1c2VDcmF0ZS5nZXRCb3VuZHMoKTtcbiAgICAgICAgICAgICAgICAvLyBwYXRoUmVjdC5zZXRQb3NpdGlvbih1c2VDcmF0ZS54LCB1c2VDcmF0ZS55KTtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VSZWN0ID0gbmV3IFJlY3RhbmdsZSh1c2VDcmF0ZS54IC0gcHJlY3RTaXplIC8gMiwgdXNlQ3JhdGUueSAtIHByZWN0U2l6ZSAvIDIsIHByZWN0U2l6ZSwgcHJlY3RTaXplKTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBhdGggPSBwYXRoUmVjdC5nZXRQb2ludHMoNCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IHRoaXMuZ2V0U2lkZShjcmF0ZSwgcGF0aFJlY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNlZWsocGxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHByZWRpY3QgPSBib2R5LnZlbG9jaXR5LmNsb25lKCk7XG4gICAgICAgIHByZWRpY3Qubm9ybWFsaXplKCk7XG4gICAgICAgIHByZWRpY3Quc2NhbGUodGhpcy5ncmlkVW5pdCk7XG4gICAgICAgIHByZWRpY3QuYWRkKHBvaW50KTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICBwYXRoID0gdGhpcy5nZXRMaW5lKHBvaW50LCBwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9sbG93KHBhdGgsIHByZWRpY3QpO1xuXG4gICAgICAgIGJvZHkudmVsb2NpdHkuYWRkKHRoaXMuYWNjZWxlcmF0aW9uKTtcbiAgICAgICAgYm9keS52ZWxvY2l0eS5saW1pdCh0aGlzLnNwZWVkKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gY29uc3QgZW5lbXlWZWxvY2l0eSA9IG5ldyBWZWN0b3IyKHRhcmdldC54IC0gcG9pbnQueCAsIHRhcmdldC55ICAtIHBvaW50LnkpLm5vcm1hbGl6ZSgpO1xuICAgICAgICAvLyBjb25zdCB4U3BlZWQgPSB0aGlzLmJsb2NrZWREaXJlY3Rpb24ubGVmdCB8fCB0aGlzLmJsb2NrZWREaXJlY3Rpb24ucmlnaHQgPyAwIDogdGhpcy5zcGVlZDtcbiAgICAgICAgLy8gY29uc3QgeVNwZWVkID0gdGhpcy5ibG9ja2VkRGlyZWN0aW9uLnVwIHx8IHRoaXMuYmxvY2tlZERpcmVjdGlvbi5kb3duID8gMCA6IHRoaXMuc3BlZWQ7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGlmICh0aGlzLnB1c2hlZENyYXRlKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnJlc2V0QmxvY2tlZERpcmVjdGlvbnModGhpcy5wdXNoZWRDcmF0ZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gLy8gYm9keS5zZXRWZWxvY2l0eSh0aGlzLnNlZWsodGFyZ2V0KSk7XG4gICAgICAgIC8vIGJvZHkuc2V0VmVsb2NpdHkoZW5lbXlWZWxvY2l0eS54ICogeFNwZWVkLCBlbmVteVZlbG9jaXR5LnkgKiB5U3BlZWQpO1xuICAgICAgfVxuICAgICAgcHVibGljIGNyYXRlc092ZXJsYXAgPSAobWU6IEVuZW15LCBjcmF0ZTogQ3JhdGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHVzaGVkQ3JhdGUgJiYgdGhpcy5wbGF5ZXJzQ3JhdGUgIT09IGNyYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlZENyYXRlLmVuZW15ID0gdGhpcy5ibGFua0VuZW15O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHVzaGVkQ3JhdGUgPSBjcmF0ZTtcbiAgICAgICAgdGhpcy5ibG9ja2VkRGlyZWN0aW9uLm5vbmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5kaXN0YW5jZVRvQm94Q29ybmVyID0gY3JhdGUud2lkdGg7XG4gICAgICAgIGNyYXRlLmVuZW15ID0gbWU7XG4gICAgICAgIHRoaXMuaGFuZGxlQ3JhdGVDb2xsaXNvbihjcmF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgICAgICAgY29uc3QgdGhhdCA9ICh0aGlzIGFzIENvbnRhaW5lckxpdGUpO1xuICAgICAgICAgIHRoYXQucHJlZHJhdygpO1xuICAgICAgICAgIGNvbnN0IHsgZHAsIGdyYXBoaWNzLCBwb2ludCwgY2VudGVyQm90dG9tLCBjZW50ZXJDZW50ZXIsIHZhbmlzaFBvaW50LCBwYXN0Q2VudGVyfSA9IHRoaXMgYXMgdW5rbm93biBhcyBQZXJzcGVjdGl2ZU1peGluVHlwZTtcbiAgICAgICAgICBpZiAodGhpcy5wdXNoZWRDcmF0ZSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5wdXNoZWRDcmF0ZSAmJiBwb2ludDJWZWModGhpcy5wdXNoZWRDcmF0ZSkuZGlzdGFuY2UocG9pbnQpID4gdGhpcy5wdXNoZWRDcmF0ZS5ib2R5LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnB1c2hlZENyYXRlLmVuZW15ID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBncmFwaGljcy5zZXREZXB0aCgyKTtcbiAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAgIGNvbnN0IG9ic2N1cmVkU2hhcGVzOiBTaGFwZUNvbGxlY3Rpb25JdGVtW10gPSBbXTtcbiAgICAgICAgICBjb25zdCB1bnVic2N1cmVkU2hhcGVzOiBTaGFwZUNvbGxlY3Rpb25JdGVtW10gPSBbXTtcblxuICAgICAgICAgIHNldFBvc2l0aW9uKHRoaXMucGF0aEhlbHBlciwgdGhhdCk7XG4gICAgICAgICAgc2V0UG9zaXRpb24odGhpcy5oZWFkLCB0aGF0KTtcbiAgICAgICAgICBzZXRQb3NpdGlvbih0aGlzLmNlbnRlciwgY2VudGVyQ2VudGVyKTtcbiAgICAgICAgICB0aGlzLmhlYWQudXBkYXRlKCk7XG4gICAgICAgICAgY29uc3QgeyBlcXVhdG9yLCBwaTI6IGFsbCwgc2hhcGU6IHNwaGVyZX0gPSB0aGlzLmhlYWQgYXMgdW5rbm93biBhcyBTcGhlcmVDbGFzcztcbiAgICAgICAgICBjb25zdCB7Y3VydmU6IGV5ZUxpbmUsIGlzT2JzY3VyZWR9ID0gdGhpcy5oZWFkLmdldFNsaWNlKCd4JywgMC42NSk7XG4gICAgICAgICAgY29uc3Qge2N1cnZlOiBicm93fSA9IHRoaXMuaGVhZC5nZXRTbGljZSgneCcsIDAuNzUpO1xuICAgICAgICAgIGNvbnN0IGhvdmVyUG9zaXRpb24gPSBjZW50ZXJCb3R0b20uY2xvbmUoKS5sZXJwKHBvaW50LCAwLjEpO1xuICAgICAgICAgIGNvbnN0IGZlZXRDaXJjbGUgPSBuZXcgQ2lyY2xlKGhvdmVyUG9zaXRpb24ueCwgaG92ZXJQb3NpdGlvbi55LCBzcGhlcmUucmFkaXVzIC8gMi4zKTtcbiAgICAgICAgICBncmFwaGljcy5maWxsQ2lyY2xlU2hhcGUoZmVldENpcmNsZSk7XG5cbiAgICAgICAgICB0aGF0LnNldENoaWxkUG9zaXRpb24odGhpcy5zaGFkb3csIGNlbnRlckJvdHRvbS54LCBjZW50ZXJCb3R0b20ueSk7XG4gICAgICAgICAgY29uc3QgYm9keUFuZ2xlID0gdGhpcy5nZXRCb2R5QW5nbGUoKTtcbiAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBOb3JtYWxpemUoYm9keUFuZ2xlKSAvIGFsbDtcblxuICAgICAgICAgIGNvbnN0IHJlbGF0aXZlQW5nbGUgID0gTm9ybWFsaXplKEJldHdlZW5Qb2ludHModmFuaXNoUG9pbnQsIHBvaW50KSkgLyBhbGw7XG5cbiAgICAgICAgICBjb25zdCByaWdodFNob3VsZGVyID0gKGRpcmVjdGlvbiArIDAuMjUpICUgMTtcbiAgICAgICAgICBjb25zdCBsZWZ0U2hvdWxkZXIgPSAgKGRpcmVjdGlvbiArIDAuNzUpICUgMTtcblxuICAgICAgICAgIGNvbnN0IHNob3VsZGVyMVBvaW50ID0gZXF1YXRvci5nZXRQb2ludChyZWxhdGl2ZUFuZ2xlIC0gZGlyZWN0aW9uIC0gMC4yNSAlIDEpO1xuICAgICAgICAgIGNvbnN0IHNob3VsZGVyMlBvaW50ID0gZXF1YXRvci5nZXRQb2ludChyZWxhdGl2ZUFuZ2xlIC0gZGlyZWN0aW9uIC0gMC43NSAlIDEpO1xuICAgICAgICAgIGNvbnN0IGhhbmQxID0gbmV3IFZlY3RvcjIoQ2lyY2xlLkdldFBvaW50KHRoaXMuY2VudGVyLCByaWdodFNob3VsZGVyKSk7XG4gICAgICAgICAgY29uc3QgaGFuZDIgPSBuZXcgVmVjdG9yMihDaXJjbGUuR2V0UG9pbnQodGhpcy5jZW50ZXIsIGxlZnRTaG91bGRlcikpO1xuICAgICAgICAgIGdyYXBoaWNzLmZpbGxTdHlsZSh0aGlzLmNvbG9yKTtcbiAgICAgICAgICBjb25zdCBoYW5kQ29sb3IgPSAwWDI0MDVCO1xuXG4gICAgICAgICAgY29uc3QgdG9yc28gPSB0aGlzLmdldFRyZXBhem9pZCh0aGlzLmhlYWQuc2hhcGUsIGZlZXRDaXJjbGUsIHRoaXMuY29sb3IsIDAuOSwgdmFuaXNoUG9pbnQsIGhhbmRDb2xvcik7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IENJUkNMRTtcbiAgICAgICAgICBjb25zdCB7c2hhcGU6IHsgeCwgeSwgcmFkaXVzIH0gfSA9IHRoaXMuaGVhZDtcblxuICAgICAgICAgIGlmICh0b3Jzbykge1xuICAgICAgICAgICAgICBvYnNjdXJlZFNoYXBlcy5wdXNoKHRvcnNvKTtcbiAgICAgICAgICAgICAgY29uc3Qge3AzLCBwNH0gPSB0b3Jzby5wb2ludHM7XG4gICAgICAgICAgICAgIGNvbnN0IGFuZzEgPSAoQmV0d2VlblBvaW50cyh0aGlzLmhlYWQuc2hhcGUsIHAzKSkgO1xuICAgICAgICAgICAgICBjb25zdCBhbmcyID0gKEJldHdlZW5Qb2ludHModGhpcy5oZWFkLnNoYXBlLCBwNCkpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSBwYXN0Q2VudGVyKCd5JykgPyBhbmcyIDogYW5nMTtcbiAgICAgICAgICAgICAgY29uc3QgZW5kQW5nbGUgPSBzdGFydEFuZ2xlID09PSBhbmcxID8gYW5nMiA6IGFuZzE7XG4gICAgICAgICAgICAgIGNvbnN0IHNoYXBlID0geyB4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUgLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgdW51YnNjdXJlZFNoYXBlcy5wdXNoKHt0eXBlOiAtMSwgc2hhcGUsIGNvbG9yOiB0aGlzLmNvbG9yLCBzdHJva2VDb2xvcjogaGFuZENvbG9yfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdW51YnNjdXJlZFNoYXBlcy5wdXNoKHt0eXBlLCBzaGFwZTogbmV3IENpcmNsZSh4LCB5LCByYWRpdXMpLCBjb2xvcjogdGhpcy5jb2xvciwgc3Ryb2tlQ29sb3I6IGhhbmRDb2xvcn0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGhhbmQxU2hhcGUgPSB7dHlwZSwgc2hhcGU6IG5ldyBDaXJjbGUoaGFuZDEueCwgaGFuZDEueSwgdGhpcy5ncmlkVW5pdCksIGNvbG9yOiBoYW5kQ29sb3IsIHN0cm9rZUNvbG9yOiAweDAwMH07XG4gICAgICAgICAgY29uc3QgaGFuZDJTaGFwZSA9IHt0eXBlLCBzaGFwZTogbmV3IENpcmNsZShoYW5kMi54LCBoYW5kMi55LCB0aGlzLmdyaWRVbml0KSwgY29sb3I6IGhhbmRDb2xvciwgc3Ryb2tlQ29sb3I6IDB4MDAwfTtcbiAgICAgICAgICBncmFwaGljcy5maWxsU3R5bGUodGhpcy5jb2xvciwgMSk7XG4gICAgICAgICAgZ3JhcGhpY3MuZmlsbFBhdGgoKTtcbiAgICAgICAgICBjb25zdCBub3NlID0gcmVsYXRpdmVBbmdsZSAtIGRpcmVjdGlvbjtcbiAgICAgICAgICBjb25zdCBleWUxQW5nbGUgPSBub3NlIC0gMC45NSAlIDE7XG4gICAgICAgICAgY29uc3QgZXllMkFuZ2xlID0gbm9zZSAtIDAuMDUgJSAxO1xuICAgICAgICAgIGNvbnN0IGV5ZTEgPSBleWVMaW5lLmdldFBvaW50KGV5ZTFBbmdsZSk7XG4gICAgICAgICAgY29uc3QgZXllMiA9IGV5ZUxpbmUuZ2V0UG9pbnQoZXllMkFuZ2xlKTtcbiAgICAgICAgICBjb25zdCBicm93U3RhcnQgPSBicm93LmdldFBvaW50KG5vc2UgLSAwLjkgJSAxKTtcbiAgICAgICAgICBjb25zdCBicm93bWlkZGxlID0gYnJvdy5nZXRQb2ludChub3NlKTtcbiAgICAgICAgICBjb25zdCBicm93RW5kID0gYnJvdy5nZXRQb2ludChub3NlIC0gMC4xICUgMSk7XG5cbiAgICAgICAgICBjb25zdCBmYWNlRmVhdENvbG9yID0gMHgxNkQ4RDg7XG4gICAgICAgICAgY29uc3QgbGluZVdpZHRoID0gdGhpcy5zaXplIC8gNDtcbiAgICAgICAgICBjb25zdCBhcm0xID0ge3R5cGU6IExJTkUsIGxpbmVXaWR0aCwgIHNoYXBlOiBuZXcgTGluZShzaG91bGRlcjFQb2ludC54LCBzaG91bGRlcjFQb2ludC55LCBoYW5kMS54LCBoYW5kMS55KSwgY29sb3I6IDB4MDAwfTtcbiAgICAgICAgICBjb25zdCBhcm0yID0ge3R5cGU6IExJTkUsIGxpbmVXaWR0aCwgc2hhcGU6IG5ldyBMaW5lKHNob3VsZGVyMlBvaW50LngsIHNob3VsZGVyMlBvaW50LnksIGhhbmQyLngsIGhhbmQyLnkpLCBjb2xvcjogMHgwMDB9O1xuICAgICAgICAgIGxldCBtb3V0aDIgPSBlcXVhdG9yLmdldFBvaW50KGV5ZTJBbmdsZSk7XG4gICAgICAgICAgbGV0IG1vdXRoMSA9IGVxdWF0b3IuZ2V0UG9pbnQoZXllMUFuZ2xlKTtcblxuICAgICAgICAgIGNvbnN0IG5vc2VQb2ludCA9IGVxdWF0b3IuZ2V0UG9pbnQobm9zZSk7XG4gICAgICAgICAgY29uc3Qgbm9zZU9ic2N1cmVkID0gaXNPYnNjdXJlZChub3NlUG9pbnQpO1xuICAgICAgICAgIGNvbnN0IG1vdXRoMU9ic2N1cmVkID0gaXNPYnNjdXJlZChtb3V0aDEpO1xuICAgICAgICAgIGNvbnN0IG1vdXRoMk9ic2N1cmVkID0gaXNPYnNjdXJlZChtb3V0aDIpO1xuICAgICAgICAgIGlmIChtb3V0aDFPYnNjdXJlZCAmJiAhbm9zZU9ic2N1cmVkKSB7XG4gICAgICAgICAgICAgICAgbW91dGgxID0gbW91dGgxLmRpc3RhbmNlKG1vdXRoMU9ic2N1cmVkWzBdKSA8IG1vdXRoMS5kaXN0YW5jZShtb3V0aDFPYnNjdXJlZFsxXSkgPyBtb3V0aDFPYnNjdXJlZFswXSA6IG1vdXRoMU9ic2N1cmVkWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGlmIChtb3V0aDJPYnNjdXJlZCAmJiAhbm9zZU9ic2N1cmVkKSB7XG4gICAgICAgICAgICAgICAgbW91dGgyID0gbW91dGgyLmRpc3RhbmNlKG1vdXRoMk9ic2N1cmVkWzBdKSA8IG1vdXRoMS5kaXN0YW5jZShtb3V0aDJPYnNjdXJlZFsxXSkgPyBtb3V0aDJPYnNjdXJlZFswXSA6IG1vdXRoMk9ic2N1cmVkWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGlmICghbm9zZU9ic2N1cmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgUXVhZHJhdGljQmV6aWVyKG1vdXRoMSwgbm9zZVBvaW50LCBtb3V0aDIpO1xuICAgICAgICAgICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaCh7dHlwZTogLTIsIHNoYXBlLCBjb2xvcjogMHgwMDB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmhlYWQuaXNPYnNjdXJlZChzaG91bGRlcjFQb2ludCkpIHtcbiAgICAgICAgICAgICAgICBvYnNjdXJlZFNoYXBlcy5wdXNoKGFybTEpO1xuICAgICAgICAgICAgICAgIG9ic2N1cmVkU2hhcGVzLnB1c2goaGFuZDFTaGFwZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaChhcm0xKTtcbiAgICAgICAgICAgICAgICB1bnVic2N1cmVkU2hhcGVzLnB1c2goaGFuZDFTaGFwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuaGVhZC5pc09ic2N1cmVkKHNob3VsZGVyMlBvaW50KSkge1xuICAgICAgICAgICAgICAgIG9ic2N1cmVkU2hhcGVzLnB1c2goYXJtMik7XG4gICAgICAgICAgICAgICAgb2JzY3VyZWRTaGFwZXMucHVzaChoYW5kMlNoYXBlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW51YnNjdXJlZFNoYXBlcy5wdXNoKGFybTIpO1xuICAgICAgICAgICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaChoYW5kMlNoYXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHdoID0gdGhpcy5ncmlkVW5pdCAvIDEuNztcblxuICAgICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaCh7dHlwZTogLTEsIHNoYXBlOiB0aGlzLmdldERvbWVTaGFwZShleWUxLCB3aCksIGNvbG9yOiBmYWNlRmVhdENvbG9yLCBzdHJva2VDb2xvcjogaGFuZENvbG9yfSk7XG4gICAgICAgICAgdW51YnNjdXJlZFNoYXBlcy5wdXNoKHt0eXBlOiAtMSwgc2hhcGU6IHRoaXMuZ2V0RG9tZVNoYXBlKGV5ZTIsIHdoKSwgY29sb3I6IGZhY2VGZWF0Q29sb3IsIHN0cm9rZUNvbG9yOiBoYW5kQ29sb3J9KTtcblxuICAgICAgICAgIHRoaXMuZHJhd1NoYXBlcyhvYnNjdXJlZFNoYXBlcyk7XG4gICAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKHRoaXMuY29sb3IsIDEpO1xuICAgICAgICAgIGNvbnN0IHsgc2hhcGU6IGhlYWQgfSA9IHRoaXMuaGVhZDtcbiAgICAgICAgICBncmFwaGljcy5maWxsQ2lyY2xlU2hhcGUoaGVhZCk7XG4gICAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKGZhY2VGZWF0Q29sb3IsIDEpO1xuICAgICAgICAgIGNvbnN0IGN1cnZlID0gbmV3IFF1YWRyYXRpY0Jlemllcihicm93U3RhcnQsIGJyb3dtaWRkbGUsIGJyb3dFbmQpO1xuICAgICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaCh7dHlwZTogLTIsIHNoYXBlOiBjdXJ2ZSwgY29sb3I6IGhhbmRDb2xvcn0pO1xuICAgICAgICAgIHRoaXMuZHJhd1NoYXBlcyh1bnVic2N1cmVkU2hhcGVzKTtcbiAgICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMCwgMCk7XG4gICAgICAgICAgfVxuXG4gICAgcHJpdmF0ZSBwdXNoQ3JhdGVJbXBsKGRpcmVjdGlvbjogc3RyaW5nLCBjcmF0ZTogQ3JhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRCbG9ja2VkRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgICAgIGNvbnN0IGJvZHkgPSAoKHRoaXMgYXMgdW5rbm93biBhcyBHYW1lT2JqZWN0KS5ib2R5IGFzIFBoeXNpY3MuQXJjYWRlLkJvZHkpO1xuICAgICAgICBjb25zdCBkaXIgPSBEaXJlY3Rpb25bZGlyZWN0aW9uXTtcbiAgICAgICAgc3dpdGNoIChkaXIpIHtcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLnVwIDogY2FzZSBEaXJlY3Rpb24uZG93bjpcbiAgICAgICAgICAgICAgICBib2R5LnNldFZlbG9jaXR5WSgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLmxlZnQ6IGNhc2UgRGlyZWN0aW9uLnJpZ2h0OlxuICAgICAgICAgICAgICAgIGJvZHkuc2V0VmVsb2NpdHlYKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBib2R5LnNldFZlbG9jaXR5KDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U2lkZShjcmF0ZSwgcGF0aFJlY3QpIHtcbiAgICAgICAgY29uc3Qgc2lkZSA9IHRoaXMuZmFjaW5nU2lkZShjcmF0ZSk7XG4gICAgICAgIHN3aXRjaCAoc2lkZSkge1xuICAgICAgICBjYXNlIERpcmVjdGlvbi51cDpcbiAgICAgICAgICAgIHJldHVybiBwYXRoUmVjdC5nZXRMaW5lQygpO1xuICAgICAgICBjYXNlIERpcmVjdGlvbi5yaWdodDpcbiAgICAgICAgICAgIHJldHVybiBwYXRoUmVjdC5nZXRMaW5lRCgpO1xuICAgICAgICBjYXNlIERpcmVjdGlvbi5kb3duOlxuICAgICAgICAgICAgcmV0dXJuIHBhdGhSZWN0LmdldExpbmVBKCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gcGF0aFJlY3QuZ2V0TGluZUIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldE5vcm1hbFBvaW50KHA6IFZlY3RvcjIsIGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpIHtcbiAgICAgICAgLy8gUFZlY3RvciB0aGF0IHBvaW50cyBmcm9tIGEgdG8gcFxuICAgICAgICBjb25zdCBhcCA9IGEgLmNsb25lKCk7XG4gICAgICAgIGFwLnN1YnRyYWN0KHApO1xuICAgICAgICAvLyBQVmVjdG9yIHRoYXQgcG9pbnRzIGZyb20gYSB0byBiXG4gICAgICAgIGNvbnN0IGFiID0gYS5jbG9uZSgpO1xuICAgICAgICBhYi5zdWJ0cmFjdChiKTtcbiAgICAgICAgLy8gVXNpbmcgdGhlIGRvdCBwcm9kdWN0IGZvciBzY2FsYXIgcHJvamVjdGlvblxuICAgICAgICBhYi5ub3JtYWxpemUoKTtcbiAgICAgICAgYWIuc2NhbGUoYXAuZG90KGFiKSk7XG4gICAgICAgIC8vIEZpbmRpbmcgdGhlIG5vcm1hbCBwb2ludCBhbG9uZyB0aGUgbGluZSBzZWdtZW50XG4gICAgICAgIGNvbnN0IHJlcyA9IGEuY2xvbmUoKTtcbiAgICAgICAgcmVzLmFkZChhYik7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHByaXZhdGUgZm9sbG93KHA6IExpbmUsIHByZWRpY3RMb2M6IFZlY3RvcjIpIHtcblxuICAgICAgICAvLyBGaW5kIHRoZSBub3JtYWwgcG9pbnQgYWxvbmcgdGhlIHBhdGguXG4gICAgICAgIGNvbnN0IGEgPSBwLmdldFBvaW50QSgpO1xuICAgICAgICBjb25zdCBiID0gcC5nZXRQb2ludEIoKTtcbiAgICAgICAgdGhpcy5wYXRoTGluZSA9IHA7XG4gICAgICAgIGNvbnN0IG5vcm1hbFBvaW50ID0gdGhpcy5nZXROb3JtYWxQb2ludChwcmVkaWN0TG9jLCBhLCBiKTtcblxuICAgICAgICAvLyBNb3ZlIGEgbGl0dGxlIGZ1cnRoZXIgYWxvbmcgdGhlIHBhdGggYW5kIHNldCBhIHRhcmdldC5cbiAgICAgICAgY29uc3QgZGlyID0gYi5zdWJ0cmFjdChhKTtcbiAgICAgICAgZGlyLm5vcm1hbGl6ZSgpO1xuICAgICAgICBkaXIuc2NhbGUodGhpcy5ncmlkVW5pdCAqIDI1KTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbm9ybWFsUG9pbnQuYWRkKGRpcik7XG4gICAgICAgIC8vIElmIHdlIGFyZSBvZmYgdGhlIHBhdGgsIHNlZWsgdGhhdCB0YXJnZXQgaW4gb3JkZXIgdG8gc3RheSBvbiB0aGUgcGF0aC5cbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBub3JtYWxQb2ludC5kaXN0YW5jZShwcmVkaWN0TG9jKTtcbiAgICAgICAgaWYgKGRpc3RhbmNlID4gdGhpcy5ncmlkVW5pdCAqIDEwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblBvaW50ID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5zZWVrKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzZWVrKHRhcmdldDogVmVjdG9yMikge1xuICAgICAgICBjb25zdCB7IHBvaW50IH0gPSB0aGlzIGFzIHVua25vd24gYXMgUGVyc3BlY3RpdmVNaXhpblR5cGU7XG4gICAgICAgIGNvbnN0IGRlc2lyZWQgPSB0YXJnZXQuY2xvbmUoKTtcbiAgICAgICAgZGVzaXJlZC5zdWJ0cmFjdChwb2ludCk7XG4gICAgICAgIGRlc2lyZWQubm9ybWFsaXplKCk7XG4gICAgICAgIGNvbnN0IG1heFNwZWVkID0gbmV3IFZlY3RvcjIodGhpcy5zcGVlZCwgdGhpcy5zcGVlZCk7XG4gICAgICAgIC8vIC8vIENhbGN1bGF0aW5nIHRoZSBkZXNpcmVkIHZlbG9jaXR5IHRvIHRhcmdldCBhdCBtYXggc3BlZWRcbiAgICAgICAgZGVzaXJlZC5tdWx0aXBseShtYXhTcGVlZCk7XG4gICAgICAgIC8vIFJleW5vbGRz4oCZcyBmb3JtdWxhIGZvciBzdGVlcmluZyBmb3JjZVxuICAgICAgICBjb25zdCBib2R5ID0gKCh0aGlzIGFzIHVua25vd24gYXMgR2FtZU9iamVjdCkuYm9keSBhcyBQaHlzaWNzLkFyY2FkZS5Cb2R5KTtcbiAgICAgICAgY29uc3Qgc3RlZXIgPSBkZXNpcmVkLmNsb25lKCk7XG4gICAgICAgIHN0ZWVyLnN1YnRyYWN0KGJvZHkudmVsb2NpdHkpO1xuICAgICAgICBzdGVlci5saW1pdCgwLjMpO1xuXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uLmFkZChzdGVlcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtTY2VuZSwgTWF0aCBhcyBQTWF0aH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCB7Q29uc3RydWN0b3IsIERpcmVjdGlvbiwgbGluZUludGVyc2VjdH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgVmVjdG9yMiA9IFBoYXNlci5NYXRoLlZlY3RvcjI7XG5pbXBvcnQgV2FsbCBmcm9tICcuL1dhbGwnO1xuaW1wb3J0IEdyYXBoaWNzID0gUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xuaW50ZXJmYWNlIFJlZiB7IGlkeDE6IG51bWJlcjsgaWR4MjogbnVtYmVyOyBtcDogVmVjdG9yMjsgfVxuXG5leHBvcnQgZGVmYXVsdCA8VEJhc2UgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oQmFzZTogVEJhc2UpID0+XG5jbGFzcyBleHRlbmRzIEJhc2Uge1xuICAgIGdldCBjZW50ZXJCb3R0b20oKTogUGhhc2VyLk1hdGguVmVjdG9yMiB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnZlcnRpY2VzWzldKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzWzldID0gdGhpcy5jYWxjVmVydGV4UG9zKDMpLmxlcnAodGhpcy5jYWxjVmVydGV4UG9zKDQpLCAwLjUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzWzldO1xuICAgIH1cblxuICAgIGdldCBjZW50ZXJDZW50ZXIoKTogUGhhc2VyLk1hdGguVmVjdG9yMiB7XG4gICAgICAgIGlmICghdGhpcy52ZXJ0aWNlc1s4LjVdKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzWzguNV0gPSB0aGlzLmNlbnRlckJvdHRvbS5jbG9uZSgpLmxlcnAodGhpcy5wb2ludCwgMC41KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1s4LjVdO1xuICAgIH1cblxuICBwcml2YXRlIGdyYXBoaWNzO1xuICBwcml2YXRlIHZhbmlzaFBvaW50OiBWZWN0b3IyO1xuICBwcml2YXRlIGNvbG9yOiBudW1iZXI7XG4gIHByaXZhdGUgZ3JpZFVuaXQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBNZWFzdXJlUG9pbnRZMTogUE1hdGguVmVjdG9yMjtcbiAgcHJpdmF0ZSBNZWFzdXJlUG9pbnRZMjogUE1hdGguVmVjdG9yMjtcbiAgcHJpdmF0ZSBNZWFzdXJlUG9pbnRYMTogUE1hdGguVmVjdG9yMjtcbiAgcHJpdmF0ZSBNZWFzdXJlUG9pbnRYMjogUE1hdGguVmVjdG9yMjtcbiAgcHJpdmF0ZSB2ZXJ0aWNlczogVmVjdG9yMltdO1xuICBwcml2YXRlIGRpbWVuc2lvbnM6IFBNYXRoLlZlY3RvcjI7XG4gIHByaXZhdGUgcG9pbnQ6IFBNYXRoLlZlY3RvcjI7XG4gIHByaXZhdGUga2V5O1xuICBwcml2YXRlIGludGVyc2VjdE1hcDogUmVmW107XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBhcmdzWzBdLnggPyBhcmdzWzBdLnNjZW5lIDogYXJnc1swXTsgLy8gP1xuICAgICAgICBjb25zdCB4ID0gYXJnc1sxXTtcbiAgICAgICAgY29uc3QgeSA9IGFyZ3NbMl07XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBzY2VuZS5hZGQuZ3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5wb2ludCA9IG5ldyBQTWF0aC5WZWN0b3IyKHgsIHkpO1xuICAgICAgICB0aGlzLnZlcnRpY2VzID0gW107XG5cbiAgICAgICAgY29uc3Qge3BoeXNpY3M6IHt3b3JsZDoge2JvdW5kczoge2xlZnQsIHJpZ2h0LCAgY2VudGVyWCwgY2VudGVyWX19fX0gPSBzY2VuZTtcbiAgICAgICAgY29uc3QgdmFsID0gKGxlZnQgLSByaWdodCk7XG4gICAgICAgIHRoaXMudmFuaXNoUG9pbnQgPSBuZXcgUE1hdGguVmVjdG9yMihjZW50ZXJYLCBjZW50ZXJZKTtcbiAgICAgICAgdGhpcy5ncmlkVW5pdCA9IHNjZW5lLmRhdGEuZ2V0KCdncmlkVW5pdCcpO1xuICAgICAgICB0aGlzLmludGVyc2VjdE1hcCA9IFtdO1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIFdhbGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHcgPSBhcmdzWzNdO1xuICAgICAgICAgICAgY29uc3QgaCA9IGFyZ3NbNF07XG4gICAgICAgICAgICBjb25zdCBkID0gYXJnc1s1XTtcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IG5ldyBWZWN0b3IyKHcsIGgpO1xuXG4gICAgICAgICAgICBjb25zdCB3cnQgPSAodGhpcy5kaW1lbnNpb25zLnggLyBkKTtcbiAgICAgICAgICAgIGNvbnN0IGhydCA9ICh0aGlzLmRpbWVuc2lvbnMueSAvIGQpO1xuICAgICAgICAgICAgY29uc3QgYXNwZWN0SCA9IGggPCB3ID8gdmFsICogaHJ0IDogdmFsICogaHJ0O1xuICAgICAgICAgICAgY29uc3QgYXNwZWN0VyA9IGggPCB3ID8gdmFsICogd3J0IDogdmFsICogd3J0O1xuICAgICAgICAgICAgdGhpcy5zZXRNZWFzdXJlUG9pbnRzKGFzcGVjdFcsIGFzcGVjdEgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5rZXkgPSBhcmdzWzNdO1xuICAgICAgICAgICAgLy8gdGhpcyBteXN0ZXJ5IHZhbHVlIHdpbGwgdGFrZSB1cyB0byB0aGUgZWRnZSBvZiB0aGUgY3ViZVxuICAgICAgICAgICAgY29uc3QgeHkgPSAodGhpcy5ncmlkVW5pdCAqIDIuNikgKiA0O1xuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gbmV3IFZlY3RvcjIoeHksIHh5KTtcbiAgICAgICAgICAgIHRoaXMuc2V0TWVhc3VyZVBvaW50cyh2YWwsIHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICBwdWJsaWMgcHJlZHJhdygpIHtcblxuICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICBjb25zdCB7eCwgeSwgZGltZW5zaW9ucywgdmFuaXNoUG9pbnQsIG1wIH0gPSB0aGlzO1xuICAgICAgIHRoaXMucG9pbnQueCA9IHg7XG4gICAgICAgdGhpcy5wb2ludC55ID0geTtcbiAgICAgICBjb25zdCB4aGFsZiA9IGRpbWVuc2lvbnMueCAvIDI7XG4gICAgICAgY29uc3QgeWhhbGYgPSBkaW1lbnNpb25zLnkgLyAyO1xuXG4gICAgICAgLy8gZWFjaCBjb3JuZXIgKHZlcnRpY2UpIG9mIHRoZSBjdWJlIGhhcyBiZWVuIGdpdmVuIGEgbnVtYmVyLiBBIHBpY3R1cmUgcmVhbGx5IGRvZXMgc3BlYWsgYSAxMDAwIHdvcmRzOlxuICAgICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BvbHlnb25fbWVzaCMvbWVkaWEvRmlsZTpWZXJ0ZXgtVmVydGV4X01lc2hlc18oVlYpLnBuZ1xuICAgICAgIHRoaXMudmVydGljZXNbMV0gPSBuZXcgUE1hdGguVmVjdG9yMih4IC0geGhhbGYsIHkgKyB5aGFsZik7XG4gICAgICAgdGhpcy52ZXJ0aWNlc1syXSA9IG5ldyBQTWF0aC5WZWN0b3IyKHggKyB4aGFsZiwgeSArIHloYWxmKTtcbiAgICAgICB0aGlzLnZlcnRpY2VzWzVdID0gbmV3IFBNYXRoLlZlY3RvcjIoeCAtIHhoYWxmLCB5IC0geWhhbGYpO1xuICAgICAgIHRoaXMudmVydGljZXNbNl0gPSBuZXcgUE1hdGguVmVjdG9yMih4ICsgeGhhbGYsIHkgLSB5aGFsZik7XG4gICAgICAgLy8gd2VyZSBnb2luZyB0byBjYWxjdWxhdGUgdGhlc2UgaWYgbmVlZGVkLiBidXQgd2UgbmVlZCB0byBnZXQgcmlkIG9mIGFueSBvbGQgdmFsdWVzIGZyb20gdGhlIHByZXZpb3VzIHBvc2l0aW9uXG4gICAgICAgZGVsZXRlIHRoaXMudmVydGljZXNbMF07XG4gICAgICAgZGVsZXRlIHRoaXMudmVydGljZXNbM107XG4gICAgICAgZGVsZXRlIHRoaXMudmVydGljZXNbNF07XG4gICAgICAgZGVsZXRlIHRoaXMudmVydGljZXNbN107XG4gICAgICAgZGVsZXRlIHRoaXMudmVydGljZXNbOC41XTsgLy8gY2VudGVyXG4gICAgICAgZGVsZXRlIHRoaXMudmVydGljZXNbOV07XG4gICB9XG4gICAgcHVibGljIGRyYXdJblZpZXcoKSB7XG4gICAgICAgIHRoaXMuZHJhd1ZlcnRpY2VzKHRoaXMuZ2V0WUZhY2VJblZpZXcoKSk7XG4gICAgICAgIHRoaXMuZHJhd1ZlcnRpY2VzKHRoaXMuZ2V0WEZhY2VJblZpZXcoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRwID0gKHA6IFZlY3RvcjIpID0+ICh0aGlzIGFzIHVua25vd24gYXMgUGVyc3BlY3RpdmVNaXhpblR5cGUpLmdyYXBoaWNzLmZpbGxQb2ludChwLngsIHAueSwgdGhpcy5ncmlkVW5pdCAvIDIpO1xuXG4gICAgcHJpdmF0ZSBjYWxjVmVydGV4UG9zKG51bSkge1xuICAgICAgICBjb25zdCB7dmVydGljZXM6IHYsIHZhbmlzaFBvaW50LCBpbnRlcnNlY3RNYXB9ID0gdGhpcztcbiAgICAgICAgaWYgKCF2W251bV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGltYXAgPSBpbnRlcnNlY3RNYXA/LiBbbnVtXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGxpbmVJbnRlcnNlY3QodmFuaXNoUG9pbnQsIHZbaW1hcC5pZHgxXSwgdltpbWFwLmlkeDJdLCBpbWFwLm1wKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB2W251bV0gPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZbbnVtXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYXdWZXJ0aWNlcyhwb2ludHMpIHtcbiAgICAgICAgdGhpcy5kcmF3UG9pbnRzKHBvaW50c1swXSwgcG9pbnRzWzFdLCBwb2ludHNbMl0sIHBvaW50c1szXSk7XG4gICAgfVxuICAgcHJpdmF0ZSBnZXRGYWNlQnlEaXJlY3Rpb24oZGlyZWN0aW9uOiBEaXJlY3Rpb24pIHtcbiAgICAgICBjb25zdCB7IHZlcnRpY2VzOiB2fSA9IHRoaXM7XG4gICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24udXA6XG4gICAgICAgICAgICAgICB0aGlzLmNhbGNWZXJ0ZXhQb3MoNCk7XG4gICAgICAgICAgICAgICB0aGlzLmNhbGNWZXJ0ZXhQb3MoNyk7XG4gICAgICAgICAgICAgICByZXR1cm4gW3ZbNV0sIHZbNl0sIHZbNF0sIHZbN11dO1xuICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5kb3duOlxuICAgICAgICAgICAgICAgdGhpcy5jYWxjVmVydGV4UG9zKDApO1xuICAgICAgICAgICAgICAgdGhpcy5jYWxjVmVydGV4UG9zKDMpO1xuICAgICAgICAgICAgICAgcmV0dXJuIFt2WzFdLCB2WzJdLCB2WzBdLCB2WzNdXTtcbiAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24ubGVmdDpcbiAgICAgICAgICAgICAgIHRoaXMuY2FsY1ZlcnRleFBvcygwKTtcbiAgICAgICAgICAgICAgIHRoaXMuY2FsY1ZlcnRleFBvcyg0KTtcbiAgICAgICAgICAgICAgIHJldHVybiBbdlsxXSwgdls1XSwgdlswXSwgdls0XV07XG4gICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICB0aGlzLmNhbGNWZXJ0ZXhQb3MoMyk7XG4gICAgICAgICAgICAgICB0aGlzLmNhbGNWZXJ0ZXhQb3MoNyk7XG4gICAgICAgICAgICAgICByZXR1cm4gW3ZbMl0sIHZbNl0sIHZbM10sIHZbN11dO1xuICAgICAgIH1cbiAgIH1cbiAgICBwcml2YXRlIHNldE1lYXN1cmVQb2ludHMob2Zmc2V0WCwgb2Zmc2V0WSkge1xuICAgICAgICAvLyBtZWFzdXJlcG9pbnRzIGFyZSBwbGFjZWQgb24gdGhlIGhvcml6b24gbGluZSBvZiB0aGUgdmFuaXNocG9pbnQsXG4gICAgICAgIC8vIHRoZXkgYXJlIHNwYWNlZCBlcXVhbGx5IGFwYXJ0IHdpdGggdGhlIHZhbmlzaHBvaW50IGluIHRoZSBleGFjdCBjZW50ZXJcbiAgICAgICAgLy8gd2hlbiB5b3UgZHJhdyBhIGxpbmUgZnJvbSB0aGUgbWVhc3VyZXBvaW50IHRvd2FyZHMgdGhlIGNlbnRlciBvZiB0aGUgY3ViZSBpdCB3aWxsIGludGVyc2VjdCAyIG9wcG9zaW5nIGNvcm5lcnMgb2YgYSBmYWNlIG9uIHRoYXQgY3ViZVxuICAgICAgICAvLyB3aGVuIGJvdGggbWVhc3VyZXBvaW50cyBvZiB0aGUgc2FtZSBheGlzIGFyZSBkcmF3bixcbiAgICAgICAgLy8gYW4gWCB3aWxsIHRoZW4gYmUgZHJhd24gb24gdGhhdCBmYWNlLCBzdGFydGluZyBmcm9tIHRoZSBjb3JuZXJzIGFuZCBpbnRlcnNlY3RpbmcgaW4gdGhlIGNlbnRlclxuICAgICAgICAvL1xuICAgICAgICAvLyBiZWNhdXNlIHRoZSBnYW1lIHdvcmxkIGlzIG5vdCBhIHBlcmZlY3Qgc3F1YXJlLiB3ZSBuZWVkIHRvIGNvbXBlbnNhdGUgZm9yIHRoZSBhc3BlY3QgcmF0aW8uXG5cbiAgICAgICAgdGhpcy5NZWFzdXJlUG9pbnRZMSA9IG5ldyBWZWN0b3IyKHRoaXMudmFuaXNoUG9pbnQueCwgdGhpcy52YW5pc2hQb2ludC55ICsgb2Zmc2V0WSk7XG4gICAgICAgIHRoaXMuTWVhc3VyZVBvaW50WTIgPSBuZXcgVmVjdG9yMih0aGlzLnZhbmlzaFBvaW50LngsIHRoaXMudmFuaXNoUG9pbnQueSAtIG9mZnNldFkgKTtcbiAgICAgICAgdGhpcy5NZWFzdXJlUG9pbnRYMSA9IG5ldyBWZWN0b3IyKHRoaXMudmFuaXNoUG9pbnQueCArIG9mZnNldFgsIHRoaXMudmFuaXNoUG9pbnQueSk7XG4gICAgICAgIHRoaXMuTWVhc3VyZVBvaW50WDIgPSBuZXcgVmVjdG9yMih0aGlzLnZhbmlzaFBvaW50LnggLSBvZmZzZXRYLCB0aGlzLnZhbmlzaFBvaW50LnkpO1xuICAgICAgICBjb25zdCBjcmVhdGVTdHJ1Y3QgPSAoaWR4MSwgaWR4MiwgbXApID0+ICh7aWR4MSwgaWR4MiwgbXB9KTtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3RNYXBbMF0gPSBjcmVhdGVTdHJ1Y3QoMSwgNSwgdGhpcy5NZWFzdXJlUG9pbnRZMik7XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0TWFwWzNdID0gY3JlYXRlU3RydWN0KDIsIDEsIHRoaXMuTWVhc3VyZVBvaW50WDIpO1xuICAgICAgICB0aGlzLmludGVyc2VjdE1hcFs0XSA9IGNyZWF0ZVN0cnVjdCg1LCAxLCB0aGlzLk1lYXN1cmVQb2ludFkxKTtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3RNYXBbN10gPSBjcmVhdGVTdHJ1Y3QoNiwgMiwgdGhpcy5NZWFzdXJlUG9pbnRZMSk7XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRYRmFjZUluVmlldyA9ICgpOiBWZWN0b3IyW10gPT4gdGhpcy5wYXN0Q2VudGVyKCd4JylcbiAgICAgICAgPyB0aGlzLmdldEZhY2VCeURpcmVjdGlvbihEaXJlY3Rpb24ubGVmdClcbiAgICAgICAgOiB0aGlzLmdldEZhY2VCeURpcmVjdGlvbihEaXJlY3Rpb24ucmlnaHQpXG5cbiAgICBwcml2YXRlIGdldFlGYWNlSW5WaWV3ID0gKCk6IFZlY3RvcjJbXSA9PiB0aGlzLnBhc3RDZW50ZXIoJ3knKVxuICAgICAgICA/IHRoaXMuZ2V0RmFjZUJ5RGlyZWN0aW9uKERpcmVjdGlvbi51cClcbiAgICAgICAgOiB0aGlzLmdldEZhY2VCeURpcmVjdGlvbihEaXJlY3Rpb24uZG93bilcbiAgICBwcml2YXRlIGRyYXdQb2ludHModG9wLCBib3R0b20sIGZsb29yVG9wLCBmbG9vckJvdHRvbSkge1xuXG4gICAgICAgIGNvbnN0IHsgZ3JhcGhpY3MgfSA9IHRoaXM7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaXMubGluZVdpZHRoLCAweDAwMCwgdGhpcy5hbHBoYSk7XG5cbiAgICAgICAgZ3JhcGhpY3MuZmlsbFBvaW50cyhbdG9wLCBib3R0b20sIGZsb29yQm90dG9tLCBmbG9vclRvcF0sIHRydWUpO1xuICAgICAgICBncmFwaGljcy5zdHJva2VQYXRoKCk7XG4gICAgfVxuICAgIHByaXZhdGUgcGFzdENlbnRlciA9IChheGlzOiBzdHJpbmcpID0+IHRoaXNbYXhpc10gPiB0aGlzLnZhbmlzaFBvaW50W2F4aXNdO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBQZXJzcGVjdGl2ZU1peGluVHlwZSAge1xuICAgIHZlcnRpY2VzOiBWZWN0b3IyW107XG4gICAgdmFuaXNoUG9pbnQ6IFBNYXRoLlZlY3RvcjI7XG4gICAgZGltZW5zaW9uczogUE1hdGguVmVjdG9yMjtcbiAgICBwb2ludDogUE1hdGguVmVjdG9yMjtcbiAgICBjZW50ZXJCb3R0b206IFBNYXRoLlZlY3RvcjI7XG4gICAgY2VudGVyQ2VudGVyOiBQTWF0aC5WZWN0b3IyO1xuICAgIGdyYXBoaWNzOiBHcmFwaGljcztcbiAgICBkcmF3OiAoKSA9PiB2b2lkO1xuICAgIHBhc3RDZW50ZXI6IChhOiBzdHJpbmcpID0+IGJvb2xlYW47XG4gICAgbXA6ICgpID0+IHZvaWQ7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjb2xvcjogbnVtYmVyO1xuICAgIGdyaWRVbml0OiBudW1iZXI7XG4gICAgcHJlZHJhdzogKCkgPT4gdm9pZDtcbiAgICBkcmF3VmVydGljZXM6IChmYWNlQnlEaXJlY3Rpb246IFBoYXNlci5NYXRoLlZlY3RvcjJbXSkgPT4gdm9pZDtcbiAgICBnZXRGYWNlQnlEaXJlY3Rpb246IChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4gVmVjdG9yMltdO1xuICAgIGRyYXdJblZpZXc6ICgpID0+IHZvaWQ7XG4gICAgZHA6IChwOiBWZWN0b3IyKSA9PiB2b2lkO1xufVxuIiwiaW1wb3J0IHtHYW1lT2JqZWN0cywgUGh5c2ljcywgU2NlbmUsIFR5cGVzfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHtcbiAgICBjb2xsaWRlc09uQXhlcyxcbiAgICBnZXRBcmNTaGFwZSxcbiAgICBpbXBhc3NhYmxlLFxuICAgIHBvaW50MlZlYyxcbiAgICBzZXRQb3NpdGlvbixcbiAgICBTaGFwZUNvbGxlY3Rpb25JdGVtLFxufSBmcm9tICcuLi9oZWxwZXJzJztcblxuaW1wb3J0IENyYXRlIGZyb20gJy4vQ3JhdGUnO1xuaW1wb3J0IENvbGxpZGVzV2l0aE9iamVjdHMgZnJvbSAnLi9Db2xsaWRlc1dpdGhPYmplY3RzJztcbmltcG9ydCBBcmNhZGVCb2R5Qm91bmRzID0gUGhhc2VyLlR5cGVzLlBoeXNpY3MuQXJjYWRlLkFyY2FkZUJvZHlCb3VuZHM7XG5pbXBvcnQgQ29udGFpbmVyTGl0ZSBmcm9tICdwaGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvY29udGFpbmVybGl0ZSc7XG5pbXBvcnQgQ2lyY2xlID0gUGhhc2VyLkdlb20uQ2lyY2xlO1xuaW1wb3J0IFZlY3RvcjIgPSBQaGFzZXIuTWF0aC5WZWN0b3IyO1xuaW1wb3J0IEJldHdlZW5Qb2ludHMgPSBQaGFzZXIuTWF0aC5BbmdsZS5CZXR3ZWVuUG9pbnRzO1xuaW1wb3J0IE5vcm1hbGl6ZSA9IFBoYXNlci5NYXRoLkFuZ2xlLk5vcm1hbGl6ZTtcblxuaW1wb3J0IFBlcnNwZWN0aXZlT2JqZWN0LCB7UGVyc3BlY3RpdmVNaXhpblR5cGV9IGZyb20gJy4uL2dhbWVvYmplY3RzL1BlcnNwZWN0aXZlTWl4aW4nO1xuaW1wb3J0IFNwaGVyZUNsYXNzIGZyb20gJy4vU3BoZXJlJztcbmltcG9ydCBDSVJDTEUgPSBQaGFzZXIuR2VvbS5DSVJDTEU7XG5pbXBvcnQgTElORSA9IFBoYXNlci5HZW9tLkxJTkU7XG5pbXBvcnQgU2hhcGUgPSBQaGFzZXIuR2FtZU9iamVjdHMuU2hhcGU7XG5pbXBvcnQgR2FtZU9iamVjdCA9IFBoYXNlci5HYW1lT2JqZWN0cy5HYW1lT2JqZWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDb2xsaWRlc1dpdGhPYmplY3RzIHtcbiAgICBwcml2YXRlIHNwZWVkO1xuICAgIHByaXZhdGUgaGFzSW5wdXQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBUeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xuICAgIHByaXZhdGUgcGFjZTogbnVtYmVyID0gMzA7XG4gICAgcHJpdmF0ZSBjcmF0ZXM6IENyYXRlW107XG4gICAgcHJpdmF0ZSBmYWN0b3I6IG51bWJlciA9ICh0aGlzLnBhY2UgLyAxMCkgKiAyLjU7XG4gICAgcHJpdmF0ZSB3b3JsZEJvdW5kczogQXJjYWRlQm9keUJvdW5kcztcblxuICAgIHByaXZhdGUgY2VudGVyOiBDaXJjbGU7XG4gICAgcHJpdmF0ZSBzaGFkb3c6IENpcmNsZTtcbiAgICBwcml2YXRlIGZlZXRDaXJjbGU6IENpcmNsZTtcbiAgICBwcml2YXRlIHNob2UxOiBTaGFwZTtcbiAgICBwcml2YXRlIHNob2UxQ291bnRlcjogbnVtYmVyO1xuICAgIHByaXZhdGUgc2hvZTI6IFNoYXBlO1xuICAgIHByaXZhdGUgY29sb3I6IG51bWJlcjtcbiAgICBwcml2YXRlIHNpemU6IG51bWJlcjtcbiAgICBwcml2YXRlIHBhdGhIZWxwZXI6IENpcmNsZTtcbiAgICBwcml2YXRlIHN0ZXA6IG51bWJlcjtcbiAgICBwcml2YXRlIG5vdzogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBzY2VuZTogU2NlbmU7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIGdyaWRVbml0OiBudW1iZXIsIGNyYXRlczogUGh5c2ljcy5BcmNhZGUuR3JvdXAsIHNpemUsIHNjYWxlKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZy5zY2VuZSwgY29uZmlnLngsIGNvbmZpZy55LCBzaXplLCBzaXplKTtcbiAgICAgICAgY29uc3QgYm9keSA9ICgodGhpcyBhcyB1bmtub3duIGFzIEdhbWVPYmplY3QpLmJvZHkgYXMgUGh5c2ljcy5BcmNhZGUuQm9keSk7XG4gICAgICAgIGJvZHkuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xuXG4gICAgICAgIHRoaXMuc2NlbmUgPSBjb25maWcuc2NlbmU7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzIGFzIENvbnRhaW5lckxpdGU7XG4gICAgICAgIGNvbnN0IHt4LCB5fSA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5jb2xvciA9IDBYRUZDQUI3O1xuICAgICAgICBjb25zdCBzaGFkb3dDb2xvciA9IDBYMDMxOTIwO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLnNoYWRvdyA9IGNvbmZpZy5zY2VuZS5hZGQuY2lyY2xlKHgsIHksIHNpemUsIHNoYWRvd0NvbG9yLCAwLjQpO1xuICAgICAgICBjb25zdCBxdWFydGVyID0gc2l6ZSAqIDEuODtcbiAgICAgICAgdGhpcy5zaG9lMUNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnN0ZXAgPSArMTtcbiAgICAgICAgdGhpcy5ub3cgPSAwO1xuICAgICAgICBjb25zdCBTcGhlcmUgPSBQZXJzcGVjdGl2ZU9iamVjdChTcGhlcmVDbGFzcyk7XG4gICAgICAgIHRoaXMuaGVhZCA9IG5ldyBTcGhlcmUoY29uZmlnLnNjZW5lLCB4LCB5LCBxdWFydGVyLCBxdWFydGVyLCBxdWFydGVyLCAgdGhpcy5jb2xvcik7XG4gICAgICAgIHRoaXMuaGVhZC5zZXREZXB0aCgyKTtcblxuICAgICAgICBjb25zdCBzaG9lQ29sb3IgPSAweEFENjYxRjtcbiAgICAgICAgY29uc3Qgc2hvZVN0eWxlID0gW3RoaXMuc2l6ZSAvIDUsIDB4NjYzMzAwLCAxXTtcbiAgICAgICAgdGhpcy5zaG9lMSA9IGNvbmZpZy5zY2VuZS5hZGQucmV4Um91bmRSZWN0YW5nbGUoeCwgeSwgc2l6ZSAqIDIsIHNpemUsIHNpemUgLyAyLCBzaG9lQ29sb3IpO1xuICAgICAgICB0aGlzLnNob2UxLnNldFN0cm9rZVN0eWxlKC4uLnNob2VTdHlsZSk7XG4gICAgICAgIHRoaXMuc2hvZTEuc2V0U2NhbGUoMC41KTtcbiAgICAgICAgdGhpcy5zaG9lMiA9IGNvbmZpZy5zY2VuZS5hZGQucmV4Um91bmRSZWN0YW5nbGUoeCwgeSwgc2l6ZSAqIDIsIHNpemUsIHNpemUgLyAyLCBzaG9lQ29sb3IpO1xuICAgICAgICB0aGlzLnNob2UyLnNldFNjYWxlKDAuNSk7XG4gICAgICAgIHRoaXMuc2hvZTIuc2V0U3Ryb2tlU3R5bGUoLi4uc2hvZVN0eWxlKTtcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBuZXcgQ2lyY2xlKHgsIHksIHNpemUgKiAxLjEpO1xuICAgICAgICB0aGlzLnBhdGhIZWxwZXIgPSBuZXcgQ2lyY2xlKHgsIHksIHNpemUpO1xuICAgICAgICB0aGlzLmZlZXRDaXJjbGUgPSBuZXcgQ2lyY2xlKHgsIHksIHNpemUpO1xuICAgICAgICB0aGF0LmFkZCh0aGlzLnNoYWRvdyk7XG4gICAgICAgIHRoYXQuYWRkKHRoaXMuc2hvZTEpO1xuICAgICAgICB0aGF0LmFkZCh0aGlzLnNob2UyKTtcbiAgICAgICAgdGhpcy5zaG9lMS5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuc2hvZTIuZGVwdGggPSAwO1xuXG4gICAgICAgIHRoaXMuY3JhdGVzID0gY3JhdGVzLmNoaWxkcmVuLmdldEFycmF5KCkgYXMgQ3JhdGVbXTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IGdyaWRVbml0ICogdGhpcy5wYWNlO1xuICAgICAgICB0aGlzLmdyaWRVbml0ID0gZ3JpZFVuaXQgLyAxMDtcbiAgICAgICAgdGhpcy5jdXJzb3JLZXlzID0gY29uZmlnLnNjZW5lLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcbiAgICAgICAgdGhpcy5wdXNoQ3JhdGUgPSB0aGlzLnB1c2hDcmF0ZUltcGw7XG4gICAgICAgIHRoaXMud29ybGRCb3VuZHMgPSBjb25maWcuc2NlbmUucGh5c2ljcy53b3JsZC5ib3VuZHM7XG4gICAgfVxuXG4gICAgcHVibGljIGlzTW92aW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNJbnB1dDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRQbGF5ZXJPbkNyYXRlKCkge1xuICAgICAgaWYgKHRoaXMucHVzaGVkQ3JhdGUgJiYgdGhpcy5wdXNoZWRDcmF0ZS5wbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5wdXNoZWRDcmF0ZS5wbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wdXNoZWRDcmF0ZS5lbmVteSA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLnB1c2hlZENyYXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMuaGFzSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgQ29udGFpbmVyTGl0ZTtcbiAgICAgICAgdGhhdC5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGF0LmdyYXBoaWNzLmxpbmVTdHlsZSgpO1xuICAgICAgICBjb25zdCBvYnNjdXJlZFNoYXBlczogU2hhcGVDb2xsZWN0aW9uSXRlbVtdID0gW107XG4gICAgICAgIGNvbnN0IHVudWJzY3VyZWRTaGFwZXM6IFNoYXBlQ29sbGVjdGlvbkl0ZW1bXSA9IFtdO1xuXG4gICAgICAgIHRoYXQucHJlZHJhdygpO1xuICAgICAgICBjb25zdCB7IHgsIHksIGRwLCBncmFwaGljcywgcG9pbnQsIGNlbnRlckJvdHRvbSwgY2VudGVyQ2VudGVyLCB2YW5pc2hQb2ludCwgcGFzdENlbnRlcn0gPSB0aGlzIGFzIHVua25vd24gYXMgUGVyc3BlY3RpdmVNaXhpblR5cGU7XG4gICAgICAgIHNldFBvc2l0aW9uKHRoaXMucGF0aEhlbHBlciwgdGhhdCk7XG4gICAgICAgIHNldFBvc2l0aW9uKHRoaXMuaGVhZCwgdGhhdCk7XG4gICAgICAgIHNldFBvc2l0aW9uKHRoaXMuY2VudGVyLCBjZW50ZXJDZW50ZXIpO1xuICAgICAgICBzZXRQb3NpdGlvbih0aGlzLmZlZXRDaXJjbGUsIGNlbnRlckJvdHRvbSk7XG4gICAgICAgIHRoaXMuaGVhZC51cGRhdGUoKTtcbiAgICAgICAgY29uc3QgeyBlcXVhdG9yLCBwaTI6IGFsbH0gPSB0aGlzLmhlYWQgYXMgdW5rbm93biBhcyBTcGhlcmVDbGFzcztcbiAgICAgICAgY29uc3Qge2N1cnZlOiBleWVUb3BMaW5lfSA9IHRoaXMuaGVhZC5nZXRTbGljZSgneCcsIDAuOCk7XG4gICAgICAgIGNvbnN0IHtjdXJ2ZTogZXllQ2VudGVyTGluZSwgaXNPYnNjdXJlZH0gPSB0aGlzLmhlYWQuZ2V0U2xpY2UoJ3gnLCAwLjY1KTtcbiAgICAgICAgY29uc3Qge2N1cnZlOiBleWVCb3R0b21MaW5lfSA9IHRoaXMuaGVhZC5nZXRTbGljZSgneCcsIDAuNCk7XG4gICAgICAgIHRoYXQuc2V0Q2hpbGRQb3NpdGlvbih0aGlzLnNoYWRvdywgY2VudGVyQm90dG9tLngsIGNlbnRlckJvdHRvbS55KTtcbiAgICAgICAgdGhhdC5zaGFkb3cuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnNob2UxLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5zaG9lMi5kZXB0aCA9IDA7XG4gICAgICAgIGdyYXBoaWNzLnNldERlcHRoKDIpO1xuXG4gICAgICAgIGNvbnN0IGJvZHlBbmdsZSA9IHRoaXMuZ2V0Qm9keUFuZ2xlKCk7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IE5vcm1hbGl6ZShib2R5QW5nbGUpIC8gYWxsO1xuXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlQW5nbGUgID0gTm9ybWFsaXplKEJldHdlZW5Qb2ludHModmFuaXNoUG9pbnQsIHBvaW50KSkgLyBhbGw7XG4gICAgICAgIHRoYXQuc2V0Q2hpbGRSb3RhdGlvbih0aGlzLnNob2UxLCBib2R5QW5nbGUpO1xuICAgICAgICB0aGF0LnNldENoaWxkUm90YXRpb24odGhpcy5zaG9lMiwgYm9keUFuZ2xlKTtcblxuICAgICAgICBjb25zdCByaWdodFNob3VsZGVyID0gKGRpcmVjdGlvbiArIDAuMjUpICUgMTtcbiAgICAgICAgY29uc3QgbGVmdFNob3VsZGVyID0gIChkaXJlY3Rpb24gKyAwLjc1KSAlIDE7XG5cbiAgICAgICAgY29uc3Qgc2hvdWxkZXIxUG9pbnQgPSBlcXVhdG9yLmdldFBvaW50KHJlbGF0aXZlQW5nbGUgLSBkaXJlY3Rpb24gLSAwLjI1ICUgMSk7XG4gICAgICAgIGNvbnN0IHNob3VsZGVyMlBvaW50ID0gZXF1YXRvci5nZXRQb2ludChyZWxhdGl2ZUFuZ2xlIC0gZGlyZWN0aW9uIC0gMC43NSAlIDEpO1xuICAgICAgICBjb25zdCBoYW5kMSA9IG5ldyBWZWN0b3IyKENpcmNsZS5HZXRQb2ludCh0aGlzLmNlbnRlciwgcmlnaHRTaG91bGRlcikpO1xuICAgICAgICBjb25zdCBoYW5kMiA9IG5ldyBWZWN0b3IyKENpcmNsZS5HZXRQb2ludCh0aGlzLmNlbnRlciwgbGVmdFNob3VsZGVyKSk7XG5cbiAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKHRoaXMuY29sb3IpO1xuICAgICAgICBncmFwaGljcy5maWxsU3R5bGUodGhpcy5jb2xvciwgMSk7XG4gICAgICAgIGdyYXBoaWNzLmZpbGxQYXRoKCk7XG4gICAgICAgIGNvbnN0IG5vc2UgPSByZWxhdGl2ZUFuZ2xlIC0gZGlyZWN0aW9uO1xuICAgICAgICBjb25zdCBleWUxQW5nbGUgPSBub3NlIC0gMC45NCAlIDE7XG4gICAgICAgIGNvbnN0IGV5ZTJBbmdsZSA9IG5vc2UgKyAwLjk0ICUgMTtcbiAgICAgICAgY29uc3QgZXllMUFuZ2xlQiA9IG5vc2UgLSAwLjk0ICUgMTtcbiAgICAgICAgY29uc3QgZXllMkFuZ2xlQiA9IG5vc2UgKyAwLjk0ICUgMTtcbiAgICAgICAgY29uc3QgY2hlZWsxID0gbm9zZSAtIDAuMTIgJSAxO1xuICAgICAgICBjb25zdCBjaGVlazIgPSBub3NlICsgMC4xMiAlIDE7XG4gICAgICAgIGNvbnN0IGZhY2VGZWF0Q29sb3IgPSAweEZGRkZGRjtcblxuICAgICAgICBjb25zdCBleWUxQm90dG9tID0gZXllQm90dG9tTGluZS5nZXRQb2ludChleWUxQW5nbGVCKTtcbiAgICAgICAgY29uc3QgZXllMkJvdHRvbSA9IGV5ZUJvdHRvbUxpbmUuZ2V0UG9pbnQoZXllMkFuZ2xlQik7XG4gICAgICAgIGNvbnN0IGV5ZVRvcCA9IGV5ZVRvcExpbmUuZ2V0UG9pbnQoZXllMUFuZ2xlKTtcbiAgICAgICAgY29uc3QgZXllMUNlbnRlciA9IGV5ZUNlbnRlckxpbmUuZ2V0UG9pbnQoZXllMUFuZ2xlKTtcbiAgICAgICAgY29uc3QgZXllMkNlbnRlciA9IGV5ZUNlbnRlckxpbmUuZ2V0UG9pbnQoZXllMkFuZ2xlKTtcblxuICAgICAgICBjb25zdCBub3NlUG9pbnQgPSBleWVCb3R0b21MaW5lLmdldFBvaW50KG5vc2UpO1xuICAgICAgICBjb25zdCBtb3V0aFBvaW50ID0gZXF1YXRvci5nZXRQb2ludChub3NlKS5sZXJwKG5vc2VQb2ludCwgMC40KTtcbiAgICAgICAgY29uc3QgZXllMURpc3RhbmNlID0gZXllVG9wLmRpc3RhbmNlKGV5ZTFCb3R0b20pO1xuICAgICAgICBjb25zdCBleWUyRGlzdGFuY2UgPSBleWVUb3AuZGlzdGFuY2UoZXllMkJvdHRvbSk7XG5cbiAgICAgICAgY29uc3QgbGluZTEgPSAyLjIgLSAoZXllMURpc3RhbmNlIC8gdGhpcy5ncmlkVW5pdCk7XG4gICAgICAgIGNvbnN0IGxpbmUyID0gMS44IC0gKGV5ZTJEaXN0YW5jZSAvIHRoaXMuZ3JpZFVuaXQpO1xuICAgICAgICBjb25zdCBleWVXaWR0aCA9IHRoaXMuZ3JpZFVuaXQgKiAwLjU7XG4gICAgICAgIGNvbnN0IGlyaXNTaXplID0gdGhpcy5ncmlkVW5pdCAqIDAuMjU7XG4gICAgICAgIGNvbnN0IGV5ZTEgPSBnZXRBcmNTaGFwZShleWUxQ2VudGVyLCBleWVXaWR0aCwgbGluZTIsIGxpbmUxLCBib2R5QW5nbGUpO1xuICAgICAgICBjb25zdCBleWUxSXJpcyA9IGdldEFyY1NoYXBlKGV5ZTFDZW50ZXIsIGlyaXNTaXplLCBsaW5lMiwgbGluZTEsIGJvZHlBbmdsZSk7XG4gICAgICAgIGNvbnN0IGV5ZTIgPSBnZXRBcmNTaGFwZShleWUyQ2VudGVyLCBleWVXaWR0aCwgbGluZTEsIGxpbmUyLCBib2R5QW5nbGUpO1xuICAgICAgICBjb25zdCBleWUySXJpcyA9IGdldEFyY1NoYXBlKGV5ZTJDZW50ZXIsIGlyaXNTaXplICwgbGluZTEsIGxpbmUyLCBib2R5QW5nbGUpO1xuXG4gICAgICAgIGNvbnN0IGlyaXNDb2xvciA9IDB4MzU3Mzg4O1xuICAgICAgICB0aGlzLndhbGsoZGlyZWN0aW9uKTtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gdGhpcy5ncmlkVW5pdCAvIDEwO1xuICAgICAgICB1bnVic2N1cmVkU2hhcGVzLnB1c2goe3R5cGU6IC0xLCBzaGFwZTogZXllMSwgY29sb3I6IDB4RkZGRkZGLCBzdHJva2VDb2xvcjogMHgwMDAsIGxpbmVXaWR0aH0pO1xuICAgICAgICB1bnVic2N1cmVkU2hhcGVzLnB1c2goe3R5cGU6IC0xLCBzaGFwZTogZXllMUlyaXMsIGNvbG9yOiBpcmlzQ29sb3IsIHN0cm9rZUNvbG9yOiAweDAwMCwgbGluZVdpZHRofSk7XG4gICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaCh7dHlwZTogLTEsIHNoYXBlOiBleWUyLCBjb2xvcjogMHhGRkZGRkYsIHN0cm9rZUNvbG9yOiAweDAwMCwgbGluZVdpZHRofSk7XG4gICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaCh7dHlwZTogLTEsIHNoYXBlOiBleWUySXJpcywgY29sb3I6IGlyaXNDb2xvciwgc3Ryb2tlQ29sb3I6IDB4MDAwLCBsaW5lV2lkdGh9KTtcbiAgICAgICAgdW51YnNjdXJlZFNoYXBlcy5wdXNoKHt0eXBlOiBDSVJDTEUsIHN0cm9rZUNvbG9yOiAweDAwMCwgc2hhcGU6IHRoaXMuaGVhZC5zaGFwZX0pO1xuICAgICAgICB1bnVic2N1cmVkU2hhcGVzLnB1c2goe3R5cGU6IC0xLCBjb2xvcjogdGhpcy5jb2xvciwgc3Ryb2tlQ29sb3I6IDB4MDAwLCBsaW5lV2lkdGg6IHRoaXMuZ3JpZFVuaXQgLyAxMCwgc2hhcGU6IHRoaXMuZ2V0RG9tZVNoYXBlKG5vc2VQb2ludCwgdGhpcy5ncmlkVW5pdCAqIDAuMzUpfSk7XG5cbiAgICAgICAgY29uc3QgbGVnMSA9IHt0eXBlOiBMSU5FLCAgc2hhcGU6IHRoaXMuZ2V0TGluZSh0aGlzLnNob2UxLCBwb2ludCksIGNvbG9yOiB0aGlzLmNvbG9yLCBsaW5lV2lkdGg6IHRoaXMuZ3JpZFVuaXQgKiAxLjJ9O1xuICAgICAgICBjb25zdCBsZWcyID0ge3R5cGU6IExJTkUsICBzaGFwZTogdGhpcy5nZXRMaW5lKHRoaXMuc2hvZTIsIHBvaW50KSwgY29sb3I6IHRoaXMuY29sb3IsIGxpbmVXaWR0aDogdGhpcy5ncmlkVW5pdCAqIDEuMn07XG4gICAgICAgIG9ic2N1cmVkU2hhcGVzLnB1c2gobGVnMSk7XG4gICAgICAgIG9ic2N1cmVkU2hhcGVzLnB1c2gobGVnMik7XG4gICAgICAgIGNvbnN0IHRvcnNvID0gbmV3IENpcmNsZShjZW50ZXJDZW50ZXIueCwgY2VudGVyQ2VudGVyLnksIHRoaXMuZ3JpZFVuaXQgKiAyKTtcbiAgICAgICAgY29uc3Qgc2tpcnRMZW5ndGggPSBjZW50ZXJDZW50ZXIuY2xvbmUoKS5sZXJwKGNlbnRlckJvdHRvbSwgMC43KTtcbiAgICAgICAgY29uc3QgYm90dG9tQ29sb3IgPSAweDQzNmI5NDtcbiAgICAgICAgY29uc3Qgc2tpcnQgPSB0aGlzLmdldFRyZXBhem9pZCh0aGlzLnBhdGhIZWxwZXIsIG5ldyBDaXJjbGUoIHNraXJ0TGVuZ3RoLngsIHNraXJ0TGVuZ3RoLnksIHRoaXMuZ3JpZFVuaXQgKiAyLjU1KSwgYm90dG9tQ29sb3IsIDAuOTcsIG51bGwsIDB4MDAwKTtcbiAgICAgICAgaWYgKHNraXJ0KSB7XG4gICAgICAgICAgICBvYnNjdXJlZFNoYXBlcy5wdXNoKHNraXJ0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b3BDb2xvciA9IDB4NmQ4Y2FjO1xuICAgICAgICBvYnNjdXJlZFNoYXBlcy5wdXNoKHt0eXBlOiBDSVJDTEUsIGNvbG9yOiB0b3BDb2xvciwgc2hhcGU6IHRvcnNvLCBzdHJva2VDb2xvcjogMHgwMDB9KTtcblxuICAgICAgICBsZXQgaGFuZFBvczEgPSBoYW5kMTtcbiAgICAgICAgbGV0IGhhbmRQb3MyID0gaGFuZDI7XG4gICAgICAgIGlmICh0aGlzLnB1c2hlZENyYXRlICYmIHBvaW50MlZlYyh0aGlzLnB1c2hlZENyYXRlKS5kaXN0YW5jZShwb2ludCkgPCB0aGlzLnNpemUgKiA0LjUpIHtcbiAgICAgICAgICAgIGNvbnN0IHtjZW50ZXJDZW50ZXI6IGNlbnRlcn0gPSB0aGF0LmhlYWQ7XG4gICAgICAgICAgICBjb25zdCBjaXJjbGUgPSBuZXcgQ2lyY2xlKGNlbnRlci54LCBjZW50ZXIueSwgdGhpcy5zaXplICogMS40KTtcbiAgICAgICAgICAgIGNvbnN0IGEyID0gKGRpcmVjdGlvbiArIDAuMSkgJSAxO1xuICAgICAgICAgICAgY29uc3QgYjIgPSAoZGlyZWN0aW9uICsgMC45KSAlIDE7XG4gICAgICAgICAgICBoYW5kUG9zMSA9IHBvaW50MlZlYyhjaXJjbGUuZ2V0UG9pbnQoYTIpKTtcbiAgICAgICAgICAgIGhhbmRQb3MyID0gcG9pbnQyVmVjKGNpcmNsZS5nZXRQb2ludChiMikpO1xuICAgICAgICB9XG5cbiAgICAgICAgb2JzY3VyZWRTaGFwZXMucHVzaCh7dHlwZTogQ0lSQ0xFLCBjb2xvcjogdGhpcy5jb2xvciwgc2hhcGU6IG5ldyBDaXJjbGUoaGFuZFBvczEueCwgaGFuZFBvczEueSwgdGhpcy5ncmlkVW5pdCAqIDAuOCksIHN0cm9rZUNvbG9yOiAweDAwMH0pO1xuICAgICAgICBvYnNjdXJlZFNoYXBlcy5wdXNoKHt0eXBlOiBDSVJDTEUsIGNvbG9yOiB0aGlzLmNvbG9yLCBzaGFwZTogbmV3IENpcmNsZShoYW5kUG9zMi54LCBoYW5kUG9zMi55LCB0aGlzLmdyaWRVbml0ICogMC44KSwgc3Ryb2tlQ29sb3I6IDB4MDAwfSk7XG4gICAgICAgIGNvbnN0IGFybTFMaW5lID0gdGhpcy5nZXRMaW5lKHNob3VsZGVyMVBvaW50LCBoYW5kUG9zMSk7XG4gICAgICAgIGNvbnN0IGFybTJMaW5lID0gdGhpcy5nZXRMaW5lKHNob3VsZGVyMlBvaW50LCBoYW5kUG9zMik7XG4gICAgICAgIGNvbnN0IGFybTEgPSB7dHlwZTogTElORSwgIHNoYXBlOiBhcm0xTGluZSwgY29sb3I6IHRvcENvbG9yLCBsaW5lV2lkdGg6IHRoaXMuZ3JpZFVuaXQgKiAxLjJ9O1xuICAgICAgICBjb25zdCBhcm0xT3V0bGluZSA9IHt0eXBlOiBMSU5FLCAgc2hhcGU6IGFybTFMaW5lLCBjb2xvcjogMHgwMDAsIGxpbmVXaWR0aDogdGhpcy5ncmlkVW5pdCAqIDEuOH07XG4gICAgICAgIGNvbnN0IGFybTIgPSB7dHlwZTogTElORSwgIHNoYXBlOiBhcm0yTGluZSwgY29sb3I6IHRvcENvbG9yLCBsaW5lV2lkdGg6IHRoaXMuZ3JpZFVuaXQgKiAxLjJ9O1xuICAgICAgICBjb25zdCBhcm0yT3V0bGluZSA9IHt0eXBlOiBMSU5FLCAgc2hhcGU6IGFybTJMaW5lLCBjb2xvcjogMHgwMDAsIGxpbmVXaWR0aDogdGhpcy5ncmlkVW5pdCAqIDEuOH07XG5cbiAgICAgICAgb2JzY3VyZWRTaGFwZXMucHVzaCh7dHlwZTogQ0lSQ0xFLCBjb2xvcjogdG9wQ29sb3IsIHN0cm9rZUNvbG9yOiAweDAwMCwgc2hhcGU6IG5ldyBDaXJjbGUoc2hvdWxkZXIxUG9pbnQueCwgc2hvdWxkZXIxUG9pbnQueSwgdGhpcy5ncmlkVW5pdCAqIDAuNjUpfSk7XG4gICAgICAgIG9ic2N1cmVkU2hhcGVzLnB1c2goe3R5cGU6IENJUkNMRSwgY29sb3I6IHRvcENvbG9yLCBzdHJva2VDb2xvcjogMHgwMDAsIHNoYXBlOiBuZXcgQ2lyY2xlKHNob3VsZGVyMlBvaW50LngsIHNob3VsZGVyMlBvaW50LnksIHRoaXMuZ3JpZFVuaXQgKiAwLjY1KX0pO1xuXG4gICAgICAgIG9ic2N1cmVkU2hhcGVzLnB1c2goYXJtMU91dGxpbmUpO1xuICAgICAgICBvYnNjdXJlZFNoYXBlcy5wdXNoKGFybTJPdXRsaW5lKTtcbiAgICAgICAgb2JzY3VyZWRTaGFwZXMucHVzaChhcm0xKTtcbiAgICAgICAgb2JzY3VyZWRTaGFwZXMucHVzaChhcm0yKTtcblxuICAgICAgICBncmFwaGljcy5maWxsU3R5bGUoZmFjZUZlYXRDb2xvcik7XG5cbiAgICAgICAgdGhpcy5kcmF3U2hhcGVzKG9ic2N1cmVkU2hhcGVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKHRoaXMuY29sb3IsIDEpO1xuICAgICAgICBncmFwaGljcy5maWxsQ2lyY2xlU2hhcGUodGhpcy5oZWFkLnNoYXBlKTtcblxuICAgICAgICAvLyBjb25zdCBsb2sxID0gIGdldEFyY1NoYXBlKHBvaW50LCB0aGlzLmdyaWRVbml0LCAxLjgsIDEuNSwgYm9keUFuZ2xlICsgTWF0aC5QSSk7IC8veyB4LCB5LCByYWRpdXM6IHRoaXMuZ3JpZFVuaXQgLCBzdGFydEFuZ2xlOiBib2R5QW5nbGUgLSAwLjEsIGVuZEFuZ2xlOiBib2R5QW5nbGUgfTtcbiAgICAgICAgY29uc3QgbG9rMSA9ICB7IHgsIHksIHJhZGl1czogdGhpcy5ncmlkVW5pdCAsIHN0YXJ0QW5nbGU6IGJvZHlBbmdsZSAtIDAuMSwgZW5kQW5nbGU6IGJvZHlBbmdsZSB9O1xuICAgICAgICBjb25zdCB0b3BCbG9uZGUgPSAweGQ5YjM4MDtcbiAgICAgICAgY29uc3QgYm90dG9tQmxvbmRlID0gMHhkYzg5ZjczO1xuICAgICAgICBjb25zdCBidW5wID0gZXF1YXRvci5nZXRQb2ludChyZWxhdGl2ZUFuZ2xlIC0gZGlyZWN0aW9uIC0gMC41ICUgMSk7XG4gICAgICAgIGNvbnN0IGhhaXIgPSB0aGlzLmdldFRyZXBhem9pZCh0aGlzLnBhdGhIZWxwZXIsIG5ldyBDaXJjbGUoIGJ1bnAueCwgYnVucC55LCB0aGlzLmdyaWRVbml0ICogMi41NSksIGJvdHRvbUJsb25kZSwgMC45NiwgbnVsbCwgIDB4MDg2NjI1MSk7XG4gICAgICAgIGlmIChoYWlyKSB7XG4gICAgICAgICAgICB1bnVic2N1cmVkU2hhcGVzLnB1c2goaGFpcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc3Qgc2hhcGUgPSBnZXRBcmNDdXJ2ZShsb2sxKTtcbiAgICAgICAgY29uc3QgdG9wSGFpcjEgPSBnZXRBcmNTaGFwZShwb2ludCwgdGhpcy5zaXplLCAxLCAyLjcsIGJvZHlBbmdsZSk7XG4gICAgICAgIGNvbnN0IHRvcEhhaXIyID0gZ2V0QXJjU2hhcGUocG9pbnQsIHRoaXMuc2l6ZSwgMS42LCAxLCBib2R5QW5nbGUpO1xuICAgICAgICB1bnVic2N1cmVkU2hhcGVzLnB1c2goe3R5cGU6IC0xLCBzaGFwZTogdG9wSGFpcjEsIGNvbG9yOiB0b3BCbG9uZGUsIHN0cm9rZUNvbG9yOiAwWDA4NjYyNTF9KTtcbiAgICAgICAgdW51YnNjdXJlZFNoYXBlcy5wdXNoKHt0eXBlOiAtMSwgc2hhcGU6IHRvcEhhaXIyLCBjb2xvcjogdG9wQmxvbmRlLCBzdHJva2VDb2xvcjogMFgwODY2MjUxfSk7XG4gICAgICAgIHVudWJzY3VyZWRTaGFwZXMucHVzaCh7dHlwZTogQ0lSQ0xFLCBzaGFwZTogbG9rMSwgY29sb3I6IHRvcEJsb25kZX0pO1xuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpcy5ncmlkVW5pdCAvIDQsIDB4MDAwKTtcblxuICAgICAgICBncmFwaGljcy5maWxsU3R5bGUodGhpcy5jb2xvciwgMSk7XG5cbiAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKDB4OWYxZjE5LCAwLjcpO1xuICAgICAgICBkcChtb3V0aFBvaW50KTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKDB4OWYxZjE5LCAwLjIpO1xuXG4gICAgICAgIGRwKGV5ZUJvdHRvbUxpbmUuZ2V0UG9pbnQoY2hlZWsxKSk7XG4gICAgICAgIGRwKGV5ZUJvdHRvbUxpbmUuZ2V0UG9pbnQoY2hlZWsyKSk7XG5cbiAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKGZhY2VGZWF0Q29sb3IsIDEpO1xuXG4gICAgICAgIGdyYXBoaWNzLmZpbGxTdHlsZSgweEZGRkZGRiwgMSk7XG4gICAgICAgIHRoaXMuZHJhd1NoYXBlcyh1bnVic2N1cmVkU2hhcGVzKTtcblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMCwgMCk7XG4gICAgfVxuICAgIHB1YmxpYyBjcmF0ZUNvbGxpZGVyID0gKG1lOiBQbGF5ZXIsIGNyYXRlOiBDcmF0ZSkgPT4ge1xuXG4gICAgICB0aGlzLnB1c2hlZENyYXRlID0gY3JhdGU7XG4gICAgICBpZiAoIWNyYXRlLnBsYXllcikge1xuICAgICAgICBjcmF0ZS5wbGF5ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5oYW5kbGVDcmF0ZUNvbGxpc29uKGNyYXRlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB3YWxrKGRpcmVjdGlvbikge1xuICAgICAgICBjb25zdCB7IGdyYXBoaWNzLCBwb2ludCB9ID0gdGhpcyBhcyB1bmtub3duIGFzIFBlcnNwZWN0aXZlTWl4aW5UeXBlO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzIGFzIENvbnRhaW5lckxpdGU7XG5cbiAgICAgICAgLy8gcmUtZW5hYmxlIG1vdmluZyBpbiBhIGNlcnRhaW4gZGlyZWN0aW9uIGlmIHBhc3NlZCBhIGJsb2NrYWRlXG4gICAgICAgIGlmICh0aGlzLnB1c2hlZENyYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QmxvY2tlZERpcmVjdGlvbnModGhpcy5wdXNoZWRDcmF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFdmVyeSBmcmFtZSwgd2UgY3JlYXRlIGEgbmV3IHZlbG9jaXR5IGZvciB0aGUgc3ByaXRlIGJhc2VkIG9uIHdoYXQga2V5cyB0aGUgcGxheWVyIGlzIGhvbGRpbmcgZG93bi5cbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMigwLCAwKTtcbiAgICAgICAgY29uc3QgeyBsZWZ0OiB7IGlzRG93bjogbGVmdERvd259LCByaWdodDogeyBpc0Rvd246IHJpZ2h0RG93bn0sIHVwOiB7IGlzRG93bjogdXBEb3dufSwgZG93bjoge2lzRG93bjogZG93bkRvd259fSA9IHRoaXMuY3Vyc29yS2V5cztcbiAgICAgICAgaWYgKGxlZnREb3duICYmICF0aGlzLmJsb2NrZWREaXJlY3Rpb24ubGVmdCkge1xuICAgICAgICAgICAgdmVsb2NpdHkueCAtPSAxO1xuICAgICAgICAgICAgdGhpcy5oYXNJbnB1dCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJsb2NrZWREaXJlY3Rpb24ucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHREb3duICYmICF0aGlzLmJsb2NrZWREaXJlY3Rpb24ucmlnaHQpICB7XG4gICAgICAgICAgICB2ZWxvY2l0eS54ICs9IDE7XG4gICAgICAgICAgICB0aGlzLmhhc0lucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tlZERpcmVjdGlvbi5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVwRG93biAmJiAhdGhpcy5ibG9ja2VkRGlyZWN0aW9uLnVwKSB7XG4gICAgICAgICAgICB2ZWxvY2l0eS55IC09IDE7XG4gICAgICAgICAgICB0aGlzLmhhc0lucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tlZERpcmVjdGlvbi5kb3duID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvd25Eb3duICYmICF0aGlzLmJsb2NrZWREaXJlY3Rpb24uZG93bikge1xuICAgICAgICAgICAgdmVsb2NpdHkueSArPSAxO1xuICAgICAgICAgICAgdGhpcy5oYXNJbnB1dCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJsb2NrZWREaXJlY3Rpb24udXAgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNJbnB1dCkge1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLnBhY2UgLyA2MDA7XG4gICAgICAgICAgICBpZiAodGhpcy5ub3cgPj0gMSkge3RoaXMuc3RlcCA9IC1jb3VudDsgfVxuICAgICAgICAgICAgaWYgKHRoaXMubm93IDw9IDApIHt0aGlzLnN0ZXAgPSArY291bnQ7IH1cbiAgICAgICAgICAgIHRoaXMubm93ICs9IHRoaXMuc3RlcDtcbiAgICAgICAgICAgIGNvbnN0IGExID0gKGRpcmVjdGlvbiArIDAuNDUpICUgMTtcbiAgICAgICAgICAgIGNvbnN0IGEyID0gKGRpcmVjdGlvbiArIDAuMDUpICUgMTtcblxuICAgICAgICAgICAgY29uc3QgYjEgPSAoZGlyZWN0aW9uICsgMC41NSkgJSAxO1xuICAgICAgICAgICAgY29uc3QgYjIgPSAoZGlyZWN0aW9uICsgMC45NSkgJSAxO1xuICAgICAgICAgICAgY29uc3QgcDEgPSBwb2ludDJWZWModGhpcy5mZWV0Q2lyY2xlLmdldFBvaW50KGExKSk7XG4gICAgICAgICAgICBjb25zdCBwMiA9IHBvaW50MlZlYyh0aGlzLmZlZXRDaXJjbGUuZ2V0UG9pbnQoYjEpKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxTdHlsZSgweDBGRkZGRiwgMSk7XG4gICAgICAgICAgICBjb25zdCBwcCA9IHRoaXMuZmVldENpcmNsZS5nZXRQb2ludChhMik7XG4gICAgICAgICAgICBjb25zdCBwcGIgPSB0aGlzLmZlZXRDaXJjbGUuZ2V0UG9pbnQoYjIpO1xuICAgICAgICAgICAgY29uc3QgcGEgPSBwMS5jbG9uZSgpLmxlcnAocHAsIHRoaXMubm93KTtcbiAgICAgICAgICAgIGNvbnN0IHBiID0gcDIuY2xvbmUoKS5sZXJwKHBwYiwgTWF0aC5hYnModGhpcy5ub3cgLSAxKSk7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0Q2hpbGRQb3NpdGlvbih0aGlzLnNob2UxLCBwYS54LCBwYS55KTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRDaGlsZFBvc2l0aW9uKHRoaXMuc2hvZTIsIHBiLngsIHBiLnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgLy8gV2Ugbm9ybWFsaXplIHRoZSB2ZWxvY2l0eSBzbyB0aGF0IHRoZSBwbGF5ZXIgaXMgYWx3YXlzIG1vdmluZyBhdCB0aGUgc2FtZSBzcGVlZCwgcmVnYXJkbGVzcyBvZiBkaXJlY3Rpb24uXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRWZWxvY2l0eSA9IHZlbG9jaXR5Lm5vcm1hbGl6ZSgpO1xuICAgICAgICBjb25zdCBnYW1lT2JqZWN0ID0gKHRoaXMgYXMgdW5rbm93biBhcyBHYW1lT2JqZWN0cy5HYW1lT2JqZWN0KTtcbiAgICAgICAgKGdhbWVPYmplY3QuYm9keSBhcyBQaHlzaWNzLkFyY2FkZS5Cb2R5KVxuICAgICAgICAgICAgLnNldFZlbG9jaXR5KG5vcm1hbGl6ZWRWZWxvY2l0eS54ICogdGhpcy5zcGVlZCwgbm9ybWFsaXplZFZlbG9jaXR5LnkgKiB0aGlzLnNwZWVkKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBwdXNoQ3JhdGVJbXBsKGRpcmVjdGlvbjogc3RyaW5nLCBjcmF0ZTogQ3JhdGUpIHtcbiAgICAgICAgY29uc3QgdXAgPSBkaXJlY3Rpb24gPT09ICd1cCc7XG4gICAgICAgIGNvbnN0IGRvd24gPSBkaXJlY3Rpb24gPT09ICdkb3duJztcbiAgICAgICAgY29uc3QgcmlnaHQgPSBkaXJlY3Rpb24gPT09ICdyaWdodCc7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JztcbiAgICAgICAgY29uc3Qgbm9uZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjb2xsaXNpb246IFR5cGVzLlBoeXNpY3MuQXJjYWRlLkFyY2FkZUJvZHlDb2xsaXNpb24gPSB7IHVwLCBkb3duLCByaWdodCwgbGVmdCwgbm9uZSB9O1xuICAgICAgICBjb25zdCBheGlzID0gdXAgfHwgZG93biA/ICd5JyA6ICd4JztcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uOiBDcmF0ZVtdID0gdGhpcy5jcmF0ZXMuZmlsdGVyKChpdGVtOiBDcmF0ZSkgPT4gY29sbGlkZXNPbkF4ZXMoY3JhdGUsIGl0ZW0sIGNvbGxpc2lvbikpXG4gICAgICAgICAgICAuc29ydCgoYTogQ3JhdGUsIGI6IENyYXRlKSA9PiBhW2F4aXNdIDwgYltheGlzXSA/IC0xIDogMSApO1xuICAgICAgICBjb25zdCBjb2xsaWRpbmdDcmF0ZSA9IHVwIHx8IGxlZnQgPyBzZWxlY3Rpb24ucG9wKCkgOiBzZWxlY3Rpb25bMF07XG5cbiAgICAgICAgaWYgKGltcGFzc2FibGUoY3JhdGUsIGNvbGxpZGluZ0NyYXRlLCB0aGlzLmZhY3RvciwgY29sbGlzaW9uLCB0aGlzLndvcmxkQm91bmRzKSkge1xuICAgICAgICAgICAgdGhpcy5ibG9ja2VkRGlyZWN0aW9uID0geyB1cCwgZG93biwgcmlnaHQsIGxlZnQsIG5vbmU6IGZhbHNlfTtcbiAgICAgICAgICAgIGNvbnN0IG9wQXhpcyA9IHJpZ2h0IHx8IGxlZnQgPyAneScgOiAneCc7XG4gICAgICAgICAgICB0aGlzW2Ake29wQXhpc31UaHJlc2hvbGRgXSA9IGNyYXRlW29wQXhpc10gLyB0aGlzLmdyaWRVbml0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXAgfHwgbGVmdCA/IGNyYXRlW2F4aXNdIC09IHRoaXMuZmFjdG9yIDogY3JhdGVbYXhpc10gKz0gdGhpcy5mYWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgY3JhdGUudXBkYXRlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtDb25zdHJ1Y3Rvcn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IDxUQmFzZSBleHRlbmRzIENvbnN0cnVjdG9yPihCYXNlOiBUQmFzZSkgPT5cbiAgICBjbGFzcyBleHRlbmRzIEJhc2Uge1xuICAgICAgICBwcml2YXRlIGRyYXdGYWNlKHRvcCwgYm90dG9tLCBmbG9vclRvcCwgZmxvb3JCb3R0b20pIHtcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBkcmF3IGEgc2ltcGxlIGNyYXRlICd0ZXh0dXJlJ1xuICAgICAgICAgICAgLy8gYXMgcGhhc2VyIHNlZW1zIHRvIGhhdmUgbG9zdCB0aGUgYWJpbGl0eSB0byBkcmF3IGEgdGV4dHVyZSBvbiB0aGUgZ3JhcGhpY3MgZ2FtZSBvYmplY3QgaW4gMy41eC5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHtncmFwaGljcywgdmFuaXNoUG9pbnQsIHBvaW50LCBncmlkVW5pdH0gPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgbWFnaWNaID0gKDEwMDAgLSB2YW5pc2hQb2ludC5kaXN0YW5jZShwb2ludCkpIC8gMTAwMCArIDE7XG4gICAgICAgICAgICBncmFwaGljcy5zZXREZXB0aChtYWdpY1opO1xuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKDB4Q0NDQ0NDLCAxKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZShncmlkVW5pdCAvIDQsIDB4MDAwLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdmlkZSA9IDEgLyA1O1xuICAgICAgICAgICAgY29uc3QgdG9wYm9hcmQgPSB0b3AuY2xvbmUoKS5sZXJwKGZsb29yVG9wLCBkaXZpZGUpO1xuICAgICAgICAgICAgY29uc3QgYm90dG9tYm9hcmQgPSBib3R0b20uY2xvbmUoKS5sZXJwKGZsb29yQm90dG9tLCBkaXZpZGUpO1xuICAgICAgICAgICAgY29uc3QgdG9wZmxvb3Jib2FyZCA9IGZsb29yVG9wLmNsb25lKCkubGVycCh0b3AsIGRpdmlkZSk7XG4gICAgICAgICAgICBjb25zdCBib3R0b21mbG9vcmJvYXJkID0gZmxvb3JCb3R0b20uY2xvbmUoKS5sZXJwKGJvdHRvbSwgZGl2aWRlKTtcblxuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbFBvaW50cyhbdG9wLCBib3R0b20sIGJvdHRvbWJvYXJkLCB0b3Bib2FyZF0sIHRydWUpO1xuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlUGF0aCgpO1xuXG4gICAgICAgICAgICBncmFwaGljcy5maWxsUG9pbnRzKFt0b3BmbG9vcmJvYXJkLCBib3R0b21mbG9vcmJvYXJkLCBmbG9vckJvdHRvbSwgZmxvb3JUb3BdLCB0cnVlKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcblxuICAgICAgICAgICAgLy8gZHJhdyA3IHNlbWkgdHJhbnNwYXJhbnQgdmVydGljYWwgd29vZGVuIGJlYW1zIG9uIHRoZSBjZW50ZXIgb2YgdGhlIGNyYXRlXG4gICAgICAgICAgICBsZXQgcHJldlRvcCA9IHRvcGJvYXJkO1xuICAgICAgICAgICAgbGV0IHByZXZDb3JuZXIgPSB0b3BmbG9vcmJvYXJkO1xuICAgICAgICAgICAgY29uc3QgYmVhbXMgPSA3O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYmVhbXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlcnAgPSBpIC8gYmVhbXM7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wc2lkZWJvYXJkID0gdG9wYm9hcmQuY2xvbmUoKS5sZXJwKGJvdHRvbWJvYXJkLCBsZXJwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBib3R0b21zaWRlYm9hcmQgPSB0b3BmbG9vcmJvYXJkLmNsb25lKCkubGVycChib3R0b21mbG9vcmJvYXJkLCBsZXJwKTtcblxuICAgICAgICAgICAgICAgIGxldCBhbHBoYSA9IDE7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDQgfHwgaSA9PT0gNiB8fCBpID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGFscGhhID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbFN0eWxlKDB4Q0NDQ0NDLCBhbHBoYSk7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbFBvaW50cyhbcHJldlRvcCwgcHJldkNvcm5lciwgYm90dG9tc2lkZWJvYXJkLCB0b3BzaWRlYm9hcmRdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5zdHJva2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICBwcmV2VG9wID0gdG9wc2lkZWJvYXJkO1xuICAgICAgICAgICAgICAgIHByZXZDb3JuZXIgPSBib3R0b21zaWRlYm9hcmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuIiwiaW1wb3J0IHtTY2VuZX0gZnJvbSAncGhhc2VyJztcbmltcG9ydCBXYWxsIGZyb20gJy4vV2FsbCc7XG5pbXBvcnQge3BvaW50MlZlYywgcHl0LCBjYWxjdWxhdGVDaXJjbGVDZW50ZXJ9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHtQZXJzcGVjdGl2ZU1peGluVHlwZX0gZnJvbSAnLi9QZXJzcGVjdGl2ZU1peGluJztcbmltcG9ydCBFbGxpcHNlID0gUGhhc2VyLkN1cnZlcy5FbGxpcHNlO1xuaW1wb3J0IFZlY3RvcjIgPSBQaGFzZXIuTWF0aC5WZWN0b3IyO1xuaW1wb3J0IENpcmNsZSA9IFBoYXNlci5HZW9tLkNpcmNsZTtcbmltcG9ydCBSYWRUb0RlZyA9IFBoYXNlci5NYXRoLlJhZFRvRGVnO1xuaW1wb3J0IE5vcm1hbGl6ZSA9IFBoYXNlci5NYXRoLkFuZ2xlLk5vcm1hbGl6ZTtcbmltcG9ydCBCZXR3ZWVuUG9pbnRzID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2VlblBvaW50cztcbmltcG9ydCBMaW5lID0gUGhhc2VyLkdlb20uTGluZTtcbmltcG9ydCBHZXRDaXJjbGVUb0NpcmNsZSA9IFBoYXNlci5HZW9tLkludGVyc2VjdHMuR2V0Q2lyY2xlVG9DaXJjbGU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV2FsbCB7XG4gICAgZ2V0IHBpMigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy4kcGkyO1xuICAgIH1cbiAgICBnZXQgaXNPYnNjdXJlZCgpOiAocG9pbnQ6IFBoYXNlci5NYXRoLlZlY3RvcjIpID0+IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy4kaXNPYnNjdXJlZDtcbiAgICB9XG4gICAgZ2V0IG1lcmlkaWFuKCk6IFBoYXNlci5DdXJ2ZXMuRWxsaXBzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRtZXJpZGlhbjtcbiAgICB9XG4gICAgZ2V0IGVxdWF0b3IoKTogRWxsaXBzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRlcXVhdG9yO1xuICAgIH1cbiAgICBnZXQgc2hhcGUoKTogQ2lyY2xlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlO1xuICAgIH1cbiAgICBwcml2YXRlICRwaTI6IG51bWJlcjtcbiAgICBwcml2YXRlICRlcXVhdG9yOiBFbGxpcHNlO1xuICAgIHByaXZhdGUgJG1lcmlkaWFuOiBFbGxpcHNlO1xuICAgIHByaXZhdGUgYW5nbGUyVlA6IG51bWJlcjtcbiAgICBwcml2YXRlIGFuZ2xlMlZQUmFkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBjaXJjbGU6IENpcmNsZTtcbiAgICBwcml2YXRlIHJhZGl1czogbnVtYmVyO1xuICAgIHByaXZhdGUgJGVxdWF0b3JBeGlzOiBMaW5lO1xuICAgIHByaXZhdGUgJGlzT2JzY3VyZWQ7XG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lLCB4OiBudW1iZXIgLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkLCBjb2xvcjogbnVtYmVyLCB1cCA9IGZhbHNlLCBkb3duID0gZmFsc2UsIGxlZnQgPSBmYWxzZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgdywgaCwgZCwgY29sb3IsICdzcGhlcmUnLCB7bm9uZTogZmFsc2UsIHVwLCBkb3duLCByaWdodCwgbGVmdH0pO1xuICAgICAgICB0aGlzLmFscGhhID0gMDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSB3IC8gMjtcbiAgICAgICAgdGhpcy4kcGkyID0gMiAqIE1hdGguUEk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRTbGljZShheGlzLCBwZXJjKSB7XG4gICAgICAgIGNvbnN0IHtjZW50ZXJDZW50ZXIsIHBvaW50LCBncmFwaGljc30gPSB0aGlzIGFzIHVua25vd24gYXMgUGVyc3BlY3RpdmVNaXhpblR5cGU7XG4gICAgICAgIGNvbnN0IGVsbGlwc2UgPSBheGlzID09PSAneCcgPyB0aGlzLiRlcXVhdG9yIDogdGhpcy4kbWVyaWRpYW47XG4gICAgICAgIGNvbnN0IGxlcnAgPSBheGlzID09PSAneCcgPyBwb2ludCA6ICB0aGlzLmVxdWF0b3IuZ2V0UG9pbnQoMCk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5yYWRpdXMgKiBwZXJjO1xuICAgICAgICBjb25zdCBzaXplID0gcHl0KGRpc3RhbmNlLCB0aGlzLnJhZGl1cyk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2VudGVyQ2VudGVyLmNsb25lKCkubGVycChsZXJwLCBwZXJjKTtcblxuICAgICAgICBjb25zdCBhcmVhQ2lyY2xlID0gbmV3IENpcmNsZShwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplKTtcbiAgICAgICAgbGV0IGludGVyc2VjdGlvbjtcbiAgICAgICAgaW50ZXJzZWN0aW9uID0gR2V0Q2lyY2xlVG9DaXJjbGUoYXJlYUNpcmNsZSwgdGhpcy5jaXJjbGUsIGludGVyc2VjdGlvbik7XG4gICAgICAgIGNvbnN0IGN1cnZlID0gbmV3IEVsbGlwc2UocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgZWxsaXBzZVtgJHtheGlzfVJhZGl1c2BdIC8gKHRoaXMucmFkaXVzIC8gc2l6ZSksIHNpemUsIDAsIDM2MCwgdHJ1ZSAsIHRoaXMuYW5nbGUyVlApO1xuICAgICAgICBsZXQgaXNPYnNjdXJlZCA9IChiKSA9PiBmYWxzZTtcbiAgICAgICAgaWYgKGludGVyc2VjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgY29uc3QgcDEgPSBwb2ludDJWZWMoaW50ZXJzZWN0aW9uWzBdKTtcbiAgICAgICAgICAgICBjb25zdCBwMiA9IHBvaW50MlZlYyhpbnRlcnNlY3Rpb25bMV0pO1xuXG4gICAgICAgICAgICAgY29uc3QgbWlkZGxlID0gcDEubGVycChwMiwgMC41KTtcbiAgICAgICAgICAgICBpc09ic2N1cmVkID0gKHA6IFZlY3RvcjIpID0+IG1pZGRsZS5kaXN0YW5jZShwKSA8PSBwMS5kaXN0YW5jZShwMikgJiYgaW50ZXJzZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIC8vIGN1cnZlLmRyYXcoZ3JhcGhpY3MpO1xuICAgICAgICByZXR1cm4ge2N1cnZlLCBpc09ic2N1cmVkfTtcbiAgICB9XG4gICAgcHVibGljIHVwZGF0ZSgpIHtcbiAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBQZXJzcGVjdGl2ZU1peGluVHlwZSkucHJlZHJhdygpOyAvLyBjYXVzYWxpdHlcbiAgICAgICAgY29uc3QgeyB2ZXJ0aWNlczogdiwgY2VudGVyQ2VudGVyLCB2YW5pc2hQb2ludCwgcG9pbnQsIGdyaWRVbml0LCBncmFwaGljcyB9ID0gdGhpcyBhcyB1bmtub3duIGFzIFBlcnNwZWN0aXZlTWl4aW5UeXBlO1xuICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICBncmFwaGljcy5zZXREZXB0aCg0KTtcbiAgICAgICAgY29uc3QgbmV3Q2lyY2xlID0gbmV3IENpcmNsZShjZW50ZXJDZW50ZXIueCwgY2VudGVyQ2VudGVyLnksIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdGhpcy5jaXJjbGUgPSBuZXdDaXJjbGU7XG5cbiAgICAgICAgY29uc3QgYnAgPSBCZXR3ZWVuUG9pbnRzKHZhbmlzaFBvaW50LCBwb2ludCk7XG4gICAgICAgIHRoaXMuYW5nbGUyVlBSYWQgPSBicCAvIHRoaXMuJHBpMjtcbiAgICAgICAgdGhpcy5hbmdsZTJWUCA9IFJhZFRvRGVnKGJwKTtcblxuICAgICAgICBjb25zdCB7eDogeFJhZGl1cywgeTogeVJhZGl1c30gPSB0aGlzLmdldFBsYW5lcyhjZW50ZXJDZW50ZXIsIHBvaW50LCBuZXdDaXJjbGUpO1xuXG4gICAgICAgIHRoaXMuJGVxdWF0b3IgPSBuZXcgRWxsaXBzZShjZW50ZXJDZW50ZXIueCwgY2VudGVyQ2VudGVyLnksIHhSYWRpdXMsIHRoaXMucmFkaXVzLCAwLCAxLCB0cnVlLCAgdGhpcy5hbmdsZTJWUCk7XG4gICAgICAgIHRoaXMuJG1lcmlkaWFuID0gbmV3IEVsbGlwc2UoY2VudGVyQ2VudGVyLngsIGNlbnRlckNlbnRlci55LCB5UmFkaXVzLCB0aGlzLnJhZGl1cywgMCwgMSwgdHJ1ZSwgdGhpcy5hbmdsZTJWUCk7XG5cbiAgICAgICAgLy8gdGhpcy5lcXVhdG9yLmRyYXcoZ3JhcGhpY3MpO1xuICAgICAgICBncmFwaGljcy5maWxsU3R5bGUoMHhGRkYwMDApO1xuICAgICAgICBjb25zdCBlcWF1dG9yQXhpczEgPSB0aGlzLmVxdWF0b3IuZ2V0UG9pbnQoMC4yNSk7XG4gICAgICAgIGNvbnN0IGVxYXV0b3JBeGlzMiA9IHRoaXMuZXF1YXRvci5nZXRQb2ludCgwLjc1KTtcbiAgICAgICAgY29uc3QgbWlkUG9pbnQgPSB0aGlzLmVxdWF0b3IuZ2V0UG9pbnQoMC41KS5sZXJwKGNlbnRlckNlbnRlciwgMC41KTtcbiAgICAgICAgY29uc3QgbWlkZGxlID0gY2FsY3VsYXRlQ2lyY2xlQ2VudGVyKGVxYXV0b3JBeGlzMSwgZXFhdXRvckF4aXMyLCBtaWRQb2ludCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3Q2lyY2xlLmdldFBvaW50KDAuNSk7XG4gICAgICAgIGNvbnN0IGVuZCA9IG5ld0NpcmNsZS5nZXRQb2ludCgxKTtcbiAgICAgICAgdGhpcy4kaXNPYnNjdXJlZCA9IChwOiBWZWN0b3IyKSA9PiBtaWRkbGUuZGlzdGFuY2UocCkgPD0gZXFhdXRvckF4aXMxLmRpc3RhbmNlKGVxYXV0b3JBeGlzMikgJiYgW2VxYXV0b3JBeGlzMSwgZXFhdXRvckF4aXMyXTtcblxuICAgICAgICB0aGlzLiRlcXVhdG9yQXhpcyA9IG5ldyBMaW5lKGVxYXV0b3JBeGlzMS54LCBlcWF1dG9yQXhpczIueSwgZXFhdXRvckF4aXMyLngsIGVxYXV0b3JBeGlzMi55KTtcblxuICAgICAgICAvLyBncmFwaGljcy5zdHJva2VDaXJjbGVTaGFwZShhcmVhQ2lyY2xlKTtcbiAgICAgICAgLy8gdGhpcy5tZXJpZGlhbi5kcmF3KGdyYXBoaWNzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFBsYW5lcyhjZW50ZXIsIHBvbGUsIGNpcmNsZSkge1xuICAgICAgICBjb25zdCBsID0gY2VudGVyLmRpc3RhbmNlKHBvbGUpO1xuICAgICAgICBjb25zdCBzID0gcHl0KGwsIGNpcmNsZS5yYWRpdXMpO1xuICAgICAgICBjb25zdCBhbmdsZSA9IE5vcm1hbGl6ZShMaW5lLkFuZ2xlKG5ldyBMaW5lKHMsIGwpKSkgLyB0aGlzLiRwaTI7XG4gICAgICAgIGNvbnN0IG1pcnJvciA9ICAoYW5nbGUgKyAwLjUpICUgMTtcbiAgICAgICAgY29uc3QgYSA9IGNpcmNsZS5nZXRQb2ludChhbmdsZSk7XG4gICAgICAgIGNvbnN0IGIgPSBjaXJjbGUuZ2V0UG9pbnQobWlycm9yKTtcbiAgICAgICAgY29uc3QgeSA9IChiLnkgLSBhLnkgKSAvIDI7XG4gICAgICAgIGNvbnN0IHggPSAoYi54IC0gYS54ICkgLyAyO1xuXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih4LCB5KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1NjZW5lfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHtEaXJlY3Rpb24sIENvbGxpc2lvbjREaXJlY3Rpb259IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IEFyY2FkZUJvZHlDb2xsaXNpb24gPSBQaGFzZXIuVHlwZXMuUGh5c2ljcy5BcmNhZGUuQXJjYWRlQm9keUNvbGxpc2lvbjtcbmltcG9ydCB7UGVyc3BlY3RpdmVNaXhpblR5cGV9IGZyb20gJy4vUGVyc3BlY3RpdmVNaXhpbic7XG5cbmNsYXNzIFdhbGwgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcbiAgICBnZXQgZGlyZWN0aW9uKCk6IEFyY2FkZUJvZHlDb2xsaXNpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy4kZGlyZWN0aW9uO1xuICAgIH1cbiAgcHJpdmF0ZSBrZXk7XG4gIHByaXZhdGUgY29sb3I6IG51bWJlcjtcbiAgcHJpdmF0ZSAkZGlyZWN0aW9uOiBBcmNhZGVCb2R5Q29sbGlzaW9uO1xuICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUsIHg6IG51bWJlciAsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQsIGNvbG9yOiBudW1iZXIsIGtleSA9ICd3YWxsJywgZGlyZWN0aW9uOiBBcmNhZGVCb2R5Q29sbGlzaW9uID0gQ29sbGlzaW9uNERpcmVjdGlvbihEaXJlY3Rpb24ubm9uZSkpIHtcbiAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgdywgaCwgY29sb3IpO1xuICAgICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICAgICAvLyBzY2VuZS5waHlzaWNzLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgdGhpcy5kZXB0aCA9IDE7XG4gICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgdGhpcy5uYW1lID0ga2V5O1xuICAgICAgIHRoaXMuJGRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyB1bmtub3duIGFzIFBlcnNwZWN0aXZlTWl4aW5UeXBlO1xuICAgICAgdGhhdC5ncmFwaGljcy5jbGVhcigpO1xuXG4gICAgICB0aGF0LmdyYXBoaWNzLmZpbGxTdHlsZSh0aGlzLmNvbG9yLCAxKTtcbiAgICAgIHRoYXQucHJlZHJhdygpO1xuICAgICAgICAvLyB0aGUgd2FsbHMgc2hvdWxkIGRyYXcgdGhlIGZhY2UgdGhhdCBpcyB2aXNpYmxlLiBmb3IgdGhlIHJlc3QgdGhlIGRyYXcgb3JkZXIgaXMgYmFzZWQgb24gcG9zaXRpb24uXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24ubm9uZSkge1xuICAgICAgICB0aGF0LmRyYXdJblZpZXcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5kaXJlY3Rpb24pLmZvckVhY2goKHZhbHVlOiBbc3RyaW5nLCBib29sZWFuXSkgPT4gdmFsdWVbMV0gJiYgdGhhdC5kcmF3VmVydGljZXModGhhdC5nZXRGYWNlQnlEaXJlY3Rpb24oRGlyZWN0aW9uW3ZhbHVlWzBdXSkpICk7XG4gICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYWxsO1xuIiwiaW1wb3J0IHtQaHlzaWNzLCBUeXBlcywgTWF0aCBhcyBQTWF0aH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCBDcmF0ZSBmcm9tICcuL2dhbWVvYmplY3RzL0NyYXRlJztcbmltcG9ydCBBcmNhZGVCb2R5Qm91bmRzID0gUGhhc2VyLlR5cGVzLlBoeXNpY3MuQXJjYWRlLkFyY2FkZUJvZHlCb3VuZHM7XG5pbXBvcnQgV2FsbCBmcm9tICcuL2dhbWVvYmplY3RzL1dhbGwnO1xuaW1wb3J0IFZlY3RvcjIgPSBQaGFzZXIuTWF0aC5WZWN0b3IyO1xuaW1wb3J0IEFyY2FkZUJvZHlDb2xsaXNpb24gPSBQaGFzZXIuVHlwZXMuUGh5c2ljcy5BcmNhZGUuQXJjYWRlQm9keUNvbGxpc2lvbjtcbmltcG9ydCBQYXRoID0gUGhhc2VyLkN1cnZlcy5QYXRoO1xuaW1wb3J0IFJhZFRvRGVnID0gUGhhc2VyLk1hdGguUmFkVG9EZWc7XG5pbXBvcnQgRkFDSU5HX1VQID0gUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkZBQ0lOR19VUDtcbmltcG9ydCBGQUNJTkdfRE9XTiA9IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5GQUNJTkdfRE9XTjtcbmltcG9ydCBGQUNJTkdfTEVGVCA9IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5GQUNJTkdfTEVGVDtcbmltcG9ydCBGQUNJTkdfUklHSFQgPSBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuRkFDSU5HX1JJR0hUO1xuaW1wb3J0IEZBQ0lOR19OT05FID0gUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkZBQ0lOR19OT05FO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoYXBlQ29sbGVjdGlvbkl0ZW0ge1xuICAgIHR5cGU6IG51bWJlcjtcbiAgICBjb2xvcj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBzdHJva2VDb2xvcj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBsaW5lV2lkdGg/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgc2hhcGU6IG9iamVjdDtcbn1cblxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcbiAgICBub25lID0gRkFDSU5HX05PTkUsXG4gICAgdXAgPSBGQUNJTkdfVVAsXG4gICAgZG93biA9IEZBQ0lOR19ET1dOLFxuICAgIGxlZnQgPSBGQUNJTkdfTEVGVCxcbiAgICByaWdodCA9IEZBQ0lOR19SSUdIVCxcbn1cbmV4cG9ydCBjb25zdCBnZXRHYW1lV2lkdGggPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xuICAgIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLndpZHRoO1xuICB9O1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG4gICAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0O1xuICB9O1xuZXhwb3J0IGNvbnN0IGNvbGxpZGVzT25BeGVzID0gKGNyYXRlOiBDcmF0ZSwgaXRlbTogQ3JhdGUsIGRpcmVjdGlvbjogQXJjYWRlQm9keUNvbGxpc2lvbik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBheGlzID0gZGlyZWN0aW9uLnVwIHx8IGRpcmVjdGlvbi5kb3duID8gJ3gnIDogJ3knO1xuICBjb25zdCBvcGF4aXMgPSBkaXJlY3Rpb24udXAgfHwgZGlyZWN0aW9uLmRvd24gPyAneScgOiAneCc7XG4gIGNvbnN0IGhhbGZTaXplID0gY3JhdGUuYm9keS5oZWlnaHQgLyAyO1xuICAvLyB0aGUgZm9sbG93aW5nIHZhciBuYW1lcyBhcmUgcHJlc3VtaW5nIGRpcmVjdGlvbiBpbiB5IGF4aXMuIENvdWxkIG1ha2UgaXQgbW9yZSBnZW5lcmFsLFxuICAvLyBhcyB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgb24gdGhlIHggYXhpcyB0b28uIGJ1dCB0aGlzIGlzIGFscmVhZHkgY29uZnVzaW5nIGFzIGlzLlxuICBjb25zdCBsZWZ0Q29ybmVySXRlbSA9IGl0ZW1bYXhpc10gLSBoYWxmU2l6ZTtcbiAgY29uc3QgcmlnaHRDb3JuZXJJdGVtID0gaXRlbVtheGlzXSArIGhhbGZTaXplO1xuICAvLyByZW1pbmRlcjogY2hhbmdlIGhhbGZzaXplIGludG8gaGFsZndpZHRoLyBoZWlnaHQgaWYgdGhlIGl0ZW0gaXMgbm90IHNxdWFyZS5cbiAgY29uc3QgbGVmdENvcm5lckNyYXRlID0gY3JhdGVbYXhpc10gLSBoYWxmU2l6ZTtcbiAgY29uc3QgcmlnaHRDb3JuZXJDcmF0ZSA9IGNyYXRlW2F4aXNdICsgaGFsZlNpemU7XG4gIGNvbnN0IHVwTGVmdENvbmRpdGlvbiA9IGl0ZW1bb3BheGlzXSArIGhhbGZTaXplIDw9IGNyYXRlW29wYXhpc10gLSBoYWxmU2l6ZTtcbiAgY29uc3QgZG93blJpZ2h0Q29uZGl0aW9uID0gaXRlbVtvcGF4aXNdIC0gaGFsZlNpemUgPj0gY3JhdGVbb3BheGlzXSArIGhhbGZTaXplO1xuICByZXR1cm4gaXRlbSAhPT0gY3JhdGVcbiAgJiYgKGRpcmVjdGlvbi51cCB8fCBkaXJlY3Rpb24ubGVmdCA/IHVwTGVmdENvbmRpdGlvbiA6IGRvd25SaWdodENvbmRpdGlvbilcbiAgJiYgKFxuICAgIChsZWZ0Q29ybmVySXRlbSA8PSByaWdodENvcm5lckNyYXRlICYmIGxlZnRDb3JuZXJJdGVtID49IGxlZnRDb3JuZXJDcmF0ZSApXG4gICAgfHwgKHJpZ2h0Q29ybmVySXRlbSA8PSByaWdodENvcm5lckNyYXRlICYmIHJpZ2h0Q29ybmVySXRlbSA+PSBsZWZ0Q29ybmVyQ3JhdGUgKVxuICApO1xufTtcbmV4cG9ydCBjb25zdCBDb2xsaXNpb240RGlyZWN0aW9uID0gKGRpcjogRGlyZWN0aW9uKSA9PiAoe25vbmU6IGRpciA9PT0gRGlyZWN0aW9uLm5vbmUsIHVwOiBkaXIgPT09IERpcmVjdGlvbi51cCwgZG93bjogZGlyID09PSBEaXJlY3Rpb24uZG93biwgbGVmdDogZGlyID09PSBEaXJlY3Rpb24ubGVmdCwgcmlnaHQ6IGRpciA9PT0gRGlyZWN0aW9uLnJpZ2h0IH0pO1xuZXhwb3J0IGNvbnN0IGltcGFzc2FibGUgPSAoY3JhdGU6IENyYXRlLCBvdGhlckNyYXRlOiBDcmF0ZSB8IHVuZGVmaW5lZCwgc3BlZWQ6IG51bWJlciwgZGlyZWN0aW9uOiBBcmNhZGVCb2R5Q29sbGlzaW9uLCB3b3JsZDogQXJjYWRlQm9keUJvdW5kcyk6IGJvb2xlYW4gPT5cbiAgICByZWFjaGVkQm91bmQoY3JhdGUsIHNwZWVkLCBkaXJlY3Rpb24sIHdvcmxkKSB8fCBibG9ja2VkSW5EaXJlY3Rpb24oY3JhdGUsIG90aGVyQ3JhdGUsIHNwZWVkLCBkaXJlY3Rpb24pIHx8IGNyYXRlIGluc3RhbmNlb2YgV2FsbDtcblxuZXhwb3J0IGNvbnN0IGJsb2NrZWRJbkRpcmVjdGlvbiA9IChjcmF0ZTogQ3JhdGUsIG90aGVyQ3JhdGU6IENyYXRlIHwgdW5kZWZpbmVkLCBzcGVlZDogbnVtYmVyLCBkaXJlY3Rpb246IEFyY2FkZUJvZHlDb2xsaXNpb24pOiBib29sZWFuID0+IHtcbiAgaWYgKGNyYXRlLmVuZW15KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKG90aGVyQ3JhdGUpIHtcbiAgY29uc3QgaGFsZlNpemUgPSBjcmF0ZS5ib2R5LmhlaWdodCAvIDI7XG4gIGNvbnN0IGF4aXMgPSBkaXJlY3Rpb24udXAgfHwgZGlyZWN0aW9uLmRvd24gPyAneScgOiAneCc7XG4gIGNvbnN0IHVwTGVmdENvbmRpdGlvbiA9IG90aGVyQ3JhdGVbYXhpc10gKyBoYWxmU2l6ZSA+PSBjcmF0ZVtheGlzXSAtIGhhbGZTaXplIC0gc3BlZWQ7XG4gIGNvbnN0IGRvd25SaWdodENvbmRpdGlvbiA9IG90aGVyQ3JhdGVbYXhpc10gIC0gaGFsZlNpemUgPD0gY3JhdGVbYXhpc10gKyBoYWxmU2l6ZSArIHNwZWVkO1xuICByZXR1cm4gZGlyZWN0aW9uLnVwIHx8IGRpcmVjdGlvbi5sZWZ0ID8gdXBMZWZ0Q29uZGl0aW9uIDogZG93blJpZ2h0Q29uZGl0aW9uO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuIH07XG5cbmV4cG9ydCBjb25zdCByZWFjaGVkQm91bmQgPSAoY3JhdGU6IENyYXRlLCBzcGVlZDogbnVtYmVyLCBkaXJlY3Rpb246IEFyY2FkZUJvZHlDb2xsaXNpb24sIHdvcmxkOiBBcmNhZGVCb2R5Qm91bmRzKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgaGFsZlNpemUgPSBjcmF0ZS5ib2R5LmhlaWdodCAvIDI7XG4gICAgY29uc3QgYXhpcyA9IGRpcmVjdGlvbi51cCB8fCBkaXJlY3Rpb24uZG93biA/ICd5JyA6ICd4JztcbiAgICBjb25zdCBkMnN0ciA9IGRpcmVjdGlvbi5sZWZ0ID8gJ2xlZnQnIDogZGlyZWN0aW9uLnJpZ2h0ID8gJ3JpZ2h0JyA6IGRpcmVjdGlvbi51cCA/ICd0b3AnIDogZGlyZWN0aW9uLmRvd24gPyAnYm90dG9tJyA6ICdub25lJztcblxuICAgIGNvbnN0IHVwbGVmdCA9IHdvcmxkW2Qyc3RyXSA+PSBjcmF0ZVtheGlzXSAtIGhhbGZTaXplO1xuICAgIGNvbnN0IGRvd25yaWdodCA9IHdvcmxkW2Qyc3RyXSA8PSBjcmF0ZVtheGlzXSArIGhhbGZTaXplO1xuICAgIHJldHVybiBkaXJlY3Rpb24udXAgfHwgZGlyZWN0aW9uLmxlZnQgPyB1cGxlZnQgOiBkb3ducmlnaHQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbGluZUludGVyc2VjdChwMTogUE1hdGguVmVjdG9yMiwgcDI6IFBNYXRoLlZlY3RvcjIsIHAzOiBQTWF0aC5WZWN0b3IyLCBwNDogUE1hdGguVmVjdG9yMik6IFZlY3RvcjIgfCBudWxsIHtcbiAgICBjb25zdCBkZW5vbSA9IChwNC55IC0gcDMueSkgKiAocDIueCAtIHAxLngpIC0gKHA0LnggLSBwMy54KSAqIChwMi55IC0gcDEueSk7XG4gICAgaWYgKGRlbm9tID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB1YSA9ICgocDQueCAtIHAzLngpICogKHAxLnkgLSBwMy55KSAtIChwNC55IC0gcDMueSkgKiAocDEueCAtIHAzLngpKSAvIGRlbm9tO1xuICAgIHJldHVybiBuZXcgUE1hdGguVmVjdG9yMih7XG4gICAgICAgIHg6IHAxLnggKyB1YSAqIChwMi54IC0gcDEueCksXG4gICAgICAgIHk6IHAxLnkgKyB1YSAqIChwMi55IC0gcDEueSksXG4gICAgfSk7XG59XG5jb25zdCB2YXJUb1N0cmluZyA9ICh2YXJPYmo6IG9iamVjdCkgPT4gT2JqZWN0LmtleXModmFyT2JqKVswXTtcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9wZXJ0eShvYmplY3Q6IG9iamVjdCwgdmFsOiBvYmplY3QpIHtcbiAgICBjb25zdCBuYW1lID0gdmFyVG9TdHJpbmcodmFsKTtcbiAgICBvYmplY3RbbmFtZV0gPSBPYmplY3QudmFsdWVzKHZhbClbMF07XG4gICAgcmV0dXJuIG9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdjZCh4LCB5KSB7XG4gICAgY29uc3QgY2IgPSAoYSwgYikgPT4gKGIgPT09IDAgPyBhIDogY2IoYiwgYSAlIGIpKTtcbiAgICByZXR1cm4gY2IoTWF0aC5hYnMoeCksIE1hdGguYWJzKHkpKTtcbn1cbmV4cG9ydCBjb25zdCBweXQgPSAoZCwgcmFkKSA9PiBNYXRoLnNxcnQocmFkICoqIDIgLSBkICoqIDIpOyAvLyB1c2UgdGhlIFB5dGhhZ29yZWFuIFRoZW9yZW0gdG8gZ2V0IHRoZSBuZXcgcmFkaXVzIGxlbmd0aFxcXG5cbmV4cG9ydCBjb25zdCBwb2ludDJWZWMgPSAoKHt4LCB5fSkgPT4gbmV3IFZlY3RvcjIoeCwgeSkpO1xuXG5leHBvcnQgdHlwZSBDb25zdHJ1Y3RvcjxUID0ge30+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUNpcmNsZUNlbnRlcihBLCBCLCBDKSB7XG4gICAgY29uc3QgeURlbHRhQSA9IEIueSAtIEEueTtcbiAgICBjb25zdCB4RGVsdGFBID0gQi54IC0gQS54O1xuICAgIGNvbnN0IHlEZWx0YUIgPSBDLnkgLSBCLnk7XG4gICAgY29uc3QgeERlbHRhQiA9IEMueCAtIEIueDtcblxuICAgIGNvbnN0IGFTbG9wZSA9IHlEZWx0YUEgLyB4RGVsdGFBO1xuICAgIGNvbnN0IGJTbG9wZSA9IHlEZWx0YUIgLyB4RGVsdGFCO1xuXG4gICAgY29uc3QgeCA9IChhU2xvcGUgKiBiU2xvcGUgKiAoQS55IC0gQy55KSArIGJTbG9wZSAqIChBLnggKyBCLngpIC0gYVNsb3BlICogKEIueCArIEMueCkgKSAvICgyICogKGJTbG9wZSAtIGFTbG9wZSkgKTtcbiAgICBjb25zdCB5ID0gLTEgKiAoeCAtIChBLnggKyBCLngpIC8gMikgLyBhU2xvcGUgKyAgKEEueSArIEIueSkgLyAyO1xuICAgIHJldHVybiBuZXcgVmVjdG9yMih4LCB5KTtcblxufVxuaW50ZXJmYWNlIEhhc1BvcyB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRQb3NpdGlvbih0YXJnZXQ6IEhhc1BvcywgcG9zaXRpb246IEhhc1Bvcykge1xuICAgIHRhcmdldC54ID0gcG9zaXRpb24ueDtcbiAgICB0YXJnZXQueSA9IHBvc2l0aW9uLnk7XG59XG5cbmV4cG9ydCBjb25zdCBDcmVhdGVTaGFwZSA9IChzY2VuZSkgPT4ge1xuICAgIHJldHVybiBzY2VuZS5hZGQucmV4Q3VzdG9tU2hhcGVzKHtcbiAgICAgICAgdHlwZTogJ1NwZWVjaEJ1YmJsZScsXG4gICAgICAgIGNyZWF0ZTogeyBsaW5lczogMSB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gMjA7XG4gICAgICAgICAgICBjb25zdCBzdHJva2VDb2xvciA9IHRoaXMuZ2V0RGF0YSgnc3Ryb2tlQ29sb3InKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGxDb2xvciA9IHRoaXMuZ2V0RGF0YSgnZmlsbENvbG9yJyk7XG5cbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gMCwgcmlnaHQgPSB0aGlzLndpZHRoLFxuICAgICAgICAgICAgICAgIHRvcCA9IDAsIGJvdHRvbSA9IHRoaXMuaGVpZ2h0LCBib3hCb3R0b20gPSBib3R0b207XG4gICAgICAgICAgICB0aGlzLmdldFNoYXBlcygpWzBdXG4gICAgICAgICAgICAgICAgLmxpbmVTdHlsZSgyLCBzdHJva2VDb2xvciwgMSlcbiAgICAgICAgICAgICAgICAuZmlsbFN0eWxlKGZpbGxDb2xvciwgMSlcbiAgICAgICAgICAgICAgICAvLyB0b3AgbGluZSwgcmlnaHQgYXJjXG4gICAgICAgICAgICAgICAgLnN0YXJ0QXQobGVmdCArIHJhZGl1cywgdG9wKVxuICAgICAgICAgICAgICAgIC8vIC5hcmMocmlnaHQgLSByYWRpdXMsIHRvcCArIHJhZGl1cywgcmFkaXVzLCAyNzAsIDM2MClcbiAgICAgICAgICAgICAgICAvLyByaWdodCBsaW5lLCBib3R0b20gYXJjXG4gICAgICAgICAgICAgICAgLy8gLmxpbmVUbyhyaWdodCwgYm94Qm90dG9tIC0gcmFkaXVzKVxuICAgICAgICAgICAgICAgIC8vIC5hcmMocmlnaHQgLSByYWRpdXMsIGJveEJvdHRvbSAtIHJhZGl1cywgcmFkaXVzLCAwLCA5MClcbiAgICAgICAgICAgICAgICAvLyAubGluZVRvKGxlZnQgKyByYWRpdXMsIGJveEJvdHRvbSlcbiAgICAgICAgICAgICAgICAuYXJjKGxlZnQgKyByYWRpdXMsIGJveEJvdHRvbSAtIHJhZGl1cywgcmFkaXVzLCA2MCwgMTgwKVxuICAgICAgICAgICAgICAgIC8vIC8vIGxlZnQgbGluZSwgdG9wIGFyY1xuICAgICAgICAgICAgICAgIC8vIC5saW5lVG8obGVmdCwgdG9wICsgcmFkaXVzKVxuICAgICAgICAgICAgICAgIC5hcmMobGVmdCArIHJhZGl1cywgdG9wICsgcmFkaXVzLCByYWRpdXMsIDE4MCwgMzAwKVxuICAgICAgICAgICAgICAgIC8vIC5saW5lVG8obGVmdCwgdG9wICsgcmFkaXVzKVxuXG4gICAgICAgICAgICAgICAgLmNsb3NlKCk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFyY0N1cnZlKHt4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlfSkge1xuICAgIGNvbnN0IHBhdGggPSBuZXcgUGF0aCgpO1xuICAgIHBhdGgubW92ZVRvKHgsIHkpO1xuICAgIHBhdGguZWxsaXBzZVRvKHJhZGl1cywgcmFkaXVzLCBSYWRUb0RlZyhzdGFydEFuZ2xlKSwgUmFkVG9EZWcoZW5kQW5nbGUpKTtcbiAgICBwYXRoLmNsb3NlUGF0aCgpO1xuICAgIHJldHVybiBwYXRoO1xufVxuZXhwb3J0IGNvbnN0IGdldEFyY1NoYXBlID0gKHBvc2l0aW9uLCByYWRpdXMsIGhsMSwgaGwyLCBkaXJlY3Rpb24pID0+ICh7IHg6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnksIHJhZGl1cywgc3RhcnRBbmdsZTogZGlyZWN0aW9uICsgaGwxICUgTWF0aC5QSSwgZW5kQW5nbGU6IGRpcmVjdGlvbiAtIGhsMiAlIE1hdGguUEkgfSk7XG5leHBvcnQgY29uc3QgdW5ibG9ja0J1dCA9IChkaXJlY3Rpb24sIGl0ZW1zKSA9PiBPYmplY3QuZW50cmllcyhpdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtWzBdICE9PSBkaXJlY3Rpb24pIHtcbiAgICAgICAgaXRlbXNbaXRlbVswXV0gPSBmYWxzZTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFJhbmRvbUludCA9IChtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZXMnO1xuXG5pbXBvcnQgQ29udGFpbmVyTGl0ZVBsdWdpbiBmcm9tICdwaGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvY29udGFpbmVybGl0ZS1wbHVnaW4uanMnO1xuaW1wb3J0IEN1c3RvbVNoYXBlc1BsdWdpbiBmcm9tICdwaGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvY3VzdG9tc2hhcGVzLXBsdWdpbi5qcyc7XG5pbXBvcnQgUm91bmRSZWN0YW5nbGVQbHVnaW4gZnJvbSAncGhhc2VyMy1yZXgtcGx1Z2lucy9wbHVnaW5zL3JvdW5kcmVjdGFuZ2xlLXBsdWdpbic7XG5cbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gIHRpdGxlOiAnU2FtcGxlJyxcblxuICB0eXBlOiBQaGFzZXIuQVVUTyxcblxuICBzY2FsZToge1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgfSxcblxuICBzY2VuZTogU2NlbmVzLFxuXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgICBhcmNhZGU6IHtcbiAgICAgIC8vIGRlYnVnOiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgZ2xvYmFsOiBbXG4gICAgICAgICAgeyBrZXk6ICdyZXhDb250YWluZXJMaXRlUGx1Z2luJywgcGx1Z2luOiBDb250YWluZXJMaXRlUGx1Z2luLCBzdGFydDogdHJ1ZSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ3JleEN1c3RvbVNoYXBlc1BsdWdpbicsXG4gICAgICAgICAgICBwbHVnaW46IEN1c3RvbVNoYXBlc1BsdWdpbixcbiAgICAgICAgICAgIHN0YXJ0OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiAncmV4Um91bmRSZWN0YW5nbGVQbHVnaW4nLFxuICAgICAgICAgICAgcGx1Z2luOiBSb3VuZFJlY3RhbmdsZVBsdWdpbixcbiAgICAgICAgICAgIHN0YXJ0OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuXG4gIHBhcmVudDogJ2dhbWUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcbn07XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBnYW1lLnNjYWxlLnJlZnJlc2goKTtcbn0pO1xuIiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnQm9vdCcsXG59O1xuXG4vKipcbiAqIFRoZSBpbml0aWFsIHNjZW5lIHRoYXQgbG9hZHMgYWxsIG5lY2Vzc2FyeSBhc3NldHMgdG8gdGhlIGdhbWUgYW5kIGRpc3BsYXlzIGEgbG9hZGluZyBiYXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb290U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgcHJlbG9hZCgpIHtcbiAgICBjb25zdCBoYWxmV2lkdGggPSBnZXRHYW1lV2lkdGgodGhpcykgKiAwLjU7XG4gICAgY29uc3QgaGFsZkhlaWdodCA9IGdldEdhbWVIZWlnaHQodGhpcykgKiAwLjU7XG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckhlaWdodCA9IDEwMDtcbiAgICBjb25zdCBwcm9ncmVzc0JhcldpZHRoID0gNDAwO1xuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJDb250YWluZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoaGFsZldpZHRoLCBoYWxmSGVpZ2h0LCBwcm9ncmVzc0JhcldpZHRoLCBwcm9ncmVzc0JhckhlaWdodCwgMHgwMDAwMDApO1xuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gdGhpcy5hZGQucmVjdGFuZ2xlKGhhbGZXaWR0aCArIDIwIC0gcHJvZ3Jlc3NCYXJDb250YWluZXIud2lkdGggKiAwLjUsIGhhbGZIZWlnaHQsIDEwLCBwcm9ncmVzc0JhckhlaWdodCAtIDIwLCAweDg4ODg4OCk7XG5cbiAgICBjb25zdCBsb2FkaW5nVGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gNzUsIGhhbGZIZWlnaHQgLSAxMDAsICdMb2FkaW5nLi4uJykuc2V0Rm9udFNpemUoMjQpO1xuICAgIGNvbnN0IHBlcmNlbnRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCwgJzAlJykuc2V0Rm9udFNpemUoMjQpO1xuICAgIGNvbnN0IGFzc2V0VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQgKyAxMDAsICcnKS5zZXRGb250U2l6ZSgyNCk7XG5cbiAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHZhbHVlKSA9PiB7XG4gICAgICBwcm9ncmVzc0Jhci53aWR0aCA9IChwcm9ncmVzc0JhcldpZHRoIC0gMzApICogdmFsdWU7XG5cbiAgICAgIGNvbnN0IHBlcmNlbnQgPSB2YWx1ZSAqIDEwMDtcbiAgICAgIHBlcmNlbnRUZXh0LnNldFRleHQoYCR7cGVyY2VudH0lYCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWQub24oJ2ZpbGVwcm9ncmVzcycsIChmaWxlKSA9PiB7XG4gICAgICBhc3NldFRleHQuc2V0VGV4dChmaWxlLmtleSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgbG9hZGluZ1RleHQuZGVzdHJveSgpO1xuICAgICAgcGVyY2VudFRleHQuZGVzdHJveSgpO1xuICAgICAgYXNzZXRUZXh0LmRlc3Ryb3koKTtcbiAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKTtcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmRlc3Ryb3koKTtcblxuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTWFpbk1lbnUnKTtcbiAgICB9KTtcbiAgICB0aGlzLmxvYWRBc3NldHMoKTtcblxuICAgIC8vIHRoaXMubG9hZC5wbHVnaW4oJ3JleGNvbnRhaW5lcmxpdGVwbHVnaW4nLCAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3JleHJhaW5ib3cvcGhhc2VyMy1yZXgtbm90ZXMvbWFzdGVyL2Rpc3QvcmV4Y29udGFpbmVybGl0ZXBsdWdpbi5taW4uanMnLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGwgYXNzZXRzIHRoYXQgbmVlZCB0byBiZSBsb2FkZWQgYnkgdGhlIGdhbWUgKHNwcml0ZXMsIGltYWdlcywgYW5pbWF0aW9ucywgdGlsZXMsIG11c2ljLCBldGMpXG4gICAqIHNob3VsZCBiZSBhZGRlZCB0byB0aGlzIG1ldGhvZC4gT25jZSBsb2FkZWQgaW4sIHRoZSBsb2FkZXIgd2lsbCBrZWVwIHRyYWNrIG9mIHRoZW0sIGluZGVwZWRlbnQgb2Ygd2hpY2ggc2NlbmVcbiAgICogaXMgY3VycmVudGx5IGFjdGl2ZSwgc28gdGhleSBjYW4gYmUgYWNjZXNzZWQgYW55d2hlcmUuXG4gICAqL1xuICBwcml2YXRlIGxvYWRBc3NldHMoKSB7XG4gICAgLy8gTG9hZCBzYW1wbGUgYXNzZXRzXG5cbiAgICAvLyBTb3VyY2U6IE9wZW4gR2FtZSBBcnRcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ21hbicsICdhc3NldHMvY2hhcmFjdGVyLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgncHJpc29uJywgJ2Fzc2V0cy9wcmlzb24uc3ZnJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdyb2NrZXQnLCAnYXNzZXRzL3JvY2tldC5zdmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3RpbGUnLCAnYXNzZXRzL3BhcmtheS1mbG9vci5zdmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3N0YXJzJywgJ2Fzc2V0cy9zdGFycy5zdmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2Zsb3dlcicsICdhc3NldHMvYnV0dGVyY3VwX2Zsb3dlci5zdmcnKTtcbiAgICAvLyB0aGlzLmxvYWQuaW1hZ2UoJ2VuZW15JywgJ2Fzc2V0cy9yb2JvdHMuc3ZnJyk7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdlbmVteScsICdhc3NldHMvcm9ib3RzLnN2ZycsIHsgZnJhbWVXaWR0aDogNTAwLCBmcmFtZUhlaWdodDogNTA1IH0pO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnY3JhdGVzJywgJ2Fzc2V0cy9DcmF0ZXMuc3ZnJywgeyBmcmFtZVdpZHRoOiAxMDUsIGZyYW1lSGVpZ2h0OiAxMDUgfSk7XG4gICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAga2V5OiAnZmFjZScsXG4gICAgICBmcmFtZXM6IFsgeyBrZXk6ICdlbmVteScsIGZyYW1lOiAxIH0gXSxcbiAgICAgIGZyYW1lUmF0ZTogLTEsXG4gIH0pO1xuXG4gIH1cblxufVxuIiwiaW1wb3J0IHtQaHlzaWNzLCBUeXBlc30gZnJvbSAncGhhc2VyJztcblxuaW1wb3J0IENyYXRlIGZyb20gJy4uL2dhbWVvYmplY3RzL0NyYXRlJztcbmltcG9ydCBFbmVteSBmcm9tICcuLi9nYW1lb2JqZWN0cy9FbmVteSc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2dhbWVvYmplY3RzL1BsYXllcic7XG5pbXBvcnQgV2FsbCBmcm9tICcuLi9nYW1lb2JqZWN0cy9XYWxsJztcbmltcG9ydCB7XG4gIGJsb2NrZWRJbkRpcmVjdGlvbixcbiAgY29sbGlkZXNPbkF4ZXMsXG4gIENvbGxpc2lvbjREaXJlY3Rpb24sXG4gIERpcmVjdGlvbixcbiAgZ2V0R2FtZUhlaWdodCxcbiAgZ2V0R2FtZVdpZHRoLCBnZXRSYW5kb21JbnQsIHBvaW50MlZlYyxcbiAgcmVhY2hlZEJvdW5kLFxufSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBQZXJzcGVjdGl2ZU9iamVjdCBmcm9tICcuLi9nYW1lb2JqZWN0cy9QZXJzcGVjdGl2ZU1peGluJztcbmltcG9ydCBDcmF0ZUZhY2UgZnJvbSAnLi4vZ2FtZW9iamVjdHMvQ3JhdGVGYWNlJztcbmltcG9ydCBQcmlzb25GYWNlIGZyb20gJy4uL2dhbWVvYmplY3RzL1ByaXNvbkZhY2UnO1xuaW1wb3J0IENvbnRhaW5lckxpdGUgZnJvbSAncGhhc2VyMy1yZXgtcGx1Z2lucy9wbHVnaW5zL2NvbnRhaW5lcmxpdGUnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciA9IFBoYXNlci5FdmVudHMuRXZlbnRFbWl0dGVyO1xuaW1wb3J0IFZlY3RvcjIgPSBQaGFzZXIuTWF0aC5WZWN0b3IyO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ0dhbWUnLFxuICBwaHlzaWNzOiB7XG4gIH0sXG59O1xuXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgcHJpdmF0ZSBncmlkVW5pdDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBwbGF5ZXI6IENvbnRhaW5lckxpdGU7XG4gIHByaXZhdGUgZW5lbXk6IENvbnRhaW5lckxpdGU7XG4gIHByaXZhdGUgcHJpc29uOiBQaHlzaWNzLkFyY2FkZS5TcHJpdGU7XG4gIHByaXZhdGUgcm9ja2V0OiBQaHlzaWNzLkFyY2FkZS5TcHJpdGU7XG4gIHByaXZhdGUgY3JhdGVzOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXA7XG4gIHByaXZhdGUgZmFsbGluZ0NyYXRlczogQ3JhdGVbXTtcbiAgcHJpdmF0ZSBib3VuZGVkQ3JhdGVzOiBDcmF0ZVtdO1xuICBwcml2YXRlIGVuZW15Q29sbGlkZXI6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Db2xsaWRlcjtcbiAgcHJpdmF0ZSBiYWNrZ3JvdW5kO1xuICBwcml2YXRlIGJhY2tnb3VuZEluYzogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBncmF2aXR5U3BlZWQ6IG51bWJlcjtcbiAgcHJpdmF0ZSByb2NrZXRDb2xsaWRlcjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkNvbGxpZGVyO1xuICBwcml2YXRlIGNyYXRlc1ByZVJlbmRlckV2ZW50OiBFdmVudEVtaXR0ZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBtZWFzdXJlWCA9IGdldEdhbWVXaWR0aCh0aGlzKTtcbiAgICBjb25zdCBtZWFzdXJlWSA9IGdldEdhbWVIZWlnaHQodGhpcyk7XG4gICAgY29uc3QgaXNMYW5kc2NhcGU6IGJvb2xlYW4gPSBtZWFzdXJlWCA+IG1lYXN1cmVZO1xuICAgIGNvbnN0IG1lYXN1cmVTaG9ydDogbnVtYmVyID0gaXNMYW5kc2NhcGUgPyBtZWFzdXJlWSA6IG1lYXN1cmVYO1xuICAgIGNvbnN0IG1lYXN1cmVMb25nOiBudW1iZXIgPSBtZWFzdXJlU2hvcnQgKiAxLjM7XG4gICAgdGhpcy5ncmlkVW5pdCA9IE1hdGgucm91bmQobWVhc3VyZVNob3J0IC8gMTAwKTtcbiAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IHRoaXMuZ3JpZFVuaXQgKiAyO1xuICAgIHRoaXMuZGF0YS5zZXQoJ2dyaWRVbml0JywgdGhpcy5ncmlkVW5pdCk7XG4gICAgdGhpcy5kYXRhLnNldCgnc2hvcnQnLCBtZWFzdXJlU2hvcnQpO1xuXG4gICAgY29uc3QgZ2V0U2l6ZSA9IChpbnB1dDogYm9vbGVhbikgPT4gaW5wdXQgPyBtZWFzdXJlTG9uZyA6IG1lYXN1cmVTaG9ydDtcbiAgICBsZXQgc3RhcnRYID0gbWVhc3VyZVggLSBnZXRTaXplKGlzTGFuZHNjYXBlKTtcbiAgICBzdGFydFggPSBzdGFydFggPT09IDAgPyAwIDogc3RhcnRYIC8gMjtcbiAgICBsZXQgc3RhcnRZID0gbWVhc3VyZVkgLSBnZXRTaXplKCFpc0xhbmRzY2FwZSk7XG4gICAgc3RhcnRZID0gc3RhcnRZID09PSAwID8gMCA6IHN0YXJ0WSAvIDI7XG4gICAgLy8gY3JlYXRlIHRoZSBiaWdnZXN0IHdvcmxkIHRoYXQgd2lsbCBmaXQgb24gdGhpcyBzY3JlZW4uXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5waHlzaWNzLnNjZW5lLmFkZC50aWxlU3ByaXRlKGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsIGdldEdhbWVIZWlnaHQodGhpcykgLyAyLCBnZXRHYW1lV2lkdGgodGhpcyksIGdldEdhbWVIZWlnaHQodGhpcyksICdzdGFycycpO1xuICAgIGNvbnN0IHNldEJvdW5kcyA9IChpdGVtOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuV29ybGQpID0+IGl0ZW0uc2V0Qm91bmRzKHN0YXJ0WCwgc3RhcnRZLCBnZXRTaXplKGlzTGFuZHNjYXBlKSwgZ2V0U2l6ZSghaXNMYW5kc2NhcGUpKTtcbiAgICBzZXRCb3VuZHModGhpcy5waHlzaWNzLndvcmxkKTtcbiAgICBjb25zdCB7bGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tLCBoZWlnaHQsIHdpZHRoLCBjZW50ZXJYLCBjZW50ZXJZfSA9IHRoaXMucGh5c2ljcy53b3JsZC5ib3VuZHM7XG5cbiAgICBjb25zdCB0aWxlcyA9IHRoaXMucGh5c2ljcy5zY2VuZS5hZGQudGlsZVNwcml0ZShnZXRTaXplKGlzTGFuZHNjYXBlKSAvIDIgKyBzdGFydFgsIGdldFNpemUoIWlzTGFuZHNjYXBlKSAvIDIgKyBzdGFydFksIHdpZHRoLCBoZWlnaHQsICd0aWxlJyk7XG4gICAgdGlsZXMuc2V0VGlsZVNjYWxlKHRoaXMuZ3JpZFVuaXQgLyA3KTtcbiAgICBjb25zdCBDcmF0ZVR5cGUgPSAgUGVyc3BlY3RpdmVPYmplY3QoQ3JhdGVGYWNlKENyYXRlKSk7XG4gICAgY29uc3QgUHJpc29uID0gIFBlcnNwZWN0aXZlT2JqZWN0KFByaXNvbkZhY2UoQ3JhdGUpKTtcbiAgICBjb25zdCBFbmVteVR5cGUgPSBQZXJzcGVjdGl2ZU9iamVjdChFbmVteSk7XG5cbiAgICBjb25zdCBQbGF5ZXJUeXBlID0gUGVyc3BlY3RpdmVPYmplY3QoUGxheWVyKTtcblxuICAgIGNvbnN0IGNyYXRlQ29uZmlnID0ge1xuICAgICAgY2xhc3NUeXBlOiBDcmF0ZVR5cGUsIC8vIFRoaXMgaXMgdGhlIGNsYXNzIHdlIGNyZWF0ZWRcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICByZXBlYXQ6IDksXG4gICAgICBzZXRTY2FsZTogeyB4OiB0aGlzLmdyaWRVbml0IC8gMTAsIHk6IHRoaXMuZ3JpZFVuaXQgLyAxMH0sXG4gICAgICBjb2xsaWRlV29ybGRCb3VuZHM6IHRydWUsXG4gICAgICBrZXk6ICdjcmF0ZXMnLFxuICAgIH07XG4gICAgdGhpcy5jcmF0ZXMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKGNyYXRlQ29uZmlnKTtcblxuICAgIHRoaXMucHJpc29uID0gbmV3IFByaXNvbih0aGlzLnBoeXNpY3Muc2NlbmUsIGNlbnRlclgsIGJvdHRvbSwgJ3ByaXNvbicpO1xuICAgIGNvbnN0IHF1YXJ0ZXJDcmF0ZSA9IHRoaXMuZ3JpZFVuaXQgKiAyLjY7XG5cbiAgICB0aGlzLnByaXNvbi5zZXRTY2FsZSh0aGlzLmdyaWRVbml0IC8gMTQuMSApO1xuXG4gICAgdGhpcy5wcmlzb24uZGVwdGggPSAyO1xuXG4gICAgdGhpcy5jcmF0ZXMuYWRkKHRoaXMucHJpc29uKTtcbiAgICBjb25zdCBDdWJlVHlwZSA9IFBlcnNwZWN0aXZlT2JqZWN0KFdhbGwpO1xuXG4gICAgLy8gY29uc3Qgd2FsbCA9IG5ldyBXYWxsKHRoaXMsIDAgLCAwLCAncHJpc29uJywgbmV3IFZlY3RvcjIoMiw0KSk7XG4gICAgY29uc3Qgd2FsbGNvbG9yID0gMHhjMGJkYzM7XG4gICAgY29uc3QgZWRnZSA9IHF1YXJ0ZXJDcmF0ZSAvIDI7XG4gICAgY29uc3QgdXAgPSAndXAnO1xuICAgIGNvbnN0IGRvd24gPSAnZG93bic7XG4gICAgY29uc3QgZGlycmlnaHQgPSAncmlnaHQnO1xuICAgIGNvbnN0IGRpcmxlZnQgPSAnbGVmdCc7XG4gICAgY29uc3Qgd2FsbHRvcCA9IG5ldyBDdWJlVHlwZSh0aGlzLCBjZW50ZXJYLCB0b3AgLSBlZGdlIC8gMiAsIHdpZHRoLCBlZGdlLCBxdWFydGVyQ3JhdGUgKiA0LCB3YWxsY29sb3IsIGRvd24sIENvbGxpc2lvbjREaXJlY3Rpb24oRGlyZWN0aW9uLmRvd24pKTtcbiAgICBjb25zdCB3YWxsYm90dG9tID0gbmV3IEN1YmVUeXBlKHRoaXMsIGNlbnRlclgsIGJvdHRvbSArIGVkZ2UgLyAyICwgd2lkdGgsIGVkZ2UsIHF1YXJ0ZXJDcmF0ZSAqIDQsIHdhbGxjb2xvciwgdXAsIENvbGxpc2lvbjREaXJlY3Rpb24oRGlyZWN0aW9uLnVwKSk7XG4gICAgY29uc3Qgd2FsbGxlZnQgPSBuZXcgQ3ViZVR5cGUodGhpcywgbGVmdCAtIGVkZ2UgLyAyLCBjZW50ZXJZICwgZWRnZSwgaGVpZ2h0LCBxdWFydGVyQ3JhdGUgKiA0LCB3YWxsY29sb3IsIGRpcnJpZ2h0LCBDb2xsaXNpb240RGlyZWN0aW9uKERpcmVjdGlvbi5yaWdodCkpO1xuICAgIGNvbnN0IHdhbGxyaWdodCA9IG5ldyBDdWJlVHlwZSh0aGlzLCByaWdodCArIGVkZ2UgLyAyLCBjZW50ZXJZICwgZWRnZSwgaGVpZ2h0LCBxdWFydGVyQ3JhdGUgKiA0LCB3YWxsY29sb3IsIGRpcmxlZnQsIENvbGxpc2lvbjREaXJlY3Rpb24oRGlyZWN0aW9uLmxlZnQpKTtcbiAgICBjb25zdCB3YWxscyA9IFt3YWxsdG9wLCB3YWxsYm90dG9tLCB3YWxsbGVmdCwgd2FsbHJpZ2h0XTtcbiAgICB3YWxscy5mb3JFYWNoKCh3OiBXYWxsKSA9PiB7XG4gICAgICB3LnNldFN0cm9rZVN0eWxlKHRoaXMuZ3JpZFVuaXQgLyA0LCAweDAwMCwgMSk7XG4gICAgICB3LnVwZGF0ZSgpIDtcbiAgICB9KTtcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGdldFJhbmRvbUludCg0KTsgaSsrKSB7XG4gICAgLy8gICBjb25zdCBjdWJlID0gbmV3IEN1YmVUeXBlKHRoaXMsIGNlbnRlclksIGNlbnRlclgsIHF1YXJ0ZXJDcmF0ZSAqIDQsIHF1YXJ0ZXJDcmF0ZSAqIDQsIHF1YXJ0ZXJDcmF0ZSAqIDQsIDB4NDM0NjRCLCAnY3ViZScpIGFzIFdhbGw7XG4gICAgLy8gICBjdWJlLnNldFN0cm9rZVN0eWxlKHRoaXMuZ3JpZFVuaXQgLyA0LCAweDAwMCwgMSk7XG4gICAgLy9cbiAgICAvLyAgIHRoaXMuY3JhdGVzLmFkZChjdWJlKTtcbiAgICAvLyB9XG5cbiAgICB0aGlzLnJvY2tldCA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKGNlbnRlclgsIHRvcCArIHF1YXJ0ZXJDcmF0ZSAqIDIsICdyb2NrZXQnKTtcbiAgICB0aGlzLnJvY2tldC5zZXRTY2FsZSggdGhpcy5ncmlkVW5pdCAvIDE1KTtcbiAgICB0aGlzLnJvY2tldC5zZXREZXB0aCgxKTtcblxuICAgIHRoaXMuY3JhdGVzLnNldERlcHRoKDMpO1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllclR5cGUoe3NjZW5lOiB0aGlzLCB4OiBjZW50ZXJYLCB5OiBjZW50ZXJZfSwgdGhpcy5ncmlkVW5pdCwgdGhpcy5jcmF0ZXMsIHF1YXJ0ZXJDcmF0ZSwgdGhpcy5ncmlkVW5pdCAvIDQpO1xuICAgIHRoaXMucGxheWVyLnNjYWxlID0gMztcbiAgICB0aGlzLmVuZW15ID0gbmV3IEVuZW15VHlwZSh7c2NlbmU6IHRoaXMsIHg6IGNlbnRlclgsIHk6IHRvcCArIHF1YXJ0ZXJDcmF0ZSAqIDJ9LCB0aGlzLmdyaWRVbml0LCBxdWFydGVyQ3JhdGUgKiAxLjIsIHRoaXMuZ3JpZFVuaXQgLyA0KTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMucGxheWVyLCB0aGlzLmNyYXRlcywgdGhpcy5wbGF5ZXIuY3JhdGVDb2xsaWRlciwgbnVsbCwgdHJ1ZSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLnBsYXllciwgdGhpcy5lbmVteSwgKCkgPT4gdGhpcy5lbmRHYW1lKCksIG51bGwsIHRydWUpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvLyBjb25zdCBjcmF0ZXNDb2xsaWRlciA9IHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5lbmVteSwgdGhpcy5jcmF0ZXMpO1xuICAgIHRoaXMuZW5lbXlDb2xsaWRlciA9IHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLmVuZW15LCB0aGlzLmNyYXRlcywgdGhpcy5lbmVteS5jcmF0ZXNPdmVybGFwKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy5yb2NrZXRDb2xsaWRlciA9IHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLnBsYXllciwgdGhpcy5yb2NrZXQsICgpID0+IHRoaXMuYmxhc3RPZmYoKSwgbnVsbCwgdHJ1ZSk7XG4gICAgdGhpcy5mYWxsaW5nQ3JhdGVzID0gW107XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGVuZW15ID0gdGhpcy5lbmVteTtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgICBmdW5jdGlvbiBwbGFjZUNyYXRlKGNyYXRlLCBjcmF0ZXMpIHtcbiAgICAgIGNvbnN0IHt3aWR0aDogdywgaGVpZ2h0OiBofSA9IGNyYXRlO1xuICAgICAgY29uc3QgcDEgPSBuZXcgVmVjdG9yMih3LCAwKTtcbiAgICAgIGNvbnN0IHAyID0gbmV3IFZlY3RvcjIoMCwgaCk7XG4gICAgICAvLyBjb25zdCByYWQgPSBwMS5kaXN0YW5jZShwMik7XG4gICAgICAvLyBjb25zb2xlLmxvZyh3LCBwMS5kaXN0YW5jZShwMiksIHcgKiAxLjUpO1xuICAgICAgY3JhdGUuc2V0UmFuZG9tUG9zaXRpb24oc3RhcnRYLCBzdGFydFksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgY3JhdGVzLmNoaWxkcmVuLml0ZXJhdGUoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0gIT09IGNyYXRlKSB7XG4gICAgICAgICAgY29uc3QgcG9zID0gcG9pbnQyVmVjKGl0ZW0gYXMgVmVjdG9yMik7XG4gICAgICAgICAgY29uc3QgY3JhdGVQb3MgPSBwb2ludDJWZWMoY3JhdGUpO1xuICAgICAgICAgIGNvbnN0IHJhZCA9IGNyYXRlLndpZHRoICogMS41O1xuICAgICAgICAgIGlmIChwb3MuZGlzdGFuY2UoY3JhdGUpIDw9IHJhZCB8fCBjcmF0ZVBvcy5kaXN0YW5jZShlbmVteSkgPD0gcmFkIHx8IGNyYXRlUG9zLmRpc3RhbmNlKHBsYXllcikgPD0gcmFkKSB7XG4gICAgICAgICAgICBwbGFjZUNyYXRlKGNyYXRlLCBjcmF0ZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jcmF0ZXMuY2hpbGRyZW4uaXRlcmF0ZSgoY3JhdGUsIGlkeCkgPT4ge1xuICAgICAgcGxhY2VDcmF0ZShjcmF0ZSwgdGhpcy5jcmF0ZXMpO1xuICAgICAgdGhpcy5mYWxsaW5nQ3JhdGVzLnB1c2goY3JhdGUgYXMgQ3JhdGUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ib3VuZGVkQ3JhdGVzID0gW107XG4gICAgdGhpcy51cGRhdGVQZXJzcGVjdGl2ZURyYXdpbmcoKTtcbiAgICB0aGlzLnBoeXNpY3Mud29ybGQub24oJ3dvcmxkYm91bmRzJywgKGJvZHkgLyosIHVwLCBkb3duLCBsZWZ0LCByaWdodCovKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVBlcnNwZWN0aXZlRHJhd2luZyhib2R5KTtcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgdXBkYXRlKHRpbWUpIHtcblxuICAgIC8vIHNldCBtb3Rpb24gb24gdGhlIHN0YXJzXG5cbiAgICBpZiAoIXRoaXMucm9ja2V0LnZpc2libGUpIHtcbiAgICAgIC8vIHRoaXMuZW5lbXkuXG4gICAgICB0aGlzLmRyb3BFdmVyeXRoaW5nKCk7XG4gICAgfVxuICAgIHRoaXMuYmFja2dvdW5kSW5jID09PSAwXG4gICAgICAgID8gdGhpcy5iYWNrZ3JvdW5kLnRpbGVQb3NpdGlvblggLT0gMVxuICAgICAgICA6IHRoaXMuYmFja2dyb3VuZC50aWxlUG9zaXRpb25ZIC09IHRoaXMuYmFja2dvdW5kSW5jO1xuXG4gICAgY29uc3QgcG9zID0gbmV3IFZlY3RvcjIodGhpcy5wbGF5ZXIueCwgdGhpcy5wbGF5ZXIueSk7XG4gICAgdGhpcy5lbmVteS5leHRlcm1pbmF0ZShwb3MsIHRoaXMuY3JhdGVzKTtcblxuICAgIHRoaXMucGxheWVyLnVwZGF0ZSgpO1xuICAgIHRoaXMuZW5lbXkudXBkYXRlKCk7XG5cbiAgfVxuICBwcml2YXRlIHVwZGF0ZVBlcnNwZWN0aXZlRHJhd2luZyhib2R5ID0gbnVsbCkge1xuICAgIHRoaXMuY3JhdGVzUHJlUmVuZGVyRXZlbnQgPSB0aGlzLnBoeXNpY3Muc2NlbmUuZ2FtZS5ldmVudHMub24oJ3ByZXJlbmRlcicsIChyZW5kZXJlciwgdGltZSkgPT4ge1xuICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBib2R5LmdhbWVPYmplY3QudXBkYXRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuY3JhdGVzLmNoaWxkcmVuLml0ZXJhdGUoKGNyYXRlOiBDcmF0ZSkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRpbWUpO1xuICAgICAgICAgIGNyYXRlLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3JhdGVzUHJlUmVuZGVyRXZlbnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfSwgdGhpcyk7XG4gIH1cbiAgcHJpdmF0ZSBlbmRHYW1lKHdvbjogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgdGhpcy5hZGRcbiAgICAgICAgLnRleHQoIGdldEdhbWVXaWR0aCh0aGlzKSAvIDIuNSwgZ2V0R2FtZUhlaWdodCh0aGlzKSAvIDIsIHdvbiA/ICd5b3Ugd2luJyA6ICdnYW1lIG92ZXInKS5zZXRGb250U2l6ZSh0aGlzLmdyaWRVbml0ICogNSlcbiAgICAgICAgLnNldERlcHRoKDUpO1xuICAgIHRoaXMucGh5c2ljcy5wYXVzZSgpO1xuICAgIHRoaXMuc2NlbmUucGF1c2UoKTtcbiAgfVxuICBwcml2YXRlIGRyb3BFdmVyeXRoaW5nKCkge1xuICAgIC8vIGRlYnVnZ2VyO1xuICAgIGNvbnN0IGJsb2NrZWRDcmF0ZXM6IENyYXRlW10gPSBbXTtcbiAgICB0aGlzLmZhbGxpbmdDcmF0ZXMuZm9yRWFjaCgoY3JhdGU6IENyYXRlKSA9PiB7XG5cbiAgICAgIGNvbnN0IG5vbmUgPSBmYWxzZTtcblxuICAgICAgY29uc3QgY29sbGlzaW9uOiBUeXBlcy5QaHlzaWNzLkFyY2FkZS5BcmNhZGVCb2R5Q29sbGlzaW9uID0geyB1cDogZmFsc2UsIGRvd246IHRydWUsIHJpZ2h0OiBmYWxzZSwgbGVmdDogZmFsc2UsIG5vbmUgfTtcbiAgICAgIGNvbnN0IGF4aXMgPSAneSc7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLmZhbGxpbmdDcmF0ZXMuZmlsdGVyKChpdGVtOiBDcmF0ZSkgPT4gY29sbGlkZXNPbkF4ZXMoY3JhdGUsIGl0ZW0sIGNvbGxpc2lvbikpXG4gICAgICAgICAgLnNvcnQoKGE6IENyYXRlLCBiOiBDcmF0ZSkgPT4gYVtheGlzXSA8IGJbYXhpc10gPyAtMSA6IDEgKTtcbiAgICAgIGNvbnN0IHsgYm91bmRzIH0gPSB0aGlzLnBoeXNpY3Mud29ybGQ7XG5cbiAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChjb2xsaWRpbmdDcmF0ZSkgPT4ge1xuICAgICAgICBpZiAoYmxvY2tlZEluRGlyZWN0aW9uKGNyYXRlLCBjb2xsaWRpbmdDcmF0ZSwgdGhpcy5ncmF2aXR5U3BlZWQsIGNvbGxpc2lvbikpIHtcbiAgICAgICAgICBibG9ja2VkQ3JhdGVzLnB1c2goY3JhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChyZWFjaGVkQm91bmQoY3JhdGUsIHRoaXMuZ3Jhdml0eVNwZWVkLCBjb2xsaXNpb24sIGJvdW5kcykpIHtcbiAgICAgICAgdGhpcy5ib3VuZGVkQ3JhdGVzLnB1c2goY3JhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZmFsbGluZ0NyYXRlc1xuICAgICAgICAuZmlsdGVyKCAoIGNyYXRlICkgPT4gIWJsb2NrZWRDcmF0ZXMuaW5jbHVkZXMoIGNyYXRlICkgKVxuICAgICAgICAuZmlsdGVyKCAoIGNyYXRlICkgPT4gIXRoaXMuYm91bmRlZENyYXRlcy5pbmNsdWRlcyggY3JhdGUgKSApXG4gICAgICAgIC5mb3JFYWNoKChjcmF0ZSkgPT4ge1xuICAgICAgICAgIGlmIChjcmF0ZSBpbnN0YW5jZW9mIENyYXRlKSB7XG4gICAgICAgICAgICBjcmF0ZS55ICs9IHRoaXMuZ3Jhdml0eVNwZWVkO1xuICAgICAgICAgICAgY3JhdGUudXBkYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICBpZiAoIXRoaXMucGxheWVyLmlzQmxvY2tlZERpcmVjdGlvbignZG93bicpKSB7XG4gICAgICB0aGlzLnBsYXllci55ICs9IHRoaXMuZ3Jhdml0eVNwZWVkO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZW5lbXkuaXNCbG9ja2VkRGlyZWN0aW9uKCdkb3duJykpIHtcbiAgICAgIHRoaXMuZW5lbXkueSArPSB0aGlzLmdyYXZpdHlTcGVlZDtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBibGFzdE9mZigpIHtcbiAgICBpZiAodGhpcy5yb2NrZXQudmlzaWJsZSl7XG4gICAgICB0aGlzLnNjZW5lLnNjZW5lLmNhbWVyYXMubWFpbi5zaGFrZSg1MDAsIDAuMDEpO1xuICAgIH1cbiAgICB0aGlzLnJvY2tldC52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5yb2NrZXRDb2xsaWRlci5kZXN0cm95KCk7XG4gICAgdGhpcy5iYWNrZ291bmRJbmMgPSAxMDtcbiAgICAvLyBpZiAodGhpcy5wbGF5ZXIueSA8PSB0aGlzLnBoeXNpY3Mud29ybGQuYm91bmRzLmJvdHRvbSAtIHRoaXMucGxheWVyLmhlaWdodCkge1xuICAgIC8vICAgLy8gY29uc29sZS5sb2cgKHRoaXMucGxheWVyLnkpO1xuICAgIC8vICAgdGhpcy5lbmRHYW1lKCk7XG4gICAgLy8gfVxuICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLnByaXNvbiwgdGhpcy5lbmVteSwgKCkgPT4ge1xuXG4gICAgICAgIGlmICh0aGlzLmVuZW15LnkgPD0gdGhpcy5waHlzaWNzLndvcmxkLmJvdW5kcy5ib3R0b20gLSB0aGlzLmVuZW15LmhlaWdodCkge1xuICAgICAgICAgIHRoaXMuZW5kR2FtZSh0cnVlKTtcbiAgICAgICAgICB0aGlzLmVuZW15LnggPSB0aGlzLnByaXNvbi54O1xuICAgICAgICAgIHRoaXMuZW5lbXkueSA9IHRoaXMucHJpc29uLnk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICB9XG59XG4iLCJpbXBvcnQgeyBNYWluTWVudVNjZW5lIH0gZnJvbSAnLi9tYWluLW1lbnUtc2NlbmUnO1xuaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9ib290LXNjZW5lJztcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vZ2FtZS1zY2VuZSc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgQm9vdFNjZW5lLFxuICBNYWluTWVudVNjZW5lLFxuICBHYW1lU2NlbmUsXG5dO1xuIiwiaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uL3VpL21lbnUtYnV0dG9uJztcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdNYWluTWVudScsXG59O1xuXG4vKipcbiAqIFRoZSBpbml0aWFsIHNjZW5lIHRoYXQgc3RhcnRzLCBzaG93cyB0aGUgc3BsYXNoIHNjcmVlbnMsIGFuZCBsb2FkcyB0aGUgbmVjZXNzYXJ5IGFzc2V0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIE1haW5NZW51U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKCkge1xuICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnKTtcbiAgICAvLyB0aGlzLmFkZC50ZXh0KDEwMCwgNTAsICdUaGlzIGlzIGEgc2FtcGxlIG1haW4gbWVudS4gQ2xpY2sgdGhlIFwiU3RhcnRcIiBidXR0b24gYmVsb3cgdG8gcnVuIHlvdXIgZ2FtZS4nLCB7IGZpbGw6ICcjRkZGRkZGJyB9KS5zZXRGb250U2l6ZSgyNCk7XG5cbiAgICAvLyBuZXcgTWVudUJ1dHRvbih0aGlzLCAxMDAsIDE1MCwgJ1N0YXJ0IEdhbWUnLCAoKSA9PiB7XG4gICAgLy8gICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJyk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyBuZXcgTWVudUJ1dHRvbih0aGlzLCAxMDAsIDI1MCwgJ1NldHRpbmdzJywgKCkgPT4gY29uc29sZS5sb2coJ3NldHRpbmdzIGJ1dHRvbiBjbGlja2VkJykpO1xuXG4gICAgLy8gbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAzNTAsICdIZWxwJywgKCkgPT4gY29uc29sZS5sb2coJ2hlbHAgYnV0dG9uIGNsaWNrZWQnKSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=