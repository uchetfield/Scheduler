// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar
'use strict';
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var component_1 = require('./src/component');
var service_1 = require('./src/service');
__export(require('./src/component'));
__export(require('./src/service'));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    providers: [service_1.SlimLoadingBarService],
    directives: [component_1.SlimLoadingBar]
};
