---
title: "style Properties"
domain: bi-dev-guide-json
topic: style-properties
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:02.247Z
estimatedTokens: 526
keywords: [style, key, dashboard, cell, spacing, grid, well, dashboard’s, background, color, image]
---

# style Properties

> The style key contains the dashboard properties,
    like cell spacing in the grid, as well as the dashboard’s background color or image.

# style Properties

The style key contains the dashboard properties, like cell spacing in the grid, as well as the dashboard’s background color or image.

| Property Name | Details |
| --- | --- |
| alignmentX | TypeStringExposed in the Dashboard Designer's User InterfaceYesDescriptionThe horizontal alignment of the background image applied to the dashboard.Valid values are: left (default), center, and right. |
| alignmentY | TypeStringExposed in the Dashboard Designer's User InterfaceYesDescriptionThe vertical alignment of the background image applied to the dashboard.Valid values are: top (default), center, and bottom. |
| backgroundColor | TypeStringExposed in the Dashboard Designer's User InterfaceYesDescriptionBackground color of the dashboard, specified in hex color code. The default is #FFFFFF. |
| cellSpacingX | TypeIntegerExposed in the Dashboard Designer's User InterfaceYesDescriptionHorizontal spacing (in pixels) between cells in the dashboard grid.Valid values are 0, 4, 8 (default), and 16. |
| cellSpacingY | TypeIntegerExposed in the Dashboard Designer's User InterfaceYesDescriptionVertical spacing (in pixels) between cells in the dashboard grid.Valid values are 0, 4, 8 (default), and 16. |
| documentId | TypeStringExposed in the Dashboard Designer's User InterfaceYesDescriptionThe 15-character document ID of the image to apply as the dashboard’s background. To ensure security, upload the image file to Salesforce as a document, and select the Externally Available Image option. If this option is not selected or the referenced document is not an image, the image doesn’t show up. |
| fit | TypeStringExposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates how to scale the image.Valid values are: original (default), stretch, tile, fitwidth, and fitheight. |
| image | TypeArrayExposed in the Dashboard Designer's User InterfaceYesDescriptionIdentifies the image using the following properties.nameName of the image.namespaceOptional. Namespace of the image. Default is null.Example"image": {     "name": "My_Corporate_Logo",     "namespace": "" } |

## Code Examples

```
"image": {
    "name": "My_Corporate_Logo",
    "namespace": ""
}
```
