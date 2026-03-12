---
title: "RetrievalSummaryDefField"
domain: financial-services-cloud-object-reference
topic: retrievalsummarydeffield
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.600Z
estimatedTokens: 241
keywords: [RetrievalSummaryDefField, stores, retrieve, target, rollup, definition, API, version, 61.0, later, Calls]
---

# RetrievalSummaryDefField

> Represents a table that stores the fields to retrieve from the target object
         of a rollup definition. This object is available in API version 61.0 and later.

# RetrievalSummaryDefField

Represents a table that stores the fields to retrieve from the target object of a rollup definition. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Field | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe field to retrieve. |
| RetrievalSummaryDefOrObjectId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe related retrieval summary definition or node.This field is a polymorphic relationship field.Relationship NameRetrievalSummaryDefOrObjectRelationship TypeMaster-detailRefers ToRetrievalSummaryDefObject, RetrievalSummaryDefinition (the master object) |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe order that the rollup definition shows in the setup UI and API result. |
