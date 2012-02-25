describeUi("index", "/js-fadein/index.html", function () {

    it("should fade the hello div in when the button is clicked", function () {
        var win, field, button;
        runs(function() {
            field = document.getElementById('hello');
            button = document.getElementById('fadein');
            expect(util.opacity(field)).toEqual(0);
            simulate(button, 'click');
        });
        runs(function () {
            expect(util.opacity(field)).toEqual(1);
        });
    });

});
