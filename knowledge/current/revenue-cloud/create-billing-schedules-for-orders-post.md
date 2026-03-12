---
title: "Create Billing Schedules for Orders (POST)"
domain: revenue-cloud
topic: create-billing-schedules-for-orders-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.725Z
estimatedTokens: 416
keywords: [Create, Billing, Schedules, Orders, POST, Generate, billing, schedules, orders, context, service.]
---

# Create Billing Schedules for Orders (POST)

> Generate billing schedules for orders by using context
    service.

# Create Billing Schedules for Orders (POST)

Generate billing schedules for orders by using context service.

Special Access Rules

The org must have the standard billing context definition with the target mapping. This context definition is available in orgs with Billing enabled. Additionally, you need the Create Billing Schedules From Billing Transactions API permission set and the Context Service Runtime permission set to use this API.

See these [requirements](https://help.salesforce.com/s/articleView?id=ind.billing_schedules_create.htm&language=en_US "HTML (New Window)") to learn more about the configuration prerequisites.

Resource

```

```

Resource example

```

```

Available version

62.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| billing​Transaction​Ids | String[] | ID of the billing transaction. This property value is the ID of the order if the source of the billing request is for the Order object.If the order product associated with the specified order ID doesn't have an associated billing treatment ID, the API considers the default billing treatment ID. The generated billing schedule group has the default billing treatment ID.The API supports only one billing transaction ID in the input. | Required | 62.0 |

Response body for POST

[Context-Aware Billing Schedule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_context_aware_billing_schedule_output.htm "Output representation of the context-aware billing schedule.")

## Code Examples

```
/commerce/invoicing/billing-schedules/actions/create
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/billing-schedules/actions/create
```

```
{
    "billingTransactionIds": [ "801xx000003H1H9AAK"]
}
```

## Related Topics

- Context-Aware Billing
              Schedule (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_context_aware_billing_schedule_output.htm)
