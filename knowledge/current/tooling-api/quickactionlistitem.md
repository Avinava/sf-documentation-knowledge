---
title: "QuickActionListItem"
domain: tooling-api
topic: quickactionlistitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.679Z
estimatedTokens: 365
keywords: [QuickActionListItem, item, quick, action, SOAP, Calls, REST, HTTP, Usage]
---

# QuickActionListItem

> Represents an item in a quick action list.

# QuickActionListItem

Represents an item in a quick action list.

This object is available in API version 32.0 and later.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, PATCH, POST

## Fields

| Field | Details |
| --- | --- |
| QuickActionDefinition | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe enum name or ID of the QuickActionDefinition that’s associated with this list item. Valid values are:Case.ChangeStatusCase.LogACallFeedItem.ContentPostFeedItem.LinkPostFeedItem.MobileSmartActionsFeedItem.PollPostFeedItem.QuestionPostFeedItem.TextPost |
| QuickActionListId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the QuickActionList associated with this list item. |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe order in which this list item appears in the picklist. This field must be an ordinal number greater than 0, and must be unique in the list. |

## Usage

A QuickActionListItem associates a QuickActionDefinition with a QuickActionList. You can query to find out which quick actions are in a list, insert or delete to add or remove quick actions from a list, and update to change the order of quick actions in the list.

The following example reverses the order in the list of the actions, and then removes the first action from the list.

```

```

## Code Examples

```
String query = "SELECT Id,SortOrder FROM QuickActionListItem Where QuickActionListId='" + listId + "'"
SObject[] records = sforce.query(query).getRecords();

for(int i=0;i<records.length;i++) {
   QuickActionListItem item = (QuickActionListItem)records[i];
   item.setSortOrder(records.length-i);
}

sforce.update(records);

// Last record in array is first record in reordered list
sforce.delete(records[records.length-1].getId());
```
