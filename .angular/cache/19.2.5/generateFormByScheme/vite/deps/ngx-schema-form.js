import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControlDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgSelectOption,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  SelectMultipleControlValueAccessor,
  UntypedFormControl,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-XJPTG4KO.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-XIA2B5YX.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  Renderer2,
  SimpleChange,
  Subject,
  ViewChild,
  ViewContainerRef,
  __commonJS,
  __decorate,
  __param,
  __toESM,
  combineLatest,
  distinctUntilChanged,
  forwardRef,
  map,
  merge,
  of,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-YHFSUSYP.js";

// node_modules/z-schema/src/Polyfills.js
var require_Polyfills = __commonJS({
  "node_modules/z-schema/src/Polyfills.js"() {
    if (typeof Number.isFinite !== "function") {
      Number.isFinite = function isFinite2(value) {
        if (typeof value !== "number") {
          return false;
        }
        if (value !== value || value === Infinity || value === -Infinity) {
          return false;
        }
        return true;
      };
    }
  }
});

// node_modules/lodash.get/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.get/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var INFINITY = 1 / 0;
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var symbolTag = "[object Symbol]";
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    var reLeadingDot = /^\./;
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reEscapeChar = /\\(\\)?/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var Symbol2 = root.Symbol;
    var splice = arrayProto.splice;
    var Map2 = getNative(root, "Map");
    var nativeCreate = getNative(Object, "create");
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function Hash(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseGet(object, path) {
      path = isKey(path, object) ? [path] : castPath(path);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castPath(value) {
      return isArray(value) ? value : stringToPath(value);
    }
    function getMapData(map2, key) {
      var data = map2.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    var stringToPath = memoize(function(string) {
      string = toString2(string);
      var result = [];
      if (reLeadingDot.test(string)) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, string2) {
        result.push(quote ? string2.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArray = Array.isArray;
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString2(value) {
      return value == null ? "" : baseToString(value);
    }
    function get(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get;
  }
});

// node_modules/z-schema/src/Errors.js
var require_Errors = __commonJS({
  "node_modules/z-schema/src/Errors.js"(exports, module) {
    "use strict";
    module.exports = {
      INVALID_TYPE: "Expected type {0} but found type {1}",
      INVALID_FORMAT: "Object didn't pass validation for format {0}: {1}",
      ENUM_MISMATCH: "No enum match for: {0}",
      ENUM_CASE_MISMATCH: "Enum does not match case for: {0}",
      ANY_OF_MISSING: "Data does not match any schemas from 'anyOf'",
      ONE_OF_MISSING: "Data does not match any schemas from 'oneOf'",
      ONE_OF_MULTIPLE: "Data is valid against more than one schema from 'oneOf'",
      NOT_PASSED: "Data matches schema from 'not'",
      // Array errors
      ARRAY_LENGTH_SHORT: "Array is too short ({0}), minimum {1}",
      ARRAY_LENGTH_LONG: "Array is too long ({0}), maximum {1}",
      ARRAY_UNIQUE: "Array items are not unique (indexes {0} and {1})",
      ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed",
      // Numeric errors
      MULTIPLE_OF: "Value {0} is not a multiple of {1}",
      MINIMUM: "Value {0} is less than minimum {1}",
      MINIMUM_EXCLUSIVE: "Value {0} is equal or less than exclusive minimum {1}",
      MAXIMUM: "Value {0} is greater than maximum {1}",
      MAXIMUM_EXCLUSIVE: "Value {0} is equal or greater than exclusive maximum {1}",
      // Object errors
      OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({0}), minimum {1}",
      OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({0}), maximum {1}",
      OBJECT_MISSING_REQUIRED_PROPERTY: "Missing required property: {0}",
      OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed: {0}",
      OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {0} (due to key: {1})",
      // String errors
      MIN_LENGTH: "String is too short ({0} chars), minimum {1}",
      MAX_LENGTH: "String is too long ({0} chars), maximum {1}",
      PATTERN: "String does not match pattern {0}: {1}",
      // Schema validation errors
      KEYWORD_TYPE_EXPECTED: "Keyword '{0}' is expected to be of type '{1}'",
      KEYWORD_UNDEFINED_STRICT: "Keyword '{0}' must be defined in strict mode",
      KEYWORD_UNEXPECTED: "Keyword '{0}' is not expected to appear in the schema",
      KEYWORD_MUST_BE: "Keyword '{0}' must be {1}",
      KEYWORD_DEPENDENCY: "Keyword '{0}' requires keyword '{1}'",
      KEYWORD_PATTERN: "Keyword '{0}' is not a valid RegExp pattern: {1}",
      KEYWORD_VALUE_TYPE: "Each element of keyword '{0}' array must be a '{1}'",
      UNKNOWN_FORMAT: "There is no validation function for format '{0}'",
      CUSTOM_MODE_FORCE_PROPERTIES: "{0} must define at least one property if present",
      // Remote errors
      REF_UNRESOLVED: "Reference has not been resolved during compilation: {0}",
      UNRESOLVABLE_REFERENCE: "Reference could not be resolved: {0}",
      SCHEMA_NOT_REACHABLE: "Validator was not able to read schema with uri: {0}",
      SCHEMA_TYPE_EXPECTED: "Schema is expected to be of type 'object'",
      SCHEMA_NOT_AN_OBJECT: "Schema is not an object: {0}",
      ASYNC_TIMEOUT: "{0} asynchronous task(s) have timed out after {1} ms",
      PARENT_SCHEMA_VALIDATION_FAILED: "Schema failed to validate against its parent schema, see inner errors for details.",
      REMOTE_NOT_VALID: "Remote reference didn't compile successfully: {0}"
    };
  }
});

// node_modules/z-schema/src/Utils.js
var require_Utils = __commonJS({
  "node_modules/z-schema/src/Utils.js"(exports) {
    "use strict";
    exports.jsonSymbol = Symbol.for("z-schema/json");
    exports.schemaSymbol = Symbol.for("z-schema/schema");
    var sortedKeys = exports.sortedKeys = function(obj) {
      return Object.keys(obj).sort();
    };
    exports.isAbsoluteUri = function(uri) {
      return /^https?:\/\//.test(uri);
    };
    exports.isRelativeUri = function(uri) {
      return /.+#/.test(uri);
    };
    exports.whatIs = function(what) {
      var to = typeof what;
      if (to === "object") {
        if (what === null) {
          return "null";
        }
        if (Array.isArray(what)) {
          return "array";
        }
        return "object";
      }
      if (to === "number") {
        if (Number.isFinite(what)) {
          if (what % 1 === 0) {
            return "integer";
          } else {
            return "number";
          }
        }
        if (Number.isNaN(what)) {
          return "not-a-number";
        }
        return "unknown-number";
      }
      return to;
    };
    exports.areEqual = function areEqual(json1, json2, options) {
      options = options || {};
      var caseInsensitiveComparison = options.caseInsensitiveComparison || false;
      if (json1 === json2) {
        return true;
      }
      if (caseInsensitiveComparison === true && typeof json1 === "string" && typeof json2 === "string" && json1.toUpperCase() === json2.toUpperCase()) {
        return true;
      }
      var i, len;
      if (Array.isArray(json1) && Array.isArray(json2)) {
        if (json1.length !== json2.length) {
          return false;
        }
        len = json1.length;
        for (i = 0; i < len; i++) {
          if (!areEqual(json1[i], json2[i], {
            caseInsensitiveComparison
          })) {
            return false;
          }
        }
        return true;
      }
      if (exports.whatIs(json1) === "object" && exports.whatIs(json2) === "object") {
        var keys1 = sortedKeys(json1);
        var keys2 = sortedKeys(json2);
        if (!areEqual(keys1, keys2, {
          caseInsensitiveComparison
        })) {
          return false;
        }
        len = keys1.length;
        for (i = 0; i < len; i++) {
          if (!areEqual(json1[keys1[i]], json2[keys1[i]], {
            caseInsensitiveComparison
          })) {
            return false;
          }
        }
        return true;
      }
      return false;
    };
    exports.isUniqueArray = function(arr, indexes) {
      var i, j, l = arr.length;
      for (i = 0; i < l; i++) {
        for (j = i + 1; j < l; j++) {
          if (exports.areEqual(arr[i], arr[j])) {
            if (indexes) {
              indexes.push(i, j);
            }
            return false;
          }
        }
      }
      return true;
    };
    exports.difference = function(bigSet, subSet) {
      var arr = [], idx = bigSet.length;
      while (idx--) {
        if (subSet.indexOf(bigSet[idx]) === -1) {
          arr.push(bigSet[idx]);
        }
      }
      return arr;
    };
    exports.clone = function(src) {
      if (typeof src === "undefined") {
        return void 0;
      }
      if (typeof src !== "object" || src === null) {
        return src;
      }
      var res, idx;
      if (Array.isArray(src)) {
        res = [];
        idx = src.length;
        while (idx--) {
          res[idx] = src[idx];
        }
      } else {
        res = {};
        var keys = Object.keys(src);
        idx = keys.length;
        while (idx--) {
          var key = keys[idx];
          res[key] = src[key];
        }
      }
      return res;
    };
    exports.cloneDeep = function(src) {
      var vidx = 0, visited = /* @__PURE__ */ new Map(), cloned = [];
      function cloneDeep(src2) {
        if (typeof src2 !== "object" || src2 === null) {
          return src2;
        }
        var res, idx, cidx;
        cidx = visited.get(src2);
        if (cidx !== void 0) {
          return cloned[cidx];
        }
        visited.set(src2, vidx++);
        if (Array.isArray(src2)) {
          res = [];
          cloned.push(res);
          idx = src2.length;
          while (idx--) {
            res[idx] = cloneDeep(src2[idx]);
          }
        } else {
          res = {};
          cloned.push(res);
          var keys = Object.keys(src2);
          idx = keys.length;
          while (idx--) {
            var key = keys[idx];
            res[key] = cloneDeep(src2[key]);
          }
        }
        return res;
      }
      return cloneDeep(src);
    };
    exports.ucs2decode = function(string) {
      var output = [], counter = 0, length = string.length, value, extra;
      while (counter < length) {
        value = string.charCodeAt(counter++);
        if (value >= 55296 && value <= 56319 && counter < length) {
          extra = string.charCodeAt(counter++);
          if ((extra & 64512) == 56320) {
            output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
          } else {
            output.push(value);
            counter--;
          }
        } else {
          output.push(value);
        }
      }
      return output;
    };
  }
});

// node_modules/z-schema/src/Report.js
var require_Report = __commonJS({
  "node_modules/z-schema/src/Report.js"(exports, module) {
    "use strict";
    var get = require_lodash();
    var Errors = require_Errors();
    var Utils = require_Utils();
    function Report(parentOrOptions, reportOptions) {
      this.parentReport = parentOrOptions instanceof Report ? parentOrOptions : void 0;
      this.options = parentOrOptions instanceof Report ? parentOrOptions.options : parentOrOptions || {};
      this.reportOptions = reportOptions || {};
      this.errors = [];
      this.path = [];
      this.asyncTasks = [];
      this.rootSchema = void 0;
      this.commonErrorMessage = void 0;
      this.json = void 0;
    }
    Report.prototype.isValid = function() {
      if (this.asyncTasks.length > 0) {
        throw new Error("Async tasks pending, can't answer isValid");
      }
      return this.errors.length === 0;
    };
    Report.prototype.addAsyncTask = function(fn, args, asyncTaskResultProcessFn) {
      this.asyncTasks.push([fn, args, asyncTaskResultProcessFn]);
    };
    Report.prototype.getAncestor = function(id) {
      if (!this.parentReport) {
        return void 0;
      }
      if (this.parentReport.getSchemaId() === id) {
        return this.parentReport;
      }
      return this.parentReport.getAncestor(id);
    };
    Report.prototype.processAsyncTasks = function(timeout, callback) {
      var validationTimeout = timeout || 2e3, tasksCount = this.asyncTasks.length, idx = tasksCount, timedOut = false, self2 = this;
      function finish() {
        process.nextTick(function() {
          var valid = self2.errors.length === 0, err = valid ? null : self2.errors;
          callback(err, valid);
        });
      }
      function respond(asyncTaskResultProcessFn) {
        return function(asyncTaskResult) {
          if (timedOut) {
            return;
          }
          asyncTaskResultProcessFn(asyncTaskResult);
          if (--tasksCount === 0) {
            finish();
          }
        };
      }
      if (tasksCount === 0 || this.errors.length > 0 && this.options.breakOnFirstError) {
        finish();
        return;
      }
      while (idx--) {
        var task = this.asyncTasks[idx];
        task[0].apply(null, task[1].concat(respond(task[2])));
      }
      setTimeout(function() {
        if (tasksCount > 0) {
          timedOut = true;
          self2.addError("ASYNC_TIMEOUT", [tasksCount, validationTimeout]);
          callback(self2.errors, false);
        }
      }, validationTimeout);
    };
    Report.prototype.getPath = function(returnPathAsString) {
      var path = [];
      if (this.parentReport) {
        path = path.concat(this.parentReport.path);
      }
      path = path.concat(this.path);
      if (returnPathAsString !== true) {
        path = "#/" + path.map(function(segment) {
          segment = segment.toString();
          if (Utils.isAbsoluteUri(segment)) {
            return "uri(" + segment + ")";
          }
          return segment.replace(/\~/g, "~0").replace(/\//g, "~1");
        }).join("/");
      }
      return path;
    };
    Report.prototype.getSchemaId = function() {
      if (!this.rootSchema) {
        return null;
      }
      var path = [];
      if (this.parentReport) {
        path = path.concat(this.parentReport.path);
      }
      path = path.concat(this.path);
      while (path.length > 0) {
        var obj = get(this.rootSchema, path);
        if (obj && obj.id) {
          return obj.id;
        }
        path.pop();
      }
      return this.rootSchema.id;
    };
    Report.prototype.hasError = function(errorCode, params) {
      var idx = this.errors.length;
      while (idx--) {
        if (this.errors[idx].code === errorCode) {
          var match = true;
          var idx2 = this.errors[idx].params.length;
          while (idx2--) {
            if (this.errors[idx].params[idx2] !== params[idx2]) {
              match = false;
            }
          }
          if (match) {
            return match;
          }
        }
      }
      return false;
    };
    Report.prototype.addError = function(errorCode, params, subReports, schema) {
      if (!errorCode) {
        throw new Error("No errorCode passed into addError()");
      }
      this.addCustomError(errorCode, Errors[errorCode], params, subReports, schema);
    };
    Report.prototype.getJson = function() {
      var self2 = this;
      while (self2.json === void 0) {
        self2 = self2.parentReport;
        if (self2 === void 0) {
          return void 0;
        }
      }
      return self2.json;
    };
    Report.prototype.addCustomError = function(errorCode, errorMessage, params, subReports, schema) {
      if (this.errors.length >= this.reportOptions.maxErrors) {
        return;
      }
      if (!errorMessage) {
        throw new Error("No errorMessage known for code " + errorCode);
      }
      params = params || [];
      var idx = params.length;
      while (idx--) {
        var whatIs = Utils.whatIs(params[idx]);
        var param = whatIs === "object" || whatIs === "null" ? JSON.stringify(params[idx]) : params[idx];
        errorMessage = errorMessage.replace("{" + idx + "}", param);
      }
      var err = {
        code: errorCode,
        params,
        message: errorMessage,
        path: this.getPath(this.options.reportPathAsArray),
        schemaId: this.getSchemaId()
      };
      err[Utils.schemaSymbol] = schema;
      err[Utils.jsonSymbol] = this.getJson();
      if (schema && typeof schema === "string") {
        err.description = schema;
      } else if (schema && typeof schema === "object") {
        if (schema.title) {
          err.title = schema.title;
        }
        if (schema.description) {
          err.description = schema.description;
        }
      }
      if (subReports != null) {
        if (!Array.isArray(subReports)) {
          subReports = [subReports];
        }
        err.inner = [];
        idx = subReports.length;
        while (idx--) {
          var subReport = subReports[idx], idx2 = subReport.errors.length;
          while (idx2--) {
            err.inner.push(subReport.errors[idx2]);
          }
        }
        if (err.inner.length === 0) {
          err.inner = void 0;
        }
      }
      this.errors.push(err);
    };
    module.exports = Report;
  }
});

// node_modules/validator/lib/util/assertString.js
var require_assertString = __commonJS({
  "node_modules/validator/lib/util/assertString.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = assertString;
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    function assertString(input) {
      var isString = typeof input === "string" || input instanceof String;
      if (!isString) {
        var invalidType = _typeof(input);
        if (input === null) invalidType = "null";
        else if (invalidType === "object") invalidType = input.constructor.name;
        throw new TypeError("Expected a string but received a ".concat(invalidType));
      }
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/toDate.js
var require_toDate = __commonJS({
  "node_modules/validator/lib/toDate.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toDate;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function toDate(date) {
      (0, _assertString.default)(date);
      date = Date.parse(date);
      return !isNaN(date) ? new Date(date) : null;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/util/nullUndefinedCheck.js
var require_nullUndefinedCheck = __commonJS({
  "node_modules/validator/lib/util/nullUndefinedCheck.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isNullOrUndefined;
    function isNullOrUndefined(value) {
      return value === null || value === void 0;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/alpha.js
var require_alpha = __commonJS({
  "node_modules/validator/lib/alpha.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.farsiLocales = exports.englishLocales = exports.dotDecimal = exports.decimal = exports.commaDecimal = exports.bengaliLocales = exports.arabicLocales = exports.alphanumeric = exports.alpha = void 0;
    var alpha = exports.alpha = {
      "en-US": /^[A-Z]+$/i,
      "az-AZ": /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
      "bg-BG": /^[А-Я]+$/i,
      "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
      "da-DK": /^[A-ZÆØÅ]+$/i,
      "de-DE": /^[A-ZÄÖÜß]+$/i,
      "el-GR": /^[Α-ώ]+$/i,
      "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
      "fa-IR": /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
      "fi-FI": /^[A-ZÅÄÖ]+$/i,
      "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
      "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
      "ja-JP": /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
      "nb-NO": /^[A-ZÆØÅ]+$/i,
      "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
      "nn-NO": /^[A-ZÆØÅ]+$/i,
      "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
      "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
      "pt-PT": /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
      "ru-RU": /^[А-ЯЁ]+$/i,
      "kk-KZ": /^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
      "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
      "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
      "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
      "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
      "sv-SE": /^[A-ZÅÄÖ]+$/i,
      "th-TH": /^[ก-๐\s]+$/i,
      "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
      "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
      "vi-VN": /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
      "ko-KR": /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
      "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
      ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
      he: /^[א-ת]+$/,
      fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
      bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
      eo: /^[ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
      "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
      "si-LK": /^[\u0D80-\u0DFF]+$/
    };
    var alphanumeric = exports.alphanumeric = {
      "en-US": /^[0-9A-Z]+$/i,
      "az-AZ": /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
      "bg-BG": /^[0-9А-Я]+$/i,
      "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
      "da-DK": /^[0-9A-ZÆØÅ]+$/i,
      "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
      "el-GR": /^[0-9Α-ω]+$/i,
      "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
      "fi-FI": /^[0-9A-ZÅÄÖ]+$/i,
      "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
      "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
      "ja-JP": /^[0-9０-９ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
      "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
      "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
      "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
      "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
      "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
      "pt-PT": /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
      "ru-RU": /^[0-9А-ЯЁ]+$/i,
      "kk-KZ": /^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
      "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
      "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
      "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
      "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
      "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
      "th-TH": /^[ก-๙\s]+$/i,
      "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
      "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
      "ko-KR": /^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
      "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
      "vi-VN": /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
      ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
      he: /^[0-9א-ת]+$/,
      fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
      bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
      eo: /^[0-9ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
      "hi-IN": /^[\u0900-\u0963]+[\u0966-\u097F]*$/i,
      "si-LK": /^[0-9\u0D80-\u0DFF]+$/
    };
    var decimal = exports.decimal = {
      "en-US": ".",
      ar: "٫"
    };
    var englishLocales = exports.englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
    for (i = 0; i < englishLocales.length; i++) {
      locale = "en-".concat(englishLocales[i]);
      alpha[locale] = alpha["en-US"];
      alphanumeric[locale] = alphanumeric["en-US"];
      decimal[locale] = decimal["en-US"];
    }
    var locale;
    var i;
    var arabicLocales = exports.arabicLocales = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
    for (_i = 0; _i < arabicLocales.length; _i++) {
      _locale = "ar-".concat(arabicLocales[_i]);
      alpha[_locale] = alpha.ar;
      alphanumeric[_locale] = alphanumeric.ar;
      decimal[_locale] = decimal.ar;
    }
    var _locale;
    var _i;
    var farsiLocales = exports.farsiLocales = ["IR", "AF"];
    for (_i2 = 0; _i2 < farsiLocales.length; _i2++) {
      _locale2 = "fa-".concat(farsiLocales[_i2]);
      alphanumeric[_locale2] = alphanumeric.fa;
      decimal[_locale2] = decimal.ar;
    }
    var _locale2;
    var _i2;
    var bengaliLocales = exports.bengaliLocales = ["BD", "IN"];
    for (_i3 = 0; _i3 < bengaliLocales.length; _i3++) {
      _locale3 = "bn-".concat(bengaliLocales[_i3]);
      alpha[_locale3] = alpha.bn;
      alphanumeric[_locale3] = alphanumeric.bn;
      decimal[_locale3] = decimal["en-US"];
    }
    var _locale3;
    var _i3;
    var dotDecimal = exports.dotDecimal = ["ar-EG", "ar-LB", "ar-LY"];
    var commaDecimal = exports.commaDecimal = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "eo", "es-ES", "fr-CA", "fr-FR", "id-ID", "it-IT", "ku-IQ", "hi-IN", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-PL", "pt-PT", "ru-RU", "kk-KZ", "si-LK", "sl-SI", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA", "vi-VN"];
    for (_i4 = 0; _i4 < dotDecimal.length; _i4++) {
      decimal[dotDecimal[_i4]] = decimal["en-US"];
    }
    var _i4;
    for (_i5 = 0; _i5 < commaDecimal.length; _i5++) {
      decimal[commaDecimal[_i5]] = ",";
    }
    var _i5;
    alpha["fr-CA"] = alpha["fr-FR"];
    alphanumeric["fr-CA"] = alphanumeric["fr-FR"];
    alpha["pt-BR"] = alpha["pt-PT"];
    alphanumeric["pt-BR"] = alphanumeric["pt-PT"];
    decimal["pt-BR"] = decimal["pt-PT"];
    alpha["pl-Pl"] = alpha["pl-PL"];
    alphanumeric["pl-Pl"] = alphanumeric["pl-PL"];
    decimal["pl-Pl"] = decimal["pl-PL"];
    alpha["fa-AF"] = alpha.fa;
  }
});

// node_modules/validator/lib/isFloat.js
var require_isFloat = __commonJS({
  "node_modules/validator/lib/isFloat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isFloat;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    var _nullUndefinedCheck = _interopRequireDefault(require_nullUndefinedCheck());
    var _alpha = require_alpha();
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function isFloat(str, options) {
      (0, _assertString.default)(str);
      options = options || {};
      var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? _alpha.decimal[options.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
      if (str === "" || str === "." || str === "," || str === "-" || str === "+") {
        return false;
      }
      var value = parseFloat(str.replace(",", "."));
      return float.test(str) && (!options.hasOwnProperty("min") || (0, _nullUndefinedCheck.default)(options.min) || value >= options.min) && (!options.hasOwnProperty("max") || (0, _nullUndefinedCheck.default)(options.max) || value <= options.max) && (!options.hasOwnProperty("lt") || (0, _nullUndefinedCheck.default)(options.lt) || value < options.lt) && (!options.hasOwnProperty("gt") || (0, _nullUndefinedCheck.default)(options.gt) || value > options.gt);
    }
    var locales = exports.locales = Object.keys(_alpha.decimal);
  }
});

// node_modules/validator/lib/toFloat.js
var require_toFloat = __commonJS({
  "node_modules/validator/lib/toFloat.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toFloat;
    var _isFloat = _interopRequireDefault(require_isFloat());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function toFloat(str) {
      if (!(0, _isFloat.default)(str)) return NaN;
      return parseFloat(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/toInt.js
var require_toInt = __commonJS({
  "node_modules/validator/lib/toInt.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toInt;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function toInt(str, radix) {
      (0, _assertString.default)(str);
      return parseInt(str, radix || 10);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/toBoolean.js
var require_toBoolean = __commonJS({
  "node_modules/validator/lib/toBoolean.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toBoolean;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function toBoolean(str, strict) {
      (0, _assertString.default)(str);
      if (strict) {
        return str === "1" || /^true$/i.test(str);
      }
      return str !== "0" && !/^false$/i.test(str) && str !== "";
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/equals.js
var require_equals = __commonJS({
  "node_modules/validator/lib/equals.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = equals;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function equals(str, comparison) {
      (0, _assertString.default)(str);
      return str === comparison;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/util/toString.js
var require_toString = __commonJS({
  "node_modules/validator/lib/util/toString.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toString2;
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    function toString2(input) {
      if (_typeof(input) === "object" && input !== null) {
        if (typeof input.toString === "function") {
          input = input.toString();
        } else {
          input = "[object Object]";
        }
      } else if (input === null || typeof input === "undefined" || isNaN(input) && !input.length) {
        input = "";
      }
      return String(input);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/util/merge.js
var require_merge = __commonJS({
  "node_modules/validator/lib/util/merge.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = merge2;
    function merge2() {
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var defaults = arguments.length > 1 ? arguments[1] : void 0;
      for (var key in defaults) {
        if (typeof obj[key] === "undefined") {
          obj[key] = defaults[key];
        }
      }
      return obj;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/contains.js
var require_contains = __commonJS({
  "node_modules/validator/lib/contains.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = contains;
    var _assertString = _interopRequireDefault(require_assertString());
    var _toString = _interopRequireDefault(require_toString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var defaultContainsOptions = {
      ignoreCase: false,
      minOccurrences: 1
    };
    function contains(str, elem, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, defaultContainsOptions);
      if (options.ignoreCase) {
        return str.toLowerCase().split((0, _toString.default)(elem).toLowerCase()).length > options.minOccurrences;
      }
      return str.split((0, _toString.default)(elem)).length > options.minOccurrences;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/matches.js
var require_matches = __commonJS({
  "node_modules/validator/lib/matches.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = matches;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function matches(str, pattern, modifiers) {
      (0, _assertString.default)(str);
      if (Object.prototype.toString.call(pattern) !== "[object RegExp]") {
        pattern = new RegExp(pattern, modifiers);
      }
      return !!str.match(pattern);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/util/checkHost.js
var require_checkHost = __commonJS({
  "node_modules/validator/lib/util/checkHost.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = checkHost;
    function isRegExp(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    }
    function checkHost(host, matches) {
      for (var i = 0; i < matches.length; i++) {
        var match = matches[i];
        if (host === match || isRegExp(match) && match.test(host)) {
          return true;
        }
      }
      return false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isByteLength.js
var require_isByteLength = __commonJS({
  "node_modules/validator/lib/isByteLength.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isByteLength;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    function isByteLength(str, options) {
      (0, _assertString.default)(str);
      var min;
      var max;
      if (_typeof(options) === "object") {
        min = options.min || 0;
        max = options.max;
      } else {
        min = arguments[1];
        max = arguments[2];
      }
      var len = encodeURI(str).split(/%..|./).length - 1;
      return len >= min && (typeof max === "undefined" || len <= max);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isFQDN.js
var require_isFQDN = __commonJS({
  "node_modules/validator/lib/isFQDN.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isFQDN;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var default_fqdn_options = {
      require_tld: true,
      allow_underscores: false,
      allow_trailing_dot: false,
      allow_numeric_tld: false,
      allow_wildcard: false,
      ignore_max_length: false
    };
    function isFQDN(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, default_fqdn_options);
      if (options.allow_trailing_dot && str[str.length - 1] === ".") {
        str = str.substring(0, str.length - 1);
      }
      if (options.allow_wildcard === true && str.indexOf("*.") === 0) {
        str = str.substring(2);
      }
      var parts = str.split(".");
      var tld = parts[parts.length - 1];
      if (options.require_tld) {
        if (parts.length < 2) {
          return false;
        }
        if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
          return false;
        }
        if (/\s/.test(tld)) {
          return false;
        }
      }
      if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
        return false;
      }
      return parts.every(function(part) {
        if (part.length > 63 && !options.ignore_max_length) {
          return false;
        }
        if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
          return false;
        }
        if (/[\uff01-\uff5e]/.test(part)) {
          return false;
        }
        if (/^-|-$/.test(part)) {
          return false;
        }
        if (!options.allow_underscores && /_/.test(part)) {
          return false;
        }
        return true;
      });
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isIP.js
var require_isIP = __commonJS({
  "node_modules/validator/lib/isIP.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIP;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var IPv4SegmentFormat = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
    var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
    var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
    var IPv6SegmentFormat = "(?:[0-9a-fA-F]{1,4})";
    var IPv6AddressRegExp = new RegExp("^(" + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
    function isIP(str) {
      var version = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      (0, _assertString.default)(str);
      version = String(version);
      if (!version) {
        return isIP(str, 4) || isIP(str, 6);
      }
      if (version === "4") {
        return IPv4AddressRegExp.test(str);
      }
      if (version === "6") {
        return IPv6AddressRegExp.test(str);
      }
      return false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isEmail.js
var require_isEmail = __commonJS({
  "node_modules/validator/lib/isEmail.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isEmail;
    var _assertString = _interopRequireDefault(require_assertString());
    var _checkHost = _interopRequireDefault(require_checkHost());
    var _isByteLength = _interopRequireDefault(require_isByteLength());
    var _isFQDN = _interopRequireDefault(require_isFQDN());
    var _isIP = _interopRequireDefault(require_isIP());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var default_email_options = {
      allow_display_name: false,
      allow_underscores: false,
      require_display_name: false,
      allow_utf8_local_part: true,
      require_tld: true,
      blacklisted_chars: "",
      ignore_max_length: false,
      host_blacklist: [],
      host_whitelist: []
    };
    var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
    var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
    var gmailUserPart = /^[a-z\d]+$/;
    var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
    var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
    var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
    var defaultMaxEmailLength = 254;
    function validateDisplayName(display_name) {
      var display_name_without_quotes = display_name.replace(/^"(.+)"$/, "$1");
      if (!display_name_without_quotes.trim()) {
        return false;
      }
      var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
      if (contains_illegal) {
        if (display_name_without_quotes === display_name) {
          return false;
        }
        var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
        if (!all_start_with_back_slash) {
          return false;
        }
      }
      return true;
    }
    function isEmail(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, default_email_options);
      if (options.require_display_name || options.allow_display_name) {
        var display_email = str.match(splitNameAddress);
        if (display_email) {
          var display_name = display_email[1];
          str = str.replace(display_name, "").replace(/(^<|>$)/g, "");
          if (display_name.endsWith(" ")) {
            display_name = display_name.slice(0, -1);
          }
          if (!validateDisplayName(display_name)) {
            return false;
          }
        } else if (options.require_display_name) {
          return false;
        }
      }
      if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
        return false;
      }
      var parts = str.split("@");
      var domain = parts.pop();
      var lower_domain = domain.toLowerCase();
      if (options.host_blacklist.length > 0 && (0, _checkHost.default)(lower_domain, options.host_blacklist)) {
        return false;
      }
      if (options.host_whitelist.length > 0 && !(0, _checkHost.default)(lower_domain, options.host_whitelist)) {
        return false;
      }
      var user = parts.join("@");
      if (options.domain_specific_validation && (lower_domain === "gmail.com" || lower_domain === "googlemail.com")) {
        user = user.toLowerCase();
        var username = user.split("+")[0];
        if (!(0, _isByteLength.default)(username.replace(/\./g, ""), {
          min: 6,
          max: 30
        })) {
          return false;
        }
        var _user_parts = username.split(".");
        for (var i = 0; i < _user_parts.length; i++) {
          if (!gmailUserPart.test(_user_parts[i])) {
            return false;
          }
        }
      }
      if (options.ignore_max_length === false && (!(0, _isByteLength.default)(user, {
        max: 64
      }) || !(0, _isByteLength.default)(domain, {
        max: 254
      }))) {
        return false;
      }
      if (!(0, _isFQDN.default)(domain, {
        require_tld: options.require_tld,
        ignore_max_length: options.ignore_max_length,
        allow_underscores: options.allow_underscores
      })) {
        if (!options.allow_ip_domain) {
          return false;
        }
        if (!(0, _isIP.default)(domain)) {
          if (!domain.startsWith("[") || !domain.endsWith("]")) {
            return false;
          }
          var noBracketdomain = domain.slice(1, -1);
          if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
            return false;
          }
        }
      }
      if (options.blacklisted_chars) {
        if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), "g")) !== -1) return false;
      }
      if (user[0] === '"' && user[user.length - 1] === '"') {
        user = user.slice(1, user.length - 1);
        return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
      }
      var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
      var user_parts = user.split(".");
      for (var _i = 0; _i < user_parts.length; _i++) {
        if (!pattern.test(user_parts[_i])) {
          return false;
        }
      }
      return true;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isURL.js
var require_isURL = __commonJS({
  "node_modules/validator/lib/isURL.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isURL;
    var _assertString = _interopRequireDefault(require_assertString());
    var _checkHost = _interopRequireDefault(require_checkHost());
    var _isFQDN = _interopRequireDefault(require_isFQDN());
    var _isIP = _interopRequireDefault(require_isIP());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function _slicedToArray(r, e) {
      return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(r, a) {
      if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
      }
    }
    function _arrayLikeToArray(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    function _iterableToArrayLimit(r, l) {
      var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t) {
        var e, n, i, u, a = [], f = true, o = false;
        try {
          if (i = (t = t.call(r)).next, 0 === l) {
            if (Object(t) !== t) return;
            f = false;
          } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
        } catch (r2) {
          o = true, n = r2;
        } finally {
          try {
            if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }
    function _arrayWithHoles(r) {
      if (Array.isArray(r)) return r;
    }
    var default_url_options = {
      protocols: ["http", "https", "ftp"],
      require_tld: true,
      require_protocol: false,
      require_host: true,
      require_port: false,
      require_valid_protocol: true,
      allow_underscores: false,
      allow_trailing_dot: false,
      allow_protocol_relative_urls: false,
      allow_fragments: true,
      allow_query_components: true,
      validate_length: true,
      max_allowed_length: 2084
    };
    var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
    function isURL(url, options) {
      (0, _assertString.default)(url);
      if (!url || /[\s<>]/.test(url)) {
        return false;
      }
      if (url.indexOf("mailto:") === 0) {
        return false;
      }
      options = (0, _merge.default)(options, default_url_options);
      if (options.validate_length && url.length > options.max_allowed_length) {
        return false;
      }
      if (!options.allow_fragments && url.includes("#")) {
        return false;
      }
      if (!options.allow_query_components && (url.includes("?") || url.includes("&"))) {
        return false;
      }
      var protocol, auth, host, hostname, port, port_str, split, ipv6;
      split = url.split("#");
      url = split.shift();
      split = url.split("?");
      url = split.shift();
      split = url.split("://");
      if (split.length > 1) {
        protocol = split.shift().toLowerCase();
        if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
          return false;
        }
      } else if (options.require_protocol) {
        return false;
      } else if (url.slice(0, 2) === "//") {
        if (!options.allow_protocol_relative_urls) {
          return false;
        }
        split[0] = url.slice(2);
      }
      url = split.join("://");
      if (url === "") {
        return false;
      }
      split = url.split("/");
      url = split.shift();
      if (url === "" && !options.require_host) {
        return true;
      }
      split = url.split("@");
      if (split.length > 1) {
        if (options.disallow_auth) {
          return false;
        }
        if (split[0] === "") {
          return false;
        }
        auth = split.shift();
        if (auth.indexOf(":") >= 0 && auth.split(":").length > 2) {
          return false;
        }
        var _auth$split = auth.split(":"), _auth$split2 = _slicedToArray(_auth$split, 2), user = _auth$split2[0], password = _auth$split2[1];
        if (user === "" && password === "") {
          return false;
        }
      }
      hostname = split.join("@");
      port_str = null;
      ipv6 = null;
      var ipv6_match = hostname.match(wrapped_ipv6);
      if (ipv6_match) {
        host = "";
        ipv6 = ipv6_match[1];
        port_str = ipv6_match[2] || null;
      } else {
        split = hostname.split(":");
        host = split.shift();
        if (split.length) {
          port_str = split.join(":");
        }
      }
      if (port_str !== null && port_str.length > 0) {
        port = parseInt(port_str, 10);
        if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
          return false;
        }
      } else if (options.require_port) {
        return false;
      }
      if (options.host_whitelist) {
        return (0, _checkHost.default)(host, options.host_whitelist);
      }
      if (host === "" && !options.require_host) {
        return true;
      }
      if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
        return false;
      }
      host = host || ipv6;
      if (options.host_blacklist && (0, _checkHost.default)(host, options.host_blacklist)) {
        return false;
      }
      return true;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isMACAddress.js
var require_isMACAddress = __commonJS({
  "node_modules/validator/lib/isMACAddress.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMACAddress;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var macAddress48 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/;
    var macAddress48NoSeparators = /^([0-9a-fA-F]){12}$/;
    var macAddress48WithDots = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/;
    var macAddress64 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/;
    var macAddress64NoSeparators = /^([0-9a-fA-F]){16}$/;
    var macAddress64WithDots = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;
    function isMACAddress(str, options) {
      (0, _assertString.default)(str);
      if (options !== null && options !== void 0 && options.eui) {
        options.eui = String(options.eui);
      }
      if (options !== null && options !== void 0 && options.no_colons || options !== null && options !== void 0 && options.no_separators) {
        if (options.eui === "48") {
          return macAddress48NoSeparators.test(str);
        }
        if (options.eui === "64") {
          return macAddress64NoSeparators.test(str);
        }
        return macAddress48NoSeparators.test(str) || macAddress64NoSeparators.test(str);
      }
      if ((options === null || options === void 0 ? void 0 : options.eui) === "48") {
        return macAddress48.test(str) || macAddress48WithDots.test(str);
      }
      if ((options === null || options === void 0 ? void 0 : options.eui) === "64") {
        return macAddress64.test(str) || macAddress64WithDots.test(str);
      }
      return isMACAddress(str, {
        eui: "48"
      }) || isMACAddress(str, {
        eui: "64"
      });
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isIPRange.js
var require_isIPRange = __commonJS({
  "node_modules/validator/lib/isIPRange.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIPRange;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isIP = _interopRequireDefault(require_isIP());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var subnetMaybe = /^\d{1,3}$/;
    var v4Subnet = 32;
    var v6Subnet = 128;
    function isIPRange(str) {
      var version = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      (0, _assertString.default)(str);
      var parts = str.split("/");
      if (parts.length !== 2) {
        return false;
      }
      if (!subnetMaybe.test(parts[1])) {
        return false;
      }
      if (parts[1].length > 1 && parts[1].startsWith("0")) {
        return false;
      }
      var isValidIP = (0, _isIP.default)(parts[0], version);
      if (!isValidIP) {
        return false;
      }
      var expectedSubnet = null;
      switch (String(version)) {
        case "4":
          expectedSubnet = v4Subnet;
          break;
        case "6":
          expectedSubnet = v6Subnet;
          break;
        default:
          expectedSubnet = (0, _isIP.default)(parts[0], "6") ? v6Subnet : v4Subnet;
      }
      return parts[1] <= expectedSubnet && parts[1] >= 0;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isDate.js
var require_isDate = __commonJS({
  "node_modules/validator/lib/isDate.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isDate;
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function _slicedToArray(r, e) {
      return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArrayLimit(r, l) {
      var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t) {
        var e, n, i, u, a = [], f = true, o = false;
        try {
          if (i = (t = t.call(r)).next, 0 === l) {
            if (Object(t) !== t) return;
            f = false;
          } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
        } catch (r2) {
          o = true, n = r2;
        } finally {
          try {
            if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }
    function _arrayWithHoles(r) {
      if (Array.isArray(r)) return r;
    }
    function _createForOfIteratorHelper(r, e) {
      var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (!t) {
        if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
          t && (r = t);
          var _n = 0, F = function F2() {
          };
          return {
            s: F,
            n: function n() {
              return _n >= r.length ? {
                done: true
              } : {
                done: false,
                value: r[_n++]
              };
            },
            e: function e2(r2) {
              throw r2;
            },
            f: F
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var o, a = true, u = false;
      return {
        s: function s() {
          t = t.call(r);
        },
        n: function n() {
          var r2 = t.next();
          return a = r2.done, r2;
        },
        e: function e2(r2) {
          u = true, o = r2;
        },
        f: function f() {
          try {
            a || null == t.return || t.return();
          } finally {
            if (u) throw o;
          }
        }
      };
    }
    function _unsupportedIterableToArray(r, a) {
      if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
      }
    }
    function _arrayLikeToArray(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    var default_date_options = {
      format: "YYYY/MM/DD",
      delimiters: ["/", "-"],
      strictMode: false
    };
    function isValidFormat(format) {
      return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(format);
    }
    function zip(date, format) {
      var zippedArr = [], len = Math.max(date.length, format.length);
      for (var i = 0; i < len; i++) {
        zippedArr.push([date[i], format[i]]);
      }
      return zippedArr;
    }
    function isDate(input, options) {
      if (typeof options === "string") {
        options = (0, _merge.default)({
          format: options
        }, default_date_options);
      } else {
        options = (0, _merge.default)(options, default_date_options);
      }
      if (typeof input === "string" && isValidFormat(options.format)) {
        if (options.strictMode && input.length !== options.format.length) return false;
        var formatDelimiter = options.delimiters.find(function(delimiter) {
          return options.format.indexOf(delimiter) !== -1;
        });
        var dateDelimiter = options.strictMode ? formatDelimiter : options.delimiters.find(function(delimiter) {
          return input.indexOf(delimiter) !== -1;
        });
        var dateAndFormat = zip(input.split(dateDelimiter), options.format.toLowerCase().split(formatDelimiter));
        var dateObj = {};
        var _iterator = _createForOfIteratorHelper(dateAndFormat), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _step$value = _slicedToArray(_step.value, 2), dateWord = _step$value[0], formatWord = _step$value[1];
            if (!dateWord || !formatWord || dateWord.length !== formatWord.length) {
              return false;
            }
            dateObj[formatWord.charAt(0)] = dateWord;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var fullYear = dateObj.y;
        if (fullYear.startsWith("-")) {
          return false;
        }
        if (dateObj.y.length === 2) {
          var parsedYear = parseInt(dateObj.y, 10);
          if (isNaN(parsedYear)) {
            return false;
          }
          var currentYearLastTwoDigits = (/* @__PURE__ */ new Date()).getFullYear() % 100;
          if (parsedYear < currentYearLastTwoDigits) {
            fullYear = "20".concat(dateObj.y);
          } else {
            fullYear = "19".concat(dateObj.y);
          }
        }
        var month = dateObj.m;
        if (dateObj.m.length === 1) {
          month = "0".concat(dateObj.m);
        }
        var day = dateObj.d;
        if (dateObj.d.length === 1) {
          day = "0".concat(dateObj.d);
        }
        return new Date("".concat(fullYear, "-").concat(month, "-").concat(day, "T00:00:00.000Z")).getUTCDate() === +dateObj.d;
      }
      if (!options.strictMode) {
        return Object.prototype.toString.call(input) === "[object Date]" && isFinite(input);
      }
      return false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isTime.js
var require_isTime = __commonJS({
  "node_modules/validator/lib/isTime.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isTime;
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var default_time_options = {
      hourFormat: "hour24",
      mode: "default"
    };
    var formats = {
      hour24: {
        default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
        withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
      },
      hour12: {
        default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
        withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
      }
    };
    function isTime(input, options) {
      options = (0, _merge.default)(options, default_time_options);
      if (typeof input !== "string") return false;
      return formats[options.hourFormat][options.mode].test(input);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isBoolean.js
var require_isBoolean = __commonJS({
  "node_modules/validator/lib/isBoolean.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBoolean;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var defaultOptions = {
      loose: false
    };
    var strictBooleans = ["true", "false", "1", "0"];
    var looseBooleans = [].concat(strictBooleans, ["yes", "no"]);
    function isBoolean(str) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultOptions;
      (0, _assertString.default)(str);
      if (options.loose) {
        return looseBooleans.includes(str.toLowerCase());
      }
      return strictBooleans.includes(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isLocale.js
var require_isLocale = __commonJS({
  "node_modules/validator/lib/isLocale.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLocale;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var extlang = "([A-Za-z]{3}(-[A-Za-z]{3}){0,2})";
    var language = "(([a-zA-Z]{2,3}(-".concat(extlang, ")?)|([a-zA-Z]{5,8}))");
    var script = "([A-Za-z]{4})";
    var region = "([A-Za-z]{2}|\\d{3})";
    var variant = "([A-Za-z0-9]{5,8}|(\\d[A-Z-a-z0-9]{3}))";
    var singleton = "(\\d|[A-W]|[Y-Z]|[a-w]|[y-z])";
    var extension = "(".concat(singleton, "(-[A-Za-z0-9]{2,8})+)");
    var privateuse = "(x(-[A-Za-z0-9]{1,8})+)";
    var irregular = "((en-GB-oed)|(i-ami)|(i-bnn)|(i-default)|(i-enochian)|(i-hak)|(i-klingon)|(i-lux)|(i-mingo)|(i-navajo)|(i-pwn)|(i-tao)|(i-tay)|(i-tsu)|(sgn-BE-FR)|(sgn-BE-NL)|(sgn-CH-DE))";
    var regular = "((art-lojban)|(cel-gaulish)|(no-bok)|(no-nyn)|(zh-guoyu)|(zh-hakka)|(zh-min)|(zh-min-nan)|(zh-xiang))";
    var grandfathered = "(".concat(irregular, "|").concat(regular, ")");
    var delimiter = "(-|_)";
    var langtag = "".concat(language, "(").concat(delimiter).concat(script, ")?(").concat(delimiter).concat(region, ")?(").concat(delimiter).concat(variant, ")*(").concat(delimiter).concat(extension, ")*(").concat(delimiter).concat(privateuse, ")?");
    var languageTagRegex = new RegExp("(^".concat(privateuse, "$)|(^").concat(grandfathered, "$)|(^").concat(langtag, "$)"));
    function isLocale(str) {
      (0, _assertString.default)(str);
      return languageTagRegex.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isAbaRouting.js
var require_isAbaRouting = __commonJS({
  "node_modules/validator/lib/isAbaRouting.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAbaRouting;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var isRoutingReg = /^(?!(1[3-9])|(20)|(3[3-9])|(4[0-9])|(5[0-9])|(60)|(7[3-9])|(8[1-9])|(9[0-2])|(9[3-9]))[0-9]{9}$/;
    function isAbaRouting(str) {
      (0, _assertString.default)(str);
      if (!isRoutingReg.test(str)) return false;
      var checkSumVal = 0;
      for (var i = 0; i < str.length; i++) {
        if (i % 3 === 0) checkSumVal += str[i] * 3;
        else if (i % 3 === 1) checkSumVal += str[i] * 7;
        else checkSumVal += str[i] * 1;
      }
      return checkSumVal % 10 === 0;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isAlpha.js
var require_isAlpha = __commonJS({
  "node_modules/validator/lib/isAlpha.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAlpha;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    var _alpha = require_alpha();
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function isAlpha(_str) {
      var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      (0, _assertString.default)(_str);
      var str = _str;
      var ignore = options.ignore;
      if (ignore) {
        if (ignore instanceof RegExp) {
          str = str.replace(ignore, "");
        } else if (typeof ignore === "string") {
          str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
        } else {
          throw new Error("ignore should be instance of a String or RegExp");
        }
      }
      if (locale in _alpha.alpha) {
        return _alpha.alpha[locale].test(str);
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    var locales = exports.locales = Object.keys(_alpha.alpha);
  }
});

// node_modules/validator/lib/isAlphanumeric.js
var require_isAlphanumeric = __commonJS({
  "node_modules/validator/lib/isAlphanumeric.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAlphanumeric;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    var _alpha = require_alpha();
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function isAlphanumeric(_str) {
      var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      (0, _assertString.default)(_str);
      var str = _str;
      var ignore = options.ignore;
      if (ignore) {
        if (ignore instanceof RegExp) {
          str = str.replace(ignore, "");
        } else if (typeof ignore === "string") {
          str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
        } else {
          throw new Error("ignore should be instance of a String or RegExp");
        }
      }
      if (locale in _alpha.alphanumeric) {
        return _alpha.alphanumeric[locale].test(str);
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    var locales = exports.locales = Object.keys(_alpha.alphanumeric);
  }
});

// node_modules/validator/lib/isNumeric.js
var require_isNumeric = __commonJS({
  "node_modules/validator/lib/isNumeric.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isNumeric;
    var _assertString = _interopRequireDefault(require_assertString());
    var _alpha = require_alpha();
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var numericNoSymbols = /^[0-9]+$/;
    function isNumeric(str, options) {
      (0, _assertString.default)(str);
      if (options && options.no_symbols) {
        return numericNoSymbols.test(str);
      }
      return new RegExp("^[+-]?([0-9]*[".concat((options || {}).locale ? _alpha.decimal[options.locale] : ".", "])?[0-9]+$")).test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isPassportNumber.js
var require_isPassportNumber = __commonJS({
  "node_modules/validator/lib/isPassportNumber.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isPassportNumber;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var passportRegexByCountryCode = {
      AM: /^[A-Z]{2}\d{7}$/,
      // ARMENIA
      AR: /^[A-Z]{3}\d{6}$/,
      // ARGENTINA
      AT: /^[A-Z]\d{7}$/,
      // AUSTRIA
      AU: /^[A-Z]\d{7}$/,
      // AUSTRALIA
      AZ: /^[A-Z]{1}\d{8}$/,
      // AZERBAIJAN
      BE: /^[A-Z]{2}\d{6}$/,
      // BELGIUM
      BG: /^\d{9}$/,
      // BULGARIA
      BR: /^[A-Z]{2}\d{6}$/,
      // BRAZIL
      BY: /^[A-Z]{2}\d{7}$/,
      // BELARUS
      CA: /^[A-Z]{2}\d{6}$/,
      // CANADA
      CH: /^[A-Z]\d{7}$/,
      // SWITZERLAND
      CN: /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
      // CHINA [G=Ordinary, E=Electronic] followed by 8-digits, or E followed by any UPPERCASE letter (except I and O) followed by 7 digits
      CY: /^[A-Z](\d{6}|\d{8})$/,
      // CYPRUS
      CZ: /^\d{8}$/,
      // CZECH REPUBLIC
      DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
      // GERMANY
      DK: /^\d{9}$/,
      // DENMARK
      DZ: /^\d{9}$/,
      // ALGERIA
      EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
      // ESTONIA (K followed by 7-digits), e-passports have 2 UPPERCASE followed by 7 digits
      ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
      // SPAIN
      FI: /^[A-Z]{2}\d{7}$/,
      // FINLAND
      FR: /^\d{2}[A-Z]{2}\d{5}$/,
      // FRANCE
      GB: /^\d{9}$/,
      // UNITED KINGDOM
      GR: /^[A-Z]{2}\d{7}$/,
      // GREECE
      HR: /^\d{9}$/,
      // CROATIA
      HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
      // HUNGARY
      IE: /^[A-Z0-9]{2}\d{7}$/,
      // IRELAND
      IN: /^[A-Z]{1}-?\d{7}$/,
      // INDIA
      ID: /^[A-C]\d{7}$/,
      // INDONESIA
      IR: /^[A-Z]\d{8}$/,
      // IRAN
      IS: /^(A)\d{7}$/,
      // ICELAND
      IT: /^[A-Z0-9]{2}\d{7}$/,
      // ITALY
      JM: /^[Aa]\d{7}$/,
      // JAMAICA
      JP: /^[A-Z]{2}\d{7}$/,
      // JAPAN
      KR: /^[MS]\d{8}$/,
      // SOUTH KOREA, REPUBLIC OF KOREA, [S=PS Passports, M=PM Passports]
      KZ: /^[a-zA-Z]\d{7}$/,
      // KAZAKHSTAN
      LI: /^[a-zA-Z]\d{5}$/,
      // LIECHTENSTEIN
      LT: /^[A-Z0-9]{8}$/,
      // LITHUANIA
      LU: /^[A-Z0-9]{8}$/,
      // LUXEMBURG
      LV: /^[A-Z0-9]{2}\d{7}$/,
      // LATVIA
      LY: /^[A-Z0-9]{8}$/,
      // LIBYA
      MT: /^\d{7}$/,
      // MALTA
      MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
      // MOZAMBIQUE
      MY: /^[AHK]\d{8}$/,
      // MALAYSIA
      MX: /^\d{10,11}$/,
      // MEXICO
      NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
      // NETHERLANDS
      NZ: /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/,
      // NEW ZEALAND
      PH: /^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/,
      // PHILIPPINES
      PK: /^[A-Z]{2}\d{7}$/,
      // PAKISTAN
      PL: /^[A-Z]{2}\d{7}$/,
      // POLAND
      PT: /^[A-Z]\d{6}$/,
      // PORTUGAL
      RO: /^\d{8,9}$/,
      // ROMANIA
      RU: /^\d{9}$/,
      // RUSSIAN FEDERATION
      SE: /^\d{8}$/,
      // SWEDEN
      SL: /^(P)[A-Z]\d{7}$/,
      // SLOVENIA
      SK: /^[0-9A-Z]\d{7}$/,
      // SLOVAKIA
      TH: /^[A-Z]{1,2}\d{6,7}$/,
      // THAILAND
      TR: /^[A-Z]\d{8}$/,
      // TURKEY
      UA: /^[A-Z]{2}\d{6}$/,
      // UKRAINE
      US: /^\d{9}$/,
      // UNITED STATES
      ZA: /^[TAMD]\d{8}$/
      // SOUTH AFRICA
    };
    var locales = exports.locales = Object.keys(passportRegexByCountryCode);
    function isPassportNumber(str, countryCode) {
      (0, _assertString.default)(str);
      var normalizedStr = str.replace(/\s/g, "").toUpperCase();
      return countryCode.toUpperCase() in passportRegexByCountryCode && passportRegexByCountryCode[countryCode].test(normalizedStr);
    }
  }
});

// node_modules/validator/lib/isInt.js
var require_isInt = __commonJS({
  "node_modules/validator/lib/isInt.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isInt;
    var _assertString = _interopRequireDefault(require_assertString());
    var _nullUndefinedCheck = _interopRequireDefault(require_nullUndefinedCheck());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
    var intLeadingZeroes = /^[-+]?[0-9]+$/;
    function isInt(str, options) {
      (0, _assertString.default)(str);
      options = options || {};
      var regex = options.allow_leading_zeroes === false ? int : intLeadingZeroes;
      var minCheckPassed = !options.hasOwnProperty("min") || (0, _nullUndefinedCheck.default)(options.min) || str >= options.min;
      var maxCheckPassed = !options.hasOwnProperty("max") || (0, _nullUndefinedCheck.default)(options.max) || str <= options.max;
      var ltCheckPassed = !options.hasOwnProperty("lt") || (0, _nullUndefinedCheck.default)(options.lt) || str < options.lt;
      var gtCheckPassed = !options.hasOwnProperty("gt") || (0, _nullUndefinedCheck.default)(options.gt) || str > options.gt;
      return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isPort.js
var require_isPort = __commonJS({
  "node_modules/validator/lib/isPort.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isPort;
    var _isInt = _interopRequireDefault(require_isInt());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function isPort(str) {
      return (0, _isInt.default)(str, {
        allow_leading_zeroes: false,
        min: 0,
        max: 65535
      });
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isLowercase.js
var require_isLowercase = __commonJS({
  "node_modules/validator/lib/isLowercase.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLowercase;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function isLowercase(str) {
      (0, _assertString.default)(str);
      return str === str.toLowerCase();
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isUppercase.js
var require_isUppercase = __commonJS({
  "node_modules/validator/lib/isUppercase.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isUppercase;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function isUppercase(str) {
      (0, _assertString.default)(str);
      return str === str.toUpperCase();
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isIMEI.js
var require_isIMEI = __commonJS({
  "node_modules/validator/lib/isIMEI.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIMEI;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var imeiRegexWithoutHyphens = /^[0-9]{15}$/;
    var imeiRegexWithHyphens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
    function isIMEI(str, options) {
      (0, _assertString.default)(str);
      options = options || {};
      var imeiRegex = imeiRegexWithoutHyphens;
      if (options.allow_hyphens) {
        imeiRegex = imeiRegexWithHyphens;
      }
      if (!imeiRegex.test(str)) {
        return false;
      }
      str = str.replace(/-/g, "");
      var sum = 0, mul = 2, l = 14;
      for (var i = 0; i < l; i++) {
        var digit = str.substring(l - i - 1, l - i);
        var tp = parseInt(digit, 10) * mul;
        if (tp >= 10) {
          sum += tp % 10 + 1;
        } else {
          sum += tp;
        }
        if (mul === 1) {
          mul += 1;
        } else {
          mul -= 1;
        }
      }
      var chk = (10 - sum % 10) % 10;
      if (chk !== parseInt(str.substring(14, 15), 10)) {
        return false;
      }
      return true;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isAscii.js
var require_isAscii = __commonJS({
  "node_modules/validator/lib/isAscii.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAscii;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var ascii = /^[\x00-\x7F]+$/;
    function isAscii(str) {
      (0, _assertString.default)(str);
      return ascii.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isFullWidth.js
var require_isFullWidth = __commonJS({
  "node_modules/validator/lib/isFullWidth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isFullWidth;
    exports.fullWidth = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var fullWidth = exports.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
    function isFullWidth(str) {
      (0, _assertString.default)(str);
      return fullWidth.test(str);
    }
  }
});

// node_modules/validator/lib/isHalfWidth.js
var require_isHalfWidth = __commonJS({
  "node_modules/validator/lib/isHalfWidth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isHalfWidth;
    exports.halfWidth = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var halfWidth = exports.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
    function isHalfWidth(str) {
      (0, _assertString.default)(str);
      return halfWidth.test(str);
    }
  }
});

// node_modules/validator/lib/isVariableWidth.js
var require_isVariableWidth = __commonJS({
  "node_modules/validator/lib/isVariableWidth.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isVariableWidth;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isFullWidth = require_isFullWidth();
    var _isHalfWidth = require_isHalfWidth();
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function isVariableWidth(str) {
      (0, _assertString.default)(str);
      return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isMultibyte.js
var require_isMultibyte = __commonJS({
  "node_modules/validator/lib/isMultibyte.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMultibyte;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var multibyte = /[^\x00-\x7F]/;
    function isMultibyte(str) {
      (0, _assertString.default)(str);
      return multibyte.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/util/multilineRegex.js
var require_multilineRegex = __commonJS({
  "node_modules/validator/lib/util/multilineRegex.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = multilineRegexp;
    function multilineRegexp(parts, flags) {
      var regexpAsStringLiteral = parts.join("");
      return new RegExp(regexpAsStringLiteral, flags);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isSemVer.js
var require_isSemVer = __commonJS({
  "node_modules/validator/lib/isSemVer.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isSemVer;
    var _assertString = _interopRequireDefault(require_assertString());
    var _multilineRegex = _interopRequireDefault(require_multilineRegex());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var semanticVersioningRegex = (0, _multilineRegex.default)(["^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)", "(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))", "?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"], "i");
    function isSemVer(str) {
      (0, _assertString.default)(str);
      return semanticVersioningRegex.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isSurrogatePair.js
var require_isSurrogatePair = __commonJS({
  "node_modules/validator/lib/isSurrogatePair.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isSurrogatePair;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
    function isSurrogatePair(str) {
      (0, _assertString.default)(str);
      return surrogatePair.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/util/includes.js
var require_includes = __commonJS({
  "node_modules/validator/lib/util/includes.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var includes = function includes2(arr, val) {
      return arr.some(function(arrVal) {
        return val === arrVal;
      });
    };
    var _default = exports.default = includes;
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isDecimal.js
var require_isDecimal = __commonJS({
  "node_modules/validator/lib/isDecimal.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isDecimal;
    var _merge = _interopRequireDefault(require_merge());
    var _assertString = _interopRequireDefault(require_assertString());
    var _includes = _interopRequireDefault(require_includes());
    var _alpha = require_alpha();
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function decimalRegExp(options) {
      var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(_alpha.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? "" : "?", "$"));
      return regExp;
    }
    var default_decimal_options = {
      force_decimal: false,
      decimal_digits: "1,",
      locale: "en-US"
    };
    var blacklist = ["", "-", "+"];
    function isDecimal(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, default_decimal_options);
      if (options.locale in _alpha.decimal) {
        return !(0, _includes.default)(blacklist, str.replace(/ /g, "")) && decimalRegExp(options).test(str);
      }
      throw new Error("Invalid locale '".concat(options.locale, "'"));
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isHexadecimal.js
var require_isHexadecimal = __commonJS({
  "node_modules/validator/lib/isHexadecimal.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isHexadecimal;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;
    function isHexadecimal(str) {
      (0, _assertString.default)(str);
      return hexadecimal.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isOctal.js
var require_isOctal = __commonJS({
  "node_modules/validator/lib/isOctal.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isOctal;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var octal = /^(0o)?[0-7]+$/i;
    function isOctal(str) {
      (0, _assertString.default)(str);
      return octal.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isDivisibleBy.js
var require_isDivisibleBy = __commonJS({
  "node_modules/validator/lib/isDivisibleBy.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isDivisibleBy;
    var _assertString = _interopRequireDefault(require_assertString());
    var _toFloat = _interopRequireDefault(require_toFloat());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function isDivisibleBy(str, num) {
      (0, _assertString.default)(str);
      return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isHexColor.js
var require_isHexColor = __commonJS({
  "node_modules/validator/lib/isHexColor.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isHexColor;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
    function isHexColor(str) {
      (0, _assertString.default)(str);
      return hexcolor.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isRgbColor.js
var require_isRgbColor = __commonJS({
  "node_modules/validator/lib/isRgbColor.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isRgbColor;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    var rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
    var rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
    var rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/;
    var rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
    var startsWithRgb = /^rgba?/;
    function isRgbColor(str, options) {
      (0, _assertString.default)(str);
      var allowSpaces = false;
      var includePercentValues = true;
      if (_typeof(options) !== "object") {
        if (arguments.length >= 2) {
          includePercentValues = arguments[1];
        }
      } else {
        allowSpaces = options.allowSpaces !== void 0 ? options.allowSpaces : allowSpaces;
        includePercentValues = options.includePercentValues !== void 0 ? options.includePercentValues : includePercentValues;
      }
      if (allowSpaces) {
        if (!startsWithRgb.test(str)) {
          return false;
        }
        str = str.replace(/\s/g, "");
      }
      if (!includePercentValues) {
        return rgbColor.test(str) || rgbaColor.test(str);
      }
      return rgbColor.test(str) || rgbaColor.test(str) || rgbColorPercent.test(str) || rgbaColorPercent.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isHSL.js
var require_isHSL = __commonJS({
  "node_modules/validator/lib/isHSL.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isHSL;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var hslComma = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i;
    var hslSpace = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;
    function isHSL(str) {
      (0, _assertString.default)(str);
      var strippedStr = str.replace(/\s+/g, " ").replace(/\s?(hsla?\(|\)|,)\s?/ig, "$1");
      if (strippedStr.indexOf(",") !== -1) {
        return hslComma.test(strippedStr);
      }
      return hslSpace.test(strippedStr);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISRC.js
var require_isISRC = __commonJS({
  "node_modules/validator/lib/isISRC.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISRC;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
    function isISRC(str) {
      (0, _assertString.default)(str);
      return isrc.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isIBAN.js
var require_isIBAN = __commonJS({
  "node_modules/validator/lib/isIBAN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIBAN;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var ibanRegexThroughCountryCode = {
      AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
      AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
      AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
      AT: /^(AT[0-9]{2})\d{16}$/,
      AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
      BA: /^(BA[0-9]{2})\d{16}$/,
      BE: /^(BE[0-9]{2})\d{12}$/,
      BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
      BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
      BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
      BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
      CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
      CR: /^(CR[0-9]{2})\d{18}$/,
      CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
      CZ: /^(CZ[0-9]{2})\d{20}$/,
      DE: /^(DE[0-9]{2})\d{18}$/,
      DK: /^(DK[0-9]{2})\d{14}$/,
      DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
      DZ: /^(DZ\d{24})$/,
      EE: /^(EE[0-9]{2})\d{16}$/,
      EG: /^(EG[0-9]{2})\d{25}$/,
      ES: /^(ES[0-9]{2})\d{20}$/,
      FI: /^(FI[0-9]{2})\d{14}$/,
      FO: /^(FO[0-9]{2})\d{14}$/,
      FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
      GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
      GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
      GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
      GL: /^(GL[0-9]{2})\d{14}$/,
      GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
      GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
      HR: /^(HR[0-9]{2})\d{17}$/,
      HU: /^(HU[0-9]{2})\d{24}$/,
      IE: /^(IE[0-9]{2})[A-Z]{4}\d{14}$/,
      IL: /^(IL[0-9]{2})\d{19}$/,
      IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
      IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
      IS: /^(IS[0-9]{2})\d{22}$/,
      IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
      JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
      KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
      KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
      LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
      LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
      LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
      LT: /^(LT[0-9]{2})\d{16}$/,
      LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
      LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
      MA: /^(MA[0-9]{26})$/,
      MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
      MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
      ME: /^(ME[0-9]{2})\d{18}$/,
      MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
      MR: /^(MR[0-9]{2})\d{23}$/,
      MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
      MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
      MZ: /^(MZ[0-9]{2})\d{21}$/,
      NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
      NO: /^(NO[0-9]{2})\d{11}$/,
      PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
      PL: /^(PL[0-9]{2})\d{24}$/,
      PS: /^(PS[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
      PT: /^(PT[0-9]{2})\d{21}$/,
      QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
      RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
      RS: /^(RS[0-9]{2})\d{18}$/,
      SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
      SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
      SE: /^(SE[0-9]{2})\d{20}$/,
      SI: /^(SI[0-9]{2})\d{15}$/,
      SK: /^(SK[0-9]{2})\d{20}$/,
      SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
      SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
      TL: /^(TL[0-9]{2})\d{19}$/,
      TN: /^(TN[0-9]{2})\d{20}$/,
      TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
      UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
      VA: /^(VA[0-9]{2})\d{18}$/,
      VG: /^(VG[0-9]{2})[A-Z]{4}\d{16}$/,
      XK: /^(XK[0-9]{2})\d{16}$/
    };
    function hasOnlyValidCountryCodes(countryCodeArray) {
      var countryCodeArrayFilteredWithObjectIbanCode = countryCodeArray.filter(function(countryCode) {
        return !(countryCode in ibanRegexThroughCountryCode);
      });
      if (countryCodeArrayFilteredWithObjectIbanCode.length > 0) {
        return false;
      }
      return true;
    }
    function hasValidIbanFormat(str, options) {
      var strippedStr = str.replace(/[\s\-]+/gi, "").toUpperCase();
      var isoCountryCode = strippedStr.slice(0, 2).toUpperCase();
      var isoCountryCodeInIbanRegexCodeObject = isoCountryCode in ibanRegexThroughCountryCode;
      if (options.whitelist) {
        if (!hasOnlyValidCountryCodes(options.whitelist)) {
          return false;
        }
        var isoCountryCodeInWhiteList = options.whitelist.includes(isoCountryCode);
        if (!isoCountryCodeInWhiteList) {
          return false;
        }
      }
      if (options.blacklist) {
        var isoCountryCodeInBlackList = options.blacklist.includes(isoCountryCode);
        if (isoCountryCodeInBlackList) {
          return false;
        }
      }
      return isoCountryCodeInIbanRegexCodeObject && ibanRegexThroughCountryCode[isoCountryCode].test(strippedStr);
    }
    function hasValidIbanChecksum(str) {
      var strippedStr = str.replace(/[^A-Z0-9]+/gi, "").toUpperCase();
      var rearranged = strippedStr.slice(4) + strippedStr.slice(0, 4);
      var alphaCapsReplacedWithDigits = rearranged.replace(/[A-Z]/g, function(char) {
        return char.charCodeAt(0) - 55;
      });
      var remainder = alphaCapsReplacedWithDigits.match(/\d{1,7}/g).reduce(function(acc, value) {
        return Number(acc + value) % 97;
      }, "");
      return remainder === 1;
    }
    function isIBAN(str) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, _assertString.default)(str);
      return hasValidIbanFormat(str, options) && hasValidIbanChecksum(str);
    }
    var locales = exports.locales = Object.keys(ibanRegexThroughCountryCode);
  }
});

// node_modules/validator/lib/isISO31661Alpha2.js
var require_isISO31661Alpha2 = __commonJS({
  "node_modules/validator/lib/isISO31661Alpha2.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CountryCodes = void 0;
    exports.default = isISO31661Alpha2;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var validISO31661Alpha2CountriesCodes = /* @__PURE__ */ new Set(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]);
    function isISO31661Alpha2(str) {
      (0, _assertString.default)(str);
      return validISO31661Alpha2CountriesCodes.has(str.toUpperCase());
    }
    var CountryCodes = exports.CountryCodes = validISO31661Alpha2CountriesCodes;
  }
});

// node_modules/validator/lib/isBIC.js
var require_isBIC = __commonJS({
  "node_modules/validator/lib/isBIC.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBIC;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isISO31661Alpha = require_isISO31661Alpha2();
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var isBICReg = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
    function isBIC(str) {
      (0, _assertString.default)(str);
      var countryCode = str.slice(4, 6).toUpperCase();
      if (!_isISO31661Alpha.CountryCodes.has(countryCode) && countryCode !== "XK") {
        return false;
      }
      return isBICReg.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isMD5.js
var require_isMD5 = __commonJS({
  "node_modules/validator/lib/isMD5.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMD5;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var md5 = /^[a-f0-9]{32}$/;
    function isMD5(str) {
      (0, _assertString.default)(str);
      return md5.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isHash.js
var require_isHash = __commonJS({
  "node_modules/validator/lib/isHash.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isHash;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var lengths = {
      md5: 32,
      md4: 32,
      sha1: 40,
      sha256: 64,
      sha384: 96,
      sha512: 128,
      ripemd128: 32,
      ripemd160: 40,
      tiger128: 32,
      tiger160: 40,
      tiger192: 48,
      crc32: 8,
      crc32b: 8
    };
    function isHash(str, algorithm) {
      (0, _assertString.default)(str);
      var hash = new RegExp("^[a-fA-F0-9]{".concat(lengths[algorithm], "}$"));
      return hash.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isBase64.js
var require_isBase64 = __commonJS({
  "node_modules/validator/lib/isBase64.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBase64;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var notBase64 = /[^A-Z0-9+\/=]/i;
    var urlSafeBase64 = /^[A-Z0-9_\-]*$/i;
    var defaultBase64Options = {
      urlSafe: false
    };
    function isBase64(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, defaultBase64Options);
      var len = str.length;
      if (options.urlSafe) {
        return urlSafeBase64.test(str);
      }
      if (len % 4 !== 0 || notBase64.test(str)) {
        return false;
      }
      var firstPaddingChar = str.indexOf("=");
      return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === "=";
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isJWT.js
var require_isJWT = __commonJS({
  "node_modules/validator/lib/isJWT.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isJWT;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isBase = _interopRequireDefault(require_isBase64());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function isJWT(str) {
      (0, _assertString.default)(str);
      var dotSplit = str.split(".");
      var len = dotSplit.length;
      if (len !== 3) {
        return false;
      }
      return dotSplit.reduce(function(acc, currElem) {
        return acc && (0, _isBase.default)(currElem, {
          urlSafe: true
        });
      }, true);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isJSON.js
var require_isJSON = __commonJS({
  "node_modules/validator/lib/isJSON.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isJSON;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    var default_json_options = {
      allow_primitives: false
    };
    function isJSON(str, options) {
      (0, _assertString.default)(str);
      try {
        options = (0, _merge.default)(options, default_json_options);
        var primitives = [];
        if (options.allow_primitives) {
          primitives = [null, false, true];
        }
        var obj = JSON.parse(str);
        return primitives.includes(obj) || !!obj && _typeof(obj) === "object";
      } catch (e) {
      }
      return false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isEmpty.js
var require_isEmpty = __commonJS({
  "node_modules/validator/lib/isEmpty.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isEmpty;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var default_is_empty_options = {
      ignore_whitespace: false
    };
    function isEmpty(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, default_is_empty_options);
      return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isLength.js
var require_isLength = __commonJS({
  "node_modules/validator/lib/isLength.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLength;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    function isLength(str, options) {
      (0, _assertString.default)(str);
      var min;
      var max;
      if (_typeof(options) === "object") {
        min = options.min || 0;
        max = options.max;
      } else {
        min = arguments[1] || 0;
        max = arguments[2];
      }
      var presentationSequences = str.match(/(\uFE0F|\uFE0E)/g) || [];
      var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
      var len = str.length - presentationSequences.length - surrogatePairs.length;
      var isInsideRange = len >= min && (typeof max === "undefined" || len <= max);
      if (isInsideRange && Array.isArray(options === null || options === void 0 ? void 0 : options.discreteLengths)) {
        return options.discreteLengths.some(function(discreteLen) {
          return discreteLen === len;
        });
      }
      return isInsideRange;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isULID.js
var require_isULID = __commonJS({
  "node_modules/validator/lib/isULID.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isULID;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function isULID(str) {
      (0, _assertString.default)(str);
      return /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/i.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isUUID.js
var require_isUUID = __commonJS({
  "node_modules/validator/lib/isUUID.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isUUID;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var uuid = {
      1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      6: /^[0-9A-F]{8}-[0-9A-F]{4}-6[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      7: /^[0-9A-F]{8}-[0-9A-F]{4}-7[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      8: /^[0-9A-F]{8}-[0-9A-F]{4}-8[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      nil: /^00000000-0000-0000-0000-000000000000$/i,
      max: /^ffffffff-ffff-ffff-ffff-ffffffffffff$/i,
      // From https://github.com/uuidjs/uuid/blob/main/src/regex.js
      all: /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i
    };
    function isUUID(str, version) {
      (0, _assertString.default)(str);
      if (version === void 0 || version === null) {
        version = "all";
      }
      return version in uuid ? uuid[version].test(str) : false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isMongoId.js
var require_isMongoId = __commonJS({
  "node_modules/validator/lib/isMongoId.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMongoId;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isHexadecimal = _interopRequireDefault(require_isHexadecimal());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function isMongoId(str) {
      (0, _assertString.default)(str);
      return (0, _isHexadecimal.default)(str) && str.length === 24;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isAfter.js
var require_isAfter = __commonJS({
  "node_modules/validator/lib/isAfter.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAfter;
    var _toDate = _interopRequireDefault(require_toDate());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function isAfter(date, options) {
      var comparisonDate = (options === null || options === void 0 ? void 0 : options.comparisonDate) || options || Date().toString();
      var comparison = (0, _toDate.default)(comparisonDate);
      var original = (0, _toDate.default)(date);
      return !!(original && comparison && original > comparison);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isBefore.js
var require_isBefore = __commonJS({
  "node_modules/validator/lib/isBefore.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBefore;
    var _assertString = _interopRequireDefault(require_assertString());
    var _toDate = _interopRequireDefault(require_toDate());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function isBefore(str) {
      var date = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String(/* @__PURE__ */ new Date());
      (0, _assertString.default)(str);
      var comparison = (0, _toDate.default)(date);
      var original = (0, _toDate.default)(str);
      return !!(original && comparison && original < comparison);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isIn.js
var require_isIn = __commonJS({
  "node_modules/validator/lib/isIn.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIn;
    var _assertString = _interopRequireDefault(require_assertString());
    var _toString = _interopRequireDefault(require_toString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    function isIn(str, options) {
      (0, _assertString.default)(str);
      var i;
      if (Object.prototype.toString.call(options) === "[object Array]") {
        var array = [];
        for (i in options) {
          if ({}.hasOwnProperty.call(options, i)) {
            array[i] = (0, _toString.default)(options[i]);
          }
        }
        return array.indexOf(str) >= 0;
      } else if (_typeof(options) === "object") {
        return options.hasOwnProperty(str);
      } else if (options && typeof options.indexOf === "function") {
        return options.indexOf(str) >= 0;
      }
      return false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isLuhnNumber.js
var require_isLuhnNumber = __commonJS({
  "node_modules/validator/lib/isLuhnNumber.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLuhnNumber;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function isLuhnNumber(str) {
      (0, _assertString.default)(str);
      var sanitized = str.replace(/[- ]+/g, "");
      var sum = 0;
      var digit;
      var tmpNum;
      var shouldDouble;
      for (var i = sanitized.length - 1; i >= 0; i--) {
        digit = sanitized.substring(i, i + 1);
        tmpNum = parseInt(digit, 10);
        if (shouldDouble) {
          tmpNum *= 2;
          if (tmpNum >= 10) {
            sum += tmpNum % 10 + 1;
          } else {
            sum += tmpNum;
          }
        } else {
          sum += tmpNum;
        }
        shouldDouble = !shouldDouble;
      }
      return !!(sum % 10 === 0 ? sanitized : false);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isCreditCard.js
var require_isCreditCard = __commonJS({
  "node_modules/validator/lib/isCreditCard.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isCreditCard;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isLuhnNumber = _interopRequireDefault(require_isLuhnNumber());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var cards = {
      amex: /^3[47][0-9]{13}$/,
      dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
      mastercard: /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
      // /^[25][1-7][0-9]{14}$/;
      unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
      visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/
    };
    var allCards = function() {
      var tmpCardsArray = [];
      for (var cardProvider in cards) {
        if (cards.hasOwnProperty(cardProvider)) {
          tmpCardsArray.push(cards[cardProvider]);
        }
      }
      return tmpCardsArray;
    }();
    function isCreditCard(card) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, _assertString.default)(card);
      var provider = options.provider;
      var sanitized = card.replace(/[- ]+/g, "");
      if (provider && provider.toLowerCase() in cards) {
        if (!cards[provider.toLowerCase()].test(sanitized)) {
          return false;
        }
      } else if (provider && !(provider.toLowerCase() in cards)) {
        throw new Error("".concat(provider, " is not a valid credit card provider."));
      } else if (!allCards.some(function(cardProvider) {
        return cardProvider.test(sanitized);
      })) {
        return false;
      }
      return (0, _isLuhnNumber.default)(card);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isIdentityCard.js
var require_isIdentityCard = __commonJS({
  "node_modules/validator/lib/isIdentityCard.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIdentityCard;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isInt = _interopRequireDefault(require_isInt());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var validators = {
      PL: function PL(str) {
        (0, _assertString.default)(str);
        var weightOfDigits = {
          1: 1,
          2: 3,
          3: 7,
          4: 9,
          5: 1,
          6: 3,
          7: 7,
          8: 9,
          9: 1,
          10: 3,
          11: 0
        };
        if (str != null && str.length === 11 && (0, _isInt.default)(str, {
          allow_leading_zeroes: true
        })) {
          var digits = str.split("").slice(0, -1);
          var sum = digits.reduce(function(acc, digit, index) {
            return acc + Number(digit) * weightOfDigits[index + 1];
          }, 0);
          var modulo = sum % 10;
          var lastDigit = Number(str.charAt(str.length - 1));
          if (modulo === 0 && lastDigit === 0 || lastDigit === 10 - modulo) {
            return true;
          }
        }
        return false;
      },
      ES: function ES(str) {
        (0, _assertString.default)(str);
        var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
        var charsValue = {
          X: 0,
          Y: 1,
          Z: 2
        };
        var controlDigits = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
        var sanitized = str.trim().toUpperCase();
        if (!DNI.test(sanitized)) {
          return false;
        }
        var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function(char) {
          return charsValue[char];
        });
        return sanitized.endsWith(controlDigits[number % 23]);
      },
      FI: function FI(str) {
        (0, _assertString.default)(str);
        if (str.length !== 11) {
          return false;
        }
        if (!str.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/)) {
          return false;
        }
        var checkDigits = "0123456789ABCDEFHJKLMNPRSTUVWXY";
        var idAsNumber = parseInt(str.slice(0, 6), 10) * 1e3 + parseInt(str.slice(7, 10), 10);
        var remainder = idAsNumber % 31;
        var checkDigit = checkDigits[remainder];
        return checkDigit === str.slice(10, 11);
      },
      IN: function IN(str) {
        var DNI = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/;
        var d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
        var p = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
        var sanitized = str.trim();
        if (!DNI.test(sanitized)) {
          return false;
        }
        var c = 0;
        var invertedArray = sanitized.replace(/\s/g, "").split("").map(Number).reverse();
        invertedArray.forEach(function(val, i) {
          c = d[c][p[i % 8][val]];
        });
        return c === 0;
      },
      IR: function IR(str) {
        if (!str.match(/^\d{10}$/)) return false;
        str = "0000".concat(str).slice(str.length - 6);
        if (parseInt(str.slice(3, 9), 10) === 0) return false;
        var lastNumber = parseInt(str.slice(9, 10), 10);
        var sum = 0;
        for (var i = 0; i < 9; i++) {
          sum += parseInt(str.slice(i, i + 1), 10) * (10 - i);
        }
        sum %= 11;
        return sum < 2 && lastNumber === sum || sum >= 2 && lastNumber === 11 - sum;
      },
      IT: function IT(str) {
        if (str.length !== 9) return false;
        if (str === "CA00000AA") return false;
        return str.search(/C[A-Z]\d{5}[A-Z]{2}/i) > -1;
      },
      NO: function NO(str) {
        var sanitized = str.trim();
        if (isNaN(Number(sanitized))) return false;
        if (sanitized.length !== 11) return false;
        if (sanitized === "00000000000") return false;
        var f = sanitized.split("").map(Number);
        var k1 = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11;
        var k2 = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * k1) % 11) % 11;
        if (k1 !== f[9] || k2 !== f[10]) return false;
        return true;
      },
      TH: function TH(str) {
        if (!str.match(/^[1-8]\d{12}$/)) return false;
        var sum = 0;
        for (var i = 0; i < 12; i++) {
          sum += parseInt(str[i], 10) * (13 - i);
        }
        return str[12] === ((11 - sum % 11) % 10).toString();
      },
      LK: function LK(str) {
        var old_nic = /^[1-9]\d{8}[vx]$/i;
        var new_nic = /^[1-9]\d{11}$/i;
        if (str.length === 10 && old_nic.test(str)) return true;
        else if (str.length === 12 && new_nic.test(str)) return true;
        return false;
      },
      "he-IL": function heIL(str) {
        var DNI = /^\d{9}$/;
        var sanitized = str.trim();
        if (!DNI.test(sanitized)) {
          return false;
        }
        var id = sanitized;
        var sum = 0, incNum;
        for (var i = 0; i < id.length; i++) {
          incNum = Number(id[i]) * (i % 2 + 1);
          sum += incNum > 9 ? incNum - 9 : incNum;
        }
        return sum % 10 === 0;
      },
      "ar-LY": function arLY(str) {
        var NIN = /^(1|2)\d{11}$/;
        var sanitized = str.trim();
        if (!NIN.test(sanitized)) {
          return false;
        }
        return true;
      },
      "ar-TN": function arTN(str) {
        var DNI = /^\d{8}$/;
        var sanitized = str.trim();
        if (!DNI.test(sanitized)) {
          return false;
        }
        return true;
      },
      "zh-CN": function zhCN(str) {
        var provincesAndCities = [
          "11",
          // 北京
          "12",
          // 天津
          "13",
          // 河北
          "14",
          // 山西
          "15",
          // 内蒙古
          "21",
          // 辽宁
          "22",
          // 吉林
          "23",
          // 黑龙江
          "31",
          // 上海
          "32",
          // 江苏
          "33",
          // 浙江
          "34",
          // 安徽
          "35",
          // 福建
          "36",
          // 江西
          "37",
          // 山东
          "41",
          // 河南
          "42",
          // 湖北
          "43",
          // 湖南
          "44",
          // 广东
          "45",
          // 广西
          "46",
          // 海南
          "50",
          // 重庆
          "51",
          // 四川
          "52",
          // 贵州
          "53",
          // 云南
          "54",
          // 西藏
          "61",
          // 陕西
          "62",
          // 甘肃
          "63",
          // 青海
          "64",
          // 宁夏
          "65",
          // 新疆
          "71",
          // 台湾
          "81",
          // 香港
          "82",
          // 澳门
          "91"
          // 国外
        ];
        var powers = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"];
        var parityBit = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
        var checkAddressCode = function checkAddressCode2(addressCode) {
          return provincesAndCities.includes(addressCode);
        };
        var checkBirthDayCode = function checkBirthDayCode2(birDayCode) {
          var yyyy = parseInt(birDayCode.substring(0, 4), 10);
          var mm = parseInt(birDayCode.substring(4, 6), 10);
          var dd = parseInt(birDayCode.substring(6), 10);
          var xdata = new Date(yyyy, mm - 1, dd);
          if (xdata > /* @__PURE__ */ new Date()) {
            return false;
          } else if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) {
            return true;
          }
          return false;
        };
        var getParityBit = function getParityBit2(idCardNo) {
          var id17 = idCardNo.substring(0, 17);
          var power = 0;
          for (var i = 0; i < 17; i++) {
            power += parseInt(id17.charAt(i), 10) * parseInt(powers[i], 10);
          }
          var mod = power % 11;
          return parityBit[mod];
        };
        var checkParityBit = function checkParityBit2(idCardNo) {
          return getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();
        };
        var check15IdCardNo = function check15IdCardNo2(idCardNo) {
          var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
          if (!check) return false;
          var addressCode = idCardNo.substring(0, 2);
          check = checkAddressCode(addressCode);
          if (!check) return false;
          var birDayCode = "19".concat(idCardNo.substring(6, 12));
          check = checkBirthDayCode(birDayCode);
          if (!check) return false;
          return true;
        };
        var check18IdCardNo = function check18IdCardNo2(idCardNo) {
          var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
          if (!check) return false;
          var addressCode = idCardNo.substring(0, 2);
          check = checkAddressCode(addressCode);
          if (!check) return false;
          var birDayCode = idCardNo.substring(6, 14);
          check = checkBirthDayCode(birDayCode);
          if (!check) return false;
          return checkParityBit(idCardNo);
        };
        var checkIdCardNo = function checkIdCardNo2(idCardNo) {
          var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
          if (!check) return false;
          if (idCardNo.length === 15) {
            return check15IdCardNo(idCardNo);
          }
          return check18IdCardNo(idCardNo);
        };
        return checkIdCardNo(str);
      },
      "zh-HK": function zhHK(str) {
        str = str.trim();
        var regexHKID = /^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/;
        var regexIsDigit = /^[0-9]$/;
        str = str.toUpperCase();
        if (!regexHKID.test(str)) return false;
        str = str.replace(/\[|\]|\(|\)/g, "");
        if (str.length === 8) str = "3".concat(str);
        var checkSumVal = 0;
        for (var i = 0; i <= 7; i++) {
          var convertedChar = void 0;
          if (!regexIsDigit.test(str[i])) convertedChar = (str[i].charCodeAt(0) - 55) % 11;
          else convertedChar = str[i];
          checkSumVal += convertedChar * (9 - i);
        }
        checkSumVal %= 11;
        var checkSumConverted;
        if (checkSumVal === 0) checkSumConverted = "0";
        else if (checkSumVal === 1) checkSumConverted = "A";
        else checkSumConverted = String(11 - checkSumVal);
        if (checkSumConverted === str[str.length - 1]) return true;
        return false;
      },
      "zh-TW": function zhTW(str) {
        var ALPHABET_CODES = {
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          G: 16,
          H: 17,
          I: 34,
          J: 18,
          K: 19,
          L: 20,
          M: 21,
          N: 22,
          O: 35,
          P: 23,
          Q: 24,
          R: 25,
          S: 26,
          T: 27,
          U: 28,
          V: 29,
          W: 32,
          X: 30,
          Y: 31,
          Z: 33
        };
        var sanitized = str.trim().toUpperCase();
        if (!/^[A-Z][0-9]{9}$/.test(sanitized)) return false;
        return Array.from(sanitized).reduce(function(sum, number, index) {
          if (index === 0) {
            var code = ALPHABET_CODES[number];
            return code % 10 * 9 + Math.floor(code / 10);
          }
          if (index === 9) {
            return (10 - sum % 10 - Number(number)) % 10 === 0;
          }
          return sum + Number(number) * (9 - index);
        }, 0);
      },
      PK: function PK(str) {
        var CNIC = /^[1-7][0-9]{4}-[0-9]{7}-[1-9]$/;
        var sanitized = str.trim();
        return CNIC.test(sanitized);
      }
    };
    function isIdentityCard(str, locale) {
      (0, _assertString.default)(str);
      if (locale in validators) {
        return validators[locale](str);
      } else if (locale === "any") {
        for (var key in validators) {
          if (validators.hasOwnProperty(key)) {
            var validator = validators[key];
            if (validator(str)) {
              return true;
            }
          }
        }
        return false;
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isEAN.js
var require_isEAN = __commonJS({
  "node_modules/validator/lib/isEAN.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isEAN;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var LENGTH_EAN_8 = 8;
    var LENGTH_EAN_14 = 14;
    var validEanRegex = /^(\d{8}|\d{13}|\d{14})$/;
    function getPositionWeightThroughLengthAndIndex(length, index) {
      if (length === LENGTH_EAN_8 || length === LENGTH_EAN_14) {
        return index % 2 === 0 ? 3 : 1;
      }
      return index % 2 === 0 ? 1 : 3;
    }
    function calculateCheckDigit(ean) {
      var checksum = ean.slice(0, -1).split("").map(function(char, index) {
        return Number(char) * getPositionWeightThroughLengthAndIndex(ean.length, index);
      }).reduce(function(acc, partialSum) {
        return acc + partialSum;
      }, 0);
      var remainder = 10 - checksum % 10;
      return remainder < 10 ? remainder : 0;
    }
    function isEAN(str) {
      (0, _assertString.default)(str);
      var actualCheckDigit = Number(str.slice(-1));
      return validEanRegex.test(str) && actualCheckDigit === calculateCheckDigit(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISIN.js
var require_isISIN = __commonJS({
  "node_modules/validator/lib/isISIN.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISIN;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
    function isISIN(str) {
      (0, _assertString.default)(str);
      if (!isin.test(str)) {
        return false;
      }
      var double = true;
      var sum = 0;
      for (var i = str.length - 2; i >= 0; i--) {
        if (str[i] >= "A" && str[i] <= "Z") {
          var value = str[i].charCodeAt(0) - 55;
          var lo = value % 10;
          var hi = Math.trunc(value / 10);
          for (var _i = 0, _arr = [lo, hi]; _i < _arr.length; _i++) {
            var digit = _arr[_i];
            if (double) {
              if (digit >= 5) {
                sum += 1 + (digit - 5) * 2;
              } else {
                sum += digit * 2;
              }
            } else {
              sum += digit;
            }
            double = !double;
          }
        } else {
          var _digit = str[i].charCodeAt(0) - "0".charCodeAt(0);
          if (double) {
            if (_digit >= 5) {
              sum += 1 + (_digit - 5) * 2;
            } else {
              sum += _digit * 2;
            }
          } else {
            sum += _digit;
          }
          double = !double;
        }
      }
      var check = Math.trunc((sum + 9) / 10) * 10 - sum;
      return +str[str.length - 1] === check;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISBN.js
var require_isISBN = __commonJS({
  "node_modules/validator/lib/isISBN.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISBN;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var possibleIsbn10 = /^(?:[0-9]{9}X|[0-9]{10})$/;
    var possibleIsbn13 = /^(?:[0-9]{13})$/;
    var factor = [1, 3];
    function isISBN(isbn, options) {
      (0, _assertString.default)(isbn);
      var version = String((options === null || options === void 0 ? void 0 : options.version) || options);
      if (!(options !== null && options !== void 0 && options.version || options)) {
        return isISBN(isbn, {
          version: 10
        }) || isISBN(isbn, {
          version: 13
        });
      }
      var sanitizedIsbn = isbn.replace(/[\s-]+/g, "");
      var checksum = 0;
      if (version === "10") {
        if (!possibleIsbn10.test(sanitizedIsbn)) {
          return false;
        }
        for (var i = 0; i < version - 1; i++) {
          checksum += (i + 1) * sanitizedIsbn.charAt(i);
        }
        if (sanitizedIsbn.charAt(9) === "X") {
          checksum += 10 * 10;
        } else {
          checksum += 10 * sanitizedIsbn.charAt(9);
        }
        if (checksum % 11 === 0) {
          return true;
        }
      } else if (version === "13") {
        if (!possibleIsbn13.test(sanitizedIsbn)) {
          return false;
        }
        for (var _i = 0; _i < 12; _i++) {
          checksum += factor[_i % 2] * sanitizedIsbn.charAt(_i);
        }
        if (sanitizedIsbn.charAt(12) - (10 - checksum % 10) % 10 === 0) {
          return true;
        }
      }
      return false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISSN.js
var require_isISSN = __commonJS({
  "node_modules/validator/lib/isISSN.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISSN;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var issn = "^\\d{4}-?\\d{3}[\\dX]$";
    function isISSN(str) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, _assertString.default)(str);
      var testIssn = issn;
      testIssn = options.require_hyphen ? testIssn.replace("?", "") : testIssn;
      testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, "i");
      if (!testIssn.test(str)) {
        return false;
      }
      var digits = str.replace("-", "").toUpperCase();
      var checksum = 0;
      for (var i = 0; i < digits.length; i++) {
        var digit = digits[i];
        checksum += (digit === "X" ? 10 : +digit) * (8 - i);
      }
      return checksum % 11 === 0;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/util/algorithms.js
var require_algorithms = __commonJS({
  "node_modules/validator/lib/util/algorithms.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.iso7064Check = iso7064Check;
    exports.luhnCheck = luhnCheck;
    exports.reverseMultiplyAndSum = reverseMultiplyAndSum;
    exports.verhoeffCheck = verhoeffCheck;
    function iso7064Check(str) {
      var checkvalue = 10;
      for (var i = 0; i < str.length - 1; i++) {
        checkvalue = (parseInt(str[i], 10) + checkvalue) % 10 === 0 ? 10 * 2 % 11 : (parseInt(str[i], 10) + checkvalue) % 10 * 2 % 11;
      }
      checkvalue = checkvalue === 1 ? 0 : 11 - checkvalue;
      return checkvalue === parseInt(str[10], 10);
    }
    function luhnCheck(str) {
      var checksum = 0;
      var second = false;
      for (var i = str.length - 1; i >= 0; i--) {
        if (second) {
          var product = parseInt(str[i], 10) * 2;
          if (product > 9) {
            checksum += product.toString().split("").map(function(a) {
              return parseInt(a, 10);
            }).reduce(function(a, b) {
              return a + b;
            }, 0);
          } else {
            checksum += product;
          }
        } else {
          checksum += parseInt(str[i], 10);
        }
        second = !second;
      }
      return checksum % 10 === 0;
    }
    function reverseMultiplyAndSum(digits, base) {
      var total = 0;
      for (var i = 0; i < digits.length; i++) {
        total += digits[i] * (base - i);
      }
      return total;
    }
    function verhoeffCheck(str) {
      var d_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
      var p_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
      var str_copy = str.split("").reverse().join("");
      var checksum = 0;
      for (var i = 0; i < str_copy.length; i++) {
        checksum = d_table[checksum][p_table[i % 8][parseInt(str_copy[i], 10)]];
      }
      return checksum === 0;
    }
  }
});

// node_modules/validator/lib/isTaxID.js
var require_isTaxID = __commonJS({
  "node_modules/validator/lib/isTaxID.js"(exports, module) {
    "use strict";
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isTaxID;
    var _assertString = _interopRequireDefault(require_assertString());
    var algorithms = _interopRequireWildcard(require_algorithms());
    var _isDate = _interopRequireDefault(require_isDate());
    function _getRequireWildcardCache(e) {
      if ("function" != typeof WeakMap) return null;
      var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(e2) {
        return e2 ? t : r;
      })(e);
    }
    function _interopRequireWildcard(e, r) {
      if (!r && e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = _getRequireWildcardCache(r);
      if (t && t.has(e)) return t.get(e);
      var n = {
        __proto__: null
      }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
      }
      return n.default = e, t && t.set(e, n), n;
    }
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function _toConsumableArray(r) {
      return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(r, a) {
      if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
      }
    }
    function _iterableToArray(r) {
      if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
    }
    function _arrayWithoutHoles(r) {
      if (Array.isArray(r)) return _arrayLikeToArray(r);
    }
    function _arrayLikeToArray(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    function bgBgCheck(tin) {
      var century_year = tin.slice(0, 2);
      var month = parseInt(tin.slice(2, 4), 10);
      if (month > 40) {
        month -= 40;
        century_year = "20".concat(century_year);
      } else if (month > 20) {
        month -= 20;
        century_year = "18".concat(century_year);
      } else {
        century_year = "19".concat(century_year);
      }
      if (month < 10) {
        month = "0".concat(month);
      }
      var date = "".concat(century_year, "/").concat(month, "/").concat(tin.slice(4, 6));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var multip_lookup = [2, 4, 8, 5, 10, 9, 7, 3, 6];
      var checksum = 0;
      for (var i = 0; i < multip_lookup.length; i++) {
        checksum += digits[i] * multip_lookup[i];
      }
      checksum = checksum % 11 === 10 ? 0 : checksum % 11;
      return checksum === digits[9];
    }
    function isCanadianSIN(input) {
      var digitsArray = input.split("");
      var even = digitsArray.filter(function(_, idx) {
        return idx % 2;
      }).map(function(i) {
        return Number(i) * 2;
      }).join("").split("");
      var total = digitsArray.filter(function(_, idx) {
        return !(idx % 2);
      }).concat(even).map(function(i) {
        return Number(i);
      }).reduce(function(acc, cur) {
        return acc + cur;
      });
      return total % 10 === 0;
    }
    function csCzCheck(tin) {
      tin = tin.replace(/\W/, "");
      var full_year = parseInt(tin.slice(0, 2), 10);
      if (tin.length === 10) {
        if (full_year < 54) {
          full_year = "20".concat(full_year);
        } else {
          full_year = "19".concat(full_year);
        }
      } else {
        if (tin.slice(6) === "000") {
          return false;
        }
        if (full_year < 54) {
          full_year = "19".concat(full_year);
        } else {
          return false;
        }
      }
      if (full_year.length === 3) {
        full_year = [full_year.slice(0, 2), "0", full_year.slice(2)].join("");
      }
      var month = parseInt(tin.slice(2, 4), 10);
      if (month > 50) {
        month -= 50;
      }
      if (month > 20) {
        if (parseInt(full_year, 10) < 2004) {
          return false;
        }
        month -= 20;
      }
      if (month < 10) {
        month = "0".concat(month);
      }
      var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      if (tin.length === 10) {
        if (parseInt(tin, 10) % 11 !== 0) {
          var checkdigit = parseInt(tin.slice(0, 9), 10) % 11;
          if (parseInt(full_year, 10) < 1986 && checkdigit === 10) {
            if (parseInt(tin.slice(9), 10) !== 0) {
              return false;
            }
          } else {
            return false;
          }
        }
      }
      return true;
    }
    function deAtCheck(tin) {
      return algorithms.luhnCheck(tin);
    }
    function deDeCheck(tin) {
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var occurrences = [];
      for (var i = 0; i < digits.length - 1; i++) {
        occurrences.push("");
        for (var j = 0; j < digits.length - 1; j++) {
          if (digits[i] === digits[j]) {
            occurrences[i] += j;
          }
        }
      }
      occurrences = occurrences.filter(function(a) {
        return a.length > 1;
      });
      if (occurrences.length !== 2 && occurrences.length !== 3) {
        return false;
      }
      if (occurrences[0].length === 3) {
        var trip_locations = occurrences[0].split("").map(function(a) {
          return parseInt(a, 10);
        });
        var recurrent = 0;
        for (var _i = 0; _i < trip_locations.length - 1; _i++) {
          if (trip_locations[_i] + 1 === trip_locations[_i + 1]) {
            recurrent += 1;
          }
        }
        if (recurrent === 2) {
          return false;
        }
      }
      return algorithms.iso7064Check(tin);
    }
    function dkDkCheck(tin) {
      tin = tin.replace(/\W/, "");
      var year = parseInt(tin.slice(4, 6), 10);
      var century_digit = tin.slice(6, 7);
      switch (century_digit) {
        case "0":
        case "1":
        case "2":
        case "3":
          year = "19".concat(year);
          break;
        case "4":
        case "9":
          if (year < 37) {
            year = "20".concat(year);
          } else {
            year = "19".concat(year);
          }
          break;
        default:
          if (year < 37) {
            year = "20".concat(year);
          } else if (year > 58) {
            year = "18".concat(year);
          } else {
            return false;
          }
          break;
      }
      if (year.length === 3) {
        year = [year.slice(0, 2), "0", year.slice(2)].join("");
      }
      var date = "".concat(year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var checksum = 0;
      var weight = 4;
      for (var i = 0; i < 9; i++) {
        checksum += digits[i] * weight;
        weight -= 1;
        if (weight === 1) {
          weight = 7;
        }
      }
      checksum %= 11;
      if (checksum === 1) {
        return false;
      }
      return checksum === 0 ? digits[9] === 0 : digits[9] === 11 - checksum;
    }
    function elCyCheck(tin) {
      var digits = tin.slice(0, 8).split("").map(function(a) {
        return parseInt(a, 10);
      });
      var checksum = 0;
      for (var i = 1; i < digits.length; i += 2) {
        checksum += digits[i];
      }
      for (var _i2 = 0; _i2 < digits.length; _i2 += 2) {
        if (digits[_i2] < 2) {
          checksum += 1 - digits[_i2];
        } else {
          checksum += 2 * (digits[_i2] - 2) + 5;
          if (digits[_i2] > 4) {
            checksum += 2;
          }
        }
      }
      return String.fromCharCode(checksum % 26 + 65) === tin.charAt(8);
    }
    function elGrCheck(tin) {
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var checksum = 0;
      for (var i = 0; i < 8; i++) {
        checksum += digits[i] * Math.pow(2, 8 - i);
      }
      return checksum % 11 % 10 === digits[8];
    }
    function enIeCheck(tin) {
      var checksum = algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a) {
        return parseInt(a, 10);
      }), 8);
      if (tin.length === 9 && tin[8] !== "W") {
        checksum += (tin[8].charCodeAt(0) - 64) * 9;
      }
      checksum %= 23;
      if (checksum === 0) {
        return tin[7].toUpperCase() === "W";
      }
      return tin[7].toUpperCase() === String.fromCharCode(64 + checksum);
    }
    var enUsCampusPrefix = {
      andover: ["10", "12"],
      atlanta: ["60", "67"],
      austin: ["50", "53"],
      brookhaven: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"],
      cincinnati: ["30", "32", "35", "36", "37", "38", "61"],
      fresno: ["15", "24"],
      internet: ["20", "26", "27", "45", "46", "47"],
      kansas: ["40", "44"],
      memphis: ["94", "95"],
      ogden: ["80", "90"],
      philadelphia: ["33", "39", "41", "42", "43", "46", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"],
      sba: ["31"]
    };
    function enUsGetPrefixes() {
      var prefixes = [];
      for (var location in enUsCampusPrefix) {
        if (enUsCampusPrefix.hasOwnProperty(location)) {
          prefixes.push.apply(prefixes, _toConsumableArray(enUsCampusPrefix[location]));
        }
      }
      return prefixes;
    }
    function enUsCheck(tin) {
      return enUsGetPrefixes().indexOf(tin.slice(0, 2)) !== -1;
    }
    function esArCheck(tin) {
      var accum = 0;
      var digits = tin.split("");
      var digit = parseInt(digits.pop(), 10);
      for (var i = 0; i < digits.length; i++) {
        accum += digits[9 - i] * (2 + i % 6);
      }
      var verif = 11 - accum % 11;
      if (verif === 11) {
        verif = 0;
      } else if (verif === 10) {
        verif = 9;
      }
      return digit === verif;
    }
    function esEsCheck(tin) {
      var chars = tin.toUpperCase().split("");
      if (isNaN(parseInt(chars[0], 10)) && chars.length > 1) {
        var lead_replace = 0;
        switch (chars[0]) {
          case "Y":
            lead_replace = 1;
            break;
          case "Z":
            lead_replace = 2;
            break;
          default:
        }
        chars.splice(0, 1, lead_replace);
      } else {
        while (chars.length < 9) {
          chars.unshift(0);
        }
      }
      var lookup = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
      chars = chars.join("");
      var checksum = parseInt(chars.slice(0, 8), 10) % 23;
      return chars[8] === lookup[checksum];
    }
    function etEeCheck(tin) {
      var full_year = tin.slice(1, 3);
      var century_digit = tin.slice(0, 1);
      switch (century_digit) {
        case "1":
        case "2":
          full_year = "18".concat(full_year);
          break;
        case "3":
        case "4":
          full_year = "19".concat(full_year);
          break;
        default:
          full_year = "20".concat(full_year);
          break;
      }
      var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var checksum = 0;
      var weight = 1;
      for (var i = 0; i < 10; i++) {
        checksum += digits[i] * weight;
        weight += 1;
        if (weight === 10) {
          weight = 1;
        }
      }
      if (checksum % 11 === 10) {
        checksum = 0;
        weight = 3;
        for (var _i3 = 0; _i3 < 10; _i3++) {
          checksum += digits[_i3] * weight;
          weight += 1;
          if (weight === 10) {
            weight = 1;
          }
        }
        if (checksum % 11 === 10) {
          return digits[10] === 0;
        }
      }
      return checksum % 11 === digits[10];
    }
    function fiFiCheck(tin) {
      var full_year = tin.slice(4, 6);
      var century_symbol = tin.slice(6, 7);
      switch (century_symbol) {
        case "+":
          full_year = "18".concat(full_year);
          break;
        case "-":
          full_year = "19".concat(full_year);
          break;
        default:
          full_year = "20".concat(full_year);
          break;
      }
      var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var checksum = parseInt(tin.slice(0, 6) + tin.slice(7, 10), 10) % 31;
      if (checksum < 10) {
        return checksum === parseInt(tin.slice(10), 10);
      }
      checksum -= 10;
      var letters_lookup = ["A", "B", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y"];
      return letters_lookup[checksum] === tin.slice(10);
    }
    function frBeCheck(tin) {
      if (tin.slice(2, 4) !== "00" || tin.slice(4, 6) !== "00") {
        var date = "".concat(tin.slice(0, 2), "/").concat(tin.slice(2, 4), "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YY/MM/DD")) {
          return false;
        }
      }
      var checksum = 97 - parseInt(tin.slice(0, 9), 10) % 97;
      var checkdigits = parseInt(tin.slice(9, 11), 10);
      if (checksum !== checkdigits) {
        checksum = 97 - parseInt("2".concat(tin.slice(0, 9)), 10) % 97;
        if (checksum !== checkdigits) {
          return false;
        }
      }
      return true;
    }
    function frFrCheck(tin) {
      tin = tin.replace(/\s/g, "");
      var checksum = parseInt(tin.slice(0, 10), 10) % 511;
      var checkdigits = parseInt(tin.slice(10, 13), 10);
      return checksum === checkdigits;
    }
    function frLuCheck(tin) {
      var date = "".concat(tin.slice(0, 4), "/").concat(tin.slice(4, 6), "/").concat(tin.slice(6, 8));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      if (!algorithms.luhnCheck(tin.slice(0, 12))) {
        return false;
      }
      return algorithms.verhoeffCheck("".concat(tin.slice(0, 11)).concat(tin[12]));
    }
    function hrHrCheck(tin) {
      return algorithms.iso7064Check(tin);
    }
    function huHuCheck(tin) {
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var checksum = 8;
      for (var i = 1; i < 9; i++) {
        checksum += digits[i] * (i + 1);
      }
      return checksum % 11 === digits[9];
    }
    function itItNameCheck(name) {
      var vowelflag = false;
      var xflag = false;
      for (var i = 0; i < 3; i++) {
        if (!vowelflag && /[AEIOU]/.test(name[i])) {
          vowelflag = true;
        } else if (!xflag && vowelflag && name[i] === "X") {
          xflag = true;
        } else if (i > 0) {
          if (vowelflag && !xflag) {
            if (!/[AEIOU]/.test(name[i])) {
              return false;
            }
          }
          if (xflag) {
            if (!/X/.test(name[i])) {
              return false;
            }
          }
        }
      }
      return true;
    }
    function itItCheck(tin) {
      var chars = tin.toUpperCase().split("");
      if (!itItNameCheck(chars.slice(0, 3))) {
        return false;
      }
      if (!itItNameCheck(chars.slice(3, 6))) {
        return false;
      }
      var number_locations = [6, 7, 9, 10, 12, 13, 14];
      var number_replace = {
        L: "0",
        M: "1",
        N: "2",
        P: "3",
        Q: "4",
        R: "5",
        S: "6",
        T: "7",
        U: "8",
        V: "9"
      };
      for (var _i4 = 0, _number_locations = number_locations; _i4 < _number_locations.length; _i4++) {
        var i = _number_locations[_i4];
        if (chars[i] in number_replace) {
          chars.splice(i, 1, number_replace[chars[i]]);
        }
      }
      var month_replace = {
        A: "01",
        B: "02",
        C: "03",
        D: "04",
        E: "05",
        H: "06",
        L: "07",
        M: "08",
        P: "09",
        R: "10",
        S: "11",
        T: "12"
      };
      var month = month_replace[chars[8]];
      var day = parseInt(chars[9] + chars[10], 10);
      if (day > 40) {
        day -= 40;
      }
      if (day < 10) {
        day = "0".concat(day);
      }
      var date = "".concat(chars[6]).concat(chars[7], "/").concat(month, "/").concat(day);
      if (!(0, _isDate.default)(date, "YY/MM/DD")) {
        return false;
      }
      var checksum = 0;
      for (var _i5 = 1; _i5 < chars.length - 1; _i5 += 2) {
        var char_to_int = parseInt(chars[_i5], 10);
        if (isNaN(char_to_int)) {
          char_to_int = chars[_i5].charCodeAt(0) - 65;
        }
        checksum += char_to_int;
      }
      var odd_convert = {
        // Maps of characters at odd places
        A: 1,
        B: 0,
        C: 5,
        D: 7,
        E: 9,
        F: 13,
        G: 15,
        H: 17,
        I: 19,
        J: 21,
        K: 2,
        L: 4,
        M: 18,
        N: 20,
        O: 11,
        P: 3,
        Q: 6,
        R: 8,
        S: 12,
        T: 14,
        U: 16,
        V: 10,
        W: 22,
        X: 25,
        Y: 24,
        Z: 23,
        0: 1,
        1: 0
      };
      for (var _i6 = 0; _i6 < chars.length - 1; _i6 += 2) {
        var _char_to_int = 0;
        if (chars[_i6] in odd_convert) {
          _char_to_int = odd_convert[chars[_i6]];
        } else {
          var multiplier = parseInt(chars[_i6], 10);
          _char_to_int = 2 * multiplier + 1;
          if (multiplier > 4) {
            _char_to_int += 2;
          }
        }
        checksum += _char_to_int;
      }
      if (String.fromCharCode(65 + checksum % 26) !== chars[15]) {
        return false;
      }
      return true;
    }
    function lvLvCheck(tin) {
      tin = tin.replace(/\W/, "");
      var day = tin.slice(0, 2);
      if (day !== "32") {
        var month = tin.slice(2, 4);
        if (month !== "00") {
          var full_year = tin.slice(4, 6);
          switch (tin[6]) {
            case "0":
              full_year = "18".concat(full_year);
              break;
            case "1":
              full_year = "19".concat(full_year);
              break;
            default:
              full_year = "20".concat(full_year);
              break;
          }
          var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(day);
          if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
            return false;
          }
        }
        var checksum = 1101;
        var multip_lookup = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        for (var i = 0; i < tin.length - 1; i++) {
          checksum -= parseInt(tin[i], 10) * multip_lookup[i];
        }
        return parseInt(tin[10], 10) === checksum % 11;
      }
      return true;
    }
    function mtMtCheck(tin) {
      if (tin.length !== 9) {
        var chars = tin.toUpperCase().split("");
        while (chars.length < 8) {
          chars.unshift(0);
        }
        switch (tin[7]) {
          case "A":
          case "P":
            if (parseInt(chars[6], 10) === 0) {
              return false;
            }
            break;
          default: {
            var first_part = parseInt(chars.join("").slice(0, 5), 10);
            if (first_part > 32e3) {
              return false;
            }
            var second_part = parseInt(chars.join("").slice(5, 7), 10);
            if (first_part === second_part) {
              return false;
            }
          }
        }
      }
      return true;
    }
    function nlNlCheck(tin) {
      return algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
        return parseInt(a, 10);
      }), 9) % 11 === parseInt(tin[8], 10);
    }
    function plPlCheck(tin) {
      if (tin.length === 10) {
        var lookup = [6, 5, 7, 2, 3, 4, 5, 6, 7];
        var _checksum = 0;
        for (var i = 0; i < lookup.length; i++) {
          _checksum += parseInt(tin[i], 10) * lookup[i];
        }
        _checksum %= 11;
        if (_checksum === 10) {
          return false;
        }
        return _checksum === parseInt(tin[9], 10);
      }
      var full_year = tin.slice(0, 2);
      var month = parseInt(tin.slice(2, 4), 10);
      if (month > 80) {
        full_year = "18".concat(full_year);
        month -= 80;
      } else if (month > 60) {
        full_year = "22".concat(full_year);
        month -= 60;
      } else if (month > 40) {
        full_year = "21".concat(full_year);
        month -= 40;
      } else if (month > 20) {
        full_year = "20".concat(full_year);
        month -= 20;
      } else {
        full_year = "19".concat(full_year);
      }
      if (month < 10) {
        month = "0".concat(month);
      }
      var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var checksum = 0;
      var multiplier = 1;
      for (var _i7 = 0; _i7 < tin.length - 1; _i7++) {
        checksum += parseInt(tin[_i7], 10) * multiplier % 10;
        multiplier += 2;
        if (multiplier > 10) {
          multiplier = 1;
        } else if (multiplier === 5) {
          multiplier += 2;
        }
      }
      checksum = 10 - checksum % 10;
      return checksum === parseInt(tin[10], 10);
    }
    function ptBrCheck(tin) {
      if (tin.length === 11) {
        var _sum;
        var remainder;
        _sum = 0;
        if (
          // Reject known invalid CPFs
          tin === "11111111111" || tin === "22222222222" || tin === "33333333333" || tin === "44444444444" || tin === "55555555555" || tin === "66666666666" || tin === "77777777777" || tin === "88888888888" || tin === "99999999999" || tin === "00000000000"
        ) return false;
        for (var i = 1; i <= 9; i++) _sum += parseInt(tin.substring(i - 1, i), 10) * (11 - i);
        remainder = _sum * 10 % 11;
        if (remainder === 10) remainder = 0;
        if (remainder !== parseInt(tin.substring(9, 10), 10)) return false;
        _sum = 0;
        for (var _i8 = 1; _i8 <= 10; _i8++) _sum += parseInt(tin.substring(_i8 - 1, _i8), 10) * (12 - _i8);
        remainder = _sum * 10 % 11;
        if (remainder === 10) remainder = 0;
        if (remainder !== parseInt(tin.substring(10, 11), 10)) return false;
        return true;
      }
      if (
        // Reject know invalid CNPJs
        tin === "00000000000000" || tin === "11111111111111" || tin === "22222222222222" || tin === "33333333333333" || tin === "44444444444444" || tin === "55555555555555" || tin === "66666666666666" || tin === "77777777777777" || tin === "88888888888888" || tin === "99999999999999"
      ) {
        return false;
      }
      var length = tin.length - 2;
      var identifiers = tin.substring(0, length);
      var verificators = tin.substring(length);
      var sum = 0;
      var pos = length - 7;
      for (var _i9 = length; _i9 >= 1; _i9--) {
        sum += identifiers.charAt(length - _i9) * pos;
        pos -= 1;
        if (pos < 2) {
          pos = 9;
        }
      }
      var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result !== parseInt(verificators.charAt(0), 10)) {
        return false;
      }
      length += 1;
      identifiers = tin.substring(0, length);
      sum = 0;
      pos = length - 7;
      for (var _i10 = length; _i10 >= 1; _i10--) {
        sum += identifiers.charAt(length - _i10) * pos;
        pos -= 1;
        if (pos < 2) {
          pos = 9;
        }
      }
      result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result !== parseInt(verificators.charAt(1), 10)) {
        return false;
      }
      return true;
    }
    function ptPtCheck(tin) {
      var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
        return parseInt(a, 10);
      }), 9) % 11;
      if (checksum > 9) {
        return parseInt(tin[8], 10) === 0;
      }
      return checksum === parseInt(tin[8], 10);
    }
    function roRoCheck(tin) {
      if (tin.slice(0, 4) !== "9000") {
        var full_year = tin.slice(1, 3);
        switch (tin[0]) {
          case "1":
          case "2":
            full_year = "19".concat(full_year);
            break;
          case "3":
          case "4":
            full_year = "18".concat(full_year);
            break;
          case "5":
          case "6":
            full_year = "20".concat(full_year);
            break;
          default:
        }
        var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
        if (date.length === 8) {
          if (!(0, _isDate.default)(date, "YY/MM/DD")) {
            return false;
          }
        } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        var digits = tin.split("").map(function(a) {
          return parseInt(a, 10);
        });
        var multipliers = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
        var checksum = 0;
        for (var i = 0; i < multipliers.length; i++) {
          checksum += digits[i] * multipliers[i];
        }
        if (checksum % 11 === 10) {
          return digits[12] === 1;
        }
        return digits[12] === checksum % 11;
      }
      return true;
    }
    function skSkCheck(tin) {
      if (tin.length === 9) {
        tin = tin.replace(/\W/, "");
        if (tin.slice(6) === "000") {
          return false;
        }
        var full_year = parseInt(tin.slice(0, 2), 10);
        if (full_year > 53) {
          return false;
        }
        if (full_year < 10) {
          full_year = "190".concat(full_year);
        } else {
          full_year = "19".concat(full_year);
        }
        var month = parseInt(tin.slice(2, 4), 10);
        if (month > 50) {
          month -= 50;
        }
        if (month < 10) {
          month = "0".concat(month);
        }
        var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
      }
      return true;
    }
    function slSiCheck(tin) {
      var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a) {
        return parseInt(a, 10);
      }), 8) % 11;
      if (checksum === 10) {
        return parseInt(tin[7], 10) === 0;
      }
      return checksum === parseInt(tin[7], 10);
    }
    function svSeCheck(tin) {
      var tin_copy = tin.slice(0);
      if (tin.length > 11) {
        tin_copy = tin_copy.slice(2);
      }
      var full_year = "";
      var month = tin_copy.slice(2, 4);
      var day = parseInt(tin_copy.slice(4, 6), 10);
      if (tin.length > 11) {
        full_year = tin.slice(0, 4);
      } else {
        full_year = tin.slice(0, 2);
        if (tin.length === 11 && day < 60) {
          var current_year = (/* @__PURE__ */ new Date()).getFullYear().toString();
          var current_century = parseInt(current_year.slice(0, 2), 10);
          current_year = parseInt(current_year, 10);
          if (tin[6] === "-") {
            if (parseInt("".concat(current_century).concat(full_year), 10) > current_year) {
              full_year = "".concat(current_century - 1).concat(full_year);
            } else {
              full_year = "".concat(current_century).concat(full_year);
            }
          } else {
            full_year = "".concat(current_century - 1).concat(full_year);
            if (current_year - parseInt(full_year, 10) < 100) {
              return false;
            }
          }
        }
      }
      if (day > 60) {
        day -= 60;
      }
      if (day < 10) {
        day = "0".concat(day);
      }
      var date = "".concat(full_year, "/").concat(month, "/").concat(day);
      if (date.length === 8) {
        if (!(0, _isDate.default)(date, "YY/MM/DD")) {
          return false;
        }
      } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      return algorithms.luhnCheck(tin.replace(/\W/, ""));
    }
    function ukUaCheck(tin) {
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var multipliers = [-1, 5, 7, 9, 4, 6, 10, 5, 7];
      var checksum = 0;
      for (var i = 0; i < multipliers.length; i++) {
        checksum += digits[i] * multipliers[i];
      }
      return checksum % 11 === 10 ? digits[9] === 0 : digits[9] === checksum % 11;
    }
    var taxIdFormat = {
      "bg-BG": /^\d{10}$/,
      "cs-CZ": /^\d{6}\/{0,1}\d{3,4}$/,
      "de-AT": /^\d{9}$/,
      "de-DE": /^[1-9]\d{10}$/,
      "dk-DK": /^\d{6}-{0,1}\d{4}$/,
      "el-CY": /^[09]\d{7}[A-Z]$/,
      "el-GR": /^([0-4]|[7-9])\d{8}$/,
      "en-CA": /^\d{9}$/,
      "en-GB": /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
      "en-IE": /^\d{7}[A-W][A-IW]{0,1}$/i,
      "en-US": /^\d{2}[- ]{0,1}\d{7}$/,
      "es-AR": /(20|23|24|27|30|33|34)[0-9]{8}[0-9]/,
      "es-ES": /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
      "et-EE": /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
      "fi-FI": /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
      "fr-BE": /^\d{11}$/,
      "fr-FR": /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
      // Conforms both to official spec and provided example
      "fr-LU": /^\d{13}$/,
      "hr-HR": /^\d{11}$/,
      "hu-HU": /^8\d{9}$/,
      "it-IT": /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
      "lv-LV": /^\d{6}-{0,1}\d{5}$/,
      // Conforms both to DG TAXUD spec and original research
      "mt-MT": /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
      "nl-NL": /^\d{9}$/,
      "pl-PL": /^\d{10,11}$/,
      "pt-BR": /(?:^\d{11}$)|(?:^\d{14}$)/,
      "pt-PT": /^\d{9}$/,
      "ro-RO": /^\d{13}$/,
      "sk-SK": /^\d{6}\/{0,1}\d{3,4}$/,
      "sl-SI": /^[1-9]\d{7}$/,
      "sv-SE": /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/,
      "uk-UA": /^\d{10}$/
    };
    taxIdFormat["lb-LU"] = taxIdFormat["fr-LU"];
    taxIdFormat["lt-LT"] = taxIdFormat["et-EE"];
    taxIdFormat["nl-BE"] = taxIdFormat["fr-BE"];
    taxIdFormat["fr-CA"] = taxIdFormat["en-CA"];
    var taxIdCheck = {
      "bg-BG": bgBgCheck,
      "cs-CZ": csCzCheck,
      "de-AT": deAtCheck,
      "de-DE": deDeCheck,
      "dk-DK": dkDkCheck,
      "el-CY": elCyCheck,
      "el-GR": elGrCheck,
      "en-CA": isCanadianSIN,
      "en-IE": enIeCheck,
      "en-US": enUsCheck,
      "es-AR": esArCheck,
      "es-ES": esEsCheck,
      "et-EE": etEeCheck,
      "fi-FI": fiFiCheck,
      "fr-BE": frBeCheck,
      "fr-FR": frFrCheck,
      "fr-LU": frLuCheck,
      "hr-HR": hrHrCheck,
      "hu-HU": huHuCheck,
      "it-IT": itItCheck,
      "lv-LV": lvLvCheck,
      "mt-MT": mtMtCheck,
      "nl-NL": nlNlCheck,
      "pl-PL": plPlCheck,
      "pt-BR": ptBrCheck,
      "pt-PT": ptPtCheck,
      "ro-RO": roRoCheck,
      "sk-SK": skSkCheck,
      "sl-SI": slSiCheck,
      "sv-SE": svSeCheck,
      "uk-UA": ukUaCheck
    };
    taxIdCheck["lb-LU"] = taxIdCheck["fr-LU"];
    taxIdCheck["lt-LT"] = taxIdCheck["et-EE"];
    taxIdCheck["nl-BE"] = taxIdCheck["fr-BE"];
    taxIdCheck["fr-CA"] = taxIdCheck["en-CA"];
    var allsymbols = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g;
    var sanitizeRegexes = {
      "de-AT": allsymbols,
      "de-DE": /[\/\\]/g,
      "fr-BE": allsymbols
    };
    sanitizeRegexes["nl-BE"] = sanitizeRegexes["fr-BE"];
    function isTaxID(str) {
      var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
      (0, _assertString.default)(str);
      var strcopy = str.slice(0);
      if (locale in taxIdFormat) {
        if (locale in sanitizeRegexes) {
          strcopy = strcopy.replace(sanitizeRegexes[locale], "");
        }
        if (!taxIdFormat[locale].test(strcopy)) {
          return false;
        }
        if (locale in taxIdCheck) {
          return taxIdCheck[locale](strcopy);
        }
        return true;
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isMobilePhone.js
var require_isMobilePhone = __commonJS({
  "node_modules/validator/lib/isMobilePhone.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMobilePhone;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var phones = {
      "am-AM": /^(\+?374|0)(33|4[134]|55|77|88|9[13-689])\d{6}$/,
      "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
      "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
      "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
      "ar-LB": /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
      "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
      "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
      "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
      "ar-KW": /^(\+?965)([569]\d{7}|41\d{6})$/,
      "ar-LY": /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
      "ar-MA": /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
      "ar-OM": /^((\+|00)968)?(9[1-9])\d{6}$/,
      "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
      "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
      "ar-SD": /^((\+?249)|0)?(9[012369]|1[012])\d{7}$/,
      "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
      "ar-TN": /^(\+?216)?[2459]\d{7}$/,
      "az-AZ": /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
      "bs-BA": /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
      "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
      "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
      "bn-BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
      "ca-AD": /^(\+376)?[346]\d{5}$/,
      "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
      "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
      "de-DE": /^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
      "de-AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
      "de-CH": /^(\+41|0)([1-9])\d{1,9}$/,
      "de-LU": /^(\+352)?((6\d1)\d{6})$/,
      "dv-MV": /^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,
      "el-GR": /^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,
      "el-CY": /^(\+?357?)?(9(9|6)\d{6})$/,
      "en-AI": /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
      "en-AU": /^(\+?61|0)4\d{8}$/,
      "en-AG": /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
      "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
      "en-BS": /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
      "en-GB": /^(\+?44|0)7[1-9]\d{8}$/,
      "en-GG": /^(\+?44|0)1481\d{6}$/,
      "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|53|28|55|59)\d{7}$/,
      "en-GY": /^(\+592|0)6\d{6}$/,
      "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
      "en-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
      "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
      "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
      "en-JM": /^(\+?876)?\d{7}$/,
      "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
      "fr-CF": /^(\+?236| ?)(70|75|77|72|21|22)\d{6}$/,
      "en-SS": /^(\+?211|0)(9[1257])\d{7}$/,
      "en-KI": /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
      "en-KN": /^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
      "en-LS": /^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,
      "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
      "en-MU": /^(\+?230|0)?\d{8}$/,
      "en-MW": /^(\+?265|0)(((77|88|31|99|98|21)\d{7})|(((111)|1)\d{6})|(32000\d{4}))$/,
      "en-NA": /^(\+?264|0)(6|8)\d{7}$/,
      "en-NG": /^(\+?234|0)?[789]\d{9}$/,
      "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
      "en-PG": /^(\+?675|0)?(7\d|8[18])\d{6}$/,
      "en-PK": /^((00|\+)?92|0)3[0-6]\d{8}$/,
      "en-PH": /^(09|\+639)\d{9}$/,
      "en-RW": /^(\+?250|0)?[7]\d{8}$/,
      "en-SG": /^(\+65)?[3689]\d{7}$/,
      "en-SL": /^(\+?232|0)\d{8}$/,
      "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
      "en-UG": /^(\+?256|0)?[7]\d{8}$/,
      "en-US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
      "en-ZA": /^(\+?27|0)\d{9}$/,
      "en-ZM": /^(\+?26)?0[79][567]\d{7}$/,
      "en-ZW": /^(\+263)[0-9]{9}$/,
      "en-BW": /^(\+?267)?(7[1-8]{1})\d{6}$/,
      "es-AR": /^\+?549(11|[2368]\d)\d{8}$/,
      "es-BO": /^(\+?591)?(6|7)\d{7}$/,
      "es-CO": /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
      "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
      "es-CR": /^(\+506)?[2-8]\d{7}$/,
      "es-CU": /^(\+53|0053)?5\d{7}$/,
      "es-DO": /^(\+?1)?8[024]9\d{7}$/,
      "es-HN": /^(\+?504)?[9|8|3|2]\d{7}$/,
      "es-EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
      "es-ES": /^(\+?34)?[6|7]\d{8}$/,
      "es-GT": /^(\+?502)?[2|6|7]\d{7}$/,
      "es-PE": /^(\+?51)?9\d{8}$/,
      "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
      "es-NI": /^(\+?505)\d{7,8}$/,
      "es-PA": /^(\+?507)\d{7,8}$/,
      "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
      "es-SV": /^(\+?503)?[67]\d{7}$/,
      "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
      "es-VE": /^(\+?58)?(2|4)\d{9}$/,
      "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
      "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
      "fi-FI": /^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,
      "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
      "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
      "fr-BF": /^(\+226|0)[67]\d{7}$/,
      "fr-BJ": /^(\+229)\d{8}$/,
      "fr-CD": /^(\+?243|0)?(8|9)\d{8}$/,
      "fr-CM": /^(\+?237)6[0-9]{8}$/,
      "fr-FR": /^(\+?33|0)[67]\d{8}$/,
      "fr-GF": /^(\+?594|0|00594)[67]\d{8}$/,
      "fr-GP": /^(\+?590|0|00590)[67]\d{8}$/,
      "fr-MQ": /^(\+?596|0|00596)[67]\d{8}$/,
      "fr-PF": /^(\+?689)?8[789]\d{6}$/,
      "fr-RE": /^(\+?262|0|00262)[67]\d{8}$/,
      "fr-WF": /^(\+681)?\d{6}$/,
      "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
      "hu-HU": /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
      "id-ID": /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
      "ir-IR": /^(\+98|0)?9\d{9}$/,
      "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
      "it-SM": /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
      "ja-JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
      "ka-GE": /^(\+?995)?(79\d{7}|5\d{8})$/,
      "kk-KZ": /^(\+?7|8)?7\d{9}$/,
      "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
      "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
      "ky-KG": /^(\+996\s?)?(22[0-9]|50[0-9]|55[0-9]|70[0-9]|75[0-9]|77[0-9]|880|990|995|996|997|998)\s?\d{3}\s?\d{3}$/,
      "lt-LT": /^(\+370|8)\d{8}$/,
      "lv-LV": /^(\+?371)2\d{7}$/,
      "mg-MG": /^((\+?261|0)(2|3)\d)?\d{7}$/,
      "mn-MN": /^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,
      "my-MM": /^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,
      "ms-MY": /^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,
      "mz-MZ": /^(\+?258)?8[234567]\d{7}$/,
      "nb-NO": /^(\+?47)?[49]\d{7}$/,
      "ne-NP": /^(\+?977)?9[78]\d{8}$/,
      "nl-BE": /^(\+?32|0)4\d{8}$/,
      "nl-NL": /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
      "nl-AW": /^(\+)?297(56|59|64|73|74|99)\d{5}$/,
      "nn-NO": /^(\+?47)?[49]\d{7}$/,
      "pl-PL": /^(\+?48)? ?([5-8]\d|45) ?\d{3} ?\d{2} ?\d{2}$/,
      "pt-BR": /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,
      "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
      "pt-AO": /^(\+244)\d{9}$/,
      "ro-MD": /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
      "ro-RO": /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
      "ru-RU": /^(\+?7|8)?9\d{9}$/,
      "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
      "sl-SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
      "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
      "so-SO": /^(\+?252|0)((6[0-9])\d{7}|(7[1-9])\d{7})$/,
      "sq-AL": /^(\+355|0)6[2-9]\d{7}$/,
      "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
      "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
      "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
      "th-TH": /^(\+66|66|0)\d{9}$/,
      "tr-TR": /^(\+?90|0)?5\d{9}$/,
      "tk-TM": /^(\+993|993|8)\d{8}$/,
      "uk-UA": /^(\+?38)?0(50|6[36-8]|7[357]|9[1-9])\d{7}$/,
      "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
      "vi-VN": /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
      "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
      "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
      "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/,
      "ar-YE": /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
      "ar-EH": /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
      "fa-AF": /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/,
      "mk-MK": /^(\+?389|0)?((?:2[2-9]\d{6}|(?:3[1-4]|4[2-8])\d{6}|500\d{5}|5[2-9]\d{6}|7[0-9][2-9]\d{5}|8[1-9]\d{6}|800\d{5}|8009\d{4}))$/
    };
    phones["en-CA"] = phones["en-US"];
    phones["fr-CA"] = phones["en-CA"];
    phones["fr-BE"] = phones["nl-BE"];
    phones["zh-HK"] = phones["en-HK"];
    phones["zh-MO"] = phones["en-MO"];
    phones["ga-IE"] = phones["en-IE"];
    phones["fr-CH"] = phones["de-CH"];
    phones["it-CH"] = phones["fr-CH"];
    function isMobilePhone(str, locale, options) {
      (0, _assertString.default)(str);
      if (options && options.strictMode && !str.startsWith("+")) {
        return false;
      }
      if (Array.isArray(locale)) {
        return locale.some(function(key2) {
          if (phones.hasOwnProperty(key2)) {
            var phone2 = phones[key2];
            if (phone2.test(str)) {
              return true;
            }
          }
          return false;
        });
      } else if (locale in phones) {
        return phones[locale].test(str);
      } else if (!locale || locale === "any") {
        for (var key in phones) {
          if (phones.hasOwnProperty(key)) {
            var phone = phones[key];
            if (phone.test(str)) {
              return true;
            }
          }
        }
        return false;
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    var locales = exports.locales = Object.keys(phones);
  }
});

// node_modules/validator/lib/isEthereumAddress.js
var require_isEthereumAddress = __commonJS({
  "node_modules/validator/lib/isEthereumAddress.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isEthereumAddress;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var eth = /^(0x)[0-9a-f]{40}$/i;
    function isEthereumAddress(str) {
      (0, _assertString.default)(str);
      return eth.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isCurrency.js
var require_isCurrency = __commonJS({
  "node_modules/validator/lib/isCurrency.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isCurrency;
    var _merge = _interopRequireDefault(require_merge());
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function currencyRegex(options) {
      var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
      options.digits_after_decimal.forEach(function(digit, index) {
        if (index !== 0) decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
      });
      var symbol = "(".concat(options.symbol.replace(/\W/, function(m) {
        return "\\".concat(m);
      }), ")").concat(options.require_symbol ? "" : "?"), negative = "-?", whole_dollar_amount_without_sep = "[1-9]\\d*", whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"), valid_whole_dollar_amounts = ["0", whole_dollar_amount_without_sep, whole_dollar_amount_with_sep], whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join("|"), ")?"), decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? "" : "?");
      var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : "");
      if (options.allow_negatives && !options.parens_for_negatives) {
        if (options.negative_sign_after_digits) {
          pattern += negative;
        } else if (options.negative_sign_before_digits) {
          pattern = negative + pattern;
        }
      }
      if (options.allow_negative_sign_placeholder) {
        pattern = "( (?!\\-))?".concat(pattern);
      } else if (options.allow_space_after_symbol) {
        pattern = " ?".concat(pattern);
      } else if (options.allow_space_after_digits) {
        pattern += "( (?!$))?";
      }
      if (options.symbol_after_digits) {
        pattern += symbol;
      } else {
        pattern = symbol + pattern;
      }
      if (options.allow_negatives) {
        if (options.parens_for_negatives) {
          pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
        } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
          pattern = negative + pattern;
        }
      }
      return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
    }
    var default_currency_options = {
      symbol: "$",
      require_symbol: false,
      allow_space_after_symbol: false,
      symbol_after_digits: false,
      allow_negatives: true,
      parens_for_negatives: false,
      negative_sign_before_digits: false,
      negative_sign_after_digits: false,
      allow_negative_sign_placeholder: false,
      thousands_separator: ",",
      decimal_separator: ".",
      allow_decimal: true,
      require_decimal: false,
      digits_after_decimal: [2],
      allow_space_after_digits: false
    };
    function isCurrency(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, default_currency_options);
      return currencyRegex(options).test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isBtcAddress.js
var require_isBtcAddress = __commonJS({
  "node_modules/validator/lib/isBtcAddress.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBtcAddress;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var bech32 = /^(bc1|tb1|bc1p|tb1p)[ac-hj-np-z02-9]{39,58}$/;
    var base58 = /^(1|2|3|m)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
    function isBtcAddress(str) {
      (0, _assertString.default)(str);
      return bech32.test(str) || base58.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISO6346.js
var require_isISO6346 = __commonJS({
  "node_modules/validator/lib/isISO6346.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isFreightContainerID = void 0;
    exports.isISO6346 = isISO6346;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var isISO6346Str = /^[A-Z]{3}(U[0-9]{7})|([J,Z][0-9]{6,7})$/;
    var isDigit = /^[0-9]$/;
    function isISO6346(str) {
      (0, _assertString.default)(str);
      str = str.toUpperCase();
      if (!isISO6346Str.test(str)) return false;
      if (str.length === 11) {
        var sum = 0;
        for (var i = 0; i < str.length - 1; i++) {
          if (!isDigit.test(str[i])) {
            var convertedCode = void 0;
            var letterCode = str.charCodeAt(i) - 55;
            if (letterCode < 11) convertedCode = letterCode;
            else if (letterCode >= 11 && letterCode <= 20) convertedCode = 12 + letterCode % 11;
            else if (letterCode >= 21 && letterCode <= 30) convertedCode = 23 + letterCode % 21;
            else convertedCode = 34 + letterCode % 31;
            sum += convertedCode * Math.pow(2, i);
          } else sum += str[i] * Math.pow(2, i);
        }
        var checkSumDigit = sum % 11;
        if (checkSumDigit === 10) checkSumDigit = 0;
        return Number(str[str.length - 1]) === checkSumDigit;
      }
      return true;
    }
    var isFreightContainerID = exports.isFreightContainerID = isISO6346;
  }
});

// node_modules/validator/lib/isISO6391.js
var require_isISO6391 = __commonJS({
  "node_modules/validator/lib/isISO6391.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISO6391;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var isISO6391Set = /* @__PURE__ */ new Set(["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is", "it", "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"]);
    function isISO6391(str) {
      (0, _assertString.default)(str);
      return isISO6391Set.has(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISO8601.js
var require_isISO8601 = __commonJS({
  "node_modules/validator/lib/isISO8601.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISO8601;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    var iso8601StrictSeparator = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    var isValidDate = function isValidDate2(str) {
      var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
      if (ordinalMatch) {
        var oYear = Number(ordinalMatch[1]);
        var oDay = Number(ordinalMatch[2]);
        if (oYear % 4 === 0 && oYear % 100 !== 0 || oYear % 400 === 0) return oDay <= 366;
        return oDay <= 365;
      }
      var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
      var year = match[1];
      var month = match[2];
      var day = match[3];
      var monthString = month ? "0".concat(month).slice(-2) : month;
      var dayString = day ? "0".concat(day).slice(-2) : day;
      var d = new Date("".concat(year, "-").concat(monthString || "01", "-").concat(dayString || "01"));
      if (month && day) {
        return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
      }
      return true;
    };
    function isISO8601(str) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, _assertString.default)(str);
      var check = options.strictSeparator ? iso8601StrictSeparator.test(str) : iso8601.test(str);
      if (check && options.strict) return isValidDate(str);
      return check;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isRFC3339.js
var require_isRFC3339 = __commonJS({
  "node_modules/validator/lib/isRFC3339.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isRFC3339;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var dateFullYear = /[0-9]{4}/;
    var dateMonth = /(0[1-9]|1[0-2])/;
    var dateMDay = /([12]\d|0[1-9]|3[01])/;
    var timeHour = /([01][0-9]|2[0-3])/;
    var timeMinute = /[0-5][0-9]/;
    var timeSecond = /([0-5][0-9]|60)/;
    var timeSecFrac = /(\.[0-9]+)?/;
    var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
    var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
    var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
    var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
    var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
    var rfc3339 = new RegExp("^".concat(fullDate.source, "[ tT]").concat(fullTime.source, "$"));
    function isRFC3339(str) {
      (0, _assertString.default)(str);
      return rfc3339.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISO15924.js
var require_isISO15924 = __commonJS({
  "node_modules/validator/lib/isISO15924.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ScriptCodes = void 0;
    exports.default = isISO15924;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var validISO15924Codes = /* @__PURE__ */ new Set(["Adlm", "Afak", "Aghb", "Ahom", "Arab", "Aran", "Armi", "Armn", "Avst", "Bali", "Bamu", "Bass", "Batk", "Beng", "Bhks", "Blis", "Bopo", "Brah", "Brai", "Bugi", "Buhd", "Cakm", "Cans", "Cari", "Cham", "Cher", "Chis", "Chrs", "Cirt", "Copt", "Cpmn", "Cprt", "Cyrl", "Cyrs", "Deva", "Diak", "Dogr", "Dsrt", "Dupl", "Egyd", "Egyh", "Egyp", "Elba", "Elym", "Ethi", "Gara", "Geok", "Geor", "Glag", "Gong", "Gonm", "Goth", "Gran", "Grek", "Gujr", "Gukh", "Guru", "Hanb", "Hang", "Hani", "Hano", "Hans", "Hant", "Hatr", "Hebr", "Hira", "Hluw", "Hmng", "Hmnp", "Hrkt", "Hung", "Inds", "Ital", "Jamo", "Java", "Jpan", "Jurc", "Kali", "Kana", "Kawi", "Khar", "Khmr", "Khoj", "Kitl", "Kits", "Knda", "Kore", "Kpel", "Krai", "Kthi", "Lana", "Laoo", "Latf", "Latg", "Latn", "Leke", "Lepc", "Limb", "Lina", "Linb", "Lisu", "Loma", "Lyci", "Lydi", "Mahj", "Maka", "Mand", "Mani", "Marc", "Maya", "Medf", "Mend", "Merc", "Mero", "Mlym", "Modi", "Mong", "Moon", "Mroo", "Mtei", "Mult", "Mymr", "Nagm", "Nand", "Narb", "Nbat", "Newa", "Nkdb", "Nkgb", "Nkoo", "Nshu", "Ogam", "Olck", "Onao", "Orkh", "Orya", "Osge", "Osma", "Ougr", "Palm", "Pauc", "Pcun", "Pelm", "Perm", "Phag", "Phli", "Phlp", "Phlv", "Phnx", "Plrd", "Piqd", "Prti", "Psin", "Qaaa", "Qaab", "Qaac", "Qaad", "Qaae", "Qaaf", "Qaag", "Qaah", "Qaai", "Qaaj", "Qaak", "Qaal", "Qaam", "Qaan", "Qaao", "Qaap", "Qaaq", "Qaar", "Qaas", "Qaat", "Qaau", "Qaav", "Qaaw", "Qaax", "Qaay", "Qaaz", "Qaba", "Qabb", "Qabc", "Qabd", "Qabe", "Qabf", "Qabg", "Qabh", "Qabi", "Qabj", "Qabk", "Qabl", "Qabm", "Qabn", "Qabo", "Qabp", "Qabq", "Qabr", "Qabs", "Qabt", "Qabu", "Qabv", "Qabw", "Qabx", "Ranj", "Rjng", "Rohg", "Roro", "Runr", "Samr", "Sara", "Sarb", "Saur", "Sgnw", "Shaw", "Shrd", "Shui", "Sidd", "Sidt", "Sind", "Sinh", "Sogd", "Sogo", "Sora", "Soyo", "Sund", "Sunu", "Sylo", "Syrc", "Syre", "Syrj", "Syrn", "Tagb", "Takr", "Tale", "Talu", "Taml", "Tang", "Tavt", "Tayo", "Telu", "Teng", "Tfng", "Tglg", "Thaa", "Thai", "Tibt", "Tirh", "Tnsa", "Todr", "Tols", "Toto", "Tutg", "Ugar", "Vaii", "Visp", "Vith", "Wara", "Wcho", "Wole", "Xpeo", "Xsux", "Yezi", "Yiii", "Zanb", "Zinh", "Zmth", "Zsye", "Zsym", "Zxxx", "Zyyy", "Zzzz"]);
    function isISO15924(str) {
      (0, _assertString.default)(str);
      return validISO15924Codes.has(str);
    }
    var ScriptCodes = exports.ScriptCodes = validISO15924Codes;
  }
});

// node_modules/validator/lib/isISO31661Alpha3.js
var require_isISO31661Alpha3 = __commonJS({
  "node_modules/validator/lib/isISO31661Alpha3.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISO31661Alpha3;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var validISO31661Alpha3CountriesCodes = /* @__PURE__ */ new Set(["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COG", "COD", "COK", "CRI", "CIV", "HRV", "CUB", "CUW", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE"]);
    function isISO31661Alpha3(str) {
      (0, _assertString.default)(str);
      return validISO31661Alpha3CountriesCodes.has(str.toUpperCase());
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISO31661Numeric.js
var require_isISO31661Numeric = __commonJS({
  "node_modules/validator/lib/isISO31661Numeric.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISO31661Numeric;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var validISO31661NumericCountriesCodes = /* @__PURE__ */ new Set(["004", "008", "010", "012", "016", "020", "024", "028", "031", "032", "036", "040", "044", "048", "050", "051", "052", "056", "060", "064", "068", "070", "072", "074", "076", "084", "086", "090", "092", "096", "100", "104", "108", "112", "116", "120", "124", "132", "136", "140", "144", "148", "152", "156", "158", "162", "166", "170", "174", "175", "178", "180", "184", "188", "191", "192", "196", "203", "204", "208", "212", "214", "218", "222", "226", "231", "232", "233", "234", "238", "239", "242", "246", "248", "250", "254", "258", "260", "262", "266", "268", "270", "275", "276", "288", "292", "296", "300", "304", "308", "312", "316", "320", "324", "328", "332", "334", "336", "340", "344", "348", "352", "356", "360", "364", "368", "372", "376", "380", "384", "388", "392", "398", "400", "404", "408", "410", "414", "417", "418", "422", "426", "428", "430", "434", "438", "440", "442", "446", "450", "454", "458", "462", "466", "470", "474", "478", "480", "484", "492", "496", "498", "499", "500", "504", "508", "512", "516", "520", "524", "528", "531", "533", "534", "535", "540", "548", "554", "558", "562", "566", "570", "574", "578", "580", "581", "583", "584", "585", "586", "591", "598", "600", "604", "608", "612", "616", "620", "624", "626", "630", "634", "638", "642", "643", "646", "652", "654", "659", "660", "662", "663", "666", "670", "674", "678", "682", "686", "688", "690", "694", "702", "703", "704", "705", "706", "710", "716", "724", "728", "729", "732", "740", "744", "748", "752", "756", "760", "762", "764", "768", "772", "776", "780", "784", "788", "792", "795", "796", "798", "800", "804", "807", "818", "826", "831", "832", "833", "834", "840", "850", "854", "858", "860", "862", "876", "882", "887", "894"]);
    function isISO31661Numeric(str) {
      (0, _assertString.default)(str);
      return validISO31661NumericCountriesCodes.has(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISO4217.js
var require_isISO4217 = __commonJS({
  "node_modules/validator/lib/isISO4217.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CurrencyCodes = void 0;
    exports.default = isISO4217;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var validISO4217CurrencyCodes = /* @__PURE__ */ new Set(["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UYW", "UZS", "VED", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"]);
    function isISO4217(str) {
      (0, _assertString.default)(str);
      return validISO4217CurrencyCodes.has(str.toUpperCase());
    }
    var CurrencyCodes = exports.CurrencyCodes = validISO4217CurrencyCodes;
  }
});

// node_modules/validator/lib/isBase32.js
var require_isBase32 = __commonJS({
  "node_modules/validator/lib/isBase32.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBase32;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var base32 = /^[A-Z2-7]+=*$/;
    var crockfordBase32 = /^[A-HJKMNP-TV-Z0-9]+$/;
    var defaultBase32Options = {
      crockford: false
    };
    function isBase32(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, defaultBase32Options);
      if (options.crockford) {
        return crockfordBase32.test(str);
      }
      var len = str.length;
      if (len % 8 === 0 && base32.test(str)) {
        return true;
      }
      return false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isBase58.js
var require_isBase58 = __commonJS({
  "node_modules/validator/lib/isBase58.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBase58;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var base58Reg = /^[A-HJ-NP-Za-km-z1-9]*$/;
    function isBase58(str) {
      (0, _assertString.default)(str);
      if (base58Reg.test(str)) {
        return true;
      }
      return false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isDataURI.js
var require_isDataURI = __commonJS({
  "node_modules/validator/lib/isDataURI.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isDataURI;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var validMediaType = /^[a-z]+\/[a-z0-9\-\+\._]+$/i;
    var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
    var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
    function isDataURI(str) {
      (0, _assertString.default)(str);
      var data = str.split(",");
      if (data.length < 2) {
        return false;
      }
      var attributes = data.shift().trim().split(";");
      var schemeAndMediaType = attributes.shift();
      if (schemeAndMediaType.slice(0, 5) !== "data:") {
        return false;
      }
      var mediaType = schemeAndMediaType.slice(5);
      if (mediaType !== "" && !validMediaType.test(mediaType)) {
        return false;
      }
      for (var i = 0; i < attributes.length; i++) {
        if (!(i === attributes.length - 1 && attributes[i].toLowerCase() === "base64") && !validAttribute.test(attributes[i])) {
          return false;
        }
      }
      for (var _i = 0; _i < data.length; _i++) {
        if (!validData.test(data[_i])) {
          return false;
        }
      }
      return true;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isMagnetURI.js
var require_isMagnetURI = __commonJS({
  "node_modules/validator/lib/isMagnetURI.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMagnetURI;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var magnetURIComponent = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;
    function isMagnetURI(url) {
      (0, _assertString.default)(url);
      if (url.indexOf("magnet:?") !== 0) {
        return false;
      }
      return magnetURIComponent.test(url);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/rtrim.js
var require_rtrim = __commonJS({
  "node_modules/validator/lib/rtrim.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = rtrim;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function rtrim(str, chars) {
      (0, _assertString.default)(str);
      if (chars) {
        var pattern = new RegExp("[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"), "g");
        return str.replace(pattern, "");
      }
      var strIndex = str.length - 1;
      while (/\s/.test(str.charAt(strIndex))) {
        strIndex -= 1;
      }
      return str.slice(0, strIndex + 1);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/ltrim.js
var require_ltrim = __commonJS({
  "node_modules/validator/lib/ltrim.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = ltrim;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function ltrim(str, chars) {
      (0, _assertString.default)(str);
      var pattern = chars ? new RegExp("^[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+"), "g") : /^\s+/g;
      return str.replace(pattern, "");
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/trim.js
var require_trim = __commonJS({
  "node_modules/validator/lib/trim.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = trim;
    var _rtrim = _interopRequireDefault(require_rtrim());
    var _ltrim = _interopRequireDefault(require_ltrim());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function trim(str, chars) {
      return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isMailtoURI.js
var require_isMailtoURI = __commonJS({
  "node_modules/validator/lib/isMailtoURI.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMailtoURI;
    var _trim = _interopRequireDefault(require_trim());
    var _isEmail = _interopRequireDefault(require_isEmail());
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function _slicedToArray(r, e) {
      return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArrayLimit(r, l) {
      var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t) {
        var e, n, i, u, a = [], f = true, o = false;
        try {
          if (i = (t = t.call(r)).next, 0 === l) {
            if (Object(t) !== t) return;
            f = false;
          } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
        } catch (r2) {
          o = true, n = r2;
        } finally {
          try {
            if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }
    function _arrayWithHoles(r) {
      if (Array.isArray(r)) return r;
    }
    function _createForOfIteratorHelper(r, e) {
      var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (!t) {
        if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
          t && (r = t);
          var _n = 0, F = function F2() {
          };
          return {
            s: F,
            n: function n() {
              return _n >= r.length ? {
                done: true
              } : {
                done: false,
                value: r[_n++]
              };
            },
            e: function e2(r2) {
              throw r2;
            },
            f: F
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var o, a = true, u = false;
      return {
        s: function s() {
          t = t.call(r);
        },
        n: function n() {
          var r2 = t.next();
          return a = r2.done, r2;
        },
        e: function e2(r2) {
          u = true, o = r2;
        },
        f: function f() {
          try {
            a || null == t.return || t.return();
          } finally {
            if (u) throw o;
          }
        }
      };
    }
    function _unsupportedIterableToArray(r, a) {
      if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
      }
    }
    function _arrayLikeToArray(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    function parseMailtoQueryString(queryString) {
      var allowedParams = /* @__PURE__ */ new Set(["subject", "body", "cc", "bcc"]), query = {
        cc: "",
        bcc: ""
      };
      var isParseFailed = false;
      var queryParams = queryString.split("&");
      if (queryParams.length > 4) {
        return false;
      }
      var _iterator = _createForOfIteratorHelper(queryParams), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var q = _step.value;
          var _q$split = q.split("="), _q$split2 = _slicedToArray(_q$split, 2), key = _q$split2[0], value = _q$split2[1];
          if (key && !allowedParams.has(key)) {
            isParseFailed = true;
            break;
          }
          if (value && (key === "cc" || key === "bcc")) {
            query[key] = value;
          }
          if (key) {
            allowedParams.delete(key);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return isParseFailed ? false : query;
    }
    function isMailtoURI(url, options) {
      (0, _assertString.default)(url);
      if (url.indexOf("mailto:") !== 0) {
        return false;
      }
      var _url$replace$split = url.replace("mailto:", "").split("?"), _url$replace$split2 = _slicedToArray(_url$replace$split, 2), to = _url$replace$split2[0], _url$replace$split2$ = _url$replace$split2[1], queryString = _url$replace$split2$ === void 0 ? "" : _url$replace$split2$;
      if (!to && !queryString) {
        return true;
      }
      var query = parseMailtoQueryString(queryString);
      if (!query) {
        return false;
      }
      return "".concat(to, ",").concat(query.cc, ",").concat(query.bcc).split(",").every(function(email) {
        email = (0, _trim.default)(email, " ");
        if (email) {
          return (0, _isEmail.default)(email, options);
        }
        return true;
      });
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isMimeType.js
var require_isMimeType = __commonJS({
  "node_modules/validator/lib/isMimeType.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMimeType;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i;
    var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i;
    var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;
    function isMimeType(str) {
      (0, _assertString.default)(str);
      return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isLatLong.js
var require_isLatLong = __commonJS({
  "node_modules/validator/lib/isLatLong.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLatLong;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
    var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
    var latDMS = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i;
    var longDMS = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i;
    var defaultLatLongOptions = {
      checkDMS: false
    };
    function isLatLong(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, defaultLatLongOptions);
      if (!str.includes(",")) return false;
      var pair = str.split(",");
      if (pair[0].startsWith("(") && !pair[1].endsWith(")") || pair[1].endsWith(")") && !pair[0].startsWith("(")) return false;
      if (options.checkDMS) {
        return latDMS.test(pair[0]) && longDMS.test(pair[1]);
      }
      return lat.test(pair[0]) && long.test(pair[1]);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isPostalCode.js
var require_isPostalCode = __commonJS({
  "node_modules/validator/lib/isPostalCode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isPostalCode;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var threeDigit = /^\d{3}$/;
    var fourDigit = /^\d{4}$/;
    var fiveDigit = /^\d{5}$/;
    var sixDigit = /^\d{6}$/;
    var patterns = {
      AD: /^AD\d{3}$/,
      AT: fourDigit,
      AU: fourDigit,
      AZ: /^AZ\d{4}$/,
      BA: /^([7-8]\d{4}$)/,
      BE: fourDigit,
      BG: fourDigit,
      BR: /^\d{5}-?\d{3}$/,
      BY: /^2[1-4]\d{4}$/,
      CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
      CH: fourDigit,
      CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
      CO: /^(05|08|11|13|15|17|18|19|20|23|25|27|41|44|47|50|52|54|63|66|68|70|73|76|81|85|86|88|91|94|95|97|99)(\d{4})$/,
      CZ: /^\d{3}\s?\d{2}$/,
      DE: fiveDigit,
      DK: fourDigit,
      DO: fiveDigit,
      DZ: fiveDigit,
      EE: fiveDigit,
      ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
      FI: fiveDigit,
      FR: /^\d{2}\s?\d{3}$/,
      GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
      GR: /^\d{3}\s?\d{2}$/,
      HR: /^([1-5]\d{4}$)/,
      HT: /^HT\d{4}$/,
      HU: fourDigit,
      ID: fiveDigit,
      IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
      IL: /^(\d{5}|\d{7})$/,
      IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
      IR: /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
      IS: threeDigit,
      IT: fiveDigit,
      JP: /^\d{3}\-\d{4}$/,
      KE: fiveDigit,
      KR: /^(\d{5}|\d{6})$/,
      LI: /^(948[5-9]|949[0-7])$/,
      LT: /^LT\-\d{5}$/,
      LU: fourDigit,
      LV: /^LV\-\d{4}$/,
      LK: fiveDigit,
      MG: threeDigit,
      MX: fiveDigit,
      MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
      MY: fiveDigit,
      NL: /^[1-9]\d{3}\s?(?!sa|sd|ss)[a-z]{2}$/i,
      NO: fourDigit,
      NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
      NZ: fourDigit,
      PL: /^\d{2}\-\d{3}$/,
      PR: /^00[679]\d{2}([ -]\d{4})?$/,
      PT: /^\d{4}\-\d{3}?$/,
      RO: sixDigit,
      RU: sixDigit,
      SA: fiveDigit,
      SE: /^[1-9]\d{2}\s?\d{2}$/,
      SG: sixDigit,
      SI: fourDigit,
      SK: /^\d{3}\s?\d{2}$/,
      TH: fiveDigit,
      TN: fourDigit,
      TW: /^\d{3}(\d{2})?$/,
      UA: fiveDigit,
      US: /^\d{5}(-\d{4})?$/,
      ZA: fourDigit,
      ZM: fiveDigit
    };
    var locales = exports.locales = Object.keys(patterns);
    function isPostalCode(str, locale) {
      (0, _assertString.default)(str);
      if (locale in patterns) {
        return patterns[locale].test(str);
      } else if (locale === "any") {
        for (var key in patterns) {
          if (patterns.hasOwnProperty(key)) {
            var pattern = patterns[key];
            if (pattern.test(str)) {
              return true;
            }
          }
        }
        return false;
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
  }
});

// node_modules/validator/lib/escape.js
var require_escape = __commonJS({
  "node_modules/validator/lib/escape.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = escape;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function escape(str) {
      (0, _assertString.default)(str);
      return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;");
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/unescape.js
var require_unescape = __commonJS({
  "node_modules/validator/lib/unescape.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = unescape;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function unescape(str) {
      (0, _assertString.default)(str);
      return str.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`").replace(/&amp;/g, "&");
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/blacklist.js
var require_blacklist = __commonJS({
  "node_modules/validator/lib/blacklist.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = blacklist;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function blacklist(str, chars) {
      (0, _assertString.default)(str);
      return str.replace(new RegExp("[".concat(chars, "]+"), "g"), "");
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/stripLow.js
var require_stripLow = __commonJS({
  "node_modules/validator/lib/stripLow.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = stripLow;
    var _assertString = _interopRequireDefault(require_assertString());
    var _blacklist = _interopRequireDefault(require_blacklist());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function stripLow(str, keep_new_lines) {
      (0, _assertString.default)(str);
      var chars = keep_new_lines ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
      return (0, _blacklist.default)(str, chars);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/whitelist.js
var require_whitelist = __commonJS({
  "node_modules/validator/lib/whitelist.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = whitelist;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function whitelist(str, chars) {
      (0, _assertString.default)(str);
      return str.replace(new RegExp("[^".concat(chars, "]+"), "g"), "");
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isWhitelisted.js
var require_isWhitelisted = __commonJS({
  "node_modules/validator/lib/isWhitelisted.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isWhitelisted;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function isWhitelisted(str, chars) {
      (0, _assertString.default)(str);
      for (var i = str.length - 1; i >= 0; i--) {
        if (chars.indexOf(str[i]) === -1) {
          return false;
        }
      }
      return true;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/normalizeEmail.js
var require_normalizeEmail = __commonJS({
  "node_modules/validator/lib/normalizeEmail.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = normalizeEmail;
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var default_normalize_email_options = {
      // The following options apply to all email addresses
      // Lowercases the local part of the email address.
      // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
      // The domain is always lowercased, as per RFC 1035
      all_lowercase: true,
      // The following conversions are specific to GMail
      // Lowercases the local part of the GMail address (known to be case-insensitive)
      gmail_lowercase: true,
      // Removes dots from the local part of the email address, as that's ignored by GMail
      gmail_remove_dots: true,
      // Removes the subaddress (e.g. "+foo") from the email address
      gmail_remove_subaddress: true,
      // Conversts the googlemail.com domain to gmail.com
      gmail_convert_googlemaildotcom: true,
      // The following conversions are specific to Outlook.com / Windows Live / Hotmail
      // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
      outlookdotcom_lowercase: true,
      // Removes the subaddress (e.g. "+foo") from the email address
      outlookdotcom_remove_subaddress: true,
      // The following conversions are specific to Yahoo
      // Lowercases the local part of the Yahoo address (known to be case-insensitive)
      yahoo_lowercase: true,
      // Removes the subaddress (e.g. "-foo") from the email address
      yahoo_remove_subaddress: true,
      // The following conversions are specific to Yandex
      // Lowercases the local part of the Yandex address (known to be case-insensitive)
      yandex_lowercase: true,
      // all yandex domains are equal, this explicitly sets the domain to 'yandex.ru'
      yandex_convert_yandexru: true,
      // The following conversions are specific to iCloud
      // Lowercases the local part of the iCloud address (known to be case-insensitive)
      icloud_lowercase: true,
      // Removes the subaddress (e.g. "+foo") from the email address
      icloud_remove_subaddress: true
    };
    var icloud_domains = ["icloud.com", "me.com"];
    var outlookdotcom_domains = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"];
    var yahoo_domains = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"];
    var yandex_domains = ["yandex.ru", "yandex.ua", "yandex.kz", "yandex.com", "yandex.by", "ya.ru"];
    function dotsReplacer(match) {
      if (match.length > 1) {
        return match;
      }
      return "";
    }
    function normalizeEmail(email, options) {
      options = (0, _merge.default)(options, default_normalize_email_options);
      var raw_parts = email.split("@");
      var domain = raw_parts.pop();
      var user = raw_parts.join("@");
      var parts = [user, domain];
      parts[1] = parts[1].toLowerCase();
      if (parts[1] === "gmail.com" || parts[1] === "googlemail.com") {
        if (options.gmail_remove_subaddress) {
          parts[0] = parts[0].split("+")[0];
        }
        if (options.gmail_remove_dots) {
          parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
        }
        if (!parts[0].length) {
          return false;
        }
        if (options.all_lowercase || options.gmail_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
        parts[1] = options.gmail_convert_googlemaildotcom ? "gmail.com" : parts[1];
      } else if (icloud_domains.indexOf(parts[1]) >= 0) {
        if (options.icloud_remove_subaddress) {
          parts[0] = parts[0].split("+")[0];
        }
        if (!parts[0].length) {
          return false;
        }
        if (options.all_lowercase || options.icloud_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
      } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
        if (options.outlookdotcom_remove_subaddress) {
          parts[0] = parts[0].split("+")[0];
        }
        if (!parts[0].length) {
          return false;
        }
        if (options.all_lowercase || options.outlookdotcom_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
      } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
        if (options.yahoo_remove_subaddress) {
          var components = parts[0].split("-");
          parts[0] = components.length > 1 ? components.slice(0, -1).join("-") : components[0];
        }
        if (!parts[0].length) {
          return false;
        }
        if (options.all_lowercase || options.yahoo_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
      } else if (yandex_domains.indexOf(parts[1]) >= 0) {
        if (options.all_lowercase || options.yandex_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
        parts[1] = options.yandex_convert_yandexru ? "yandex.ru" : parts[1];
      } else if (options.all_lowercase) {
        parts[0] = parts[0].toLowerCase();
      }
      return parts.join("@");
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isSlug.js
var require_isSlug = __commonJS({
  "node_modules/validator/lib/isSlug.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isSlug;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var charsetRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
    function isSlug(str) {
      (0, _assertString.default)(str);
      return charsetRegex.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isLicensePlate.js
var require_isLicensePlate = __commonJS({
  "node_modules/validator/lib/isLicensePlate.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLicensePlate;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var validators = {
      "cs-CZ": function csCZ(str) {
        return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(str);
      },
      "de-DE": function deDE(str) {
        return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(str);
      },
      "de-LI": function deLI(str) {
        return /^FL[- ]?\d{1,5}[UZ]?$/.test(str);
      },
      "en-IN": function enIN(str) {
        return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(str);
      },
      "en-SG": function enSG(str) {
        return /^[A-Z]{3}[ -]?[\d]{4}[ -]?[A-Z]{1}$/.test(str);
      },
      "es-AR": function esAR(str) {
        return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(str);
      },
      "fi-FI": function fiFI(str) {
        return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(str);
      },
      "hu-HU": function huHU(str) {
        return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(str);
      },
      "pt-BR": function ptBR(str) {
        return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(str);
      },
      "pt-PT": function ptPT(str) {
        return /^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(str);
      },
      "sq-AL": function sqAL(str) {
        return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(str);
      },
      "sv-SE": function svSE(str) {
        return /^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(str.trim());
      },
      "en-PK": function enPK(str) {
        return /(^[A-Z]{2}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{3}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{4}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]((\s|-){0,1})[0-9]{4}((\s|-)[0-9]{2}){0,1}$)/.test(str.trim());
      }
    };
    function isLicensePlate(str, locale) {
      (0, _assertString.default)(str);
      if (locale in validators) {
        return validators[locale](str);
      } else if (locale === "any") {
        for (var key in validators) {
          var validator = validators[key];
          if (validator(str)) {
            return true;
          }
        }
        return false;
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isStrongPassword.js
var require_isStrongPassword = __commonJS({
  "node_modules/validator/lib/isStrongPassword.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isStrongPassword;
    var _merge = _interopRequireDefault(require_merge());
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var upperCaseRegex = /^[A-Z]$/;
    var lowerCaseRegex = /^[a-z]$/;
    var numberRegex = /^[0-9]$/;
    var symbolRegex = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/\\ ]$/;
    var defaultOptions = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: false,
      pointsPerUnique: 1,
      pointsPerRepeat: 0.5,
      pointsForContainingLower: 10,
      pointsForContainingUpper: 10,
      pointsForContainingNumber: 10,
      pointsForContainingSymbol: 10
    };
    function countChars(str) {
      var result = {};
      Array.from(str).forEach(function(char) {
        var curVal = result[char];
        if (curVal) {
          result[char] += 1;
        } else {
          result[char] = 1;
        }
      });
      return result;
    }
    function analyzePassword(password) {
      var charMap = countChars(password);
      var analysis = {
        length: password.length,
        uniqueChars: Object.keys(charMap).length,
        uppercaseCount: 0,
        lowercaseCount: 0,
        numberCount: 0,
        symbolCount: 0
      };
      Object.keys(charMap).forEach(function(char) {
        if (upperCaseRegex.test(char)) {
          analysis.uppercaseCount += charMap[char];
        } else if (lowerCaseRegex.test(char)) {
          analysis.lowercaseCount += charMap[char];
        } else if (numberRegex.test(char)) {
          analysis.numberCount += charMap[char];
        } else if (symbolRegex.test(char)) {
          analysis.symbolCount += charMap[char];
        }
      });
      return analysis;
    }
    function scorePassword(analysis, scoringOptions) {
      var points = 0;
      points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
      points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;
      if (analysis.lowercaseCount > 0) {
        points += scoringOptions.pointsForContainingLower;
      }
      if (analysis.uppercaseCount > 0) {
        points += scoringOptions.pointsForContainingUpper;
      }
      if (analysis.numberCount > 0) {
        points += scoringOptions.pointsForContainingNumber;
      }
      if (analysis.symbolCount > 0) {
        points += scoringOptions.pointsForContainingSymbol;
      }
      return points;
    }
    function isStrongPassword(str) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      (0, _assertString.default)(str);
      var analysis = analyzePassword(str);
      options = (0, _merge.default)(options || {}, defaultOptions);
      if (options.returnScore) {
        return scorePassword(analysis, options);
      }
      return analysis.length >= options.minLength && analysis.lowercaseCount >= options.minLowercase && analysis.uppercaseCount >= options.minUppercase && analysis.numberCount >= options.minNumbers && analysis.symbolCount >= options.minSymbols;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isVAT.js
var require_isVAT = __commonJS({
  "node_modules/validator/lib/isVAT.js"(exports) {
    "use strict";
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isVAT;
    exports.vatMatchers = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    var algorithms = _interopRequireWildcard(require_algorithms());
    function _getRequireWildcardCache(e) {
      if ("function" != typeof WeakMap) return null;
      var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(e2) {
        return e2 ? t : r;
      })(e);
    }
    function _interopRequireWildcard(e, r) {
      if (!r && e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = _getRequireWildcardCache(r);
      if (t && t.has(e)) return t.get(e);
      var n = {
        __proto__: null
      }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
      }
      return n.default = e, t && t.set(e, n), n;
    }
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var AU = function AU2(str) {
      var match = str.match(/^(AU)?(\d{11})$/);
      if (!match) {
        return false;
      }
      var weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
      str = str.replace(/^AU/, "");
      var ABN = (parseInt(str.slice(0, 1), 10) - 1).toString() + str.slice(1);
      var total = 0;
      for (var i = 0; i < 11; i++) {
        total += weights[i] * ABN.charAt(i);
      }
      return total !== 0 && total % 89 === 0;
    };
    var CH = function CH2(str) {
      var hasValidCheckNumber = function hasValidCheckNumber2(digits) {
        var lastDigit = digits.pop();
        var weights = [5, 4, 3, 2, 7, 6, 5, 4];
        var calculatedCheckNumber = (11 - digits.reduce(function(acc, el, idx) {
          return acc + el * weights[idx];
        }, 0) % 11) % 11;
        return lastDigit === calculatedCheckNumber;
      };
      return /^(CHE[- ]?)?(\d{9}|(\d{3}\.\d{3}\.\d{3})|(\d{3} \d{3} \d{3})) ?(TVA|MWST|IVA)?$/.test(str) && hasValidCheckNumber(str.match(/\d/g).map(function(el) {
        return +el;
      }));
    };
    var PT = function PT2(str) {
      var match = str.match(/^(PT)?(\d{9})$/);
      if (!match) {
        return false;
      }
      var tin = match[2];
      var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
        return parseInt(a, 10);
      }), 9) % 11;
      if (checksum > 9) {
        return parseInt(tin[8], 10) === 0;
      }
      return checksum === parseInt(tin[8], 10);
    };
    var vatMatchers = exports.vatMatchers = {
      /**
       * European Union VAT identification numbers
       */
      AT: function AT(str) {
        return /^(AT)?U\d{8}$/.test(str);
      },
      BE: function BE(str) {
        return /^(BE)?\d{10}$/.test(str);
      },
      BG: function BG(str) {
        return /^(BG)?\d{9,10}$/.test(str);
      },
      HR: function HR(str) {
        return /^(HR)?\d{11}$/.test(str);
      },
      CY: function CY(str) {
        return /^(CY)?\w{9}$/.test(str);
      },
      CZ: function CZ(str) {
        return /^(CZ)?\d{8,10}$/.test(str);
      },
      DK: function DK(str) {
        return /^(DK)?\d{8}$/.test(str);
      },
      EE: function EE(str) {
        return /^(EE)?\d{9}$/.test(str);
      },
      FI: function FI(str) {
        return /^(FI)?\d{8}$/.test(str);
      },
      FR: function FR(str) {
        return /^(FR)?\w{2}\d{9}$/.test(str);
      },
      DE: function DE(str) {
        return /^(DE)?\d{9}$/.test(str);
      },
      EL: function EL(str) {
        return /^(EL)?\d{9}$/.test(str);
      },
      HU: function HU(str) {
        return /^(HU)?\d{8}$/.test(str);
      },
      IE: function IE(str) {
        return /^(IE)?\d{7}\w{1}(W)?$/.test(str);
      },
      IT: function IT(str) {
        return /^(IT)?\d{11}$/.test(str);
      },
      LV: function LV(str) {
        return /^(LV)?\d{11}$/.test(str);
      },
      LT: function LT(str) {
        return /^(LT)?\d{9,12}$/.test(str);
      },
      LU: function LU(str) {
        return /^(LU)?\d{8}$/.test(str);
      },
      MT: function MT(str) {
        return /^(MT)?\d{8}$/.test(str);
      },
      NL: function NL(str) {
        return /^(NL)?\d{9}B\d{2}$/.test(str);
      },
      PL: function PL(str) {
        return /^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(str);
      },
      PT,
      RO: function RO(str) {
        return /^(RO)?\d{2,10}$/.test(str);
      },
      SK: function SK(str) {
        return /^(SK)?\d{10}$/.test(str);
      },
      SI: function SI(str) {
        return /^(SI)?\d{8}$/.test(str);
      },
      ES: function ES(str) {
        return /^(ES)?\w\d{7}[A-Z]$/.test(str);
      },
      SE: function SE(str) {
        return /^(SE)?\d{12}$/.test(str);
      },
      /**
       * VAT numbers of non-EU countries
       */
      AL: function AL(str) {
        return /^(AL)?\w{9}[A-Z]$/.test(str);
      },
      MK: function MK(str) {
        return /^(MK)?\d{13}$/.test(str);
      },
      AU,
      BY: function BY(str) {
        return /^(УНП )?\d{9}$/.test(str);
      },
      CA: function CA(str) {
        return /^(CA)?\d{9}$/.test(str);
      },
      IS: function IS(str) {
        return /^(IS)?\d{5,6}$/.test(str);
      },
      IN: function IN(str) {
        return /^(IN)?\d{15}$/.test(str);
      },
      ID: function ID(str) {
        return /^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(str);
      },
      IL: function IL(str) {
        return /^(IL)?\d{9}$/.test(str);
      },
      KZ: function KZ(str) {
        return /^(KZ)?\d{12}$/.test(str);
      },
      NZ: function NZ(str) {
        return /^(NZ)?\d{9}$/.test(str);
      },
      NG: function NG(str) {
        return /^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(str);
      },
      NO: function NO(str) {
        return /^(NO)?\d{9}MVA$/.test(str);
      },
      PH: function PH(str) {
        return /^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(str);
      },
      RU: function RU(str) {
        return /^(RU)?(\d{10}|\d{12})$/.test(str);
      },
      SM: function SM(str) {
        return /^(SM)?\d{5}$/.test(str);
      },
      SA: function SA(str) {
        return /^(SA)?\d{15}$/.test(str);
      },
      RS: function RS(str) {
        return /^(RS)?\d{9}$/.test(str);
      },
      CH,
      TR: function TR(str) {
        return /^(TR)?\d{10}$/.test(str);
      },
      UA: function UA(str) {
        return /^(UA)?\d{12}$/.test(str);
      },
      GB: function GB(str) {
        return /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(str);
      },
      UZ: function UZ(str) {
        return /^(UZ)?\d{9}$/.test(str);
      },
      /**
       * VAT numbers of Latin American countries
       */
      AR: function AR(str) {
        return /^(AR)?\d{11}$/.test(str);
      },
      BO: function BO(str) {
        return /^(BO)?\d{7}$/.test(str);
      },
      BR: function BR(str) {
        return /^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(str);
      },
      CL: function CL(str) {
        return /^(CL)?\d{8}-\d{1}$/.test(str);
      },
      CO: function CO(str) {
        return /^(CO)?\d{10}$/.test(str);
      },
      CR: function CR(str) {
        return /^(CR)?\d{9,12}$/.test(str);
      },
      EC: function EC(str) {
        return /^(EC)?\d{13}$/.test(str);
      },
      SV: function SV(str) {
        return /^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(str);
      },
      GT: function GT(str) {
        return /^(GT)?\d{7}-\d{1}$/.test(str);
      },
      HN: function HN(str) {
        return /^(HN)?$/.test(str);
      },
      MX: function MX(str) {
        return /^(MX)?\w{3,4}\d{6}\w{3}$/.test(str);
      },
      NI: function NI(str) {
        return /^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(str);
      },
      PA: function PA(str) {
        return /^(PA)?$/.test(str);
      },
      PY: function PY(str) {
        return /^(PY)?\d{6,8}-\d{1}$/.test(str);
      },
      PE: function PE(str) {
        return /^(PE)?\d{11}$/.test(str);
      },
      DO: function DO(str) {
        return /^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(str);
      },
      UY: function UY(str) {
        return /^(UY)?\d{12}$/.test(str);
      },
      VE: function VE(str) {
        return /^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(str);
      }
    };
    function isVAT(str, countryCode) {
      (0, _assertString.default)(str);
      (0, _assertString.default)(countryCode);
      if (countryCode in vatMatchers) {
        return vatMatchers[countryCode](str);
      }
      throw new Error("Invalid country code: '".concat(countryCode, "'"));
    }
  }
});

// node_modules/validator/index.js
var require_validator = __commonJS({
  "node_modules/validator/index.js"(exports, module) {
    "use strict";
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _toDate = _interopRequireDefault(require_toDate());
    var _toFloat = _interopRequireDefault(require_toFloat());
    var _toInt = _interopRequireDefault(require_toInt());
    var _toBoolean = _interopRequireDefault(require_toBoolean());
    var _equals = _interopRequireDefault(require_equals());
    var _contains = _interopRequireDefault(require_contains());
    var _matches = _interopRequireDefault(require_matches());
    var _isEmail = _interopRequireDefault(require_isEmail());
    var _isURL = _interopRequireDefault(require_isURL());
    var _isMACAddress = _interopRequireDefault(require_isMACAddress());
    var _isIP = _interopRequireDefault(require_isIP());
    var _isIPRange = _interopRequireDefault(require_isIPRange());
    var _isFQDN = _interopRequireDefault(require_isFQDN());
    var _isDate = _interopRequireDefault(require_isDate());
    var _isTime = _interopRequireDefault(require_isTime());
    var _isBoolean = _interopRequireDefault(require_isBoolean());
    var _isLocale = _interopRequireDefault(require_isLocale());
    var _isAbaRouting = _interopRequireDefault(require_isAbaRouting());
    var _isAlpha = _interopRequireWildcard(require_isAlpha());
    var _isAlphanumeric = _interopRequireWildcard(require_isAlphanumeric());
    var _isNumeric = _interopRequireDefault(require_isNumeric());
    var _isPassportNumber = _interopRequireWildcard(require_isPassportNumber());
    var _isPort = _interopRequireDefault(require_isPort());
    var _isLowercase = _interopRequireDefault(require_isLowercase());
    var _isUppercase = _interopRequireDefault(require_isUppercase());
    var _isIMEI = _interopRequireDefault(require_isIMEI());
    var _isAscii = _interopRequireDefault(require_isAscii());
    var _isFullWidth = _interopRequireDefault(require_isFullWidth());
    var _isHalfWidth = _interopRequireDefault(require_isHalfWidth());
    var _isVariableWidth = _interopRequireDefault(require_isVariableWidth());
    var _isMultibyte = _interopRequireDefault(require_isMultibyte());
    var _isSemVer = _interopRequireDefault(require_isSemVer());
    var _isSurrogatePair = _interopRequireDefault(require_isSurrogatePair());
    var _isInt = _interopRequireDefault(require_isInt());
    var _isFloat = _interopRequireWildcard(require_isFloat());
    var _isDecimal = _interopRequireDefault(require_isDecimal());
    var _isHexadecimal = _interopRequireDefault(require_isHexadecimal());
    var _isOctal = _interopRequireDefault(require_isOctal());
    var _isDivisibleBy = _interopRequireDefault(require_isDivisibleBy());
    var _isHexColor = _interopRequireDefault(require_isHexColor());
    var _isRgbColor = _interopRequireDefault(require_isRgbColor());
    var _isHSL = _interopRequireDefault(require_isHSL());
    var _isISRC = _interopRequireDefault(require_isISRC());
    var _isIBAN = _interopRequireWildcard(require_isIBAN());
    var _isBIC = _interopRequireDefault(require_isBIC());
    var _isMD = _interopRequireDefault(require_isMD5());
    var _isHash = _interopRequireDefault(require_isHash());
    var _isJWT = _interopRequireDefault(require_isJWT());
    var _isJSON = _interopRequireDefault(require_isJSON());
    var _isEmpty = _interopRequireDefault(require_isEmpty());
    var _isLength = _interopRequireDefault(require_isLength());
    var _isByteLength = _interopRequireDefault(require_isByteLength());
    var _isULID = _interopRequireDefault(require_isULID());
    var _isUUID = _interopRequireDefault(require_isUUID());
    var _isMongoId = _interopRequireDefault(require_isMongoId());
    var _isAfter = _interopRequireDefault(require_isAfter());
    var _isBefore = _interopRequireDefault(require_isBefore());
    var _isIn = _interopRequireDefault(require_isIn());
    var _isLuhnNumber = _interopRequireDefault(require_isLuhnNumber());
    var _isCreditCard = _interopRequireDefault(require_isCreditCard());
    var _isIdentityCard = _interopRequireDefault(require_isIdentityCard());
    var _isEAN = _interopRequireDefault(require_isEAN());
    var _isISIN = _interopRequireDefault(require_isISIN());
    var _isISBN = _interopRequireDefault(require_isISBN());
    var _isISSN = _interopRequireDefault(require_isISSN());
    var _isTaxID = _interopRequireDefault(require_isTaxID());
    var _isMobilePhone = _interopRequireWildcard(require_isMobilePhone());
    var _isEthereumAddress = _interopRequireDefault(require_isEthereumAddress());
    var _isCurrency = _interopRequireDefault(require_isCurrency());
    var _isBtcAddress = _interopRequireDefault(require_isBtcAddress());
    var _isISO = require_isISO6346();
    var _isISO2 = _interopRequireDefault(require_isISO6391());
    var _isISO3 = _interopRequireDefault(require_isISO8601());
    var _isRFC = _interopRequireDefault(require_isRFC3339());
    var _isISO4 = _interopRequireDefault(require_isISO15924());
    var _isISO31661Alpha = _interopRequireDefault(require_isISO31661Alpha2());
    var _isISO31661Alpha2 = _interopRequireDefault(require_isISO31661Alpha3());
    var _isISO31661Numeric = _interopRequireDefault(require_isISO31661Numeric());
    var _isISO5 = _interopRequireDefault(require_isISO4217());
    var _isBase = _interopRequireDefault(require_isBase32());
    var _isBase2 = _interopRequireDefault(require_isBase58());
    var _isBase3 = _interopRequireDefault(require_isBase64());
    var _isDataURI = _interopRequireDefault(require_isDataURI());
    var _isMagnetURI = _interopRequireDefault(require_isMagnetURI());
    var _isMailtoURI = _interopRequireDefault(require_isMailtoURI());
    var _isMimeType = _interopRequireDefault(require_isMimeType());
    var _isLatLong = _interopRequireDefault(require_isLatLong());
    var _isPostalCode = _interopRequireWildcard(require_isPostalCode());
    var _ltrim = _interopRequireDefault(require_ltrim());
    var _rtrim = _interopRequireDefault(require_rtrim());
    var _trim = _interopRequireDefault(require_trim());
    var _escape = _interopRequireDefault(require_escape());
    var _unescape = _interopRequireDefault(require_unescape());
    var _stripLow = _interopRequireDefault(require_stripLow());
    var _whitelist = _interopRequireDefault(require_whitelist());
    var _blacklist = _interopRequireDefault(require_blacklist());
    var _isWhitelisted = _interopRequireDefault(require_isWhitelisted());
    var _normalizeEmail = _interopRequireDefault(require_normalizeEmail());
    var _isSlug = _interopRequireDefault(require_isSlug());
    var _isLicensePlate = _interopRequireDefault(require_isLicensePlate());
    var _isStrongPassword = _interopRequireDefault(require_isStrongPassword());
    var _isVAT = _interopRequireDefault(require_isVAT());
    function _getRequireWildcardCache(e) {
      if ("function" != typeof WeakMap) return null;
      var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(e2) {
        return e2 ? t : r;
      })(e);
    }
    function _interopRequireWildcard(e, r) {
      if (!r && e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = _getRequireWildcardCache(r);
      if (t && t.has(e)) return t.get(e);
      var n = {
        __proto__: null
      }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
      }
      return n.default = e, t && t.set(e, n), n;
    }
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var version = "13.15.0";
    var validator = {
      version,
      toDate: _toDate.default,
      toFloat: _toFloat.default,
      toInt: _toInt.default,
      toBoolean: _toBoolean.default,
      equals: _equals.default,
      contains: _contains.default,
      matches: _matches.default,
      isEmail: _isEmail.default,
      isURL: _isURL.default,
      isMACAddress: _isMACAddress.default,
      isIP: _isIP.default,
      isIPRange: _isIPRange.default,
      isFQDN: _isFQDN.default,
      isBoolean: _isBoolean.default,
      isIBAN: _isIBAN.default,
      isBIC: _isBIC.default,
      isAbaRouting: _isAbaRouting.default,
      isAlpha: _isAlpha.default,
      isAlphaLocales: _isAlpha.locales,
      isAlphanumeric: _isAlphanumeric.default,
      isAlphanumericLocales: _isAlphanumeric.locales,
      isNumeric: _isNumeric.default,
      isPassportNumber: _isPassportNumber.default,
      passportNumberLocales: _isPassportNumber.locales,
      isPort: _isPort.default,
      isLowercase: _isLowercase.default,
      isUppercase: _isUppercase.default,
      isAscii: _isAscii.default,
      isFullWidth: _isFullWidth.default,
      isHalfWidth: _isHalfWidth.default,
      isVariableWidth: _isVariableWidth.default,
      isMultibyte: _isMultibyte.default,
      isSemVer: _isSemVer.default,
      isSurrogatePair: _isSurrogatePair.default,
      isInt: _isInt.default,
      isIMEI: _isIMEI.default,
      isFloat: _isFloat.default,
      isFloatLocales: _isFloat.locales,
      isDecimal: _isDecimal.default,
      isHexadecimal: _isHexadecimal.default,
      isOctal: _isOctal.default,
      isDivisibleBy: _isDivisibleBy.default,
      isHexColor: _isHexColor.default,
      isRgbColor: _isRgbColor.default,
      isHSL: _isHSL.default,
      isISRC: _isISRC.default,
      isMD5: _isMD.default,
      isHash: _isHash.default,
      isJWT: _isJWT.default,
      isJSON: _isJSON.default,
      isEmpty: _isEmpty.default,
      isLength: _isLength.default,
      isLocale: _isLocale.default,
      isByteLength: _isByteLength.default,
      isULID: _isULID.default,
      isUUID: _isUUID.default,
      isMongoId: _isMongoId.default,
      isAfter: _isAfter.default,
      isBefore: _isBefore.default,
      isIn: _isIn.default,
      isLuhnNumber: _isLuhnNumber.default,
      isCreditCard: _isCreditCard.default,
      isIdentityCard: _isIdentityCard.default,
      isEAN: _isEAN.default,
      isISIN: _isISIN.default,
      isISBN: _isISBN.default,
      isISSN: _isISSN.default,
      isMobilePhone: _isMobilePhone.default,
      isMobilePhoneLocales: _isMobilePhone.locales,
      isPostalCode: _isPostalCode.default,
      isPostalCodeLocales: _isPostalCode.locales,
      isEthereumAddress: _isEthereumAddress.default,
      isCurrency: _isCurrency.default,
      isBtcAddress: _isBtcAddress.default,
      isISO6346: _isISO.isISO6346,
      isFreightContainerID: _isISO.isFreightContainerID,
      isISO6391: _isISO2.default,
      isISO8601: _isISO3.default,
      isISO15924: _isISO4.default,
      isRFC3339: _isRFC.default,
      isISO31661Alpha2: _isISO31661Alpha.default,
      isISO31661Alpha3: _isISO31661Alpha2.default,
      isISO31661Numeric: _isISO31661Numeric.default,
      isISO4217: _isISO5.default,
      isBase32: _isBase.default,
      isBase58: _isBase2.default,
      isBase64: _isBase3.default,
      isDataURI: _isDataURI.default,
      isMagnetURI: _isMagnetURI.default,
      isMailtoURI: _isMailtoURI.default,
      isMimeType: _isMimeType.default,
      isLatLong: _isLatLong.default,
      ltrim: _ltrim.default,
      rtrim: _rtrim.default,
      trim: _trim.default,
      escape: _escape.default,
      unescape: _unescape.default,
      stripLow: _stripLow.default,
      whitelist: _whitelist.default,
      blacklist: _blacklist.default,
      isWhitelisted: _isWhitelisted.default,
      normalizeEmail: _normalizeEmail.default,
      toString,
      isSlug: _isSlug.default,
      isStrongPassword: _isStrongPassword.default,
      isTaxID: _isTaxID.default,
      isDate: _isDate.default,
      isTime: _isTime.default,
      isLicensePlate: _isLicensePlate.default,
      isVAT: _isVAT.default,
      ibanLocales: _isIBAN.locales
    };
    var _default = exports.default = validator;
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/z-schema/src/FormatValidators.js
var require_FormatValidators = __commonJS({
  "node_modules/z-schema/src/FormatValidators.js"(exports, module) {
    var validator = require_validator();
    var FormatValidators = {
      "date": function(date) {
        if (typeof date !== "string") {
          return true;
        }
        var matches = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.exec(date);
        if (matches === null) {
          return false;
        }
        if (matches[2] < "01" || matches[2] > "12" || matches[3] < "01" || matches[3] > "31") {
          return false;
        }
        return true;
      },
      "date-time": function(dateTime) {
        if (typeof dateTime !== "string") {
          return true;
        }
        var s = dateTime.toLowerCase().split("t");
        if (!FormatValidators.date(s[0])) {
          return false;
        }
        var matches = /^([0-9]{2}):([0-9]{2}):([0-9]{2})(.[0-9]+)?(z|([+-][0-9]{2}:[0-9]{2}))$/.exec(s[1]);
        if (matches === null) {
          return false;
        }
        if (matches[1] > "23" || matches[2] > "59" || matches[3] > "59") {
          return false;
        }
        return true;
      },
      "email": function(email) {
        if (typeof email !== "string") {
          return true;
        }
        return validator.isEmail(email, {
          "require_tld": true
        });
      },
      "hostname": function(hostname) {
        if (typeof hostname !== "string") {
          return true;
        }
        var valid = /^[a-zA-Z](([-0-9a-zA-Z]+)?[0-9a-zA-Z])?(\.[a-zA-Z](([-0-9a-zA-Z]+)?[0-9a-zA-Z])?)*$/.test(hostname);
        if (valid) {
          if (hostname.length > 255) {
            return false;
          }
          var labels = hostname.split(".");
          for (var i = 0; i < labels.length; i++) {
            if (labels[i].length > 63) {
              return false;
            }
          }
        }
        return valid;
      },
      "host-name": function(hostname) {
        return FormatValidators.hostname.call(this, hostname);
      },
      "ipv4": function(ipv4) {
        if (typeof ipv4 !== "string") {
          return true;
        }
        return validator.isIP(ipv4, 4);
      },
      "ipv6": function(ipv6) {
        if (typeof ipv6 !== "string") {
          return true;
        }
        return validator.isIP(ipv6, 6);
      },
      "regex": function(str) {
        try {
          RegExp(str);
          return true;
        } catch (e) {
          return false;
        }
      },
      "uri": function(uri) {
        if (this.options.strictUris) {
          return FormatValidators["strict-uri"].apply(this, arguments);
        }
        return typeof uri !== "string" || RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?").test(uri);
      },
      "strict-uri": function(uri) {
        return typeof uri !== "string" || validator.isURL(uri);
      }
    };
    module.exports = FormatValidators;
  }
});

// node_modules/z-schema/src/JsonValidation.js
var require_JsonValidation = __commonJS({
  "node_modules/z-schema/src/JsonValidation.js"(exports) {
    "use strict";
    var FormatValidators = require_FormatValidators();
    var Report = require_Report();
    var Utils = require_Utils();
    var shouldSkipValidate = function(options, errors) {
      return options && Array.isArray(options.includeErrors) && options.includeErrors.length > 0 && !errors.some(function(err) {
        return options.includeErrors.includes(err);
      });
    };
    var JsonValidators = {
      multipleOf: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["MULTIPLE_OF"])) {
          return;
        }
        if (typeof json !== "number") {
          return;
        }
        var stringMultipleOf = String(schema.multipleOf);
        var scale = Math.pow(10, stringMultipleOf.length - stringMultipleOf.indexOf(".") - 1);
        if (Utils.whatIs(json * scale / (schema.multipleOf * scale)) !== "integer") {
          report.addError("MULTIPLE_OF", [json, schema.multipleOf], null, schema);
        }
      },
      maximum: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["MAXIMUM", "MAXIMUM_EXCLUSIVE"])) {
          return;
        }
        if (typeof json !== "number") {
          return;
        }
        if (schema.exclusiveMaximum !== true) {
          if (json > schema.maximum) {
            report.addError("MAXIMUM", [json, schema.maximum], null, schema);
          }
        } else {
          if (json >= schema.maximum) {
            report.addError("MAXIMUM_EXCLUSIVE", [json, schema.maximum], null, schema);
          }
        }
      },
      exclusiveMaximum: function() {
      },
      minimum: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["MINIMUM", "MINIMUM_EXCLUSIVE"])) {
          return;
        }
        if (typeof json !== "number") {
          return;
        }
        if (schema.exclusiveMinimum !== true) {
          if (json < schema.minimum) {
            report.addError("MINIMUM", [json, schema.minimum], null, schema);
          }
        } else {
          if (json <= schema.minimum) {
            report.addError("MINIMUM_EXCLUSIVE", [json, schema.minimum], null, schema);
          }
        }
      },
      exclusiveMinimum: function() {
      },
      maxLength: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["MAX_LENGTH"])) {
          return;
        }
        if (typeof json !== "string") {
          return;
        }
        if (Utils.ucs2decode(json).length > schema.maxLength) {
          report.addError("MAX_LENGTH", [json.length, schema.maxLength], null, schema);
        }
      },
      minLength: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["MIN_LENGTH"])) {
          return;
        }
        if (typeof json !== "string") {
          return;
        }
        if (Utils.ucs2decode(json).length < schema.minLength) {
          report.addError("MIN_LENGTH", [json.length, schema.minLength], null, schema);
        }
      },
      pattern: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["PATTERN"])) {
          return;
        }
        if (typeof json !== "string") {
          return;
        }
        if (RegExp(schema.pattern).test(json) === false) {
          report.addError("PATTERN", [schema.pattern, json], null, schema);
        }
      },
      additionalItems: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["ARRAY_ADDITIONAL_ITEMS"])) {
          return;
        }
        if (!Array.isArray(json)) {
          return;
        }
        if (schema.additionalItems === false && Array.isArray(schema.items)) {
          if (json.length > schema.items.length) {
            report.addError("ARRAY_ADDITIONAL_ITEMS", null, null, schema);
          }
        }
      },
      items: function() {
      },
      maxItems: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["ARRAY_LENGTH_LONG"])) {
          return;
        }
        if (!Array.isArray(json)) {
          return;
        }
        if (json.length > schema.maxItems) {
          report.addError("ARRAY_LENGTH_LONG", [json.length, schema.maxItems], null, schema);
        }
      },
      minItems: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["ARRAY_LENGTH_SHORT"])) {
          return;
        }
        if (!Array.isArray(json)) {
          return;
        }
        if (json.length < schema.minItems) {
          report.addError("ARRAY_LENGTH_SHORT", [json.length, schema.minItems], null, schema);
        }
      },
      uniqueItems: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["ARRAY_UNIQUE"])) {
          return;
        }
        if (!Array.isArray(json)) {
          return;
        }
        if (schema.uniqueItems === true) {
          var matches = [];
          if (Utils.isUniqueArray(json, matches) === false) {
            report.addError("ARRAY_UNIQUE", matches, null, schema);
          }
        }
      },
      maxProperties: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["OBJECT_PROPERTIES_MAXIMUM"])) {
          return;
        }
        if (Utils.whatIs(json) !== "object") {
          return;
        }
        var keysCount = Object.keys(json).length;
        if (keysCount > schema.maxProperties) {
          report.addError("OBJECT_PROPERTIES_MAXIMUM", [keysCount, schema.maxProperties], null, schema);
        }
      },
      minProperties: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["OBJECT_PROPERTIES_MINIMUM"])) {
          return;
        }
        if (Utils.whatIs(json) !== "object") {
          return;
        }
        var keysCount = Object.keys(json).length;
        if (keysCount < schema.minProperties) {
          report.addError("OBJECT_PROPERTIES_MINIMUM", [keysCount, schema.minProperties], null, schema);
        }
      },
      required: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["OBJECT_MISSING_REQUIRED_PROPERTY"])) {
          return;
        }
        if (Utils.whatIs(json) !== "object") {
          return;
        }
        var idx = schema.required.length;
        while (idx--) {
          var requiredPropertyName = schema.required[idx];
          if (json[requiredPropertyName] === void 0) {
            report.addError("OBJECT_MISSING_REQUIRED_PROPERTY", [requiredPropertyName], null, schema);
          }
        }
      },
      additionalProperties: function(report, schema, json) {
        if (schema.properties === void 0 && schema.patternProperties === void 0) {
          return JsonValidators.properties.call(this, report, schema, json);
        }
      },
      patternProperties: function(report, schema, json) {
        if (schema.properties === void 0) {
          return JsonValidators.properties.call(this, report, schema, json);
        }
      },
      properties: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["OBJECT_ADDITIONAL_PROPERTIES"])) {
          return;
        }
        if (Utils.whatIs(json) !== "object") {
          return;
        }
        var properties = schema.properties !== void 0 ? schema.properties : {};
        var patternProperties = schema.patternProperties !== void 0 ? schema.patternProperties : {};
        if (schema.additionalProperties === false) {
          var s = Object.keys(json);
          var p = Object.keys(properties);
          var pp = Object.keys(patternProperties);
          s = Utils.difference(s, p);
          var idx = pp.length;
          while (idx--) {
            var regExp = RegExp(pp[idx]), idx2 = s.length;
            while (idx2--) {
              if (regExp.test(s[idx2]) === true) {
                s.splice(idx2, 1);
              }
            }
          }
          if (s.length > 0) {
            var idx3 = this.options.assumeAdditional.length;
            if (idx3) {
              while (idx3--) {
                var io = s.indexOf(this.options.assumeAdditional[idx3]);
                if (io !== -1) {
                  s.splice(io, 1);
                }
              }
            }
            var idx4 = s.length;
            if (idx4) {
              while (idx4--) {
                report.addError("OBJECT_ADDITIONAL_PROPERTIES", [s[idx4]], null, schema);
              }
            }
          }
        }
      },
      dependencies: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["OBJECT_DEPENDENCY_KEY"])) {
          return;
        }
        if (Utils.whatIs(json) !== "object") {
          return;
        }
        var keys = Object.keys(schema.dependencies), idx = keys.length;
        while (idx--) {
          var dependencyName = keys[idx];
          if (json[dependencyName]) {
            var dependencyDefinition = schema.dependencies[dependencyName];
            if (Utils.whatIs(dependencyDefinition) === "object") {
              exports.validate.call(this, report, dependencyDefinition, json);
            } else {
              var idx2 = dependencyDefinition.length;
              while (idx2--) {
                var requiredPropertyName = dependencyDefinition[idx2];
                if (json[requiredPropertyName] === void 0) {
                  report.addError("OBJECT_DEPENDENCY_KEY", [requiredPropertyName, dependencyName], null, schema);
                }
              }
            }
          }
        }
      },
      enum: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["ENUM_CASE_MISMATCH", "ENUM_MISMATCH"])) {
          return;
        }
        var match = false, caseInsensitiveMatch = false, idx = schema.enum.length;
        while (idx--) {
          if (Utils.areEqual(json, schema.enum[idx])) {
            match = true;
            break;
          } else if (Utils.areEqual(json, schema.enum[idx]), {
            caseInsensitiveComparison: true
          }) {
            caseInsensitiveMatch = true;
          }
        }
        if (match === false) {
          var error = caseInsensitiveMatch && this.options.enumCaseInsensitiveComparison ? "ENUM_CASE_MISMATCH" : "ENUM_MISMATCH";
          report.addError(error, [json], null, schema);
        }
      },
      type: function(report, schema, json) {
        if (shouldSkipValidate(this.validateOptions, ["INVALID_TYPE"])) {
          return;
        }
        var jsonType = Utils.whatIs(json);
        if (typeof schema.type === "string") {
          if (jsonType !== schema.type && (jsonType !== "integer" || schema.type !== "number")) {
            report.addError("INVALID_TYPE", [schema.type, jsonType], null, schema);
          }
        } else {
          if (schema.type.indexOf(jsonType) === -1 && (jsonType !== "integer" || schema.type.indexOf("number") === -1)) {
            report.addError("INVALID_TYPE", [schema.type, jsonType], null, schema);
          }
        }
      },
      allOf: function(report, schema, json) {
        var idx = schema.allOf.length;
        while (idx--) {
          var validateResult = exports.validate.call(this, report, schema.allOf[idx], json);
          if (this.options.breakOnFirstError && validateResult === false) {
            break;
          }
        }
      },
      anyOf: function(report, schema, json) {
        var subReports = [], passed = false, idx = schema.anyOf.length;
        while (idx-- && passed === false) {
          var subReport = new Report(report);
          subReports.push(subReport);
          passed = exports.validate.call(this, subReport, schema.anyOf[idx], json);
        }
        if (passed === false) {
          report.addError("ANY_OF_MISSING", void 0, subReports, schema);
        }
      },
      oneOf: function(report, schema, json) {
        var passes = 0, subReports = [], idx = schema.oneOf.length;
        while (idx--) {
          var subReport = new Report(report, {
            maxErrors: 1
          });
          subReports.push(subReport);
          if (exports.validate.call(this, subReport, schema.oneOf[idx], json) === true) {
            passes++;
          }
        }
        if (passes === 0) {
          report.addError("ONE_OF_MISSING", void 0, subReports, schema);
        } else if (passes > 1) {
          report.addError("ONE_OF_MULTIPLE", null, null, schema);
        }
      },
      not: function(report, schema, json) {
        var subReport = new Report(report);
        if (exports.validate.call(this, subReport, schema.not, json) === true) {
          report.addError("NOT_PASSED", null, null, schema);
        }
      },
      definitions: function() {
      },
      format: function(report, schema, json) {
        var formatValidatorFn = FormatValidators[schema.format];
        if (typeof formatValidatorFn === "function") {
          if (shouldSkipValidate(this.validateOptions, ["INVALID_FORMAT"])) {
            return;
          }
          if (report.hasError("INVALID_TYPE", [schema.type, Utils.whatIs(json)])) {
            return;
          }
          if (formatValidatorFn.length === 2) {
            var pathBeforeAsync = Utils.clone(report.path);
            report.addAsyncTask(formatValidatorFn, [json], function(result) {
              if (result !== true) {
                var backup = report.path;
                report.path = pathBeforeAsync;
                report.addError("INVALID_FORMAT", [schema.format, json], null, schema);
                report.path = backup;
              }
            });
          } else {
            if (formatValidatorFn.call(this, json) !== true) {
              report.addError("INVALID_FORMAT", [schema.format, json], null, schema);
            }
          }
        } else if (this.options.ignoreUnknownFormats !== true) {
          report.addError("UNKNOWN_FORMAT", [schema.format], null, schema);
        }
      }
    };
    var recurseArray = function(report, schema, json) {
      var idx = json.length;
      if (Array.isArray(schema.items)) {
        while (idx--) {
          if (idx < schema.items.length) {
            report.path.push(idx);
            exports.validate.call(this, report, schema.items[idx], json[idx]);
            report.path.pop();
          } else {
            if (typeof schema.additionalItems === "object") {
              report.path.push(idx);
              exports.validate.call(this, report, schema.additionalItems, json[idx]);
              report.path.pop();
            }
          }
        }
      } else if (typeof schema.items === "object") {
        while (idx--) {
          report.path.push(idx);
          exports.validate.call(this, report, schema.items, json[idx]);
          report.path.pop();
        }
      }
    };
    var recurseObject = function(report, schema, json) {
      var additionalProperties = schema.additionalProperties;
      if (additionalProperties === true || additionalProperties === void 0) {
        additionalProperties = {};
      }
      var p = schema.properties ? Object.keys(schema.properties) : [];
      var pp = schema.patternProperties ? Object.keys(schema.patternProperties) : [];
      var keys = Object.keys(json), idx = keys.length;
      while (idx--) {
        var m = keys[idx], propertyValue = json[m];
        var s = [];
        if (p.indexOf(m) !== -1) {
          s.push(schema.properties[m]);
        }
        var idx2 = pp.length;
        while (idx2--) {
          var regexString = pp[idx2];
          if (RegExp(regexString).test(m) === true) {
            s.push(schema.patternProperties[regexString]);
          }
        }
        if (s.length === 0 && additionalProperties !== false) {
          s.push(additionalProperties);
        }
        idx2 = s.length;
        while (idx2--) {
          report.path.push(m);
          exports.validate.call(this, report, s[idx2], propertyValue);
          report.path.pop();
        }
      }
    };
    exports.JsonValidators = JsonValidators;
    exports.validate = function(report, schema, json) {
      report.commonErrorMessage = "JSON_OBJECT_VALIDATION_FAILED";
      var to = Utils.whatIs(schema);
      if (to !== "object") {
        report.addError("SCHEMA_NOT_AN_OBJECT", [to], null, schema);
        return false;
      }
      var keys = Object.keys(schema);
      if (keys.length === 0) {
        return true;
      }
      var isRoot = false;
      if (!report.rootSchema) {
        report.rootSchema = schema;
        isRoot = true;
      }
      if (schema.$ref !== void 0) {
        var maxRefs = 99;
        while (schema.$ref && maxRefs > 0) {
          if (!schema.__$refResolved) {
            report.addError("REF_UNRESOLVED", [schema.$ref], null, schema);
            break;
          } else if (schema.__$refResolved === schema) {
            break;
          } else {
            schema = schema.__$refResolved;
            keys = Object.keys(schema);
          }
          maxRefs--;
        }
        if (maxRefs === 0) {
          throw new Error("Circular dependency by $ref references!");
        }
      }
      var jsonType = Utils.whatIs(json);
      if (schema.type) {
        keys.splice(keys.indexOf("type"), 1);
        JsonValidators.type.call(this, report, schema, json);
        if (report.errors.length && this.options.breakOnFirstError) {
          return false;
        }
      }
      var idx = keys.length;
      while (idx--) {
        if (JsonValidators[keys[idx]]) {
          JsonValidators[keys[idx]].call(this, report, schema, json);
          if (report.errors.length && this.options.breakOnFirstError) {
            break;
          }
        }
      }
      if (report.errors.length === 0 || this.options.breakOnFirstError === false) {
        if (jsonType === "array") {
          recurseArray.call(this, report, schema, json);
        } else if (jsonType === "object") {
          recurseObject.call(this, report, schema, json);
        }
      }
      if (typeof this.options.customValidator === "function") {
        this.options.customValidator.call(this, report, schema, json);
      }
      if (isRoot) {
        report.rootSchema = void 0;
      }
      return report.errors.length === 0;
    };
  }
});

// node_modules/lodash.isequal/index.js
var require_lodash2 = __commonJS({
  "node_modules/lodash.isequal/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function mapToArray(map2) {
      var index = -1, result = Array(map2.size);
      map2.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var Buffer = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array = root.Uint8Array;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView = getNative(root, "DataView");
    var Map2 = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set2 = getNative(root, "Set");
    var WeakMap2 = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    function getMapData(map2, key) {
      var data = map2.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module.exports = isEqual;
  }
});

// node_modules/z-schema/src/SchemaCompilation.js
var require_SchemaCompilation = __commonJS({
  "node_modules/z-schema/src/SchemaCompilation.js"(exports) {
    "use strict";
    var Report = require_Report();
    var SchemaCache = require_SchemaCache();
    var Utils = require_Utils();
    function mergeReference(scope, ref) {
      if (Utils.isAbsoluteUri(ref)) {
        return ref;
      }
      var joinedScope = scope.join(""), isScopeAbsolute = Utils.isAbsoluteUri(joinedScope), isScopeRelative = Utils.isRelativeUri(joinedScope), isRefRelative = Utils.isRelativeUri(ref), toRemove;
      if (isScopeAbsolute && isRefRelative) {
        toRemove = joinedScope.match(/\/[^\/]*$/);
        if (toRemove) {
          joinedScope = joinedScope.slice(0, toRemove.index + 1);
        }
      } else if (isScopeRelative && isRefRelative) {
        joinedScope = "";
      } else {
        toRemove = joinedScope.match(/[^#/]+$/);
        if (toRemove) {
          joinedScope = joinedScope.slice(0, toRemove.index);
        }
      }
      var res = joinedScope + ref;
      res = res.replace(/##/, "#");
      return res;
    }
    function collectReferences(obj, results, scope, path) {
      results = results || [];
      scope = scope || [];
      path = path || [];
      if (typeof obj !== "object" || obj === null) {
        return results;
      }
      if (typeof obj.id === "string") {
        scope.push(obj.id);
      }
      if (typeof obj.$ref === "string" && typeof obj.__$refResolved === "undefined") {
        results.push({
          ref: mergeReference(scope, obj.$ref),
          key: "$ref",
          obj,
          path: path.slice(0)
        });
      }
      if (typeof obj.$schema === "string" && typeof obj.__$schemaResolved === "undefined") {
        results.push({
          ref: mergeReference(scope, obj.$schema),
          key: "$schema",
          obj,
          path: path.slice(0)
        });
      }
      var idx;
      if (Array.isArray(obj)) {
        idx = obj.length;
        while (idx--) {
          path.push(idx.toString());
          collectReferences(obj[idx], results, scope, path);
          path.pop();
        }
      } else {
        var keys = Object.keys(obj);
        idx = keys.length;
        while (idx--) {
          if (keys[idx].indexOf("__$") === 0) {
            continue;
          }
          path.push(keys[idx]);
          collectReferences(obj[keys[idx]], results, scope, path);
          path.pop();
        }
      }
      if (typeof obj.id === "string") {
        scope.pop();
      }
      return results;
    }
    var compileArrayOfSchemasLoop = function(mainReport, arr) {
      var idx = arr.length, compiledCount = 0;
      while (idx--) {
        var report = new Report(mainReport);
        var isValid = exports.compileSchema.call(this, report, arr[idx]);
        if (isValid) {
          compiledCount++;
        }
        mainReport.errors = mainReport.errors.concat(report.errors);
      }
      return compiledCount;
    };
    function findId(arr, id) {
      var idx = arr.length;
      while (idx--) {
        if (arr[idx].id === id) {
          return arr[idx];
        }
      }
      return null;
    }
    var compileArrayOfSchemas = function(report, arr) {
      var compiled = 0, lastLoopCompiled;
      do {
        var idx = report.errors.length;
        while (idx--) {
          if (report.errors[idx].code === "UNRESOLVABLE_REFERENCE") {
            report.errors.splice(idx, 1);
          }
        }
        lastLoopCompiled = compiled;
        compiled = compileArrayOfSchemasLoop.call(this, report, arr);
        idx = arr.length;
        while (idx--) {
          var sch = arr[idx];
          if (sch.__$missingReferences) {
            var idx2 = sch.__$missingReferences.length;
            while (idx2--) {
              var refObj = sch.__$missingReferences[idx2];
              var response = findId(arr, refObj.ref);
              if (response) {
                refObj.obj["__" + refObj.key + "Resolved"] = response;
                sch.__$missingReferences.splice(idx2, 1);
              }
            }
            if (sch.__$missingReferences.length === 0) {
              delete sch.__$missingReferences;
            }
          }
        }
      } while (compiled !== arr.length && compiled !== lastLoopCompiled);
      return report.isValid();
    };
    exports.compileSchema = function(report, schema) {
      report.commonErrorMessage = "SCHEMA_COMPILATION_FAILED";
      if (typeof schema === "string") {
        var loadedSchema = SchemaCache.getSchemaByUri.call(this, report, schema);
        if (!loadedSchema) {
          report.addError("SCHEMA_NOT_REACHABLE", [schema]);
          return false;
        }
        schema = loadedSchema;
      }
      if (Array.isArray(schema)) {
        return compileArrayOfSchemas.call(this, report, schema);
      }
      if (schema.__$compiled && schema.id && SchemaCache.checkCacheForUri.call(this, schema.id) === false) {
        schema.__$compiled = void 0;
      }
      if (schema.__$compiled) {
        return true;
      }
      if (schema.id && typeof schema.id === "string") {
        SchemaCache.cacheSchemaByUri.call(this, schema.id, schema);
      }
      var isRoot = false;
      if (!report.rootSchema) {
        report.rootSchema = schema;
        isRoot = true;
      }
      var isValidExceptReferences = report.isValid();
      delete schema.__$missingReferences;
      var refs = collectReferences.call(this, schema), idx = refs.length;
      while (idx--) {
        var refObj = refs[idx];
        var response = SchemaCache.getSchemaByUri.call(this, report, refObj.ref, schema);
        if (!response) {
          var schemaReader = this.getSchemaReader();
          if (schemaReader) {
            var s = schemaReader(refObj.ref);
            if (s) {
              s.id = refObj.ref;
              var subreport = new Report(report);
              if (!exports.compileSchema.call(this, subreport, s)) {
                report.errors = report.errors.concat(subreport.errors);
              } else {
                response = SchemaCache.getSchemaByUri.call(this, report, refObj.ref, schema);
              }
            }
          }
        }
        if (!response) {
          var hasNotValid = report.hasError("REMOTE_NOT_VALID", [refObj.ref]);
          var isAbsolute = Utils.isAbsoluteUri(refObj.ref);
          var isDownloaded = false;
          var ignoreUnresolvableRemotes = this.options.ignoreUnresolvableReferences === true;
          if (isAbsolute) {
            isDownloaded = SchemaCache.checkCacheForUri.call(this, refObj.ref);
          }
          if (hasNotValid) {
          } else if (ignoreUnresolvableRemotes && isAbsolute) {
          } else if (isDownloaded) {
          } else {
            Array.prototype.push.apply(report.path, refObj.path);
            report.addError("UNRESOLVABLE_REFERENCE", [refObj.ref]);
            report.path = report.path.slice(0, -refObj.path.length);
            if (isValidExceptReferences) {
              schema.__$missingReferences = schema.__$missingReferences || [];
              schema.__$missingReferences.push(refObj);
            }
          }
        }
        refObj.obj["__" + refObj.key + "Resolved"] = response;
      }
      var isValid = report.isValid();
      if (isValid) {
        schema.__$compiled = true;
      } else {
        if (schema.id && typeof schema.id === "string") {
          SchemaCache.removeFromCacheByUri.call(this, schema.id);
        }
      }
      if (isRoot) {
        report.rootSchema = void 0;
      }
      return isValid;
    };
  }
});

// node_modules/z-schema/src/SchemaValidation.js
var require_SchemaValidation = __commonJS({
  "node_modules/z-schema/src/SchemaValidation.js"(exports) {
    "use strict";
    var FormatValidators = require_FormatValidators();
    var JsonValidation = require_JsonValidation();
    var Report = require_Report();
    var Utils = require_Utils();
    var SchemaValidators = {
      $ref: function(report, schema) {
        if (typeof schema.$ref !== "string") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["$ref", "string"]);
        }
      },
      $schema: function(report, schema) {
        if (typeof schema.$schema !== "string") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["$schema", "string"]);
        }
      },
      multipleOf: function(report, schema) {
        if (typeof schema.multipleOf !== "number") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["multipleOf", "number"]);
        } else if (schema.multipleOf <= 0) {
          report.addError("KEYWORD_MUST_BE", ["multipleOf", "strictly greater than 0"]);
        }
      },
      maximum: function(report, schema) {
        if (typeof schema.maximum !== "number") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["maximum", "number"]);
        }
      },
      exclusiveMaximum: function(report, schema) {
        if (typeof schema.exclusiveMaximum !== "boolean") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["exclusiveMaximum", "boolean"]);
        } else if (schema.maximum === void 0) {
          report.addError("KEYWORD_DEPENDENCY", ["exclusiveMaximum", "maximum"]);
        }
      },
      minimum: function(report, schema) {
        if (typeof schema.minimum !== "number") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["minimum", "number"]);
        }
      },
      exclusiveMinimum: function(report, schema) {
        if (typeof schema.exclusiveMinimum !== "boolean") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["exclusiveMinimum", "boolean"]);
        } else if (schema.minimum === void 0) {
          report.addError("KEYWORD_DEPENDENCY", ["exclusiveMinimum", "minimum"]);
        }
      },
      maxLength: function(report, schema) {
        if (Utils.whatIs(schema.maxLength) !== "integer") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["maxLength", "integer"]);
        } else if (schema.maxLength < 0) {
          report.addError("KEYWORD_MUST_BE", ["maxLength", "greater than, or equal to 0"]);
        }
      },
      minLength: function(report, schema) {
        if (Utils.whatIs(schema.minLength) !== "integer") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["minLength", "integer"]);
        } else if (schema.minLength < 0) {
          report.addError("KEYWORD_MUST_BE", ["minLength", "greater than, or equal to 0"]);
        }
      },
      pattern: function(report, schema) {
        if (typeof schema.pattern !== "string") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["pattern", "string"]);
        } else {
          try {
            RegExp(schema.pattern);
          } catch (e) {
            report.addError("KEYWORD_PATTERN", ["pattern", schema.pattern]);
          }
        }
      },
      additionalItems: function(report, schema) {
        var type = Utils.whatIs(schema.additionalItems);
        if (type !== "boolean" && type !== "object") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["additionalItems", ["boolean", "object"]]);
        } else if (type === "object") {
          report.path.push("additionalItems");
          exports.validateSchema.call(this, report, schema.additionalItems);
          report.path.pop();
        }
      },
      items: function(report, schema) {
        var type = Utils.whatIs(schema.items);
        if (type === "object") {
          report.path.push("items");
          exports.validateSchema.call(this, report, schema.items);
          report.path.pop();
        } else if (type === "array") {
          var idx = schema.items.length;
          while (idx--) {
            report.path.push("items");
            report.path.push(idx.toString());
            exports.validateSchema.call(this, report, schema.items[idx]);
            report.path.pop();
            report.path.pop();
          }
        } else {
          report.addError("KEYWORD_TYPE_EXPECTED", ["items", ["array", "object"]]);
        }
        if (this.options.forceAdditional === true && schema.additionalItems === void 0 && Array.isArray(schema.items)) {
          report.addError("KEYWORD_UNDEFINED_STRICT", ["additionalItems"]);
        }
        if (this.options.assumeAdditional && schema.additionalItems === void 0 && Array.isArray(schema.items)) {
          schema.additionalItems = false;
        }
      },
      maxItems: function(report, schema) {
        if (typeof schema.maxItems !== "number") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["maxItems", "integer"]);
        } else if (schema.maxItems < 0) {
          report.addError("KEYWORD_MUST_BE", ["maxItems", "greater than, or equal to 0"]);
        }
      },
      minItems: function(report, schema) {
        if (Utils.whatIs(schema.minItems) !== "integer") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["minItems", "integer"]);
        } else if (schema.minItems < 0) {
          report.addError("KEYWORD_MUST_BE", ["minItems", "greater than, or equal to 0"]);
        }
      },
      uniqueItems: function(report, schema) {
        if (typeof schema.uniqueItems !== "boolean") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["uniqueItems", "boolean"]);
        }
      },
      maxProperties: function(report, schema) {
        if (Utils.whatIs(schema.maxProperties) !== "integer") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["maxProperties", "integer"]);
        } else if (schema.maxProperties < 0) {
          report.addError("KEYWORD_MUST_BE", ["maxProperties", "greater than, or equal to 0"]);
        }
      },
      minProperties: function(report, schema) {
        if (Utils.whatIs(schema.minProperties) !== "integer") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["minProperties", "integer"]);
        } else if (schema.minProperties < 0) {
          report.addError("KEYWORD_MUST_BE", ["minProperties", "greater than, or equal to 0"]);
        }
      },
      required: function(report, schema) {
        if (Utils.whatIs(schema.required) !== "array") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["required", "array"]);
        } else if (schema.required.length === 0) {
          report.addError("KEYWORD_MUST_BE", ["required", "an array with at least one element"]);
        } else {
          var idx = schema.required.length;
          while (idx--) {
            if (typeof schema.required[idx] !== "string") {
              report.addError("KEYWORD_VALUE_TYPE", ["required", "string"]);
            }
          }
          if (Utils.isUniqueArray(schema.required) === false) {
            report.addError("KEYWORD_MUST_BE", ["required", "an array with unique items"]);
          }
        }
      },
      additionalProperties: function(report, schema) {
        var type = Utils.whatIs(schema.additionalProperties);
        if (type !== "boolean" && type !== "object") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["additionalProperties", ["boolean", "object"]]);
        } else if (type === "object") {
          report.path.push("additionalProperties");
          exports.validateSchema.call(this, report, schema.additionalProperties);
          report.path.pop();
        }
      },
      properties: function(report, schema) {
        if (Utils.whatIs(schema.properties) !== "object") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["properties", "object"]);
          return;
        }
        var keys = Object.keys(schema.properties), idx = keys.length;
        while (idx--) {
          var key = keys[idx], val = schema.properties[key];
          report.path.push("properties");
          report.path.push(key);
          exports.validateSchema.call(this, report, val);
          report.path.pop();
          report.path.pop();
        }
        if (this.options.forceAdditional === true && schema.additionalProperties === void 0) {
          report.addError("KEYWORD_UNDEFINED_STRICT", ["additionalProperties"]);
        }
        if (this.options.assumeAdditional && schema.additionalProperties === void 0) {
          schema.additionalProperties = false;
        }
        if (this.options.forceProperties === true && keys.length === 0) {
          report.addError("CUSTOM_MODE_FORCE_PROPERTIES", ["properties"]);
        }
      },
      patternProperties: function(report, schema) {
        if (Utils.whatIs(schema.patternProperties) !== "object") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["patternProperties", "object"]);
          return;
        }
        var keys = Object.keys(schema.patternProperties), idx = keys.length;
        while (idx--) {
          var key = keys[idx], val = schema.patternProperties[key];
          try {
            RegExp(key);
          } catch (e) {
            report.addError("KEYWORD_PATTERN", ["patternProperties", key]);
          }
          report.path.push("patternProperties");
          report.path.push(key.toString());
          exports.validateSchema.call(this, report, val);
          report.path.pop();
          report.path.pop();
        }
        if (this.options.forceProperties === true && keys.length === 0) {
          report.addError("CUSTOM_MODE_FORCE_PROPERTIES", ["patternProperties"]);
        }
      },
      dependencies: function(report, schema) {
        if (Utils.whatIs(schema.dependencies) !== "object") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["dependencies", "object"]);
        } else {
          var keys = Object.keys(schema.dependencies), idx = keys.length;
          while (idx--) {
            var schemaKey = keys[idx], schemaDependency = schema.dependencies[schemaKey], type = Utils.whatIs(schemaDependency);
            if (type === "object") {
              report.path.push("dependencies");
              report.path.push(schemaKey);
              exports.validateSchema.call(this, report, schemaDependency);
              report.path.pop();
              report.path.pop();
            } else if (type === "array") {
              var idx2 = schemaDependency.length;
              if (idx2 === 0) {
                report.addError("KEYWORD_MUST_BE", ["dependencies", "not empty array"]);
              }
              while (idx2--) {
                if (typeof schemaDependency[idx2] !== "string") {
                  report.addError("KEYWORD_VALUE_TYPE", ["dependensices", "string"]);
                }
              }
              if (Utils.isUniqueArray(schemaDependency) === false) {
                report.addError("KEYWORD_MUST_BE", ["dependencies", "an array with unique items"]);
              }
            } else {
              report.addError("KEYWORD_VALUE_TYPE", ["dependencies", "object or array"]);
            }
          }
        }
      },
      enum: function(report, schema) {
        if (Array.isArray(schema.enum) === false) {
          report.addError("KEYWORD_TYPE_EXPECTED", ["enum", "array"]);
        } else if (schema.enum.length === 0) {
          report.addError("KEYWORD_MUST_BE", ["enum", "an array with at least one element"]);
        } else if (Utils.isUniqueArray(schema.enum) === false) {
          report.addError("KEYWORD_MUST_BE", ["enum", "an array with unique elements"]);
        }
      },
      type: function(report, schema) {
        var primitiveTypes = ["array", "boolean", "integer", "number", "null", "object", "string"], primitiveTypeStr = primitiveTypes.join(","), isArray = Array.isArray(schema.type);
        if (isArray) {
          var idx = schema.type.length;
          while (idx--) {
            if (primitiveTypes.indexOf(schema.type[idx]) === -1) {
              report.addError("KEYWORD_TYPE_EXPECTED", ["type", primitiveTypeStr]);
            }
          }
          if (Utils.isUniqueArray(schema.type) === false) {
            report.addError("KEYWORD_MUST_BE", ["type", "an object with unique properties"]);
          }
        } else if (typeof schema.type === "string") {
          if (primitiveTypes.indexOf(schema.type) === -1) {
            report.addError("KEYWORD_TYPE_EXPECTED", ["type", primitiveTypeStr]);
          }
        } else {
          report.addError("KEYWORD_TYPE_EXPECTED", ["type", ["string", "array"]]);
        }
        if (this.options.noEmptyStrings === true) {
          if (schema.type === "string" || isArray && schema.type.indexOf("string") !== -1) {
            if (schema.minLength === void 0 && schema.enum === void 0 && schema.format === void 0) {
              schema.minLength = 1;
            }
          }
        }
        if (this.options.noEmptyArrays === true) {
          if (schema.type === "array" || isArray && schema.type.indexOf("array") !== -1) {
            if (schema.minItems === void 0) {
              schema.minItems = 1;
            }
          }
        }
        if (this.options.forceProperties === true) {
          if (schema.type === "object" || isArray && schema.type.indexOf("object") !== -1) {
            if (schema.properties === void 0 && schema.patternProperties === void 0) {
              report.addError("KEYWORD_UNDEFINED_STRICT", ["properties"]);
            }
          }
        }
        if (this.options.forceItems === true) {
          if (schema.type === "array" || isArray && schema.type.indexOf("array") !== -1) {
            if (schema.items === void 0) {
              report.addError("KEYWORD_UNDEFINED_STRICT", ["items"]);
            }
          }
        }
        if (this.options.forceMinItems === true) {
          if (schema.type === "array" || isArray && schema.type.indexOf("array") !== -1) {
            if (schema.minItems === void 0) {
              report.addError("KEYWORD_UNDEFINED_STRICT", ["minItems"]);
            }
          }
        }
        if (this.options.forceMaxItems === true) {
          if (schema.type === "array" || isArray && schema.type.indexOf("array") !== -1) {
            if (schema.maxItems === void 0) {
              report.addError("KEYWORD_UNDEFINED_STRICT", ["maxItems"]);
            }
          }
        }
        if (this.options.forceMinLength === true) {
          if (schema.type === "string" || isArray && schema.type.indexOf("string") !== -1) {
            if (schema.minLength === void 0 && schema.format === void 0 && schema.enum === void 0 && schema.pattern === void 0) {
              report.addError("KEYWORD_UNDEFINED_STRICT", ["minLength"]);
            }
          }
        }
        if (this.options.forceMaxLength === true) {
          if (schema.type === "string" || isArray && schema.type.indexOf("string") !== -1) {
            if (schema.maxLength === void 0 && schema.format === void 0 && schema.enum === void 0 && schema.pattern === void 0) {
              report.addError("KEYWORD_UNDEFINED_STRICT", ["maxLength"]);
            }
          }
        }
      },
      allOf: function(report, schema) {
        if (Array.isArray(schema.allOf) === false) {
          report.addError("KEYWORD_TYPE_EXPECTED", ["allOf", "array"]);
        } else if (schema.allOf.length === 0) {
          report.addError("KEYWORD_MUST_BE", ["allOf", "an array with at least one element"]);
        } else {
          var idx = schema.allOf.length;
          while (idx--) {
            report.path.push("allOf");
            report.path.push(idx.toString());
            exports.validateSchema.call(this, report, schema.allOf[idx]);
            report.path.pop();
            report.path.pop();
          }
        }
      },
      anyOf: function(report, schema) {
        if (Array.isArray(schema.anyOf) === false) {
          report.addError("KEYWORD_TYPE_EXPECTED", ["anyOf", "array"]);
        } else if (schema.anyOf.length === 0) {
          report.addError("KEYWORD_MUST_BE", ["anyOf", "an array with at least one element"]);
        } else {
          var idx = schema.anyOf.length;
          while (idx--) {
            report.path.push("anyOf");
            report.path.push(idx.toString());
            exports.validateSchema.call(this, report, schema.anyOf[idx]);
            report.path.pop();
            report.path.pop();
          }
        }
      },
      oneOf: function(report, schema) {
        if (Array.isArray(schema.oneOf) === false) {
          report.addError("KEYWORD_TYPE_EXPECTED", ["oneOf", "array"]);
        } else if (schema.oneOf.length === 0) {
          report.addError("KEYWORD_MUST_BE", ["oneOf", "an array with at least one element"]);
        } else {
          var idx = schema.oneOf.length;
          while (idx--) {
            report.path.push("oneOf");
            report.path.push(idx.toString());
            exports.validateSchema.call(this, report, schema.oneOf[idx]);
            report.path.pop();
            report.path.pop();
          }
        }
      },
      not: function(report, schema) {
        if (Utils.whatIs(schema.not) !== "object") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["not", "object"]);
        } else {
          report.path.push("not");
          exports.validateSchema.call(this, report, schema.not);
          report.path.pop();
        }
      },
      definitions: function(report, schema) {
        if (Utils.whatIs(schema.definitions) !== "object") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["definitions", "object"]);
        } else {
          var keys = Object.keys(schema.definitions), idx = keys.length;
          while (idx--) {
            var key = keys[idx], val = schema.definitions[key];
            report.path.push("definitions");
            report.path.push(key);
            exports.validateSchema.call(this, report, val);
            report.path.pop();
            report.path.pop();
          }
        }
      },
      format: function(report, schema) {
        if (typeof schema.format !== "string") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["format", "string"]);
        } else {
          if (FormatValidators[schema.format] === void 0 && this.options.ignoreUnknownFormats !== true) {
            report.addError("UNKNOWN_FORMAT", [schema.format]);
          }
        }
      },
      id: function(report, schema) {
        if (typeof schema.id !== "string") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["id", "string"]);
        }
      },
      title: function(report, schema) {
        if (typeof schema.title !== "string") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["title", "string"]);
        }
      },
      description: function(report, schema) {
        if (typeof schema.description !== "string") {
          report.addError("KEYWORD_TYPE_EXPECTED", ["description", "string"]);
        }
      },
      "default": function() {
      }
    };
    var validateArrayOfSchemas = function(report, arr) {
      var idx = arr.length;
      while (idx--) {
        exports.validateSchema.call(this, report, arr[idx]);
      }
      return report.isValid();
    };
    exports.validateSchema = function(report, schema) {
      report.commonErrorMessage = "SCHEMA_VALIDATION_FAILED";
      if (Array.isArray(schema)) {
        return validateArrayOfSchemas.call(this, report, schema);
      }
      if (schema.__$validated) {
        return true;
      }
      var hasParentSchema = schema.$schema && schema.id !== schema.$schema;
      if (hasParentSchema) {
        if (schema.__$schemaResolved && schema.__$schemaResolved !== schema) {
          var subReport = new Report(report);
          var valid = JsonValidation.validate.call(this, subReport, schema.__$schemaResolved, schema);
          if (valid === false) {
            report.addError("PARENT_SCHEMA_VALIDATION_FAILED", null, subReport);
          }
        } else {
          if (this.options.ignoreUnresolvableReferences !== true) {
            report.addError("REF_UNRESOLVED", [schema.$schema]);
          }
        }
      }
      if (this.options.noTypeless === true) {
        if (schema.type !== void 0) {
          var schemas = [];
          if (Array.isArray(schema.anyOf)) {
            schemas = schemas.concat(schema.anyOf);
          }
          if (Array.isArray(schema.oneOf)) {
            schemas = schemas.concat(schema.oneOf);
          }
          if (Array.isArray(schema.allOf)) {
            schemas = schemas.concat(schema.allOf);
          }
          schemas.forEach(function(sch) {
            if (!sch.type) {
              sch.type = schema.type;
            }
          });
        }
        if (schema.enum === void 0 && schema.type === void 0 && schema.anyOf === void 0 && schema.oneOf === void 0 && schema.not === void 0 && schema.$ref === void 0) {
          report.addError("KEYWORD_UNDEFINED_STRICT", ["type"]);
        }
      }
      var keys = Object.keys(schema), idx = keys.length;
      while (idx--) {
        var key = keys[idx];
        if (key.indexOf("__") === 0) {
          continue;
        }
        if (SchemaValidators[key] !== void 0) {
          SchemaValidators[key].call(this, report, schema);
        } else if (!hasParentSchema) {
          if (this.options.noExtraKeywords === true) {
            report.addError("KEYWORD_UNEXPECTED", [key]);
          }
        }
      }
      if (this.options.pedanticCheck === true) {
        if (schema.enum) {
          var tmpSchema = Utils.clone(schema);
          delete tmpSchema.enum;
          delete tmpSchema.default;
          report.path.push("enum");
          idx = schema.enum.length;
          while (idx--) {
            report.path.push(idx.toString());
            JsonValidation.validate.call(this, report, tmpSchema, schema.enum[idx]);
            report.path.pop();
          }
          report.path.pop();
        }
        if (schema.default) {
          report.path.push("default");
          JsonValidation.validate.call(this, report, schema, schema.default);
          report.path.pop();
        }
      }
      var isValid = report.isValid();
      if (isValid) {
        schema.__$validated = true;
      }
      return isValid;
    };
  }
});

// node_modules/z-schema/src/SchemaCache.js
var require_SchemaCache = __commonJS({
  "node_modules/z-schema/src/SchemaCache.js"(exports) {
    "use strict";
    var isequal = require_lodash2();
    var Report = require_Report();
    var SchemaCompilation = require_SchemaCompilation();
    var SchemaValidation = require_SchemaValidation();
    var Utils = require_Utils();
    function decodeJSONPointer(str) {
      return decodeURIComponent(str).replace(/~[0-1]/g, function(x) {
        return x === "~1" ? "/" : "~";
      });
    }
    function getRemotePath(uri) {
      var io = uri.indexOf("#");
      return io === -1 ? uri : uri.slice(0, io);
    }
    function getQueryPath(uri) {
      var io = uri.indexOf("#");
      var res = io === -1 ? void 0 : uri.slice(io + 1);
      return res;
    }
    function findId(schema, id) {
      if (typeof schema !== "object" || schema === null) {
        return;
      }
      if (!id) {
        return schema;
      }
      if (schema.id) {
        if (schema.id === id || schema.id[0] === "#" && schema.id.substring(1) === id) {
          return schema;
        }
      }
      var idx, result;
      if (Array.isArray(schema)) {
        idx = schema.length;
        while (idx--) {
          result = findId(schema[idx], id);
          if (result) {
            return result;
          }
        }
      } else {
        var keys = Object.keys(schema);
        idx = keys.length;
        while (idx--) {
          var k = keys[idx];
          if (k.indexOf("__$") === 0) {
            continue;
          }
          result = findId(schema[k], id);
          if (result) {
            return result;
          }
        }
      }
    }
    exports.cacheSchemaByUri = function(uri, schema) {
      var remotePath = getRemotePath(uri);
      if (remotePath) {
        this.cache[remotePath] = schema;
      }
    };
    exports.removeFromCacheByUri = function(uri) {
      var remotePath = getRemotePath(uri);
      if (remotePath) {
        delete this.cache[remotePath];
      }
    };
    exports.checkCacheForUri = function(uri) {
      var remotePath = getRemotePath(uri);
      return remotePath ? this.cache[remotePath] != null : false;
    };
    exports.getSchema = function(report, schema) {
      if (typeof schema === "object") {
        schema = exports.getSchemaByReference.call(this, report, schema);
      }
      if (typeof schema === "string") {
        schema = exports.getSchemaByUri.call(this, report, schema);
      }
      return schema;
    };
    exports.getSchemaByReference = function(report, key) {
      var i = this.referenceCache.length;
      while (i--) {
        if (isequal(this.referenceCache[i][0], key)) {
          return this.referenceCache[i][1];
        }
      }
      var schema = Utils.cloneDeep(key);
      this.referenceCache.push([key, schema]);
      return schema;
    };
    exports.getSchemaByUri = function(report, uri, root) {
      var remotePath = getRemotePath(uri), queryPath = getQueryPath(uri), result = remotePath ? this.cache[remotePath] : root;
      if (result && remotePath) {
        var compileRemote = result !== root;
        if (compileRemote) {
          report.path.push(remotePath);
          var remoteReport;
          var anscestorReport = report.getAncestor(result.id);
          if (anscestorReport) {
            remoteReport = anscestorReport;
          } else {
            remoteReport = new Report(report);
            if (SchemaCompilation.compileSchema.call(this, remoteReport, result)) {
              var savedOptions = this.options;
              try {
                this.options = result.__$validationOptions || this.options;
                SchemaValidation.validateSchema.call(this, remoteReport, result);
              } finally {
                this.options = savedOptions;
              }
            }
          }
          var remoteReportIsValid = remoteReport.isValid();
          if (!remoteReportIsValid) {
            report.addError("REMOTE_NOT_VALID", [uri], remoteReport);
          }
          report.path.pop();
          if (!remoteReportIsValid) {
            return void 0;
          }
        }
      }
      if (result && queryPath) {
        var parts = queryPath.split("/");
        for (var idx = 0, lim = parts.length; result && idx < lim; idx++) {
          var key = decodeJSONPointer(parts[idx]);
          if (idx === 0) {
            result = findId(result, key);
          } else {
            result = result[key];
          }
        }
      }
      return result;
    };
    exports.getRemotePath = getRemotePath;
  }
});

// node_modules/z-schema/src/schemas/schema.json
var require_schema = __commonJS({
  "node_modules/z-schema/src/schemas/schema.json"(exports, module) {
    module.exports = {
      id: "http://json-schema.org/draft-04/schema#",
      $schema: "http://json-schema.org/draft-04/schema#",
      description: "Core schema meta-schema",
      definitions: {
        schemaArray: {
          type: "array",
          minItems: 1,
          items: { $ref: "#" }
        },
        positiveInteger: {
          type: "integer",
          minimum: 0
        },
        positiveIntegerDefault0: {
          allOf: [{ $ref: "#/definitions/positiveInteger" }, { default: 0 }]
        },
        simpleTypes: {
          enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
        },
        stringArray: {
          type: "array",
          items: { type: "string" },
          minItems: 1,
          uniqueItems: true
        }
      },
      type: "object",
      properties: {
        id: {
          type: "string",
          format: "uri"
        },
        $schema: {
          type: "string",
          format: "uri"
        },
        title: {
          type: "string"
        },
        description: {
          type: "string"
        },
        default: {},
        multipleOf: {
          type: "number",
          minimum: 0,
          exclusiveMinimum: true
        },
        maximum: {
          type: "number"
        },
        exclusiveMaximum: {
          type: "boolean",
          default: false
        },
        minimum: {
          type: "number"
        },
        exclusiveMinimum: {
          type: "boolean",
          default: false
        },
        maxLength: { $ref: "#/definitions/positiveInteger" },
        minLength: { $ref: "#/definitions/positiveIntegerDefault0" },
        pattern: {
          type: "string",
          format: "regex"
        },
        additionalItems: {
          anyOf: [
            { type: "boolean" },
            { $ref: "#" }
          ],
          default: {}
        },
        items: {
          anyOf: [
            { $ref: "#" },
            { $ref: "#/definitions/schemaArray" }
          ],
          default: {}
        },
        maxItems: { $ref: "#/definitions/positiveInteger" },
        minItems: { $ref: "#/definitions/positiveIntegerDefault0" },
        uniqueItems: {
          type: "boolean",
          default: false
        },
        maxProperties: { $ref: "#/definitions/positiveInteger" },
        minProperties: { $ref: "#/definitions/positiveIntegerDefault0" },
        required: { $ref: "#/definitions/stringArray" },
        additionalProperties: {
          anyOf: [
            { type: "boolean" },
            { $ref: "#" }
          ],
          default: {}
        },
        definitions: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        properties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        patternProperties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        dependencies: {
          type: "object",
          additionalProperties: {
            anyOf: [
              { $ref: "#" },
              { $ref: "#/definitions/stringArray" }
            ]
          }
        },
        enum: {
          type: "array",
          minItems: 1,
          uniqueItems: true
        },
        type: {
          anyOf: [
            { $ref: "#/definitions/simpleTypes" },
            {
              type: "array",
              items: { $ref: "#/definitions/simpleTypes" },
              minItems: 1,
              uniqueItems: true
            }
          ]
        },
        format: { type: "string" },
        allOf: { $ref: "#/definitions/schemaArray" },
        anyOf: { $ref: "#/definitions/schemaArray" },
        oneOf: { $ref: "#/definitions/schemaArray" },
        not: { $ref: "#" }
      },
      dependencies: {
        exclusiveMaximum: ["maximum"],
        exclusiveMinimum: ["minimum"]
      },
      default: {}
    };
  }
});

// node_modules/z-schema/src/schemas/hyper-schema.json
var require_hyper_schema = __commonJS({
  "node_modules/z-schema/src/schemas/hyper-schema.json"(exports, module) {
    module.exports = {
      $schema: "http://json-schema.org/draft-04/hyper-schema#",
      id: "http://json-schema.org/draft-04/hyper-schema#",
      title: "JSON Hyper-Schema",
      allOf: [
        {
          $ref: "http://json-schema.org/draft-04/schema#"
        }
      ],
      properties: {
        additionalItems: {
          anyOf: [
            {
              type: "boolean"
            },
            {
              $ref: "#"
            }
          ]
        },
        additionalProperties: {
          anyOf: [
            {
              type: "boolean"
            },
            {
              $ref: "#"
            }
          ]
        },
        dependencies: {
          additionalProperties: {
            anyOf: [
              {
                $ref: "#"
              },
              {
                type: "array"
              }
            ]
          }
        },
        items: {
          anyOf: [
            {
              $ref: "#"
            },
            {
              $ref: "#/definitions/schemaArray"
            }
          ]
        },
        definitions: {
          additionalProperties: {
            $ref: "#"
          }
        },
        patternProperties: {
          additionalProperties: {
            $ref: "#"
          }
        },
        properties: {
          additionalProperties: {
            $ref: "#"
          }
        },
        allOf: {
          $ref: "#/definitions/schemaArray"
        },
        anyOf: {
          $ref: "#/definitions/schemaArray"
        },
        oneOf: {
          $ref: "#/definitions/schemaArray"
        },
        not: {
          $ref: "#"
        },
        links: {
          type: "array",
          items: {
            $ref: "#/definitions/linkDescription"
          }
        },
        fragmentResolution: {
          type: "string"
        },
        media: {
          type: "object",
          properties: {
            type: {
              description: "A media type, as described in RFC 2046",
              type: "string"
            },
            binaryEncoding: {
              description: "A content encoding scheme, as described in RFC 2045",
              type: "string"
            }
          }
        },
        pathStart: {
          description: "Instances' URIs must start with this value for this schema to apply to them",
          type: "string",
          format: "uri"
        }
      },
      definitions: {
        schemaArray: {
          type: "array",
          items: {
            $ref: "#"
          }
        },
        linkDescription: {
          title: "Link Description Object",
          type: "object",
          required: ["href", "rel"],
          properties: {
            href: {
              description: "a URI template, as defined by RFC 6570, with the addition of the $, ( and ) characters for pre-processing",
              type: "string"
            },
            rel: {
              description: "relation to the target resource of the link",
              type: "string"
            },
            title: {
              description: "a title for the link",
              type: "string"
            },
            targetSchema: {
              description: "JSON Schema describing the link target",
              $ref: "#"
            },
            mediaType: {
              description: "media type (as defined by RFC 2046) describing the link target",
              type: "string"
            },
            method: {
              description: 'method for requesting the target of the link (e.g. for HTTP this might be "GET" or "DELETE")',
              type: "string"
            },
            encType: {
              description: "The media type in which to submit data along with the request",
              type: "string",
              default: "application/json"
            },
            schema: {
              description: "Schema describing the data to submit along with the request",
              $ref: "#"
            }
          }
        }
      }
    };
  }
});

// node_modules/z-schema/src/ZSchema.js
var require_ZSchema = __commonJS({
  "node_modules/z-schema/src/ZSchema.js"(exports, module) {
    "use strict";
    require_Polyfills();
    var get = require_lodash();
    var Report = require_Report();
    var FormatValidators = require_FormatValidators();
    var JsonValidation = require_JsonValidation();
    var SchemaCache = require_SchemaCache();
    var SchemaCompilation = require_SchemaCompilation();
    var SchemaValidation = require_SchemaValidation();
    var Utils = require_Utils();
    var Draft4Schema = require_schema();
    var Draft4HyperSchema = require_hyper_schema();
    var defaultOptions = {
      // default timeout for all async tasks
      asyncTimeout: 2e3,
      // force additionalProperties and additionalItems to be defined on "object" and "array" types
      forceAdditional: false,
      // assume additionalProperties and additionalItems are defined as "false" where appropriate
      assumeAdditional: false,
      // do case insensitive comparison for enums
      enumCaseInsensitiveComparison: false,
      // force items to be defined on "array" types
      forceItems: false,
      // force minItems to be defined on "array" types
      forceMinItems: false,
      // force maxItems to be defined on "array" types
      forceMaxItems: false,
      // force minLength to be defined on "string" types
      forceMinLength: false,
      // force maxLength to be defined on "string" types
      forceMaxLength: false,
      // force properties or patternProperties to be defined on "object" types
      forceProperties: false,
      // ignore references that cannot be resolved (remote schemas) // TODO: make sure this is only for remote schemas, not local ones
      ignoreUnresolvableReferences: false,
      // disallow usage of keywords that this validator can't handle
      noExtraKeywords: false,
      // disallow usage of schema's without "type" defined
      noTypeless: false,
      // disallow zero length strings in validated objects
      noEmptyStrings: false,
      // disallow zero length arrays in validated objects
      noEmptyArrays: false,
      // forces "uri" format to be in fully rfc3986 compliant
      strictUris: false,
      // turn on some of the above
      strictMode: false,
      // report error paths as an array of path segments to get to the offending node
      reportPathAsArray: false,
      // stop validation as soon as an error is found
      breakOnFirstError: false,
      // check if schema follows best practices and common sense
      pedanticCheck: false,
      // ignore unknown formats (do not report them as an error)
      ignoreUnknownFormats: false,
      // function to be called on every schema
      customValidator: null
    };
    function normalizeOptions(options) {
      var normalized;
      if (typeof options === "object") {
        var keys = Object.keys(options), idx = keys.length, key;
        while (idx--) {
          key = keys[idx];
          if (defaultOptions[key] === void 0) {
            throw new Error("Unexpected option passed to constructor: " + key);
          }
        }
        keys = Object.keys(defaultOptions);
        idx = keys.length;
        while (idx--) {
          key = keys[idx];
          if (options[key] === void 0) {
            options[key] = Utils.clone(defaultOptions[key]);
          }
        }
        normalized = options;
      } else {
        normalized = Utils.clone(defaultOptions);
      }
      if (normalized.strictMode === true) {
        normalized.forceAdditional = true;
        normalized.forceItems = true;
        normalized.forceMaxLength = true;
        normalized.forceProperties = true;
        normalized.noExtraKeywords = true;
        normalized.noTypeless = true;
        normalized.noEmptyStrings = true;
        normalized.noEmptyArrays = true;
      }
      return normalized;
    }
    function ZSchema2(options) {
      this.cache = {};
      this.referenceCache = [];
      this.validateOptions = {};
      this.options = normalizeOptions(options);
      var metaschemaOptions = normalizeOptions({});
      this.setRemoteReference("http://json-schema.org/draft-04/schema", Draft4Schema, metaschemaOptions);
      this.setRemoteReference("http://json-schema.org/draft-04/hyper-schema", Draft4HyperSchema, metaschemaOptions);
    }
    ZSchema2.prototype.compileSchema = function(schema) {
      var report = new Report(this.options);
      schema = SchemaCache.getSchema.call(this, report, schema);
      SchemaCompilation.compileSchema.call(this, report, schema);
      this.lastReport = report;
      return report.isValid();
    };
    ZSchema2.prototype.validateSchema = function(schema) {
      if (Array.isArray(schema) && schema.length === 0) {
        throw new Error(".validateSchema was called with an empty array");
      }
      var report = new Report(this.options);
      schema = SchemaCache.getSchema.call(this, report, schema);
      var compiled = SchemaCompilation.compileSchema.call(this, report, schema);
      if (compiled) {
        SchemaValidation.validateSchema.call(this, report, schema);
      }
      this.lastReport = report;
      return report.isValid();
    };
    ZSchema2.prototype.validate = function(json, schema, options, callback) {
      if (Utils.whatIs(options) === "function") {
        callback = options;
        options = {};
      }
      if (!options) {
        options = {};
      }
      this.validateOptions = options;
      var whatIs = Utils.whatIs(schema);
      if (whatIs !== "string" && whatIs !== "object") {
        var e = new Error("Invalid .validate call - schema must be a string or object but " + whatIs + " was passed!");
        if (callback) {
          process.nextTick(function() {
            callback(e, false);
          });
          return;
        }
        throw e;
      }
      var foundError = false;
      var report = new Report(this.options);
      report.json = json;
      if (typeof schema === "string") {
        var schemaName = schema;
        schema = SchemaCache.getSchema.call(this, report, schemaName);
        if (!schema) {
          throw new Error("Schema with id '" + schemaName + "' wasn't found in the validator cache!");
        }
      } else {
        schema = SchemaCache.getSchema.call(this, report, schema);
      }
      var compiled = false;
      if (!foundError) {
        compiled = SchemaCompilation.compileSchema.call(this, report, schema);
      }
      if (!compiled) {
        this.lastReport = report;
        foundError = true;
      }
      var validated = false;
      if (!foundError) {
        validated = SchemaValidation.validateSchema.call(this, report, schema);
      }
      if (!validated) {
        this.lastReport = report;
        foundError = true;
      }
      if (options.schemaPath) {
        report.rootSchema = schema;
        schema = get(schema, options.schemaPath);
        if (!schema) {
          throw new Error("Schema path '" + options.schemaPath + "' wasn't found in the schema!");
        }
      }
      if (!foundError) {
        JsonValidation.validate.call(this, report, schema, json);
      }
      if (callback) {
        report.processAsyncTasks(this.options.asyncTimeout, callback);
        return;
      } else if (report.asyncTasks.length > 0) {
        throw new Error("This validation has async tasks and cannot be done in sync mode, please provide callback argument.");
      }
      this.lastReport = report;
      return report.isValid();
    };
    ZSchema2.prototype.getLastError = function() {
      if (this.lastReport.errors.length === 0) {
        return null;
      }
      var e = new Error();
      e.name = "z-schema validation error";
      e.message = this.lastReport.commonErrorMessage;
      e.details = this.lastReport.errors;
      return e;
    };
    ZSchema2.prototype.getLastErrors = function() {
      return this.lastReport && this.lastReport.errors.length > 0 ? this.lastReport.errors : null;
    };
    ZSchema2.prototype.getMissingReferences = function(arr) {
      arr = arr || this.lastReport.errors;
      var res = [], idx = arr.length;
      while (idx--) {
        var error = arr[idx];
        if (error.code === "UNRESOLVABLE_REFERENCE") {
          var reference = error.params[0];
          if (res.indexOf(reference) === -1) {
            res.push(reference);
          }
        }
        if (error.inner) {
          res = res.concat(this.getMissingReferences(error.inner));
        }
      }
      return res;
    };
    ZSchema2.prototype.getMissingRemoteReferences = function() {
      var missingReferences = this.getMissingReferences(), missingRemoteReferences = [], idx = missingReferences.length;
      while (idx--) {
        var remoteReference = SchemaCache.getRemotePath(missingReferences[idx]);
        if (remoteReference && missingRemoteReferences.indexOf(remoteReference) === -1) {
          missingRemoteReferences.push(remoteReference);
        }
      }
      return missingRemoteReferences;
    };
    ZSchema2.prototype.setRemoteReference = function(uri, schema, validationOptions) {
      if (typeof schema === "string") {
        schema = JSON.parse(schema);
      } else {
        schema = Utils.cloneDeep(schema);
      }
      if (validationOptions) {
        schema.__$validationOptions = normalizeOptions(validationOptions);
      }
      SchemaCache.cacheSchemaByUri.call(this, uri, schema);
    };
    ZSchema2.prototype.getResolvedSchema = function(schema) {
      var report = new Report(this.options);
      schema = SchemaCache.getSchema.call(this, report, schema);
      schema = Utils.cloneDeep(schema);
      var visited = [];
      var cleanup = function(schema2) {
        var key, typeOf = Utils.whatIs(schema2);
        if (typeOf !== "object" && typeOf !== "array") {
          return;
        }
        if (schema2.___$visited) {
          return;
        }
        schema2.___$visited = true;
        visited.push(schema2);
        if (schema2.$ref && schema2.__$refResolved) {
          var from = schema2.__$refResolved;
          var to = schema2;
          delete schema2.$ref;
          delete schema2.__$refResolved;
          for (key in from) {
            if (from.hasOwnProperty(key)) {
              to[key] = from[key];
            }
          }
        }
        for (key in schema2) {
          if (schema2.hasOwnProperty(key)) {
            if (key.indexOf("__$") === 0) {
              delete schema2[key];
            } else {
              cleanup(schema2[key]);
            }
          }
        }
      };
      cleanup(schema);
      visited.forEach(function(s) {
        delete s.___$visited;
      });
      this.lastReport = report;
      if (report.isValid()) {
        return schema;
      } else {
        throw this.getLastError();
      }
    };
    ZSchema2.prototype.setSchemaReader = function(schemaReader) {
      return ZSchema2.setSchemaReader(schemaReader);
    };
    ZSchema2.prototype.getSchemaReader = function() {
      return ZSchema2.schemaReader;
    };
    ZSchema2.schemaReader = void 0;
    ZSchema2.setSchemaReader = function(schemaReader) {
      ZSchema2.schemaReader = schemaReader;
    };
    ZSchema2.registerFormat = function(formatName, validatorFunction) {
      FormatValidators[formatName] = validatorFunction;
    };
    ZSchema2.unregisterFormat = function(formatName) {
      delete FormatValidators[formatName];
    };
    ZSchema2.getRegisteredFormats = function() {
      return Object.keys(FormatValidators);
    };
    ZSchema2.getDefaultOptions = function() {
      return Utils.cloneDeep(defaultOptions);
    };
    ZSchema2.schemaSymbol = Utils.schemaSymbol;
    ZSchema2.jsonSymbol = Utils.jsonSymbol;
    module.exports = ZSchema2;
  }
});

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
    }
    module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/toPrimitive.js
var require_toPrimitive = __commonJS({
  "node_modules/@babel/runtime/helpers/toPrimitive.js"(exports, module) {
    var _typeof = require_typeof()["default"];
    function toPrimitive(t, r) {
      if ("object" != _typeof(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/toPropertyKey.js
var require_toPropertyKey = __commonJS({
  "node_modules/@babel/runtime/helpers/toPropertyKey.js"(exports, module) {
    var _typeof = require_typeof()["default"];
    var toPrimitive = require_toPrimitive();
    function toPropertyKey(t) {
      var i = toPrimitive(t, "string");
      return "symbol" == _typeof(i) ? i : i + "";
    }
    module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/@babel/runtime/helpers/defineProperty.js"(exports, module) {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperty(e, r, t) {
      return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = t, e;
    }
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/classCallCheck.js
var require_classCallCheck = __commonJS({
  "node_modules/@babel/runtime/helpers/classCallCheck.js"(exports, module) {
    function _classCallCheck(a, n) {
      if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
    }
    module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/createClass.js
var require_createClass = __commonJS({
  "node_modules/@babel/runtime/helpers/createClass.js"(exports, module) {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperties(e, r) {
      for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
      }
    }
    function _createClass(e, r, t) {
      return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: false
      }), e;
    }
    module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/arrayLikeToArray.js
var require_arrayLikeToArray = __commonJS({
  "node_modules/@babel/runtime/helpers/arrayLikeToArray.js"(exports, module) {
    function _arrayLikeToArray(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/arrayWithoutHoles.js
var require_arrayWithoutHoles = __commonJS({
  "node_modules/@babel/runtime/helpers/arrayWithoutHoles.js"(exports, module) {
    var arrayLikeToArray = require_arrayLikeToArray();
    function _arrayWithoutHoles(r) {
      if (Array.isArray(r)) return arrayLikeToArray(r);
    }
    module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/iterableToArray.js
var require_iterableToArray = __commonJS({
  "node_modules/@babel/runtime/helpers/iterableToArray.js"(exports, module) {
    function _iterableToArray(r) {
      if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
    }
    module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
var require_unsupportedIterableToArray = __commonJS({
  "node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"(exports, module) {
    var arrayLikeToArray = require_arrayLikeToArray();
    function _unsupportedIterableToArray(r, a) {
      if (r) {
        if ("string" == typeof r) return arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
      }
    }
    module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/nonIterableSpread.js
var require_nonIterableSpread = __commonJS({
  "node_modules/@babel/runtime/helpers/nonIterableSpread.js"(exports, module) {
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/toConsumableArray.js
var require_toConsumableArray = __commonJS({
  "node_modules/@babel/runtime/helpers/toConsumableArray.js"(exports, module) {
    var arrayWithoutHoles = require_arrayWithoutHoles();
    var iterableToArray = require_iterableToArray();
    var unsupportedIterableToArray = require_unsupportedIterableToArray();
    var nonIterableSpread = require_nonIterableSpread();
    function _toConsumableArray(r) {
      return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
    }
    module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/jexl/dist/evaluator/handlers.js
var require_handlers = __commonJS({
  "node_modules/jexl/dist/evaluator/handlers.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _toConsumableArray2 = _interopRequireDefault(require_toConsumableArray());
    var poolNames = {
      functions: "Jexl Function",
      transforms: "Transform"
    };
    exports.ArrayLiteral = function(ast) {
      return this.evalArray(ast.value);
    };
    exports.BinaryExpression = function(ast) {
      var _this = this;
      var grammarOp = this._grammar.elements[ast.operator];
      if (grammarOp.evalOnDemand) {
        var wrap = function wrap2(subAst) {
          return {
            eval: function _eval() {
              return _this.eval(subAst);
            }
          };
        };
        return grammarOp.evalOnDemand(wrap(ast.left), wrap(ast.right));
      }
      return this.Promise.all([this.eval(ast.left), this.eval(ast.right)]).then(function(arr) {
        return grammarOp.eval(arr[0], arr[1]);
      });
    };
    exports.ConditionalExpression = function(ast) {
      var _this2 = this;
      return this.eval(ast.test).then(function(res) {
        if (res) {
          if (ast.consequent) {
            return _this2.eval(ast.consequent);
          }
          return res;
        }
        return _this2.eval(ast.alternate);
      });
    };
    exports.FilterExpression = function(ast) {
      var _this3 = this;
      return this.eval(ast.subject).then(function(subject) {
        if (ast.relative) {
          return _this3._filterRelative(subject, ast.expr);
        }
        return _this3._filterStatic(subject, ast.expr);
      });
    };
    exports.Identifier = function(ast) {
      if (!ast.from) {
        return ast.relative ? this._relContext[ast.value] : this._context[ast.value];
      }
      return this.eval(ast.from).then(function(context) {
        if (context === void 0 || context === null) {
          return void 0;
        }
        if (Array.isArray(context)) {
          context = context[0];
        }
        return context[ast.value];
      });
    };
    exports.Literal = function(ast) {
      return ast.value;
    };
    exports.ObjectLiteral = function(ast) {
      return this.evalMap(ast.value);
    };
    exports.FunctionCall = function(ast) {
      var poolName = poolNames[ast.pool];
      if (!poolName) {
        throw new Error("Corrupt AST: Pool '".concat(ast.pool, "' not found"));
      }
      var pool = this._grammar[ast.pool];
      var func = pool[ast.name];
      if (!func) {
        throw new Error("".concat(poolName, " ").concat(ast.name, " is not defined."));
      }
      return this.evalArray(ast.args || []).then(function(args) {
        return func.apply(void 0, (0, _toConsumableArray2.default)(args));
      });
    };
    exports.UnaryExpression = function(ast) {
      var _this4 = this;
      return this.eval(ast.right).then(function(right) {
        return _this4._grammar.elements[ast.operator].eval(right);
      });
    };
  }
});

// node_modules/jexl/dist/evaluator/Evaluator.js
var require_Evaluator = __commonJS({
  "node_modules/jexl/dist/evaluator/Evaluator.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var handlers = require_handlers();
    var Evaluator = function() {
      function Evaluator2(grammar, context, relativeContext) {
        var promise = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Promise;
        (0, _classCallCheck2.default)(this, Evaluator2);
        this._grammar = grammar;
        this._context = context || {};
        this._relContext = relativeContext || this._context;
        this.Promise = promise;
      }
      (0, _createClass2.default)(Evaluator2, [{
        key: "eval",
        value: function _eval(ast) {
          var _this = this;
          return this.Promise.resolve().then(function() {
            return handlers[ast.type].call(_this, ast);
          });
        }
        /**
         * Simultaneously evaluates each expression within an array, and delivers the
         * response as an array with the resulting values at the same indexes as their
         * originating expressions.
         * @param {Array<string>} arr An array of expression strings to be evaluated
         * @returns {Promise<Array<{}>>} resolves with the result array
         */
      }, {
        key: "evalArray",
        value: function evalArray(arr) {
          var _this2 = this;
          return this.Promise.all(arr.map(function(elem) {
            return _this2.eval(elem);
          }));
        }
        /**
         * Simultaneously evaluates each expression within a map, and delivers the
         * response as a map with the same keys, but with the evaluated result for each
         * as their value.
         * @param {{}} map A map of expression names to expression trees to be
         *      evaluated
         * @returns {Promise<{}>} resolves with the result map.
         */
      }, {
        key: "evalMap",
        value: function evalMap(map2) {
          var _this3 = this;
          var keys = Object.keys(map2);
          var result = {};
          var asts = keys.map(function(key) {
            return _this3.eval(map2[key]);
          });
          return this.Promise.all(asts).then(function(vals) {
            vals.forEach(function(val, idx) {
              result[keys[idx]] = val;
            });
            return result;
          });
        }
        /**
         * Applies a filter expression with relative identifier elements to a subject.
         * The intent is for the subject to be an array of subjects that will be
         * individually used as the relative context against the provided expression
         * tree. Only the elements whose expressions result in a truthy value will be
         * included in the resulting array.
         *
         * If the subject is not an array of values, it will be converted to a single-
         * element array before running the filter.
         * @param {*} subject The value to be filtered usually an array. If this value is
         *      not an array, it will be converted to an array with this value as the
         *      only element.
         * @param {{}} expr The expression tree to run against each subject. If the
         *      tree evaluates to a truthy result, then the value will be included in
         *      the returned array otherwise, it will be eliminated.
         * @returns {Promise<Array>} resolves with an array of values that passed the
         *      expression filter.
         * @private
         */
      }, {
        key: "_filterRelative",
        value: function _filterRelative(subject, expr) {
          var _this4 = this;
          var promises = [];
          if (!Array.isArray(subject)) {
            subject = subject === void 0 ? [] : [subject];
          }
          subject.forEach(function(elem) {
            var evalInst = new Evaluator2(_this4._grammar, _this4._context, elem, _this4.Promise);
            promises.push(evalInst.eval(expr));
          });
          return this.Promise.all(promises).then(function(values) {
            var results = [];
            values.forEach(function(value, idx) {
              if (value) {
                results.push(subject[idx]);
              }
            });
            return results;
          });
        }
        /**
         * Applies a static filter expression to a subject value.  If the filter
         * expression evaluates to boolean true, the subject is returned if false,
         * undefined.
         *
         * For any other resulting value of the expression, this function will attempt
         * to respond with the property at that name or index of the subject.
         * @param {*} subject The value to be filtered.  Usually an Array (for which
         *      the expression would generally resolve to a numeric index) or an
         *      Object (for which the expression would generally resolve to a string
         *      indicating a property name)
         * @param {{}} expr The expression tree to run against the subject
         * @returns {Promise<*>} resolves with the value of the drill-down.
         * @private
         */
      }, {
        key: "_filterStatic",
        value: function _filterStatic(subject, expr) {
          return this.eval(expr).then(function(res) {
            if (typeof res === "boolean") {
              return res ? subject : void 0;
            }
            return subject[res];
          });
        }
      }]);
      return Evaluator2;
    }();
    module.exports = Evaluator;
  }
});

// node_modules/jexl/dist/Lexer.js
var require_Lexer = __commonJS({
  "node_modules/jexl/dist/Lexer.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var numericRegex = /^-?(?:(?:[0-9]*\.[0-9]+)|[0-9]+)$/;
    var identRegex = /^[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][a-zA-Zа-яА-Я0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*$/;
    var escEscRegex = /\\\\/;
    var whitespaceRegex = /^\s*$/;
    var preOpRegexElems = [
      // Strings
      "'(?:(?:\\\\')|[^'])*'",
      '"(?:(?:\\\\")|[^"])*"',
      // Whitespace
      "\\s+",
      // Booleans
      "\\btrue\\b",
      "\\bfalse\\b"
    ];
    var postOpRegexElems = [
      // Identifiers
      "[a-zA-Zа-яА-Я_À-ÖØ-öø-ÿ\\$][a-zA-Z0-9а-яА-Я_À-ÖØ-öø-ÿ\\$]*",
      // Numerics (without negative symbol)
      "(?:(?:[0-9]*\\.[0-9]+)|[0-9]+)"
    ];
    var minusNegatesAfter = ["binaryOp", "unaryOp", "openParen", "openBracket", "question", "colon"];
    var Lexer = function() {
      function Lexer2(grammar) {
        (0, _classCallCheck2.default)(this, Lexer2);
        this._grammar = grammar;
      }
      (0, _createClass2.default)(Lexer2, [{
        key: "getElements",
        value: function getElements(str) {
          var regex = this._getSplitRegex();
          return str.split(regex).filter(function(elem) {
            return elem;
          });
        }
        /**
         * Converts an array of expression elements into an array of tokens.  Note that
         * the resulting array may not equal the element array in length, as any
         * elements that consist only of whitespace get appended to the previous
         * token's "raw" property.  For the structure of a token object, please see
         * {@link Lexer#tokenize}.
         * @param {Array<string>} elements An array of Jexl expression elements to be
         *      converted to tokens
         * @returns {Array<{type, value, raw}>} an array of token objects.
         */
      }, {
        key: "getTokens",
        value: function getTokens(elements) {
          var tokens = [];
          var negate = false;
          for (var i = 0; i < elements.length; i++) {
            if (this._isWhitespace(elements[i])) {
              if (tokens.length) {
                tokens[tokens.length - 1].raw += elements[i];
              }
            } else if (elements[i] === "-" && this._isNegative(tokens)) {
              negate = true;
            } else {
              if (negate) {
                elements[i] = "-" + elements[i];
                negate = false;
              }
              tokens.push(this._createToken(elements[i]));
            }
          }
          if (negate) {
            tokens.push(this._createToken("-"));
          }
          return tokens;
        }
        /**
         * Converts a Jexl string into an array of tokens.  Each token is an object
         * in the following format:
         *
         *     {
         *         type: <string>,
         *         [name]: <string>,
         *         value: <boolean|number|string>,
         *         raw: <string>
         *     }
         *
         * Type is one of the following:
         *
         *      literal, identifier, binaryOp, unaryOp
         *
         * OR, if the token is a control character its type is the name of the element
         * defined in the Grammar.
         *
         * Name appears only if the token is a control string found in
         * {@link grammar#elements}, and is set to the name of the element.
         *
         * Value is the value of the token in the correct type (boolean or numeric as
         * appropriate). Raw is the string representation of this value taken directly
         * from the expression string, including any trailing spaces.
         * @param {string} str The Jexl string to be tokenized
         * @returns {Array<{type, value, raw}>} an array of token objects.
         * @throws {Error} if the provided string contains an invalid token.
         */
      }, {
        key: "tokenize",
        value: function tokenize(str) {
          var elements = this.getElements(str);
          return this.getTokens(elements);
        }
        /**
         * Creates a new token object from an element of a Jexl string. See
         * {@link Lexer#tokenize} for a description of the token object.
         * @param {string} element The element from which a token should be made
         * @returns {{value: number|boolean|string, [name]: string, type: string,
         *      raw: string}} a token object describing the provided element.
         * @throws {Error} if the provided string is not a valid expression element.
         * @private
         */
      }, {
        key: "_createToken",
        value: function _createToken(element) {
          var token = {
            type: "literal",
            value: element,
            raw: element
          };
          if (element[0] === '"' || element[0] === "'") {
            token.value = this._unquote(element);
          } else if (element.match(numericRegex)) {
            token.value = parseFloat(element);
          } else if (element === "true" || element === "false") {
            token.value = element === "true";
          } else if (this._grammar.elements[element]) {
            token.type = this._grammar.elements[element].type;
          } else if (element.match(identRegex)) {
            token.type = "identifier";
          } else {
            throw new Error("Invalid expression token: ".concat(element));
          }
          return token;
        }
        /**
         * Escapes a string so that it can be treated as a string literal within a
         * regular expression.
         * @param {string} str The string to be escaped
         * @returns {string} the RegExp-escaped string.
         * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions
         * @private
         */
      }, {
        key: "_escapeRegExp",
        value: function _escapeRegExp(str) {
          str = str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          if (str.match(identRegex)) {
            str = "\\b" + str + "\\b";
          }
          return str;
        }
        /**
         * Gets a RegEx object appropriate for splitting a Jexl string into its core
         * elements.
         * @returns {RegExp} An element-splitting RegExp object
         * @private
         */
      }, {
        key: "_getSplitRegex",
        value: function _getSplitRegex() {
          var _this = this;
          if (!this._splitRegex) {
            var elemArray = Object.keys(this._grammar.elements).sort(function(a, b) {
              return b.length - a.length;
            }).map(function(elem) {
              return _this._escapeRegExp(elem);
            }, this);
            this._splitRegex = new RegExp("(" + [preOpRegexElems.join("|"), elemArray.join("|"), postOpRegexElems.join("|")].join("|") + ")");
          }
          return this._splitRegex;
        }
        /**
         * Determines whether the addition of a '-' token should be interpreted as a
         * negative symbol for an upcoming number, given an array of tokens already
         * processed.
         * @param {Array<Object>} tokens An array of tokens already processed
         * @returns {boolean} true if adding a '-' should be considered a negative
         *      symbol; false otherwise
         * @private
         */
      }, {
        key: "_isNegative",
        value: function _isNegative(tokens) {
          if (!tokens.length) return true;
          return minusNegatesAfter.some(function(type) {
            return type === tokens[tokens.length - 1].type;
          });
        }
        /**
         * A utility function to determine if a string consists of only space
         * characters.
         * @param {string} str A string to be tested
         * @returns {boolean} true if the string is empty or consists of only spaces;
         *      false otherwise.
         * @private
         */
      }, {
        key: "_isWhitespace",
        value: function _isWhitespace(str) {
          return !!str.match(whitespaceRegex);
        }
        /**
         * Removes the beginning and trailing quotes from a string, unescapes any
         * escaped quotes on its interior, and unescapes any escaped escape
         * characters. Note that this function is not defensive; it assumes that the
         * provided string is not empty, and that its first and last characters are
         * actually quotes.
         * @param {string} str A string whose first and last characters are quotes
         * @returns {string} a string with the surrounding quotes stripped and escapes
         *      properly processed.
         * @private
         */
      }, {
        key: "_unquote",
        value: function _unquote(str) {
          var quote = str[0];
          var escQuoteRegex = new RegExp("\\\\" + quote, "g");
          return str.substr(1, str.length - 2).replace(escQuoteRegex, quote).replace(escEscRegex, "\\");
        }
      }]);
      return Lexer2;
    }();
    module.exports = Lexer;
  }
});

// node_modules/jexl/dist/parser/handlers.js
var require_handlers2 = __commonJS({
  "node_modules/jexl/dist/parser/handlers.js"(exports) {
    "use strict";
    exports.argVal = function(ast) {
      if (ast) this._cursor.args.push(ast);
    };
    exports.arrayStart = function() {
      this._placeAtCursor({
        type: "ArrayLiteral",
        value: []
      });
    };
    exports.arrayVal = function(ast) {
      if (ast) {
        this._cursor.value.push(ast);
      }
    };
    exports.binaryOp = function(token) {
      var precedence = this._grammar.elements[token.value].precedence || 0;
      var parent = this._cursor._parent;
      while (parent && parent.operator && this._grammar.elements[parent.operator].precedence >= precedence) {
        this._cursor = parent;
        parent = parent._parent;
      }
      var node = {
        type: "BinaryExpression",
        operator: token.value,
        left: this._cursor
      };
      this._setParent(this._cursor, node);
      this._cursor = parent;
      this._placeAtCursor(node);
    };
    exports.dot = function() {
      this._nextIdentEncapsulate = this._cursor && this._cursor.type !== "UnaryExpression" && (this._cursor.type !== "BinaryExpression" || this._cursor.type === "BinaryExpression" && this._cursor.right);
      this._nextIdentRelative = !this._cursor || this._cursor && !this._nextIdentEncapsulate;
      if (this._nextIdentRelative) {
        this._relative = true;
      }
    };
    exports.filter = function(ast) {
      this._placeBeforeCursor({
        type: "FilterExpression",
        expr: ast,
        relative: this._subParser.isRelative(),
        subject: this._cursor
      });
    };
    exports.functionCall = function() {
      this._placeBeforeCursor({
        type: "FunctionCall",
        name: this._cursor.value,
        args: [],
        pool: "functions"
      });
    };
    exports.identifier = function(token) {
      var node = {
        type: "Identifier",
        value: token.value
      };
      if (this._nextIdentEncapsulate) {
        node.from = this._cursor;
        this._placeBeforeCursor(node);
        this._nextIdentEncapsulate = false;
      } else {
        if (this._nextIdentRelative) {
          node.relative = true;
          this._nextIdentRelative = false;
        }
        this._placeAtCursor(node);
      }
    };
    exports.literal = function(token) {
      this._placeAtCursor({
        type: "Literal",
        value: token.value
      });
    };
    exports.objKey = function(token) {
      this._curObjKey = token.value;
    };
    exports.objStart = function() {
      this._placeAtCursor({
        type: "ObjectLiteral",
        value: {}
      });
    };
    exports.objVal = function(ast) {
      this._cursor.value[this._curObjKey] = ast;
    };
    exports.subExpression = function(ast) {
      this._placeAtCursor(ast);
    };
    exports.ternaryEnd = function(ast) {
      this._cursor.alternate = ast;
    };
    exports.ternaryMid = function(ast) {
      this._cursor.consequent = ast;
    };
    exports.ternaryStart = function() {
      this._tree = {
        type: "ConditionalExpression",
        test: this._tree
      };
      this._cursor = this._tree;
    };
    exports.transform = function(token) {
      this._placeBeforeCursor({
        type: "FunctionCall",
        name: token.value,
        args: [this._cursor],
        pool: "transforms"
      });
    };
    exports.unaryOp = function(token) {
      this._placeAtCursor({
        type: "UnaryExpression",
        operator: token.value
      });
    };
  }
});

// node_modules/jexl/dist/parser/states.js
var require_states = __commonJS({
  "node_modules/jexl/dist/parser/states.js"(exports) {
    "use strict";
    var h = require_handlers2();
    exports.states = {
      expectOperand: {
        tokenTypes: {
          literal: {
            toState: "expectBinOp"
          },
          identifier: {
            toState: "identifier"
          },
          unaryOp: {},
          openParen: {
            toState: "subExpression"
          },
          openCurl: {
            toState: "expectObjKey",
            handler: h.objStart
          },
          dot: {
            toState: "traverse"
          },
          openBracket: {
            toState: "arrayVal",
            handler: h.arrayStart
          }
        }
      },
      expectBinOp: {
        tokenTypes: {
          binaryOp: {
            toState: "expectOperand"
          },
          pipe: {
            toState: "expectTransform"
          },
          dot: {
            toState: "traverse"
          },
          question: {
            toState: "ternaryMid",
            handler: h.ternaryStart
          }
        },
        completable: true
      },
      expectTransform: {
        tokenTypes: {
          identifier: {
            toState: "postTransform",
            handler: h.transform
          }
        }
      },
      expectObjKey: {
        tokenTypes: {
          identifier: {
            toState: "expectKeyValSep",
            handler: h.objKey
          },
          closeCurl: {
            toState: "expectBinOp"
          }
        }
      },
      expectKeyValSep: {
        tokenTypes: {
          colon: {
            toState: "objVal"
          }
        }
      },
      postTransform: {
        tokenTypes: {
          openParen: {
            toState: "argVal"
          },
          binaryOp: {
            toState: "expectOperand"
          },
          dot: {
            toState: "traverse"
          },
          openBracket: {
            toState: "filter"
          },
          pipe: {
            toState: "expectTransform"
          }
        },
        completable: true
      },
      postArgs: {
        tokenTypes: {
          binaryOp: {
            toState: "expectOperand"
          },
          dot: {
            toState: "traverse"
          },
          openBracket: {
            toState: "filter"
          },
          pipe: {
            toState: "expectTransform"
          }
        },
        completable: true
      },
      identifier: {
        tokenTypes: {
          binaryOp: {
            toState: "expectOperand"
          },
          dot: {
            toState: "traverse"
          },
          openBracket: {
            toState: "filter"
          },
          openParen: {
            toState: "argVal",
            handler: h.functionCall
          },
          pipe: {
            toState: "expectTransform"
          },
          question: {
            toState: "ternaryMid",
            handler: h.ternaryStart
          }
        },
        completable: true
      },
      traverse: {
        tokenTypes: {
          identifier: {
            toState: "identifier"
          }
        }
      },
      filter: {
        subHandler: h.filter,
        endStates: {
          closeBracket: "identifier"
        }
      },
      subExpression: {
        subHandler: h.subExpression,
        endStates: {
          closeParen: "expectBinOp"
        }
      },
      argVal: {
        subHandler: h.argVal,
        endStates: {
          comma: "argVal",
          closeParen: "postArgs"
        }
      },
      objVal: {
        subHandler: h.objVal,
        endStates: {
          comma: "expectObjKey",
          closeCurl: "expectBinOp"
        }
      },
      arrayVal: {
        subHandler: h.arrayVal,
        endStates: {
          comma: "arrayVal",
          closeBracket: "expectBinOp"
        }
      },
      ternaryMid: {
        subHandler: h.ternaryMid,
        endStates: {
          colon: "ternaryEnd"
        }
      },
      ternaryEnd: {
        subHandler: h.ternaryEnd,
        completable: true
      }
    };
  }
});

// node_modules/jexl/dist/parser/Parser.js
var require_Parser = __commonJS({
  "node_modules/jexl/dist/parser/Parser.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var handlers = require_handlers2();
    var states = require_states().states;
    var Parser = function() {
      function Parser2(grammar, prefix, stopMap) {
        (0, _classCallCheck2.default)(this, Parser2);
        this._grammar = grammar;
        this._state = "expectOperand";
        this._tree = null;
        this._exprStr = prefix || "";
        this._relative = false;
        this._stopMap = stopMap || {};
      }
      (0, _createClass2.default)(Parser2, [{
        key: "addToken",
        value: function addToken(token) {
          if (this._state === "complete") {
            throw new Error("Cannot add a new token to a completed Parser");
          }
          var state = states[this._state];
          var startExpr = this._exprStr;
          this._exprStr += token.raw;
          if (state.subHandler) {
            if (!this._subParser) {
              this._startSubExpression(startExpr);
            }
            var stopState = this._subParser.addToken(token);
            if (stopState) {
              this._endSubExpression();
              if (this._parentStop) return stopState;
              this._state = stopState;
            }
          } else if (state.tokenTypes[token.type]) {
            var typeOpts = state.tokenTypes[token.type];
            var handleFunc = handlers[token.type];
            if (typeOpts.handler) {
              handleFunc = typeOpts.handler;
            }
            if (handleFunc) {
              handleFunc.call(this, token);
            }
            if (typeOpts.toState) {
              this._state = typeOpts.toState;
            }
          } else if (this._stopMap[token.type]) {
            return this._stopMap[token.type];
          } else {
            throw new Error("Token ".concat(token.raw, " (").concat(token.type, ") unexpected in expression: ").concat(this._exprStr));
          }
          return false;
        }
        /**
         * Processes an array of tokens iteratively through the {@link #addToken}
         * function.
         * @param {Array<{type: <string>}>} tokens An array of tokens, as provided by
         *      the {@link Lexer#tokenize} function.
         */
      }, {
        key: "addTokens",
        value: function addTokens(tokens) {
          tokens.forEach(this.addToken, this);
        }
        /**
         * Marks this Parser instance as completed and retrieves the full AST.
         * @returns {{}|null} a full expression tree, ready for evaluation by the
         *      {@link Evaluator#eval} function, or null if no tokens were passed to
         *      the parser before complete was called
         * @throws {Error} if the parser is not in a state where it's legal to end
         *      the expression, indicating that the expression is incomplete
         */
      }, {
        key: "complete",
        value: function complete() {
          if (this._cursor && !states[this._state].completable) {
            throw new Error("Unexpected end of expression: ".concat(this._exprStr));
          }
          if (this._subParser) {
            this._endSubExpression();
          }
          this._state = "complete";
          return this._cursor ? this._tree : null;
        }
        /**
         * Indicates whether the expression tree contains a relative path identifier.
         * @returns {boolean} true if a relative identifier exists false otherwise.
         */
      }, {
        key: "isRelative",
        value: function isRelative() {
          return this._relative;
        }
        /**
         * Ends a subexpression by completing the subParser and passing its result
         * to the subHandler configured in the current state.
         * @private
         */
      }, {
        key: "_endSubExpression",
        value: function _endSubExpression() {
          states[this._state].subHandler.call(this, this._subParser.complete());
          this._subParser = null;
        }
        /**
         * Places a new tree node at the current position of the cursor (to the 'right'
         * property) and then advances the cursor to the new node. This function also
         * handles setting the parent of the new node.
         * @param {{type: <string>}} node A node to be added to the AST
         * @private
         */
      }, {
        key: "_placeAtCursor",
        value: function _placeAtCursor(node) {
          if (!this._cursor) {
            this._tree = node;
          } else {
            this._cursor.right = node;
            this._setParent(node, this._cursor);
          }
          this._cursor = node;
        }
        /**
         * Places a tree node before the current position of the cursor, replacing
         * the node that the cursor currently points to. This should only be called in
         * cases where the cursor is known to exist, and the provided node already
         * contains a pointer to what's at the cursor currently.
         * @param {{type: <string>}} node A node to be added to the AST
         * @private
         */
      }, {
        key: "_placeBeforeCursor",
        value: function _placeBeforeCursor(node) {
          this._cursor = this._cursor._parent;
          this._placeAtCursor(node);
        }
        /**
         * Sets the parent of a node by creating a non-enumerable _parent property
         * that points to the supplied parent argument.
         * @param {{type: <string>}} node A node of the AST on which to set a new
         *      parent
         * @param {{type: <string>}} parent An existing node of the AST to serve as the
         *      parent of the new node
         * @private
         */
      }, {
        key: "_setParent",
        value: function _setParent(node, parent) {
          Object.defineProperty(node, "_parent", {
            value: parent,
            writable: true
          });
        }
        /**
         * Prepares the Parser to accept a subexpression by (re)instantiating the
         * subParser.
         * @param {string} [exprStr] The expression string to prefix to the new Parser
         * @private
         */
      }, {
        key: "_startSubExpression",
        value: function _startSubExpression(exprStr) {
          var endStates = states[this._state].endStates;
          if (!endStates) {
            this._parentStop = true;
            endStates = this._stopMap;
          }
          this._subParser = new Parser2(this._grammar, exprStr, endStates);
        }
      }]);
      return Parser2;
    }();
    module.exports = Parser;
  }
});

// node_modules/jexl/dist/PromiseSync.js
var require_PromiseSync = __commonJS({
  "node_modules/jexl/dist/PromiseSync.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var PromiseSync = function() {
      function PromiseSync2(fn) {
        (0, _classCallCheck2.default)(this, PromiseSync2);
        fn(this._resolve.bind(this), this._reject.bind(this));
      }
      (0, _createClass2.default)(PromiseSync2, [{
        key: "catch",
        value: function _catch(rejected) {
          if (this.error) {
            try {
              this._resolve(rejected(this.error));
            } catch (e) {
              this._reject(e);
            }
          }
          return this;
        }
      }, {
        key: "then",
        value: function then(resolved, rejected) {
          if (!this.error) {
            try {
              this._resolve(resolved(this.value));
            } catch (e) {
              this._reject(e);
            }
          }
          if (rejected) this.catch(rejected);
          return this;
        }
      }, {
        key: "_reject",
        value: function _reject(error) {
          this.value = void 0;
          this.error = error;
        }
      }, {
        key: "_resolve",
        value: function _resolve(val) {
          if (val instanceof PromiseSync2) {
            if (val.error) {
              this._reject(val.error);
            } else {
              this._resolve(val.value);
            }
          } else {
            this.value = val;
            this.error = void 0;
          }
        }
      }]);
      return PromiseSync2;
    }();
    PromiseSync.all = function(vals) {
      return new PromiseSync(function(resolve) {
        var resolved = vals.map(function(val) {
          while (val instanceof PromiseSync) {
            if (val.error) throw Error(val.error);
            val = val.value;
          }
          return val;
        });
        resolve(resolved);
      });
    };
    PromiseSync.resolve = function(val) {
      return new PromiseSync(function(resolve) {
        return resolve(val);
      });
    };
    PromiseSync.reject = function(error) {
      return new PromiseSync(function(resolve, reject) {
        return reject(error);
      });
    };
    module.exports = PromiseSync;
  }
});

// node_modules/jexl/dist/Expression.js
var require_Expression = __commonJS({
  "node_modules/jexl/dist/Expression.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var Evaluator = require_Evaluator();
    var Lexer = require_Lexer();
    var Parser = require_Parser();
    var PromiseSync = require_PromiseSync();
    var Expression = function() {
      function Expression2(grammar, exprStr) {
        (0, _classCallCheck2.default)(this, Expression2);
        this._grammar = grammar;
        this._exprStr = exprStr;
        this._ast = null;
      }
      (0, _createClass2.default)(Expression2, [{
        key: "compile",
        value: function compile() {
          var lexer = new Lexer(this._grammar);
          var parser = new Parser(this._grammar);
          var tokens = lexer.tokenize(this._exprStr);
          parser.addTokens(tokens);
          this._ast = parser.complete();
          return this;
        }
        /**
         * Asynchronously evaluates the expression within an optional context.
         * @param {Object} [context] A mapping of variables to values, which will be
         *      made accessible to the Jexl expression when evaluating it
         * @returns {Promise<*>} resolves with the result of the evaluation.
         */
      }, {
        key: "eval",
        value: function _eval() {
          var context = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return this._eval(context, Promise);
        }
        /**
         * Synchronously evaluates the expression within an optional context.
         * @param {Object} [context] A mapping of variables to values, which will be
         *      made accessible to the Jexl expression when evaluating it
         * @returns {*} the result of the evaluation.
         * @throws {*} on error
         */
      }, {
        key: "evalSync",
        value: function evalSync() {
          var context = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var res = this._eval(context, PromiseSync);
          if (res.error) throw res.error;
          return res.value;
        }
      }, {
        key: "_eval",
        value: function _eval(context, promise) {
          var _this = this;
          return promise.resolve().then(function() {
            var ast = _this._getAst();
            var evaluator = new Evaluator(_this._grammar, context, void 0, promise);
            return evaluator.eval(ast);
          });
        }
      }, {
        key: "_getAst",
        value: function _getAst() {
          if (!this._ast) this.compile();
          return this._ast;
        }
      }]);
      return Expression2;
    }();
    module.exports = Expression;
  }
});

// node_modules/jexl/dist/grammar.js
var require_grammar = __commonJS({
  "node_modules/jexl/dist/grammar.js"(exports) {
    "use strict";
    exports.getGrammar = function() {
      return {
        /**
         * A map of all expression elements to their properties. Note that changes
         * here may require changes in the Lexer or Parser.
         * @type {{}}
         */
        elements: {
          ".": {
            type: "dot"
          },
          "[": {
            type: "openBracket"
          },
          "]": {
            type: "closeBracket"
          },
          "|": {
            type: "pipe"
          },
          "{": {
            type: "openCurl"
          },
          "}": {
            type: "closeCurl"
          },
          ":": {
            type: "colon"
          },
          ",": {
            type: "comma"
          },
          "(": {
            type: "openParen"
          },
          ")": {
            type: "closeParen"
          },
          "?": {
            type: "question"
          },
          "+": {
            type: "binaryOp",
            precedence: 30,
            eval: function _eval(left, right) {
              return left + right;
            }
          },
          "-": {
            type: "binaryOp",
            precedence: 30,
            eval: function _eval(left, right) {
              return left - right;
            }
          },
          "*": {
            type: "binaryOp",
            precedence: 40,
            eval: function _eval(left, right) {
              return left * right;
            }
          },
          "/": {
            type: "binaryOp",
            precedence: 40,
            eval: function _eval(left, right) {
              return left / right;
            }
          },
          "//": {
            type: "binaryOp",
            precedence: 40,
            eval: function _eval(left, right) {
              return Math.floor(left / right);
            }
          },
          "%": {
            type: "binaryOp",
            precedence: 50,
            eval: function _eval(left, right) {
              return left % right;
            }
          },
          "^": {
            type: "binaryOp",
            precedence: 50,
            eval: function _eval(left, right) {
              return Math.pow(left, right);
            }
          },
          "==": {
            type: "binaryOp",
            precedence: 20,
            eval: function _eval(left, right) {
              return left == right;
            }
          },
          "!=": {
            type: "binaryOp",
            precedence: 20,
            eval: function _eval(left, right) {
              return left != right;
            }
          },
          ">": {
            type: "binaryOp",
            precedence: 20,
            eval: function _eval(left, right) {
              return left > right;
            }
          },
          ">=": {
            type: "binaryOp",
            precedence: 20,
            eval: function _eval(left, right) {
              return left >= right;
            }
          },
          "<": {
            type: "binaryOp",
            precedence: 20,
            eval: function _eval(left, right) {
              return left < right;
            }
          },
          "<=": {
            type: "binaryOp",
            precedence: 20,
            eval: function _eval(left, right) {
              return left <= right;
            }
          },
          "&&": {
            type: "binaryOp",
            precedence: 10,
            evalOnDemand: function evalOnDemand(left, right) {
              return left.eval().then(function(leftVal) {
                if (!leftVal) return leftVal;
                return right.eval();
              });
            }
          },
          "||": {
            type: "binaryOp",
            precedence: 10,
            evalOnDemand: function evalOnDemand(left, right) {
              return left.eval().then(function(leftVal) {
                if (leftVal) return leftVal;
                return right.eval();
              });
            }
          },
          in: {
            type: "binaryOp",
            precedence: 20,
            eval: function _eval(left, right) {
              if (typeof right === "string") {
                return right.indexOf(left) !== -1;
              }
              if (Array.isArray(right)) {
                return right.some(function(elem) {
                  return elem === left;
                });
              }
              return false;
            }
          },
          "!": {
            type: "unaryOp",
            precedence: Infinity,
            eval: function _eval(right) {
              return !right;
            }
          }
        },
        /**
         * A map of function names to javascript functions. A Jexl function
         * takes zero ore more arguemnts:
         *
         *     - {*} ...args: A variable number of arguments passed to this function.
         *       All of these are pre-evaluated to their actual values before calling
         *       the function.
         *
         * The Jexl function should return either the transformed value, or
         * a Promises/A+ Promise object that resolves with the value and rejects
         * or throws only when an unrecoverable error occurs. Functions should
         * generally return undefined when they don't make sense to be used on the
         * given value type, rather than throw/reject. An error is only
         * appropriate when the function would normally return a value, but
         * cannot due to some other failure.
         */
        functions: {},
        /**
         * A map of transform names to transform functions. A transform function
         * takes one ore more arguemnts:
         *
         *     - {*} val: A value to be transformed
         *     - {*} ...args: A variable number of arguments passed to this transform.
         *       All of these are pre-evaluated to their actual values before calling
         *       the function.
         *
         * The transform function should return either the transformed value, or
         * a Promises/A+ Promise object that resolves with the value and rejects
         * or throws only when an unrecoverable error occurs. Transforms should
         * generally return undefined when they don't make sense to be used on the
         * given value type, rather than throw/reject. An error is only
         * appropriate when the transform would normally return a value, but
         * cannot due to some other failure.
         */
        transforms: {}
      };
    };
  }
});

// node_modules/jexl/dist/Jexl.js
var require_Jexl = __commonJS({
  "node_modules/jexl/dist/Jexl.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var Expression = require_Expression();
    var _require = require_grammar();
    var getGrammar = _require.getGrammar;
    var Jexl2 = function() {
      function Jexl3() {
        (0, _classCallCheck2.default)(this, Jexl3);
        this.expr = this.expr.bind(this);
        this._grammar = getGrammar();
      }
      (0, _createClass2.default)(Jexl3, [{
        key: "addBinaryOp",
        value: function addBinaryOp(operator, precedence, fn, manualEval) {
          this._addGrammarElement(operator, (0, _defineProperty2.default)({
            type: "binaryOp",
            precedence
          }, manualEval ? "evalOnDemand" : "eval", fn));
        }
        /**
         * Adds or replaces an expression function in this Jexl instance.
         * @param {string} name The name of the expression function, as it will be
         *      used within Jexl expressions
         * @param {function} fn The javascript function to be executed when this
         *      expression function is invoked. It will be provided with each argument
         *      supplied in the expression, in the same order.
         */
      }, {
        key: "addFunction",
        value: function addFunction(name, fn) {
          this._grammar.functions[name] = fn;
        }
        /**
         * Syntactic sugar for calling {@link #addFunction} repeatedly. This function
         * accepts a map of one or more expression function names to their javascript
         * function counterpart.
         * @param {{}} map A map of expression function names to javascript functions
         */
      }, {
        key: "addFunctions",
        value: function addFunctions(map2) {
          for (var key in map2) {
            this._grammar.functions[key] = map2[key];
          }
        }
        /**
         * Adds a unary operator to Jexl. Unary operators are currently only supported
         * on the left side of the value on which it will operate.
         * @param {string} operator The operator string to be added
         * @param {function} fn A function to run to calculate the result. The function
         *      will be called with one argument: the literal value to the right of the
         *      operator. It should return either the resulting value, or a Promise
         *      that resolves with the resulting value.
         */
      }, {
        key: "addUnaryOp",
        value: function addUnaryOp(operator, fn) {
          this._addGrammarElement(operator, {
            type: "unaryOp",
            weight: Infinity,
            eval: fn
          });
        }
        /**
         * Adds or replaces a transform function in this Jexl instance.
         * @param {string} name The name of the transform function, as it will be used
         *      within Jexl expressions
         * @param {function} fn The function to be executed when this transform is
         *      invoked. It will be provided with at least one argument:
         *          - {*} value: The value to be transformed
         *          - {...*} args: The arguments for this transform
         */
      }, {
        key: "addTransform",
        value: function addTransform(name, fn) {
          this._grammar.transforms[name] = fn;
        }
        /**
         * Syntactic sugar for calling {@link #addTransform} repeatedly.  This function
         * accepts a map of one or more transform names to their transform function.
         * @param {{}} map A map of transform names to transform functions
         */
      }, {
        key: "addTransforms",
        value: function addTransforms(map2) {
          for (var key in map2) {
            this._grammar.transforms[key] = map2[key];
          }
        }
        /**
         * Creates an Expression object from the given Jexl expression string, and
         * immediately compiles it. The returned Expression object can then be
         * evaluated multiple times with new contexts, without generating any
         * additional string processing overhead.
         * @param {string} expression The Jexl expression to be compiled
         * @returns {Expression} The compiled Expression object
         */
      }, {
        key: "compile",
        value: function compile(expression) {
          var exprObj = this.createExpression(expression);
          return exprObj.compile();
        }
        /**
         * Constructs an Expression object from a Jexl expression string.
         * @param {string} expression The Jexl expression to be wrapped in an
         *    Expression object
         * @returns {Expression} The Expression object representing the given string
         */
      }, {
        key: "createExpression",
        value: function createExpression(expression) {
          return new Expression(this._grammar, expression);
        }
        /**
         * Retrieves a previously set expression function.
         * @param {string} name The name of the expression function
         * @returns {function} The expression function
         */
      }, {
        key: "getFunction",
        value: function getFunction(name) {
          return this._grammar.functions[name];
        }
        /**
         * Retrieves a previously set transform function.
         * @param {string} name The name of the transform function
         * @returns {function} The transform function
         */
      }, {
        key: "getTransform",
        value: function getTransform(name) {
          return this._grammar.transforms[name];
        }
        /**
         * Asynchronously evaluates a Jexl string within an optional context.
         * @param {string} expression The Jexl expression to be evaluated
         * @param {Object} [context] A mapping of variables to values, which will be
         *      made accessible to the Jexl expression when evaluating it
         * @returns {Promise<*>} resolves with the result of the evaluation.
         */
      }, {
        key: "eval",
        value: function _eval(expression) {
          var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var exprObj = this.createExpression(expression);
          return exprObj.eval(context);
        }
        /**
         * Synchronously evaluates a Jexl string within an optional context.
         * @param {string} expression The Jexl expression to be evaluated
         * @param {Object} [context] A mapping of variables to values, which will be
         *      made accessible to the Jexl expression when evaluating it
         * @returns {*} the result of the evaluation.
         * @throws {*} on error
         */
      }, {
        key: "evalSync",
        value: function evalSync(expression) {
          var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var exprObj = this.createExpression(expression);
          return exprObj.evalSync(context);
        }
        /**
         * A JavaScript template literal to allow expressions to be defined by the
         * syntax: expr`40 + 2`
         * @param {Array<string>} strs
         * @param  {...any} args
         */
      }, {
        key: "expr",
        value: function expr(strs) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          var exprStr = strs.reduce(function(acc, str, idx) {
            var arg = idx < args.length ? args[idx] : "";
            acc += str + arg;
            return acc;
          }, "");
          return this.createExpression(exprStr);
        }
        /**
         * Removes a binary or unary operator from the Jexl grammar.
         * @param {string} operator The operator string to be removed
         */
      }, {
        key: "removeOp",
        value: function removeOp(operator) {
          if (this._grammar.elements[operator] && (this._grammar.elements[operator].type === "binaryOp" || this._grammar.elements[operator].type === "unaryOp")) {
            delete this._grammar.elements[operator];
          }
        }
        /**
         * Adds an element to the grammar map used by this Jexl instance.
         * @param {string} str The key string to be added
         * @param {{type: <string>}} obj A map of configuration options for this
         *      grammar element
         * @private
         */
      }, {
        key: "_addGrammarElement",
        value: function _addGrammarElement(str, obj) {
          this._grammar.elements[str] = obj;
        }
      }]);
      return Jexl3;
    }();
    module.exports = new Jexl2();
    module.exports.Jexl = Jexl2;
  }
});

// node_modules/ngx-schema-form/fesm2022/ngx-schema-form.mjs
var import_z_schema = __toESM(require_ZSchema(), 1);
var JEXL = __toESM(require_Jexl(), 1);
var _c0 = ["target"];
function FormElementComponentAction_ng_template_0_Template(rf, ctx) {
}
function FormElementComponent_div_0_sf_form_element_action_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sf-form-element-action", 3);
  }
  if (rf & 2) {
    const button_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("button", button_r3)("formProperty", ctx_r1.formProperty);
  }
}
function FormElementComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "sf-widget-chooser", 1);
    ɵɵlistener("widgetInstanciated", function FormElementComponent_div_0_Template_sf_widget_chooser_widgetInstanciated_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onWidgetInstanciated($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, FormElementComponent_div_0_sf_form_element_action_2_Template, 1, 2, "sf-form-element-action", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("has-error", !ctx_r1.control.valid)("has-success", ctx_r1.control.valid);
    ɵɵadvance();
    ɵɵproperty("widgetInfo", ctx_r1.formProperty.schema.widget);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.buttons);
  }
}
function ArrayWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("for", ctx_r0.id);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.schema.title, " ");
  }
}
function ArrayWidget_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.schema.description);
  }
}
function ArrayWidget_div_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function ArrayWidget_div_3_button_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const itemProperty_r3 = ɵɵnextContext().$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.removeItem(itemProperty_r3));
    });
    ɵɵelement(1, "span", 10);
    ɵɵtext(2, " Remove ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r0.isRemoveButtonDisabled());
  }
}
function ArrayWidget_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "sf-form-element", 7);
    ɵɵtemplate(2, ArrayWidget_div_3_button_2_Template, 3, 1, "button", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const itemProperty_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("formProperty", itemProperty_r3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(ctx_r0.schema.hasOwnProperty("minItems") && ctx_r0.schema.hasOwnProperty("maxItems") && ctx_r0.schema.minItems === ctx_r0.schema.maxItems));
  }
}
function ArrayWidget_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function ArrayWidget_button_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.addItem());
    });
    ɵɵelement(1, "span", 12);
    ɵɵtext(2, " Add ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r0.isAddButtonDisabled());
  }
}
function CheckboxWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("for", ctx_r0.id);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.schema.title, " ");
  }
}
function CheckboxWidget_div_2_input_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("formControl", ctx_r0.control);
    ɵɵattribute("name", ctx_r0.name);
  }
}
function CheckboxWidget_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "label", 4);
    ɵɵelement(2, "input", 6);
    ɵɵtemplate(3, CheckboxWidget_div_2_input_3_Template, 1, 2, "input", 7);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("formControl", ctx_r0.control)("indeterminate", ctx_r0.control.value !== false && ctx_r0.control.value !== true ? true : null)("disableControl", ctx_r0.schema.readOnly);
    ɵɵattribute("name", ctx_r0.name)("id", ctx_r0.id);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.schema.readOnly);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.schema.description, " ");
  }
}
function CheckboxWidget_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5)(1, "label", 4)(2, "input", 10);
    ɵɵlistener("change", function CheckboxWidget_ng_container_3_div_1_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onCheck($event.target));
    });
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("value", option_r3.enum[0]);
    ɵɵattribute("name", ctx_r0.name)("disabled", ctx_r0.schema.readOnly)("checked", ctx_r0.checked[option_r3.enum[0]] ? true : null)("id", ctx_r0.id + "." + option_r3.enum[0]);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", option_r3.description, " ");
  }
}
function CheckboxWidget_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckboxWidget_ng_container_3_div_1_Template, 4, 6, "div", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.schema.items.oneOf);
  }
}
function FileWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("for", ctx_r0.id);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.schema.title, " ");
  }
}
function FileWidget_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.schema.description);
  }
}
function FileWidget_input_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("formControl", ctx_r0.control);
    ɵɵattribute("name", ctx_r0.name);
  }
}
function IntegerWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("for", ctx_r0.id);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.schema.title, " ");
  }
}
function IntegerWidget_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.schema.description);
  }
}
function ObjectWidget_fieldset_0_legend_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "legend");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const fieldset_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(fieldset_r1.title);
  }
}
function ObjectWidget_fieldset_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const fieldset_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(fieldset_r1.description);
  }
}
function ObjectWidget_fieldset_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "sf-form-element", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const fieldId_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("formProperty", ctx_r2.formProperty.getProperty(fieldId_r2));
  }
}
function ObjectWidget_fieldset_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "fieldset");
    ɵɵtemplate(1, ObjectWidget_fieldset_0_legend_1_Template, 2, 1, "legend", 1)(2, ObjectWidget_fieldset_0_div_2_Template, 2, 1, "div", 1)(3, ObjectWidget_fieldset_0_div_3_Template, 2, 1, "div", 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const fieldset_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", fieldset_r1.title);
    ɵɵadvance();
    ɵɵproperty("ngIf", fieldset_r1.description);
    ɵɵadvance();
    ɵɵproperty("ngForOf", fieldset_r1.fields);
  }
}
function RadioWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.schema.title);
  }
}
function RadioWidget_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.schema.description);
  }
}
function RadioWidget_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "label", 7);
    ɵɵelement(2, "input", 8);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("value", option_r2.enum[0]);
    ɵɵproperty("formControl", ctx_r0.control)("disableControl", ctx_r0.schema.readOnly || option_r2.readOnly);
    ɵɵattribute("name", ctx_r0.name)("id", ctx_r0.id + "." + option_r2.enum[0]);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", option_r2.description, " ");
  }
}
function RadioWidget_input_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("formControl", ctx_r0.control);
    ɵɵattribute("name", ctx_r0.name);
  }
}
function RangeWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("for", ctx_r0.id);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.schema.title, " ");
  }
}
function RangeWidget_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.schema.description);
  }
}
function RangeWidget_input_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("name", ctx_r0.name);
  }
}
function SelectWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("for", ctx_r0.id);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.schema.title, " ");
  }
}
function SelectWidget_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.schema.description, " ");
  }
}
function SelectWidget_select_3_ng_container_1_option_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    ɵɵproperty("ngValue", option_r2.enum[0]);
    ɵɵadvance();
    ɵɵtextInterpolate(option_r2.description);
  }
}
function SelectWidget_select_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SelectWidget_select_3_ng_container_1_option_1_Template, 2, 2, "option", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.schema.oneOf);
  }
}
function SelectWidget_select_3_ng_template_2_option_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    ɵɵproperty("ngValue", option_r3);
    ɵɵadvance();
    ɵɵtextInterpolate(option_r3);
  }
}
function SelectWidget_select_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SelectWidget_select_3_ng_template_2_option_0_Template, 2, 2, "option", 11);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngForOf", ctx_r0.schema.enum);
  }
}
function SelectWidget_select_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "select", 9);
    ɵɵtemplate(1, SelectWidget_select_3_ng_container_1_Template, 2, 1, "ng-container", 10)(2, SelectWidget_select_3_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const use_enum_r4 = ɵɵreference(3);
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("formControl", ctx_r0.control)("disableControl", ctx_r0.schema.readOnly);
    ɵɵattribute("name", ctx_r0.name)("id", ctx_r0.id);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.schema.oneOf)("ngIfElse", use_enum_r4);
  }
}
function SelectWidget_select_4_option_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 15);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    ɵɵproperty("ngValue", option_r5.enum[0])("disabled", option_r5.readOnly);
    ɵɵadvance();
    ɵɵtextInterpolate(option_r5.description);
  }
}
function SelectWidget_select_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "select", 13);
    ɵɵtemplate(1, SelectWidget_select_4_option_1_Template, 2, 3, "option", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("formControl", ctx_r0.control)("disableControl", ctx_r0.schema.readOnly);
    ɵɵattribute("name", ctx_r0.name)("id", ctx_r0.id);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.schema.items.oneOf);
  }
}
function SelectWidget_input_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 16);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("formControl", ctx_r0.control);
    ɵɵattribute("name", ctx_r0.name);
  }
}
function StringWidget_input_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("formControl", ctx_r0.control);
    ɵɵattribute("name", ctx_r0.name);
  }
}
function StringWidget_ng_template_1_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵattribute("for", ctx_r0.id);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.schema.title, " ");
  }
}
function StringWidget_ng_template_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.schema.description);
  }
}
function StringWidget_ng_template_1_input_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("formControl", ctx_r0.control);
    ɵɵattribute("name", ctx_r0.name);
  }
}
function StringWidget_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, StringWidget_ng_template_1_label_1_Template, 2, 2, "label", 4)(2, StringWidget_ng_template_1_span_2_Template, 2, 1, "span", 5);
    ɵɵelement(3, "input", 6);
    ɵɵtemplate(4, StringWidget_ng_template_1_input_4_Template, 1, 2, "input", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.schema.title);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.schema.description);
    ɵɵadvance();
    ɵɵproperty("name", ctx_r0.name)("formControl", ctx_r0.control)("disableControl", ctx_r0.schema.widget.id == "color" && ctx_r0.schema.readOnly ? true : null);
    ɵɵattribute("readonly", ctx_r0.schema.widget.id !== "color" && ctx_r0.schema.readOnly ? true : null)("type", !ctx_r0.schema.widget.id || ctx_r0.schema.widget.id === "string" ? "text" : ctx_r0.schema.widget.id)("id", ctx_r0.id)("placeholder", ctx_r0.schema.placeholder)("maxLength", ctx_r0.schema.maxLength || null)("minLength", ctx_r0.schema.minLength || null)("required", ctx_r0.schema.isRequired || null);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.schema.widget.id === "color" && ctx_r0.schema.readOnly);
  }
}
function TextAreaWidget_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("for", ctx_r0.id);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.schema.title, " ");
  }
}
function TextAreaWidget_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.schema.description);
  }
}
var _c1 = ["*"];
function FormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "form");
    ɵɵelement(1, "sf-form-element", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("name", ctx_r0.rootProperty.rootName)("id", ctx_r0.rootProperty.rootName);
    ɵɵadvance();
    ɵɵproperty("formProperty", ctx_r0.rootProperty);
  }
}
var Widget = class {
  constructor() {
    this.id = "";
    this.name = "";
    this.schema = {};
  }
};
var ControlWidget = class _ControlWidget extends Widget {
  ngAfterViewInit() {
    const control = this.control;
    this.formProperty.valueChanges.subscribe((newValue) => {
      if (control.value !== newValue) {
        control.setValue(newValue, {
          emitEvent: false
        });
      }
    });
    this.formProperty.errorsChanges.subscribe((errors) => {
      control.setErrors(errors, {
        emitEvent: true
      });
      const messages = (errors || []).filter((e) => {
        return e.path && e.path.slice(1) === this.formProperty.path;
      }).map((e) => e.message);
      this.errorMessages = messages.filter((m, i) => messages.indexOf(m) === i);
    });
    control.valueChanges.subscribe((newValue) => {
      this.formProperty.setValue(newValue, false);
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵControlWidget_BaseFactory;
      return function ControlWidget_Factory(__ngFactoryType__) {
        return (ɵControlWidget_BaseFactory || (ɵControlWidget_BaseFactory = ɵɵgetInheritedFactory(_ControlWidget)))(__ngFactoryType__ || _ControlWidget);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ControlWidget,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlWidget, [{
    type: Directive
  }], null, null);
})();
var ArrayLayoutWidget = class _ArrayLayoutWidget extends Widget {
  ngAfterViewInit() {
    const control = this.control;
    this.formProperty.errorsChanges.subscribe((errors) => {
      control.setErrors(errors, {
        emitEvent: true
      });
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵArrayLayoutWidget_BaseFactory;
      return function ArrayLayoutWidget_Factory(__ngFactoryType__) {
        return (ɵArrayLayoutWidget_BaseFactory || (ɵArrayLayoutWidget_BaseFactory = ɵɵgetInheritedFactory(_ArrayLayoutWidget)))(__ngFactoryType__ || _ArrayLayoutWidget);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ArrayLayoutWidget,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArrayLayoutWidget, [{
    type: Directive
  }], null, null);
})();
var ObjectLayoutWidget = class _ObjectLayoutWidget extends Widget {
  ngAfterViewInit() {
    const control = this.control;
    this.formProperty.errorsChanges.subscribe((errors) => {
      control.setErrors(errors, {
        emitEvent: true
      });
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵObjectLayoutWidget_BaseFactory;
      return function ObjectLayoutWidget_Factory(__ngFactoryType__) {
        return (ɵObjectLayoutWidget_BaseFactory || (ɵObjectLayoutWidget_BaseFactory = ɵɵgetInheritedFactory(_ObjectLayoutWidget)))(__ngFactoryType__ || _ObjectLayoutWidget);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ObjectLayoutWidget,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObjectLayoutWidget, [{
    type: Directive
  }], null, null);
})();
var ActionRegistry = class _ActionRegistry {
  constructor() {
    this.actions = {};
  }
  clear() {
    this.actions = {};
  }
  register(actionId, action) {
    this.actions[actionId] = action;
  }
  get(actionId) {
    return this.actions[actionId];
  }
  static {
    this.ɵfac = function ActionRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActionRegistry)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ActionRegistry,
      factory: _ActionRegistry.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionRegistry, [{
    type: Injectable
  }], null, null);
})();
var BindingRegistry = class _BindingRegistry {
  constructor() {
    this.bindings = [];
  }
  clear() {
    this.bindings = [];
  }
  register(path, binding) {
    this.bindings[path] = [].concat(binding);
  }
  get(path) {
    return this.bindings[path];
  }
  static {
    this.ɵfac = function BindingRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BindingRegistry)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BindingRegistry,
      factory: _BindingRegistry.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindingRegistry, [{
    type: Injectable
  }], null, null);
})();
var LOG_LEVEL = new InjectionToken("Logging level");
var LogService = class LogService2 {
  constructor(level) {
    this.level = level;
    this.logLevel = 3;
    this.logLevel = level;
  }
  isWarnEnabled() {
    return 4 === this.logLevel || 1 === this.logLevel;
  }
  isErrorEnabled() {
    return 4 === this.logLevel || 2 === this.logLevel;
  }
  isLogEnabled() {
    return 4 === this.logLevel || 0 === this.logLevel;
  }
};
LogService = __decorate([__param(0, Optional()), __param(0, Inject(LOG_LEVEL))], LogService);
var DefaultLogService = class _DefaultLogService extends LogService {
  constructor(logLevel) {
    super(logLevel);
    this.logLevel = logLevel;
    this.warn = !this.isWarnEnabled() ? () => {
    } : console.warn;
    this.error = !this.isErrorEnabled() ? () => {
    } : console.error;
    this.log = !this.isLogEnabled() ? () => {
    } : console.log;
    this.logLevel = logLevel;
  }
  static {
    this.ɵfac = function DefaultLogService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultLogService)(ɵɵinject(LOG_LEVEL, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DefaultLogService,
      factory: _DefaultLogService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultLogService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LOG_LEVEL]
    }]
  }], null);
})();
var WidgetRegistry = class {
  constructor() {
    this.widgets = {};
  }
  setDefaultWidget(widget) {
    this.defaultWidget = widget;
  }
  getDefaultWidget() {
    return this.defaultWidget;
  }
  hasWidget(type) {
    return this.widgets.hasOwnProperty(type);
  }
  register(type, widget) {
    this.widgets[type] = widget;
  }
  getWidgetType(type) {
    if (this.hasWidget(type)) {
      return this.widgets[type];
    }
    return this.defaultWidget;
  }
};
var WidgetFactory = class _WidgetFactory {
  constructor(registry, resolver) {
    this.registry = registry;
    this.resolver = resolver;
  }
  createWidget(container, type) {
    let componentClass = this.registry.getWidgetType(type);
    let componentFactory = this.resolver.resolveComponentFactory(componentClass);
    return container.createComponent(componentFactory);
  }
  static {
    this.ɵfac = function WidgetFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WidgetFactory)(ɵɵinject(WidgetRegistry), ɵɵinject(ComponentFactoryResolver$1));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _WidgetFactory,
      factory: _WidgetFactory.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetFactory, [{
    type: Injectable
  }], () => [{
    type: WidgetRegistry
  }, {
    type: ComponentFactoryResolver$1
  }], null);
})();
var TerminatorService = class _TerminatorService {
  constructor() {
    this.onDestroy = new Subject();
  }
  destroy() {
    this.onDestroy.next(true);
  }
  static {
    this.ɵfac = function TerminatorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TerminatorService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TerminatorService,
      factory: _TerminatorService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TerminatorService, [{
    type: Injectable
  }], () => [], null);
})();
var FormElementComponentAction = class _FormElementComponentAction {
  constructor(widgetFactory = null, terminator) {
    this.widgetFactory = widgetFactory;
    this.terminator = terminator;
  }
  ngOnInit() {
    this.subs = this.terminator.onDestroy.subscribe((destroy) => {
      if (destroy) {
        this.ref.destroy();
      }
    });
  }
  ngOnChanges() {
    this.ref = this.widgetFactory.createWidget(this.container, this.button.widget || "button");
    this.ref.instance.button = this.button;
    this.ref.instance.formProperty = this.formProperty;
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  static {
    this.ɵfac = function FormElementComponentAction_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormElementComponentAction)(ɵɵdirectiveInject(WidgetFactory), ɵɵdirectiveInject(TerminatorService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormElementComponentAction,
      selectors: [["sf-form-element-action"]],
      viewQuery: function FormElementComponentAction_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7, ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
        }
      },
      inputs: {
        button: "button",
        formProperty: "formProperty"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 0,
      consts: [["target", ""]],
      template: function FormElementComponentAction_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, FormElementComponentAction_ng_template_0_Template, 0, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormElementComponentAction, [{
    type: Component,
    args: [{
      selector: "sf-form-element-action",
      template: "<ng-template #target></ng-template>",
      standalone: false
    }]
  }], () => [{
    type: WidgetFactory
  }, {
    type: TerminatorService
  }], {
    button: [{
      type: Input
    }],
    formProperty: [{
      type: Input
    }],
    container: [{
      type: ViewChild,
      args: ["target", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();
var WidgetChooserComponent = class _WidgetChooserComponent {
  constructor(widgetFactory = null, cdr, terminator) {
    this.widgetFactory = widgetFactory;
    this.cdr = cdr;
    this.terminator = terminator;
    this.widgetInstanciated = new EventEmitter();
  }
  ngOnInit() {
    this.subs = this.terminator.onDestroy.subscribe((destroy) => {
      if (destroy) {
        this.ref.destroy();
      }
    });
  }
  ngOnChanges() {
    this.ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
    this.widgetInstanciated.emit(this.ref.instance);
    this.widgetInstance = this.ref.instance;
    this.cdr.detectChanges();
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  static {
    this.ɵfac = function WidgetChooserComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WidgetChooserComponent)(ɵɵdirectiveInject(WidgetFactory), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TerminatorService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _WidgetChooserComponent,
      selectors: [["sf-widget-chooser"]],
      viewQuery: function WidgetChooserComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7, ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
        }
      },
      inputs: {
        widgetInfo: "widgetInfo"
      },
      outputs: {
        widgetInstanciated: "widgetInstanciated"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 0,
      consts: [["target", ""]],
      template: function WidgetChooserComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", null, 0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetChooserComponent, [{
    type: Component,
    args: [{
      selector: "sf-widget-chooser",
      template: `<div #target></div>`,
      standalone: false
    }]
  }], () => [{
    type: WidgetFactory
  }, {
    type: ChangeDetectorRef
  }, {
    type: TerminatorService
  }], {
    widgetInfo: [{
      type: Input
    }],
    widgetInstanciated: [{
      type: Output
    }],
    container: [{
      type: ViewChild,
      args: ["target", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();
var FormElementComponent = class _FormElementComponent {
  static {
    this.counter = 0;
  }
  constructor(actionRegistry, bindingRegistry, renderer, elementRef, logger) {
    this.actionRegistry = actionRegistry;
    this.bindingRegistry = bindingRegistry;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.logger = logger;
    this.control = new UntypedFormControl("", () => null);
    this.widget = null;
    this.buttons = [];
    this.unlisten = [];
  }
  ngOnInit() {
    this.parseButtons();
    this.setupBindings();
  }
  setupBindings() {
    const bindings = this.bindingRegistry.get(this.formProperty.path);
    if ((bindings || []).length) {
      bindings.forEach((binding) => {
        for (const eventId in binding) {
          this.createBinding(eventId, binding[eventId]);
        }
      });
    }
  }
  createBinding(eventId, listeners) {
    this.unlisten.push(this.renderer.listen(this.elementRef.nativeElement, eventId, (event) => {
      const _listeners = Array.isArray(listeners) ? listeners : [listeners];
      for (const _listener of _listeners) {
        if (_listener instanceof Function) {
          try {
            _listener(event, this.formProperty);
          } catch (e) {
            this.logger.error(`Error calling bindings event listener for '${eventId}'`, e);
          }
        } else {
          this.logger.warn("Calling non function handler for eventId " + eventId + " for path " + this.formProperty.path);
        }
      }
    }));
  }
  parseButtons() {
    if (this.formProperty.schema.buttons !== void 0) {
      this.buttons = this.formProperty.schema.buttons;
      for (let button of this.buttons) {
        this.createButtonCallback(button);
      }
    }
  }
  createButtonCallback(button) {
    button.action = (e) => {
      let action;
      if (button.id && (action = this.actionRegistry.get(button.id))) {
        if (action) {
          action(this.formProperty, button.parameters);
        }
      }
      e.preventDefault();
    };
  }
  onWidgetInstanciated(widget) {
    this.widget = widget;
    let id = this.formProperty.canonicalPathNotation || "field" + _FormElementComponent.counter++;
    if (this.formProperty.root.rootName) {
      id = `${this.formProperty.root.rootName}:${id}`;
    }
    this.widget.formProperty = this.formProperty;
    this.widget.schema = this.formProperty.schema;
    this.widget.name = id;
    this.widget.id = id;
    this.widget.control = this.control;
  }
  ngOnDestroy() {
    if (this.unlisten) {
      this.unlisten.forEach((item) => {
        item();
      });
    }
  }
  static {
    this.ɵfac = function FormElementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormElementComponent)(ɵɵdirectiveInject(ActionRegistry), ɵɵdirectiveInject(BindingRegistry), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LogService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormElementComponent,
      selectors: [["sf-form-element"]],
      inputs: {
        formProperty: "formProperty"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[3, "has-error", "has-success", 4, "ngIf"], [3, "widgetInstanciated", "widgetInfo"], [3, "button", "formProperty", 4, "ngFor", "ngForOf"], [3, "button", "formProperty"]],
      template: function FormElementComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, FormElementComponent_div_0_Template, 3, 6, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.formProperty.visible);
        }
      },
      dependencies: [NgForOf, NgIf, FormElementComponentAction, WidgetChooserComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormElementComponent, [{
    type: Component,
    args: [{
      selector: "sf-form-element",
      template: `
    <div *ngIf="formProperty.visible"
         [class.has-error]="!control.valid"
         [class.has-success]="control.valid">
      <sf-widget-chooser
        (widgetInstanciated)="onWidgetInstanciated($event)"
        [widgetInfo]="formProperty.schema.widget">
      </sf-widget-chooser>
      <sf-form-element-action *ngFor="let button of buttons" [button]="button" [formProperty]="formProperty"></sf-form-element-action>
    </div>`,
      standalone: false
    }]
  }], () => [{
    type: ActionRegistry
  }, {
    type: BindingRegistry
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: LogService
  }], {
    formProperty: [{
      type: Input
    }]
  });
})();
var ArrayWidget = class _ArrayWidget extends ArrayLayoutWidget {
  addItem() {
    this.formProperty.addItem();
    this.updateButtonDisabledState();
  }
  removeItem(item) {
    this.formProperty.removeItem(item);
    this.updateButtonDisabledState();
  }
  trackByIndex(index, item) {
    return index;
  }
  updateButtonDisabledState() {
    this.buttonDisabledAdd = this.isAddButtonDisabled();
    this.buttonDisabledRemove = this.isRemoveButtonDisabled();
  }
  isAddButtonDisabled() {
    if (this.schema.hasOwnProperty("maxItems") && Array.isArray(this.formProperty.properties)) {
      if (this.formProperty.properties.length >= this.schema.maxItems) {
        return true;
      }
    }
    return false;
  }
  isRemoveButtonDisabled() {
    if (this.schema.hasOwnProperty("minItems") && Array.isArray(this.formProperty.properties)) {
      if (this.formProperty.properties.length <= this.schema.minItems) {
        return true;
      }
    }
    return false;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵArrayWidget_BaseFactory;
      return function ArrayWidget_Factory(__ngFactoryType__) {
        return (ɵArrayWidget_BaseFactory || (ɵArrayWidget_BaseFactory = ɵɵgetInheritedFactory(_ArrayWidget)))(__ngFactoryType__ || _ArrayWidget);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ArrayWidget,
      selectors: [["sf-array-widget"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 5,
      vars: 4,
      consts: [[1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "formHelp", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "btn btn-default array-add-button", 3, "disabled", "click", 4, "ngIf"], [1, "horizontal", "control-label"], [1, "formHelp"], [3, "formProperty"], ["class", "btn btn-default array-remove-button", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "btn-default", "array-remove-button", 3, "click", "disabled"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-minus"], [1, "btn", "btn-default", "array-add-button", 3, "click", "disabled"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-plus"]],
      template: function ArrayWidget_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, ArrayWidget_label_1_Template, 2, 2, "label", 1)(2, ArrayWidget_span_2_Template, 2, 1, "span", 2)(3, ArrayWidget_div_3_Template, 3, 2, "div", 3)(4, ArrayWidget_button_4_Template, 3, 1, "button", 4);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.title);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.description);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.formProperty.properties);
          ɵɵadvance();
          ɵɵproperty("ngIf", !(ctx.schema.hasOwnProperty("minItems") && ctx.schema.hasOwnProperty("maxItems") && ctx.schema.minItems === ctx.schema.maxItems));
        }
      },
      dependencies: [NgForOf, NgIf, FormElementComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArrayWidget, [{
    type: Component,
    args: [{
      selector: "sf-array-widget",
      template: `<div class="widget form-group">
	<label *ngIf="schema.title" [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
	<span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
	<div *ngFor="let itemProperty of formProperty.properties">
		<sf-form-element [formProperty]="itemProperty"></sf-form-element>
		<button (click)="removeItem(itemProperty)" class="btn btn-default array-remove-button"
			[disabled]="isRemoveButtonDisabled()" 
			*ngIf="!(schema.hasOwnProperty('minItems') && schema.hasOwnProperty('maxItems') && schema.minItems === schema.maxItems)"
			>
			<span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove
		</button>
	</div>
	<button (click)="addItem()" class="btn btn-default array-add-button"
		[disabled]="isAddButtonDisabled()"
		*ngIf="!(schema.hasOwnProperty('minItems') && schema.hasOwnProperty('maxItems') && schema.minItems === schema.maxItems)"
	>
		<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add
	</button>
</div>`,
      standalone: false
    }]
  }], null, null);
})();
var DisableControlDirective = class _DisableControlDirective {
  set disableControl(condition) {
    const action = condition ? "disable" : "enable";
    this.ngControl.control[action]();
  }
  constructor(ngControl) {
    this.ngControl = ngControl;
  }
  static {
    this.ɵfac = function DisableControlDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisableControlDirective)(ɵɵdirectiveInject(NgControl));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DisableControlDirective,
      selectors: [["", "disableControl", ""]],
      inputs: {
        disableControl: "disableControl"
      },
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisableControlDirective, [{
    type: Directive,
    args: [{
      selector: "[disableControl]",
      standalone: false
    }]
  }], () => [{
    type: NgControl
  }], {
    disableControl: [{
      type: Input
    }]
  });
})();
var CheckboxWidget = class _CheckboxWidget extends ControlWidget {
  constructor() {
    super(...arguments);
    this.checked = {};
  }
  ngAfterViewInit() {
    const control = this.control;
    this.formProperty.valueChanges.subscribe((newValue) => {
      if (control.value !== newValue) {
        control.setValue(newValue, {
          emitEvent: false
        });
        if (newValue && Array.isArray(newValue)) {
          newValue.map((v) => this.checked[v] = true);
        }
      }
    });
    this.formProperty.errorsChanges.subscribe((errors) => {
      control.setErrors(errors, {
        emitEvent: true
      });
    });
    control.valueChanges.subscribe((newValue) => {
      this.formProperty.setValue(newValue, false);
    });
  }
  onCheck(el) {
    if (el.checked) {
      this.checked[el.value] = true;
    } else {
      delete this.checked[el.value];
    }
    this.formProperty.setValue(Object.keys(this.checked), false);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵCheckboxWidget_BaseFactory;
      return function CheckboxWidget_Factory(__ngFactoryType__) {
        return (ɵCheckboxWidget_BaseFactory || (ɵCheckboxWidget_BaseFactory = ɵɵgetInheritedFactory(_CheckboxWidget)))(__ngFactoryType__ || _CheckboxWidget);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckboxWidget,
      selectors: [["sf-checkbox-widget"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 4,
      vars: 3,
      consts: [[1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "checkbox", 4, "ngIf"], [4, "ngIf"], [1, "horizontal", "control-label"], [1, "checkbox"], ["type", "checkbox", 3, "formControl", "indeterminate", "disableControl"], ["type", "hidden", 3, "formControl", 4, "ngIf"], ["type", "hidden", 3, "formControl"], ["class", "checkbox", 4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "change", "value"]],
      template: function CheckboxWidget_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, CheckboxWidget_label_1_Template, 2, 2, "label", 1)(2, CheckboxWidget_div_2_Template, 5, 7, "div", 2)(3, CheckboxWidget_ng_container_3_Template, 2, 1, "ng-container", 3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.title);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.type != "array");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.type === "array");
        }
      },
      dependencies: [NgForOf, NgIf, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, FormControlDirective, DisableControlDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxWidget, [{
    type: Component,
    args: [{
      selector: "sf-checkbox-widget",
      template: `<div class="widget form-group">
    <label *ngIf="schema.title" [attr.for]="id" class="horizontal control-label">
        {{ schema.title }}
    </label>
	<div *ngIf="schema.type!='array'" class="checkbox">
		<label class="horizontal control-label">
			<input [formControl]="control" [attr.name]="name" [attr.id]="id" [indeterminate]="control.value !== false && control.value !== true ? true :null" type="checkbox" [disableControl]="schema.readOnly">
			<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
			{{schema.description}}
		</label>
	</div>
	<ng-container *ngIf="schema.type==='array'">
		<div *ngFor="let option of schema.items.oneOf" class="checkbox">
			<label class="horizontal control-label">
				<input [attr.name]="name"
					value="{{option.enum[0]}}" type="checkbox" 
					[attr.disabled]="schema.readOnly"
					(change)="onCheck($event.target)"
					[attr.checked]="checked[option.enum[0]] ? true : null"
					[attr.id]="id + '.' + option.enum[0]"
					>
				{{option.description}}
			</label>
		</div>
	</ng-container>
</div>`,
      standalone: false
    }]
  }], null, null);
})();
var FileWidget = class _FileWidget extends ControlWidget {
  constructor() {
    super();
    this.reader = new FileReader();
    this.filedata = {};
  }
  ngAfterViewInit() {
    const control = this.control;
    this.formProperty.errorsChanges.subscribe((errors) => {
      control.setErrors(errors, {
        emitEvent: true
      });
    });
    this.reader.onloadend = () => {
      this.filedata.data = window.btoa(this.reader.result);
      this.formProperty.setValue(this.filedata, false);
    };
  }
  onFileChange($event) {
    const file = $event.target.files[0];
    this.filedata.filename = file.name;
    this.filedata.size = file.size;
    this.filedata["content-type"] = file.type;
    this.filedata.encoding = "base64";
    this.reader.readAsBinaryString(file);
  }
  static {
    this.ɵfac = function FileWidget_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileWidget)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FileWidget,
      selectors: [["sf-file-widget"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 5,
      vars: 7,
      consts: [[1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "formHelp", 4, "ngIf"], ["type", "file", 1, "text-widget", "file-widget", 3, "change", "name", "formControl"], ["type", "hidden", 3, "formControl", 4, "ngIf"], [1, "horizontal", "control-label"], [1, "formHelp"], ["type", "hidden", 3, "formControl"]],
      template: function FileWidget_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, FileWidget_label_1_Template, 2, 2, "label", 1)(2, FileWidget_span_2_Template, 2, 1, "span", 2);
          ɵɵelementStart(3, "input", 3);
          ɵɵlistener("change", function FileWidget_Template_input_change_3_listener($event) {
            return ctx.onFileChange($event);
          });
          ɵɵelementEnd();
          ɵɵtemplate(4, FileWidget_input_4_Template, 1, 2, "input", 4);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.title);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.description);
          ɵɵadvance();
          ɵɵproperty("name", ctx.name)("formControl", ctx.control);
          ɵɵattribute("id", ctx.id)("disabled", ctx.schema.readOnly ? true : null);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.readOnly);
        }
      },
      dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, FormControlDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileWidget, [{
    type: Component,
    args: [{
      selector: "sf-file-widget",
      template: `<div class="widget form-group">
	<label *ngIf="schema.title" [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
  <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
  <input [name]="name" class="text-widget file-widget" [attr.id]="id"
    [formControl]="control" type="file" [attr.disabled]="schema.readOnly?true:null"
    (change)="onFileChange($event)">
	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
</div>`,
      standalone: false
    }]
  }], () => [], null);
})();
var IntegerWidget = class _IntegerWidget extends ControlWidget {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵIntegerWidget_BaseFactory;
      return function IntegerWidget_Factory(__ngFactoryType__) {
        return (ɵIntegerWidget_BaseFactory || (ɵIntegerWidget_BaseFactory = ɵɵgetInheritedFactory(_IntegerWidget)))(__ngFactoryType__ || _IntegerWidget);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _IntegerWidget,
      selectors: [["sf-integer-widget"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 4,
      vars: 12,
      consts: [[1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "formHelp", 4, "ngIf"], [1, "text-widget", "integer-widget", "form-control", 3, "formControl"], [1, "horizontal", "control-label"], [1, "formHelp"]],
      template: function IntegerWidget_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, IntegerWidget_label_1_Template, 2, 2, "label", 1)(2, IntegerWidget_span_2_Template, 2, 1, "span", 2);
          ɵɵelement(3, "input", 3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.title);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.description);
          ɵɵadvance();
          ɵɵproperty("formControl", ctx.control);
          ɵɵattribute("readonly", ctx.schema.readOnly ? true : null)("name", ctx.name)("id", ctx.id)("type", "number")("min", ctx.schema.minimum)("max", ctx.schema.maximum)("placeholder", ctx.schema.placeholder)("maxLength", ctx.schema.maxLength || null)("minLength", ctx.schema.minLength || null);
        }
      },
      dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, FormControlDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntegerWidget, [{
    type: Component,
    args: [{
      selector: "sf-integer-widget",
      template: `<div class="widget form-group">
	<label *ngIf="schema.title" [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
  <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
	<input [attr.readonly]="schema.readOnly?true:null" [attr.name]="name"
	[attr.id]="id"
	class="text-widget integer-widget form-control" [formControl]="control"
	[attr.type]="'number'" [attr.min]="schema.minimum" [attr.max]="schema.maximum"
	[attr.placeholder]="schema.placeholder"
	[attr.maxLength]="schema.maxLength || null"
  [attr.minLength]="schema.minLength || null">
</div>`,
      standalone: false
    }]
  }], null, null);
})();
var ObjectWidget = class _ObjectWidget extends ObjectLayoutWidget {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵObjectWidget_BaseFactory;
      return function ObjectWidget_Factory(__ngFactoryType__) {
        return (ɵObjectWidget_BaseFactory || (ɵObjectWidget_BaseFactory = ɵɵgetInheritedFactory(_ObjectWidget)))(__ngFactoryType__ || _ObjectWidget);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ObjectWidget,
      selectors: [["sf-form-object"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "formProperty"]],
      template: function ObjectWidget_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ObjectWidget_fieldset_0_Template, 4, 3, "fieldset", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.formProperty.schema.fieldsets);
        }
      },
      dependencies: [NgForOf, NgIf, FormElementComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObjectWidget, [{
    type: Component,
    args: [{
      selector: "sf-form-object",
      template: `<fieldset *ngFor="let fieldset of formProperty.schema.fieldsets">
	<legend *ngIf="fieldset.title">{{fieldset.title}}</legend>
	<div *ngIf="fieldset.description">{{fieldset.description}}</div>
	<div *ngFor="let fieldId of fieldset.fields">
		<sf-form-element [formProperty]="formProperty.getProperty(fieldId)"></sf-form-element>
	</div>
</fieldset>`,
      standalone: false
    }]
  }], null, null);
})();
var RadioWidget = class _RadioWidget extends ControlWidget {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵRadioWidget_BaseFactory;
      return function RadioWidget_Factory(__ngFactoryType__) {
        return (ɵRadioWidget_BaseFactory || (ɵRadioWidget_BaseFactory = ɵɵgetInheritedFactory(_RadioWidget)))(__ngFactoryType__ || _RadioWidget);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RadioWidget,
      selectors: [["sf-radio-widget"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 5,
      vars: 4,
      consts: [[1, "widget", "form-group"], [4, "ngIf"], ["class", "formHelp", 4, "ngIf"], ["class", "radio", 4, "ngFor", "ngForOf"], ["type", "hidden", 3, "formControl", 4, "ngIf"], [1, "formHelp"], [1, "radio"], [1, "horizontal", "control-label"], ["type", "radio", 3, "formControl", "value", "disableControl"], ["type", "hidden", 3, "formControl"]],
      template: function RadioWidget_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, RadioWidget_label_1_Template, 2, 1, "label", 1)(2, RadioWidget_span_2_Template, 2, 1, "span", 2)(3, RadioWidget_div_3_Template, 4, 6, "div", 3)(4, RadioWidget_input_4_Template, 1, 2, "input", 4);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.title);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.description);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.schema.oneOf);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.readOnly);
        }
      },
      dependencies: [NgForOf, NgIf, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, FormControlDirective, DisableControlDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioWidget, [{
    type: Component,
    args: [{
      selector: "sf-radio-widget",
      template: `<div class="widget form-group">
	<label *ngIf="schema.title">{{schema.title}}</label>
  <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
	<div *ngFor="let option of schema.oneOf" class="radio">
		<label class="horizontal control-label">
			<input [formControl]="control" [attr.name]="name" [attr.id]="id + '.' + option.enum[0]" value="{{option.enum[0]}}" type="radio"  [disableControl]="schema.readOnly||option.readOnly">
			{{option.description}}
		</label>
	</div>
	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
</div>`,
      standalone: false
    }]
  }], null, null);
})();
var RangeWidget = class _RangeWidget extends ControlWidget {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵRangeWidget_BaseFactory;
      return function RangeWidget_Factory(__ngFactoryType__) {
        return (ɵRangeWidget_BaseFactory || (ɵRangeWidget_BaseFactory = ɵɵgetInheritedFactory(_RangeWidget)))(__ngFactoryType__ || _RangeWidget);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RangeWidget,
      selectors: [["sf-range-widget"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 5,
      vars: 10,
      consts: [[1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "formHelp", 4, "ngIf"], [1, "text-widget", "range-widget", 3, "name", "formControl", "disableControl"], ["type", "hidden", 4, "ngIf"], [1, "horizontal", "control-label"], [1, "formHelp"], ["type", "hidden"]],
      template: function RangeWidget_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, RangeWidget_label_1_Template, 2, 2, "label", 1)(2, RangeWidget_span_2_Template, 2, 1, "span", 2);
          ɵɵelement(3, "input", 3);
          ɵɵtemplate(4, RangeWidget_input_4_Template, 1, 1, "input", 4);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.title);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.description);
          ɵɵadvance();
          ɵɵproperty("name", ctx.name)("formControl", ctx.control)("disableControl", ctx.schema.readOnly ? true : null);
          ɵɵattribute("id", ctx.id)("type", "range")("min", ctx.schema.minimum)("max", ctx.schema.maximum);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.readOnly);
        }
      },
      dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, FormControlDirective, DisableControlDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeWidget, [{
    type: Component,
    args: [{
      selector: "sf-range-widget",
      template: `<div class="widget form-group">
	<label *ngIf="schema.title" [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
    <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>	
	<input [name]="name" class="text-widget range-widget" [attr.id]="id"
	[formControl]="control" [attr.type]="'range'" [attr.min]="schema.minimum" [attr.max]="schema.maximum" [disableControl]="schema.readOnly?true:null" >
	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden">
</div>`,
      standalone: false
    }]
  }], null, null);
})();
var SelectWidget = class _SelectWidget extends ControlWidget {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵSelectWidget_BaseFactory;
      return function SelectWidget_Factory(__ngFactoryType__) {
        return (ɵSelectWidget_BaseFactory || (ɵSelectWidget_BaseFactory = ɵɵgetInheritedFactory(_SelectWidget)))(__ngFactoryType__ || _SelectWidget);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SelectWidget,
      selectors: [["sf-select-widget"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 6,
      vars: 5,
      consts: [["use_enum", ""], [1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "formHelp", 4, "ngIf"], ["class", "form-control", 3, "formControl", "disableControl", 4, "ngIf"], ["multiple", "", "class", "form-control", 3, "formControl", "disableControl", 4, "ngIf"], ["type", "hidden", 3, "formControl", 4, "ngIf"], [1, "horizontal", "control-label"], [1, "formHelp"], [1, "form-control", 3, "formControl", "disableControl"], [4, "ngIf", "ngIfElse"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["multiple", "", 1, "form-control", 3, "formControl", "disableControl"], [3, "ngValue", "disabled", 4, "ngFor", "ngForOf"], [3, "ngValue", "disabled"], ["type", "hidden", 3, "formControl"]],
      template: function SelectWidget_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1);
          ɵɵtemplate(1, SelectWidget_label_1_Template, 2, 2, "label", 2)(2, SelectWidget_span_2_Template, 2, 1, "span", 3)(3, SelectWidget_select_3_Template, 4, 6, "select", 4)(4, SelectWidget_select_4_Template, 2, 5, "select", 5)(5, SelectWidget_input_5_Template, 1, 2, "input", 6);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.title);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.description);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.type != "array");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.type === "array");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.readOnly);
        }
      },
      dependencies: [NgForOf, NgIf, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, NgControlStatus, FormControlDirective, DisableControlDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectWidget, [{
    type: Component,
    args: [{
      selector: "sf-select-widget",
      template: `<div class="widget form-group">
	<label *ngIf="schema.title" [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>

	<span *ngIf="schema.description" class="formHelp">
		{{schema.description}}
	</span>

	<select *ngIf="schema.type!='array'" [formControl]="control" [attr.name]="name" [attr.id]="id" [disableControl]="schema.readOnly" class="form-control">
		<ng-container *ngIf="schema.oneOf; else use_enum">
			<option *ngFor="let option of schema.oneOf" [ngValue]="option.enum[0]" >{{option.description}}</option>
		</ng-container>
		<ng-template #use_enum>
			<option *ngFor="let option of schema.enum" [ngValue]="option" >{{option}}</option>
		</ng-template>
	</select>

	<select *ngIf="schema.type==='array'" multiple [formControl]="control" [attr.name]="name" [attr.id]="id" [disableControl]="schema.readOnly" class="form-control">
    <option *ngFor="let option of schema.items.oneOf" [ngValue]="option.enum[0]" [disabled]="option.readOnly">{{option.description}}</option>
	</select>

	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
</div>`,
      standalone: false
    }]
  }], null, null);
})();
var StringWidget = class _StringWidget extends ControlWidget {
  getInputType() {
    if (!this.schema.widget.id || this.schema.widget.id === "string") {
      return "text";
    } else {
      return this.schema.widget.id;
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵStringWidget_BaseFactory;
      return function StringWidget_Factory(__ngFactoryType__) {
        return (ɵStringWidget_BaseFactory || (ɵStringWidget_BaseFactory = ɵɵgetInheritedFactory(_StringWidget)))(__ngFactoryType__ || _StringWidget);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StringWidget,
      selectors: [["sf-string-widget"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 2,
      consts: [["notHiddenFieldBlock", ""], ["type", "hidden", 3, "formControl", 4, "ngIf", "ngIfElse"], ["type", "hidden", 3, "formControl"], [1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "formHelp", 4, "ngIf"], [1, "text-widget.id", "textline-widget", "form-control", 3, "name", "formControl", "disableControl"], ["type", "hidden", 3, "formControl", 4, "ngIf"], [1, "horizontal", "control-label"], [1, "formHelp"]],
      template: function StringWidget_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, StringWidget_input_0_Template, 1, 2, "input", 1)(1, StringWidget_ng_template_1_Template, 5, 13, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const notHiddenFieldBlock_r2 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.schema.widget.id === "hidden")("ngIfElse", notHiddenFieldBlock_r2);
        }
      },
      dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, FormControlDirective, DisableControlDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StringWidget, [{
    type: Component,
    args: [{
      selector: "sf-string-widget",
      template: `<input *ngIf="this.schema.widget.id ==='hidden'; else notHiddenFieldBlock"
  [attr.name]="name" type="hidden" [formControl]="control">
<ng-template #notHiddenFieldBlock>
<div class="widget form-group">
    <label *ngIf="schema.title" [attr.for]="id" class="horizontal control-label">
    	{{ schema.title }}
    </label>
    <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
    <input [name]="name" [attr.readonly]="(schema.widget.id!=='color') && schema.readOnly?true:null"
    class="text-widget.id textline-widget form-control"
    [attr.type]="!this.schema.widget.id || this.schema.widget.id === 'string' ? 'text' : this.schema.widget.id"
    [attr.id]="id"  [formControl]="control" [attr.placeholder]="schema.placeholder"
    [attr.maxLength]="schema.maxLength || null"
    [attr.minLength]="schema.minLength || null"
    [attr.required]="schema.isRequired || null"
	[disableControl]="(schema.widget.id=='color' && schema.readOnly)?true:null">
    <input *ngIf="(schema.widget.id==='color' && schema.readOnly)" [attr.name]="name" type="hidden" [formControl]="control">
</div>
</ng-template>`,
      standalone: false
    }]
  }], null, null);
})();
var TextAreaWidget = class _TextAreaWidget extends ControlWidget {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTextAreaWidget_BaseFactory;
      return function TextAreaWidget_Factory(__ngFactoryType__) {
        return (ɵTextAreaWidget_BaseFactory || (ɵTextAreaWidget_BaseFactory = ɵɵgetInheritedFactory(_TextAreaWidget)))(__ngFactoryType__ || _TextAreaWidget);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TextAreaWidget,
      selectors: [["sf-textarea-widget"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 4,
      vars: 9,
      consts: [[1, "widget", "form-group"], ["class", "horizontal control-label", 4, "ngIf"], ["class", "formHelp", 4, "ngIf"], [1, "text-widget", "textarea-widget", "form-control", 3, "readonly", "name", "formControl"], [1, "horizontal", "control-label"], [1, "formHelp"]],
      template: function TextAreaWidget_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, TextAreaWidget_label_1_Template, 2, 2, "label", 1)(2, TextAreaWidget_span_2_Template, 2, 1, "span", 2);
          ɵɵelement(3, "textarea", 3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.title);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.schema.description);
          ɵɵadvance();
          ɵɵproperty("readonly", ctx.schema.readOnly)("name", ctx.name)("formControl", ctx.control);
          ɵɵattribute("id", ctx.id)("placeholder", ctx.schema.placeholder)("maxLength", ctx.schema.maxLength || null)("minLength", ctx.schema.minLength || null);
        }
      },
      dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, FormControlDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextAreaWidget, [{
    type: Component,
    args: [{
      selector: "sf-textarea-widget",
      template: `<div class="widget form-group">
	<label *ngIf="schema.title" [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
  <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
	<textarea [readonly]="schema.readOnly" [name]="name"
		[attr.id]="id"
		class="text-widget textarea-widget form-control"
		[attr.placeholder]="schema.placeholder"
		[attr.maxLength]="schema.maxLength || null"
    [attr.minLength]="schema.minLength || null"
		[formControl]="control"></textarea>
</div>`,
      standalone: false
    }]
  }], null, null);
})();
var ButtonWidget = class _ButtonWidget {
  static {
    this.ɵfac = function ButtonWidget_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ButtonWidget)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ButtonWidget,
      selectors: [["sf-button-widget"]],
      standalone: false,
      decls: 2,
      vars: 1,
      consts: [[3, "click"]],
      template: function ButtonWidget_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "button", 0);
          ɵɵlistener("click", function ButtonWidget_Template_button_click_0_listener($event) {
            return ctx.button.action($event);
          });
          ɵɵtext(1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵtextInterpolate(ctx.button.label);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonWidget, [{
    type: Component,
    args: [{
      selector: "sf-button-widget",
      template: '<button (click)="button.action($event)">{{button.label}}</button>',
      standalone: false
    }]
  }], null, null);
})();
var DefaultWidgetRegistry = class _DefaultWidgetRegistry extends WidgetRegistry {
  constructor() {
    super();
    this.register("array", ArrayWidget);
    this.register("object", ObjectWidget);
    this.register("string", StringWidget);
    this.register("search", StringWidget);
    this.register("tel", StringWidget);
    this.register("url", StringWidget);
    this.register("email", StringWidget);
    this.register("password", StringWidget);
    this.register("color", StringWidget);
    this.register("date", StringWidget);
    this.register("date-time", StringWidget);
    this.register("time", StringWidget);
    this.register("integer", IntegerWidget);
    this.register("number", IntegerWidget);
    this.register("range", RangeWidget);
    this.register("textarea", TextAreaWidget);
    this.register("file", FileWidget);
    this.register("select", SelectWidget);
    this.register("radio", RadioWidget);
    this.register("boolean", CheckboxWidget);
    this.register("checkbox", CheckboxWidget);
    this.register("button", ButtonWidget);
    this.setDefaultWidget(StringWidget);
  }
  static {
    this.ɵfac = function DefaultWidgetRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultWidgetRegistry)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DefaultWidgetRegistry,
      factory: _DefaultWidgetRegistry.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultWidgetRegistry, [{
    type: Injectable
  }], () => [], null);
})();
var FieldType;
(function(FieldType2) {
  FieldType2["String"] = "string";
  FieldType2["Object"] = "object";
  FieldType2["Array"] = "array";
  FieldType2["Boolean"] = "boolean";
  FieldType2["Integer"] = "integer";
  FieldType2["Number"] = "number";
  FieldType2["Null"] = "null";
})(FieldType || (FieldType = {}));
function isBlank(o) {
  return o === null || o === void 0;
}
function isEmptyObject(o) {
  for (var i in o) return true;
  return false;
}
var FormProperty = class {
  /**
   * Provides the unique path of this form element.<br/>
   * E.g.:
   * <code>/garage/cars</code>,<br/>
   * <code>/shop/book/0/page/1/</code>
   */
  get _canonicalPath() {
    return this.__canonicalPath;
  }
  set _canonicalPath(canonicalPath) {
    this.__canonicalPath = canonicalPath;
    this.__canonicalPathNotation = (this.__canonicalPath || "").replace(new RegExp("^/", "ig"), "").replace(new RegExp("/$", "ig"), "").replace(new RegExp("/", "ig"), ".");
  }
  /**
   * Uses the unique path provided by the property <code>_canonicalPath</code><br/>
   * but converts it to a HTML Element Attribute ID compliant format.<br/>
   * E.g.:
   * <code>garage.cars</code>,<br/>
   * <code>shop.book.0.page.1.</code>
   */
  get canonicalPathNotation() {
    return this.__canonicalPathNotation;
  }
  /**
   * Provides the HTML Element Attribute ID/NAME compliant representation
   * of the root element.<br/>
   * Represents the HTML FORM NAME.<br/>
   * Only the root <code>FormProperty</code> will provide a value here.
   */
  get rootName() {
    return this._rootName;
  }
  constructor(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) {
    this.validatorRegistry = validatorRegistry;
    this.schema = schema;
    this.logger = logger;
    this._value = null;
    this._errors = null;
    this._valueChanges = new BehaviorSubject(null);
    this._errorsChanges = new BehaviorSubject(null);
    this._visible = true;
    this._visibilityChanges = new BehaviorSubject(true);
    this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);
    this.expressionCompilerVisibiltyIf = expressionCompilerFactory.createExpressionCompilerVisibilityIf();
    this._parent = parent;
    if (parent) {
      this._root = parent.root;
    } else if (this instanceof PropertyGroup) {
      this._root = this;
      this._rootName = this.createRootName();
    }
    this._path = path;
  }
  /**
   * Creates the HTML ID and NAME attribute compliant string.
   */
  createRootName() {
    if (this.schema && this.schema["name"]) {
      return this._rootName = this.schema["name"].replace(new RegExp("[\\s]+", "ig"), "_");
    }
    return "";
  }
  get valueChanges() {
    return this._valueChanges;
  }
  get errorsChanges() {
    return this._errorsChanges;
  }
  get type() {
    return this.schema.type;
  }
  get isNullableType() {
    return Array.isArray(this.schema.type) && this.schema.type.some((type) => type === FieldType.Null);
  }
  get parent() {
    return this._parent;
  }
  get root() {
    return this._root || this;
  }
  get path() {
    return this._path;
  }
  get value() {
    return this._value;
  }
  get visible() {
    return this._visible;
  }
  get valid() {
    return this._errors === null;
  }
  updateValueAndValidity(onlySelf = false, emitEvent = true) {
    this._updateValue();
    if (emitEvent) {
      this.valueChanges.next(this.value);
    }
    this._runValidation();
    if (this.parent && !onlySelf) {
      this.parent.updateValueAndValidity(onlySelf, emitEvent);
    }
  }
  /**
   * @internal
   */
  _runValidation() {
    let errors = this.schemaValidator(this._value) || [];
    for (let i = errors.length - 1; i >= 0; i -= 1) {
      const error = errors[i];
      if (error.code === "OBJECT_MISSING_REQUIRED_PROPERTY") {
        let path = `${error.path.substring(1)}`;
        if (path.substring(1) !== error.params[0]) {
          path += `/${error.params.join("/")}`;
        }
        const requiredProperty = this.searchProperty(path);
        if (requiredProperty && requiredProperty.visible === false) {
          errors.splice(i, 1);
        }
      }
    }
    let customValidator = this.validatorRegistry.get(this.path);
    if (customValidator) {
      let customErrors = customValidator(this.value, this, this.findRoot());
      errors = this.mergeErrors(errors, customErrors);
    }
    if (errors.length === 0) {
      errors = null;
    }
    this._errors = errors;
    this.setErrors(this._errors);
  }
  mergeErrors(errors, newErrors) {
    if (newErrors) {
      if (Array.isArray(newErrors)) {
        errors = errors.concat(...newErrors);
      } else {
        errors.push(newErrors);
      }
    }
    return errors;
  }
  setErrors(errors) {
    this._errors = errors;
    this._errorsChanges.next(errors);
  }
  extendErrors(errors) {
    errors = this.mergeErrors(this._errors || [], errors);
    this.setErrors(errors);
  }
  searchProperty(path) {
    let prop = this;
    let base = null;
    let result = null;
    if (path[0] === "/") {
      base = this.findRoot();
      result = base.getProperty(path.substr(1));
    } else {
      while (result === null && prop.parent !== null) {
        prop = base = prop.parent;
        result = base.getProperty(path);
      }
    }
    return result;
  }
  findRoot() {
    let property = this;
    while (property.parent !== null) {
      property = property.parent;
    }
    return property;
  }
  setVisible(visible) {
    this._visible = visible;
    this._visibilityChanges.next(visible);
    this.updateValueAndValidity();
  }
  /**
   * Making use of the expression compiler for the <code>visibleIf</code> condition
   * @param sourceProperty The source property where the `visibleIf` condition is set.
   * @param targetProperty  The target property what provided the `value` on which the `visibleIf` condition will be checked against. May be `null` or `undefined`
   * @param dependencyPath The dependency path of the `targetProperty`
   * @param value The value of the `targetProperty` to check the `visiblityIf` condintion against. May be `null` or `undefined`
   * @param expression The value or expression to check against the `value` for the `targetProperty`. May be `null` or `undefined`
   */
  __evaluateVisibilityIf(sourceProperty, targetProperty, dependencyPath, value = "", expression) {
    try {
      let valid = false;
      const expArray = Array.isArray(expression) ? expression : [expression];
      for (const expString of expArray) {
        if (typeof expString === "boolean") {
          valid = !expString ? !value : value;
        } else if (typeof expString === "number") {
          valid = !!value || value == 0 ? `${expString}` === `${value}` : false;
        } else if (-1 !== `${expString}`.indexOf("$ANY$")) {
          if (Array.isArray(value)) {
            valid = value.length > 0;
          } else if (typeof value === "number") {
            valid = true;
          } else if (typeof value === "boolean") {
            valid = true;
          } else if (typeof value === "string") {
            valid = value !== "";
          } else if (typeof value === "object") {
            valid = !isEmptyObject(value);
          }
        } else if (0 === `${expString}`.indexOf("$EXP$")) {
          const _expresssion = expString.substring("$EXP$".length);
          valid = true === this.expressionCompilerVisibiltyIf.evaluate(_expresssion, {
            source: sourceProperty,
            target: targetProperty
          });
        } else if (Array.isArray(value)) {
          valid = value.some((val) => `${val}` === `${expString}`);
        } else {
          valid = !!value ? `${expString}` === `${value}` : false;
        }
        if (valid) {
          break;
        }
      }
      return valid;
    } catch (error) {
      this.logger.error('Error processing "VisibileIf" expression for path: ', dependencyPath, `source - ${sourceProperty ? sourceProperty._canonicalPath : "<no-sourceProperty>"}: `, sourceProperty, `target - ${targetProperty ? targetProperty._canonicalPath : "<no-targetProperty>"}: `, targetProperty, "value:", value, "expression: ", expression, "error: ", error);
    }
  }
  /**
   * binds visibility conditions of type `oneOf` and `allOf`.
   * @returns `true` if any visibility binding of type `oneOf` or `allOf` has been processed. Otherwise `false`.
   */
  __bindVisibility_oneOf_or_allOf() {
    const visibleIfProperty = this.schema.visibleIf;
    let oneOfOrAllOf;
    if (visibleIfProperty) {
      if (!!visibleIfProperty.oneOf) oneOfOrAllOf = visibleIfProperty.oneOf;
      else if (!!visibleIfProperty.allOf) oneOfOrAllOf = visibleIfProperty.allOf;
    }
    if (visibleIfProperty && oneOfOrAllOf) {
      const finalObservable = this.__bindConditionalVisiblityChain(oneOfOrAllOf, !!visibleIfProperty.oneOf, !!visibleIfProperty.allOf);
      finalObservable.pipe(distinctUntilChanged()).subscribe((visible) => {
        this.setVisible(visible);
      });
      return true;
    }
    return false;
  }
  /**
   * helper function to recursively bind visibilty in an arbitrary chain oneOf allOf chain
   * @param visbilityElement The element from the visibitly chain. Can be an array from e.g. {"oneOf": [...]} or an element with one property for the dependency path e.g. {"textField1": ...}
   * @param isOneOf Boolean to chain the oberservables as oneOf
   * @param isAllOf Boolean to chain the oberservables as allOf
   * @returns An Array with one
   */
  __bindConditionalVisiblityChain(visbilityElement, isOneOf, isAllOf) {
    const visibiltyBindings = [];
    if (isOneOf || isAllOf) {
      for (const objInOf of visbilityElement) {
        visibiltyBindings.push(this.__bindConditionalVisiblityChain(objInOf, false, false));
      }
    } else {
      const containsOneOf = visbilityElement.hasOwnProperty("oneOf");
      const containsAllOf = visbilityElement.hasOwnProperty("allOf");
      let visibleIfOf = null;
      if (containsOneOf) visibleIfOf = visbilityElement.oneOf;
      else if (containsAllOf) visibleIfOf = visbilityElement.allOf;
      if (visibleIfOf) {
        if (visibleIfOf.length == 0) return of(false);
        return this.__bindConditionalVisiblityChain(visibleIfOf, containsOneOf, containsAllOf);
      } else {
        const observables = this.__handleDependencyPath(visbilityElement);
        return combineLatest(observables, (...values) => values.indexOf(true) !== -1);
      }
    }
    let ret;
    if (isAllOf) ret = combineLatest(visibiltyBindings, (...values) => values.indexOf(false) === -1);
    else if (isOneOf) ret = combineLatest(visibiltyBindings, (...values) => values.indexOf(true) !== -1);
    return ret;
  }
  /**
   * Handles a dependency path in a oneOf or allOf
   * @param dependencyElement An element / object which contains neither a field with oneOf or allOf as name. Handled as dependency path in json
   * @returns An oberservable boolean containing the evaluation of the statement, where the statement is the value of the dependency path field
   */
  __handleDependencyPath(dependencyElement) {
    const dependencyPath = Object.keys(dependencyElement)[0];
    const propertiesBinding = [];
    const properties = this.findProperties(this, dependencyPath);
    if ((properties || []).length) {
      for (const property of properties) {
        if (property) {
          let valueCheck;
          const _chk = (value) => this.__evaluateVisibilityIf(this, property, dependencyPath, value, dependencyElement[dependencyPath]) ? true : false;
          valueCheck = property.valueChanges.pipe(map(_chk));
          const visibilityCheck = property._visibilityChanges;
          const and = combineLatest([valueCheck, visibilityCheck], (v1, v2) => v1 && v2);
          propertiesBinding.push(and);
        }
      }
      return propertiesBinding;
    } else {
      this.logger.warn("Can't find property " + dependencyPath + " for visibility check of " + this.path);
      this.registerMissingVisibilityBinding(dependencyPath, this);
    }
    return [of(false)];
  }
  // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
  _bindVisibility() {
    if (this.__bindVisibility_oneOf_or_allOf()) return;
    let visibleIf = this.schema.visibleIf;
    if (typeof visibleIf === "object" && Object.keys(visibleIf).length === 0) {
      this.setVisible(false);
    } else if (visibleIf !== void 0) {
      let propertiesBinding = [];
      for (let dependencyPath in visibleIf) {
        if (visibleIf.hasOwnProperty(dependencyPath)) {
          const properties = this.findProperties(this, dependencyPath);
          if ((properties || []).length) {
            for (const property of properties) {
              if (property) {
                const valueCheck = property.valueChanges.pipe(map((value) => this.__evaluateVisibilityIf(this, property, dependencyPath, value, visibleIf[dependencyPath])));
                const visibilityCheck = property._visibilityChanges;
                const and = combineLatest([valueCheck, visibilityCheck], (v1, v2) => v1 && v2);
                propertiesBinding.push(and);
              }
            }
          } else {
            this.logger.warn("Can't find property " + dependencyPath + " for visibility check of " + this.path);
            this.registerMissingVisibilityBinding(dependencyPath, this);
            this.setVisible(false);
          }
        }
      }
      combineLatest(propertiesBinding, (...values) => {
        return values.indexOf(true) !== -1;
      }).pipe(distinctUntilChanged()).subscribe((visible) => {
        this.setVisible(visible);
      });
    }
  }
  registerMissingVisibilityBinding(dependencyPath, formProperty) {
    formProperty._propertyBindingRegistry.getPropertyBindingsVisibility().add(dependencyPath, formProperty.path);
  }
  /**
   * Finds all <code>formProperties</code> from a path with wildcards.<br/>
   * e.g: <code>/garage/cars/&#42;/tires/&#42;/name</code><br/>
   * @param target
   * @param propertyPath
   */
  findProperties(target, propertyPath) {
    const props = [];
    const paths = this.findPropertyPaths(target, propertyPath);
    for (const path of paths) {
      const p = target.searchProperty(path);
      if (p) {
        props.push(p);
      }
    }
    return props;
  }
  /**
   * Creates canonical paths from a path with wildcards.
   * e.g:<br/>
   * From:<br/>
   * <code>/garage/cars/&#42;/tires/&#42;/name</code><br/>
   * it creates:<br/>
   * <code>/garage/cars/0/tires/0/name</code><br/>
   * <code>/garage/cars/0/tires/1/name</code><br/>
   * <code>/garage/cars/0/tires/2/name</code><br/>
   * <code>/garage/cars/0/tires/3/name</code><br/>
   * <code>/garage/cars/1/tires/0/name</code><br/>
   * <code>/garage/cars/2/tires/1/name</code><br/>
   * <code>/garage/cars/3/tires/2/name</code><br/>
   * <code>/garage/cars/3/tires/3/name</code><br/>
   * <code>/garage/cars/&#42;/tires/&#42;/name</code><br/>
   * <code>/garage/cars/&#42;/tires/2/name</code><br/>
   * <code>/garage/cars/&#42;/tires/3/name</code><br/>
   * <br/>etc...
   * @param target
   * @param path
   * @param parentPath
   */
  findPropertyPaths(target, path, parentPath) {
    const ix = path.indexOf("*");
    if (-1 !== ix) {
      const prePath = ix > -1 ? path.substring(0, ix - 1) : path;
      const subPath = ix > -1 ? path.substring(ix + 1) : path;
      const prop = target.searchProperty(prePath);
      let pathFound = [];
      if (prop instanceof PropertyGroup) {
        const arrProp = prop.properties;
        for (let i = 0; i < arrProp.length; i++) {
          const curreItemPath = (parentPath || "") + prePath + (prePath.endsWith("/") ? "" : "/") + i + subPath;
          const curreItemPrePath = (parentPath || "") + prePath + i;
          if (-1 === curreItemPath.indexOf("*")) {
            pathFound.push(curreItemPath);
          }
          const childrenPathFound = this.findPropertyPaths(arrProp[i], subPath, curreItemPrePath);
          pathFound = pathFound.concat(childrenPathFound);
        }
      }
      return pathFound;
    }
    return [path];
  }
};
var PropertyGroup = class _PropertyGroup extends FormProperty {
  constructor() {
    super(...arguments);
    this._properties = null;
    this._propertyProxyHandler = new ExtendedProxyHandler(this.logger);
  }
  get properties() {
    return this._properties;
  }
  set properties(properties) {
    this._properties = new Proxy(properties, this._propertyProxyHandler);
  }
  getProperty(path) {
    let subPathIdx = path.indexOf("/");
    let propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
    let property = this.properties[propertyId];
    if (property !== null && subPathIdx !== -1 && property instanceof _PropertyGroup) {
      let subPath = path.substr(subPathIdx + 1);
      property = property.getProperty(subPath);
    }
    return property;
  }
  forEachChild(fn) {
    for (let propertyId in this.properties) {
      if (this.properties.hasOwnProperty(propertyId)) {
        let property = this.properties[propertyId];
        fn(property, propertyId);
      }
    }
  }
  forEachChildRecursive(fn) {
    this.forEachChild((child) => {
      fn(child);
    });
  }
  _bindVisibility() {
    super._bindVisibility();
    this._bindVisibilityRecursive();
  }
  _bindVisibilityRecursive() {
    this.forEachChildRecursive((property) => {
      property._bindVisibility();
    });
  }
  isRoot() {
    return this === this.root;
  }
};
var ExtendedProxyHandler = class {
  constructor(logger) {
    this.logger = logger;
  }
  /**
   * When a new item is added it will be checked for visibility updates to proceed <br/>
   * if any other field has a binding reference to it.<br/>
   */
  set(target, p, value, receiver) {
    const assertCanonicalPath = (propertyValue) => {
      const formProperty = propertyValue;
      if (Array.isArray(target) && propertyValue instanceof FormProperty) {
        const getCanonicalPath = (propertyPath, indexOfChild) => {
          let pos;
          if (propertyPath && -1 !== (pos = propertyPath.lastIndexOf("*"))) {
            return propertyPath.substring(0, pos) + indexOfChild.toString() + propertyPath.substring(pos + 1);
          }
        };
        if (formProperty) {
          formProperty._canonicalPath = getCanonicalPath(formProperty._canonicalPath, p);
        }
      }
      const recalculateCanonicalPath = (formProperty2) => {
        if (!(formProperty2 instanceof PropertyGroup)) return;
        const propertyGroup2 = formProperty2;
        const propertyGroupChildren2 = Array.isArray(propertyGroup2.properties) ? propertyGroup2.properties : Object.values(propertyGroup2.properties || {});
        if (propertyGroupChildren2.length || (formProperty2.path || "").endsWith("/*")) {
          for (const child of propertyGroupChildren2) {
            if (child.__canonicalPath.indexOf("*")) {
              const p_path = formProperty2._canonicalPath.split("/");
              child._canonicalPath = p_path.concat(child._canonicalPath.split("/").splice(p_path.length)).join("/");
            }
            recalculateCanonicalPath(child);
          }
        }
      };
      recalculateCanonicalPath(formProperty);
      const propertyGroup = formProperty;
      const propertyGroupChildren = Array.isArray(propertyGroup.properties) ? propertyGroup.properties : Object.values(propertyGroup.properties || {});
      return {
        property: formProperty,
        children: propertyGroupChildren
      };
    };
    const {
      property,
      children
    } = assertCanonicalPath(value);
    const result = target[p] = value;
    const rebindVisibility = () => {
      const rebindAll = [property].concat(children);
      const findPropertiesToRebind = (formProperty) => {
        const propertyBindings = formProperty._propertyBindingRegistry.getPropertyBindingsVisibility();
        let rebind = [];
        if (formProperty._canonicalPath) {
          rebind = rebind.concat(rebind.concat(propertyBindings.findByDependencyPath(formProperty._canonicalPath) || []));
          if (formProperty._canonicalPath.startsWith("/")) {
            rebind = rebind.concat(rebind.concat(propertyBindings.findByDependencyPath(formProperty._canonicalPath.substring(1)) || []));
          }
        }
        rebind = rebind.concat(propertyBindings.findByDependencyPath(formProperty.path) || []);
        if (formProperty.path.startsWith("/")) {
          rebind = rebind.concat(rebind.concat(propertyBindings.findByDependencyPath(formProperty.path.substring(1)) || []));
        }
        const uniqueValues = {};
        for (const item of rebind) {
          uniqueValues[item] = item;
        }
        return Object.keys(uniqueValues);
      };
      for (const _property of rebindAll) {
        if (_property instanceof FormProperty) {
          try {
            const rebindPaths = findPropertiesToRebind(_property);
            for (const rebindPropPath of rebindPaths) {
              const rebindProp = _property.searchProperty(rebindPropPath);
              if (!rebindProp) {
                this.logger.warn("Can't find property to rebind visibility at path:", _property.path, "property:", _property);
              } else {
                rebindProp._bindVisibility();
              }
            }
          } catch (e) {
            this.logger.error("Rebinding visibility error at path:", _property.path, "property:", _property, e);
          }
        }
      }
    };
    rebindVisibility();
    return result;
  }
  get(target, p, receiver) {
    return target[p];
  }
  deleteProperty(target, p) {
    return delete target[p];
  }
};
var PROPERTY_TYPE_MAPPING = {};
var FormPropertyFactory = class {
  constructor(schemaValidatorFactory, validatorRegistry, propertyBindingRegistry, expressionCompilerFactory, logger) {
    this.schemaValidatorFactory = schemaValidatorFactory;
    this.validatorRegistry = validatorRegistry;
    this.propertyBindingRegistry = propertyBindingRegistry;
    this.expressionCompilerFactory = expressionCompilerFactory;
    this.logger = logger;
  }
  createProperty(schema, parent = null, propertyId) {
    let newProperty = null;
    let path = "";
    let _canonicalPath = "";
    if (parent) {
      path += parent.path;
      if (parent.parent !== null) {
        path += "/";
        _canonicalPath += "/";
      }
      if (parent.type === "object") {
        path += propertyId;
        _canonicalPath += propertyId;
      } else if (parent.type === "array") {
        path += "*";
        _canonicalPath += "*";
      } else {
        throw new Error("Instanciation of a FormProperty with an unknown parent type: " + parent.type);
      }
      _canonicalPath = (parent._canonicalPath || parent.path) + _canonicalPath;
    } else {
      path = "/";
      _canonicalPath = "/";
    }
    if (schema.$ref) {
      const refSchema = this.schemaValidatorFactory.getSchema(parent.root.schema, schema.$ref);
      newProperty = this.createProperty(refSchema, parent, path);
    } else {
      const type = this.isUnionType(schema.type) && this.isValidNullableUnionType(schema.type) ? this.extractTypeFromNullableUnionType(schema.type) : schema.type;
      if (PROPERTY_TYPE_MAPPING[type]) {
        if (type === "object" || type === "array") {
          newProperty = PROPERTY_TYPE_MAPPING[type](this.schemaValidatorFactory, this.validatorRegistry, this.expressionCompilerFactory, schema, parent, path, this, this.logger);
        } else {
          newProperty = PROPERTY_TYPE_MAPPING[type](this.schemaValidatorFactory, this.validatorRegistry, this.expressionCompilerFactory, schema, parent, path, this.logger);
        }
      } else {
        throw new TypeError(`Undefined type ${type} (existing: ${Object.keys(PROPERTY_TYPE_MAPPING)})`);
      }
    }
    newProperty._propertyBindingRegistry = this.propertyBindingRegistry;
    newProperty._canonicalPath = _canonicalPath;
    if (newProperty instanceof PropertyGroup) newProperty.reset(null, true);
    return newProperty;
  }
  isUnionType(unionType) {
    return Array.isArray(unionType) && unionType.length > 1;
  }
  isValidNullableUnionType(unionType) {
    if (!unionType.some((subType) => subType === FieldType.Null)) {
      throw new TypeError(`Unsupported union type ${unionType}. Supports only nullable union types, for example ["string", "null"]`);
    }
    if (unionType.length !== 2) {
      throw new TypeError(`Unsupported count of types in nullable union type ${unionType}. Supports only two types one of the which should be "null"`);
    }
    const type = this.extractTypeFromNullableUnionType(unionType);
    if (!type || [FieldType.Object, FieldType.Array].includes(type)) {
      throw new TypeError(`Unsupported second type ${type} for nullable union. Allowed types are "${FieldType.Number}", "${FieldType.Integer}", "${FieldType.Boolean}", "${FieldType.String}"`);
    }
    return true;
  }
  extractTypeFromNullableUnionType(unionType) {
    return unionType.filter((type) => type !== "null")?.[0];
  }
};
var AtomicProperty = class extends FormProperty {
  setValue(value, onlySelf = false) {
    this._value = value;
    this.updateValueAndValidity(onlySelf, true);
  }
  reset(value = null, onlySelf = true) {
    this.resetValue(value);
    this.updateValueAndValidity(onlySelf, true);
  }
  resetValue(value) {
    if (value === null) {
      if (this.schema.default !== void 0) {
        value = this.schema.default;
      } else {
        value = this.fallbackValue();
      }
    }
    this._value = value;
  }
  _hasValue() {
    return this.fallbackValue() !== this.value;
  }
  _updateValue() {
  }
};
var ObjectProperty = class extends PropertyGroup {
  constructor(formPropertyFactory, schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) {
    super(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
    this.formPropertyFactory = formPropertyFactory;
    this.propertiesId = [];
    this.createProperties();
  }
  setValue(value, onlySelf) {
    for (const propertyId in value) {
      if (value.hasOwnProperty(propertyId)) {
        this.properties[propertyId].setValue(value[propertyId], true);
      }
    }
    this.updateValueAndValidity(onlySelf, true);
  }
  reset(value, onlySelf = true) {
    value = value || this.schema.default || {};
    this.resetProperties(value);
    this.updateValueAndValidity(onlySelf, true);
  }
  resetProperties(value) {
    for (const propertyId in this.schema.properties) {
      if (this.schema.properties.hasOwnProperty(propertyId)) {
        this.properties[propertyId].reset(value[propertyId], true);
      }
    }
  }
  createProperties() {
    this.properties = {};
    this.propertiesId = [];
    for (const propertyId in this.schema.properties) {
      if (this.schema.properties.hasOwnProperty(propertyId)) {
        const propertySchema = this.schema.properties[propertyId];
        this.properties[propertyId] = this.formPropertyFactory.createProperty(propertySchema, this, propertyId);
        this.propertiesId.push(propertyId);
      }
    }
  }
  _hasValue() {
    return !!Object.keys(this.value).length;
  }
  _updateValue() {
    this.reduceValue();
  }
  _runValidation() {
    super._runValidation();
    if (this._errors) {
      this._errors.forEach((error) => {
        const prop = this.searchProperty(error.path.slice(1));
        if (prop) {
          prop.extendErrors(error);
        }
      });
    }
  }
  reduceValue() {
    const value = {};
    this.forEachChild((property, propertyId) => {
      if (property.visible && property._hasValue()) {
        value[propertyId] = property.value;
      }
    });
    this._value = value;
  }
};
PROPERTY_TYPE_MAPPING.object = (schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, formPropertyFactory, logger) => {
  return new ObjectProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};
var ArrayProperty = class extends PropertyGroup {
  constructor(formPropertyFactory, schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) {
    super(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
    this.formPropertyFactory = formPropertyFactory;
  }
  addItem(value = null) {
    let newProperty = this.addProperty();
    newProperty.reset(value, false);
    newProperty._bindVisibility();
    return newProperty;
  }
  addProperty() {
    let itemSchema = this.schema.items;
    if (Array.isArray(this.schema.items)) {
      const itemSchemas = this.schema.items;
      if (itemSchemas.length > this.properties.length) {
        itemSchema = itemSchema[this.properties.length];
      } else if (this.schema.additionalItems) {
        itemSchema = this.schema.additionalItems;
      } else {
        return null;
      }
    }
    let newProperty = this.formPropertyFactory.createProperty(itemSchema, this);
    this.properties.push(newProperty);
    return newProperty;
  }
  removeItem(item) {
    this.properties = this.properties.filter((i) => i !== item);
    this.updateValueAndValidity(false, true);
  }
  setValue(value, onlySelf) {
    this.createProperties();
    this.resetProperties(value);
    this.updateValueAndValidity(onlySelf, true);
  }
  _hasValue() {
    return true;
  }
  _updateValue() {
    this.reduceValue();
  }
  reduceValue() {
    const value = [];
    this.forEachChild((property, _) => {
      if (property.visible && property._hasValue()) {
        value.push(property.value);
      }
    });
    this._value = value;
  }
  reset(value, onlySelf = true) {
    value = value || this.schema.default || [];
    this.properties = [];
    this.resetProperties(value);
    this.updateValueAndValidity(onlySelf, true);
  }
  createProperties() {
    this.properties = [];
  }
  resetProperties(value) {
    for (let idx in value) {
      if (value.hasOwnProperty(idx)) {
        let property = this.addProperty();
        property.reset(value[idx], true);
      }
    }
  }
};
PROPERTY_TYPE_MAPPING.array = (schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, formPropertyFactory, logger) => {
  return new ArrayProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};
var StringProperty = class extends AtomicProperty {
  fallbackValue() {
    return this.isNullableType ? null : "";
  }
};
PROPERTY_TYPE_MAPPING.string = (schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) => {
  return new StringProperty(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};
var BooleanProperty = class extends AtomicProperty {
  fallbackValue() {
    return null;
  }
};
PROPERTY_TYPE_MAPPING.boolean = (schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) => {
  return new BooleanProperty(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};
var NumberProperty = class extends AtomicProperty {
  fallbackValue() {
    return null;
  }
  setValue(value, onlySelf = false) {
    if (typeof value === "string") {
      if (value.length) {
        value = value.indexOf(".") > -1 ? parseFloat(value) : parseInt(value, 10);
      } else {
        value = null;
      }
    }
    this._value = value;
    this.updateValueAndValidity(onlySelf, true);
  }
};
PROPERTY_TYPE_MAPPING.integer = (schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) => {
  return new NumberProperty(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};
PROPERTY_TYPE_MAPPING.number = (schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) => {
  return new NumberProperty(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};
var NullProperty = class extends AtomicProperty {
  fallbackValue() {
    return null;
  }
};
PROPERTY_TYPE_MAPPING.null = (schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger) => {
  return new NullProperty(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};
var ValidatorRegistry = class _ValidatorRegistry {
  constructor() {
    this.validators = [];
  }
  register(path, validator) {
    this.validators[path] = validator;
  }
  get(path) {
    return this.validators[path];
  }
  clear() {
    this.validators = [];
  }
  static {
    this.ɵfac = function ValidatorRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ValidatorRegistry)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ValidatorRegistry,
      factory: _ValidatorRegistry.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidatorRegistry, [{
    type: Injectable
  }], null, null);
})();
function formatMessage(message, path) {
  return `Parsing error on ${path}: ${message}`;
}
function schemaError(message, path) {
  let mesg = formatMessage(message, path);
  throw new Error(mesg);
}
function schemaWarning(message, path) {
  let mesg = formatMessage(message, path);
  throw new Error(mesg);
}
var SchemaPreprocessor = class _SchemaPreprocessor {
  static preprocess(jsonSchema, path = "/") {
    jsonSchema = jsonSchema || {};
    _SchemaPreprocessor.normalizeExtensions(jsonSchema);
    if (jsonSchema.type === "object") {
      _SchemaPreprocessor.checkProperties(jsonSchema, path);
      _SchemaPreprocessor.checkAndCreateFieldsets(jsonSchema, path);
    } else if (jsonSchema.type === "array") {
      _SchemaPreprocessor.checkItems(jsonSchema, path);
    }
    _SchemaPreprocessor.normalizeWidget(jsonSchema);
    _SchemaPreprocessor.recursiveCheck(jsonSchema, path);
  }
  static checkProperties(jsonSchema, path) {
    if (isBlank(jsonSchema.properties)) {
      jsonSchema.properties = {};
      schemaWarning("Provided json schema does not contain a 'properties' entry. Output schema will be empty", path);
    }
  }
  static checkAndCreateFieldsets(jsonSchema, path) {
    if (jsonSchema.fieldsets === void 0) {
      if (jsonSchema.order !== void 0) {
        _SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
      } else {
        _SchemaPreprocessor.createFieldsets(jsonSchema);
      }
    }
    _SchemaPreprocessor.checkFieldsUsage(jsonSchema, path);
  }
  static checkFieldsUsage(jsonSchema, path) {
    let fieldsId = Object.keys(jsonSchema.properties);
    let usedFields = {};
    for (let fieldset of jsonSchema.fieldsets) {
      for (let fieldId of fieldset.fields) {
        if (usedFields[fieldId] === void 0) {
          usedFields[fieldId] = [];
        }
        usedFields[fieldId].push(fieldset.id);
      }
    }
    for (const fieldId of fieldsId) {
      const isRequired = jsonSchema.required && jsonSchema.required.indexOf(fieldId) > -1;
      if (isRequired && jsonSchema.properties[fieldId]) {
        jsonSchema.properties[fieldId].isRequired = true;
      }
      if (usedFields.hasOwnProperty(fieldId)) {
        if (usedFields[fieldId].length > 1) {
          schemaError(`${fieldId} is referenced by more than one fieldset: ${usedFields[fieldId]}`, path);
        }
        delete usedFields[fieldId];
      } else if (isRequired) {
        schemaError(`${fieldId} is a required field but it is not referenced as part of a 'order' or a 'fieldset' property`, path);
      } else {
        delete jsonSchema[fieldId];
        schemaWarning(`Removing unreferenced field ${fieldId}`, path);
      }
    }
    for (let remainingfieldsId in usedFields) {
      if (usedFields.hasOwnProperty(remainingfieldsId)) {
        schemaWarning(`Referencing non-existent field ${remainingfieldsId} in one or more fieldsets`, path);
      }
    }
  }
  static createFieldsets(jsonSchema) {
    jsonSchema.order = Object.keys(jsonSchema.properties);
    _SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
  }
  static replaceOrderByFieldsets(jsonSchema) {
    jsonSchema.fieldsets = [{
      id: "fieldset-default",
      title: jsonSchema.title || "",
      description: jsonSchema.description || "",
      name: jsonSchema.name || "",
      fields: jsonSchema.order
    }];
    delete jsonSchema.order;
  }
  static normalizeWidget(fieldSchema) {
    let widget = fieldSchema.widget;
    if (widget === void 0) {
      widget = {
        "id": fieldSchema.type
      };
    } else if (typeof widget === "string") {
      widget = {
        "id": widget
      };
    }
    fieldSchema.widget = widget;
  }
  static checkItems(jsonSchema, path) {
    if (jsonSchema.items === void 0) {
      schemaError("No 'items' property in array", path);
    }
  }
  static recursiveCheck(jsonSchema, path) {
    if (jsonSchema.type === FieldType.Object) {
      for (let fieldId in jsonSchema.properties) {
        if (jsonSchema.properties.hasOwnProperty(fieldId)) {
          let fieldSchema = jsonSchema.properties[fieldId];
          _SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + "/");
        }
      }
      if (jsonSchema.hasOwnProperty("definitions")) {
        for (let fieldId in jsonSchema.definitions) {
          if (jsonSchema.definitions.hasOwnProperty(fieldId)) {
            let fieldSchema = jsonSchema.definitions[fieldId];
            _SchemaPreprocessor.removeRecursiveRefProperties(fieldSchema, `#/definitions/${fieldId}`);
            _SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + "/");
          }
        }
      }
    } else if (jsonSchema.type === "array") {
      if (Array.isArray(jsonSchema.items || {})) {
        for (let i = 0; i < jsonSchema.items.length; i++) {
          _SchemaPreprocessor.preprocess(jsonSchema.items[i], path + "*/");
        }
      } else {
        _SchemaPreprocessor.preprocess(jsonSchema.items, path + "*/");
      }
      if (jsonSchema.additionalItems) {
        _SchemaPreprocessor.preprocess(jsonSchema.additionalItems, path + "*/");
      }
    }
  }
  static removeRecursiveRefProperties(jsonSchema, definitionPath) {
    if (jsonSchema.type === FieldType.Object) {
      for (let fieldId in jsonSchema.properties) {
        if (jsonSchema.properties.hasOwnProperty(fieldId)) {
          if (jsonSchema.properties[fieldId].$ref && jsonSchema.properties[fieldId].$ref === definitionPath) {
            delete jsonSchema.properties[fieldId];
          } else if (jsonSchema.properties[fieldId].type === "object") {
            _SchemaPreprocessor.removeRecursiveRefProperties(jsonSchema.properties[fieldId], definitionPath);
          }
        }
      }
    }
  }
  /**
   * Enables alias names for JSON schema extensions.
   *
   * Copies the value of each alias JSON schema property
   * to the JSON schema property of ngx-schema-form.
   *
   * @param schema JSON schema to enable alias names.
   */
  static normalizeExtensions(schema) {
    const extensions = [{
      name: "fieldsets",
      regex: /^x-?field-?sets$/i
    }, {
      name: "widget",
      regex: /^x-?widget$/i
    }, {
      name: "visibleIf",
      regex: /^x-?visible-?if$/i
    }];
    const keys = Object.keys(schema);
    for (let i = 0; i < keys.length; ++i) {
      let k = keys[i];
      let e = extensions.find((e2) => !!k.match(e2.regex));
      if (e) {
        let v = schema[k];
        let copy = JSON.parse(JSON.stringify(v));
        schema[e.name] = copy;
      }
    }
  }
  static {
    this.ɵfac = function SchemaPreprocessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SchemaPreprocessor)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SchemaPreprocessor,
      factory: _SchemaPreprocessor.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SchemaPreprocessor, [{
    type: Injectable
  }], null, null);
})();
var TemplateSchemaElement = class {
  getTextContent(elementRef) {
    const nodes = Array.from(elementRef.nativeElement.childNodes);
    const node = nodes.filter((el) => {
      return el.nodeType === el.TEXT_NODE;
    }).pop();
    if (!node || !node.nodeValue) {
      return "";
    }
    return node.nodeValue.trim();
  }
};
var ButtonComponent = class _ButtonComponent extends TemplateSchemaElement {
  constructor(elementRef) {
    super();
    this.elementRef = elementRef;
    this.label = "";
    this.click = new EventEmitter();
  }
  setLabelFromContent() {
    const textContent = this.getTextContent(this.elementRef);
    if (textContent && !this.label) {
      this.label = textContent;
    }
  }
  ngAfterContentInit() {
    this.setLabelFromContent();
  }
  static {
    this.ɵfac = function ButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ButtonComponent)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ButtonComponent,
      selectors: [["sf-button"]],
      inputs: {
        id: "id",
        label: "label",
        widget: "widget"
      },
      outputs: {
        click: "click"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: TemplateSchemaElement,
        useExisting: forwardRef(() => _ButtonComponent)
      }]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{
      selector: "sf-button",
      providers: [{
        provide: TemplateSchemaElement,
        useExisting: forwardRef(() => ButtonComponent)
      }],
      standalone: false,
      template: "<ng-content></ng-content>\n"
    }]
  }], () => [{
    type: ElementRef
  }], {
    id: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    widget: [{
      type: Input
    }],
    click: [{
      type: Output
    }]
  });
})();
var ItemComponent = class _ItemComponent extends TemplateSchemaElement {
  constructor(elementRef) {
    super();
    this.elementRef = elementRef;
  }
  ngOnInit() {
    this.description = this.getTextContent(this.elementRef);
  }
  static {
    this.ɵfac = function ItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemComponent)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ItemComponent,
      selectors: [["sf-item"]],
      inputs: {
        value: "value"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      template: function ItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemComponent, [{
    type: Component,
    args: [{
      selector: "sf-item",
      standalone: false,
      template: "<ng-content></ng-content>\n"
    }]
  }], () => [{
    type: ElementRef
  }], {
    value: [{
      type: Input
    }]
  });
})();
var FieldParent = class extends TemplateSchemaElement {
  constructor() {
    super(...arguments);
    this.name = "";
  }
  get path() {
    if (!this.name) {
      return "";
    }
    return "/" + this.name;
  }
  getButtons() {
    return this.childButtons.map((button, index) => {
      if (!button.id) {
        const randomString = Math.random().toString(16).substr(2, 8);
        button.id = this.name + randomString + "_" + (index + 1);
      }
      this.actionRegistry.register(button.id, button.click.emit.bind(button.click));
      const _button = {
        id: button.id,
        label: button.label
      };
      if (button.widget) {
        _button.widget = button.widget;
      }
      return _button;
    });
  }
  getFieldsValidators(fields) {
    return fields.reduce((validators, field) => {
      return validators.concat(field.getValidators());
    }, []);
  }
  getFieldsSchema(fields) {
    return fields.reduce((schema, field) => {
      switch (this.type) {
        case FieldType.Array:
          schema.items = field.getSchema();
          break;
        default:
          if (!schema.properties) {
            schema.properties = {};
          }
          schema.properties[field.name] = field.getSchema();
          break;
      }
      const buttons = field.getButtons();
      if (buttons.length > 0) {
        schema.buttons = buttons;
      }
      if (!field.required) {
        return schema;
      }
      if (!schema.required) {
        schema.required = [];
      }
      schema.required.push(field.name);
      return schema;
    }, {});
  }
};
var TemplateSchemaService = class _TemplateSchemaService {
  constructor() {
    this.changes = new EventEmitter();
  }
  changed() {
    this.changes.emit();
  }
  static {
    this.ɵfac = function TemplateSchemaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateSchemaService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TemplateSchemaService,
      factory: _TemplateSchemaService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateSchemaService, [{
    type: Injectable
  }], () => [], null);
})();
var FieldComponent = class _FieldComponent extends FieldParent {
  constructor(elementRef, templateSchemaService, actionRegistry) {
    super();
    this.elementRef = elementRef;
    this.templateSchemaService = templateSchemaService;
    this.actionRegistry = actionRegistry;
    this.type = FieldType.String;
    this.schema = {};
  }
  getSchema() {
    const {
      properties,
      items,
      required
    } = this.getFieldsSchema(this.childFields.filter((field) => field !== this));
    const oneOf = this.getOneOf();
    const schema = {
      type: this.type
    };
    if (this.title !== void 0) {
      schema.title = this.title;
    }
    if (properties !== void 0) {
      schema.properties = properties;
    }
    if (items !== void 0) {
      schema.items = items;
    }
    if (required !== void 0) {
      schema.required = required;
    }
    if (oneOf !== void 0) {
      schema.oneOf = oneOf;
    }
    if (this.description !== void 0) {
      schema.description = this.description;
    }
    if (this.placeholder !== void 0) {
      schema.placeholder = this.placeholder;
    }
    if (this.format !== void 0) {
      schema.format = this.format;
    }
    if (this.widget !== void 0) {
      schema.widget = this.widget;
    }
    if (this.readOnly !== void 0) {
      schema.readOnly = this.readOnly;
    }
    const buttons = this.getButtons();
    if (buttons.length > 0) {
      schema.buttons = buttons;
    }
    return Object.assign(schema, this.schema);
  }
  getValidators() {
    const childValidators = this.getFieldsValidators(this.childFields.filter((field) => field !== this));
    const validators = childValidators.map(({
      path,
      validator
    }) => {
      return {
        path: this.path + path,
        validator
      };
    });
    if (!this.validator) {
      return validators;
    }
    validators.push({
      path: this.path,
      validator: this.validator
    });
    return validators;
  }
  ngOnChanges(changes) {
    const keys = Object.keys(changes);
    if (keys.length > 0) {
      for (const key of keys) {
        if (!changes[key].isFirstChange()) {
          this.templateSchemaService.changed();
          break;
        }
      }
    }
  }
  getOneOf() {
    if (this.childItems.length === 0) {
      return;
    }
    const items = this.childItems.map(({
      value,
      description
    }) => {
      if (!Array.isArray(value)) {
        return {
          enum: [value],
          description
        };
      }
      return {
        enum: value,
        description
      };
    });
    if (items.length === 0) {
      return;
    }
    return items;
  }
  setTitleFromContent() {
    const textContent = this.getTextContent(this.elementRef);
    if (textContent && !this.title) {
      this.title = textContent;
    }
  }
  ngAfterContentInit() {
    this.setTitleFromContent();
    merge(this.childFields.changes, this.childItems.changes, this.childButtons.changes).subscribe(() => this.templateSchemaService.changed());
  }
  static {
    this.ɵfac = function FieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FieldComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TemplateSchemaService), ɵɵdirectiveInject(ActionRegistry));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FieldComponent,
      selectors: [["sf-field"]],
      contentQueries: function FieldComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, _FieldComponent, 4);
          ɵɵcontentQuery(dirIndex, ItemComponent, 4);
          ɵɵcontentQuery(dirIndex, ButtonComponent, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childFields = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childItems = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childButtons = _t);
        }
      },
      inputs: {
        name: "name",
        type: "type",
        format: "format",
        required: "required",
        readOnly: "readOnly",
        title: "title",
        description: "description",
        placeholder: "placeholder",
        widget: "widget",
        validator: "validator",
        schema: "schema"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      template: function FieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldComponent, [{
    type: Component,
    args: [{
      selector: "sf-field",
      standalone: false,
      template: "<ng-content ></ng-content>\n"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: TemplateSchemaService
  }, {
    type: ActionRegistry
  }], {
    childFields: [{
      type: ContentChildren,
      args: [forwardRef(() => FieldComponent)]
    }],
    childItems: [{
      type: ContentChildren,
      args: [ItemComponent]
    }],
    childButtons: [{
      type: ContentChildren,
      args: [ButtonComponent]
    }],
    name: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    readOnly: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    description: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    widget: [{
      type: Input
    }],
    validator: [{
      type: Input
    }],
    schema: [{
      type: Input
    }]
  });
})();
var SchemaValidatorFactory = class {
  /**
   * Override this method to reset the schema validator instance.<br/>
   * This may be required since some schema validators keep a deep copy<br/>
   * of your schemas and changes at runtime are not recognized by the schema validator.<br/>
   * In this method you should either re-instantiate the schema validator or
   * clear its cache.<br/>
   * Example of re-instantiating schema validator
   * <code>
   *     reset(){
   *         this.zschema = new ZSchema({})
   *     }
   * </code>
   * <br/>
   * Since this method it self does nothing there is <br/>
   * no need to call the <code>super.reset()</code>
   */
  reset() {
  }
  /**
   * Override this method if the validator instance supports compiling a schema an resolve all refs and defs.
   * @param schema The schema to be compiled and get its refs, deps, etc. resolved
   * @returns The compiled schema. Per default it does simply return the give schema.
   */
  compile(schema) {
    return schema;
  }
};
var ZSchemaValidatorFactory = class _ZSchemaValidatorFactory extends SchemaValidatorFactory {
  constructor() {
    super();
    this.createSchemaValidator();
  }
  createSchemaValidator() {
    this.zschema = new import_z_schema.default({
      breakOnFirstError: false
    });
  }
  reset() {
    this.createSchemaValidator();
  }
  compile(schema) {
    const zSchema = new import_z_schema.default({});
    zSchema.compileSchema(schema);
    return zSchema.getResolvedSchema(schema);
  }
  createValidatorFn(schema) {
    return (value) => {
      if (schema.type === FieldType.Number || schema.type === FieldType.Integer) {
        value = +value;
      }
      this.zschema.validate(value, schema);
      let err = this.zschema.getLastErrors();
      this.denormalizeRequiredPropertyPaths(err);
      return err || null;
    };
  }
  getSchema(schema, ref) {
    const isValid = this.zschema.compileSchema(schema);
    if (isValid) {
      return this.getDefinition(schema, ref);
    } else {
      throw this.zschema.getLastError();
    }
  }
  denormalizeRequiredPropertyPaths(err) {
    if (err && err.length) {
      err = err.map((error) => {
        if (error.path === "#/" && error.code === "OBJECT_MISSING_REQUIRED_PROPERTY") {
          error.path = `${error.path}${error.params[0]}`;
        }
        return error;
      });
    }
  }
  getDefinition(schema, ref) {
    let foundSchema = schema;
    ref.split("/").slice(1).forEach((ptr) => {
      if (ptr) {
        foundSchema = foundSchema[ptr];
      }
    });
    return foundSchema;
  }
  static {
    this.ɵfac = function ZSchemaValidatorFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZSchemaValidatorFactory)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ZSchemaValidatorFactory,
      factory: _ZSchemaValidatorFactory.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZSchemaValidatorFactory, [{
    type: Injectable
  }], () => [], null);
})();
var PropertyBindingRegistry = class _PropertyBindingRegistry {
  constructor() {
    this.bindings = {};
  }
  getPropertyBindings(type) {
    this.bindings[type] = this.bindings[type] || new PropertyBindings();
    return this.bindings[type];
  }
  getPropertyBindingsVisibility() {
    return this.getPropertyBindings(PropertyBindingTypes.visibility);
  }
  static {
    this.ɵfac = function PropertyBindingRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyBindingRegistry)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PropertyBindingRegistry,
      factory: _PropertyBindingRegistry.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyBindingRegistry, [{
    type: Injectable
  }], null, null);
})();
var PropertyBindingTypes;
(function(PropertyBindingTypes2) {
  PropertyBindingTypes2[PropertyBindingTypes2["visibility"] = 0] = "visibility";
})(PropertyBindingTypes || (PropertyBindingTypes = {}));
var PropertyBindings = class {
  constructor() {
    this.sourcesIndex = new SimplePropertyIndexer();
    this.dependenciesIndex = new SimplePropertyIndexer();
  }
  add(dependencyPath, sourcePropertyPath) {
    this.sourcesIndex.store(sourcePropertyPath, dependencyPath);
    this.dependenciesIndex.store(dependencyPath, sourcePropertyPath);
  }
  findByDependencyPath(dependencyPath) {
    const result = this.dependenciesIndex.find(dependencyPath);
    result.results = result.results || [];
    let values = [];
    for (const res of result.results) {
      values = values.concat(Object.keys(res.value));
    }
    return result.found ? values : [];
  }
  getBySourcePropertyPath(sourcePropertyPath) {
    const result = this.sourcesIndex.find(sourcePropertyPath);
    result.results = result.results || [];
    let values = [];
    for (const res of result.results) {
      values = values.concat(Object.keys(res.value));
    }
    return result.found ? values : [];
  }
  createPathIndex(path) {
    return path.split("/");
  }
};
var SimplePropertyIndexer = class _SimplePropertyIndexer {
  constructor() {
    this.index = {};
    this.findOnlyWithValue = true;
  }
  static {
    this.MARKER = "$____value";
  }
  _createPathIndex(path) {
    return path.replace(new RegExp("//", "g"), "/").replace(new RegExp("^/", "g"), "").split("/").filter((item) => item);
  }
  store(propertyPath, value) {
    this._storeIndex(this._createPathIndex(propertyPath), value);
  }
  _storeIndex(pathIndex, value) {
    let indexPos = this.index;
    for (const key of pathIndex) {
      indexPos[key] = indexPos[key] || {};
      indexPos = indexPos[key];
    }
    if (indexPos && value) {
      indexPos[_SimplePropertyIndexer.MARKER] = indexPos[_SimplePropertyIndexer.MARKER] || {};
      indexPos[_SimplePropertyIndexer.MARKER][value] = value;
    }
  }
  /**
   * Find path in index.<br/>
   * Will find path like:<br/>
   * <ul>
   *     <li>/property/0/prop</li>
   *     <li>/property/0/prop/2/test</li>
   *     <li>/property/0/prop/&#42;/test</li>
   *     <li>/property/&#42;/prop/1/test</li>
   *     <li>/property/&#42;/prop/&#42;/test</li>
   *     <li>/property/1/prop/&#42;/test</li>
   *  </ul>
   * @param path
   */
  find(path) {
    return this._findInIndex(this._createPathIndex(path));
  }
  _findInIndex(path) {
    const ixRes = {
      target: path,
      found: false,
      results: []
    };
    this.__findIndex(ixRes, path, this.index, []);
    return ixRes;
  }
  __findIndex(indexerResults, path, index, parent) {
    const p = parent || [];
    const segment = path[0];
    const wild = "*" === segment ? Object.keys(index) : [];
    const _keys = (Array.isArray(segment) ? segment : [segment]).concat(wild);
    const keys = _keys.filter((item, pos) => "*" !== item && _keys.indexOf(item) === pos);
    if (index["*"]) {
      keys.push("*");
    }
    let paths = [];
    for (const key of keys) {
      const restPath = path.slice(1);
      const restIndex = index[key];
      const restParent = p.concat(key);
      if (path.length === 1) {
        if (!this.findOnlyWithValue || restIndex && restIndex[_SimplePropertyIndexer.MARKER]) {
          indexerResults.results = indexerResults.results || [];
          indexerResults.results.push({
            path: restParent,
            value: restIndex[_SimplePropertyIndexer.MARKER]
          });
          paths.push(restParent);
          indexerResults.found = indexerResults.results.length > 0;
        }
      }
      if (!restPath || !restPath.length || !restIndex) {
        break;
      }
      const restPaths = this.__findIndex(indexerResults, restPath, restIndex, restParent);
      paths = paths.concat(restPaths);
    }
    return paths;
  }
};
var ExpressionCompilerFactory = class {
};
var JEXLExpressionCompilerFactory = class extends ExpressionCompilerFactory {
  createExpressionCompiler() {
    return new JEXLExpressionCompiler();
  }
  createExpressionCompilerVisibilityIf() {
    return new JEXLExpressionCompilerVisibiltyIf();
  }
};
var JEXLExpressionCompiler = class {
  evaluate(expression, context = {}) {
    return new JEXL.Jexl().evalSync(expression, context);
  }
};
var JEXLExpressionCompilerVisibiltyIf = class {
  evaluate(expression, context = {
    source: {},
    target: {}
  }) {
    return new JEXL.Jexl().evalSync(expression, context);
  }
};
function useFactory(schemaValidatorFactory, validatorRegistry, propertyBindingRegistry, expressionCompilerFactory, logService) {
  return new FormPropertyFactory(schemaValidatorFactory, validatorRegistry, propertyBindingRegistry, expressionCompilerFactory, logService);
}
var FormComponent = class _FormComponent {
  constructor(formPropertyFactory, actionRegistry, validatorRegistry, bindingRegistry, cdr, terminator) {
    this.formPropertyFactory = formPropertyFactory;
    this.actionRegistry = actionRegistry;
    this.validatorRegistry = validatorRegistry;
    this.bindingRegistry = bindingRegistry;
    this.cdr = cdr;
    this.terminator = terminator;
    this.schema = null;
    this.actions = {};
    this.validators = {};
    this.bindings = {};
    this.onChange = new EventEmitter();
    this.modelChange = new EventEmitter();
    this.isValid = new EventEmitter();
    this.onErrorChange = new EventEmitter();
    this.onErrorsChange = new EventEmitter();
    this.rootProperty = null;
  }
  writeValue(obj) {
    if (this.rootProperty) {
      this.rootProperty.reset(obj, false);
    }
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
    if (this.rootProperty) {
      this.rootProperty.valueChanges.subscribe(this.onValueChanges.bind(this));
    }
  }
  // TODO implement
  registerOnTouched(fn) {
  }
  // TODO implement
  // setDisabledState(isDisabled: boolean)?: void
  ngOnChanges(changes) {
    if (changes.validators) {
      this.setValidators();
    }
    if (changes.actions) {
      this.setActions();
    }
    if (changes.bindings) {
      this.setBindings();
    }
    if (this.schema && !this.schema.type) {
      this.schema.type = "object";
    }
    if (this.schema && changes.schema) {
      if (!changes.schema.firstChange) {
        this.terminator.destroy();
      }
      SchemaPreprocessor.preprocess(this.schema);
      this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
      if (this.model) {
      }
      this.rootProperty.valueChanges.subscribe(this.onValueChanges.bind(this));
      this.rootProperty.errorsChanges.subscribe((value) => {
        this.onErrorChange.emit({
          value
        });
        this.isValid.emit(!(value && value.length));
      });
    }
    if (this.schema && (changes.model || changes.schema)) {
      this.rootProperty.reset(this.model, false);
      this.rootProperty._bindVisibility();
      this.cdr.detectChanges();
    }
  }
  setValidators() {
    this.validatorRegistry.clear();
    if (this.validators) {
      for (const validatorId in this.validators) {
        if (this.validators.hasOwnProperty(validatorId)) {
          this.validatorRegistry.register(validatorId, this.validators[validatorId]);
        }
      }
    }
  }
  setActions() {
    this.actionRegistry.clear();
    if (this.actions) {
      for (const actionId in this.actions) {
        if (this.actions.hasOwnProperty(actionId)) {
          this.actionRegistry.register(actionId, this.actions[actionId]);
        }
      }
    }
  }
  setBindings() {
    this.bindingRegistry.clear();
    if (this.bindings) {
      for (const bindingPath in this.bindings) {
        if (this.bindings.hasOwnProperty(bindingPath)) {
          this.bindingRegistry.register(bindingPath, this.bindings[bindingPath]);
        }
      }
    }
  }
  reset() {
    this.rootProperty.reset(null, true);
  }
  setModel(value) {
    if (this.model) {
      for (const key of Object.keys(this.model)) delete this.model[key];
      Object.assign(this.model, value);
    } else {
      this.model = value;
    }
  }
  onValueChanges(value) {
    if (this.onChangeCallback) {
      this.setModel(value);
      this.onChangeCallback(value);
    }
    if (this.modelChange.observers.length > 0) {
      if (!this.onChangeCallback) {
        this.setModel(value);
      }
    }
    this.onChange.emit({
      value
    });
  }
  static {
    this.ɵfac = function FormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormComponent)(ɵɵdirectiveInject(FormPropertyFactory), ɵɵdirectiveInject(ActionRegistry), ɵɵdirectiveInject(ValidatorRegistry), ɵɵdirectiveInject(BindingRegistry), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TerminatorService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormComponent,
      selectors: [["sf-form"]],
      inputs: {
        schema: "schema",
        model: "model",
        actions: "actions",
        validators: "validators",
        bindings: "bindings"
      },
      outputs: {
        onChange: "onChange",
        modelChange: "modelChange",
        isValid: "isValid",
        onErrorChange: "onErrorChange",
        onErrorsChange: "onErrorsChange"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([ActionRegistry, ValidatorRegistry, PropertyBindingRegistry, BindingRegistry, SchemaPreprocessor, WidgetFactory, {
        provide: FormPropertyFactory,
        useFactory,
        deps: [SchemaValidatorFactory, ValidatorRegistry, PropertyBindingRegistry, ExpressionCompilerFactory, LogService]
      }, TerminatorService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _FormComponent,
        multi: true
      }]), ɵɵNgOnChangesFeature],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "formProperty"]],
      template: function FormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, FormComponent_form_0_Template, 2, 3, "form", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.rootProperty);
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, NgControlStatusGroup, NgForm, FormElementComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormComponent, [{
    type: Component,
    args: [{
      selector: "sf-form",
      template: `
    <form *ngIf="rootProperty" [attr.name]="rootProperty.rootName" [attr.id]="rootProperty.rootName">
      <sf-form-element [formProperty]="rootProperty"></sf-form-element>
    </form>`,
      providers: [ActionRegistry, ValidatorRegistry, PropertyBindingRegistry, BindingRegistry, SchemaPreprocessor, WidgetFactory, {
        provide: FormPropertyFactory,
        useFactory,
        deps: [SchemaValidatorFactory, ValidatorRegistry, PropertyBindingRegistry, ExpressionCompilerFactory, LogService]
      }, TerminatorService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: FormComponent,
        multi: true
      }],
      standalone: false
    }]
  }], () => [{
    type: FormPropertyFactory
  }, {
    type: ActionRegistry
  }, {
    type: ValidatorRegistry
  }, {
    type: BindingRegistry
  }, {
    type: ChangeDetectorRef
  }, {
    type: TerminatorService
  }], {
    schema: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    actions: [{
      type: Input
    }],
    validators: [{
      type: Input
    }],
    bindings: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    modelChange: [{
      type: Output
    }],
    isValid: [{
      type: Output
    }],
    onErrorChange: [{
      type: Output
    }],
    onErrorsChange: [{
      type: Output
    }]
  });
})();
var TemplateSchemaDirective = class _TemplateSchemaDirective extends FieldParent {
  constructor(actionRegistry, validatorRegistry, formComponent, terminatorService, templateSchemaService) {
    super();
    this.actionRegistry = actionRegistry;
    this.validatorRegistry = validatorRegistry;
    this.formComponent = formComponent;
    this.terminatorService = terminatorService;
    this.templateSchemaService = templateSchemaService;
  }
  setFormDocumentSchema(fields) {
    this.actionRegistry.clear();
    this.validatorRegistry.clear();
    const schema = this.getFieldsSchema(fields);
    const validators = this.getFieldsValidators(fields);
    validators.forEach(({
      path,
      validator
    }) => {
      this.validatorRegistry.register(path, validator);
    });
    const previousSchema = this.formComponent.schema;
    this.formComponent.schema = {
      type: FieldType.Object,
      properties: schema.properties
    };
    if (schema.required && schema.required.length > 0) {
      this.formComponent.schema.requred = schema.required;
    }
    const buttons = this.getButtons();
    if (buttons.length > 0) {
      this.formComponent.schema.buttons = buttons;
    }
    this.formComponent.ngOnChanges({
      schema: new SimpleChange(previousSchema, this.formComponent.schema, Boolean(previousSchema))
    });
  }
  ngAfterContentInit() {
    if (this.childFields.length > 0) {
      this.setFormDocumentSchema(this.childFields.toArray());
    }
    merge(this.childFields.changes, this.templateSchemaService.changes).subscribe(() => {
      this.terminatorService.destroy();
      this.setFormDocumentSchema(this.childFields.toArray());
    });
  }
  static {
    this.ɵfac = function TemplateSchemaDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateSchemaDirective)(ɵɵdirectiveInject(ActionRegistry), ɵɵdirectiveInject(ValidatorRegistry), ɵɵdirectiveInject(FormComponent), ɵɵdirectiveInject(TerminatorService), ɵɵdirectiveInject(TemplateSchemaService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TemplateSchemaDirective,
      selectors: [["sf-form", "templateSchema", ""]],
      contentQueries: function TemplateSchemaDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, FieldComponent, 4);
          ɵɵcontentQuery(dirIndex, ButtonComponent, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childFields = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childButtons = _t);
        }
      },
      standalone: false,
      features: [ɵɵProvidersFeature([TemplateSchemaService]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateSchemaDirective, [{
    type: Directive,
    args: [{
      selector: "sf-form[templateSchema]",
      providers: [TemplateSchemaService],
      standalone: false
    }]
  }], () => [{
    type: ActionRegistry
  }, {
    type: ValidatorRegistry
  }, {
    type: FormComponent
  }, {
    type: TerminatorService
  }, {
    type: TemplateSchemaService
  }], {
    childFields: [{
      type: ContentChildren,
      args: [FieldComponent]
    }],
    childButtons: [{
      type: ContentChildren,
      args: [ButtonComponent]
    }]
  });
})();
var TemplateSchemaModule = class _TemplateSchemaModule {
  static {
    this.ɵfac = function TemplateSchemaModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateSchemaModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TemplateSchemaModule,
      declarations: [TemplateSchemaDirective, FieldComponent, ButtonComponent, ItemComponent],
      imports: [CommonModule],
      exports: [TemplateSchemaDirective, FieldComponent, ButtonComponent, ItemComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateSchemaModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [TemplateSchemaDirective, FieldComponent, ButtonComponent, ItemComponent],
      exports: [TemplateSchemaDirective, FieldComponent, ButtonComponent, ItemComponent]
    }]
  }], null, null);
})();
var DefaultWidget = class _DefaultWidget {
  static {
    this.ɵfac = function DefaultWidget_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultWidget)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DefaultWidget,
      selectors: [["sf-default-field"]],
      standalone: false,
      decls: 2,
      vars: 0,
      template: function DefaultWidget_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "p");
          ɵɵtext(1, "Unknow type");
          ɵɵelementEnd();
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultWidget, [{
    type: Component,
    args: [{
      selector: "sf-default-field",
      template: `<p>Unknow type</p>`,
      standalone: false
    }]
  }], null, null);
})();
var moduleProviders = [{
  provide: WidgetRegistry,
  useClass: DefaultWidgetRegistry
}, {
  provide: SchemaValidatorFactory,
  useClass: ZSchemaValidatorFactory
}, {
  provide: ExpressionCompilerFactory,
  useClass: JEXLExpressionCompilerFactory
}, {
  provide: LOG_LEVEL,
  useValue: 3
  /* LogLevel.off */
}, {
  provide: LogService,
  useClass: DefaultLogService
}];
var SchemaFormModule = class _SchemaFormModule {
  static forRoot() {
    return {
      ngModule: _SchemaFormModule,
      providers: [...moduleProviders]
    };
  }
  static {
    this.ɵfac = function SchemaFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SchemaFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SchemaFormModule,
      declarations: [FormElementComponent, FormElementComponentAction, FormComponent, WidgetChooserComponent, DefaultWidget, ArrayWidget, ButtonWidget, ObjectWidget, CheckboxWidget, FileWidget, IntegerWidget, TextAreaWidget, RadioWidget, RangeWidget, SelectWidget, StringWidget, DisableControlDirective],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
      exports: [FormComponent, FormElementComponent, FormElementComponentAction, WidgetChooserComponent, ArrayWidget, ButtonWidget, ObjectWidget, CheckboxWidget, FileWidget, IntegerWidget, TextAreaWidget, RadioWidget, RangeWidget, SelectWidget, StringWidget, DisableControlDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule, ReactiveFormsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SchemaFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
      declarations: [FormElementComponent, FormElementComponentAction, FormComponent, WidgetChooserComponent, DefaultWidget, ArrayWidget, ButtonWidget, ObjectWidget, CheckboxWidget, FileWidget, IntegerWidget, TextAreaWidget, RadioWidget, RangeWidget, SelectWidget, StringWidget, DisableControlDirective],
      exports: [FormComponent, FormElementComponent, FormElementComponentAction, WidgetChooserComponent, ArrayWidget, ButtonWidget, ObjectWidget, CheckboxWidget, FileWidget, IntegerWidget, TextAreaWidget, RadioWidget, RangeWidget, SelectWidget, StringWidget, DisableControlDirective]
    }]
  }], null, null);
})();
export {
  ActionRegistry,
  ArrayLayoutWidget,
  ArrayProperty,
  ArrayWidget,
  AtomicProperty,
  BindingRegistry,
  BooleanProperty,
  ButtonComponent,
  ButtonWidget,
  CheckboxWidget,
  ControlWidget,
  DefaultLogService,
  DefaultWidget,
  DefaultWidgetRegistry,
  DisableControlDirective,
  ExpressionCompilerFactory,
  ExtendedProxyHandler,
  FieldComponent,
  FieldParent,
  FieldType,
  FileWidget,
  FormComponent,
  FormElementComponent,
  FormElementComponentAction,
  FormProperty,
  FormPropertyFactory,
  IntegerWidget,
  ItemComponent,
  JEXLExpressionCompiler,
  JEXLExpressionCompilerFactory,
  JEXLExpressionCompilerVisibiltyIf,
  LOG_LEVEL,
  LogService,
  NullProperty,
  NumberProperty,
  ObjectLayoutWidget,
  ObjectProperty,
  ObjectWidget,
  PROPERTY_TYPE_MAPPING,
  PropertyBindingRegistry,
  PropertyBindingTypes,
  PropertyBindings,
  PropertyGroup,
  RadioWidget,
  RangeWidget,
  SchemaFormModule,
  SchemaPreprocessor,
  SchemaValidatorFactory,
  SelectWidget,
  SimplePropertyIndexer,
  StringProperty,
  StringWidget,
  TemplateSchemaDirective,
  TemplateSchemaElement,
  TemplateSchemaModule,
  TemplateSchemaService,
  TerminatorService,
  TextAreaWidget,
  ValidatorRegistry,
  Widget,
  WidgetChooserComponent,
  WidgetFactory,
  WidgetRegistry,
  ZSchemaValidatorFactory,
  useFactory
};
//# sourceMappingURL=ngx-schema-form.js.map
