"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFaceDetection = useFaceDetection;
var react_1 = require("react");
var faceDetectionContext_1 = require("../context/faceDetectionContext");
/**
 * Hook used to access the face detector instance directly. Useful for advanced use cases.
 * Most of the time, you'll want to use the {@link useFacesInPhoto `useFacesInPhoto()`} hook instead.
 */
function useFaceDetection() {
    var context = (0, react_1.useContext)(faceDetectionContext_1.FaceDetectionContext);
    if (!context) {
        throw new Error("useFaceDetection must be used within a FaceDetectionProvider");
    }
    return context.faceDetector;
}
