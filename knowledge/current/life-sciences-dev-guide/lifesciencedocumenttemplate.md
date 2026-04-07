---
title: "LifeScienceDocumentTemplate"
domain: life-sciences-dev-guide
topic: lifesciencedocumenttemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:00.661Z
estimatedTokens: 669
keywords: [LifeScienceDocumentTemplate, Stores, template, general]
---

> Stores the template name and general information about the template.

# LifeScienceDocumentTemplate

Stores the template name and general information about the template.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AvailableObjectType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Determines where the template is shown for document generation.Possible values are:AccountAccountPlanCall |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDocument template description. |
| DocumentRecordTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Record Type used for LifeScienceDocument records created from this template.This field is a relationship field.Relationship NameDocumentRecordTypeRefers ToRecordType |
| DocumentTemplateId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. This field is unique within your organization.This field is a relationship field.Relationship NameDocumentTemplateRefers ToDocumentTemplate |
| FilterTypes | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionTargets the document template to specific accounts or segments. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the Life Science document template. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SignatureType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSignature type for a template.Possible values are:ElectronicPhysical |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
