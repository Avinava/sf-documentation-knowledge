---
title: "Envelope Notification Input"
domain: clm-developer-guide
topic: envelope-notification-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.137Z
estimatedTokens: 144
keywords: [Envelope, Notification, Input, e-signature]
---

# Envelope Notification Input

> Input to get notification information for
    e-signature.

# Envelope Notification Input

Input to get notification information for e-signature.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| expirations | Envelope Send Notification​Expirations Request | Expiration settings. | Optional | 56.0 |
| reminders | Envelope Send Notification ​Reminders Request | Reminder settings. | Optional | 56.0 |
| useAccountDefaults | Boolean | Indicates whether or not the account defaults for notifications must be used by the envelope [ true \| false ]. | Optional | 56.0 |

## Related Topics

- Envelope Send Notification​Expirations
                        Request (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_envelope_send_notification_expirations_reques.htm)
- Envelope Send Notification ​Reminders
                        Request (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_envelope_send_notification_reminders_reques.htm)
