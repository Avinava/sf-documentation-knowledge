---
title: "Cases Methods"
domain: apex-reference
topic: cases-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.864Z
estimatedTokens: 216
keywords: [Cases]
---

# Cases Methods

> The following are static methods for Cases.

# Cases Methods

The following are static methods for Cases.

-   **[generateThreadingMessageId(caseId)](atlas.en-us.apexref.meta/apexref/apex_System_Cases_generateThreadingMessageId.htm)**
    Returns an RFC 2822-compliant message identifier that contains information used to match the email and its replies to a case.
-   **[getCaseIdFromEmailHeaders(headers)](atlas.en-us.apexref.meta/apexref/apex_System_Cases_getCaseIdFromEmailHeaders.htm)**
    Returns the case ID corresponding to the specified email header information, or returns null if none is found.
-   **[getCaseIdFromEmailThreadId(emailThreadId)](atlas.en-us.apexref.meta/apexref/apex_System_Cases_getCaseIdFromEmailThreadId.htm)**
    Returns the case ID corresponding to the specified email thread ID. **(Deprecated. Use getCaseIdFromEmailHeaders and EmailMessages.getRecordIdFromEmail instead.)**

## Related Topics

- generateThreadingMessageId(caseId) (atlas.en-us.apexref.meta/apexref/apex_System_Cases_generateThreadingMessageId.htm)
- getCaseIdFromEmailHeaders(headers) (atlas.en-us.apexref.meta/apexref/apex_System_Cases_getCaseIdFromEmailHeaders.htm)
- getCaseIdFromEmailThreadId(emailThreadId) (atlas.en-us.apexref.meta/apexref/apex_System_Cases_getCaseIdFromEmailThreadId.htm)
