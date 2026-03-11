---
title: "Party Financial Asset Input"
domain: omnistudio
topic: party-financial-asset-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.389Z
keywords: [Party, Financial, Asset, Input]
---

# Party Financial Asset Input

# Party Financial Asset Input

Input representation of the details of the party financial asset.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Optional | 61.0 |
| customFields | Custom Fields Input[] | Custom fields related to the party financial asset. | Optional | 61.0 |
| description | String | Description of the party financial asset. | Optional | 61.0 |
| isLienExisting | Boolean | Indicates whether there is a lien on the financial asset (true) or not (false). | Optional | 61.0 |
| isReadOnly | Boolean | Indicates whether the party financial asset is read only (true) or not (false). | Optional | 61.0 |
| makeName | String | Make name of the asset. | Optional | 61.0 |
| modelName | String | Model name of the asset. | Optional | 61.0 |
| modelYear | String | Model year of the asset. | Optional | 61.0 |
| ownership​Percent | Double | Share owned by the party in percentage. | Optional | 61.0 |
| ownershipStart​DateTime | String | Date and time when the ownership of the asset starts. | Optional | 61.0 |
| ownershipType | String | Type of ownership for the asset. | Optional | 61.0 |
| partyFinancial​AssetAdditional​Owner | Party Financial Asset Additional Owner Input[] | Details of the additional owner associated to the party financial asset. | Optional | 61.0 |
| partyFinancial​AssetLien | Party Financial Asset Lien[] | Details of the lien associated to the party financial asset. | Optional | 61.0 |
| payoffDue​Amount | Double | Amount due to pay off the asset. | Optional | 61.0 |
| pledgeAmount | Double | Amount the party pledges as collateral against a financial asset. | Optional | 61.0 |
| purchaseAmount | Double | Amount the party paid for the financial asset. | Optional | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 61.0 |
| relatedPerson | String | Indicates whether to associate the record to an Applicant or Party Profile record. | Required | 61 |
| serialNumber | String | Serial number of the asset. | Optional | 61.0 |
| sourceSystem​Identifier | String | Unique identifier of the asset in the external system. | Optional | 61.0 |
| type | String | Type of the asset. | Optional | 61.0 |
| usageType | String | Usage type of the asset. | Required | 61.0 |
| valuationAmount | Double | Worth of the asset after valuation. | Required | 61.0 |
| valuationDate​Time | String | Date and time when the asset valuation was done. | Optional | 61.0 |
| verification​Status | String | Verification status of the party financial asset. | Optional | 61.0 |