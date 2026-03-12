---
title: "OcrDocumentScanResult"
domain: omnistudio
topic: ocrdocumentscanresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:51.266Z
estimatedTokens: 1036
keywords: [OcrDocumentScanResult, Represents, details, information, extracted, document., API, version, 50.0, later., Supported, Calls, Sharing, Rule, Fields, Associated, Objects, 55.0]
---

# OcrDocumentScanResult

> Represents the details of the information extracted from the
         document. This object is available in API version 55.0 and later.

# OcrDocumentScanResult

Represents the details of the information extracted from the document. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Sharing Rule

The [ContentDocument](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_objects_contentdocument.htm "HTML (New Window)") sharing rule is applicable to all the related OcrDocumentScanResult.

Users can access OcrDocumentScanResult only when you share the related ContentDocument.

## Fields

| Field | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesFilter, Group, SortDescriptionID of the content document associated with the OCR document scan result.This field is a relationship field.Relationship NameContentDocumentRelationship TypeLookupRefers ToContentDocument |
| ContentVersionId | TypereferencePropertiesFilter, Group, SortDescriptionID of the content document associated with the OCR document scan result.This field is a relationship field.Relationship NameContentDocumentRelationship TypeLookupRefers ToContentDocument |
| DocumentTypeId | TypestringPropertiesCreate, Nillable, UpdateDescriptionThe document type of the OCRed document. It can be null if the document type for the associated Content Document is managed externally, such as through a Document Checklist Item. The document type is required when the document is specified as a blob or a URL. |
| ErrorMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe message with information about the failure of OCR API calls during extraction. |
| ExtractedItemData | TypetextareaPropertiesNillableDescriptionA JSON string from the OCR service’s response containing data extracted from items in the document. Available in API version 56.0 and later. |
| ExtractedValues | TypetextareaPropertiesNillableDescriptionThe information extracted from the document.This field is encryptable with Salesforce Platform Encryption. |
| ExtractedRawData | TypetextareaPropertiesNillableDescriptionA JSON string from the OCR service response containing data extracted from the document in a raw format. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the OCR document scan result. |
| OcrService | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe name of the OCR service that extracts information from the document and maps it to the Salesforce object.Possible values are:AMAZON_TEXTRACTAMAZON_TEXTRACT_ANALYZED_ID—Available in API version 57.0 and later.PDF_DOCX_EXTRACT_TEXT |
| OcrStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of the extraction and mapping of information from the document field.Possible values are:ERROROCR_ENQUEUESUCCESS |
| PageNumber | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe number of the page in the document in which the extracted value is available. |
| Rotation | TypeintPropertiesFilter, Group, Nillable, SortDescriptionAngle of the document at which it’s scanned. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OcrDocumentScanResultFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[OcrDocumentScanResultHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

## Related Topics

- OcrDocumentScanResultFeed (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)
- OcrDocumentScanResultHistory (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)
