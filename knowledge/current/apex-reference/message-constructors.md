---
title: "Message Constructors"
domain: apex-reference
topic: message-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.245Z
keywords: [Message, Constructors, Creates, new, instance, ApexPages.Message, class, specified, message, severity, summary., summary, Signature, Parameters, detail]
---

# Message Constructors

> Creates a new instance of the ApexPages.Message class using the specified message severity
and summary.

## Message Constructors

The following are constructors for Message.

-   **[Message(severity, summary)](atlas.en-us.apexref.meta/apexref/apex_pages_message.htm#apex_ApexPages_Message_ctor_3)**  
    Creates a new instance of the ApexPages.Message class using the specified message severity and summary.
-   **[Message(severity, summary, detail)](atlas.en-us.apexref.meta/apexref/apex_pages_message.htm#apex_ApexPages_Message_ctor_2)**  
    Creates a new instance of the ApexPages.Message class using the specified message severity, summary, and message detail.
-   **[Message(severity, summary, detail, id)](atlas.en-us.apexref.meta/apexref/apex_pages_message.htm#apex_ApexPages_Message_ctor)**  
    Creates a new instance of the ApexPages.Message class using the specified severity, summary, detail, and component ID.

### Message(severity, summary)

Creates a new instance of the ApexPages.Message class using the specified message severity and summary.

#### Signature

public Message(ApexPages.Severity severity, String summary)

#### Parameters

severity

Type: [ApexPages.Severity](#apexpages_severity_enum)

The severity of a Visualforce message.

summary

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The summary Visualforce message.

### Message(severity, summary, detail)

Creates a new instance of the ApexPages.Message class using the specified message severity, summary, and message detail.

#### Signature

public Message(ApexPages.Severity severity, String summary, String detail)

#### Parameters

severity

Type: [ApexPages.Severity](#apexpages_severity_enum)

The severity of a Visualforce message.

summary

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The summary Visualforce message.

detail

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The detailed Visualforce message.

### Message(severity, summary, detail, id)

Creates a new instance of the ApexPages.Message class using the specified severity, summary, detail, and component ID.

#### Signature

public Message(ApexPages.Severity severity, String summary, String detail, String id)

#### Parameters

severity

Type: [ApexPages.Severity](#apexpages_severity_enum)

The severity of a Visualforce message.

summary

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The summary Visualforce message.

detail

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The detailed Visualforce message.

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the Visualforce component to associate with the message, for example, a form field with an error.