---
title: "apex:panelBarItem"
domain: pages
topic: apexpanelbaritem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.974Z
estimatedTokens: 754
keywords: [apex, panelBarItem, <apex, panelBar>, expand, retract, user, clicks, expanded, content, panelBarItem>, retracted, displays, Attributes]
---

# apex:panelBarItem

> A section of an <apex:panelBar> that can expand or retract when a user clicks the section header. When expanded, the header and the content of the <apex:panelBarItem> is displayed. When retracted, only the header of the <apex:panelBarItem> displays.

# apex:panelBarItem

A section of an <apex:panelBar\> that can expand or retract when a user clicks the section header. When expanded, the header and the content of the <apex:panelBarItem\> is displayed. When retracted, only the header of the <apex:panelBarItem\> displays.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated container <div\> tag.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| contentClass | String | The style class used to display the content of the panelBarItem component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| contentStyle | String | The style used to display the content of the panelBarItem component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| expanded | String | A Boolean value that specifies whether the content of this panelBarItem is displayed. |  | 10.0 | global |
| headerClass | String | The style class used to display the header of the panelBarItem component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| headerClassActive | String | The style class used to display the header of the panelBarItem component when the content of the panelBarItem is displayed, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| headerStyle | String | The style used to display the header of the panelBarItem component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| headerStyleActive | String | The style used to display the header of the panelBarItem component when the content of the panelBarItem is displayed, used primarily for adding inline CSS styles. |  | 10.0 | global |
| id | String | An identifier that allows the panelBarItem to be referenced by other components in the page. |  | 10.0 | global |
| label | String | The text displayed as the header of the panelBarItem component. |  | 10.0 | global |
| name | Object | The name of the panelBarItem. Use the value of this attribute to specify the default expanded panelItem for the panelBar. |  | 11.0 | global |
| onenter | String | The JavaScript invoked when the panelBarItem is not selected and the user clicks on the component to select it. |  | 16.0 |  |
| onleave | String | The JavaScript invoked when the user selects a different panelBarItem. |  | 16.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |

#### See Also

-   [apex:panelBar](atlas.en-us.pages.meta/pages/pages_compref_panelBar.htm)

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

<!-- Page: panelBarItemEvents -->

<apex:page >
  <apex:pageMessages/>
  
  <apex:panelBar>
    <apex:panelBarItem 
          label="Item One" 
          onenter="alert('Entering item one');" 
          onleave="alert('Leaving item one');">

      Item one content

    </apex:panelBarItem>

    <apex:panelBarItem 
          label="Item Two" 
          onenter="alert('Entering item two');" 
          onleave="alert('Leaving item two');">

      Item two content

    </apex:panelBarItem>
  </apex:panelBar>

</apex:page>
```

## Related Topics

- apex:panelBar (atlas.en-us.pages.meta/pages/pages_compref_panelBar.htm)
