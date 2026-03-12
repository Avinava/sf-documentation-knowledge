---
title: "sendEmail()"
domain: api
topic: sendemail
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.580Z
estimatedTokens: 4886
keywords: [sendEmail, Immediately, email, message, Usage, Sample, Code—Java, Code—C#, BaseEmail, SingleEmailMessage, MassEmailMessage, EmailFileAttachment, Fault]
---

# sendEmail()

> Immediately sends an email message.

# sendEmail()

Immediately sends an email message.

## Syntax

For single email messages:

```

```

For mass email messages:

```

```

## Usage

Use this call with Lightning Platform AppExchange applications, custom applications, or other applications outside of Salesforce to send individual and mass email. The email can include all standard email attributes (such as subject line and blind carbon copy address), use Salesforce email templates, and be in plain text or HTML format. You can use Salesforce to track the status of HTML email, including the date the email was sent, first opened, last opened, and the total number of times it was opened. (See “Tracking HTML Email” in Salesforce Help for more information.)

The email address of the logged-in user is inserted in the From Address field of the email header. All return email and out-of-office replies go to the logged-in user. If bounce management is enabled and SingleEmailMessage.targetObjectId or MassEmailMessage.targetObjectIds is set, bounces are processed by Salesforce automatically, and the appropriate records are updated; otherwise, they go to the logged-in user. Bounce management works for contacts and leads only.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

-   Single email messages sent with this call count against the sending organization's daily single email limit. When this limit is reached, sendEmail() calls using SingleEmailMessage are rejected, and the user receives a [SINGLE\_EMAIL\_LIMIT\_EXCEEDED](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#SINGLE_EMAIL_LIMIT_EXCEEDED) error code. However, single emails sent through the application are allowed.
-   Mass email messages sent with this call count against the sending organization's daily mass email limit. When this limit is reached, sendEmail() calls using MassEmailMessage are rejected, and the user receives a [MASS\_MAIL\_LIMIT\_EXCEEDED](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#MASS_MAIL_LIMIT_EXCEEDED) error code.
-   Starting in API version 35.0, you can enforce or ignore the **Email Opt Out** setting for contacts or leads with the [optOutPolicy](#optOutPolicy) field of SingleEmailMessage. The optOutPolicy field applies to recipients in the To, CC, and BCC lists of the email. By default and in earlier versions, SingleEmailMessage ignores the **Email Opt Out** setting of recipients and the email is sent to all recipients. When using MassEmailMessage, the **Email Opt Out** setting of the recipients is always enforced—emails aren’t sent to recipients that have opted out and are sent to all other recipients.

SingleEmailMessage has an optional field called OrgWideEmailAddressId, an object ID to an [OrgWideEmailAddress](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orgwideemailaddress.htm "HTML (New Window)") object. If OrgWideEmailAddressId is set, the OrgWideEmailAddress DisplayName field is used in the email header, instead of the logged-in user's Display Name. The sending email address in the header is also set to the field defined in OrgWideEmailAddress.Address.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

If both the DisplayName in an OrgWideEmailAddress and senderDisplayName are defined, the user receives a [DUPLICATE\_SENDER\_DISPLAY\_NAME](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#DUPLICATE_SENDER_DISPLAY_NAME) error.

## Sample Code—Java

This sample creates an email message and sets its fields, including the To, CC and BCC recipients, subject, and body text. It also sets a recipient to the ID of the logged-in user using the setTargetObjectId method, which causes the email to be sent to the email address of the specified user. The sample creates an attachment and sends the email message with the attachment. Finally, it writes a status message or an error message, if any, to the console.

```

```

This example shows how to send an email with the opt-out setting enforced. Recipients are specified by their IDs. The SendEmailOptOutPolicy.FILTER option causes the email to be sent only to recipients that haven’t opted out from email.

```

```

## Sample Code—C#

This sample creates an email message and sets its fields, including the To, CC and BCC recipients, subject, and body text. It also sets a recipient to the ID of the logged-in user using the setTargetObjectId method, which causes the email to be sent to the email address of the specified user. The sample creates an attachment and sends the email message with the attachment. Finally, it writes a status message or an error message, if any, to the console.

```

```

This example shows how to send an email with the opt-out setting enforced. Recipients are specified by their IDs. The SendEmailOptOutPolicy.FILTER option causes the email to be sent only to recipients that haven’t opted out from email.

```

```

## BaseEmail

This table contains the arguments used in both single and mass email.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

If templates aren’t being used, all email content must be in plain text, HTML, or both.

| Name | Type | Description |
| --- | --- | --- |
| bccSender | boolean | Indicates whether the email sender receives a copy of the email that is sent. For a mass mail, the sender is only copied on the first email sent.If the BCC compliance option is set at the organization level, the user can’t add BCC addresses on standard messages. The following error code is returned: BCC_NOT_ALLOWED_IF_BCC_COMPLIANCE_ENABLED. Contact your Salesforce representative for information on BCC compliance. |
| saveAsActivity | boolean | Optional. The default value is true, meaning the email is saved as an activity. This argument only applies if the recipient list is based on targetObjectId or targetObjectIds. If HTML email tracking is enabled for the organization, you can track open rates. |
| useSignature | boolean | Indicates whether the email includes an email signature if the user has one configured. The default is true, meaning if the user has a signature it is included in the email unless you specify false. |
| emailPriority | picklist | Optional. The priority of the email.HighestHighNormalLowLowestThe default is Normal. |
| replyTo | string | Optional. The email address that receives the message when a recipient replies. This argument can’t be set if you’re using a Visualforce email template that specifies a replyTo value. |
| subject | string | Optional. The email subject line. If you’re using an email template and attempt to override the subject line, an error message is returned. |
| templateId | ID | The ID of the template to be merged to create this email. |
| senderDisplayName | string | Optional. The name that appears on the From line of the email. This argument can’t be set if the object associated with a OrgWideEmailAddressId for a SingleEmailMessage has defined its DisplayName field. |

## SingleEmailMessage

The following table contains the arguments single email uses in addition to the base email arguments.

| Name | Type | Description |
| --- | --- | --- |
| bccAddresses | string[] | Optional. An array of blind carbon copy (BCC) addresses or object IDs of the contacts, leads, and users you’re sending the email to. This argument is allowed only when a template isn’t used. The maximum size for this field is 4,000 bytes. The maximum total of toAddresses, ccAddresses, and bccAddresses per email is 150. All recipients in these three fields count against the limit for email sent using Apex or the API.You can specify opt-out email options with the optOutPolicy field only for those recipients who were added by their IDs.Email addresses are verified to ensure that they have the correct format and haven’t been marked as bounced.If the BCC COMPLIANCE option is set at the organization level, the user can’t add BCC addresses on standard messages. The following error code is returned: BCC_NOT_ALLOWED_IF_BCC_COMPLIANCE_ENABLED.All emails must have a recipient value in at least one of the following fields:toAddressesccAddressesbccAddressestargetObjectId |
| ccAddresses | string[] | Optional. An array of carbon copy (CC) addresses or object IDs of the contacts, leads, and users you’re sending the email to. This argument is allowed only when a template isn’t used. The maximum size for this field is 4,000 bytes. The maximum total of toAddresses, ccAddresses, and bccAddresses per email is 150. All recipients in these three fields count against the limit for email sent using Apex or the API.You can specify opt-out email options with the optOutPolicy field only for those recipients who were added by their IDs.Email addresses are verified to ensure that they have the correct format and haven’t been marked as bounced.All emails must have a recipient value in at least one of these fields.toAddressesccAddressesbccAddressestargetObjectId |
| charset | string | Optional. The character set for the email. If this value is null, the user's default value is used. Unavailable if specifying templateId because the template specifies the character set. |
| documentAttachments | ID[] | Deprecated. Use entityAttachments instead. Optional. An array listing the ID of each Document you want to attach to the email. |
| entityAttachments | ID[] | Optional. Array of IDs of Document, ContentVersion, or Attachment items to attach to the email.This field is available in API version 35.0 and later. |
| fileAttachments | EmailFileAttachment[] | Optional. An array listing the file names of the binary and text files you want to attach to the email. You can attach multiple files as long as the total size of all attachments doesn’t exceed 20 MB. |
| htmlBody | string | Optional. The HTML version of the email, specified by the sender. The value is encoded according to the specification associated with the organization. |
| inReplyTo | string | Optional. The In-Reply-To field of the outgoing email. Identifies the emails to which this one is a reply (parent emails). Contains the parent emails' Message-IDs. See RFC2822 - Internet Message Format. |
| optOutPolicy | SendEmailOptOutPolicy (enumeration of type string) | Optional. If you add contact, lead, or person account recipients by ID instead of email address, this field determines the behavior of the sendEmail() call. By default, the opt-out settings for recipients added by their email addresses aren’t checked and those recipients always receive the email. Possible values of the SendEmailOptOutPolicy enumeration are:SEND (default)—The email is sent to all recipients. The recipients’ Email Opt Out setting is ignored. The setting Enforce email privacy settings is ignored.FILTER—No email is sent to recipients that have the Email Opt Out option set. Emails are sent to the other recipients. The setting Enforce email privacy settings is ignored.REJECT—If any of the recipients have the Email Opt Out option set, sendEmail() throws an error and no email is sent. The setting Enforce email privacy settings is respected, as are the selections in the data privacy record based on the Individual object. If any of the recipients have Don’t Market, Don’t Process, or Forget This Individual selected, sendEmail() throws an error and no email is sent.The Send Non-Commercial Email permission isn’t respected.This field is available in API version 35.0 and later. |
| orgWideEmailAddressId | ID | Optional. The object ID of the OrgWideEmailAddress associated with the outgoing email. OrgWideEmailAddress.DisplayName can’t be set if the senderDisplayName field is already set. |
| plainTextBody | string | Optional. The text version of the email, specified by the sender. |
| references | string | Optional. The References field of the outgoing email. Identifies an email thread. Contains the parent emails' Message-ID and References fields and possibly In-Reply-To fields. See RFC2822 - Internet Message Format. |
| targetObjectId | ID | Optional. The object ID of the contact, lead, or user the email is sent to. The object ID you enter sets the context and ensures that merge fields in the template contain the correct dataAll emails must have a recipient value in at least one of these fields.toAddressesccAddressesbccAddressestargetObjectId |
| toAddresses | string[] | Optional. An array of email addresses or object IDs of the contacts, leads, or users you’re sending the email to. This argument is allowed only when a template isn’t used. The maximum size for this field is 4,000 bytes. The maximum total of toAddresses, ccAddresses, and bccAddresses per email is 150. All recipients in these three fields count against the limit for email sent using Apex or the API.You can specify opt-out email options with the optOutPolicy field only for those recipients who were added by their IDs.Email addresses are verified to ensure that they have the correct format and haven’t been marked as bounced.All emails must have a recipient value in at least one of these fields.toAddressesccAddressesbccAddressestargetObjectId |
| treatBodiesAsTemplate | boolean | Optional. If set to true, the subject, plain text, and HTML text bodies of the email are treated as template data. The merge fields are resolved using the renderEmailTemplate() call. Default is false.This field is available in API version 35.0 and later. |
| treatTargetObjectAsRecipient | boolean | Optional. If set to true, the targetObjectId (a contact, lead, or user) is the recipient of the email. If set to false, the targetObjectId is supplied as the WhoId field for template rendering but isn’t a recipient of the email. The default is true.This field is available in API version 35.0 and later. In prior versions, the targetObjectId is always a recipient of the email. |
| whatId | ID | Optional. If you specify a contact for the targetObjectId field, you can specify a whatId as well. This field helps to further ensure that merge fields in the template contain the correct data. The value must be one of the following types:AccountAssetCampaignCaseContractOpportunityOrderProductSolutionCustom |

## MassEmailMessage

The following table contains the arguments mass email uses in addition to the base email arguments.

| Name | Type | Description |
| --- | --- | --- |
| description | string | A value used internally to identify the object in the mass email queue. |
| targetObjectIds | ID[] | An array of object IDs of the contacts, leads, or users the email is sent to. The object IDs you enter set the context and ensure that merge fields in the template contain the correct data. The objects must be of the same type (either all contacts, all leads, or all users). You can list up to 250 IDs per email. If you specify a value for the targetObjectIds field, optionally specify a whatId as well to set the email context to a user, contact, or lead. Specifying these IDs ensures that merge fields in the template contain the correct data. |
| whatIds | ID[] | Optional. If you specify an array of contacts for the targetObjectIds field, you can specify an array of whatIds as well. Specifying these IDs ensures that merge fields in the template contain the correct data. The values must be one of these types.ContractCaseOpportunityProductIf you specify whatIds, specify one for each targetObjectId; otherwise, you receive an INVALID_ID_FIELD error. |

## EmailFileAttachment

The following table contains properties that the EmailFileAttachment uses in the SingleEmailMessage object to specify attachments passed in as part of the request, as opposed to a [Document](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_document.htm "HTML (New Window)") passed in using the documentAttachments argument.

| Property | Type | Description |
| --- | --- | --- |
| body | base64 | The attachment itself. |
| contentType | string | Optional. The attachment's Content-Type. |
| fileName | string | The name of the file to attach. |
| inline | boolean | Optional. Specifies a Content-Disposition of inline (true) or attachment (false). In most cases, inline content is displayed to the user when the message is opened. Attachment content requires user action to be displayed. |

## Response

[SendEmailResult](atlas.en-us.api.meta/api/sforce_api_calls_sendemail_emailresult.htm)

## Fault

The following API status codes can be returned. Also, sendEmail() can return other errors when rendering email templates. See [renderEmailTemplate() Faults](atlas.en-us.api.meta/api/sforce_api_calls_renderemailtemplate.htm#renderEmailTemplate_faults).

[BCC\_NOT\_ALLOWED\_IF\_BCC\_COMPLIANCE\_ENABLED](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#BCC_NOT_ALLOWED_IF_BCC_COMPLIANCE_ENABLED)

[BCC\_SELF\_NOT\_ALLOWED\_IF\_BCC\_COMPLIANCE\_ENABLED](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#BCC_SELF_NOT_ALLOWED_IF_BCC_COMPLIANCE_ENABLED)

[DUPLICATE\_SENDER\_DISPLAY\_NAME](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#DUPLICATE_SENDER_DISPLAY_NAME)

[EMAIL\_ADDRESS\_BOUNCED](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#EMAIL_ADDRESS_BOUNCED)

[EMAIL\_NOT\_PROCESSED\_DUE\_TO\_PRIOR\_ERROR](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#EMAIL_NOT_PROCESSED_DUE_TO_PRIOR_ERROR)

[EMAIL\_OPTED\_OUT](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#EMAIL_OPTED_OUT)

[ERROR\_IN\_MAILER](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#ERROR_IN_MAILER)

[INSUFFICIENT\_ACCESS\_ON\_CROSS\_REFERENCE\_ENTITY](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#INSUFFICENT_ACCESS_ON_CROSS_REFERENCE_ENTITY)

[INVALID\_CONTENT\_TYPE](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#INVALID_CONTENT_TYPE)

[INVALID\_EMAIL\_ADDRESS](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#INVALID_EMAIL_ADDRESS)

[INVALID\_ID\_FIELD](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#INVALID_ID_FIELD)

[INVALID\_MESSAGE\_ID\_REFERENCE](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#INVALID_MESSAGE_ID_REFERENCE)

[INVALID\_SAVE\_AS\_ACTIVITY\_FLAG](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#INVALID_SAVE_AS_ACTIVITY_FLAG)

[LIMIT\_EXCEEDED](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#LIMIT_EXCEEDED)

[MALFORMED\_ID](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#malformed_id)

[MASS\_MAIL\_LIMIT\_EXCEEDED](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#MASS_MAIL_LIMIT_EXCEEDED)

[NO\_MASS\_MAIL\_PERMISSION](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#NO_MASS_MAIL_PERMISSION)

[REQUIRED\_FIELD\_MISSING](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#REQUIRED_FIELD_MISSING)

[SINGLE\_EMAIL\_LIMIT\_EXCEEDED](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#SINGLE_EMAIL_LIMIT_EXCEEDED)

[TEMPLATE\_NOT\_ACTIVE](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#TEMPLATE_NOT_ACTIVE)

[UNVERIFIED\_SENDER\_ADDRESS](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#UNVERIFIED_SENDER_ADDRESS)

## Code Examples

```
SendEmailResult = connection.sendEmail(SingleEmailMessage emails[]);
```

```
SendEmailResult = connection.sendEmail(MassEmailMessage emails[]);
```

```apex
public void doSendEmail() {
   try {
      EmailFileAttachment efa = new EmailFileAttachment();
      byte[] fileBody = new byte[1000000];
      efa.setBody(fileBody);
      efa.setFileName("attachment");
      SingleEmailMessage message = new SingleEmailMessage();
      message.setBccAddresses(new String[] {
         "someone@salesforce.com"
      });
      message.setCcAddresses(new String[] {
         "person1@salesforce.com", "person2@salesforce.com", "003xx00000a1b2cAAC"
      });
      message.setBccSender(true);
      message.setEmailPriority(EmailPriority.High);
      message.setReplyTo("person1@salesforce.com");
      message.setSaveAsActivity(false);
      message.setSubject("This is how you use the " + "sendEmail method.");
      // We can also just use an id for an implicit to address
      GetUserInfoResult guir = connection.getUserInfo();
      message.setTargetObjectId(guir.getUserId());
      message.setUseSignature(true);
      message.setPlainTextBody("This is the humongous body "
            + "of the message.");
      EmailFileAttachment[] efas = { efa };
      message.setFileAttachments(efas);
      message.setToAddresses(new String[] { "person3@salesforce.com" });
      SingleEmailMessage[] messages = { message };
      SendEmailResult[] results = connection.sendEmail(messages);
      if (results[0].isSuccess()) {
         System.out.println("The email was sent successfully.");
      } else {
         System.out.println("The email failed to send: "
               + results[0].getErrors()[0].getMessage());
      }
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
SingleEmailMessage message = new SingleEmailMessage();
// Set recipients to two contact IDs.
// Replace IDs with valid record IDs in your org.
message.setToAddresses(new String[] { "003D000000QDexS", "003D000000QDfW5" });
message.setOptOutPolicy(SendEmailOptOutPolicy.FILTER);
message.setSubject("Opt Out Test Message");
message.setPlainTextBody("This is the message body.");
SingleEmailMessage[] messages = { message };
SendEmailResult[] results = connection.sendEmail(messages);
if (results[0].isSuccess()) {
    System.out.println("The email was sent successfully.");
} else {
    System.out.println("The email failed to send: "
          + results[0].getErrors()[0].getMessage());
}
```

```apex
public void doSendEmail()
{
   try
   {
      EmailFileAttachment efa = new EmailFileAttachment();
      byte[] fileBody = new byte[1000000];
      efa.body = fileBody;
      efa.fileName = "attachment";
      SingleEmailMessage message = new SingleEmailMessage();
      message.setBccAddresses(new String[] {
         "someone@salesforce.com"
      });
      message.setCcAddresses(new String[] {
         "person1@salesforce.com", "person2@salesforce.com", "003xx00000a1b2cAAC"
      });
      message.bccSender = true;
      message.emailPriority = EmailPriority.High;
      message.replyTo = "person1@salesforce.com";
      message.saveAsActivity = false;
      message.subject = "This is how you use the " + "sendEmail method.";
      // We can also just use an id for an implicit to address
      GetUserInfoResult guir = binding.getUserInfo();
      message.targetObjectId = guir.userId;
      message.useSignature = true;
      message.plainTextBody = "This is the humongous body "
            + "of the message.";
      EmailFileAttachment[] efas = { efa };
      message.fileAttachments = efas;
      message.toAddresses = new String[] { "person3@salesforce.com" };
      SingleEmailMessage[] messages = { message };
      SendEmailResult[] results = binding.sendEmail(messages);
      if (results[0].success)
      {
         Console.WriteLine("The email was sent successfully.");
      }
      else
      {
         Console.WriteLine("The email failed to send: "
               + results[0].errors[0].message);
      }
   }
   catch (SoapException e)
   {
      Console.WriteLine("An unexpected error has occurred: " +
                        e.Message + "
" + e.StackTrace);
   }
}
```

## Related Topics

- SendEmailResult (atlas.en-us.api.meta/api/sforce_api_calls_sendemail_emailresult.htm)
- SINGLE_EMAIL_LIMIT_EXCEEDED (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- MASS_MAIL_LIMIT_EXCEEDED (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- DUPLICATE_SENDER_DISPLAY_NAME (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- BCC_NOT_ALLOWED_IF_BCC_COMPLIANCE_ENABLED (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- renderEmailTemplate() (atlas.en-us.api.meta/api/sforce_api_calls_renderemailtemplate.htm)
- INVALID_ID_FIELD (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- renderEmailTemplate() Faults (atlas.en-us.api.meta/api/sforce_api_calls_renderemailtemplate.htm)
- BCC_SELF_NOT_ALLOWED_IF_BCC_COMPLIANCE_ENABLED (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- EMAIL_ADDRESS_BOUNCED (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
