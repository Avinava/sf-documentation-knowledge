---
title: "CalendarView"
domain: sfFieldRef
topic: calendarview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.106Z
estimatedTokens: 477
keywords: [CalendarView, calendars, created, assigned, users, creator, include, shared, resource, user, represent, calendar, Salesforce, either, standard]
---

# CalendarView

> These calendars can be created and assigned to users other than the
         creator. Available calendars include object, shared, public, resource, and user list
         calendars. Object calendars represent a calendar based on a Salesforce object, either
         standard or custom. This object is available in API version 51.0 and
      later.

# CalendarView

These calendars can be created and assigned to users other than the creator. Available calendars include object, shared, public, resource, and user list calendars. Object calendars represent a calendar based on a Salesforce object, either standard or custom. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CalendarView](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_calendarview.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Color | Color | string |  | 6 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DateHandlingType | Date Handling Type | picklist |  | 255 |  |  |
| DisplayField | Display Field | string |  | 255 |  |  |
| EndField | End Field | string |  | 255 |  |  |
| FillPattern | Fill Pattern | string |  | 50 |  |  |
| Id | Calendar ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDisplayed | Is Displayed | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ListViewFilterId | List View ID | reference |  | 18 |  |  |
| Name | Calendar Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PublisherId | Publisher ID | reference |  | 18 |  |  |
| SobjectType | sObject Type | picklist |  | 255 |  |  |
| StartField | Start Field | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
