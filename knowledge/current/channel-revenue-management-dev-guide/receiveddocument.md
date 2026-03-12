---
title: "ReceivedDocument"
domain: channel-revenue-management-dev-guide
topic: receiveddocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.733Z
estimatedTokens: 245
keywords: [ReceivedDocument, partners, upload, CSV, document, API, version, 51.0, later, Calls]
---

# ReceivedDocument

> Allows partners to upload .CSV document. This object is available in API
    version 51.0 and later.

# ReceivedDocument

Allows partners to upload .CSV document. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FailedRecordsFileId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionLookup to the error file. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the received document. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionCurrent stage of processing.Possible values are:APPROVED—ApprovedARCHIVED—ArchivedDRAFT—DraftIN_REVIEW—In ReviewOBSOLETE—ObsoleteSUBMITTED—SubmittedSUPERSEDED—Superseded |
| UnprocessedRecordsFileId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionLookup to the skipped file. |
