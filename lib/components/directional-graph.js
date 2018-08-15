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
var d3 = require("d3");
var dagre = require("dagre-d3");
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var styled_components_1 = require("styled-components");
var _1 = require("./");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  svg {\n    width: 100%;\n    min-height: 100vh;\n  }\n  .node rect,\n  .node circle,\n  .node ellipse {\n    stroke: #333;\n    fill: #fff;\n    stroke-width: 1px;\n  }\n  .edgePath path {\n    stroke: #333;\n    fill: transparent;\n    stroke-width: 1.5px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  svg {\n    width: 100%;\n    min-height: 100vh;\n  }\n  .node rect,\n  .node circle,\n  .node ellipse {\n    stroke: #333;\n    fill: #fff;\n    stroke-width: 1px;\n  }\n  .edgePath path {\n    stroke: #333;\n    fill: transparent;\n    stroke-width: 1.5px;\n  }\n"])));
var DirectionalGraph = /** @class */ (function (_super) {
    __extends(DirectionalGraph, _super);
    function DirectionalGraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectionalGraph.prototype.componentDidMount = function () {
        var services = this.props.services;
        var svg = d3.select(this.node);
        var inner = svg.append('g');
        var zoom = d3.zoom().on('zoom', function () { return inner.attr('transform', d3.event.transform); });
        svg.call(zoom);
        var g = new dagre.graphlib.Graph().setGraph({});
        services.forEach(function (segment) { return g.setNode(String(segment.ReferenceId), {
            label: ReactDOMServer.renderToStaticMarkup(React.createElement(_1.SegmentInfoContent, { segment: segment })),
            labelType: 'html',
        }); });
        var edges = services.reduce(function (acc, x) { return acc.concat((x.Edges || []).map(function (r) { return ({ source: x.ReferenceId, target: r.ReferenceId }); })); }, []);
        edges.forEach(function (x) { return g.setEdge(x.source, x.target, {
            arrowhead: 'vee',
            curve: d3.curveBasis,
        }); });
        var render = new dagre.render();
        // Run the renderer. This is what draws the final graph.
        render(inner, g);
        var initialScale = 0.75;
        var zoomIdentity = d3.zoomIdentity;
        var marginWidth = (svg.node().getBoundingClientRect().width - g.graph().width * initialScale) / 2;
        svg.call(zoom.transform, zoomIdentity.translate(marginWidth, 20).scale(initialScale));
        svg.attr('height', g.graph().height * initialScale + 40);
    };
    DirectionalGraph.prototype.render = function () {
        var _this = this;
        return (React.createElement(Wrapper, null,
            React.createElement("svg", { ref: function (node) { return _this.node = node; } })));
    };
    return DirectionalGraph;
}(React.Component));
exports.DirectionalGraph = DirectionalGraph;
var templateObject_1;
//# sourceMappingURL=directional-graph.js.map