---
title: "Framework-Specific Types"
domain: lightning
topic: framework-specific-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.393Z
estimatedTokens: 461
keywords: [Framework-Specific, specific, framework]
---

# Framework-Specific Types

> Here are the supported type values that are specific to the framework.

# Framework-Specific Types

Here are the supported type values that are specific to the framework.

| type | Example | Description |
| --- | --- | --- |
| Aura.Component | N/A | A single component. We recommend using Aura.Component[] instead. |
| Aura.Component[] | <aura:attribute name="detail" type="Aura.Component[]"/>To set a default value for type="Aura.Component[]", put the default markup in the body of aura:attribute. For example:<aura:component>     <aura:attribute name="detail" type="Aura.Component[]">     <p>default paragraph1</p>     </aura:attribute>     Default value is: {!v.detail} </aura:component> | Use this type to set blocks of markup. An attribute of type Aura.Component[] is called a facet. |
| Aura.Action | <aura:attribute name="onclick" type="Aura.Action"/> | Use this type to pass an action to a component. See Using the Aura.Action Attribute Type. |

-   **[Using the Aura.Action Attribute Type](atlas.en-us.lightning.meta/lightning/ref_attr_types_aura_action.htm)**
    An Aura.Action is a reference to an action in the framework. If a child component has an Aura.Action attribute, a parent component can pass in an action handler when it instantiates the child component in its markup. This pattern is a shortcut to pass a controller action from a parent component to a child component that it contains, and is used for on\* handlers, such as onclick.

#### See Also

-   [Component Body](atlas.en-us.lightning.meta/lightning/components_body.htm "The root-level tag of every component is <aura:component>. Every component inherits the body attribute from <aura:component>.")

-   [Component Facets](atlas.en-us.lightning.meta/lightning/components_facets.htm "A facet is any attribute of type Aura.Component[]. Use this type as a placeholder for a block of markup. The body attribute is an example of a facet.")

## Code Examples

```
<aura:component>
    <aura:attribute name="detail" type="Aura.Component[]">
    <p>default paragraph1</p>
    </aura:attribute>
    Default value is: {!v.detail}
</aura:component>
```

## Related Topics

- Using the Aura.Action Attribute Type (atlas.en-us.lightning.meta/lightning/ref_attr_types_aura_action.htm)
- Component Body (atlas.en-us.lightning.meta/lightning/components_body.htm)
- Component Facets (atlas.en-us.lightning.meta/lightning/components_facets.htm)
