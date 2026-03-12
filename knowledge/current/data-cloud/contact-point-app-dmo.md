---
title: "Contact Point App DMO"
domain: data-cloud
topic: contact-point-app-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.379Z
estimatedTokens: 1188
keywords: [Contact, Point, App, DMO, Data, Cloud, data, model, software, application, party, specific, device., API, Name, Category, Primary, Subject, Area, Key]
---

# Contact Point App DMO

> The Contact Point App DMO is a Data Cloud data model object for the software
		application of a party on a specific device.

# Contact Point App DMO

The Contact Point App DMO is a Data Cloud data model object for the software application of a party on a specific device.

## Object API Name

ssot\_\_ContactPointApp\_\_dlm

## Category

Other

## Primary Subject Area

Party

## Primary Key

Contact Point App ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Contact Point App | Party | Many To One (N:1) | Individual | Individual ID |
| Contact Point App | Device | Many To One (N:1) | Device | Device ID |
| Contact Point App | Contact Point App ID | One To One (1:1) | Contact Point App Identity Link | Contact Point App ID |
| Contact Point App | Party | Many To One (N:1) | Account | Account ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Active From Date | ssot__ActiveFromDate__c | The date the app is active. | dateTime |
| Active To Date | ssot__ActiveToDate__c | The date the app is inactive. | dateTime |
| Application Login ID | ssot__ApplicationLoginId__c | The unique ID used to log in to the application. | text |
| Asset Type ID | ssot__AssetTypeId__c | A reference ID to the type of asset on which the application is present. | text |
| Badge Count | ssot__BadgeCount__c |  | text |
| Best Time To Contact End Time | ssot__BestTimeToContactEndTime__c | A contact’s preferred date and time to stop receiving communications. | dateTime |
| Best Time To Contact Start Time | ssot__BestTimeToContactStartTime__c | A contact’s preferred date and time to start receiving communication. | dateTime |
| Best Time to Contact Timezone | ssot__BestTimeToContactTimezoneId__c | A reference ID to the contact’s preferred time zone. | text |
| Contact Point App ID | ssot__Id__c | A unique ID used as the primary key for the contact point app DMO. | text |
| Contact Point Type | ssot__ContactPointTypeId__c | A reference ID to the type of contact. | text |
| Cookie ID | ssot__CookieIdtext__c | An identifier that is specific to a cookie generated in a web browser for a particular application. | text |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Device | ssot__DeviceId__c | A unique ID of a device. | text |
| Device End Point | ssot__DeviceEndPointId__c | The ID for the device’s end point. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| For Business Use | ssot__ForBusinessUse__c | An indicator if the app is used for business use. | text |
| For Personal Use | ssot__ForPersonalUse__c | An indicator if the app is used for personal use. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Is Active | ssot__IsActive__c | An indicator if the app is active. | text |
| Is Undeliverable | ssot__IsUndeliverable__c | An indicator if the app is undeliverable. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Party | ssot__PartyId__c | A reference ID to the parent party, for example, an individual, business, or affiliation group.TipThis ID is the same as the one used in the individual object. | text |
| Party Role | ssot__PartyRoleId__c | A reference ID to the associated party role, for example, a customer, supplier, or competitor. | text |
| Primary Flag | ssot__PrimaryFlag__c | An indicator if the phone number is the primary phone number of the individual or account. | text |
| Profile First Created Date | ssot__ProfileFirstCreatedDate___c | The date the profile was created. | dateTime |
| Profile Last Updated Date | ssot__ProfileLastUpdatedDate__c | The date the profile was last updated. | dateTime |
| Profile Occurrence Count | ssot__ProfileOccurrenceCount__c |  | number |
| Software Application | ssot__SoftwareApplicationId__c | The reference ID to the application the contact point represents. | text |
| Timezone Code | ssot__TimezoneCode__c | A single-character code indicating the time zone's relationship to Greenwich Mean Time (GMT). | text |
