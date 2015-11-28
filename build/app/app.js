var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var data_service_1 = require('./services/data.service');
var auth_service_1 = require('./services/auth.service');
var timer_service_1 = require('./services/timer.service');
var about_1 = require('./about');
var home_1 = require('./home');
var stats_1 = require('./stats');
var focus_user_image_component_1 = require('./components/focus-user-image.component');
var App = (function () {
    function App(_authService) {
        var _this = this;
        this._authService = _authService;
        this._authService.authUser$.subscribe(function (user) { return _this.authUser = user; });
        this._authService.loadAuthUser();
    }
    App.prototype.logout = function () {
        this._authService.logout();
    };
    App = __decorate([
        angular2_1.Component({
            selector: 'focus-app',
            templateUrl: 'build/app/app.html?v=1448668940252?v=1448668908702?v=1448668896929?v=1448668877564?v=1448668868594?v=1448668860981?v=1448668719918?v=1448668709708?v=1448668679722?v=1448668649582?v=1448668620940?v=1448668585543?v=1448668572044?v=1448668561293?v=1448668495567',
            directives: [router_1.RouterOutlet, router_1.RouterLink, focus_user_image_component_1.FocusUserImageCmp]
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.Home, as: 'Home' },
            { path: '/about', component: about_1.About, as: 'About' },
            { path: '/stats', component: stats_1.Stats, as: 'Stats' }
        ]), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [
    router_1.ROUTER_BINDINGS,
    angular2_1.FORM_BINDINGS,
    http_1.HTTP_BINDINGS,
    angular2_1.bind(router_1.ROUTER_PRIMARY_COMPONENT).toValue(App),
    angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy),
    [
        data_service_1.DataService,
        auth_service_1.AuthService,
        timer_service_1.TimerService
    ]
]);
