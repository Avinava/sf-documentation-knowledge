---
title: "Controller"
domain: platform-connect
topic: controller
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.505Z
estimatedTokens: 286
keywords: [Controller]
---

# Controller

# Controller

If your Visualforce page contains a canvas app, you can use methods in the Controller object to publish an event that the canvas app subscribes to. It contains these methods:

| Method | Signature | Description |
| --- | --- | --- |
| publish | publish(String name, Object payload [, String[] target]) | Used to publish an event that the canvas app subscribes to. The target parameter is optional. It can contain a single canvas app name or an array of canvas app names. |
| resize | resize(String height, String width, String target) | Used by a Visualforce page to resize a canvas app iFrame. |
| subscribe | subscribe(Subscriber event) | Used by a Visualforce page to subscribe to events that the canvas app might publish. |
| unsubscribe | unsubscribe(Unsubscriber event) | Used by a Visualforce page to unsubscribe to parent events that the canvas app might publish. |

#### See Also

-   [Using Events between a Visualforce Page and a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_vf_app_resizing.htm)

-   [SignedRequest](atlas.en-us.platform_connect.meta/platform_connect/signed_request_object.htm)

## Related Topics

- Using Events between a Visualforce Page and a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_vf_app_resizing.htm)
- SignedRequest (atlas.en-us.platform_connect.meta/platform_connect/signed_request_object.htm)
