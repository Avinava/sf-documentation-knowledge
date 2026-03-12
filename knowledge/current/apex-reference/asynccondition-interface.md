---
title: "AsyncCondition Interface"
domain: apex-reference
topic: asynccondition-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.012Z
estimatedTokens: 582
namespace: TxnSecurity
keywords: [AsyncCondition, implementing, asynchronous, Apex, calls, transaction, security, policies, created, Real-Time, Event, Monitoring, Usage, Implementation]
---

# AsyncCondition Interface

> Allows an implementing class to make asynchronous Apex calls. This
			interface is used only for transaction security Apex policies created in Real-Time Event
			Monitoring.

**Namespace:** `TxnSecurity`

# AsyncCondition Interface

Allows an implementing class to make asynchronous Apex calls. This interface is used only for transaction security Apex policies created in Real-Time Event Monitoring.

## Namespace

[TxnSecurity](atlas.en-us.apexref.meta/apexref/apex_namespace_TxnSecurity.htm "The TxnSecurity namespace provides an interface used for transaction security.")

## Usage

If you make an [Asynchronous Apex](https://trailhead.salesforce.com/en/content/learn/modules/asynchronous_apex "HTML (New Window)") call in the class that implements your transaction security policy condition, the class must implement the TxnSecurity.AsyncCondition interface in addition to TxnSecurity.EventCondition. Use Asynchronous Apex instead of Apex callouts and DML statements, neither of which is allowed in transaction security Apex policies.

Apex offers multiple ways to run your Apex code asynchronously and all are supported in the TxnSecurity.AsyncCondition interface.

This interface has no methods.

-   **[AsyncCondition Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_TxnSecurity_AsyncCondition_interface.htm#apex_interface_TxnSecurity_AsyncCondition_Example)**


#### See Also

-   [*Apex Developer Guide:*Asynchronous Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_async_overview.htm "Apex Developer Guide:Asynchronous Apex  - HTML (New Window)")


## AsyncCondition Example Implementation

Here’s an example implementation of the TxnSecurity.AsyncCondition interface. The transaction security policy triggers when a user logs in. In the example, ExternalValidation\_\_c is a custom object that contains information from an external validation system. The result of the SOQL query on ExternalValidation\_\_c determines whether to block the user from logging in. The policy then queues the CalloutToExternalValidator class for asynchronous execution. When it executes, the CalloutToExternalValidator class makes an external call to the validation system to update it with information about this log in event. Because CalloutToExternalValidator is triggered by Asynchronous Apex, you must implement the TxnSecurity.AsyncCondition interface in the ExternallyValidatedLoginCondition Apex class along with the usual TxnSecurity.EventCondition interface.

```

```

## Code Examples

```apex
global class ExternallyValidatedLoginCondition implements TxnSecurity.EventCondition, TxnSecurity.AsyncCondition {
    public boolean evaluate(SObject event) {
        LoginEvent loginEvent = (LoginEvent) event;
        Boolean userBlocked = [select blocked from ExternalValidation__c where loginId = loginEvent.UserId][0].Blocked;
 
        System.enqueueJob(new CalloutToExternalValidator(loginEvent.SourceIp, loginEvent.LoginUrl));
        return userBlocked;
    }
}
 
public class CalloutToExternalValidator implements Queueable {
    private String sourceIp;
    private String loginUrl;
 
    public CalloutToExternalValidator(String sourceIp, String loginUrl) {
        this.sourceIp = sourceIp;
        this.loginUrl = loginUrl;
    }
 
    public void execute(QueueableContext context) {
        // callout to external validation service
        // pass sourceIp, loginUrl
                
        // update ExternalValidation__c
    }
}
```

## Related Topics

- TxnSecurity (atlas.en-us.apexref.meta/apexref/apex_namespace_TxnSecurity.htm)
- AsyncCondition Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_TxnSecurity_AsyncCondition_interface.htm)
