---
title: "Envelope Recipient Details Input"
domain: clm-developer-guide
topic: envelope-recipient-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.143Z
estimatedTokens: 373
keywords: [Envelope, Recipient, Input]
---

# Envelope Recipient Details Input

> Input to get recipient details.

# Envelope Recipient Details Input

Input to get recipient details.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accessCode | String | Specifies the access code a recipient has to enter to validate identity. | Optional | 56.0 |
| email | String | Email address of the recipients. | Required | 56.0 |
| emailNotification | EnvelopeSendEmail​NotificationRequest | Complex type that has information for setting the language for the recipients email information (if provided for one recipient it overrides the emailSubject and emailBody, also you must provide emailNotification for all recipients). | Optional | 56.0 |
| id | String | Recipient Id. | Optional | 56.0 |
| name | String | Name of the document. | Required | 56.0 |
| parentSignerName | String | Parent signer name for in person signers. | Optional | 56.0 |
| phone | String | Phone number of the signer. | Optional | 56.0 |
| recipientId | String | Recipient Id. | Required | 56.0 |
| recipientLocale | String | Recipient locale. | Optional | 56.0 |
| recipientType | String | Recipient type. | Required | 56.0 |
| routingNumber | Integer | Routing number. | Optional | 56.0 |
| routingOrder | Integer | Specifies the routing order of the recipient in the envelope. | Required | 56.0 |
| signerRole | Integer | Indicates the index or order of the signer in the signature tabs. | Required | 56.0 |
| title | String | Title of the signer. | Optional | 56.0 |

## Related Topics

- EnvelopeSendEmail​NotificationRequest (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_envelope_send_email_notification_reques.htm)
