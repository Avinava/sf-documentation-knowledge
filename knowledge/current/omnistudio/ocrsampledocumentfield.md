---
title: "OcrSampleDocumentField"
domain: omnistudio
topic: ocrsampledocumentfield
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.567Z
keywords: [OcrSampleDocumentField, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# OcrSampleDocumentField

# OcrSampleDocumentField

Represents the details of the field in a document whose value is extracted and mapped to a Salesforce object field. This object is available in API version 52.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To use this tooling API object, your Salesforce org must have the AWSTextract1000LimitAddOn license.

## Fields

| Field | Details |
| --- | --- |
| CellColumnNumber | TypeintPropertiesCreate, Filter, Group, in Nillable, Sort, UpdateDescriptionThe column number of the cell storing the OCR sample document field’s value in the OCR sample document page item. Available in API version 56.0 and later. |
| CellColumnSpanValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of columns that the cell storing the OCR sample document field’s value must span. Available in API version 56.0 and later. |
| CellRowNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe row number of the cell storing the OCR sample document field’s value in the OCR sample document page item. Available in API version 56.0 and later. |
| CellRowSpanValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of rows that the cell storing the OCR sample document field’s value must span. Available in API version 56.0 and later. |
| FieldLabelMaxX | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA normalized coordinate representing the right edge of the bounding box of the key. |
| FieldLabelMaxY | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA normalized coordinate representing the bottom edge of the bounding box of the key. |
| FieldLabelMinX | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA normalized coordinate representing the left edge of the bounding box of the key. |
| FieldLabelMinY | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA normalized coordinate representing the top edge of the bounding box of the key. |
| IsAutoExtracted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the OCR sample document field is auto-extracted by the OCR service (true) or not (false). Available in API version 57.0 and later.The default value is false. |
| ItemType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of item associated with the OCR sample document field. Available in API version 56.0 and later.Possible value is TABLE. |
| KeyContent | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContent located in a particular area of the document. |
| OcrSampleDocumentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the associated OCR sample document.This is a relationship field.Relationship NameOcrSampleDocumentRelationship TypeLookupRefers ToOcrSampleDocument |
| OcrSampleDocumentPageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the associated OCR sample document page.This is a relationship field.Relationship NameOcrSampleDocumentPageRelationship TypeLookupRefers ToOcrSampleDocumentPage |
| OcrSampleDocumentPageItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the OCR sample document page item with the field. Available in API version 56.0 and later.This is a relationship field.Relationship NameOcrSampleDocumentPageItemRelationship TypeLookupRefers ToOcrSampleDocumentPageItem |