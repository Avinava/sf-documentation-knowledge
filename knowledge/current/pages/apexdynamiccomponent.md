---
title: "apex:dynamicComponent"
domain: pages
topic: apexdynamiccomponent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.401Z
estimatedTokens: 361
keywords: [apex, dynamicComponent, tag, acts, placeholder, dynamic, components, parameter—componentValue—which, accepts, component, Attributes]
---

# apex:dynamicComponent

> This tag acts as a placeholder for your dynamic Apex components. It has one required parameter—componentValue—which accepts the name of an Apex method that returns a dynamic component.

# apex:dynamicComponent

This tag acts as a placeholder for your dynamic Apex components. It has one required parameter—componentValue—which accepts the name of an Apex method that returns a dynamic component.

The following Visualforce components do not have dynamic Apex representations:

-   <apex:attribute\>
-   <apex:component\>
-   <apex:componentBody\>
-   <apex:composition\>
-   <apex:define\>
-   <apex:dynamicComponent\>
-   <apex:include\>
-   <apex:insert\>
-   <apex:param\>
-   <apex:variable\>

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| componentValue | UIComponent | Accepts the name of an Apex method that returns a dynamic Visualforce component. | Yes | 22.0 |  |
| id | String | An identifier that allows the attribute to be referenced by other tags in the custom component definition. |  | 22.0 | global |
| invokeAfterAction | Boolean | A Boolean value that, when true, specifies that componentValue's Apex method is called after the page's or submit's action method is invoked. |  | 31.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 22.0 |  |

#### See Also

-   [Creating and Displaying Dynamic Components](atlas.en-us.pages.meta/pages/pages_dynamic_vf_components_implementation.htm)

## Code Examples

```apex
<apex:page controller="SimpleDynamicController">
    <apex:dynamicComponent componentValue="{!dynamicDetail}" />
</apex:page>

/* Controller */
public class SimpleDynamicController {

    public Component.Apex.Detail getDynamicDetail() {
        Component.Apex.Detail detail = new Component.Apex.Detail();
        detail.expressions.subject = '{!acct.OwnerId}';
        detail.relatedList = false;
        detail.title = false;
        return detail;
    }

    // Just return the first Account, for example purposes only
    public Account acct {
        get { return [SELECT Id, Name, OwnerId FROM Account LIMIT 1]; }
    }
}
```

## Related Topics

- Creating and Displaying Dynamic Components (atlas.en-us.pages.meta/pages/pages_dynamic_vf_components_implementation.htm)
