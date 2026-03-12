---
title: "OpportunitySettings"
domain: metadata-api
topic: opportunitysettings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:41.019Z
estimatedTokens: 2164
keywords: [OpportunitySettings, org, preferences, features, automatic, opportunity, updates, similar-opportunity, filters, File, Suffix, Directory, Location, Version, FindSimilarOppFilter]
---

# OpportunitySettings

> Represents org preferences for features such as
            automatic opportunity updates and similar-opportunity filters.

# OpportunitySettings

Represents org preferences for features such as automatic opportunity updates and similar-opportunity filters.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

Use opportunity settings to control the actions that users can perform on their opportunities.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

Opportunities values are stored in a single file named Opportunity.settings in the settings directory of the corresponding package directory.

## Version

OpportunitySettings is available in API version 28.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| autoActivateNewReminders | boolean | Automatically uses scheduled updates for new opportunities. |
| customizableProductSchedulesEnabled | boolean | Lets Salesforce admins customize product schedules by using custom fields, validation rules, and Apex triggers on the LineItemSchedule object. This field is available in API version 46.0 and later.If customizable product schedules are enabled, you can use custom fields in default schedules and customize their layout, but Apex triggers or validation rules that you apply to default schedules are bypassed. |
| doesEnforceStandardOpportunitySaveLogic | boolean | Enforces standard validation and triggers for opportunity products and opportunity product schedules. Default value is true. Can't be set to false.Available in API version 47.0 and later. |
| enableExpandedPipelineInspectionSetup |  | Displays a Pipeline Inspection setup page to Salesforce admins with all setup steps for enabling and configuring the feature. The set up also includes historical trending. The default value is false.Available in API version 52.0 and later. |
| enableFindSimilarOpportunities | boolean | Lets users see related or similar existing opportunities. |
| enableForecastCategoryMetrics | boolean | Lets users see single and cumulative forecast category rollups over a selected period. Applies to the following categories: Best Case, Closed Lost, Closed Won, Commit, Most Likely, Open Pipeline, and Total.Default value is true. Available in API version 57.0 and later. |
| enableOpportunityFieldHistoryTracking | boolean | Enables history tracking for the opportunity field. For more information, see “Field History Tracking” in Salesforce Help. Default value is true.Available in API version 47.0 and later. |
| enableOpportunityInsightsInMobile | boolean | Deprecated in API version 59.0 and later because the feature is no longer available. Indicates whether a user can see Einstein Opportunity Insights on their mobile device (true) or not (false). Einstein Opportunity Insights includes predictions about which deals are likely to be won, reminders to follow up, and notifications when key moments in a deal take place.Available in API version 47.0 to 58.0. |
| enableOpportunityTeam | boolean | Lets users associate team members with opportunities. |
| enablePipelineChangesMetrics | boolean | Lets users see net change to the pipeline (positive or negative) contributed by each deal within a selected timeframe. Applies to the following categories: Open Pipeline, New, Won, Increased, Moved In, Moved Out, Decreased, Lost, and Overdue.Default value is true. Available in API version 57.0 and later. |
| enablePipelineInspection | boolean | Enables the Pipeline Inspection feature in the Opportunity tab. Also enables historical trending for opportunities, if the org has the historical trending org perm. Pipeline Inspection is a consolidated view of pipeline metrics, corresponding opportunities, and highlights of recent opportunity changes and insights. The default value is false.Also enables historical trending for opportunities, if historical trending isn’t already enabled. To use Pipeline Inspection, additional configuration in Setup is required.Available in API version 52.0 and later. |
| enablePipelineInspectionFlow | boolean | Enables the Pipeline Inspection Flow Chart in the Opportunity tab. This chart shows Pipeline Inspection users the changes to opportunities in different forecast categories over time. Users can filter results to see the data that’s most useful to them.To use this feature, access to Revenue Insights is required.Available in API version 54.0 and later. |
| enablePipelineInspectionSingleCategoryRollup | boolean | Indicates that Pipeline Inspection metrics display as single forecast categories (true), or multiple categories rolled up (false). The default value is (false).To use this feature, Pipeline Inspection configuration in Setup is required.Available in API version 55.0 and later. |
| enableRevenueInsights | boolean | Sets up Revenue Insights dashboards and installs the related CRM Analytics app. The dashboards give users access to sales performance, pipeline, and forecasting reports and analytics.Revenue Insights is part of Revenue Intelligence, which is available for an additional cost.Available in API version 54.0 and later. |
| enableServiceCaseInsights | boolean | Indicates whether insights based on service cases are enabled (true) or not (false) in Pipeline Inspection. The default value is (false).Available in API version 55.0 and later. |
| enableUpdateReminders | boolean | Lets users enable automatic, scheduled updates on opportunities. |
| findSimilarOppFilter | FindSimilarOppFilter | Defines parameters for similar opportunities. |
| oppAmountDealMotionEnabled | boolean | Indicates whether deal change highlights are enabled for opportunity amounts (true) or not (false). The default value is (true).Available in API version 50.0 and later. |
| oppCloseDateDealMotionEnabled | boolean | Indicates whether deal change highlights are enabled for opportunity close dates (true) or not (false). The default value is (true).Available in API version 50.0 and later. |
| promptToAddProducts | boolean | Prompts users to add related products to an opportunity. |
| pushCountEnabled | boolean | Indicates whether the Push Count field is visible to users in opportunity list views and Pipeline Inspection views (true) or not (false). The default value is (true).Available in API version 56.0 and later. |
| simpleOppCreateFromContact | boolean | Indicates whether you can create an opportunity with prefilled information (such as the contact’s account) from the Global Actions menu while viewing a contact (true) or not (false). Available in API version 54.0 and later. |
| simpleOppCreateFromEvent | boolean | Indicates whether you can create an opportunity with prefilled information (such as the event’s account) from the Global Actions menu while viewing an event (true) or not (false). Available in API version 54.0 and later. |

## FindSimilarOppFilter

Defines whether to match by entire columns or fields.

| Field | Field Type | Description |
| --- | --- | --- |
| similarOpportunitiesDisplayColumns | string | The columns to compare. |
| similarOpportunitiesMatchFields | string | The fields to compare. |

## Declarative Metadata Sample Definition

The following is an example of the package file.

```

```

The package file references the following Opportunity.settings file.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Opportunity</members>
        <name>Settings</name>
    </types>
    <version>28.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<OpportunitySettings xmlns="http://soap.sforce.com/2006/04/metadata">
  <autoActivateNewReminders>true</autoActivateNewReminders>
  <customizableProductSchedulesEnabled>false</customizableProductSchedulesEnabled>
  <doesEnforceStandardOpportunitySaveLogic>true</doesEnforceStandardOpportunitySaveLogic>
  <enableFindSimilarOpportunities>true</enableFindSimilarOpportunities>
  <enableForecastCategoryMetrics>true</enableForecastCategoryMetrics>
  <enablePipelineChangesMetrics>true</enablePipelineChangesMetrics>
  <findSimilarOppFilter>
    <similarOpportunitiesMatchFields>OPPORTUNITY.Account</similarOpportunitiesMatchFields>
    <similarOpportunitiesMatchFields>OPPORTUNITY.OpportunityCompetitors</similarOpportunitiesMatchFields>
    <similarOpportunitiesMatchFields>CustomField__c</similarOpportunitiesMatchFields>
    <similarOpportunitiesDisplayColumns>CustomField__c</similarOpportunitiesDisplayColumns>
  </findSimilarOppFilter>
  <enableOpportunityFieldHistoryTracking>true</enableOpportunityFieldHistoryTracking>
  <enableOpportunityInsightsInMobile>false</enableOpportunityInsightsInMobile>
  <enableOpportunityTeam>true</enableOpportunityTeam>
  <enableUpdateReminders>true</enableUpdateReminders>
  <promptToAddProducts>true</promptToAddProducts>
..<oppAmountDealMotionEnabled>true</oppAmountDealMotionEnabled>
..<oppCloseDateDealMotionEnabled>true</oppCloseDateDealMotionEnabled>
</OpportunitySettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
