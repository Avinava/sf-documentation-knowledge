---
title: "PolicyCondition Interface"
domain: apex-reference
topic: policycondition-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.022Z
estimatedTokens: 921
namespace: TxnSecurity
keywords: [PolicyCondition, Evaluates, event, against, transaction, security, policy, triggers, Usage, evaluate]
---

# PolicyCondition Interface

> Evaluates an event against a transaction security policy. If the
      event triggers the policy, true is
    returned.

**Namespace:** `TxnSecurity`

# PolicyCondition Interface

Apex interface that allows an implementing class to specify actions to take when certain events occur based on a transaction security policy.

## Namespace

[TxnSecurity](atlas.en-us.apexref.meta/apexref/apex_namespace_TxnSecurity.htm "The TxnSecurity namespace provides an interface used for transaction security.")

## Usage

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexref)

#### Tip

The PolicyCondition interface applies only to Legacy Transaction Security, which is a retired feature as of Summer '20. Use the EventCondition interface instead of the PolicyCondition interface.

The evaluate method is called upon the occurrence of an event monitored by a transaction security policy. A typical implementation first selects the item of interest from the event. Then the item is tested to see if it meets the condition being monitored. If the condition is met, the method returns true.

For example, imagine a transaction security policy that checks for the same user logging in more than once. For each login event, the method would check if the user logging in already has a login session in progress, and if so, true is returned.

We recommend having test classes for the policy condition interface to ensure it works correctly. Testing is required regardless of whether the policy is moved from a sandbox to production, with a change set, or some other way. For example, test your policies in your development environment before moving the policies to production.

Don’t include DML statements in your custom policies because they can cause errors. When you send a custom email via Apex during transaction policy evaluation, you get an error, even if the record isn’t explicitly related to another record. For more information, see [Apex DML Operations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_dml_section.htm "HTML (New Window)") in the Apex Reference Guide.

-   **[PolicyCondition Methods](atlas.en-us.apexref.meta/apexref/apex_interface_TxnSecurity_PolicyCondition.htm#apex_TxnSecurity_PolicyCondition_methods)**


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

## Related Topics

- TxnSecurity (atlas.en-us.apexref.meta/apexref/apex_namespace_TxnSecurity.htm)
- PolicyCondition Methods (atlas.en-us.apexref.meta/apexref/apex_interface_TxnSecurity_PolicyCondition.htm)
- evaluate(event) (atlas.en-us.apexref.meta/apexref/apex_interface_TxnSecurity_PolicyCondition.htm)
- TxnSecurity.Event (atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
