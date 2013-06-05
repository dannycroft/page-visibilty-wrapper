describe("Page Visibility", function() {

    it("should verify API support", function() {
        expect(PageVisibility.isSupported()).toEqual(true);
    });

    it("should confirm the page is visible", function() {
        expect(PageVisibility.isVisible()).toEqual(true);
    });

    it("should confirm the page is hidden", function() {
        expect(PageVisibility.isHidden()).toEqual(false);
    });

    it("should get the page state", function() {
        expect(PageVisibility.getState()).toBeDefined();
        expect(typeof PageVisibility.getState()).toEqual("string");
        expect(PageVisibility.getState().length).toBeGreaterThan(1);
    });

    it("should add a callback to the visibility change event", function() {
        var mock = {
            testCallback: function() {
                return true;
            },
            event: function() {
                return new Event(PageVisibility._api.visibilityChange);
            }
        };
        spyOn(mock, "testCallback");
        PageVisibility.onStatusChange(mock.testCallback);
        document.dispatchEvent(mock.event());
        expect(mock.testCallback).toHaveBeenCalled();
    });

});
