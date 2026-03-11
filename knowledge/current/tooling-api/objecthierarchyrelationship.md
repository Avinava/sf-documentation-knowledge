---
title: "ObjectHierarchyRelationship"
domain: tooling-api
topic: objecthierarchyrelationship
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.342Z
keywords: [ObjectHierarchyRelationship, Important, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# ObjectHierarchyRelationship

# ObjectHierarchyRelationship

Represents the mapping between an input source object and an output target object. For example, mapping details to transform a sales quote into a sales agreement. This object is available in API version 56.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object hierarchy relationship record.The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated object hierarchy relationship record in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| InputObjRecordsGrpFieldName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe field name of the input object that groups records. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the ObjectHierarchyRelationship. |
| MappingType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of relationship between the source and target object.Possible values are:ChildToChild—Child to ChildParentToChild—Parent to ChildParentToParent—Parent to ParentSupportThe default value is ParentToParent. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the ObjectHierarchyRelationship record. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe ObjectHierarchyRelationship’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| OutputPntRelationshipFieldName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the relationship between a child and parent for an output object. |
| ParentRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the parent object mapping record.This field is a relationship field.Relationship NameParentRecordRelationship TypeLookupRefers ToObjectHierarchyRelationship |
| ParentRelationshipFieldName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the field that defines the relationship between a parent and child. |
| SourceReferenceRelaFieldName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe field name that defines the relationship between the input and output object. |
| UsageType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the usage type.Possible values are:CLMFieldMappingConvertToSalesAgreementEligibleProgramRebateTypeMapJournalToMemberAggregateTransformationMapping |