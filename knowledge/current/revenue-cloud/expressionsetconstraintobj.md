---
title: "ExpressionSetConstraintObj"
domain: revenue-cloud
topic: expressionsetconstraintobj
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.374Z
estimatedTokens: 573
keywords: [ExpressionSetConstraintObj, association, Product, constraint, model, tags, defined, API, version, 63.0, later, Calls, Special, Access, Rules]
---

# ExpressionSetConstraintObj

> Represents the association between a Product object and the constraint model
         tags defined in a given constraint model. This object is available in API version 63.0
      and later.

# ExpressionSetConstraintObj

Represents the association between a Product object and the constraint model tags defined in a given constraint model. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available in orgs where Revenue Cloud is enabled.

## Fields

| Field | Details |
| --- | --- |
| ConstraintModelTag | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product tag that is defined in the constraint model, for example, Laptop. |
| ConstraintModelTagType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the product tag that is defined in the constraint model.Possible values are:PortTypeThe default value is Type. |
| ExpressionSetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe expression set associated with the expression set constraint object.This field is a relationship field.Relationship NameExpressionSetRefers ToExpressionSet |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user accessed this record or list view (LastReferencedDate) but didn’t view it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the expression set constraint. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionFor internal use only.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object associated with the expression set constraint object.This field is a polymorphic relationship field.Relationship NameReferenceObjectRefers ToProduct2, ProductClassification, ProductRelatedComponent |
