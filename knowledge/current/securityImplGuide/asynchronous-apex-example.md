---
title: "Asynchronous Apex  Example"
domain: securityImplGuide
topic: asynchronous-apex-example
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.700Z
estimatedTokens: 606
keywords: [Asynchronous, Apex, executing, transaction, security, policy, process, offload, time-consuming, operations, sending, notification, email, external, recipient]
---

# Asynchronous Apex  Example

> When
    executing a transaction security policy, use an asynchronous Apex process to offload
    time-consuming operations, such as sending a notification email to an external recipient.

# Asynchronous Apex Example

When executing a transaction security policy, use an asynchronous Apex process to offload time-consuming operations, such as sending a notification email to an external recipient.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


This example has two parts. First, you create an asynchronous Apex class that uses an event within the execute method to invoke a callout or a DML operation. Second, you create a transaction security policy and modify the Apex class to implement TxnSecurity.EventCondition and TxnSecurity.AsyncCondition.

TxnSecurity.AsyncCondition enqueues the asynchronous Apex process when you trigger the transaction security policy.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Only DML operations and callouts are supported when you use asynchronous Apex with an enhanced transaction security policy.

## Create Asynchronous Apex Class

In this section, you create an asynchronous Apex class that takes in an SObject. In this example, we use ApiEvent. Then you invoke a callout or a DML operation.

```

```

## Create Policy

In this section, you create the transaction security policy, which modifies the Apex class associated with the policy. Then you create the SimpleAsynchronousApex object, pass in the ApiEvent, and enqueue the job.

```

```

#### See Also

-   [*Apex Developer Guide*: Queueable Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_queueing_jobs.htm)

-   [*Apex Reference Guide*: Apex Implementation Examples](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dml_section.htm#apex_dml_section "Apex Reference Guide: Apex Implementation Examples - HTML (New Window)")

-   [*Apex Developer Guide*: Asynchronous Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/api/apex_async_overview.htm#! "Apex Developer Guide: Asynchronous Apex  - HTML (New Window)")

-   [*Apex Developer Guide*: Invoking Callouts Using Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts.htm "Apex Developer Guide: Invoking Callouts Using Apex  - HTML (New Window)")

## Code Examples

```apex
public class SimpleAsynchronousApex implements Queueable {
    private ApiEvent apiEvent;

    public SimpleAsynchronousApex(ApiEvent apiEvent) {
        this.apiEvent = apiEvent;
    }

    public void execute(QueueableContext context) {
        // Perform your callout to external validation service
        // or a DML operation
    }
}
```

```apex
global class SimpleApiEventCondition implements TxnSecurity.EventCondition, TxnSecurity.AsyncCondition {
    public boolean evaluate(SObject event) {
        // Cast SObject to an ApiEvent object
        ApiEvent apiEvent = (ApiEvent) event; 
        SimpleAsynchronousApex simpleAsynchronousApex = new SimpleAsynchronousApex(apiEvent);
        System.enqueueJob(simpleAsynchronousApex);
        return false;
        // In a typical implementation may return true if it triggers an action
    }
}
```
