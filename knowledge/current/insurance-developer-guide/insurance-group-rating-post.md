---
title: "Insurance Group Rating (POST)"
domain: insurance-developer-guide
topic: insurance-group-rating-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.137Z
estimatedTokens: 320
keywords: [Insurance, Group, Rating, POST, Rate, benefits, quote, calculate, premiums, line, items, specific, root, plans, their]
---

# Insurance Group Rating (POST)

> Rate a group benefits quote to calculate premiums for all quote line items. Rate
  specific root plans to calculate premiums for their associated quote line items.

# Insurance Group Rating (POST)

Rate a group benefits quote to calculate premiums for all quote line items. Rate specific root plans to calculate premiums for their associated quote line items.

Resource

```

```

Resource Example

```

```

Available version

65.0

HTTP methods

POST

Path Parameter for POST

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| quoteId | String | ID of the group benefits quote. | Required | 65.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| batchSize | Integer | Number of records to process in each batch for the rating calculation.The default value is 5. | Optional | 65.0 |
| quoteLineItemIds | String[] | List of quote line item IDs of the root plan. | Optional | 65.0 |
| ratingDate | String | Date to use for the rating calculation. If not specified, the API uses the effective date of the quote. | Optional | 65.0 |

Response body for POST

[Group Rating Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_group_rating_output.htm "Output representation of the Group Benefits Group Rating process.")

## Code Examples

```
/connect/insurance/quotes/quoteId/group-rating
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/quotes/0Q08d0000004sQzCAI/group-rating
```

```
{
  "batchSize": 200,
  "quoteLineItemIds": [
    "0qvp00000004C9wAAE"
  ],
  "ratingDate": "2025-01-01"
}
```

## Related Topics

- Group Rating Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_group_rating_output.htm)
