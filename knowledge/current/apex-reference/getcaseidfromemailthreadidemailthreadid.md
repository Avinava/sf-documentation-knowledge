---
title: "getCaseIdFromEmailThreadId(emailThreadId)"
domain: apex-reference
topic: getcaseidfromemailthreadidemailthreadid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.859Z
estimatedTokens: 260
keywords: [getCaseIdFromEmailThreadId, emailThreadId, case, corresponding, email, thread, Deprecated, getCaseIdFromEmailHeaders, EmailMessages.getRecordIdFromEmail, instead, Usage]
---

# getCaseIdFromEmailThreadId(emailThreadId)

> Returns the case ID corresponding to the specified email thread ID.
   (Deprecated. Use getCaseIdFromEmailHeaders and EmailMessages.getRecordIdFromEmail
   instead.)

# getCaseIdFromEmailThreadId(emailThreadId)

Returns the case ID corresponding to the specified email thread ID. **(Deprecated. Use getCaseIdFromEmailHeaders and EmailMessages.getRecordIdFromEmail instead.)**

## Signature

public static ID getCaseIdFromEmailThreadId(String emailThreadId)

## Parameters

emailThreadId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

## Usage

The argument for emailThreadId, also known as Ref ID, has the format !00Dxx01gEW.!500xx0Yktl. This format was introduced in the Winter ‘24 release. The previous format, \_00Dxx1gEW.\_500xxYktl, is supported for backward compatibility, but emails sent from the Winter ‘24 release onward use the new format. Other formats that include ref: or \[ref: aren’t supported by this method.

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
