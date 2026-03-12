---
title: "OmniTrackingComponentDef"
domain: omnistudio
topic: omnitrackingcomponentdef
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:52.543Z
estimatedTokens: 721
keywords: [OmniTrackingComponentDef, FlexCard, OmniScript, member, OmniTrackingGroup, tracks, user, interactions, OmniAnalytics, API, version, 60.0, later, Calls, Special]
---

# OmniTrackingComponentDef

> Represents a FlexCard or OmniScript that is a member of an OmniTrackingGroup,
         which tracks user interactions in OmniAnalytics. This object is available in API
      version 60.0 and later.

# OmniTrackingComponentDef

Represents a FlexCard or OmniScript that is a member of an OmniTrackingGroup, which tracks user interactions in OmniAnalytics. This object is available in API version 60.0 and later.

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
| ComponentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of component for which user interactions are tracked.Possible values are:FlexcardOmniscript |
| ComponentVersion | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe version of the FlexCard or OmniScript. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the OmniTrackingComponentDef in the API. This name can contain only underscores and alphanumeric characters and must be unique in your organization. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. Limit: 80 characters.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language for the OmniTrackingComponentDef. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique master label of the OmniTrackingComponentDef. This internal label doesn’t get translated. |
| OmniTrackingComponentDefKey | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionA UUID generated internally by Salesforce to uniquely identify an OmniTrackingComponentDef record across all orgs. |
| OmniTrackingGroup | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the related OmniTrackingGroup object.This field is a relationship field.Relationship NameOmniTrackingGroupRelationship TypeLookupRefers ToOmniTrackingGroup |
