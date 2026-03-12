---
title: "apex:flash"
domain: pages
topic: apexflash
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.434Z
estimatedTokens: 535
keywords: [apex, flash, movie, rendered, HTML, embed, tags, Attributes]
---

# apex:flash

> A Flash movie, rendered with the HTML object and embed tags.

# apex:flash

A Flash movie, rendered with the HTML object and embed tags.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

This component is supported only on Visualforce pages with an API version 49.0 or earlier. Flash itself isn’t supported in any modern browser supported by Salesforce.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| flashvars | String | The flashvars attribute can be used to import root level variables to the movie. All variables are created before the first frame of the SWF is played. The value should consist of a list of ampersand-separated name-value pairs. |  | 14.0 |  |
| height | String | The height at which this movie is displayed, expressed either as a relative percentage of the total available vertical space (for example, 50%) or as a number of pixels (for example, 100). | Yes | 14.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| loop | Boolean | A Boolean value that specifies whether the flash movie plays repeatedly or just once. If set to true, the flash movie plays repeatedly. If not specified, this value defaults to false. |  | 14.0 |  |
| play | Boolean | A Boolean value that specifies whether the flash movie automatically begins playing when displayed. If set to true, the flash movie automatically begins playing. If not specified, the value defaults to false. |  | 14.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| src | String | The path to the movie displayed, expressed as a URL. Note that a flash movie can be stored as a static resource in Salesforce. | Yes | 14.0 |  |
| width | String | The width at which this movie is displayed, expressed either as a relative percentage of the total available horizontal space (for example, 50%) or as a number of pixels (for example, 100). | Yes | 14.0 |  |

## Code Examples

```
<apex:page sidebar="false" showheader="false">
     <apex:flash src="http://www.adobe.com/devnet/flash/samples/drawing_1/1_coordinates.swf" 
     height="300" width="100%" />
</apex:page>
```
