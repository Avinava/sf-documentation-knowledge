---
title: "DataAssessmentMetric"
domain: object-reference
topic: dataassessmentmetric
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.837Z
estimatedTokens: 460
keywords: [DataAssessmentMetric, summary, statistics, matched, unmatched, account, records, Data.com, API, version, 37.0, later, Calls]
---

# DataAssessmentMetric

> Represents a summary of statistics for fields matched and unmatched
			in your account records with Data.com account records. This object is available in
		API version 37.0 and later.

# DataAssessmentMetric

Represents a summary of statistics for fields matched and unmatched in your account records with Data.com account records. This object is available in API version 37.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields will be removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn optional field used to name your record. |
| NumDuplicates | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of duplicate records. |
| NumMatched | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of matched records. |
| NumMatchedDifferent | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records in your org matched with a Data.com record that have different fields. |
| NumProcessed | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records processed in the data assessment. |
| NumTotal | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records available for data assessment processing. |
| NumUnmatched | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records not matched. |
