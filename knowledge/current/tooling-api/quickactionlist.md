---
title: "QuickActionList"
domain: tooling-api
topic: quickactionlist
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.674Z
estimatedTokens: 180
keywords: [QuickActionList, quick, actions, SOAP, Calls, REST, HTTP, Usage]
---

# QuickActionList

> Represents a list of quick actions.

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

## Code Examples

```
String query = "SELECT Id,LayoutId FROM QuickActionList";
SObject[] records = sforce.query(query).getRecords();

for (int i = 0; i < records.length; i++) {
   QuickActionList list = (QuickActionList)records[i];
   String relatedLayoutId = list.get("LayoutId");
}
```
