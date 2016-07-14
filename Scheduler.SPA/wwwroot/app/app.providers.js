"use strict";
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var data_service_1 = require('./shared/services/data.service');
var config_service_1 = require('./shared/utils/config.service');
var items_service_1 = require('./shared/utils/items.service');
var notification_service_1 = require('./shared/utils/notification.service');
var ng2_slim_loading_bar_1 = require('ng2-slim-loading-bar/ng2-slim-loading-bar');
exports.APP_PROVIDERS = [
    config_service_1.ConfigService,
    data_service_1.DataService,
    items_service_1.ItemsService,
    notification_service_1.NotificationService,
    common_1.FORM_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    ng2_slim_loading_bar_1.SlimLoadingBarService
];
//# sourceMappingURL=app.providers.js.map