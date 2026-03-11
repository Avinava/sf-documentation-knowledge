---
title: "Contact Point Social DMO"
domain: data-cloud
topic: contact-point-social-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.035Z
keywords: [Contact, Point, Social, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Contact Point Social DMO

# Contact Point Social DMO

The Contact Point Social DMO is a Data Cloud data model object (DMO) for the social media handle for a party, for example @trustednews on Twitter.

## Object API Name

ssot\_\_ContactPointSocial\_\_dlm

## Category

Other

## Primary Subject Area

Party

## Primary Key

Contact Point Social ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Contact Point Social | Party | Many To One: N:1 | Account | Account ID |
| Contact Point Social | Contact Point Social ID | Many To One: N:1 | Unified Link Contact Point Social | Contact Point Social ID |
| Contact Point Social | Party | Many To One: N:1 | Individual | Individual ID |
| Device Application Engagement | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Website Engagement | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Web Search Engagement | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Account | Primary Sales Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Contact Point Consent | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Email Engagement | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Message Engagement | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Product Browse Engagement | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Product Order Engagement | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Shopping Cart Engagement | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Privacy Consent Log | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Active From Date | ssot__ActiveFromDate__c | The date the social account is active. | dateTime |
| Active To Date | ssot__ActiveToDate__c | The date the social account is inactive. | dateTime |
| Best Time To Contact End Time | ssot__BestTimeToContactEndTime__c | A contact’s preferred date and time to stop receiving communications. | dateTime |
| Best Time To Contact Start Time | ssot__BestTimeToContactStartTime__c | A contact’s preferred date and time to start receiving communication. | dateTime |
| Best Time to Contact Timezone | ssot__BestTimeToContactTimezoneId__c | A reference ID to the contact’s preferred time zone. | text |
| Contact Point Social ID | ssot__Id__c | A unique ID used as primary key for the Contact Point Social DMO. | text |
| Contact Point Type | ssot__ContactPointTypeId__c | A reference ID to the type of contact. | text |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Followers Count | ssot__FollowersCount__c | The total number of followers that social media persona possesses. | number |
| For Business Use | ssot__ForBusinessUse__c | An indicator if the social account is used for business use. | text |
| For Personal Use | ssot__ForPersonalUse__c | An indicator if the social account is used for personal use. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns the business account. | text |
| Is Active | ssot__IsActive__c | An indicator if the account is active. | text |
| Is Undeliverable | ssot__IsUndeliverable__c | An indicator if the account is undeliverable. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Party | ssot__PartyId__c | A reference ID to the parent party, for example, an individual, business, or affiliation group.TipThis ID is the same as the one used in the individual object. | text |
| Party Role | ssot__PartyRoleId__c | A reference ID to the associated party role, for example, a customer, supplier, or competitor. | text |
| Primary Flag | ssot__PrimaryFlag__c | An indicator if phone number is primary phone number of the individual or account. | text |
| Profile First Created Date | ssot__ProfileFirstCreatedDate__c | The date the social profile was created. | dateTime |
| Profile Last Updated Date | ssot__ProfileLastUpdatedDate__c | The date the social profile was last updated. | dateTime |
| Profile Occurrence Count | ssot__ProfileOccurrenceCount__c |  | number |
| Profile Picture URL | ssot__ProfilePictureURL__c | The URL link to profile photo of social media account. | text |
| Social Fan Status | ssot__SocialFanStatusId__c | A reference ID to status of social media persona, for example and influencer or fan. | text |
| Social Handle ID | ssot__SocialHandleId__c | A reference ID to a social media handle. | text |
| Social Handle Name | ssot__SocialHandleName__c | The name of the social media persona. | text |
| Social Network Provider | ssot__SocialNetworkProviderId__c | A reference ID to source of social media persona, for example Facebook or LinkedIn. | text |
| Timezone Code | ssot__TimezoneCode__c | A single-character code indicating the time zone's relationship to Greenwich Mean Time (GMT). | text |