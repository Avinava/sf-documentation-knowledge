---
title: "Canvas SDK Publisher Events"
domain: platform-connect
topic: canvas-sdk-publisher-events
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.481Z
estimatedTokens: 977
keywords: [Canvas, SDK, Publisher, Events, expose, app, well-defined, enable, communication, Sequence]
---

# Canvas SDK Publisher Events

> When you expose a canvas app in the publisher, you can
use well-defined events to enable communication between the canvas
app and the publisher.

# Canvas SDK Publisher Events

When you expose a canvas app in the publisher, you can use well-defined events to enable communication between the canvas app and the publisher.

Your canvas app can subscribe and publish these events to more tightly integrate with the publisher framework. For example, you can activate the standard Chatter Share button to post a Chatter feed item. You can also access the post text that the user enters in the What are you working on? field in the publisher and combine that with content from your app.

| Field | Description |
| --- | --- |
| publisher.clearPanelState | Fired by the publisher when the canvas app is deactivated or hidden. This can happen when the user selects a different application in the publisher or after the Share button has been clicked. A Visualforce page can also listen for this event. |
| publisher.failure | Fired by the publisher when an error condition is encountered such as when invalid data has been submitted. For example:The text in the feed is too longThe canvas app you’re attempting to publish to the feed doesn’t existThe canvas app URL is invalidThe canvas app should listen for this event and alert the user that an error occurred and the post didn’t get created. |
| publisher.getPayload | Fired by the publisher when the Share button is clicked. The payload contains information such as the text entered into the What are you working on? field and who the feed item is being shared with. |
| publisher.setupPanel | Fired by the publisher when the Chatter feed page is initially loaded. |
| publisher.setPayload | Fired by the canvas app to indicate to the publisher that the content being sent to the publisher should be shared in the feed item. This event is in response to publisher.getPayload and contains information about the feed item you’re trying to create. You can create three feed item types:TextPostLinkPostCanvasPost |
| publisher.setValidForSubmit | Fired by the canvas app to indicate to the publisher that the canvas app is ready to submit a payload. After this event fires, the Share button becomes active.This code snippet enables the Share button:$$.client.publish(sr.client,      {name : 'publisher.setValidForSubmit',          payload : true}); |
| publisher.showPanel | Fired by the publisher when the user selects a canvas app in the publisher. This event indicates that the canvas app is being displayed. A Visualforce page can also listen for this event. |
| publisher.success | Fired by the publisher after the Share button is clicked and data is successfully submitted. |

## Sequence of Publisher Events

Here’s the order of publisher events from the perspective of the canvas app:

1.  The canvas app listens for publisher.setupPanel.
2.  The canvas app listens for publisher.showPanel.
3.  The user interacts with the canvas app, for example, clicks a button or enters some text. The canvas app does any validation required and then fires publisher.setValidForSubmit. As a result, the publisher then enables the Share button.
4.  The canvas app listens for publisher.getPayload.
5.  The canvas app fires publisher.setPayload.
6.  The canvas app listens for publisher.success.
7.  The canvas app listens for publisher.failure.
8.  The canvas app listens for publisher.clearPanelState.

#### See Also

-   [Create the Action Manually](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_create_action.htm "If you didn’t select the Create Actions Automatically field when you created the canvas app, then you’ll need to create the action manually.")

-   [Publisher Context Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_context_considerations.htm "When you display a canvas app inside the publisher, the context information you receive from the signed request or from a getContext() call contains information specific to the publisher:")

## Code Examples

```
$$.client.publish(sr.client, 
    {name : 'publisher.setValidForSubmit', 
        payload : true});
```

## Related Topics

- Create the Action Manually (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_create_action.htm)
- Publisher Context Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_context_considerations.htm)
