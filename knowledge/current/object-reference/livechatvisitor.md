---
title: "LiveChatVisitor"
domain: object-reference
topic: livechatvisitor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.453Z
estimatedTokens: 515
keywords: [LiveChatVisitor, website, visitor, started, tried, start, chat, session, API, version, 24.0, later, Calls, Usage, Associated]
---

# LiveChatVisitor

> Represents a website visitor who has started or tried to start a chat
      session. This object is available in API version 24.0 and later.

# LiveChatVisitor

Represents a website visitor who has started or tried to start a chat session. This object is available in API version 24.0 and later.

## Supported Calls

create(), delete(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| LastReferencedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionThe name of the visitor |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe session key used to uniquely identify the visitor. |

## Usage

Use this object to query and manage live chat visitors.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LiveChatVisitorChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- LiveChatVisitorChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
