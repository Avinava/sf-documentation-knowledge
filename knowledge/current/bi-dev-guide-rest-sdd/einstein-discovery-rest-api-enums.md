---
title: "Einstein Discovery REST API Enums"
domain: bi-dev-guide-rest-sdd
topic: einstein-discovery-rest-api-enums
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.005Z
estimatedTokens: 2459
keywords: [Einstein, Discovery, REST, API, Enums, specific, smartdatadiscovery]
---

# Einstein Discovery REST API Enums

> Enums specific to the /smartdatadiscovery namespace

# Einstein Discovery REST API Enums

Enums specific to the /smartdatadiscovery namespace

Enums are not versioned. Enum Values are returned in all API versions. Clients should handle values they don't understand gracefully.

| Enum | Description |
| --- | --- |
| Analysis​Outcome​Type​Enum | The analysis outcome type. Valid values are:CategoricalCountNumberText |
| Analysis​Prediction​Type​Enum | The analysis prediction type. Valid values are:BinaryCountMulti​ClassNoneNumeric |
| Analysis​Sampling​Strategy​Enum | The sampling strategy associated with the story version. Valid values are:DiscoveryNoneRandom |
| Analysis​Setup​Scope​Type​Enum | The type of scope. Valid values are:Created​By​MeShared​With​Me |
| Analysis​Setup​Source​Type​Enum | The type of source. Valid values are:Analytics​DatasetLive​DatasetReport |
| Analysis​Setup​Status​Enum | The state of analysis performed by an Einstein Discovery service. Valid values are:AutopilotDone​DescriptiveDone​Feature​EngineeringDone​Model​MetricsDone​PredictiveDraftFailedFetchingGenerate​SetupIn​ProgressPostprocessingPreprocessingQueuedQueued​For​FetchingQueued​For​PostprocessingRequest​To​DeleteResizingRetry​PreprocessingRunning​DescriptiveRunning​Feature​EngineeringRunning​Model​MetricsRunning​PredictiveSuccessTimed​Out |
| Classification​Type​Enum | The type of classification. Valid values are:Binary |
| Connect​ED​Insight​Type​Enum | The insight type to return. Valid values are:DescriptiveSummary |
| Connect​ED​Narrative​Type​Enum | The narrative type to return. Valid values are:PositiveNegative |
| Connect​Smart​Data​Discovery​Filter​Operator​Enum | The operator to apply to this filter. Valid values are:BetweenContainsEnds​WithEqualGreater​ThanGreater​Than​Or​EqualIn​SetLess​ThanLess​Than​Or​EqualNot​BetweenNot​EqualNot​InStarts​With |
| Connect​Smart​Data​Discovery​Outcome​Goal​Enum | The outcome goal to filter the collection by. Valid values are:MaximizeMinimizeNone |
| Insights​Comparison​Enum | The insights score comparison criteria. Valid values are:AverageOtherUniform​Distribution |
| Insights​Condition​Restriction​Enum | The insights condition restriction. Valid values are:IncludedNot​Included |
| Insights​Outcome​Change​Enum | The change in outcome value. Valid values are:DecreasedIncreased |
| Insights​Result​Category​Enum | The insights result category. Valid values are:NegativePositive |
| Insights​Results​Type​Enum | The descriptive insights result type. Valid values are:First​OrderSecond​Order |
| Insights​Type​Enum | The analysis type for query insights. Valid values are:DescriptiveDiagnostic |
| Metric​Span​Enum | The time span for the metrics. Valid values are:DayMonthSince​Last​ActionWeek |
| Predict​History​Interval​Enum | The interval for look back. Valid values are:NoneWeekly |
| Prediction​Definition​Collection​Collection​Sort​Order​Type​Enum | The sort order type for the collection. Valid values are:Last​UpdateNameOutcome​Field​LabelPrediction​TypeSubscribed​Entity |
| Smart​Data​Discovery​AI​Model​Collection​Sort​Order​Type​Enum | The sort order type for the collection. Valid values are:Created​DateDescriptionNamePrediction​Field​NamePrediction​TypeRuntime​Type |
| Smart​Data​Discovery​AI​Model​Status​Enum | The model status. Valid values are:DisabledEnabledUpload​CompletedUpload​FailedUploadingValidatingValidation​CompletedValidation​Failed |
| Smart​Data​Discovery​AI​Model​Transformation​Type​Enum | The transformation type. Valid values are:Categorical​Imputation (Replace categorical missing values)Extract​Day​Of​Week (Extract day of week)Extract​Month​Of​Year (Extract month of year)Free​Text​Clustering (Free text clustering)Numerical​Imputation (Replace numerical missing values)Sentiment​Analysis (Detecting sentiment)Time​Series​Forecast (Projected predictions)Typographic​Clustering (Fuzzy matching) |
| Smart​Data​Discovery​Bucketing​Strategy​Enum | The bucketing strategy. Valid values are:Even​WidthManualPercentage |
| Smart​Data​Discovery​Categorical​Imputation​Method​Enum | The categorical imputation method. Valid values are:Auto |
| Smart​Data​Discovery​Classification​Algorithm​Type​Enum | The classification algorithm type. Valid values are:Best (Model tournament)Drf (Distributed Random Forest)Gbm (GBM)Glm (GLM)Xgboost (XGBoost) |
| Smart​Data​Discovery​Date​Interval​Enum | The date interval for the field. Valid values are:AutoDayMonthNoneQuarterYear |
| Smart​Data​Discovery​Field​Map​Source​Type​Enum | The source type for the field mapping. Valid values are:Analytics​Dataset​FieldSalesforce​Field |
| Smart​Data​Discovery​Filter​Field​Type​Enum | The filter field type. Valid values are:BooleanDateDate​TimeNumberText |
| Smart​Data​Discovery​Filter​Value​Type​Enum | The type of the filter value. Valid values are:ConstantPlaceholder |
| Smart​Data​Discovery​Impute​Method​Enum | The impute method. Valid values are:MeanMedianModeNone |
| Smart​Data​Discovery​Model​Field​Type​Enum | The type of the model field. Valid values are:DateNumberText |
| Smart​Data​Discovery​Model​Runtime​Type​Enum | The runtime type of the model. Valid values are:DiscoveryH2OPy36Tensorflow244 (TensorFlow)Py37Scikitlearn102 (Scikit Learn v1.0.2)Py37Tensorflow207 (TensorFlow v2.7.0) |
| Smart​Data​Discovery​Model​Source​Type​Enum | The model source type. Valid values are:DiscoveryUser​Upload |
| Smart​Data​Discovery​Numerical​Imputation​Method​Enum | The numerical imputation method. Valid values are:MeanMedianMode |
| Smart​Data​Discovery​Periodic​Date​Interval​Enum | The periodic date interval. Valid values are:Day_of_weekMonth_of_yearQuarter_of_year |
| Smart​Data​Discovery​Predict​Aggregate​Function​Enum | The predict aggregate function type. Valid values are:AverageMedianSum |
| Smart​Data​Discovery​Predict​Aggregate​Status​Enum | The predict aggregate status. Valid values are:ErrorSuccess |
| Smart​Data​Discovery​Predict​Job​Status​Enum | The status of the predict job. Valid values are:CancelledCompletedFailedIn​ProgressNot​StartedPaused |
| Smart​Data​Discovery​Predict​Status​Enum | The predict status. Valid values are:ErrorSuccess |
| Smart​Data​Discovery​Predict​Type​Enum | The predict type. Valid values are:Raw​Data (Represent rows within a two-dimensional array of row values)Record​Overrides (Represent records using Salesforce record Ids. Optionally override or append individual records with an array of row values)Records (Represent rows using Salesforce record Ids associated with the subscribedEntity of the prediction definition) |
| Smart​Data​Discovery​Prediction​Type​Enum | The prediction type. Valid values are:ClassificationMulticlass​ClassificationRegressionUnknown |
| Smart​Data​Discovery​Projected​Predictions​Interval​Setting​Type​Enum | The projected predictions interval setting type. Valid values are:CountCount​From​DateDate |
| Smart​Data​Discovery​Projected​Predictions​Interval​Type​Enum | The projected predictions internal type. Valid values are:DayMonthQuarterWeek |
| Smart​Data​Discovery​Projected​Predictions​Type​Enum | The projected predictions type. Valid values are:CategoricalNumerical |
| Smart​Data​Discovery​Pushback​Type​Enum | The pushback type. Valid values are:Ai​Record​InsightDirect |
| Smart​Data​Discovery​Ordering​Enum | The strategy for ordering text values. Valid values are:AlphabeticalNumericOccurrence |
| Smart​Data​Discovery​Recipient​Type​Enum | The type of the recipient. Valid values are:GroupUser |
| Smart​Data​Discovery​Refresh​Job​Status​Enum | The status of the refresh job. Valid values are:CancelledCompleted​With​WarningsFailureNo​Runnable​TaskNot​StartedRunningScoring​Job​FailedSuccessUser​Not​Found |
| Smart​Data​Discovery​Refresh​Job​Type​Enum | The type of the refresh job. Valid values are:ScheduledUser​Triggered |
| Smart​Data​Discovery​Refresh​Task​Status​Enum | The status of the refresh task. Valid values are:Analysis​Not​FoundCancelledDataset​Join​Fields​MissingDataset​Not​FoundDataset​Not​UpdatedFailureLimits​ReachedModel​Schema​ChangedNot​StartedOutcome​Values​ChangedPoisson​Distribution​DisabledRunningStory​Creation​FailureSuccessUser​Not​FoundWarning​Threshold​Reached |
| Smart​Data​Discovery​Regression​Algorithm​Type​Enum | The regression algorithm type. Valid values are:Drf (Distributed Random Forest)Gbm (GBM)Glm (GLM)Xgboost (XGBoost) |
| Smart​Data​Discovery​Sort​Order​Enum | The sort order for the collection. Valid values are:AscendingDescending |
| Smart​Data​Discovery​Transformation​Filter​Type​Enum | The transformation filter type for the model. Valid values are:NumberText |
| Smart​Data​Discovery​Status​Enum | The status. Valid values are:DisabledEnabled |
| Story​Analysis​Type​Enum | The analysis type. Valid values are:CountDescriptive |
| Story​Chart​Value​Type​Enum | The story chart value type. Valid values are:AverageBaselineImpactPredictionSmall​TermsUnexplainedValue |
| Story​Count​Insights​Frequency​Change​Enum | The story count insights frequency change. Valid values are:DownUp |
| Story​Count​Insights​Frequency​;Enum | The story count imsights frequency. Valid values are:Less​OftenMore​Often |
| Story​Descriptive​Insights​Impact​Enum | The descriptive insights impact for the story. Valid values are:ImprovedWorsened |
| Story​Descriptive​Insights​Rating​Enum | The story descriptive insights rate. Valid values are:Above​AverageBelow​AverageHigherLower |
| Story​Field​Detail​Type​Enum | The field type. Valid values are:FieldOutcome |
| Story​Narrative​Element​Type​Enum | The narrative element type. Valid values are:Bad​SelectionBodyBuckets​Mismatch​SectionGood​SectionHeadingMissing​Values​SectionNew​Values​SectionNumbered​ListOutcome​ValueParagraphSub​HeadingUnordered​List |
| Validation​Configuration​Strategy​Enum | The validation strategy for the configuration. Valid values are:Validation_DatasetValidation_Set_Ratio |
