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
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 5px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 5px;\n"])));
var Bar = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 30px;\n  flex: ", ";\n  background-color: ", ";\n  min-width: 4px;\n"], ["\n  height: 30px;\n  flex: ", ";\n  background-color: ", ";\n  min-width: 4px;\n"])), function (props) { return props.flex; }, function (props) { return props.color; });
var StackedBarChart = /** @class */ (function (_super) {
    __extends(StackedBarChart, _super);
    function StackedBarChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedBarChart.prototype.render = function () {
        var _a = this.props, className = _a.className, data = _a.data;
        var filteredData = data.filter(function (x) { return x.value; });
        return (React.createElement(Wrapper, { className: className }, filteredData.map(function (d) { return (React.createElement(Bar, { key: d.label, flex: d.value, color: d.color })); })));
    };
    return StackedBarChart;
}(React.Component));
exports.StackedBarChart = StackedBarChart;
var templateObject_1, templateObject_2;
//# sourceMappingURL=stacked-bar-chart.js.map