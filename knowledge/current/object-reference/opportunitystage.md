---
title: "OpportunityStage"
domain: object-reference
topic: opportunitystage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.627Z
estimatedTokens: 946
keywords: [OpportunityStage, stage, Opportunity, sales, pipeline, New, Lead, Negotiating, Pending, Closed, Calls, Usage]
---

# OpportunityStage

> Represents the stage of an Opportunity in the sales pipeline, such as New Lead, Negotiating, Pending, Closed, and so
  on.

# OpportunityStage

Represents the stage of an Opportunity in the sales pipeline, such as New Lead, Negotiating, Pending, Closed, and so on.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUniquely identifies a picklist value so it can be retrieved without using an id or master label. |
| DefaultProbability | TypepercentPropertiesFilter, Nillable, Sort,DescriptionThe default percentage estimate of the confidence in closing a specific opportunity for this opportunity stage value. Label is Probability (%). |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescription of this opportunity stage value. Limit: 255 characters. |
| ForecastCategory | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe default forecast category for this opportunity stage value. The forecast category automatically determines how opportunities are tracked and totaled in a forecast.Possible values are:BestCaseClosedForecastMostLikelyOmittedPipeline |
| ForecastCategoryName | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionAvailable in API version 12.0 and later. The default forecast category value for this opportunity stage value.Possible values are:Best CaseClosedCommitMost LikelyOmittedPipeline |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this opportunity stage value is active (true) or not (false). Inactive opportunity stage values are not available in the picklist and are retained for historical purposes only. |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this opportunity stage value represents a closed opportunity (true) or not (false). Multiple opportunity stage values can represent a closed opportunity. Label is Closed. |
| IsWon | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this opportunity stage value represents a won opportunity (true) or not (false). Multiple opportunity stage values can represent a won opportunity. Label is Won. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMaster label for this opportunity stage value. This display value is the internal label that does not get translated. Limit: 255 characters. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber used to sort this value in the opportunity stage picklist. These numbers are not guaranteed to be sequential, as some previous opportunity stage values might have been deleted. |

## Usage

This object represents a value in the opportunity stage picklist, which provides additional information about the stage of an Opportunity, such as its probability or forecast category. Query this object to retrieve the set of values in the opportunity stage picklist, and then use that information while processing Opportunity records to determine more information about a given opportunity. For example, the application could test whether a given opportunity is won or not based on its StageName value and the value of the IsWon property in the associated OpportunityStage object.

This object is read-only via the API.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
