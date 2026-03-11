---
title: "getRecordIdFromEmail(subject, textBody,
    htmlBody)"
domain: apex-reference
topic: getrecordidfromemailsubject-textbody-htmlbody
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.017Z
keywords: [getRecordIdFromEmail, subject, textBody, htmlBody, Signature, Parameters, Return, Value, Usage, Example]
---

# getRecordIdFromEmail(subject, textBody,
    htmlBody)

# getRecordIdFromEmail(subject, textBody, htmlBody)

Returns the record ID corresponding to the specified email threading token, or returns null if none is found.

## Signature

public static Id getRecordIdFromEmail(String subject, String textBody, String htmlBody)

## Parameters

subject

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The subject of the email.

textBody

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The body of the email in text format.

htmlBody

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The body of the email in HTML format.

## Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The record ID that corresponds to the embedded threading token.

## Usage

When you send emails with threading tokens embedded in the email subject, the email body, or in both the subject and body, most email clients quote the email body and maintain the email subject in a response. This method finds a corresponding record that matches the embedded threading token in a response.

Typically this method is used in [Email Services](https://help.salesforce.com/s/articleView?id=platform.code_email_services.htm&type=5&language=en_US) so that you can provide your own handling of inbound emails using Apex code.

## Example

If you implement header-based threading in your Email Services currently, we recommend that you use Lightning threading, which combines token-based threading and header-based threading. For header-based threading to continue to work, store emails as EmailMessage records with the MessagedIdentifier field set properly. With Lightning threading, you can use threading tokens as the primary threading method and rely on header-based threading as a fallback, or vice versa.

In this example, we rely on threading tokens and use header-based threading as a fallback.

global class AttachEmailMessageToCaseExample implements Messaging.InboundEmailHandler { global Messaging.InboundEmailResult handleInboundEmail(Messaging.inboundEmail email, Messaging.InboundEnvelope env) { // Create an InboundEmailResult object for returning the result of the // Apex Email Service. Messaging.InboundEmailResult result = new Messaging.InboundEmailResult(); // Try to find the Case ID using threading tokens in email attributes. Id caseId = EmailMessages.getRecordIdFromEmail(email.subject, email.plainTextBody, email.htmlBody); // If we haven't found the Case ID, try finding it using headers. if (caseId == null) { caseId = Cases.getCaseIdFromEmailHeaders(email.headers); } // If a Case isn’t found, create a new Case record. if (caseId == null) { Case c = new Case(Subject = email.subject); insert c; System.debug('New Case Object: ' + c); caseId = c.Id; } // Process recipients String toAddresses; if (email.toAddresses != null) { toAddresses = String.join(email.toAddresses, '; '); } // To store an EmailMessage for threading, you need at minimum // the Status, the MessageIdentifier, and the ParentId fields. EmailMessage em = new EmailMessage( Status = '0', MessageIdentifier = email.messageId, ParentId = caseId, // Other important fields. FromAddress = email.fromAddress, FromName = email.fromName, ToAddress = toAddresses, TextBody = email.plainTextBody, HtmlBody = email.htmlBody, Subject = email.subject, // Parse thread-index header to remain consistent with Email-to-Case. ClientThreadIdentifier = getClientThreadIdentifier(email.headers) // Other fields you wish to add. ); // Insert the new EmailMessage. insert em; System.debug('New EmailMessage Object: ' + em ); // Set the result to true. No need to send an email back to the user // with an error message. result.success = true; // Return the result for the Apex Email Service. return result; } private String getClientThreadIdentifier(List<Messaging.InboundEmail.Header> headers) { if (headers == null || headers.size() == 0) return null; try { for (Messaging.InboundEmail.Header header : headers) { if (header.name.equalsIgnoreCase('thread-index')) { Blob threadIndex = EncodingUtil.base64Decode(header.value.trim()); return EncodingUtil.convertToHex(threadIndex).substring(0, 44).toUpperCase(); } } } catch (Exception e){ return null; } return null; } }