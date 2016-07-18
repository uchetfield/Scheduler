"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_slim_loading_bar_1 = require('ng2-slim-loading-bar/ng2-slim-loading-bar');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var data_service_1 = require('../shared/services/data.service');
var items_service_1 = require('../shared/utils/items.service');
var notification_service_1 = require('../shared/utils/notification.service');
var config_service_1 = require('../shared/utils/config.service');
var date_format_pipe_1 = require('../shared/pipes/date-format.pipe');
var highlight_directive_1 = require('../shared/directives/highlight.directive');
var UserCardComponent = (function () {
    function UserCardComponent(itemsService, notificationService, slimLoader, dataService, configService) {
        this.itemsService = itemsService;
        this.notificationService = notificationService;
        this.slimLoader = slimLoader;
        this.dataService = dataService;
        this.configService = configService;
        this.removeUser = new core_1.EventEmitter();
        this.userCreated = new core_1.EventEmitter();
        this.onEdit = false;
        this.items = ['item1', 'item2', 'item3'];
        this.userSchedulesLoaded = false;
        this.index = 0;
        this.backdropOptions = [true, false, 'static'];
        this.animation = true;
        this.keyboard = true;
        this.backdrop = true;
    }
    UserCardComponent.prototype.ngOnInit = function () {
        this.apiHost = this.configService.getApiHost();
        this.edittedUser = this.itemsService.getSerialized(this.user);
        if (this.user.id < 0)
            this.editUser();
    };
    UserCardComponent.prototype.editUser = function () {
        this.onEdit = !this.onEdit;
        this.edittedUser = this.itemsService.getSerialized(this.user);
        // <IUser>JSON.parse(JSON.stringify(this.user)); // todo Utils..
    };
    UserCardComponent.prototype.createUser = function () {
        var _this = this;
        this.slimLoader.start();
        this.dataService.createUser(this.edittedUser)
            .subscribe(function (userCreated) {
            _this.user = _this.itemsService.getSerialized(userCreated);
            _this.edittedUser = _this.itemsService.getSerialized(_this.user);
            _this.onEdit = false;
            _this.userCreated.emit({ value: userCreated });
            _this.slimLoader.complete();
        }, function (error) {
            _this.notificationService.printErrorMessage('Failed to created user');
            _this.notificationService.printErrorMessage(error);
            _this.slimLoader.complete();
        });
    };
    UserCardComponent.prototype.updateUser = function () {
        var _this = this;
        this.slimLoader.start();
        this.dataService.updateUser(this.edittedUser)
            .subscribe(function () {
            _this.user = _this.edittedUser;
            _this.onEdit = !_this.onEdit;
            _this.notificationService.printSuccessMessage(_this.user.name + ' has been updated');
            _this.slimLoader.complete();
        }, function (error) {
            _this.notificationService.printErrorMessage('Failed to edit user');
            _this.notificationService.printErrorMessage(error);
            _this.slimLoader.complete();
        });
    };
    UserCardComponent.prototype.openRemoveModal = function () {
        var _this = this;
        this.notificationService.openConfirmationDialog('Are you sure you want to remove '
            + this.user.name + '?', function () {
            _this.slimLoader.start();
            _this.dataService.deleteUser(_this.user.id)
                .subscribe(function (res) {
                _this.removeUser.emit({
                    value: _this.user
                });
                _this.slimLoader.complete();
                _this.slimLoader.complete();
            }, function (error) {
                _this.notificationService.printErrorMessage(error);
                _this.slimLoader.complete();
            });
        });
    };
    UserCardComponent.prototype.viewSchedules = function (user) {
        console.log(user);
        this.modal.open('lg');
    };
    UserCardComponent.prototype.closed = function () {
        this.output = '(closed) ' + this.selected;
    };
    UserCardComponent.prototype.dismissed = function () {
        this.output = '(dismissed)';
    };
    UserCardComponent.prototype.opened = function () {
        var _this = this;
        this.slimLoader.start();
        this.dataService.getUserSchedules(this.edittedUser.id)
            .subscribe(function (schedules) {
            _this.userSchedules = schedules;
            console.log(_this.userSchedules);
            _this.userSchedulesLoaded = true;
            _this.slimLoader.complete();
        }, function (error) {
            _this.slimLoader.complete();
            _this.notificationService.printErrorMessage('Failed to load users. ' + error);
        });
        this.output = '(opened)';
    };
    UserCardComponent.prototype.isUserValid = function () {
        return !(this.edittedUser.name.trim() === "")
            && !(this.edittedUser.profession.trim() === "");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UserCardComponent.prototype, "user", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserCardComponent.prototype, "removeUser", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserCardComponent.prototype, "userCreated", void 0);
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], UserCardComponent.prototype, "modal", void 0);
    UserCardComponent = __decorate([
        core_1.Component({
            selector: 'user-card',
            templateUrl: 'user-card.component.html',
            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES, highlight_directive_1.HighlightDirective],
            pipes: [date_format_pipe_1.DateFormatPipe],
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({
                            opacity: 0,
                            transform: 'translateX(-100%)'
                        }),
                        core_1.animate('0.5s ease-in')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('0.2s 10 ease-out', core_1.style({
                            opacity: 0,
                            transform: 'translateX(100%)'
                        }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [items_service_1.ItemsService, notification_service_1.NotificationService, ng2_slim_loading_bar_1.SlimLoadingBarService, data_service_1.DataService, config_service_1.ConfigService])
    ], UserCardComponent);
    return UserCardComponent;
}());
exports.UserCardComponent = UserCardComponent;
