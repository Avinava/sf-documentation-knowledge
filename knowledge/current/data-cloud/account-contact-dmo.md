---
title: "Account Contact DMO"
domain: data-cloud
topic: account-contact-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.597Z
keywords: [Account, Contact, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Account Contact DMO

# Account Contact DMO

The Account Contact DMO is a Data Cloud data model object for an individual who has a role specific to an account. Provided in both the Sales and Service Data Kits.

## Object API Name

ssot\_\_AccountContact\_\_dlm

## Category

Profile

## Primary Subject Area

Party

## Primary Key

Account Contact ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field | Data Bundle |
| --- | --- | --- | --- | --- | --- |
| Account Contact | Account | Many To One (N:1) | Account | Account ID | Sales, Service |
| Account Contact | Business Phone | Many To One (N:1) | Contact Point Phone | Contact Point Phone Id | Service |
| Account Contact | Individual | Many To One (N:1) | Individual | Individual ID | Sales, Service |
| Account Contact | Contact Email | Many To One (N:1) | Contact Point Email | Contact Point Email ID | Sales, Service |
| Account Contact | Mailing Address | Many To One (N:1) | Contact Point Address | Contact Point Address Id | Service |
| Case | Account Contact | Many To One (N:1) | Account Contact | Contact Point Address ID | Service |
| Financial Account Party | Account Contact ID | Many To One (N:1) | Account Contact | ID | Financial Services Cloud |
| Survey Invitation | Participant | Many To One (N:1) | Account Contact | Account Contact ID | Service |
| Survey Response | Submitter | Many To One (N:1) | Account Contact | Account Contact ID | Service |
| Survey Subject | Survey Subject | Many To One (N:1) | Account Contact | Account Contact ID | Service |

## All Fields

| Field Name | Field API Name | Description | Data Type | Data Bundle |
| --- | --- | --- | --- | --- |
| Account | ssot__AccountId__c | A reference ID to the account where this contact is included or linked. | text | Sales, Service |
| Account Contact ID | ssot__Id__c | A unique ID used as the primary key for the account contact DMO. | text | Sales, Service |
| Account Contact Roles | ssot__AccountContactRoles__c | The business role of the contact at the account. | text | Sales, Service |
| Assistant Name | ssot__AssistantName__c | The name of the contact’s assistant. | text | Sales, Service |
| Assistant Phone | ssot__AssistantPhone__c | The phone number of the assistant. | text | Sales, Service |
| Business Phone | ssot__BusinessPhoneId__c | A reference ID to the phone number for the contact. | text | Sales, Service |
| Contact Email | ssot__ContactEmailId__c | A reference ID to the email address for the contact. | text | Sales, Service |
| Contact Note | ssot__ContactNote__c | A description of the contact. | text | Sales, Service |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime | Sales, Service |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text | Sales, Service |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text | Sales, Service |
| Deceased | ssot__DeceasedDateTime__c |  | text | Service |
| Department Name | ssot__DepartmentName__c | The department the contact works in. | text | Sales, Service |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text | Sales, Service |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text | Sales, Service |
| Fax Phone | ssot__FaxPhoneId__c | A reference ID for the fax number for the contact. | text | Sales, Service |
| First Name | ssot__FirstName__c | The first name of the contact. | text | Service |
| Gender | ssot__Gender__c | The gender of the contact. | text | Service |
| Home Phone | ssot__HomePhoneId__c | A reference ID for the home phone number for the contact. | text | Sales, Service |
| Indirect Relation Account Contact | ssot__IndirectRelationAccountContactId__c | A reference ID to a contact with an indirect relationship to the account contact. | text | Sales, Service |
| Individual | ssot__IndividualId__c | A reference ID for the person that is the contact for the account. | text | Sales, Service |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text | Sales, Service |
| Last Activity Date | ssot__LastActivityDate__c | The date of the most recent account activity. | dateTime | Sales, Service |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime | Sales, Service |
| Last Name | ssot__LastName__c | The last name of the contact. | text | Service |
| Mailing Address | ssot__MailingAddressId__c | A reference ID to the mailing address. | text | Sales, Service |
| Marital Status | ssot__MaritalStatus__c | The marital status of the contact. | text | Service |
| Middle Name | ssot__MiddleName__c | The middle name of the contact. | text | Service |
| Mobile Phone | ssot__MobilePhoneId__c | A reference ID to the contact’s mobile phone number. | text | Sales, Service |
| Other Contact Address | ssot__OtherContactAddressId__c | A reference ID to another contact address. | text | Sales, Service |
| Person Name | ssot__PersonName__c | The person name of the contact. | text | Service |
| Reports To Account Contact | ssot__ReportsToAccountContactId__c | A reference ID to the contact’s manager. | text | Sales, Service |
| Sequence In Multiple Birth | ssot__SequenceMultipleBirthNumber__c |  | number | Service |
| Title | ssot__Title__c | The contact’s title for example, vice president or specialist. | text | Sales, Service |