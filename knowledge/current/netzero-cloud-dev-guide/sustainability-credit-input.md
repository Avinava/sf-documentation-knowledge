---
title: "Sustainability Credit Input"
domain: netzero-cloud-dev-guide
topic: sustainability-credit-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.269Z
estimatedTokens: 400
keywords: [Sustainability, Credit, Input, representation, associated, carbon, project]
---

# Sustainability Credit Input

> Input representation of the sustainability credit associated with the
      carbon credit project.

# Sustainability Credit Input

Input representation of the sustainability credit associated with the carbon credit project.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| costPerUnit | Double | The cost of the credits for each unit of emissions. | Optional | 57.0 |
| crbnCreditProjectId | String | The carbon credit project that's associated with the sustainability credit. | Required | 57.0 |
| creditsIssueDate | String | The date when the credits were issued. | Optional | 57.0 |
| creditsPurchased | Double | The credits that are purchased by the organization. | Required | 57.0 |
| creditsRetiredDate | String | The date when the credits are retired from the registry. | Optional | 57.0 |
| creditsUnit | String | The unit of measure for the credits. | Required | 57.0 |
| description | String | The description of the carbon credit project. | Optional | 57.0 |
| externalIdentifier | String | The external identifier of the data that is imported for the carbon credit project. | Required | 57.0 |
| purchaseDate | String | The date when the sustainability credits were purchased. | Optional | 57.0 |
| status | String | Specifies the status of the sustainability credit.Possible values are:RetiredTransferredHeldbySeller | Optional | 57.0 |
| sustainabilityPurchaseId | String | The sustainability purchase record that's associated with the purchase of sustainability credits, such as carbon credits. | Required | 57.0 |
| vintageYear | String | The year when the sustainability credits were issued. | Optional | 57.0 |
