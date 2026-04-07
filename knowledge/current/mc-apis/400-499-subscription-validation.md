---
title: "400-499 Subscription Validation"
domain: mc-apis
topic: 400-499-subscription-validation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:14.772Z
estimatedTokens: 255
keywords: [400-499, Subscription, Validation]
---

# 400-499 Subscription Validation

| Error | Message |
| --- | --- |
| 400 | The subscriber could not be found on the specified JobID |
| 401 | The subscriber is already unsubscribed from the specified list |
| 402 | The Parameters array did not contain any values or did not contain any of the Parameters we were looking for |
| 403 | The EmailAddress, SubscriberKey and SubscriberID parameters were not specified or they were empty |
| 404 | The SubscriberKey permission is turned on but only EmailAddress was provided. You MUST supply SubscriberKey and/or SubscriberID |
| 405 | You supplied SubscriberID along with SubscriberKey and/or EmailAddress. These values refer to different subscribers |
| 406 | You supplied SubscriberKey along with SubscriberID and/or EmailAddress. These values refer to different subscribers |
| 407 | You supplied EmailAddress along with SubscriberID and/or SubscriberKey. These values refer to different subscribers |
| 408 | SubscriberNullOrEmpty |
| 409 | SubscriberListNullOrEmpty |
