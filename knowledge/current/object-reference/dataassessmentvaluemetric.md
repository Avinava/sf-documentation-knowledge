---
title: "DataAssessmentValueMetric"
domain: object-reference
topic: dataassessmentvaluemetric
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.843Z
estimatedTokens: 502
keywords: [DataAssessmentValueMetric, Summarizes, number, matched, account, records, Data.com, records.This, API, version, 37.0, later, Calls]
---

# DataAssessmentValueMetric

> Summarizes the number of fields matched for your account records
			with Data.com account records.This object is available in API version 37.0 and
		later.

# DataAssessmentValueMetric

Summarizes the number of fields matched for your account records with Data.com account records.This object is available in API version 37.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields will be removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

Child Relationships

DataAssessmentValueMetric is a child of [DataAssessementFieldMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dataassessmentfieldmetric.htm#sforce_api_objects_DataAssessmentFieldMetric "Represents summary statistics for matched, blank, and differing fields in account records of an org compared to records in Data.com. This object is available in API version 37.0 and later.").

## Fields

| Field Name | Details |
| --- | --- |
| DataAssessmentFieldMetricId | TypereferencePropertiesFilter, Group, SortDescriptionA unique number that identifies the parent DataAssessementFieldMetric record.This is a relationship field.Relationship NameDataAssessmentFieldMetricRelationship TypeLookupRefers ToDataAssessmentFieldMetric |
| FieldValue | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe value in the matched field. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn optional field used to name your record. |
| ValueCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times this value appears in this field. |

## Related Topics

- DataAssessementFieldMetric (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dataassessmentfieldmetric.htm)
