"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var classnames_1 = require("classnames");
var components_1 = require("./components");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var XRayInfo = /** @class */ (function (_super) {
    __extends(XRayInfo, _super);
    function XRayInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XRayInfo.prototype.render = function () {
        var _a = this.props, className = _a.className, services = _a.services;
        return (React.createElement(Wrapper, { className: classnames_1.default('react-aws-xray-visualizer-Wrapper', className) },
            React.createElement(components_1.DirectionalGraph, { services: services })));
    };
    return XRayInfo;
}(React.Component));
exports.XRayInfo = XRayInfo;
var templateObject_1;
//# sourceMappingURL=index.js.map