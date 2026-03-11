---
title: "SendEmailResult Methods"
domain: apex-reference
topic: sendemailresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.253Z
keywords: [SendEmailResult, Methods, error, occurred, during, sendEmail, method, SendEmailError, object, returned., getErrors, Signature, Return, Value, isSuccess]
---

# SendEmailResult Methods

> If an error occurred during the sendEmail method, a SendEmailError object is returned.

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