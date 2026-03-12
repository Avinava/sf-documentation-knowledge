---
title: "LifeSciDataChgDefMngFld"
domain: life-sciences-dev-guide
topic: lifescidatachgdefmngfld
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.291Z
estimatedTokens: 798
keywords: [LifeSciDataChgDefMngFld, data, change, configured, objects, API, version, 65.0, later, Calls, Associated]
---

# LifeSciDataChgDefMngFld

> Represents the fields for which the data change request is configured for all
         objects. This object is available in API version 65.0 and later.

# LifeSciDataChgDefMngFld

Represents the fields for which the data change request is configured for all objects. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CountryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country associated with the object.This field is a relationship field.Relationship NameCountryRefers ToLifeSciCountry |
| FieldApiName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the data change request definition field. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| LifeSciDataChgDefId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe data change request definition associated with the object.This field is a relationship field.Relationship NameLifeSciDataChgDefRefers ToLifeSciDataChangeDef |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe identifier assigned to the data change record by an external data source. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ShouldApplyChngImmediately | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether changes to this field must be applied immediately.The default value is false. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |
| ValidationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the validation type for the data change request is internal or external.Possible values are:ExternalInternal |

## Associated Object

This object has the following associated object. If the API version isn’t specified, it's available in the same API versions as this object. Otherwise, it's available in the specified API version and later.

[LifeSciDataChgDefMngFldShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LifeSciDataChgDefMngFldShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
