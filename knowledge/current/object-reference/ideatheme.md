---
title: "IdeaTheme"
domain: object-reference
topic: ideatheme
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.148Z
estimatedTokens: 460
keywords: [IdeaTheme, invitation, zone, members, submit, ideas, focused, specific, topic, API, version, later, Calls, Usage]
---

# IdeaTheme

> Represents an invitation to zone members to
        submit ideas that are focused on a specific topic. This object is available in API
      version 26 and later.

# IdeaTheme

Represents an invitation to zone members to submit ideas that are focused on a specific topic. This object is available in API version 26 and later.

## Supported Calls

create(), delete(), describeLayout(), query(), retrieve(), search(), undelete(), update(),

## Fields

| Field Name | Details |
| --- | --- |
| Categories | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionCustomizable multi-select picklist used to organize ideas and idea themes into logical groupings. |
| CommunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort,DescriptionThe zone ID associated with the idea theme. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for organizations with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the idea theme. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate marking the end of the idea theme. |
| LastReferencedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate that the idea theme begins. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionCustomizable picklist of values used to specify the status of the idea theme. |
| Title | TypestringPropertiesCreate, Filter, Group, idLookup, Namefield, Sort, UpdateDescriptionTitle of the idea theme. |

## Usage

Use the object to track ideas that are submitted to an idea theme.
