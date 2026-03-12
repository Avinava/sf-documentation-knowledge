---
title: "Simple Email Actions"
domain: api-action
topic: simple-email-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.017Z
estimatedTokens: 2121
keywords: [Simple, Email, Actions, Send, specify, subject, recipients, API, version, 32.0, later, REST, HTTP, Inputs, Outputs]
---

# Simple Email Actions

> Send an email where you specify the subject, body, and recipients.
   Available in API version 32.0 and later.

# Simple Email Actions

Send an email where you specify the subject, body, and recipients. Available in API version 32.0 and later.

Email Sending Limits

If you’re using logEmailOnSend or emailTemplateId, the daily email-sending limit is based on the single email limit. See [General Email Limits](https://help.salesforce.com/s/articleView?id=000381534&type=1&language=en_US "HTML (New Window)").

If you’re not using logEmailOnSend or emailTemplateId, the daily email-sending limit is based on the daily workflow email limit. See [Proactive Alert Monitoring: Daily Workflow Email Limit](https://help.salesforce.com/s/articleView?id=000382442&type=1&language=en_US "HTML (New Window)").

## Supported REST HTTP Methods

URI

Get a list of available simple email actions:

/services/data/vXX.X/actions/standard/emailSimple

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

Configure Recipient Details

| Input | Details |
| --- | --- |
| bccAddresses | TypetextDescriptionOptional. A comma-delimited list or a collection of recipient email addresses to send a copy of the email to. BCC recipients are hidden from other recipients. This parameter accepts single-value resources and collection variables of type string. The maximum size for this field is 4,000 bytes. This field is available in API version 65.0 and later.If recipientAddresses, ccAddresses, bccAddresses, and recipientId are also used, the combined number of recipients must be 150 or fewer. |
| ccAddresses | TypetextDescriptionOptional. A comma-delimited list or a collection of recipient email addresses to send a copy of the email to. CC recipients are visible to all recipients. This parameter accepts single-value resources and collection variables of type string. The maximum size for this field is 4,000 bytes. This field is available in API version 65.0 and later.If recipientAddresses, ccAddresses, bccAddresses, and recipientId are also used, the combined number of recipients must be 150 or fewer. |
| recipientAddresses | TypestringDescriptionOptional. A comma-delimited list or a collection of the recipients' email addresses. This parameter accepts single-value resources and collection variables of type string. The maximum size for this field is 4,000 bytes. This field is available in API version 65.0 and later.If recipientAddresses, ccAddresses, bccAddresses, and recipientId are also used, the combined number of recipients must be 150 or fewer. |

Configure Sender Details

| Input | Details |
| --- | --- |
| senderAddress | TypestringDescriptionOptional. The organization-wide email address to be used as the sender. Required only if senderType is set to OrgWideEmailAddress.If a scheduled flow sets senderType to OrgWideEmailAddress, then senderAddress is required. |
| senderType | TypestringDescriptionOptional. Email address used as the email’s From and Reply-To addresses. Valid values are:CurrentUser—Email address of the user running the flow. This setting is the default.DefaultWorkflowUser—Email address of the default workflow user.OrgWideEmailAddress—The organization-wide email address that is specified in senderAddress.In scheduled flows, the only valid value is OrgWideEmailAddress. |

Configure Email Content

To configure the email content in your email flow, use the following input parameters. You can create your email content or use an existing email template.

| Input | Details |
| --- | --- |
| addThreadingTokenToBody | TypebooleanDescriptionOptional.  Indicates whether to create a unique token for the related record and add it to the email body.When the related record is a case record, Email-to-Case uses the token to link future email responses to that case.To link future email responses to other records, create an Apex Email Service and use the EmailMessages.getRecordIdFromEmail function to find the record that matches the token. |
| addThreadingTokenToSubject | TypebooleanDescriptionOptional.  Indicates whether to create a unique token for the related record and add it to the email subject.When the related record is a case record, Email-to-Case uses the token to link future email responses to that case.To link future email responses to other records, create an Apex Email Service and use the EmailMessages.getRecordIdFromEmail function to find the record that matches the token. |
| attachmentId | TypestringDescriptionOptional. A comma-delimited list of attachment IDs in the email.This parameter accepts single-value resources of the string type that contain a list of attachments. The value is treated as text. This field is available in API version 63.0 and later.The attachment ID can be of a Document, Content Version, or Attachment items. |
| attachmentIdCollection | TypestringDescriptionOptional. A collection of attachment IDs to include in the email. This parameter accepts collection variables of type text. This field is available in API version 64.0 and later.The attachment ID can be of a Document, Content Version, or Attachment items. |
| emailBody | TypetextareaDescriptionThe body of the email. Required for flows using Send Email Action version 1.0.1 and composeEmailContent option.Hidden for flows using Send Email Action version 1.0.1 and useEmailTemplate selected. |
| emailSubject | TypestringDescriptionThe subject of the email. Required for flows using Send Email Action version 1.0.1 and composeEmailContent option.Hidden for flows using Send Email Action version 1.0.1 and useEmailTemplate selected. |
| emailTemplateId | TypetextDescriptionThe ID of the email template to use for the subject and body of the email. Required for flows using Send Email Action version 1.0.1 and useEmailTemplate option.Optional for flows using Send Email Action version 1.0.0.Hidden for flows using Send Email Action version 1.0.1 and composeEmailContent selected.If this input is included, recipientId is required. If the email template has merge fields from an object other than the one associated with recipientId, specify the record used to supply those merge fields in relatedRecordId. This field is available in API version 58.0 and later.If this input is specified, it changes the API called by the action, which can impact your daily email-sending limit. See Flow Core Action: Send Email in Salesforce Help. |
| logEmailOnSend | TypebooleanDescriptionOptional. Indicates whether to log the email on the specified records’ activity time lines. Valid values are true and false. Default value is false, and the email isn't logged. To log an email, you must specify a value in recipientId or relatedRecordId. This field is available in API version 58.0 and later.If this input is set to true, it changes the API called by the action, which can impact your daily email-sending limit. See Flow Core Action: Send Email in Salesforce Help. |
| recipientId | TypetextDescriptionOptional. The ID of a lead or a contact record. If logEmailOnSend is included, then recipientId is the ID of the person to send and log the email to. If emailTemplateId is included, then recipientId is required and is the ID of the person to send the email to. The maximum size for this field is 4,000 bytes. This field is available in API version 58.0 and later.If recipientAddresses, ccAddresses, bccAddresses, and recipientId are also used, the combined number of recipients must be 150 or fewer. |
| relatedRecordId | TypetextDescriptionOptional. The ID of a record that's not a person. For example, the ID of a case record. If logEmailOnSend is included, relatedRecordId is the ID of a secondary record to log the email to. In this case, relatedRecordId can’t be used to log an email if recipientId is a lead record. This field is available in API version 58.0 and later.If emailTemplateId is included, relatedRecordId is the ID of the non-recipient record used to populate email template merge fields. |
| sendRichBody | TypebooleanDescriptionOptional. Indicates whether you want the resource specified for the Body parameter to use rich text. Valid values are true and false. The default value is false.Hidden for flows using Send Email Action version 1.0.1 and useEmailTemplate selected. |
| useLineBreaks | TypebooleanDescriptionOptional. Indicates whether to render the line breaks in the rich-text-formatted body text template. Valid values are true and false. The default value is false.Hidden for flows using Send Email Action version 1.0.1 and useEmailTemplate selected. |

## Outputs

None.
