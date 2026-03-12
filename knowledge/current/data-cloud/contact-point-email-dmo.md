---
title: "Contact Point Email DMO"
domain: data-cloud
topic: contact-point-email-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.236Z
estimatedTokens: 1499
keywords: [Contact, Point, Email, DMO, Data, Cloud, model, address, party, Provided, Sales, Service, Kits, API, Category]
---

# Contact Point Email DMO

> The Contact Point Email DMO is a Data Cloud data model object for the
		email address of a party. Provided in both the Sales and Service Data Kits.

# Contact Point Email DMO

The Contact Point Email DMO is a Data Cloud data model object for the email address of a party. Provided in both the Sales and Service Data Kits.

## Object API Name

ssot\_\_ContactPointEmail\_\_dlm

## Category

Other

## Primary Subject Area

Contact

## Primary Key

Contact Point Email ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field | Data Bundle |
| --- | --- | --- | --- | --- | --- |
| Account Contact | Contact Email | Many To One (N:1) | Contact Point Email | Contact Point Email ID | Sales, Service |
| Contact Point Email | Party | Many To One (N:1) | Individual | Individual ID | Sales, Service |
| Contact Point Email | Contact Point Email ID | One To One (1:1) | Contact Point Email Identity Link | Contact Point Email ID | Sales |
| Contact Point Email | Party | Many To One (N:1) | Account | Account ID | Sales, Service |

## All Fields

| Field Name | Field API Name | Description | Data Type | Data Bundle |
| --- | --- | --- | --- | --- |
| Active From Date | ssot__ActiveFromDate__c | The date the email address is active. | dateTime | Sales, Service |
| Active To Date | ssot__ActiveToDate__c | The date the email address is inactive. | dateTime | Sales, Service |
| Best Time To Contact End Time | ssot__BestTimeToContactEndTime__c | A contact’s preferred date and time to stop receiving emails. | dateTime | Sales, Service |
| Best Time To Contact Start Time | ssot__BestTimeToContactStartTime__c | A contact’s preferred date and time to start receiving emails. | dateTime | Sales, Service |
| Best Time to Contact Timezone | ssot__BestTimeToContactTimezone__c | The preferred timezone for the  contact. | text | Service |
| Best Time to Contact Timezone | ssot__BestTimeToContactTimezoneId__c | A reference ID for the contact’s preferred time zone. | text | Sales, Service |
| Contact Point Email Id | ssot__Id__c | A unique ID used as the primary key for the contact point email DMO. | text | Sales, Service |
| Contact Point Type | ssot__ContactPointTypeId__c | A reference ID for the type of email, for example business or personal. | text | Sales, Service |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime | Sales, Service |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text | Sales, Service |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text | Sales, Service |
| Email Address | ssot__EmailAddress__c | The contact’s full email address. | text | Sales, Service |
| Email Domain | ssot__EmailDomain__c | The domain of an email address, for example salesforce.com or gmail.com. | text | Sales, Service |
| Email Latest Bounce Date Time | ssot__EmailLatestBouncedateTime__c | The date of the most recent email bounce. | dateTime | Sales, Service |
| Email Latest Bounce Reason text | ssot__EmailLatestBounceReasontext__c | The reason the email bounced, for example the mailbox was full. | text | Sales, Service |
| Email Mail Box | ssot__EmailMailBox__c | The specific unique mailbox found before the domain, for example janedoe@. | text | Sales, Service |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text | Sales, Service |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text | Sales, Service |
| For Business Use | ssot__ForBusinessUse__c | An indicator if the email address is used for business use. | text | Sales, Service |
| For Personal Use | ssot__ForPersonalUse__c | An indicator if the email address is used for personal use. | text | Sales, Service |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text | Sales, Service |
| Is Active | ssot__IsActive__c | An indicator if the email address is active. | text | Sales, Service |
| Is Undeliverable | ssot__IsUndeliverable__c | An indicator if the email address is undeliverable. | text | Sales, Service |
| Is Verified | ssot__IsVerified__c | Indicates whether the email address is verified. | Text | Financial Services Cloud |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime | Sales, Service |
| Party | ssot__PartyId__c | A reference ID to the parent party, for example, an individual, business, or affiliation group.TipThis ID is the same as the one used in the individual object. | text | Sales, Service |
| Party Role | ssot__PartyRoleId__c | A reference ID to the associated party role, for example, a customer, supplier, or competitor. | text | Sales, Service |
| Preference Rank | ssot__PreferenceRankNumber__c | The preference rank number for the contact point email. | number | Service |
| Primary Flag | ssot__PrimaryFlag__c | An indicator if the email address is the primary email address of the individual or account. | text | Sales, Service |
| Profile First Created Date | ssot__ProfileFirstCreatedDate___c | The date the profile was created. | dateTime | Sales, Service |
| Profile Last Updated Date | ssot__ProfileLastUpdatedDate__c | The date the profile was last updated. | dateTime | Sales, Service |
| Profile Occurrence Count | ssot__ProfileOccurrenceCount__c |  | number | Sales, Service |
| Timezone Code | ssot__TimezoneCode__c | A single-character code indicating the time zone's relationship to Greenwich Mean Time (GMT). | text | Sales, Service |
| Usage Type | ssot__UsageType__c | The usage type for the contact point email. | text | Service |
| Verified | ssot__IsVerified__c | An indicator if this contact point email is verified. | text | Service |
