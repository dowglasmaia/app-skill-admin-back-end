(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/dashboard/dashboard.module": [
		"./src/app/pages/dashboard/dashboard.module.ts",
		"default~pages-dashboard-dashboard-module~pages-login-login-module~pages-skills-skills-module~pages-u~5e641cef",
		"common",
		"pages-dashboard-dashboard-module"
	],
	"./pages/login/login.module": [
		"./src/app/pages/login/login.module.ts",
		"default~pages-dashboard-dashboard-module~pages-login-login-module~pages-skills-skills-module~pages-u~5e641cef",
		"default~pages-login-login-module~pages-skills-skills-module~pages-user-user-module",
		"common",
		"pages-login-login-module"
	],
	"./pages/skills/skills.module": [
		"./src/app/pages/skills/skills.module.ts",
		"default~pages-dashboard-dashboard-module~pages-login-login-module~pages-skills-skills-module~pages-u~5e641cef",
		"default~pages-login-login-module~pages-skills-skills-module~pages-user-user-module",
		"common",
		"pages-skills-skills-module"
	],
	"./pages/user/user.module": [
		"./src/app/pages/user/user.module.ts",
		"default~pages-dashboard-dashboard-module~pages-login-login-module~pages-skills-skills-module~pages-u~5e641cef",
		"default~pages-login-login-module~pages-skills-skills-module~pages-user-user-module",
		"common",
		"pages-user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
    { path: 'skills', loadChildren: './pages/skills/skills.module#SkillsModule' },
    { path: 'profile', loadChildren: './pages/user/user.module#UserModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-home></app-home>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'job-skills';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"userLogado\" class=\"wrapper\">\r\n  <header class=\"main-header\">\r\n    <!-- Logo -->\r\n    <a routerLink=\"/\" class=\"logo\">\r\n      <!-- mini logo for sidebar mini 50x50 pixels -->\r\n      <span class=\"logo-mini\"><b>Skills</b></span>\r\n      <!-- logo for regular state and mobile devices -->\r\n      <span class=\"logo-lg\">\r\n        <b>Job Skills</b>\r\n      </span>\r\n    </a>\r\n\r\n    <!-- Header Navbar -->\r\n    <nav class=\"navbar navbar-static-top justify-content-start\" role=\"navigation\">\r\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n      </a>\r\n\r\n    </nav>\r\n  </header>\r\n\r\n  <!-- Coluna Esquerda do sidebar -  com Menu de Navegação -->\r\n  <aside class=\"main-sidebar\">\r\n    <!-- Sidebar Menu -->\r\n    <section class=\"sidebar\">\r\n      <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n        <li class=\"header\" style=\"text-align: center !important; padding: 15px 0 !important\">\r\n          <a class=\"nav-link \" routerLink=\"/\"> Dashboard </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link \" routerLink=\"/skills\">\r\n            <svg class=\"mr-2\" xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\"\r\n              viewBox=\"0 0 640 512\"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->\r\n              <path\r\n                d=\"M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z\" />\r\n            </svg>\r\n            Skills\r\n          </a>\r\n        </li>\r\n\r\n      </ul>\r\n\r\n    </section>\r\n\r\n    <section style=\"\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 10px \">\r\n\r\n      <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link \" (click)=\"logout()\" style=\"cursor: pointer; color:white;\">\r\n            <svg class=\"mr-2\" xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\"\r\n              viewBox=\"0 0 512 512\"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->\r\n              <path\r\n                d=\"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z\" />\r\n            </svg>\r\n            Sair\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n    </section>\r\n\r\n  </aside>\r\n\r\n  <!-- Main content -->\r\n  <div class=\"content-wrapper\">\r\n    <section class=\"content container-fluid\">\r\n\r\n      <router-outlet></router-outlet>\r\n\r\n    </section>\r\n  </div>\r\n\r\n  <!-- Main Footer -->\r\n  <footer class=\"main-footer\">\r\n    <div class=\"pull-right hidden-xs\"> Desenvolvimento: <strong>Dowglas Maia</strong> </div>\r\n    <strong>&copy; 2023 | </strong> Todos os direitos reservados.\r\n  </footer>\r\n\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!userLogado\">\r\n\r\n  <section class=\"content container-fluid\">\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n  </section>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_pages_login_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/login/services/storage.service */ "./src/app/pages/login/services/storage.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(storage, router) {
        this.storage = storage;
        this.router = router;
        this.userLogado = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getUserLogado();
    };
    HomeComponent.prototype.getUserLogado = function () {
        var localUser = this.storage.getLocalUser();
        var localManager = this.storage.getManager();
        console.log(localUser);
        console.log(localManager);
        if (localUser !== null || localManager !== null) {
            this.userLogado = true;
        }
        else {
            this.router.navigateByUrl('login', { skipLocationChange: true });
        }
    };
    HomeComponent.prototype.logout = function () {
        this.storage.setLocalUser(null);
        this.storage.setManager(null);
        sessionStorage.clear();
        location.reload();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_pages_login_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/config/storage-keys.config.ts":
/*!***********************************************!*\
  !*** ./src/app/config/storage-keys.config.ts ***!
  \***********************************************/
/*! exports provided: STORAGE_KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_KEYS", function() { return STORAGE_KEYS; });
var STORAGE_KEYS = {
    localUser: "localUser",
    localManager: "localManager"
};


/***/ }),

/***/ "./src/app/pages/login/services/storage.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/login/services/storage.service.ts ***!
  \*********************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/storage-keys.config */ "./src/app/config/storage-keys.config.ts");



var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.getLocalUser = function () {
        var user = sessionStorage.getItem(src_app_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_2__["STORAGE_KEYS"].localUser);
        if (user == null)
            return null;
        else
            return JSON.parse(user);
    };
    StorageService.prototype.setLocalUser = function (obj) {
        if (obj == null) {
            sessionStorage.clear();
        }
        else {
            sessionStorage.setItem(src_app_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_2__["STORAGE_KEYS"].localUser, JSON.stringify(obj));
            console.log(obj);
        }
    };
    StorageService.prototype.getManager = function () {
        var user = sessionStorage.getItem(src_app_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_2__["STORAGE_KEYS"].localManager);
        if (user == null)
            return null;
        else
            return JSON.parse(user);
    };
    StorageService.prototype.setManager = function (obj) {
        if (obj == null) {
            sessionStorage.clear();
        }
        else {
            sessionStorage.setItem(src_app_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_2__["STORAGE_KEYS"].localManager, JSON.stringify(obj));
            console.log(obj);
        }
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    /* url do servidor*/
    url_api: 'http://localhost:8080/api/v1',
    /* headers - Definindo o Tipo de Conteudo que é Passo no corpo da requisição*/
    httpOptions: {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dowgl\Documents\projetos-software\job-skills\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map