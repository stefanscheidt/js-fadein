/**
 * Utilities
 */
(function(dependencies) {
    function addEventListener(field, type, callback) {
        if (field.addEventListener) {
            field.addEventListener(type, callback, false);
        } else if (field.attachEvent) {
            field.attachEvent('on' + type, callback);
        } else {
            throw "neither addEventListener nor attachEvent is supported by object " + field;
        }
    }

    var floatRegex = /(\d|\.)+/;

    function parseFloat(value) {
        if (value === undefined) {
            return undefined;
        } else if (!value) {
            return 0;
        } else {
            var floatSubstring = floatRegex.exec(value)[0];
            return dependencies.parseFloat(floatSubstring);
        }
    }

    function opacity(field, value) {
        if (value === undefined) {
            if (field.style.opacity === undefined) {
                return parseFloat(field.style.filter) / 100;

            } else {
                return parseFloat(field.style.opacity);
            }
        } else {
            if (field.style.opacity === undefined) {
                // IE version...
                field.style.filter = 'alpha(opacity=' + value * 100 + ')';
            } else {
                field.style.opacity = value;
            }
        }
    }

    // API
    window.util = {
        dependencies: dependencies,
        parseFloat: parseFloat,
        opacity: opacity,
        addEventListener: addEventListener
    };
})({
    setTimeout: window.setTimeout,
    parseFloat: window.parseFloat
});