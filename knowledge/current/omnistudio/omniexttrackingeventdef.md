---
title: "OmniExtTrackingEventDef"
domain: omnistudio
topic: omniexttrackingeventdef
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:54.095Z
estimatedTokens: 830
keywords: [OmniExtTrackingEventDef, Represents, format, FlexCard, OmniScript, user, interaction, data, third-party, Analytics, system, such, Google, accept., API, version, 60.0, later., Note, Important]
---

# OmniExtTrackingEventDef

> Represents a format for FlexCard or OmniScript user interaction data that a
         third-party Analytics system such as Google Analytics can accept. This object is
      available in API version 60.0 and later.

# OmniExtTrackingEventDef

Represents a format for FlexCard or OmniScript user interaction data that a third-party Analytics system such as Google Analytics can accept. This object is available in API version 60.0 and later.

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
| ComponentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of component for which user interactions are tracked.Possible values are:FlexcardOmniscript |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description of the OmniExtTrackingEventDef. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the OmniExtTrackingEventDef in the API. This name can contain only underscores and alphanumeric characters and must be unique in your organization. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. Limit: 80 characters.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| InclusionRule | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA true-or-false condition that determines whether an event is sent to the third-party Analytics system. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language for the OmniExtTrackingEventDef. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique master label of the OmniExtTrackingEventDef. This internal label doesn’t get translated. |
| OmniExtTrackingDef | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the related OmniExtTrackingDef object.This field is a relationship field.Relationship NameOmniExtTrackingDefRelationship TypeLookupRefers ToOmniExtTrackingDef |
| OmniExtTrackingEventDefKey | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionA UUID generated internally by Salesforce to uniquely identify an OmniExtTrackingEventDef record across all orgs. |
| PayloadTemplate | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe payload template structure with placeholders for runtime data. This is used at runtime to generate the actual payload to be sent to the external Analytics service. |
