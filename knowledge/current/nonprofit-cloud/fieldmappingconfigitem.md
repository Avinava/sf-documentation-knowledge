---
title: "FieldMappingConfigItem"
domain: nonprofit-cloud
topic: fieldmappingconfigitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.463Z
estimatedTokens: 470
keywords: [FieldMappingConfigItem, mapped, defined, source, destination, API, version, 63.0, later, Calls, Special, Access, Rules]
---

# FieldMappingConfigItem

> Represents the fields mapped between a defined source object and the
         destination object and fields. This object is available in API version 63.0 and later.

# FieldMappingConfigItem

Represents the fields mapped between a defined source object and the destination object and fields. This object is available in API version 63.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| DestinationFieldId | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe ID of the destination field for the field mapping configuration. |
| DestinationObjectId | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe ID of the destination object for the field mapping configuration. |
| FieldMappingConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent field mapping configuration associated with the field mapping configuration item.This field is a relationship field.Relationship NameFieldMappingConfigRelationship TypeMaster-detailRefers ToFieldMappingConfig (the master object) |
| Sequence | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe order number of the field relative to other fields, determining the sequence in which fields are displayed within a custom user interface. |
| SourceFieldId | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe ID of the source field for the field mapping configuration. |
