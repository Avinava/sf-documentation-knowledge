---
title: "OpportunityHistory"
domain: object-reference
topic: opportunityhistory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.526Z
estimatedTokens: 857
keywords: [OpportunityHistory, stage, history, opportunity, Calls, Usage]
---

# OpportunityHistory

> Represents the stage history of an
   opportunity.

# OpportunityHistory

Represents the stage history of an opportunity.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionEstimated total sale amount. |
| CloseDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate when the opportunity is expected to close. |
| ExpectedRevenue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionCalculated revenue based on the Amount and Probability fields. |
| ForecastCategory | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionCategory that determines the column in which an opportunity is totaled in a forecast. Label is To ForecastCategory.BestCaseClosedForecastMostLikelyOmittedPipeline |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| OpportunityId | TypereferencePropertiesFilter, Group, SortDescriptionID of the associated Opportunity.This is a relationship field.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| PrevAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe value in the opportunity’s Amount field before the update of the opportunity. In OpportunityHistory records created before Winter ’21, the value is null.Available in API version 50.0 and later. |
| PrevCloseDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe value in the opportunity’s Close Date field before the update of the opportunity. In OpportunityHistory records created before Winter ’21, the value is null.Available in API version 50.0 and later. |
| Probability | TypepercentPropertiesFilter, Nillable, SortDescriptionPercentage of estimated confidence in closing the opportunity. |
| StageName | TypepicklistPropertiesFilter, Group, SortDescriptionName of the current stage of the opportunity (for example, Prospect or Proposal). |

## Usage

This object represents the history of a change to the Amount, Probability, Stage, or Close Date fields of an Opportunity. The OpportunityFieldHistory object represents the history of a change to any of the fields of an Opportunity. To obtain information about how a particular opportunity is progressing, query the OpportunityHistory records associated with a given Opportunity. Please note that if an opportunity's Amount, Probability, Stage, or Close Date fields have not changed, nothing will be returned in the OpportunityHistory objects. In this case, query the OpportunityFieldHistory records associated with a given Opportunity to get more information about changes to the opportunity.

This object is read-only. The system generates a new record whenever a user or client application changes the value of any of the above fields; the then-current values of all of these major fields are saved in the newly-generated object.

This object respects field-level security on the parent object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The record is automatically deleted if its parent Opportunity is deleted.

#### See Also

-   [Opportunity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm "Represents an opportunity, which is a sale or pending deal.")

## Related Topics

- Opportunity (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm)
