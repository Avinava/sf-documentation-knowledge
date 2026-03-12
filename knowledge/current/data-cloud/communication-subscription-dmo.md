---
title: "Communication Subscription DMO"
domain: data-cloud
topic: communication-subscription-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.333Z
estimatedTokens: 506
keywords: [Communication, Subscription, DMO, Data, Cloud, data, model, customer’s, subscription, preferences, specific, communication., API, Name, Category, Primary, Subject, Area, Key, Relationships]
---

# Communication Subscription DMO

> The Communication Subscription DMO is a Data Cloud data model object
      (DMO) for a customer’s subscription preferences for a specific communication.

# Communication Subscription DMO

The Communication Subscription DMO is a Data Cloud data model object (DMO) for a customer’s subscription preferences for a specific communication.

## Object API Name

ssot\_\_CommunicationSubscription\_\_dlm

## Category

Other

## Primary Subject Area

Privacy

## Primary Key

Communication Subscription ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Communication Subscription | Data Use Purpose ID | Many To One: N:1 | Data Use Purpose | Data Use Purpose ID |
| Communication Subscription Channel Type | Communication Subscription ID | Many To One: N:1 | Communication Subscription | Communication Subscription ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Communication Subscription ID | ssot__Id__c | A unique ID used as primary key for the Communication Subscription DMO. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Data Use Purpose ID | ssot__DataUsePurposeId__c | A reference ID to reason for contacting a prospect or customer, for example billing, marketing, or surveys. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns the business account. | text |
| Name | ssot__Name__c | The name of the communication subscription. | text |
