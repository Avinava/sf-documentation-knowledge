---
title: "MLModelMetric"
domain: object-reference
topic: mlmodelmetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.956Z
estimatedTokens: 747
keywords: [MLModelMetric, metric, statistic, model, accuracy, precision, RSquared, model’s, metrics, performance, compare, models, API, version, 53.0]
---

# MLModelMetric

> Represents a metric or statistic about the related model, such as accuracy,
         precision, or RSquared. Use a model’s metrics to learn about its performance and to compare
         it with other models. This object is available in API version 53.0 and later.

# MLModelMetric

Represents a metric or statistic about the related model, such as accuracy, precision, or RSquared. Use a model’s metrics to learn about its performance and to compare it with other models. This object is available in API version 53.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Available with Einstein Prediction Builder and Einstein Recommendation Builder.

## Fields

| Field | Details |
| --- | --- |
| BasicMetricValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe value of a basic metric. A basic metric is a single number. For metrics that comprise a set of graph points, see ComplexMetricValue . |
| ComplexMetricValue | TypetextareaPropertiesNillableDescriptionThe X and Y values for a complex metric. A complex metric is a coordinate on a graph. For example, in classification models, you can use a line on a graph to create classification categories. |
| DataSetType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of dataset.Possible values are:BaselineHoldOutLiveModelTraining |
| EndTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the model training finished. |
| GraphType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of graph.Possible values are:ConfidencePlotConfusionMatrixPerThresholdDiscountedCumulativeGainsGraphHitRateGraphKBasedRankingGraphLiftPlotMeanReciprocalRankGraphMultiClassConfusionMatrixPerThresholdMultiClassMisclassificationsNormalizedDiscountedCumulativeGainsGraphPrecisionGraphRecallGraphRegressionErrorBands |
| MetricType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of metric.Possible values are:AccuracyAveragePrecisionBalancedAccuracyDiscountedCumulativeGainAtKExpectedTopAbsoluteRankExpectedTopPercentileRankF1ScoreFMeasureHitRateAtKLiftBucketMeanAbsoluteErrorMeanAbsoluteRankMeanAveragePrecisionAtKMeanPercentileRankMeanReciprocalRankMeanReciprocalRankAtKMeanTopReciprocalRankNormalizedDiscountedCumulativeGainsAtKPrecisionPrecisionAtKRSquaredRecallRecallAtKRootMeanSquaredErrorauPRauROC |
| ModelId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related MLModel.This field is a polymorphic relationship field.Relationship NameModelRelationship TypeLookupRefers ToMLModel |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn automatically generated ID that uniquely identifies the metric. |
| RowCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of rows. |
| Span | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe time span for the metric. Possible values are:DayHourMonthSinceLastActionWeek |
| StartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the model training started. |
