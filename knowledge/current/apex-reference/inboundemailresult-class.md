---
title: "InboundEmailResult Class"
domain: apex-reference
topic: inboundemailresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.198Z
keywords: [InboundEmailResult, Class, value, indicates, whether, email, successfully, processed., success, Signature, Property, Value, Usage]
---

# InboundEmailResult Class

> A value that indicates whether the email was successfully
processed.

### success

A value that indicates whether the email was successfully processed.

#### Signature

public Boolean success {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If false, Salesforce rejects the inbound email and sends a reply email to the original sender containing the message specified in the Message field.