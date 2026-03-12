---
title: "Email Message Capability"
domain: chatterapi
topic: email-message-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.403Z
estimatedTokens: 608
keywords: [Email, Message, Capability, feed, element, case]
---

# Email Message Capability

> If a feed element has this capability, it has an email message from a case.

# Email Message Capability

If a feed element has this capability, it has an email message from a case.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attachments | Email Attachment[] | Attachments in the email message. | Big, 36.0 | 36.0 |
| automationType | String | Automation type of the email message. Values are:aiAssisted—The email message was created with the assistance of AI.aiAutomated—The email message was created automatically by AI. | Small, 63.0 | 63.0 |
| bccAddresses | Email Address[] | BCC addresses for the email message. | Small, 36.0 | 36.0 |
| body | String | Body of the email message. | Big, 36.0 | 36.0 |
| ccAddresses | Email Address[] | CC addresses for the email message. | Small, 36.0 | 36.0 |
| direction | String | Direction of the email message. Values are:Inbound—An inbound message (sent by a customer).Outbound—An outbound message (sent to a customer by a support agent). | Small, 32.0 | 32.0 |
| emailMessageId | String | ID of the email message. | Small, 32.0 | 32.0 |
| emailMessageSize | String | Size of a case’s email message HTML body.Large—UseLargeHtmlBody permission is set, HTML body exceeds 131K characters, and HTML email display is enabled.Normal—Email message doesn’t meet the Large criteria. | Small, 66.0 | 66.0 |
| fromAddress | Email Address | From address for the email message. | Small, 36.0 | 36.0 |
| htmlExpand​EmailThread | Integer | Start location of previous email thread. | Small, 47.0 | 47.0 |
| isRichText | Boolean | Indicates whether the body of the email message is in rich text format. | Small, 36.0 | 36.0 |
| status | String | Status of an email message on a case. Values are:DraftStatusForwardedStatusNewStatusReadStatusRepliedStatusSentStatus | Small, 47.0 | 47.0 |
| subject | String | Subject of the email message. | Small, 32.0 | 32.0 |
| textBody | String | Body of the email message.ImportantIn version 36.0 and later, use the body property. | Big, 32.0 | 32.0–35.0 |
| toAddresses | Email Address[] | To addresses of the email message. | Small, 32.0 | 32.0 |
| totalAttachments | Integer | Total number of attachments in the email message. | Small, 38.0 | 38.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Email Attachment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_email_attachment.htm)
- Email Address (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_emailAddress.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
