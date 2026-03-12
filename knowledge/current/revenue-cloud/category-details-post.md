---
title: "Category Details (POST)"
domain: revenue-cloud
topic: category-details-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.664Z
estimatedTokens: 243
keywords: [Category, Details, POST, Get, details, category, specified, ID., API, composite, Product, Discovery.]
---

# Category Details (POST)

> Get details of a category for a specified category ID. This API is a
      composite API for Product Discovery.

# Category Details (POST)

Get details of a category for a specified category ID. This API is a composite API for Product Discovery.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique identifier value that’s attached to the requests and messages, and accepts references to a particular transaction or event chain. | Optional | 60.0 |
| user​Context | User Context Input | User context details. For example, account ID or contact ID. | Optional | 60.0 |

Response body for POST

[CPQ Base Details](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_cpq_base_details_output.htm "Output representation of the catalog, category, or product details based on the request.")

## Code Examples

```
/connect/cpq/categories/categoryId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/cpq/categories/0ZGxx000000001dGAA
```

```
{
  "correlationId": "9cbb9650-48c5-11ed-96d1-0afcf185843b",
  "userContext": {
      "accountId": "001xx0000000001AAA",
      "contactId": "003xx00000000D7AAI"
  }
}
```

## Related Topics

- User Context
                        Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_user_context_input.htm)
- CPQ Base Details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_cpq_base_details_output.htm)
