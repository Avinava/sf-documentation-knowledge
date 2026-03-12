---
title: "DocumentGenerationProcess"
domain: clm-developer-guide
topic: documentgenerationprocess
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.777Z
estimatedTokens: 1332
keywords: [DocumentGenerationProcess, Supports, server-side, document, generation, requests, responses, API, version, 56.0, later, Calls]
---

# DocumentGenerationProcess

> Supports server-side document generation requests and responses. This object is available in API version 56.0 and later.

# DocumentGenerationProcess

Supports server-side document generation requests and responses. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalMetadata | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores metadata for dynamic images used during document generation. Available in API version 66.0 and later. |
| DataRaptorInput | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAny additional input required for document generation, such as object ID, JSON, or a string. |
| DocGenAdditionalInput | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionFor internal use only. |
| DocGenAdditionalInputType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionFor internal use only. |
| DocGen​ApiVersion​Type | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the API version to use for document generation. Possible values include Basic and Advanced. The default value is Basic.Available in API version 62.0 |
| Document​TemplateId | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID of the document template for operations like cloning or creating a new version.Available in API version 62.0. |
| EstimatedDocumentSize | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor internal use only. |
| DocumentInputType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe input type of the document.Possible values are:DocumentTemplate—Document TemplateNoneThe default value is None. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRepresents an automatically generated system name. Example: Request-001. |
| HasDocGenFontSource | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the document template font (true) or a rich text editor font (false) is used for rendering values during document generation.The default value is false. |
| IsSharedExternally | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the document is shared with external users (true) or not (false).The default value is false. Available in API version 66.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user that owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PdfDocIdentifiersList | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe PDF document IDs of the contract documents to be converted into a single .pdf file. You can combine upto ten PDFs into a single file.Make sure the content version ID for each PDF file is 18 characters long.Available in API version 63.0 and later. |
| ReferenceObject | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionRefers to the object to which generated document is attached. |
| RequestText | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequests parameters that are passed in the payload. |
| ResponseText | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequests parameters that are passed in the payload. |
| SourceObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the object from which the document generation request is created. For example, Contract Document Version.This field is a polymorphic relationship field.Relationship NameSourceObjectRelationship TypeLookupRefers ToContractDocumentVersion |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionContains the status of the request.Possible values are:FailureSuccessInProgressThe default value is InProgress. |
| TokenData | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionContains JSON data with information that users enter in the new, generated document. |
| TokenData​Content​Document | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe Token Data Content Document associated with the Document Generation Process. Contains information that users enter in the new generated document. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of service requested for the document for generating and converting to PDF.Possible values are:GenerateConvertGenerateAndConvertMergePDFThe default value is Generate. |
