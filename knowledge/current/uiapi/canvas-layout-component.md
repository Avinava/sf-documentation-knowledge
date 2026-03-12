---
title: "Canvas Layout Component"
domain: uiapi
topic: canvas-layout-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.756Z
estimatedTokens: 532
keywords: [Canvas, Layout, Component, record]
---

# Canvas Layout Component

> A canvas component on a record page layout.

# Canvas Layout Component

A canvas component on a record page layout.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | The API name of the canvas app. | Small, 41.0 | 41.0 |
| componentType | String | The value is Canvas. | Small, 41.0 | 41.0 |
| displayLocation | String | The location in the application where the canvas app is being called from. One of these values:Chatter—The canvas app was called from the Chatter tab.ChatterFeed—The canvas app was called from a Chatter canvas feed item.MobileNav—The canvas app was called from the navigation menu in the Salesforce mobile app.OpenCTI—The canvas app was called from an Open CTI component.PageLayout—The canvas app was called from an element within a page layout. If the displayLocation is PageLayout, one of the subLocation values can be returned.Publisher—The canvas app was called from a canvas custom quick action.ServiceDesk—The canvas app was called from a Salesforce Console component.Visualforce—The canvas app was called from a Visualforce page.None—The canvas app was called from the Canvas App Previewer.The sublocation in the application where the canvas app was called from when the canvas app is loaded in a mobile device. The possible values are:S1MobileCardFullview—The canvas app was called from a mobile card.S1MobileCardPreview—The canvas app was called from a mobile card preview.S1RecordHomePreview—The canvas app was called from a record detail page preview.S1RecordHomeFullview—The canvas app was called from a page layout. | Small, 41.0 | 41.0 |
| height | String | The height of the component. | Small, 41.0 | 41.0 |
| referenceId | String | The unique ID of the canvas app definition. | Small, 41.0 | 41.0 |
| showScroll | Boolean | Indicates whether to show the scroll bar on the canvas component (true) or not (false). | Small, 41.0 | 41.0 |
| width | String | The width of the component. | Small, 41.0 | 41.0 |

#### See Also

-   [Record Layout Item](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_item.htm "An item in a record layout.")

## Related Topics

- Record Layout Item (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_item.htm)
