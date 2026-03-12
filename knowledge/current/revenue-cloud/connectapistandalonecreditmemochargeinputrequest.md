---
title: "ConnectApi.StandaloneCreditMemoChargeInputRequest"
domain: revenue-cloud
topic: connectapistandalonecreditmemochargeinputrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.130Z
estimatedTokens: 454
keywords: [Input, representation, charge, lines, credit, memo]
---

# ConnectApi.StandaloneCreditMemoChargeInputRequest

> Input representation of the details of the charge lines of a credit memo.

# ConnectApi.StandaloneCreditMemoChargeInputRequest

Input representation of the details of the charge lines of a credit memo.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addresses | Credit Memo Addresses Input | Details of the billing and shipping addresses. | Optional | 62.0 |
| chargeAmount | Double | Charge amount for the credit memo. | Required | 62.0 |
| description | String | Description of the created credit memo charge line. | Optional | 62.0 |
| endDate | String | End date of the credit memo charge line. | Optional | 62.0 |
| isTaxOnlyCredit | Boolean | Indicates whether the credit is for tax only (true) or not (false). | Optional | 62.0 |
| productId | String | ID of the product record that the credit memo is issued on. | Optional | 62.0 |
| productName | String | Name of the product that the credit memo is issued on. | Optional | 62.0 |
| startDate | String | Start date of the credit memo charge line. | Optional | 62.0 |
| taxEffectiveDate | String | Date from when the tax is applicable. | Optional | 62.0 |
| taxes | ListConnectApi.StandaloneCreditMemoTaxInputRequest | List of credit memo tax lines. | Optional | 62.0 |
| taxStrategy | ConnectApi.StandaloneTaxStrategyEnum | Tax strategy to be applied to this credit memo charge line, child treatment lines, and tax lines. You can override the tax strategy at the individual credit memo lines or tax lines level. Valid values are:Ignore—Specifies that the creation of tax lines must be ignored.Manual Override—Specifies that the provided tax values must be considered for taxes.Calculate—Specifies that tax must be calculated by using the API. | Optional | 62.0 |
| treatmentId | String | ID of the tax treatment record that’s used to calculate tax. | Optional | 62.0 |

## Related Topics

- Credit Memo Addresses Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_addresses.htm)
- ConnectApi.StandaloneCreditMemoTaxInputRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_standalone_credit_memo_tax.htm)
