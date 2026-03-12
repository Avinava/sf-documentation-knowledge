---
title: "Publish Event Messages with Flows"
domain: platform-events
topic: publish-event-messages-with-flows
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.073Z
estimatedTokens: 351
keywords: [Publish, Event, Messages, Flows, Salesforce, app, part, user, interaction, automated, process, Apex, workflow, action]
---

# Publish Event Messages with Flows

> Use flows to publish event messages from a Salesforce app
   as part of some user interaction, an automated process, Apex, or workflow
  action.

# Publish Event Messages with Flows

Use flows to publish event messages from a Salesforce app as part of some user interaction, an automated process, Apex, or workflow action.

To publish event messages, add a Create Records element to the appropriate flow. Where you'd usually pick an object to create, select the custom platform event.

For example, here’s how to configure a Create Records element that publishes a Printer Status platform event message. This example assumes that the Printer Status platform event is defined in your org and that the event has these custom fields.

-   Printer Model (Text)
-   Serial Number (Text)
-   Ink Status (Text)

1.  For How Many Records to Create, choose **One**.
2.  For How to Set the Record Fields, choose **Use separate variables, resources, and literal values**.
3.  For Object, enter Printer and select **Printer Status**.
4.  Set these field values.

    | Field | Value |
    | --- | --- |
    | Printer Model | XZO-5 |
    | Serial Number | 12345 |
    | Ink Status | Low |
    ![Create Records element in Flow Builder](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fvpm_event_publish_low_ink.png&folder=platform_events)

5.  Save and activate the flow.

#### See Also

-   [*Salesforce Help*: Flows](https://help.salesforce.com/articleView?id=flow.htm&language=en_US "Salesforce Help: Flows - HTML (New Window)")
