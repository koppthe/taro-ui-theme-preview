(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"107":function(e,t,a){},"18":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var l=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=_interopRequireDefault(a(2)),r=_interopRequireDefault(a(1)),i=a(20),c=a(33),s=_interopRequireDefault(a(26));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}a(107);var u=function(e){function BasicPage(){var e,t,a;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BasicPage);for(var l=arguments.length,n=Array(l),r=0;r<l;r++)n[r]=arguments[r];return t=a=_possibleConstructorReturn(this,(e=BasicPage.__proto__||Object.getPrototypeOf(BasicPage)).call.apply(e,[this].concat(n))),a.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(a,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(BasicPage,n.default.Component),l(BasicPage,[{"key":"render","value":function render(){return r.default.createElement(i.View,{"className":"page"},r.default.createElement(s.default,{"title":"基础","desc":"1 个组件"}),r.default.createElement(i.View,{"className":"doc-body"},r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"Button 按钮"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.View,{"className":"example-item__desc"},"主操作"),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"primary"},"主操作按钮")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"primary","loading":!0},"Loading")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"primary","disabled":!0},"不可操作")))),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.View,{"className":"example-item__desc"},"次要操作"),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"secondary"},"次操作按钮")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"secondary","loading":!0},"Loading")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"secondary","disabled":!0},"不可操作")))),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.View,{"className":"example-item__desc"},"次次要操作"),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(c.AtButton,null,"次次要操作按钮")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"loading":!0},"Loading")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"disabled":!0},"不可操作")))),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.View,{"className":"example-item__desc"},"小按钮"),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"primary","size":"small"},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"secondary","size":"small"},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"size":"small"},"按钮"))),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"primary","size":"small","loading":!0})),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"secondary","size":"small","loading":!0})),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"size":"small","loading":!0}))),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"primary","size":"small","disabled":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"secondary","size":"small","disabled":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"size":"small","disabled":!0},"按钮"))))),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.View,{"className":"example-item__desc"},"圆角按钮"),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"primary","size":"small","circle":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"secondary","size":"small","circle":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"size":"small","circle":!0},"按钮"))),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"primary","size":"small","loading":!0,"circle":!0})),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"secondary","size":"small","loading":!0,"circle":!0})),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"size":"small","loading":!0,"circle":!0}))),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"primary","size":"small","disabled":!0,"circle":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"secondary","size":"small","disabled":!0,"circle":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"size":"small","disabled":!0,"circle":!0},"按钮"))))),r.default.createElement(i.View,{"className":"panel__content no-padding"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.View,{"className":"example-item__desc"},"通栏按钮"),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"primary","full":!0},"主操作按钮")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"secondary","full":!0},"次操作按钮")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"full":!0},"次次要操作按钮")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"disabled":!0,"full":!0},"不可操作")))))))}}]),BasicPage}();t.default=u},"26":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var l=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=a(2),r=(_interopRequireDefault(n),_interopRequireDefault(a(1))),i=_interopRequireDefault(a(22)),c=a(20);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var s=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,n.Component),l(DocsHeader,[{"key":"render","value":function render(){var e=this.props,t=e.title,a=e.desc;return r.default.createElement(c.View,{"className":"doc-header"},r.default.createElement(c.View,{"className":"doc-header__title"},t),r.default.createElement(c.View,{"className":"doc-header__desc"},a))}}]),DocsHeader}();t.default=s,s.defaultProps={"title":"标题","desc":""},s.propTypes={"title":i.default.string,"desc":i.default.string}},"31":function(e,t,a){e.exports=a(0)(1)}}]);