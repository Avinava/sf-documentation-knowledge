---
title: "CartValidationOutput"
domain: sfFieldRef
topic: cartvalidationoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.600Z
estimatedTokens: 418
keywords: [CartValidationOutput, Associate, errors, cart, entities, line, items, delivery, groups, store, built, B2B, Commerce, D2C, error]
---

# CartValidationOutput

> Associate errors to cart entities, such as cart line items, delivery
         groups, and the like, in a store built with B2B Commerce or D2C Commerce. An example error
         is “Out of stock.” Available in API version 49.0 and later.

# CartValidationOutput

Associate errors to cart entities, such as cart line items, delivery groups, and the like, in a store built with B2B Commerce or D2C Commerce. An example error is “Out of stock.” Available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CartValidationOutput](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_cartvalidationoutput.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BackgroundOperationId | Background Operation ID | reference |  | 18 |  |  |
| CartId | Cart ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Cart Message ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDismissed | Is Dismissed | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Level | Level | picklist |  | 255 |  |  |
| Message | Message | string |  | 255 |  |  |
| Name | Cart Validation Output | string |  | 255 |  |  |
| RelatedEntityId | Cart Delivery Group ID or Cart Item ID or Web Cart ID | reference |  | 18 |  |  |
| RelatedEntityPrefix | Related Entity Prefix | string |  | 3 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
