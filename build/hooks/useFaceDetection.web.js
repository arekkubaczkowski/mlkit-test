"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expo_modules_core_1 = require("expo-modules-core");
var constants_1 = require("../constants");
var useFaceDetection = function () { return ({
    detectFaces: function () {
        throw new expo_modules_core_1.UnavailabilityError(constants_1.RNMLKIT_MODULE_NAME, constants_1.WEB_ERROR);
    },
    error: null,
    initialize: function () {
        throw new Error(constants_1.WEB_ERROR);
    },
    status: "ready",
}); };
exports.default = useFaceDetection;
