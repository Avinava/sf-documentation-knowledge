---
title: "apex:outputPanel"
domain: pages
topic: apexoutputpanel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.845Z
estimatedTokens: 1089
keywords: [apex, outputPanel, content, grouped, together, rendered, HTML, <span>, tag, <div>, neither, <apex, outputPanel>, group, components]
---

# apex:outputPanel

> A set of content that is grouped together, rendered with an HTML <span> tag, <div> tag, or neither. Use an <apex:outputPanel> to group components together for AJAX refreshes.

# apex:outputPanel

A set of content that is grouped together, rendered with an HTML <span\> tag, <div\> tag, or neither. Use an <apex:outputPanel\> to group components together for AJAX refreshes.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated container tag, <div\> or <span\>, depending on the value of the layout attribute.

## Span Example

```

```

The example above renders the following HTML:

```

```

## Div Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| id | String | An identifier that allows the outputPanel component to be referenced by other components in the page. |  | 10.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| layout | String | The layout style for the panel. Possible values include "block" (which generates an HTML div tag), "inline" (which generates an HTML span tag), and "none" (which does not generate an HTML tag). If not specified, this value defaults to "inline".Note: If layout is set to "none", for each child element with the rendered attribute set to "false", the outputPanel generates a span tag with the ID of the child, and a style attribute set to "display:none". While the content isn't visible, JavaScript can still access the elements through the DOM ID, making it possible to update the child elements. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the output panel. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the output panel twice. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the output panel. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the output panel. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| style | String | The style used to display the outputPanel component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the outputPanel component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet.. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |

## Code Examples

```
<!-- Spans do not add any additional formatting to the body of the outputPanel.  -->
<apex:outputPanel id="thePanel">My span</apex:outputPanel>
```

```
<span id="thePanel">My span</span>
```

```
<!-- Divs place the body of the outputPanel within the equivalent of an HTML paragraph tag.  -->
<apex:outputPanel id="thePanel" layout="block">My div</apex:outputPanel>
```

```
<div id="thePanel">My div</div>
```
