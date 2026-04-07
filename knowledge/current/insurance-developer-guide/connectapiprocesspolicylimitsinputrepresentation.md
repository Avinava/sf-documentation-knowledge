---
title: "ConnectApi.ProcessPolicyLimitsInputRepresentation"
domain: insurance-developer-guide
topic: connectapiprocesspolicylimitsinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:50.067Z
estimatedTokens: 152
keywords: [processing, policy, limits, claim, loss, item]
---

> Input representation for processing policy limits for a claim loss item.

# ConnectApi.ProcessPolicyLimitsInputRepresentation

Input representation for processing policy limits for a claim loss item.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| adjustedAmount | Double | Amount after adjustments are made based on the current standings of the policy limits. | Optional | 65.0 |
| benefitName | String | Name of the specific benefit or sub-coverage that the loss item applies to. | Optional | 65.0 |
| limitUnitCount | Integer | Unit count that the payment detail represents.Default value is 1. | Optional | 65.0 |
