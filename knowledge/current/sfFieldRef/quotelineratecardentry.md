---
title: "QuoteLineRateCardEntry"
domain: sfFieldRef
topic: quotelineratecardentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.213Z
estimatedTokens: 373
keywords: [QuoteLineRateCardEntry, catalog, negotiated, rates, usage, resource, associated, quote, line, item, that's, charge, overage, consumption, API]
---

# QuoteLineRateCardEntry

> Represents the catalog and negotiated rates of a usage resource associated
         with a quote line item that's used to charge overage consumption. This object is
      available in API version 62.0 and later.

# QuoteLineRateCardEntry

Represents the catalog and negotiated rates of a usage resource associated with a quote line item that's used to charge overage consumption. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see QuoteLineRateCardEntry in the Quote and Order Capture Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Quote Line Rate Card Entry ID | id |  | 18 |  |  |
| IsChosenRate | Chosen Rate | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NegotiatedRate | Negotiated Rate | double |  |  | 18 | 2 |
| QuoteLineItemId | Quote Line Item ID | reference |  | 18 |  |  |
| RateCardEntryId | Rate Card Entry ID | reference |  | 18 |  |  |
| RateCardId | Rate Card ID | reference |  | 18 |  |  |
| RateUnitOfMeasureId | Unit of Measure ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageResourceId | Usage Resource ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
