---
title: "ConnectApi.CalculateAdjustmentsInputRepresentation"
domain: insurance-developer-guide
topic: connectapicalculateadjustmentsinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.089Z
estimatedTokens: 130
keywords: [Input, representation, calculating, adjustments, claim, loss, items]
---

# ConnectApi.CalculateAdjustmentsInputRepresentation

> Input representation for calculating adjustments for claim loss items.

# ConnectApi.CalculateAdjustmentsInputRepresentation

Input representation for calculating adjustments for claim loss items.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| claimedAmount | Double | Amount that's requested by the claimant when submitting the loss. | Required | 65.0 |
| benefitName | String | Name of the specific benefit or sub-coverage that's associated with the coverage, as defined in the product attribute mapping. | Optional | 66.0 |
