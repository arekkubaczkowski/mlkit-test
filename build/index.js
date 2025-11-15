"use strict";
// Import the native module. On web, it will be resolved to RNMLKitFaceDetection.web.ts
// and on native platforms to RNMLKitFaceDetection.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFaceDetection = void 0;
__exportStar(require("./context/faceDetectionContext"), exports);
__exportStar(require("./module/RNMLKitFaceDetector"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./hooks/useFacesInPhoto"), exports);
var useFaceDetection_1 = require("./hooks/useFaceDetection");
Object.defineProperty(exports, "useFaceDetection", { enumerable: true, get: function () { return useFaceDetection_1.useFaceDetection; } });
