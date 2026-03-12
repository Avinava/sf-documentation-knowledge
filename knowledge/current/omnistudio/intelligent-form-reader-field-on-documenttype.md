---
title: "Intelligent Form Reader Field on DocumentType"
domain: omnistudio
topic: intelligent-form-reader-field-on-documenttype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.952Z
estimatedTokens: 300
keywords: [Intelligent, Form, Reader, DocumentType, Standard, custom, extend, represent, document, identity, documents, want, extract, API, version]
---

# Intelligent Form Reader Field on DocumentType

> Standard and custom fields extend the standard DocumentType object for use in
   Intelligent Form Reader to represent information about document types for identity documents or
   other documents with information that you want to extract. This field is available in API
  version 57.0 and later.

# Intelligent Form Reader Field on DocumentType

Standard and custom fields extend the standard DocumentType object for use in Intelligent Form Reader to represent information about document types for identity documents or other documents with information that you want to extract. This field is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FormType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe category of document that’s extracted. The OCR service considers this type while extracting text from the document. Available in API version 57.0 and later.Possible values are:IDENTITY_DOCUMENT—Identity DocumentUSER_DEFINED_TYPE—Other Forms |

#### See Also

-   [*Financial Services Cloud Developer Guide*: DocumentType](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_documenttype.htm "Financial Services Cloud Developer Guide: DocumentType - HTML (New Window)")
