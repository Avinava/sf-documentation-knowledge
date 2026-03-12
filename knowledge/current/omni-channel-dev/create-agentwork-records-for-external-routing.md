---
title: "Create AgentWork Records for External Routing"
domain: omni-channel-dev
topic: create-agentwork-records-for-external-routing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.956Z
estimatedTokens: 380
keywords: [AgentWork, Records, External, Routing, application, creates, route, work, items, rep, Omni-Channel]
---

# Create AgentWork Records for External Routing

> The external routing
  application creates
  AgentWork
  records to route
  work items to a
  rep in
  Omni-Channel.

# Create AgentWork Records for External Routing

The external routing application creates AgentWork records to route work items to a rep in Omni-Channel.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=omni_channel_dev)

#### Note

We strongly recommend not to use external routing and Omni-Channel routing simultaneously because they may assign the same work item to the same rep.This conflicting assignment could lead to complications while tracking consumed work capacity.

When the partner routing application receives new PendingServiceRouting creation events (where the routing type equals *External*), it uses the values in the event notification to determine what work needs to be routed to a rep. It makes a routing decision by creating AgentWork records. This API is existing functionality that partners use to query Salesforce.

The partner routing application uses these steps to generate and send the AgentWork records:

-   Creates an AgentWork record using the IDs, such as the PendingServiceRouting ID and WorkItem ID, gathered from the PendingServiceRouting event notification. Keep track of the PSR ID and the WorkItem ID as they are required for creation of the AgentWork record.
-   Stores the AgentWork records in the external routing application until they are ready to be routed to a rep.
-   Executes Apex code to send the ready AgentWork record to Salesforce.

This Apex code sample creates an AgentWork record and assigns the work item to a specific rep.

```

```

## Code Examples

```
AgentWork work = new AgentWork();
work.ServiceChannelId = '<ServiceChannelId>';
work.WorkItemId = '<WorkItemId>';
work.UserId = '<UserId>';
work.PendingServiceRoutingId = '<PendingServiceRoutingId>';
insert work;
```
