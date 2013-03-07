describe("index", function () {
    var uit = uitest.current;
    uit.feature("timeoutSensor", "intervalSensor");

    uit.url("/js-fadein/index.html");

    it("should fade the hello div in when the button is clicked", function () {
        var field;
        var button;
        uit.runs(function(document, util) {
            field = document.getElementById('hello');
            button = document.getElementById('fadein');
            button.click();
            expect(util.opacity(field)).toEqual(0);
        });
        uit.runs(function (util) {
            expect(util.opacity(field)).toEqual(1);
        });
    });

});
