---
title: "E-signature Envelope"
domain: clm-developer-guide
topic: e-signature-envelope
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.315Z
estimatedTokens: 310
keywords: [E-signature, Envelope, Send, document, vendor]
---

# E-signature Envelope

> Send document envelope to vendor for e-signature.

# E-signature Envelope

Send document envelope to vendor for e-signature.

Resource

```

```

Available version

56.0

HTTP methods

POST

Example

```

```

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| documents | Envelope Send​ Documents Request[] | Array of documents to send. | Required | 56.0 |
| emailSettings | Envelope Send ​Email Settings Request | Email settings. | Required | 56.0 |
| notificationSettings | Envelope Send​ Notification Request | Notification settings. | Optional | 56.0 |
| parentId | String | ID of the parent object. | Optional | 56.0 |
| recipients | Envelope Send ​Recipients Request | Map of different recipients. | Required | 56.0 |
| vendor | String | Vendor name. | Required | 56.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| envelope | Object | E-signature envelope containing information of the document. | Required | 56.0 |

Response body for POST

[Envelope Send Response](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_envelope_send_respons.htm "Envelope details.")

## Code Examples

```
/connect/e-sign/signature-requests/${sourceObjectId}/envelope/send
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/e-sign/signature-requests/{sourceObjectId}/envelope/send
```

```
{
    "emailSettings" :  { // API: required, UI: required
        "emailSubject": "",// API: required,
        "emailBody": ""
    },
    "vendor": "Docusign",// API: required,
    "recipients": {// API: required,
        "signers": [{// API: required,
                "name": "",// API: required,
                "email": "",// API: required,
                "routingOrder": "",// API: required,
                "recipientId": "",// API: required,
                "signerRole": "",// API: required,
                "recipientType": "",// API: required,
                "recipientLocale": "",
                "phone": "",
                "emailNotification": {
                    "emailSubject": "",
                    "emailBody": "",
                    "supportedLanguage": ""
                }
            }
        ],
        "inPersonSigners": [{
                "name": "",
                "email": "",
                "routingOrder": "",
                "recipientId": "",
                "signerRole": "",
                "emailNotification": {
                    "emailSubject": "",
                    "emailBody": "",
                    "supportedLanguage": ""
                }
            }
        ],
        "certifiedDeliveries": [{
                "name": "",
                "email": "",
                "routingOrder": "",
                "recipientId": "",
                "signerRole": "",
                "emailNotification": {
                    "emailSubject": "",
                    "emailBody": "",
                    "supportedLanguage": ""
                }
            }
        ],
        "carbonCopies": [{
                "name": "",
                "email": "",
                "routingOrder": "",
                "recipientId": "",
                "signerRole": "",
                "emailNotification": {
                    "emailSubject": "",
                    "emailBody": "",
                    "supportedLanguage": ""
                }
            }
        ]
    },
    "documents": [{ // API: required
            "name": "",// API: required,
            "sourceId": "",// API: required,
            "fileExtension": "",// API: required,
            "sourceType": "",// API: required,
            "documentId": ""// API: required,
        }
    ],
    "notificationSettings": {
        "useAccountDefaults": "", 
        "reminders": {
            "reminderEnabled": "",
            "reminderDelay": "",
            "reminderFrequency": ""
        },
        "expirations": {
            "expireEnabled": "",
            "expireAfter": "",
            "expireWarn": ""
        }
    }
}
```

## Related Topics

- Envelope
                                                Send​ Documents Request[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_envelope_send_documents_reques.htm)
- Envelope Send ​Email Settings
                                            Request (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_envelope_send_email_settings_reques.htm)
- Envelope Send​ Notification
                                            Request (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_envelope_send_notification_reques.htm)
- Envelope Send ​Recipients
                                            Request (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_envelope_send_recipients_reques.htm)
- Envelope Send Response (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_envelope_send_respons.htm)
