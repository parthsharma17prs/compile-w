(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Navbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const updateTime = {
                "Navbar.useEffect.updateTime": ()=>{
                    const now = new Date();
                    setTime(now.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    }));
                }
            }["Navbar.useEffect.updateTime"];
            updateTime();
            const interval = setInterval(updateTime, 1000);
            return ({
                "Navbar.useEffect": ()=>clearInterval(interval)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                initial: {
                    y: -100,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.8,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ]
                },
                className: "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-8 mix-blend-difference",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-2xl font-bold tracking-tight text-white flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-accent",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this),
                            "PALMER",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                className: "text-sm font-medium",
                                children: "®"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                lineNumber: 30,
                                columnNumber: 65
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(true),
                        className: "flex flex-col gap-[6px] w-[32px] hover:scale-105 transition-transform",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-[2px] bg-white"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2/3 h-[2px] bg-white self-end"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: "-100%"
                    },
                    animate: {
                        y: "0%"
                    },
                    exit: {
                        y: "-100%"
                    },
                    transition: {
                        duration: 0.8,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ]
                    },
                    className: "fixed inset-0 z-[100] bg-[#111] text-white flex flex-col p-6 md:p-12 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-bold tracking-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-accent",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                            lineNumber: 54,
                                            columnNumber: 33
                                        }, this),
                                        "PALMER",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                            className: "text-sm font-medium",
                                            children: "®"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                            lineNumber: 54,
                                            columnNumber: 77
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                    lineNumber: 53,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-white hover:text-accent transition-colors text-3xl font-light",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                    lineNumber: 56,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                            lineNumber: 52,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-between h-full pt-12 md:pt-24 gap-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col justify-end w-full md:w-1/3 order-3 md:order-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/50 text-sm uppercase mb-2",
                                            children: "Local Time"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                            lineNumber: 66,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-accent text-5xl md:text-7xl font-bold tracking-tighter tabular-nums",
                                            children: time
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                            lineNumber: 67,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full md:w-1/3 flex flex-col gap-6 order-1 md:order-2",
                                    children: [
                                        'Home',
                                        'About Us',
                                        'Services',
                                        'Projects',
                                        'Contact'
                                    ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: -30
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                delay: 0.3 + idx * 0.1,
                                                duration: 0.6
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                onClick: ()=>setIsOpen(false),
                                                className: "group flex items-center gap-4 text-5xl md:text-6xl font-bold hover:text-accent transition-colors tracking-tight",
                                                children: [
                                                    item,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                                lineNumber: 78,
                                                columnNumber: 41
                                            }, this)
                                        }, item, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                            lineNumber: 72,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                    lineNumber: 70,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full md:w-1/3 flex flex-col items-start md:items-end gap-4 order-2 md:order-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/50 text-sm uppercase mb-4",
                                            children: "Socials"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                            lineNumber: 91,
                                            columnNumber: 33
                                        }, this),
                                        [
                                            'Instagram',
                                            'Twitter / X',
                                            'LinkedIn',
                                            'Dribbble'
                                        ].map((soc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                href: "#",
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    delay: 0.5 + idx * 0.1,
                                                    duration: 0.5
                                                },
                                                className: "text-2xl md:text-3xl font-medium hover:text-accent transition-colors flex items-center justify-between w-full md:w-auto md:gap-8 border-b border-white/10 md:border-none pb-2 md:pb-0",
                                                children: [
                                                    soc,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: "↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, soc, true, {
                                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                                lineNumber: 93,
                                                columnNumber: 37
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                                    lineNumber: 90,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                            lineNumber: 64,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                    lineNumber: 45,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "3E61YQYY7mkZtcY7PnY8FWF2Vhg=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/anti proj/anti client1/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Hero() {
    _s();
    const textTitle = "PATTERN DIMENSIONS AND MOMENTS THAT CONNECT AND LEAVE A BOLD イメージ.";
    const characters = textTitle.split("");
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0.5);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0.5);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const handleMouseMove = {
                "Hero.useEffect.handleMouseMove": (e)=>{
                    mouseX.set(e.clientX / window.innerWidth);
                    mouseY.set(e.clientY / window.innerHeight);
                }
            }["Hero.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove);
            return ({
                "Hero.useEffect": ()=>window.removeEventListener('mousemove', handleMouseMove)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        mouseX,
        mouseY
    ]);
    const springX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mouseX, {
        stiffness: 60,
        damping: 20
    });
    const springY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mouseY, {
        stiffness: 60,
        damping: 20
    });
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springY, [
        0,
        1
    ], [
        10,
        -10
    ]);
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springX, [
        0,
        1
    ], [
        -10,
        10
    ]);
    const imgX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springX, [
        0,
        1
    ], [
        -20,
        20
    ]);
    const imgY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springY, [
        0,
        1
    ], [
        -20,
        20
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full min-h-screen pt-40 pb-32 px-6 lg:px-12 flex flex-col justify-center overflow-hidden bg-black selection:bg-accent selection:text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[2] overflow-hidden pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    className: "absolute inset-0 w-full h-full object-cover mix-blend-screen",
                    style: {
                        opacity: 1,
                        filter: 'contrast(1.2) brightness(1.2)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                        src: "/smoke.mp4",
                        type: "video/mp4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none z-[1]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            scale: [
                                1,
                                1.1,
                                1
                            ],
                            opacity: [
                                0.03,
                                0.08,
                                0.03
                            ],
                            rotate: [
                                0,
                                5,
                                0
                            ]
                        },
                        transition: {
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        className: "absolute -top-[15%] -right-[10%] w-[1000px] h-[1000px] bg-accent blur-[200px] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-50 pointer-events-none mix-blend-overlay"
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-32 relative z-10 w-full max-w-[1800px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 w-full max-w-5xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 mb-12 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        x: -50,
                                        opacity: 0
                                    },
                                    animate: {
                                        x: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 1,
                                        ease: "circOut"
                                    },
                                    className: "w-12 h-[1px] bg-accent"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        x: -20,
                                        opacity: 0
                                    },
                                    animate: {
                                        x: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 1,
                                        delay: 0.2,
                                        ease: "circOut"
                                    },
                                    className: "text-accent font-bebas text-sm tracking-[0.5em] uppercase",
                                    children: "Future of Digital Craft"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                                    lineNumber: 71,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-7xl md:text-[8rem] lg:text-[11.5rem] font-normal font-bebas leading-[0.8] tracking-tighter uppercase",
                            children: characters.map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    className: "inline-block",
                                    initial: {
                                        y: "100%",
                                        opacity: 0,
                                        scale: 0.8
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        duration: 1.2,
                                        delay: index * 0.012,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1
                                        ]
                                    },
                                    children: char === " " ? "\u00A0" : char
                                }, index, false, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                                    lineNumber: 83,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                            lineNumber: 81,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 1.8,
                                duration: 1
                            },
                            className: "mt-20 flex flex-col md:flex-row gap-12 md:items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "group relative px-12 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-full overflow-hidden transition-all duration-500 hover:text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                                            lineNumber: 106,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10",
                                            children: "Start a Project"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                                            lineNumber: 107,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold",
                                            children: "Trusted by Industry Leaders"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                                            lineNumber: 111,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4 opacity-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-bebas text-lg",
                                                    children: "Apple"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-bebas text-lg",
                                                    children: "Nike"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-bebas text-lg",
                                                    children: "Meta"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                                            lineNumber: 112,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                                    lineNumber: 110,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                            lineNumber: 99,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-black to-transparent pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
                lineNumber: 124,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/Hero.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
_s(Hero, "jBZ5GrXQak9wIze/+6fzn88Ef1A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/anti proj/anti client1/src/components/Marquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Marquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function Marquee({ text }) {
    // Duplicate the text multiple times to ensure seamless scrolling
    const fullText = text.repeat(10);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full border-t border-b border-white/10 bg-white text-black py-6 md:py-8 overflow-hidden relative flex -rotate-3 scale-110 origin-center z-20 shadow-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "whitespace-nowrap flex font-normal font-bebas text-4xl md:text-6xl lg:text-8xl uppercase tracking-tighter pl-4 gap-16 md:gap-32",
            animate: {
                x: [
                    0,
                    -2000
                ]
            },
            transition: {
                ease: 'linear',
                duration: 30,
                repeat: Infinity
            },
            children: Array.from({
                length: 15
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-16 md:gap-32",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Marquee.tsx",
                            lineNumber: 18,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-accent opacity-30",
                            children: "•"
                        }, void 0, false, {
                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Marquee.tsx",
                            lineNumber: 19,
                            columnNumber: 25
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Marquee.tsx",
                    lineNumber: 17,
                    columnNumber: 21
                }, this))
        }, void 0, false, {
            fileName: "[project]/Documents/anti proj/anti client1/src/components/Marquee.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/Marquee.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = Marquee;
var _c;
__turbopack_context__.k.register(_c, "Marquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/anti proj/anti client1/src/components/GiantText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GiantText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function GiantText({ text }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start start",
            "end start"
        ]
    });
    // Dramatic Scaling from smallish to "filling the frame"
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.7
    ], [
        0.5,
        2.5
    ]);
    // Smooth transition from scaling to swiping up
    // Once it reaches 70% scroll, it starts moving up fast
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.7,
        1
    ], [
        0,
        -400
    ]);
    // Fading out at the very end
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.8,
        1
    ], [
        1,
        0
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "h-[250vh] w-full bg-black relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        scale,
                        y,
                        opacity
                    },
                    className: "flex flex-col items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-[20vw] font-normal font-bebas tracking-tighter uppercase whitespace-nowrap text-white",
                            transition: {
                                ease: "easeOut"
                            },
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/Documents/anti proj/anti client1/src/components/GiantText.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            style: {
                                opacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
                                    0,
                                    0.5
                                ], [
                                    0,
                                    0.4
                                ])
                            },
                            className: "mt-4 flex gap-8 items-center text-accent/50 font-bebas text-2xl uppercase tracking-[1em]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "CRAFTING"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/GiantText.tsx",
                                    lineNumber: 42,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 rounded-full bg-accent"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/GiantText.tsx",
                                    lineNumber: 43,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "FUTURE"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/GiantText.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/anti proj/anti client1/src/components/GiantText.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/anti proj/anti client1/src/components/GiantText.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        scale: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
                            0,
                            0.8
                        ], [
                            0.8,
                            1.5
                        ]),
                        opacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
                            0,
                            0.5,
                            0.8
                        ], [
                            0,
                            0.1,
                            0
                        ])
                    },
                    className: "absolute inset-0 bg-accent rounded-full blur-[150px] -z-10"
                }, void 0, false, {
                    fileName: "[project]/Documents/anti proj/anti client1/src/components/GiantText.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/anti proj/anti client1/src/components/GiantText.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/GiantText.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_s(GiantText, "8WRseFnB4iUTdsLKsDeRckXWwJU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = GiantText;
var _c;
__turbopack_context__.k.register(_c, "GiantText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const works = [
    {
        id: 1,
        title: 'Manila.',
        client: 'Brand Identity',
        img: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Theo',
        client: 'Digital Experience',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Horizon',
        client: 'Art Direction',
        img: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Kroma',
        client: 'Web Development',
        img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop'
    }
];
function FeaturedWorks() {
    _s();
    const [hoveredIdx, setHoveredIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 px-6 md:px-12 bg-black text-white w-full border-t border-white/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-end mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-6xl font-normal font-bebas tracking-tight uppercase",
                        children: "Featured Works©"
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            x: 5
                        },
                        className: "text-sm md:text-base border-b border-white pb-1 hidden md:block",
                        children: "View All Projects"
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12",
                children: works.map((work, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        transition: {
                            duration: 0.8,
                            delay: idx * 0.1,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        className: "group relative cursor-pointer flex flex-col gap-4",
                        onMouseEnter: ()=>setHoveredIdx(idx),
                        onMouseLeave: ()=>setHoveredIdx(null),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full aspect-[4/3] overflow-hidden bg-neutral-900 relative rounded-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                        src: work.img,
                                        className: "w-full h-full object-cover scale-105",
                                        animate: {
                                            scale: hoveredIdx === idx ? 1.0 : 1.05,
                                            filter: hoveredIdx === idx ? "brightness(0.8)" : "brightness(1)"
                                        },
                                        transition: {
                                            duration: 0.7,
                                            ease: [
                                                0.16,
                                                1,
                                                0.3,
                                                1
                                            ]
                                        },
                                        alt: work.title
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx",
                                        lineNumber: 43,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: hoveredIdx === idx ? 1 : 0
                                        },
                                        transition: {
                                            duration: 0.3
                                        },
                                        className: "absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-[2px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white text-black px-6 py-3 rounded-full font-medium tracking-wide uppercase text-sm",
                                            children: "View Project"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx",
                                            lineNumber: 61,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx",
                                        lineNumber: 55,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx",
                                lineNumber: 42,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-lg md:text-xl font-medium pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "tracking-wide",
                                        children: work.title
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx",
                                        lineNumber: 69,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/50 text-sm",
                                        children: work.client
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx",
                                        lineNumber: 70,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx",
                                lineNumber: 68,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute bottom-0 left-0 h-[1px] bg-white w-full origin-left",
                                initial: {
                                    scaleX: 0
                                },
                                animate: {
                                    scaleX: hoveredIdx === idx ? 1 : 0
                                },
                                transition: {
                                    duration: 0.4,
                                    ease: "easeInOut"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx",
                                lineNumber: 73,
                                columnNumber: 25
                            }, this)
                        ]
                    }, work.id, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx",
                        lineNumber: 31,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_s(FeaturedWorks, "WKN02c4hZQlgZem6Tl6ZZ/qsZ9A=");
_c = FeaturedWorks;
var _c;
__turbopack_context__.k.register(_c, "FeaturedWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatWeDo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const services = [
    {
        id: '01',
        title: 'Website Design',
        tools: 'Figma / Framer / Webflow',
        desc: 'Crafting premium, award-winning digital experiences that connect with audiences and drive conversion.'
    },
    {
        id: '02',
        title: 'Digital Products',
        tools: 'React / Next.js / Tailwind',
        desc: 'Building scalable and responsive applications with the most advanced technology stacks.'
    },
    {
        id: '03',
        title: 'Motion & Content',
        tools: 'After Effects / Spline / Rive',
        desc: 'Adding a layer of dynamism that breathes life into interfaces through fluid micro-interactions.'
    },
    {
        id: '04',
        title: 'Strategy & Positioning',
        tools: 'Miro / Notion / FigJam',
        desc: 'Aligning business objectives directly with user needs through comprehensive research and planning.'
    }
];
function WhatWeDo() {
    _s();
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredId, setHoveredId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "py-40 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: hoveredId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 0.15
                        },
                        exit: {
                            scale: 0,
                            opacity: 0
                        },
                        transition: {
                            duration: 0.8,
                            ease: "circOut"
                        },
                        className: "absolute bg-accent w-[600px] h-[600px] rounded-full blur-[120px]",
                        style: {
                            left: hoveredId === '01' ? '10%' : hoveredId === '02' ? '40%' : hoveredId === '03' ? '60%' : '80%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                        lineNumber: 25,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-12 md:gap-24 mb-32 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 w-full md:w-1/3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-accent font-bebas text-sm tracking-[0.4em] uppercase",
                                children: "Expertise"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                initial: {
                                    y: 50,
                                    opacity: 0
                                },
                                whileInView: {
                                    y: 0,
                                    opacity: 1
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.8,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                className: "text-6xl md:text-8xl font-normal font-bebas tracking-tighter uppercase leading-[0.8]",
                                children: [
                                    "WHat ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                                        lineNumber: 51,
                                        columnNumber: 30
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-accent",
                                        children: "We Do"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                                        lineNumber: 51,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            y: 30,
                            opacity: 0
                        },
                        whileInView: {
                            y: 0,
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.2,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        className: "text-xl md:text-2xl font-normal text-white/50 max-w-xl leading-relaxed mt-auto",
                        children: "We transform creative vision into reality. Partnering with forward-thinking agencies and ambitious brands to craft premium digital experiences."
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full border-t border-white/10 relative z-10",
                children: services.map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceRow, {
                        service: service,
                        idx: idx,
                        isOpen: openId === service.id,
                        isHovered: hoveredId === service.id,
                        onToggle: ()=>setOpenId(openId === service.id ? null : service.id),
                        onHover: ()=>setHoveredId(service.id),
                        onLeave: ()=>setHoveredId(null)
                    }, service.id, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                        lineNumber: 68,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_s(WhatWeDo, "78LF4HSSMll3axhQ4GfE85zmdAA=");
_c = WhatWeDo;
function ServiceRow({ service, idx, isOpen, isHovered, onToggle, onHover, onLeave }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            x: -20
        },
        whileInView: {
            opacity: 1,
            x: 0
        },
        viewport: {
            once: true,
            margin: "-100px"
        },
        transition: {
            duration: 0.8,
            delay: idx * 0.1
        },
        onMouseEnter: onHover,
        onMouseLeave: onLeave,
        onClick: onToggle,
        className: `border-b border-white/10 transition-all duration-700 cursor-pointer overflow-hidden group ${isHovered ? 'bg-white/[0.02]' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `py-12 md:py-20 flex items-center justify-between px-4 transition-all duration-500 ease-in-out`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-8 md:gap-24 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-2xl font-bebas transition-colors duration-500 ${isHovered || isOpen ? 'text-accent' : 'text-white/20'}`,
                                children: service.id
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                                lineNumber: 98,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `text-5xl md:text-9xl font-normal font-bebas uppercase tracking-tighter transition-all duration-700 leading-none ${isOpen || isHovered ? 'text-accent' : 'text-white/40'}`,
                                children: service.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                        lineNumber: 97,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            rotate: isOpen ? 45 : 0,
                            scale: isHovered ? 1.2 : 1
                        },
                        className: `w-14 h-14 md:w-20 md:h-20 border rounded-full flex items-center justify-center transition-all duration-500 ${isOpen || isHovered ? 'border-accent bg-accent text-black' : 'border-white/20 text-white/20'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-3xl md:text-5xl font-light",
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                        lineNumber: 106,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        height: 'auto',
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        height: 0,
                        opacity: 0,
                        y: -20
                    },
                    transition: {
                        duration: 0.6,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ]
                    },
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pb-20 pl-16 md:pl-44 flex flex-col md:flex-row gap-12 md:gap-24 justify-between pr-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl md:text-4xl font-normal text-white/80 max-w-3xl leading-tight font-bebas uppercase tracking-tight",
                                children: service.desc
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                                lineNumber: 124,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 border-l border-accent/30 pl-8 min-w-[300px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-accent text-xs uppercase tracking-[0.4em] font-black",
                                        children: "Expertise Tools"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                                        lineNumber: 128,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl md:text-2xl font-normal font-bebas uppercase tracking-widest text-white/60",
                                        children: service.tools
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                                        lineNumber: 129,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                                lineNumber: 127,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                        lineNumber: 123,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                    lineNumber: 116,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx",
        lineNumber: 86,
        columnNumber: 9
    }, this);
}
_c1 = ServiceRow;
var _c, _c1;
__turbopack_context__.k.register(_c, "WhatWeDo");
__turbopack_context__.k.register(_c1, "ServiceRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/anti proj/anti client1/src/components/ProcessGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcessGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const steps = [
    {
        id: '01',
        title: 'Discover',
        desc: 'Understanding your business, target audience, and project goals.'
    },
    {
        id: '02',
        title: 'Define',
        desc: 'Creating a strategic plan and defining the scope and structure.'
    },
    {
        id: '03',
        title: 'Design',
        desc: 'Crafting visually stunning designs that align with your brand.'
    },
    {
        id: '04',
        title: 'Deliver',
        desc: 'Building, testing, and launching the final product to the world.'
    }
];
function ProcessGrid() {
    _s();
    const [hoveredIdx, setHoveredIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 px-6 md:px-12 bg-black text-white w-full border-t border-white/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-end mb-24 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            y: 100
                        },
                        whileInView: {
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 1,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        className: "text-6xl md:text-8xl lg:text-9xl font-normal font-bebas tracking-tighter uppercase flex items-baseline gap-4",
                        children: [
                            "HOW WE ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-accent underline underline-offset-[20px] decoration-accent/20",
                                children: "WORK"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/ProcessGrid.tsx",
                                lineNumber: 27,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/ProcessGrid.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/20 text-xs font-black uppercase tracking-[0.4em] hidden md:block pb-4",
                        children: "Our Collaborative Process"
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/ProcessGrid.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/ProcessGrid.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10",
                children: steps.map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        transition: {
                            duration: 0.6,
                            delay: idx * 0.1,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        className: `group relative p-8 h-[350px] md:h-[400px] border-r border-b border-white/10 flex flex-col justify-between cursor-pointer overflow-hidden transition-colors duration-500`,
                        onMouseEnter: ()=>setHoveredIdx(idx),
                        onMouseLeave: ()=>setHoveredIdx(null),
                        animate: {
                            backgroundColor: hoveredIdx === idx ? 'var(--accent)' : 'transparent',
                            color: hoveredIdx === idx ? '#fff' : '#fff'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl md:text-2xl font-bold opacity-50 relative z-10 transition-opacity",
                                children: step.id
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/ProcessGrid.tsx",
                                lineNumber: 49,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4 tracking-tighter",
                                        children: step.title
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/ProcessGrid.tsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        className: "text-lg md:text-xl font-medium",
                                        animate: {
                                            opacity: hoveredIdx === idx ? 1 : 0.6
                                        },
                                        children: step.desc
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/ProcessGrid.tsx",
                                        lineNumber: 58,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/ProcessGrid.tsx",
                                lineNumber: 53,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute top-8 right-8 text-8xl md:text-[150px] font-thin opacity-0 -rotate-45 pointer-events-none",
                                animate: {
                                    opacity: hoveredIdx === idx ? 0.2 : 0,
                                    x: hoveredIdx === idx ? 0 : -20,
                                    y: hoveredIdx === idx ? 0 : 20,
                                    scale: hoveredIdx === idx ? 1 : 0.5
                                },
                                transition: {
                                    duration: 0.5,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/ProcessGrid.tsx",
                                lineNumber: 69,
                                columnNumber: 25
                            }, this)
                        ]
                    }, step.id, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/ProcessGrid.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/ProcessGrid.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/ProcessGrid.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_s(ProcessGrid, "WKN02c4hZQlgZem6Tl6ZZ/qsZ9A=");
_c = ProcessGrid;
var _c;
__turbopack_context__.k.register(_c, "ProcessGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoodWords
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const testimonials = [
    {
        id: 1,
        text: "The transformation was radical and instant. Their design thinking gave us a new identity we never imagined possible.",
        author: "JANE D.",
        company: "ACME CORP.",
        logo: "Logo_01"
    },
    {
        id: 2,
        text: "Efficiency meets aesthetics. My business conversion jumped by 140% after the relaunch. Simply incredible.",
        author: "MIKE SMITH",
        company: "TECH_TITAN",
        logo: "Logo_02"
    },
    {
        id: 3,
        text: "Not just designers, but partners in every sense. The bold approach they take is exactly what we needed to stand out.",
        author: "SARA J.",
        company: "MODERN LABS",
        logo: "Logo_03"
    },
    {
        id: 4,
        text: "Visionaries of the digital age. They redefined how our customers interact with the platform.",
        author: "TONY STARK",
        company: "STARK IND.",
        logo: "Logo_04"
    }
];
function GoodWords() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start end",
            "end start"
        ]
    });
    // Move the whole row horizontally as we scroll past
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        "0%",
        "-40%"
    ]);
    // States for hover reveal
    const [hoveredIdx, setHoveredIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "w-full bg-black text-white px-6 md:px-12 py-40 overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-0 -translate-y-1/2 w-full flex items-center justify-center opacity-[0.03] select-none pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-[25vw] font-normal font-bebas uppercase leading-none",
                    children: "+TRUSTED_BY"
                }, void 0, false, {
                    fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-end mb-24 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            x: -100,
                            opacity: 0
                        },
                        whileInView: {
                            x: 0,
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        className: "text-6xl md:text-9xl font-normal font-bebas uppercase leading-tight",
                        children: [
                            "GOOD ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-accent underline underline-offset-[16px] decoration-accent/10 italic",
                                children: "WORDS"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                                lineNumber: 67,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/20 select-none",
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                                lineNumber: 70,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/20 select-none",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                                lineNumber: 71,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        x
                    },
                    className: "flex gap-8 cursor-grab active:cursor-grabbing w-max",
                    children: testimonials.map((test, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            onMouseEnter: ()=>setHoveredIdx(idx),
                            onMouseLeave: ()=>setHoveredIdx(null),
                            className: "w-[400px] md:w-[600px] h-[500px] md:h-[600px] bg-[#0A0A0A] border border-white/5 rounded-[4rem] p-12 md:p-16 flex flex-col justify-between relative group overflow-hidden transition-all duration-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: {
                                        opacity: hoveredIdx === idx ? 1 : 0,
                                        scale: hoveredIdx === idx ? 1 : 0.9
                                    },
                                    className: "absolute inset-0 bg-accent transition-all duration-700 pointer-events-none z-0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                                    lineNumber: 89,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 flex flex-col gap-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-xs font-black uppercase tracking-[0.6em] ${hoveredIdx === idx ? 'text-black' : 'text-accent'} transition-colors duration-500`,
                                            children: test.logo
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                                            lineNumber: 98,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-3xl md:text-[2.5rem] font-black leading-[1.1] uppercase tracking-tighter ${hoveredIdx === idx ? 'text-white' : 'text-white/80'} transition-all duration-500`,
                                            children: [
                                                '"',
                                                test.text,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                                            lineNumber: 102,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                                    lineNumber: 97,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 flex justify-between items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: `text-3xl font-normal font-bebas uppercase tracking-widest ${hoveredIdx === idx ? 'text-black' : 'text-white'}`,
                                                    children: test.author
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] uppercase tracking-[0.3em] font-black ${hoveredIdx === idx ? 'text-black/40' : 'text-white/20'}`,
                                                    children: test.company
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                                            lineNumber: 108,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-12 h-12 rounded-full border ${hoveredIdx === idx ? 'border-black/20 text-black' : 'border-white/10 text-white/40'} flex items-center justify-center transition-all duration-500`,
                                            children: '"'
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                                            lineNumber: 112,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                                    lineNumber: 107,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute top-0 right-0 w-32 h-32 border-l border-b ${hoveredIdx === idx ? 'border-black/10' : 'border-white/5'} transition-all`
                                }, void 0, false, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                                    lineNumber: 118,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, test.id, true, {
                            fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                            lineNumber: 82,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-24 w-full h-[1px] bg-white/5 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        scaleX: scrollYProgress
                    },
                    className: "absolute inset-0 bg-accent origin-left"
                }, void 0, false, {
                    fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                    lineNumber: 126,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
                lineNumber: 125,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
_s(GoodWords, "4KNMCEi6cA4Z245O6cCkd6GabYE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = GoodWords;
var _c;
__turbopack_context__.k.register(_c, "GoodWords");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/anti proj/anti client1/src/components/Awards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Awards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const awards = [
    {
        year: '2025',
        title: 'Awwwards – Site of the Day',
        project: 'Neozen',
        img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'
    },
    {
        year: '2024',
        title: 'FWA – Cutting Edge',
        project: 'Aerosound',
        img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800'
    },
    {
        year: '2024',
        title: 'Red Dot – Identity',
        project: 'Rently',
        img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800'
    },
    {
        year: '2023',
        title: 'CSSDA – Innovation',
        project: 'Pulse UI',
        img: 'https://images.unsplash.com/photo-1558655146-dbf53316982a?auto=format&fit=crop&q=80&w=800'
    },
    {
        year: '2023',
        title: 'D&AD – Graphite',
        project: 'NexGen',
        img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800'
    }
];
function Awards() {
    _s();
    const [hoveredIdx, setHoveredIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const handleMouseMove = (e)=>{
        const { clientX, clientY } = e;
        mouseX.set(clientX);
        mouseY.set(clientY);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        onMouseMove: handleMouseMove,
        className: "py-32 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-accent font-bebas text-sm tracking-[0.4em] uppercase",
                                children: "Recognition"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-5xl md:text-7xl lg:text-8xl font-normal font-bebas tracking-tighter uppercase leading-[0.8]",
                                children: [
                                    "AWARDS & ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                                        lineNumber: 34,
                                        columnNumber: 34
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/20",
                                        children: "RECOGNITION"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                                        lineNumber: 34,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-white/50 max-w-sm leading-relaxed font-sans",
                        children: "Pushing the boundaries of digital aesthetics and functional excellence since 2018."
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full border-t border-white/10",
                children: awards.map((award, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AwardRow, {
                        award: award,
                        isHovered: hoveredIdx === idx,
                        onMouseEnter: ()=>setHoveredIdx(idx),
                        onMouseLeave: ()=>setHoveredIdx(null)
                    }, idx, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                        lineNumber: 45,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed pointer-events-none z-50 overflow-hidden rounded-xl w-[400px] h-[250px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]",
                style: {
                    left: mouseX,
                    top: mouseY,
                    x: "-50%",
                    y: "-50%",
                    scale: hoveredIdx !== null ? 1 : 0,
                    opacity: hoveredIdx !== null ? 1 : 0
                },
                transition: {
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    mass: 0.5
                },
                children: awards.map((award, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                        src: award.img,
                        alt: award.title,
                        className: "absolute inset-0 w-full h-full object-cover",
                        animate: {
                            opacity: hoveredIdx === i ? 1 : 0
                        },
                        transition: {
                            duration: 0.3
                        }
                    }, i, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                        lineNumber: 69,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
_s(Awards, "MqClMfguczHVPORQHo3gxZZnBOY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
_c = Awards;
function AwardRow({ award, isHovered, onMouseEnter, onMouseLeave }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        className: "group relative flex flex-col md:flex-row items-center justify-between py-12 md:py-16 border-b border-white/10 transition-colors duration-500 ease-in-out hover:bg-white/[0.02]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-24 w-full md:w-2/3 relative z-10 transition-transform duration-500 group-hover:translate-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-accent/40 font-bebas text-2xl md:text-3xl tracking-tighter w-24 tabular-nums",
                        children: award.year
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `text-3xl md:text-5xl lg:text-6xl font-normal font-bebas uppercase tracking-tighter leading-none transition-all duration-500 ${isHovered ? 'text-accent' : 'text-white'}`,
                                children: award.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                                lineNumber: 96,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/30 font-sans text-sm md:text-base uppercase tracking-widest",
                                children: [
                                    "Project: ",
                                    award.project
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-6 mt-8 md:mt-0 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        rotate: isHovered ? 45 : 0,
                        scale: isHovered ? 1.2 : 1
                    },
                    className: `w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center transition-colors duration-500 ${isHovered ? 'bg-accent border-accent text-black' : 'text-white'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl md:text-3xl",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                        lineNumber: 110,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                    lineNumber: 106,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: -20
                },
                animate: {
                    opacity: isHovered ? 0.05 : 0,
                    x: isHovered ? 0 : -20
                },
                className: "absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none text-[8rem] font-black font-bebas tracking-tighter uppercase whitespace-nowrap",
                children: award.project
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/Awards.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
_c1 = AwardRow;
var _c, _c1;
__turbopack_context__.k.register(_c, "Awards");
__turbopack_context__.k.register(_c1, "AwardRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pricing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Pricing() {
    _s();
    const [isSubscription, setIsSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-40 px-6 md:px-12 bg-black text-white w-full relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            scale: [
                                1,
                                1.2,
                                1
                            ],
                            opacity: [
                                0.1,
                                0.2,
                                0.1
                            ],
                            x: [
                                0,
                                100,
                                0
                            ],
                            y: [
                                0,
                                -50,
                                0
                            ]
                        },
                        transition: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        className: "absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-accent/20 rounded-full blur-[150px]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            scale: [
                                1,
                                1.3,
                                1
                            ],
                            opacity: [
                                0.05,
                                0.1,
                                0.05
                            ],
                            x: [
                                0,
                                -100,
                                0
                            ],
                            y: [
                                0,
                                50,
                                0
                            ]
                        },
                        transition: {
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        className: "absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-accent font-bebas text-sm tracking-[0.4em] uppercase",
                                children: "Investment"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden",
                                children: [
                                    "WHAT IT COSTS",
                                    "TO DO IT RIGHT"
                                ].map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                            initial: {
                                                y: "100%",
                                                opacity: 0
                                            },
                                            whileInView: {
                                                y: 0,
                                                opacity: 1
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                duration: 1.2,
                                                delay: i * 0.2,
                                                ease: [
                                                    0.16,
                                                    1,
                                                    0.3,
                                                    1
                                                ]
                                            },
                                            className: `text-6xl md:text-8xl lg:text-9xl font-normal font-bebas tracking-tighter uppercase leading-[0.8] ${i === 1 ? 'text-white/20' : 'text-white'}`,
                                            children: line
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                            lineNumber: 41,
                                            columnNumber: 33
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                        lineNumber: 40,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-white/50 max-w-sm font-sans leading-relaxed",
                                children: "Flexible engagement models designed for high-growth teams and innovative startups."
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative p-1.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex gap-2 w-fit",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layout: true,
                                        className: "absolute inset-y-1.5 bg-accent rounded-xl shadow-[0_0_20px_rgba(255,77,0,0.3)]",
                                        initial: false,
                                        animate: {
                                            x: isSubscription ? 0 : 'calc(100% + 8px)',
                                            width: isSubscription ? '140px' : '120px'
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                        lineNumber: 66,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsSubscription(true),
                                        className: `relative px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors duration-300 z-10 ${isSubscription ? 'text-black' : 'text-white/40'}`,
                                        children: "Subscription"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                        lineNumber: 76,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsSubscription(false),
                                        className: `relative px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors duration-300 z-10 ${!isSubscription ? 'text-black' : 'text-white/40'}`,
                                        children: "Project"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 flex flex-col gap-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: true
                            },
                            className: "aspect-square rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-12 relative group overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 h-full flex flex-col justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-accent font-bebas text-2xl",
                                            children: "Pricing Philosophy //"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                            lineNumber: 103,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-3xl md:text-4xl font-normal font-bebas leading-tight uppercase tracking-tighter",
                                            children: "Quality is never an accident. It is always the result of intelligent effort."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                            lineNumber: 104,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-[1px] bg-white/40 mt-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/40 font-bebas text-xl",
                                                    children: "Xzero® Methodology"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                            lineNumber: 107,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-10 -right-10 w-40 h-40 border border-white/10 rounded-full group-hover:scale-125 transition-transform duration-700"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-20 -right-20 w-60 h-60 border border-white/5 rounded-full group-hover:scale-110 transition-transform duration-1000"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                    lineNumber: 115,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                            lineNumber: 95,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 h-[650px] relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: isSubscription ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingCard, {
                                title: "RETAINER PLAN",
                                price: "$4,995",
                                period: "/mo",
                                badge: "Most Popular",
                                description: "Continuous high-velocity design and development for ambitious teams.",
                                features: [
                                    "One request at a time",
                                    "Average 48 hour delivery",
                                    "Unlimited revisions",
                                    "Pause or cancel anytime",
                                    "Direct communication channel"
                                ],
                                buttonText: "Start Subscription"
                            }, "sub", false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                lineNumber: 123,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingCard, {
                                title: "FIXED SCOPE",
                                price: "$12,500",
                                period: "+",
                                badge: "Elite Builds",
                                description: "High-impact builds for specific milestones and new product launches.",
                                features: [
                                    "End-to-end design & dev",
                                    "Dedicated project lead",
                                    "Strategic discovery phase",
                                    "Custom motion design",
                                    "Post-launch support"
                                ],
                                buttonText: "Request Quote"
                            }, "proj", false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                lineNumber: 140,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                            lineNumber: 121,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                lineNumber: 92,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_s(Pricing, "fpglwhP8ClZ0l1FjnIl6AcinDSg=");
_c = Pricing;
function PricingCard({ title, price, period, badge, description, features, buttonText }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            rotateY: -10,
            scale: 0.95,
            x: 20
        },
        animate: {
            opacity: 1,
            rotateY: 0,
            scale: 1,
            x: 0
        },
        exit: {
            opacity: 0,
            rotateY: 10,
            scale: 0.95,
            x: -20
        },
        transition: {
            duration: 0.6,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        className: "absolute inset-0 bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-10 md:p-14 flex flex-col justify-between shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                lineNumber: 174,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-start mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-accent text-xs font-bold uppercase tracking-[0.3em] font-bebas",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                lineNumber: 178,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-accent text-black text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest shadow-[0_0_20px_rgba(255,77,0,0.4)]",
                                children: badge
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                lineNumber: 179,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                        lineNumber: 177,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-7xl md:text-9xl font-normal font-bebas tabular-nums tracking-tighter text-white",
                                children: price
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                lineNumber: 185,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl font-bebas text-white/20 uppercase tracking-widest",
                                children: period
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                lineNumber: 188,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                        lineNumber: 184,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-10 text-xl text-white/50 leading-relaxed max-w-md font-sans",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                        lineNumber: 191,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-12 flex flex-col gap-6",
                        children: features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                initial: {
                                    opacity: 0,
                                    x: -10
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: 0.1 + i * 0.05
                                },
                                className: "flex items-center gap-5 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-black transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                            lineNumber: 205,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                        lineNumber: 204,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors",
                                        children: feature
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                        lineNumber: 207,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                                lineNumber: 197,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                        lineNumber: 195,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                lineNumber: 176,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                whileHover: {
                    scale: 1.02,
                    y: -5
                },
                whileTap: {
                    scale: 0.98
                },
                className: "w-full py-7 mt-12 bg-white text-black font-black uppercase tracking-[0.2em] text-sm rounded-2xl shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] hover:bg-accent hover:shadow-[0_20px_50px_-10px_rgba(255,77,0,0.4)] transition-all duration-500",
                children: buttonText
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
                lineNumber: 213,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx",
        lineNumber: 166,
        columnNumber: 9
    }, this);
}
_c1 = PricingCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "Pricing");
__turbopack_context__.k.register(_c1, "PricingCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LabNotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function LabNotes() {
    const posts = [
        {
            id: 1,
            title: 'The Power of Minimalism: Why Less is More in Design',
            category: 'Design Theory',
            date: 'Oct 12, 2025'
        },
        {
            id: 2,
            title: 'The Future of Web Design: Trends You Can’t Ignore',
            category: 'Web Trends',
            date: 'Sep 28, 2025'
        },
        {
            id: 3,
            title: 'My Web Design Process: From Concept to Completion',
            category: 'Process',
            date: 'Sep 15, 2025'
        },
        {
            id: 4,
            title: 'Why Investing in Good Design Pays Off for Your Business',
            category: 'Business Value',
            date: 'Aug 04, 2025'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[20vw] font-black text-white/5 whitespace-nowrap uppercase tracking-tighter mix-blend-screen pointer-events-none z-0",
                children: "NOTES FROM THE LAB"
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-16 relative z-10 border-b border-white/10 pb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            x: -30,
                            opacity: 0
                        },
                        whileInView: {
                            x: 0,
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        className: "text-5xl md:text-7xl lg:text-9xl font-normal font-bebas tracking-tighter uppercase leading-[0.8]",
                        children: [
                            "Lab ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                lineNumber: 48,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-accent underline decoration-8 underline-offset-8",
                                children: "Notes"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                lineNumber: 48,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-end gap-4 text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/40 max-w-[200px] text-xs font-medium uppercase tracking-[0.2em] hidden md:block",
                                children: "Thoughts on design, motion, and digital craftsmanship."
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "group-hover:text-accent transition-colors",
                                        children: "Everything"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                        lineNumber: 56,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                            lineNumber: 58,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                        lineNumber: 57,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10",
                children: posts.map((post, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        transition: {
                            duration: 0.6,
                            delay: idx * 0.1,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        className: "group cursor-pointer bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 hover:border-accent/40 transition-all duration-500 relative flex flex-col justify-between aspect-square lg:aspect-auto min-h-[400px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/30 text-xs font-bold uppercase tracking-[0.3em] font-bebas",
                                                children: [
                                                    "/",
                                                    post.id.toString().padStart(2, '0')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                                lineNumber: 76,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-black text-accent uppercase tracking-widest border border-accent/20 px-3 py-1 rounded-full",
                                                children: post.category
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                                lineNumber: 79,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                        lineNumber: 75,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl md:text-4xl lg:text-3xl font-normal font-bebas uppercase tracking-tighter leading-none group-hover:text-accent transition-colors duration-300",
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                        lineNumber: 84,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 flex items-center justify-between relative z-10 border-t border-white/5 pt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/20 text-[10px] font-bold uppercase tracking-widest",
                                        children: post.date
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                        lineNumber: 90,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-accent transition-all duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                        lineNumber: 91,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                lineNumber: 89,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                                lineNumber: 95,
                                columnNumber: 25
                            }, this)
                        ]
                    }, post.id, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                        lineNumber: 66,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
_c = LabNotes;
var _c;
__turbopack_context__.k.register(_c, "LabNotes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/anti proj/anti client1/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full bg-black text-white px-6 md:px-12 pt-32 pb-12 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/20 pb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6 w-full max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h4, {
                                className: "text-white/50 text-xl font-normal uppercase tracking-[0.2em] font-bebas",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6
                                },
                                children: "Have a project in mind?"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                                lineNumber: 11,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "relative group cursor-pointer inline-block",
                                initial: {
                                    opacity: 0,
                                    y: 50
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.2,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-6xl md:text-8xl lg:text-[10rem] font-normal font-bebas tracking-tighter uppercase leading-[0.8]",
                                        children: [
                                            "Let's Talk",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                className: "inline-block ml-4 transform -rotate-45",
                                                animate: {
                                                    rotate: [
                                                        -45,
                                                        0,
                                                        -45
                                                    ]
                                                },
                                                transition: {
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                },
                                                children: "->"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                                                lineNumber: 30,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                                        lineNumber: 28,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "200",
                                            height: "100",
                                            viewBox: "0 0 200 100",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-32 md:w-56 overflow-visible opacity-40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                                    d: "M20,60 C40,40 80,40 100,60 C120,80 160,80 180,60 M40,30 L160,90",
                                                    stroke: "var(--accent)",
                                                    strokeWidth: "4",
                                                    strokeLinecap: "round",
                                                    initial: {
                                                        pathLength: 0,
                                                        opacity: 0
                                                    },
                                                    whileInView: {
                                                        pathLength: 1,
                                                        opacity: 1
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        duration: 2,
                                                        ease: "easeInOut",
                                                        delay: 1
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                                    d: "M50,80 Q80,20 150,50",
                                                    stroke: "var(--accent)",
                                                    strokeWidth: "3",
                                                    strokeLinecap: "round",
                                                    initial: {
                                                        pathLength: 0,
                                                        opacity: 0
                                                    },
                                                    whileInView: {
                                                        pathLength: 1,
                                                        opacity: 1
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        duration: 1.5,
                                                        ease: "easeInOut",
                                                        delay: 2
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                                            lineNumber: 41,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                                        lineNumber: 40,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                                lineNumber: 21,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                        lineNumber: 10,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-end gap-2 mt-12 md:mt-0 text-white/50 font-normal font-sans",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-white transition-colors",
                                children: "x.com/palmer"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-white transition-colors",
                                children: "instagram.com/palmer"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-[1px] bg-white/10 my-2"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                                lineNumber: 70,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:hello@palmer.com",
                                className: "hover:text-white text-lg transition-colors underline underline-offset-4 mt-2",
                                children: "hello@palmer.com"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                                lineNumber: 71,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-white/40 uppercase tracking-wider font-normal font-bebas",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " Xzero® Studio. All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 md:mt-0",
                                children: "Made with ❤️ for Framer Clone"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Systems Online"
                            }, void 0, false, {
                                fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/Footer.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/anti proj/anti client1/src/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CustomCursor() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cursorX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    const cursorY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    // Use spring for smooth following
    const springConfig = {
        damping: 25,
        stiffness: 200,
        mass: 0.5
    };
    const cursorXSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(cursorX, springConfig);
    const cursorYSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(cursorY, springConfig);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const moveCursor = {
                "CustomCursor.useEffect.moveCursor": (e)=>{
                    cursorX.set(e.clientX - 16);
                    cursorY.set(e.clientY - 16);
                    if (!isVisible) setIsVisible(true);
                }
            }["CustomCursor.useEffect.moveCursor"];
            window.addEventListener('mousemove', moveCursor);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener('mousemove', moveCursor);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        cursorX,
        cursorY,
        isVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none mix-blend-difference z-[9999]",
        style: {
            x: cursorXSpring,
            y: cursorYSpring,
            opacity: isVisible ? 1 : 0
        }
    }, void 0, false, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/CustomCursor.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
_s(CustomCursor, "2iDHPlGuHv7a4ChkRgZfCpjBtuI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/anti proj/anti client1/src/components/Preloader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Preloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const words = [
    "Web Development",
    "Cyber Security",
    "UI/UX Design",
    "Cloud Solutions",
    "Digital Strategy"
];
function Preloader({ onComplete }) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Preloader.useEffect": ()=>{
            // Prevent scrolling while preloader is active
            document.body.style.overflow = "hidden";
            if (index === words.length - 1) {
                setTimeout({
                    "Preloader.useEffect": ()=>{
                        document.body.style.overflow = "auto";
                        onComplete();
                    }
                }["Preloader.useEffect"], 1200); // 1.2s delay before finishing
                return;
            }
            const timeout = setTimeout({
                "Preloader.useEffect.timeout": ()=>{
                    setIndex(index + 1);
                }
            }["Preloader.useEffect.timeout"], 500); // 500ms per word (was 400ms)
            return ({
                "Preloader.useEffect": ()=>clearTimeout(timeout)
            })["Preloader.useEffect"];
        }
    }["Preloader.useEffect"], [
        index,
        onComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black text-white",
        initial: {
            y: 0
        },
        exit: {
            y: "-100%",
            transition: {
                duration: 0.8,
                ease: [
                    0.76,
                    0,
                    0.24,
                    1
                ],
                delay: 0.2
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -50
                    },
                    transition: {
                        duration: 0.15,
                        ease: "easeInOut"
                    },
                    className: "text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-accent",
                    children: words[index]
                }, index, false, {
                    fileName: "[project]/Documents/anti proj/anti client1/src/components/Preloader.tsx",
                    lineNumber: 44,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/components/Preloader.tsx",
                lineNumber: 43,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/anti proj/anti client1/src/components/Preloader.tsx",
            lineNumber: 42,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/anti proj/anti client1/src/components/Preloader.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(Preloader, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c = Preloader;
var _c;
__turbopack_context__.k.register(_c, "Preloader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/anti proj/anti client1/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/src/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$Marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/src/components/Marquee.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$GiantText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/src/components/GiantText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$FeaturedWorks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/src/components/FeaturedWorks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$WhatWeDo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/src/components/WhatWeDo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$ProcessGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/src/components/ProcessGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$GoodWords$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/src/components/GoodWords.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$Awards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/src/components/Awards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$Pricing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/src/components/Pricing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$LabNotes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/src/components/LabNotes.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/src/components/CustomCursor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$Preloader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/anti proj/anti client1/src/components/Preloader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$Preloader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onComplete: ()=>setIsLoading(false)
                }, void 0, false, {
                    fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                    lineNumber: 28,
                    columnNumber: 23
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].main, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: isLoading ? 0 : 1
                },
                transition: {
                    duration: 0.8
                },
                className: "min-h-screen bg-black text-white selection:bg-accent selection:text-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$Marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        text: "Website Design  •  Branding  •  Digital Products  •  "
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$WhatWeDo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$ProcessGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$FeaturedWorks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$GoodWords$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$GiantText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        text: "+XZERO®"
                    }, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$Awards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$Pricing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$LabNotes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$anti__proj$2f$anti__client1$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/anti proj/anti client1/src/app/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "5S7VQ8+9ArWv2AFPIfnY+LwrHeg=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_anti%20proj_anti%20client1_src_c3dd19b4._.js.map