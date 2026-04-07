---
title: "UnsubscribeBehaviorEnum"
domain: mc-apis
topic: unsubscribebehaviorenum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:25.564Z
estimatedTokens: 132
keywords: [UnsubscribeBehaviorEnum, whether, unsubscribe, applied, enterprise, business, unit]
---

# UnsubscribeBehaviorEnum

> The UnsubscribeBehaviorEnum object indicates whether an unsubscribe request is applied to an enterprise or a business unit of that enterprise.

# UnsubscribeBehaviorEnum

The UnsubscribeBehaviorEnum object indicates whether an unsubscribe request is applied to an enterprise or a business unit of that enterprise.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| BUSINESS_UNIT_ONLY | Enumeration | Indicates that an unsubscribe request applies only to a list at the level of the business unit. |
| ENTIRE_ENTERPRISE | Enumeration | Indicates that an unsubscribe request applies to the entire Enterprise account and all associated business units. |
