---
title: "User Group DMO"
domain: data-cloud
topic: user-group-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:15.032Z
estimatedTokens: 545
keywords: [User, Group, DMO, Data, Cloud, data, model, set, system, users, common, characteristics., Groups, often, created, simplify, granting, privileges, access, resources.]
---

# User Group DMO

> The User Group DMO is a Data Cloud data model object (DMO) for a set
      of system users with common characteristics. User Groups are often created to simplify the
      granting of system privileges and granting access to resources.

# User Group DMO

The User Group DMO is a Data Cloud data model object (DMO) for a set of system users with common characteristics. User Groups are often created to simplify the granting of system privileges and granting access to resources.

## Object API Name

ssot\_\_UserGroup\_\_dlm

## Category

Profile

## Primary Subject Area

## Primary Key

User Group Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Agent Work | User Group | Many To One: N:1 | User Group | User Group ID |
| User | User Group | Many To One: N:1 | User Group | User Group ID |
| User Group | User Group | Many To One: N:1 | User Group | User Group ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Alias | ssot__Alias__c | The alias for the user group. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the user group. | text |
| Is Queue | ssot__IsQueue__c | An indicator if the user group is a queue. | dateTime |
| Is Regular Group | ssot__IsRegularGroup__c | An indicator if the user group is a regular group. | text |
| Is Role | ssot__IsRole__c | An indicator if the user group is a role. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Name | ssot__Name___c | The name of the user group. | text |
| User Group | ssot__UserGroupId__c | A reference ID to the user group for the user group. | text |
| User Group ID | ssot__Id__c | A unique ID used as the primary key for the user group DMO. | text |
