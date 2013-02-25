describe("fadein", function () {

    describe("for execute", function() {

        it("should asynchronously set the opacity to 1 in the end", function () {
            var opacitySpy = spyOn(util, 'opacity');
            function lastOpacityValue() {
                return opacitySpy.mostRecentCall.args[1];
            }
            runs(function() {
                fadein.execute('dummyField');
            });
            waitsFor(function() {
                return lastOpacityValue() === 1;
            });
            runs(function() {
                // some other expectations
                expect(lastOpacityValue()).toEqual(1);
            });
        });
    });

});