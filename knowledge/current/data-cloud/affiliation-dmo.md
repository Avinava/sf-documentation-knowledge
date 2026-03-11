---
title: "Affiliation DMO"
domain: data-cloud
topic: affiliation-dmo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:17:42.620Z
keywords: [Affiliation, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Affiliation DMO

# Affiliation DMO

The Affiliation DMO is a Data Cloud data model object for affiliation or how to map data Marketing Cloud Engagement business unit use cases.

## Object API Name

ssot\_\_Affiliation\_\_dlm

## Category

Other

## Primary Subject Area

Party

## Primary Key

Affiliation ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Affiliation | Party | Many To One (N:1) | Individual | Individual ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Affiliated To | ssot__AffiliatedTo__c | Provides info about the business unit like brand or region.TipDefault mapping is to a Marketing Cloud Engagement MID. This field ensures activations are sent to the right business unit. | text |
| Affiliation ID | ssot__Id__c | A unique ID used as the primary key for the affiliation DMO. | text |
| Affiliation Type | ssot__AffiliationType__c | The type or category of the affiliation such as product category. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Party | ssot__PartyId__c | A reference ID to the parent party, for example, an individual, business, or affiliation group.TipThis ID is the same as the one used in the individual object. | text |