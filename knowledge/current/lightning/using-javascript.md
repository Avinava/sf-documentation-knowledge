---
title: "Using JavaScript"
domain: lightning
topic: using-javascript
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.163Z
estimatedTokens: 1910
keywords: [JavaScript, client-side, code, entry, point, framework, Expressions]
---

# Using JavaScript

> Use JavaScript for client-side code. The $A
        namespace is the entry point for using the framework in JavaScript code.

# Using JavaScript

Use JavaScript for client-side code. The $A namespace is the entry point for using the framework in JavaScript code.

For all the methods available in $A, see the [JavaScript API](atlas.en-us.lightning.meta/lightning/ref_jsapi_intro.htm "The JavaScript API lists the publicly accessible methods for each object that you can use in JavaScript code, such as a controller or helper. The $A namespace is the entry point for using the framework in JavaScript code.").

A component bundle can contain JavaScript code in a client-side controller, helper, or renderer. Client-side controllers are the most commonly used of these JavaScript resources.

## Expressions in JavaScript Code

In JavaScript, use string syntax to evaluate an expression. For example, this expression retrieves the label attribute in a component.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Only use the {! } expression syntax in markup in .app or .cmp resources.

-   **[Supported JavaScript](atlas.en-us.lightning.meta/lightning/js_supported_es.htm)**
    The Aura Components programming model supports ES5 syntax and ES6 Promises.
-   **[Invoking Actions on Component Initialization](atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm)**
    Use the init event to initialize a component or fire an event after component construction but before rendering.
-   **[Sharing JavaScript Code in a Component Bundle](atlas.en-us.lightning.meta/lightning/js_helper.htm)**
    Put functions that you want to reuse in the component’s helper. Helper functions also enable specialization of tasks, such as processing data and queueing server-side actions. Helper functions are local to a component, improve code reuse, and move the heavy lifting of JavaScript logic away from the client-side controller, where possible.
-   **[Sharing JavaScript Code Across Components](atlas.en-us.lightning.meta/lightning/security_share_code.htm)**
    You can build simple Lightning components that are entirely self-contained. However, if you build more complex applications, you probably want to share code, or even client-side data, between components.
-   **[Using External JavaScript Libraries](atlas.en-us.lightning.meta/lightning/js_libs_platform.htm)**
    To reference a JavaScript library, upload it as a static resource and use a <ltng:require> tag in your .cmp or .app markup.
-   **[Dynamically Creating Components](atlas.en-us.lightning.meta/lightning/js_cb_dynamic_cmp_async.htm)**
    Create a component dynamically in your client-side JavaScript code by using the $A.createComponent() method. To create multiple components, use $A.createComponents().
-   **[Detecting Data Changes with Change Handlers](atlas.en-us.lightning.meta/lightning/js_cb_data_change.htm)**
    Configure a component to automatically invoke a change handler, which is a client-side controller action, when a value in one of the component's attributes changes.
-   **[Finding Components by ID](atlas.en-us.lightning.meta/lightning/js_cb_find_by_id.htm)**
    Retrieve a component by its ID in JavaScript code.
-   **[Working with Attribute Values in JavaScript](atlas.en-us.lightning.meta/lightning/js_attr_values.htm)**
    These common patterns are useful for working with attribute values in JavaScript.
-   **[Working with a Component Body in JavaScript](atlas.en-us.lightning.meta/lightning/js_cmp_body.htm)**
    These are useful and common patterns for working with a component’s body in JavaScript.
-   **[Working with Events in JavaScript](atlas.en-us.lightning.meta/lightning/js_event.htm)**
    These are useful and common patterns for working with events in JavaScript.
-   **[Modifying the DOM](atlas.en-us.lightning.meta/lightning/js_dom_access.htm)**
    The Document Object Model (DOM) is the language-independent model for representing and interacting with objects in HTML and XML documents. It’s important to know how to modify the DOM safely so that the framework’s rendering service doesn’t stomp on your changes and give you unexpected results.
-   **[Checking Component Validity](atlas.en-us.lightning.meta/lightning/js_cmp_isvalid.htm)**
    If you navigate elsewhere in the UI while asynchronous code is executing, the framework unrenders and destroys the component that made the asynchronous request. You can still have a reference to that component, but it is no longer valid. The cmp.isValid() call returns false for an invalid component.
-   **[Modifying Components Outside the Framework Lifecycle](atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm)**
    Use $A.getCallback() to wrap any code that modifies a component outside the normal rerendering lifecycle, such as in a setTimeout() call. The $A.getCallback() call ensures that the framework rerenders the modified component and processes any enqueued actions.
-   **[Throwing and Handling Errors](atlas.en-us.lightning.meta/lightning/js_throw_error.htm)**
    The framework gives you flexibility in handling unrecoverable and recoverable app errors in JavaScript code. For example, you can throw these errors in a callback when handling an error in a server-side response.
-   **[Calling Component Methods](atlas.en-us.lightning.meta/lightning/js_cmp_methods.htm)**
    Use <aura:method> to define a method as part of a component's API. This enables you to directly call a method in a component’s client-side controller instead of firing and handling a component event. Using <aura:method> simplifies the code needed for a parent component to call a method on a child component that it contains.
-   **[Dynamically Adding Event Handlers To a Component](atlas.en-us.lightning.meta/lightning/js_cb_dynamic_handler.htm)**
    You can dynamically add a handler for an event that a component fires.
-   **[Dynamically Showing or Hiding Markup](atlas.en-us.lightning.meta/lightning/js_cb_show_hide_markup.htm)**
    You can use CSS to toggle markup visibility. However, <aura:if> is the preferred approach because it defers the creation and rendering of the enclosed element tree until needed.
-   **[Adding and Removing Styles](atlas.en-us.lightning.meta/lightning/js_cb_styles.htm)**
    You can add or remove a CSS style on a component or element during runtime.
-   **[Which Button Was Pressed?](atlas.en-us.lightning.meta/lightning/js_cb_which_button_pressed.htm)**
    To find out which button was pressed in a component containing multiple buttons, use Component.getLocalId().
-   **[Formatting Dates in JavaScript](atlas.en-us.lightning.meta/lightning/js_cb_format_dates.htm)**
    The AuraLocalizationService JavaScript API provides methods for formatting and localizing dates.
-   **[Using JavaScript Promises](atlas.en-us.lightning.meta/lightning/js_promises.htm)**
    You can use ES6 Promises in JavaScript code. Promises can simplify code that handles the success or failure of asynchronous calls, or code that chains together multiple asynchronous calls.
-   **[Making API Calls from Components](atlas.en-us.lightning.meta/lightning/js_api_calls_platform.htm)**
    By default, you can’t make calls to third-party APIs from client-side code. Add a remote site as a Trusted URL with Content Security Policy (CSP) directives to allow client-side component code to load assets from and make API requests to that site’s domain.

#### See Also

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

## Code Examples

```
var theLabel = cmp.get("v.label");
```

## Related Topics

- JavaScript API (atlas.en-us.lightning.meta/lightning/ref_jsapi_intro.htm)
- Supported JavaScript (atlas.en-us.lightning.meta/lightning/js_supported_es.htm)
- Invoking Actions on Component Initialization (atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm)
- Sharing JavaScript Code in a Component Bundle (atlas.en-us.lightning.meta/lightning/js_helper.htm)
- Sharing JavaScript Code Across Components (atlas.en-us.lightning.meta/lightning/security_share_code.htm)
- Using External JavaScript Libraries (atlas.en-us.lightning.meta/lightning/js_libs_platform.htm)
- Dynamically Creating Components (atlas.en-us.lightning.meta/lightning/js_cb_dynamic_cmp_async.htm)
- Detecting Data Changes with Change Handlers (atlas.en-us.lightning.meta/lightning/js_cb_data_change.htm)
- Finding Components by ID (atlas.en-us.lightning.meta/lightning/js_cb_find_by_id.htm)
- Working with Attribute Values in JavaScript (atlas.en-us.lightning.meta/lightning/js_attr_values.htm)
