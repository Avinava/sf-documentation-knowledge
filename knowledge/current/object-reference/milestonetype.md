---
title: "MilestoneType"
domain: object-reference
topic: milestonetype
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.910Z
estimatedTokens: 357
keywords: [MilestoneType, milestone, step, customer, support, process, API, version, 18.0, later, Calls, Special, Access, Rules, Usage]
---

# MilestoneType

> Represents a milestone (required step in a
        customer support process).
    This object is available in API version 18.0 and later.

# MilestoneType

Represents a milestone (required step in a customer support process). This object is available in API version 18.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only Salesforce admins, users with access to the Case, Entitlement, or Work Order objects, and users with the View Setup and Configuration permission can access this object.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, UpdateDescriptionA description of the milestone. |
| Name | TypestringPropertiesCreate, Filter, idLookup, UpdateDescriptionThe name of the milestone. |
| RecurrenceType | TypepicklistPropertiesCreate,UpdateDescriptionThe type of recurrence for the milestone. |

## Usage

Use this object to query and manage the milestone type for CaseMilestone records.

#### See Also

-   [CaseMilestone](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casemilestone.htm "Represents a milestone (required step in a customer support process) on a Case. This object is available in API version 18.0 and later.")

-   [SlaProcess](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_slaprocess.htm "Represents an entitlement process associated with an Entitlement. This object is available in API version 19.0 and later.")

## Related Topics

- CaseMilestone (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casemilestone.htm)
- SlaProcess (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_slaprocess.htm)
