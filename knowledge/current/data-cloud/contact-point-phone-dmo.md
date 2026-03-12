---
title: "Contact Point Phone DMO"
domain: data-cloud
topic: contact-point-phone-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.417Z
estimatedTokens: 1924
keywords: [Contact, Point, Phone, DMO, data, model, Data, Cloud, phone, number, party., Provided, both, Sales, Service, Kits., API, Name, Category, Primary]
---

# Contact Point Phone DMO

> The Contact Point Phone data model object (DMO) is a Data Cloud DMO for
		the phone number of a party. Provided in both the Sales and Service Data Kits.

# Contact Point Phone DMO

The Contact Point Phone data model object (DMO) is a Data Cloud DMO for the phone number of a party. Provided in both the Sales and Service Data Kits.

## Object API Name

ssot\_\_ContactPointPhone\_\_dlm

## Category

Other

## Primary Subject Area

Party

## Primary Key

Contact Point Phone ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field | Data Bundle |
| --- | --- | --- | --- | --- | --- |
| Account | Sales Phone | Many To One (N:1) | Contact Point Phone | Contact Point Phone ID | Service |
| Account Contact | Business Phone | Many To One (N:1) | Contact Point Phone | Contact Point Phone ID | Service |
| Contact Point Phone | Party | Many To One (N:1) | Individual | Individual ID | Sales, Service |
| Contact Point Phone | Contact Point Phone ID | One To One (1:1) | Contact Point Phone Identity Link | Contact Point Phone ID | Sales |
| Contact Point Phone | Party | Many To One (N:1) | Account | Account ID | Sales, Service |
| Contact Point Phone | Device ID | Many To One (N:1) | Device | Device ID | Financial Services Cloud |

## All Fields

| Field Name | Field API Name | Description | Data Type |  |
| --- | --- | --- | --- | --- |
| Active From Date | ssot__ActiveFromDate__c | The date the phone number is active. | dateTime | Sales, Service |
| Active To Date | ssot__ActiveToDate__c | The date the phone number is inactive. | dateTime | Sales, Service |
| Area Code | ssot__AreaCode__c | A phone number’s area code. | text | Sales, Service |
| Best Time To Contact End Time | ssot__BestTimeToContactEndTime__c | A contact’s preferred date and time to stop receiving calls. | dateTime | Sales, Service |
| Best Time To Contact Start Time | ssot__BestTimeToContactStartTime__c | A contact’s preferred date and time to start receiving calls. | dateTime | Sales, Service |
| Best Time to Contact Timezone | ssot__BestTimeToContactTimezone__c | The preferred timezone for the contact | text | Service |
| Best Time to Contact Timezone | ssot__BestTimeToContactTimezoneId__c | A reference ID for the contact’s preferred time zone. | text | Sales, Service |
| City Name | ssot__CityName__c | The city related to the phone number. | text | Sales, Service |
| Contact Point Phone ID | ssot__Id__c | A unique ID used as the primary key for the contact point phone DMO. | text | Sales, Service |
| Contact Point Type | ssot__ContactPointTypeId__c | A reference ID for the type of phone number, for example business or personal. | text | Sales, Service |
| Country | ssot__CountryId__c | A reference ID for the country related to the phone number. | text | Sales, Service |
| Country Name | ssot__CountryName__c | The country related to the phone number. | text | Sales, Service |
| Created Date | ssot__CreatedDate__c | The record’s creation date. | dateTime | Sales, Service |
| Data Source | ssot__DataSourceId__c | A reference ID for the system’s logical name that is the source of records identified by an external record ID. | text | Sales, Service |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record originated, whether that is a name of a cloud storage file or another connector’s external object. | text | Sales, Service |
| Device | ssot__DeviceId__c | A unique ID of the device where the phone number is associated. | text | Sales, Service |
| Extension number | ssot__Extensionnumber__c | An associated phone extension. | text | Sales, Service |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text | Sales, Service |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text | Sales, Service |
| For Business Use | ssot__ForBusinessUse__c | An indicator if the phone number is used for business use. | text | Sales, Service |
| For Personal Use | ssot__ForPersonalUse__c | An indicator if the phone number is used for personal use. | text | Sales, Service |
| Formatted E164 Phone number | ssot__FormattedE164Phonenumber__c | The number that is formatted according to e164 formatting, for example, +165012345678. | text | Sales, Service |
| Formatted International Phone number | ssot__FormattedInternationalPhonenumber__c | The number that is formatted according to international formatting, for example, +16 501-234-5678. | text | Sales, Service |
| Formatted National Phone number | ssot__FormattedNationalPhonenumber__c | The number that is formatted according to 3123 formatting, for example, 501 234 5678. | text | Sales, Service |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID for the business unit or other internal organization that owns the business account. | text | Sales, Service |
| Is Active | ssot__IsActive__c | Whether the phone number is active. | text | Sales, Service |
| Is Fax Capable | ssot__IsFaxCapable__c | Whether the phone number can receive a fax. | text | Sales, Service |
| Is SMS Capable | ssot__IsSMSCapable__c | Whether the phone number can send and receive SMS messages. | text | Sales, Service |
| Is Undeliverable | ssot__IsUndeliverable__c | Whether the phone number isn’t working. | text | Sales, Service |
| Is Verified | ssott_IsVerified__c | Indicates whether the phone number is verified. | Text | Financial Services Cloud |
| Is Voice Capable | ssot__IsVoiceCapable__c | Whether the phone number is voice over internet protocol (VOIP) capable. | text | Sales, Service |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime | Sales, Service |
| Party | ssot__PartyId__c | A reference ID for the parent party, for example, an individual, business, or affiliation group. This ID is the same as the one used in the individual object. | text | Sales, Service |
| Party Role | ssot__PartyRoleId__c | A reference ID for the associated party role, for example, a customer, supplier, or competitor. | text | Sales, Service |
| Phone Country Code | ssot__PhoneCountryCode__c | The phone number’s country code, for example, +1. | text | Sales, Service |
| Preference Rank | ssot__PreferenceRankNumber__c | The preference rank number for the contact point phone. | number | Service |
| Postal Code text | ssot__PostalCodetext__c | The contact’s postal code. | text | Sales, Service |
| Primary Flag | ssot__PrimaryFlag__c | Whether a phone number is the primary number of the individual or account. | text | Sales, Service |
| Primary Phone Type | ssot__PrimaryPhoneTypeId__c | The type of phone number, for example home, business, or fax. | text | Sales, Service |
| Profile First Created Date | ssot__ProfileFirstCreatedDate___c | The profile’s creation date. | dateTime | Sales, Service |
| Profile Last Updated Date | ssot__ProfileLastUpdatedDate__c | The date the profile was last updated. | dateTime | Sales, Service |
| Profile Occurrence Count | ssot__ProfileOccurrenceCount__c | The number of occurrences of the profile for the contact point address. | number | Sales, Service |
| Short Code | ssot__ShortCode__c | A number assigned to SMS and MMS messages. | text | Sales, Service |
| State Province text | ssot__StateProvincetext__c | The contact’s state or province. | text | Sales, Service |
| Phone number | ssot__Telephonenumber__c | The contact’s phone number. | text | Sales, Service |
| Timezone Code | ssot__TimezoneCode__c | A single-character code indicating the time zone’s relationship to Greenwich Mean Time (GMT). | text | Sales, Service |
| Usage Type | ssot__UsageType__c | The usage type for the contact point email. | text | Service |
