---
title: "SalesChannel"
domain: sfFieldRef
topic: saleschannel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.874Z
estimatedTokens: 425
keywords: [SalesChannel, origin, order, web, storefront, physical, store, marketplace, mobile, app, integrate, Salesforce, Management, B2C, Commerce]
---

# SalesChannel

> Represents the origin of an order. For example, a web storefront, physical
      store, marketplace, or mobile app. If you integrate Salesforce Order Management with
      Salesforce B2C Commerce, set up a SalesChannel corresponding to each Site in your B2C Commerce
      implementation.

# SalesChannel

Represents the origin of an order. For example, a web storefront, physical store, marketplace, or mobile app. If you integrate Salesforce Order Management with Salesforce B2C Commerce, set up a SalesChannel corresponding to each Site in your B2C Commerce implementation.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SalesChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_saleschannel.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| ExternalChannelNumber | External Channel Number | string |  | 255 |  |  |
| Id | Sales Channel ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SalesChannelName | Sales Channel Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |
| TypeCategory | Type Category | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
