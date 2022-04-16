var $fUJwp$reactjsxruntime = require("react/jsx-runtime");
var $fUJwp$react = require("react");
var $fUJwp$faunadb = require("faunadb");
var $fUJwp$dfinityagent = require("@dfinity/agent");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Form", () => $cc394e2686c7727f$export$2e2bcd8739ae039);
$parcel$export(module.exports, "services", () => $0e2399b90308ca90$export$2e2bcd8739ae039);
$parcel$export(module.exports, "App", () => $89579486f8f20004$exports);



// import Upload from './components/form'
//does not work with nextjs and now parcel mxm
// import './index.css'
// Todo turn into a react hook to handle the changes
let $0621612484e2bf56$var$placeholder = "";
let $0621612484e2bf56$var$type = "";
//create a global handler for components
function $0621612484e2bf56$var$Options({ values: values , handleEvent: handleEvent , custom: custom , config: config  }) {
    $fUJwp$react.useEffect(()=>{
        custom(true);
    });
    const setValue = (val)=>{
        $0621612484e2bf56$var$placeholder = val.placeholder;
        $0621612484e2bf56$var$type = val.type;
        handleEvent({
            [config.name]: val.value
        });
    };
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("div", {
        className: 'flex w-full h-auto flex-col',
        children: [
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                className: 'mb-2 font-bold text-xl text-blue-500',
                children: config.title
            }),
            values.map((i, k)=>{
                return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                    className: `${i.icon ? 'w-16 h-16' : 'w-auto p-2'} flex items-center justify-center bg-white rounded text-black cursor-pointer z-10 m-2`,
                    onClick: (e)=>setValue(i)
                    ,
                    children: i.icon ? /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("img", {
                        id: i.value,
                        name: i.value,
                        className: 'w-8 h-8',
                        src: i.icon
                    }) : /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("p", {
                        children: i.value
                    })
                }, k);
            })
        ]
    });
}
function $0621612484e2bf56$var$Input({ handleEvent: handleEvent , values: values , custom: custom , support: support , config: config , setError: setError , error: error , defaultValue: defaultValue = true  }) {
    $fUJwp$react.useEffect(()=>{
        custom(false);
        if (defaultValue) handleEvent({
            [config.name]: ''
        });
    }, []);
    //turn into global function
    const setValue = async (val)=>{
        try {
            if (config.valid) {
                if (await config.valid(val)) {
                    setError(false);
                    handleEvent({
                        [config.name]: val
                    });
                } else setError(true);
            } else handleEvent({
                [config.name]: val
            });
        } catch (e) {
            console.error(e);
        }
    };
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("div", {
        className: 'flex w-full h-auto flex-col',
        children: [
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                className: 'mb-2 font-bold text-xl text-blue-500',
                children: config.title
            }),
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                className: `w-full h-10 flex items-center p-2 border-l-2 ${error ? 'border-red-400' : ''} appearance-none`,
                children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("input", {
                    className: 'w-full h-12 input-style bg-transparent appearance-none outline-none',
                    type: values.type || $0621612484e2bf56$var$type,
                    placeholder: values.placeholder || $0621612484e2bf56$var$placeholder,
                    onChange: (e)=>setValue(e.target.value)
                    ,
                    accept: support,
                    autoFocus: "autofocus"
                }, config.name)
            }, values.placeholder)
        ]
    });
}
function $0621612484e2bf56$var$Search({ handleEvent: handleEvent , values: values , custom: custom , config: config  }) {
    const [searchResults, setResults] = $fUJwp$react.useState([]);
    $fUJwp$react.useEffect(()=>{
        custom(true);
    });
    const startSearch = (e)=>{
        try {
            const searchResult = values.data.filter((i)=>i.toLowerCase().includes(e[config.name].toLowerCase())
            );
            setResults(searchResult);
        } catch (err) {
            console.log('I am searching for some reason');
        }
    };
    const selectResult = (e)=>{
        let indexValue;
        values.data.map((i, k)=>{
            if (i == e) indexValue = k;
        });
        handleEvent({
            [config.name]: indexValue
        });
    };
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs($fUJwp$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx($0621612484e2bf56$var$Input, {
                values: values,
                handleEvent: startSearch,
                custom: custom,
                config: config,
                defaultValue: false
            }),
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                className: 'w-full flex flex-col overflow-hidden ',
                children: searchResults.map((i, k)=>{
                    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                        className: 'text-white p-2 border my-2',
                        onClick: ()=>selectResult(i)
                        ,
                        children: i
                    }, i);
                })
            })
        ]
    });
}
function $0621612484e2bf56$var$Info({ handleEvent: handleEvent , values: values , custom: custom , config: config  }) {
    $fUJwp$react.useEffect(()=>{
        custom(true);
    }, []);
    //turn into global function
    const setValue = ()=>{
        try {
            handleEvent({
                [config.name]: true
            });
        } catch (e) {
            console.error(e);
        }
    };
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
        className: 'flex flex-grow w-full h-auto flex-col justify-center items-center',
        children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("div", {
            className: 'flex flex-col',
            children: [
                /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                    className: 'my-2 font-bold text-2xl text-blue-500 ',
                    children: config.title
                }),
                /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                    className: 'w-full h-full flex flex-col max-w-sm',
                    children: values.map((val)=>{
                        return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("div", {
                            className: 'w-full flex flex-col max-w-xs my-2',
                            children: [
                                /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("h1", {
                                    className: 'font-bold text-xl',
                                    children: val.name
                                }),
                                /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("p", {
                                    className: 'text-lg font-italics',
                                    children: val.desc
                                })
                            ]
                        }, val.name);
                    })
                }),
                /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("div", {
                    onClick: setValue,
                    className: 'p-2 bg-blue-500 rounded flex w-32 my-4',
                    children: [
                        /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                            className: 'flex w-2/3',
                            children: "Agree"
                        }),
                        /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                            className: 'flex w-1/3 justify-end',
                            children: "->"
                        })
                    ]
                })
            ]
        })
    });
}
var $0621612484e2bf56$export$2e2bcd8739ae039 = {
    options: $0621612484e2bf56$var$Options,
    input: $0621612484e2bf56$var$Input,
    search: $0621612484e2bf56$var$Search,
    info: $0621612484e2bf56$var$Info
};


var $a4402ff9bf94a556$exports = {};

$parcel$export($a4402ff9bf94a556$exports, "Loader", () => $4bd16bd62b04a456$export$2e2bcd8739ae039);
$parcel$export($a4402ff9bf94a556$exports, "Submit", () => $a79aa48d3a6effcc$export$2e2bcd8739ae039);
$parcel$export($a4402ff9bf94a556$exports, "Next", () => $211dce01a971852c$export$2e2bcd8739ae039);
$parcel$export($a4402ff9bf94a556$exports, "Upload", () => $ef74cfb6dec90702$export$2e2bcd8739ae039);

function $4bd16bd62b04a456$var$Loader() {
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
        className: `w-8 h-8 cursor-pointer `,
        children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("svg", {
            width: "48",
            height: "48",
            strokeWidth: "0.5",
            stroke: "#808080",
            fill: "none",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            viewBox: "0 0 24 24",
            className: 'animate-spin',
            children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("rect", {
                        width: "24",
                        height: "24",
                        className: 'stroke-white stroke-0 '
                    }),
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("path", {
                        d: "M12,2 L12,6 M12,18 L12,22 M4.93,4.93 L7.76,7.76 M16.24,16.24 L19.07,19.07 M2,12 L6,12 M18,12 L22,12 M4.93,19.07 L7.76,16.24 M16.24,7.76 L19.07,4.93",
                        stroke: "#808080"
                    })
                ]
            })
        })
    });
}
var $4bd16bd62b04a456$export$2e2bcd8739ae039 = $4bd16bd62b04a456$var$Loader;



function $a79aa48d3a6effcc$var$Submit() {
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
        className: `w-8 h-8 cursor-pointer`,
        children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("svg", {
            width: "40",
            height: "40",
            fill: "none",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("rect", {
                        width: "24",
                        height: "24",
                        className: 'stroke-white fill-transparent stroke-0'
                    }),
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("path", {
                        d: "M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM8.28 16.427l-.707-.706 7.146-7.147-4.793-.001v-1h6.5v6.5h-1V9.28L8.28 16.427z",
                        fill: "#FFF9F9"
                    })
                ]
            })
        })
    });
}
var $a79aa48d3a6effcc$export$2e2bcd8739ae039 = $a79aa48d3a6effcc$var$Submit;



function $211dce01a971852c$var$Next() {
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
        className: `w-8 h-8 cursor-pointer`,
        children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("svg", {
            width: "40",
            height: "40",
            viewBox: "0 0 40 40",
            children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("g", {
                children: [
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("rect", {
                        x: "0",
                        y: "0",
                        width: "40",
                        height: "40",
                        className: 'stroke-black fill-transparent stroke-1'
                    }),
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("path", {
                        d: "M8.333,36.667L31.667,36.667C34.41,36.667 36.667,34.41 36.667,31.667L36.667,8.333C36.667,5.59 34.41,3.333 31.667,3.333L8.333,3.333C5.59,3.333 3.333,5.59 3.333,8.333L3.333,31.667C3.333,34.41 5.59,36.667 8.333,36.667ZM10.572,19.167L27.417,19.167L21.767,13.517L22.945,12.338L30.607,20L22.947,27.66L21.768,26.482L27.415,20.832L10.572,20.832L10.572,19.165L10.572,19.167Z",
                        className: 'fill-white stroke-white stroke-1'
                    })
                ]
            })
        })
    });
}
var $211dce01a971852c$export$2e2bcd8739ae039 = $211dce01a971852c$var$Next;



function $ef74cfb6dec90702$var$Upload() {
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
        className: `w-12 h-12 cursor-pointer`,
        children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("svg", {
            width: "40",
            height: "40",
            fill: "none",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("rect", {
                        width: "24",
                        height: "24",
                        className: 'stroke-white stroke-0 '
                    }),
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("path", {
                        d: "M17.714 10.095h-.482c-.124-2.647-2.317-4.762-4.994-4.762-2.172 0-4.157 1.382-4.862 3.334H7c-2.758 0-5 2.242-5 5 0 2.57 1.947 4.692 4.444 4.97l5.056.014v-5.443l-2.397 2.398a.5.5 0 0 1-.707 0 .5.5 0 0 1 0-.707l3.25-3.25c.105-.094.223-.147.355-.147a.5.5 0 0 1 .356.15l3.247 3.248a.5.5 0 0 1-.707.707L12.5 13.208v5.445l5.214.014c2.363 0 4.286-1.923 4.286-4.286s-1.923-4.286-4.286-4.286z",
                        fill: "#FFFFFF"
                    })
                ]
            })
        })
    });
}
var $ef74cfb6dec90702$export$2e2bcd8739ae039 = $ef74cfb6dec90702$var$Upload;





// import './studio.css'
const $cc394e2686c7727f$var$handleEvent = (state, action)=>{
    try {
        let isPos = 0;
        let isAdd = true;
        state.map((i, k)=>{
            if (Object.keys(action)[0] == Object.keys(i)[0]) {
                isAdd = false;
                isPos = k;
            }
        });
        if (isAdd) state.push(action);
        else state[isPos] = action;
        return [
            ...state
        ];
    } catch (e) {
        console.error('unable to add form', e.message);
    }
};
function $cc394e2686c7727f$var$Form({ submitHandler: submitHandler , formConfig: formConfig , title: title  }) {
    const [error, setError] = $fUJwp$react.useState(false);
    const [isCustom, setCustom] = $fUJwp$react.useState(false);
    const [pos, setPos] = $fUJwp$react.useState(0);
    const [len] = $fUJwp$react.useState(formConfig.length);
    const [state, dispatch] = $fUJwp$react.useReducer($cc394e2686c7727f$var$handleEvent, []);
    const [done, setDone] = $fUJwp$react.useState(false);
    let { [formConfig[pos].type]: Comp  } = $0621612484e2bf56$export$2e2bcd8739ae039;
    $fUJwp$react.useEffect(()=>{
        try {
            //to auto change
            if (state.length > pos && state.length < len && isCustom) setPos(pos + 1);
            else if (pos == len - 1 && isCustom) handleSubmit();
        } catch (e) {
            console.error('unable to change form', e);
        }
    }, [
        state
    ]);
    const handleSubmit = async ()=>{
        setDone(true);
        let _data = null;
        if (state.length > 0) {
            _data = {};
            state.map((x)=>{
                Object.entries(x).map(([key, value])=>{
                    _data[key] = value;
                });
            });
        }
        if (_data !== null) submitHandler(_data);
    // let _id = NativeService.getLocalStorage('id')
    // let store = await BackendService.Type[type].get(_id)
    // store.data.socials.push(_data)
    //
    // let isSaved = await BackendService.Type[type].save(_id,store)
    //
    // if(isSaved)
    //     // TODO show that it is loading
    // window.location = '/'
    };
    const nextSubmit = ()=>{
        setPos(pos + 1);
    };
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("div", {
        className: `w-full max-w-sm  h-full flex flex-col p-8 bg-black text-white ${isCustom ? 'py-8' : 'py-48 lg:py-64'}`,
        children: [
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                className: 'w-full font-bold text-2xl my-4 text-white',
                children: title
            }),
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx(Comp, {
                values: formConfig[pos].values,
                handleEvent: dispatch,
                config: formConfig[pos],
                custom: setCustom,
                setError: setError,
                error: error
            }, `Comp${formConfig[pos].name}`),
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                className: `w-full text-white flex ${isCustom ? '' : 'flex-grow '}items-end justify-center`,
                children: error ? /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx($fUJwp$reactjsxruntime.Fragment, {}) : isCustom ? /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx($fUJwp$reactjsxruntime.Fragment, {}) : pos == len - 1 ? done ? /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx($4bd16bd62b04a456$export$2e2bcd8739ae039, {}) : /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                    onClick: ()=>handleSubmit()
                    ,
                    children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx($a79aa48d3a6effcc$export$2e2bcd8739ae039, {})
                }) : /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                    onClick: nextSubmit,
                    children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx($211dce01a971852c$export$2e2bcd8739ae039, {})
                })
            })
        ]
    });
}
var $cc394e2686c7727f$export$2e2bcd8739ae039 = $cc394e2686c7727f$var$Form;


var $89579486f8f20004$exports = {};

$parcel$export($89579486f8f20004$exports, "Studio", () => $cc394e2686c7727f$export$2e2bcd8739ae039);
$parcel$export($89579486f8f20004$exports, "Components", () => $a4402ff9bf94a556$exports);
$parcel$export($89579486f8f20004$exports, "Core", () => $42bd3d27366b0012$export$2e2bcd8739ae039);




function $42bd3d27366b0012$var$Container({ Comp: Comp , param: param  }) {
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx(Comp, {
        param: param
    });
}
//main route engine
function $42bd3d27366b0012$var$App({ pages: pages  }) {
    const [paths, setPaths] = $fUJwp$react.useState();
    const [page, setPage] = $fUJwp$react.useState();
    const [param, setParam] = $fUJwp$react.useState('');
    const [pageName, setPageName] = $fUJwp$react.useState();
    $fUJwp$react.useEffect(()=>{
        const path = document.location.pathname.split('/');
        path.shift();
        setPaths(path);
    }, []);
    const loadPage = (path, prePath)=>{
        return prePath[path];
    };
    const initPage = (_page)=>{
        setPage(_page);
    };
    $fUJwp$react.useEffect(()=>{
        let _page = ()=>/*#__PURE__*/ $fUJwp$reactjsxruntime.jsx($fUJwp$reactjsxruntime.Fragment, {
                children: "loading"
            })
        ;
        // console.log(paths)
        if (paths) {
            try {
                paths.map((path, index)=>{
                    if (path === '' && index === 0) {
                        _page = pages;
                        setPageName('index');
                    } else if (paths.length === 1) {
                        if (pages[path]) {
                            _page = pages[path];
                            setPageName('index');
                        } else {
                            _page = pages;
                            setPageName('index');
                            throw 'send through param or fail';
                        }
                    } else if (index === 0) _page = pages[path];
                    else {
                        const isPage = loadPage(path, _page);
                        if (isPage) setPageName(path);
                        else {
                            if (_page['index'] && index !== 2) setPageName('index');
                            throw 'send through param or fail';
                        }
                    }
                });
            } catch  {
                // TODO revisit in the near future
                const _index = paths.length - 2;
                try {
                    if (paths.lenfth == 0 || _index == 0) _page['index']();
                    if (_index < 0) {
                        _page['index']();
                        _page[paths[0]]();
                    } else if (paths.length > 1) {
                        _page[paths[_index]]();
                        throw Error();
                    }
                } catch (err) {
                    if (err.message.includes('param')) setParam(paths.pop());
                    else {
                        try {
                            _page['error']();
                        } catch  {
                            _page = pages;
                        }
                        setPageName('error');
                    }
                }
            }
            setPage(_page);
        }
    }, [
        paths
    ]);
    if (page) return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx($42bd3d27366b0012$var$Container, {
        param: param,
        Comp: page[pageName]
    });
    else return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx($fUJwp$reactjsxruntime.Fragment, {});
}
var $42bd3d27366b0012$export$2e2bcd8739ae039 = $42bd3d27366b0012$var$App;





let $1ffa3d82f87ba345$var$q = $fUJwp$faunadb.query;
let $1ffa3d82f87ba345$var$faunaSDK;
const $1ffa3d82f87ba345$var$init = (key)=>{
    $1ffa3d82f87ba345$var$faunaSDK = new $fUJwp$faunadb.Client({
        secret: key,
        domain: 'db.fauna.com',
        // NOTE: Use the correct domain for your database's Region Group.
        port: 443,
        scheme: 'https'
    });
};
//add trycatch for devesive coding
const $1ffa3d82f87ba345$var$create = async (data, col)=>{
    return await $1ffa3d82f87ba345$var$faunaSDK.query($1ffa3d82f87ba345$var$q.Create($1ffa3d82f87ba345$var$q.Collection(col), {
        data: data
    }));
};
const $1ffa3d82f87ba345$var$read = async (id, col = "theplug")=>{
    //console.log("id tp read",id)
    return await $1ffa3d82f87ba345$var$faunaSDK.query($1ffa3d82f87ba345$var$q.Get($1ffa3d82f87ba345$var$q.Ref($1ffa3d82f87ba345$var$q.Collection(col), id)));
};
const $1ffa3d82f87ba345$var$update = async (data, id, col)=>{
    return await $1ffa3d82f87ba345$var$faunaSDK.query($1ffa3d82f87ba345$var$q.Update($1ffa3d82f87ba345$var$q.Ref($1ffa3d82f87ba345$var$q.Collection(col), id), {
        data: data
    }));
};
const $1ffa3d82f87ba345$var$remove = async (id, col = "theplug")=>{
    console.log("removing the data", id);
    return await $1ffa3d82f87ba345$var$faunaSDK.query($1ffa3d82f87ba345$var$q.Delete($1ffa3d82f87ba345$var$q.Ref($1ffa3d82f87ba345$var$q.Collection(col), id)));
};
const $1ffa3d82f87ba345$var$findById = async (id, index = "identity")=>{
    return await $1ffa3d82f87ba345$var$faunaSDK.query($1ffa3d82f87ba345$var$q.Get($1ffa3d82f87ba345$var$q.Match($1ffa3d82f87ba345$var$q.Index(index), id)));
};
const $1ffa3d82f87ba345$var$findByIndex = async (id, index = "analyticIdentity ")=>{
    let result = await $1ffa3d82f87ba345$var$faunaSDK.query($1ffa3d82f87ba345$var$q.Paginate($1ffa3d82f87ba345$var$q.Match($1ffa3d82f87ba345$var$q.Index(index), id)));
    let exp = result.data.map((i)=>$1ffa3d82f87ba345$var$q.Get(i)
    );
    let data = await $1ffa3d82f87ba345$var$faunaSDK.query(exp);
    return data;
};
const $1ffa3d82f87ba345$var$getAll = async (index = "genus", size = {})=>{
    let result = await $1ffa3d82f87ba345$var$faunaSDK.query($1ffa3d82f87ba345$var$q.Paginate($1ffa3d82f87ba345$var$q.Documents($1ffa3d82f87ba345$var$q.Collection(index)), size));
    let exp = result.data.map((i)=>$1ffa3d82f87ba345$var$q.Get(i)
    );
    let data = await $1ffa3d82f87ba345$var$faunaSDK.query(exp);
    return data;
};
var $1ffa3d82f87ba345$export$2e2bcd8739ae039 = {
    create: $1ffa3d82f87ba345$var$create,
    update: $1ffa3d82f87ba345$var$update,
    read: $1ffa3d82f87ba345$var$read,
    getAll: $1ffa3d82f87ba345$var$getAll,
    findByIndex: $1ffa3d82f87ba345$var$findByIndex,
    init: $1ffa3d82f87ba345$var$init
};



const $0562eaaa3b748838$export$b2034e2ea8897403 = ({ IDL: IDL  })=>{
    const Data_2 = IDL.Record({
        'data': IDL.Text,
        'graph': IDL.Vec(IDL.Text),
        'last_update': IDL.Int64
    });
    return IDL.Service({
        'data_exist': IDL.Func([
            IDL.Text
        ], [
            IDL.Bool
        ], [
            'query'
        ]),
        'get_all_data': IDL.Func([], [
            IDL.Vec(Data_2)
        ], [
            'query'
        ]),
        'get_data': IDL.Func([
            IDL.Text
        ], [
            Data_2
        ], [
            'query'
        ]),
        'greeting': IDL.Func([
            IDL.Text
        ], [
            IDL.Text
        ], [
            'query'
        ]),
        'leaving': IDL.Func([
            IDL.Text
        ], [
            IDL.Text
        ], [
            'query'
        ]),
        'remove_data': IDL.Func([
            IDL.Text
        ], [], []),
        'update_data': IDL.Func([
            IDL.Text,
            Data_2
        ], [], [])
    });
};
const $0562eaaa3b748838$export$2cd8252107eb640b = ({ IDL: IDL  })=>{
    return [];
};



const $2a253dc0b3cf5cea$export$c2ecce1a7b3ea536 = ()=>{
    return "bcab4-uqaaa-aaaah-aaq2q-cai";
};
const $2a253dc0b3cf5cea$export$ccd3f6742fc19d25 = $2a253dc0b3cf5cea$export$c2ecce1a7b3ea536();
const $2a253dc0b3cf5cea$export$cb2bc87933ecfd63 = ($2a253dc0b3cf5cea$export$ccd3f6742fc19d25, options)=>{
    const agent = new $fUJwp$dfinityagent.HttpAgent({
        ...options?.agentOptions
    });
    var err;
    // Creates an actor with using the candid interface and the HttpAgent
    return $fUJwp$dfinityagent.Actor.createActor($0562eaaa3b748838$export$b2034e2ea8897403, {
        agent: agent,
        canisterId: $2a253dc0b3cf5cea$export$ccd3f6742fc19d25,
        ...options?.actorOptions
    });
};
const $2a253dc0b3cf5cea$export$32a253b6f8b50fb4 = $2a253dc0b3cf5cea$export$cb2bc87933ecfd63($2a253dc0b3cf5cea$export$ccd3f6742fc19d25);



var $ea6d24972fe0ed59$export$2e2bcd8739ae039 = {
    backend: $2a253dc0b3cf5cea$export$32a253b6f8b50fb4
};


const $8875dc3d082e8a06$var$save = async (id, data)=>{
    try {
        await $ea6d24972fe0ed59$export$2e2bcd8739ae039.backend.update_data(id, data);
        return true;
    } catch (e) {
        console.error('failing to save', e.message);
        return false;
    }
};
var $8875dc3d082e8a06$export$2e2bcd8739ae039 = $8875dc3d082e8a06$var$save;



const $722dffcd34c72c27$var$isExist = async (id)=>{
    return await $ea6d24972fe0ed59$export$2e2bcd8739ae039.backend.data_exist(id);
};
var $722dffcd34c72c27$export$2e2bcd8739ae039 = $722dffcd34c72c27$var$isExist;



const $3a744bd0c2a50e36$var$get = async (id)=>{
    try {
        return await $ea6d24972fe0ed59$export$2e2bcd8739ae039.backend.get_data(id);
    } catch (e) {
        console.error('failing to get', e.message);
        return false;
    }
};
var $3a744bd0c2a50e36$export$2e2bcd8739ae039 = $3a744bd0c2a50e36$var$get;


var $415a0a1ff3280794$export$2e2bcd8739ae039 = {
    save: $8875dc3d082e8a06$export$2e2bcd8739ae039,
    isExist: $722dffcd34c72c27$export$2e2bcd8739ae039,
    get: $3a744bd0c2a50e36$export$2e2bcd8739ae039
};


var $ea1e99047e854b23$export$2e2bcd8739ae039 = {
    core: $415a0a1ff3280794$export$2e2bcd8739ae039,
    backend: $2a253dc0b3cf5cea$export$32a253b6f8b50fb4
};





var $0e2399b90308ca90$export$2e2bcd8739ae039 = {
    db_services: $1ffa3d82f87ba345$export$2e2bcd8739ae039,
    dfinity: $ea1e99047e854b23$export$2e2bcd8739ae039
};




//# sourceMappingURL=index.js.map
