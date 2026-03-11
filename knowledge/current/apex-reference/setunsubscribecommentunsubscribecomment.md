---
title: "setUnsubscribeComment(unsubscribeComment)"
domain: apex-reference
topic: setunsubscribecommentunsubscribecomment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.284Z
keywords: [setUnsubscribeComment, unsubscribeComment, Optional., Sets, comment, List-Unsubscribe, email, header., ignored, clients, systems, parse, comments, contain, human-readable, notes, context, developers, administrators, stakeholders]
---

# setUnsubscribeComment(unsubscribeComment)

> Optional. Sets a comment in the List-Unsubscribe email header. This comment is ignored by
    email clients and systems that parse the header. The comments contain human-readable notes or
    context for developers, administrators, or other stakeholders managing the email
    system.

### setUnsubscribeComment(unsubscribeComment)

Optional. Sets a comment in the List-Unsubscribe email header. This comment is ignored by email clients and systems that parse the header. The comments contain human-readable notes or context for developers, administrators, or other stakeholders managing the email system.

#### Signature

public void setUnsubscribeComment(String unsubscribeComment)

#### Parameters

unsubscribeComment

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

#### Usage

Invoke the setUnsubscribeUrls method before using setUnsubscribeComment.

#### Example

This example demonstrates how to send an email using Salesforce's Messaging.SingleEmailMessage class with an option to include an unsubscribe link. It creates an email message with a recipient, subject, and body, and includes an unsubscribe URL that directs the recipient to send an unsubscribe request via email. Additionally, it sets an unsubscribeComment to provide context for the unsubscribe action.

```

```