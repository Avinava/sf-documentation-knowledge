---
title: "Envelope Notification Expiration Input"
domain: clm-developer-guide
topic: envelope-notification-expiration-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.130Z
estimatedTokens: 186
keywords: [Envelope, Notification, Expiration, Input]
---

# Envelope Notification Expiration Input

> Input to get notification expiration information.

# Envelope Notification Expiration Input

Input to get notification expiration information.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| expireAfter | String | An integer specifying the number of days that a sent envelope remains active before it expires. | Optional | 56.0 |
| expireEnabled | String | Indicates whether or not the envelope is no longer available for signing after the specified number of days after it was sent. | Optional | 56.0 |
| expireWarn | String | Integer that specifying the number of days before the envelope expires that an expiration warning email is sent to the recipient; if set to 0 (zero), no warning email is sent. | Optional | 56.0 |
