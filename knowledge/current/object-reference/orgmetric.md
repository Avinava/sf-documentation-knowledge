---
title: "OrgMetric"
domain: object-reference
topic: orgmetric
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.153Z
estimatedTokens: 452
keywords: [OrgMetric, feature, metric, Salesforce, Optimizer, evaluates, API, version, 47.0, later, Calls, Special, Access, Rules]
---

# OrgMetric

> Represents a feature or metric that Salesforce Optimizer
         evaluates. This object is available in API version 47.0 and
      later.

# OrgMetric

Represents a feature or metric that Salesforce Optimizer evaluates. This object is available in API version 47.0 and later.

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in orgs where Salesforce Optimizer is enabled. Requires the Modify All Data and Customize Application user permissions.

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, SortDescriptionThe category of the feature evaluated.Possible values are:Custom CodeCustom LayoutsFieldsImprove Org SecurityImprove User ExperienceIncrease User AdoptionObject LimitsOrg LimitsReports And DashboardsUsageUser ManagementWorkflowThe default value is Org Limits. |
| FeatureType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, SortDescriptionThe feature evaluated. For a full list, see Features Evaluated in Salesforce Optimizer.The default value is Unassigned Page Layouts. |
| LatestOrgMetricScanSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe feature’s OrgMetricScanSummaryID from the most recent Optimizer evaluation.This field is a relationship field.Relationship NameLatestOrgMetricScanSummaryRefers ToOrgMetricScanSummary |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionA unique number that identifies the feature. |

#### See Also

-   [*Salesforce Help*: Improve Your Implementation with Salesforce Optimizer](https://help.salesforce.com/s/articleView?id=xcloud.optimizer_introduction.htm&type=5&language=en_US "Salesforce Help: Improve Your Implementation with
    Salesforce Optimizer - HTML (New Window)")

## Related Topics

- OrgMetricScanSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orgmetricscansummary.htm)
