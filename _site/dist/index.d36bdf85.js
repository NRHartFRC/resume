// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8wPwC":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bbb56ff5d36bdf85";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"knYMF":[function(require,module,exports) {
var _api = require("./api");
// ...
// import Chart from 'chart.js/auto'
(async function() {
    // const data = [
    //   { year: 2010, count: 10 },
    //   { year: 2011, count: 20 },
    //   { year: 2012, count: 15 },
    //   { year: 2013, count: 25 },
    //   { year: 2014, count: 22 },
    //   { year: 2015, count: 30 },
    //   { year: 2016, count: 28 },
    // ];
    const data = await (0, _api.getAquisitionsByYear)();
    new Chart(document.getElementById("acquisitions"), {
        type: "bar",
        options: {
            animation: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        },
        data: {
            labels: data.map((row)=>row.year),
            datasets: [
                {
                    label: "Acquisitions by year",
                    data: data.map((row)=>row.count)
                }
            ]
        }
    });
})();

},{"./api":"8Zgej"}],"8Zgej":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAquisitionsByYear", ()=>getAquisitionsByYear);
parcelHelpers.export(exports, "getDimensions", ()=>getDimensions);
var _core = require("@cubejs-client/core");
const apiUrl = "https://heavy-lansford.gcp-us-central1.cubecloudapp.dev/cubejs-api/v1";
const cubeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjEwMDAwMDAwMDAsImV4cCI6NTAwMDAwMDAwMH0.OHZOpOBVKr-sCwn8sbZ5UFsqI3uCs6e4omT7P6WVMFw";
const cubeApi = new (0, _core.CubejsApi)(cubeToken, {
    apiUrl
});
async function getAquisitionsByYear() {
    const acquisitionsByYearQuery = {
        dimensions: [
            "Artworks.yearAcquired"
        ],
        measures: [
            "Artworks.count"
        ],
        filters: [
            {
                member: "Artworks.yearAcquired",
                operator: "set"
            }
        ],
        order: {
            "Artworks.yearAcquired": "asc"
        }
    };
    const resultSet = await cubeApi.load(acquisitionsByYearQuery);
    return resultSet.tablePivot().map((row)=>({
            year: parseInt(row["Artworks.yearAcquired"]),
            count: parseInt(row["Artworks.count"])
        }));
}
async function getDimensions() {
    const dimensionsQuery = {
        dimensions: [
            "Artworks.widthCm",
            "Artworks.heightCm"
        ],
        measures: [
            "Artworks.count"
        ],
        filters: [
            {
                member: "Artworks.classification",
                operator: "equals",
                values: [
                    "Painting"
                ]
            },
            {
                member: "Artworks.widthCm",
                operator: "set"
            },
            {
                member: "Artworks.widthCm",
                operator: "lt",
                values: [
                    "500"
                ]
            },
            {
                member: "Artworks.heightCm",
                operator: "set"
            },
            {
                member: "Artworks.heightCm",
                operator: "lt",
                values: [
                    "500"
                ]
            }
        ]
    };
    const resultSet = await cubeApi.load(dimensionsQuery);
    return resultSet.tablePivot().map((row)=>({
            width: parseInt(row["Artworks.widthCm"]),
            height: parseInt(row["Artworks.heightCm"]),
            count: parseInt(row["Artworks.count"])
        }));
}

},{"@cubejs-client/core":"5eFTf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5eFTf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CubejsApi", ()=>CubejsApi);
parcelHelpers.export(exports, "DEFAULT_GRANULARITY", ()=>DEFAULT_GRANULARITY);
parcelHelpers.export(exports, "GRANULARITIES", ()=>GRANULARITIES);
parcelHelpers.export(exports, "HttpTransport", ()=>HttpTransport);
parcelHelpers.export(exports, "RequestError", ()=>RequestError);
parcelHelpers.export(exports, "ResultSet", ()=>ResultSet);
parcelHelpers.export(exports, "aliasSeries", ()=>aliasSeries);
parcelHelpers.export(exports, "areQueriesEqual", ()=>areQueriesEqual);
parcelHelpers.export(exports, "defaultHeuristics", ()=>defaultHeuristics);
parcelHelpers.export(exports, "defaultOrder", ()=>defaultOrder);
parcelHelpers.export(exports, "flattenFilters", ()=>flattenFilters);
parcelHelpers.export(exports, "getOrderMembersFromOrder", ()=>getOrderMembersFromOrder);
parcelHelpers.export(exports, "getQueryMembers", ()=>getQueryMembers);
parcelHelpers.export(exports, "isQueryPresent", ()=>isQueryPresent);
parcelHelpers.export(exports, "moveItemInArray", ()=>moveItemInArray);
parcelHelpers.export(exports, "movePivotItem", ()=>movePivotItem);
parcelHelpers.export(exports, "removeEmptyQueryFields", ()=>removeEmptyQueryFields);
parcelHelpers.export(exports, "validateQuery", ()=>validateQuery);
var _uuid = require("uuid");
var _dayjs = require("dayjs");
var _dayjsDefault = parcelHelpers.interopDefault(_dayjs);
var _quarterOfYear = require("dayjs/plugin/quarterOfYear");
var _quarterOfYearDefault = parcelHelpers.interopDefault(_quarterOfYear);
var _en = require("dayjs/locale/en");
var _enDefault = parcelHelpers.interopDefault(_en);
var _ramda = require("ramda");
var _crossFetch = require("cross-fetch");
var _crossFetchDefault = parcelHelpers.interopDefault(_crossFetch);
var _urlSearchParamsPolyfill = require("url-search-params-polyfill");
const DEFAULT_GRANULARITY = "day";
const GRANULARITIES = [
    {
        name: undefined,
        title: "w/o grouping"
    },
    {
        name: "second",
        title: "Second"
    },
    {
        name: "minute",
        title: "Minute"
    },
    {
        name: "hour",
        title: "Hour"
    },
    {
        name: "day",
        title: "Day"
    },
    {
        name: "week",
        title: "Week"
    },
    {
        name: "month",
        title: "Month"
    },
    {
        name: "quarter",
        title: "Quarter"
    },
    {
        name: "year",
        title: "Year"
    }
];
function removeEmptyQueryFields(_query) {
    const query = _query || {};
    return (0, _ramda.fromPairs)((0, _ramda.toPairs)(query).map(([key, value])=>{
        if ([
            "measures",
            "dimensions",
            "segments",
            "timeDimensions",
            "filters"
        ].includes(key)) {
            if (Array.isArray(value) && value.length === 0) return null;
        }
        if (key === "order" && value) {
            if (Array.isArray(value) && !value.length) return null;
            else if (!Object.keys(value).length) return null;
        }
        return [
            key,
            value
        ];
    }).filter(Boolean));
}
function validateQuery(_query) {
    const query = _query || {};
    return removeEmptyQueryFields({
        ...query,
        filters: (query.filters || []).filter((f)=>f.operator),
        timeDimensions: (query.timeDimensions || []).filter((td)=>!(!td.dateRange && !td.granularity))
    });
}
function areQueriesEqual(query1 = {}, query2 = {}) {
    return (0, _ramda.equals)(Object.entries(query1 && query1.order || {}), Object.entries(query2 && query2.order || {})) && (0, _ramda.equals)(query1, query2);
}
function defaultOrder(query) {
    const granularity = (query.timeDimensions || []).find((d)=>d.granularity);
    if (granularity) return {
        [granularity.dimension]: "asc"
    };
    else if ((query.measures || []).length > 0 && (query.dimensions || []).length > 0) return {
        [query.measures[0]]: "desc"
    };
    else if ((query.dimensions || []).length > 0) return {
        [query.dimensions[0]]: "asc"
    };
    return {};
}
function defaultHeuristics(newState, oldQuery = {}, options) {
    const { query, ...props } = (0, _ramda.clone)(newState);
    const { meta, sessionGranularity } = options;
    const granularity = sessionGranularity || DEFAULT_GRANULARITY;
    let state = {
        query,
        ...props
    };
    let newQuery = null;
    if (!areQueriesEqual(query, oldQuery)) newQuery = query;
    if (Array.isArray(newQuery) || Array.isArray(oldQuery)) return newState;
    if (newQuery) {
        if ((oldQuery.timeDimensions || []).length === 1 && (newQuery.timeDimensions || []).length === 1 && newQuery.timeDimensions[0].granularity && oldQuery.timeDimensions[0].granularity !== newQuery.timeDimensions[0].granularity) state = {
            ...state,
            sessionGranularity: newQuery.timeDimensions[0].granularity
        };
        if ((oldQuery.measures || []).length === 0 && (newQuery.measures || []).length > 0 || (oldQuery.measures || []).length === 1 && (newQuery.measures || []).length === 1 && oldQuery.measures[0] !== newQuery.measures[0]) {
            const [td] = newQuery.timeDimensions || [];
            const defaultTimeDimension = meta.defaultTimeDimensionNameFor(newQuery.measures[0]);
            newQuery = {
                ...newQuery,
                timeDimensions: defaultTimeDimension ? [
                    {
                        dimension: defaultTimeDimension,
                        granularity: td && td.granularity || granularity,
                        dateRange: td && td.dateRange
                    }
                ] : []
            };
            return {
                ...state,
                pivotConfig: null,
                shouldApplyHeuristicOrder: true,
                query: newQuery,
                chartType: defaultTimeDimension ? "line" : "number"
            };
        }
        if ((oldQuery.dimensions || []).length === 0 && (newQuery.dimensions || []).length > 0) {
            newQuery = {
                ...newQuery,
                timeDimensions: (newQuery.timeDimensions || []).map((td)=>({
                        ...td,
                        granularity: undefined
                    }))
            };
            return {
                ...state,
                pivotConfig: null,
                shouldApplyHeuristicOrder: true,
                query: newQuery,
                chartType: "table"
            };
        }
        if ((oldQuery.dimensions || []).length > 0 && (newQuery.dimensions || []).length === 0) {
            newQuery = {
                ...newQuery,
                timeDimensions: (newQuery.timeDimensions || []).map((td)=>({
                        ...td,
                        granularity: td.granularity || granularity
                    }))
            };
            return {
                ...state,
                pivotConfig: null,
                shouldApplyHeuristicOrder: true,
                query: newQuery,
                chartType: (newQuery.timeDimensions || []).length ? "line" : "number"
            };
        }
        if (((oldQuery.dimensions || []).length > 0 || (oldQuery.measures || []).length > 0) && (newQuery.dimensions || []).length === 0 && (newQuery.measures || []).length === 0) {
            newQuery = {
                ...newQuery,
                timeDimensions: [],
                filters: []
            };
            return {
                ...state,
                pivotConfig: null,
                shouldApplyHeuristicOrder: true,
                query: newQuery,
                sessionGranularity: null
            };
        }
        return state;
    }
    if (state.chartType) {
        const newChartType = state.chartType;
        if ((newChartType === "line" || newChartType === "area") && (oldQuery.timeDimensions || []).length === 1 && !oldQuery.timeDimensions[0].granularity) {
            const [td] = oldQuery.timeDimensions;
            return {
                ...state,
                pivotConfig: null,
                query: {
                    ...oldQuery,
                    timeDimensions: [
                        {
                            ...td,
                            granularity
                        }
                    ]
                }
            };
        }
        if ((newChartType === "pie" || newChartType === "table" || newChartType === "number") && (oldQuery.timeDimensions || []).length === 1 && oldQuery.timeDimensions[0].granularity) {
            const [td] = oldQuery.timeDimensions;
            return {
                ...state,
                pivotConfig: null,
                shouldApplyHeuristicOrder: true,
                query: {
                    ...oldQuery,
                    timeDimensions: [
                        {
                            ...td,
                            granularity: undefined
                        }
                    ]
                }
            };
        }
    }
    return state;
}
function isQueryPresent(query) {
    if (!query) return false;
    return (Array.isArray(query) ? query : [
        query
    ]).every((q)=>q.measures && q.measures.length || q.dimensions && q.dimensions.length || q.timeDimensions && q.timeDimensions.length);
}
function movePivotItem(pivotConfig, sourceIndex, destinationIndex, sourceAxis, destinationAxis) {
    const nextPivotConfig = {
        ...pivotConfig,
        x: [
            ...pivotConfig.x
        ],
        y: [
            ...pivotConfig.y
        ]
    };
    const id = pivotConfig[sourceAxis][sourceIndex];
    const lastIndex = nextPivotConfig[destinationAxis].length - 1;
    if (id === "measures") destinationIndex = lastIndex + 1;
    else if (destinationIndex >= lastIndex && nextPivotConfig[destinationAxis][lastIndex] === "measures") destinationIndex = lastIndex - 1;
    nextPivotConfig[sourceAxis].splice(sourceIndex, 1);
    nextPivotConfig[destinationAxis].splice(destinationIndex, 0, id);
    return nextPivotConfig;
}
function moveItemInArray(list, sourceIndex, destinationIndex) {
    const result = [
        ...list
    ];
    const [removed] = result.splice(sourceIndex, 1);
    result.splice(destinationIndex, 0, removed);
    return result;
}
function flattenFilters(filters = []) {
    return filters.reduce((memo, filter)=>{
        if (filter.or || filter.and) return [
            ...memo,
            ...flattenFilters(filter.or || filter.and)
        ];
        return [
            ...memo,
            filter
        ];
    }, []);
}
function getQueryMembers(query = {}) {
    const keys = [
        "measures",
        "dimensions",
        "segments"
    ];
    const members = new Set();
    keys.forEach((key)=>(query[key] || []).forEach((member)=>members.add(member)));
    (query.timeDimensions || []).forEach((td)=>members.add(td.dimension));
    flattenFilters(query.filters).forEach((filter)=>members.add(filter.dimension || filter.member));
    return [
        ...members
    ];
}
function getOrderMembersFromOrder(orderMembers, order) {
    const ids = new Set();
    const indexedOrderMembers = (0, _ramda.indexBy)((0, _ramda.prop)("id"), orderMembers);
    const entries = Array.isArray(order) ? order : Object.entries(order || {});
    const nextOrderMembers = [];
    entries.forEach(([memberId, currentOrder])=>{
        if (currentOrder !== "none" && indexedOrderMembers[memberId]) {
            ids.add(memberId);
            nextOrderMembers.push({
                ...indexedOrderMembers[memberId],
                order: currentOrder
            });
        }
    });
    orderMembers.forEach((member)=>{
        if (!ids.has(member.id)) nextOrderMembers.push({
            ...member,
            order: member.order || "none"
        });
    });
    return nextOrderMembers;
}
function aliasSeries(values, index, pivotConfig, duplicateMeasures) {
    const nonNullValues = values.filter((value)=>value != null);
    if (pivotConfig && pivotConfig.aliasSeries && pivotConfig.aliasSeries[index]) return [
        pivotConfig.aliasSeries[index],
        ...nonNullValues
    ];
    else if (duplicateMeasures.has(nonNullValues[0])) return [
        index,
        ...nonNullValues
    ];
    return nonNullValues;
}
(0, _dayjsDefault.default).extend((0, _quarterOfYearDefault.default)); // When granularity is week, weekStart Value must be 1. However, since the client can change it globally (https://day.js.org/docs/en/i18n/changing-locale)
// So the function below has been added.
const internalDayjs = (...args)=>(0, _dayjsDefault.default)(...args).locale({
        ...(0, _enDefault.default),
        weekStart: 1
    });
const TIME_SERIES = {
    day: (range)=>range.by("d").map((d)=>d.format("YYYY-MM-DDT00:00:00.000")),
    month: (range)=>range.snapTo("month").by("M").map((d)=>d.format("YYYY-MM-01T00:00:00.000")),
    year: (range)=>range.snapTo("year").by("y").map((d)=>d.format("YYYY-01-01T00:00:00.000")),
    hour: (range)=>range.by("h").map((d)=>d.format("YYYY-MM-DDTHH:00:00.000")),
    minute: (range)=>range.by("m").map((d)=>d.format("YYYY-MM-DDTHH:mm:00.000")),
    second: (range)=>range.by("s").map((d)=>d.format("YYYY-MM-DDTHH:mm:ss.000")),
    week: (range)=>range.snapTo("week").by("w").map((d)=>d.startOf("week").format("YYYY-MM-DDT00:00:00.000")),
    quarter: (range)=>range.snapTo("quarter").by("quarter").map((d)=>d.startOf("quarter").format("YYYY-MM-DDT00:00:00.000"))
};
const DateRegex = /^\d\d\d\d-\d\d-\d\d$/;
const LocalDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z?$/;
const groupByToPairs = (keyFn)=>{
    const acc = new Map();
    return (data)=>{
        data.forEach((row)=>{
            const key = keyFn(row);
            if (!acc.has(key)) acc.set(key, []);
            acc.get(key).push(row);
        });
        return Array.from(acc.entries());
    };
};
const unnest = (arr)=>{
    const res = [];
    arr.forEach((subArr)=>{
        subArr.forEach((element)=>res.push(element));
    });
    return res;
};
const dayRange = (from, to)=>({
        by: (value)=>{
            const results = [];
            let start = internalDayjs(from);
            const end = internalDayjs(to);
            while(start.isBefore(end) || start.isSame(end)){
                results.push(start);
                start = start.add(1, value);
            }
            return results;
        },
        snapTo: (value)=>dayRange(internalDayjs(from).startOf(value), internalDayjs(to).endOf(value)),
        start: internalDayjs(from),
        end: internalDayjs(to)
    });
const QUERY_TYPE = {
    REGULAR_QUERY: "regularQuery",
    COMPARE_DATE_RANGE_QUERY: "compareDateRangeQuery",
    BLENDING_QUERY: "blendingQuery"
};
class ResultSet {
    static measureFromAxis(axisValues) {
        return axisValues[axisValues.length - 1];
    }
    static timeDimensionMember(td) {
        return `${td.dimension}.${td.granularity}`;
    }
    static deserialize(data, options = {}) {
        return new ResultSet(data.loadResponse, options);
    }
    constructor(loadResponse, options = {}){
        this.loadResponse = loadResponse;
        if (this.loadResponse.queryType != null) {
            this.queryType = loadResponse.queryType;
            this.loadResponses = loadResponse.results;
        } else {
            this.queryType = QUERY_TYPE.REGULAR_QUERY;
            this.loadResponse.pivotQuery = {
                ...loadResponse.query,
                queryType: this.queryType
            };
            this.loadResponses = [
                loadResponse
            ];
        }
        if (!Object.values(QUERY_TYPE).includes(this.queryType)) throw new Error("Unknown query type");
        this.parseDateMeasures = options.parseDateMeasures;
        this.options = options;
        this.backwardCompatibleData = [];
    }
    drillDown(drillDownLocator, pivotConfig) {
        if (this.queryType === QUERY_TYPE.COMPARE_DATE_RANGE_QUERY) throw new Error("compareDateRange drillDown query is not currently supported");
        if (this.queryType === QUERY_TYPE.BLENDING_QUERY) throw new Error("Data blending drillDown query is not currently supported");
        const { xValues = [], yValues = [] } = drillDownLocator;
        const normalizedPivotConfig = this.normalizePivotConfig(pivotConfig);
        const values = [];
        normalizedPivotConfig.x.forEach((member, currentIndex)=>values.push([
                member,
                xValues[currentIndex]
            ]));
        normalizedPivotConfig.y.forEach((member, currentIndex)=>values.push([
                member,
                yValues[currentIndex]
            ]));
        const { filters: parentFilters = [], segments = [] } = this.query();
        const { measures } = this.loadResponses[0].annotation;
        let [, measureName] = values.find(([member])=>member === "measures") || [];
        if (measureName === undefined) [measureName] = Object.keys(measures);
        if (!(measures[measureName] && measures[measureName].drillMembers || []).length) return null;
        const filters = [
            {
                member: measureName,
                operator: "measureFilter"
            },
            ...parentFilters
        ];
        const timeDimensions = [];
        values.filter(([member])=>member !== "measures").forEach(([member, value])=>{
            const [cubeName, dimension, granularity] = member.split(".");
            if (granularity !== undefined) {
                const range = dayRange(value, value).snapTo(granularity);
                timeDimensions.push({
                    dimension: [
                        cubeName,
                        dimension
                    ].join("."),
                    dateRange: [
                        range.start,
                        range.end
                    ].map((dt)=>dt.format("YYYY-MM-DDTHH:mm:ss.SSS"))
                });
            } else if (value == null) filters.push({
                member,
                operator: "notSet"
            });
            else filters.push({
                member,
                operator: "equals",
                values: [
                    value.toString()
                ]
            });
        });
        const { query } = this.loadResponses[0];
        if (timeDimensions.length === 0 && query.timeDimensions.length > 0 && query.timeDimensions[0].granularity == null) timeDimensions.push(query.timeDimensions[0]);
        return {
            ...measures[measureName].drillMembersGrouped,
            filters,
            ...segments.length > 0 ? {
                segments
            } : {},
            timeDimensions,
            segments,
            timezone: query.timezone
        };
    }
    series(pivotConfig) {
        return this.seriesNames(pivotConfig).map(({ title, shortTitle, key })=>({
                title,
                shortTitle,
                key,
                series: this.chartPivot(pivotConfig).map(({ x, ...obj })=>({
                        value: obj[key],
                        x
                    }))
            }));
    }
    axisValues(axis, resultIndex = 0) {
        const { query } = this.loadResponses[resultIndex];
        return (row)=>{
            const value = (measure)=>axis.filter((d)=>d !== "measures").map((d)=>row[d] != null ? row[d] : null).concat(measure ? [
                    measure
                ] : []);
            if (axis.find((d)=>d === "measures") && (query.measures || []).length) return query.measures.map(value);
            return [
                value()
            ];
        };
    }
    axisValuesString(axisValues, delimiter) {
        const formatValue = (v)=>{
            if (v == null) return "∅";
            else if (v === "") return "[Empty string]";
            else return v;
        };
        return axisValues.map(formatValue).join(delimiter || ", ");
    }
    static getNormalizedPivotConfig(query = {}, pivotConfig = null) {
        const defaultPivotConfig = {
            x: [],
            y: [],
            fillMissingDates: true,
            joinDateRange: false
        };
        const { measures = [], dimensions = [] } = query;
        const timeDimensions = (query.timeDimensions || []).filter((td)=>!!td.granularity);
        pivotConfig = pivotConfig || (timeDimensions.length ? {
            x: timeDimensions.map((td)=>ResultSet.timeDimensionMember(td)),
            y: dimensions
        } : {
            x: dimensions,
            y: []
        });
        pivotConfig = (0, _ramda.mergeDeepLeft)(pivotConfig, defaultPivotConfig);
        const substituteTimeDimensionMembers = (axis)=>axis.map((subDim)=>timeDimensions.find((td)=>td.dimension === subDim) && !dimensions.find((d)=>d === subDim) ? ResultSet.timeDimensionMember(query.timeDimensions.find((td)=>td.dimension === subDim)) : subDim);
        pivotConfig.x = substituteTimeDimensionMembers(pivotConfig.x);
        pivotConfig.y = substituteTimeDimensionMembers(pivotConfig.y);
        const allIncludedDimensions = pivotConfig.x.concat(pivotConfig.y);
        const allDimensions = timeDimensions.map((td)=>ResultSet.timeDimensionMember(td)).concat(dimensions);
        const dimensionFilter = (key)=>allDimensions.includes(key) || key === "measures";
        pivotConfig.x = pivotConfig.x.concat(allDimensions.filter((d)=>!allIncludedDimensions.includes(d) && d !== "compareDateRange")).filter(dimensionFilter);
        pivotConfig.y = pivotConfig.y.filter(dimensionFilter);
        if (!pivotConfig.x.concat(pivotConfig.y).find((d)=>d === "measures")) pivotConfig.y.push("measures");
        if (dimensions.includes("compareDateRange") && !pivotConfig.y.concat(pivotConfig.x).includes("compareDateRange")) pivotConfig.y.unshift("compareDateRange");
        if (!measures.length) {
            pivotConfig.x = pivotConfig.x.filter((d)=>d !== "measures");
            pivotConfig.y = pivotConfig.y.filter((d)=>d !== "measures");
        }
        return pivotConfig;
    }
    normalizePivotConfig(pivotConfig) {
        return ResultSet.getNormalizedPivotConfig(this.loadResponse.pivotQuery, pivotConfig);
    }
    timeSeries(timeDimension, resultIndex) {
        if (!timeDimension.granularity) return null;
        let { dateRange } = timeDimension;
        if (!dateRange) {
            const member = ResultSet.timeDimensionMember(timeDimension);
            const dates = (0, _ramda.pipe)((0, _ramda.map)((row)=>row[member] && internalDayjs(row[member])), (0, _ramda.filter)(Boolean))(this.timeDimensionBackwardCompatibleData(resultIndex));
            dateRange = dates.length && [
                (0, _ramda.reduce)((0, _ramda.minBy)((d)=>d.toDate()), dates[0], dates),
                (0, _ramda.reduce)((0, _ramda.maxBy)((d)=>d.toDate()), dates[0], dates)
            ] || null;
        }
        if (!dateRange) return null;
        const padToDay = timeDimension.dateRange ? timeDimension.dateRange.find((d)=>d.match(DateRegex)) : ![
            "hour",
            "minute",
            "second"
        ].includes(timeDimension.granularity);
        const [start, end] = dateRange;
        const range = dayRange(start, end);
        if (!TIME_SERIES[timeDimension.granularity]) throw new Error(`Unsupported time granularity: ${timeDimension.granularity}`);
        return TIME_SERIES[timeDimension.granularity](padToDay ? range.snapTo("d") : range);
    }
    pivot(pivotConfig) {
        pivotConfig = this.normalizePivotConfig(pivotConfig);
        const { pivotQuery: query } = this.loadResponse;
        const pivotImpl = (resultIndex = 0)=>{
            let groupByXAxis = groupByToPairs(({ xValues })=>this.axisValuesString(xValues));
            const measureValue = (row, measure)=>row[measure] || 0;
            if (pivotConfig.fillMissingDates && pivotConfig.x.length === 1 && (0, _ramda.equals)(pivotConfig.x, (query.timeDimensions || []).filter((td)=>Boolean(td.granularity)).map((td)=>ResultSet.timeDimensionMember(td)))) {
                const series = this.loadResponses.map((loadResponse)=>this.timeSeries(loadResponse.query.timeDimensions[0], resultIndex));
                if (series[0]) groupByXAxis = (rows)=>{
                    const byXValues = (0, _ramda.groupBy)(({ xValues })=>xValues[0], rows);
                    return series[resultIndex].map((d)=>[
                            d,
                            byXValues[d] || [
                                {
                                    xValues: [
                                        d
                                    ],
                                    row: {}
                                }
                            ]
                        ]);
                };
            }
            const xGrouped = (0, _ramda.pipe)((0, _ramda.map)((row)=>this.axisValues(pivotConfig.x, resultIndex)(row).map((xValues)=>({
                        xValues,
                        row
                    }))), unnest, groupByXAxis)(this.timeDimensionBackwardCompatibleData(resultIndex));
            const yValuesMap = {};
            xGrouped.forEach(([, rows])=>{
                rows.forEach(({ row })=>{
                    this.axisValues(pivotConfig.y, resultIndex)(row).forEach((values)=>{
                        if (Object.keys(row).length > 0) yValuesMap[values.join()] = values;
                    });
                });
            });
            const allYValues = Object.values(yValuesMap);
            const measureOnX = Boolean(pivotConfig.x.find((d)=>d === "measures"));
            return xGrouped.map(([, rows])=>{
                const { xValues } = rows[0];
                const yGrouped = {};
                rows.forEach(({ row })=>{
                    const arr = this.axisValues(pivotConfig.y, resultIndex)(row).map((yValues)=>({
                            yValues,
                            row
                        }));
                    arr.forEach((res)=>{
                        yGrouped[this.axisValuesString(res.yValues)] = res;
                    });
                });
                return {
                    xValues,
                    yValuesArray: unnest(allYValues.map((yValues)=>{
                        const measure = measureOnX ? ResultSet.measureFromAxis(xValues) : ResultSet.measureFromAxis(yValues);
                        return [
                            [
                                yValues,
                                measureValue((yGrouped[this.axisValuesString(yValues)] || {
                                    row: {}
                                }).row, measure)
                            ]
                        ];
                    }))
                };
            });
        };
        const pivots = this.loadResponses.length > 1 ? this.loadResponses.map((_, index)=>pivotImpl(index)) : [];
        return pivots.length ? this.mergePivots(pivots, pivotConfig.joinDateRange) : pivotImpl();
    }
    mergePivots(pivots, joinDateRange) {
        const minLengthPivot = pivots.reduce((memo, current)=>memo != null && current.length >= memo.length ? memo : current, null);
        return minLengthPivot.map((_, index)=>{
            const xValues = joinDateRange ? [
                pivots.map((pivot)=>pivot[index] && pivot[index].xValues || []).join(", ")
            ] : minLengthPivot[index].xValues;
            return {
                xValues,
                yValuesArray: unnest(pivots.map((pivot)=>pivot[index].yValuesArray))
            };
        });
    }
    pivotedRows(pivotConfig) {
        // TODO
        return this.chartPivot(pivotConfig);
    }
    chartPivot(pivotConfig) {
        const validate = (value)=>{
            if (this.parseDateMeasures && LocalDateRegex.test(value)) return new Date(value);
            else if (!Number.isNaN(Number.parseFloat(value))) return Number.parseFloat(value);
            return value;
        };
        const duplicateMeasures = new Set();
        if (this.queryType === QUERY_TYPE.BLENDING_QUERY) {
            const allMeasures = (0, _ramda.flatten)(this.loadResponses.map(({ query })=>query.measures));
            allMeasures.filter((e, i, a)=>a.indexOf(e) !== i).forEach((m)=>duplicateMeasures.add(m));
        }
        return this.pivot(pivotConfig).map(({ xValues, yValuesArray })=>{
            const yValuesMap = {};
            yValuesArray.forEach(([yValues, m], i)=>{
                yValuesMap[this.axisValuesString(aliasSeries(yValues, i, pivotConfig, duplicateMeasures), ",")] = m && validate(m);
            });
            return {
                x: this.axisValuesString(xValues, ","),
                xValues,
                ...yValuesMap
            };
        });
    }
    tablePivot(pivotConfig) {
        const normalizedPivotConfig = this.normalizePivotConfig(pivotConfig || {});
        const isMeasuresPresent = normalizedPivotConfig.x.concat(normalizedPivotConfig.y).includes("measures");
        return this.pivot(normalizedPivotConfig).map(({ xValues, yValuesArray })=>(0, _ramda.fromPairs)(normalizedPivotConfig.x.map((key, index)=>[
                    key,
                    xValues[index]
                ]).concat(isMeasuresPresent ? yValuesArray.map(([yValues, measure])=>[
                    yValues.length ? yValues.join() : "value",
                    measure
                ]) : [])));
    }
    tableColumns(pivotConfig) {
        const normalizedPivotConfig = this.normalizePivotConfig(pivotConfig || {});
        const annotations = (0, _ramda.pipe)((0, _ramda.pluck)("annotation"), (0, _ramda.reduce)((0, _ramda.mergeDeepLeft)(), {}))(this.loadResponses);
        const flatMeta = Object.values(annotations).reduce((a, b)=>({
                ...a,
                ...b
            }), {});
        const schema = {};
        const extractFields = (key)=>{
            const { title, shortTitle, type, format, meta } = flatMeta[key] || {};
            return {
                key,
                title,
                shortTitle,
                type,
                format,
                meta
            };
        };
        const pivot = this.pivot(normalizedPivotConfig);
        (pivot[0] && pivot[0].yValuesArray || []).forEach(([yValues])=>{
            if (yValues.length > 0) {
                let currentItem = schema;
                yValues.forEach((value, index)=>{
                    currentItem[`_${value}`] = {
                        key: value,
                        memberId: normalizedPivotConfig.y[index] === "measures" ? value : normalizedPivotConfig.y[index],
                        children: currentItem[`_${value}`] && currentItem[`_${value}`].children || {}
                    };
                    currentItem = currentItem[`_${value}`].children;
                });
            }
        });
        const toColumns = (item = {}, path = [])=>{
            if (Object.keys(item).length === 0) return [];
            return Object.values(item).map(({ key, ...currentItem })=>{
                const children = toColumns(currentItem.children, [
                    ...path,
                    key
                ]);
                const { title, shortTitle, ...fields } = extractFields(currentItem.memberId);
                const dimensionValue = key !== currentItem.memberId || title == null ? key : "";
                if (!children.length) return {
                    ...fields,
                    key,
                    dataIndex: [
                        ...path,
                        key
                    ].join(),
                    title: [
                        title,
                        dimensionValue
                    ].join(" ").trim(),
                    shortTitle: dimensionValue || shortTitle
                };
                return {
                    ...fields,
                    key,
                    title: [
                        title,
                        dimensionValue
                    ].join(" ").trim(),
                    shortTitle: dimensionValue || shortTitle,
                    children
                };
            });
        };
        let otherColumns = [];
        if (!pivot.length && normalizedPivotConfig.y.includes("measures")) otherColumns = (this.loadResponses[0].query.measures || []).map((key)=>({
                ...extractFields(key),
                dataIndex: key
            }));
         // Syntatic column to display the measure value
        if (!normalizedPivotConfig.y.length && normalizedPivotConfig.x.includes("measures")) otherColumns.push({
            key: "value",
            dataIndex: "value",
            title: "Value",
            shortTitle: "Value",
            type: "string"
        });
        return normalizedPivotConfig.x.map((key)=>{
            if (key === "measures") return {
                key: "measures",
                dataIndex: "measures",
                title: "Measures",
                shortTitle: "Measures",
                type: "string"
            };
            return {
                ...extractFields(key),
                dataIndex: key
            };
        }).concat(toColumns(schema)).concat(otherColumns);
    }
    totalRow(pivotConfig) {
        return this.chartPivot(pivotConfig)[0];
    }
    categories(pivotConfig) {
        // TODO
        return this.chartPivot(pivotConfig);
    }
    seriesNames(pivotConfig) {
        pivotConfig = this.normalizePivotConfig(pivotConfig);
        const measures = (0, _ramda.pipe)((0, _ramda.pluck)("annotation"), (0, _ramda.pluck)("measures"), (0, _ramda.mergeAll))(this.loadResponses);
        const seriesNames = unnest(this.loadResponses.map((_, index)=>(0, _ramda.pipe)((0, _ramda.map)(this.axisValues(pivotConfig.y, index)), unnest, (0, _ramda.uniq))(this.timeDimensionBackwardCompatibleData(index))));
        const duplicateMeasures = new Set();
        if (this.queryType === QUERY_TYPE.BLENDING_QUERY) {
            const allMeasures = (0, _ramda.flatten)(this.loadResponses.map(({ query })=>query.measures));
            allMeasures.filter((e, i, a)=>a.indexOf(e) !== i).forEach((m)=>duplicateMeasures.add(m));
        }
        return seriesNames.map((axisValues, i)=>{
            const aliasedAxis = aliasSeries(axisValues, i, pivotConfig, duplicateMeasures);
            return {
                title: this.axisValuesString(pivotConfig.y.find((d)=>d === "measures") ? (0, _ramda.dropLast)(1, aliasedAxis).concat(measures[ResultSet.measureFromAxis(axisValues)].title) : aliasedAxis, ", "),
                shortTitle: this.axisValuesString(pivotConfig.y.find((d)=>d === "measures") ? (0, _ramda.dropLast)(1, aliasedAxis).concat(measures[ResultSet.measureFromAxis(axisValues)].shortTitle) : aliasedAxis, ", "),
                key: this.axisValuesString(aliasedAxis, ","),
                yValues: axisValues
            };
        });
    }
    query() {
        if (this.queryType !== QUERY_TYPE.REGULAR_QUERY) throw new Error(`Method is not supported for a '${this.queryType}' query type. Please use decompose`);
        return this.loadResponses[0].query;
    }
    pivotQuery() {
        return this.loadResponse.pivotQuery || null;
    }
    rawData() {
        if (this.queryType !== QUERY_TYPE.REGULAR_QUERY) throw new Error(`Method is not supported for a '${this.queryType}' query type. Please use decompose`);
        return this.loadResponses[0].data;
    }
    annotation() {
        if (this.queryType !== QUERY_TYPE.REGULAR_QUERY) throw new Error(`Method is not supported for a '${this.queryType}' query type. Please use decompose`);
        return this.loadResponses[0].annotation;
    }
    timeDimensionBackwardCompatibleData(resultIndex) {
        if (resultIndex === undefined) throw new Error("resultIndex is required");
        if (!this.backwardCompatibleData[resultIndex]) {
            const { data, query } = this.loadResponses[resultIndex];
            const timeDimensions = (query.timeDimensions || []).filter((td)=>Boolean(td.granularity));
            this.backwardCompatibleData[resultIndex] = data.map((row)=>({
                    ...row,
                    ...(0, _ramda.fromPairs)(Object.keys(row).filter((field)=>timeDimensions.find((d)=>d.dimension === field) && !row[ResultSet.timeDimensionMember(timeDimensions.find((d)=>d.dimension === field))]).map((field)=>[
                            ResultSet.timeDimensionMember(timeDimensions.find((d)=>d.dimension === field)),
                            row[field]
                        ]))
                }));
        }
        return this.backwardCompatibleData[resultIndex];
    }
    decompose() {
        return this.loadResponses.map((result)=>new ResultSet({
                queryType: QUERY_TYPE.REGULAR_QUERY,
                pivotQuery: {
                    ...result.query,
                    queryType: QUERY_TYPE.REGULAR_QUERY
                },
                results: [
                    result
                ]
            }, this.options));
    }
    serialize() {
        return {
            loadResponse: (0, _ramda.clone)(this.loadResponse)
        };
    }
}
class SqlQuery {
    constructor(sqlQuery){
        this.sqlQuery = sqlQuery;
    }
    rawQuery() {
        return this.sqlQuery.sql;
    }
    sql() {
        return this.rawQuery().sql[0];
    }
}
/**
 * @module @cubejs-client/core
 */ const memberMap = (memberArray)=>(0, _ramda.fromPairs)(memberArray.map((m)=>[
            m.name,
            m
        ]));
const operators = {
    string: [
        {
            name: "contains",
            title: "contains"
        },
        {
            name: "notContains",
            title: "does not contain"
        },
        {
            name: "equals",
            title: "equals"
        },
        {
            name: "notEquals",
            title: "does not equal"
        },
        {
            name: "set",
            title: "is set"
        },
        {
            name: "notSet",
            title: "is not set"
        },
        {
            name: "startsWith",
            title: "starts with"
        },
        {
            name: "notStartsWith",
            title: "does not start with"
        },
        {
            name: "endsWith",
            title: "ends with"
        },
        {
            name: "notEndsWith",
            title: "does not end with"
        }
    ],
    number: [
        {
            name: "equals",
            title: "equals"
        },
        {
            name: "notEquals",
            title: "does not equal"
        },
        {
            name: "set",
            title: "is set"
        },
        {
            name: "notSet",
            title: "is not set"
        },
        {
            name: "gt",
            title: ">"
        },
        {
            name: "gte",
            title: ">="
        },
        {
            name: "lt",
            title: "<"
        },
        {
            name: "lte",
            title: "<="
        }
    ],
    time: [
        {
            name: "equals",
            title: "equals"
        },
        {
            name: "notEquals",
            title: "does not equal"
        },
        {
            name: "inDateRange",
            title: "in date range"
        },
        {
            name: "notInDateRange",
            title: "not in date range"
        },
        {
            name: "afterDate",
            title: "after date"
        },
        {
            name: "beforeDate",
            title: "before date"
        }
    ]
};
/**
 * Contains information about available cubes and it's members.
 */ class Meta {
    constructor(metaResponse){
        this.meta = metaResponse;
        const { cubes } = this.meta;
        this.cubes = cubes;
        this.cubesMap = (0, _ramda.fromPairs)(cubes.map((c)=>[
                c.name,
                {
                    measures: memberMap(c.measures),
                    dimensions: memberMap(c.dimensions),
                    segments: memberMap(c.segments)
                }
            ]));
    }
    membersForQuery(query, memberType) {
        return (0, _ramda.unnest)(this.cubes.map((c)=>c[memberType])).sort((a, b)=>a.title > b.title ? 1 : -1);
    }
    membersGroupedByCube() {
        const memberKeys = [
            "measures",
            "dimensions",
            "segments",
            "timeDimensions"
        ];
        return this.cubes.reduce((memo, cube)=>{
            memberKeys.forEach((key)=>{
                let members = cube[key];
                if (key === "timeDimensions") members = cube.dimensions.filter((m)=>m.type === "time");
                memo[key] = [
                    ...memo[key],
                    {
                        cubeName: cube.name,
                        cubeTitle: cube.title,
                        members
                    }
                ];
            });
            return memo;
        }, {
            measures: [],
            dimensions: [],
            segments: [],
            timeDimensions: []
        });
    }
    resolveMember(memberName, memberType) {
        const [cube] = memberName.split(".");
        if (!this.cubesMap[cube]) return {
            title: memberName,
            error: `Cube not found ${cube} for path '${memberName}'`
        };
        const memberTypes = Array.isArray(memberType) ? memberType : [
            memberType
        ];
        const member = memberTypes.map((type)=>this.cubesMap[cube][type] && this.cubesMap[cube][type][memberName]).find((m)=>m);
        if (!member) return {
            title: memberName,
            error: `Path not found '${memberName}'`
        };
        return member;
    }
    defaultTimeDimensionNameFor(memberName) {
        const [cube] = memberName.split(".");
        if (!this.cubesMap[cube]) return null;
        return Object.keys(this.cubesMap[cube].dimensions || {}).find((d)=>this.cubesMap[cube].dimensions[d].type === "time");
    }
    filterOperatorsForMember(memberName, memberType) {
        const member = this.resolveMember(memberName, memberType);
        return operators[member.type] || operators.string;
    }
}
class ProgressResult {
    constructor(progressResponse){
        this.progressResponse = progressResponse;
    }
    stage() {
        return this.progressResponse.stage;
    }
    timeElapsed() {
        return this.progressResponse.timeElapsed;
    }
}
class HttpTransport {
    constructor({ authorization, apiUrl, method, headers = {}, credentials }){
        this.authorization = authorization;
        this.apiUrl = apiUrl;
        this.method = method;
        this.headers = headers;
        this.credentials = credentials;
    }
    request(method, { baseRequestId, ...params }) {
        let spanCounter = 1;
        const searchParams = new URLSearchParams(params && Object.keys(params).map((k)=>({
                [k]: typeof params[k] === "object" ? JSON.stringify(params[k]) : params[k]
            })).reduce((a, b)=>({
                ...a,
                ...b
            }), {}));
        let url = `${this.apiUrl}/${method}${searchParams.toString().length ? `?${searchParams}` : ""}`;
        const requestMethod = this.method || (url.length < 2000 ? "GET" : "POST");
        if (requestMethod === "POST") {
            url = `${this.apiUrl}/${method}`;
            this.headers["Content-Type"] = "application/json";
        } // Currently, all methods make GET requests. If a method makes a request with a body payload,
        // remember to add {'Content-Type': 'application/json'} to the header.
        const runRequest = ()=>(0, _crossFetchDefault.default)(url, {
                method: requestMethod,
                headers: {
                    Authorization: this.authorization,
                    "x-request-id": baseRequestId && `${baseRequestId}-span-${spanCounter++}`,
                    ...this.headers
                },
                credentials: this.credentials,
                body: requestMethod === "POST" ? JSON.stringify(params) : null
            });
        return {
            /* eslint no-unsafe-finally: off */ async subscribe (callback) {
                let result = {
                    error: "network Error" // add default error message
                };
                try {
                    result = await runRequest();
                } finally{
                    return callback(result, ()=>this.subscribe(callback));
                }
            }
        };
    }
}
class RequestError extends Error {
    constructor(message, response, status){
        super(message);
        this.response = response;
        this.status = status;
    }
}
let mutexCounter = 0;
const MUTEX_ERROR = "Mutex has been changed";
/**
 * Query result dataset formats enum.
 */ const ResultType = {
    DEFAULT: "default",
    COMPACT: "compact"
};
function mutexPromise(promise) {
    return new Promise(async (resolve, reject)=>{
        try {
            resolve(await promise);
        } catch (error) {
            if (error !== MUTEX_ERROR) reject(error);
        }
    });
}
class CubejsApi {
    constructor(apiToken, options){
        if (apiToken !== null && !Array.isArray(apiToken) && typeof apiToken === "object") {
            options = apiToken;
            apiToken = undefined;
        }
        options = options || {};
        if (!options.transport && !options.apiUrl) throw new Error("The `apiUrl` option is required");
        this.apiToken = apiToken;
        this.apiUrl = options.apiUrl;
        this.method = options.method;
        this.headers = options.headers || {};
        this.credentials = options.credentials;
        this.transport = options.transport || new HttpTransport({
            authorization: typeof apiToken === "function" ? undefined : apiToken,
            apiUrl: this.apiUrl,
            method: this.method,
            headers: this.headers,
            credentials: this.credentials
        });
        this.pollInterval = options.pollInterval || 5;
        this.parseDateMeasures = options.parseDateMeasures;
        this.updateAuthorizationPromise = null;
    }
    request(method, params) {
        return this.transport.request(method, {
            baseRequestId: (0, _uuid.v4)(),
            ...params
        });
    }
    loadMethod(request, toResult, options, callback) {
        const mutexValue = ++mutexCounter;
        if (typeof options === "function" && !callback) {
            callback = options;
            options = undefined;
        }
        options = options || {};
        const mutexKey = options.mutexKey || "default";
        if (options.mutexObj) options.mutexObj[mutexKey] = mutexValue;
        const requestPromise = this.updateTransportAuthorization().then(()=>request());
        let skipAuthorizationUpdate = true;
        let unsubscribed = false;
        const checkMutex = async ()=>{
            const requestInstance = await requestPromise;
            if (options.mutexObj && options.mutexObj[mutexKey] !== mutexValue) {
                unsubscribed = true;
                if (requestInstance.unsubscribe) await requestInstance.unsubscribe();
                throw MUTEX_ERROR;
            }
        };
        const loadImpl = async (response, next)=>{
            const requestInstance = await requestPromise;
            const subscribeNext = async ()=>{
                if (options.subscribe && !unsubscribed) {
                    if (requestInstance.unsubscribe) return next();
                    else {
                        await new Promise((resolve)=>setTimeout(()=>resolve(), this.pollInterval * 1000));
                        return next();
                    }
                }
                return null;
            };
            const continueWait = async (wait)=>{
                if (!unsubscribed) {
                    if (wait) await new Promise((resolve)=>setTimeout(()=>resolve(), this.pollInterval * 1000));
                    return next();
                }
                return null;
            };
            if (options.subscribe && !skipAuthorizationUpdate) await this.updateTransportAuthorization();
            skipAuthorizationUpdate = false;
            if (response.status === 502) {
                await checkMutex();
                return continueWait(true);
            }
            let body = {};
            let text = "";
            try {
                text = await response.text();
                body = JSON.parse(text);
            } catch (_) {
                body.error = text;
            }
            if (body.error === "Continue wait") {
                await checkMutex();
                if (options.progressCallback) options.progressCallback(new ProgressResult(body));
                return continueWait();
            }
            if (response.status !== 200) {
                await checkMutex();
                if (!options.subscribe && requestInstance.unsubscribe) await requestInstance.unsubscribe();
                const error = new RequestError(body.error, body, response.status); // TODO error class
                if (callback) callback(error);
                else throw error;
                return subscribeNext();
            }
            await checkMutex();
            if (!options.subscribe && requestInstance.unsubscribe) await requestInstance.unsubscribe();
            const result = toResult(body);
            if (callback) callback(null, result);
            else return result;
            return subscribeNext();
        };
        const promise = requestPromise.then((requestInstance)=>mutexPromise(requestInstance.subscribe(loadImpl)));
        if (callback) return {
            unsubscribe: async ()=>{
                const requestInstance = await requestPromise;
                unsubscribed = true;
                if (requestInstance.unsubscribe) return requestInstance.unsubscribe();
                return null;
            }
        };
        else return promise;
    }
    async updateTransportAuthorization() {
        if (this.updateAuthorizationPromise) {
            await this.updateAuthorizationPromise;
            return;
        }
        if (typeof this.apiToken === "function") {
            this.updateAuthorizationPromise = new Promise(async (resolve, reject)=>{
                try {
                    const token = await this.apiToken();
                    if (this.transport.authorization !== token) this.transport.authorization = token;
                    resolve();
                } catch (error) {
                    reject(error);
                } finally{
                    this.updateAuthorizationPromise = null;
                }
            });
            await this.updateAuthorizationPromise;
        }
    }
    /**
   * Add system properties to a query object.
   * @param {Query} query
   * @param {string} responseFormat
   * @returns {void}
   * @private
   */ patchQueryInternal(query, responseFormat) {
        if (responseFormat === ResultType.COMPACT && query.responseFormat !== ResultType.COMPACT) return {
            ...query,
            responseFormat: ResultType.COMPACT
        };
        else return query;
    }
    /**
   * Process result fetched from the gateway#load method according
   * to the network protocol.
   * @param {*} response
   * @returns ResultSet
   * @private
   */ loadResponseInternal(response) {
        if (response.results.length && response.results[0].query.responseFormat && response.results[0].query.responseFormat === ResultType.COMPACT) response.results.forEach((result, j)=>{
            const data = [];
            result.data.dataset.forEach((r)=>{
                const row = {};
                result.data.members.forEach((m, i)=>{
                    row[m] = r[i];
                });
                data.push(row);
            });
            response.results[j].data = data;
        });
        return new ResultSet(response, {
            parseDateMeasures: this.parseDateMeasures
        });
    }
    load(query, options, callback, responseFormat = ResultType.DEFAULT) {
        if (responseFormat === ResultType.COMPACT) {
            if (Array.isArray(query)) query = query.map((q)=>this.patchQueryInternal(q, ResultType.COMPACT));
            else query = this.patchQueryInternal(query, ResultType.COMPACT);
        }
        return this.loadMethod(()=>this.request("load", {
                query,
                queryType: "multi"
            }), this.loadResponseInternal.bind(this), options, callback);
    }
    subscribe(query, options, callback, responseFormat = ResultType.DEFAULT) {
        if (responseFormat === ResultType.COMPACT) {
            if (Array.isArray(query)) query = query.map((q)=>this.patchQueryInternal(q, ResultType.COMPACT));
            else query = this.patchQueryInternal(query, ResultType.COMPACT);
        }
        return this.loadMethod(()=>this.request("subscribe", {
                query,
                queryType: "multi"
            }), this.loadResponseInternal.bind(this), {
            ...options,
            subscribe: true
        }, callback);
    }
    sql(query, options, callback) {
        return this.loadMethod(()=>this.request("sql", {
                query
            }), (response)=>Array.isArray(response) ? response.map((body)=>new SqlQuery(body)) : new SqlQuery(response), options, callback);
    }
    meta(options, callback) {
        return this.loadMethod(()=>this.request("meta"), (body)=>new Meta(body), options, callback);
    }
    dryRun(query, options, callback) {
        return this.loadMethod(()=>this.request("dry-run", {
                query
            }), (response)=>response, options, callback);
    }
}
var index = (apiToken, options)=>new CubejsApi(apiToken, options);
exports.default = index;

},{"uuid":"j4KJi","dayjs":"NJZFB","dayjs/plugin/quarterOfYear":"eZiqo","dayjs/locale/en":"jjEh4","ramda":"2eWAO","cross-fetch":"j4ah4","url-search-params-polyfill":"5fp49","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4KJi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":false,"./v3.js":false,"./v4.js":"8zJtu","./v5.js":false,"./nil.js":false,"./version.js":false,"./validate.js":false,"./stringify.js":false,"./parse.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zJtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(var i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJsDefault.default)(rnds);
}
exports.default = v4;

},{"./rng.js":"2psyE","./stringify.js":"5Y9F1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2psyE":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rng);
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
        // find the complete implementation of crypto (msCrypto) on IE11.
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5Y9F1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var byteToHex = [];
for(var i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).substr(1));
function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"eHPgI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHPgI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"bUa5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUa5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"NJZFB":[function(require,module,exports) {
!function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(t) {
            var e = [
                "th",
                "st",
                "nd",
                "rd"
            ], n = t % 100;
            return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
        }
    }, m = function(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    }, v = {
        s: m,
        z: function(t) {
            var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
            return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
        },
        m: function t(e, n) {
            if (e.date() < n.date()) return -t(n, e);
            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, c), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), c);
            return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function(t) {
            return ({
                M: c,
                y: h,
                w: o,
                d: a,
                D: d,
                h: u,
                m: s,
                s: i,
                ms: r,
                Q: f
            })[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function(t) {
            return void 0 === t;
        }
    }, g = "en", D = {};
    D[g] = M;
    var p = function(t) {
        return t instanceof b;
    }, S = function t(e, n, r) {
        var i;
        if (!e) return g;
        if ("string" == typeof e) {
            var s = e.toLowerCase();
            D[s] && (i = s), n && (D[s] = n, i = s);
            var u = e.split("-");
            if (!i && u.length > 1) return t(u[0]);
        } else {
            var a = e.name;
            D[a] = e, i = a;
        }
        return !r && i && (g = i), i || !r && g;
    }, w = function(t, e) {
        if (p(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return n.date = t, n.args = arguments, new b(n);
    }, O = v;
    O.l = S, O.i = p, O.w = function(t, e) {
        return w(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
        });
    };
    var b = function() {
        function M(t) {
            this.$L = S(t.locale, null, !0), this.parse(t);
        }
        var m = M.prototype;
        return m.parse = function(t) {
            this.$d = function(t) {
                var e = t.date, n = t.utc;
                if (null === e) return new Date(NaN);
                if (O.u(e)) return new Date;
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match($);
                    if (r) {
                        var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                    }
                }
                return new Date(e);
            }(t), this.$x = t.x || {}, this.init();
        }, m.init = function() {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m.$utils = function() {
            return O;
        }, m.isValid = function() {
            return !(this.$d.toString() === l);
        }, m.isSame = function(t, e) {
            var n = w(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
        }, m.isAfter = function(t, e) {
            return w(t) < this.startOf(e);
        }, m.isBefore = function(t, e) {
            return this.endOf(e) < w(t);
        }, m.$g = function(t, e, n) {
            return O.u(t) ? this[e] : this.set(n, t);
        }, m.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
        }, m.valueOf = function() {
            return this.$d.getTime();
        }, m.startOf = function(t, e) {
            var n = this, r = !!O.u(e) || e, f = O.p(t), l = function(t, e) {
                var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                return r ? i : i.endOf(a);
            }, $ = function(t, e) {
                return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
                    0,
                    0,
                    0,
                    0
                ] : [
                    23,
                    59,
                    59,
                    999
                ]).slice(e)), n);
            }, y = this.$W, M = this.$M, m = this.$D, v = "set" + (this.$u ? "UTC" : "");
            switch(f){
                case h:
                    return r ? l(1, 0) : l(31, 11);
                case c:
                    return r ? l(1, M) : l(0, M + 1);
                case o:
                    var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g;
                    return l(r ? m - D : m + (6 - D), M);
                case a:
                case d:
                    return $(v + "Hours", 0);
                case u:
                    return $(v + "Minutes", 1);
                case s:
                    return $(v + "Seconds", 2);
                case i:
                    return $(v + "Milliseconds", 3);
                default:
                    return this.clone();
            }
        }, m.endOf = function(t) {
            return this.startOf(t, !1);
        }, m.$set = function(t, e) {
            var n, o = O.p(t), f = "set" + (this.$u ? "UTC" : ""), l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o], $ = o === a ? this.$D + (e - this.$W) : e;
            if (o === c || o === h) {
                var y = this.clone().set(d, 1);
                y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
            } else l && this.$d[l]($);
            return this.init(), this;
        }, m.set = function(t, e) {
            return this.clone().$set(t, e);
        }, m.get = function(t) {
            return this[O.p(t)]();
        }, m.add = function(r, f) {
            var d, l = this;
            r = Number(r);
            var $ = O.p(f), y = function(t) {
                var e = w(l);
                return O.w(e.date(e.date() + Math.round(t * r)), l);
            };
            if ($ === c) return this.set(c, this.$M + r);
            if ($ === h) return this.set(h, this.$y + r);
            if ($ === a) return y(1);
            if ($ === o) return y(7);
            var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M;
            return O.w(m, this);
        }, m.subtract = function(t, e) {
            return this.add(-1 * t, e);
        }, m.format = function(t) {
            var e = this, n = this.$locale();
            if (!this.isValid()) return n.invalidDate || l;
            var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = O.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, c = n.months, f = n.meridiem, h = function(t, n, i, s) {
                return t && (t[n] || t(e, r)) || i[n].slice(0, s);
            }, d = function(t) {
                return O.s(s % 12 || 12, t, "0");
            }, $ = f || function(t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
            };
            return r.replace(y, function(t, r) {
                return r || function(t) {
                    switch(t){
                        case "YY":
                            return String(e.$y).slice(-2);
                        case "YYYY":
                            return O.s(e.$y, 4, "0");
                        case "M":
                            return a + 1;
                        case "MM":
                            return O.s(a + 1, 2, "0");
                        case "MMM":
                            return h(n.monthsShort, a, c, 3);
                        case "MMMM":
                            return h(c, a);
                        case "D":
                            return e.$D;
                        case "DD":
                            return O.s(e.$D, 2, "0");
                        case "d":
                            return String(e.$W);
                        case "dd":
                            return h(n.weekdaysMin, e.$W, o, 2);
                        case "ddd":
                            return h(n.weekdaysShort, e.$W, o, 3);
                        case "dddd":
                            return o[e.$W];
                        case "H":
                            return String(s);
                        case "HH":
                            return O.s(s, 2, "0");
                        case "h":
                            return d(1);
                        case "hh":
                            return d(2);
                        case "a":
                            return $(s, u, !0);
                        case "A":
                            return $(s, u, !1);
                        case "m":
                            return String(u);
                        case "mm":
                            return O.s(u, 2, "0");
                        case "s":
                            return String(e.$s);
                        case "ss":
                            return O.s(e.$s, 2, "0");
                        case "SSS":
                            return O.s(e.$ms, 3, "0");
                        case "Z":
                            return i;
                    }
                    return null;
                }(t) || i.replace(":", "");
            });
        }, m.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m.diff = function(r, d, l) {
            var $, y = this, M = O.p(d), m = w(r), v = (m.utcOffset() - this.utcOffset()) * e, g = this - m, D = function() {
                return O.m(y, m);
            };
            switch(M){
                case h:
                    $ = D() / 12;
                    break;
                case c:
                    $ = D();
                    break;
                case f:
                    $ = D() / 3;
                    break;
                case o:
                    $ = (g - v) / 6048e5;
                    break;
                case a:
                    $ = (g - v) / 864e5;
                    break;
                case u:
                    $ = g / n;
                    break;
                case s:
                    $ = g / e;
                    break;
                case i:
                    $ = g / t;
                    break;
                default:
                    $ = g;
            }
            return l ? $ : O.a($);
        }, m.daysInMonth = function() {
            return this.endOf(c).$D;
        }, m.$locale = function() {
            return D[this.$L];
        }, m.locale = function(t, e) {
            if (!t) return this.$L;
            var n = this.clone(), r = S(t, e, !0);
            return r && (n.$L = r), n;
        }, m.clone = function() {
            return O.w(this.$d, this);
        }, m.toDate = function() {
            return new Date(this.valueOf());
        }, m.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
        }, m.toISOString = function() {
            return this.$d.toISOString();
        }, m.toString = function() {
            return this.$d.toUTCString();
        }, M;
    }(), _ = b.prototype;
    return w.prototype = _, [
        [
            "$ms",
            r
        ],
        [
            "$s",
            i
        ],
        [
            "$m",
            s
        ],
        [
            "$H",
            u
        ],
        [
            "$W",
            a
        ],
        [
            "$M",
            c
        ],
        [
            "$y",
            h
        ],
        [
            "$D",
            d
        ]
    ].forEach(function(t) {
        _[t[1]] = function(e) {
            return this.$g(e, t[0], t[1]);
        };
    }), w.extend = function(t, e) {
        return t.$i || (t(e, b, w), t.$i = !0), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function(t) {
        return w(1e3 * t);
    }, w.en = D[g], w.Ls = D, w.p = {}, w;
});

},{}],"eZiqo":[function(require,module,exports) {
!function(t, n) {
    module.exports = n();
}(this, function() {
    "use strict";
    var t = "month", n = "quarter";
    return function(e, i) {
        var r = i.prototype;
        r.quarter = function(t) {
            return this.$utils().u(t) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (t - 1));
        };
        var s = r.add;
        r.add = function(e, i) {
            return e = Number(e), this.$utils().p(i) === n ? this.add(3 * e, t) : s.bind(this)(e, i);
        };
        var u = r.startOf;
        r.startOf = function(e, i) {
            var r = this.$utils(), s = !!r.u(i) || i;
            if (r.p(e) === n) {
                var o = this.quarter() - 1;
                return s ? this.month(3 * o).startOf(t).startOf("day") : this.month(3 * o + 2).endOf(t).endOf("day");
            }
            return u.bind(this)(e, i);
        };
    };
});

},{}],"jjEh4":[function(require,module,exports) {
!function(e, n) {
    module.exports = n();
}(this, function() {
    "use strict";
    return {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(e) {
            var n = [
                "th",
                "st",
                "nd",
                "rd"
            ], t = e % 100;
            return "[" + e + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
        }
    };
});

},{}],"2eWAO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "F", ()=>(0, _fJsDefault.default));
parcelHelpers.export(exports, "T", ()=>(0, _tJsDefault.default));
parcelHelpers.export(exports, "__", ()=>(0, _jsDefault.default));
parcelHelpers.export(exports, "add", ()=>(0, _addJsDefault.default));
parcelHelpers.export(exports, "addIndex", ()=>(0, _addIndexJsDefault.default));
parcelHelpers.export(exports, "adjust", ()=>(0, _adjustJsDefault.default));
parcelHelpers.export(exports, "all", ()=>(0, _allJsDefault.default));
parcelHelpers.export(exports, "allPass", ()=>(0, _allPassJsDefault.default));
parcelHelpers.export(exports, "always", ()=>(0, _alwaysJsDefault.default));
parcelHelpers.export(exports, "and", ()=>(0, _andJsDefault.default));
parcelHelpers.export(exports, "any", ()=>(0, _anyJsDefault.default));
parcelHelpers.export(exports, "anyPass", ()=>(0, _anyPassJsDefault.default));
parcelHelpers.export(exports, "ap", ()=>(0, _apJsDefault.default));
parcelHelpers.export(exports, "aperture", ()=>(0, _apertureJsDefault.default));
parcelHelpers.export(exports, "append", ()=>(0, _appendJsDefault.default));
parcelHelpers.export(exports, "apply", ()=>(0, _applyJsDefault.default));
parcelHelpers.export(exports, "applySpec", ()=>(0, _applySpecJsDefault.default));
parcelHelpers.export(exports, "applyTo", ()=>(0, _applyToJsDefault.default));
parcelHelpers.export(exports, "ascend", ()=>(0, _ascendJsDefault.default));
parcelHelpers.export(exports, "assoc", ()=>(0, _assocJsDefault.default));
parcelHelpers.export(exports, "assocPath", ()=>(0, _assocPathJsDefault.default));
parcelHelpers.export(exports, "binary", ()=>(0, _binaryJsDefault.default));
parcelHelpers.export(exports, "bind", ()=>(0, _bindJsDefault.default));
parcelHelpers.export(exports, "both", ()=>(0, _bothJsDefault.default));
parcelHelpers.export(exports, "call", ()=>(0, _callJsDefault.default));
parcelHelpers.export(exports, "chain", ()=>(0, _chainJsDefault.default));
parcelHelpers.export(exports, "clamp", ()=>(0, _clampJsDefault.default));
parcelHelpers.export(exports, "clone", ()=>(0, _cloneJsDefault.default));
parcelHelpers.export(exports, "comparator", ()=>(0, _comparatorJsDefault.default));
parcelHelpers.export(exports, "complement", ()=>(0, _complementJsDefault.default));
parcelHelpers.export(exports, "compose", ()=>(0, _composeJsDefault.default));
parcelHelpers.export(exports, "composeK", ()=>(0, _composeKJsDefault.default));
parcelHelpers.export(exports, "composeP", ()=>(0, _composePJsDefault.default));
parcelHelpers.export(exports, "composeWith", ()=>(0, _composeWithJsDefault.default));
parcelHelpers.export(exports, "concat", ()=>(0, _concatJsDefault.default));
parcelHelpers.export(exports, "cond", ()=>(0, _condJsDefault.default));
parcelHelpers.export(exports, "construct", ()=>(0, _constructJsDefault.default));
parcelHelpers.export(exports, "constructN", ()=>(0, _constructNJsDefault.default));
parcelHelpers.export(exports, "contains", ()=>(0, _containsJsDefault.default));
parcelHelpers.export(exports, "converge", ()=>(0, _convergeJsDefault.default));
parcelHelpers.export(exports, "countBy", ()=>(0, _countByJsDefault.default));
parcelHelpers.export(exports, "curry", ()=>(0, _curryJsDefault.default));
parcelHelpers.export(exports, "curryN", ()=>(0, _curryNJsDefault.default));
parcelHelpers.export(exports, "dec", ()=>(0, _decJsDefault.default));
parcelHelpers.export(exports, "defaultTo", ()=>(0, _defaultToJsDefault.default));
parcelHelpers.export(exports, "descend", ()=>(0, _descendJsDefault.default));
parcelHelpers.export(exports, "difference", ()=>(0, _differenceJsDefault.default));
parcelHelpers.export(exports, "differenceWith", ()=>(0, _differenceWithJsDefault.default));
parcelHelpers.export(exports, "dissoc", ()=>(0, _dissocJsDefault.default));
parcelHelpers.export(exports, "dissocPath", ()=>(0, _dissocPathJsDefault.default));
parcelHelpers.export(exports, "divide", ()=>(0, _divideJsDefault.default));
parcelHelpers.export(exports, "drop", ()=>(0, _dropJsDefault.default));
parcelHelpers.export(exports, "dropLast", ()=>(0, _dropLastJsDefault.default));
parcelHelpers.export(exports, "dropLastWhile", ()=>(0, _dropLastWhileJsDefault.default));
parcelHelpers.export(exports, "dropRepeats", ()=>(0, _dropRepeatsJsDefault.default));
parcelHelpers.export(exports, "dropRepeatsWith", ()=>(0, _dropRepeatsWithJsDefault.default));
parcelHelpers.export(exports, "dropWhile", ()=>(0, _dropWhileJsDefault.default));
parcelHelpers.export(exports, "either", ()=>(0, _eitherJsDefault.default));
parcelHelpers.export(exports, "empty", ()=>(0, _emptyJsDefault.default));
parcelHelpers.export(exports, "endsWith", ()=>(0, _endsWithJsDefault.default));
parcelHelpers.export(exports, "eqBy", ()=>(0, _eqByJsDefault.default));
parcelHelpers.export(exports, "eqProps", ()=>(0, _eqPropsJsDefault.default));
parcelHelpers.export(exports, "equals", ()=>(0, _equalsJsDefault.default));
parcelHelpers.export(exports, "evolve", ()=>(0, _evolveJsDefault.default));
parcelHelpers.export(exports, "filter", ()=>(0, _filterJsDefault.default));
parcelHelpers.export(exports, "find", ()=>(0, _findJsDefault.default));
parcelHelpers.export(exports, "findIndex", ()=>(0, _findIndexJsDefault.default));
parcelHelpers.export(exports, "findLast", ()=>(0, _findLastJsDefault.default));
parcelHelpers.export(exports, "findLastIndex", ()=>(0, _findLastIndexJsDefault.default));
parcelHelpers.export(exports, "flatten", ()=>(0, _flattenJsDefault.default));
parcelHelpers.export(exports, "flip", ()=>(0, _flipJsDefault.default));
parcelHelpers.export(exports, "forEach", ()=>(0, _forEachJsDefault.default));
parcelHelpers.export(exports, "forEachObjIndexed", ()=>(0, _forEachObjIndexedJsDefault.default));
parcelHelpers.export(exports, "fromPairs", ()=>(0, _fromPairsJsDefault.default));
parcelHelpers.export(exports, "groupBy", ()=>(0, _groupByJsDefault.default));
parcelHelpers.export(exports, "groupWith", ()=>(0, _groupWithJsDefault.default));
parcelHelpers.export(exports, "gt", ()=>(0, _gtJsDefault.default));
parcelHelpers.export(exports, "gte", ()=>(0, _gteJsDefault.default));
parcelHelpers.export(exports, "has", ()=>(0, _hasJsDefault.default));
parcelHelpers.export(exports, "hasIn", ()=>(0, _hasInJsDefault.default));
parcelHelpers.export(exports, "hasPath", ()=>(0, _hasPathJsDefault.default));
parcelHelpers.export(exports, "head", ()=>(0, _headJsDefault.default));
parcelHelpers.export(exports, "identical", ()=>(0, _identicalJsDefault.default));
parcelHelpers.export(exports, "identity", ()=>(0, _identityJsDefault.default));
parcelHelpers.export(exports, "ifElse", ()=>(0, _ifElseJsDefault.default));
parcelHelpers.export(exports, "inc", ()=>(0, _incJsDefault.default));
parcelHelpers.export(exports, "includes", ()=>(0, _includesJsDefault.default));
parcelHelpers.export(exports, "indexBy", ()=>(0, _indexByJsDefault.default));
parcelHelpers.export(exports, "indexOf", ()=>(0, _indexOfJsDefault.default));
parcelHelpers.export(exports, "init", ()=>(0, _initJsDefault.default));
parcelHelpers.export(exports, "innerJoin", ()=>(0, _innerJoinJsDefault.default));
parcelHelpers.export(exports, "insert", ()=>(0, _insertJsDefault.default));
parcelHelpers.export(exports, "insertAll", ()=>(0, _insertAllJsDefault.default));
parcelHelpers.export(exports, "intersection", ()=>(0, _intersectionJsDefault.default));
parcelHelpers.export(exports, "intersperse", ()=>(0, _intersperseJsDefault.default));
parcelHelpers.export(exports, "into", ()=>(0, _intoJsDefault.default));
parcelHelpers.export(exports, "invert", ()=>(0, _invertJsDefault.default));
parcelHelpers.export(exports, "invertObj", ()=>(0, _invertObjJsDefault.default));
parcelHelpers.export(exports, "invoker", ()=>(0, _invokerJsDefault.default));
parcelHelpers.export(exports, "is", ()=>(0, _isJsDefault.default));
parcelHelpers.export(exports, "isEmpty", ()=>(0, _isEmptyJsDefault.default));
parcelHelpers.export(exports, "isNil", ()=>(0, _isNilJsDefault.default));
parcelHelpers.export(exports, "join", ()=>(0, _joinJsDefault.default));
parcelHelpers.export(exports, "juxt", ()=>(0, _juxtJsDefault.default));
parcelHelpers.export(exports, "keys", ()=>(0, _keysJsDefault.default));
parcelHelpers.export(exports, "keysIn", ()=>(0, _keysInJsDefault.default));
parcelHelpers.export(exports, "last", ()=>(0, _lastJsDefault.default));
parcelHelpers.export(exports, "lastIndexOf", ()=>(0, _lastIndexOfJsDefault.default));
parcelHelpers.export(exports, "length", ()=>(0, _lengthJsDefault.default));
parcelHelpers.export(exports, "lens", ()=>(0, _lensJsDefault.default));
parcelHelpers.export(exports, "lensIndex", ()=>(0, _lensIndexJsDefault.default));
parcelHelpers.export(exports, "lensPath", ()=>(0, _lensPathJsDefault.default));
parcelHelpers.export(exports, "lensProp", ()=>(0, _lensPropJsDefault.default));
parcelHelpers.export(exports, "lift", ()=>(0, _liftJsDefault.default));
parcelHelpers.export(exports, "liftN", ()=>(0, _liftNJsDefault.default));
parcelHelpers.export(exports, "lt", ()=>(0, _ltJsDefault.default));
parcelHelpers.export(exports, "lte", ()=>(0, _lteJsDefault.default));
parcelHelpers.export(exports, "map", ()=>(0, _mapJsDefault.default));
parcelHelpers.export(exports, "mapAccum", ()=>(0, _mapAccumJsDefault.default));
parcelHelpers.export(exports, "mapAccumRight", ()=>(0, _mapAccumRightJsDefault.default));
parcelHelpers.export(exports, "mapObjIndexed", ()=>(0, _mapObjIndexedJsDefault.default));
parcelHelpers.export(exports, "match", ()=>(0, _matchJsDefault.default));
parcelHelpers.export(exports, "mathMod", ()=>(0, _mathModJsDefault.default));
parcelHelpers.export(exports, "max", ()=>(0, _maxJsDefault.default));
parcelHelpers.export(exports, "maxBy", ()=>(0, _maxByJsDefault.default));
parcelHelpers.export(exports, "mean", ()=>(0, _meanJsDefault.default));
parcelHelpers.export(exports, "median", ()=>(0, _medianJsDefault.default));
parcelHelpers.export(exports, "memoizeWith", ()=>(0, _memoizeWithJsDefault.default));
parcelHelpers.export(exports, "merge", ()=>(0, _mergeJsDefault.default));
parcelHelpers.export(exports, "mergeAll", ()=>(0, _mergeAllJsDefault.default));
parcelHelpers.export(exports, "mergeDeepLeft", ()=>(0, _mergeDeepLeftJsDefault.default));
parcelHelpers.export(exports, "mergeDeepRight", ()=>(0, _mergeDeepRightJsDefault.default));
parcelHelpers.export(exports, "mergeDeepWith", ()=>(0, _mergeDeepWithJsDefault.default));
parcelHelpers.export(exports, "mergeDeepWithKey", ()=>(0, _mergeDeepWithKeyJsDefault.default));
parcelHelpers.export(exports, "mergeLeft", ()=>(0, _mergeLeftJsDefault.default));
parcelHelpers.export(exports, "mergeRight", ()=>(0, _mergeRightJsDefault.default));
parcelHelpers.export(exports, "mergeWith", ()=>(0, _mergeWithJsDefault.default));
parcelHelpers.export(exports, "mergeWithKey", ()=>(0, _mergeWithKeyJsDefault.default));
parcelHelpers.export(exports, "min", ()=>(0, _minJsDefault.default));
parcelHelpers.export(exports, "minBy", ()=>(0, _minByJsDefault.default));
parcelHelpers.export(exports, "modulo", ()=>(0, _moduloJsDefault.default));
parcelHelpers.export(exports, "move", ()=>(0, _moveJsDefault.default));
parcelHelpers.export(exports, "multiply", ()=>(0, _multiplyJsDefault.default));
parcelHelpers.export(exports, "nAry", ()=>(0, _nAryJsDefault.default));
parcelHelpers.export(exports, "negate", ()=>(0, _negateJsDefault.default));
parcelHelpers.export(exports, "none", ()=>(0, _noneJsDefault.default));
parcelHelpers.export(exports, "not", ()=>(0, _notJsDefault.default));
parcelHelpers.export(exports, "nth", ()=>(0, _nthJsDefault.default));
parcelHelpers.export(exports, "nthArg", ()=>(0, _nthArgJsDefault.default));
parcelHelpers.export(exports, "o", ()=>(0, _oJsDefault.default));
parcelHelpers.export(exports, "objOf", ()=>(0, _objOfJsDefault.default));
parcelHelpers.export(exports, "of", ()=>(0, _ofJsDefault.default));
parcelHelpers.export(exports, "omit", ()=>(0, _omitJsDefault.default));
parcelHelpers.export(exports, "once", ()=>(0, _onceJsDefault.default));
parcelHelpers.export(exports, "or", ()=>(0, _orJsDefault.default));
parcelHelpers.export(exports, "otherwise", ()=>(0, _otherwiseJsDefault.default));
parcelHelpers.export(exports, "over", ()=>(0, _overJsDefault.default));
parcelHelpers.export(exports, "pair", ()=>(0, _pairJsDefault.default));
parcelHelpers.export(exports, "partial", ()=>(0, _partialJsDefault.default));
parcelHelpers.export(exports, "partialRight", ()=>(0, _partialRightJsDefault.default));
parcelHelpers.export(exports, "partition", ()=>(0, _partitionJsDefault.default));
parcelHelpers.export(exports, "path", ()=>(0, _pathJsDefault.default));
parcelHelpers.export(exports, "paths", ()=>(0, _pathsJsDefault.default));
parcelHelpers.export(exports, "pathEq", ()=>(0, _pathEqJsDefault.default));
parcelHelpers.export(exports, "pathOr", ()=>(0, _pathOrJsDefault.default));
parcelHelpers.export(exports, "pathSatisfies", ()=>(0, _pathSatisfiesJsDefault.default));
parcelHelpers.export(exports, "pick", ()=>(0, _pickJsDefault.default));
parcelHelpers.export(exports, "pickAll", ()=>(0, _pickAllJsDefault.default));
parcelHelpers.export(exports, "pickBy", ()=>(0, _pickByJsDefault.default));
parcelHelpers.export(exports, "pipe", ()=>(0, _pipeJsDefault.default));
parcelHelpers.export(exports, "pipeK", ()=>(0, _pipeKJsDefault.default));
parcelHelpers.export(exports, "pipeP", ()=>(0, _pipePJsDefault.default));
parcelHelpers.export(exports, "pipeWith", ()=>(0, _pipeWithJsDefault.default));
parcelHelpers.export(exports, "pluck", ()=>(0, _pluckJsDefault.default));
parcelHelpers.export(exports, "prepend", ()=>(0, _prependJsDefault.default));
parcelHelpers.export(exports, "product", ()=>(0, _productJsDefault.default));
parcelHelpers.export(exports, "project", ()=>(0, _projectJsDefault.default));
parcelHelpers.export(exports, "prop", ()=>(0, _propJsDefault.default));
parcelHelpers.export(exports, "propEq", ()=>(0, _propEqJsDefault.default));
parcelHelpers.export(exports, "propIs", ()=>(0, _propIsJsDefault.default));
parcelHelpers.export(exports, "propOr", ()=>(0, _propOrJsDefault.default));
parcelHelpers.export(exports, "propSatisfies", ()=>(0, _propSatisfiesJsDefault.default));
parcelHelpers.export(exports, "props", ()=>(0, _propsJsDefault.default));
parcelHelpers.export(exports, "range", ()=>(0, _rangeJsDefault.default));
parcelHelpers.export(exports, "reduce", ()=>(0, _reduceJsDefault.default));
parcelHelpers.export(exports, "reduceBy", ()=>(0, _reduceByJsDefault.default));
parcelHelpers.export(exports, "reduceRight", ()=>(0, _reduceRightJsDefault.default));
parcelHelpers.export(exports, "reduceWhile", ()=>(0, _reduceWhileJsDefault.default));
parcelHelpers.export(exports, "reduced", ()=>(0, _reducedJsDefault.default));
parcelHelpers.export(exports, "reject", ()=>(0, _rejectJsDefault.default));
parcelHelpers.export(exports, "remove", ()=>(0, _removeJsDefault.default));
parcelHelpers.export(exports, "repeat", ()=>(0, _repeatJsDefault.default));
parcelHelpers.export(exports, "replace", ()=>(0, _replaceJsDefault.default));
parcelHelpers.export(exports, "reverse", ()=>(0, _reverseJsDefault.default));
parcelHelpers.export(exports, "scan", ()=>(0, _scanJsDefault.default));
parcelHelpers.export(exports, "sequence", ()=>(0, _sequenceJsDefault.default));
parcelHelpers.export(exports, "set", ()=>(0, _setJsDefault.default));
parcelHelpers.export(exports, "slice", ()=>(0, _sliceJsDefault.default));
parcelHelpers.export(exports, "sort", ()=>(0, _sortJsDefault.default));
parcelHelpers.export(exports, "sortBy", ()=>(0, _sortByJsDefault.default));
parcelHelpers.export(exports, "sortWith", ()=>(0, _sortWithJsDefault.default));
parcelHelpers.export(exports, "split", ()=>(0, _splitJsDefault.default));
parcelHelpers.export(exports, "splitAt", ()=>(0, _splitAtJsDefault.default));
parcelHelpers.export(exports, "splitEvery", ()=>(0, _splitEveryJsDefault.default));
parcelHelpers.export(exports, "splitWhen", ()=>(0, _splitWhenJsDefault.default));
parcelHelpers.export(exports, "startsWith", ()=>(0, _startsWithJsDefault.default));
parcelHelpers.export(exports, "subtract", ()=>(0, _subtractJsDefault.default));
parcelHelpers.export(exports, "sum", ()=>(0, _sumJsDefault.default));
parcelHelpers.export(exports, "symmetricDifference", ()=>(0, _symmetricDifferenceJsDefault.default));
parcelHelpers.export(exports, "symmetricDifferenceWith", ()=>(0, _symmetricDifferenceWithJsDefault.default));
parcelHelpers.export(exports, "tail", ()=>(0, _tailJsDefault.default));
parcelHelpers.export(exports, "take", ()=>(0, _takeJsDefault.default));
parcelHelpers.export(exports, "takeLast", ()=>(0, _takeLastJsDefault.default));
parcelHelpers.export(exports, "takeLastWhile", ()=>(0, _takeLastWhileJsDefault.default));
parcelHelpers.export(exports, "takeWhile", ()=>(0, _takeWhileJsDefault.default));
parcelHelpers.export(exports, "tap", ()=>(0, _tapJsDefault.default));
parcelHelpers.export(exports, "test", ()=>(0, _testJsDefault.default));
parcelHelpers.export(exports, "andThen", ()=>(0, _andThenJsDefault.default));
parcelHelpers.export(exports, "times", ()=>(0, _timesJsDefault.default));
parcelHelpers.export(exports, "toLower", ()=>(0, _toLowerJsDefault.default));
parcelHelpers.export(exports, "toPairs", ()=>(0, _toPairsJsDefault.default));
parcelHelpers.export(exports, "toPairsIn", ()=>(0, _toPairsInJsDefault.default));
parcelHelpers.export(exports, "toString", ()=>(0, _toStringJsDefault.default));
parcelHelpers.export(exports, "toUpper", ()=>(0, _toUpperJsDefault.default));
parcelHelpers.export(exports, "transduce", ()=>(0, _transduceJsDefault.default));
parcelHelpers.export(exports, "transpose", ()=>(0, _transposeJsDefault.default));
parcelHelpers.export(exports, "traverse", ()=>(0, _traverseJsDefault.default));
parcelHelpers.export(exports, "trim", ()=>(0, _trimJsDefault.default));
parcelHelpers.export(exports, "tryCatch", ()=>(0, _tryCatchJsDefault.default));
parcelHelpers.export(exports, "type", ()=>(0, _typeJsDefault.default));
parcelHelpers.export(exports, "unapply", ()=>(0, _unapplyJsDefault.default));
parcelHelpers.export(exports, "unary", ()=>(0, _unaryJsDefault.default));
parcelHelpers.export(exports, "uncurryN", ()=>(0, _uncurryNJsDefault.default));
parcelHelpers.export(exports, "unfold", ()=>(0, _unfoldJsDefault.default));
parcelHelpers.export(exports, "union", ()=>(0, _unionJsDefault.default));
parcelHelpers.export(exports, "unionWith", ()=>(0, _unionWithJsDefault.default));
parcelHelpers.export(exports, "uniq", ()=>(0, _uniqJsDefault.default));
parcelHelpers.export(exports, "uniqBy", ()=>(0, _uniqByJsDefault.default));
parcelHelpers.export(exports, "uniqWith", ()=>(0, _uniqWithJsDefault.default));
parcelHelpers.export(exports, "unless", ()=>(0, _unlessJsDefault.default));
parcelHelpers.export(exports, "unnest", ()=>(0, _unnestJsDefault.default));
parcelHelpers.export(exports, "until", ()=>(0, _untilJsDefault.default));
parcelHelpers.export(exports, "update", ()=>(0, _updateJsDefault.default));
parcelHelpers.export(exports, "useWith", ()=>(0, _useWithJsDefault.default));
parcelHelpers.export(exports, "values", ()=>(0, _valuesJsDefault.default));
parcelHelpers.export(exports, "valuesIn", ()=>(0, _valuesInJsDefault.default));
parcelHelpers.export(exports, "view", ()=>(0, _viewJsDefault.default));
parcelHelpers.export(exports, "when", ()=>(0, _whenJsDefault.default));
parcelHelpers.export(exports, "where", ()=>(0, _whereJsDefault.default));
parcelHelpers.export(exports, "whereEq", ()=>(0, _whereEqJsDefault.default));
parcelHelpers.export(exports, "without", ()=>(0, _withoutJsDefault.default));
parcelHelpers.export(exports, "xor", ()=>(0, _xorJsDefault.default));
parcelHelpers.export(exports, "xprod", ()=>(0, _xprodJsDefault.default));
parcelHelpers.export(exports, "zip", ()=>(0, _zipJsDefault.default));
parcelHelpers.export(exports, "zipObj", ()=>(0, _zipObjJsDefault.default));
parcelHelpers.export(exports, "zipWith", ()=>(0, _zipWithJsDefault.default));
parcelHelpers.export(exports, "thunkify", ()=>(0, _thunkifyJsDefault.default));
var _fJs = require("./F.js");
var _fJsDefault = parcelHelpers.interopDefault(_fJs);
var _tJs = require("./T.js");
var _tJsDefault = parcelHelpers.interopDefault(_tJs);
var _js = require("./__.js");
var _jsDefault = parcelHelpers.interopDefault(_js);
var _addJs = require("./add.js");
var _addJsDefault = parcelHelpers.interopDefault(_addJs);
var _addIndexJs = require("./addIndex.js");
var _addIndexJsDefault = parcelHelpers.interopDefault(_addIndexJs);
var _adjustJs = require("./adjust.js");
var _adjustJsDefault = parcelHelpers.interopDefault(_adjustJs);
var _allJs = require("./all.js");
var _allJsDefault = parcelHelpers.interopDefault(_allJs);
var _allPassJs = require("./allPass.js");
var _allPassJsDefault = parcelHelpers.interopDefault(_allPassJs);
var _alwaysJs = require("./always.js");
var _alwaysJsDefault = parcelHelpers.interopDefault(_alwaysJs);
var _andJs = require("./and.js");
var _andJsDefault = parcelHelpers.interopDefault(_andJs);
var _anyJs = require("./any.js");
var _anyJsDefault = parcelHelpers.interopDefault(_anyJs);
var _anyPassJs = require("./anyPass.js");
var _anyPassJsDefault = parcelHelpers.interopDefault(_anyPassJs);
var _apJs = require("./ap.js");
var _apJsDefault = parcelHelpers.interopDefault(_apJs);
var _apertureJs = require("./aperture.js");
var _apertureJsDefault = parcelHelpers.interopDefault(_apertureJs);
var _appendJs = require("./append.js");
var _appendJsDefault = parcelHelpers.interopDefault(_appendJs);
var _applyJs = require("./apply.js");
var _applyJsDefault = parcelHelpers.interopDefault(_applyJs);
var _applySpecJs = require("./applySpec.js");
var _applySpecJsDefault = parcelHelpers.interopDefault(_applySpecJs);
var _applyToJs = require("./applyTo.js");
var _applyToJsDefault = parcelHelpers.interopDefault(_applyToJs);
var _ascendJs = require("./ascend.js");
var _ascendJsDefault = parcelHelpers.interopDefault(_ascendJs);
var _assocJs = require("./assoc.js");
var _assocJsDefault = parcelHelpers.interopDefault(_assocJs);
var _assocPathJs = require("./assocPath.js");
var _assocPathJsDefault = parcelHelpers.interopDefault(_assocPathJs);
var _binaryJs = require("./binary.js");
var _binaryJsDefault = parcelHelpers.interopDefault(_binaryJs);
var _bindJs = require("./bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var _bothJs = require("./both.js");
var _bothJsDefault = parcelHelpers.interopDefault(_bothJs);
var _callJs = require("./call.js");
var _callJsDefault = parcelHelpers.interopDefault(_callJs);
var _chainJs = require("./chain.js");
var _chainJsDefault = parcelHelpers.interopDefault(_chainJs);
var _clampJs = require("./clamp.js");
var _clampJsDefault = parcelHelpers.interopDefault(_clampJs);
var _cloneJs = require("./clone.js");
var _cloneJsDefault = parcelHelpers.interopDefault(_cloneJs);
var _comparatorJs = require("./comparator.js");
var _comparatorJsDefault = parcelHelpers.interopDefault(_comparatorJs);
var _complementJs = require("./complement.js");
var _complementJsDefault = parcelHelpers.interopDefault(_complementJs);
var _composeJs = require("./compose.js");
var _composeJsDefault = parcelHelpers.interopDefault(_composeJs);
var _composeKJs = require("./composeK.js");
var _composeKJsDefault = parcelHelpers.interopDefault(_composeKJs);
var _composePJs = require("./composeP.js");
var _composePJsDefault = parcelHelpers.interopDefault(_composePJs);
var _composeWithJs = require("./composeWith.js");
var _composeWithJsDefault = parcelHelpers.interopDefault(_composeWithJs);
var _concatJs = require("./concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _condJs = require("./cond.js");
var _condJsDefault = parcelHelpers.interopDefault(_condJs);
var _constructJs = require("./construct.js");
var _constructJsDefault = parcelHelpers.interopDefault(_constructJs);
var _constructNJs = require("./constructN.js");
var _constructNJsDefault = parcelHelpers.interopDefault(_constructNJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _convergeJs = require("./converge.js");
var _convergeJsDefault = parcelHelpers.interopDefault(_convergeJs);
var _countByJs = require("./countBy.js");
var _countByJsDefault = parcelHelpers.interopDefault(_countByJs);
var _curryJs = require("./curry.js");
var _curryJsDefault = parcelHelpers.interopDefault(_curryJs);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _decJs = require("./dec.js");
var _decJsDefault = parcelHelpers.interopDefault(_decJs);
var _defaultToJs = require("./defaultTo.js");
var _defaultToJsDefault = parcelHelpers.interopDefault(_defaultToJs);
var _descendJs = require("./descend.js");
var _descendJsDefault = parcelHelpers.interopDefault(_descendJs);
var _differenceJs = require("./difference.js");
var _differenceJsDefault = parcelHelpers.interopDefault(_differenceJs);
var _differenceWithJs = require("./differenceWith.js");
var _differenceWithJsDefault = parcelHelpers.interopDefault(_differenceWithJs);
var _dissocJs = require("./dissoc.js");
var _dissocJsDefault = parcelHelpers.interopDefault(_dissocJs);
var _dissocPathJs = require("./dissocPath.js");
var _dissocPathJsDefault = parcelHelpers.interopDefault(_dissocPathJs);
var _divideJs = require("./divide.js");
var _divideJsDefault = parcelHelpers.interopDefault(_divideJs);
var _dropJs = require("./drop.js");
var _dropJsDefault = parcelHelpers.interopDefault(_dropJs);
var _dropLastJs = require("./dropLast.js");
var _dropLastJsDefault = parcelHelpers.interopDefault(_dropLastJs);
var _dropLastWhileJs = require("./dropLastWhile.js");
var _dropLastWhileJsDefault = parcelHelpers.interopDefault(_dropLastWhileJs);
var _dropRepeatsJs = require("./dropRepeats.js");
var _dropRepeatsJsDefault = parcelHelpers.interopDefault(_dropRepeatsJs);
var _dropRepeatsWithJs = require("./dropRepeatsWith.js");
var _dropRepeatsWithJsDefault = parcelHelpers.interopDefault(_dropRepeatsWithJs);
var _dropWhileJs = require("./dropWhile.js");
var _dropWhileJsDefault = parcelHelpers.interopDefault(_dropWhileJs);
var _eitherJs = require("./either.js");
var _eitherJsDefault = parcelHelpers.interopDefault(_eitherJs);
var _emptyJs = require("./empty.js");
var _emptyJsDefault = parcelHelpers.interopDefault(_emptyJs);
var _endsWithJs = require("./endsWith.js");
var _endsWithJsDefault = parcelHelpers.interopDefault(_endsWithJs);
var _eqByJs = require("./eqBy.js");
var _eqByJsDefault = parcelHelpers.interopDefault(_eqByJs);
var _eqPropsJs = require("./eqProps.js");
var _eqPropsJsDefault = parcelHelpers.interopDefault(_eqPropsJs);
var _equalsJs = require("./equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
var _evolveJs = require("./evolve.js");
var _evolveJsDefault = parcelHelpers.interopDefault(_evolveJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _findJs = require("./find.js");
var _findJsDefault = parcelHelpers.interopDefault(_findJs);
var _findIndexJs = require("./findIndex.js");
var _findIndexJsDefault = parcelHelpers.interopDefault(_findIndexJs);
var _findLastJs = require("./findLast.js");
var _findLastJsDefault = parcelHelpers.interopDefault(_findLastJs);
var _findLastIndexJs = require("./findLastIndex.js");
var _findLastIndexJsDefault = parcelHelpers.interopDefault(_findLastIndexJs);
var _flattenJs = require("./flatten.js");
var _flattenJsDefault = parcelHelpers.interopDefault(_flattenJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _forEachJs = require("./forEach.js");
var _forEachJsDefault = parcelHelpers.interopDefault(_forEachJs);
var _forEachObjIndexedJs = require("./forEachObjIndexed.js");
var _forEachObjIndexedJsDefault = parcelHelpers.interopDefault(_forEachObjIndexedJs);
var _fromPairsJs = require("./fromPairs.js");
var _fromPairsJsDefault = parcelHelpers.interopDefault(_fromPairsJs);
var _groupByJs = require("./groupBy.js");
var _groupByJsDefault = parcelHelpers.interopDefault(_groupByJs);
var _groupWithJs = require("./groupWith.js");
var _groupWithJsDefault = parcelHelpers.interopDefault(_groupWithJs);
var _gtJs = require("./gt.js");
var _gtJsDefault = parcelHelpers.interopDefault(_gtJs);
var _gteJs = require("./gte.js");
var _gteJsDefault = parcelHelpers.interopDefault(_gteJs);
var _hasJs = require("./has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var _hasInJs = require("./hasIn.js");
var _hasInJsDefault = parcelHelpers.interopDefault(_hasInJs);
var _hasPathJs = require("./hasPath.js");
var _hasPathJsDefault = parcelHelpers.interopDefault(_hasPathJs);
var _headJs = require("./head.js");
var _headJsDefault = parcelHelpers.interopDefault(_headJs);
var _identicalJs = require("./identical.js");
var _identicalJsDefault = parcelHelpers.interopDefault(_identicalJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _ifElseJs = require("./ifElse.js");
var _ifElseJsDefault = parcelHelpers.interopDefault(_ifElseJs);
var _incJs = require("./inc.js");
var _incJsDefault = parcelHelpers.interopDefault(_incJs);
var _includesJs = require("./includes.js");
var _includesJsDefault = parcelHelpers.interopDefault(_includesJs);
var _indexByJs = require("./indexBy.js");
var _indexByJsDefault = parcelHelpers.interopDefault(_indexByJs);
var _indexOfJs = require("./indexOf.js");
var _indexOfJsDefault = parcelHelpers.interopDefault(_indexOfJs);
var _initJs = require("./init.js");
var _initJsDefault = parcelHelpers.interopDefault(_initJs);
var _innerJoinJs = require("./innerJoin.js");
var _innerJoinJsDefault = parcelHelpers.interopDefault(_innerJoinJs);
var _insertJs = require("./insert.js");
var _insertJsDefault = parcelHelpers.interopDefault(_insertJs);
var _insertAllJs = require("./insertAll.js");
var _insertAllJsDefault = parcelHelpers.interopDefault(_insertAllJs);
var _intersectionJs = require("./intersection.js");
var _intersectionJsDefault = parcelHelpers.interopDefault(_intersectionJs);
var _intersperseJs = require("./intersperse.js");
var _intersperseJsDefault = parcelHelpers.interopDefault(_intersperseJs);
var _intoJs = require("./into.js");
var _intoJsDefault = parcelHelpers.interopDefault(_intoJs);
var _invertJs = require("./invert.js");
var _invertJsDefault = parcelHelpers.interopDefault(_invertJs);
var _invertObjJs = require("./invertObj.js");
var _invertObjJsDefault = parcelHelpers.interopDefault(_invertObjJs);
var _invokerJs = require("./invoker.js");
var _invokerJsDefault = parcelHelpers.interopDefault(_invokerJs);
var _isJs = require("./is.js");
var _isJsDefault = parcelHelpers.interopDefault(_isJs);
var _isEmptyJs = require("./isEmpty.js");
var _isEmptyJsDefault = parcelHelpers.interopDefault(_isEmptyJs);
var _isNilJs = require("./isNil.js");
var _isNilJsDefault = parcelHelpers.interopDefault(_isNilJs);
var _joinJs = require("./join.js");
var _joinJsDefault = parcelHelpers.interopDefault(_joinJs);
var _juxtJs = require("./juxt.js");
var _juxtJsDefault = parcelHelpers.interopDefault(_juxtJs);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
var _keysInJs = require("./keysIn.js");
var _keysInJsDefault = parcelHelpers.interopDefault(_keysInJs);
var _lastJs = require("./last.js");
var _lastJsDefault = parcelHelpers.interopDefault(_lastJs);
var _lastIndexOfJs = require("./lastIndexOf.js");
var _lastIndexOfJsDefault = parcelHelpers.interopDefault(_lastIndexOfJs);
var _lengthJs = require("./length.js");
var _lengthJsDefault = parcelHelpers.interopDefault(_lengthJs);
var _lensJs = require("./lens.js");
var _lensJsDefault = parcelHelpers.interopDefault(_lensJs);
var _lensIndexJs = require("./lensIndex.js");
var _lensIndexJsDefault = parcelHelpers.interopDefault(_lensIndexJs);
var _lensPathJs = require("./lensPath.js");
var _lensPathJsDefault = parcelHelpers.interopDefault(_lensPathJs);
var _lensPropJs = require("./lensProp.js");
var _lensPropJsDefault = parcelHelpers.interopDefault(_lensPropJs);
var _liftJs = require("./lift.js");
var _liftJsDefault = parcelHelpers.interopDefault(_liftJs);
var _liftNJs = require("./liftN.js");
var _liftNJsDefault = parcelHelpers.interopDefault(_liftNJs);
var _ltJs = require("./lt.js");
var _ltJsDefault = parcelHelpers.interopDefault(_ltJs);
var _lteJs = require("./lte.js");
var _lteJsDefault = parcelHelpers.interopDefault(_lteJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _mapAccumJs = require("./mapAccum.js");
var _mapAccumJsDefault = parcelHelpers.interopDefault(_mapAccumJs);
var _mapAccumRightJs = require("./mapAccumRight.js");
var _mapAccumRightJsDefault = parcelHelpers.interopDefault(_mapAccumRightJs);
var _mapObjIndexedJs = require("./mapObjIndexed.js");
var _mapObjIndexedJsDefault = parcelHelpers.interopDefault(_mapObjIndexedJs);
var _matchJs = require("./match.js");
var _matchJsDefault = parcelHelpers.interopDefault(_matchJs);
var _mathModJs = require("./mathMod.js");
var _mathModJsDefault = parcelHelpers.interopDefault(_mathModJs);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _maxByJs = require("./maxBy.js");
var _maxByJsDefault = parcelHelpers.interopDefault(_maxByJs);
var _meanJs = require("./mean.js");
var _meanJsDefault = parcelHelpers.interopDefault(_meanJs);
var _medianJs = require("./median.js");
var _medianJsDefault = parcelHelpers.interopDefault(_medianJs);
var _memoizeWithJs = require("./memoizeWith.js");
var _memoizeWithJsDefault = parcelHelpers.interopDefault(_memoizeWithJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _mergeAllJs = require("./mergeAll.js");
var _mergeAllJsDefault = parcelHelpers.interopDefault(_mergeAllJs);
var _mergeDeepLeftJs = require("./mergeDeepLeft.js");
var _mergeDeepLeftJsDefault = parcelHelpers.interopDefault(_mergeDeepLeftJs);
var _mergeDeepRightJs = require("./mergeDeepRight.js");
var _mergeDeepRightJsDefault = parcelHelpers.interopDefault(_mergeDeepRightJs);
var _mergeDeepWithJs = require("./mergeDeepWith.js");
var _mergeDeepWithJsDefault = parcelHelpers.interopDefault(_mergeDeepWithJs);
var _mergeDeepWithKeyJs = require("./mergeDeepWithKey.js");
var _mergeDeepWithKeyJsDefault = parcelHelpers.interopDefault(_mergeDeepWithKeyJs);
var _mergeLeftJs = require("./mergeLeft.js");
var _mergeLeftJsDefault = parcelHelpers.interopDefault(_mergeLeftJs);
var _mergeRightJs = require("./mergeRight.js");
var _mergeRightJsDefault = parcelHelpers.interopDefault(_mergeRightJs);
var _mergeWithJs = require("./mergeWith.js");
var _mergeWithJsDefault = parcelHelpers.interopDefault(_mergeWithJs);
var _mergeWithKeyJs = require("./mergeWithKey.js");
var _mergeWithKeyJsDefault = parcelHelpers.interopDefault(_mergeWithKeyJs);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
var _minByJs = require("./minBy.js");
var _minByJsDefault = parcelHelpers.interopDefault(_minByJs);
var _moduloJs = require("./modulo.js");
var _moduloJsDefault = parcelHelpers.interopDefault(_moduloJs);
var _moveJs = require("./move.js");
var _moveJsDefault = parcelHelpers.interopDefault(_moveJs);
var _multiplyJs = require("./multiply.js");
var _multiplyJsDefault = parcelHelpers.interopDefault(_multiplyJs);
var _nAryJs = require("./nAry.js");
var _nAryJsDefault = parcelHelpers.interopDefault(_nAryJs);
var _negateJs = require("./negate.js");
var _negateJsDefault = parcelHelpers.interopDefault(_negateJs);
var _noneJs = require("./none.js");
var _noneJsDefault = parcelHelpers.interopDefault(_noneJs);
var _notJs = require("./not.js");
var _notJsDefault = parcelHelpers.interopDefault(_notJs);
var _nthJs = require("./nth.js");
var _nthJsDefault = parcelHelpers.interopDefault(_nthJs);
var _nthArgJs = require("./nthArg.js");
var _nthArgJsDefault = parcelHelpers.interopDefault(_nthArgJs);
var _oJs = require("./o.js");
var _oJsDefault = parcelHelpers.interopDefault(_oJs);
var _objOfJs = require("./objOf.js");
var _objOfJsDefault = parcelHelpers.interopDefault(_objOfJs);
var _ofJs = require("./of.js");
var _ofJsDefault = parcelHelpers.interopDefault(_ofJs);
var _omitJs = require("./omit.js");
var _omitJsDefault = parcelHelpers.interopDefault(_omitJs);
var _onceJs = require("./once.js");
var _onceJsDefault = parcelHelpers.interopDefault(_onceJs);
var _orJs = require("./or.js");
var _orJsDefault = parcelHelpers.interopDefault(_orJs);
var _otherwiseJs = require("./otherwise.js");
var _otherwiseJsDefault = parcelHelpers.interopDefault(_otherwiseJs);
var _overJs = require("./over.js");
var _overJsDefault = parcelHelpers.interopDefault(_overJs);
var _pairJs = require("./pair.js");
var _pairJsDefault = parcelHelpers.interopDefault(_pairJs);
var _partialJs = require("./partial.js");
var _partialJsDefault = parcelHelpers.interopDefault(_partialJs);
var _partialRightJs = require("./partialRight.js");
var _partialRightJsDefault = parcelHelpers.interopDefault(_partialRightJs);
var _partitionJs = require("./partition.js");
var _partitionJsDefault = parcelHelpers.interopDefault(_partitionJs);
var _pathJs = require("./path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
var _pathsJs = require("./paths.js");
var _pathsJsDefault = parcelHelpers.interopDefault(_pathsJs);
var _pathEqJs = require("./pathEq.js");
var _pathEqJsDefault = parcelHelpers.interopDefault(_pathEqJs);
var _pathOrJs = require("./pathOr.js");
var _pathOrJsDefault = parcelHelpers.interopDefault(_pathOrJs);
var _pathSatisfiesJs = require("./pathSatisfies.js");
var _pathSatisfiesJsDefault = parcelHelpers.interopDefault(_pathSatisfiesJs);
var _pickJs = require("./pick.js");
var _pickJsDefault = parcelHelpers.interopDefault(_pickJs);
var _pickAllJs = require("./pickAll.js");
var _pickAllJsDefault = parcelHelpers.interopDefault(_pickAllJs);
var _pickByJs = require("./pickBy.js");
var _pickByJsDefault = parcelHelpers.interopDefault(_pickByJs);
var _pipeJs = require("./pipe.js");
var _pipeJsDefault = parcelHelpers.interopDefault(_pipeJs);
var _pipeKJs = require("./pipeK.js");
var _pipeKJsDefault = parcelHelpers.interopDefault(_pipeKJs);
var _pipePJs = require("./pipeP.js");
var _pipePJsDefault = parcelHelpers.interopDefault(_pipePJs);
var _pipeWithJs = require("./pipeWith.js");
var _pipeWithJsDefault = parcelHelpers.interopDefault(_pipeWithJs);
var _pluckJs = require("./pluck.js");
var _pluckJsDefault = parcelHelpers.interopDefault(_pluckJs);
var _prependJs = require("./prepend.js");
var _prependJsDefault = parcelHelpers.interopDefault(_prependJs);
var _productJs = require("./product.js");
var _productJsDefault = parcelHelpers.interopDefault(_productJs);
var _projectJs = require("./project.js");
var _projectJsDefault = parcelHelpers.interopDefault(_projectJs);
var _propJs = require("./prop.js");
var _propJsDefault = parcelHelpers.interopDefault(_propJs);
var _propEqJs = require("./propEq.js");
var _propEqJsDefault = parcelHelpers.interopDefault(_propEqJs);
var _propIsJs = require("./propIs.js");
var _propIsJsDefault = parcelHelpers.interopDefault(_propIsJs);
var _propOrJs = require("./propOr.js");
var _propOrJsDefault = parcelHelpers.interopDefault(_propOrJs);
var _propSatisfiesJs = require("./propSatisfies.js");
var _propSatisfiesJsDefault = parcelHelpers.interopDefault(_propSatisfiesJs);
var _propsJs = require("./props.js");
var _propsJsDefault = parcelHelpers.interopDefault(_propsJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _reduceByJs = require("./reduceBy.js");
var _reduceByJsDefault = parcelHelpers.interopDefault(_reduceByJs);
var _reduceRightJs = require("./reduceRight.js");
var _reduceRightJsDefault = parcelHelpers.interopDefault(_reduceRightJs);
var _reduceWhileJs = require("./reduceWhile.js");
var _reduceWhileJsDefault = parcelHelpers.interopDefault(_reduceWhileJs);
var _reducedJs = require("./reduced.js");
var _reducedJsDefault = parcelHelpers.interopDefault(_reducedJs);
var _rejectJs = require("./reject.js");
var _rejectJsDefault = parcelHelpers.interopDefault(_rejectJs);
var _removeJs = require("./remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
var _repeatJs = require("./repeat.js");
var _repeatJsDefault = parcelHelpers.interopDefault(_repeatJs);
var _replaceJs = require("./replace.js");
var _replaceJsDefault = parcelHelpers.interopDefault(_replaceJs);
var _reverseJs = require("./reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);
var _scanJs = require("./scan.js");
var _scanJsDefault = parcelHelpers.interopDefault(_scanJs);
var _sequenceJs = require("./sequence.js");
var _sequenceJsDefault = parcelHelpers.interopDefault(_sequenceJs);
var _setJs = require("./set.js");
var _setJsDefault = parcelHelpers.interopDefault(_setJs);
var _sliceJs = require("./slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _sortByJs = require("./sortBy.js");
var _sortByJsDefault = parcelHelpers.interopDefault(_sortByJs);
var _sortWithJs = require("./sortWith.js");
var _sortWithJsDefault = parcelHelpers.interopDefault(_sortWithJs);
var _splitJs = require("./split.js");
var _splitJsDefault = parcelHelpers.interopDefault(_splitJs);
var _splitAtJs = require("./splitAt.js");
var _splitAtJsDefault = parcelHelpers.interopDefault(_splitAtJs);
var _splitEveryJs = require("./splitEvery.js");
var _splitEveryJsDefault = parcelHelpers.interopDefault(_splitEveryJs);
var _splitWhenJs = require("./splitWhen.js");
var _splitWhenJsDefault = parcelHelpers.interopDefault(_splitWhenJs);
var _startsWithJs = require("./startsWith.js");
var _startsWithJsDefault = parcelHelpers.interopDefault(_startsWithJs);
var _subtractJs = require("./subtract.js");
var _subtractJsDefault = parcelHelpers.interopDefault(_subtractJs);
var _sumJs = require("./sum.js");
var _sumJsDefault = parcelHelpers.interopDefault(_sumJs);
var _symmetricDifferenceJs = require("./symmetricDifference.js");
var _symmetricDifferenceJsDefault = parcelHelpers.interopDefault(_symmetricDifferenceJs);
var _symmetricDifferenceWithJs = require("./symmetricDifferenceWith.js");
var _symmetricDifferenceWithJsDefault = parcelHelpers.interopDefault(_symmetricDifferenceWithJs);
var _tailJs = require("./tail.js");
var _tailJsDefault = parcelHelpers.interopDefault(_tailJs);
var _takeJs = require("./take.js");
var _takeJsDefault = parcelHelpers.interopDefault(_takeJs);
var _takeLastJs = require("./takeLast.js");
var _takeLastJsDefault = parcelHelpers.interopDefault(_takeLastJs);
var _takeLastWhileJs = require("./takeLastWhile.js");
var _takeLastWhileJsDefault = parcelHelpers.interopDefault(_takeLastWhileJs);
var _takeWhileJs = require("./takeWhile.js");
var _takeWhileJsDefault = parcelHelpers.interopDefault(_takeWhileJs);
var _tapJs = require("./tap.js");
var _tapJsDefault = parcelHelpers.interopDefault(_tapJs);
var _testJs = require("./test.js");
var _testJsDefault = parcelHelpers.interopDefault(_testJs);
var _andThenJs = require("./andThen.js");
var _andThenJsDefault = parcelHelpers.interopDefault(_andThenJs);
var _timesJs = require("./times.js");
var _timesJsDefault = parcelHelpers.interopDefault(_timesJs);
var _toLowerJs = require("./toLower.js");
var _toLowerJsDefault = parcelHelpers.interopDefault(_toLowerJs);
var _toPairsJs = require("./toPairs.js");
var _toPairsJsDefault = parcelHelpers.interopDefault(_toPairsJs);
var _toPairsInJs = require("./toPairsIn.js");
var _toPairsInJsDefault = parcelHelpers.interopDefault(_toPairsInJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
var _toUpperJs = require("./toUpper.js");
var _toUpperJsDefault = parcelHelpers.interopDefault(_toUpperJs);
var _transduceJs = require("./transduce.js");
var _transduceJsDefault = parcelHelpers.interopDefault(_transduceJs);
var _transposeJs = require("./transpose.js");
var _transposeJsDefault = parcelHelpers.interopDefault(_transposeJs);
var _traverseJs = require("./traverse.js");
var _traverseJsDefault = parcelHelpers.interopDefault(_traverseJs);
var _trimJs = require("./trim.js");
var _trimJsDefault = parcelHelpers.interopDefault(_trimJs);
var _tryCatchJs = require("./tryCatch.js");
var _tryCatchJsDefault = parcelHelpers.interopDefault(_tryCatchJs);
var _typeJs = require("./type.js");
var _typeJsDefault = parcelHelpers.interopDefault(_typeJs);
var _unapplyJs = require("./unapply.js");
var _unapplyJsDefault = parcelHelpers.interopDefault(_unapplyJs);
var _unaryJs = require("./unary.js");
var _unaryJsDefault = parcelHelpers.interopDefault(_unaryJs);
var _uncurryNJs = require("./uncurryN.js");
var _uncurryNJsDefault = parcelHelpers.interopDefault(_uncurryNJs);
var _unfoldJs = require("./unfold.js");
var _unfoldJsDefault = parcelHelpers.interopDefault(_unfoldJs);
var _unionJs = require("./union.js");
var _unionJsDefault = parcelHelpers.interopDefault(_unionJs);
var _unionWithJs = require("./unionWith.js");
var _unionWithJsDefault = parcelHelpers.interopDefault(_unionWithJs);
var _uniqJs = require("./uniq.js");
var _uniqJsDefault = parcelHelpers.interopDefault(_uniqJs);
var _uniqByJs = require("./uniqBy.js");
var _uniqByJsDefault = parcelHelpers.interopDefault(_uniqByJs);
var _uniqWithJs = require("./uniqWith.js");
var _uniqWithJsDefault = parcelHelpers.interopDefault(_uniqWithJs);
var _unlessJs = require("./unless.js");
var _unlessJsDefault = parcelHelpers.interopDefault(_unlessJs);
var _unnestJs = require("./unnest.js");
var _unnestJsDefault = parcelHelpers.interopDefault(_unnestJs);
var _untilJs = require("./until.js");
var _untilJsDefault = parcelHelpers.interopDefault(_untilJs);
var _updateJs = require("./update.js");
var _updateJsDefault = parcelHelpers.interopDefault(_updateJs);
var _useWithJs = require("./useWith.js");
var _useWithJsDefault = parcelHelpers.interopDefault(_useWithJs);
var _valuesJs = require("./values.js");
var _valuesJsDefault = parcelHelpers.interopDefault(_valuesJs);
var _valuesInJs = require("./valuesIn.js");
var _valuesInJsDefault = parcelHelpers.interopDefault(_valuesInJs);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _whenJs = require("./when.js");
var _whenJsDefault = parcelHelpers.interopDefault(_whenJs);
var _whereJs = require("./where.js");
var _whereJsDefault = parcelHelpers.interopDefault(_whereJs);
var _whereEqJs = require("./whereEq.js");
var _whereEqJsDefault = parcelHelpers.interopDefault(_whereEqJs);
var _withoutJs = require("./without.js");
var _withoutJsDefault = parcelHelpers.interopDefault(_withoutJs);
var _xorJs = require("./xor.js");
var _xorJsDefault = parcelHelpers.interopDefault(_xorJs);
var _xprodJs = require("./xprod.js");
var _xprodJsDefault = parcelHelpers.interopDefault(_xprodJs);
var _zipJs = require("./zip.js");
var _zipJsDefault = parcelHelpers.interopDefault(_zipJs);
var _zipObjJs = require("./zipObj.js");
var _zipObjJsDefault = parcelHelpers.interopDefault(_zipObjJs);
var _zipWithJs = require("./zipWith.js");
var _zipWithJsDefault = parcelHelpers.interopDefault(_zipWithJs);
var _thunkifyJs = require("./thunkify.js");
var _thunkifyJsDefault = parcelHelpers.interopDefault(_thunkifyJs);

},{"./F.js":false,"./T.js":false,"./__.js":false,"./add.js":false,"./addIndex.js":false,"./adjust.js":false,"./all.js":false,"./allPass.js":false,"./always.js":false,"./and.js":false,"./any.js":false,"./anyPass.js":false,"./ap.js":false,"./aperture.js":false,"./append.js":false,"./apply.js":false,"./applySpec.js":false,"./applyTo.js":false,"./ascend.js":false,"./assoc.js":false,"./assocPath.js":false,"./binary.js":false,"./bind.js":false,"./both.js":false,"./call.js":false,"./chain.js":false,"./clamp.js":false,"./clone.js":"5ueus","./comparator.js":false,"./complement.js":false,"./compose.js":false,"./composeK.js":false,"./composeP.js":false,"./composeWith.js":false,"./concat.js":false,"./cond.js":false,"./construct.js":false,"./constructN.js":false,"./contains.js":false,"./converge.js":false,"./countBy.js":false,"./curry.js":false,"./curryN.js":false,"./dec.js":false,"./defaultTo.js":false,"./descend.js":false,"./difference.js":false,"./differenceWith.js":false,"./dissoc.js":false,"./dissocPath.js":false,"./divide.js":false,"./drop.js":false,"./dropLast.js":"9sDBT","./dropLastWhile.js":false,"./dropRepeats.js":false,"./dropRepeatsWith.js":false,"./dropWhile.js":false,"./either.js":false,"./empty.js":false,"./endsWith.js":false,"./eqBy.js":false,"./eqProps.js":false,"./equals.js":"fVrfR","./evolve.js":false,"./filter.js":"1ECWS","./find.js":false,"./findIndex.js":false,"./findLast.js":false,"./findLastIndex.js":false,"./flatten.js":"cItAW","./flip.js":false,"./forEach.js":false,"./forEachObjIndexed.js":false,"./fromPairs.js":"ju9u0","./groupBy.js":"4yfxC","./groupWith.js":false,"./gt.js":false,"./gte.js":false,"./has.js":false,"./hasIn.js":false,"./hasPath.js":false,"./head.js":false,"./identical.js":false,"./identity.js":false,"./ifElse.js":false,"./inc.js":false,"./includes.js":false,"./indexBy.js":"4q4CJ","./indexOf.js":false,"./init.js":false,"./innerJoin.js":false,"./insert.js":false,"./insertAll.js":false,"./intersection.js":false,"./intersperse.js":false,"./into.js":false,"./invert.js":false,"./invertObj.js":false,"./invoker.js":false,"./is.js":false,"./isEmpty.js":false,"./isNil.js":false,"./join.js":false,"./juxt.js":false,"./keys.js":false,"./keysIn.js":false,"./last.js":false,"./lastIndexOf.js":false,"./length.js":false,"./lens.js":false,"./lensIndex.js":false,"./lensPath.js":false,"./lensProp.js":false,"./lift.js":false,"./liftN.js":false,"./lt.js":false,"./lte.js":false,"./map.js":"dC8Ps","./mapAccum.js":false,"./mapAccumRight.js":false,"./mapObjIndexed.js":false,"./match.js":false,"./mathMod.js":false,"./max.js":false,"./maxBy.js":"3PKj8","./mean.js":false,"./median.js":false,"./memoizeWith.js":false,"./merge.js":false,"./mergeAll.js":"fO5nn","./mergeDeepLeft.js":"bcHwU","./mergeDeepRight.js":false,"./mergeDeepWith.js":false,"./mergeDeepWithKey.js":false,"./mergeLeft.js":false,"./mergeRight.js":false,"./mergeWith.js":false,"./mergeWithKey.js":false,"./min.js":false,"./minBy.js":"fBzQH","./modulo.js":false,"./move.js":false,"./multiply.js":false,"./nAry.js":false,"./negate.js":false,"./none.js":false,"./not.js":false,"./nth.js":false,"./nthArg.js":false,"./o.js":false,"./objOf.js":false,"./of.js":false,"./omit.js":false,"./once.js":false,"./or.js":false,"./otherwise.js":false,"./over.js":false,"./pair.js":false,"./partial.js":false,"./partialRight.js":false,"./partition.js":false,"./path.js":false,"./paths.js":false,"./pathEq.js":false,"./pathOr.js":false,"./pathSatisfies.js":false,"./pick.js":false,"./pickAll.js":false,"./pickBy.js":false,"./pipe.js":"e4vNV","./pipeK.js":false,"./pipeP.js":false,"./pipeWith.js":false,"./pluck.js":"hh8KA","./prepend.js":false,"./product.js":false,"./project.js":false,"./prop.js":"fBxsF","./propEq.js":false,"./propIs.js":false,"./propOr.js":false,"./propSatisfies.js":false,"./props.js":false,"./range.js":false,"./reduce.js":"8LF8v","./reduceBy.js":false,"./reduceRight.js":false,"./reduceWhile.js":false,"./reduced.js":false,"./reject.js":false,"./remove.js":false,"./repeat.js":false,"./replace.js":false,"./reverse.js":false,"./scan.js":false,"./sequence.js":false,"./set.js":false,"./slice.js":false,"./sort.js":false,"./sortBy.js":false,"./sortWith.js":false,"./split.js":false,"./splitAt.js":false,"./splitEvery.js":false,"./splitWhen.js":false,"./startsWith.js":false,"./subtract.js":false,"./sum.js":false,"./symmetricDifference.js":false,"./symmetricDifferenceWith.js":false,"./tail.js":false,"./take.js":false,"./takeLast.js":false,"./takeLastWhile.js":false,"./takeWhile.js":false,"./tap.js":false,"./test.js":false,"./andThen.js":false,"./times.js":false,"./toLower.js":false,"./toPairs.js":"ThfnX","./toPairsIn.js":false,"./toString.js":false,"./toUpper.js":false,"./transduce.js":false,"./transpose.js":false,"./traverse.js":false,"./trim.js":false,"./tryCatch.js":false,"./type.js":false,"./unapply.js":false,"./unary.js":false,"./uncurryN.js":false,"./unfold.js":false,"./union.js":false,"./unionWith.js":false,"./uniq.js":"ilMs6","./uniqBy.js":false,"./uniqWith.js":false,"./unless.js":false,"./unnest.js":"idbcD","./until.js":false,"./update.js":false,"./useWith.js":false,"./values.js":false,"./valuesIn.js":false,"./view.js":false,"./when.js":false,"./where.js":false,"./whereEq.js":false,"./without.js":false,"./xor.js":false,"./xprod.js":false,"./zip.js":false,"./zipObj.js":false,"./zipWith.js":false,"./thunkify.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8OiS1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arityJs = require("./internal/_arity.js");
var _arityJsDefault = parcelHelpers.interopDefault(_arityJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */ var bind = /*#__PURE__*/ (0, _curry2JsDefault.default)(function bind(fn, thisObj) {
    return (0, _arityJsDefault.default)(fn.length, function() {
        return fn.apply(thisObj, arguments);
    });
});
exports.default = bind;

},{"./internal/_arity.js":"k5H5S","./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5H5S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_arity);
function _arity(n, fn) {
    /* eslint-disable no-unused-vars */ switch(n){
        case 0:
            return function() {
                return fn.apply(this, arguments);
            };
        case 1:
            return function(a0) {
                return fn.apply(this, arguments);
            };
        case 2:
            return function(a0, a1) {
                return fn.apply(this, arguments);
            };
        case 3:
            return function(a0, a1, a2) {
                return fn.apply(this, arguments);
            };
        case 4:
            return function(a0, a1, a2, a3) {
                return fn.apply(this, arguments);
            };
        case 5:
            return function(a0, a1, a2, a3, a4) {
                return fn.apply(this, arguments);
            };
        case 6:
            return function(a0, a1, a2, a3, a4, a5) {
                return fn.apply(this, arguments);
            };
        case 7:
            return function(a0, a1, a2, a3, a4, a5, a6) {
                return fn.apply(this, arguments);
            };
        case 8:
            return function(a0, a1, a2, a3, a4, a5, a6, a7) {
                return fn.apply(this, arguments);
            };
        case 9:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
                return fn.apply(this, arguments);
            };
        case 10:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                return fn.apply(this, arguments);
            };
        default:
            throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3dy25":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_curry2);
var _curry1Js = require("./_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _isPlaceholderJs = require("./_isPlaceholder.js");
var _isPlaceholderJsDefault = parcelHelpers.interopDefault(_isPlaceholderJs);
function _curry2(fn) {
    return function f2(a, b) {
        switch(arguments.length){
            case 0:
                return f2;
            case 1:
                return (0, _isPlaceholderJsDefault.default)(a) ? f2 : (0, _curry1JsDefault.default)(function(_b) {
                    return fn(a, _b);
                });
            default:
                return (0, _isPlaceholderJsDefault.default)(a) && (0, _isPlaceholderJsDefault.default)(b) ? f2 : (0, _isPlaceholderJsDefault.default)(a) ? (0, _curry1JsDefault.default)(function(_a) {
                    return fn(_a, b);
                }) : (0, _isPlaceholderJsDefault.default)(b) ? (0, _curry1JsDefault.default)(function(_b) {
                    return fn(a, _b);
                }) : fn(a, b);
        }
    };
}

},{"./_curry1.js":"kg5MS","./_isPlaceholder.js":"7CKE6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kg5MS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_curry1);
var _isPlaceholderJs = require("./_isPlaceholder.js");
var _isPlaceholderJsDefault = parcelHelpers.interopDefault(_isPlaceholderJs);
function _curry1(fn) {
    return function f1(a) {
        if (arguments.length === 0 || (0, _isPlaceholderJsDefault.default)(a)) return f1;
        else return fn.apply(this, arguments);
    };
}

},{"./_isPlaceholder.js":"7CKE6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7CKE6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_isPlaceholder);
function _isPlaceholder(a) {
    return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lpW07":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _makeFlatJs = require("./internal/_makeFlat.js");
var _makeFlatJsDefault = parcelHelpers.interopDefault(_makeFlatJs);
var _xchainJs = require("./internal/_xchain.js");
var _xchainJsDefault = parcelHelpers.interopDefault(_xchainJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries.
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * If second argument is a function, `chain(f, g)(x)` is equivalent to `f(g(x), x)`.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      const duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */ var chain = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([
    "fantasy-land/chain",
    "chain"
], (0, _xchainJsDefault.default), function chain(fn, monad) {
    if (typeof monad === "function") return function(x) {
        return fn(monad(x))(x);
    };
    return (0, _makeFlatJsDefault.default)(false)((0, _mapJsDefault.default)(fn, monad));
}));
exports.default = chain;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_makeFlat.js":"2pVbr","./internal/_xchain.js":"3uy5f","./map.js":"dC8Ps","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kIEUx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_dispatchable);
var _isArrayJs = require("./_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isTransformerJs = require("./_isTransformer.js");
var _isTransformerJsDefault = parcelHelpers.interopDefault(_isTransformerJs);
function _dispatchable(methodNames, xf, fn) {
    return function() {
        if (arguments.length === 0) return fn();
        var args = Array.prototype.slice.call(arguments, 0);
        var obj = args.pop();
        if (!(0, _isArrayJsDefault.default)(obj)) {
            var idx = 0;
            while(idx < methodNames.length){
                if (typeof obj[methodNames[idx]] === "function") return obj[methodNames[idx]].apply(obj, args);
                idx += 1;
            }
            if ((0, _isTransformerJsDefault.default)(obj)) {
                var transducer = xf.apply(null, args);
                return transducer(obj);
            }
        }
        return fn.apply(this, arguments);
    };
}

},{"./_isArray.js":"3Yv3G","./_isTransformer.js":"jUEH2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Yv3G":[function(require,module,exports) {
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = Array.isArray || function _isArray(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jUEH2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_isTransformer);
function _isTransformer(obj) {
    return obj != null && typeof obj["@@transducer/step"] === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2pVbr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_makeFlat);
var _isArrayLikeJs = require("./_isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
function _makeFlat(recursive) {
    return function flatt(list) {
        var value, jlen, j;
        var result = [];
        var idx = 0;
        var ilen = list.length;
        while(idx < ilen){
            if ((0, _isArrayLikeJsDefault.default)(list[idx])) {
                value = recursive ? flatt(list[idx]) : list[idx];
                j = 0;
                jlen = value.length;
                while(j < jlen){
                    result[result.length] = value[j];
                    j += 1;
                }
            } else result[result.length] = list[idx];
            idx += 1;
        }
        return result;
    };
}

},{"./_isArrayLike.js":"1ckj8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ckj8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _isArrayJs = require("./_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isStringJs = require("./_isString.js");
var _isStringJsDefault = parcelHelpers.interopDefault(_isStringJs);
/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */ var _isArrayLike = /*#__PURE__*/ (0, _curry1JsDefault.default)(function isArrayLike(x) {
    if ((0, _isArrayJsDefault.default)(x)) return true;
    if (!x) return false;
    if (typeof x !== "object") return false;
    if ((0, _isStringJsDefault.default)(x)) return false;
    if (x.nodeType === 1) return !!x.length;
    if (x.length === 0) return true;
    if (x.length > 0) return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
    return false;
});
exports.default = _isArrayLike;

},{"./_curry1.js":"kg5MS","./_isArray.js":"3Yv3G","./_isString.js":"a1eoi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a1eoi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_isString);
function _isString(x) {
    return Object.prototype.toString.call(x) === "[object String]";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3uy5f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _flatCatJs = require("./_flatCat.js");
var _flatCatJsDefault = parcelHelpers.interopDefault(_flatCatJs);
var _mapJs = require("../map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _xchain = /*#__PURE__*/ (0, _curry2JsDefault.default)(function _xchain(f, xf) {
    return (0, _mapJsDefault.default)(f, (0, _flatCatJsDefault.default)(xf));
});
exports.default = _xchain;

},{"./_curry2.js":"3dy25","./_flatCat.js":"jh4tp","../map.js":"dC8Ps","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jh4tp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _forceReducedJs = require("./_forceReduced.js");
var _forceReducedJsDefault = parcelHelpers.interopDefault(_forceReducedJs);
var _isArrayLikeJs = require("./_isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
var _reduceJs = require("./_reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var preservingReduced = function(xf) {
    return {
        "@@transducer/init": (0, _xfBaseJsDefault.default).init,
        "@@transducer/result": function(result) {
            return xf["@@transducer/result"](result);
        },
        "@@transducer/step": function(result, input) {
            var ret = xf["@@transducer/step"](result, input);
            return ret["@@transducer/reduced"] ? (0, _forceReducedJsDefault.default)(ret) : ret;
        }
    };
};
var _flatCat = function _xcat(xf) {
    var rxf = preservingReduced(xf);
    return {
        "@@transducer/init": (0, _xfBaseJsDefault.default).init,
        "@@transducer/result": function(result) {
            return rxf["@@transducer/result"](result);
        },
        "@@transducer/step": function(result, input) {
            return !(0, _isArrayLikeJsDefault.default)(input) ? (0, _reduceJsDefault.default)(rxf, result, [
                input
            ]) : (0, _reduceJsDefault.default)(rxf, result, input);
        }
    };
};
exports.default = _flatCat;

},{"./_forceReduced.js":"5tLe5","./_isArrayLike.js":"1ckj8","./_reduce.js":"8Bdru","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5tLe5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_forceReduced);
function _forceReduced(x) {
    return {
        "@@transducer/value": x,
        "@@transducer/reduced": true
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Bdru":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_reduce);
var _isArrayLikeJs = require("./_isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
var _xwrapJs = require("./_xwrap.js");
var _xwrapJsDefault = parcelHelpers.interopDefault(_xwrapJs);
var _bindJs = require("../bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while(idx < len){
        acc = xf["@@transducer/step"](acc, list[idx]);
        if (acc && acc["@@transducer/reduced"]) {
            acc = acc["@@transducer/value"];
            break;
        }
        idx += 1;
    }
    return xf["@@transducer/result"](acc);
}
function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while(!step.done){
        acc = xf["@@transducer/step"](acc, step.value);
        if (acc && acc["@@transducer/reduced"]) {
            acc = acc["@@transducer/value"];
            break;
        }
        step = iter.next();
    }
    return xf["@@transducer/result"](acc);
}
function _methodReduce(xf, acc, obj, methodName) {
    return xf["@@transducer/result"](obj[methodName]((0, _bindJsDefault.default)(xf["@@transducer/step"], xf), acc));
}
var symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
function _reduce(fn, acc, list) {
    if (typeof fn === "function") fn = (0, _xwrapJsDefault.default)(fn);
    if ((0, _isArrayLikeJsDefault.default)(list)) return _arrayReduce(fn, acc, list);
    if (typeof list["fantasy-land/reduce"] === "function") return _methodReduce(fn, acc, list, "fantasy-land/reduce");
    if (list[symIterator] != null) return _iterableReduce(fn, acc, list[symIterator]());
    if (typeof list.next === "function") return _iterableReduce(fn, acc, list);
    if (typeof list.reduce === "function") return _methodReduce(fn, acc, list, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
}

},{"./_isArrayLike.js":"1ckj8","./_xwrap.js":"cerBU","../bind.js":"8OiS1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cerBU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xwrap);
var XWrap = /*#__PURE__*/ function() {
    function XWrap(fn) {
        this.f = fn;
    }
    XWrap.prototype["@@transducer/init"] = function() {
        throw new Error("init not implemented on XWrap");
    };
    XWrap.prototype["@@transducer/result"] = function(acc) {
        return acc;
    };
    XWrap.prototype["@@transducer/step"] = function(acc, x) {
        return this.f(acc, x);
    };
    return XWrap;
}();
function _xwrap(fn) {
    return new XWrap(fn);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f9lll":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    init: function() {
        return this.xf["@@transducer/init"]();
    },
    result: function(result) {
        return this.xf["@@transducer/result"](result);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dC8Ps":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _mapJs = require("./internal/_map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _reduceJs = require("./internal/_reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _xmapJs = require("./internal/_xmap.js");
var _xmapJsDefault = parcelHelpers.interopDefault(_xmapJs);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */ var map = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([
    "fantasy-land/map",
    "map"
], (0, _xmapJsDefault.default), function map(fn, functor) {
    switch(Object.prototype.toString.call(functor)){
        case "[object Function]":
            return (0, _curryNJsDefault.default)(functor.length, function() {
                return fn.call(this, functor.apply(this, arguments));
            });
        case "[object Object]":
            return (0, _reduceJsDefault.default)(function(acc, key) {
                acc[key] = fn(functor[key]);
                return acc;
            }, {}, (0, _keysJsDefault.default)(functor));
        default:
            return (0, _mapJsDefault.default)(fn, functor);
    }
}));
exports.default = map;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_map.js":"gvTkR","./internal/_reduce.js":"8Bdru","./internal/_xmap.js":"5yjVL","./curryN.js":"a5Onp","./keys.js":"e4W8c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gvTkR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_map);
function _map(fn, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);
    while(idx < len){
        result[idx] = fn(functor[idx]);
        idx += 1;
    }
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5yjVL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XMap = /*#__PURE__*/ function() {
    function XMap(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XMap.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XMap.prototype["@@transducer/result"] = (0, _xfBaseJsDefault.default).result;
    XMap.prototype["@@transducer/step"] = function(result, input) {
        return this.xf["@@transducer/step"](result, this.f(input));
    };
    return XMap;
}();
var _xmap = /*#__PURE__*/ (0, _curry2JsDefault.default)(function _xmap(f, xf) {
    return new XMap(f, xf);
});
exports.default = _xmap;

},{"./_curry2.js":"3dy25","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a5Onp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arityJs = require("./internal/_arity.js");
var _arityJsDefault = parcelHelpers.interopDefault(_arityJs);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _curryNJs = require("./internal/_curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */ var curryN = /*#__PURE__*/ (0, _curry2JsDefault.default)(function curryN(length, fn) {
    if (length === 1) return (0, _curry1JsDefault.default)(fn);
    return (0, _arityJsDefault.default)(length, (0, _curryNJsDefault.default)(length, [], fn));
});
exports.default = curryN;

},{"./internal/_arity.js":"k5H5S","./internal/_curry1.js":"kg5MS","./internal/_curry2.js":"3dy25","./internal/_curryN.js":"epMsX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"epMsX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_curryN);
var _arityJs = require("./_arity.js");
var _arityJsDefault = parcelHelpers.interopDefault(_arityJs);
var _isPlaceholderJs = require("./_isPlaceholder.js");
var _isPlaceholderJsDefault = parcelHelpers.interopDefault(_isPlaceholderJs);
function _curryN(length, received, fn) {
    return function() {
        var combined = [];
        var argsIdx = 0;
        var left = length;
        var combinedIdx = 0;
        while(combinedIdx < received.length || argsIdx < arguments.length){
            var result;
            if (combinedIdx < received.length && (!(0, _isPlaceholderJsDefault.default)(received[combinedIdx]) || argsIdx >= arguments.length)) result = received[combinedIdx];
            else {
                result = arguments[argsIdx];
                argsIdx += 1;
            }
            combined[combinedIdx] = result;
            if (!(0, _isPlaceholderJsDefault.default)(result)) left -= 1;
            combinedIdx += 1;
        }
        return left <= 0 ? fn.apply(this, combined) : (0, _arityJsDefault.default)(left, _curryN(length, combined, fn));
    };
}

},{"./_arity.js":"k5H5S","./_isPlaceholder.js":"7CKE6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4W8c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _hasJs = require("./internal/_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var _isArgumentsJs = require("./internal/_isArguments.js"); // cover IE < 9 keys issues
var _isArgumentsJsDefault = parcelHelpers.interopDefault(_isArgumentsJs);
var hasEnumBug = !/*#__PURE__*/ ({
    toString: null
}).propertyIsEnumerable("toString");
var nonEnumerableProps = [
    "constructor",
    "valueOf",
    "isPrototypeOf",
    "toString",
    "propertyIsEnumerable",
    "hasOwnProperty",
    "toLocaleString"
]; // Safari bug
var hasArgsEnumBug = /*#__PURE__*/ function() {
    "use strict";
    return arguments.propertyIsEnumerable("length");
}();
var contains = function contains(list, item) {
    var idx = 0;
    while(idx < list.length){
        if (list[idx] === item) return true;
        idx += 1;
    }
    return false;
};
/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */ var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? /*#__PURE__*/ (0, _curry1JsDefault.default)(function keys(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /*#__PURE__*/ (0, _curry1JsDefault.default)(function keys(obj) {
    if (Object(obj) !== obj) return [];
    var prop, nIdx;
    var ks = [];
    var checkArgsLength = hasArgsEnumBug && (0, _isArgumentsJsDefault.default)(obj);
    for(prop in obj)if ((0, _hasJsDefault.default)(prop, obj) && (!checkArgsLength || prop !== "length")) ks[ks.length] = prop;
    if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while(nIdx >= 0){
            prop = nonEnumerableProps[nIdx];
            if ((0, _hasJsDefault.default)(prop, obj) && !contains(ks, prop)) ks[ks.length] = prop;
            nIdx -= 1;
        }
    }
    return ks;
});
exports.default = keys;

},{"./internal/_curry1.js":"kg5MS","./internal/_has.js":"armmH","./internal/_isArguments.js":"9eKOx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"armmH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_has);
function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9eKOx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hasJs = require("./_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var toString = Object.prototype.toString;
var _isArguments = /*#__PURE__*/ function() {
    return toString.call(arguments) === "[object Arguments]" ? function _isArguments(x) {
        return toString.call(x) === "[object Arguments]";
    } : function _isArguments(x) {
        return (0, _hasJsDefault.default)("callee", x);
    };
}();
exports.default = _isArguments;

},{"./_has.js":"armmH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ueus":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneJs = require("./internal/_clone.js");
var _cloneJsDefault = parcelHelpers.interopDefault(_cloneJs);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied
 *
 * Dispatches to a `clone` method if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      const objects = [{}, {}, {}];
 *      const objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */ var clone = /*#__PURE__*/ (0, _curry1JsDefault.default)(function clone(value) {
    return value != null && typeof value.clone === "function" ? value.clone() : (0, _cloneJsDefault.default)(value, [], [], true);
});
exports.default = clone;

},{"./internal/_clone.js":"l669u","./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l669u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_clone);
var _cloneRegExpJs = require("./_cloneRegExp.js");
var _cloneRegExpJsDefault = parcelHelpers.interopDefault(_cloneRegExpJs);
var _typeJs = require("../type.js");
var _typeJsDefault = parcelHelpers.interopDefault(_typeJs);
function _clone(value, refFrom, refTo, deep) {
    var copy = function copy(copiedValue) {
        var len = refFrom.length;
        var idx = 0;
        while(idx < len){
            if (value === refFrom[idx]) return refTo[idx];
            idx += 1;
        }
        refFrom[idx + 1] = value;
        refTo[idx + 1] = copiedValue;
        for(var key in value)copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
        return copiedValue;
    };
    switch((0, _typeJsDefault.default)(value)){
        case "Object":
            return copy({});
        case "Array":
            return copy([]);
        case "Date":
            return new Date(value.valueOf());
        case "RegExp":
            return (0, _cloneRegExpJsDefault.default)(value);
        default:
            return value;
    }
}

},{"./_cloneRegExp.js":"apVGW","../type.js":"fAM3S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"apVGW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_cloneRegExp);
function _cloneRegExp(pattern) {
    return new RegExp(pattern.source, (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : ""));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fAM3S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */ var type = /*#__PURE__*/ (0, _curry1JsDefault.default)(function type(val) {
    return val === null ? "Null" : val === undefined ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
});
exports.default = type;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9sDBT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _dropLastJs = require("./internal/_dropLast.js");
var _dropLastJsDefault = parcelHelpers.interopDefault(_dropLastJs);
var _xdropLastJs = require("./internal/_xdropLast.js");
var _xdropLastJsDefault = parcelHelpers.interopDefault(_xdropLastJs);
/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */ var dropLast = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([], (0, _xdropLastJsDefault.default), (0, _dropLastJsDefault.default)));
exports.default = dropLast;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_dropLast.js":"dLA00","./internal/_xdropLast.js":"8mT7C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dLA00":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>dropLast);
var _takeJs = require("../take.js");
var _takeJsDefault = parcelHelpers.interopDefault(_takeJs);
function dropLast(n, xs) {
    return (0, _takeJsDefault.default)(n < xs.length ? xs.length - n : 0, xs);
}

},{"../take.js":"1Kn5O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Kn5O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xtakeJs = require("./internal/_xtake.js");
var _xtakeJsDefault = parcelHelpers.interopDefault(_xtakeJs);
var _sliceJs = require("./slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      const personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      const takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */ var take = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([
    "take"
], (0, _xtakeJsDefault.default), function take(n, xs) {
    return (0, _sliceJsDefault.default)(0, n < 0 ? Infinity : n, xs);
}));
exports.default = take;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xtake.js":"5rol2","./slice.js":"d9rCZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rol2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _reducedJs = require("./_reduced.js");
var _reducedJsDefault = parcelHelpers.interopDefault(_reducedJs);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XTake = /*#__PURE__*/ function() {
    function XTake(n, xf) {
        this.xf = xf;
        this.n = n;
        this.i = 0;
    }
    XTake.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XTake.prototype["@@transducer/result"] = (0, _xfBaseJsDefault.default).result;
    XTake.prototype["@@transducer/step"] = function(result, input) {
        this.i += 1;
        var ret = this.n === 0 ? result : this.xf["@@transducer/step"](result, input);
        return this.n >= 0 && this.i >= this.n ? (0, _reducedJsDefault.default)(ret) : ret;
    };
    return XTake;
}();
var _xtake = /*#__PURE__*/ (0, _curry2JsDefault.default)(function _xtake(n, xf) {
    return new XTake(n, xf);
});
exports.default = _xtake;

},{"./_curry2.js":"3dy25","./_reduced.js":"lGWA2","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGWA2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_reduced);
function _reduced(x) {
    return x && x["@@transducer/reduced"] ? x : {
        "@@transducer/value": x,
        "@@transducer/reduced": true
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d9rCZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkForMethodJs = require("./internal/_checkForMethod.js");
var _checkForMethodJsDefault = parcelHelpers.interopDefault(_checkForMethodJs);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */ var slice = /*#__PURE__*/ (0, _curry3JsDefault.default)(/*#__PURE__*/ (0, _checkForMethodJsDefault.default)("slice", function slice(fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
}));
exports.default = slice;

},{"./internal/_checkForMethod.js":"jMuNW","./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jMuNW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_checkForMethod);
var _isArrayJs = require("./_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
function _checkForMethod(methodname, fn) {
    return function() {
        var length = arguments.length;
        if (length === 0) return fn();
        var obj = arguments[length - 1];
        return (0, _isArrayJsDefault.default)(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
    };
}

},{"./_isArray.js":"3Yv3G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jwEOD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_curry3);
var _curry1Js = require("./_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _curry2Js = require("./_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isPlaceholderJs = require("./_isPlaceholder.js");
var _isPlaceholderJsDefault = parcelHelpers.interopDefault(_isPlaceholderJs);
function _curry3(fn) {
    return function f3(a, b, c) {
        switch(arguments.length){
            case 0:
                return f3;
            case 1:
                return (0, _isPlaceholderJsDefault.default)(a) ? f3 : (0, _curry2JsDefault.default)(function(_b, _c) {
                    return fn(a, _b, _c);
                });
            case 2:
                return (0, _isPlaceholderJsDefault.default)(a) && (0, _isPlaceholderJsDefault.default)(b) ? f3 : (0, _isPlaceholderJsDefault.default)(a) ? (0, _curry2JsDefault.default)(function(_a, _c) {
                    return fn(_a, b, _c);
                }) : (0, _isPlaceholderJsDefault.default)(b) ? (0, _curry2JsDefault.default)(function(_b, _c) {
                    return fn(a, _b, _c);
                }) : (0, _curry1JsDefault.default)(function(_c) {
                    return fn(a, b, _c);
                });
            default:
                return (0, _isPlaceholderJsDefault.default)(a) && (0, _isPlaceholderJsDefault.default)(b) && (0, _isPlaceholderJsDefault.default)(c) ? f3 : (0, _isPlaceholderJsDefault.default)(a) && (0, _isPlaceholderJsDefault.default)(b) ? (0, _curry2JsDefault.default)(function(_a, _b) {
                    return fn(_a, _b, c);
                }) : (0, _isPlaceholderJsDefault.default)(a) && (0, _isPlaceholderJsDefault.default)(c) ? (0, _curry2JsDefault.default)(function(_a, _c) {
                    return fn(_a, b, _c);
                }) : (0, _isPlaceholderJsDefault.default)(b) && (0, _isPlaceholderJsDefault.default)(c) ? (0, _curry2JsDefault.default)(function(_b, _c) {
                    return fn(a, _b, _c);
                }) : (0, _isPlaceholderJsDefault.default)(a) ? (0, _curry1JsDefault.default)(function(_a) {
                    return fn(_a, b, c);
                }) : (0, _isPlaceholderJsDefault.default)(b) ? (0, _curry1JsDefault.default)(function(_b) {
                    return fn(a, _b, c);
                }) : (0, _isPlaceholderJsDefault.default)(c) ? (0, _curry1JsDefault.default)(function(_c) {
                    return fn(a, b, _c);
                }) : fn(a, b, c);
        }
    };
}

},{"./_curry1.js":"kg5MS","./_curry2.js":"3dy25","./_isPlaceholder.js":"7CKE6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8mT7C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XDropLast = /*#__PURE__*/ function() {
    function XDropLast(n, xf) {
        this.xf = xf;
        this.pos = 0;
        this.full = false;
        this.acc = new Array(n);
    }
    XDropLast.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XDropLast.prototype["@@transducer/result"] = function(result) {
        this.acc = null;
        return this.xf["@@transducer/result"](result);
    };
    XDropLast.prototype["@@transducer/step"] = function(result, input) {
        if (this.full) result = this.xf["@@transducer/step"](result, this.acc[this.pos]);
        this.store(input);
        return result;
    };
    XDropLast.prototype.store = function(input) {
        this.acc[this.pos] = input;
        this.pos += 1;
        if (this.pos === this.acc.length) {
            this.pos = 0;
            this.full = true;
        }
    };
    return XDropLast;
}();
var _xdropLast = /*#__PURE__*/ (0, _curry2JsDefault.default)(function _xdropLast(n, xf) {
    return new XDropLast(n, xf);
});
exports.default = _xdropLast;

},{"./_curry2.js":"3dy25","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fVrfR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _equalsJs = require("./internal/_equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */ var equals = /*#__PURE__*/ (0, _curry2JsDefault.default)(function equals(a, b) {
    return (0, _equalsJsDefault.default)(a, b, [], []);
});
exports.default = equals;

},{"./internal/_curry2.js":"3dy25","./internal/_equals.js":"4LtxC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4LtxC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_equals);
var _arrayFromIteratorJs = require("./_arrayFromIterator.js");
var _arrayFromIteratorJsDefault = parcelHelpers.interopDefault(_arrayFromIteratorJs);
var _includesWithJs = require("./_includesWith.js");
var _includesWithJsDefault = parcelHelpers.interopDefault(_includesWithJs);
var _functionNameJs = require("./_functionName.js");
var _functionNameJsDefault = parcelHelpers.interopDefault(_functionNameJs);
var _hasJs = require("./_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var _objectIsJs = require("./_objectIs.js");
var _objectIsJsDefault = parcelHelpers.interopDefault(_objectIsJs);
var _keysJs = require("../keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
var _typeJs = require("../type.js");
var _typeJsDefault = parcelHelpers.interopDefault(_typeJs);
/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */ function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
    var a = (0, _arrayFromIteratorJsDefault.default)(aIterator);
    var b = (0, _arrayFromIteratorJsDefault.default)(bIterator);
    function eq(_a, _b) {
        return _equals(_a, _b, stackA.slice(), stackB.slice());
    } // if *a* array contains any element that is not included in *b*
    return !(0, _includesWithJsDefault.default)(function(b, aItem) {
        return !(0, _includesWithJsDefault.default)(eq, aItem, b);
    }, b, a);
}
function _equals(a, b, stackA, stackB) {
    if ((0, _objectIsJsDefault.default)(a, b)) return true;
    var typeA = (0, _typeJsDefault.default)(a);
    if (typeA !== (0, _typeJsDefault.default)(b)) return false;
    if (a == null || b == null) return false;
    if (typeof a["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") return typeof a["fantasy-land/equals"] === "function" && a["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a);
    if (typeof a.equals === "function" || typeof b.equals === "function") return typeof a.equals === "function" && a.equals(b) && typeof b.equals === "function" && b.equals(a);
    switch(typeA){
        case "Arguments":
        case "Array":
        case "Object":
            if (typeof a.constructor === "function" && (0, _functionNameJsDefault.default)(a.constructor) === "Promise") return a === b;
            break;
        case "Boolean":
        case "Number":
        case "String":
            if (!(typeof a === typeof b && (0, _objectIsJsDefault.default)(a.valueOf(), b.valueOf()))) return false;
            break;
        case "Date":
            if (!(0, _objectIsJsDefault.default)(a.valueOf(), b.valueOf())) return false;
            break;
        case "Error":
            return a.name === b.name && a.message === b.message;
        case "RegExp":
            if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) return false;
            break;
    }
    var idx = stackA.length - 1;
    while(idx >= 0){
        if (stackA[idx] === a) return stackB[idx] === b;
        idx -= 1;
    }
    switch(typeA){
        case "Map":
            if (a.size !== b.size) return false;
            return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([
                a
            ]), stackB.concat([
                b
            ]));
        case "Set":
            if (a.size !== b.size) return false;
            return _uniqContentEquals(a.values(), b.values(), stackA.concat([
                a
            ]), stackB.concat([
                b
            ]));
        case "Arguments":
        case "Array":
        case "Object":
        case "Boolean":
        case "Number":
        case "String":
        case "Date":
        case "Error":
        case "RegExp":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "ArrayBuffer":
            break;
        default:
            // Values of other types are only equal if identical.
            return false;
    }
    var keysA = (0, _keysJsDefault.default)(a);
    if (keysA.length !== (0, _keysJsDefault.default)(b).length) return false;
    var extendedStackA = stackA.concat([
        a
    ]);
    var extendedStackB = stackB.concat([
        b
    ]);
    idx = keysA.length - 1;
    while(idx >= 0){
        var key = keysA[idx];
        if (!((0, _hasJsDefault.default)(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) return false;
        idx -= 1;
    }
    return true;
}

},{"./_arrayFromIterator.js":"3BKwB","./_includesWith.js":"19ZT4","./_functionName.js":"lo7C1","./_has.js":"armmH","./_objectIs.js":"brBwn","../keys.js":"e4W8c","../type.js":"fAM3S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3BKwB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_arrayFromIterator);
function _arrayFromIterator(iter) {
    var list = [];
    var next;
    while(!(next = iter.next()).done)list.push(next.value);
    return list;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"19ZT4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_includesWith);
function _includesWith(pred, x, list) {
    var idx = 0;
    var len = list.length;
    while(idx < len){
        if (pred(x, list[idx])) return true;
        idx += 1;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lo7C1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_functionName);
function _functionName(f) {
    // String(x => x) evaluates to "x => x", so the pattern may not match.
    var match = String(f).match(/^function (\w*)/);
    return match == null ? "" : match[1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brBwn":[function(require,module,exports) {
// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _objectIs(a, b) {
    // SameValue algorithm
    if (a === b) // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
    else // Step 6.a: NaN == NaN
    return a !== a && b !== b;
}
exports.default = typeof Object.is === "function" ? Object.is : _objectIs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ECWS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _filterJs = require("./internal/_filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _isObjectJs = require("./internal/_isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _reduceJs = require("./internal/_reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _xfilterJs = require("./internal/_xfilter.js");
var _xfilterJsDefault = parcelHelpers.interopDefault(_xfilterJs);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */ var filter = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([
    "filter"
], (0, _xfilterJsDefault.default), function(pred, filterable) {
    return (0, _isObjectJsDefault.default)(filterable) ? (0, _reduceJsDefault.default)(function(acc, key) {
        if (pred(filterable[key])) acc[key] = filterable[key];
        return acc;
    }, {}, (0, _keysJsDefault.default)(filterable)) : (0, _filterJsDefault.default)(pred, filterable);
}));
exports.default = filter;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_filter.js":"2MI57","./internal/_isObject.js":"hfrpU","./internal/_reduce.js":"8Bdru","./internal/_xfilter.js":"9Ml1p","./keys.js":"e4W8c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2MI57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_filter);
function _filter(fn, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    while(idx < len){
        if (fn(list[idx])) result[result.length] = list[idx];
        idx += 1;
    }
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hfrpU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_isObject);
function _isObject(x) {
    return Object.prototype.toString.call(x) === "[object Object]";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Ml1p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XFilter = /*#__PURE__*/ function() {
    function XFilter(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XFilter.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XFilter.prototype["@@transducer/result"] = (0, _xfBaseJsDefault.default).result;
    XFilter.prototype["@@transducer/step"] = function(result, input) {
        return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
    };
    return XFilter;
}();
var _xfilter = /*#__PURE__*/ (0, _curry2JsDefault.default)(function _xfilter(f, xf) {
    return new XFilter(f, xf);
});
exports.default = _xfilter;

},{"./_curry2.js":"3dy25","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cItAW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _makeFlatJs = require("./internal/_makeFlat.js");
var _makeFlatJsDefault = parcelHelpers.interopDefault(_makeFlatJs);
/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */ var flatten = /*#__PURE__*/ (0, _curry1JsDefault.default)(/*#__PURE__*/ (0, _makeFlatJsDefault.default)(true));
exports.default = flatten;

},{"./internal/_curry1.js":"kg5MS","./internal/_makeFlat.js":"2pVbr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ju9u0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */ var fromPairs = /*#__PURE__*/ (0, _curry1JsDefault.default)(function fromPairs(pairs) {
    var result = {};
    var idx = 0;
    while(idx < pairs.length){
        result[pairs[idx][0]] = pairs[idx][1];
        idx += 1;
    }
    return result;
});
exports.default = fromPairs;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4yfxC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkForMethodJs = require("./internal/_checkForMethod.js");
var _checkForMethodJsDefault = parcelHelpers.interopDefault(_checkForMethodJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _reduceByJs = require("./reduceBy.js");
var _reduceByJsDefault = parcelHelpers.interopDefault(_reduceByJs);
/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.reduceBy, R.transduce
 * @example
 *
 *      const byGrade = R.groupBy(function(student) {
 *        const score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      const students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */ var groupBy = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _checkForMethodJsDefault.default)("groupBy", /*#__PURE__*/ (0, _reduceByJsDefault.default)(function(acc, item) {
    if (acc == null) acc = [];
    acc.push(item);
    return acc;
}, null)));
exports.default = groupBy;

},{"./internal/_checkForMethod.js":"jMuNW","./internal/_curry2.js":"3dy25","./reduceBy.js":"7nDTY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7nDTY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneJs = require("./internal/_clone.js");
var _cloneJsDefault = parcelHelpers.interopDefault(_cloneJs);
var _curryNJs = require("./internal/_curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _hasJs = require("./internal/_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var _reduceJs = require("./internal/_reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _xreduceByJs = require("./internal/_xreduceBy.js");
var _xreduceByJsDefault = parcelHelpers.interopDefault(_xreduceByJs);
/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      const groupNames = (acc, {name}) => acc.concat(name)
 *      const toGrade = ({score}) =>
 *        score < 65 ? 'F' :
 *        score < 70 ? 'D' :
 *        score < 80 ? 'C' :
 *        score < 90 ? 'B' : 'A'
 *
 *      var students = [
 *        {name: 'Abby', score: 83},
 *        {name: 'Bart', score: 62},
 *        {name: 'Curt', score: 88},
 *        {name: 'Dora', score: 92},
 *      ]
 *
 *      reduceBy(groupNames, [], toGrade, students)
 *      //=> {"A": ["Dora"], "B": ["Abby", "Curt"], "F": ["Bart"]}
 */ var reduceBy = /*#__PURE__*/ (0, _curryNJsDefault.default)(4, [], /*#__PURE__*/ (0, _dispatchableJsDefault.default)([], (0, _xreduceByJsDefault.default), function reduceBy(valueFn, valueAcc, keyFn, list) {
    return (0, _reduceJsDefault.default)(function(acc, elt) {
        var key = keyFn(elt);
        acc[key] = valueFn((0, _hasJsDefault.default)(key, acc) ? acc[key] : (0, _cloneJsDefault.default)(valueAcc, [], [], false), elt);
        return acc;
    }, {}, list);
}));
exports.default = reduceBy;

},{"./internal/_clone.js":"l669u","./internal/_curryN.js":"epMsX","./internal/_dispatchable.js":"kIEUx","./internal/_has.js":"armmH","./internal/_reduce.js":"8Bdru","./internal/_xreduceBy.js":"9YPgr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9YPgr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curryNJs = require("./_curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _hasJs = require("./_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XReduceBy = /*#__PURE__*/ function() {
    function XReduceBy(valueFn, valueAcc, keyFn, xf) {
        this.valueFn = valueFn;
        this.valueAcc = valueAcc;
        this.keyFn = keyFn;
        this.xf = xf;
        this.inputs = {};
    }
    XReduceBy.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XReduceBy.prototype["@@transducer/result"] = function(result) {
        var key;
        for(key in this.inputs)if ((0, _hasJsDefault.default)(key, this.inputs)) {
            result = this.xf["@@transducer/step"](result, this.inputs[key]);
            if (result["@@transducer/reduced"]) {
                result = result["@@transducer/value"];
                break;
            }
        }
        this.inputs = null;
        return this.xf["@@transducer/result"](result);
    };
    XReduceBy.prototype["@@transducer/step"] = function(result, input) {
        var key = this.keyFn(input);
        this.inputs[key] = this.inputs[key] || [
            key,
            this.valueAcc
        ];
        this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
        return result;
    };
    return XReduceBy;
}();
var _xreduceBy = /*#__PURE__*/ (0, _curryNJsDefault.default)(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
    return new XReduceBy(valueFn, valueAcc, keyFn, xf);
});
exports.default = _xreduceBy;

},{"./_curryN.js":"epMsX","./_has.js":"armmH","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iXdOZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _identityJs = require("./internal/_identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      const obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */ var identity = /*#__PURE__*/ (0, _curry1JsDefault.default)((0, _identityJsDefault.default));
exports.default = identity;

},{"./internal/_curry1.js":"kg5MS","./internal/_identity.js":"l3ABm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l3ABm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_identity);
function _identity(x) {
    return x;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4q4CJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reduceByJs = require("./reduceBy.js");
var _reduceByJsDefault = parcelHelpers.interopDefault(_reduceByJs);
/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */ var indexBy = /*#__PURE__*/ (0, _reduceByJsDefault.default)(function(acc, elem) {
    return elem;
}, null);
exports.default = indexBy;

},{"./reduceBy.js":"7nDTY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3PKj8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      const square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */ var maxBy = /*#__PURE__*/ (0, _curry3JsDefault.default)(function maxBy(f, a, b) {
    return f(b) > f(a) ? b : a;
});
exports.default = maxBy;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fO5nn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectAssignJs = require("./internal/_objectAssign.js");
var _objectAssignJsDefault = parcelHelpers.interopDefault(_objectAssignJs);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */ var mergeAll = /*#__PURE__*/ (0, _curry1JsDefault.default)(function mergeAll(list) {
    return (0, _objectAssignJsDefault.default).apply(null, [
        {}
    ].concat(list));
});
exports.default = mergeAll;

},{"./internal/_objectAssign.js":"4FYvY","./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4FYvY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hasJs = require("./_has.js"); // Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
function _objectAssign(target) {
    if (target == null) throw new TypeError("Cannot convert undefined or null to object");
    var output = Object(target);
    var idx = 1;
    var length = arguments.length;
    while(idx < length){
        var source = arguments[idx];
        if (source != null) {
            for(var nextKey in source)if ((0, _hasJsDefault.default)(nextKey, source)) output[nextKey] = source[nextKey];
        }
        idx += 1;
    }
    return output;
}
exports.default = typeof Object.assign === "function" ? Object.assign : _objectAssign;

},{"./_has.js":"armmH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bcHwU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _mergeDeepWithKeyJs = require("./mergeDeepWithKey.js");
var _mergeDeepWithKeyJsDefault = parcelHelpers.interopDefault(_mergeDeepWithKeyJs);
/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                      { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 */ var mergeDeepLeft = /*#__PURE__*/ (0, _curry2JsDefault.default)(function mergeDeepLeft(lObj, rObj) {
    return (0, _mergeDeepWithKeyJsDefault.default)(function(k, lVal, rVal) {
        return lVal;
    }, lObj, rObj);
});
exports.default = mergeDeepLeft;

},{"./internal/_curry2.js":"3dy25","./mergeDeepWithKey.js":"dB8b5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dB8b5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _isObjectJs = require("./internal/_isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _mergeWithKeyJs = require("./mergeWithKey.js");
var _mergeWithKeyJsDefault = parcelHelpers.interopDefault(_mergeWithKeyJs);
/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */ var mergeDeepWithKey = /*#__PURE__*/ (0, _curry3JsDefault.default)(function mergeDeepWithKey(fn, lObj, rObj) {
    return (0, _mergeWithKeyJsDefault.default)(function(k, lVal, rVal) {
        if ((0, _isObjectJsDefault.default)(lVal) && (0, _isObjectJsDefault.default)(rVal)) return mergeDeepWithKey(fn, lVal, rVal);
        else return fn(k, lVal, rVal);
    }, lObj, rObj);
});
exports.default = mergeDeepWithKey;

},{"./internal/_curry3.js":"jwEOD","./internal/_isObject.js":"hfrpU","./mergeWithKey.js":"6w1Kz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6w1Kz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _hasJs = require("./internal/_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */ var mergeWithKey = /*#__PURE__*/ (0, _curry3JsDefault.default)(function mergeWithKey(fn, l, r) {
    var result = {};
    var k;
    for(k in l)if ((0, _hasJsDefault.default)(k, l)) result[k] = (0, _hasJsDefault.default)(k, r) ? fn(k, l[k], r[k]) : l[k];
    for(k in r)if ((0, _hasJsDefault.default)(k, r) && !(0, _hasJsDefault.default)(k, result)) result[k] = r[k];
    return result;
});
exports.default = mergeWithKey;

},{"./internal/_curry3.js":"jwEOD","./internal/_has.js":"armmH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fBzQH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      const square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */ var minBy = /*#__PURE__*/ (0, _curry3JsDefault.default)(function minBy(f, a, b) {
    return f(b) < f(a) ? b : a;
});
exports.default = minBy;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gnCZG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isStringJs = require("./internal/_isString.js");
var _isStringJsDefault = parcelHelpers.interopDefault(_isStringJs);
/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      const list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */ var nth = /*#__PURE__*/ (0, _curry2JsDefault.default)(function nth(offset, list) {
    var idx = offset < 0 ? list.length + offset : offset;
    return (0, _isStringJsDefault.default)(list) ? list.charAt(idx) : list[idx];
});
exports.default = nth;

},{"./internal/_curry2.js":"3dy25","./internal/_isString.js":"a1eoi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9uBgn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _pathsJs = require("./paths.js");
var _pathsJsDefault = parcelHelpers.interopDefault(_pathsJs);
/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop, R.nth
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 *      R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
 *      R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
 */ var path = /*#__PURE__*/ (0, _curry2JsDefault.default)(function path(pathAr, obj) {
    return (0, _pathsJsDefault.default)([
        pathAr
    ], obj)[0];
});
exports.default = path;

},{"./internal/_curry2.js":"3dy25","./paths.js":"1DZe1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1DZe1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isIntegerJs = require("./internal/_isInteger.js");
var _isIntegerJsDefault = parcelHelpers.interopDefault(_isIntegerJs);
var _nthJs = require("./nth.js");
var _nthJsDefault = parcelHelpers.interopDefault(_nthJs);
/**
 * Retrieves the values at given paths of an object.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category Object
 * @typedefn Idx = [String | Int]
 * @sig [Idx] -> {a} -> [a | Undefined]
 * @param {Array} pathsArray The array of paths to be fetched.
 * @param {Object} obj The object to retrieve the nested properties from.
 * @return {Array} A list consisting of values at paths specified by "pathsArray".
 * @see R.path
 * @example
 *
 *      R.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
 *      R.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
 */ var paths = /*#__PURE__*/ (0, _curry2JsDefault.default)(function paths(pathsArray, obj) {
    return pathsArray.map(function(paths) {
        var val = obj;
        var idx = 0;
        var p;
        while(idx < paths.length){
            if (val == null) return;
            p = paths[idx];
            val = (0, _isIntegerJsDefault.default)(p) ? (0, _nthJsDefault.default)(p, val) : val[p];
            idx += 1;
        }
        return val;
    });
});
exports.default = paths;

},{"./internal/_curry2.js":"3dy25","./internal/_isInteger.js":"3AbYy","./nth.js":"gnCZG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3AbYy":[function(require,module,exports) {
/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = Number.isInteger || function _isInteger(n) {
    return n << 0 === n;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4vNV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>pipe);
var _arityJs = require("./internal/_arity.js");
var _arityJsDefault = parcelHelpers.interopDefault(_arityJs);
var _pipeJs = require("./internal/_pipe.js");
var _pipeJsDefault = parcelHelpers.interopDefault(_pipeJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _tailJs = require("./tail.js");
var _tailJsDefault = parcelHelpers.interopDefault(_tailJs);
function pipe() {
    if (arguments.length === 0) throw new Error("pipe requires at least one argument");
    return (0, _arityJsDefault.default)(arguments[0].length, (0, _reduceJsDefault.default)((0, _pipeJsDefault.default), arguments[0], (0, _tailJsDefault.default)(arguments)));
}

},{"./internal/_arity.js":"k5H5S","./internal/_pipe.js":"8dViZ","./reduce.js":"8LF8v","./tail.js":"aXERB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8dViZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_pipe);
function _pipe(f, g) {
    return function() {
        return g.call(this, f.apply(this, arguments));
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8LF8v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _reduceJs = require("./internal/_reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */ var reduce = /*#__PURE__*/ (0, _curry3JsDefault.default)((0, _reduceJsDefault.default));
exports.default = reduce;

},{"./internal/_curry3.js":"jwEOD","./internal/_reduce.js":"8Bdru","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aXERB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkForMethodJs = require("./internal/_checkForMethod.js");
var _checkForMethodJsDefault = parcelHelpers.interopDefault(_checkForMethodJs);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _sliceJs = require("./slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */ var tail = /*#__PURE__*/ (0, _curry1JsDefault.default)(/*#__PURE__*/ (0, _checkForMethodJsDefault.default)("tail", /*#__PURE__*/ (0, _sliceJsDefault.default)(1, Infinity)));
exports.default = tail;

},{"./internal/_checkForMethod.js":"jMuNW","./internal/_curry1.js":"kg5MS","./slice.js":"d9rCZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hh8KA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _propJs = require("./prop.js");
var _propJsDefault = parcelHelpers.interopDefault(_propJs);
/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      var getAges = R.pluck('age');
 *      getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
 *
 *      R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */ var pluck = /*#__PURE__*/ (0, _curry2JsDefault.default)(function pluck(p, list) {
    return (0, _mapJsDefault.default)((0, _propJsDefault.default)(p), list);
});
exports.default = pluck;

},{"./internal/_curry2.js":"3dy25","./map.js":"dC8Ps","./prop.js":"fBxsF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fBxsF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _pathJs = require("./path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig Idx -> {s: a} -> a | Undefined
 * @param {String|Number} p The property name or array index
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path, R.nth
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 *      R.prop(0, [100]); //=> 100
 *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
 */ var prop = /*#__PURE__*/ (0, _curry2JsDefault.default)(function prop(p, obj) {
    return (0, _pathJsDefault.default)([
        p
    ], obj);
});
exports.default = prop;

},{"./internal/_curry2.js":"3dy25","./path.js":"9uBgn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ThfnX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _hasJs = require("./internal/_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */ var toPairs = /*#__PURE__*/ (0, _curry1JsDefault.default)(function toPairs(obj) {
    var pairs = [];
    for(var prop in obj)if ((0, _hasJsDefault.default)(prop, obj)) pairs[pairs.length] = [
        prop,
        obj[prop]
    ];
    return pairs;
});
exports.default = toPairs;

},{"./internal/_curry1.js":"kg5MS","./internal/_has.js":"armmH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ilMs6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _uniqByJs = require("./uniqBy.js");
var _uniqByJsDefault = parcelHelpers.interopDefault(_uniqByJs);
/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */ var uniq = /*#__PURE__*/ (0, _uniqByJsDefault.default)((0, _identityJsDefault.default));
exports.default = uniq;

},{"./identity.js":"iXdOZ","./uniqBy.js":"f28ar","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f28ar":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setJs = require("./internal/_Set.js");
var _setJsDefault = parcelHelpers.interopDefault(_setJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */ var uniqBy = /*#__PURE__*/ (0, _curry2JsDefault.default)(function uniqBy(fn, list) {
    var set = new (0, _setJsDefault.default)();
    var result = [];
    var idx = 0;
    var appliedItem, item;
    while(idx < list.length){
        item = list[idx];
        appliedItem = fn(item);
        if (set.add(appliedItem)) result.push(item);
        idx += 1;
    }
    return result;
});
exports.default = uniqBy;

},{"./internal/_Set.js":"4ERsU","./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ERsU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _includesJs = require("./_includes.js");
var _includesJsDefault = parcelHelpers.interopDefault(_includesJs);
var _Set = /*#__PURE__*/ function() {
    function _Set() {
        /* globals Set */ this._nativeSet = typeof Set === "function" ? new Set() : null;
        this._items = {};
    }
    // until we figure out why jsdoc chokes on this
    // @param item The item to add to the Set
    // @returns {boolean} true if the item did not exist prior, otherwise false
    //
    _Set.prototype.add = function(item) {
        return !hasOrAdd(item, true, this);
    }; //
    // @param item The item to check for existence in the Set
    // @returns {boolean} true if the item exists in the Set, otherwise false
    //
    _Set.prototype.has = function(item) {
        return hasOrAdd(item, false, this);
    }; //
    // Combines the logic for checking whether an item is a member of the set and
    // for adding a new item to the set.
    //
    // @param item       The item to check or add to the Set instance.
    // @param shouldAdd  If true, the item will be added to the set if it doesn't
    //                   already exist.
    // @param set        The set instance to check or add to.
    // @return {boolean} true if the item already existed, otherwise false.
    //
    return _Set;
}();
function hasOrAdd(item, shouldAdd, set) {
    var type = typeof item;
    var prevSize, newSize;
    switch(type){
        case "string":
        case "number":
            // distinguish between +0 and -0
            if (item === 0 && 1 / item === -Infinity) {
                if (set._items["-0"]) return true;
                else {
                    if (shouldAdd) set._items["-0"] = true;
                    return false;
                }
            } // these types can all utilise the native Set
            if (set._nativeSet !== null) {
                if (shouldAdd) {
                    prevSize = set._nativeSet.size;
                    set._nativeSet.add(item);
                    newSize = set._nativeSet.size;
                    return newSize === prevSize;
                } else return set._nativeSet.has(item);
            } else {
                if (!(type in set._items)) {
                    if (shouldAdd) {
                        set._items[type] = {};
                        set._items[type][item] = true;
                    }
                    return false;
                } else if (item in set._items[type]) return true;
                else {
                    if (shouldAdd) set._items[type][item] = true;
                    return false;
                }
            }
        case "boolean":
            // set._items['boolean'] holds a two element array
            // representing [ falseExists, trueExists ]
            if (type in set._items) {
                var bIdx = item ? 1 : 0;
                if (set._items[type][bIdx]) return true;
                else {
                    if (shouldAdd) set._items[type][bIdx] = true;
                    return false;
                }
            } else {
                if (shouldAdd) set._items[type] = item ? [
                    false,
                    true
                ] : [
                    true,
                    false
                ];
                return false;
            }
        case "function":
            // compare functions for reference equality
            if (set._nativeSet !== null) {
                if (shouldAdd) {
                    prevSize = set._nativeSet.size;
                    set._nativeSet.add(item);
                    newSize = set._nativeSet.size;
                    return newSize === prevSize;
                } else return set._nativeSet.has(item);
            } else {
                if (!(type in set._items)) {
                    if (shouldAdd) set._items[type] = [
                        item
                    ];
                    return false;
                }
                if (!(0, _includesJsDefault.default)(item, set._items[type])) {
                    if (shouldAdd) set._items[type].push(item);
                    return false;
                }
                return true;
            }
        case "undefined":
            if (set._items[type]) return true;
            else {
                if (shouldAdd) set._items[type] = true;
                return false;
            }
        case "object":
            if (item === null) {
                if (!set._items["null"]) {
                    if (shouldAdd) set._items["null"] = true;
                    return false;
                }
                return true;
            }
        /* falls through */ default:
            // reduce the search size of heterogeneous sets by creating buckets
            // for each type.
            type = Object.prototype.toString.call(item);
            if (!(type in set._items)) {
                if (shouldAdd) set._items[type] = [
                    item
                ];
                return false;
            } // scan through all previously applied items
            if (!(0, _includesJsDefault.default)(item, set._items[type])) {
                if (shouldAdd) set._items[type].push(item);
                return false;
            }
            return true;
    }
} // A simple Set type that honours R.equals semantics
exports.default = _Set;

},{"./_includes.js":"5cnHY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cnHY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_includes);
var _indexOfJs = require("./_indexOf.js");
var _indexOfJsDefault = parcelHelpers.interopDefault(_indexOfJs);
function _includes(a, list) {
    return (0, _indexOfJsDefault.default)(list, a, 0) >= 0;
}

},{"./_indexOf.js":"lHfA9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lHfA9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_indexOf);
var _equalsJs = require("../equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
function _indexOf(list, a, idx) {
    var inf, item; // Array.prototype.indexOf doesn't exist below IE9
    if (typeof list.indexOf === "function") switch(typeof a){
        case "number":
            if (a === 0) {
                // manually crawl the list to distinguish between +0 and -0
                inf = 1 / a;
                while(idx < list.length){
                    item = list[idx];
                    if (item === 0 && 1 / item === inf) return idx;
                    idx += 1;
                }
                return -1;
            } else if (a !== a) {
                // NaN
                while(idx < list.length){
                    item = list[idx];
                    if (typeof item === "number" && item !== item) return idx;
                    idx += 1;
                }
                return -1;
            } // non-zero numbers can utilise Set
            return list.indexOf(a, idx);
        // all these types can utilise Set
        case "string":
        case "boolean":
        case "function":
        case "undefined":
            return list.indexOf(a, idx);
        case "object":
            if (a === null) // null can utilise Set
            return list.indexOf(a, idx);
    }
     // anything else not covered above, defer to R.equals
    while(idx < list.length){
        if ((0, _equalsJsDefault.default)(list[idx], a)) return idx;
        idx += 1;
    }
    return -1;
}

},{"../equals.js":"fVrfR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"idbcD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _identityJs = require("./internal/_identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _chainJs = require("./chain.js");
var _chainJsDefault = parcelHelpers.interopDefault(_chainJs);
/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */ var unnest = /*#__PURE__*/ (0, _chainJsDefault.default)((0, _identityJsDefault.default));
exports.default = unnest;

},{"./internal/_identity.js":"l3ABm","./chain.js":"lpW07","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4ah4":[function(require,module,exports) {
var global = typeof self !== "undefined" ? self : this;
var __self__ = function() {
    function F() {
        this.fetch = false;
        this.DOMException = global.DOMException;
    }
    F.prototype = global;
    return new F();
}();
(function(self1) {
    var irrelevant = function(exports1) {
        var support = {
            searchParams: "URLSearchParams" in self1,
            iterable: "Symbol" in self1 && "iterator" in Symbol,
            blob: "FileReader" in self1 && "Blob" in self1 && function() {
                try {
                    new Blob();
                    return true;
                } catch (e) {
                    return false;
                }
            }(),
            formData: "FormData" in self1,
            arrayBuffer: "ArrayBuffer" in self1
        };
        function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
            var viewClasses = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]"
            ];
            var isArrayBufferView = ArrayBuffer.isView || function(obj) {
                return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
            };
        }
        function normalizeName(name) {
            if (typeof name !== "string") name = String(name);
            if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) throw new TypeError("Invalid character in header field name");
            return name.toLowerCase();
        }
        function normalizeValue(value) {
            if (typeof value !== "string") value = String(value);
            return value;
        }
        // Build a destructive iterator for the value list
        function iteratorFor(items) {
            var iterator = {
                next: function() {
                    var value = items.shift();
                    return {
                        done: value === undefined,
                        value: value
                    };
                }
            };
            if (support.iterable) iterator[Symbol.iterator] = function() {
                return iterator;
            };
            return iterator;
        }
        function Headers(headers) {
            this.map = {};
            if (headers instanceof Headers) headers.forEach(function(value, name) {
                this.append(name, value);
            }, this);
            else if (Array.isArray(headers)) headers.forEach(function(header) {
                this.append(header[0], header[1]);
            }, this);
            else if (headers) Object.getOwnPropertyNames(headers).forEach(function(name) {
                this.append(name, headers[name]);
            }, this);
        }
        Headers.prototype.append = function(name, value) {
            name = normalizeName(name);
            value = normalizeValue(value);
            var oldValue = this.map[name];
            this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name) {
            delete this.map[normalizeName(name)];
        };
        Headers.prototype.get = function(name) {
            name = normalizeName(name);
            return this.has(name) ? this.map[name] : null;
        };
        Headers.prototype.has = function(name) {
            return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers.prototype.set = function(name, value) {
            this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
            for(var name in this.map)if (this.map.hasOwnProperty(name)) callback.call(thisArg, this.map[name], name, this);
        };
        Headers.prototype.keys = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push(name);
            });
            return iteratorFor(items);
        };
        Headers.prototype.values = function() {
            var items = [];
            this.forEach(function(value) {
                items.push(value);
            });
            return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push([
                    name,
                    value
                ]);
            });
            return iteratorFor(items);
        };
        if (support.iterable) Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        function consumed(body) {
            if (body.bodyUsed) return Promise.reject(new TypeError("Already read"));
            body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
            return new Promise(function(resolve, reject) {
                reader.onload = function() {
                    resolve(reader.result);
                };
                reader.onerror = function() {
                    reject(reader.error);
                };
            });
        }
        function readBlobAsArrayBuffer(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise;
        }
        function readBlobAsText(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsText(blob);
            return promise;
        }
        function readArrayBufferAsText(buf) {
            var view = new Uint8Array(buf);
            var chars = new Array(view.length);
            for(var i = 0; i < view.length; i++)chars[i] = String.fromCharCode(view[i]);
            return chars.join("");
        }
        function bufferClone(buf) {
            if (buf.slice) return buf.slice(0);
            else {
                var view = new Uint8Array(buf.byteLength);
                view.set(new Uint8Array(buf));
                return view.buffer;
            }
        }
        function Body() {
            this.bodyUsed = false;
            this._initBody = function(body) {
                this._bodyInit = body;
                if (!body) this._bodyText = "";
                else if (typeof body === "string") this._bodyText = body;
                else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body;
                else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body;
                else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString();
                else if (support.arrayBuffer && support.blob && isDataView(body)) {
                    this._bodyArrayBuffer = bufferClone(body.buffer);
                    // IE 10-11 can't handle a DataView body.
                    this._bodyInit = new Blob([
                        this._bodyArrayBuffer
                    ]);
                } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) this._bodyArrayBuffer = bufferClone(body);
                else this._bodyText = body = Object.prototype.toString.call(body);
                if (!this.headers.get("content-type")) {
                    if (typeof body === "string") this.headers.set("content-type", "text/plain;charset=UTF-8");
                    else if (this._bodyBlob && this._bodyBlob.type) this.headers.set("content-type", this._bodyBlob.type);
                    else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                }
            };
            if (support.blob) {
                this.blob = function() {
                    var rejected = consumed(this);
                    if (rejected) return rejected;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    else if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
                        this._bodyArrayBuffer
                    ]));
                    else if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    else return Promise.resolve(new Blob([
                        this._bodyText
                    ]));
                };
                this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                    else return this.blob().then(readBlobAsArrayBuffer);
                };
            }
            this.text = function() {
                var rejected = consumed(this);
                if (rejected) return rejected;
                if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
                else if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
                else if (this._bodyFormData) throw new Error("could not read FormData body as text");
                else return Promise.resolve(this._bodyText);
            };
            if (support.formData) this.formData = function() {
                return this.text().then(decode);
            };
            this.json = function() {
                return this.text().then(JSON.parse);
            };
            return this;
        }
        // HTTP methods whose capitalization should be normalized
        var methods = [
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "POST",
            "PUT"
        ];
        function normalizeMethod(method) {
            var upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
            options = options || {};
            var body = options.body;
            if (input instanceof Request) {
                if (input.bodyUsed) throw new TypeError("Already read");
                this.url = input.url;
                this.credentials = input.credentials;
                if (!options.headers) this.headers = new Headers(input.headers);
                this.method = input.method;
                this.mode = input.mode;
                this.signal = input.signal;
                if (!body && input._bodyInit != null) {
                    body = input._bodyInit;
                    input.bodyUsed = true;
                }
            } else this.url = String(input);
            this.credentials = options.credentials || this.credentials || "same-origin";
            if (options.headers || !this.headers) this.headers = new Headers(options.headers);
            this.method = normalizeMethod(options.method || this.method || "GET");
            this.mode = options.mode || this.mode || null;
            this.signal = options.signal || this.signal;
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && body) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(body);
        }
        Request.prototype.clone = function() {
            return new Request(this, {
                body: this._bodyInit
            });
        };
        function decode(body) {
            var form = new FormData();
            body.trim().split("&").forEach(function(bytes) {
                if (bytes) {
                    var split = bytes.split("=");
                    var name = split.shift().replace(/\+/g, " ");
                    var value = split.join("=").replace(/\+/g, " ");
                    form.append(decodeURIComponent(name), decodeURIComponent(value));
                }
            });
            return form;
        }
        function parseHeaders(rawHeaders) {
            var headers = new Headers();
            // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
            // https://tools.ietf.org/html/rfc7230#section-3.2
            var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
            preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
                var parts = line.split(":");
                var key = parts.shift().trim();
                if (key) {
                    var value = parts.join(":").trim();
                    headers.append(key, value);
                }
            });
            return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
            if (!options) options = {};
            this.type = "default";
            this.status = options.status === undefined ? 200 : options.status;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = "statusText" in options ? options.statusText : "OK";
            this.headers = new Headers(options.headers);
            this.url = options.url || "";
            this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
            return new Response(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new Headers(this.headers),
                url: this.url
            });
        };
        Response.error = function() {
            var response = new Response(null, {
                status: 0,
                statusText: ""
            });
            response.type = "error";
            return response;
        };
        var redirectStatuses = [
            301,
            302,
            303,
            307,
            308
        ];
        Response.redirect = function(url, status) {
            if (redirectStatuses.indexOf(status) === -1) throw new RangeError("Invalid status code");
            return new Response(null, {
                status: status,
                headers: {
                    location: url
                }
            });
        };
        exports1.DOMException = self1.DOMException;
        try {
            new exports1.DOMException();
        } catch (err) {
            exports1.DOMException = function(message, name) {
                this.message = message;
                this.name = name;
                var error = Error(message);
                this.stack = error.stack;
            };
            exports1.DOMException.prototype = Object.create(Error.prototype);
            exports1.DOMException.prototype.constructor = exports1.DOMException;
        }
        function fetch(input, init) {
            return new Promise(function(resolve, reject) {
                var request = new Request(input, init);
                if (request.signal && request.signal.aborted) return reject(new exports1.DOMException("Aborted", "AbortError"));
                var xhr = new XMLHttpRequest();
                function abortXhr() {
                    xhr.abort();
                }
                xhr.onload = function() {
                    var options = {
                        status: xhr.status,
                        statusText: xhr.statusText,
                        headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                    };
                    options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                    var body = "response" in xhr ? xhr.response : xhr.responseText;
                    resolve(new Response(body, options));
                };
                xhr.onerror = function() {
                    reject(new TypeError("Network request failed"));
                };
                xhr.ontimeout = function() {
                    reject(new TypeError("Network request failed"));
                };
                xhr.onabort = function() {
                    reject(new exports1.DOMException("Aborted", "AbortError"));
                };
                xhr.open(request.method, request.url, true);
                if (request.credentials === "include") xhr.withCredentials = true;
                else if (request.credentials === "omit") xhr.withCredentials = false;
                if ("responseType" in xhr && support.blob) xhr.responseType = "blob";
                request.headers.forEach(function(value, name) {
                    xhr.setRequestHeader(name, value);
                });
                if (request.signal) {
                    request.signal.addEventListener("abort", abortXhr);
                    xhr.onreadystatechange = function() {
                        // DONE (success or failure)
                        if (xhr.readyState === 4) request.signal.removeEventListener("abort", abortXhr);
                    };
                }
                xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
            });
        }
        fetch.polyfill = true;
        if (!self1.fetch) {
            self1.fetch = fetch;
            self1.Headers = Headers;
            self1.Request = Request;
            self1.Response = Response;
        }
        exports1.Headers = Headers;
        exports1.Request = Request;
        exports1.Response = Response;
        exports1.fetch = fetch;
        Object.defineProperty(exports1, "__esModule", {
            value: true
        });
        return exports1;
    }({});
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
;
exports.default = ctx.fetch // For TypeScript consumers without esModuleInterop.
;
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
;
exports.Headers = ctx.Headers;
exports.Request = ctx.Request;
exports.Response = ctx.Response;
module.exports = exports;

},{}],"5fp49":[function(require,module,exports) {
var global = arguments[3];
/**
 *
 *
 * @author Jerry Bendy <jerry@icewingcc.com>
 * @licence MIT
 *
 */ (function(self) {
    "use strict";
    var nativeURLSearchParams = self.URLSearchParams && self.URLSearchParams.prototype.get ? self.URLSearchParams : null, isSupportObjectConstructor = nativeURLSearchParams && new nativeURLSearchParams({
        a: 1
    }).toString() === "a=1", // There is a bug in safari 10.1 (and earlier) that incorrectly decodes `%2B` as an empty space and not a plus.
    decodesPlusesCorrectly = nativeURLSearchParams && new nativeURLSearchParams("s=%2B").get("s") === "+", __URLSearchParams__ = "__URLSearchParams__", // Fix bug in Edge which cannot encode ' &' correctly
    encodesAmpersandsCorrectly = nativeURLSearchParams ? function() {
        var ampersandTest = new nativeURLSearchParams();
        ampersandTest.append("s", " &");
        return ampersandTest.toString() === "s=+%26";
    }() : true, prototype = URLSearchParamsPolyfill.prototype, iterable = !!(self.Symbol && self.Symbol.iterator);
    if (nativeURLSearchParams && isSupportObjectConstructor && decodesPlusesCorrectly && encodesAmpersandsCorrectly) return;
    /**
     * Make a URLSearchParams instance
     *
     * @param {object|string|URLSearchParams} search
     * @constructor
     */ function URLSearchParamsPolyfill(search) {
        search = search || "";
        // support construct object with another URLSearchParams instance
        if (search instanceof URLSearchParams || search instanceof URLSearchParamsPolyfill) search = search.toString();
        this[__URLSearchParams__] = parseToDict(search);
    }
    /**
     * Appends a specified key/value pair as a new search parameter.
     *
     * @param {string} name
     * @param {string} value
     */ prototype.append = function(name, value) {
        appendTo(this[__URLSearchParams__], name, value);
    };
    /**
     * Deletes the given search parameter, and its associated value,
     * from the list of all search parameters.
     *
     * @param {string} name
     */ prototype["delete"] = function(name) {
        delete this[__URLSearchParams__][name];
    };
    /**
     * Returns the first value associated to the given search parameter.
     *
     * @param {string} name
     * @returns {string|null}
     */ prototype.get = function(name) {
        var dict = this[__URLSearchParams__];
        return name in dict ? dict[name][0] : null;
    };
    /**
     * Returns all the values association with a given search parameter.
     *
     * @param {string} name
     * @returns {Array}
     */ prototype.getAll = function(name) {
        var dict = this[__URLSearchParams__];
        return name in dict ? dict[name].slice(0) : [];
    };
    /**
     * Returns a Boolean indicating if such a search parameter exists.
     *
     * @param {string} name
     * @returns {boolean}
     */ prototype.has = function(name) {
        return name in this[__URLSearchParams__];
    };
    /**
     * Sets the value associated to a given search parameter to
     * the given value. If there were several values, delete the
     * others.
     *
     * @param {string} name
     * @param {string} value
     */ prototype.set = function set(name, value) {
        this[__URLSearchParams__][name] = [
            "" + value
        ];
    };
    /**
     * Returns a string containg a query string suitable for use in a URL.
     *
     * @returns {string}
     */ prototype.toString = function() {
        var dict = this[__URLSearchParams__], query = [], i, key, name, value;
        for(key in dict){
            name = encode(key);
            for(i = 0, value = dict[key]; i < value.length; i++)query.push(name + "=" + encode(value[i]));
        }
        return query.join("&");
    };
    // There is a bug in Safari 10.1 and `Proxy`ing it is not enough.
    var forSureUsePolyfill = !decodesPlusesCorrectly;
    var useProxy = !forSureUsePolyfill && nativeURLSearchParams && !isSupportObjectConstructor && self.Proxy;
    /*
     * Apply polifill to global object and append other prototype into it
     */ Object.defineProperty(self, "URLSearchParams", {
        value: useProxy ? // Safari 10.0 doesn't support Proxy, so it won't extend URLSearchParams on safari 10.0
        new Proxy(nativeURLSearchParams, {
            construct: function(target, args) {
                return new target(new URLSearchParamsPolyfill(args[0]).toString());
            }
        }) : URLSearchParamsPolyfill
    });
    var USPProto = self.URLSearchParams.prototype;
    USPProto.polyfill = true;
    /**
     *
     * @param {function} callback
     * @param {object} thisArg
     */ USPProto.forEach = USPProto.forEach || function(callback, thisArg) {
        var dict = parseToDict(this.toString());
        Object.getOwnPropertyNames(dict).forEach(function(name) {
            dict[name].forEach(function(value) {
                callback.call(thisArg, value, name, this);
            }, this);
        }, this);
    };
    /**
     * Sort all name-value pairs
     */ USPProto.sort = USPProto.sort || function() {
        var dict = parseToDict(this.toString()), keys = [], k, i, j;
        for(k in dict)keys.push(k);
        keys.sort();
        for(i = 0; i < keys.length; i++)this["delete"](keys[i]);
        for(i = 0; i < keys.length; i++){
            var key = keys[i], values = dict[key];
            for(j = 0; j < values.length; j++)this.append(key, values[j]);
        }
    };
    /**
     * Returns an iterator allowing to go through all keys of
     * the key/value pairs contained in this object.
     *
     * @returns {function}
     */ USPProto.keys = USPProto.keys || function() {
        var items = [];
        this.forEach(function(item, name) {
            items.push(name);
        });
        return makeIterator(items);
    };
    /**
     * Returns an iterator allowing to go through all values of
     * the key/value pairs contained in this object.
     *
     * @returns {function}
     */ USPProto.values = USPProto.values || function() {
        var items = [];
        this.forEach(function(item) {
            items.push(item);
        });
        return makeIterator(items);
    };
    /**
     * Returns an iterator allowing to go through all key/value
     * pairs contained in this object.
     *
     * @returns {function}
     */ USPProto.entries = USPProto.entries || function() {
        var items = [];
        this.forEach(function(item, name) {
            items.push([
                name,
                item
            ]);
        });
        return makeIterator(items);
    };
    if (iterable) USPProto[self.Symbol.iterator] = USPProto[self.Symbol.iterator] || USPProto.entries;
    function encode(str) {
        var replace = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\x00"
        };
        return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function(match) {
            return replace[match];
        });
    }
    function decode(str) {
        return str.replace(/[ +]/g, "%20").replace(/(%[a-f0-9]{2})+/ig, function(match) {
            return decodeURIComponent(match);
        });
    }
    function makeIterator(arr) {
        var iterator = {
            next: function() {
                var value = arr.shift();
                return {
                    done: value === undefined,
                    value: value
                };
            }
        };
        if (iterable) iterator[self.Symbol.iterator] = function() {
            return iterator;
        };
        return iterator;
    }
    function parseToDict(search) {
        var dict = {};
        if (typeof search === "object") {
            // if `search` is an array, treat it as a sequence
            if (isArray(search)) for(var i = 0; i < search.length; i++){
                var item = search[i];
                if (isArray(item) && item.length === 2) appendTo(dict, item[0], item[1]);
                else throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");
            }
            else {
                for(var key in search)if (search.hasOwnProperty(key)) appendTo(dict, key, search[key]);
            }
        } else {
            // remove first '?'
            if (search.indexOf("?") === 0) search = search.slice(1);
            var pairs = search.split("&");
            for(var j = 0; j < pairs.length; j++){
                var value = pairs[j], index = value.indexOf("=");
                if (-1 < index) appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));
                else if (value) appendTo(dict, decode(value), "");
            }
        }
        return dict;
    }
    function appendTo(dict, name, value) {
        var val = typeof value === "string" ? value : value !== null && value !== undefined && typeof value.toString === "function" ? value.toString() : JSON.stringify(value);
        if (name in dict) dict[name].push(val);
        else dict[name] = [
            val
        ];
    }
    function isArray(val) {
        return !!val && "[object Array]" === Object.prototype.toString.call(val);
    }
})(typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : this);

},{}]},["8wPwC","knYMF"], "knYMF", "parcelRequire30ab")

//# sourceMappingURL=index.d36bdf85.js.map
