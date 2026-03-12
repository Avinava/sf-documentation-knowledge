---
title: "Territory2Settings"
domain: metadata-api
topic: territory2settings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:43.153Z
estimatedTokens: 1739
keywords: [Territory2Settings, Represents, org’s, Territory2, settings., settings, set, access, level, Sales, Territories, users, records, associated, sales, territories, enable, features., standard, record]
---

# Territory2Settings

> Represents an org’s Territory2 settings. Use Territory2 settings to set the access level
    that Sales Territories users have to records associated with sales territories, and to enable
    features. The standard record access settings apply to accounts and opportunities. With
      Private default internal access for contacts or cases, you can also set
    access for those records.

# Territory2Settings

Represents an org’s Territory2 settings. Use Territory2 settings to set the access level that Sales Territories users have to records associated with sales territories, and to enable features. The standard record access settings apply to accounts and opportunities. With Private default internal access for contacts or cases, you can also set access for those records.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

Territory2Settings values are stored in a single file named Territory2.settings in the settings directory of the corresponding package directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

Territory2Settings is available in API version 32.0 and later.

## Special Access Rules

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| defaultAccountAccessLevel | string | Sets the default level of access that users have to account records in territories: view and edit accounts assigned to territories or view, edit, transfer, and delete accounts assigned to territories. |
| defaultCaseAccessLevel | string | Sets the default level of access that users have to case records in territories: view and edit accounts assigned to territories or view, edit, transfer, and delete accounts assigned to territories. |
| defaultContactAccessLevel | string | Sets the default level of access that users have to contact records in territories: view and edit accounts assigned to territories or view, edit, transfer, and delete accounts assigned to territories. |
| defaultOpportunityAccessLevel | string | Sets the default level of access that users have to opportunity records in territories: view and edit accounts assigned to territories or view, edit, transfer, and delete accounts assigned to territories. |
| enableTerritoryManagement2 | boolean | Enables and disables Sales Territories only. If true, Sales Territories is enabled. If false (default), Enterprise Territory Management isn’t enabled. Enabling and disabling Sales Territories is exclusive of all other operations, and the field value must be true before other territory-management operations can run.Available in API version 47.0 and later. |
| opportunityFilterSettings | Territory2SettingsOpportunityFilter | Optional. Specifies an Apex class to assign territories to opportunities and whether you want to run it when an opportunity is created. Available in API version 34.0 and later. |
| showTM2EnabledBanner | boolean | If true, a success banner appears on the Territory Settings page in Setup.Available in API version 49.0 and later. |
| supportedObjects | Territory2SupportedObject[] | Sets the user access levels of all objects that support territory assignments in the org. Available in API version 57.0 and later. |
| t2ForecastAccessLevel | string | Sets the access level that users in a parent territory get to the opportunities assigned to its child territories, regardless of who owns the opportunities.Valid values are:ViewEditAvailable in API version 49.0 and later. |
| tm2BypassRealignAccInsert | boolean | If true, account assignment rules don’t run during account insert jobs.Available in API version 53.0 and later. |
| tm2EnableUserAssignmentLog | boolean | If true, when a user is assigned to a territory, the assignment action is logged.Available in API version 57.0 and later. |

## Territory2SettingsOpportunityFilter

This subtype specifies an Apex class that assigns territories to opportunities. You can run the Apex class automatically every time a user creates an opportunity, or run it by using multithreading.

| Field Name | Description |
| --- | --- |
| apexClassName | Field TypestringDescriptionRepresents the Apex class name. |
| enableFilter | Field TypebooleanDescriptionIf true, the Apex class is used to assign territories to opportunities. |
| runMultiThreaded | Field TypebooleanDescriptionRequired. If true, the Apex class runs by using multithreading, which can improve performance. Set this value to true only if you’re assigning opportunity or opportunity product splits, and your Apex code can run with multithreading. This field has a default value of false.Available in API version 62.0 and later. |
| runOnCreate | Field TypebooleanDescriptionIf true, the Apex class runs automatically every time a user creates an opportunity. |

## Territory2SupportedObject

Sets the user access levels of all objects that support territory assignments in the org.

| Field Name | Description |
| --- | --- |
| defaultAccessLevel | Field TypestringDescriptionRequired. The default user access level as permitted by the organization’s sharing settings. Valid values are:ReadEditTransferAll |
| objectType | Field TypestringDescriptionRequired. The only supported object type is Lead. |
| state | Field TypestringDescriptionRequired. Valid values are:DisabledEnabled |

## Declarative Metadata Sample Definition

The following example shows the definition of a Territory2Settings component.

```

```

## Usage

Sales Territories components don’t support packaging or change sets and aren’t supported in [CRUD calls](atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm "Use CRUD-based calls to work with metadata components in a manner similar to how synchronous API calls in the enterprise WSDL act upon objects.").

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Territory2Settings xmlns="http://soap.sforce.com/2006/04/metadata">
    <defaultAccountAccessLevel>Owner</defaultAccountAccessLevel>
    <defaultOpportunityAccessLevel>Read</defaultOpportunityAccessLevel>
    <defaultCaseAccessLevel>None</defaultCaseAccessLevel>
    <defaultContactAccessLevel>Edit</defaultContactAccessLevel>
    <enableTerritoryManagement2>true</enableTerritoryManagement2>
    <showTM2EnabledBanner>true</showTM2EnabledBanner>
    <supportedObjects>
       <defaultAccessLevel>Read</defaultAccessLevel>
       <state>Disabled</state>
       <objectType>Lead</objectType>
    </supportedObjects>
    <tm2EnableUserAssignmentLog>true</tm2EnableUserAssignmentLog>
    <t2ForecastAccessLevel>View</t2ForecastAccessLevel>
</Territory2Settings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- CRUD
            calls (atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
