---
title: "generateThreadingMessageId(caseId)"
domain: apex-reference
topic: generatethreadingmessageidcaseid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.002Z
keywords: [generateThreadingMessageId, caseId, Signature, Parameters, Return, Value, Usage, Example]
---

# generateThreadingMessageId(caseId)

# generateThreadingMessageId(caseId)

Returns an RFC 2822-compliant message identifier that contains information used to match the email and its replies to a case.

## Signature

public static String generateThreadingMessageId(Id caseId)

## Parameters

caseId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The case SObject ID to which replies to this email should be attached.

## Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Usage

Use the returned message identifier when sending case-related emails in Apex. The returned message identifier can be used in Message-ID or References headers. However, because Salesforce doesn’t let users specify the Message-ID, we set this identifier in the References header. When users reply to the sent email, replies should be attached to the specified case.

## Example

In this sample, we create an email with a message identifier so that the email and any responses can be associated with the related case.

//Get your Case ID. Here we use a dummy ID ID caseId = Id.valueOf('500xx000000bpkTAAQ'); //Create a SingleEmailMessage object Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage(); //Set recipients and other fields email.setToAddresses(new String\[\] {'test@salesforce.com'}); email.setPlainTextBody('Test Email Notification'); //........... more fields ........... //Get the threading message identifier String messageId = Cases.generateThreadingMessageId(caseId); //Insert the message identifier into the References header email.setReferences(messageId); //Send out the email Messaging.sendEmail(new Messaging.SingleEmailMessage\[\]{email});