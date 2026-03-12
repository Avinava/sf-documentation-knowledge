---
title: "apex:outputLink"
domain: pages
topic: apexoutputlink
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.836Z
estimatedTokens: 1843
keywords: [apex, outputLink, link, URL, component, rendered, HTML, anchor, tag, href, attribute, equivalent, <apex, outputLink>, text]
---

# apex:outputLink

> A link to a URL. This component is rendered in HTML as an anchor tag with an href attribute. Like its HTML equivalent, the body of an <apex:outputLink> is the text or image that displays as the link. To add query string parameters to a link, use nested <apex:param> components.

# apex:outputLink

A link to a URL. This component is rendered in HTML as an anchor tag with an href attribute. Like its HTML equivalent, the body of an <apex:outputLink\> is the text or image that displays as the link. To add query string parameters to a link, use nested <apex:param\> components.

See also: <apex:commandLink\>

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <a\> tag.

## Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| accesskey | String | The keyboard access key that puts the link in focus. When the link is in focus, pressing the Enter key is equivalent to clicking the link. |  | 10.0 | global |
| charset | String | The character set used to encode the specified URL. If not specified, this value defaults to ISO-8859-1. |  | 10.0 | global |
| coords | String | The position and shape of the hot spot on the screen used for the output link (for use in client-side image maps).The number and order of comma-separated values depends on the shape being defined. For example, to define a rectangle, use coords="left-x, top-y, right-x, bottom-y". To define a circle, use coords="center-x, center-y, radius". To define a polygon, use coords="x1, y1, x2, y2, ..., xN, yN", where x1 = nN and y1 = yN.Coordinates can be expressed in pixels or percentages, and represent the distance from the top-left corner of the image that is mapped. See also the shape attribute. |  | 10.0 | global |
| dir | String | The direction in which the generated HTML component is read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| disabled | Boolean | A Boolean value that specifies whether this link is displayed in a disabled state. If set to true, the field appears disabled because an HTML span tag is used in place of the normal anchor tag. If not specified, this value defaults to false. |  | 10.0 | global |
| hreflang | String | The base language for the resource referenced by this command link, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| id | String | An identifier that allows the outputLink component to be referenced by other components in the page. |  | 10.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| onblur | String | The JavaScript invoked if the onblur event occurs--that is, if the focus moves off of the output link. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the output link. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the output link twice. |  | 10.0 | global |
| onfocus | String | The JavaScript invoked if the onfocus event occurs--that is, if the focus is on the output link. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the output link. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the output link. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| rel | String | The relationship from the current document to the URL specified by this command link. The value of this attribute is a space-separated list of link types. For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| rev | String | The reverse link from the URL specified by this command link to the current document. The value of this attribute is a space-separated list of link types. For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| shape | String | The shape of the hot spot in client-side image maps. Valid values are default, circle, rect, and poly. See also the coords attribute. |  | 10.0 | global |
| style | String | The style used to display the output link component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the output link component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| tabindex | String | The order in which this link is selected compared to other page components when a user presses the Tab key repeatedly. This value must be an integer between 0 and 32767, with component 0 being the first component that is selected when a user presses the Tab key. |  | 10.0 | global |
| target | String | The name of the frame where the resource retrieved by this command link is displayed. Possible values for this attribute include "_blank", "_parent", "_self", and "_top". You can also specify your own target names by assigning a value to the name attribute of a desired destination. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |
| type | String | The MIME content type of the resource designated by this output link. Possible values for this attribute include "text/html", "image/png", "image/gif", "video/mpeg", "text/css", and "audio/basic". For more information, including a complete list of possible values, see the W3C specifications. |  | 10.0 | global |
| value | Object | The URL used for the output link.WarningThis value can also be supplied through a variable expression, which could contain an executable script. |  | 10.0 | global |

#### See Also

-   [apex:commandLink](atlas.en-us.pages.meta/pages/pages_compref_commandLink.htm "A link that executes an action defined by a controller, and then either refreshes the current page, or navigates to a different page based on the PageReference variable that is returned by the action.")

## Code Examples

```
<apex:outputLink value="https://www.salesforce.com" id="theLink">www.salesforce.com</apex:outputLink>
```

```
<a id="theLink" name="theLink" href="https://www.salesforce.com">www.salesforce.com</a>
```

## Related Topics

- apex:commandLink (atlas.en-us.pages.meta/pages/pages_compref_commandLink.htm)
