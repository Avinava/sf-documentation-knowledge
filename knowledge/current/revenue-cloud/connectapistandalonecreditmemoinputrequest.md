---
title: "ConnectApi.StandaloneCreditMemoInputRequest"
domain: revenue-cloud
topic: connectapistandalonecreditmemoinputrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.093Z
estimatedTokens: 437
keywords: [ConnectApi.StandaloneCreditMemoInputRequest, Input, representation, details, required, create, standalone, credit, memo.]
---

# ConnectApi.StandaloneCreditMemoInputRequest

> Input representation of the details required to create a standalone credit
    memo.

# ConnectApi.StandaloneCreditMemoInputRequest

Input representation of the details required to create a standalone credit memo.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| billToContactId | String | Contact related to the credit memo. | Optional | 62.0 |
| billingAccountId | String | ID of the account that the credit is issued to. | Required | 62.0 |
| charges | List<ConnectApi.StandaloneCreditMemoChargeInputRequest> | Charge lines of the credit memo. Requires at least one charge line. | Required | 62.0 |
| currencyIsoCode | String | ISO code currency of the new credit that’s issued. | Optional | 62.0 |
| description | String | Description for the new credit that’s issued. | Optional | 62.0 |
| effectiveDate | String | Effective date of the credit memo. If the value isn’t specified, then it’s null. | Optional | 62.0 |
| externalReference | String | ID of the external reference for the credit memo. | Optional | 62.0 |
| externalReferenceDataSource | String | Source of the external reference for the credit memo. | Optional | 62.0 |
| taxEffectiveDate | String | Effective date of the credit memo tax. If the value isn’t specified, then it’s null. | Optional | 62.0 |
| taxStrategy | ConnectApi.StandaloneTaxStrategyEnum | Specifies how tax lines must be created for the standalone credit memos. Valid values are:Ignore—Specifies that the creation of tax lines must be ignored.Manual Override—Specifies that the provided tax values must be considered for taxes.Calculate—Specifies that tax must be calculated by using the API. | Required | 62.0 |
| type | ConnectApi.CreditMemoTypeEnum | Type of credit memo to be created. Valid value is Posted. | Optional | 62.0 |

## Related Topics

- ConnectApi.StandaloneCreditMemoChargeInputRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_standalone_credit_memo_charge.htm)
