---
title: "AccountInsight"
domain: object-reference
topic: accountinsight
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.607Z
estimatedTokens: 785
keywords: [AccountInsight, individual, insight, key, business, development, account, record, Calls, Special, Access, Rules, Usage]
---

# AccountInsight

> Represents an individual insight (a key business development)
			related to an account record.

# AccountInsight

Represents an individual insight (a key business development) related to an account record.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

To see an insight related to a specific account, users need a Sales Cloud Einstein license and access to the account record. As of the Spring ’20 release, Pardot and Sales Engagement users no longer have access to this object.

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, SortDescriptionID of the related account record. |
| ActualHeardWithinDays | TypeintPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| CompetitorName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field has been deprecated as of API version 45.0. |
| ContactName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field is not in use as of API version 46.0. |
| ContactTitle | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field is not in use as of API version 46.0. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| Division | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe division of the related record. |
| ExpectedHeardWithinDays | TypeintPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| LastHeard | TypedateTimePropertiesFilter, Nillable, SortDescriptionReserved for future use. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| NumberOfNewsArticles | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of news articles related to insights of type M&A activity detected, Company is expanding, and Leadership changes. |
| Rationale | TypestringPropertiesFilter, Group, NillableDescriptionThe explanation for an insight, providing more background information and details that are specific to the org. |
| Title | TypestringPropertiesFilter, Group, NillableDescriptionThe title of the insight. |
| TrendType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe trend type of the insight. Possible values include:NegativePositiveInformational |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of insight. Possible values include:M&A activity detectedCompany is expandingLeadership changes |

## Usage

This object is read-only and isn’t supported with workflows, triggers, or process builder.
