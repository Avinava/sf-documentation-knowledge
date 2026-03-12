---
title: "sendEmailMessage()"
domain: api
topic: sendemailmessage
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.556Z
estimatedTokens: 1183
keywords: [sendEmailMessage, Immediately, draft, email, messages, Usage, Sample, Code—Java, Arguments, Fault]
---

# sendEmailMessage()

> Immediately sends up to 10 draft email
      messages.

# sendEmailMessage()

Immediately sends up to 10 draft email messages.

## Syntax

For Enterprise SOAP:

```

```

For Partner SOAP:

```

```

## Usage

Use this call with Lightning Platform AppExchange applications, custom applications, or other applications outside of Salesforce to send up to 10 draft email messages. The messages can include all standard email attributes (such as subject line and blind carbon copy address), use Salesforce email templates, and be in plain text or HTML format. You can use Salesforce to track the status of HTML email, including the date the email was sent, first opened, last opened, and the total number of times it was opened. (See Tracking HTML Email in the Salesforce Help for more information.)

The email address of the logged-in user is inserted in the From Address field of the email header. All return email and out-of-office replies go to the logged-in user. If bounce management is enabled and SingleEmailMessage.targetObjectId or MassEmailMessage.targetObjectIds is set, bounces are processed by Salesforce automatically, and the appropriate records are updated; otherwise, they go to the logged-in user. Bounce management works for contacts and leads only.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

-   Email messages sent with this call count against the sending organization's daily single email limit. When this limit is reached, sendEmailMessage() calls using SingleEmailMessage are rejected, and the user receives a [SINGLE\_EMAIL\_LIMIT\_EXCEEDED](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#SINGLE_EMAIL_LIMIT_EXCEEDED) error code. However, single emails sent through the application are allowed.
-   Mass email messages sent with this call count against the sending organization's daily mass email limit. When this limit is reached, sendEmail() calls using MassEmailMessage are rejected, and the user receives a [MASS\_MAIL\_LIMIT\_EXCEEDED](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#MASS_MAIL_LIMIT_EXCEEDED) error code.
-   The AllOrNone header is not honored by this call. sendEmailMessage() returns partial success even if the AllOrNone header is set to true.


## Sample Code—Java

This sample creates a case and a draft email message, and sets the message fields, including the From, To, CC, and BCC recipients, subject, and body text. It also creates an attachment and sends the email message with the attachment. Finally, it writes a status message or an error message, if any, to the console.

```

```

## Arguments

None.

## Response

[SendEmailResult](atlas.en-us.api.meta/api/sforce_api_calls_sendemail_emailresult.htm)\[\]

## Fault

[BCC\_NOT\_ALLOWED\_IF\_BCC\_COMPLIANCE\_ENABLED](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#BCC_NOT_ALLOWED_IF_BCC_COMPLIANCE_ENABLED)

[BCC\_SELF\_NOT\_ALLOWED\_IF\_BCC\_COMPLIANCE\_ENABLED](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#BCC_SELF_NOT_ALLOWED_IF_BCC_COMPLIANCE_ENABLED)

[EMAIL\_NOT\_PROCESSED\_DUE\_TO\_PRIOR\_ERROR](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#EMAIL_NOT_PROCESSED_DUE_TO_PRIOR_ERROR)

[ERROR\_IN\_MAILER](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#ERROR_IN_MAILER)

[INSUFFICIENT\_ACCESS\_ON\_CROSS\_REFERENCE\_ENTITY](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#INSUFFICENT_ACCESS_ON_CROSS_REFERENCE_ENTITY)

[INVALID\_CONTENT\_TYPE](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#INVALID_CONTENT_TYPE)

[INVALID\_EMAIL\_ADDRESS](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#INVALID_EMAIL_ADDRESS)

[INVALID\_ID\_FIELD](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#INVALID_ID_FIELD)

[INVALID\_MESSAGE\_ID\_REFERENCE](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#INVALID_MESSAGE_ID_REFERENCE)

[LIMIT\_EXCEEDED](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#LIMIT_EXCEEDED)

[MALFORMED\_ID](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#malformed_id)

[REQUIRED\_FIELD\_MISSING](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#REQUIRED_FIELD_MISSING)

[SINGLE\_EMAIL\_LIMIT\_EXCEEDED](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#SINGLE_EMAIL_LIMIT_EXCEEDED)

[TEMPLATE\_NOT\_ACTIVE](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#TEMPLATE_NOT_ACTIVE)

[UNVERIFIED\_SENDER\_ADDRESS](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#UNVERIFIED_SENDER_ADDRESS)

## Code Examples

```
SendEmailResult[] = connection.sendEmailMessage( String[] draftEmailIds);
```

```
SendEmailResult[] = connection.sendEmailMessage( ID[] draftEmailIds);
```

```apex
public void doSendEmail() {
   try {
      //Create a case
      Case theCase = new Case();
      theCase.setSubject("Sample Case");
      SaveResult[] saveResult = connection.create(new SObject[] { theCase });
      String caseId = saveResult[0].getId();

      //Create a draft EmailMessage
      EmailMessage message = new EmailMessage();
      message.setParentId(theCase.getId());
      message.setBccAddress("bcc@email.com");
      message.setCcAddress("cc1@salesforce.com; cc2@email.com");
      message.setSubject("This is how you use the sendEmailMessage method.");
      message.setFromAddress("from@email.com");
      message.setFromName("Sample Code");
      message.setTextBody("This is the text body of the message.");
      message.setStatus("5"); //"5" means Draft
      message.setToAddress("to@email.com");
      saveResult = connection.create(new SObject[] { message });
      String emailMessageId = saveResult[0].getId();

      //Create an attachment for the draft EmailMessage
      Attachment att = new Attachment();
      byte[] fileBody = new byte[1000000];
      att.setBody(fileBody);
      att.setName("attachment");
      att.setParentId(emailMessageId);
      connection.create(new SObject[] { att });

      //Send the draft EmailMessage
      SendEmailResult[] results = connection.sendEmailMessage(messages);
      if (results[0].isSuccess()) {
         System.out.println("The email was sent successfully.");
      } else {
         System.out.println("The email failed to send: " +
            results[0].getErrors()[0].getMessage());
      }
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
```

## Related Topics

- SINGLE_EMAIL_LIMIT_EXCEEDED (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- MASS_MAIL_LIMIT_EXCEEDED (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- SendEmailResult (atlas.en-us.api.meta/api/sforce_api_calls_sendemail_emailresult.htm)
- BCC_NOT_ALLOWED_IF_BCC_COMPLIANCE_ENABLED (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- BCC_SELF_NOT_ALLOWED_IF_BCC_COMPLIANCE_ENABLED (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- EMAIL_NOT_PROCESSED_DUE_TO_PRIOR_ERROR (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- ERROR_IN_MAILER (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- INVALID_CONTENT_TYPE (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- INVALID_EMAIL_ADDRESS (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
