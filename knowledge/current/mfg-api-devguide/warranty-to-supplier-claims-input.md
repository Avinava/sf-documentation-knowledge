---
title: "Warranty To Supplier Claims Input"
domain: mfg-api-devguide
topic: warranty-to-supplier-claims-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.961Z
estimatedTokens: 388
keywords: [Warranty, Supplier, Claims, Input, representation, recovery]
---

# Warranty To Supplier Claims Input

> Input representation to create supplier recovery claims from warranty claims.

# Warranty To Supplier Claims Input

Input representation to create supplier recovery claims from warranty claims.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| claimIds | String[] | The IDs of the claim records of the claim type Warranty Claim. | Required | 61.0 |
| contextDefinition | String | The developer name of the context definition that contains the structure of a warranty claim. | Optional | 61.0 |
| contextMapping | String | The name of the context mapping associated with the context definition. | Optional | 61.0 |
| conversionType | String | The type of conversion. | Optional | 61.0 |
| supplierRecoveryProducts | Supplier Recovery Contract Input [] | The products associated with the supplier recovery claim. | Optional | 61.0 |

Properties of Supplier Recovery Contract Input

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| product2Id | String | The ID of the product that’s the causal part in the claim coverage. This product is a part of the supplier recovery contract. | Required if Supplier Recovery Contract Input property is passed in Connect API. | 61.0 |
| salesContractLineId | String | The ID of the sales contract line for supplier recovery.The sales contract line is created if the product it contains is the same as the product that's specified in the Product object. | Required if Supplier Recovery Contract Input property is passed in Connect API. | 61.0 |

## Code Examples

```
{
"claimIds":["0ZkSB00000002TF0AY"],
"contextDefinition":"ClaimDetails__stdctx",
"contextMapping":"ClaimDetailsMapping",
"conversionType":"Supplier Recovery Claim",
"supplierRecoveryProducts":[{"product2Id":"01tSB000000PXLlYAO","salesContractLineId":"0sLSB00000001Ab2AI"}]
}
```
