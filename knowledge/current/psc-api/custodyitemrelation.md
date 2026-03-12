---
title: "CustodyItemRelation"
domain: psc-api
topic: custodyitemrelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.529Z
estimatedTokens: 940
keywords: [CustodyItemRelation, relationship, custody, item, context, it’s, held, case, proceeding, API, version, 59.0, later, Calls, Special]
---

# CustodyItemRelation

> Represents the relationship between a custody item and the context in
         which it’s held. For example, a custody item related to a case or case proceeding.
      This object is available in API version 59.0 and later.

# CustodyItemRelation

Represents the relationship between a custody item and the context in which it’s held. For example, a custody item related to a case or case proceeding. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Evidence Management is enabled in your org. To access this object, you need the Evidence Management permission set.

## Fields

| Field | Details |
| --- | --- |
| CaseId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe case that's associated with the custody item.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| CaseProceedingId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe case proceeding that's associated with the custody item.This field is a relationship field.Relationship NameCaseProceedingRelationship TypeLookupRefers ToCaseProceeding |
| ContextId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe context of the custody item record.This field is a polymorphic relationship field.Relationship NameContextRelationship TypeLookupRefers ToCase, CaseProceeding |
| ContextType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of object of the custody item context.Possible values are:CaseCaseProceeding |
| CustodyItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe custody item that's related to a context.This field is a relationship field.Relationship NameCustodyItemRelationship TypeLookupRefers ToCustodyItem |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the custody item relation record. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the custody item relation record. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of custody item with reference to the context. Picklist values aren't predefined for this field. Before you create a record, ensure that your Salesforce admin has defined picklist values based on your organization’s requirement. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CustodyItemRelationFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CustodyItemRelationHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CustodyItemRelationFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- CustodyItemRelationHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
