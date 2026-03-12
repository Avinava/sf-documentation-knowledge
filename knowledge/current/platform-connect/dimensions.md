---
title: "Dimensions"
domain: platform-connect
topic: dimensions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.508Z
estimatedTokens: 399
keywords: [Dimensions, JSON-formatted, containing, context, iFrame, canvas, app, appears]
---

# Dimensions

> The Dimensions object
is a JSON-formatted object containing context information about dimensions
of the iFrame on which the canvas app appears.

# Dimensions

The Dimensions object is a JSON-formatted object containing context information about dimensions of the iFrame on which the canvas app appears.

| Field | Description |
| --- | --- |
| clientHeight | The values of clientHeight are sent to the canvas app within SignedRequest and can be used to set the height of the outermost div element. This field is useful for setting the height of an app that’s accessed from a mobile device. The field can be referenced as sr.context.environment.dimensions.clientHeight, where sr is the parsed signed request JavaScript object. |
| clientWidth | The values of clientWidth are sent to the canvas app within SignedRequest and can be used to set the width of the outermost div element. This field is useful for setting the width of an app that’s accessed from a mobile device. The field can be referenced as sr.context.environment.dimensions.clientWidth, where sr is the parsed signed request JavaScript object. |
| height | The height of the iFrame in pixels. |
| width | The width of the iFrame in pixels. |
| maxHeight | The maximum height of the iFrame in pixels. Defaults to 2,000; “infinite” is also a valid value. |
| maxWidth | The maximum width of the iFrame in pixels. Defaults to 1,000; “infinite” is also a valid value. |

The following code snippet shows an example of the Dimensions object.

```

```

#### See Also

-   [Environment](atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm)

-   [User Interface Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_ui_considerations.htm)

## Code Examples

```
"dimensions": 
{ 

    "clientHeight": "50px", 
    "clientWidth": "70px", 
    "height": "900px", 
    "width": "800px", 
    "maxHeight": "2000px", 
    "maxWidth": "1000px" 
},
```

## Related Topics

- Environment (atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm)
- User Interface Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_ui_considerations.htm)
