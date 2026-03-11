---
title: "ConnectApi.EmailMessageCapability"
domain: apex-reference
topic: connectapiemailmessagecapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.677Z
keywords: [ConnectApi.EmailMessageCapability, See]
---

# ConnectApi.EmailMessageCapability

# ConnectApi.EmailMessageCapability

If a feed element has this capability, it has an email message from a case.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attachments | List<ConnectApi.​EmailAttachment> | Attachments in the email message. | 36.0 |
| automationType | String | Automation type of the email message.aiAssisted—The email message was created with the assistance of AI.aiAutomated—The email message was created automatically by AI. | 63.0 |
| bccAddresses | List<ConnectApi.​EmailAddress> | BCC addresses for the email message. | 36.0 |
| body | String | Body of the email message. | 36.0 |
| ccAddresses | List<ConnectApi.​EmailAddress> | CC addresses for the email message. | 36.0 |
| direction | ConnectApi.​EmailMessageDirection | Direction of the email message. Values are:Inbound—An inbound message (sent by a customer).Outbound—An outbound message (sent to a customer by a support agent). | 32.0 |
| emailMessageId | String | ID of the email message. | 32.0 |
| emailSize | ConnectApi.​EmailMessageSize | Size of a case’s email message HTML body.Large—UseLargeHtmlBody permission is set, HTML body exceeds 131K characters, and HTML email display is enabled.Normal—Email message doesn’t meet the Large criteria. | 66.0 |
| fromAddress | ConnectApi.EmailAddress | From address for the email message. | 36.0 |
| htmlExpand​EmailThread | Integer | Start location of previous email thread. | 47.0 |
| isRichText | Boolean | Indicates whether the body of the email message is in rich text format. | 36.0 |
| status | ConnectApi.​EmailMessageStatus | Status of an email message on a case. Values are:DraftStatusForwardedStatusNewStatusReadStatusRepliedStatusSentStatus | 47.0 |
| subject | String | Subject of the email message. | 32.0 |
| textBody | String | Body of the email message.ImportantIn version 36.0 and later, use the body property. | 32.0–35.0 |
| toAddresses | List<ConnectApi.​EmailAddress> | To addresses of the email message. | 32.0 |
| totalAttachments | Integer | Total number of attachments in the email message. | 38.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")