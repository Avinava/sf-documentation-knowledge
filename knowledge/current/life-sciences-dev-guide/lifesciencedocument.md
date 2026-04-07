---
title: "LifeScienceDocument"
domain: life-sciences-dev-guide
topic: lifesciencedocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:10.872Z
estimatedTokens: 901
keywords: [LifeScienceDocument, signed, document, stores, Calls]
---

# LifeScienceDocument

> Represents a signed document and stores document fields.

# LifeScienceDocument

Represents a signed document and stores document fields.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account for which the document is created.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO currency code associated with the currency values in the life science document.Possible values are:USD—U.S. DollarThe default value is USD. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LifeSciDocTemplateVersionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Indicates the document template version that was used to generate this document.This field is a relationship field.Relationship NameLifeSciDocTemplateVersionRefers ToLifeSciDocTemplateVersion |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the Life Science document. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RelatedObjectRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe related record for the document.This field is a polymorphic relationship field.Relationship NameRelatedObjectRecordRefers ToAccountPlan, ProviderVisit |
| SignatureGeolc | TypelocationPropertiesNillableDescriptionThe Location where the document was signed. |
| SignatureGeolcLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latitude where the document was signed. |
| SignatureGeolcLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe longitude where the document was signed. |
| SignatureGeolcMissingReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe reason why location retrieve failed.Possible values are:DeviceRestrictedOfflineUserRestricted |
| SignatureGeolcTimestamp | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last time when location was acquired. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the document.Possible values are:DraftSubmitted |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of the document. |
