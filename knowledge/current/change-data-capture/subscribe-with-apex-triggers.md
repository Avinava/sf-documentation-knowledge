---
title: "Subscribe with Apex Triggers"
domain: change-data-capture
topic: subscribe-with-apex-triggers
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.738Z
estimatedTokens: 536
keywords: [Subscribe, Apex, Triggers, capture, process, change, events, Lightning, Platform, event, run, asynchronously, database, transaction, completed]
---

# Subscribe with Apex Triggers

> With Apex triggers, you can capture and process change events on the Lightning Platform.
  Change event triggers run asynchronously after the database transaction is completed. Perform
  resource-intensive business logic asynchronously in the change event trigger, and implement
  transaction-based logic in the Apex object trigger. By decoupling the processing of changes,
  change event triggers can help reduce transaction processing time.

# Subscribe with Apex Triggers

With Apex triggers, you can capture and process change events on the Lightning Platform. Change event triggers run asynchronously after the database transaction is completed. Perform resource-intensive business logic asynchronously in the change event trigger, and implement transaction-based logic in the Apex object trigger. By decoupling the processing of changes, change event triggers can help reduce transaction processing time.

-   **[Change Event Triggers](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_trigger_intro.htm)**
    Because change events are based on platform events, they share characteristics for subscription with Apex platform event triggers. Also, change event messages in triggers contain header and record fields, and some additional fields not present in JSON event messages.
-   **[Apex Trigger Quick Start](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_trigger_quick_start.htm)**
    Create an Apex trigger that captures change event messages.
-   **[Apex Trigger Example](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_trigger_example.htm)**
    This sample trigger demonstrates a common use for change event triggers and provides a more complex trigger example than the quick start.
-   **[Test Change Event Triggers](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_trigger_testing.htm)**
    Before you can package or deploy Apex change event triggers to production, you must provide Apex tests and sufficient code coverage.
-   **[Change Event Trigger Considerations](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_trigger_considerations.htm)**
    Keep these considerations in mind when working with change events in Apex triggers.
-   **[Obtain Apex Trigger Subscribers](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_get_trigger_subscribers.htm)**
    To get information about the triggers that are subscribed to change events, query the EventBusSubscriber standard object using SOQL. EventBusSubscriber contains information about Apex triggers but not CometD or Pub/Sub API subscribers.

## Related Topics

- Change Event Triggers (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_trigger_intro.htm)
- Apex Trigger Quick Start (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_trigger_quick_start.htm)
- Apex Trigger Example (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_trigger_example.htm)
- Test Change Event Triggers (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_trigger_testing.htm)
- Change Event Trigger Considerations (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_trigger_considerations.htm)
- Obtain Apex Trigger Subscribers (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_get_trigger_subscribers.htm)
