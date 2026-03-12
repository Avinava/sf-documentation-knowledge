---
title: "When Do You Use Change Data Capture?"
domain: change-data-capture
topic: when-do-you-use-change-data-capture
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.783Z
estimatedTokens: 989
keywords: [Change, Data, Capture, think, part, real-time, replication, process, cloud, Reliability]
---

# When Do You Use Change Data Capture?

> You can think of Change Data Capture as part of the real-time data
      replication process for the cloud.

# When Do You Use Change Data Capture?

You can think of Change Data Capture as part of the real-time data replication process for the cloud.

Data replication includes these stages.

1.  Initial (day 0) copy of the entire dataset to the external system.
2.  Continuous synchronization of new and updated data to the external system.
3.  Reconciliation of duplicate data between the two systems.

Change Data Capture is the continuous synchronization part of replication (step 2). It publishes the deltas of Salesforce data for new and changed records. Change Data Capture requires an integration app for receiving events and performing updates in the external system.

For example, you have a human resource (HR) system with copies of employee custom object records from Salesforce. You can synchronize the employee records in the HR system by receiving change events. You can then process the corresponding insert, update, delete, or undelete operations in the HR system. Because the changes are received in near real time, the data in your HR system stays up to date.

Change Data Capture enables secure and scalable event streaming to downstream systems. An integration app can receive millions of events per day and synchronize data with another system. The event retention of three days enables a CometD or Pub/Sub API subscriber to get past event messages. Encryption and field-level security enable secure event storage and communication.

Use Change Data Capture to:

-   Keep external systems in sync with Salesforce data.
-   Receive notifications of Salesforce record changes, including create, update, delete, and undelete operations.
-   Subscribe using CometD, Pub/Sub API, or Apex triggers.
-   Capture field changes for all records.
-   Get broad access to all data regardless of sharing rules.
-   Deliver only the fields a user has access to based on field-level security.
-   Encrypt change event fields at rest.
-   Get information about the change in the event header, such as the origin of the change, which allows ignoring changes that your client generates.
-   Perform data updates using transaction boundaries.
-   Use a versioned event schema.
-   Subscribe to mass changes in a scalable way.
-   Get access to retained events for up to three days.

We don’t recommend using Change Data Capture to:

-   Perform audit trails based on record and field changes.
-   Update the UI for many users in apps subscribed with CometD or Pub/Sub API. Change Data Capture is intended to keep downstream systems in sync but not individual users. If many users are subscribed with CometD or Pub/Sub API clients, the concurrent client limit can be hit. For more information, see [Change Data Capture Allocations](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm#cdc_allocations "Learn about the allocations for change events including the number of custom channels, selected entities in a channel, and event delivery.").

## Change Data Capture Reliability

The temporary storage of change events in the event bus enhances the reliability of event delivery. CometD and Pub/Sub API subscribers can catch up on events that were missed due to an offline subscriber or a connection error. For more information about how to replay events using Pub/Sub API, see [Subscribe RPC Method](https://developer.salesforce.com/docs/platform/pub-sub-api/references/methods/subscribe-rpc.html) in the Pub/Sub API Developer Guide.

Change events are temporarily persisted to and served from an industry-standard distributed system. A distributed system doesn’t have the same semantics or guarantees as a transactional database. Change events are queued and buffered, and Salesforce attempts to publish the events asynchronously. In rare cases, some event messages aren’t persisted in the distributed system during the initial or subsequent attempts. In those cases, the events aren’t delivered to subscribers and aren’t recoverable.

## Related Topics

- Change Data Capture Allocations (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm)
