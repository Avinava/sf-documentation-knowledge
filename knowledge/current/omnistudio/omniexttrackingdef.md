---
title: "OmniExtTrackingDef"
domain: omnistudio
topic: omniexttrackingdef
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:25:12.040Z
keywords: [OmniExtTrackingDef, Note, Important, Supported, Calls, Special, Access, Rules, Fields]
---

# OmniExtTrackingDef

# OmniExtTrackingDef

Represents a connection between an OmniTrackingGroup in OmniAnalytics and a third-party Analytics system such as Google Analytics. This object is available in API version 60.0 and later.

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
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description of the OmniExtTrackingDef. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the OmniExtTrackingDef in the API. This name can contain only underscores and alphanumeric characters and must be unique in your organization. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. Limit: 80 characters.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the OmniExtTrackingDef is active.The default value is true. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language for the OmniExtTrackingDef. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique master label of the OmniExtTrackingDef. This internal label doesn’t get translated. |
| OmniExtTrackingDefKey | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionA UUID generated internally by Salesforce to uniquely identify an OmniExtTrackingDef record across all orgs. |
| TrackingFrameworkInformation | TypetextareaPropertiesCreate, UpdateDescriptionJSON data containing information about an external service, such as the API call and input parameter names. |
| TrackingServiceProvider | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe third-party Analytics system to which user interaction data is sent.Possible values are:GoogleThe default value is Google. |