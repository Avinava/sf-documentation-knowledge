---
title: "Value Providers"
domain: lightning
topic: value-providers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.017Z
estimatedTokens: 773
keywords: [Providers, way, access, data, encapsulate, together, similar, how, encapsulates, Accessing, Objects]
---

# Value Providers

> Value providers are a way to access data. Value providers
encapsulate related values together, similar to how an object encapsulates
properties and methods.

# Value Providers

Value providers are a way to access data. Value providers encapsulate related values together, similar to how an object encapsulates properties and methods.

The value providers for a component are v (view) and c (controller).

| Value Provider | Description | See Also |
| --- | --- | --- |
| v | A component’s attribute set. This value provider enables you to access the value of a component’s attribute in the component’s markup. | Component Attributes |
| c | A component’s controller, which enables you to wire up event handlers and actions for the component | Handling Events with Client-Side Controllers |

All components have a v value provider, but aren't required to have a controller. Both value providers are created automatically when defined for a component.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Expressions are bound to the specific component that contains them. That component is also known as the attribute value provider, and is used to resolve any expressions that are passed to attributes of its contained components.

## Global Value Providers

Global value providers are global values and methods that a component can use in expressions.

| Global Value Provider | Description | See Also |
| --- | --- | --- |
| globalID | The globalId global value provider returns the global ID for a component. Every component has a unique globalId, which is the generated runtime-unique ID of the component instance. | Component IDs |
| $Browser | The $Browser global value provider returns information about the hardware and operating system of the browser accessing the application. | $Browser |
| $ContentAsset | The $ContentAsset global value provider lets you reference images, style sheets, and JavaScript used as asset files in your lightning components. | $ContentAsset |
| $Label | The $Label global value provider enables you to access labels stored outside your code. | Using Custom Labels |
| $Locale | The $Locale global value provider returns information about the current user’s preferred locale. | $Locale |
| $Resource | The $Resource global value provider lets you reference images, style sheets, and JavaScript code you’ve uploaded in static resources. | $Resource |

## Accessing Fields and Related Objects

Values in a value provider are accessed as named properties. To use a value, separate the value provider and the property name with a dot (period). For example, v.body. You can access value providers in markup or in JavaScript code.

When an attribute of a component is an object or other structured data (not a primitive value), access the values on that attribute using the same dot notation.

For example, {!v.accounts.id} accesses the id field in the accounts record.

For deeply nested objects and attributes, continue adding dots to traverse the structure and access the nested values.

#### See Also

-   [Dynamic Output in Expressions](atlas.en-us.lightning.meta/lightning/expr_dynamic_output.htm "The simplest way to use expressions is to output dynamic values.")

## Related Topics

- Component Attributes (atlas.en-us.lightning.meta/lightning/components_attributes.htm)
- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
- Component IDs (atlas.en-us.lightning.meta/lightning/components_ids.htm)
- $Browser (atlas.en-us.lightning.meta/lightning/expr_browser_value_provider.htm)
- $ContentAsset (atlas.en-us.lightning.meta/lightning/expr_contentasset_value_provider.htm)
- Using Custom Labels (atlas.en-us.lightning.meta/lightning/labels_value_provider_platform.htm)
- $Locale (atlas.en-us.lightning.meta/lightning/expr_locale_value_provider.htm)
- $Resource (atlas.en-us.lightning.meta/lightning/expr_resource_value_provider.htm)
- Dynamic Output in Expressions (atlas.en-us.lightning.meta/lightning/expr_dynamic_output.htm)
