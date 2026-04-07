---
title: "Notification Signing"
domain: mc-apis
topic: notification-signing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.665Z
estimatedTokens: 192
keywords: [Notification, Signing, Marketing, Cloud, Event, Service, signs, every, delivered, callback, HMAC-SHA256, produced, entire, payload, key]
---

# Notification Signing

> Marketing Cloud Event Notification Service signs every notification delivered to your callback with an HMAC-SHA256 signature. The signature is produced by signing the entire notification payload using a signature key unique to the callback. You receive the signature key when you create the callback.

# Notification Signing

Marketing Cloud Event Notification Service signs every notification delivered to your callback with an HMAC-SHA256 signature. The signature is produced by signing the entire notification payload using a signature key unique to the callback. You receive the signature key when you create the callback.

> You can retrieve a callback’s signature key only during callback creation. Be sure to save the signature key for future use.

To validate the authenticity of a notification, use the callback signature key to create an HMAC-SHA256 signature of the notification payload received. Then compare the HMAC-SHA256 signature to the value in x-sfmc-ens-signature. If the values match, you know that the source of the notification is Marketing Cloud.
