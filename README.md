Page Visibility Wrapper (WIP)
============

Exposing and normalising an API for detecting if/when the page is visible and collecting it's current visibility state

Example
=======
HTML
```html
    <ul id="status"></ul>
```
JavaScript
```javascript
    function template() {
        var li = document.createElement("li");
        li.innerHTML = new Date() + ": " + PageVisibility.getState();
        return li;
    }
    if (PageVisibility.isSupported()) {
        PageVisibility.onStatusChange( function(){
            document.getElementById("status").appendChild(template());
        });
    }
```
Output
* Wed Jun 05 2013 22:17:28 GMT+0100 (BST): hidden
* Wed Jun 05 2013 22:17:34 GMT+0100 (BST): visible
* Wed Jun 05 2013 22:17:34 GMT+0100 (BST): hidden
* Wed Jun 05 2013 22:25:38 GMT+0100 (BST): visible

Support
=======

* IE10
* Firefox 20.0
* Chrome 26.0
* Opera 12.1 (Flakey)
* Opera 15.0 (Webkit)
* Blackberry Browser 10.0
