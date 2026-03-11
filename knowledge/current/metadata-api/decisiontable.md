---
title: "DecisionTable"
domain: metadata-api
topic: decisiontable
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:51.796Z
keywords: [DecisionTable, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, DecisionTableParameter, DecisionTableSourceCriteria, Declarative, Metadata, Sample, Definition]
---

# DecisionTable

# DecisionTable

Represents the information about a decision table.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DecisionTable components have the suffix .decisionTable and are stored in the decisionTables folder.

## Version

DecisionTable components are available in API version 51.0 and later.

## Special Access Rules

To use this metadata type, your Salesforce org must have the Loyalty Management or the Rebate Management license.

## Fields

| Field Name | Description |
| --- | --- |
| collectOperator | Field TypeDecisionTable​CollectOperator (enumeration of type string)DescriptionSpecifies the operator that's used when the result is filtered by the Collect operator.Valid values are:CountMaximumMinimumNoneSum |
| condition​Criteria | Field TypestringDescriptionLogic that's used to decide how the input fields are processed. |
| conditionType | Field TypeDecisionTable​ConditionType (enumeration of type string)DescriptionCondition logic that's used for input fields.Valid values are:AllAnyCustom |
| dataSource​Type | Field TypeDecisionTable​DataSourceType (enumeration of type string)DescriptionSpecifies the type of data source that's used to create a decision table.Valid values are:ContextDefinitionCsvUploadMultipleSobjectsSingleSobject |
| decisionTable​Parameters | Field TypeDecisionTableParameter[]DescriptionParameters that you specify in a decision table. |
| decisionTable​SourceCriterias | Field TypeDecisionTableSourceCriteria[]DescriptionThe fields and values from a data source that are used to define the condition logic of the data that's used in a decision table. |
| description | Field TypestringDescriptionDescription of the decision table. |
| doesConsider​NullValue | Field TypebooleanDescriptionIndicates whether a column that has a null value is considered for lookup (true) or not (false). The default value is false. |
| downloadStatus | Field TypeDecisionTableDownloadStatus (enumeration of type string)DescriptionSpecifies the progress status of a CSV download from a CSV-based lookup table. Available in API version 64.0 and later.Valid values are:CompletedDownloadInProgressFailed |
| executionType | Field TypeDecisionTableExecutionType (enumeration of type string)DescriptionIndicates the backing storage for the Decision Table.Valid values are:DmoHbaseHbpoSolrSoqlExecution type of Hbase must be passed in all caps (HBASE) in POST and PATCH calls. |
| filterResultBy | Field TypeDecisionTableHitPolicy (enumeration of type string)DescriptionSpecifies how the results of a decision table are filtered if a set of inputs returns multiple matching outputs.Valid values are:AnyValueCollectOperatorFirstMatchOutputOrderPriorityRuleOrderUniqueValues |
| hasIncremental​SyncFailed | Field TypebooleanDescriptionIndicates if the last incremental refresh failed. |
| isIncremental​SyncEnabled | Field TypebooleanDescriptionIndicates if incremental refresh is enabled for the Decision Table. |
| lastIncremental​SyncDate | Field TypestringDescriptionThe date and time on which the last incremental refresh occured for the decision table. |
| lastSyncDate | Field TypestringDescriptionLatest date on which the decision table was refreshed. |
| refresh​FailureReason | Field TypestringDescriptionReason why the refresh of the decision table data failed. |
| refreshStatus | Field TypeDecisionTableRefreshStatus (enumeration of type string)DescriptionSpecifies the refresh status of the cached data in the decision table.Valid values are:CompletedFailedInProgressInitiated |
| setupName | Field TypestringDescriptionRequired. Name of the decision table, which appears in Salesforce Setup. |
| sourceCondition​Logic | Field TypestringDescriptionThe condition logic that's used to define the decision table from the source data. |
| sourceObject | Field TypestringDescriptionRequired. Object that contains the rules based on which the decision table must provide outcomes. |
| status | Field TypeDecisionTableStatus (enumeration of type string)DescriptionRequired. Status of the decision table.Valid values are:ActivationInProgressActiveDraftInactive |
| type | Field TypeDecisionTableType (enumeration of type string)DescriptionStores the type of decision table.Valid values are:AdvancedHighScaleExecutionHighVolumeLowVolumeMediumVolumeRealTime |
| uploadStatus | Field TypeDecisionTableUploadStatus (enumeration of type string)DescriptionSpecifies the progress status of the CSV upload for a CSV based Lookup table.Valid values are:CompletedCompletedWithErrorsFailedUploadInProgress |
| usageType | Field TypeExpsSetProcessType (enumeration of type string)DescriptionType of industry or the application within the industry that's using a decision table.Valid values are:BreComplianceControlDecompositionEnrichmentMappingDefaultPricingDefaultRatingEventOrchestrationFinancialServicesCloudFulfillmentConditionGpaCalculationInsuranceClaimProcessing—Available in API version 65.0 and later.ItServiceManagement—Available in API version 65.0 and later.PlanCostCalculationPriceProtectionPricingDiscoveryProductCategoryQualificationProductQualificationRatingDiscoveryRecordAlertShipAndDebitStudentInformationSystem—Available in API version 65.0 and later.StudentSuccessTestProcessWarrantyClaimWhen Business Rules Engine is enabled for a Salesforce instance, the default value is 'Bre’. Other usage types are available to you depending on your industry solution and permission sets. |

## DecisionTableParameter

Represents an input or output field of a decision table.

| Field Name | Description |
| --- | --- |
| dataType | Field TypeDTParameterDataType (enumeration of type string)DescriptionThe data type of the field used in a decision table.Valid values are:BooleanCurrencyDateDateTimeNumberPercentString |
| decimalScale | Field TypeintDescriptionThe number of digits to the right of the decimal point. |
| domainObject | Field TypestringDescriptionFor polymorhpic fields, indicates the domain object in the field hierarchy. |
| fieldName | Field TypestringDescriptionRequired. API name of the fields that selected as an input or output for the decision table. |
| fieldPath | Field TypestringDescriptionThe path of the field used in a decision table in relation to the object that the field belongs to. |
| isGroup​ByField | Field TypebooleanDescriptionIndicates whether an input field is used to group the business rules of the decision table. |
| isPriority​Field | Field TypebooleanDescriptionIndicates whether a field is given priority. |
| isRequired | Field TypebooleanDescriptionIndicates whether a field is required to be used for lookups. |
| length | Field TypeintDescriptionThe maximum number of characters supported for a field that's used in a decision table. |
| operator | Field TypeDecisionTableOperator (enumeration of type string)DescriptionOperator used for the input field.Valid values are:ContainsDoesNotExistInDoesNotMatchEqualsExistsInGreaterOrEqualGreaterThanIsNotNullIsNullLessOrEqualLessThanMatchesNotEquals |
| sequence | Field TypeintDescriptionThe sequence in which input fields are processed. This field is available in API version 52.0 and later. |
| sortType | Field TypeDecisionTableSortType (enumeration of type string)DescriptionSort outputs of a decision table based on the values of the input or output parameter field. This field is available in API version 56.0 and later.Valid values are:AscNullFirstAscNullLastDescNullFirstDescNullLastNone |
| usage | Field TypeDecisionTableParameterType (enumeration of type string)DescriptionRequired. Usage type of a field.Valid values are:INPUTOUTPUTROWCRITERIA |

## DecisionTableSourceCriteria

Represents the fields and values from a data source that are used to define the condition logic of the data that's used in a decision table.

| Field Name | Description |
| --- | --- |
| operator | Field TypeDTSourceCriteriaOperator (enumeration of type string)DescriptionRequired. The operator that’s applied to an associated decision table’s field to filter the data.Valid values are:ContainsDoesNotExistInDoesNotMatchEqualsExistsInGreaterOrEqualGreaterThanIsNotNullIsNullLessOrEqualLessThanMatchesNotEquals |
| sequenceNumber | Field TypeintDescriptionRequired. The sequence number used in the associated decision table's source condition logic. |
| sourceField​Name | Field TypestringDescriptionRequired. The name of the field that's used in the decision table. |
| value | Field TypestringDescriptionThe value that’s expected in the source field used in the decision table. |
| valueType | Field TypeDTSourceCriteriaValueType (enumeration of type string)DescriptionRequired. The type of the value that’s used to filter the source data.Valid values are:FormulaLiteralLookupParameterPicklist |

## Declarative Metadata Sample Definition

The following is an example of a DecisionTable component.

```

```

The following is an example package.xml that references the previous definition.

```

```