---
title: "Limit on Enqueued Deployments from Apex"
domain: metadata-api
topic: limit-on-enqueued-deployments-from-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:36.395Z
estimatedTokens: 279
keywords: [Limit, Enqueued, Deployments, Apex, limit, number, Metadata, API, deployments, originating, enqueued, time., helps, preserve, service, function, resources, customers, server., Because]
---

# Limit on Enqueued Deployments from Apex

> We limit the number of Metadata API deployments originating from Apex that can be
    enqueued at a time. This limit helps preserve service function and resources for all customers
    on a server. Because this limit is a queue-depth limit, as long as the server can keep
    dequeuing, you can keep enqueuing deploys through Apex. This limit is based on analysis to make
    sure that it doesn’t affect your day-to-day operations.

# Limit on Enqueued Deployments from Apex

We limit the number of Metadata API deployments originating from Apex that can be enqueued at a time. This limit helps preserve service function and resources for all customers on a server. Because this limit is a queue-depth limit, as long as the server can keep dequeuing, you can keep enqueuing deploys through Apex. This limit is based on analysis to make sure that it doesn’t affect your day-to-day operations.

When you reach the limit, you receive this exception as an API response in Apex.

**\[ { "message" : "The service received too many metadata deployment requests from Apex and doesn’t have the resources to accept new requests", "errorCode" : "System.AsyncException" } \]**

The limit applies only to enqueued Metadata API deployments that originate from Apex. It doesn’t affect Metadata API deployments from Salesforce CLI, change sets, or packaging. The limit does apply if a package contains Apex that triggers metadata deployments. It also applies to the Metadata.Operations.enqueueDeployment() Apex method. This limit applies to all Salesforce editions.
