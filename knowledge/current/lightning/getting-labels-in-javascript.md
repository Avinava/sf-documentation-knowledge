---
title: "Getting Labels in JavaScript"
domain: lightning
topic: getting-labels-in-javascript
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.210Z
estimatedTokens: 1103
keywords: [Getting, Labels, JavaScript, retrieve, code, performs, optimally, statically, defined, sent, client, component, loaded, Dynamic]
---

# Getting Labels in JavaScript

> You can retrieve labels in JavaScript code. Your code performs optimally if the labels
        are statically defined and sent to the client when the component is loaded.

# Getting Labels in JavaScript

You can retrieve labels in JavaScript code. Your code performs optimally if the labels are statically defined and sent to the client when the component is loaded.

## Static Labels

Static labels are defined in one string, such as "$Label.c.task\_mode\_today". The framework parses static labels in markup or JavaScript code and sends the labels to the client when the component is loaded. A server trip isn’t required to resolve the label.

Use $A.get() to retrieve static labels in JavaScript code. For example:

```

```

You can also retrieve label values using Apex code and send them to the component via JavaScript code. For more information, see [Getting Labels in Apex](atlas.en-us.lightning.meta/lightning/labels_apex.htm "You can retrieve label values in Apex code and set them on your component using JavaScript.").

## Dynamic Labels

$A.get(labelReference) must be able to resolve the label reference at compile time, so that the label values can be sent to the client along with the component definition.

If you must defer label resolution until runtime, you can dynamically create labels in JavaScript code. This technique can be useful when you need to use a label, but which specific label isn’t known until runtime.

```

```

If the label is already known on the client, $A.get() displays the label. If the value is not known, an empty string is displayed in production mode, or a placeholder value showing the label key is displayed in debug mode.

Using $A.get()with a label that can't be determined at runtime means that dynamicLabel is an empty string, and won’t be updated to the retrieved value. Since the label, "$Label.c." + day, is dynamically generated, the framework can’t parse it or send it to the client when the component is requested.

There are a few alternative approaches to using $A.get() so that you can work with dynamically generated labels.

If your component uses a known set of dynamically constructed labels, you can avoid a server roundtrip for the labels by adding a reference to the labels in a JavaScript resource. The framework sends these labels to the client when the component is requested. For example, if your component dynamically generates $Label.c.task\_mode\_today and $Label.c.task\_mode\_tomorrow label keys, you can add references to the labels in a comment in a JavaScript resource, such as a client-side controller or helper.

```

```

If your code dynamically generates many labels, this approach doesn’t scale well.

If you don’t want to add comment hints for all the potential labels, the alternative is to use $A.getReference(). This approach comes with the added cost of a server trip to retrieve the label value.

This example dynamically constructs the label value by calling $A.getReference() and updates a tempLabelAttr component attribute with the retrieved label.

```

```

$A.getReference() returns a reference to the label. This **isn’t** a string, and you shouldn’t treat it like one. You never get a string label directly back from $A.getReference().

Instead, use the returned reference to set a component’s attribute value. Our code does this in cmp.set("v.tempLabelAttr", labelReference);.

When the label value is asynchronously returned from the server, the attribute value is automatically updated as it’s a reference. The component is rerendered and the label value displays.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Our code sets dynamicLabel = cmp.get("v.tempLabelAttr") immediately after getting the reference. This code displays an empty string until the label value is returned from the server. If you don’t want that behavior, use a comment hint to ensure that the label is sent to the client without requiring a later server trip.

#### See Also

-   [Using JavaScript](atlas.en-us.lightning.meta/lightning/js_intro.htm "Use JavaScript for client-side code. The $A namespace is the entry point for using the framework in JavaScript code.")

-   [Input Component Labels](atlas.en-us.lightning.meta/lightning/labels_overview.htm "A label describes the purpose of an input component. To set a label on an input component, use the label attribute.")

-   [Dynamically Populating Label Parameters](atlas.en-us.lightning.meta/lightning/labels_parameters.htm "Output and update labels using the format() expression function.")

## Code Examples

```
var staticLabel = $A.get("$Label.c.task_mode_today");
component.set("v.mylabel", staticLabel);
```

```
// Assume the day variable is dynamically generated
// earlier in the code
// THIS CODE WON’T WORK
var dynamicLabel = $A.get("$Label.c." + day);
```

```
// hints to ensure labels are preloaded
// $Label.c.task_mode_today
// $Label.c.task_mode_tomorrow
```

```
var labelSubStr = "task_mode_today";
var labelReference = $A.getReference("$Label.c." + labelSubStr);
cmp.set("v.tempLabelAttr", labelReference);
var dynamicLabel = cmp.get("v.tempLabelAttr");
```

## Related Topics

- Getting Labels in Apex (atlas.en-us.lightning.meta/lightning/labels_apex.htm)
- Using JavaScript (atlas.en-us.lightning.meta/lightning/js_intro.htm)
- Input Component Labels (atlas.en-us.lightning.meta/lightning/labels_overview.htm)
- Dynamically Populating Label Parameters (atlas.en-us.lightning.meta/lightning/labels_parameters.htm)
