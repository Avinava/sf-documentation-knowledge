---
title: "EventCondition Interface"
domain: apex-reference
topic: eventcondition-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.712Z
keywords: [EventCondition, Interface, Evaluates, event, against, transaction, security, policy, created, Real-Time, Event, Monitoring., triggers, method, returns, true., evaluate, Signature, Parameters, Return]
---

# EventCondition Interface

> Evaluates an event against a transaction security policy created in
      Real-Time Event Monitoring. If the event triggers the policy, the method returns
        true.

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