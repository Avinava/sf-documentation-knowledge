---
title: "Envelope Recipients Input"
domain: clm-developer-guide
topic: envelope-recipients-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.146Z
estimatedTokens: 157
keywords: [Envelope, Recipients, Input, different]
---

# Envelope Recipients Input

> Input to get different recipients list.

# Envelope Recipients Input

Input to get different recipients list.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| carbonCopies | Envelope Send ​Recipient​ Detail Request[] | Carbon copy user details. | Optional | 56.0 |
| certifiedDeliveries | Envelope Send ​Recipient​ Detail Request[] | Certificate deliveries details. | Optional | 56.0 |
| inPersonSigners | Envelope Send ​Recipient​ Detail Request[] | In person signer details. | Optional | 56.0 |
| signers | Envelope Send ​Recipient​ Detail Request[] | Array of signer details. | Required | 56.0 |

## Related Topics

- Envelope Send ​Recipient​ Detail Request[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_envelope_send_recipient_detail_reques.htm)
- Envelope Send
                        ​Recipient​ Detail Request[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_envelope_send_recipient_detail_reques.htm)
