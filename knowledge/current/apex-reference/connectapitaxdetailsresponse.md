---
title: "ConnectApi.TaxDetailsResponse"
domain: apex-reference
topic: connectapitaxdetailsresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.090Z
keywords: [ConnectApi.TaxDetailsResponse]
---

# ConnectApi.TaxDetailsResponse

# ConnectApi.TaxDetailsResponse

Tax details for each line item in a tax line item output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| exemptAmount | Double | Amount of the line item that is exempt from taxation. | 55.0 |
| exemptReason | String | The reason that any tax exemption applied to the line item. | 55.0 |
| imposition | ConnectApi.​TaxImposition​Response | The business justification for applying tax to a line item. | 55.0 |
| jurisdiction | ConnectApi.​TaxJurisdiction​Response | Business address used to calculate the tax rate for the line item. | 55.0 |
| rate | Double | Tax rate for the line item. | 55.0 |
| tax | Double | Total amount of tax on the line item. | 55.0 |
| taxId | String | ID for the type of tax applied to the line item. | 55.0 |
| taxableAmount | Double | Amount of line item that can be taxed. | 55.0 |