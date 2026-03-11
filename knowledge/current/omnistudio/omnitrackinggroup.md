---
title: "OmniTrackingGroup"
domain: omnistudio
topic: omnitrackinggroup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:25:12.072Z
keywords: [OmniTrackingGroup, Note, Important, Supported, Calls, Special, Access, Rules, Fields]
---

# OmniTrackingGroup

# OmniTrackingGroup

Represents a group of FlexCard and OmniScript components that have their user interactions tracked together in OmniAnalytics. This object is available in API version 60.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This object is part of OmniStudio Standard, not OmniStudio for Vlocity.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Using OmniAnalytics requires having an OmniStudio license and enabling OmniAnalytics in Setup.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description of the OmniTrackingGroup. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the OmniTrackingGroup in the API. This name can contain only underscores and alphanumeric characters and must be unique in your organization. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. Limit: 80 characters.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the OmniTrackingGroup became inactive. |
| GroupType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies whether this OmniTrackingGroup sends tracking data to a third-party Analytics system such as Google Analytics.Possible values are:External—A third-party Analytics system is used.Internal—No third-party Analytics system is used. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the OmniTrackingGroup is active.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language for the OmniTrackingGroup. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique master label of the OmniTrackingGroup. This internal label doesn’t get translated. |
| MaxAgeInDays | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of days the group and its analytics data is active beyond which the data is deleted. |
| OmniExtTrackingDef | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related OmniExtTrackingDef object. Required if GroupType is set to External.This field is a relationship field.Relationship NameOmniExtTrackingDefRelationship TypeLookupRefers ToOmniExtTrackingDef |
| OmniTrackingGroupKey | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionA UUID generated internally by Salesforce to uniquely identify an OmniTrackingGroup record across all orgs. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the OmniTrackingGroup became active. |