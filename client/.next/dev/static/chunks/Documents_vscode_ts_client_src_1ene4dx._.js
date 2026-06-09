(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/vscode/ts/client/src/components/UI.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACard",
    ()=>ACard,
    "APill",
    ()=>APill,
    "Btn",
    ()=>Btn,
    "CookieBanner",
    ()=>CookieBanner,
    "PhoneIcon",
    ()=>PhoneIcon,
    "Pill",
    ()=>Pill,
    "PillBadge",
    ()=>PillBadge,
    "PortalCard",
    ()=>PortalCard,
    "QuoteModal",
    ()=>QuoteModal,
    "SvcIcon",
    ()=>SvcIcon,
    "Toast",
    ()=>Toast,
    "WhatsAppBtn",
    ()=>WhatsAppBtn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
;
const PhoneIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }, void 0, false, {
            fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = PhoneIcon;
function Pill({ children, dot, tone = "default" }) {
    const tones = {
        default: {
            bg: "var(--surface-2)",
            fg: "var(--fg-2)",
            bd: "var(--border)"
        },
        live: {
            bg: "rgba(74,222,128,0.08)",
            fg: "#86efac",
            bd: "rgba(74,222,128,0.25)"
        },
        accent: {
            bg: "var(--accent-soft)",
            fg: "var(--accent-2)",
            bd: "rgba(74,208,92,0.25)"
        }
    };
    const t = tones[tone] || tones.default;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "mono",
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 12px",
            borderRadius: 999,
            background: t.bg,
            color: t.fg,
            border: `1px solid ${t.bd}`,
            fontSize: 11,
            letterSpacing: 0.6,
            textTransform: "uppercase"
        },
        children: [
            dot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: 6,
                    height: 6,
                    borderRadius: 99,
                    background: t.fg,
                    animation: dot === "pulse" ? "pulse 1.6s ease-in-out infinite" : "none"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                lineNumber: 49,
                columnNumber: 9
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c1 = Pill;
function Btn({ kind = "primary", icon, children, big, sub, onClick, style: ext, disabled }) {
    _s();
    const S = {
        primary: {
            bg: "var(--accent)",
            fg: "white",
            bd: "var(--accent)"
        },
        urgent: {
            bg: "var(--urgent)",
            fg: "white",
            bd: "var(--urgent)"
        },
        ghost: {
            bg: "transparent",
            fg: "var(--fg)",
            bd: "var(--border-2)"
        },
        solid: {
            bg: "var(--fg)",
            fg: "var(--bg)",
            bd: "var(--fg)"
        },
        soft: {
            bg: "var(--surface-2)",
            fg: "var(--fg-2)",
            bd: "var(--border)"
        }
    };
    const s = S[kind] || S.primary;
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: big ? "18px 28px" : "12px 22px",
            background: s.bg,
            color: s.fg,
            border: `1px solid ${s.bd}`,
            borderRadius: 999,
            fontWeight: 500,
            fontSize: big ? 16 : 14,
            letterSpacing: -0.1,
            transition: "all .15s ease",
            transform: hov ? "translateY(-1px)" : "none",
            boxShadow: kind === "primary" ? "0 10px 28px -10px var(--accent-glow)" : kind === "urgent" ? "0 10px 28px -10px var(--urgent-glow)" : "none",
            opacity: disabled ? 0.5 : 1,
            cursor: disabled ? "default" : "pointer",
            ...ext
        },
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: "inline-flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    lineHeight: 1.15
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mono",
                        style: {
                            fontSize: 10,
                            opacity: 0.7,
                            letterSpacing: 0.5,
                            textTransform: "uppercase",
                            marginTop: 2
                        },
                        children: sub
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(Btn, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c2 = Btn;
function PillBadge({ children, tone = "default" }) {
    const T = {
        default: {
            fg: "var(--muted)",
            bg: "var(--surface-2)"
        },
        accent: {
            fg: "var(--accent-2)",
            bg: "var(--accent-soft)"
        },
        warn: {
            fg: "#fbbf24",
            bg: "rgba(251,191,36,0.12)"
        },
        urgent: {
            fg: "var(--urgent-2)",
            bg: "var(--urgent-soft)"
        }
    };
    const t = T[tone] || T.default;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "mono",
        style: {
            fontSize: 10.5,
            padding: "3px 8px",
            borderRadius: 4,
            background: t.bg,
            color: t.fg,
            letterSpacing: 0.5
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_c3 = PillBadge;
function SvcIcon({ svc, size = 22 }) {
    const isLk = svc === "locksmith";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            width: size,
            height: size,
            borderRadius: 6,
            display: "grid",
            placeItems: "center",
            background: isLk ? "var(--urgent-soft)" : "var(--accent-soft)",
            color: isLk ? "var(--urgent-2)" : "var(--accent-2)",
            flexShrink: 0
        },
        children: isLk ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size * 0.5,
            height: size * 0.5,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "11",
                    width: "18",
                    height: "11",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                    lineNumber: 193,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 11V7a5 5 0 0 1 10 0v4"
                }, void 0, false, {
                    fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                    lineNumber: 194,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
            lineNumber: 185,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size * 0.5,
            height: size * 0.5,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "1",
                    y: "3",
                    width: "15",
                    height: "13"
                }, void 0, false, {
                    fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                    lineNumber: 205,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 8h4l3 3v5h-7M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm13 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                }, void 0, false, {
                    fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                    lineNumber: 206,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
            lineNumber: 197,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_c4 = SvcIcon;
function APill({ children, tone = "default" }) {
    const T = {
        default: {
            fg: "var(--muted)",
            bg: "var(--surface-2)"
        },
        accent: {
            fg: "var(--accent-2)",
            bg: "var(--accent-soft)"
        },
        warn: {
            fg: "#fbbf24",
            bg: "rgba(251,191,36,0.12)"
        },
        urgent: {
            fg: "var(--urgent-2)",
            bg: "var(--urgent-soft)"
        }
    };
    const t = T[tone] || T.default;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "mono",
        style: {
            fontSize: 10,
            padding: "3px 8px",
            borderRadius: 4,
            background: t.bg,
            color: t.fg,
            letterSpacing: 0.5
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
_c5 = APill;
function ACard({ title, action, children, pad = 0, style: ext }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden",
            ...ext
        },
        children: [
            (title || action) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    borderBottom: "1px solid var(--border)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            margin: 0,
                            fontSize: 14,
                            fontWeight: 500
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this),
                    action
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                lineNumber: 250,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: pad
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                lineNumber: 263,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
_c6 = ACard;
function PortalCard({ title, action, children, pad = 24 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 14
        },
        children: [
            (title || action) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px 24px",
                    borderBottom: "1px solid var(--border)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            margin: 0,
                            fontSize: 15,
                            fontWeight: 500,
                            letterSpacing: -0.2
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this),
                    action
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                lineNumber: 278,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: pad
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                lineNumber: 300,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
        lineNumber: 270,
        columnNumber: 5
    }, this);
}
_c7 = PortalCard;
function CookieBanner() {
    _s1();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CookieBanner.useEffect": ()=>{
            try {
                const accepted = localStorage.getItem("212_cookies");
                if (!accepted) setTimeout({
                    "CookieBanner.useEffect": ()=>setShow(true)
                }["CookieBanner.useEffect"], 1200);
            } catch  {
                setShow(true);
            }
        }
    }["CookieBanner.useEffect"], []);
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            background: "var(--surface)",
            border: "1px solid var(--border-2)",
            borderRadius: 16,
            padding: "20px 28px",
            maxWidth: 560,
            width: "calc(100% - 48px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
            boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
            animation: "slideUpBanner .4s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minWidth: 200
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontWeight: 600,
                            fontSize: 14,
                            marginBottom: 4
                        },
                        children: "We use cookies"
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 13,
                            color: "var(--fg-2)",
                            lineHeight: 1.4
                        },
                        children: [
                            "Essential cookies keep the site running. Analytics cookies (if accepted) help us improve. No data sold.",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#privacy",
                                style: {
                                    color: "var(--accent-2)",
                                    textDecoration: "underline"
                                },
                                children: "Privacy policy"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            try {
                                localStorage.setItem("212_cookies", "essential");
                            } catch  {}
                            setShow(false);
                        },
                        style: {
                            padding: "9px 16px",
                            borderRadius: 999,
                            border: "1px solid var(--border-2)",
                            fontSize: 13,
                            color: "var(--fg-2)",
                            cursor: "pointer",
                            background: "transparent"
                        },
                        children: "Essential only"
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            try {
                                localStorage.setItem("212_cookies", "all");
                            } catch  {}
                            setShow(false);
                        },
                        style: {
                            padding: "9px 18px",
                            borderRadius: 999,
                            background: "var(--accent)",
                            color: "white",
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            border: "none"
                        },
                        children: "Accept all"
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                        lineNumber: 373,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                lineNumber: 353,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
        lineNumber: 317,
        columnNumber: 5
    }, this);
}
_s1(CookieBanner, "bXBd/WbmO9A8Q7bxaOKZvuJyGc0=");
_c8 = CookieBanner;
function WhatsAppBtn() {
    _s2();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "https://wa.me/442034880664?text=Hi%2C%20I%27d%20like%20a%20quote%20from%20212%20Secure%20Services.",
        target: "_blank",
        rel: "noopener noreferrer",
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        "aria-label": "Chat on WhatsApp",
        style: {
            position: "fixed",
            bottom: 88,
            right: 24,
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "#25D366",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(37,211,102,0.4)",
            zIndex: 8888,
            transition: "transform .2s ease",
            transform: hov ? "scale(1.1)" : "scale(1)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            }, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                lineNumber: 427,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
            lineNumber: 426,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
        lineNumber: 401,
        columnNumber: 5
    }, this);
}
_s2(WhatsAppBtn, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c9 = WhatsAppBtn;
function Toast({ msg, onClose }) {
    _s3();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Toast.useEffect": ()=>{
            const t = setTimeout(onClose, 4000);
            return ({
                "Toast.useEffect": ()=>clearTimeout(t)
            })["Toast.useEffect"];
        }
    }["Toast.useEffect"], [
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            top: 24,
            right: 24,
            zIndex: 9998,
            background: "var(--surface)",
            border: "1px solid var(--accent-soft)",
            borderRadius: 12,
            padding: "16px 20px",
            maxWidth: 340,
            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            animation: "toastIn .3s ease",
            display: "flex",
            alignItems: "flex-start",
            gap: 12
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: "var(--accent-2)",
                    fontSize: 20,
                    lineHeight: 1
                },
                children: "✓"
            }, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                lineNumber: 457,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontWeight: 600,
                            fontSize: 14,
                            marginBottom: 2
                        },
                        children: "Message sent!"
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 13,
                            color: "var(--fg-2)"
                        },
                        children: msg
                    }, void 0, false, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                lineNumber: 460,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                style: {
                    color: "var(--muted)",
                    lineHeight: 1,
                    fontSize: 18,
                    cursor: "pointer",
                    background: "none",
                    border: "none"
                },
                children: "×"
            }, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                lineNumber: 466,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
        lineNumber: 439,
        columnNumber: 5
    }, this);
}
_s3(Toast, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c10 = Toast;
function QuoteModal({ onClose }) {
    _s4();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [svc, setSvc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        email: "",
        address: "",
        details: ""
    });
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const set = (k)=>(e)=>setForm((p)=>({
                    ...p,
                    [k]: e.target.value
                }));
    const submit = async ()=>{
        setSubmitting(true);
        await new Promise((r)=>setTimeout(r, 1200));
        setSubmitting(false);
        setDone(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuoteModal.useEffect": ()=>{
            const fn = {
                "QuoteModal.useEffect.fn": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["QuoteModal.useEffect.fn"];
            document.addEventListener("keydown", fn);
            return ({
                "QuoteModal.useEffect": ()=>document.removeEventListener("keydown", fn)
            })["QuoteModal.useEffect"];
        }
    }["QuoteModal.useEffect"], [
        onClose
    ]);
    const inp = {
        width: "100%",
        padding: "12px 14px",
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        color: "var(--fg)",
        fontSize: 14,
        marginBottom: 12,
        display: "block"
    };
    const lbl = {
        fontSize: 12,
        color: "var(--fg-2)",
        marginBottom: 4,
        display: "block",
        fontFamily: "monospace",
        letterSpacing: 0.5,
        textTransform: "uppercase"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 9000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(10,12,11,0.85)",
            backdropFilter: "blur(12px)",
            padding: 20
        },
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: "var(--surface)",
                border: "1px solid var(--border-2)",
                borderRadius: 20,
                width: "100%",
                maxWidth: 540,
                maxHeight: "90vh",
                overflow: "auto",
                animation: "slideUp .25s ease"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "24px 28px",
                        borderBottom: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mono",
                                    style: {
                                        fontSize: 10.5,
                                        color: "var(--muted)",
                                        letterSpacing: 1,
                                        textTransform: "uppercase",
                                        marginBottom: 4
                                    },
                                    children: done ? "Confirmed" : `Step ${step} of 2`
                                }, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                    lineNumber: 568,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontWeight: 600,
                                        fontSize: 18
                                    },
                                    children: done ? "Quote request received" : step === 1 ? "What do you need?" : "Your details"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                    lineNumber: 580,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                            lineNumber: 567,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                width: 36,
                                height: 36,
                                borderRadius: 99,
                                background: "var(--surface-2)",
                                border: "1px solid var(--border)",
                                display: "grid",
                                placeItems: "center",
                                cursor: "pointer",
                                color: "var(--fg-2)",
                                fontSize: 18
                            },
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                            lineNumber: 588,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                    lineNumber: 558,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "24px 28px"
                    },
                    children: done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            padding: "32px 0"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 48,
                                    marginBottom: 16
                                },
                                children: "✅"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 609,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 16,
                                    fontWeight: 600,
                                    marginBottom: 8
                                },
                                children: "We'll call you within 8 minutes"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 610,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: "var(--fg-2)",
                                    fontSize: 14,
                                    lineHeight: 1.5,
                                    marginBottom: 24
                                },
                                children: [
                                    "Your request is with our dispatch team. Expect a call from",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: "var(--fg)"
                                        },
                                        children: "020 3488 0664"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                        lineNumber: 622,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    "shortly with your fixed quote."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 613,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 10,
                                    justifyContent: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:02034880664",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                padding: "12px 20px",
                                                background: "var(--urgent)",
                                                color: "white",
                                                borderRadius: 999,
                                                fontWeight: 600,
                                                fontSize: 14,
                                                cursor: "pointer",
                                                border: "none"
                                            },
                                            children: "Call now instead"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                            lineNumber: 629,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                        lineNumber: 628,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        style: {
                                            padding: "12px 20px",
                                            background: "var(--surface-2)",
                                            color: "var(--fg)",
                                            borderRadius: 999,
                                            fontSize: 14,
                                            cursor: "pointer",
                                            border: "1px solid var(--border)"
                                        },
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                        lineNumber: 644,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 625,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                        lineNumber: 608,
                        columnNumber: 13
                    }, this) : step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "var(--fg-2)",
                                    fontSize: 14,
                                    marginBottom: 20
                                },
                                children: "Choose the service you need. We'll get you a fixed quote, fast."
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 662,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 12,
                                    marginBottom: 24
                                },
                                children: [
                                    {
                                        id: "courier",
                                        label: "Secure Courier",
                                        icon: "📦",
                                        desc: "Same-day delivery across London"
                                    },
                                    {
                                        id: "locksmith",
                                        label: "Emergency Locksmith",
                                        icon: "🔑",
                                        desc: "24/7 callout, fixed price"
                                    },
                                    {
                                        id: "lockchange",
                                        label: "Lock Change",
                                        icon: "🔒",
                                        desc: "Upgrade or replace any lock"
                                    },
                                    {
                                        id: "other",
                                        label: "Something else",
                                        icon: "💬",
                                        desc: "Tell us what you need"
                                    }
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSvc(s.id),
                                        style: {
                                            padding: 16,
                                            borderRadius: 12,
                                            textAlign: "left",
                                            cursor: "pointer",
                                            background: svc === s.id ? "var(--accent-soft)" : "var(--surface-2)",
                                            border: svc === s.id ? "1px solid var(--accent-2)" : "1px solid var(--border)",
                                            transition: "all .15s ease"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 22,
                                                    marginBottom: 6
                                                },
                                                children: s.icon
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                                lineNumber: 720,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    marginBottom: 3
                                                },
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                                lineNumber: 723,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 12,
                                                    color: "var(--fg-2)"
                                                },
                                                children: s.desc
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                                lineNumber: 728,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, s.id, true, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                        lineNumber: 701,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 667,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>svc && setStep(2),
                                disabled: !svc,
                                style: {
                                    width: "100%",
                                    padding: "14px",
                                    background: svc ? "var(--accent)" : "var(--surface-2)",
                                    color: svc ? "white" : "var(--muted)",
                                    borderRadius: 999,
                                    fontWeight: 600,
                                    fontSize: 15,
                                    cursor: svc ? "pointer" : "default",
                                    border: "none",
                                    transition: "all .15s ease"
                                },
                                children: "Continue →"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 734,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "var(--surface-2)",
                                    borderRadius: 8,
                                    padding: "10px 14px",
                                    marginBottom: 20,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 14,
                                            color: "var(--accent-2)"
                                        },
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                        lineNumber: 766,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mono",
                                        style: {
                                            fontSize: 11,
                                            color: "var(--fg-2)",
                                            letterSpacing: 0.5,
                                            textTransform: "uppercase"
                                        },
                                        children: svc
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                        lineNumber: 769,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setStep(1),
                                        style: {
                                            marginLeft: "auto",
                                            fontSize: 12,
                                            color: "var(--muted)",
                                            cursor: "pointer",
                                            background: "none",
                                            border: "none",
                                            textDecoration: "underline"
                                        },
                                        children: "Change"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                        lineNumber: 780,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 755,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: lbl,
                                children: "Full name *"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 795,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inp,
                                value: form.name,
                                onChange: set("name"),
                                placeholder: "Your full name",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 796,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: lbl,
                                children: "Phone number *"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 803,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inp,
                                value: form.phone,
                                onChange: set("phone"),
                                placeholder: "07700 900000",
                                type: "tel",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 804,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: lbl,
                                children: "Email address"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 812,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inp,
                                value: form.email,
                                onChange: set("email"),
                                placeholder: "you@example.com",
                                type: "email"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 813,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: lbl,
                                children: "Address / postcode *"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 820,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: inp,
                                value: form.address,
                                onChange: set("address"),
                                placeholder: "E.g. SW1A 1AA or full address",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 821,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: lbl,
                                children: "Any details"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 828,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                style: {
                                    ...inp,
                                    minHeight: 80,
                                    resize: "vertical"
                                },
                                value: form.details,
                                onChange: set("details"),
                                placeholder: "E.g. what time works, specific requirements..."
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 829,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: submit,
                                disabled: submitting || !form.name || !form.phone || !form.address,
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
                                    opacity: submitting || !form.name || !form.phone || !form.address ? 0.5 : 1
                                },
                                children: submitting ? "Sending..." : "Request my quote →"
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 835,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 11,
                                    color: "var(--muted)",
                                    textAlign: "center",
                                    marginTop: 12
                                },
                                children: "We'll call you back within 8 minutes with a fixed price. No obligation."
                            }, void 0, false, {
                                fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                                lineNumber: 858,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
                    lineNumber: 606,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
            lineNumber: 546,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/vscode/ts/client/src/components/UI.jsx",
        lineNumber: 530,
        columnNumber: 5
    }, this);
}
_s4(QuoteModal, "yywT+pjr5NygWY3/tgW+7nvpZxs=");
_c11 = QuoteModal;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "PhoneIcon");
__turbopack_context__.k.register(_c1, "Pill");
__turbopack_context__.k.register(_c2, "Btn");
__turbopack_context__.k.register(_c3, "PillBadge");
__turbopack_context__.k.register(_c4, "SvcIcon");
__turbopack_context__.k.register(_c5, "APill");
__turbopack_context__.k.register(_c6, "ACard");
__turbopack_context__.k.register(_c7, "PortalCard");
__turbopack_context__.k.register(_c8, "CookieBanner");
__turbopack_context__.k.register(_c9, "WhatsAppBtn");
__turbopack_context__.k.register(_c10, "Toast");
__turbopack_context__.k.register(_c11, "QuoteModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/vscode/ts/client/src/app/GlobalLayout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalLayout",
    ()=>GlobalLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/vscode/ts/client/src/components/UI.jsx [app-client] (ecmascript)");
"use client";
;
;
;
function GlobalLayout({ children }) {
    // To handle the global quote modal state if needed via context, or just render UI.
    // Actually, since QuoteModal is used by Home, we can export a Context or just handle it.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CookieBanner"], {}, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/app/GlobalLayout.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$vscode$2f$ts$2f$client$2f$src$2f$components$2f$UI$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsAppBtn"], {}, void 0, false, {
                fileName: "[project]/Documents/vscode/ts/client/src/app/GlobalLayout.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = GlobalLayout;
var _c;
__turbopack_context__.k.register(_c, "GlobalLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_vscode_ts_client_src_1ene4dx._.js.map