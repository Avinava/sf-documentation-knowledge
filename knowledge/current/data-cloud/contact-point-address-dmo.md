---
title: "Contact Point Address DMO"
domain: data-cloud
topic: contact-point-address-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.998Z
keywords: [Contact, Point, Address, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Contact Point Address DMO

# Contact Point Address DMO

The Contact Point Address data model object (DMO) is a Data CloudDMO based on the mailing address of a party. Provided in both the Sales and Service Data Kits.

## Object API Name

ssot\_\_ContactPointAddress\_\_dlm

## Category

Other

## Primary Subject Area

Party

## Primary Key

Contact Point Address ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field | Data Bundle |
| --- | --- | --- | --- | --- | --- |
| Account | Bill Contact Address | Many To One (N:1) | Contact Point Address | Contact Point Address ID | Service |
| Account Contact | Mailing Address | Many To One (N:1) | Contact Point Address | Contact Point Address ID | Service |
| Contact Point Address | Party | Many To One (N:1) | Individual | Individual ID | Sales, Service |
| Contact Point Address | Party | Many To One (N:1) | Account | Individual ID | Sales |
| Contact Point Address | Party | Many To One (N:1) | Account | Account ID | Service |
| Contact Point | Contact Point | Many To One (1:1) | Unified Link | Contact Point | Sales |

## All Fields

| Field Name | Field API Name | Description | Data Type | Data Bundle |
| --- | --- | --- | --- | --- |
| Active From Date | ssot__ActiveFromDate__c | The date from which the contact’s address is active. | dateTime | Sales, Service |
| Active To Date | ssot__ActiveToDate__c | The date the contact’s address becomes inactive. | dateTime | Sales, Service |
| Address | ssot__AddressLineId__c | A reference ID for the contact’s address. | text | Sales, Service |
| Address Line 1 | ssot__AddressLine1__c | The first line of the address, including the street name and number. | text | Sales, Service |
| Address Line 2 | ssot__AddressLine2__c | The second line of an address, for example, a suite number. | text | Sales, Service |
| Address Line 3 | ssot__AddressLine3__c | The third line of an address. | text | Sales, Service |
| Address Line 4 | ssot__AddressLine4__c | The fourth line of an address. | text | Sales, Service |
| Best Time To Contact End Time | ssot__BestTimeToContactEndTime__c | A contact’s preferred date and time to stop receiving communication. | dateTime | Sales, Service |
| Best Time To Contact Start Time | ssot__BestTimeToContactStartTime__c | A contact’s preferred date and time to start receiving communication. | dateTime | Sales, Service |
| Best Time to Contact Timezone | ssot__BestTimeToContactTimezoneId__ | A reference ID to the contact’s preferred time zone. | text | Sales, Service |
| City | ssot__CityId__c | The reference ID of a city, town, or village. | text | Sales, Service |
| City Name | ssot__CityName__c | The name of a city, town, or village. | text |  |
| Contact Point Address ID | ssot__Id__c | A unique ID used as the primary key for the contact point address DMO. | text | Sales, Service |
| Contact Point Type | ssot__ContactPointTypeId__c | A reference ID to the contact type. | text | Sales, Service |
| Country | ssot__CountryId__c | The reference ID of the country where the address is located. | text | Sales, Service |
| Country Name | ssot__CountryName__c | The country where the address is located. | text | Sales, Service |
| Country Region | ssot__CountryRegionId__c | A reference ID for the country or region where the address is located. | text | Sales, Service |
| Created Date | ssot__CreatedDate__c | The record’s creation date. | dateTime | Sales, Service |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name of a system that is the source of records identified by an external record ID. | text | Sales, Service |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, for example, a name of a cloud storage file or another connector’s external object. | text | Sales, Service |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text | Sales, Service |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text | Sales, Service |
| For Business Use | ssot__ForBusinessUse__c | Whether the address is for business use. | text | Sales, Service |
| For Personal Use | ssot__ForPersonalUse__c | Whether the address is for personal use. | text | Sales, Service |
| Geo Accuracy | ssot__GeoAccuracy__c | Additional information about an address’ latitude and longitude. | number | Sales, Service |
| Geocode Accuracy Type | ssot__GeocodeAccuracyType__c | The geographic code accuracy type for the contact point. | number | Service |
| Geo Latitude | ssot__GeoLatitude__c | The address’ geographical latitude. | number | Sales, Service |
| Geo Longitude | ssot__GeoLongitude__c | The address’ geographical longitude. | number | Sales, Service |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID for the business unit or other internal organization that owns the business account. | text | Sales, Service |
| Is Active | ssot__IsActive__c | Whether the address is active. | text | Sales, Service |
| Is Undeliverable | ssot__IsUndeliverable__c | Whether the address is undeliverable. | text | Sales, Service |
| Is Used For Billing | ssot__IsUsedForBilling__c | Whether the address is the contact’s billing address. | text | Sales, Service |
| Is Used For Mailing | ssot__IsUsedForMailing__c | Whether the contact point address can be used for mailing. | text | Service |
| Is Used For Shipping | ssot__IsUsedForShipping__c | Whether the address is the contact’s shipping address. | text | Sales, Service |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime | Sales, Service |
| Party | ssot__PartyId__c | A reference ID to the parent party, for example, an individual, business, or affiliation group. This ID is the same as the one used in the individual object. | text | Sales, Service |
| Party Role | ssot__PartyRoleId__c | A reference ID to the associated party role, for example, a customer, supplier, or competitor. | text | Sales, Service |
| Physical Location | ssot__PhysicalLocationId__c | A reference ID to the physical location of the address. | text | Sales, Service |
| Postal Code | ssot__PostalCodeId__c | The reference ID for the postal code. | text | Sales, Service |
| Postal Code text | ssot__PostalCodetext__c | The contact’s postal code. | text | Sales, Service |
| Preference Rank | ssot__PreferenceRankNumber__c | The preference rank number for the contact point address. | number | Service |
| Primary Contact Phone | ssot__ContactPhoneId__c | A reference ID for the primary phone number for this address. | text | Sales, Service |
| Primary Flag | ssot__PrimaryFlag__c | Indicates whether the address is the primary address of the individual or account. | text | Sales, Service |
| Profile First Created Date | ssot__ProfileFirstCreatedDate___c | The date the profile was created. | dateTime | Sales, Service |
| Profile Last Updated Date | ssot__ProfileLastUpdatedDate__c | The date the profile was last updated. | dateTime | Sales, Service |
| Profile Occurrence Count | ssot__ProfileOccurrenceCount__c | The number of occurrences of the profile for the contact point address. | number | Sales, Service |
| State Province | ssot__StateProvinceId__c | The reference ID for the state or province where the address is located. | text | Sales, Service |
| State Province Name | ssot__StateProvinceName__c | The state or province where the address is located. | text | Sales, Service |
| Timezone Code | ssot__TimezoneCode__c | A single-character code indicating the time zone’s relationship to Greenwich Mean Time (GMT). | text | Sales, Service |
| Usage Type | ssot__UsageType__c | The usage type for the contact point address. | text | Service |