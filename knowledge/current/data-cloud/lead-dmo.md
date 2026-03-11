---
title: "Lead DMO"
domain: data-cloud
topic: lead-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.543Z
keywords: [Lead, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Lead DMO

# Lead DMO

The Lead data model object (DMO) is a Data Cloud DMO for a person or company that shows interest in a company’s products or services.

## Object API Name

ssot\_\_Lead\_\_dlm

## Category

Profile

## Primary Subject Area

Party

## Primary Key

Lead ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Lead | Contact Point Email | Many to One (N:1) | Contact Point Email | Contact Point Email ID |
| Lead | Contact Point Phone | Many to One (N:1) | Contact Point Phone | Contact Point Phone ID |
| Lead | Converted to Account | Many to One (N:1) | Account | Account ID |
| Lead | Converted to AccountContact | Many to One (N:1) | Account Contact | Account Contact ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Annual Revenue | ssot__AnnualRevenue__c | The annual revenue for the lead’s company. | number |
| City | ssot__City__c | The city of the lead’s address. | text |
| Company Name | ssot__CompanyName__c | The lead’s company name. | text |
| Contact Address | ssot__ContactAddressId__c | The reference ID of the lead’s address. | text |
| Contact Point Email | ssot__ContactPointEmailId__c | The reference ID of the lead’s email address. | text |
| Converted Date | ssot__ConvertedDate__c | The date that the lead was converted. | dateTime |
| Converted To Account | ssot__ConvertedToAccountId__c | The reference ID that points to the account into which the lead has been converted. | text |
| Converted To AccountContact | ssot__ConvertedToAccountContactId__c | The reference ID that points to the account contact into which the lead has been converted. | text |
| Converted To Opportunity | ssot__ConvertedToOpportunityId__c | The reference ID that points to the opportunity into which the lead has been converted. | text |
| Country | ssot__CountryId__c | The reference ID of the country where the address is located. | text |
| Country Name | ssot__CountryName__c | The free text name of the country where the address is located. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Currency | ssot__CurrencyId__c | The reference ID for a currency code. | text |
| Data Source | ssot__DataSourceId__c | The reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | The reference ID for the logical name of the object where this record originated, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The description of the lead. | text |
| EmailBouncedDate | ssot__EmailBouncedDate__c | The lead’s email bounced, if applicable. | dateTime |
| EmailBouncedReason | ssot__EmailBouncedReason__c | The reason the bounce occurred, if applicable. | text |
| External Record ID | ssot__ExternalRecordId__c | The reference ID for an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | The reference ID for the system in which the external record ID was assigned. | text |
| Fax Contact Phone | ssot__FaxContactPhoneId__c | The reference ID for the lead’s fax number. | text |
| Geo Accuracy | ssot__GeoAccuracy__c | Additional information about the latitude and longitude attributes of an address. | number |
| Geo Latitude | ssot__GeoLatitude__c | The geographical latitude for the address. | number |
| Geo Longitude | ssot__GeoLongitude__c | The geographical longitude for the address. | number |
| Industry | ssot__IndustryId__c | The reference ID for the lead’s industry. | text |
| Internal Organization | ssot__InternalOrganizationId__c | The reference ID for the business unit or other internal organization that owns the business account. | text |
| Is Converted | ssot__IsConverted__c | An indicator if the lead was converted. | text |
| Last Activity Date | ssot__LastActivityDate__c | The date of the most recent account activity. | dateTime |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Lead ID | ssot__Id__c | A unique ID used as the primary key for the lead DMO. | text |
| Lead Party Role | ssot__PartyRoleId__c | The reference ID to the associated party role, for example, a customer, supplier, or competitor. | text |
| Lead Rating | ssot__LeadRating__c | A lead’s rating, for example, cold or warm. | text |
| Lead Score | ssot__LeadScore__c | A score or value assigned by Einstein logic. | Number |
| Lead Source | ssot__LeadSourceId__c | The reference ID to the source of the lead. | text |
| Lead Status | ssot__LeadStatusId__c | The reference ID to the status of the lead. | text |
| Mobile Contact Phone | ssot__MobileContactPhoneId__c | The reference ID to the lead’s mobile phone number. | text |
| Partner Account | ssot__PartnerAccountId__c | The reference ID to the partner who found the lead. | text |
| Phone Contact Point | ssot__PhoneContactPointId__c | The reference ID for the lead’s phone number. | text |
| Photo URL | ssot__PhotoURL__c | A link to a lead’s photo. | text |
| Postal Code | ssot__PostalCodeId__c | The reference ID for the postal code. | text |
| State Province | ssot__StateProvinceId__c | The reference ID for the state or prince where the address is located. | text |
| State Province Name | ssot__StateProvinceName__c | The state or province name where the address is located. | text |
| Street Name | ssot__StreetName__c | The lead’s address street number and name. | text |
| Website | ssot__Website__c | The lead’s website. | text |