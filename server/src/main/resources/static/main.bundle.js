webpackJsonp([1,4],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_guard__ = __webpack_require__(205);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(206);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(207);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 170;


/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(211);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guard__ = __webpack_require__(107);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomeComponent */],
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guard__["a" /* LoginGuard */]]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(275),
        styles: [__webpack_require__(266)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_style_loader_angular_material_prebuilt_themes_pink_bluegrey_css__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_style_loader_angular_material_prebuilt_themes_pink_bluegrey_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_style_loader_angular_material_prebuilt_themes_pink_bluegrey_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guard__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service__ = __webpack_require__(35);
/* unused harmony export initUserFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// material

// different theme

// import 'style-loader!@angular/material/prebuilt-themes/deeppurple-amber.css';
// import 'style-loader!@angular/material/prebuilt-themes/indigo-pink.css';
// import 'style-loader!@angular/material/prebuilt-themes/purple-green.css';








function initUserFactory(userService) {
    return function () { return userService.initUser(); };
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__component__["b" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__component__["c" /* ApiCardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__component__["d" /* GithubComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__guard__["a" /* LoginGuard */],
            __WEBPACK_IMPORTED_MODULE_13__service__["a" /* FooService */],
            __WEBPACK_IMPORTED_MODULE_13__service__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_13__service__["c" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_13__service__["d" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_13__service__["e" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdIconRegistry */],
            {
                'provide': __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* APP_INITIALIZER */],
                'useFactory': initUserFactory,
                'deps': [__WEBPACK_IMPORTED_MODULE_13__service__["d" /* UserService */]],
                'multi': true
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiCardComponent = (function () {
    function ApiCardComponent() {
        this.expand = false;
        this.apiClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    ApiCardComponent.prototype.ngOnInit = function () {
    };
    ApiCardComponent.prototype.onButtonClick = function () {
        this.expand = true;
        this.apiClick.next(this.apiText);
    };
    ApiCardComponent.prototype.responsePanelClass = function () {
        var rClass = ['response'];
        if (this.expand) {
            rClass.push('expand');
        }
        if (this.responseObj.status) {
            this.responseObj.status === 200 ?
                rClass.push('response-success') :
                rClass.push('response-error');
        }
        return rClass.join(' ');
    };
    return ApiCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", String)
], ApiCardComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", String)
], ApiCardComponent.prototype, "subTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", String)
], ApiCardComponent.prototype, "imgUrl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", String)
], ApiCardComponent.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", String)
], ApiCardComponent.prototype, "apiText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], ApiCardComponent.prototype, "responseObj", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _a || Object)
], ApiCardComponent.prototype, "apiClick", void 0);
ApiCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-api-card',
        template: __webpack_require__(276),
        styles: [__webpack_require__(267)]
    }),
    __metadata("design:paramtypes", [])
], ApiCardComponent);

var _a;
//# sourceMappingURL=api-card.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_card_component__ = __webpack_require__(196);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_card_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(277),
        styles: [__webpack_require__(268)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component__ = __webpack_require__(198);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__footer_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GithubComponent = (function () {
    function GithubComponent() {
    }
    GithubComponent.prototype.ngOnInit = function () {
    };
    return GithubComponent;
}());
GithubComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-github',
        template: __webpack_require__(278),
        styles: [__webpack_require__(269)]
    }),
    __metadata("design:paramtypes", [])
], GithubComponent);

//# sourceMappingURL=github.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__github_component__ = __webpack_require__(200);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__github_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(userService, authService, router) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().subscribe(function (res) {
            _this.userService.currentUser = null;
            _this.router.navigate(['/login']);
        });
    };
    HeaderComponent.prototype.hasSignedIn = function () {
        return !!this.userService.currentUser;
    };
    HeaderComponent.prototype.userName = function () {
        var user = this.userService.currentUser;
        return user.firstname + ' ' + user.lastname;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(279),
        styles: [__webpack_require__(270)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service__["d" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service__["d" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service__["b" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__(202);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header__ = __webpack_require__(203);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__github__ = __webpack_require__(201);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__github__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer__ = __webpack_require__(199);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__footer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_card__ = __webpack_require__(197);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__api_card__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = (function () {
    function LoginGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    LoginGuard.prototype.canActivate = function () {
        if (this.userService.currentUser) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service__["d" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service__["d" /* UserService */]) === "function" && _b || Object])
], LoginGuard);

var _a, _b;
//# sourceMappingURL=login.guard.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(config, fooService, userService) {
        this.config = config;
        this.fooService = fooService;
        this.userService = userService;
        this.fooResponse = {};
        this.whoamIResponse = {};
        this.allUserResponse = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.makeRequest = function (path) {
        var _this = this;
        if (path === this.config.foo_url) {
            this.fooService.getFoo()
                .subscribe(function (res) {
                _this.forgeResonseObj(_this.fooResponse, res, path);
            }, function (err) {
                _this.forgeResonseObj(_this.fooResponse, err, path);
            });
        }
        else if (path === this.config.whoami_url) {
            this.userService.getMyInfo()
                .subscribe(function (res) {
                _this.forgeResonseObj(_this.whoamIResponse, res, path);
            }, function (err) {
                _this.forgeResonseObj(_this.whoamIResponse, err, path);
            });
        }
        else {
            this.userService.getAll()
                .subscribe(function (res) {
                _this.forgeResonseObj(_this.allUserResponse, res, path);
            }, function (err) {
                _this.forgeResonseObj(_this.allUserResponse, err, path);
            });
        }
    };
    HomeComponent.prototype.forgeResonseObj = function (obj, res, path) {
        obj['path'] = path;
        obj['method'] = 'GET';
        if (res.ok === false) {
            // err
            obj['status'] = res.status;
            try {
                obj['body'] = JSON.stringify(JSON.parse(res._body), null, 2);
            }
            catch (err) {
                obj['body'] = res._body;
            }
        }
        else {
            // 200
            obj['status'] = 200;
            obj['body'] = JSON.stringify(res, null, 2);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(280),
        styles: [__webpack_require__(271)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service__["e" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service__["e" /* ConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service__["a" /* FooService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service__["a" /* FooService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__service__["d" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service__["d" /* UserService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(userService, authService, router, formBuilder) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.title = 'Login';
        this.githubLink = 'https://github.com/bfwg/angular-spring-starter';
        /**
         * Boolean used in telling the UI
         * that the form has been submitted
         * and is awaiting a response
         */
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(64)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(32)])]
        });
    };
    LoginComponent.prototype.repository = function () {
        window.location.href = this.githubLink;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        /**
         * Innocent until proven guilty
         */
        this.submitted = true;
        this.errorDiagnostic = null;
        this.authService.login(this.form.value)
            .delay(1000)
            .subscribe(function (data) {
            _this.userService.getMyInfo().subscribe();
            _this.router.navigate(['/']);
        }, function (error) {
            _this.submitted = false;
            _this.errorDiagnostic = 'Incorrect username or password.';
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(281),
        styles: [__webpack_require__(272)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service__["d" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service__["d" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service__["b" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(apiService, config) {
        this.apiService = apiService;
        this.config = config;
    }
    AuthService.prototype.login = function (user) {
        var body = "username=" + user.username + "&password=" + user.password;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.apiService.post(this.config.login_url, body, headers);
    };
    AuthService.prototype.logout = function () {
        return this.apiService.post(this.config.logout_url, {});
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooService = (function () {
    function FooService(apiService, config) {
        this.apiService = apiService;
        this.config = config;
    }
    FooService.prototype.getFoo = function () {
        return this.apiService.get(this.config.foo_url);
    };
    return FooService;
}());
FooService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], FooService);

var _a, _b;
//# sourceMappingURL=foo.service.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(apiService, config) {
        this.apiService = apiService;
        this.config = config;
    }
    UserService.prototype.initUser = function () {
        var _this = this;
        var promise = this.apiService.anonGet(this.config.refresh_token_url).toPromise()
            .then(function (res) {
            if (res.access_token !== null) {
                return _this.getMyInfo().toPromise()
                    .then(function (user) {
                    _this.currentUser = user;
                });
            }
        })
            .catch(function () { return null; });
        return promise;
    };
    UserService.prototype.getMyInfo = function () {
        var _this = this;
        return this.apiService.get(this.config.whoami_url).map(function (user) { return _this.currentUser = user; });
    };
    UserService.prototype.getAll = function () {
        return this.apiService.get(this.config.users_url);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  color: rgba(0, 0, 0, 0.54);\n  font-family: Roboto,\"Helvetica Neue\"; }\n\n.content {\n  margin: 50px 70px; }\n\n@media screen and (min-width: 600px) and (max-width: 1279px) {\n  .content {\n    margin: 20px 30px; } }\n\n@media screen and (max-width: 599px) {\n  .content {\n    margin: 8px 12px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ":host {\n  text-align: center;\n  max-width: 350px; }\n\nmd-card {\n  text-align: left; }\n  md-card .response-success {\n    background-color: #dff0d8;\n    border-color: #d6e9c6;\n    color: #3c763d; }\n  md-card .response-error {\n    background-color: #f2dede;\n    border-color: #ebccd1;\n    color: #a94442; }\n  md-card .response {\n    max-height: 0;\n    transition: max-height 1s;\n    margin-left: -16px;\n    margin-right: -16px;\n    border-radius: 4px;\n    overflow: hidden;\n    margin-bottom: -16px;\n    padding-bottom: 0; }\n  md-card .expand {\n    padding: 15px;\n    border: 1px solid transparent;\n    max-height: 999px;\n    margin-top: 8px; }\n  md-card md-card-actions {\n    margin-bottom: 0;\n    padding-bottom: 0; }\n  md-card pre {\n    display: block;\n    padding: 9.5px;\n    margin: 0 0 10px;\n    font-size: 13px;\n    line-height: 1.42857143;\n    color: #333;\n    word-break: break-all;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    background-color: #f5f5f5;\n    border: 1px solid #ccc;\n    border-radius: 4px; }\n\n@media screen and (max-width: 599px) {\n  :host {\n    max-width: 999px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  font-weight: 300;\n  font-size: 15px;\n  display: block;\n  background-color: #212121;\n  height: 236px;\n  padding: 72px 24px;\n  box-sizing: border-box;\n  text-align: center; }\n  :host a {\n    text-decoration: none;\n    cursor: auto;\n    color: #FFFFFF;\n    margin-top: 32px; }\n  :host h3 {\n    margin: 0px;\n    padding: 0px;\n    font-weight: 300;\n    font-size: 22px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  height: 236px;\n  padding: 72px 24px;\n  box-sizing: border-box;\n  background-color: #eeeeee;\n  text-align: center; }\n\n:host h3 {\n  margin: 0px;\n  padding: 0px;\n  font-weight: 300;\n  font-size: 22px; }\n\n:host a {\n  color: #000;\n  margin-top: 32px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  z-index: 10;\n  color: #fff; }\n\n.app-navbar {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .app-navbar .right {\n    margin-left: auto;\n    float: right; }\n\n.app-navbar span {\n  text-transform: uppercase !important; }\n\n.app-angular-logo {\n  margin: 0 4px 3px 0;\n  height: 26px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "app-api-card {\n  margin: 0 50px 0 0; }\n  app-api-card.last {\n    margin: 0 0 0 0; }\n\napp-github {\n  margin: 50px -70px -50px; }\n\n@media screen and (min-width: 600px) and (max-width: 1279px) {\n  app-api-card {\n    margin: 0 4px 0 0; }\n    app-api-card.last {\n      margin: 0 0 0 0; }\n  app-github {\n    margin: 20px -30px -20px; } }\n\n@media screen and (max-width: 599px) {\n  app-api-card {\n    margin: 0 0 12px 0; }\n  app-github {\n    margin: 8px -12px -8px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ":host {\n  background-size: cover;\n  background-position: 50% 90% !important;\n  background-repeat: no-repeat; }\n\n.content {\n  width: 100%; }\n\nmd-card {\n  max-width: 350px;\n  text-align: center;\n  animation: fadein 1s;\n  -o-animation: fadein 1s;\n  /* Opera */\n  -moz-animation: fadein 1s;\n  /* Firefox */\n  -webkit-animation: fadein 1s;\n  /* Safari and Chrome */ }\n\nmd-input-container {\n  display: block;\n  margin: 30px 0 30px 0; }\n\nmd-spinner {\n  width: 25px;\n  height: 25px;\n  margin: 20px auto 0 auto; }\n\nbutton {\n  display: block;\n  width: 100%; }\n\n.error {\n  color: #a94442;\n  font-weight: bold; }\n\n@media screen and (max-width: 599px) {\n  md-card {\n    max-width: 999px; } }\n\na {\n  text-decoration: none;\n  cursor: auto;\n  color: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <md-card-title><b>{{title}}</b></md-card-title>\n    <md-card-subtitle>{{subTitle}}</md-card-subtitle>\n  </md-card-header>\n  <img md-card-image [src]=\"imgUrl\">\n  <md-card-content>\n    <p>\n      {{content}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n    <button md-raised-button color=\"primary\" (click)=\"onButtonClick()\">{{apiText}}</button>\n  </md-card-actions>\n  <div [class]=\"responsePanelClass()\">\n    <pre>Path: {{responseObj.path}}</pre>\n    <pre>Method: {{responseObj.method}}</pre>\n    <pre>Status: {{responseObj.status}}</pre>\n    <pre>Body: {{responseObj.body}}</pre>\n  </div>\n</md-card>\n"

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

module.exports = "<p style=\"margin: 0px auto; padding: 0px; color: rgba(255, 255, 255, 0.541176); max-width: 356px;\"><!-- react-text: 103 -->\n  Hand crafted with love by <!-- /react-text -->\n  <a href=\"https://github.com/bfwg\" style=\"color: rgba(255, 255, 255, 0.870588);\">Fan Jin</a>\n  <!-- react-text: 105 --> and our awesome <!-- /react-text -->\n  <a href=\"https://github.com/bfwg/angular-spring-jwt-starter/graphs/contributors\" style=\"color: rgba(255, 255, 255, 0.870588);\">contributors</a><!-- react-text: 107 -->.<!-- /react-text -->\n</p>\n<a style=\"margin-top: 22px;\" md-icon-button href=\"https://github.com/bfwg/angular-spring-jwt-starter\">\n  <img src=\"assets/image/github.png\"/>\n</a>\n"

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

module.exports = "<h3>Want to help make this project awesome? Check out our repo.</h3>\n<a href=\"https://github.com/bfwg/angular-spring-jwt-starter\" color=\"accent\" md-raised-button md-ripple>\n  <span>GITHUB</span>\n</a>\n"

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\" class=\"app-navbar\">\n  <button md-button md-ripple routerLink=\"/\">\n    <img alt=\"Angular-Spring-JWT-Starter\" class=\"app-angular-logo\" src=\"assets/image/angular-white-transparent.svg\">\n    <span>Angular-Spring-JWT-Starter</span>\n  </button>\n\n  <div class=\"right\">\n    <button *ngIf=\"!hasSignedIn()\" routerLink=\"/login\" md-button md-ripple>\n      <span>Login</span>\n    </button>\n    <button *ngIf=\"hasSignedIn()\" md-button md-ripple>\n      <span>Aloha, {{userName()}}</span>\n    </button>\n    <button *ngIf=\"hasSignedIn()\" (click)=\"logout()\" md-button md-ripple>\n      <span>Logout</span>\n    </button>\n  </div>\n</md-toolbar>\n\n"

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center none\">\n  <app-api-card\n    fxFlex\n    title='\"Foo\"'\n    subTitle=\"Public\"\n    imgUrl=\"assets/image/foo.png\"\n    content='This is an demo public endpoint which requires no authentication.'\n    apiText=\"/api/foo\"\n    [responseObj]=\"fooResponse\"\n    (apiClick)=\"makeRequest($event)\"\n  >\n  </app-api-card>\n\n  <app-api-card\n     fxFlex\n     title='\"Who am I\"'\n     subTitle=\"Authorized role: USER\"\n     imgUrl=\"assets/image/user.png\"\n     content='The regular endpoint which returns the current user information. You have to sign in as either a User or an Admin to gain the access to this endpoint.'\n     apiText=\"/api/user/whoami\"\n     [responseObj]=\"whoamIResponse\"\n     (apiClick)=\"makeRequest($event)\"\n  >\n  </app-api-card>\n\n  <app-api-card\n     class=\"last\"\n     fxFlex\n     title='\"All users\"'\n     subTitle=\"Authorized role: ADMIN\"\n     imgUrl=\"assets/image/admin.png\"\n     content='This endpoint will give you a list of all the users. You have to sign in as an Admin to gain the access to this endpoint.'\n     apiText=\"/api/user/all\"\n     [responseObj]=\"allUserResponse\"\n     (apiClick)=\"makeRequest($event)\"\n  >\n  </app-api-card>\n</div>\n<app-github></app-github>\n"

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\">\n\n    <md-card elevation=\"5\" fxFlex>\n\n      <md-card-subtitle>\n        <h2>Angular2 Spring Boot JWT Starter</h2>\n      </md-card-subtitle>\n\n      <md-card-title>\n        <h2>{{title}}</h2>\n      </md-card-title>\n\n      <md-card-content>\n\n        <form *ngIf=\"!submitted\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n          <md-input-container>\n            <input mdInput formControlName=\"username\" required placeholder=\"Username\">\n          </md-input-container>\n          <md-input-container>\n            <input mdInput formControlName=\"password\" required type=\"password\" placeholder=\"Password\">\n          </md-input-container>\n          <button type=\"submit\" [disabled]=\"!loginForm.form.valid\" md-raised-button color=\"primary\">Login</button>\n        </form>\n\n        <md-spinner *ngIf=\"submitted\" mode=\"indeterminate\"></md-spinner>\n\n        <p class=\"error\" *ngIf=\"errorDiagnostic\">{{errorDiagnostic}}</p>\n\n        <br>\n        <hr>\n\n        <p><i>Created by <a href=\"https://github.com/bfwg\">Fan Jin</a></i></p>\n        <p><i>Click below to go to repository</i></p>\n        <button (click)=\"repository()\" md-raised-button color=\"accent\">GitHub Repository</button>\n\n      </md-card-content>\n\n    </md-card>\n\n</div>\n"

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__(55);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(210);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(56);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__config_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(208);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foo_service__ = __webpack_require__(209);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__foo_service__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(171);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({
            'Accept': 'application/json'
        });
    }
    ApiService.prototype.anonGet = function (path) {
        return this.http.get(path, {
            headers: this.headers,
            withCredentials: true
        })
            .map(this.extractData);
    };
    ApiService.prototype.get = function (path) {
        return this.http.get(path, {
            headers: this.headers,
            withCredentials: true
        })
            .map(this.extractData)
            .catch(this.checkAuth.bind(this));
    };
    ApiService.prototype.post = function (path, body, customHeaders, put) {
        return this.http.request(path, {
            method: put ? __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestMethod */].Put : __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestMethod */].Post,
            body: body,
            headers: customHeaders || this.headers,
            withCredentials: true
        })
            .map(this.extractData)
            .catch(this.checkAuth.bind(this));
    };
    ApiService.prototype.put = function (path, body) {
        return this.post(path, body, true);
    };
    ApiService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    // Display error if logged in, otherwise redirect to IDP
    ApiService.prototype.checkAuth = function (error) {
        if (error && error.status === 401) {
        }
        else {
        }
        throw error;
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfigService = (function () {
    function ConfigService() {
        this._api_url = '/api';
        this._auth_url = '/auth';
        this._user_url = this._api_url + '/user';
        this._refresh_token_url = this._auth_url + '/refresh';
        this._login_url = this._auth_url + '/login';
        this._logout_url = this._auth_url + '/logout';
        this._whoami_url = this._user_url + '/whoami';
        this._users_url = this._user_url + '/all';
        this._foo_url = this._api_url + '/foo';
    }
    Object.defineProperty(ConfigService.prototype, "api_url", {
        get: function () {
            return this._api_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "refresh_token_url", {
        get: function () {
            return this._refresh_token_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "whoami_url", {
        get: function () {
            return this._whoami_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "users_url", {
        get: function () {
            return this._users_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "login_url", {
        get: function () {
            return this._login_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "logout_url", {
        get: function () {
            return this._logout_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "foo_url", {
        get: function () {
            return this._foo_url;
        },
        enumerable: true,
        configurable: true
    });
    return ConfigService;
}());
ConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Injectable */])()
], ConfigService);

//# sourceMappingURL=config.service.js.map

/***/ })

},[531]);
//# sourceMappingURL=main.bundle.js.map