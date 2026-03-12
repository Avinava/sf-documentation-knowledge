---
title: "ConnectApi.ChangeItemFeeTaxInputRepresentation"
domain: apex-reference
topic: connectapichangeitemfeetaxinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.619Z
estimatedTokens: 162
keywords: [ConnectApi.ChangeItemFeeTaxInputRepresentation, Input, representation, taxes, associated, change, item, fee.]
---

# ConnectApi.ChangeItemFeeTaxInputRepresentation

> Input representation of taxes associated with a change item fee.

# ConnectApi.ChangeItemFeeTaxInputRepresentation

Input representation of taxes associated with a change item fee.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Tax amount of the change item fee. | Required | 63.0 |
| description | String | Description of the change item fee. | Required | 63.0 |
| rate | Double | Tax rate for the change item fee. | Required | 63.0 |
| taxEffectiveDate | String | Effective date for the tax. | Required | 63.0 |
| type | String | Describes how the fee amount is calculated. Valid values are:ActualEstimated | Required | 63.0 |

## Related Topics

- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
