---
title: "Authorization Form Data Use DMO"
domain: data-cloud
topic: authorization-form-data-use-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.727Z
estimatedTokens: 541
keywords: [Authorization, Form, Data, DMO, model, Cloud, uses, consented, API, Category, Primary, Subject, Area, Key, Relationships]
---

# Authorization Form Data Use DMO

> The Authorization Form Data Use data model object (DMO) is a Data Cloud DMO for the data uses consented to in an authorization form.

# Authorization Form Data Use DMO

The Authorization Form Data Use data model object (DMO) is a Data Cloud DMO for the data uses consented to in an authorization form.

## Object API Name

ssot\_\_AuthorizationFormDataUse\_\_dlm

## Category

Other

## Primary Subject Area

Privacy

## Primary Key

Authorization Form Data Use ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Authorization Form Data Use | Data Use Purpose ID | Many To One: N:1 | Data Use Purpose | Data Use Purpose ID |
| Authorization Form Data Use | Authorization Form ID | Many To One: N:1 | Authorization Form | Authorization Form ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Authorization Form Data Use ID | ssot__Id__c | A unique ID used as the primary key for the Authorization Form Data Use DMO. | text |
| Authorization Form ID | ssot__AuthorizationFormId__c | A reference ID to a set of terms and conditions, such as privacy policy, contract, and consent form. This field name includes version numbers and associated references to external documents. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for a system’s logical name that is the source of records identified by an external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record originated. For example, the name of a cloud storage file or another connector’s external object. | text |
| Data Use Purpose ID | ssot__DataUsePurposeId__c | A reference ID for the reason for contacting a prospect or customer, for example, billing, marketing, or surveys. | text |
| External Record Id | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source Id | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the data record. | text |
