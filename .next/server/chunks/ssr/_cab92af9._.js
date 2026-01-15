module.exports = [
"[project]/app/components/Windows/BezierClipPath.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/corner-down-left.js [app-ssr] (ecmascript) <export default as CornerDownLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/corner-down-right.js [app-ssr] (ecmascript) <export default as CornerDownRight>");
'use client';
;
;
;
const BezierClipPath = ()=>{
    const [points, setPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            "x": 0.4,
            "y": 0.35,
            "cp1x": 0.40040816326530615,
            "cp1y": 0.3827094920126277,
            "cp2x": 0.42,
            "cp2y": 0.35,
            "type": "smooth"
        },
        {
            "x": 0.6,
            "y": 0.35,
            "cp1x": 0.58,
            "cp1y": 0.35,
            "cp2x": 0.6,
            "cp2y": 0.4,
            "type": "smooth"
        },
        {
            "x": 0.6,
            "y": 0.65,
            "cp1x": 0.6020339300113992,
            "cp1y": 0.6125314965694989,
            "cp2x": 0.58,
            "cp2y": 0.65,
            "type": "smooth"
        },
        {
            "x": 0.4,
            "y": 0.65,
            "cp1x": 0.42,
            "cp1y": 0.65,
            "cp2x": 0.4,
            "cp2y": 0.6,
            "type": "smooth"
        }
    ]);
    const getPointsStats = ()=>{
        console.log(points);
    };
    const [dragState, setDragState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        isDragging: false,
        pointIndex: -1,
        handleType: 'point',
        startX: 0,
        startY: 0
    });
    const [hasDragged, setHasDragged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragCooldown, setDragCooldown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showGrid, setShowGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPanning, setIsPanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [panStart, setPanStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isSpacePressed, setIsSpacePressed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isShiftPressed, setIsShiftPressed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lockedAngle, setLockedAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [snapEnabled, setSnapEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [snapGuides, setSnapGuides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [cursorMode, setCursorMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('pan');
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [historyIndex, setHistoryIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [dragStartState, setDragStartState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showTips, setShowTips] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredPoint, setHoveredPoint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedPoint, setSelectedPoint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [suggestionNode, setSuggestionNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const maxHistorySteps = 50;
    // History management
    const saveToHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newPoints)=>{
        if (!Array.isArray(newPoints)) return;
        setHistory((prev)=>{
            const newHistory = prev.slice(0, historyIndex + 1);
            newHistory.push(JSON.parse(JSON.stringify(newPoints)));
            if (newHistory.length > maxHistorySteps) {
                newHistory.shift();
                setHistoryIndex((current)=>current - 1);
                return newHistory;
            }
            return newHistory;
        });
        setHistoryIndex((prev)=>Math.min(prev + 1, maxHistorySteps - 1));
    }, [
        historyIndex,
        maxHistorySteps
    ]);
    const undo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (historyIndex > 0) {
            const previousState = history[historyIndex - 1];
            if (Array.isArray(previousState)) {
                setPoints([
                    ...previousState
                ]);
                setHistoryIndex((prev)=>prev - 1);
            }
        }
    }, [
        history,
        historyIndex
    ]);
    const redo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (historyIndex < history.length - 1) {
            const nextState = history[historyIndex + 1];
            if (Array.isArray(nextState)) {
                setPoints([
                    ...nextState
                ]);
                setHistoryIndex((prev)=>prev + 1);
            }
        }
    }, [
        history,
        historyIndex
    ]);
    const getSnapSuggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((x, y, isControlPoint = false, anchorPoint)=>{
        if (!snapEnabled) return {
            x,
            y,
            guides: {}
        };
        const snapDistance = 0.02;
        let suggestedX = x;
        let suggestedY = y;
        const guides = {};
        if (isControlPoint && anchorPoint) {
            const dx = x - anchorPoint.x;
            const dy = y - anchorPoint.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > 0) {
                let angle = Math.atan2(dy, dx) * 180 / Math.PI;
                if (angle < 0) angle += 360;
                const keyAngles = [
                    0,
                    15,
                    30,
                    45,
                    60,
                    75,
                    90,
                    105,
                    120,
                    135,
                    150,
                    165,
                    180,
                    195,
                    210,
                    225,
                    240,
                    255,
                    270,
                    285,
                    300,
                    315,
                    330,
                    345
                ];
                let closestAngle = angle;
                let minAngleDiff = Infinity;
                for (const keyAngle of keyAngles){
                    const diff = Math.abs(angle - keyAngle);
                    const wrappedDiff = Math.min(diff, 360 - diff);
                    if (wrappedDiff < minAngleDiff && wrappedDiff < 7.5) {
                        minAngleDiff = wrappedDiff;
                        closestAngle = keyAngle;
                    }
                }
                if (minAngleDiff < 7.5) {
                    const radians = closestAngle * Math.PI / 180;
                    suggestedX = anchorPoint.x + Math.cos(radians) * distance;
                    suggestedY = anchorPoint.y + Math.sin(radians) * distance;
                    suggestedX = Math.max(0, Math.min(1, suggestedX));
                    suggestedY = Math.max(0, Math.min(1, suggestedY));
                    guides.x = suggestedX;
                    guides.y = suggestedY;
                }
                for (const point of points){
                    if (point === anchorPoint) continue;
                    if (Math.abs(y - point.y) < snapDistance) {
                        suggestedY = point.y;
                        guides.y = point.y;
                    }
                    if (Math.abs(x - point.x) < snapDistance) {
                        suggestedX = point.x;
                        guides.x = point.x;
                    }
                }
            }
        } else {
            for (const point of points){
                if (Math.abs(y - point.y) < snapDistance) {
                    suggestedY = point.y;
                    guides.y = point.y;
                }
                if (Math.abs(x - point.x) < snapDistance) {
                    suggestedX = point.x;
                    guides.x = point.x;
                }
                const distance = Math.sqrt((x - point.x) ** 2 + (y - point.y) ** 2);
                if (distance < snapDistance) {
                    suggestedX = point.x;
                    suggestedY = point.y;
                    guides.x = point.x;
                    guides.y = point.y;
                    break;
                }
            }
            const gridSize = 0.05; // 5% grid intervals for finer snapping
            const gridX = Math.round(x / gridSize) * gridSize;
            const gridY = Math.round(y / gridSize) * gridSize;
            if (Math.abs(x - gridX) < snapDistance && !guides.x) {
                suggestedX = gridX;
                guides.x = gridX;
            }
            if (Math.abs(y - gridY) < snapDistance && !guides.y) {
                suggestedY = gridY;
                guides.y = gridY;
            }
        }
        return {
            x: suggestedX,
            y: suggestedY,
            guides
        };
    }, [
        snapEnabled,
        points
    ]);
    const getCanvasCoordinates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((clientX, clientY, applySuggestions = true, isControlPoint = false, anchorPoint)=>{
        if (!canvasRef.current) return {
            x: 0,
            y: 0
        };
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;
        // Convert to normalized coordinates (0-1)
        let x = mouseX / rect.width;
        let y = mouseY / rect.height;
        if (applySuggestions) {
            const suggestions = getSnapSuggestions(x, y, isControlPoint, anchorPoint);
            setSnapGuides(suggestions.guides);
            return {
                x: suggestions.x,
                y: suggestions.y
            };
        }
        setSnapGuides({});
        return {
            x,
            y
        };
    }, [
        getSnapSuggestions
    ]);
    const findClosestPointOnPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((x, y, segmentIndex)=>{
        const currentPoint = points[segmentIndex];
        const nextPoint = points[(segmentIndex + 1) % points.length];
        let closestT = 0;
        let minDistance = Infinity;
        let closestX = currentPoint.x;
        let closestY = currentPoint.y;
        // Sample points along the curve to find the closest one
        for(let t = 0; t <= 1; t += 0.01){
            let pathX, pathY;
            if (currentPoint.type === 'corner' && nextPoint.type === 'corner') {
                pathX = currentPoint.x + t * (nextPoint.x - currentPoint.x);
                pathY = currentPoint.y + t * (nextPoint.y - currentPoint.y);
            } else {
                const cp1x = currentPoint.type === 'smooth' && currentPoint.cp2x !== undefined ? currentPoint.cp2x : currentPoint.x;
                const cp1y = currentPoint.type === 'smooth' && currentPoint.cp2y !== undefined ? currentPoint.cp2y : currentPoint.y;
                const cp2x = nextPoint.type === 'smooth' && nextPoint.cp1x !== undefined ? nextPoint.cp1x : nextPoint.x;
                const cp2y = nextPoint.type === 'smooth' && nextPoint.cp1y !== undefined ? nextPoint.cp1y : nextPoint.y;
                const t1 = 1 - t;
                pathX = t1 * t1 * t1 * currentPoint.x + 3 * t1 * t1 * t * cp1x + 3 * t1 * t * t * cp2x + t * t * t * nextPoint.x;
                pathY = t1 * t1 * t1 * currentPoint.y + 3 * t1 * t1 * t * cp1y + 3 * t1 * t * t * cp2y + t * t * t * nextPoint.y;
            }
            const distance = Math.sqrt((x - pathX) ** 2 + (y - pathY) ** 2);
            if (distance < minDistance) {
                minDistance = distance;
                closestT = t;
                closestX = pathX;
                closestY = pathY;
            }
        }
        return {
            x: closestX,
            y: closestY,
            t: closestT
        };
    }, [
        points
    ]);
    const getElementUnderCursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((clientX, clientY)=>{
        if (!canvasRef.current) return {
            type: 'none'
        };
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;
        const x = mouseX / rect.width;
        const y = mouseY / rect.height;
        const hitRadius = 12 / Math.min(rect.width, rect.height);
        const pathHitRadius = 16 / Math.min(rect.width, rect.height);
        for(let i = 0; i < points.length; i++){
            const point = points[i];
            const anchorDist = Math.sqrt((x - point.x) ** 2 + (y - point.y) ** 2);
            if (anchorDist < hitRadius) {
                return {
                    type: 'node',
                    index: i
                };
            }
            if (point.type === 'smooth' && point.cp1x !== undefined && point.cp1y !== undefined && point.cp2x !== undefined && point.cp2y !== undefined) {
                const cp1Dist = Math.sqrt((x - point.cp1x) ** 2 + (y - point.cp1y) ** 2);
                const cp2Dist = Math.sqrt((x - point.cp2x) ** 2 + (y - point.cp2y) ** 2);
                if (cp1Dist < hitRadius) {
                    return {
                        type: 'control',
                        index: i,
                        handleType: 'cp1'
                    };
                }
                if (cp2Dist < hitRadius) {
                    return {
                        type: 'control',
                        index: i,
                        handleType: 'cp2'
                    };
                }
            }
        }
        if (points.length > 1) {
            for(let i = 0; i < points.length; i++){
                const currentPoint = points[i];
                const nextPoint = points[(i + 1) % points.length];
                for(let t = 0; t <= 1; t += 0.02){
                    let pathX, pathY;
                    if (currentPoint.type === 'corner' && nextPoint.type === 'corner') {
                        pathX = currentPoint.x + t * (nextPoint.x - currentPoint.x);
                        pathY = currentPoint.y + t * (nextPoint.y - currentPoint.y);
                    } else {
                        const cp1x = currentPoint.type === 'smooth' && currentPoint.cp2x !== undefined ? currentPoint.cp2x : currentPoint.x;
                        const cp1y = currentPoint.type === 'smooth' && currentPoint.cp2y !== undefined ? currentPoint.cp2y : currentPoint.y;
                        const cp2x = nextPoint.type === 'smooth' && nextPoint.cp1x !== undefined ? nextPoint.cp1x : nextPoint.x;
                        const cp2y = nextPoint.type === 'smooth' && nextPoint.cp1y !== undefined ? nextPoint.cp1y : nextPoint.y;
                        const t1 = 1 - t;
                        pathX = t1 * t1 * t1 * currentPoint.x + 3 * t1 * t1 * t * cp1x + 3 * t1 * t * t * cp2x + t * t * t * nextPoint.x;
                        pathY = t1 * t1 * t1 * currentPoint.y + 3 * t1 * t1 * t * cp1y + 3 * t1 * t * t * cp2y + t * t * t * nextPoint.y;
                    }
                    const pathDist = Math.sqrt((x - pathX) ** 2 + (y - pathY) ** 2);
                    if (pathDist < pathHitRadius) {
                        return {
                            type: 'path',
                            index: i
                        };
                    }
                }
            }
        }
        return {
            type: 'none'
        };
    }, [
        points
    ]);
    const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, pointIndex, handleType)=>{
        e.preventDefault();
        e.stopPropagation();
        setHasDragged(false);
        setDragStartState(JSON.parse(JSON.stringify(points)));
        const point = points[pointIndex];
        let currentX, currentY;
        if (handleType === 'point') {
            currentX = point.x;
            currentY = point.y;
        } else if (handleType === 'cp1') {
            currentX = point.cp1x || point.x;
            currentY = point.cp1y || point.y;
        } else {
            currentX = point.cp2x || point.x;
            currentY = point.cp2y || point.y;
        }
        const coords = getCanvasCoordinates(e.clientX, e.clientY, false);
        setDragState({
            isDragging: true,
            pointIndex,
            handleType,
            startX: coords.x - currentX,
            startY: coords.y - currentY
        });
    }, [
        getCanvasCoordinates,
        points
    ]);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!dragState.isDragging) return;
        setHasDragged(true);
        const { pointIndex, handleType, startX, startY } = dragState;
        const currentPoint = points[pointIndex];
        const isControlPoint = handleType === 'cp1' || handleType === 'cp2';
        const anchorPoint = isControlPoint ? currentPoint : undefined;
        let coords = getCanvasCoordinates(e.clientX, e.clientY, true, isControlPoint, anchorPoint);
        // Apply angle constraint when shift is pressed
        if (isShiftPressed && isControlPoint && anchorPoint) {
            const dx = coords.x - startX - anchorPoint.x;
            const dy = coords.y - startY - anchorPoint.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > 0) {
                let angle = Math.atan2(dy, dx) * 180 / Math.PI;
                if (angle < 0) angle += 360;
                let snapAngle;
                if (lockedAngle !== null) {
                    // Once locked to an angle, require significant movement to change (hysteresis)
                    const angleDiff = Math.abs(angle - lockedAngle);
                    const wrappedDiff = Math.min(angleDiff, 360 - angleDiff);
                    // Require 22.5 degrees of movement to unlock from current angle
                    if (wrappedDiff < 22.5) {
                        snapAngle = lockedAngle;
                    } else {
                        // Allow switching to new angle with increased snap tolerance
                        snapAngle = Math.round(angle / 15) * 15;
                        setLockedAngle(snapAngle);
                    }
                } else {
                    // Initial lock - snap to nearest 15-degree increment
                    snapAngle = Math.round(angle / 15) * 15;
                    setLockedAngle(snapAngle);
                }
                const radians = snapAngle * Math.PI / 180;
                coords = {
                    x: anchorPoint.x + Math.cos(radians) * distance,
                    y: anchorPoint.y + Math.sin(radians) * distance
                };
                // Clamp to canvas bounds
                coords.x = Math.max(0, Math.min(1, coords.x));
                coords.y = Math.max(0, Math.min(1, coords.y));
            }
        } else if (isShiftPressed && handleType === 'point') {
            // For anchor points, constrain movement to horizontal/vertical when shift is pressed
            const dx = Math.abs(coords.x - startX - currentPoint.x);
            const dy = Math.abs(coords.y - startY - currentPoint.y);
            if (dx > dy) {
                // Lock to horizontal movement
                coords.y = currentPoint.y;
            } else {
                // Lock to vertical movement
                coords.x = currentPoint.x;
            }
        }
        const updatePointPosition = (pointIndex, x, y)=>{
            setPoints((prev)=>{
                const newPoints = [
                    ...prev
                ];
                const point = newPoints[pointIndex];
                const actualX = Math.max(0, Math.min(1, x));
                const actualY = Math.max(0, Math.min(1, y));
                if (handleType === 'point') {
                    const deltaX = actualX - point.x;
                    const deltaY = actualY - point.y;
                    point.x = actualX;
                    point.y = actualY;
                    if (point.cp1x !== undefined && point.cp1y !== undefined) {
                        point.cp1x = Math.max(0, Math.min(1, point.cp1x + deltaX));
                        point.cp1y = Math.max(0, Math.min(1, point.cp1y + deltaY));
                    }
                    if (point.cp2x !== undefined && point.cp2y !== undefined) {
                        point.cp2x = Math.max(0, Math.min(1, point.cp2x + deltaX));
                        point.cp2y = Math.max(0, Math.min(1, point.cp2y + deltaY));
                    }
                } else if (handleType === 'cp1') {
                    point.cp1x = actualX;
                    point.cp1y = actualY;
                    if (point.type === 'symmetric' && point.cp2x !== undefined && point.cp2y !== undefined) {
                        const dx = point.x - actualX;
                        const dy = point.y - actualY;
                        point.cp2x = Math.max(0, Math.min(1, point.x + dx));
                        point.cp2y = Math.max(0, Math.min(1, point.y + dy));
                    }
                } else if (handleType === 'cp2') {
                    point.cp2x = actualX;
                    point.cp2y = actualY;
                    if (point.type === 'symmetric' && point.cp1x !== undefined && point.cp1y !== undefined) {
                        const dx = point.x - actualX;
                        const dy = point.y - actualY;
                        point.cp1x = Math.max(0, Math.min(1, point.x + dx));
                        point.cp1y = Math.max(0, Math.min(1, point.y + dy));
                    }
                }
                return newPoints;
            });
        };
        const actualX = coords.x - startX;
        updatePointPosition(pointIndex, actualX, coords.y - startY);
    }, [
        dragState,
        getCanvasCoordinates,
        points
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (dragState.isDragging && dragStartState && Array.isArray(dragStartState)) {
            const hasChanged = JSON.stringify(dragStartState) !== JSON.stringify(points);
            if (hasChanged) {
                saveToHistory(points);
            }
            // Handle point selection after drag ends (only if we didn't actually drag)
            if (!hasDragged && dragState.handleType === 'point') {
                setSelectedPoint((prev)=>prev === dragState.pointIndex ? null : dragState.pointIndex);
            }
            // Add cooldown period after dragging to prevent accidental node creation
            if (hasDragged) {
                setDragCooldown(true);
                setTimeout(()=>setDragCooldown(false), 300); // 300ms cooldown
            }
        }
        setDragState((prev)=>({
                ...prev,
                isDragging: false
            }));
        setDragStartState(null);
        setIsPanning(false);
        setHasDragged(false);
        // Reset locked angle when drag ends
        setLockedAngle(null);
    }, [
        dragState.isDragging,
        dragState.handleType,
        dragState.pointIndex,
        dragStartState,
        saveToHistory,
        points,
        hasDragged
    ]);
    const handleCanvasMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const element = getElementUnderCursor(e.clientX, e.clientY);
        if (element.type === 'node' && element.index !== undefined) {
            handleMouseDown(e, element.index, 'point');
            return;
        }
        if (element.type === 'control' && element.index !== undefined && element.handleType) {
            handleMouseDown(e, element.index, element.handleType);
            return;
        }
    }, [
        getElementUnderCursor,
        handleMouseDown
    ]);
    const handleCanvasMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (dragState.isDragging) {
            handleMouseMove(e);
        } else {
            const element = getElementUnderCursor(e.clientX, e.clientY);
            setHoveredPoint(element.type === 'node' ? element.index || null : null);
            if (isSpacePressed) {
                setCursorMode('pan');
                setSuggestionNode(null);
            } else if (element.type === 'node' || element.type === 'control') {
                setCursorMode('move-node');
                setSuggestionNode(null);
            } else if (element.type === 'path') {
                setCursorMode('add-node');
                // Show suggestion node at closest point on path for more fluid positioning
                const coords = getCanvasCoordinates(e.clientX, e.clientY, false); // Don't apply suggestions for hover
                const closestPoint = findClosestPointOnPath(coords.x, coords.y, element.index || 0);
                setSuggestionNode({
                    x: closestPoint.x,
                    y: closestPoint.y,
                    segmentIndex: element.index || 0,
                    t: closestPoint.t,
                    opacity: 1
                });
            } else {
                setCursorMode('pan');
                // Fade out suggestion node instead of immediately removing it
                if (suggestionNode) {
                    setSuggestionNode((prev)=>prev ? {
                            ...prev,
                            opacity: 0
                        } : null);
                    setTimeout(()=>setSuggestionNode(null), 200);
                }
            }
        }
    }, [
        dragState.isDragging,
        handleMouseMove,
        isPanning,
        panStart,
        getElementUnderCursor,
        isSpacePressed,
        getCanvasCoordinates
    ]);
    const handleCanvasClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (dragState.isDragging || hasDragged || dragCooldown) return;
        const element = getElementUnderCursor(e.clientX, e.clientY);
        // Deselect point if clicking on empty canvas
        if (element.type === 'none') {
            setSelectedPoint(null);
        }
        if (element.type === 'path' && element.index !== undefined) {
            const coords = getCanvasCoordinates(e.clientX, e.clientY, false); // Don't apply suggestions for click position
            const insertIndex = element.index + 1;
            const prevIndex = element.index;
            const nextIndex = (element.index + 1) % points.length;
            const prevPoint = points[prevIndex];
            const nextPoint = points[nextIndex];
            const cp1Distance = 0.1;
            const cp2Distance = 0.1;
            const dx = nextPoint.x - prevPoint.x;
            const dy = nextPoint.y - prevPoint.y;
            const length = Math.sqrt(dx * dx + dy * dy);
            const normalizedDx = length > 0 ? dx / length : 0;
            const normalizedDy = length > 0 ? dy / length : 0;
            const newPoint = {
                x: coords.x,
                y: coords.y,
                cp1x: Math.max(0, Math.min(1, coords.x - normalizedDx * cp1Distance)),
                cp1y: Math.max(0, Math.min(1, coords.y - normalizedDy * cp1Distance)),
                cp2x: Math.max(0, Math.min(1, coords.x + normalizedDx * cp2Distance)),
                cp2y: Math.max(0, Math.min(1, coords.y + normalizedDy * cp2Distance)),
                type: 'smooth'
            };
            setPoints((prev)=>{
                const newPoints = [
                    ...prev
                ];
                newPoints.splice(insertIndex, 0, newPoint);
                setTimeout(()=>saveToHistory(newPoints), 0);
                return newPoints;
            });
        }
    }, [
        dragState.isDragging,
        hasDragged,
        dragCooldown,
        getElementUnderCursor,
        getCanvasCoordinates,
        points,
        saveToHistory
    ]);
    const handleCanvasMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsPanning(false);
        handleMouseUp();
    }, [
        handleMouseUp
    ]);
    const removePoint = (index)=>{
        if (points.length <= 3) return;
        setPoints((prev)=>{
            const newPoints = prev.filter((_, i)=>i !== index);
            setTimeout(()=>saveToHistory(newPoints), 0);
            return newPoints;
        });
    };
    const togglePointType = (index)=>{
        setPoints((prev)=>{
            const newPoints = [
                ...prev
            ];
            const point = newPoints[index];
            if (point.type === 'smooth') {
                point.type = 'corner';
                point.cp1x = point.x;
                point.cp1y = point.y;
                point.cp2x = point.x;
                point.cp2y = point.y;
            } else {
                point.type = 'smooth';
                const offset = 0.05;
                point.cp1x = Math.max(0, Math.min(1, point.x - offset));
                point.cp1y = Math.max(0, Math.min(1, point.y - offset));
                point.cp2x = Math.max(0, Math.min(1, point.x + offset));
                point.cp2y = Math.max(0, Math.min(1, point.y + offset));
            }
            setTimeout(()=>saveToHistory(newPoints), 0);
            return newPoints;
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (dragState.isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return ()=>{
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [
        dragState.isDragging,
        handleMouseMove,
        handleMouseUp
    ]);
    const generateSVGPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (points.length === 0) return '';
        let path = `M ${points[0].x * 100} ${points[0].y * 100}`;
        for(let i = 1; i < points.length; i++){
            const prevPoint = points[i - 1];
            const currentPoint = points[i];
            const cp1x = prevPoint.cp2x !== undefined ? prevPoint.cp2x * 100 : prevPoint.x * 100;
            const cp1y = prevPoint.cp2y !== undefined ? prevPoint.cp2y * 100 : prevPoint.y * 100;
            const cp2x = currentPoint.cp1x !== undefined ? currentPoint.cp1x * 100 : currentPoint.x * 100;
            const cp2y = currentPoint.cp1y !== undefined ? currentPoint.cp1y * 100 : currentPoint.y * 100;
            path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${currentPoint.x * 100} ${currentPoint.y * 100}`;
        }
        const firstPoint = points[0];
        const lastPoint = points[points.length - 1];
        const cp1x = lastPoint.cp2x !== undefined ? lastPoint.cp2x * 100 : lastPoint.x * 100;
        const cp1y = lastPoint.cp2y !== undefined ? lastPoint.cp2y * 100 : lastPoint.y * 100;
        const cp2x = firstPoint.cp1x !== undefined ? firstPoint.cp1x * 100 : firstPoint.x * 100;
        const cp2y = firstPoint.cp1y !== undefined ? firstPoint.cp1y * 100 : firstPoint.y * 100;
        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${firstPoint.x * 100} ${firstPoint.y * 100} Z`;
        return path;
    }, [
        points
    ]);
    const generateClipPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const path = generateSVGPath();
        return `clip-path: path('${path}');`;
    }, [
        generateSVGPath
    ]);
    const copyToClipboard = async ()=>{
        console.log(points);
        try {
            await navigator.clipboard.writeText(generateClipPath());
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy to clipboard:', err);
        }
    };
    const showTipsTemporarily = ()=>{
        setShowTips(true);
        setTimeout(()=>setShowTips(false), 7250);
    };
    const drawGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx, width, height)=>{
        if (!showGrid) return;
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.5;
        const gridSpacing = 50;
        for(let x = 0; x <= width; x += gridSpacing){
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
        for(let y = 0; y <= height; y += gridSpacing){
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
        ctx.globalAlpha = 1;
        // Snap guides
        if (snapGuides.x !== undefined) {
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 2;
            ctx.globalAlpha = 0.8;
            ctx.setLineDash([
                4,
                4
            ]);
            ctx.beginPath();
            ctx.moveTo(snapGuides.x * width, 0);
            ctx.lineTo(snapGuides.x * width, height);
            ctx.stroke();
        }
        if (snapGuides.y !== undefined) {
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 2;
            ctx.globalAlpha = 0.8;
            ctx.setLineDash([
                4,
                4
            ]);
            ctx.beginPath();
            ctx.moveTo(0, snapGuides.y * height);
            ctx.lineTo(width, snapGuides.y * height);
            ctx.stroke();
        }
        ctx.setLineDash([]);
    }, [
        showGrid,
        snapGuides
    ]);
    const drawBezierPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx, width, height)=>{
        if (points.length === 0) return;
        ctx.save();
        // Draw filled shape
        ctx.fillStyle = 'rgba(139, 92, 246, 0.3)';
        ctx.strokeStyle = '#8b5cf6';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(points[0].x * width, points[0].y * height);
        for(let i = 1; i < points.length; i++){
            const prevPoint = points[i - 1];
            const currentPoint = points[i];
            const cp1x = (prevPoint.cp2x !== undefined ? prevPoint.cp2x : prevPoint.x) * width;
            const cp1y = (prevPoint.cp2y !== undefined ? prevPoint.cp2y : prevPoint.y) * height;
            const cp2x = (currentPoint.cp1x !== undefined ? currentPoint.cp1x : currentPoint.x) * width;
            const cp2y = (currentPoint.cp1y !== undefined ? currentPoint.cp1y : currentPoint.y) * height;
            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, currentPoint.x * width, currentPoint.y * height);
        }
        const firstPoint = points[0];
        const lastPoint = points[points.length - 1];
        const cp1x = (lastPoint.cp2x !== undefined ? lastPoint.cp2x : lastPoint.x) * width;
        const cp1y = (lastPoint.cp2y !== undefined ? lastPoint.cp2y : lastPoint.y) * height;
        const cp2x = (firstPoint.cp1x !== undefined ? firstPoint.cp1x : firstPoint.x) * width;
        const cp2y = (firstPoint.cp1y !== undefined ? firstPoint.cp1y : firstPoint.y) * height;
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, firstPoint.x * width, firstPoint.y * height);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }, [
        points
    ]);
    const drawControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx, width, height)=>{
        ctx.save();
        // Draw suggestion node if hovering over path
        if (suggestionNode) {
            const opacity = suggestionNode.opacity || 1;
            const pulseScale = 1 + Math.sin(Date.now() * 0.008) * 0.15;
            // Outer pulse ring
            ctx.fillStyle = `rgba(34, 197, 94, ${0.2 * opacity * pulseScale})`;
            ctx.beginPath();
            ctx.arc(suggestionNode.x * width, suggestionNode.y * height, 16 * pulseScale, 0, 2 * Math.PI);
            ctx.fill();
            // Main suggestion node
            ctx.fillStyle = `rgba(34, 197, 94, ${0.8 * opacity})`;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(suggestionNode.x * width, suggestionNode.y * height, 7, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            // Add plus icon with opacity
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 2;
            const centerX = suggestionNode.x * width;
            const centerY = suggestionNode.y * height;
            const size = 3.5;
            // Horizontal line
            ctx.beginPath();
            ctx.moveTo(centerX - size, centerY);
            ctx.lineTo(centerX + size, centerY);
            ctx.stroke();
            // Vertical line
            ctx.beginPath();
            ctx.moveTo(centerX, centerY - size);
            ctx.lineTo(centerX, centerY + size);
            ctx.stroke();
        }
        points.forEach((point, index)=>{
            // Draw control lines
            if (point.cp1x !== undefined && point.cp1y !== undefined && point.type === 'smooth') {
                ctx.strokeStyle = '#9ca3af';
                ctx.lineWidth = 1;
                ctx.setLineDash([
                    3,
                    3
                ]);
                ctx.beginPath();
                ctx.moveTo(point.x * width, point.y * height);
                ctx.lineTo(point.cp1x * width, point.cp1y * height);
                ctx.stroke();
            }
            if (point.cp2x !== undefined && point.cp2y !== undefined && point.type === 'smooth') {
                ctx.strokeStyle = '#9ca3af';
                ctx.lineWidth = 1;
                ctx.setLineDash([
                    3,
                    3
                ]);
                ctx.beginPath();
                ctx.moveTo(point.x * width, point.y * height);
                ctx.lineTo(point.cp2x * width, point.cp2y * height);
                ctx.stroke();
            }
            ctx.setLineDash([]);
            // Draw control points
            if (point.cp1x !== undefined && point.cp1y !== undefined && point.type === 'smooth') {
                ctx.fillStyle = '#3b82f6';
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(point.cp1x * width, point.cp1y * height, 6, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
            }
            if (point.cp2x !== undefined && point.cp2y !== undefined && point.type === 'smooth') {
                ctx.fillStyle = '#3b82f6';
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(point.cp2x * width, point.cp2y * height, 6, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
            }
            // Draw anchor points with enhanced styling
            const isHovered = hoveredPoint === index;
            const baseRadius = isHovered ? 12 : 10;
            const color = point.type === 'corner' ? '#ef4444' : point.type === 'symmetric' ? '#10b981' : '#f59e0b';
            // Outer ring for hovered state
            if (isHovered) {
                ctx.fillStyle = color + '40';
                ctx.beginPath();
                ctx.arc(point.x * width, point.y * height, baseRadius + 4, 0, 2 * Math.PI);
                ctx.fill();
            }
            // Main anchor point
            ctx.fillStyle = color;
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(point.x * width, point.y * height, baseRadius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            // Point number
            ctx.fillStyle = '#ffffff';
            ctx.font = `bold ${isHovered ? '12px' : '10px'} Inter, system-ui, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(index.toString(), point.x * width, point.y * height);
        });
        ctx.restore();
    }, [
        points,
        hoveredPoint,
        suggestionNode
    ]);
    const drawCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const { width, height } = canvas;
        ctx.clearRect(0, 0, width, height);
        drawGrid(ctx, width, height);
        drawBezierPath(ctx, width, height);
        drawControls(ctx, width, height);
    }, [
        drawGrid,
        drawBezierPath,
        drawControls
    ]);
    // Initialize history with current points on mount and center the view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (history.length === 0 && points.length > 0) {
            setHistory([
                JSON.parse(JSON.stringify(points))
            ]);
            setHistoryIndex(0);
        }
    }, [
        history.length,
        points
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.code === 'Space') {
                e.preventDefault();
                setIsSpacePressed(true);
            }
            if (e.key === 'Shift') {
                setIsShiftPressed(true);
            }
            if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
                e.preventDefault();
                undo();
            }
            if ((e.ctrlKey || e.metaKey) && e.key === 'z' && e.shiftKey) {
                e.preventDefault();
                redo();
            }
            if (e.key === 'g' || e.key === 'G') {
                e.preventDefault();
                setShowGrid((prev)=>!prev);
            }
        };
        const handleKeyUp = (e)=>{
            if (e.code === 'Space') {
                e.preventDefault();
                setIsSpacePressed(false);
            }
            if (e.key === 'Shift') {
                setIsShiftPressed(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [
        isSpacePressed,
        isShiftPressed,
        undo,
        redo
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        drawCanvas();
    }, [
        drawCanvas,
        points,
        showGrid,
        snapGuides,
        hoveredPoint,
        suggestionNode
    ]);
    // Animation loop for smooth pulse effects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const animate = ()=>{
            if (suggestionNode) {
                drawCanvas();
            }
            animationFrameRef.current = requestAnimationFrame(animate);
        };
        if (suggestionNode) {
            animationFrameRef.current = requestAnimationFrame(animate);
        } else if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }
        return ()=>{
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
        };
    }, [
        suggestionNode,
        drawCanvas
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full bg-gradient-to-br from-slate-50 to-slate-100 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: copyToClipboard,
                className: `absolute top-6 right-6 z-10 p-3 rounded-xl shadow-lg border transition-all duration-200 ${copied ? 'bg-green-500 text-white border-green-500' : 'bg-white/90 backdrop-blur-sm text-slate-700 border-slate-200 hover:bg-white hover:shadow-xl'}`,
                title: copied ? 'Copied!' : 'Copy CSS to clipboard',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                    lineNumber: 1067,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                lineNumber: 1058,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowGrid(!showGrid),
                className: `absolute top-6 left-6 z-10 p-3 rounded-xl shadow-lg border transition-all duration-200 ${showGrid ? 'bg-blue-500 text-white border-blue-500' : 'bg-white/90 backdrop-blur-sm text-slate-700 border-slate-200 hover:bg-white hover:shadow-xl'}`,
                title: "Toggle grid (G)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "3",
                            y: "3",
                            width: "7",
                            height: "7"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                            lineNumber: 1081,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "14",
                            y: "3",
                            width: "7",
                            height: "7"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                            lineNumber: 1082,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "14",
                            y: "14",
                            width: "7",
                            height: "7"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                            lineNumber: 1083,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "3",
                            y: "14",
                            width: "7",
                            height: "7"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                            lineNumber: 1084,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                    lineNumber: 1080,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                lineNumber: 1071,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setSnapEnabled(!snapEnabled),
                className: `absolute top-20 left-6 z-10 p-3 rounded-xl shadow-lg border transition-all duration-200 ${snapEnabled ? 'bg-purple-500 text-white border-purple-500' : 'bg-white/90 backdrop-blur-sm text-slate-700 border-slate-200 hover:bg-white hover:shadow-xl'}`,
                title: "Toggle smart snapping",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                        lineNumber: 1099,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                    lineNumber: 1098,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                lineNumber: 1089,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: showTipsTemporarily,
                className: "absolute top-36 left-6 z-10 p-3 rounded-xl shadow-lg border transition-all duration-200 bg-white/90 backdrop-blur-sm text-slate-700 border-slate-200 hover:bg-white hover:shadow-xl",
                title: "Show tips",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                            lineNumber: 1110,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                            lineNumber: 1111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "12",
                            y1: "17",
                            x2: "12.01",
                            y2: "17"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                            lineNumber: 1112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                    lineNumber: 1109,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                lineNumber: 1104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            (()=>{
                const displayPoint = selectedPoint !== null ? selectedPoint : hoveredPoint;
                return displayPoint !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute z-20 backdrop-blur-sm rounded-xl shadow-xl border p-3 pointer-events-auto ${selectedPoint !== null ? 'bg-blue-50/95 border-blue-200' : 'bg-white/95 border-slate-200'}`,
                    style: {
                        left: Math.min(window.innerWidth - 200, points[displayPoint].x * 800 + 50),
                        top: Math.max(20, points[displayPoint].y * 600 - 50)
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-3 h-3 rounded-full ${points[displayPoint].type === 'corner' ? 'bg-red-500' : points[displayPoint].type === 'symmetric' ? 'bg-green-500' : 'bg-yellow-500'}`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                                    lineNumber: 1130,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-sm font-medium ${selectedPoint !== null ? 'text-blue-700' : 'text-slate-700'}`,
                                    children: [
                                        "Point ",
                                        displayPoint,
                                        " ",
                                        selectedPoint !== null ? '(Selected)' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                                    lineNumber: 1136,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                            lineNumber: 1129,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>togglePointType(displayPoint),
                                    className: "p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors",
                                    title: points[displayPoint].type === 'smooth' ? 'Make corner' : 'Make smooth',
                                    children: points[displayPoint].type === 'smooth' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownLeft$3e$__["CornerDownLeft"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                                        lineNumber: 1148,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownRight$3e$__["CornerDownRight"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                                        lineNumber: 1149,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                                    lineNumber: 1142,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                points.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        removePoint(displayPoint);
                                        setSelectedPoint(null); // Deselect when removing
                                    },
                                    className: "p-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 transition-colors",
                                    title: "Remove point",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                                        lineNumber: 1162,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                                    lineNumber: 1154,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                            lineNumber: 1141,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                    lineNumber: 1120,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            })(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "h-full relative overflow-hidden",
                onMouseDown: handleCanvasMouseDown,
                onMouseMove: handleCanvasMouseMove,
                onMouseUp: handleCanvasMouseUp,
                onMouseLeave: handleCanvasMouseUp,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        className: "w-full h-full",
                        width: 800,
                        height: 600,
                        onClick: handleCanvasClick,
                        style: {
                            cursor: isSpacePressed || isPanning ? 'grab' : cursorMode === 'move-node' ? 'move' : 'default'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                        lineNumber: 1179,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    showTips && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute pointer-events-none bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 px-4 py-2 animate-[bounce_1s_ease-in-out_1]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-slate-600 flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "• Click path to add point"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                                    lineNumber: 1195,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "• Drag points to move"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                                    lineNumber: 1196,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "• Hover point for controls"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                                    lineNumber: 1197,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "• Shift + drag for angle snap"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                                    lineNumber: 1198,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "• G Toggle grid"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                                    lineNumber: 1199,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                            lineNumber: 1194,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                        lineNumber: 1193,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
                lineNumber: 1171,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Windows/BezierClipPath.tsx",
        lineNumber: 1056,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BezierClipPath;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Copy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }
    ],
    [
        "path",
        {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }
    ]
];
const Copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("copy", __iconNode);
;
 //# sourceMappingURL=copy.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Copy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Minus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ]
];
const Minus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("minus", __iconNode);
;
 //# sourceMappingURL=minus.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Minus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/corner-down-left.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CornerDownLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "polyline",
        {
            points: "9 10 4 15 9 20",
            key: "r3jprv"
        }
    ],
    [
        "path",
        {
            d: "M20 4v7a4 4 0 0 1-4 4H4",
            key: "6o5b7l"
        }
    ]
];
const CornerDownLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("corner-down-left", __iconNode);
;
 //# sourceMappingURL=corner-down-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/corner-down-left.js [app-ssr] (ecmascript) <export default as CornerDownLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CornerDownLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/corner-down-left.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/corner-down-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CornerDownRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "polyline",
        {
            points: "15 10 20 15 15 20",
            key: "1q7qjw"
        }
    ],
    [
        "path",
        {
            d: "M4 4v7a4 4 0 0 0 4 4h12",
            key: "z08zvw"
        }
    ]
];
const CornerDownRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("corner-down-right", __iconNode);
;
 //# sourceMappingURL=corner-down-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/corner-down-right.js [app-ssr] (ecmascript) <export default as CornerDownRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CornerDownRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/corner-down-right.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_cab92af9._.js.map