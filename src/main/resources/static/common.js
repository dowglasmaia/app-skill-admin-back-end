(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/pages/skills/services/skill.service.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/skills/services/skill.service.ts ***!
  \********************************************************/
/*! exports provided: SkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function() { return SkillService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");






var SkillService = /** @class */ (function () {
    function SkillService(http) {
        this.http = http;
        this.apiPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].url_api + "/skills";
    }
    SkillService.prototype.getAll = function () {
        return this.http.get(this.apiPath)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.jsonDataToSkills));
    };
    SkillService.prototype.getById = function (id) {
        var url = this.apiPath + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.jsonDataToSkill));
    };
    SkillService.prototype.create = function (skill) {
        return this.http.post(this.apiPath, skill)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.jsonDataToSkill));
    };
    SkillService.prototype.update = function (skill) {
        var url = this.apiPath + "/" + skill.id;
        return this.http.put(url, skill)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return skill; }));
    };
    SkillService.prototype.delete = function (id) {
        var url = this.apiPath + "/" + id;
        return this.http.delete(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return null; }));
    };
    SkillService.prototype.jsonDataToSkill = function (jsonData) {
        var json = jsonData;
        return json;
    };
    SkillService.prototype.jsonDataToSkills = function (jsonData) {
        var skills = [];
        jsonData.forEach(function (element) { return skills.push(element); });
        return skills;
    };
    SkillService.prototype.handleError = function (error) {
        console.log("Error na requisição =>", error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    SkillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SkillService);
    return SkillService;
}());



/***/ }),

/***/ "./src/app/pages/user/model/colaborador.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/user/model/colaborador.model.ts ***!
  \*******************************************************/
/*! exports provided: Colaborador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colaborador", function() { return Colaborador; });
var Colaborador = /** @class */ (function () {
    function Colaborador() {
        this.skills = [];
    }
    return Colaborador;
}());



/***/ }),

/***/ "./src/app/pages/user/services/colaborador.service.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/user/services/colaborador.service.ts ***!
  \************************************************************/
/*! exports provided: ColaboradorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboradorService", function() { return ColaboradorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");






var ColaboradorService = /** @class */ (function () {
    function ColaboradorService(http) {
        this.http = http;
        this.apiPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].url_api + "/colaboradores";
    }
    ColaboradorService.prototype.getAllByNameSkill = function (name) {
        console.log("O NOME É: " + name);
        return this.http.get(this.apiPath + "?skill=" + name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.jsonDataToColaboradores));
    };
    ColaboradorService.prototype.getAll = function () {
        return this.http.get(this.apiPath + "?skill=")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.jsonDataToColaboradores));
    };
    ColaboradorService.prototype.getById = function (id) {
        var url = this.apiPath + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.jsonDataToColaborador));
    };
    ColaboradorService.prototype.getByMatricula = function (matricula) {
        return this.http.get(this.apiPath + "/" + matricula + "/matricula")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.jsonDataToColaborador));
    };
    ColaboradorService.prototype.update = function (id, skills) {
        var url = this.apiPath + "/" + id + "/skills";
        return this.http.put(url, skills)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.jsonDataToColaborador));
    };
    ColaboradorService.prototype.jsonDataToColaborador = function (jsonData) {
        var json = jsonData;
        return json;
    };
    ColaboradorService.prototype.jsonDataToColaboradores = function (jsonData) {
        var colaboradores = [];
        jsonData.forEach(function (element) { return colaboradores.push(element); });
        return colaboradores;
    };
    ColaboradorService.prototype.handleError = function (error) {
        console.log("Error na requisição =>", error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    ColaboradorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ColaboradorService);
    return ColaboradorService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var environment = {
    production: true,
    /* url do servidor*/
    url_api: 'http://localhost:8080/api/v1',
    /* headers - Definindo o Tipo de Conteudo que é Passo no corpo da requisição*/
    httpOptions: {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
    }
};


/***/ })

}]);
//# sourceMappingURL=common.js.map