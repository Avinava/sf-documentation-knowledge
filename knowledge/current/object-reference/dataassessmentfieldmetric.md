---
title: "DataAssessmentFieldMetric"
domain: object-reference
topic: dataassessmentfieldmetric
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.832Z
estimatedTokens: 617
keywords: [DataAssessmentFieldMetric, summary, statistics, matched, blank, differing, account, records, org, compared, Data.com, API, version, 37.0, later]
---

# DataAssessmentFieldMetric

> Represents summary statistics for matched, blank, and differing
			fields in account records of an org compared to records in Data.com. This object is
		available in API version 37.0 and later.

# DataAssessmentFieldMetric

Represents summary statistics for matched, blank, and differing fields in account records of an org compared to records in Data.com. This object is available in API version 37.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields will be removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

Child Relationships

DataAssessmentFieldMetric is a child object of [DataAssessmentMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dataassessmentmetric.htm#sforce_api_objects_DataAssessmentMetric "Represents a summary of statistics for fields matched and unmatched in your account records with Data.com account records. This object is available in API version 37.0 and later.") object.

## Fields

| Field Name | Details |
| --- | --- |
| DataAssessmentMetricId | TypereferencePropertiesFilter, Group, SortDescriptionA unique number that identifies the parent DataAssessmentMetric record.This is a relationship field.Relationship NameDataAssessmentMetricRelationship TypeLookupRefers ToDataAssessmentMetric |
| FieldName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the assessed field. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn optional field used to name your record. |
| NumMatchedBlanks | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of matched records that contain blank fields. |
| NumMatchedDifferent | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of matched records that have a different value for this field. |
| NumMatchedInSync | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of matched records that have the same value for this field. |
| NumUnmatchedBlanks | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unmatched records that contain blank fields. |

## Related Topics

- DataAssessmentMetric (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dataassessmentmetric.htm)
