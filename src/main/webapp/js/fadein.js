/**
 * Fadein
 */
(function(window, util) {
    function execute(field) {
        var counter = 0;
        function executeCallback() {
            counter = counter+1;
            util.opacity(field, counter/100);
            if (counter<100) {
                window.setTimeout(executeCallback, 10);
            }
        }
        executeCallback();
    }

    // API
    window.fadein = {
        execute: execute
    }
})(window, util);
