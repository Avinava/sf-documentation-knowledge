---
title: "BusOperProcCmplPlcyClVer"
domain: omnistudio
topic: busoperproccmplplcyclver
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.610Z
estimatedTokens: 589
keywords: [BusOperProcCmplPlcyClVer, Represents, junction, between, Business, Operations, Process, Compliance, Policy, Clause, Version, objects., API, version, 65.0, later., Supported, Calls, Fields, Associated]
---

# BusOperProcCmplPlcyClVer

> Represents a junction between the Business Operations Process and Compliance
         Policy Clause Version objects. This object is available in API version 65.0 and later.

# BusOperProcCmplPlcyClVer

Represents a junction between the Business Operations Process and Compliance Policy Clause Version objects. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BusinessOperationsProcessId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe business operations process associated with the record.This field is a relationship field.Relationship NameBusinessOperationsProcessRelationship TypeMaster-detailRefers ToBusinessOperationsProcess (the master object) |
| CompliancePlcyClauseVersionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe compliance policy clause version associated with the record.This field is a relationship field.Relationship NameCompliancePlcyClauseVersionRefers ToCompliancePlcyClauseVersion |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for the record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BusOperProcCmplPlcyClVerChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- BusOperProcCmplPlcyClVerChangeEvent (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)
