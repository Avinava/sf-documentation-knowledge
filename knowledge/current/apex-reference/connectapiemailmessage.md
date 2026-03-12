---
title: "ConnectApi.EmailMessage"
domain: apex-reference
topic: connectapiemailmessage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.249Z
estimatedTokens: 308
keywords: [ConnectApi.EmailMessage, Email, message, case]
---

# ConnectApi.EmailMessage

> Email message from a case.

# ConnectApi.EmailMessage

Email message from a case.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, [ConnectApi.EmailMessageCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_email_message_capability.htm "If a feed element has this capability, it has an email message from a case.") is used.

Subclass of [ConnectApi.FeedItemAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm "Feed item attachment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| direction | ConnectApi.Email​MessageDirection Enum | The direction of the email message.Inbound—An inbound message (sent by a customer).Outbound—An outbound message (sent to a customer by a support agent). | 29.0–31.0 |
| emailMessageId | String | The ID of the email message. | 29.0–31.0 |
| subject | String | The subject of the email message. | 29.0–31.0 |
| textBody | String | The body of the email message. | 29.0–31.0 |
| toAddresses | List<ConnectApi.EmailAddress> | A list of email addresses to send the message to. | 29.0–31.0 |

## Related Topics

- ConnectApi.EmailMessageCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_email_message_capability.htm)
- ConnectApi.FeedItemAttachment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.EmailAddress (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_emailAddress.htm)
