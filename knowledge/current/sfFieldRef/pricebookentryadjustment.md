---
title: "PricebookEntryAdjustment"
domain: sfFieldRef
topic: pricebookentryadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.614Z
estimatedTokens: 277
keywords: [PricebookEntryAdjustment, Read-only, junction, created, associate, price, adjustment, schedule, book, entry]
---

# PricebookEntryAdjustment

> Read-only junction object created when you associate a price adjustment
      schedule with a price book entry.

# PricebookEntryAdjustment

Read-only junction object created when you associate a price adjustment schedule with a price book entry.

For more information, see PricebookEntryAdjustment in the Object Reference for Salesforce and Lightning Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Price Book Entry Adjustment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsLocked | Is Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MayEdit | May Edit | boolean |  |  |  |  |
| Name | Price Book Entry Adjustment Name | string |  | 255 |  |  |
| PriceAdjustmentScheduleId | Price Adjustment Schedule ID | reference |  | 18 |  |  |
| PricebookEntryId | Price Book Entry ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
