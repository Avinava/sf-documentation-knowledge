---
title: "E-signature Notification Expiration"
domain: clm-developer-guide
topic: e-signature-notification-expiration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.534Z
estimatedTokens: 185
keywords: [E-signature, Notification, Expiration, settings]
---

# E-signature Notification Expiration

> E-signature notification expiration settings.

# E-signature Notification Expiration

E-signature notification expiration settings.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| expireAfter | Integer | Integer specifying the number of days that a sent envelope remains active before it expires. | Small, 56.0 | 56.0 |
| expireEnabled | Boolean | Indicates whether the envelope is no longer available for signing after the specified number of days after it was sent. | Small, 56.0 | 56.0 |
| expireWarn | Integer | Integer that specifying the number of days before the envelope expires that an expiration warning email is sent to the recipient; if set to 0 (zero), no warning email is sent. | Small, 56.0 | 56.0 |
