---
title: "FileSearchActivity"
domain: object-reference
topic: filesearchactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.201Z
estimatedTokens: 457
keywords: [FileSearchActivity, search, activity, file, API, version, 38.0, later, Calls]
---

# FileSearchActivity

> Represents search activity on a file. This object is available in API
      version 38.0 and later.

# FileSearchActivity

Represents search activity on a file. This object is available in API version 38.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| AvgNumResults | TypedoublePropertiesFilter, SortDescriptionThe number of search results returned for the search term. If Period is also included, this value is aggregated based on the time period specified. |
| ClickRank | TypedoublePropertiesFilter, Nillable, SortDescriptionThe order that the file appeared in the search results when users clicked it from the list of results. |
| CountQueries | TypeintPropertiesFilter, Group, SortDescriptionThe number of searches for the period (day, month, or year). |
| CountUsers | TypeintPropertiesFilter, Group, SortDescriptionThe number of individual users who clicked the file. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of search activity. |
| Period | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe time period that the search count is applied to. For example, a record where the Count is 70 and the Period is Monthly indicates that 70 searches took place over the past month. Totals are aggregated daily for the current month, monthly from the past full month through the past full year, and yearly beyond that.Possible values are:DAYMONTHYEAR |
| QueryDate | TypedatePropertiesFilter, Group, SortDescriptionThe date of the search. |
| QueryLanguage | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language filter that’s applied to the user’s search. |
| SearchTerm | TypestringPropertiesFilter, Group, SortDescriptionThe first 100 characters of the search term that was used to search published files. |
