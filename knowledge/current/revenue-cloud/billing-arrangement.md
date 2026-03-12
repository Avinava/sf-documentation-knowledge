---
title: "Billing Arrangement"
domain: revenue-cloud
topic: billing-arrangement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.380Z
estimatedTokens: 380
keywords: [Billing, Arrangement, Output, representation, contains, details, billing, arrangement, including, its, status, configuration, settings, associated, lines.]
---

# Billing Arrangement

> Output representation that contains the details of a billing arrangement, including its
    status, configuration settings, and associated lines.

# Billing Arrangement

Output representation that contains the details of a billing arrangement, including its status, configuration settings, and associated lines.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| billing​ArrangementId | String | Unique ID of the billing arrangement. | Big, 66.0 | 66.0 |
| billing​ArrangementLines | Billing Arrangement Line[] | List of billing arrangement lines associated with the latest version of the billing arrangement. | Big, 66.0 | 66.0 |
| error | Error Response Output | Error details if the request was unsuccessful. | Big, 66.0 | 66.0 |
| isAdjustment​ToOwnAccount | Boolean | Indicates whether the remainder of the bill is adjusted to the owning account (true) or not (false). | Big, 66.0 | 66.0 |
| isSuccess | Boolean | Indicates whether the request was successfully processed (true) or not (false). | Big, 66.0 | 66.0 |
| name | String | Name of the billing arrangement. | Big, 66.0 | 66.0 |
| numOf​AssociatedBSGs | Integer | Total number of billing schedule groups associated with the billing arrangement. | Big, 66.0 | 66.0 |
| remainderPercentage | Double | Remaining percentage of the bill after all line allocations are calculated. | Big, 66.0 | 66.0 |
| status | String | Status of the billing arrangement. Valid values are:DraftActiveInactive | Big, 66.0 | 66.0 |
| versionNumber | Integer | Current version number of the billing arrangement. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "billingArrangementId": "1bdxx000000004rAAA",
  "name": "Acme Shared Billing Definition",
  "isAdjustmentToOwnAccount": true,
  "remainderPercentage": 15,
  "versionNumber": 1,
  "numOfAssociatedBSGs": 5,
  "status": "Active",
  "billingArrangementLines": [
    {
      "billingArrangementLineId": "1blxx000000006TAAQ",
      "accountId": "accId1",
      "billingAccountId": "bAccId1",
      "isRemainderAdjustmentAccount": false,
      "percentage": 60
    },
    {
      "billingArrangementLineId": "1blxx000000001dAAA",
      "accountId": "accId2",
      "billingAccountId": "bAccId2",
      "isRemainderAdjustmentAccount": false,
      "percentage": 25
    }
  ],
  "isSuccess": true,
  "error": null
}
```

## Related Topics

- Billing Arrangement Line (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_billing_arrangement_line.htm)
