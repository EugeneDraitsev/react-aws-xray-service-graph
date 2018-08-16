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
var _1 = require("./");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 5px;\n"], ["\n  padding: 5px;\n"])));
var SegmentName = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 32px;\n  word-break: break-all;\n"], ["\n  font-size: 32px;\n  word-break: break-all;\n"])));
var SegmentType = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 22px;\n  font-weight: 300;\n  margin: 10px 0;\n"], ["\n  font-size: 22px;\n  font-weight: 300;\n  margin: 10px 0;\n"])));
var Info = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 16px;\n  margin-bottom: 5px;\n"], ["\n  font-size: 16px;\n  margin-bottom: 5px;\n"])));
var SegmentInfoContent = /** @class */ (function (_super) {
    __extends(SegmentInfoContent, _super);
    function SegmentInfoContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SegmentInfoContent.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.segment, Name = _b.Name, SummaryStatistics = _b.SummaryStatistics, Type = _b.Type;
        if (!SummaryStatistics) {
            return (React.createElement(Wrapper, { className: className },
                React.createElement(SegmentName, null, Name)));
        }
        var total = Number(SummaryStatistics.TotalCount);
        var averageTime = (Number(SummaryStatistics.TotalResponseTime) / total) * 1000;
        var ok = Number(SummaryStatistics.OkCount);
        var faults = Number(SummaryStatistics.FaultStatistics.TotalCount);
        var errors = Number(SummaryStatistics.ErrorStatistics.TotalCount);
        var statsData = [
            { label: 'Ok', value: ok, color: '#6AD245' },
            { label: 'Fault', value: faults, color: '#D24545' },
            { label: 'Errors', value: errors, color: '#FF9A00' },
        ];
        return (React.createElement(Wrapper, { className: className },
            React.createElement(SegmentName, null, Name),
            React.createElement(SegmentType, null, Type),
            React.createElement(Info, null,
                "Average time: ",
                React.createElement("b", null, Math.round(averageTime * 100) / 100),
                " ms"),
            React.createElement(_1.StackedBarChart, { data: statsData }),
            React.createElement(Info, null,
                "Total invocations: ",
                React.createElement("b", null, SummaryStatistics.TotalCount)),
            statsData.filter(function (x) { return x.value > 0; }).map(function (x) { return (React.createElement(Info, { key: x.label },
                x.label,
                ": ",
                React.createElement("b", null,
                    x.value,
                    " (",
                    Math.round(x.value / total * 10000) / 100,
                    ")%"))); })));
    };
    return SegmentInfoContent;
}(React.Component));
exports.SegmentInfoContent = SegmentInfoContent;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=segment-info-content.component.js.map