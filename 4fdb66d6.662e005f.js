(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{62:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return s})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return l}));var a=n(2),o=n(6),r=(n(0),n(72)),i={title:"Mutations",sidebar_label:"Mutations"},s={unversionedId:"mutations",id:"mutations",isDocsHomePage:!1,title:"Mutations",description:"Mutations are similar to actions in Redux; They are a way of changing the values in the state and triggering an update to your React components that subscribe to that data.",source:"@site/docs/mutations.md",slug:"/mutations",permalink:"/docs/mutations",editUrl:"https://github.com/vislyhq/visly-state/edit/main/website/docs/mutations.md",version:"current",sidebar_label:"Mutations",sidebar:"docs",previous:{title:"Selectors",permalink:"/docs/selectors"},next:{title:"Transactions & history",permalink:"/docs/transactions"}},u=[{value:"Passing arguments to mutations",id:"passing-arguments-to-mutations",children:[]}],c={rightToc:u};function l(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Mutations are similar to actions in Redux; They are a way of changing the values in the state and triggering an update to your React components that subscribe to that data."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { state, useMutation } from '@visly/state\n\nconst appState = state({ count: 0 })\n\nconst mutations = {\n    increment: (state) => {\n        state.count += 1\n    }\n}\n\nfunction Component() {\n    const increment = useMutation(appState, mutations.increment)\n    return <button onClick={increment}>Increment</button>\n}\n")),Object(r.b)("p",null,"One thing you will notice as different from Redux and similar state management libraries is that our mutations don't return a new object, but rather they mutate the state object passed into the mutation function. Visly State is still an immutable library though - the state object passed to the mutation by Visly State is a mutable copy of the internal state. Once mutated, Visly State (with the help of immer) will figure out what changes were made and safely apply that to the underlying state in a immutable fashion."),Object(r.b)("p",null,"While we recommend defining mutations as reusable and testable functions like above, you may also use arrow functions for one-off mutations."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { state, useValue } from '@visly/state\n\nconst appState = state({ arrayOne: [], arrayTwo: [] })\n\nfunction Component() {\n    const increment = useMutation(appState, s => s.count++)\n    return <button onClick={increment}>Increment</button>\n}\n")),Object(r.b)("p",null,"Of course these mutations can also be used from Node, or any other non-React environment."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { state } from '@visly/state\n\nconst appState = state({ count: 0 })\n\nconst mutations = {\n    increment: (state) => {\n        state.count += 1\n    }\n}\n\nappState.set(mutations.increment)\n")),Object(r.b)("h2",{id:"passing-arguments-to-mutations"},"Passing arguments to mutations"),Object(r.b)("p",null,"Mutations will sometimes need additional information to perform their mutation. For example, if you are updating the string of a stored variable, you would need to pass the new string as an argument."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { state, useMutation } from '@visly/state\n\nconst appState = state({ count: 0 })\n\nconst mutations = {\n    updateCount: (state, count) => {\n        state.count += 1\n    }\n}\n\nfunction Component() {\n    const updateCount = useMutation(appState, mutations.updateCount)\n    return <button onClick={() => updateCount(10)}>Make it 10</button>\n}\n")),Object(r.b)("p",null,"As you can see above, we've changed our mutation to take a second parameter, which is the argument we want to pass to the mutation. Mutations can take however any arguments you wish, as long as they are all listed after the first state parameter."))}l.isMDXComponent=!0},72:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=o.a.createContext({}),l=function(t){var e=o.a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},m=function(t){var e=l(t.components);return o.a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),m=l(n),b=a,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||r;return n?o.a.createElement(d,s(s({ref:e},c),{},{components:n})):o.a.createElement(d,s({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);