---
title: "Intelligent Document Reader Field on DocumentType"
domain: psc-api
topic: intelligent-document-reader-field-on-documenttype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.760Z
estimatedTokens: 290
keywords: [Intelligent, Document, Reader, DocumentType, Standard, custom, extend, represent, identity, documents, containing, want, extract, Calls]
---

# Intelligent Document Reader Field on DocumentType

> Standard and custom fields extend the standard DocumentType object
         for use in Intelligent Document Reader to represent information about document types for
         identity documents or other documents containing information that you want to
      extract.

# Intelligent Document Reader Field on DocumentType

Standard and custom fields extend the standard DocumentType object for use in Intelligent Document Reader to represent information about document types for identity documents or other documents containing information that you want to extract.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FormType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe category of document that’s extracted. The OCR service considers this type while extracting text from the document. Available in API version 57.0 and later.Possible values are:IDENTITY_DOCUMENT—Identity DocumentUSER_DEFINED_TYPE—Other Forms |

#### See Also

-   [*Financial Services Cloud Developer Guide*: DocumentType](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_documenttype.htm "Financial Services Cloud Developer Guide: DocumentType - HTML (New Window)")
