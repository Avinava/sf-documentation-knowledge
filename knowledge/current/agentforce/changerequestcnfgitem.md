---
title: "ChangeRequestCnfgItem"
domain: agentforce
topic: changerequestcnfgitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:08:17.847Z
keywords: [ChangeRequestCnfgItem, Supported, Calls, Fields]
---

# ChangeRequestCnfgItem

# ChangeRequestCnfgItem

Represents the relationship between a change request and a configuration item reference. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ChangeRequestId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe change request with which a configuration item is related.This field is a relationship field.Relationship NameChangeRequestRelationship TypeMaster-detailRefers ToChangeRequest (the master object) |
| ConfigurationItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe configuration item that represents the external configuration item record that's related to a change request.This field is a relationship field.Relationship NameConfigurationItemRefers ToConfigurationItem |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the record. |
| RelationshipType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionSpecifies the type of relationship between a configuration item and the change request.Possible values are:AffectedImpacted |