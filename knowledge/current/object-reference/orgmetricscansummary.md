---
title: "OrgMetricScanSummary"
domain: object-reference
topic: orgmetricscansummary
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.171Z
estimatedTokens: 760
keywords: [OrgMetricScanSummary, results, summary, specific, feature, Salesforce, Optimizer, evaluation, API, version, 47.0, later, Calls, Special, Access]
---

# OrgMetricScanSummary

> Represents the results summary for a specific feature in
         a Salesforce Optimizer evaluation. This object is available in API
      version 47.0 and later.

# OrgMetricScanSummary

Represents the results summary for a specific feature in a Salesforce Optimizer evaluation. This object is available in API version 47.0 and later.

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), upsert()

## Special Access Rules

This object is only available in orgs where Salesforce Optimizer is enabled. Requires the Modify All Data and Customize Application user permissions.

## Fields

| Field | Details |
| --- | --- |
| ErrorMessage | TypepicklistPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe message returned if an error occurred during the most recent Optimizer evaluation. |
| FeatureLimit | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe numerical limit of a feature.ExampleFor the Custom Field Limits feature, FeatureLimit is 500 for Developer Edition orgs. |
| ImplementationEffort | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, SortDescriptionThe estimated time needed to complete the recommended actions for the feature.Possible values are:1 - 2 hours30 - 60 minutes< 30 minutes> 2 hoursThe default value is 30 minutes. |
| ItemCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe number of issues found for the feature. Corresponds to the number of OrgMetricScanResult objects generated for the feature in an Optimizer evaluation. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionA number that identifies the feature’s results summary. |
| OrgMetricId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe OrgMetric ID that represents the feature analyzed in the Optimizer evaluation.This field is a relationship field.Relationship NameOrgMetricRelationship TypeMaster-detailRefers ToOrgMetric (the master object) |
| PercentUsage | TypepercentPropertiesCreate, Filter, Nillable, SortDescriptionA percentage associated with a feature.ExampleFor the Incomplete Chatter Profiles feature, the PercentUsage value is 100 if 100% of users have complete Chatter profiles. |
| ScanDate | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe time that the report for the Optimizer evaluation was generated. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, SortDescriptionThe recommended action for the feature.Possible values are:Action RequiredImmediate Action RequiredNo Action RequiredNot Currently EnabledReview RequiredUnable to AnalyzeThe default value is No Action Required. |
| Unit | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe unit of measurement used in the feature’s results summary.ExampleFor the Data Storage feature, the Unit is MB. |

#### See Also

-   [*Salesforce Help*: Improve Your Implementation with Salesforce Optimizer](https://help.salesforce.com/s/articleView?id=xcloud.optimizer_introduction.htm&type=5&language=en_US "Salesforce Help: Improve Your Implementation with
    Salesforce Optimizer - HTML (New Window)")

## Related Topics

- OrgMetric (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orgmetric.htm)
