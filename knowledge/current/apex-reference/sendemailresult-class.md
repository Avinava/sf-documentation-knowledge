---
title: "SendEmailResult Class"
domain: apex-reference
topic: sendemailresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.253Z
keywords: [SendEmailResult, Class, Indicates, whether, email, successfully, submitted, delivery, true, false, Even, isSuccess, does, mean, intended, recipients, received, there, could, problem]
---

# SendEmailResult Class

> Indicates whether the email was successfully submitted
for delivery (true) or not
(false). Even if isSuccess is true, it does not mean
the intended recipients received the email, as there could have been
a problem with the email address or it could have bounced or been
blocked by a spam blocker.

### isSuccess()

Indicates whether the email was successfully submitted for delivery (true) or not (false). Even if isSuccess is true, it does not mean the intended recipients received the email, as there could have been a problem with the email address or it could have bounced or been blocked by a spam blocker.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")