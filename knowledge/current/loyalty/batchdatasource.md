---
title: "BatchDataSource"
domain: loyalty
topic: batchdatasource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.675Z
estimatedTokens: 429
keywords: [BatchDataSource, source, batch, job, retrieves, records, processing, API, version, 66.0, later, Calls]
---

# BatchDataSource

> Represents the source of information from which a batch job retrieves records
         for processing. This object is available in API version 66.0 and later.

# BatchDataSource

Represents the source of information from which a batch job retrieves records for processing. This object is available in API version 66.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| BatchJobDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the batch job definition associated with batch data source.This field is a relationship field.Relationship NameBatchJobDefinitionRelationship TypeMaster-detailRefers ToBatchJobDefinition (the master object) |
| CriteriaJoinCondition | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe logic that's used to decide how data source records are filtered. |
| CriteriaJoinType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionSpecifies the criteria type used to filter data source records.Possible values are:all—All conditions are met (AND)any—Any condition is met (OR)custom—Customize the logicnone—No conditions are metThe default value is all. |
| DataSourceType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of data source.Possible values are:MultipleSobjectsSingleSobject |
| RelatedSobjects | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe list of objects that are used as data sources for the batch job definition. |
| SourceFieldName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe field from the source object that's used to run the batch job. |
| SourceTableName | TypestringPropertiesFilter, Group, SortDescriptionThe name of the object from which records are processed by the batch job. |
