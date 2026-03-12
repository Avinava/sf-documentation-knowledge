---
title: "Implementing Canvas App Events"
domain: platform-connect
topic: implementing-canvas-app-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.240Z
estimatedTokens: 791
keywords: [Implementing, Canvas, App, Events, provide, JavaScript-based, way, send, receive, apps, enable, communication, multiple]
---

# Implementing Canvas App Events

> Events provide a JavaScript-based
way to send and receive events between canvas apps. Use events to
enable communication between multiple canvas apps on a single page.

# Implementing Canvas App Events

Events provide a JavaScript-based way to send and receive events between canvas apps. Use events to enable communication between multiple canvas apps on a single page.

One scenario might be a page on which you expose two custom apps as canvas apps: a travel and expense app, and an approvals app. You can create an event so that when the status of an expense report changes, that event gets raised and contains data (in JSON format) about that expense report. The approvals canvas app subscribes to that event and specifies a function that’s called when the event is raised. When the status is changed, the approvals app receives the event and the specified function runs.

Canvas provides methods for implementing custom events in a canvas app. Full reference documentation for these methods can be found in the [SDK](https://github.com/forcedotcom/salesforcecanvasframeworksdk "HTML (New Window)") and [here](http://htmlpreview.github.io/?https://github.com/forcedotcom/SalesforceCanvasJavascriptSDK/blob/master/docs/index.html "HTML (New Window)").

-   publish—Creates a custom event to which other canvas apps or Visualforce pages can subscribe. See [Creating a Canvas App Event](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_event_publish_code_example.htm).
-   subscribe—Subscribes to a parent event or custom event. This method can be used to subscribe to multiple events. See [Subscribing to a Canvas App Event](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_event_subscribe_code_example.htm).
-   unsubscribe—Unsubscribe from a parent event or custom event. This method can be used to unsubscribe from multiple events. See [Unsubscribing from a Canvas App Event](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_event_unsubscribe_code_example.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

The subscribe and unsubscribe methods can also be used to subscribe to a single Streaming API event.

-   **[Canvas App Events Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events_considerations.htm)**

-   **[Creating a Canvas App Event](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_event_publish_code_example.htm)**

-   **[Subscribing to a Canvas App Event](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_event_subscribe_code_example.htm)**

-   **[Unsubscribing from a Canvas App Event](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_event_unsubscribe_code_example.htm)**


#### See Also

-   [Canvas SDK](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm "Canvas is a set of tools that enable you to integrate your apps within Salesforce. This framework includes an SDK that you can use to authenticate your app and retrieve data from Salesforce.")

-   [Canvas App Events Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events_considerations.htm)

-   [Using Streaming API in a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_api.htm)

## Related Topics

- Creating a Canvas App Event (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_event_publish_code_example.htm)
- Subscribing to a Canvas App Event (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_event_subscribe_code_example.htm)
- Unsubscribing from a Canvas App Event (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_event_unsubscribe_code_example.htm)
- Canvas App Events Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events_considerations.htm)
- Canvas SDK (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm)
- Using Streaming API in a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_api.htm)
