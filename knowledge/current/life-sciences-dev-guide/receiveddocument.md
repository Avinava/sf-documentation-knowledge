---
title: "ReceivedDocument"
domain: life-sciences-dev-guide
topic: receiveddocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.228Z
estimatedTokens: 999
keywords: [ReceivedDocument, operation, performed, document, rotating, splitting, text, extraction, API, version, 50.0, later, Calls, Associated, Objects]
---

# ReceivedDocument

> Contains a request for an operation to be performed on a document, such as
      rotating, splitting, or text extraction. This object is available in API version 50.0 and
    later.

# ReceivedDocument

Contains a request for an operation to be performed on a document, such as rotating, splitting, or text extraction. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Direction | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the org is receiving or sending the document.Possible values are:INCOMING—IncomingOUTGOING—Outgoing |
| DocumentNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique document identification number. |
| HasAutoOcrDisabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionDetermines whether text is extracted from the document automatically. Default is False. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the document is being processed. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the received document. |
| OcrStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionCurrent state of the text extraction process.Possible values are: Draft, Approved, In Approval, In Review, Obsolete, Superseded, Archived. Default is Draft. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the ReceivedDocument record. |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines the order in which the document is processed when it is part of a queue.Possible values are:ONE—1THREE—3TWO—2 |
| Source | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOrigin of the incoming document. Can be used to specify processing priority. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionCurrent stage of processing.Possible values are:APPROVEDARCHIVEDCOMPLETED—Document processing is complete.DRAFTIN_REVIEWNEEDS_REVIEW—Document requires review, for example because processing couldn’t be completed.OBSOLETEPROCESSING—Document processing is in progress.SUPERSEDED |
| StatusReason | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionReason for the status when processing and transforming the document. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ReceivedDocumentChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

## Related Topics

- ReceivedDocumentChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
