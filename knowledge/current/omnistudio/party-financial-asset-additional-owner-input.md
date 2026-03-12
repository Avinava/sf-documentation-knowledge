---
title: "Party Financial Asset Additional Owner Input"
domain: omnistudio
topic: party-financial-asset-additional-owner-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.544Z
estimatedTokens: 326
keywords: [Party, Financial, Asset, Additional, Owner, Input, representation]
---

# Party Financial Asset Additional Owner Input

> Input representation of the details of the additional owner of the party financial
    asset.

# Party Financial Asset Additional Owner Input

Input representation of the details of the additional owner of the party financial asset.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Account associated with the additional owner. | Optional | 61.0 |
| applicantId | String | Applicant associated with the additional owner of the financial asset. | Optional | 61.0 |
| contactId | String | Contact associated with the additional owner. | Optional | 61.0 |
| currencyIsoCode | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Optional | 61.0 |
| customFields | Custom Fields Input[] | Custom fields related to the additional owner of the party financial asset. | Optional | 61.0 |
| ownershipShare​Percent | Double | Percentage of the asset ownership between the primary and additional owner. | Optional | 61.0 |
| partyProfileId | String | Party profile associated with the additional owner of the financial asset. | Optional | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 61.0 |
| sourceSystem​Identifier | String | Unique identifier of the record in an external system. | Optional | 61.0 |

## Related Topics

- Custom Fields Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_digital_lending_custom_fields_input.htm)
