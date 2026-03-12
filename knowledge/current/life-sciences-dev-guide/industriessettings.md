---
title: "IndustriesSettings"
domain: life-sciences-dev-guide
topic: industriessettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.740Z
estimatedTokens: 1872
keywords: [IndustriesSettings, settings, Life, Sciences, Cloud, Parent, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample, Definition]
---

# IndustriesSettings

> Represents settings for Life Sciences
    Cloud.

# IndustriesSettings

Represents settings for Life Sciences Cloud.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for details.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

IndustriesSettings are stored in a single file named Industries.settings in the settings directory.

## Version

The settings for Life Sciences Cloud are available in API version 61.0 and later.

## Fields for Life Sciences Cloud

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAccountBasedSharing | boolean | Indicates whether to enable Account-Based Sharing to control data access based on account ownership. |
| enableAdverseEvents | boolean | Indicates whether Adverse Events and its data model is enabled for your org (true) or not (false). The default value is false. Available in API version 61.0 and later. |
| enableAppAlerts | boolean | Indicates whether to enable in-app alerts and notifications. |
| enableCarePlansPreference | boolean | Indicates whether to enable user preferences for Care Plans. |
| enableComprehendMedical | boolean | Indicates whether Comprehend Medical Analysis is enabled for your org (true) or not (false). The default value is false. This field is available in API version 54.0 and later. |
| enableCPBestConTimeSharing | boolean | Indicates whether to enable sharing of the best time to contact a patient within Care Plans. |
| enableCPSocialCustomSharing | boolean | Indicates whether to enable custom social sharing features within Care Plans. |
| enableGroupMembershipPref | boolean | Indicates whether to enable user preferences for group memberships. |
| enableIESentimentAnalysis | boolean | Indicates whether Industries Einstein Sentiment Insights is enabled for your org (true) or not (false). The default value is false. This field is available in API version 54.0 and later. |
| enableIndCrossObjChangelog | boolean | Indicates whether a cross-object change log to track changes across multiple related objects is enabled for your org. |
| enableLifeSciGenericWorkflow | boolean | Indicates whether to enable the generic workflow engine for life sciences processes. |
| enableLifeSciInquiry | boolean | Indicates whether to enable the Inquiry feature for managing and responding to inquiries in a life sciences context. |
| enableLifeSciListsAndFilters | boolean | Indicates whether to enable lists and filters for enhanced data sorting and searching in life sciences. |
| enableLifeSciencesActivityPlan | boolean | Indicates whether to enable the Activity Plan feature for creating and managing activity plans within life sciences. |
| enableLifeSciencesClinialTrailManagement | boolean | Indicates whether Clinical Trial Management and its data model is enabled for your org (true) or not (false). Using this feature, organizations can design and execute clinical trials and manage trial participant journeys. The default value is false. Available in API version 61.0 and later. |
| enableLifeSciencesConsent | boolean | Indicates whether to enable the Consent feature for managing patient or customer consent within life sciences. |
| enableLifeSciencesCustomerEngagementBase | boolean | Indicates whether to enable the foundational components of the Life Sciences Customer Engagement (LS C4CE). |
| enableLifeSciencesMergeManagement | boolean | Indicates whether to enable the Merge Management feature for merging duplicate records within life sciences data. |
| enableLifeSciencesProviderEngagementCompliance | boolean | Indicates whether to enable compliance features for provider engagement within the life sciences industry. |
| enableLifeSciencesSiteManagement | boolean | Indicates whether to enable the Site Management feature for managing clinical trial or other sites in the life sciences industry. |
| enableLSC4CEDocumentManagement | boolean | Indicates whether to enable Document Management for the Life Sciences Customer Engagement (LS C4CE). |
| enableLSC4CEEmailAndTemplate | boolean | Indicates whether to enable email and template management features for the Life Sciences Customer Engagement (LS C4CE). |
| enableLSC4CEKeyAccountManagement | boolean | Indicates whether to enable Key Account Management functionality within the Life Sciences Customer Engagement (LS C4CE). |
| enableLSC4CEMedInsights | boolean | Indicates whether to enable Medical Insights functionality in the Life Sciences Customer Engagement (LS C4CE) platform to provide insights to medical teams. |
| enableLSC4CEPackage | boolean | Indicates whether to enable the core package for the Life Sciences Customer Engagement (LS C4CE). |
| enableLSC4CERemoteEngagement | boolean | Indicates whether to enable features for remote engagement with customers within the Life Sciences Customer Engagement (LS C4CE). |
| enableLSC4CEVisits | boolean | Indicates whether to enable the Visits feature to manage and track customer visits within the Life Sciences Customer Engagement (LS C4CE). |
| enableNextBestAction | boolean | Indicates whether to enable Next Best Action, a feature that provides AI-driven recommendations for the next best step to take with a customer or patient. |
| enableNextBestCustomer | boolean | Indicates whether to enable Next Best Customer, a feature that uses data to identify and recommend the most valuable customers. |
| enableNextBestMessage | boolean | Indicates whether to enable Next Best Message, a feature that recommends the most effective message to send to a customer or patient. |
| enablePATSTerritoryBasedSharing | boolean | Indicates whether to enable Territory-Based Sharing for the Provider and Affiliate Tracking System (PATS). |
| enablePrimaryProviderRestriction | boolean | Indicates whether to enable restrictions based on the primary provider. |
| enableProdAdminBusinessGrpFilter | boolean | Indicates whether to enable filtering by Business Group in the Product Administration interface. |
| enableProdTerrAlgnPrtHrchyAcc | boolean | Indicates whether to enable access to the Product Territory Alignment Partner Hierarchy. |
| enableProdTerrAvlRecSharing | boolean | Indicates whether to enable sharing of available records for Product Territories. |
| enableProviderSummarization | boolean | Indicates whether to enable data summarization for provider records. |
| enableSampleLimits | boolean | Indicates whether to enable sample limits for product distribution. |
| enableTrialManagementRandomization | boolean | Indicates whether Research Study Randomization is enabled for your org (true) or not (false). Using this feature, users can design and run randomization procedures for their clinical trials. The default value is false. Available in API version 61.0 and later. |
| enableVisitInventoryEnabled | boolean | Indicates whether to enable inventory tracking for visits. |
| enableVisitPlanningAndExecutionAction | boolean | Indicates whether to enable actions for Visit Planning and Execution. |
| enableWaitlistManagementPref | boolean | Indicates whether to enable preferences for Waitlist Management. |

## Declarative Metadata Sample Definition

The following is an example of a Industries.Settings metadata file.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableLifeSciencesClinialTrailManagement>true</enableLifeSciencesClinialTrailManagement>
    <enableAdverseEvents>true</enableAdverseEvents>
    <enableTrialManagementRandomization>true</enableTrialManagementRandomization>
</IndustriesSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Industries</members>
        <name>Settings</name>
    </types>
    <version>66.0</version>
</Package>
```
