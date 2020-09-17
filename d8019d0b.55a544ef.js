(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(72)),s={title:"Selectors",sidebar_label:"Selectors"},c={unversionedId:"selectors",id:"selectors",isDocsHomePage:!1,title:"Selectors",description:"Selectors are what make using Visly State performant and efficient. They ensure your component only subscribes to data that is required to render the component. Therefore, it will only update if that data changes. Apart from selecting a subset of the application state, a selector may also perform data transformations. Visly State automatically makes this efficient in regards to re-renders.",source:"@site/docs/selectors.md",slug:"/selectors",permalink:"/docs/selectors",editUrl:"https://github.com/vislyhq/visly-state/edit/main/website/docs/selectors.md",version:"current",sidebar_label:"Selectors",sidebar:"docs",previous:{title:"State",permalink:"/docs/state"},next:{title:"Mutations",permalink:"/docs/mutations"}},i=[{value:"Passing arguments to selectors",id:"passing-arguments-to-selectors",children:[]}],l={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Selectors are what make using Visly State performant and efficient. They ensure your component only subscribes to data that is required to render the component. Therefore, it will only update if that data changes. Apart from selecting a subset of the application state, a selector may also perform data transformations. Visly State automatically makes this efficient in regards to re-renders."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { state, useValue } from '@visly/state\n\nconst appState = state({ arrayOne: [], arrayTwo: [] })\n\nconst selectors = {\n    arrayOne: (state) => {\n        return state.arrayOne\n    }\n}\n\nfunction Component() {\n    const arrayOne = useValue(appState, selectors.arrayOne)\n    return <Values values={arrayOne} />\n}\n")),Object(o.b)("p",null,"While we reccomend defining selectors as reusable and testable functions like above, you may also use arrow functions for one-off selectors."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { state, useValue } from '@visly/state\n\nconst appState = state({ arrayOne: [], arrayTwo: [] })\n\nfunction Component() {\n    const arrayOne = useValue(appState, s => s.arrayOne)\n    return <Values values={arrayOne} />\n}\n")),Object(o.b)("p",null,"Also, as mentioned above, selectors don't have to return a strict subset of the data in the underlying state container. They may also perform computations on the state and return a derived value of some kind."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { state, useValue } from '@visly/state\n\nconst appState = state({ arrayOne: [], arrayTwo: [] })\n\nconst selectors = {\n    arrayOneCount: (state) => {\n        return state.arrayOne.length\n    }\n}\n\nfunction Component() {\n    const arrayOneCount = useValue(appState, selectors.arrayOneCount)\n    return <span>{arrayOneCount}</span>\n}\n")),Object(o.b)("p",null,"Like the rest of Visly State, selectors can also be used outside of React. For example, in tests or in a Node backend. In this case, selectors can be passed to the ",Object(o.b)("inlineCode",{parentName:"p"},".get()")," method on the state container."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { state } from '@visly/state\n\nconst appState = state({ arrayOne: [], arrayTwo: [] })\n\nconst selectors = {\n    arrayOneCount: (state) => {\n        return state.arrayOne.length\n    }\n}\n\nconst arrayOneCount = appState.get(selectors.arrayOneCount)\nconsole.log(arrayOneCount)\n")),Object(o.b)("h2",{id:"passing-arguments-to-selectors"},"Passing arguments to selectors"),Object(o.b)("p",null,"Selectors will sometimes need additional information to select the correct data, for example, if you wanted to make a selector that returned an item with some specific ID. Visly State doesn't have any special support for this, however we can use higher order functions to achieve this result."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { state, useValue } from '@visly/state\n\nconst appState = state({ items: [] })\n\nconst selectors = {\n    itemWithId: (id) => (state) => {\n        return state.items.find(i => i.id === id)\n    }\n}\n\nfunction Component(props) {\n    const item = useValue(appState, selectors.itemWithId(props.id))\n    return <span>{item.title}</span>\n}\n")),Object(o.b)("p",null,"As you can see above, we've changed our selector to be a function that takes an ID and then returns a state selector. This way, we can pass any arguments we want to the selector."))}u.isMDXComponent=!0},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);