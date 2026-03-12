---
title: "Tax Details"
domain: revenue-cloud
topic: tax-details
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:08.568Z
estimatedTokens: 268
keywords: [Tax, Details, Output, representation, tax, details, line, item.]
---

# Tax Details

> Output representation of the tax details for each line item.

# Tax Details

Output representation of the tax details for each line item.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| exemptAmount | Double | Amount exempted from taxation for the line item. | Big, 62.0 | 62.0 |
| exemptReason | String | Reason for the tax exemption. | Big, 62.0 | 62.0 |
| imposition | Tax Imposition | Tax imposition details applicable to the line item. | Big, 62.0 | 62.0 |
| jurisdiction | Tax Jurisdiction | Details of the tax jurisdiction. | Big, 62.0 | 62.0 |
| rate | Double | Tax rate applied to the taxable amount to calculate the tax. | Big, 62.0 | 62.0 |
| tax | Double | Actual amount of tax that’s applicable to the line item. | Big, 62.0 | 62.0 |
| taxId | String | Unique identifier such as a code or a number that’s assigned to a specific tax. This value helps users identify which type of tax is applied. | Big, 62.0 | 62.0 |
| taxableAmount | Double | Total amount of the line item that’s eligible for taxation. | Big, 62.0 | 62.0 |

## Code Examples

```
{
  "taxes": [
    {
      "exemptAmount": 0,
      "exemptReason": "NoExemption",
      "imposition": {
        "type": "General"
      },
      "jurisdiction": {
        "country": "US",
        "id": "63000",
        "level": "CIT",
        "name": "SEATTLE",
        "region": "WA",
        "stateAssignedNo": "1726"
      },
      "rate": 12.5,
      "tax": 12.5,
      "taxId": "11000378132466",
      "taxableAmount": 100
    }
  ]
}
```

## Related Topics

- Tax Imposition (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_tax_imposition_output.htm)
- Tax Jurisdiction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_tax_jurisdiction_output.htm)
