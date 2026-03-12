---
title: "EmailMessages Methods"
domain: apex-reference
topic: emailmessages-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.874Z
estimatedTokens: 199
keywords: [EmailMessages]
---

# EmailMessages Methods

> The following are static methods for EmailMessages.

# EmailMessages Methods

The following are static methods for EmailMessages.

-   **[getFormattedThreadingToken(recordId)](atlas.en-us.apexref.meta/apexref/apex_System_EmailMessages_getFormattedThreadingToken.htm)**
    Returns an email threading token that’s formatted with the correct prefix and suffix. This token can be embedded in an outbound email body, email subject, or both the body and subject. When users reply to the email, threading tokens can be used to attach responses to a record, such as a Case record in Email-to-Case.
-   **[getRecordIdFromEmail(subject, textBody, htmlBody)](atlas.en-us.apexref.meta/apexref/apex_System_EmailMessages_getRecordIdFromEmail.htm)**
    Returns the record ID corresponding to the specified email threading token, or returns null if none is found.

## Related Topics

- getFormattedThreadingToken(recordId) (atlas.en-us.apexref.meta/apexref/apex_System_EmailMessages_getFormattedThreadingToken.htm)
- getRecordIdFromEmail(subject, textBody, htmlBody) (atlas.en-us.apexref.meta/apexref/apex_System_EmailMessages_getRecordIdFromEmail.htm)
