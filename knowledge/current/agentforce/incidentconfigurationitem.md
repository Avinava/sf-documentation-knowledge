---
title: "IncidentConfigurationItem"
domain: agentforce
topic: incidentconfigurationitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:08:17.911Z
keywords: [IncidentConfigurationItem, Supported, Calls, Fields]
---

# IncidentConfigurationItem

# IncidentConfigurationItem

Represents the relationship between an incident and a configuration item reference. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ConfigurationItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe configuration item that represents the external configuration item record that's related to an incident.This field is a relationship field.Relationship NameConfigurationItemRefers ToConfigurationItem |
| IncidentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe incident with which a configuration item is related.This field is a relationship field.Relationship NameIncidentRelationship TypeMaster-detailRefers ToIncident (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the record. |
| RelationshipType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionSpecifies the type of relationship between a configuration item and the incident.Possible values are:AffectedImpacted |