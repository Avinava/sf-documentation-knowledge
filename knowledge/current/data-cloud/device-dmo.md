---
title: "Device DMO"
domain: data-cloud
topic: device-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.910Z
estimatedTokens: 749
keywords: [Device, DMO, data, model, Data, Cloud, specific, electronic, unit, want, track, signals, example, refrigerator, watch, car., API, Name, Category, Primary]
---

# Device DMO

> The Device data model object (DMO) is a Data Cloud DMO for a specific
		electronic unit that you want to track signals from, for example, a refrigerator, watch, or
		car.

# Device DMO

The Device data model object (DMO) is a Data Cloud DMO for a specific electronic unit that you want to track signals from, for example, a refrigerator, watch, or car.

## Object API Name

ssot\_\_Device\_\_dlm

## Category

Other

## Primary Subject Area

Engagement

## Primary Key

Device Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Contact Point App | Device | Many To One (N:1) | Device | Device ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Advertiser Id | ssot__AdvertiserId__c | A reference ID for the advertiser that owns the device or that is the source of the device record. | text |
| Created Date | ssot__CreatedDate__c | The record’s creation date. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the system’s logical name that is the source of records identified by an external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for an object’s logical name where this record originated, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Device Id | ssot__Id__c | A unique ID used as the primary key for the device DMO. | text |
| Device Number | ssot__DeviceNumber__c | A number assigned to the device. | text |
| Device System Token | ssot__DeviceSystemTokentext__c | A token assigned to the device that uniquely identifies the device from the perspective of the operating system. | text |
| Device Type | ssot__DeviceTypeId__c | The reference ID for the type of device. | text |
| DeviceEndPoints relationship | ssot__DeviceEndPoints__c | The device’s end points. | text |
| DeviceUserSessions relationship | ssot__DeviceUserSessions__c | The device’s user sessions. | text |
| External Record Id | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source Id | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| GCM Sender Id | ssot__GCMSenderId__c | A reference ID assigned to the device in Google Cloud Messaging (GCM). | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the data record. | text |
| Language | ssot__LanguageId__c | The device’s operating language. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Manufacturer Name | ssot__ManufacturerName__c | The device’s manufacturer name. | text |
| Model Name | ssot__ModelName__c | The device’s model name. | text |
| Name | ssot__Name__c | The name of the device. | text |
| OS Name | ssot__OSName__c | The device’s operating system name. | text |
| OS Version | ssot__OSVersionNumber__c | The operating system version number for the device’s OS. | text |
