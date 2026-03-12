---
title: "Data Use Purpose Consent Action DMO"
domain: data-cloud
topic: data-use-purpose-consent-action-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.863Z
estimatedTokens: 514
keywords: [Data, Purpose, Consent, Action, DMO, Cloud, data, model, individual, consent, preferences, actions., API, Name, Category, Primary, Subject, Area, Key, Relationships]
---

# Data Use Purpose Consent Action DMO

> The Data Use Purpose Consent Action DMO is a Data Cloud data model object
      (DMO) for individual consent preferences for consent actions.

# Data Use Purpose Consent Action DMO

The Data Use Purpose Consent Action DMO is a Data Cloud data model object (DMO) for individual consent preferences for consent actions.

## Object API Name

ssot\_\_DataUsePurposeConsentAction\_\_dlm

## Category

Privacy

## Primary Subject Area

Privacy

## Primary Key

Data Use Purpose Consent Action ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Data Use Purpose Consent Action | Data Use Purpose ID | Many To One: N:1 | Data Use Purpose | Data Use Purpose ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Consent Action | ssot__ConsentActionId__c | A reference ID to user permission regarding how their personal data is shared, for example data collection (of events), tracking (of web and email activity), and sharing data with third parties. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Data Use Purpose Category ID | ssot__Id__c | A unique ID used as primary key for the Data Use Purpose Consent Action DMO. | text |
| Data Use Purpose ID | ssot__DataUsePurposeId__c | A reference ID to reason for contacting a prospect or customer, for example billing, marketing, or surveys. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
