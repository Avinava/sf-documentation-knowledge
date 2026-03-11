---
title: "Authorization Form Text DMO"
domain: data-cloud
topic: authorization-form-text-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.677Z
keywords: [Authorization, Form, Text, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Authorization Form Text DMO

# Authorization Form Text DMO

The Authorization Form Text DMO is a Data Cloud data model object (DMO) for an authorization form’s text and language settings.

## Object API Name

ssot\_\_AuthorizationFormText\_\_dlm

## Category

Other

## Primary Subject Area

Privacy

## Primary Key

Authorization Form Text ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Authorization Form Consent | Authorization Form Text ID |  | Authorization Form Text | Authorization Form Text |
| Authorization Form Text | Authorization Form |  | Authorization Form | Authorization Form |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Authorization Form | ssot__AuthorizationFormId__c | A reference ID to set of terms and conditions (such as privacy policy, contract, and consent form), including version numbers and associated references to external documents. | text |
| Authorization Form Text | ssot__Id__c | A unique ID used as primary key for the Authorization Form Text DMO. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the data record. | text |
| Locale | ssot__LocaleId__c | A reference ID to range of longitudes where common standard time is used. | text |
| Version Number | ssot__VersionNumber__c | An edition or variant of the authorization form text. | text |