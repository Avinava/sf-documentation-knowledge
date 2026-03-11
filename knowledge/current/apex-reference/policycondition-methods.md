---
title: "PolicyCondition Methods"
domain: apex-reference
topic: policycondition-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.717Z
keywords: [PolicyCondition, Methods, Evaluates, event, against, transaction, security, policy., triggers, policy, true, returned., evaluate, Signature, Parameters, Return, Value]
---

# PolicyCondition Methods

> Evaluates an event against a transaction security policy. If the
      event triggers the policy, true is
    returned.

## PolicyCondition Methods

The following is the method for PolicyCondition.

-   **[evaluate(event)](atlas.en-us.apexref.meta/apexref/apex_interface_TxnSecurity_PolicyCondition.htm#apex_TxnSecurity_PolicyCondition_evaluate)**  
    Evaluates an event against a transaction security policy. If the event triggers the policy, true is returned.

### evaluate(event)

Evaluates an event against a transaction security policy. If the event triggers the policy, true is returned.

#### Signature

public Boolean evaluate(TxnSecurity.Event event)

#### Parameters

event

Type: [TxnSecurity.Event](atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm#apex_class_TxnSecurity_Event "Contains event information that the evaluate method uses to evaluate a transaction security policy.")

The event to check against the transaction security policy.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

When the policy is triggered, True is returned. For example, let’s suppose the policy is to limit users to a single login session. If anyone tries to log in a second time, the policy’s action requires that they end their current session. The policy also sends an email notification to the Salesforce admin. The evaluate() method only checks the login event, and returns True if it’s the user’s second login. The Transaction Security system performs the action and notification, and not the evaluate() method.