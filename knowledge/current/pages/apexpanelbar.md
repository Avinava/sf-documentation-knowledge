---
title: "apex:panelBar"
domain: pages
topic: apexpanelbar
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.966Z
estimatedTokens: 1102
keywords: [apex, panelBar, area, includes, <apex, panelBarItem>, tags, expand, user, clicks, associated, expanded, content, item, items]
---

# apex:panelBar

> A page area that includes one or more <apex:panelBarItem> tags that can expand when a user clicks the associated header. When an <apex:panelBarItem> is expanded, the header and the content of the item are displayed while the content of all other items are hidden. When another <apex:panelBarItem> is 

# apex:panelBar

A page area that includes one or more <apex:panelBarItem\> tags that can expand when a user clicks the associated header. When an <apex:panelBarItem\> is expanded, the header and the content of the item are displayed while the content of all other items are hidden. When another <apex:panelBarItem\> is expanded, the content of the original item is hidden again. An <apex:panelBar\> can include up to 1,000 <apex:panelBarItem\> tags.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated container <div\> tag.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| contentClass | String | The style class used to display the content of any panelBarItem in the panelBar component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| contentStyle | String | The style used to display the content of any panelBarItem in the panelBar component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| headerClass | String | The style class used to display all panelBarItem headers in the panelBar component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| headerClassActive | String | The style class used to display the header of any panelBarItem when it is expanded, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| headerStyle | String | The style used to display all panelBarItem headers in the panelBar component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| headerStyleActive | String | The style used to display the header of any panelBarItem when it is expanded, used primarily for adding inline CSS styles. |  | 10.0 | global |
| height | String | The height of the panel bar when expanded, expressed either as a percentage of the available vertical space (for example, height="50%") or as a number of pixels (for example, height="200px"). If not specified, this value defaults to 100%. |  | 10.0 | global |
| id | String | An identifier that allows the panelBar component to be referenced by other components in the page. |  | 10.0 | global |
| items | Object | A collection of data processed when the panelBar is rendered. When used, the body of the panelBar component is repeated once for each item in the collection, similar to a dataTable or repeat component. See also the var attribute. |  | 11.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| style | String | The style used to display all portions of the panelBar component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display all portions of the panelBar component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| switchType | String | The implementation method for switching between panelBar items. Possible values include "client", "server", and "ajax". If not specified, this value defaults to "server". |  | 10.0 | global |
| value | Object | The ID of the panelBarItem initially selected when the panelBar is displayed. |  | 10.0 | global |
| var | String | The name of the variable that represents one element in the collection of data specified by the items attribute. You can then use this variable to display the element itself in the body of the panelBar component tag. |  | 11.0 | global |
| width | String | The width of the panel bar, expressed either as a percentage of the available horizontal space (for example, width="50%") or as a number of pixels (for example, width="800px"). If not specified, this value defaults to 100%. |  | 10.0 | global |

#### See Also

-   [apex:panelBarItem](atlas.en-us.pages.meta/pages/pages_compref_panelBarItem.htm)

-   [Best Practices for <apex:panelbar>](atlas.en-us.pages.meta/pages/pages_compref_additional_panelbar.htm)

## Code Examples

```
<!-- Page: panelBar --> 

<!-- Click on Item 1, Item 2, or Item 3 to display the content of the panel -->

<apex:page>

    <apex:panelBar>

        <apex:panelBarItem label="Item 1">data 1</apex:panelBarItem>

        <apex:panelBarItem label="Item 2">data 2</apex:panelBarItem>

        <apex:panelBarItem label="Item 3">data 3</apex:panelBarItem>

    </apex:panelBar>

</apex:page>
```

## Related Topics

- apex:panelBarItem (atlas.en-us.pages.meta/pages/pages_compref_panelBarItem.htm)
- Best Practices for <apex:panelbar> (atlas.en-us.pages.meta/pages/pages_compref_additional_panelbar.htm)
