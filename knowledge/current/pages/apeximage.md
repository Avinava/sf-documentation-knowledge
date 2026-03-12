---
title: "apex:image"
domain: pages
topic: apeximage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.512Z
estimatedTokens: 1305
keywords: [apex, image, graphic, rendered, HTML, <img>, tag, Resource, Zip, IMAGEPROXYURL, Attributes]
---

# apex:image

> A graphic image, rendered with the HTML <img> tag.

# apex:image

A graphic image, rendered with the HTML <img\> tag.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <img\> tag.

## Example

```

```

The example above renders the following HTML:

```

```

## Resource Example

```

```

The example above renders the following HTML:

```

```

## Zip Resource Example

```

```

The example above renders the following HTML:

```

```

## IMAGEPROXYURL Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| alt | String | An alternate text description of the image, used for Section 508 compliance. |  | 10.0 | global |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| height | String | The height at which this image should be displayed, expressed either as a relative percentage of the total available vertical space (for example, height="50%") or as a number of pixels (for example, height="100px"). If not specified, this value defaults to the dimension of the source image file. |  | 10.0 | global |
| id | String | An identifier that allows the image component to be referenced by other components in the page. |  | 10.0 | global |
| ismap | Boolean | A Boolean value that specifies whether this image should be used as an image map. If set to true, the image component must be a child of a commandLink component. If not specified, this value defaults to false. |  | 10.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| longdesc | String | A URL that links to a longer description of the image. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the image. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the image twice. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the image. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the image. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| style | String | The style used to display the image component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the image component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |
| url | String | The path to the image displayed, expressed either as a URL or as a static resource or document merge field. |  | 10.0 | global |
| usemap | String | The name of a client-side image map (an HTML map element) for which this element provides the image. |  | 10.0 | global |
| value | Object | The path to the image displayed, expressed either as a URL or as a static resource or document merge field. |  | 10.0 | global |
| width | String | The width at which this image is displayed, expressed either as a relative percentage of the total available horizontal space (for example, width="50%") or as a number of pixels (for example, width="100px"). If not specified, this value defaults to the dimension of the source image file. |  | 10.0 | global |

## Code Examples

```
<apex:image id="theImage" value="/img/myimage.gif" width="220" height="55" alt="Description of image here"/>
```

```
<img id="theImage" src="/img/myimage.gif" width="220" height="55" alt="Description of image here"/>
```

```
<apex:image id="theImage" value="{!$Resource.myResourceImage}" width="200" height="200" alt="Description of image here"/>
```

```
<img id="theImage" src="<generatedId>/myResourceImage" width="200" height="200" alt="Description of image here"/>
```

```
<apex:image url="{!URLFOR($Resource.TestZip, 'images/Bluehills.jpg')}" width="50" height="50" alt="Description of image here"/>
```
