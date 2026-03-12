---
title: "Device Application Template DMO"
domain: data-cloud
topic: device-application-template-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.902Z
estimatedTokens: 758
keywords: [Device, Application, Template, DMO, Data, Cloud, data, model, reusable, standard, format, applications, exchange, information, between, devices., API, Name, Category, Primary]
---

# Device Application Template DMO

> The Device Application Template DMO is a Data Cloud data model object
		(DMO) for a reusable standard format for applications to exchange information between
		devices.

# Device Application Template DMO

The Device Application Template DMO is a Data Cloud data model object (DMO) for a reusable standard format for applications to exchange information between devices.

## Object API Name

ssot\_\_DeviceApplicationTemplate\_\_dlm

## Category

Other

## Primary Subject Area

Engagement

## Primary Key

Device Application Template ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Device Application Engagement | Engagement Asset | Many To One (N:1) | Device Application Template | Device Application Template ID |
| Email Engagement | Engagement Asset | Many To One (N:1) | Device Application Template | Device Application Template ID |
| Message Engagement | Engagement Asset | Many To One (N:1) | Device Application Template | Device Application Template ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Device Application Template ID | ssot__Id__c | A unique ID used as primary key for Device Application Template DMO. | text |
| Device ApplicationTemplate Body | ssot__DeviceApplicationTemplateBodyTxt__c | The text representation of device application message. | text |
| Engagement Asset Number | ssot__EngagementAssetNbr__c | A user-facing number to identify the engagement asset. | text |
| Engagement Asset Type | ssot__EngagementAssetTypeId__c | A reference ID to type of engagement asset, for example an email or phone template. | text |
| Engagement Message Type | ssot__EngagementMessageTypeId__c | A reference ID to type of engagement message, for example outbound, location entry, or beacon. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Message Format Type | ssot__MessageFormatTypeId__c | A reference ID to type of asset or template format, for example a landing page or application alert. | text |
| Parent Engagement Asset | ssot__ParentEngagementAssetId__c | A reference ID for primary engagement asset. This relationship enables engagement asset hierarchies. | text |
