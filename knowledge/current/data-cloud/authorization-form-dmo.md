---
title: "Authorization Form DMO"
domain: data-cloud
topic: authorization-form-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.673Z
keywords: [Authorization, Form, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Authorization Form DMO

# Authorization Form DMO

The Authorization Form DMO is a Data Cloud data model object (DMO) for the set of terms and conditions, such as privacy policy, contract, or consent forms.

## Object API Name

ssot\_\_AuthorizationForm\_\_dlm

## Category

Other

## Primary Subject Area

Privacy

## Primary Key

Authorization Form Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Authorization Form Data Use | Authorization Form ID | Many To One: N:1 | Authorization Form | Authorization Form ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Authorization Form ID | ssot__Id__c | A unique ID used as primary key for the Authorization Form DMO. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Details URL | ssot__DetailsURL__c | A URL link with details about terms and conditions. | text |
| Effective From Date | ssot__EffectiveFromDate__c | The date when consent form is in effect. | dateTime |
| Effective To Date | ssot__EffectiveToDate__c | The date when consent form is no longer in effect. | dateTime |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the data record. | text |
| Revision Number | ssot__RevisionNumber__c | A free text field to store a revision number for consent form, for example "rev1.21". | text |
| Summary Text | ssot__SummaryText__c | A summary of consent form content. | text |