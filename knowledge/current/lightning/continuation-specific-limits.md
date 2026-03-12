---
title: "Continuation-Specific Limits"
domain: lightning
topic: continuation-specific-limits
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:47.929Z
estimatedTokens: 523
keywords: [Continuation-Specific, Limits, Because, continuations, lead, multiple, long-running, actions, there, their, usage]
---

# Continuation-Specific Limits

> Because continuations can lead to multiple long-running actions, there are some limits
  on their usage.

# Continuation-Specific Limits

Because continuations can lead to multiple long-running actions, there are some limits on their usage.

The limits for using continuations in Apex are listed in the [Apex Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Continuation.htm "HTML (New Window)").

Here are a few more limits specific to usage in Aura components.

Up to three callouts per continuation

A single Continuation object can contain a maximum of three callouts.

Serial processing for continuation actions

The framework processes actions containing a continuation serially from the client. The previous continuation action call must have completed before the next continuation action call is made. At any time, you can have only one continuation in progress on the client.

DML operation restrictions

An Apex method that returns a Continuation object can’t perform Data Manipulation Language (DML) operations. DML statements insert, update, merge, delete, and restore data in Salesforce. If a DML operation is performed within the continuation method, the continuation execution doesn’t proceed, the transaction is rolled back, and an error is returned.

You can perform DML operations in the Apex callback method for the continuation.

#### See Also

-   [Make Long-Running Callouts with Continuations](atlas.en-us.lightning.meta/lightning/apex_continuations.htm "Use the Continuation class in Apex to make a long-running request to an external web service. Process the response in a callback method. Continuations are the preferred way to manage callouts because they can provide substantial improvements to the user experience.")

-   [Queuing of Server-Side Actions](atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm "The framework queues up actions before sending them to the server. Actions are grouped together into batches, and then sent to the server together. This process enables the framework to reduce network traffic by batching multiple actions into fewer, more efficient requests.")

## Related Topics

- Make Long-Running Callouts with Continuations (atlas.en-us.lightning.meta/lightning/apex_continuations.htm)
- Queuing of Server-Side Actions (atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm)
