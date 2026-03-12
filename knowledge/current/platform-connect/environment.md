---
title: "Environment"
domain: platform-connect
topic: environment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.513Z
estimatedTokens: 813
keywords: [Environment, JSON-formatted, containing, context, canvas, app, Dimensions, Record, Version, there, any, Param]
---

# Environment

> The Environment object is a JSON-formatted object containing context information
                about the canvas app environment. This object contains the Dimensions object, the Record object, the
                    Version object, and parameters (if there are any) in the
                    Param

# Environment

The Environment object is a JSON-formatted object containing context information about the canvas app environment. This object contains the [Dimensions](atlas.en-us.platform_connect.meta/platform_connect/dimensions_object.htm) object, the [Record](atlas.en-us.platform_connect.meta/platform_connect/record_object.htm) object, the [Version](atlas.en-us.platform_connect.meta/platform_connect/version_object.htm) object, and parameters (if there are any) in the [Parameters](atlas.en-us.platform_connect.meta/platform_connect/parameters_object.htm) object.

| Field | Description |
| --- | --- |
| displayLocation | The location in the application where the canvas app is currently being called from. Valid values are:Chatter—The canvas app was called from the Chatter tab.ChatterFeed—The canvas app was called from a Chatter canvas feed item.MobileNav—The canvas app was called from the navigation menu.OpenCTI—The canvas app was called from an Open CTI component.PageLayout—The canvas app was called from an element within a page layout. If the displayLocation is PageLayout, one of the subLocation values might be returned.Publisher—The canvas app was called from a canvas custom quick action.ServiceDesk—The canvas app was called from a Salesforce Console component.Visualforce—The canvas app was called from a Visualforce page.None—The canvas app was called from the Canvas App Previewer. |
| locationUrl | The URL of the page in Salesforce where the user accesses the canvas app. For example, if users access your canvas app by clicking a link on the Chatter tab, this field contains the URL of the Chatter tab. |
| subLocation | The sublocation in the application where the canvas app was called from when the canvas app is loaded in a mobile device. The subLocation is related to the displayLocation. Valid values for this field when the displayLocation is PageLayout are:S1MobileCardFullview—The canvas app was called from a mobile card.S1MobileCardPreview—The canvas app was called from a mobile card preview. The user must click the preview to open the app.S1RecordHomePreview—The canvas app was called from a record detail page preview.  The user must click the preview to open the app.S1RecordHomeFullview—The canvas app was called from a page layout. |
| uiTheme | The default theme for the context organization. |

The following code snippet shows an example of the Environment object.

```

```

-   **[Dimensions](atlas.en-us.platform_connect.meta/platform_connect/dimensions_object.htm)**

-   **[Record](atlas.en-us.platform_connect.meta/platform_connect/record_object.htm)**

-   **[Parameters](atlas.en-us.platform_connect.meta/platform_connect/parameters_object.htm)**

-   **[Version](atlas.en-us.platform_connect.meta/platform_connect/version_object.htm)**


#### See Also

-   [Context](atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)

-   [Dimensions](atlas.en-us.platform_connect.meta/platform_connect/dimensions_object.htm)

-   [Record](atlas.en-us.platform_connect.meta/platform_connect/record_object.htm)

-   [Parameters](atlas.en-us.platform_connect.meta/platform_connect/parameters_object.htm)

-   [Version](atlas.en-us.platform_connect.meta/platform_connect/version_object.htm)

## Code Examples

```
"environment": 
{ 
    "parameters":{},
    "dimensions":
    { 
        "clientHeight": "50px", 
        "clientWidth": "70px", 
        "height":"900px", 
        "width":"800px",
        "maxHeight":"2000px", 
        "maxWidth":"1000px"
 
    }, 
    "record": {
        "attributes": {
            "type": "Account",
            "url": "/services/data/v66.0/sobjects/Account/001xx000003DGWiAAO"
        },
            "Id": "001xx000003DGWiAAO",
            "Phone": "(555) 555-5555",
            "Fax": "(555) 555-5555",
            "BillingCity": "Seattle"
    },
    "displayLocation":"PageLayout", 
    "locationUrl":"https://salesforce.com/some/path/index.html", 
    "subLocation":"S1MobileCardFullview",
    "uiTheme":"Theme3",
    "version":
    { 
        "api":"66.0", 
        "season":"SUMMER" 
     }
}
```

## Related Topics

- Dimensions (atlas.en-us.platform_connect.meta/platform_connect/dimensions_object.htm)
- Record (atlas.en-us.platform_connect.meta/platform_connect/record_object.htm)
- Version (atlas.en-us.platform_connect.meta/platform_connect/version_object.htm)
- Parameters (atlas.en-us.platform_connect.meta/platform_connect/parameters_object.htm)
- Context (atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)
