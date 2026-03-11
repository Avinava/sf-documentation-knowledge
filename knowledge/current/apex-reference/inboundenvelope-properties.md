---
title: "InboundEnvelope Properties"
domain: apex-reference
topic: inboundenvelope-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.178Z
keywords: [InboundEnvelope, Properties, name, appears, field, envelope, any., fromAddress, Signature, Property, Value, toAddress]
---

# InboundEnvelope Properties

> The name that appears in the From field
of the envelope, if any.

## InboundEnvelope Properties

The following are properties for InboundEnvelope.

-   **[fromAddress](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_envelope.htm#apex_Messaging_InboundEnvelope_fromAddress)**  
    The name that appears in the From field of the envelope, if any.
-   **[toAddress](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_envelope.htm#apex_Messaging_InboundEnvelope_toAddress)**  
    The name that appears in the To field of the envelope, if any.

### fromAddress

The name that appears in the From field of the envelope, if any.

#### Signature

public String fromAddress {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### toAddress

The name that appears in the To field of the envelope, if any.

#### Signature

public String toAddress {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")