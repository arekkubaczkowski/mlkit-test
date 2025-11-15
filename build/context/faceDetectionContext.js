"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceDetectionProvider = exports.FaceDetectionContext = void 0;
var react_1 = require("react");
var RNMLKitFaceDetector_1 = require("../module/RNMLKitFaceDetector");
exports.FaceDetectionContext = (0, react_1.createContext)({
    faceDetector: new RNMLKitFaceDetector_1.RNMLKitFaceDetector(),
});
var FaceDetectionProvider = function (_a) {
    var options = _a.options, deferInitialization = _a.deferInitialization, children = _a.children;
    var contextValue = {
        faceDetector: new RNMLKitFaceDetector_1.RNMLKitFaceDetector(options, deferInitialization),
    };
    return (<exports.FaceDetectionContext.Provider value={contextValue}>
      {children}
    </exports.FaceDetectionContext.Provider>);
};
exports.FaceDetectionProvider = FaceDetectionProvider;
