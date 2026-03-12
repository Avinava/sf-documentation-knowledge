---
title: "SendEmailError Class"
domain: apex-reference
topic: sendemailerror-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.496Z
estimatedTokens: 663
namespace: Messaging
keywords: [SendEmailError, Represents, error, SendEmailResult, may, contain., getFields, getMessage, getStatusCode, Usage, getTargetObjectId]
---

# SendEmailError Class

> Represents an error that the SendEmailResult object may
contain.

**Namespace:** `Messaging`

# SendEmailError Class

Represents an error that the SendEmailResult object may contain.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce outbound and inbound email functionality.")

## SendEmailError Methods

The following are methods for SendEmailError. All are instance methods.

-   **[getFields()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm#apex_Messaging_SendEmailError_getFields)**
    A list of one or more field names. Identifies which fields in the object, if any, affected the error condition.
-   **[getMessage()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm#apex_Messaging_SendEmailError_getMessage)**
    The text of the error message.
-   **[getStatusCode()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm#apex_Messaging_SendEmailError_getStatusCode)**
    Returns a code that characterizes the error.
-   **[getTargetObjectId()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm#apex_Messaging_SendEmailError_getTargetObjectId)**
    The ID of the target record for which the error occurred.

### getFields()

A list of one or more field names. Identifies which fields in the object, if any, affected the error condition.

#### Signature

public String\[\] getFields()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

### getMessage()

The text of the error message.

#### Signature

public String getMessage()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getStatusCode()

Returns a code that characterizes the error.

#### Signature

public System.StatusCode getStatusCode()

#### Return Value

Type: System.StatusCode

#### Usage

The full list of status codes is available in the WSDL file for your organization. For more information about accessing the WSDL file for your organization, see Downloading Salesforce WSDLs and Client Authentication Certificates in the Salesforce online help.

### getTargetObjectId()

The ID of the target record for which the error occurred.

#### Signature

public String getTargetObjectId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Messaging (atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm)
- getFields() (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm)
- getMessage() (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm)
- getStatusCode() (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm)
- getTargetObjectId() (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
