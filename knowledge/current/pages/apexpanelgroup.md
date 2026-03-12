---
title: "apex:panelGroup"
domain: pages
topic: apexpanelgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.995Z
estimatedTokens: 360
keywords: [apex, panelGroup, container, multiple, child, components, they, panelGrid, cell, <apex, panelGroup>, component, panelGrid>, Attributes]
---

# apex:panelGroup

> A container for multiple child components so that they can be displayed in a single panelGrid cell. An <apex:panelGroup> must be a child component of an <apex:panelGrid>.

# apex:panelGroup

A container for multiple child components so that they can be displayed in a single panelGrid cell. An <apex:panelGroup\> must be a child component of an <apex:panelGrid\>.

## Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the panelGrid component to be referenced by other components in the page. |  | 10.0 | global |
| layout | String | The layout style for the panel group. Possible values include "block" (which generates an HTML div tag), "inline" (which generates an HTML span tag), and "none" (which does not generate an HTML tag). If not specified, this value defaults to "inline". |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| style | String | The style used to display the panelGroup component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the panelGroup component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |

#### See Also

-   [apex:panelGrid](atlas.en-us.pages.meta/pages/pages_compref_panelGrid.htm)

## Code Examples

```
<apex:page>
    <apex:panelGrid columns="3" id="theGrid">
        <apex:outputText value="First" id="theFirst"/>
        <apex:outputText value="Second" id="theSecond"/>
        <apex:panelGroup id="theGroup">
            <apex:outputText value="Third" id="theThird"/>
            <apex:outputText value="Fourth" id="theFourth"/>
        </apex:panelGroup>
    </apex:panelGrid>
</apex:page>
```

```
<table id="theGrid">
    <tbody>
        <tr>
            <td><span id="theFirst">First</span></td>
            <td><span id="theSecond">Second</span></td>
            <td><span id="theGroup">
                    <span id="theThird">Third</span>
                    <span id="theFourth">Fourth</span>
                </span></td>
        </tr>
    </tbody>
</table>
```

## Related Topics

- apex:panelGrid (atlas.en-us.pages.meta/pages/pages_compref_panelGrid.htm)
