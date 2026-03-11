---
title: "NotificationStatus Enum"
domain: apex-reference
topic: notificationstatus-enum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.465Z
keywords: [NotificationStatus, Enum, Usage, Values]
---

# NotificationStatus Enum

# NotificationStatus Enum

Shows whether the payments platform successfully received the notification from the gateway.

## Usage

When the gateway sends a notification for a payment request, the payments platform delegates the notification request to the gateway adapter. First, the adapter evaluates the signature from the notification request. If the signature is valid, the adapter builds a notification object to store information about the notification. During this process, the adapter sets the NotificationStatus to Failed or Success based on information from the notification request.

## Enum Values

The following are the values of the commercepayments.NotificationStatus enum.

| Value | Description |
| --- | --- |
| Failed | The payments platform couldn’t receive the notification due to an error. |
| Success | The payments platform received the notification. |