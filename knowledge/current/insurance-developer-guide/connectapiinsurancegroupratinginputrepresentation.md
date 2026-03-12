---
title: "ConnectApi.InsuranceGroupRatingInputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancegroupratinginputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.266Z
estimatedTokens: 151
keywords: [Input, representation, rating, group, benefits, quote]
---

# ConnectApi.InsuranceGroupRatingInputRepresentation

> Input representation for rating a group benefits quote.

# ConnectApi.InsuranceGroupRatingInputRepresentation

Input representation for rating a group benefits quote.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| batchSize | Integer | Number of records to process in each batch for the rating calculation. | Optional | 65.0 |
| quoteLineItemIds | List<String> | List of quote line item IDs to be included in the rating process. | Optional | 65.0 |
| ratingDate | String | Date to use for the rating calculation. If not specified, the API uses the effective date of the quote. | Optional | 65.0 |
