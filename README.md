Page Visibilty Wrapper (WIP)
============

Page Visibility wrapper. Exposing and normalising an API for detecting if and when the page is visible and collecting it's current visibilty state

Example
=======
```html
    <ul id="status"></ul>
```

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

Support
=======

* IE10
* Firefox 20.0
* Chrome 26.0
* Opera 12.1 (Flakey)
* Opera 15.0 (Webkit)
* Blackberry Browser 10.0
