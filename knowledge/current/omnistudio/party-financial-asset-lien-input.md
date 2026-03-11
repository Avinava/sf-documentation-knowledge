---
title: "Party Financial Asset Lien Input"
domain: omnistudio
topic: party-financial-asset-lien-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.391Z
keywords: [Party, Financial, Asset, Lien, Input]
---

# Party Financial Asset Lien Input

# Party Financial Asset Lien Input

Input representation of the lien details of the party financial asset.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Optional | 61.0 |
| customFields | Custom Fields Input[] | Custom fields related to the lien of the party financial asset. | Optional | 61.0 |
| isActive | Boolean | Indicates whether the lien is active (true) or not (false). | Optional | 61.0 |
| lienAmount | Double | Amount of the lien. | Optional | 61.0 |
| lienHolder | String | Name of the lien holder. | Optional | 61.0 |
| maturityDate | String | Maturity date of the lien. | Optional | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 61.0 |