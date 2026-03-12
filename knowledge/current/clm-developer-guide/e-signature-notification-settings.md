---
title: "E-signature Notification Settings"
domain: clm-developer-guide
topic: e-signature-notification-settings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.542Z
estimatedTokens: 153
keywords: [E-signature, Notification, Settings]
---

# E-signature Notification Settings

> E-signature notification settings.

# E-signature Notification Settings

E-signature notification settings.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| expirations | Notification ​Expiration Setting | Expirations settings for notification setting. | Small, 56.0 | 56.0 |
| reminders | Notification ​Reminder Setting | Reminder settings for notification setting. | Small, 56.0 | 56.0 |
| useAccountDefaults | Boolean | Indicates whether the Account defaults for notifications should be used by the envelope [ true \| false ]. | Small, 56.0 | 56.0 |

## Code Examples

```
{  
   
    "useAccountDefaults": true,
    "reminders": {
        "reminderEnabled": true,
        "reminderDelay": 4,
        "reminderFrequency": 5
    },
    "expirations": {
        "expireEnabled": true,
        "expireAfter": 4,
        "expireWarn": 5
    }
    
}
```

## Related Topics

- Notification ​Expiration Setting (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_notification_expiration_respons.htm)
- Notification ​Reminder Setting (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_notification_reminder_respons.htm)
