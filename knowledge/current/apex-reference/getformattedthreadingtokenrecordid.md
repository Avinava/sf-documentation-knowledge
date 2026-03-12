---
title: "getFormattedThreadingToken(recordId)"
domain: apex-reference
topic: getformattedthreadingtokenrecordid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.868Z
estimatedTokens: 699
keywords: [getFormattedThreadingToken, recordId, email, threading, token, that’s, formatted, correct, prefix, suffix, embedded, outbound, subject, users, reply]
---

# getFormattedThreadingToken(recordId)

> Returns an email threading token that’s formatted with the correct
      prefix and suffix. This token can be embedded in an outbound email body, email subject, or
      both the body and subject. When users reply to the email, threading tokens can be used to
      attach responses to a record, such as a Case record in Email-to-Case.

# getFormattedThreadingToken(recordId)

Returns an email threading token that’s formatted with the correct prefix and suffix. This token can be embedded in an outbound email body, email subject, or both the body and subject. When users reply to the email, threading tokens can be used to attach responses to a record, such as a Case record in Email-to-Case.

## Signature

public static Id getFormattedThreadingToken(Id recordId)

## Parameters

recordId

Type:[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The record ID associated with the threading token.

## Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The returned value is a formatted string that includes a prefix and suffix, for example:

```

```

## Usage

When sending emails in Apex, use the returned string to match emails to a record, such as a Case record, that’s associated with the email thread. Embed the formatted token in the body or subject of outgoing emails. To find the corresponding record ID in incoming emails, use [EmailMessages.getRecordIdFromEmail(subject, textBody, htmlBody)](atlas.en-us.apexref.meta/apexref/apex_System_EmailMessages_getRecordIdFromEmail.htm "Returns the record ID corresponding to the specified email threading token, or returns null if none is found.").

If there is no existing token, getFormattedThreadingToken may perform a Data Manipulation Language (DML) operation to generate one.

If something goes wrong while generating the token, such as a user lacking permission to access the parent record, then null is returned.

## Example

In this sample, we send an email with a threading token so that the email and any responses are associated with the related case.

// Get your Record ID. Here, we're using a dummy Case ID. ID caseId = Id.valueOf('500xx000000bpkTAAQ'); // Get the formatted threading token. String formattedToken = EmailMessages.getFormattedThreadingToken(caseId); // Create a SingleEmailMessage object. Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage(); // Set recipients and other fields. email.setToAddresses(new String\[\] {'test@example.com'}); // Append the threading token to the email body (text or html), subject, // or both body and subject. email.setPlainTextBody('Test Email Notification text body' + ' ' + formattedToken); email.setHtmlBody('Test Email Notification html body' + '<br><br>' + formattedToken); email.setSubject('Test Notification ' + '\[ ' + formattedToken + ' \]'); // ........... more fields ........... // Send out the email. Messaging.sendEmail(new Messaging.SingleEmailMessage\[\]{email});

## Code Examples

```
thread::pp5XPGfmNf2hRZdRCWnrohc::
```

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- EmailMessages.getRecordIdFromEmail(subject, textBody, htmlBody) (atlas.en-us.apexref.meta/apexref/apex_System_EmailMessages_getRecordIdFromEmail.htm)
