---
title: "Notification Status"
domain: pushImplGuide
topic: notification-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.649Z
estimatedTokens: 191
keywords: [Notification, Status, notifications, context, user]
---

# Notification Status

> Status of notifications for the context user.

# Notification Status

Status of notifications for the context user.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| lastActivity | String | Date and time of latest activity date for any notifications or, if none, the current date and time. | Small, 49.0 | 49.0 |
| oldestUnread | String | Date and time of oldest unread notification or, if none, the current date and time. | Small, 49.0 | 49.0 |
| oldestUnseen | String | Date and time of oldest unseen notification or, if none, the current date and time. | Small, 49.0 | 49.0 |
| unreadCount | Integer | Count of unread notifications. | Small, 49.0 | 49.0 |
| unseenCount | Integer | Count of unseen notifications. | Small, 49.0 | 49.0 |
