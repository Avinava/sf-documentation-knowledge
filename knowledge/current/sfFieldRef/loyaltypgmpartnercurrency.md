---
title: "LoyaltyPgmPartnerCurrency"
domain: sfFieldRef
topic: loyaltypgmpartnercurrency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.218Z
estimatedTokens: 352
keywords: [LoyaltyPgmPartnerCurrency, junction, loyalty, program, partner, currency]
---

# LoyaltyPgmPartnerCurrency

> Represents a junction between a loyalty program partner and a loyalty program
         currency.

# LoyaltyPgmPartnerCurrency

Represents a junction between a loyalty program partner and a loyalty program currency.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyPgmPartnerCurrency in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccrualConversionFactor | Accrual Conversion Factor | double |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Loyalty Program Partner Currency ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyProgramCurrencyId | Currency ID | reference |  | 18 |  |  |
| LoyaltyProgramPartnerId | Loyalty Program Partner ID | reference |  | 18 |  |  |
| Name | Name | string |  | 40 |  |  |
| RedemptionConversionFactor | Redemption Conversion Factor | double |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
