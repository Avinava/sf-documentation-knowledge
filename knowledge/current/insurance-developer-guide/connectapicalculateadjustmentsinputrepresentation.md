---
title: "ConnectApi.CalculateAdjustmentsInputRepresentation"
domain: insurance-developer-guide
topic: connectapicalculateadjustmentsinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:49.610Z
estimatedTokens: 130
keywords: [calculating, adjustments, claim, loss, items]
---

> Input representation for calculating adjustments for claim loss items.

# ConnectApi.CalculateAdjustmentsInputRepresentation

Input representation for calculating adjustments for claim loss items.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| claimedAmount | Double | Amount that's requested by the claimant when submitting the loss. | Required | 65.0 |
| benefitName | String | Name of the specific benefit or sub-coverage that's associated with the coverage, as defined in the product attribute mapping. | Optional | 66.0 |
