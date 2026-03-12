---
title: "EventCondition Interface"
domain: apex-reference
topic: eventcondition-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.950Z
estimatedTokens: 1019
keywords: [EventCondition, Allows, implementing, specify, whether, take, action, certain, events, occur, based, transaction, security, policy., only, used, Apex, policies, created, Real-Time]
---

# EventCondition Interface

> Allows an implementing class to specify whether to take action when
      certain events occur based on a transaction security policy. This interface is only used for
      Apex policies created in Real-Time Event Monitoring.

# EventCondition Interface

Allows an implementing class to specify whether to take action when certain events occur based on a transaction security policy. This interface is only used for Apex policies created in Real-Time Event Monitoring.

## Usage

The evaluate method is called upon the occurrence of a real-time event monitored by a transaction security policy. A typical implementation first selects the fields of interest from the event. Then the fields are tested to see if they meet the conditions being monitored. If the conditions are met, the method returns true.

For example, imagine a transaction security policy that triggers when a user queries more than 1,000 lead records. For each API event, the evaluate method checks whether the RowsProcessed value is greater than 1,000 and the QueriedEntities value contains “Lead”. If so, true is returned.

We recommend having test classes for the policy condition interface to ensure it works correctly. Testing is required regardless of whether the policy is moved from a sandbox to production, with a change set, or some other way. For example, test your policies in your development environment before moving the policies to production.

For more information about testing Apex transaction security policies, read [Transaction Security Apex Testing](https://help.salesforce.com/s/articleView?id=xcloud.enhanced_transaction_security_apex_testing.htm&type=5&language=en_US).

-   **[EventCondition Methods](atlas.en-us.apexref.meta/apexref/apex_interface_TxnSecurity_EventCondition.htm#apex_TxnSecurity_EventCondition_methods)**
    The EventCondition interface has one method, evaluate(event).
-   **[EventCondition Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_TxnSecurity_EventCondition.htm#apex_interface_TxnSecurity_EventCondition_Example)**
    Use EventCondition to create a custom condition for Shield Platform Encryption.

## EventCondition Methods

The EventCondition interface has one method, evaluate(event).

The following are methods for EventCondition.

-   **[evaluate(event)](atlas.en-us.apexref.meta/apexref/apex_interface_TxnSecurity_EventCondition.htm#apex_TxnSecurity_EventCondition_evaluate)**
    Evaluates an event against a transaction security policy created in Real-Time Event Monitoring. If the event triggers the policy, the method returns true.

### evaluate(event)

Evaluates an event against a transaction security policy created in Real-Time Event Monitoring. If the event triggers the policy, the method returns true.

#### Signature

public Boolean evaluate(SObject event)

#### Parameters

var1

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The event to check against the transaction security policy.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Returns true when the policy is triggered. For example, suppose that the policy is to limit users to a single login session. If a user tries to log in a second time, the policy blocks the attempted login, and updates the Status, PolicyId, and PolicyOutcome fields of that LoginEvent. The policy also sends an email notification to the Salesforce admin. The evaluate method only checks the login event, and returns true if it’s the user’s second login attempt.

The system performs the action and notification, not the evaluate method.

## EventCondition Example Implementation

Use EventCondition to create a custom condition for Shield Platform Encryption.

This example shows an implementation of the TxnSecurity.EventCondition interface. The transaction security policy triggers when the user queries an Account object.

```

```

For more examples, see [Enhanced Apex Transaction Security Implementation Examples](https://help.salesforce.com/articleView?id=enhanced_transaction_security_policy_apex_examples.htm&language=en_US "HTML (New Window)").

## Code Examples

```apex
public boolean evaluate(ApiEvent event) {
      switch on event {
         when ApiEvent apiEvent {
            return handleApiEvent(apiEvent);
         }
         when null {
         // Trigger action if event is null
            return true;
         }
         when else {
         // Trigger action for unhandled events
            return true;
         }
      }
   }

   private boolean handleApiEvent(ApiEvent apiEvent){
      if(apiEvent.QueriedEntities.contains('Account')){ 
         return true;
      } 
      return false;
   }
}
```

## Related Topics

- EventCondition Methods (atlas.en-us.apexref.meta/apexref/apex_interface_TxnSecurity_EventCondition.htm)
- EventCondition Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_TxnSecurity_EventCondition.htm)
- evaluate(event) (atlas.en-us.apexref.meta/apexref/apex_interface_TxnSecurity_EventCondition.htm)
- SObject (atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
