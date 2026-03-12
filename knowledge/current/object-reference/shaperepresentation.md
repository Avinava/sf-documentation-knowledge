---
title: "ShapeRepresentation"
domain: object-reference
topic: shaperepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.006Z
estimatedTokens: 337
keywords: [ShapeRepresentation, shape, org, includes, licenses, limits, easily, scratch, orgs, source, org’s, API, version, 50.0, later]
---

# ShapeRepresentation

> Contains information about the shape of an org. The shape of an org includes
      licenses and limits information. You can easily create scratch orgs based on a source org’s
      shape. This object is available in API version 50.0 and later.

# ShapeRepresentation

Contains information about the shape of an org. The shape of an org includes licenses and limits information. You can easily create scratch orgs based on a source org’s shape. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA free-form text field for you to enter a description of this org shape. This field has a maximum length of 255 characters. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate when the org shape was last referenced. This field is read-only. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate when the org shape was last viewed. This field is read-only. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe alias for the org shape. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionStatus of this org shape. You can use an org shape when it’s Active. This field is read-only.Possible values are:ActiveErrorInProgressInactiveNew |
