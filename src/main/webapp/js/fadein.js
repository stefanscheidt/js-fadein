/**
 * Fadein
 */
(function(dependencies) {
    function execute(field) {
        var counter = 0;
        function executeCallback() {
            counter = counter+1;
            dependencies.opacity(field, counter/100);
            if (counter<100) {
                dependencies.setTimeout.call(window, executeCallback, 10);
            }
        }
        executeCallback();
    }

    // API
    window.fadein = {
        dependencies: dependencies,
        execute: execute
    }
})({
    setTimeout: window.setTimeout,
    opacity: window.util.opacity
});
