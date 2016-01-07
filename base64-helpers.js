(function(exports) {
    // If passed string is UTF-8, decodes to bytes first before encoding.
    exports.encode = function (str) {
        try {
            return window.btoa(str);
        } catch (InvalidCharacterError) {
            return window.btoa(unescape(encodeURIComponent(str)));
        }
    };

    // Returns a UTF-8 string if input is UTF-8, raw bytes otherwise.
    exports.decode = function (str) {
        try {
            return decodeURIComponent(escape(window.atob(str)));
        } catch (URIError) {
            return window.atob(str);
        }
    };
})(typeof exports === 'undefined' ? this['Base64'] = {} : exports);
