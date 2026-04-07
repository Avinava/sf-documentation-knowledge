---
title: "ListTypeEnum"
domain: mc-apis
topic: listtypeenum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:17.800Z
estimatedTokens: 132
keywords: [ListTypeEnum, how, stores, subscriber]
---

> Specifies how a list stores subscriber information.

# ListTypeEnum

Specifies how a list stores subscriber information.

### Properties

| Name | Data Type | Description |
| --- | --- | --- |
| GlobalUnsubscribe | ListTypeEnum | This list stores email addresses that do not receive messages as part of a send. |
| Master | ListTypeEnum | Indicates the specified list is a master type. |
| Private | ListTypeEnum | Subscriber information is stored by SubscriberID and email address. This list is not displayed in a subscription center. |
| Public | ListTypeEnum | Subscriber information is stored by SubscriberID and email address. This list is displayed in a subscription center. |
| SalesForce | ListTypeEnum | Subscriber information is stored by SubscriberID, SubscriberKey, and email address in a list not made available in Marketing Cloud. This list also includes a Salesforce Object ID to link it to information in a Salesforce instance. |
