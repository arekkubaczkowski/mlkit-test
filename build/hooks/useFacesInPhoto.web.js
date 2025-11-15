"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFacesInPhoto = useFacesInPhoto;
var expo_modules_core_1 = require("expo-modules-core");
var constants_1 = require("../constants");
function useFacesInPhoto(imageUri) {
    return {
        clearFaces: function () {
            throw new expo_modules_core_1.UnavailabilityError(constants_1.RNMLKIT_MODULE_NAME, constants_1.WEB_ERROR);
        },
        error: constants_1.WEB_ERROR,
        status: "ready",
        faces: [],
    };
}
