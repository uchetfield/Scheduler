// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var lang_1 = require('@angular/common/src/facade/lang');
var common_1 = require('@angular/common');
var service_1 = require('./service');
/**
 * A Slim Loading Bar component shows message loading progress bar on the top of web page or parent component.
 */
var SlimLoadingBar = (function () {
    function SlimLoadingBar(service) {
        this.service = service;
        this._progress = '0%';
        this.color = 'firebrick';
        this.height = '2px';
        this.show = true;
    }
    Object.defineProperty(SlimLoadingBar.prototype, "progress", {
        get: function () {
            return this._progress;
        },
        set: function (value) {
            if (lang_1.isPresent(value)) {
                this._progress = value + '%';
            }
        },
        enumerable: true,
        configurable: true
    });
    SlimLoadingBar.prototype.ngOnInit = function () {
        var _this = this;
        this.service.observable.subscribe(function (event) {
            if (event.type === service_1.SlimLoadingBarEventType.PROGRESS) {
                _this.progress = event.value;
            }
            else if (event.type === service_1.SlimLoadingBarEventType.COLOR) {
                _this.color = event.value;
            }
            else if (event.type === service_1.SlimLoadingBarEventType.HEIGHT) {
                _this.height = event.value;
            }
            else if (event.type === service_1.SlimLoadingBarEventType.VISIBLE) {
                _this.show = event.value;
            }
        });
    };
    __decorate([
        core_1.Input()
    ], SlimLoadingBar.prototype, "progress", null);
    __decorate([
        core_1.Input()
    ], SlimLoadingBar.prototype, "color", void 0);
    __decorate([
        core_1.Input()
    ], SlimLoadingBar.prototype, "height", void 0);
    __decorate([
        core_1.Input()
    ], SlimLoadingBar.prototype, "show", void 0);
    SlimLoadingBar = __decorate([
        core_1.Component({
            selector: 'ng2-slim-loading-bar',
            directives: [common_1.CORE_DIRECTIVES],
            template: "\n<div class=\"slim-loading-bar\">\n    <div class=\"slim-loading-bar-progress\" [style.width]=\"progress\" [style.backgroundColor]=\"color\" [style.color]=\"color\"\n        [style.height]=\"height\" [style.opacity]=\"show ? '1' : '0'\"></div>\n</div>"
        })
    ], SlimLoadingBar);
    return SlimLoadingBar;
}());
exports.SlimLoadingBar = SlimLoadingBar;
