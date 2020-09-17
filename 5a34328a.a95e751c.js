(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(72)),i={title:"State",sidebar_label:"State"},s={unversionedId:"state",id:"state",isDocsHomePage:!1,title:"State",description:"Not all state is created equal in Visly State. There are four main kinds of state containers: state, syncedState, derivedState, and combinedState. They each have slightly different properties and are often used in combination for larger apps.",source:"@site/docs/state.md",slug:"/state",permalink:"/docs/state",editUrl:"https://github.com/vislyhq/visly-state/edit/main/website/docs/state.md",version:"current",sidebar_label:"State",sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/"},next:{title:"Selectors",permalink:"/docs/selectors"}},c=[{value:"State",id:"state",children:[]},{value:"Synced State",id:"synced-state",children:[]},{value:"Derived State",id:"derived-state",children:[]},{value:"Combined State",id:"combined-state",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Not all state is created equal in Visly State. There are four main kinds of state containers: ",Object(o.b)("inlineCode",{parentName:"p"},"state"),", ",Object(o.b)("inlineCode",{parentName:"p"},"syncedState"),", ",Object(o.b)("inlineCode",{parentName:"p"},"derivedState"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"combinedState"),". They each have slightly different properties and are often used in combination for larger apps."),Object(o.b)("h2",{id:"state"},"State"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"state")," is the standard state container in Visly State. It holds onto a piece of data and can be accessed from any component in your application, whether in React or Node. Your applications can have any number of these state containers and they can be small or large, whatever you choose will not effect the performance of your app, although it can be good practice to split up application state into multiple state containers to increase the reusability of your components."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"state")," constructor takes a default value and is expected to be constructed as a global variable. When using TypeScript we recommend that you also create a separate type for your state container that can be used for mutations and selectors (more on those later)."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { state } from '@visly/state'\n\ninterface AppState {\n    counter: number\n}\n\nexport const appState = state<AppState>({ counter: 0 })\n")),Object(o.b)("p",null,"The above code works whether you run it in React or Node. However, how you read data from state differs slightly depending on where you use it. For reading state from a React component, we provide hooks such as ",Object(o.b)("inlineCode",{parentName:"p"},"useValue"),", in a Node app you can just call ",Object(o.b)("inlineCode",{parentName:"p"},".get()")," on the state container."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { useValue } from '@visly/state'\nimport { appState } from './state'\n\n// React\nfunction Component() {\n    const count = useValue(appState, s => s.counter)\n    return <span>{count}</span>\n}\n\n// Node\nconst count = appState.get(s => s.counter)\n")),Object(o.b)("p",null,"When using ",Object(o.b)("inlineCode",{parentName:"p"},"useValue")," in a React component, Visly State will ensure your component is re-rendered when the data you subscribe to changes."),Object(o.b)("h2",{id:"synced-state"},"Synced State"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"syncedState")," is just like ",Object(o.b)("inlineCode",{parentName:"p"},"state")," except that is also lets Visly State know that this state should be synced to your server and potentially to other clients. Other than requiring a sync key when constructing the state container, it works just like ",Object(o.b)("inlineCode",{parentName:"p"},"state"),". To enable state syncing you'll have to configure a sync adapter and set up a compatible sync server - more on that later."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { syncedState } from '@visly/state'\n\ninterface AppState {\n    counter: number\n}\n\nexport const appState = syncedState<AppState>('appstate', { counter: 0 })\n")),Object(o.b)("h2",{id:"derived-state"},"Derived State"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"derivedState")," is a higher level state container useful for creating state that is computed based on some other state. Derived state is limitated in that it is read-only, otherwise is works just like ",Object(o.b)("inlineCode",{parentName:"p"},"state"),". You can create a derived state based on any other state together with a selector function, which applies a transform to the data within the underlying state container. Derived state is super useful when you have low level state that you don't want to expose directly to your application's components but would rather expose a simplified view of that state."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { state, derivedState } from '@visly/state'\n\ninterface AppState {\n    counter: number\n}\n\nconst appState = state<AppState>({ counter: 0 })\n\nexport const simpleState = derivedState(appState, s => {\n    return {\n        counter: Math.round(counter),\n    }\n})\n")),Object(o.b)("h2",{id:"combined-state"},"Combined State"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"combinedState")," is another higher level state container. Combined state is useful when you have two different pieces of state that you want to combine into a single state container. This is especially useful when you have application state where you only want a subset of it to be syncronized between clients. Unlike derived state, combined state allows you to perform mutations on it. Visly State will automatically make sure the correct underlying state is updated."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { syncedState } from '@visly/state'\n\ninterface RemoteState {\n    pages: Page[]\n}\n\ninterface LocalState {\n    selectedPageId: string | null\n}\n\ntype AppState = {\n    remote: RemoteState\n    local: LocalState\n}\n\nconst remoteState = syncedState<RemoteState>('remote', { pages: [] })\nconst localState = state<LocalState>({ selectedPageId: null })\n\nexport const appState = combinedState<AppState>({\n    remote: remoteState,\n    local: localState,\n})\n")))}p.isMDXComponent=!0},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);