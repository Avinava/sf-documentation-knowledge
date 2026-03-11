---
title: "DecisionTable"
domain: omnistudio
topic: decisiontable
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.452Z
keywords: [DecisionTable, Note, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# DecisionTable

# DecisionTable

Represents the information about a decision table. This object is available in API version 51.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| CollectOperator | TypestringPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionFor internal use only. |
| ConditionCriteria | TypestringPropertiesFilter, Group, Nillable, SortDescriptionCustom logic that's used to decide how the input fields are processed. |
| ConditionType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionCondition logic that's used for input fields.Possible values are:All—All conditions are met (AND)Any—Any condition is met (OR)Custom—Custom LogicThe default value is 'All'. |
| DataSourceType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionType of data source that’s used to create a decision table. Available in API version 59.0 and later.Valid values are:ContextDefinitionCsvUploadMultipleSobjectsSingleSobjectThe default value is SingleSobject. |
| DecisionTableParameters | TypeQueryResultPropertiesNillableDescriptionInput or output field in a decision table. |
| DecisionTableSourceCriterias | TypeQueryResultPropertiesNillableDescriptionFilter criteria that’s associated with the decision table condition. Available in API version 59.0 and later. |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionDescription of the decision table. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionDeveloper name of the decision table. |
| DoesConsiderNullValue | TypebooleanPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionIndicates whether a column that has a null value is considered for lookup (true) or not (false). The default value is false. Available in API version 60.0 and later. |
| DownloadStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the progress status of a CSV download from a CSV-based lookup table. Available in API version 64.0 and later.Valid values are:CompletedDownloadInProgressFailed |
| executionType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the backing storage for the Decision Table.Valid values are:DmoHbaseHbpoSolrSoql |
| FilterResultBy | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIf a collection of inputs returns multiple matching outputs, then the FilterResultBy field specifies how the results of a decision table are filtered.Available in API version 59.0 and later.Valid values are:AnyValueCollectOperatorFirstMatchOutputOrderPriorityRuleOrderUniqueValues |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionName of the decision table.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionLanguage in which the decision table is created.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| LastSyncDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionLatest date on which the decision table was refreshed. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel of the decision table. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionMetadata of the decision table.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix that’s associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| PricingElementDecisionTables | TypeQueryResultPropertiesNillableDescriptionReserved for future use. |
| RefreshFailureReason | TypestringPropertiesFilter, Nillable, SortDescriptionReason for the refresh of the decision table data to fail. Available in API version 60.0 and later. |
| RefreshStatus | TypestringPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionRefresh status of the cached data in the decision table. Available in API version 60.0 and later.Valid values are:InitiatedFailedCompletedIn Progress |
| RowLevelOverrideType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the row-level criteria that overrides the Decision Table column criteria.Valid values are:BothConditionNoneOperatorThe default value is None. |
| SetupName | TypestringPropertiesFilter, Group, SortDescriptionRequired. Name of the decision table, which appears in Setup. |
| SourceConditionLogic | TypestringPropertiesFilter, Group, Nillable, SortDescriptionCondition logic that's used to define the decision table from the source data.Available in API version 59.0 and later. |
| SourceObject | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRequired. Object that contains the rules based on which the decision table must provide outcomes. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. Status of the decision table.Valid values are:ActivationInProgressActiveDraftInactive |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionDetermine whether a decision table’s data volume is high or low.Available in API version 59.0 and later.Valid values are:AdvancedHighScaleExecutionHighVolume–Reserved for future useLowVolumeMediumVolumeRealTimeThe default value is LowVolume. |
| UsageType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionUsage type of the decision table.Available in API version 59.0 and later.Bre–DefaultProductCategoryQualificationProductQualificationRecordAlertWhen Business Rules Engine is enabled for a Salesforce org, the default value is Bre. Other usage types may be available to you depending on your industry solution and permission sets. |