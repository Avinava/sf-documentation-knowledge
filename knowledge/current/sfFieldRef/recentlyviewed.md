---
title: "RecentlyViewed"
domain: sfFieldRef
topic: recentlyviewed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.702Z
estimatedTokens: 386
keywords: [RecentlyViewed, records, views, current, user, recently, viewed, referenced, viewing, record, API, version, 29.0, later]
---

# RecentlyViewed

> Represents records or list views that the current user has recently
   viewed or referenced (by viewing a related record). List views are available in API version 29.0
   and later.

# RecentlyViewed

Represents records or list views that the current user has recently viewed or referenced (by viewing a related record). List views are available in API version 29.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [RecentlyViewed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_recentlyviewed.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Salesforce Knowledge Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Alias | Alias | string |  | 8 |  |  |
| Email | Email | email |  | 80 |  |  |
| FirstName | First Name | string |  | 40 |  |  |
| Id | Recently Viewed ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| Language | Language | picklist |  | 40 |  |  |
| LastName | Last Name | string |  | 80 |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NameOrAlias | Name or Alias | string |  | 80 |  |  |
| Phone | Phone | phone |  | 40 |  |  |
| ProfileId | Profile ID | reference |  | 18 |  |  |
| RecordTypeId | Record Type ID | reference |  | 18 |  |  |
| Title | Title | string |  | 80 |  |  |
| Type | Type | picklist |  | 40 |  |  |
| UserRoleId | Role ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
