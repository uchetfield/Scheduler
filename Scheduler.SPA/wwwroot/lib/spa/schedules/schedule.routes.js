"use strict";
var schedule_list_component_1 = require('./schedule-list.component');
var schedule_edit_component_1 = require('./schedule-edit.component');
exports.ScheduleRoutes = [
    { path: 'schedules', component: schedule_list_component_1.ScheduleListComponent },
    { path: 'schedules/:id/edit', component: schedule_edit_component_1.ScheduleEditComponent }
];
