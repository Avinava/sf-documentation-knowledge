---
title: "DigitalPassTmplParameter"
domain: loyalty
topic: digitalpasstmplparameter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.927Z
estimatedTokens: 824
keywords: [DigitalPassTmplParameter, specific, configurable, data, digital, pass, template, content, text, date, image, label, visibility, particular, API]
---

# DigitalPassTmplParameter

> Represents a specific, configurable data field within a digital pass
         template. It defines the content type such as text, date, or image, and properties such as
         label and visibility, for a particular section of the pass. This object is available
      in API version 66.0 and later.

# DigitalPassTmplParameter

Represents a specific, configurable data field within a digital pass template. It defines the content type such as text, date, or image, and properties such as label and visibility, for a particular section of the pass. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DataType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The data type of the digital pass template attribute.Possible values are:DateDatetimeDoubleString |
| DefaultValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default value of the digital pass template attribute. |
| DigitalPassTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the digital pass template.This field is a relationship field.Relationship NameDigitalPassTemplateRelationship TypeMaster-detailRefers ToDigitalPassTemplate (the master object) |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the didgital pass template attribute is required (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the digital pass template parameter. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DigitalPassTmplParameterChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[DigitalPassTmplParameterHistory](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- DigitalPassTmplParameterChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
- DigitalPassTmplParameterHistory (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_history.htm)
