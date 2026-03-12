---
title: "Create Ramp Deal Input"
domain: revenue-cloud
topic: create-ramp-deal-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.884Z
estimatedTokens: 294
keywords: [Ramp, Deal, Input, representation]
---

# Create Ramp Deal Input

> Input representation of the request to create a ramp deal.

# Create Ramp Deal Input

Input representation of the request to create a ramp deal.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| execution​Settings | Execution Settings Input[] | Settings to run the pricing or configuration rules. | Optional | 62.0 |
| segment​Type | String | Type of segment that the user wants to create. Valid values are:FREE_TRIALCUSTOMYEARLY | Required | 62.0 |
| subscription​Term | Integer | Subscription length of the term-defined product. | Required | 62.0 |
| subscription​TermUnit | String | Unit of time for the subscription length. Valid value is:MONTHS | Required | 62.0 |
| transaction​Id | String | ID of the sales transaction that’s configured, such as quote or order. | Required | 62.0 |
| transaction​LineId | String | Quote line item ID or order item ID that the price ramp is created for. | Required | 62.0 |
| trialTerm | Integer | Length of the trial period, if any. | Optional | 62.0 |
| trialTerm​Unit | String | Unit of time for the trial period. Valid value is:DAYS | Optional. Required if trialTerm property is specified. | 62.0 |

## Code Examples

```
{
  "transactionId": "0Q0xx0000004C92CAE",
  "transactionLineId": "0QLxx0000004C9VGAU",
  "subscriptionTerm": 14,
  "subscriptionTermUnit": "MONTHS",
  "trialTerm": 45,
  "trialTermUnit": "DAYS",
  "segmentType": "YEARLY",
  "executionSettings": {
       "executePricing": true,
       "executeConfigRules": false
   }
}
```

## Related Topics

- Execution Settings Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_execution_settings_input.htm)
