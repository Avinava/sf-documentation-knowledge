---
title: "RetrievalSummaryDefObject"
domain: financial-services-cloud-object-reference
topic: retrievalsummarydefobject
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.610Z
estimatedTokens: 269
keywords: [RetrievalSummaryDefObject, stores, rollup, definitions, retrieval, definition, API, version, 61.0, later, Calls]
---

# RetrievalSummaryDefObject

> Represents a table that stores the rollup definitions of a retrieval
         definition. This object is available in API version 61.0 and later.

# RetrievalSummaryDefObject

Represents a table that stores the rollup definitions of a retrieval definition. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| RecordAggregationDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rollup definition that determines the records to retrieve.This field is a relationship field.Relationship NameRecordAggregationDefinitionRefers ToRecordAggregationDefinition |
| RetrievalSummaryDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related Retrieval Summary Definition.This field is a relationship field.Relationship NameRetrievalSummaryDefinitionRelationship TypeMaster-detailRefers ToRetrievalSummaryDefinition (the master object) |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe order that the rollup definition shows in the setup UI and API result. |
