---
title: "Party Financial Asset Result"
domain: omnistudio
topic: party-financial-asset-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.674Z
keywords: [Party, Financial, Asset, Result]
---

# Party Financial Asset Result

# Party Financial Asset Result

Output representation of the party financial asset result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| applicantId | String | Applicant ID related to the party financial asset. | Small, 61.0 | 61.0 |
| createdById | String | ID of the user who created the record. | Small, 61.0 | 61.0 |
| createdDate | String | Date when the record was created. | Small, 61.0 | 61.0 |
| currencyIsoCode | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Small, 61.0 | 61.0 |
| customFields | Custom Fields Result[] | Custom fields related to the application form product. | Small, 61.0 | 61.0 |
| description | String | Description of the party financial asset. | Small, 61.0 | 61.0 |
| id | String | Unique identifier of the application form product. | Small, 61.0 | 61.0 |
| isLienExisting | Boolean | Indicate whether there’s a lien on the financial asset (true) or not (false). | Small, 61.0 | 61.0 |
| isReadOnly | Boolean | Indicates whether the party financial asset is read only (true) or not (false). | Small, 61.0 | 61.0 |
| lastModified​ById | String | ID of the user who last modified this record. | Small, 61.0 | 61.0 |
| lastModified​Date | String | Date and time when a user last modified this record. | Small, 61.0 | 61.0 |
| makeName | String | Make name of the asset. | Small, 61.0 | 61.0 |
| modelName | String | Model name of the asset. | Small, 61.0 | 61.0 |
| modelYear | String | Model year of the asset. | Small, 61.0 | 61.0 |
| name | String | Name of the application form product record. | Small, 61.0 | 61.0 |
| ownerId | String | ID of the user who owns this record. | Small, 61.0 | 61.0 |
| ownership​Percent | Double | Share owned by the party in percentage. | Small, 61.0 | 61.0 |
| ownershipStart​DateTime | String | Date and time when the ownership of the asset starts. | Small, 61.0 | 61.0 |
| ownershipType | String | Type of ownership for the application form product. | Small, 61.0 | 61.0 |
| partyFinancial​AssetAdditional​Owner | Party Financial Asset Additional Owner Result[] | Details of the additional owner associated to the party financial asset. | Small, 61.0 | 61.0 |
| partyFinancial​AssetLien | Party Financial Asset Lien Result[] | Details of the lien associated to the party financial asset. | Small, 61.0 | 61.0 |
| partyId | String | Party ID related to the party financial asset. | Small, 61.0 | 61.0 |
| partyProfileId | String | Party profile ID related to the party financial asset. | Small, 61.0 | 61.0 |
| payoffDueAmount | Double | Amount due to pay off the asset. | Small, 61.0 | 61.0 |
| pledgeAmount | Double | Amount the party pledges as collateral against a financial asset. | Small, 61.0 | 61.0 |
| purchaseAmount | Double | Amount the party paid for the financial asset. | Small, 61.0 | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Small, 61.0 | 61.0 |
| serialNumber | String | Serial number of the asset. | Small, 61.0 | 61.0 |
| sourceSystem​Identifier | String | Unique identifier of the asset in the external system. | Small, 61.0 | 61.0 |
| type | String | Type of the asset. | Small, 61.0 | 61.0 |
| usageType | String | Usage type of the asset. | Small, 61.0 | 61.0 |
| valuationAmount | Double | Worth of the asset after valuation. | Small, 61.0 | 61.0 |
| valuation​DateTime | String | Date and time of the valuation. | Small, 61.0 | 61.0 |
| verification​Status | String | Verification status of the party financial asset. | Small, 61.0 | 61.0 |