---
title: "OrgMetricScanResult"
domain: object-reference
topic: orgmetricscanresult
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.162Z
estimatedTokens: 1014
keywords: [OrgMetricScanResult, data, item, associated, feature’s, results, Salesforce, Optimizer, evaluation, Custom, Limit, feature, flagged, approaching, API]
---

# OrgMetricScanResult

> Represents data or an item associated with a feature’s
         results in a Salesforce Optimizer evaluation. For example, for the
         Custom Field Limit feature, an OrgMetricScanResult object represents an
         object flagged for approaching the custom field limit.  This
      object is available in API version 47.0 and later.

# OrgMetricScanResult

Represents data or an item associated with a feature’s results in a Salesforce Optimizer evaluation. For example, for the Custom Field Limit feature, an OrgMetricScanResult object represents an object flagged for approaching the custom field limit. This object is available in API version 47.0 and later.

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), upsert()

## Special Access Rules

This object is only available in orgs where Salesforce Optimizer is enabled. Requires the Modify All Data and Customize Application user permissions.

## Fields

| Field | Details |
| --- | --- |
| Date | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date associated with an item in a feature’s Optimizer evaluation.ExampleFor the Unsupported Browsers feature, Date indicates the date that the user last logged in with an unsupported browser. |
| Flags | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe flags associated with an item in a feature’s Optimizer evaluation.ExampleFor the API Versions feature, Flags indicates the API version of an object that Optimizer evaluates as outdated. |
| ItemStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, SortDescriptionThe recommended action for an item in a feature’s Optimizer evaluation.Possible values are:Action RequiredImmediate Action RequiredNo Action RequiredNot Currently EnabledReview RequiredUnable to AnalyzeThe default value is No Action Required. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionThe name of the item in a feature’s Optimizer evaluation, such as an object name.ExampleFor the Unassigned Roles feature, Name refers to the name of the unassigned role. |
| Object | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe object ID associated with the item in a feature’s Optimizer evaluation.For the Release Update feature only, Object indicates the release that the update is scheduled for.ExampleFor the Unused Reports feature, Object refers to the ID of the unused report. |
| OrgMetricScanSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe feature’s OrgMetricScanSummary ID from the most recent Optimizer run.This field is a relationship field.Relationship NameOrgMetricScanSummaryRelationship TypeMaster-detailRefers ToOrgMetricScanSummary (the master object) |
| Profile | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe profile ID associated with the item in a feature’s Optimizer evaluation. |
| Quantity | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionA quantity associated with the item in a feature’s Optimizer evaluation.ExampleFor the Custom Field Limits feature, Quantity indicates the total number of fields on an object that approaches the custom field limit. |
| Type | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe type of item or data in a feature’s Optimizer evaluation.ExampleFor the Unsupported Browsers feature, Type indicates the unsupported browser and platform used. |
| Url | TypeurlPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe URL associated with the item in a feature’s Optimizer evaluation.ExampleFor the Unassigned Page Layouts feature, the URL represents a link to the unassigned layout. |
| User | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe user ID or username associated with the item in a feature’s Optimizer evaluation. For the Release Update feature only, User indicates the name of the release update that requires review.ExampleFor the User Logins feature, User indicates the username of a user who hasn’t recently logged in. |

#### See Also

-   [*Salesforce Help*: Improve Your Implementation with Salesforce Optimizer](https://help.salesforce.com/s/articleView?id=xcloud.optimizer_introduction.htm&type=5&language=en_US "Salesforce Help: Improve Your Implementation with
    Salesforce Optimizer - HTML (New Window)")

## Related Topics

- OrgMetricScanSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orgmetricscansummary.htm)
