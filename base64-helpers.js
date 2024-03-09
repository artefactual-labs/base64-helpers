(function(exports) {
    function base64ToBytes(base64) {
        const binString = atob(base64);
        return Uint8Array.from(binString, (m) => m.codePointAt(0));
    };
    function bytesToBase64(bytes) {
        const binString = Array.from(bytes, (byte) =>
            String.fromCodePoint(byte),
        ).join("");
        return btoa(binString);
    };
    exports.encode = function (str) {
        return bytesToBase64(new TextEncoder().encode(str));
    };
    exports.decode = function (str) {
        return new TextDecoder().decode(base64ToBytes(str));
    };
})(typeof exports === 'undefined' ? this['Base64'] = {} : exports);
