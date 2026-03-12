---
title: "Canvas App Events Considerations"
domain: platform-connect
topic: canvas-app-events-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.243Z
estimatedTokens: 393
keywords: [Canvas, App, Events, Considerations, Streaming, API]
---

# Canvas App Events Considerations

> This is also true for Streaming API events.

# Canvas App Events Considerations

Keep these considerations in mind when implementing canvas app events:

-   We recommend that you use a namespace when naming events, but it’s not required.
-   The event namespace is different than the organization namespace in Salesforce. However, if you use namespaces, we recommend that you make the event namespace the same as the organization namespace.
-   The namespace must be a string with no periods in it. For example, my.name.space.statusChanged is invalid. An example of a valid event name with a namespace is mynamespace.statusChanged.
-   These names are reserved and can’t be used as a namespace:
    -   canvas
    -   chatter
    -   force
    -   publisher
    -   salesforce
    -   sfdc
-   Events work only between canvas apps on the same page. If you have a canvas app on the Chatter tab, that app can’t subscribe to events published by a canvas app on a Visualforce page.
-   You can subscribe to more than one custom event in a subscribe call.
-   You can subscribe to only one Streaming API event in a subscribe call.
-   You can’t subscribe to a custom event and a Streaming API event with the same subscribe call.
-   If you define multiple events with the same name in an array, only the last event defined is available. In this example, the last event where the Status is Negotiating is the one that’s used.

    ```

    ```

    This is also true for Streaming API events.


#### See Also

-   [Implementing Canvas App Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events.htm)

## Code Examples

```
Sfdc.canvas.client.subscribe(sr.client, [ 
{
    name :"mynamespace.statusChanged",
    payload : {status : 'Closed'}
},
{ 
    name:"mynamespace.statusChanged", 
    payload : {status : 'Negotiating'}
]);
```

## Related Topics

- Implementing Canvas App Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events.htm)
