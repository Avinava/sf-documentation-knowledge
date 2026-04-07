---
title: "ConnectApi.RecalculateAdjustmentsInputRep"
domain: insurance-developer-guide
topic: connectapirecalculateadjustmentsinputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:50.072Z
estimatedTokens: 117
keywords: [recalculating, adjustments, payment]
---

> Input representation for recalculating the adjustments for existing payment details.

# ConnectApi.RecalculateAdjustmentsInputRep

Input representation for recalculating the adjustments for existing payment details.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| claimedAmount | Double | Amount requested by the claimant when submitting the loss. | Optional | 66.0 |
| paymentDetailId | String | ID of the claim coverage payment detail for recalculating adjustments. | Optional | 66.0 |
