---
title: "QuickActionList"
domain: tooling-api
topic: quickactionlist
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.597Z
keywords: [QuickActionList, Supported, SOAP, Calls, REST, HTTP, Methods, Fields, Usage]
---

# QuickActionList

# QuickActionList

Represents a list of quick actions.

This object is available in API version 32.0 and later.

## Supported SOAP Calls

create(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, PATCH, POST

## Fields

| Field | Details |
| --- | --- |
| LayoutId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated layout. |

## Usage

A QuickActionList is a junction between QuickActionListItem objects and a layout. If a layout doesn’t have an associated QuickActionList, it inherits the actions from the global page layout.

The following example retrieves all quick action lists in an organization and their associated layout ID.

```

```