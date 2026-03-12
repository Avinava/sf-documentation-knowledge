---
title: "SvcCatalogItemAttribute"
domain: financial-services-cloud-object-reference
topic: svccatalogitemattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.674Z
estimatedTokens: 875
keywords: [SvcCatalogItemAttribute, pre-filled, fulfillment, flow, inputs, user, questions, ask, users, context, service, catalog, item, version, API]
---

# SvcCatalogItemAttribute

> Represents pre-filled fulfillment flow inputs and user questions to ask to
         users in the context of a service catalog item version. This object is available in
      API version 57.0 and later.

# SvcCatalogItemAttribute

Represents pre-filled fulfillment flow inputs and user questions to ask to users in the context of a service catalog item version. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttributeType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of the attribute used to determine if it's a pre-filled input or a questions to ask to users.Possible values are:BaseExtendedThe default value is Extended. |
| DataType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of the attribute value used into to render questions and validate data filled by users.Possible values are:AttachmentCheckboxCurrencyDateDatetimeDisplayTextEmailIPAddressIntegerListOfBooleanListOfDoubleListOfIntegerListOfMapsListOfStringLookupMapMultilineTextNumberNumericScalePercentagePicklistQueueSinglelineTextTextURLThe default value is Text. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the service catalog item attribute. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique name in the scope of a Service Catalog Item Version. |
| FieldIdentifier | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unique identifier of the custom or standard field.Possible values are:CaseIdCatalogItemDescriptionCatalogItemNameCloneSourceIdClosedDateCreatedByIdCreatedDateIdIsClosedIsDeletedItemFlowVersionItemFlowVersionLookupIdLastModifiedByIdLastModifiedDateLastReferencedDateLastViewedDateNameOwnerIdSubmitterIdSvcCatalogItemDefinitionIdSystemModstampUserRecordAccessId |
| InputVariable | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the input variable in which the attribute value will be forwarded. |
| InputVariableValue | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAttribute value defined by the catalog builder. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the service catalog item attribute is required.The default value is false. |
| ItemVersionStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the status of the service catalog item version for which the attribute is defined.Possible values are:ActiveDraftObsoleteThe default value is Draft. |
| Label | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA label for the service catalog item attribute. |
| ParentAttributeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated record.This field is a relationship field.Relationship NameParentAttributeRelationship TypeLookupRefers ToSvcCatalogItemAttribute |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSort order used to display questions in a specific order. |
| SvcCatalogItemDefId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe service catalog item definition for which the attribute is defined.This field is a relationship field.Relationship NameSvcCatalogItemDefRelationship TypeLookupRefers ToSvcCatalogItemDef |
