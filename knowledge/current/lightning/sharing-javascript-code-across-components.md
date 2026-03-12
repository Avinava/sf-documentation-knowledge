---
title: "Sharing JavaScript Code Across Components"
domain: lightning
topic: sharing-javascript-code-across-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.873Z
estimatedTokens: 803
keywords: [Sharing, JavaScript, Code, Across, Components, build, simple, Lightning, entirely, self-contained, However, complex, applications, probably, want]
---

# Sharing JavaScript Code Across Components

> You can build simple Lightning components that are entirely self-contained. However, if
    you build more complex applications, you probably want to share code, or even client-side data,
    between components.

# Sharing JavaScript Code Across Components

You can build simple Lightning components that are entirely self-contained. However, if you build more complex applications, you probably want to share code, or even client-side data, between components.

The <ltng:require> tag enables you to load external JavaScript libraries after you upload them as static resources. You can also use <ltng:require> to import your own JavaScript libraries of utility methods.

Let’s look at a simple counter library that provides a getValue() method, which returns the current value of the counter, and an increment() method, which increments the value of that counter.

## Create the JavaScript Library

1.  In the Developer Console, click **File** | **New** | **Static Resource**.
2.  Enter counter in the Name field.
3.  Select text/javascript in the MIME Type field.
4.  Click **Submit**.
5.  Enter this code and click **File** | **Save**.

    ```

    ```


This code uses the JavaScript module pattern. Using this closure-based pattern, the value variable remains private to your library. Components using the library can’t access value directly.

The most important line of the code to note is:

```

```

You must attach \_counter to the window object as a requirement of JavaScript strict mode, which is implicitly enabled in Lightning Locker. Even though window.\_counter looks like a global declaration, \_counter is attached to the Lightning Locker secure window object and therefore is a namespace variable, not a global variable.

If you use \_counter instead of window.\_counter, \_counter isn’t available. When you try to access it, you get an error similar to:

```

```

## Use the JavaScript Library

Let’s use the library in a MyCounter component that has a simple UI to exercise the counter methods.

```

```

The <ltng:require> tag loads the counter library and calls the getValue action in the component’s client-side controller after the library is loaded.

Here’s the client-side controller.

```

```

You can access properties of the window object without having to type the window. prefix. Therefore, you can use \_counter.getValue() as shorthand for window.\_counter.getValue().

Click the buttons to get the value or increment it.

Our counter library shares the counter value between any components that use the library. If you need each component to have a separate counter, you could modify the counter implementation. To see the per-component code and for more details, see this blog post about [Modularizing Code in Lightning Components](https://developer.salesforce.com/blogs/developer-relations/2016/12/lightning-components-code-sharing.html "HTML (New Window)").

#### See Also

-   [Using External JavaScript Libraries](atlas.en-us.lightning.meta/lightning/js_libs_platform.htm "To reference a JavaScript library, upload it as a static resource and use a <ltng:require> tag in your .cmp or .app markup.")

-   [*Security for Lightning Components:* JavaScript Strict Mode Enforcement](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/js-strict-mode-intro.html "Security for Lightning Components: JavaScript Strict Mode
    Enforcement - HTML (New Window)")

## Code Examples

```apex
window._counter = (function() {
    var value = 0; // private

    return { //public API
        increment: function() {
            value = value + 1;
            return value;
        },

        getValue: function() {
            return value;
        }
    };
}());
```

```
window._counter = (function() {
```

```
Action failed: ... [_counter is not defined]
```

```apex
<!--c:MyCounter-->
<aura:component access="global">
    <ltng:require scripts="{!$Resource.counter}"
                  afterScriptsLoaded="{!c.getValue}"/>
    <aura:attribute name="value" type="Integer"/>
    
    <h1>MyCounter</h1>
    <p>{!v.value}</p>
    <lightning:button label="Get Value" onclick="{!c.getValue}"/>
    <lightning:button label="Increment" onclick="{!c.increment}"/>
</aura:component>
```

```
/* MyCounterController.js */
({
    getValue : function(component, event, helper) {
        component.set("v.value", _counter.getValue());
    },

    increment : function(component, event, helper) {
        component.set("v.value", _counter.increment());
    }
})
```

## Related Topics

- Using External JavaScript Libraries (atlas.en-us.lightning.meta/lightning/js_libs_platform.htm)
