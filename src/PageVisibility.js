/**
 * Page Visibility wrapper. Exposing and normalising an API for detecting if and
 * when the page is visible and collecting it's current visibilty state
 *
 * @param  {Object} self PageVisibilty helper object
 * @return {Object}
 */
var PageVisibility = (function(self) {

    self._api = normalise();

    function normalise() {
        var hidden, visibilityChange;

        if (typeof document.hidden !== "undefined") {
            hidden = "hidden";
            visibilityChange = "visibilitychange";
            visibilityState = "visibilityState";
        } else if (typeof document.mozHidden !== "undefined") {
            hidden = "mozHidden";
            visibilityChange = "mozvisibilitychange";
            visibilityState = "visibilityState";
        } else if (typeof document.msHidden !== "undefined") {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
            visibilityState = "visibilityState";
        } else if (typeof document.webkitHidden !== "undefined") {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
            visibilityState = "webkitVisibilityState";
        }

        return {
            hidden: hidden,
            visibilityChange: visibilityChange,
            visibilityState: visibilityState
        };
    }

    /**
     * Verify that the Page Visibility API is supported
     * @return {Boolean}
     */
    self.isSupported = function() {
        return typeof document[self._api.hidden] != "undefined";
    };

    /**
     * Check if the page is currently hidden
     * @return {Boolean}
     */
    self.isHidden = function() {
        return document[self._api.hidden];
    };

    /**
     * Check if the page is currently visible
     * @return {Boolean}
     */
    self.isVisible = function() {
        return !document[self._api.hidden];
    };

    /**
     * Get the current visibility state
     * @example
     *
     *  ~ hidden
     *     User Agent is minimized.
     *     User Agent is not minimized, but the page is on a background tab.
     *     User Agent is about to unload the page.
     *     User Agent is about to traverse to a session history entry.
     *     Operating System lock screen is shown.
     *
     *  ~ visible
     *     User Agent is at least partially visible at on at least one screen.
     *
     *  ~ prerender
     *     User Agent is loaded off-screen and is not visible
     *
     *  ~ unloaded
     *     User Agent is to unload the document
     *
     * @see http://www.w3.org/TR/page-visibility/#dom-document-visibilitystate
     * @return {String} Current visibility state
     */
    self.getState = function() {
        return document[self._api.visibilityState];
    },

    /**
     * Add event listener callback to visibilitychange event
     * @param  {Function} callback Function to call when event is triggered
     */
    self.onStatusChange = function(callback) {
        if (callback && typeof callback === "function") {
            var event = self._api.visibilityChange;
            document.addEventListener(event, callback, false);
        }
    };

    return self;
})(PageVisibility || {});

