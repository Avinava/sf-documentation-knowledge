---
title: "InboundEmailResult Properties"
domain: apex-reference
topic: inboundemailresult-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.198Z
keywords: [InboundEmailResult, Properties, message, Salesforce, returns, body, reply, email., field, populated, text, irrespective, value, returned, Success, field., Signature, Property, Value, success]
---

# InboundEmailResult Properties

> A message that Salesforce returns in the body of a reply email. This field can be populated
with text irrespective of the value returned by the Success field.

## InboundEmailResult Properties

The following are properties for InboundEmailResult.

-   **[message](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_result.htm#apex_Messaging_InboundEmailResult_message)**  
    A message that Salesforce returns in the body of a reply email. This field can be populated with text irrespective of the value returned by the Success field.
-   **[success](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_result.htm#apex_Messaging_InboundEmailResult_success)**  
    A value that indicates whether the email was successfully processed.

### message

A message that Salesforce returns in the body of a reply email. This field can be populated with text irrespective of the value returned by the Success field.

#### Signature

public String message {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### success

A value that indicates whether the email was successfully processed.

#### Signature

public Boolean success {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If false, Salesforce rejects the inbound email and sends a reply email to the original sender containing the message specified in the Message field.