---
title: "CmplPlcyClCmplCtlVer"
domain: omnistudio
topic: cmplplcyclcmplctlver
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.716Z
estimatedTokens: 586
keywords: [CmplPlcyClCmplCtlVer, Represents, junction, between, Compliance, Policy, Clause, Version, Control, objects., API, version, 65.0, later., Supported, Calls, Fields, Associated, Objects]
---

# CmplPlcyClCmplCtlVer

> Represents a junction between the Compliance Policy Clause Version and Compliance
      Control Version objects. This object is available in API version 65.0 and later.

# CmplPlcyClCmplCtlVer

Represents a junction between the Compliance Policy Clause Version and Compliance Control Version objects. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ComplianceControlVersionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe compliance control version associated with the record.This field is a relationship field.Relationship NameComplianceControlVersionRefers ToComplianceControlVersion |
| CompliancePlcyClauseVersionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe compliance policy clause version associated with the record.This field is a relationship field.Relationship NameCompliancePlcyClauseVersionRelationship TypeMaster-detailRefers ToCompliancePlcyClauseVersion (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for the record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CmplPlcyClCmplCtlVerChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- CmplPlcyClCmplCtlVerChangeEvent (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)
