---
title: "apex:scontrol"
domain: pages
topic: apexscontrol
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.055Z
estimatedTokens: 466
keywords: [apex, scontrol, inline, frame, displays, s-control, Attributes]
---

# apex:scontrol

> An inline frame that displays an s-control.

# apex:scontrol

An inline frame that displays an s-control.

Note: **s-controls have been superseded by Visualforce pages**. After March 2010 organizations that have never created s-controls, as well as new organizations, won't be allowed to create them. Existing s-controls remain unaffected.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| controlName | String | The name of the s-control displayed. For this value, use the s-control's name field, not its label. |  | 10.0 | global |
| height | Integer | The height of the inline frame that should display the s-control, expressed either as a percentage of the total available vertical space (for example height="50%"), or as the number of pixels (for example, height="300px"). |  | 10.0 | global |
| id | String | An identifier that allows the s-control component to be referenced by other components in the page. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| scrollbars | Boolean | A Boolean value that specifies whether the s-control can be scrolled. If not specified, this value defaults to true. |  | 10.0 | global |
| subject | Object | The ID of the record that should provide data for this s-control. |  | 10.0 | global |
| width | Integer | The width of the inline frame that should display the s-control, expressed either as the number of pixels or as a percentage of the total available horizontal space. To specify the number of pixels, set this attribute to a number followed by px, (for example, width="600px"). To specify a percentage, set this attribute to a number preceded by a hyphen (for example width="-80"). |  | 10.0 | global |

## Code Examples

```
<!-- For this component to work, you must have a valid s-control defined. -->
<apex:page>
    <apex:scontrol controlName="HelloWorld" />
</apex:page>
```
