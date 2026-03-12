---
title: "OcrDocumentScanResult"
domain: health-cloud-object-reference
topic: ocrdocumentscanresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.726Z
estimatedTokens: 824
keywords: [OcrDocumentScanResult, contents, document, optical, character, recognition, OCR, processing, API, version, 50.0, later, Calls, Associated, Objects]
---

# OcrDocumentScanResult

> Represents the contents of a document after optical character recognition (OCR) 
      processing. This object is available in API version 50.0 and later.

# OcrDocumentScanResult

Represents the contents of a document after optical character recognition (OCR) processing. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContentVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the current version of the data. |
| DocumentRequestId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for a document request. |
| ExtractedValues | TypetextareaPropertiesNillableDescriptionData extracted from the document. Data type StringPlusClob, maximum length 131072.NoteThis field is encryptable with Salesforce Platform Encryption. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the record. |
| OcrService | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionRecords the service that performed the text extraction.Possible values are:AMAZON_TEXTRACT—Amazon TextractE.AI |
| OcrStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCurrent phase of OCR processing.Possible values are:ERROR—ErrorOCR_ENQUEUE—OCR EnqueueSUCCESS—Success |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the OcrDocumentScanResult record. |
| PageNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe page number of the scanned document result in the original document that it’s a part of. |
| Rotation | TypeintPropertiesFilter, Group, Nillable, SortDescriptionDegrees of rotation requested. Can be 0, 90, 180, or 270. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OcrDocumentScanResultChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

## Related Topics

- OcrDocumentScanResultChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
