---
title: "Standalone Credit Memo Input"
domain: revenue-cloud
topic: standalone-credit-memo-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.525Z
estimatedTokens: 488
keywords: [Standalone, Credit, Memo, Input, representation, details, required, create, standalone, credit, memo.]
---

# Standalone Credit Memo Input

> Input representation of the details required to create a standalone credit
    memo.

# Standalone Credit Memo Input

Input representation of the details required to create a standalone credit memo.

JSON example

This example shows a sample request with the Ignore tax strategy.

```

```

This example shows a sample request with the ManualOverride tax strategy.

```

```

This example shows a sample request with the Calculate tax strategy for a charge line.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| billTo​ContactId | String | Contact related to the credit memo. | Optional | 62.0 |
| billing​AccountId | String | ID of the account that the credit is issued to. | Required | 62.0 |
| charges | Standalone Credit Memo Charge Input[] | Charge lines of the credit memo. Requires at least one charge line. | Required | 62.0 |
| currency​IsoCode | String | ISO code currency of the new credit that’s issued. | Optional | 62.0 |
| description | String | Description for the new credit that’s issued. | Optional | 62.0 |
| effective​Date | String | Effective date of the credit memo. If the value isn’t specified, then it’s null. | Optional | 62.0 |
| external​Reference | String | ID of the external reference for the credit memo. | Optional | 62.0 |
| externalReference​Data​Source | String | Source of the external reference for the credit memo. | Optional | 62.0 |
| taxEffective​Date | String | Effective date of the credit memo tax. If the value isn’t specified, then it’s null. | Optional | 62.0 |
| tax​Strategy | String | Specifies how tax lines must be created for the standalone credit memos. Valid values are:Ignore—Specifies that the creation of tax lines must be ignored.Manual Override—Specifies that the provided tax values must be considered for taxes.Calculate—Specifies that tax must be calculated by using the API. | Required | 62.0 |
| type | String | Type of credit memo to be created. Valid value is Posted. | Optional | 62.0 |

## Code Examples

```
{
  "billingAccountId": "001j000000WCFB800x",
  "type": "Posted",
  "description": "Standalone credit memo with ignored tax.",
  "currencyIsoCode": "USD",
  "taxStrategy": "Ignore",
  "charges": [
    {
      "chargeAmount": 100,
      "productId": "01tR0000000njDiIAI"
    }
  ]
}
```

```
{
  "billingAccountId": "001DU000001nhoPYAQ",
  "description": "creditmemo-1",
  "currencyIsoCode": "USD",
  "taxStrategy": "ManualOverride",
  "charges": [
    {
      "productId": "01tDU000000EpKkYAK",
      "chargeAmount": 1000,
      "taxes": [
        {
          "taxAmount": 7.25,
          "taxCode": "CA-94121",
          "taxName": "CALIFORNIA",
          "taxRate": 0.25
        }
      ]
    }
  ]
}
```

```
{
  "billingAccountId": "001DU000001nhoPYAQ",
  "description": "Standalone Credit Memo",
  "type": "Posted",
  "currencyIsoCode": "USD",
  "taxStrategy": "Ignore",
  "charges": [
    {
      "productId": "01tR0000000njDiIAI",
      "chargeAmount": 10,
      "taxStrategy": "Calculate",
      "treatmentId": "1ttxx00000001VZAAY"
    }
  ]
}
```

## Related Topics

- Standalone Credit Memo Charge Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_standalone_credit_memo_charge_input.htm)
