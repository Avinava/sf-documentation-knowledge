---
title: "OpportunityFieldHistory"
domain: object-reference
topic: opportunityfieldhistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.517Z
estimatedTokens: 469
keywords: [OpportunityFieldHistory, history, changes, opportunity, versions, 13.0, later, Calls, Usage]
---

# OpportunityFieldHistory

> Represents the history of changes to the values in the fields of an
      opportunity. This object is available in versions 13.0 and later.

# OpportunityFieldHistory

Represents the history of changes to the values in the fields of an opportunity. This object is available in versions 13.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe name of the field that was changed. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| OpportunityId | TypereferencePropertiesFilter, Group, SortDescriptionID of the Opportunity. Label is Opportunity ID.This is a relationship field.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionThe new value of the field that was changed. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionThe latest value of the field before it was changed. |

## Usage

Use this object to identify changes to any fields on an Opportunity. The OpportunityHistory object represents the history of a change to the Amount, Probability, Stage, or Close Date fields of an Opportunity.

This object respects field level security on the parent object.

#### See Also

-   [Opportunity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm "Represents an opportunity, which is a sale or pending deal.")

## Related Topics

- Opportunity (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm)
