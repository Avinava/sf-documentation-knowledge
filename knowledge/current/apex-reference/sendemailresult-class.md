---
title: "SendEmailResult Class"
domain: apex-reference
topic: sendemailresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.502Z
estimatedTokens: 504
namespace: Messaging
keywords: [SendEmailResult, Contains, result, sending, email, message., getErrors, isSuccess]
---

# SendEmailResult Class

> Contains the result of sending an email message.

**Namespace:** `Messaging`

# SendEmailResult Class

Contains the result of sending an email message.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce outbound and inbound email functionality.")

## SendEmailResult Methods

The following are methods for SendEmailResult. All are instance methods.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailresult.htm#apex_Messaging_SendEmailResult_getErrors)**
    If an error occurred during the sendEmail method, a SendEmailError object is returned.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailresult.htm#apex_Messaging_SendEmailResult_isSuccess)**
    Indicates whether the email was successfully submitted for delivery (true) or not (false). Even if isSuccess is true, it does not mean the intended recipients received the email, as there could have been a problem with the email address or it could have bounced or been blocked by a spam blocker.

### getErrors()

If an error occurred during the sendEmail method, a SendEmailError object is returned.

#### Signature

public SendEmailError\[\] getErrors()

#### Return Value

Type: [Messaging.SendEmailError](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm#apex_classes_email_outbound_sendemailerror "Represents an error that the SendEmailResult object may contain.")\[\]

### isSuccess()

Indicates whether the email was successfully submitted for delivery (true) or not (false). Even if isSuccess is true, it does not mean the intended recipients received the email, as there could have been a problem with the email address or it could have bounced or been blocked by a spam blocker.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Related Topics

- Messaging (atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm)
- getErrors() (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailresult.htm)
- isSuccess() (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailresult.htm)
- Messaging.SendEmailError (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
