(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");




var routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page content -->\n<div class=\"container mt-5\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5 col-md-7\">\n            <div class=\"card shadow border-0\">\n                <div class=\"card-header\">\n                    <h3 class=\"text-center mt-5\">Bem Vindo</h3>\n\n                </div>\n\n                <h6 class=\"text-center mt-2\">Entre com suas Credencias para logar</h6>\n\n                <div class=\"card-body px-lg-5 py-lg-5\">\n                    <form [formGroup]=\"loginGroup\" (submit)=\"login()\">\n                        <div class=\"form-group mb-3\">\n                            <div class=\"input-group input-group-alternative\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">\n                                        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                                    </span>\n                                </div>\n                                <input class=\"form-control\" placeholder=\"User\" type=\"text\" formControlName=\"user\">\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <div class=\"input-group input-group-alternative\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">\n                                        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n                                    </span>\n                                </div>\n                                <input class=\"form-control\" formControlName=\"password\" placeholder=\"Senha\"\n                                    type=\"password\">\n                            </div>\n                        </div>\n\n                        <div class=\"text-center pt-4 pb-3\">\n                            <button class=\"btn btn-block btn-lg btn-primary text-center text-light\" type=\"submit\">\n                                Login\n                                <i class=\"fa fa-paper-plane ml-2\" aria-hidden=\"true\"></i>\n                            </button>\n                        </div>\n\n                    </form>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_login_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/login.model */ "./src/app/pages/login/model/login.model.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/pages/login/services/storage.service.ts");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_5__);






toastr__WEBPACK_IMPORTED_MODULE_5___default.a.options = {
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
var LoginComponent = /** @class */ (function () {
    function LoginComponent(frmBuilder, storage) {
        this.frmBuilder = frmBuilder;
        this.storage = storage;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userLogin = new _model_login_model__WEBPACK_IMPORTED_MODULE_3__["Login"]();
        this.buildSkillForm();
    };
    LoginComponent.prototype.buildSkillForm = function () {
        this.loginGroup = this.frmBuilder.group({
            'user': null,
            'password': null
        });
    };
    LoginComponent.prototype.login = function () {
        var login = Object.assign(new _model_login_model__WEBPACK_IMPORTED_MODULE_3__["Login"](), this.loginGroup.value);
        if (login.password === "123" && login.user === "user") {
            this.storage.setLocalUser(login);
            location.reload();
        }
        else if (login.password === "123" && login.user === "manager") {
            this.storage.setManager(login);
            location.reload();
        }
        else {
            toastr__WEBPACK_IMPORTED_MODULE_5___default.a.error('User ou Senha inválido(a)!');
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/pages/login/model/login.model.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/login/model/login.model.ts ***!
  \**************************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_model_colaborador_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user/model/colaborador.model */ "./src/app/pages/user/model/colaborador.model.ts");


var Login = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Login.fromJson = function (jsonData) {
        return Object.assign(new Login(), jsonData);
    };
    return Login;
}(_user_model_colaborador_model__WEBPACK_IMPORTED_MODULE_1__["Colaborador"]));



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map