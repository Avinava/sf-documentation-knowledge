---
title: "Operating Hours DMO"
domain: data-cloud
topic: operating-hours-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.788Z
keywords: [Operating, Hours, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Operating Hours DMO

# Operating Hours DMO

The Operating Hours DMO is a Data Cloud data model object (DMO) for when a business or business function is available for use.

## Object API Name

ssot\_\_OperatingHours\_\_dlm

## Category

Other

## Primary Subject Area

## Primary Key

Email Message ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Case | Case Support Working Hours | Many To One: N:1 | Operating Hours | Operating Hours ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The operating hours description. | text |
| Friday End Time | ssot__Friday_EndTime__c | The time operating hours end on Friday. | text |
| Friday Start Time | ssot__Friday_StartTime__c | The time operating hours start on Friday. | text |
| Hours Type | ssot__HoursType__c | The type for the operating hours. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the operating hour. | text |
| Is Active | ssot__IsActive__c | An indicator if the operating hours are active. | text |
| Is Default | ssot__IsDefault__c | An indicator if the operating hours are the default. | text |
| Is Time Slots Used | ssot__IsTimeSlotsUsed__c | An indicator if the operating hours time slots are used. | text |
| Monday End Time | ssot__Monday_EndTime__c | The time operating hours end on Monday. | text |
| Monday Start Time | ssot__Monday_StartTime__c | The time operating hours start on Monday. | text |
| Name | ssot__Name__c | The name for the operating hours. | text |
| Operating Hours Id | ssot__Id__c | A unique ID used as the primary key for the operating hours DMO. | text |
| Saturday End Time | ssot__Saturday_EndTime__c | The time operating hours end on Saturday. | text |
| Saturday Start Time | ssot__Saturday_StartTime__c | The time operating hours start on Saturday. | text |
| Sunday End Time | ssot__Sunday_EndTime__c | The time operating hours end on Sunday. | text |
| Sunday Start Time | ssot__Sunday_StartTime__c | The time operating hours start on Sunday. | text |
| Thursday End Time | ssot__Thursday_EndTime__c | The time operating hours end on Thursday. | text |
| Thursday Start Time | ssot__Thursday_StartTime__c | The time operating hours start on Thursday. | text |
| Time Zone | ssot__TimeZone__c | The timezone for the operating hours. | text |
| Tuesday End Time | ssot__Tuesday_EndTime__c | The time operating hours end on Tuesday. | text |
| Tuesday Start Time | ssot__Tuesday_StartTime__c | The time operating hours start on Tuesday. | text |
| Wednesday End Time | ssot__Wednesday_EndTime__c | The time operating hours end on Wednesday. | text |
| Wednesday Start Time | ssot__Wednesday_StartTime__c | The time operating hours start on Wednesday. | dateTime |