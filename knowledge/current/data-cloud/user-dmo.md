---
title: "User DMO"
domain: data-cloud
topic: user-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:44.050Z
keywords: [User, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# User DMO

# User DMO

The User DMO is a Data Cloud data model object (DMO) for an account, a person or a machine, that can log in to use the deployed software system.

## Object API Name

ssot\_\_User\_\_dlm

## Category

Profile

## Primary Subject Area

## Primary Key

User Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Agent Service Presence | User | Many To One: N:1 | User | User ID |
| Agent Work | User | Many To One: N:1 | User | User ID |
| Case | Assigned User | Many To One: N:1 | User | User ID |
| Case Update | Last Modified By | Many To One: N:1 | User | User ID |
| Case Update | Related Owner | Many To One: N:1 | User | User ID |
| Email Message | Created By | Many To One: N:1 | User | User ID |
| Email Message | Last Modified By | Many To One: N:1 | User | User ID |
| User | User Group | Many To One: N:1 | User Group | User Group ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| About Me | ssot__AboutMe__c | The about me information for the user. | text |
| Account | ssot__AccountId__c | A reference ID to the account for the user. | text |
| Alias | ssot__Alias__c | The alias for the user. | text |
| Badge Text | ssot__BadgeText__c | The badge text for the user. | text |
| Call Center | ssot__CallCenterId__c | A reference ID to the call center for the user. | text |
| Community Nickname | ssot__CommunityNickname__c | The community nickname for the user. | dateTime |
| Company Name | ssot__CompanyName__c | The company name for the user. | text |
| Contact | ssot__ContactId__c | A reference ID to the contact for the user. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DateSourceObjectId___c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Delegated Approver | ssot__DelegatedApproverId__c | A reference ID to the delegated approver for the user. | text |
| Department | ssot__Department__c | The department for the user. | text |
| Email | ssot__Email__c | The email address for the user. | text |
| Email Encoding Key | ssot__EmailEncodingKey__c | The email encoding key for the user. | text |
| Email Signature | ssot__EmailSignature__c | The email signature for the user. | text |
| Extension | ssot__Extension__c | The phone extension for the user. | text |
| First Name | ssot__FirstName__c | The first name for the user. | text |
| Forecast Enabled | ssot__ForecastEnabled__c | An indicator if the forecast for the user is enabled. | text |
| Full Name | ssot__FullName__c | The full name for the user. | text |
| Full Photo Url | ssot__FullPhotoUrl__c | The full photo URL for the user. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the user. | text |
| Is Active | ssot__IsActive__c | An indicator if the record is active. | text |
| Language | ssot__Language__c | The language of the user. | text |
| Last Login Date | ssot__LastLoginDate__c | The date when the user last logged in. | dateTime |
| Last Name | ssot__LastName__c | The last name for the user. | text |
| Last Password Change Date | ssot__LastPasswordChangeDate__c | The date when the user’s password was last changed. | dateTime |
| Offline Pda Trial Expiration Date | ssot__Offline PdaTrialExpirationDate__c | The date when the user’s offline PDA trial expires. | dateTime |
| Offline Trial Expiration Date | ssot__Offline TrialExpirationDate__c | The date when the user’s offline trial expires. | dateTime |
| Receives Admin Info Emails | ssot__ReceivesAdminInfoEmails__c | An indicator if the user receives admin information emails. | text |
| Receives Info Emails | ssot__ReceivesInfoEmails__c | An indicator if the user receives information emails. | text |
| Sender Name | ssot__SenderName__c | The sender name for the user. | text |
| Small Photo Url | ssot__SmallPhotUrl__c | The small photo URL for the user. | text |
| Stay In Touch Note | ssot__StayInTouchNote__c | The text for the user’s stay in touch message. | text |
| Stay In Touch Signature | ssot__StayInTouchSignature__c | The signature for the user’s stay in touch message. | text |
| Stay In Touch Subject | ssot__StayInTouchSubject__c | The subject for the user’s stay in touch message. | text |
| Timezone | ssot__Timezone__c | The timezone for the user. | text |
| Title | ssot__Title__c | The title for the user. | text |
| User Group | ssot__UserGroupId__c | A reference ID to the user group for the user. | text |
| User Id | ssot__Id__c | A unique ID used as the primary key for the user DMO. | text |
| Username | ssot__Username__c | The username for the user. | text |