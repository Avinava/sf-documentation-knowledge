---
title: "getCaseIdFromEmailHeaders(headers)"
domain: apex-reference
topic: getcaseidfromemailheadersheaders
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.180Z
estimatedTokens: 1131
keywords: [getCaseIdFromEmailHeaders, headers, case, corresponding, specified, email, header, information, null, none, found., Usage, Example]
---

# getCaseIdFromEmailHeaders(headers)

> Returns the case ID corresponding to the specified email header
      information, or returns null if none is found.

# getCaseIdFromEmailHeaders(headers)

Returns the case ID corresponding to the specified email header information, or returns null if none is found.

## Signature

public static Id getCaseIdFromEmailHeaders(List<Messaging.InboundEmail.Header> headers)

## Parameters

headers

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Messaging.InboundEmail.Header](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_headers "A list of the RFC 2822 headers in the email.")\>

## Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

## Usage

To optimize finding a match between email threads and cases in your custom code, we recommend that you use this method and EmailMessages.getRecordIdFromEmail to implement a combination of token- and header-based threading.

If you are transitioning from Ref ID threading, we recommend that you replace Cases.getCaseIdFromEmailThreadId with a combination of Cases.getCaseIdFromEmailHeaders and EmailMessages.getRecordIdFromEmail. If you choose to implement header-based threading only, replace Cases.getCaseIdFromEmailThreadId with Cases.getCaseIdFromEmailHeaders.

The headers argument is used to find the matching Case Id using values for the In-Reply-To and References headers based on RFC 2822. If Email-to-Case can’t find any emails with a matching In-Reply-To or References header, it also checks the incoming email for an Outlook-specific header called Thread-Index. The first 22 bytes of this header uniquely identify the thread. If Email-to-Case detects a Thread-Index header on the incoming mail, it looks for matching information in the ClientThreadIdentifier field in EmailMessage records. If a match is found, the customer’s reply email is linked to the related case.

Typically this method is used in [Email Services](https://help.salesforce.com/s/articleView?id=platform.code_email_services.htm&type=5&language=en_US) so that you can provide your own handling of inbound emails using Apex code.

## Example

If you implement header-based threading in your Email Services currently, we recommend that you use Lightning threading, which combines token-based threading and header-based threading. For header-based threading to continue to work, store emails as EmailMessage records with the MessagedIdentifier field set properly. With Lightning threading, you can use threading tokens as the primary threading method and rely on header-based threading as a fallback, or vice versa.

In this example, we rely on threading tokens and use header-based threading as a fallback.

global class AttachEmailMessageToCaseExample implements Messaging.InboundEmailHandler { global Messaging.InboundEmailResult handleInboundEmail(Messaging.inboundEmail email, Messaging.InboundEnvelope env) { // Create an InboundEmailResult object for returning the result of the // Apex Email Service. Messaging.InboundEmailResult result = new Messaging.InboundEmailResult(); // Try to find the Case ID using threading tokens in email attributes. Id caseId = EmailMessages.getRecordIdFromEmail(email.subject, email.plainTextBody, email.htmlBody); // If we haven't found the Case ID, try finding it using headers. if (caseId == null) { caseId = Cases.getCaseIdFromEmailHeaders(email.headers); } // If a Case isn’t found, create a new Case record. if (caseId == null) { Case c = new Case(Subject = email.subject); insert c; System.debug('New Case Object: ' + c); caseId = c.Id; } // Process recipients String toAddresses; if (email.toAddresses != null) { toAddresses = String.join(email.toAddresses, '; '); } // To store an EmailMessage for threading, you need at minimum // the Status, the MessageIdentifier, and the ParentId fields. EmailMessage em = new EmailMessage( Status = '0', MessageIdentifier = email.messageId, ParentId = caseId, // Other important fields. FromAddress = email.fromAddress, FromName = email.fromName, ToAddress = toAddresses, TextBody = email.plainTextBody, HtmlBody = email.htmlBody, Subject = email.subject // Other fields you wish to add. ); // Insert the new EmailMessage. insert em; System.debug('New EmailMessage Object: ' + em ); // Set the result to true. No need to send an email back to the user // with an error message. result.success = true; // Return the result for the Apex Email Service. return result; } }

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Messaging.InboundEmail.Header (atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm)
