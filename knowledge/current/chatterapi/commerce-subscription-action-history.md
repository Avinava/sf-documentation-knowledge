---
title: "Commerce Subscription Action History"
domain: chatterapi
topic: commerce-subscription-action-history
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.063Z
estimatedTokens: 182
keywords: [Commerce, Subscription, Action, History, Retrieve, API, authenticated, buyers]
---

# Commerce Subscription Action History

> Retrieve the complete subscription action history for the
      specified subscription. This API is available only for authenticated buyers.

# Commerce Subscription Action History

Retrieve the complete subscription action history for the specified subscription. This API is available only for authenticated buyers.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccountId | String | ID of the account for which the request is made. | Required | 66.0 |

Response body for GET

[Commerce Subscription Actions History](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_actions_history.htm "Representation for subscription actions history.")

## Code Examples

```
/commerce/webstores/${webstoreId}/subscriptions/${subscriptionId}/action-history
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores​/0ZExx00000003NhGAI/subscriptions/02ixx0000004HJKAA2/action-history?effectiveAccountId=001xx000003DMe9
```

## Related Topics

- Commerce Subscription Actions History (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_actions_history.htm)
