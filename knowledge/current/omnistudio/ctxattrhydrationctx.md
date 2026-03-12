---
title: "CtxAttrHydrationCtx"
domain: omnistudio
topic: ctxattrhydrationctx
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:54.716Z
estimatedTokens: 280
keywords: [CtxAttrHydrationCtx, Represents, queries, fetch, data, chosen, attribute, input, schema, context-to-context, mapping, API, version, 61.0, later., Supported, Calls, REST, Fields]
---

# CtxAttrHydrationCtx

> Represents the queries that fetch the data for a chosen attribute from the
         input schema for context-to-context mapping This object is available in API version
      61.0 and later.

# CtxAttrHydrationCtx

Represents the queries that fetch the data for a chosen attribute from the input schema for context-to-context mapping This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ContextAttributeMappingId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe context attribute mapping record that's associated with the attribute hydration detail.This field is a relationship field.Relationship NameContextAttributeMappingRelationship TypeMaster-detailRefers ToContextAttributeMapping (the master object) |
| ContextQueryAttribute | TypestringPropertiesCreate, Filter, Sort, UpdateDescriptionThe attribute in context definition that's the source of context hydration. |
| InheritedFrom | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe name of the parent CtxAttrCtxHydrationDetail that's used to derive the current CtxAttrCtxHydrationDetail. |
