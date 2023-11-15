(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./src/app/pages/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");




var routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"managerLogado\">\n  <nav class=\"navbar bg-body-tertiary justify-content-end\" style=\"background-color: rgb(188, 205, 210);\">\n    <form class=\"d-flex \" role=\"search\">\n      <input class=\"form-control me-2\" type=\"search\" placeholder=\"Listar por Skill\" aria-label=\"Search\"\n        #filterPorNameSkill>\n\n      <button (click)=\"listar(filterPorNameSkill.value)\" class=\"btn btn-outline-success\"\n        type=\"button\">Localizar</button>\n    </form>\n  </nav>\n\n  <div class=\"row\">\n    <div class=\"col-sm-4 mb-1\" *ngFor=\"let colaborador of colaboradores\">\n      <div class=\"card mb-3\">\n        <div class=\"row g-0\">\n          <div class=\"col-md-5 text-center\">\n            <img src=\"./../../../assets/img/user.png\" class=\"img-fluid rounded-start\" alt=\"User Image\">\n            <div>\n              <h5 class=\"card-title\">\n                <small>Nome:</small> {{colaborador.name}}\n              </h5>\n              <div>\n                <small>Cargo:</small> {{colaborador.cargo}}\n              </div>\n            </div>\n            <button  [routerLink]=\"['/profile', colaborador.id]\" class=\"btn btn-primary btn-block mt-3\">Perfil</button>\n          </div>\n\n          <div class=\"col-md-7\">\n            <div class=\"card-body\">\n              <h6 class=\"card-header text-center\">Skills</h6>\n              <ul class=\"list-group\">\n                <li class=\"list-group-item\" *ngFor=\"let skill of colaborador.skills\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\"\n                    viewBox=\"0 0 640 512\"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->\n                    <path\n                      d=\"M128 0C92.7 0 64 28.7 64 64V288H19.2C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384H320V288H128V64H448V96h64V64c0-35.3-28.7-64-64-64H128zM512 128H400c-26.5 0-48 21.5-48 48V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V256H544c-17.7 0-32-14.3-32-32V128zm32 0v96h96l-96-96z\" />\n                  </svg>\n                  {{skill.name}}\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_services_colaborador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/services/colaborador.service */ "./src/app/pages/user/services/colaborador.service.ts");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _login_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/services/storage.service */ "./src/app/pages/login/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






toastr__WEBPACK_IMPORTED_MODULE_3___default.a.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(colaboradorService, storage, router) {
        this.colaboradorService = colaboradorService;
        this.storage = storage;
        this.router = router;
        this.userLogado = false;
        this.managerLogado = false;
        this.colaboradores = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.findAll();
        this.getUserLogado();
    };
    DashboardComponent.prototype.findAll = function () {
        var _this = this;
        this.colaboradorService.getAll()
            .subscribe(function (response) { return _this.colaboradores = response.sort(function (a, b) { return b.id - a.id; }); }, function (error) { return toastr__WEBPACK_IMPORTED_MODULE_3___default.a.error('Error ao carregar a lista de Skills!'); });
    };
    DashboardComponent.prototype.listar = function (nameSkill) {
        var _this = this;
        this.colaboradorService.getAllByNameSkill(nameSkill)
            .subscribe(function (response) { return _this.colaboradores = response.sort(function (a, b) { return b.id - a.id; }); }, function (error) { return alert('Error ao carregar a lista de Skills'); });
    };
    DashboardComponent.prototype.getUserLogado = function () {
        var localUser = this.storage.getLocalUser();
        var localManager = this.storage.getManager();
        if (localUser !== null && localManager === null) {
            this.userLogado = true;
            this.router.navigate(['profile', 4], { skipLocationChange: true });
        }
        else if (localUser === null && localManager !== null) {
            this.managerLogado = true;
        }
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_services_colaborador_service__WEBPACK_IMPORTED_MODULE_2__["ColaboradorService"],
            _login_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module.js.map