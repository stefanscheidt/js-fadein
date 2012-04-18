describe("fadein", function () {

    describe("for execute", function () {

        var field;

        beforeEach(function () {
            field = document.createElement("div");
            jasmine.Clock.useMock();
            spyOn(util, 'opacity');
        });

        it("should set the opacity to 1 in the end", function () {
            fadein.execute(field);
            jasmine.Clock.tick(1000);
            expect(util.opacity.mostRecentCall.args[1]).toEqual(1);
        });

        it("should call opacity with range from 0 to 1 in steps of 0.01", function () {
            fadein.execute(field);
            for (var i = 0; i < 100; i++) {
                expect(util.opacity.mostRecentCall.args[0]).toBe(field);
                expect(util.opacity.mostRecentCall.args[1]).toBe((i + 1) / 100);
                jasmine.Clock.tick(10);
            }
        });
    });

});