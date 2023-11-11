(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-skills-skills-module"],{

/***/ "./src/app/pages/skills/model/skill.model.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/skills/model/skill.model.ts ***!
  \***************************************************/
/*! exports provided: Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
var Skill = /** @class */ (function () {
    function Skill() {
    }
    return Skill;
}());



/***/ }),

/***/ "./src/app/pages/skills/skill-form/skill-form.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/skills/skill-form/skill-form.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NraWxscy9za2lsbC1mb3JtL3NraWxsLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/skills/skill-form/skill-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/skills/skill-form/skill-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"mb-5 border-bottom\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Dashboard</a> </li>\n    <li class=\"breadcrumb-item\"><a routerLink=\"/skills\">skills</a> </li>\n    <li class=\"breadcrumb-item active\"> Formulário de Skill </li>\n  </ol>\n</nav>\n\n\n<div class=\"row mb-2\">\n  <div class=\"col-md\">\n    <h1 class=\"h2 border-left pl-2\">\n      Formulário de Skill\n    </h1>\n  </div>\n\n  <div class=\"col-md\">\n    <a routerLink=\"/\" class=\"btn btn-light float-right\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\"\n        viewBox=\"0 0 512 512\"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->\n        <path\n          d=\"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z\" />\n      </svg>\n      Voltar\n    </a>\n  </div>\n</div>\n\n\n<form [formGroup]=\"skillForm\" (submit)=\"submitForm()\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Informações sobre a Skill\n    </div>\n\n    <div class=\"card-body\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-4\">\n          <label for=\"name\">Nome</label>\n          <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"name\">\n\n          <!-- <div class=\"text-danger\" *ngIf=\"skillForm.get('name').invalid \n                                        && skillForm.get('name').touched\">\n            <div *ngIf=\"skillForm.get('name').erros.required\">\n              dado obrigatório\n            </div>\n            <div *ngIf=\"skillForm.get('name').erros.minlength\">\n              deve conter no minimo 2 caracteres\n            </div>\n          </div>-->\n\n        </div>\n\n        <div class=\"form-group col-md-8\">\n          <label for=\"descripton\">Descrição</label>\n          <input formControlName=\"description\" type=\"text\" class=\"form-control\" id=\"descripton\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <button [disabled]=\"submittingForm || submitForm.invalid\" type=\"submit\"\n    class=\"btn btn-primary btn-lg mt-3 float-right\">\n    Salvar\n  </button>\n\n</form>"

/***/ }),

/***/ "./src/app/pages/skills/skill-form/skill-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/skills/skill-form/skill-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: SkillFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillFormComponent", function() { return SkillFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _model_skill_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/skill.model */ "./src/app/pages/skills/model/skill.model.ts");
/* harmony import */ var _services_skill_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/skill.service */ "./src/app/pages/skills/services/skill.service.ts");








var SkillFormComponent = /** @class */ (function () {
    function SkillFormComponent(skillService, route, router, formBuilder) {
        this.skillService = skillService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.serverErrorMessages = null;
        this.submittingForm = false;
        this.skill = new _model_skill_model__WEBPACK_IMPORTED_MODULE_6__["Skill"]();
    }
    SkillFormComponent.prototype.ngOnInit = function () {
        this.setCurrentAction();
        this.buildSkillForm();
        this.loadSkill();
    };
    SkillFormComponent.prototype.ngAfterContentChecked = function () {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.
        this.setPageTitle();
    };
    SkillFormComponent.prototype.submitForm = function () {
        this.submittingForm = true;
        if (this.currentcAction == 'new')
            this.createSkill();
        else
            this.updateSkill();
    };
    SkillFormComponent.prototype.createSkill = function () {
        var _this = this;
        var skill = Object.assign(new _model_skill_model__WEBPACK_IMPORTED_MODULE_6__["Skill"](), this.skillForm.value);
        this.skillService.create(skill)
            .subscribe(function (skill) { return _this.actionsForSuccess(skill); }, function (error) { return _this.actionsForError(error); });
    };
    SkillFormComponent.prototype.updateSkill = function () {
        var _this = this;
        var skill = Object.assign(new _model_skill_model__WEBPACK_IMPORTED_MODULE_6__["Skill"](), this.skillForm.value);
        this.skillService.update(skill)
            .subscribe(function (skill) { return _this.actionsForSuccess(skill); }, function (error) { return _this.actionsForError(error); });
    };
    SkillFormComponent.prototype.actionsForSuccess = function (skill) {
        var _this = this;
        toastr__WEBPACK_IMPORTED_MODULE_5___default.a.success('Requisição processada com sucesso!');
        // redirect / reload component page
        this.router.navigateByUrl('skills', { skipLocationChange: true })
            .then(function () { return _this.router.navigate(['skills', skill.id, 'edit']); });
    };
    SkillFormComponent.prototype.actionsForError = function (error) {
        toastr__WEBPACK_IMPORTED_MODULE_5___default.a.error('Ocorreu um error ao processar a requisição!');
        this.submittingForm = false;
    };
    SkillFormComponent.prototype.setCurrentAction = function () {
        if (this.route.snapshot.url[0].path == "new")
            this.currentcAction = "new";
        else
            this.currentcAction = "edit";
    };
    SkillFormComponent.prototype.buildSkillForm = function () {
        this.skillForm = this.formBuilder.group({
            id: [null],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            description: [null]
        });
    };
    SkillFormComponent.prototype.loadSkill = function () {
        var _this = this;
        console.log(this.currentcAction);
        if (this.currentcAction === "edit") {
            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { return _this.skillService.getById(+params.get("id")); })).subscribe(function (skill) {
                _this.skill = skill;
                _this.skillForm.patchValue(skill);
            }, function (error) { return alert('Ocorreu um error no servidor, tente mais tarde!'); });
        }
    };
    SkillFormComponent.prototype.setPageTitle = function () {
        if (this.currentcAction == 'new')
            this.pageTile = 'Cadrastro de  Nova Skill';
        else {
            var skillName = this.skill.name || '';
            this.pageTile = 'Editando Skill: ' + skillName;
        }
    };
    SkillFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skill-form',
            template: __webpack_require__(/*! ./skill-form.component.html */ "./src/app/pages/skills/skill-form/skill-form.component.html"),
            styles: [__webpack_require__(/*! ./skill-form.component.css */ "./src/app/pages/skills/skill-form/skill-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_skill_service__WEBPACK_IMPORTED_MODULE_7__["SkillService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SkillFormComponent);
    return SkillFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/skills/skill-list/skill-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/skills/skill-list/skill-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NraWxscy9za2lsbC1saXN0L3NraWxsLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/skills/skill-list/skill-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/skills/skill-list/skill-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"mb-5 border-bottom\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Dashboard</a> </li>\n    <li class=\"breadcrumb-item active\"> Skills </li>\n  </ol>\n</nav>\n\n<div class=\"row mb-2\">\n  <div class=\"col-md\">\n    <h1 class=\"h2 border-left pl-2\">\n      Skills\n    </h1>\n  </div>\n\n  <div class=\"col-md\">\n    <a routerLink=\"new\" class=\"btn btn-success float-right\">\n      + Nova Skill\n    </a>\n  </div>\n</div>\n\n<table class=\"table table-hover\">\n  <thead>\n    <tr class=\"bg-dark text-light\">\n      <th>Skill</th>\n      <th class=\"float-right\">Ações</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let skill of skills\">\n      <td>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\" class=\"mr-2\"\n          viewBox=\"0 0 640 512\"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->\n          <path\n            d=\"M128 0C92.7 0 64 28.7 64 64V288H19.2C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384H320V288H128V64H448V96h64V64c0-35.3-28.7-64-64-64H128zM512 128H400c-26.5 0-48 21.5-48 48V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V256H544c-17.7 0-32-14.3-32-32V128zm32 0v96h96l-96-96z\" />\n        </svg>\n        <strong>{{skill.name}}</strong><br>\n        <small>{{skill.description}}</small>\n      </td>\n\n      <td class=\"float-right\">\n        <a [routerLink]=\"[ skill.id, 'edit' ]\" class=\"btn btn-sm btn-outline-info mr-2\"> Editar </a>\n        \n      </td>\n    </tr>\n  </tbody>\n\n</table>"

/***/ }),

/***/ "./src/app/pages/skills/skill-list/skill-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/skills/skill-list/skill-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: SkillListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillListComponent", function() { return SkillListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_skill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/skill.service */ "./src/app/pages/skills/services/skill.service.ts");



var SkillListComponent = /** @class */ (function () {
    function SkillListComponent(skillService) {
        this.skillService = skillService;
        this.skills = [];
    }
    SkillListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    SkillListComponent.prototype.getAll = function () {
        var _this = this;
        this.skillService.getAll()
            .subscribe(function (response) { return _this.skills = response; }, function (error) { return alert('Error ao carregar a lista de Skills'); });
    };
    SkillListComponent.prototype.delete = function () {
        alert('seu perfil pnão tem ermissão para delete uma Skill !!!');
    };
    SkillListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skill-list',
            template: __webpack_require__(/*! ./skill-list.component.html */ "./src/app/pages/skills/skill-list/skill-list.component.html"),
            styles: [__webpack_require__(/*! ./skill-list.component.css */ "./src/app/pages/skills/skill-list/skill-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_skill_service__WEBPACK_IMPORTED_MODULE_2__["SkillService"]])
    ], SkillListComponent);
    return SkillListComponent;
}());



/***/ }),

/***/ "./src/app/pages/skills/skills-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/skills/skills-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SkillsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsRoutingModule", function() { return SkillsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skill-list/skill-list.component */ "./src/app/pages/skills/skill-list/skill-list.component.ts");
/* harmony import */ var _skill_form_skill_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skill-form/skill-form.component */ "./src/app/pages/skills/skill-form/skill-form.component.ts");





var routes = [
    { path: '', component: _skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_3__["SkillListComponent"] },
    { path: 'new', component: _skill_form_skill_form_component__WEBPACK_IMPORTED_MODULE_4__["SkillFormComponent"] },
    { path: ':id/edit', component: _skill_form_skill_form_component__WEBPACK_IMPORTED_MODULE_4__["SkillFormComponent"] }
];
var SkillsRoutingModule = /** @class */ (function () {
    function SkillsRoutingModule() {
    }
    SkillsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SkillsRoutingModule);
    return SkillsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/skills/skills.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/skills/skills.module.ts ***!
  \***********************************************/
/*! exports provided: SkillsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsModule", function() { return SkillsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _skills_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills-routing.module */ "./src/app/pages/skills/skills-routing.module.ts");
/* harmony import */ var _skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skill-list/skill-list.component */ "./src/app/pages/skills/skill-list/skill-list.component.ts");
/* harmony import */ var _skill_form_skill_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skill-form/skill-form.component */ "./src/app/pages/skills/skill-form/skill-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var SkillsModule = /** @class */ (function () {
    function SkillsModule() {
    }
    SkillsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_4__["SkillListComponent"],
                _skill_form_skill_form_component__WEBPACK_IMPORTED_MODULE_5__["SkillFormComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _skills_routing_module__WEBPACK_IMPORTED_MODULE_3__["SkillsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ]
        })
    ], SkillsModule);
    return SkillsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-skills-skills-module.js.map