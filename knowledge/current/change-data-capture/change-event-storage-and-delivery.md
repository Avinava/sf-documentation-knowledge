---
title: "Change Event Storage and Delivery"
domain: change-data-capture
topic: change-event-storage-and-delivery
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.750Z
estimatedTokens: 648
keywords: [Change, Event, Storage, Delivery, events, stored, temporarily, subscribers, retrieve, retention, window, order, delivered, corresponding, committed]
---

# Change Event Storage and Delivery

> Change events are stored temporarily and subscribers can retrieve them during the
  retention window. The order of events delivered is based on the order of the corresponding
  committed transactions. Users with the proper permissions can receive events on a channel.

# Change Event Storage and Delivery

Change events are stored temporarily and subscribers can retrieve them during the retention window. The order of events delivered is based on the order of the corresponding committed transactions. Users with the proper permissions can receive events on a channel.

## Temporary Storage in the Event Bus

Change events are based on platform events and share some of their characteristics for storage. Change event messages are stored in the event bus for three days. You can retrieve stored event messages from the event bus. Each event message contains the ReplayId field, which identifies the event in the stream and enables replaying the stream after a specific event. See [Event Message Durability](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/event-message-durability.html) in the Pub/Sub API Developer Guide.

## Order of Events

The order of change events stored in the event bus corresponds to the order in which the transactions corresponding to the record changes are committed in Salesforce. If a transaction includes multiple changes, like a lead conversion, a change event is generated for each change with the same transactionKey but different sequenceNumber in the header. The sequenceNumber is the order of the change within the transaction.

When Salesforce receives a change event, it assigns a replay ID value to it and persists it in the event bus. Subscribers receive change events from the event bus in the order of the replay ID.

## User Permissions Required

The subscriber must have one or more of the following permissions depending on the subscription channel: View All Data, View All Users, and View All Records for an object. See [Required Permissions for Change Event Subscribers](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_perms.htm "Change Data Capture ignores sharing settings and sends change events for all records of a Salesforce object. To receive change events on a channel, the subscribed user must have one or more permissions depending on the entities associated with the change events. The permissions apply to Pub/Sub API and CometD subscribers but not to Apex triggers. Apex triggers run with system privileges under the Automated Process entity, so they don’t require those permissions.").

#### See Also

-   [Transaction-Based Replication Steps](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_replication_steps.htm "To maintain an accurate replica of your Salesforce org’s data in another system, subscribe using a transaction-based approach.")

## Related Topics

- Required Permissions for Change Event Subscribers (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_perms.htm)
- Transaction-Based Replication Steps (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_replication_steps.htm)
