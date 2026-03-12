---
title: "OpenActivity"
domain: sfFieldRef
topic: openactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.442Z
estimatedTokens: 697
keywords: [OpenActivity, read-only, open, activities—future, events, tasks—related, includes, activities, contacts, phone, calls, organization, uses, Salesforce, CRM]
---

# OpenActivity

> This read-only object is displayed in a related list of open
   activities—future events and open tasks—related to an object. It includes
   activities for all contacts related to the object. OpenActivity fields for phone calls are only
   available if your organization uses Salesforce CRM Call Center.

# OpenActivity

This read-only object is displayed in a related list of open activities—future events and open tasks—related to an object. It includes activities for all contacts related to the object. OpenActivity fields for phone calls are only available if your organization uses Salesforce CRM Call Center.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OpenActivity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_openactivity.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActivityDate | Date | date |  |  |  |  |
| ActivityDateTime | Time | datetime |  |  |  |  |
| ActivitySubtype | Activity Subtype | picklist |  | 40 |  |  |
| ActivityType | Type | picklist |  | 40 |  |  |
| AlternateDetailId | Email Message ID | reference |  | 18 |  |  |
| CallDisposition | Call Result | string |  | 255 |  |  |
| CallDurationInSeconds | Call Duration | int | 8 |  |  |  |
| CallObject | Call Object Identifier | string |  | 255 |  |  |
| CallType | Call Type | picklist |  | 40 |  |  |
| CompletedDateTime | Completed Date/Time | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Comments | textarea |  | 32000 |  |  |
| DurationInMinutes | Duration | int | 9 |  |  |  |
| EndDateTime | End | datetime |  |  |  |  |
| Id | Activity ID | id |  | 18 |  |  |
| IsAllDayEvent | All-Day Event | boolean |  |  |  |  |
| IsClosed | Closed | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsHighPriority | High Priority | boolean |  |  |  |  |
| IsReminderSet | Reminder Set | boolean |  |  |  |  |
| IsTask | Task | boolean |  |  |  |  |
| IsVisibleInSelfService | Public | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Location | Location | string |  | 80 |  |  |
| OwnerId | Assigned To ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 20 |  |  |
| ReminderDateTime | Reminder Date/Time | datetime |  |  |  |  |
| StartDateTime | Start | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| Subject | Subject | combobox |  | 80 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WhatId | Related To ID | reference |  | 18 |  |  |
| WhoId | Name ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
