(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/vscode/ts/client/src/components/Layout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer,
    "Nav",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/src/components/UI.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const LOGO = ("TURBOPACK compile-time truthy", 1) ? window.LOGO_URI : "TURBOPACK unreachable";
function Nav({ onQuote }) {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mob, setMob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const f = {
                "Nav.useEffect.f": ()=>setScrolled(window.scrollY > 8)
            }["Nav.useEffect.f"];
            window.addEventListener("scroll", f);
            return ({
                "Nav.useEffect": ()=>window.removeEventListener("scroll", f)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            position: "sticky",
            top: 0,
            zIndex: 50,
            borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
            background: scrolled ? "rgba(10,12,11,0.90)" : "transparent",
            backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "none",
            transition: "all .25s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "20px 48px",
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    alignItems: "center",
                    gap: 40
                },
                className: "page-pad",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: LOGO,
                            alt: "212 Secure",
                            width: "52",
                            height: "52",
                            style: {
                                display: "block",
                                filter: "drop-shadow(0 6px 14px rgba(41,168,58,0.18))"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "desktop-nav",
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            gap: 4
                        },
                        children: [
                            "Services",
                            "Coverage",
                            "For business",
                            "About"
                        ].map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    padding: "10px 18px",
                                    fontSize: 14.5,
                                    color: "var(--fg-2)",
                                    borderRadius: 999,
                                    fontWeight: 450,
                                    cursor: "pointer"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = "var(--surface)";
                                    e.currentTarget.style.color = "var(--fg)";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.color = "var(--fg-2)";
                                },
                                children: l
                            }, i, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "desktop-nav",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/portal"),
                                style: {
                                    background: "transparent",
                                    border: "none",
                                    padding: "10px 16px",
                                    fontSize: 14.5,
                                    color: "var(--fg-2)",
                                    borderRadius: 999,
                                    fontWeight: 450,
                                    cursor: "pointer"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = "var(--surface)";
                                    e.currentTarget.style.color = "var(--fg)";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.color = "var(--fg-2)";
                                },
                                children: "Sign in"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "tel:02034880664",
                                style: {
                                    display: "inline-flex",
                                    textDecoration: "none",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: "10px 16px",
                                    borderRadius: 999,
                                    color: "var(--fg)",
                                    fontSize: 14.5,
                                    fontWeight: 500
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.background = "var(--surface)",
                                onMouseLeave: (e)=>e.currentTarget.style.background = "transparent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneIcon"], {}, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    "020 3488 0664"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Btn"], {
                                kind: "primary",
                                onClick: onQuote,
                                children: "Get a quote"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "mobile-nav-btn",
                        onClick: ()=>setMob(!mob),
                        style: {
                            display: "none",
                            flexDirection: "column",
                            gap: 5,
                            padding: 8,
                            borderRadius: 8,
                            background: "var(--surface)",
                            border: "1px solid var(--border)",
                            cursor: "pointer"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 18,
                                    height: 2,
                                    background: "var(--fg)",
                                    borderRadius: 99
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 18,
                                    height: 2,
                                    background: "var(--fg)",
                                    borderRadius: 99
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 18,
                                    height: 2,
                                    background: "var(--fg)",
                                    borderRadius: 99
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            mob && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "16px 20px",
                    background: "var(--bg-2)",
                    borderBottom: "1px solid var(--border)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4
                },
                children: [
                    [
                        "Services",
                        "Coverage",
                        "For business",
                        "About"
                    ].map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                padding: "12px 16px",
                                borderRadius: 8,
                                color: "var(--fg-2)",
                                fontSize: 15,
                                cursor: "pointer"
                            },
                            children: l
                        }, i, false, {
                            fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/portal"),
                        style: {
                            background: "transparent",
                            border: "none",
                            padding: "12px 16px",
                            borderRadius: 8,
                            color: "var(--fg-2)",
                            fontSize: 15,
                            textAlign: "left",
                            cursor: "pointer"
                        },
                        children: "Sign in"
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "tel:02034880664",
                        style: {
                            padding: "12px 16px",
                            borderRadius: 8,
                            textDecoration: "none",
                            color: "var(--accent-2)",
                            fontSize: 15,
                            display: "flex",
                            gap: 8,
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneIcon"], {}, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this),
                            "020 3488 0664"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                lineNumber: 179,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(Nav, "kKjwJZA2IHCViDvdZxdTTfoXNsM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Nav;
function Footer() {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            padding: "80px 48px 40px",
            background: "var(--bg-2)"
        },
        className: "page-pad",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "footer-grid",
                style: {
                    display: "grid",
                    gridTemplateColumns: "1.4fr repeat(4,1fr)",
                    gap: 48,
                    paddingBottom: 64,
                    borderBottom: "1px solid var(--border)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: LOGO,
                                alt: "212 Secure Services",
                                width: "56",
                                height: "56",
                                style: {
                                    display: "block",
                                    marginBottom: 20
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 17,
                                    lineHeight: 1.4,
                                    fontWeight: 500,
                                    letterSpacing: -0.3,
                                    marginBottom: 6
                                },
                                children: "212 Secure Services"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mono",
                                style: {
                                    fontSize: 11,
                                    color: "var(--muted)",
                                    letterSpacing: 0.6,
                                    textTransform: "uppercase",
                                    marginBottom: 24
                                },
                                children: "Couriers · Locksmiths · London"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 13,
                                    color: "var(--fg-2)",
                                    lineHeight: 1.7
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:02034880664",
                                        style: {
                                            color: "var(--accent-2)",
                                            textDecoration: "none",
                                            borderBottom: "1px dashed currentColor"
                                        },
                                        className: "mono",
                                        children: "020 3488 0664"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mono",
                                        children: "info@212secure.co.uk"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    [
                        {
                            h: "Courier",
                            links: [
                                "Same-day London",
                                "UK-wide overnight",
                                "Legal & probate",
                                "Medical specimens",
                                "Time-critical",
                                "International"
                            ]
                        },
                        {
                            h: "Locksmith",
                            links: [
                                "Emergency entry",
                                "Lock change",
                                "Burglary repair",
                                "UPVC specialist",
                                "Safe opening",
                                "Auto locksmith"
                            ]
                        },
                        {
                            h: "For business",
                            links: [
                                "Account opening",
                                "Master-key registers",
                                "Audit logs",
                                "Monthly invoicing",
                                "Contact ops"
                            ]
                        },
                        {
                            h: "Company",
                            links: [
                                "About",
                                "Coverage",
                                "Contact",
                                "Sign in",
                                "Admin"
                            ]
                        }
                    ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mono",
                                    style: {
                                        fontSize: 11,
                                        color: "var(--muted)",
                                        letterSpacing: 1,
                                        textTransform: "uppercase",
                                        marginBottom: 16
                                    },
                                    children: c.h
                                }, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 10
                                    },
                                    children: c.links.map((l, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                if (l === "Sign in") router.push("/portal");
                                                else if (l === "Admin") router.push("/admin/login");
                                            },
                                            style: {
                                                background: "transparent",
                                                border: "none",
                                                cursor: "pointer",
                                                padding: 0,
                                                fontSize: 13.5,
                                                color: "var(--fg-2)",
                                                textAlign: "left"
                                            },
                                            children: l
                                        }, j, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                            lineNumber: 357,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                    lineNumber: 355,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 32,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 11.5,
                    color: "var(--muted)",
                    flexWrap: "wrap",
                    gap: 12
                },
                className: "mono",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "© 2026 212 Secure Services Ltd · Registered in England & Wales"
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 18
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    cursor: "pointer"
                                },
                                children: "Privacy"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    cursor: "pointer"
                                },
                                children: "Terms"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                lineNumber: 398,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    cursor: "pointer"
                                },
                                children: "Cookies"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                        lineNumber: 396,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
                lineNumber: 380,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/vscode/ts/client/src/components/Layout.jsx",
        lineNumber: 243,
        columnNumber: 5
    }, this);
}
_s1(Footer, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = Footer;
var _c, _c1;
__turbopack_context__.k.register(_c, "Nav");
__turbopack_context__.k.register(_c1, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection,
    "DispatchConsole",
    ()=>DispatchConsole,
    "FaqSection",
    ()=>FaqSection,
    "PaymentSection",
    ()=>PaymentSection,
    "PricingSection",
    ()=>PricingSection,
    "PrivacySection",
    ()=>PrivacySection,
    "SectionHead",
    ()=>SectionHead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/src/components/UI.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
function DispatchConsole() {
    _s();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DispatchConsole.useEffect": ()=>{
            const t = setInterval({
                "DispatchConsole.useEffect.t": ()=>setNow(new Date())
            }["DispatchConsole.useEffect.t"], 1000);
            return ({
                "DispatchConsole.useEffect": ()=>clearInterval(t)
            })["DispatchConsole.useEffect"];
        }
    }["DispatchConsole.useEffect"], []);
    const hh = String(now.getHours()).padStart(2, "0"), mm = String(now.getMinutes()).padStart(2, "0"), ss = String(now.getSeconds()).padStart(2, "0");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "dispatch-console",
        style: {
            background: "linear-gradient(180deg,var(--surface) 0%,var(--bg-2) 100%)",
            border: "1px solid var(--border-2)",
            borderRadius: 14,
            boxShadow: "0 32px 80px -32px rgba(0,0,0,0.8),inset 0 1px 0 rgba(255,255,255,0.04)",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    borderBottom: "1px solid var(--border)",
                    background: "var(--bg-2)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 5
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 9,
                                    height: 9,
                                    borderRadius: 99,
                                    background: "#ff5f57"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 9,
                                    height: 9,
                                    borderRadius: 99,
                                    background: "#febc2e"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 9,
                                    height: 9,
                                    borderRadius: 99,
                                    background: "#28c840"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mono",
                        style: {
                            fontSize: 10.5,
                            color: "var(--muted)",
                            letterSpacing: 0.6,
                            textTransform: "uppercase"
                        },
                        children: "preview"
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 22
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mono",
                                style: {
                                    fontSize: 11,
                                    color: "var(--muted)",
                                    letterSpacing: 0.8,
                                    textTransform: "uppercase"
                                },
                                children: "Tracking link · sent by SMS"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mono",
                                style: {
                                    fontSize: 11,
                                    padding: "3px 9px",
                                    borderRadius: 99,
                                    background: "rgba(74,208,92,0.12)",
                                    color: "var(--accent-2)",
                                    letterSpacing: 0.6
                                },
                                children: "● ON THE WAY"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 22,
                            fontWeight: 500,
                            letterSpacing: -0.5,
                            marginBottom: 2
                        },
                        children: "Locksmith — emergency entry"
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 14,
                            color: "var(--fg-2)",
                            marginBottom: 22
                        },
                        children: [
                            "Camden, NW1 · ETA in",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "var(--accent-2)",
                                    fontWeight: 500
                                },
                                children: "11 minutes"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            display: "grid",
                            gridTemplateColumns: "repeat(4,1fr)",
                            marginBottom: 26
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 11,
                                    left: "12.5%",
                                    right: "12.5%",
                                    height: 2,
                                    background: "var(--border)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 11,
                                    left: "12.5%",
                                    width: "37.5%",
                                    height: 2,
                                    background: "var(--accent)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            [
                                {
                                    l: "Booked",
                                    t: "12:31",
                                    on: true
                                },
                                {
                                    l: "Dispatched",
                                    t: "12:33",
                                    on: true
                                },
                                {
                                    l: "On the way",
                                    t: "now",
                                    on: "active"
                                },
                                {
                                    l: "On site",
                                    t: "~12:44",
                                    on: false
                                }
                            ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative",
                                        textAlign: "center",
                                        zIndex: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: 24,
                                                height: 24,
                                                borderRadius: 99,
                                                background: s.on ? "var(--accent)" : "var(--surface-2)",
                                                border: `2px solid ${s.on === "active" ? "var(--accent-2)" : s.on ? "var(--accent)" : "var(--border-2)"}`,
                                                boxShadow: s.on === "active" ? "0 0 0 6px var(--accent-soft)" : "none"
                                            },
                                            children: s.on === true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "12",
                                                height: "12",
                                                fill: "none",
                                                stroke: "white",
                                                strokeWidth: "3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 12l5 5L20 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 12.5,
                                                color: s.on ? "var(--fg)" : "var(--muted)",
                                                marginTop: 8,
                                                fontWeight: s.on === "active" ? 500 : 400
                                            },
                                            children: s.l
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mono",
                                            style: {
                                                fontSize: 10.5,
                                                color: "var(--muted)",
                                                marginTop: 2
                                            },
                                            children: s.t
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: 14,
                            background: "var(--surface-2)",
                            borderRadius: 10,
                            border: "1px solid var(--border)",
                            display: "grid",
                            gridTemplateColumns: "44px 1fr auto",
                            gap: 14,
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 44,
                                    height: 44,
                                    borderRadius: 99,
                                    background: "linear-gradient(135deg,var(--accent),var(--accent-2))",
                                    display: "grid",
                                    placeItems: "center",
                                    color: "white",
                                    fontWeight: 600
                                },
                                children: "MV"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 14,
                                            fontWeight: 500
                                        },
                                        children: "Your operator — Marek"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mono",
                                        style: {
                                            fontSize: 11,
                                            color: "var(--muted)",
                                            marginTop: 2,
                                            letterSpacing: 0.4
                                        },
                                        children: "DBS-checked · MLA · van LR23 KXP"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "tel:02034880664",
                                style: {
                                    width: 36,
                                    height: 36,
                                    borderRadius: 99,
                                    background: "var(--surface)",
                                    border: "1px solid var(--border-2)",
                                    color: "var(--fg-2)",
                                    display: "grid",
                                    placeItems: "center"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneIcon"], {}, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: 18,
                            paddingTop: 14,
                            borderTop: "1px solid var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mono",
                                style: {
                                    fontSize: 11,
                                    color: "var(--muted)",
                                    letterSpacing: 0.5
                                },
                                children: "BOOKING REF · 212-LK-1102"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mono",
                                style: {
                                    fontSize: 11,
                                    color: "var(--fg-2)"
                                },
                                children: [
                                    hh,
                                    ":",
                                    mm,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            opacity: 0.4
                                        },
                                        children: [
                                            ":",
                                            ss
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(DispatchConsole, "g/j/hExdUqb2z5Mxov8EvI3Aj00=");
_c = DispatchConsole;
function SectionHead({ kicker, title, body }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-head-grid",
        style: {
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 64,
            alignItems: "end"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mono",
                        style: {
                            fontSize: 11,
                            color: "var(--accent-2)",
                            letterSpacing: 1.4,
                            textTransform: "uppercase",
                            marginBottom: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-block",
                                    width: 24,
                                    height: 1,
                                    background: "var(--accent)",
                                    verticalAlign: "middle",
                                    marginRight: 10
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this),
                            kicker
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            margin: 0,
                            fontSize: 64,
                            lineHeight: 0.96,
                            letterSpacing: -2,
                            fontWeight: 600
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    margin: 0,
                    fontSize: 17,
                    lineHeight: 1.55,
                    color: "var(--fg-2)",
                    maxWidth: 560
                },
                children: body
            }, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                lineNumber: 358,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
        lineNumber: 313,
        columnNumber: 5
    }, this);
}
_c1 = SectionHead;
function FaqSection() {
    _s1();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const faqs = [
        {
            q: "How quickly can you get a locksmith to me?",
            a: "Our average response time across London zones 1–4 is under 35 minutes. Zones 5–6 can take up to 60 minutes. We'll give you an accurate ETA on the call before you commit."
        },
        {
            q: "What areas do you cover for courier deliveries?",
            a: "We cover all six London zones and can run to any address in England and Wales for same-day or next-day delivery. Call us for exact pricing outside the M25."
        },
        {
            q: "Is there a call-out fee for the locksmith?",
            a: "No. We quote a single fixed price on the phone that covers everything — labour, parts, and VAT. That's the number you pay. Nothing more."
        },
        {
            q: "Can I track my courier delivery in real time?",
            a: "Yes. The moment your driver sets off, you receive an SMS with a live GPS tracking link. You can share that link with whoever is receiving the delivery."
        },
        {
            q: "Do you work with businesses and law firms?",
            a: "Absolutely. We have business accounts with monthly billing, a dedicated account manager, and volume pricing. Legal firms, estate agents, and healthcare providers are among our regulars."
        },
        {
            q: "Are your operators DBS checked and insured?",
            a: "Every operator on our books has passed a DBS enhanced check, holds public liability insurance, and carries our ID cards. We can provide documentation on request for regulated clients."
        },
        {
            q: "Can I pay by card or invoice?",
            a: "Private customers pay by card via our secure Stripe payment link. Business accounts receive a monthly invoice with 30-day terms. We accept all major cards."
        },
        {
            q: "What if the locksmith can't open my door without damage?",
            a: "We always try non-destructive entry first. If drilling is the only option, we'll explain that before starting and factor a replacement lock into the fixed quote."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        style: {
            padding: "120px 48px",
            borderBottom: "1px solid var(--border)"
        },
        className: "page-pad",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 720,
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mono",
                    style: {
                        fontSize: 11,
                        color: "var(--accent-2)",
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        marginBottom: 12,
                        textAlign: "center"
                    },
                    children: "FAQ"
                }, void 0, false, {
                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                    lineNumber: 420,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: 48,
                        fontWeight: 600,
                        letterSpacing: -1.2,
                        marginBottom: 48,
                        textAlign: "center",
                        lineHeight: 1.05
                    },
                    children: "Common questions"
                }, void 0, false, {
                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                    lineNumber: 433,
                    columnNumber: 9
                }, this),
                faqs.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderBottom: "1px solid var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpen(open === i ? null : i),
                                style: {
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "20px 0",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    textAlign: "left"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 16,
                                            fontWeight: 500,
                                            color: "var(--fg)",
                                            paddingRight: 24,
                                            lineHeight: 1.4
                                        },
                                        children: f.q
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "var(--accent-2)",
                                            fontSize: 22,
                                            flexShrink: 0,
                                            transition: "transform .2s ease",
                                            transform: open === i ? "rotate(45deg)" : "rotate(0)"
                                        },
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                        lineNumber: 475,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 450,
                                columnNumber: 13
                            }, this),
                            open === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingBottom: 20,
                                    animation: "slideUp .2s ease"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 15,
                                        color: "var(--fg-2)",
                                        lineHeight: 1.65
                                    },
                                    children: f.a
                                }, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                    lineNumber: 494,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 488,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 446,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
            lineNumber: 419,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
        lineNumber: 411,
        columnNumber: 5
    }, this);
}
_s1(FaqSection, "3gHT60S3lHEhyYybFcB05ha95j4=");
_c2 = FaqSection;
function ContactSection() {
    _s2();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        msg: ""
    });
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const set = (k)=>(e)=>setForm((p)=>({
                    ...p,
                    [k]: e.target.value
                }));
    const send = async ()=>{
        setSending(true);
        await new Promise((r)=>setTimeout(r, 1000));
        setSending(false);
        setForm({
            name: "",
            email: "",
            phone: "",
            msg: ""
        });
        setToast("We got your message — someone from our team will be in touch within 2 hours.");
    };
    const inp = {
        width: "100%",
        padding: "12px 14px",
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        color: "var(--fg)",
        fontSize: 14,
        marginBottom: 16,
        display: "block"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        style: {
            padding: "120px 48px",
            borderBottom: "1px solid var(--border)"
        },
        className: "page-pad",
        children: [
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                msg: toast,
                onClose: ()=>setToast(null)
            }, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                lineNumber: 552,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 64,
                    alignItems: "start"
                },
                className: "section-head-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mono",
                                style: {
                                    fontSize: 11,
                                    color: "var(--accent-2)",
                                    letterSpacing: 1,
                                    textTransform: "uppercase",
                                    marginBottom: 16
                                },
                                children: "Get in touch"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 563,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 52,
                                    fontWeight: 600,
                                    letterSpacing: -1.5,
                                    lineHeight: 1,
                                    marginBottom: 20
                                },
                                children: [
                                    "Not sure what",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                        lineNumber: 585,
                                        columnNumber: 13
                                    }, this),
                                    "you need?"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 575,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 17,
                                    color: "var(--fg-2)",
                                    lineHeight: 1.6,
                                    marginBottom: 32
                                },
                                children: "Drop us a message and our operations team will call you back within 2 hours during business hours, or first thing next morning."
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 588,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 12
                                },
                                children: [
                                    {
                                        icon: "📞",
                                        label: "Phone (24/7)",
                                        val: "020 3488 0664",
                                        href: "tel:02034880664"
                                    },
                                    {
                                        icon: "✉️",
                                        label: "Email",
                                        val: "dispatch@212secureservices.co.uk",
                                        href: "mailto:dispatch@212secureservices.co.uk"
                                    },
                                    {
                                        icon: "💬",
                                        label: "WhatsApp",
                                        val: "Chat with us now",
                                        href: "https://wa.me/442034880664"
                                    }
                                ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: c.href,
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 14,
                                            padding: "14px 18px",
                                            background: "var(--surface)",
                                            border: "1px solid var(--border)",
                                            borderRadius: 12,
                                            transition: "border-color .15s ease"
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.borderColor = "var(--border-2)",
                                        onMouseLeave: (e)=>e.currentTarget.style.borderColor = "var(--border)",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 20
                                                },
                                                children: c.icon
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                                lineNumber: 643,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mono",
                                                        style: {
                                                            fontSize: 10.5,
                                                            color: "var(--muted)",
                                                            letterSpacing: 0.8,
                                                            textTransform: "uppercase",
                                                            marginBottom: 2
                                                        },
                                                        children: c.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                                        lineNumber: 645,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 14,
                                                            fontWeight: 500
                                                        },
                                                        children: c.val
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                                        lineNumber: 657,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                                lineNumber: 644,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                        lineNumber: 623,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 600,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "var(--surface)",
                            border: "1px solid var(--border)",
                            borderRadius: 16,
                            padding: 32
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 600,
                                    fontSize: 18,
                                    marginBottom: 20
                                },
                                children: "Send us a message"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 673,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    fontSize: 12,
                                    color: "var(--fg-2)",
                                    marginBottom: 4,
                                    display: "block",
                                    fontFamily: "monospace"
                                },
                                children: "Your name"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 678,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inp,
                                value: form.name,
                                onChange: set("name"),
                                placeholder: "Full name"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 689,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    fontSize: 12,
                                    color: "var(--fg-2)",
                                    marginBottom: 4,
                                    display: "block",
                                    fontFamily: "monospace"
                                },
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 695,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inp,
                                value: form.email,
                                onChange: set("email"),
                                placeholder: "you@example.com",
                                type: "email"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 706,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    fontSize: 12,
                                    color: "var(--fg-2)",
                                    marginBottom: 4,
                                    display: "block",
                                    fontFamily: "monospace"
                                },
                                children: "Phone"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 713,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inp,
                                value: form.phone,
                                onChange: set("phone"),
                                placeholder: "07700 900000",
                                type: "tel"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 724,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    fontSize: 12,
                                    color: "var(--fg-2)",
                                    marginBottom: 4,
                                    display: "block",
                                    fontFamily: "monospace"
                                },
                                children: "Message"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 731,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                style: {
                                    ...inp,
                                    minHeight: 100,
                                    resize: "vertical"
                                },
                                value: form.msg,
                                onChange: set("msg"),
                                placeholder: "Tell us what you need..."
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 742,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: send,
                                disabled: sending || !form.name || !form.email || !form.msg,
                                style: {
                                    width: "100%",
                                    padding: "14px",
                                    background: "var(--accent)",
                                    color: "white",
                                    borderRadius: 999,
                                    fontWeight: 600,
                                    fontSize: 15,
                                    cursor: "pointer",
                                    border: "none",
                                    opacity: sending || !form.name || !form.email || !form.msg ? 0.5 : 1
                                },
                                children: sending ? "Sending..." : "Send message →"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 748,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 11,
                                    color: "var(--muted)",
                                    textAlign: "center",
                                    marginTop: 12
                                },
                                children: "We reply within 2 hours during business hours."
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 769,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 665,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                lineNumber: 553,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
        lineNumber: 544,
        columnNumber: 5
    }, this);
}
_s2(ContactSection, "1uOOGhk4bWaWYVQ+H4E+44yfoB0=");
_c3 = ContactSection;
function PaymentSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "pay",
        style: {
            padding: "80px 48px",
            borderBottom: "1px solid var(--border)",
            background: "var(--bg-2)"
        },
        className: "page-pad",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 540,
                margin: "0 auto",
                textAlign: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mono",
                    style: {
                        fontSize: 11,
                        color: "var(--accent-2)",
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        marginBottom: 12
                    },
                    children: "Pay your invoice"
                }, void 0, false, {
                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                    lineNumber: 799,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: 36,
                        fontWeight: 600,
                        letterSpacing: -0.8,
                        marginBottom: 12
                    },
                    children: "Secure online payment"
                }, void 0, false, {
                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                    lineNumber: 811,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 15,
                        color: "var(--fg-2)",
                        lineHeight: 1.6,
                        marginBottom: 32
                    },
                    children: "Pay your invoice online using our secure Stripe payment link. All major cards accepted. Receipt sent instantly."
                }, void 0, false, {
                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                    lineNumber: 821,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: 16,
                        padding: 32,
                        marginBottom: 20
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: 8,
                                justifyContent: "center",
                                marginBottom: 20,
                                flexWrap: "wrap"
                            },
                            children: [
                                "VISA",
                                "MC",
                                "AMEX",
                                "GOOGLE PAY",
                                "APPLE PAY"
                            ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "5px 9px",
                                        background: "var(--surface-2)",
                                        border: "1px solid var(--border)",
                                        borderRadius: 5,
                                        fontSize: 10,
                                        fontWeight: 700,
                                        color: "var(--fg-2)",
                                        letterSpacing: 0.5
                                    },
                                    children: c
                                }, i, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                    lineNumber: 852,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                            lineNumber: 841,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                textDecoration: "none"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    width: "100%",
                                    padding: "16px",
                                    background: "var(--accent)",
                                    color: "white",
                                    borderRadius: 999,
                                    fontWeight: 700,
                                    fontSize: 16,
                                    cursor: "pointer",
                                    border: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "1",
                                                y: "4",
                                                width: "22",
                                                height: "16",
                                                rx: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                                lineNumber: 901,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "1",
                                                y1: "10",
                                                x2: "23",
                                                y2: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                                lineNumber: 902,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                        lineNumber: 893,
                                        columnNumber: 15
                                    }, this),
                                    "Pay invoice securely →"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 876,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                            lineNumber: 870,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 6,
                                marginTop: 12
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "12",
                                    height: "12",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "var(--muted)",
                                    strokeWidth: "2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "3",
                                            y: "11",
                                            width: "18",
                                            height: "11",
                                            rx: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                            lineNumber: 924,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M7 11V7a5 5 0 0 1 10 0v4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                            lineNumber: 925,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                    lineNumber: 916,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 11,
                                        color: "var(--muted)"
                                    },
                                    children: "Powered by Stripe · 256-bit SSL · PCI DSS compliant"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                    lineNumber: 927,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                            lineNumber: 907,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                    lineNumber: 832,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 13,
                        color: "var(--muted)"
                    },
                    children: [
                        "Questions about your invoice? Call",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "tel:02034880664",
                            style: {
                                color: "var(--fg-2)"
                            },
                            children: "020 3488 0664"
                        }, void 0, false, {
                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                            lineNumber: 934,
                            columnNumber: 11
                        }, this),
                        " ",
                        "or email",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "mailto:accounts@212secureservices.co.uk",
                            style: {
                                color: "var(--fg-2)"
                            },
                            children: "accounts@212secureservices.co.uk"
                        }, void 0, false, {
                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                            lineNumber: 938,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                    lineNumber: 932,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
            lineNumber: 796,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
        lineNumber: 787,
        columnNumber: 5
    }, this);
}
_c4 = PaymentSection;
function PrivacySection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "privacy",
        style: {
            padding: "80px 48px",
            borderBottom: "1px solid var(--border)"
        },
        className: "page-pad",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 720,
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mono",
                    style: {
                        fontSize: 11,
                        color: "var(--muted)",
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        marginBottom: 12
                    },
                    children: "Legal"
                }, void 0, false, {
                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                    lineNumber: 961,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: 36,
                        fontWeight: 600,
                        letterSpacing: -0.8,
                        marginBottom: 32
                    },
                    children: "Privacy Policy"
                }, void 0, false, {
                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                    lineNumber: 973,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: 14,
                        color: "var(--fg-2)",
                        lineHeight: 1.7,
                        display: "flex",
                        flexDirection: "column",
                        gap: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "var(--fg)"
                                    },
                                    children: "212 Secure Services Ltd"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                    lineNumber: 994,
                                    columnNumber: 13
                                }, this),
                                " ",
                                "is committed to protecting your personal data in compliance with the UK GDPR and Data Protection Act 2018."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                            lineNumber: 993,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "var(--fg)"
                                    },
                                    children: "Data we collect:"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                    lineNumber: 1001,
                                    columnNumber: 13
                                }, this),
                                " ",
                                "Name, phone number, email address, delivery/service address, and job details you provide when requesting a quote or booking. Analytics data (pages visited, time on site) if you consent to non-essential cookies."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                            lineNumber: 1000,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "var(--fg)"
                                    },
                                    children: "How we use it:"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                    lineNumber: 1010,
                                    columnNumber: 13
                                }, this),
                                " ",
                                "To fulfil your service request, send job confirmations, and improve our service. We do not sell your data to third parties."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                            lineNumber: 1009,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "var(--fg)"
                                    },
                                    children: "Retention:"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                    lineNumber: 1016,
                                    columnNumber: 13
                                }, this),
                                " Job records are kept for 7 years for accounting purposes. Contact enquiries are deleted after 2 years if no ongoing relationship."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                            lineNumber: 1015,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "var(--fg)"
                                    },
                                    children: "Payments:"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                    lineNumber: 1022,
                                    columnNumber: 13
                                }, this),
                                " ",
                                "Payment processing is handled entirely by Stripe. We do not store card details. Stripe's privacy policy applies to payment data."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                            lineNumber: 1021,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "var(--fg)"
                                    },
                                    children: "Your rights:"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                    lineNumber: 1028,
                                    columnNumber: 13
                                }, this),
                                " ",
                                "You have the right to access, correct, or delete your data. Email",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:privacy@212secureservices.co.uk",
                                    style: {
                                        color: "var(--accent-2)"
                                    },
                                    children: "privacy@212secureservices.co.uk"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                    lineNumber: 1031,
                                    columnNumber: 13
                                }, this),
                                " ",
                                "to exercise these rights. You can also lodge a complaint with the ICO at ico.org.uk."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                            lineNumber: 1027,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "var(--fg)"
                                    },
                                    children: "Cookies:"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                    lineNumber: 1041,
                                    columnNumber: 13
                                }, this),
                                " We use essential cookies (session management) and, with your consent, analytics cookies. Withdraw consent anytime by clearing cookies in your browser settings."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                            lineNumber: 1040,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 12,
                                color: "var(--muted)"
                            },
                            children: "Last updated: May 2026"
                        }, void 0, false, {
                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                            lineNumber: 1046,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                    lineNumber: 983,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
            lineNumber: 960,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
        lineNumber: 952,
        columnNumber: 5
    }, this);
}
_c5 = PrivacySection;
function PricingSection({ onQuote }) {
    const plans = [
        {
            name: "Express Courier",
            price: "from £35",
            unit: "per job",
            tag: "Most popular",
            features: [
                "Same-day London delivery",
                "Sealed tamper-evident bag",
                "Live GPS tracking link",
                "Signature on delivery",
                "30-min pickup window"
            ],
            cta: "Get a quote",
            accent: false
        },
        {
            name: "Emergency Locksmith",
            price: "from £65",
            unit: "call-out",
            tag: "24/7 available",
            features: [
                "On the road within minutes",
                "Non-destructive entry first",
                "Fixed price on the phone",
                "British Standard locks stocked",
                "No surge pricing, ever"
            ],
            cta: "Call now",
            accent: true,
            href: "tel:02034880664"
        },
        {
            name: "Business Account",
            price: "Custom",
            unit: "monthly",
            tag: "Best for teams",
            features: [
                "Dedicated account manager",
                "Monthly consolidated billing",
                "Priority dispatch queue",
                "API & webhook integration",
                "Volume discounts from job 1"
            ],
            cta: "Talk to sales",
            accent: false
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "pricing",
        style: {
            padding: "120px 48px",
            borderBottom: "1px solid var(--border)",
            background: "var(--bg-2)"
        },
        className: "page-pad",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginBottom: 64
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mono",
                        style: {
                            fontSize: 11,
                            color: "var(--accent-2)",
                            letterSpacing: 1,
                            textTransform: "uppercase",
                            marginBottom: 12
                        },
                        children: "Transparent pricing"
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 1115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: 52,
                            fontWeight: 600,
                            letterSpacing: -1.5,
                            lineHeight: 1
                        },
                        children: "No surprises. Ever."
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 1127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginTop: 12,
                            fontSize: 17,
                            color: "var(--fg-2)",
                            maxWidth: 480,
                            margin: "12px auto 0"
                        },
                        children: "Every job is quoted before we move. The price we say is the price you pay."
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 1137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                lineNumber: 1114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: 20
                },
                className: "steps-grid",
                children: plans.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: p.accent ? "linear-gradient(180deg,var(--urgent-soft),var(--surface))" : "var(--surface)",
                            border: `1px solid ${p.accent ? "rgba(230,63,66,0.25)" : "var(--border)"}`,
                            borderRadius: 16,
                            padding: 32,
                            display: "flex",
                            flexDirection: "column",
                            gap: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mono",
                                        style: {
                                            fontSize: 11,
                                            color: p.accent ? "var(--urgent-2)" : "var(--accent-2)",
                                            letterSpacing: 0.8,
                                            textTransform: "uppercase",
                                            display: "block",
                                            marginBottom: 12
                                        },
                                        children: p.tag
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                        lineNumber: 1174,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 600,
                                            fontSize: 22,
                                            marginBottom: 4
                                        },
                                        children: p.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                        lineNumber: 1187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 36,
                                            fontWeight: 700,
                                            letterSpacing: -1
                                        },
                                        children: p.price
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                        lineNumber: 1192,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mono",
                                        style: {
                                            fontSize: 11,
                                            color: "var(--muted)",
                                            letterSpacing: 0.5
                                        },
                                        children: p.unit
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                        lineNumber: 1201,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 1173,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1
                                },
                                children: p.features.map((f, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 10,
                                            padding: "8px 0",
                                            borderTop: "1px solid var(--border)",
                                            alignItems: "flex-start"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: p.accent ? "var(--urgent-2)" : "var(--accent-2)",
                                                    fontSize: 14,
                                                    marginTop: 1
                                                },
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                                lineNumber: 1224,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 13.5,
                                                    color: "var(--fg-2)",
                                                    lineHeight: 1.4
                                                },
                                                children: f
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                                lineNumber: 1235,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, j, true, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                        lineNumber: 1214,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 1212,
                                columnNumber: 13
                            }, this),
                            p.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: p.href,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: {
                                        width: "100%",
                                        padding: "13px",
                                        background: "var(--urgent)",
                                        color: "white",
                                        borderRadius: 999,
                                        fontWeight: 600,
                                        fontSize: 14,
                                        cursor: "pointer",
                                        border: "none"
                                    },
                                    children: p.cta
                                }, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                    lineNumber: 1249,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 1248,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onQuote,
                                style: {
                                    width: "100%",
                                    padding: "13px",
                                    background: p.accent ? "var(--urgent)" : "var(--accent)",
                                    color: "white",
                                    borderRadius: 999,
                                    fontWeight: 600,
                                    fontSize: 14,
                                    cursor: "pointer",
                                    border: "none"
                                },
                                children: p.cta
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                                lineNumber: 1266,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                        lineNumber: 1159,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                lineNumber: 1150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    textAlign: "center",
                    marginTop: 28,
                    fontSize: 13,
                    color: "var(--muted)"
                },
                children: "All prices exclude VAT where applicable. Congestion zone surcharges may apply. Ask when quoting."
            }, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
                lineNumber: 1288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx",
        lineNumber: 1105,
        columnNumber: 5
    }, this);
}
_c6 = PricingSection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "DispatchConsole");
__turbopack_context__.k.register(_c1, "SectionHead");
__turbopack_context__.k.register(_c2, "FaqSection");
__turbopack_context__.k.register(_c3, "ContactSection");
__turbopack_context__.k.register(_c4, "PaymentSection");
__turbopack_context__.k.register(_c5, "PrivacySection");
__turbopack_context__.k.register(_c6, "PricingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$Layout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/src/components/Layout.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/src/components/UI.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$views$2f$Home$2f$Sections$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/src/views/Home/Sections.jsx [app-client] (ecmascript)");
;
;
;
;
function Home({ onQuote }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$Layout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Nav"], {
                onQuote: onQuote
            }, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "120px 48px 80px",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    minHeight: "85vh"
                },
                className: "page-pad",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            background: "var(--bg)",
                            backgroundImage: "radial-gradient(ellipse at 80% 20%, rgba(74,208,92,0.08) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(74,222,128,0.06) 0%, transparent 50%)",
                            zIndex: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: -160,
                            right: -120,
                            width: 600,
                            height: 600,
                            borderRadius: "50%",
                            background: "radial-gradient(circle,var(--accent-glow) 0%,transparent 60%)",
                            filter: "blur(40px)",
                            opacity: 0.6
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            zIndex: 1,
                            maxWidth: 1140,
                            margin: "0 auto",
                            width: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr 440px",
                            gap: 80,
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 32,
                                            display: "flex",
                                            gap: 12
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pill"], {
                                                tone: "live",
                                                dot: "pulse",
                                                children: "Operations running"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                lineNumber: 17,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pill"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--fg)"
                                                        },
                                                        children: "42"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                        lineNumber: 18,
                                                        columnNumber: 21
                                                    }, this),
                                                    " vehicles active"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                lineNumber: 18,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                        lineNumber: 16,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontSize: 72,
                                            lineHeight: 1.05,
                                            letterSpacing: -2,
                                            fontWeight: 500,
                                            margin: "0 0 24px"
                                        },
                                        children: [
                                            "Secure logistics &",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                lineNumber: 21,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "var(--fg-2)"
                                                },
                                                children: "rapid response locks."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                lineNumber: 22,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 22,
                                            color: "var(--fg-2)",
                                            lineHeight: 1.4,
                                            margin: "0 0 40px",
                                            maxWidth: 560
                                        },
                                        children: "London's only agency combining verified couriers with MLA-approved emergency locksmiths. Account or ad-hoc."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 16
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Btn"], {
                                                kind: "primary",
                                                big: true,
                                                sub: "60-second form",
                                                onClick: onQuote,
                                                children: "Request a quote →"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                lineNumber: 28,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Btn"], {
                                                kind: "soft",
                                                big: true,
                                                sub: "Setup in 2 mins",
                                                children: "Open account"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                lineNumber: 29,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$views$2f$Home$2f$Sections$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DispatchConsole"], {}, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "120px 48px",
                    background: "var(--surface)"
                },
                className: "page-pad",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1140,
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: 40,
                                fontWeight: 500,
                                letterSpacing: -1,
                                margin: "0 0 64px"
                            },
                            children: "Two divisions. One standard."
                        }, void 0, false, {
                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                            lineNumber: 40,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: 32
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "var(--surface-2)",
                                        border: "1px solid var(--border)",
                                        borderRadius: 24,
                                        padding: 48
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 56,
                                                height: 56,
                                                borderRadius: 12,
                                                background: "var(--accent-soft)",
                                                color: "var(--accent-2)",
                                                display: "grid",
                                                placeItems: "center",
                                                marginBottom: 32
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "28",
                                                height: "28",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "1",
                                                        y: "3",
                                                        width: "15",
                                                        height: "13",
                                                        rx: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                        lineNumber: 45,
                                                        columnNumber: 116
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 8h4l3 3v5h-7M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm13 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                        lineNumber: 45,
                                                        columnNumber: 165
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                lineNumber: 45,
                                                columnNumber: 18
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                            lineNumber: 44,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: 28,
                                                fontWeight: 500,
                                                marginBottom: 16
                                            },
                                            children: "Secure Courier"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                            lineNumber: 47,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 16,
                                                color: "var(--fg-2)",
                                                lineHeight: 1.5,
                                                marginBottom: 32
                                            },
                                            children: "From vital legal documents to medical specimens and high-value tech. Tracked, insured, and handled strictly by verified personnel."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                            lineNumber: 48,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 12,
                                                marginBottom: 40,
                                                listStyle: "none",
                                                padding: 0,
                                                margin: 0
                                            },
                                            children: [
                                                "Direct A-to-B delivery (No hub sorting)",
                                                "Real-time GPS tracking link",
                                                "Immediate digital Proof of Delivery",
                                                "Up to £100k transit insurance available"
                                            ].map((li, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "flex-start",
                                                        gap: 12,
                                                        fontSize: 15,
                                                        color: "var(--fg-2)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--accent-2)",
                                                                marginTop: 2
                                                            },
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                            lineNumber: 51,
                                                            columnNumber: 126
                                                        }, this),
                                                        " ",
                                                        li
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                    lineNumber: 51,
                                                    columnNumber: 20
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                            lineNumber: 49,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Btn"], {
                                            kind: "soft",
                                            onClick: onQuote,
                                            children: "Book courier"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                            lineNumber: 54,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                    lineNumber: 43,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "var(--surface-2)",
                                        border: "1px solid var(--border)",
                                        borderRadius: 24,
                                        padding: 48
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 56,
                                                height: 56,
                                                borderRadius: 12,
                                                background: "var(--urgent-soft)",
                                                color: "var(--urgent-2)",
                                                display: "grid",
                                                placeItems: "center",
                                                marginBottom: 32
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "28",
                                                height: "28",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "3",
                                                        y: "11",
                                                        width: "18",
                                                        height: "11",
                                                        rx: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                        lineNumber: 59,
                                                        columnNumber: 116
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M7 11V7a5 5 0 0 1 10 0v4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                        lineNumber: 59,
                                                        columnNumber: 166
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                lineNumber: 59,
                                                columnNumber: 18
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                            lineNumber: 58,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: 28,
                                                fontWeight: 500,
                                                marginBottom: 16
                                            },
                                            children: "Emergency Locksmith"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                            lineNumber: 61,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 16,
                                                color: "var(--fg-2)",
                                                lineHeight: 1.5,
                                                marginBottom: 32
                                            },
                                            children: "Rapid response for lockouts, break-in repairs, and commercial security upgrades. Fixed quotes before we dispatch."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                            lineNumber: 62,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 12,
                                                marginBottom: 40,
                                                listStyle: "none",
                                                padding: 0,
                                                margin: 0
                                            },
                                            children: [
                                                "30-60 minute emergency response",
                                                "Non-destructive entry specialists",
                                                "BS3621 insurance-approved locks",
                                                "12-month guarantee on all parts & labor"
                                            ].map((li, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "flex-start",
                                                        gap: 12,
                                                        fontSize: 15,
                                                        color: "var(--fg-2)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--urgent-2)",
                                                                marginTop: 2
                                                            },
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                            lineNumber: 65,
                                                            columnNumber: 126
                                                        }, this),
                                                        " ",
                                                        li
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                                    lineNumber: 65,
                                                    columnNumber: 20
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                            lineNumber: 63,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Btn"], {
                                            kind: "soft",
                                            onClick: onQuote,
                                            children: "Request locksmith"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                            lineNumber: 68,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                                    lineNumber: 57,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                            lineNumber: 41,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                    lineNumber: 39,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$views$2f$Home$2f$Sections$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PricingSection"], {
                onQuote: onQuote
            }, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$views$2f$Home$2f$Sections$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactSection"], {}, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$views$2f$Home$2f$Sections$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaqSection"], {}, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$views$2f$Home$2f$Sections$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentSection"], {}, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$views$2f$Home$2f$Sections$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivacySection"], {}, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$Layout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/vscode/ts/client/src/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$views$2f$Home$2f$Home$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/src/views/Home/Home.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/src/components/UI.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Page() {
    _s();
    const [quoteOpen, setQuoteOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$views$2f$Home$2f$Home$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onQuote: ()=>setQuoteOpen(true)
            }, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/app/page.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            quoteOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuoteModal"], {
                onClose: ()=>setQuoteOpen(false)
            }, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/app/page.jsx",
                lineNumber: 13,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true);
}
_s(Page, "qlHv3jYAyLgBJGkn2PFi7gJ5nM8=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_vscode_ts_client_src_1zn7vj_._.js.map