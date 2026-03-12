---
title: "LiveAgentSessionHistory"
domain: object-reference
topic: liveagentsessionhistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.316Z
estimatedTokens: 379
keywords: [LiveAgentSessionHistory, automatically, created, Chat, session, stores, changes, made, API, versions, 28.0, later, Calls, Usage]
---

# LiveAgentSessionHistory

> This object is automatically created for each Chat session and stores
      information about changes made to the session. This object is available in API versions
    28.0 and later.

# LiveAgentSessionHistory

This object is automatically created for each Chat session and stores information about changes made to the session. This object is available in API versions 28.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Standard fields for the LiveAgentSession object can only be modified if your administrator has given you editing permissions for these records.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Fields

| Field Name | Details |
| --- | --- |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe name of the field that was changed in a session record. |
| LiveAgentSessionId | TypereferencePropertiesFilter, Group, SortDescriptionID of the session record that was changed. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionThe new value of the field that was changed. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionThe original value of the field that was changed. |

## Usage

Use this object to identify changes to chat session records.
