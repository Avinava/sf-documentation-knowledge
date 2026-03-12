---
title: "ShiftStatus"
domain: object-reference
topic: shiftstatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.078Z
estimatedTokens: 364
keywords: [ShiftStatus, shift, Tentative, Published, Confirmed, API, versions, 46.0, later, Calls, Special, Access, Rules, Usage]
---

# ShiftStatus

> Represents a shift, such as Tentative, Published, or Confirmed.
      Available in API versions 46.0 and later.

# ShiftStatus

Represents a shift, such as Tentative, Published, or Confirmed. Available in API versions 46.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUniquely identifies a picklist value so it can be retrieved without using an ID or master label. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this is the default shift status value (true) or not (false) in the picklist. Only one value can be the default value. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMaster label for this shift status value. This display value is the internal label that does not get translated. Limit: 255 characters. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber used to sort this value in the shift status picklist. These numbers are not guaranteed to be sequential, as some previous shift status values might have been deleted. |
| StatusCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDescribes the status of the shift using static values. Possible values are:TentativePublishedConfirmed |

## Usage

Scheduling and dispatching service resources using shift data is not supported in API version 46.0.
