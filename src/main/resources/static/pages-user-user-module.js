(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-module"],{

/***/ "./src/app/pages/user/profile/user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/user/profile/user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvcHJvZmlsZS91c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/user/profile/user.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/user/profile/user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"mb-5 border-bottom\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Dashboard</a></li>\n    <li class=\"breadcrumb-item active\">Colaborador</li>\n  </ol>\n</nav>\n\n<div class=\"row mb-2\">\n  <div class=\"col-md\">\n    <h1 class=\"h2 border-left pl-2\">\n      Perfil do Colaborador\n    </h1>\n  </div>\n\n  <div class=\"col-md\">\n    <a routerLink=\"/\" class=\"btn btn-light float-right\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\"\n        viewBox=\"0 0 512 512\"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->\n        <path\n          d=\"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z\" />\n      </svg>\n      Voltar\n    </a>\n  </div>\n</div>\n\n\n\n<div class=\"container mt-5\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <img src=\"./../../../assets/img/user.png\" class=\"img-fluid rounded-start\" alt=\"User Image\">\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"mb-0\">Detalhes do Colaborador</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <label for=\"inputName\">Nome</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputName\" value=\"{{colaborador.name}}\" readonly>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputPosition\">Cargo</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputPosition\" value=\"{{colaborador.cargo}}\" readonly>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputDepartment\">Squard</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputDepartment\" value=\"{{colaborador.squard}}\" readonly>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"inputSkills\">Skills</label>\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\" *ngFor=\"let skill of colaborador.skills\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\"\n                  viewBox=\"0 0 640 512\"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->\n                  <path\n                    d=\"M128 0C92.7 0 64 28.7 64 64V288H19.2C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384H320V288H128V64H448V96h64V64c0-35.3-28.7-64-64-64H128zM512 128H400c-26.5 0-48 21.5-48 48V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V256H544c-17.7 0-32-14.3-32-32V128zm32 0v96h96l-96-96z\" />\n                </svg>\n                {{skill.name}}\n              </li>\n            </ul>\n\n            <div class=\"input-group\" *ngIf=\"userLogado\">\n              <select [(ngModel)]=\"selectedSkill\" class=\"custom-select\" id=\"selectedSkill\"\n                aria-label=\"Example select with button addon\">\n                <option [value]=\"null\" disabled selected>Escolha uma opção</option>\n                <option *ngFor=\"let skill of skills\" [ngValue]=\"skill\">{{ skill.name }}</option>\n              </select>\n\n              <div class=\"input-group-append\" >\n                <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"addSkill(selectedSkill)\">\n                  Adicionar Nova Skill\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <button class=\"btn btn-outline-primary\" type=\"button\" (click)=\"update()\" *ngIf=\"userLogado\">\n          Atulizar\n        </button>\n      </div>\n\n      <div class=\"mt-5 float-right\">\n        <i class=\"fa fa-paper-plane mr-2\" aria-hidden=\"true\"></i>\n        <a routerLink=\"/skills/new\">Click aqui para cadastra uma Nova Skill</a>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/user/profile/user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/user/profile/user.component.ts ***!
  \******************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_colaborador_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/colaborador.model */ "./src/app/pages/user/model/colaborador.model.ts");
/* harmony import */ var _services_colaborador_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/colaborador.service */ "./src/app/pages/user/services/colaborador.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _skills_services_skill_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../skills/services/skill.service */ "./src/app/pages/skills/services/skill.service.ts");
/* harmony import */ var _login_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../login/services/storage.service */ "./src/app/pages/login/services/storage.service.ts");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_8__);









toastr__WEBPACK_IMPORTED_MODULE_8___default.a.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "800",
    "timeOut": "3000",
    "extendedTimeOut": "900",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};
var UserComponent = /** @class */ (function () {
    function UserComponent(colaboradorService, skillsService, route, storage, router) {
        this.colaboradorService = colaboradorService;
        this.skillsService = skillsService;
        this.route = route;
        this.storage = storage;
        this.router = router;
        this.userLogado = false;
        this.managerLogado = false;
        this.colaborador = new _model_colaborador_model__WEBPACK_IMPORTED_MODULE_2__["Colaborador"]();
        this.colaboradorSkills = [];
        this.skills = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUserLogado();
        this.getByMatricula();
        this.getAllSkill();
    };
    UserComponent.prototype.getById = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return _this.colaboradorService.getById(+params.get("id")); })).subscribe(function (colaborador) {
            _this.colaborador = colaborador;
            _this.colaboradorSkills = colaborador.skills;
        }, function (error) { return alert('Ocorreu um error no servidor, tente mais tarde!'); });
    };
    UserComponent.prototype.getByMatricula = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return _this.colaboradorService.getByMatricula(params.get("matricula")); })).subscribe(function (colaborador) {
            _this.colaborador = colaborador;
            _this.colaboradorSkills = colaborador.skills;
        }, function (error) { return alert('Ocorreu um error no servidor, tente mais tarde!'); });
    };
    UserComponent.prototype.getAllSkill = function () {
        var _this = this;
        this.skillsService.getAll()
            .subscribe(function (skills) { return _this.skills = skills; });
    };
    UserComponent.prototype.getUserLogado = function () {
        var localUser = this.storage.getLocalUser();
        var localManager = this.storage.getManager();
        if (localUser !== null && localManager === null) {
            this.userLogado = true;
        }
        else if (localUser === null && localManager !== null) {
            this.managerLogado = true;
        }
    };
    UserComponent.prototype.addSkill = function (newSkill) {
        var existeValor = this.colaboradorSkills.some(function (item) { return item.name === newSkill.name; });
        console.log(newSkill);
        if (!existeValor)
            this.colaboradorSkills.push(newSkill);
    };
    UserComponent.prototype.update = function () {
        var _this = this;
        console.log(this.colaborador);
        this.colaboradorService.update(this.colaborador.id, this.colaborador.skills)
            .subscribe(function (colaborador) {
            _this.colaborador = colaborador;
            toastr__WEBPACK_IMPORTED_MODULE_8___default.a.success('Skill adicionada com sucesso!');
            setTimeout(function () {
                location.reload();
            }, 1300);
        }, function (error) { return toastr__WEBPACK_IMPORTED_MODULE_8___default.a.error('Ocorreu um error ao tentar adicionar uma nova Skill!'); });
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/pages/user/profile/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/pages/user/profile/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_colaborador_service__WEBPACK_IMPORTED_MODULE_3__["ColaboradorService"],
            _skills_services_skill_service__WEBPACK_IMPORTED_MODULE_6__["SkillService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _login_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/user/user-routing.module.ts ***!
  \***************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/user.component */ "./src/app/pages/user/profile/user.component.ts");




var routes = [
    { path: '', component: _profile_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: ':matricula', component: _profile_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/pages/user/user-routing.module.ts");
/* harmony import */ var _profile_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/user.component */ "./src/app/pages/user/profile/user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _profile_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-user-module.js.map