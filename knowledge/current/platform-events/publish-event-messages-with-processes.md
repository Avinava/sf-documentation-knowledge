---
title: "Publish Event Messages with Processes"
domain: platform-events
topic: publish-event-messages-with-processes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.078Z
estimatedTokens: 651
keywords: [Publish, Event, Messages, Processes, Process, Builder, Salesforce, app, part, automated]
---

# Publish Event Messages with Processes

> Use Process Builder to publish event messages from a Salesforce app
   as part of an automated process.

# Publish Event Messages with Processes

Use Process Builder to publish event messages from a Salesforce app as part of an automated process.

To publish event messages, add a Create a Record action to the appropriate process. Where you'd usually pick an object to create, select the custom platform event.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=platform_events)

#### Tip

If a platform event is configured to publish immediately, the process publishes each event message outside of the database transaction. If the transaction fails and is rolled back, the event message is still published and can’t be rolled back. So if you see an informational message under the selected platform event, consider whether you want the process to publish an event message only after the transaction commits successfully.

For example, here’s how to configure a Create a Record action that publishes a Low Ink event message. This example assumes that the Low Ink platform event is defined in your org and that the event has these custom fields.

-   Printer Model (Text)
-   Serial Number (Text)
-   Ink Percentage (Number)

1.  For Record Type, enter low and select **Low Ink**.
2.  Set the field values.

    | Field | Type | Value |
    | --- | --- | --- |
    | Printer Model | String | XZO-5 |
    | Serial Number | String | 12345 |
    | Ink Percentage | Number | 0.2 |

    ![Process Builder create a record action](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fpb_event_publish_low_ink.png&folder=platform_events)

3.  Save the action and activate the process.

#### See Also

-   [*Salesforce Help*: Process Builder](https://help.salesforce.com/articleView?id=process_overview.htm&language=en_US "Salesforce Help: Process Builder - HTML (New Window)")

-   [Decoupled Publishing and Subscription](atlas.en-us.platform_events.meta/platform_events/platform_events_considerations_decoupled_processes.htm "When the publish behavior of a platform event is set to Publish Immediately, it’s published outside of a Lightning Platform database transaction. As a result, the publishing and subscription processes are decoupled—the subscription process can’t assume that an action made by the publishing transaction is committed before an event message is received. Familiarize yourself with some scenarios that can occur from the decoupled behavior.")

-   [Platform Event Fields](atlas.en-us.platform_events.meta/platform_events/platform_events_define_ui.htm "Platform events contain standard fields. Add custom fields for your custom data.")

## Related Topics

- Decoupled Publishing and Subscription (atlas.en-us.platform_events.meta/platform_events/platform_events_considerations_decoupled_processes.htm)
- Platform Event Fields (atlas.en-us.platform_events.meta/platform_events/platform_events_define_ui.htm)
