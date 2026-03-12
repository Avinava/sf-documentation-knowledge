---
title: "OpportunityCompetitor"
domain: object-reference
topic: opportunitycompetitor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.499Z
estimatedTokens: 359
keywords: [OpportunityCompetitor, competitor, Opportunity, Calls, Usage]
---

# OpportunityCompetitor

> Represents a competitor on an Opportunity.

# OpportunityCompetitor

Represents a competitor on an Opportunity.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CompetitorName | TypecomboboxPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionName of the competitor. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the associated Opportunity.This is a relationship field.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| Strengths | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the competitor’s strengths. Limit: 1,000 characters. |
| Weaknesses | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the competitor’s weaknesses. Limit: 1,000 characters. |

## Usage

Use this object to manage competitors on an Opportunity, associating multiple competitors on a opportunity and specifying the strengths and weaknesses of each competitor.

#### See Also

-   [Opportunity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm "Represents an opportunity, which is a sale or pending deal.")

## Related Topics

- Opportunity (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm)
