---
title: "InboundEmail.Header Properties"
domain: apex-reference
topic: inboundemailheader-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.181Z
keywords: [InboundEmail.Header, Properties, name, header, parameter, such, Date, Message-ID., Signature, Property, Value, value, See]
---

# InboundEmail.Header Properties

> The name of the header parameter, such as Date or Message-ID.

## InboundEmail.Header Properties

The following are properties for InboundEmail.Header.

-   **[name](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_header.htm#apex_Messaging_InboundEmail_Header_name)**  
    The name of the header parameter, such as Date or Message-ID.
-   **[value](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_header.htm#apex_Messaging_InboundEmail_Header_value)**  
    The value of the header.

### name

The name of the header parameter, such as Date or Message-ID.

#### Signature

public String name {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### value

The value of the header.

#### Signature

public String value {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### See Also

-   [*Apex Developer Guide*: Apex Email Service](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_email_inbound_what_is.htm)
    
-   [*Apex Developer Guide*: Using the InboundEmail Object](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_email_inbound_using.htm)
    
-   [*Apex Developer Guide*: Inbound Email](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_email_inbound.htm)
    
-   [*Internet Engineering Task Force (IETF) Data Tracker*: RFC 2822 Section 3.6](https://datatracker.ietf.org/doc/html/rfc2822#section-3.6)