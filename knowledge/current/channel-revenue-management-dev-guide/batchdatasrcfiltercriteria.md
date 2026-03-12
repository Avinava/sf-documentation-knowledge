---
title: "BatchDataSrcFilterCriteria"
domain: channel-revenue-management-dev-guide
topic: batchdatasrcfiltercriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.797Z
estimatedTokens: 571
keywords: [BatchDataSrcFilterCriteria, condition, filter, criteria, retrieve, records, data, source, batch, job, API, version, 66.0, later, Calls]
---

# BatchDataSrcFilterCriteria

> Represents the details of a condition in the filter criteria used to retrieve
         records from the data source of a batch job. This object is available in API version
      66.0 and later.

# BatchDataSrcFilterCriteria

Represents the details of a condition in the filter criteria used to retrieve records from the data source of a batch job. This object is available in API version 66.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| BatchDataSourceId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the batch data source associated with the batch data source filter criteria.This field is a relationship field.Relationship NameBatchDataSourceRelationship TypeMaster-detailRefers ToBatchDataSource (the master object) |
| DomainObjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object that contains the field that's used in the filter criteria condition. |
| DynamicValueType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the data type of the input variable that's used in the filter criteria condition.Possible values are:booleancurrencydatedatetimeintegerpicklistreferencestring |
| FieldName | TypestringPropertiesFilter, Group, SortDescriptionThe name of the field that's used in the filter criteria condition. |
| FieldPath | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe patch of the related object field that's used in the filter criteria condition. |
| FieldValue | TypestringPropertiesFilter, Group, SortDescriptionThe value of the specified field used to filter records of the data source. |
| FilterCriteriaSequence | TypeintPropertiesFilter, Group, SortDescriptionThe sequence number of the condition in the filter criteria. |
| IsDynamicValue | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the value of the filter criteria condition is provided by an input variable.The default value is false. |
| Operator | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the operator used in the filter criteria condition.Possible values are:equals—Equalsexcludes—ExcludesgreaterThan—Greater ThangreaterThanOrEqualTo—Greater Than Or Equal Toin—Inincludes—IncludesisNotNull—Is Not NullisNull—Is NulllessThan—Less ThanlessThanOrEqualTo—Less Than Or Equal Tolike—LikenotEquals—Not EqualsnotIn—Not In |
