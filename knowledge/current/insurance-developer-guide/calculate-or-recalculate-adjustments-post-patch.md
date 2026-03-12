---
title: "Calculate or Recalculate Adjustments (POST, PATCH)"
domain: insurance-developer-guide
topic: calculate-or-recalculate-adjustments-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.032Z
estimatedTokens: 707
keywords: [Calculate, Recalculate, Adjustments, POST, PATCH, new, loss, item, payment, detail, record, under, claim, coverage]
---

# Calculate or Recalculate Adjustments (POST, PATCH)

> Calculate adjustments for a new loss item (POST) or recalculate
   adjustments for an existing payment detail record (PATCH) under a claim
  coverage.

# Calculate or Recalculate Adjustments (POST, PATCH)

Calculate adjustments for a new loss item (POST) or recalculate adjustments for an existing payment detail record (PATCH) under a claim coverage.

This API uses the default Expression Set Executable Template to perform the calculation and applies the standard policy rules, such as deductibles, co-pays, co-insurance, and limits to an initial claimed amount. You can either extend the executable template to create a custom Expression Set or create an Integration Procedure to include custom calculations.

The API uses the claimedAmount, claimId, and claimCoverageId as input, and returns the final adjustedAmount along with the generated data for Claim Coverage Payment Adjustments (CCPAs) and Insurance Policy Limit Tracking (IPLT) records. This API only returns the data; it doesn't save them in database.

Resource

```

```

Resource example

```

```

Available version

POST, PATCH

PATCH is available in version 66.0 and later.

HTTP methods

POST, PATCH

Path parameter for POST and PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| claimId | String | ID of the claim for which the payment adjustments must be calculated. | Required | 65.0 |
| coverageId | String | ID of the claim coverage record. | Required | 65.0 |

Request body for POST

Calculate adjustments during the creation of a Loss item.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| benefitName | String | Name of the specific benefit or sub-coverage that's associated with the coverage, as defined in the product attribute mapping. | Optional | 66.0 |
| claimedAmount | Double | Amount requested by the claimant when submitting the loss. | Required | 65.0 |

Response body for POST

[Calculate Adjustments](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_calculate_adjustments.htm "Output representation of the details for calculating the adjustments for the claim loss item.")

Request body for PATCH

Recalculate adjustments for an existing payment detail.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| claimedAmount | Double | Amount requested by the claimant when submitting the loss. | Optional | 66.0 |
| paymentDetailId | String | ID of the claim coverage payment detail for recalculating adjustments. | Optional | 66.0 |

Response body for PATCH

[Calculate Adjustments](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_calculate_adjustments.htm "Output representation of the details for calculating the adjustments for the claim loss item.")

## Code Examples

```
/connect/insurance/claims/claimId/coverages/coverageId/calculate-adjustments
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/claims/0Zkxx000000001dEAA/coverages/0kPxx000000002fEAA/calculate-adjustments
```

```
{
  "benefitName": "Car Rental",
  "claimedAmount": 1500
}
```

```
{
  "claimedAmount": 1200.00,
  "paymentDetailId": "0l2xx0000000001CAA"
}
```

## Related Topics

- Calculate Adjustments (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_calculate_adjustments.htm)
