---
title: "Decoupled Publishing and Subscription"
domain: platform-events
topic: decoupled-publishing-and-subscription
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.711Z
estimatedTokens: 908
keywords: [Decoupled, Publishing, Subscription, publish, behavior, platform, event, Immediately, it’s, published, outside, Lightning, database, transaction, result]
---

# Decoupled Publishing and Subscription

> When the publish behavior of a platform event is set to
        Publish Immediately, it’s published outside of a Lightning Platform
      database transaction. As a result, the publishing and subscription processes are
      decoupled—the subscription process can’t assume that an action made by the publishing
      transaction is committed before an event message is received. Familiarize yourself with some
      scenarios that can occur from the decoupled behavior.

# Decoupled Publishing and Subscription

When the publish behavior of a platform event is set to **Publish Immediately**, it’s published outside of a Lightning Platform database transaction. As a result, the publishing and subscription processes are decoupled—the subscription process can’t assume that an action made by the publishing transaction is committed before an event message is received. Familiarize yourself with some scenarios that can occur from the decoupled behavior.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

This decoupled behavior doesn’t apply to platform events whose publish behavior is set to **Publish After Commit**.

## Publisher Does Not Respect Transaction Boundaries

If an event is defined with a publish behavior of **Publish Immediately**, the publishing of the platform event message isn’t transactional. As a result, a Salesforce record that an event publisher creates after publishing might not be committed to the database before the subscriber receives the event message. If the subscriber looks up the record, it might not be found because it hasn’t been committed yet. For example, consider this scenario.

1.  A Process Builder process publishes an event and creates a task record.
2.  A trigger on the Task object runs some logic, which delays the commit of the task record.
3.  A second Process Builder process, which is subscribed to the event, receives the event and looks up the newly created task. The process returns the following error because the trigger hasn’t finished executing, and the record is not yet committed.

    "MyProcess process is configured to start when a MyEvent platform event message occurs. A MyEvent message occurred, but the process didn't start because no records in your org match the values specified in the process's Object node."


The example uses Process Builder, but the scenario applies to other methods of publishing and subscribing, such as the API and triggers.

Conversely, if a subscriber creates a Salesforce record after receiving an event message, the new record might not be found immediately after publishing. The reason is that the event is not processed synchronously after publishing, or the event processing might take a long time if the logic is complex.

**Solution**

The solution is to change the publishing behavior of the event to **Publish After Commit**. With this behavior, the event message is published after the first process creates the task record and the transaction finishes. The second process is able to find the task record.

## Event Published from a Trigger

Consider an after insert trigger on a Salesforce object that publishes an event defined with a publish behavior of **Publish Immediately**. The event can be processed before the Salesforce record in the trigger is committed to the database. For example, consider this scenario.

1.  An after insert trigger on a custom object publishes an event message.
2.  A Process Builder process is subscribed to the event. The process is fired before the trigger finishes execution and before it commits the new custom object record.
3.  The process tries to look up the record to match the event and fails because the record is not found.

**Solution**

The solution is to change the publishing behavior of the event to **Publish After Commit**. With this behavior, the event message is published after the trigger creates the custom object record and the transaction commits. The second process that receives the published event message is able to find the new record that the first process created.
