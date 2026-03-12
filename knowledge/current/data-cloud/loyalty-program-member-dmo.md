---
title: "Loyalty Program Member DMO"
domain: data-cloud
topic: loyalty-program-member-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:14.344Z
estimatedTokens: 1272
keywords: [Loyalty, Program, Member, DMO, Data, Cloud, data, model, person, who, joined, loyalty, program., API, Name, Category, Primary, Subject, Area, Key]
---

# Loyalty Program Member DMO

> The Loyalty Program Member DMO is a Data Cloud data model object (DMO)
      for a person who has joined a loyalty
      program.

# Loyalty Program Member DMO

The Loyalty Program Member DMO is a Data Cloud data model object (DMO) for a person who has joined a loyalty program.

## Object API Name

ssot\_\_LoyaltyProgramMember\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Program Member ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Member Currency | Loyalty Program Member | Many To One: N:1 | Loyalty Program Member | Loyalty Program Member ID |
| Loyalty Member Tier | Loyalty Program Member | Many To One: N:1 | Loyalty Program Member | Loyalty Program Member ID |
| Loyalty Program Member | Party | Many To One: N:1 | Individual | Individual ID |
| Loyalty Transaction Journal | Loyalty Program Member | Many To One: N:1 | Loyalty Program Member | Loyalty Program Member ID |
| Voucher | Loyalty Program Member | Many To One: N:1 | Loyalty Program Member | Loyalty Program Member ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Account | ssot__AccountId__c | A reference ID to account of company that employs member. | text |
| Account Contact | ssot__AccountContactId__c | A reference ID to individual who has a role specific to account. | text |
| Can Receive Partner Promotions | ssot__CanReceivePartnerPromotions__c | An indicator whether a member has opted-in to receive promotions from partners. | text |
| Can Receive Promotions | ssot__CanReceivePromotions__c | An indicator whether a member has opted-in to receive promotions. | text |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Enrollment Channel | ssot__EnrollmentChannelId__c | A reference ID to methods that members can use to enroll in loyalty programs, for example via web, email, call center, social media, or point of sale. | text |
| Enrollment Date | ssot__EnrollmentDate__c | The date the member was admitted to loyalty program. | dateTime |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Activity Date | ssot__LastActivityDate__c | The date of the most recent account activity. | dateTime |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Last Renewal Date | ssot__LastRenewalDate__c | The date when member last extended their membership in program. | dateTime |
| Loyalty Member Type | ssot__LoyaltyMemberTypeId__c | A reference ID to types of loyalty members. | text |
| Loyalty Program | ssot__LoyaltyProgramId__c | A reference ID to marketing strategy designed to encourage customers to shop at or use the services of business associated with program. | text |
| Loyalty Program Member ID | ssot__Id__c | A unique ID used as primary key for the Loyalty Program Member DMO. | text |
| Loyalty Program Member Status | ssot__LoyaltyProgramMemberStatusId__c | A reference ID to state of member's status in loyalty program. | text |
| Loyalty Statement Delivery Type | ssot__LoyaltyStatementDeliveryTypeId__c | A reference ID to type of delivery method for loyalty statement, for example postal mail, email, or text message. | text |
| Membership Expiration Date | ssot__MembershipExpirationDate__c | The date a membership expires. | dateTime |
| Membership Number | ssot__MembershipNumber__c | An alphanumeric ID visible to loyalty program members. | text |
| Name | ssot__Name__c | The name of loyalty program member. | text |
| Party | ssot__PartyId__c | A reference ID to person who belongs to loyalty program. | text |
| Referred by Member | ssot__ReferredByMemberId__c | A reference ID to person who referred member to loyalty program. | text |
| Referred by Party | ssot__ReferredByPartyId__c | A reference ID to person who referred member to loyalty program. | text |
| Related Corporate Program Member | ssot__RelatedCorporateProgramMemberId__c | A reference ID to corporate membership account associated with member. | text |
| Statement Last Generated Date | ssot__StatementLastGeneratedDate__c | The date the member was last sent program statement. | dateTime |
| Statement Frequency Time UOM | ssot__StatementFrequencyTimeUOM__c | A reference ID to how often member has elected to receive program statements, for example monthly or yearly. | text |
