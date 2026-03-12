---
title: "Feed Item Attachment: Email Message"
domain: chatterapi
topic: feed-item-attachment-email-message
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.388Z
estimatedTokens: 313
keywords: [Feed, Item, Attachment, Email, Message, sent, case, record]
---

# Feed Item Attachment: Email Message

> An email message sent from a case record in Case Feed.

# Feed Item Attachment: Email Message

An email message sent from a case record in Case Feed.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This response body isn’t available in version 32.0 and later. In version 32.0 and later, [Email Message Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_email_message_capability.htm "If a feed element has this capability, it has an email message from a case.") is used.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| direction | String | The direction of the email message. One of these values:Inbound—An inbound message (sent by a customer).Outbound—An outbound message (sent to a customer by a support agent). | Small, 29.0 | 29.0–31.0 |
| emailMessageId | String | ID of the email message | Small, 29.0 | 29.0–31.0 |
| subject | String | Subject of the email message | Small, 29.0 | 29.0–31.0 |
| textBody | String | Body of the email message | Big, 29.0 | 29.0–31.0 |
| toAddresses | Email Address[] | Collection of addresses to receive the email message | Small, 29.0 | 29.0–31.0 |
| type | String | Emailmessage | Small, 29.0 | 27.0–31.0 |

## Related Topics

- Email Message Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_email_message_capability.htm)
- Email Address (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_emailAddress.htm)
