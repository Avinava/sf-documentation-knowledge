---
title: "LifeSciMetadataFieldValue"
domain: life-sciences-dev-guide
topic: lifescimetadatafieldvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.459Z
estimatedTokens: 1108
keywords: [LifeSciMetadataFieldValue, Life, Sciences, configuration, record, child, LifeSciMetadataRecord, API, version, 65.0, later, Calls, Associated, Objects]
---

# LifeSciMetadataFieldValue

> Represents a field value for a Life Sciences configuration record. This
         object is a child of LifeSciMetadataRecord. This object is available in API version 65.0 and later.

# LifeSciMetadataFieldValue

Represents a field value for a Life Sciences configuration record. This object is a child of LifeSciMetadataRecord. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DataType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The data type of the field.Possible values are:BOOLEANDATEDATETIMEDOUBLEFIELDLONGTEXTNUMBEROBJECTPHONEPICKLISTTEXTURL |
| DateTimeValue | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time value for the field. |
| DateValue | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date value for the field. |
| FieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The name of the field. |
| FieldValueApiName | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionRequired. The API name of the field value record. |
| HasBooleanValue | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Boolean value of the field is true or false.The default value is false. |
| IntegerValue | TypelongPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe integer value for the field. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LifeScienceMetadataRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The configuration record associated with the field value.This field is a relationship field.Relationship NameLifeScienceMetadataRecordRelationship TypeMaster-detailRefers ToLifeSciMetadataRecord (the master object) |
| LongTextValue | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe long text value for the field. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the field value record. |
| NumberValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number value for the field. |
| PhoneValue | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone value for the field. |
| PicklistValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe picklist value for the field. |
| TextValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe text value for the field. |
| UrlValue | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL value for the field. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LifeSciMetadataFieldValueFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LifeSciMetadataFieldValueHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LifeSciMetadataFieldValueFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- LifeSciMetadataFieldValueHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
