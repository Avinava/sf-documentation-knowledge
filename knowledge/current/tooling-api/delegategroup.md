---
title: "DelegateGroup"
domain: tooling-api
topic: delegategroup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.605Z
keywords: [DelegateGroup, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# DelegateGroup

# DelegateGroup

Represents a Delegate Group for queries. This object is available in Tooling API version 57.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique developer name for the delegate group. |
| IsLoginAccessEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates login access is enabled for the developer group.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe label for the developer group. |