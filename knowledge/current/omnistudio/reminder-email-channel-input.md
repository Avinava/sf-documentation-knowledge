---
title: "Reminder Email Channel Input"
domain: omnistudio
topic: reminder-email-channel-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.693Z
estimatedTokens: 249
keywords: [Reminder, Email, Channel, Input, representation, that’s, send]
---

# Reminder Email Channel Input

> Input representation of an email channel that’s used to send a reminder.

# Reminder Email Channel Input

Input representation of an email channel that’s used to send a reminder.

JSON example

Here’s a sample of the reminder channel that’s used to send the reminder.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| channel | String | Communication channel that's used to send the reminder. Valid value is Email. | Required | 60.0 |
| operationType | String | Type of the HTTP operation that the reminder definition channel supports. Valid values are:CreateUpdateThe default value is Create. | Optional | 60.0 |
| reminderDefinition​ChannelId | String | ID of the reminder definition channel that’s used to send the reminder. | Required to update a reminder. | 60.0 |
| templateId | String | ID of the messaging template that's used to send the reminder. | Required to create a reminder. | 60.0 |
| sendFrom | String | Email address that’s used to send the reminder. | Required | 60.0 |

## Code Examples

```
{
  "reminderChannels": [
    {
      "channel": "Email",
      "templateId": "00Xxx000000k1DvEAI",
      "sendFrom": "john.doe@example.com"
    }
  ]
}
```
