---
title: "Supported aura:attribute Types"
domain: lightning
topic: supported-auraattribute-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.433Z
estimatedTokens: 479
keywords: [aura, attribute, app, component, event]
---

# Supported aura:attribute Types

> aura:attribute describes an attribute available on
  an app, interface, component, or event.

# Supported aura:attribute Types

aura:attribute describes an attribute available on an app, interface, component, or event.

| Attribute Name | Type | Description |
| --- | --- | --- |
| access | String | Indicates whether the attribute can be used outside of its own namespace. Possible values are public (default), and global, and private. |
| name | String | Required. The name of the attribute. For example, if you set <aura:attribute name="isTrue" type="Boolean" /> on a component called aura:newCmp, you can set this attribute when you instantiate the component; for example,<aura:newCmp isTrue="false" />. |
| type | String | Required. The type of the attribute. For a list of basic types supported, see Basic Types. |
| default | String | The default value for the attribute, which can be overwritten as needed. When setting a default value, expressions using the $Label, $Locale, and $Browser global value providers are supported. Alternatively, to set a dynamic default, use an init event. See Invoking Actions on Component Initialization. |
| required | Boolean | Determines if the attribute is required. The default is false. |
| description | String | A summary of the attribute and its usage. |

All <aura:attribute> tags have name and type values. For example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Although type values are case insensitive, case sensitivity should be respected as your markup interacts with JavaScript, CSS, and Apex.

#### See Also

-   [Component Attributes](atlas.en-us.lightning.meta/lightning/components_attributes.htm "Component attributes are like member variables on a class in Apex. They are typed fields that are set on a specific instance of a component, and can be referenced from within the component's markup using an expression syntax. Attributes enable you to make components more dynamic.")

## Code Examples

```
<aura:attribute name="whom" type="String" />
```

## Related Topics

- Basic Types (atlas.en-us.lightning.meta/lightning/ref_attr_types_basic.htm)
- Invoking Actions on Component Initialization (atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm)
- Component Attributes (atlas.en-us.lightning.meta/lightning/components_attributes.htm)
