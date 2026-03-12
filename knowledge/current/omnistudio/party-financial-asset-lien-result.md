---
title: "Party Financial Asset Lien Result"
domain: omnistudio
topic: party-financial-asset-lien-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.476Z
estimatedTokens: 394
keywords: [Party, Financial, Asset, Lien, Result, Output, representation, lien, details, party, financial, asset]
---

# Party Financial Asset Lien Result

> Output representation of the lien details of the party financial asset .

# Party Financial Asset Lien Result

Output representation of the lien details of the party financial asset .

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdById | String | ID of the user who created the record. | Small, 61.0 | 61.0 |
| createdDate | String | Date when the record was created. | Small, 61.0 | 61.0 |
| currencyIsoCode | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Small, 61.0 | 61.0 |
| customFields | Custom Fields Result[] | Custom fields related to the application form product. | Small, 61.0 | 61.0 |
| id | String | Unique identifier of the lien associated to the party financial asset. | Small, 61.0 | 61.0 |
| isActive | Boolean | Indicates whether a record alert is active (true) or not (false). | Small, 61.0 | 61.0 |
| lastModified​ById | String | ID of the user who last modified this record. | Small, 61.0 | 61.0 |
| lastModified​Date | String | Date and time when a user last modified this record. | Small, 61.0 | 61.0 |
| lienAmount | Double | Amount of the lien. | Small, 61.0 | 61.0 |
| lienHolder | String | Holder of the lien. | Small, 61.0 | 61.0 |
| maturityDate | String | Maturity date of the lien. | Small, 61.0 | 61.0 |
| name | String | Name of the lien. | Small, 61.0 | 61.0 |
| partyFinancial​AssetId | String | Party financial asset associated with the lien. | Small, 61.0 | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Small, 61.0 | 61.0 |

## Related Topics

- Custom Fields Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_digital_lending_custom_fields_result.htm)
