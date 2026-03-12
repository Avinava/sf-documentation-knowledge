---
title: "OpportunityInsight"
domain: object-reference
topic: opportunityinsight
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.535Z
estimatedTokens: 1035
keywords: [OpportunityInsight, individual, insight, deal, prediction, follow-up, reminder, key, moment, opportunity, record, Calls, Special, Access, Rules]
---

# OpportunityInsight

> Represents an individual insight (deal prediction, follow-up reminder,
			or key moment) related to an opportunity record.

# OpportunityInsight

Represents an individual insight (deal prediction, follow-up reminder, or key moment) related to an opportunity record.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), query(), retrieve()

## Special Access Rules

To see an insight related to a specific opportunity, users need a Sales Cloud Einstein license and access to the opportunity record. As of the Spring ’20 release, Pardot and Sales Engagement users no longer have access to this object.

## Fields

| Field Name | Details |
| --- | --- |
| ActualHeardWithinDays | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of days it has been since a prospect has responded for insights of type Prospect has not responded and No communication. |
| CloseDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe close date of the related opportunity for insights of type Opportunity is overdue and Opportunity is unlikely to close in time. |
| CompetitorName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field has been deprecated as of API version 45.0. |
| ContactName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field is not in use as of API version 46.0. |
| ContactTitle | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field is not in use as of API version 46.0. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| Division | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe division of the related record. |
| ExpectedHeardWithinDays | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe expected number of days it takes to hear back from a prospect for insights of type Prospect has not responded and No communication. |
| LastHeard | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the related prospect was last heard from for insights of type Prospect has not responded. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| OpportunityId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related opportunity record. |
| Rationale | TypestringPropertiesFilter, Group, NillableDescriptionThe explanation for an insight, providing more background information and details that are specific to the org. |
| Reason | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe reason why a specific insight type is appearing. Relevant to the following insights:Opportunity is unlikely to close in timeOpportunity slowingOpportunity boostingTime-consuming opportunity |
| TaskDue | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that a task associated with the related opportunity record is due. |
| Title | TypestringPropertiesFilter, Group, NillableDescriptionThe title of the insight. |
| TrendType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe trend type of the insight. Possible values include:NegativePositiveInformational |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of insight. Possible values include:Opportunity is unlikely to close in timeProspect has not respondedOpportunity slowingOpportunity boostingTime-consuming opportunityNo communicationRe-engaged opportunityOpportunity has an overdue taskOpportunity is overdueOpportunity has no open activityUnusual opportunity amount |

## Usage

This object is read-only and isn’t supported in workflows, triggers, or process builder.
