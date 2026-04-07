---
title: "Recipe REST API Enums"
domain: salesforce-recipes-api
topic: recipe-rest-api-enums
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:39:18.022Z
estimatedTokens: 1756
keywords: [Recipe, REST, API, Enums, specific, wave, recipes]
---

> Enums specific to the /wave/recipes namespace

# Recipe REST API Enums

Enums specific to the /wave/recipes namespace

Enums are not versioned. Enum Values are returned in all API versions. Clients should handle values they don't understand gracefully.

| Enum | Description |
| --- | --- |
| Connect​Analytics​License​Type​Enum | The Analytics license types. Valid values are:Cdp (Data 360)Data​Pipeline​Query (Data Pipeline Query)Einstein​Analytics (CRM Analytics)Intelligent​Apps (Intelligent Apps)Mulesoft​Data​Path (Mulesoft Data Works)Sonic (Salesforce Data Pipeline) |
| Connect​Email​Notification​Level​Enum | Valid types of email notification levels you can set. Valid values are:AlwaysFailuresNeverWarnings |
| Connect​Recipe​Conversion​Severity​Enum | The severity of the conversion detail. Valid values are:UserInfoWarning |
| Connect​Recipe​Execution​Engine​Enum | The recipe's execution engine. Valid values are:V1V2 |
| Connect​Recipe​Format​Type​Enum | Returns a collection filtered by the format of the current recipe definition. Valid values are:R2 (Data Prep Classic)R3 (Data Prep) |
| Connect​Recipe​Publishing​Target​Enum | The target format or system to publish the recipe to. Valid values are:Dataset (Publish to Dataset) |
| Connect​Recipe​Schedule​Type​Enum | The schedule type of the recipe. Valid values are:Event​DrivenTime​Driven |
| Connect​Recipe​Status​Enum | The status of the recipe. Valid values are:CancelledFailureNew (Never run or has no recent run)QueuedRunningSuccessWarning |
| Connect​Recipe​Validation​Context​Enum | The recipe validation context. Valid values are:DefaultEditor |
| Connect​Wave​Data​Connector​Type​Enum | The type of Analytics connector. The valid values are:Amazon​AthenaAmazon​Redshift​OutputAmazon​S3Amazon​S3​OutputAmazon​S3​PrivateAws​Rds​Aurora​My​SQLAws​Rds​Aurora​PostgresAws​Rds​Maria​DBAws​Rds​My​SQLAws​Rds​PostgresAws​Rds​Sql​ServerAzure​Data​Lake​Gen2​OutputAzure​Sql​DatabaseAzure​Sql​DatawarehouseDatabricks (Beta)Google​Analytics​4Google​Big​QueryGoogle​Big​Query​DirectGoogle​Big​Query​Standard​SQLGoogle​SpannerHeroku​PostgresHub​SpotMarketoV2Net​SuiteOracle​EloquaRedshiftRedshift​PrivateSalesforce​ExternalSalesforce​Marketing​Cloud​OAuth2Sap​Hana​CloudSfdc​LocalSnowflake​ComputingSnowflake​DirectSnowflake​OutputSnowflake​PrivateSnowflake​Private​OutputTableau​OnlineTableau​Hyper​OutputZendesk |
| Connection​Mode​Enum | The mode for accessing connected datasets. Valid values are:AUTODIRECTSYNCED |
| Detect​Sentiment​Output​Type​Enum | The output type. Valid values are:DimensionMeasure |
| Input​Run​Mode​Enum | The input run mode. Valid values are:FullIncrementalStreaming |
| Measure​Scaling​Type​Enum | The scaling type. Valid values are:Min​Max​Scaling |
| Operation​Enum | The operation type for append. Valid values are:AppendDeleteUpsert |
| Output​Mode​Enum | The output mode. Valid values are:AppendCompleteUpdate |
| Recipe​Aggregate​Node​Enum | The aggregate type for the node. Valid values are:HierarchicalStandard |
| Recipe​Aggregate​Type | The recipe aggregation type. Valid values are:AvgCountMaximumMedianMinimumStdDevStdDevPSumUniqueVarVarP |
| Recipe​Bucket​Algorithm​Type | The recipe bucket field algorithm type. Valid values are:Typographic​Clustering |
| Recipe​Bucket​Grain | The recipe bucket date grain type. Valid values are:Absolute​DateDaysFiscal​QuartersFiscal​YearsMonthsQuartersWeeksYears |
| Recipe​Configuration​Fiscal​Offset​Year​Based​On​Enum | The recipe configuration fiscal offset year based on type. Valid values are:EndStart |
| Recipe​Configuration​Fiscal​Type​Enum | The recipe configuration fiscal type. Valid values are:Offset |
| Recipe​D360​Output​Type | The output type. Valid values are:Date​Lake​Object |
| Recipe​Data​Cloud​Output​Type​Enum | The output type. Valid values are:Date​Lake​Object |
| Recipe​Data​Type | The recipe data type. Valid values are:Date​OnlyDate​TimeMultivalueNumberText |
| Recipe​Date​Grain | The extract grain type. Valid values are:DayDay​EpochFiscal​MonthFiscal​QuarterFiscal​WeekFiscal​YearHourMinuteMonthQuarterSecondSecond​EpochWeekYear |
| Recipe​Dataset​Type | The type of the dataset. Valid values are:AnalyticsConnectedData​Lake​ObjectData​Model​Object |
| Recipe​Export​Csv​Header​Row​Value​Type | The type of the recipe export CSV header row value. Valid values are:Fully​Qualified​NameLabel |
| Recipe​Export​Format | The format of the export. Valid values are:CSV. |
| Recipe​Formula​Expression​Type | The formula expression type. Valid values are:LegacySql |
| Recipe​Group​Dates​By | The value to group dates by. Valid values are:YearYear​MonthYear​Month​DayYear​QuarterYear​Week |
| Recipe​Group​Dates​By​V2 | The value to group dates by. Valid values are:Fiscal​YearFiscal​Year​MonthFiscal​Year​QuarterFiscal​Year​WeekYear​MonthYear​Month​DayYear​QuarterYear​Week |
| Recipe​Join​Type | The join type. Valid values are:CrossInnerLeft​OuterLookupMulti​Value​LookupOuterRight​Outer |
| Recipe​Node​Action | The recipe node action. Valid recipe actions are:AggregateAppendAppend_V2BucketBucket V2ClusteringCompute​RelativeDate​Format​ConversionDetect​SentimentDiscovery​PredictExportExtensionExtractFilterFlattenFormulaJoinLoadOptimized​Append​OutputOptimized​Update​OutputOutput​D360Output​ExternalPredict​Missing​ValuesRecommendationSaveSchemaSplitSql​FilterTime​SeriesTime​Series​V2Type​CastUpdateiUpdate​Data​Cloud​ObjectWrite​Data​Cloud​Object |
| Recipe​Output​External​Operation | The output external operation type. Valid values are:EmptyInsertUpdateUpsert |
| Recipe​Run​Mode | The recipe run mode. Valid values are:FullIncrementalStreaming |
| Recipe​Slice​Mode | The slice mode. Valid values are:SELECTDROP |
| Recipe​Sort​Order​Enum | The recipe sort order. Valid values are:AscendingDescending |
| Recipe​Time​Series​Confidence​Interval​Type | The confidence interval. Valid values are:EightyNinety​FiveNone |
| Recipe​Time​Series​Model | The time series model. Valid values are:AdditiveAutoMultiplicative |
| Sample​Type | The recipe sample type. Valid values are:CustomRandomTop​NUnique |
| Sentiment​Score​Type​Enum | The sentiment score type. Valid values are:AllNone |
| Time​Series​V2​Forecast​Algorithm​Enum | The forecast algorithm. Valid values are:Holt​Winters |
| Time​Series​V2​Forecast​Length​Type​Enum | The forecast length type. Valid values are:Rolling |
| Time​Series​V2​Partial​Data​Handling​Enum | The partial data handling value. Valid values are:Ignore​LastNone |
| Trigger​Type​Enum | The trigger type. Valid values are:Fixed |

| Property Name | Enum | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sort | Connect​Wave​Sort​Order​Type​Enum | The type of sort order to be applied to the returned collection. Valid values are:AppCreated​ByCreated​By​IdCreated​DateFolder​NameLast​ModifiedLast​Modified​ByLast​Modified​By​IdLast​Modified​DateLocationMru (Most Recently Used, last viewed date)NameOutcomeRefresh​Date (for assets like datasets)Run​Date (for assets like reports)StatusTitleType | Optional | 38.0 |
