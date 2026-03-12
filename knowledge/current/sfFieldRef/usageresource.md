---
title: "UsageResource"
domain: sfFieldRef
topic: usageresource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.871Z
estimatedTokens: 429
keywords: [UsageResource, entitlement, granted, user, party, provider, data, storage, computing, power, bandwidth, any, product, service, Additionally]
---

# UsageResource

> Represents an entitlement granted to a user or party by a provider,
         such as data storage, computing power, bandwidth, or any other product or service.
         Additionally, this object is used to represent resources consumed over time. This
      object is available in API version 62.0 and later.

# UsageResource

Represents an entitlement granted to a user or party by a provider, such as data storage, computing power, bandwidth, or any other product or service. Additionally, this object is used to represent resources consumed over time. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see UsageResource in the Usage Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Category | Category | picklist |  | 255 |  |  |
| Code | Code | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DefaultUnitOfMeasureId | Unit of Measure ID | reference |  | 18 |  |  |
| Description | Description | string |  | 255 |  |  |
| Id | Usage Resource ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitOfMeasureClassId | Unit of Measure Class ID | reference |  | 18 |  |  |
| UsageDefinitionProductId | Product ID | reference |  | 18 |  |  |
| UsageResourceBillingPolicyId | Usage Aggregation Policy ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
