---
title: "Message Methods"
domain: apex-reference
topic: message-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.245Z
keywords: [Message, Methods, Returns, label, associated, inputField, component., defined, method, returns, null., getComponentLabel, Signature, Return, Value, getDetail, getSeverity, getSummary]
---

# Message Methods

> Returns the label of the associated inputField component. If no label
is defined, this method returns null.

## Message Methods

The following are methods for Message. All are instance methods.

-   **[getComponentLabel()](atlas.en-us.apexref.meta/apexref/apex_pages_message.htm#apex_ApexPages_Message_getComponentLabel)**  
    Returns the label of the associated inputField component. If no label is defined, this method returns null.
-   **[getDetail()](atlas.en-us.apexref.meta/apexref/apex_pages_message.htm#apex_ApexPages_Message_getDetail)**  
    Returns the value of the detail parameter used to create the message. If no detail String was specified, this method returns null.
-   **[getSeverity()](atlas.en-us.apexref.meta/apexref/apex_pages_message.htm#apex_ApexPages_Message_getSeverity)**  
    Returns the severity enum used to create the message.
-   **[getSummary()](atlas.en-us.apexref.meta/apexref/apex_pages_message.htm#apex_ApexPages_Message_getSummary)**  
    Returns the summary String used to create the message.

### getComponentLabel()

Returns the label of the associated inputField component. If no label is defined, this method returns null.

#### Signature

public String getComponentLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDetail()

Returns the value of the detail parameter used to create the message. If no detail String was specified, this method returns null.

#### Signature

public String getDetail()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSeverity()

Returns the severity enum used to create the message.

#### Signature

public ApexPages.Severity getSeverity()

#### Return Value

Type: [ApexPages.Severity](#apexpages_severity_enum)

### getSummary()

Returns the summary String used to create the message.

#### Signature

public String getSummary()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")