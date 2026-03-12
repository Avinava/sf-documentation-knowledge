---
title: "Case DMO"
domain: data-cloud
topic: case-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.841Z
estimatedTokens: 1547
keywords: [Case, DMO, Data, Cloud, model, support, cases, recorded, issues, laptop, connectivity, problem, Provided, Sales, Service]
---

# Case DMO

> The Case DMO is a Data Cloud data model object (DMO) for support cases
      based on recorded issues, for example, a laptop connectivity problem. Provided in both the
      Sales and Service Data Kits.

# Case DMO

The Case DMO is a Data Cloud data model object (DMO) for support cases based on recorded issues, for example, a laptop connectivity problem. Provided in both the Sales and Service Data Kits.

## Object API Name

ssot\_\_Case\_\_dlm

## Category

Engagement

## Primary Subject Area

Case

## Primary Key

Case ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field | Data Bundle |
| --- | --- | --- | --- | --- | --- |
| Agent Work | Related To | Many To One: N:1 | Case | Case Id | Service |
| Case | Account Contact | Many To One: N:1 | Account Contact | Account Contact ID | Sales, Service |
| Case | Account | Many To One: N:1 | Account | Account ID | Sales, Service |
| Case | Assigned User | Many To One: N:1 | User | User ID | Service |
| Case | Case ID | Many To One: N:1 | Device Application Engagement | Case | Sales |
| Case | Case ID | Many To One: N:1 | Email Engagement | Case | Sales |
| Case | Case ID | Many To One: N:1 | Message Engagement | Case | Sales |
| Case | Case ID | Many To One: N:1 | Product Browse Engagement | Case | Sales |
| Case | Case ID | Many To One: N:1 | Shopping Cart Engagement | Case | Sales |
| Case | Case ID | Many To One: N:1 | Web Search Engagement | Case | Sales |
| Case | Case ID | Many To One: N:1 | Website Engagement | Case | Sales |
| Case | Case Support Work Hours | Many To One: N:1 | Operating Hours | Operating Hours Id | Sales, Service |
| Case | Parent Case | Many To One: N:1 | Case | Case ID | Service |
| Case Update | Case | Many To One: N:1 | Case | Case ID | Service |
| Email Message | Case | Many To One: N:1 | Case | Case ID | Service |

## All Fields

| Field Name | Field API Name | Description | Data Type | Data Bundle |
| --- | --- | --- | --- | --- |
| Account | ssot__AccountId__c | A reference ID to the account where this contact is included or linked. | text | Sales, Service |
| Account Contact | ssot__AccountContactId__c | The reference ID for the account contact of the case. | text | Sales, Service |
| Assigned User | ssot__AssignedUserId__c | A reference ID to the assigned customer support rep. | text | Sales, Service |
| Assigned User Object | ssot__AssignedUserObject__c | The assigned user object for the case. | text | Service |
| Case Category | ssot__CaseCategoryId__c | A reference ID to the category of the case. | text | Sales, Service |
| Case Closure Reason | ssot__CaseClosureReasonId__c | A reference ID to the reason the case was closed. | text | Sales, Service |
| Case Comments | ssot__CaseComments__c | The comments for the case. | text | Service |
| Case Comments Relationship | ssot__CaseComments__c |  | text | Sales, Service |
| Case Creation Channel | ssot__CaseCreationChannelId__c | A reference ID to the channel where the case was created. | text | Sales, Service |
| Case ID | ssot__Id__c | A unique ID used as the primary key for the account contact DMO. | text | Sales, Service |
| Case Number | ssot__CaseNumber__c | A number assigned to the case. | text | Sales, Service |
| Case Priority | ssot__CasePriorityId__c | A reference ID to the priority of the case, for example, high, medium, or low. | text | Sales, Service |
| Case Status | ssot__CaseStatusId__c | A reference ID to the status of the case, for example, new, in progress, or closed. | text | Sales, Service |
| Case Support Work Hours | ssot__CaseSupportWorkHoursId__c | A reference ID to the working hours of support. | text | Sales, Service |
| Case Type | ssot__CaseTypeId__c | A reference ID to the type of case, for example, a question or a problem. | text | Sales, Service |
| Closed | ssot__IsClosed__c | An indicator if the case is closed. | text | Service |
| Closed Date Time | ssot__CloseddateTime__c | The date and time that the case was closed. | dateTime | Sales, Service |
| Closed When Created | ssot__IsClosedOnCreate__c | An indicator if the case was closed when created. | text | Service |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime | Sales, Service |
| Date Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text | Sales, Service |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text | Sales, Service |
| Description | ssot__Description__c | The case description. | text | Service |
| Email Messages | ssot__EmailMessages__c | The email messages for a case. | text | Sales, Service |
| Escalated | ssot__IsEscalated__c | An indicator if the case is escalated. | text | Service |
| Escalation Date | ssot__EscalationDate__c | The date the case was escalated. | dateTime | Service |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text | Sales, Service |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text | Sales, Service |
| Individual | ssot__IndividualId__c | A reference ID for the individual associated with the case. | text | Service |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text | Sales, Service |
| Is Web Portal Visible | ssot__IsWebPortalVisible__c | An indicator if the web portal is visible. | text | Service |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime | Sales, Service |
| Name | ssot__Name__c | The name of the case. | text | Service |
| Origin | ssot__Origin__c | The origin of the case. | text | Service |
| Parent Case | ssot__ParentCaseId__c | A reference ID to an associated parent case. | text | Sales, Service |
| Service Entitlement | ssot__ServiceEntitlementId__c | A reference ID to the customer’s support level, for example, phone or chat support only. | text | Sales, Service |
| Subject | ssot__Subject__c | A short description of the case. | text | Service |
