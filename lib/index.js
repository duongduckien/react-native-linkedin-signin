"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var LinkedInSignIn = (function (_super) {
    __extends(LinkedInSignIn, _super);
    function LinkedInSignIn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinkedInSignIn.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, null, "Linked In Login")));
    };
    return LinkedInSignIn;
}(react_1.Component));
exports.default = LinkedInSignIn;
//# sourceMappingURL=index.js.map