---
title: "AdvAccountForecastSet"
domain: tooling-api
topic: advaccountforecastset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.495Z
estimatedTokens: 1613
keywords: [AdvAccountForecastSet, Represents, advanced, account, forecast, set., API, version, 56.0, later., Important, Supported, SOAP, Calls, REST, Fields]
---

# AdvAccountForecastSet

> Represents an advanced account forecast set. This object is available in
      API version 56.0 and later.

# AdvAccountForecastSet

Represents an advanced account forecast set. This object is available in API version 56.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| AccountFieldName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe field name of the account in an advanced account forecast fact record. |
| CalculationFrequency | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe frequency at which a forecast set is recalculated automatically.Possible values are:MonthlyQuarterlyWeeklyYearlyThe default value is Monthly. |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe description for AdvAccountForecastSet. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the advanced account forecast set record.The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| ForecastFactObjectName | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe API name of the entity used as a facts table. |
| ForecastPeriodGroupId | TypereferencePropertiesFilter, Group, SortDescriptionThe Id of the forecast period group associated with an advanced account forecast.This field is a relationship field.Relationship NameForecastPeriodGroupRelationship TypeLookupRefers ToAdvAcctForecastPeriodGroup |
| ForecastQuantityFieldName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe field name of the forecast quantity in an advanced account forecast fact record. |
| ForecastRevenueFieldName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe field name of the forecast revenue in an advanced account forecast record. |
| ForecastSetFieldName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe field name of the forecast set in an advanced account forecast record. |
| ForecastSetName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the forecast set in an advanced account forecast record. |
| ForecastStatusFieldName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe field name of the status in an advanced account forecast fact record. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated advanced account forecast fact record in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| GenerationDpeDefNameId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe name of the Data Processing Engine definition that generates advanced account forecast fact records.This field is a relationship field.Relationship NameGenerationDpeDefNameRelationship TypeLookupRefers ToBatchCalcJobDefinition |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language for AdvAccountForecastSet. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the AdvAccountForecastSet record. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe AdvAccountForecastSet’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| PeriodFieldName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe field name of the period in an advanced account forecast fact record. |
| RecalculateDpeDefNameId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe Data Processing Engine definition used to recalculate advanced account forecast fact records.This field is a relationship field.Relationship NameRecalculateDpeDefNameRelationship TypeLookupRefers ToBatchCalcJobDefinition |
| RegenerationDpeDefNameId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe Data Processing Engine definition used to regenerate advanced account forecast fact records.This field is a relationship field.Relationship NameRegenerationDpeDefNameRelationship TypeLookupRefers ToBatchCalcJobDefinition |
| RolloverDpeDefNameId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe Data Processing Engine definition used to generate rollover advanced account forecast fact records.This field is a relationship field.Relationship NameRolloverDpeDefNameRelationship TypeLookupRefers ToBatchCalcJobDefinition |
| RolloverFrequency | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe frequency of rollover of an advanced account forecast records.Possible values are:MonthlyQuarterlyWeeklyYearlyThe default value is Monthly. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the status of an advanced account forecast set.Possible values are:ActiveInactive |
