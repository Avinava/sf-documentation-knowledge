---
title: "UserInterfaceSettings"
domain: metadata-api
topic: userinterfacesettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:43.523Z
estimatedTokens: 1813
keywords: [UserInterfaceSettings, Represents, settings, modify, behavior, org’s, user, interface., Parent, Manifest, Access, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample]
---

# UserInterfaceSettings

> Represents the settings that modify the behavior
      of the org’s user interface.

# UserInterfaceSettings

Represents the settings that modify the behavior of the org’s user interface.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

A UserInterfaceSettings component file has the suffix .settings and is stored in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

UserInterfaceSettings components are available in API version 46.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| dynamicMruActionsOff | boolean | Indicates whether users can create custom actions for their Recently Viewed lists (true) or not (false). The default is true. Available in API version 52.0 and later. Applies to Lightning Experience only. |
| enableAsyncRelatedLists | boolean | Indicates whether related lists are loaded asynchronously (true) or not (false). The default is false. Available in API version 47.0 and later. Salesforce Classic only. |
| enableClickjackUserPageHeaderless | boolean | Indicates whether a Visualforce page that hides the standard header has clickjack protections (true) or not (false). The default is true. This setting applies to all of your Visualforce pages. |
| enableCollapsibleSections | boolean | Indicates whether users are allowed to collapse or expand sections in record details by using the arrow icon next to the section heading. The default is true. |
| enableCollapsibleSidebar | boolean | Indicates whether users are allowed to show or hide the sidebar on every page that normally includes it (true) or not (false). The default is false. Applies to Salesforce Classic only. |
| enableCustomObjectTruncate | boolean | Indicates whether users with Customize Application permission can truncate custom objects (true) or not (false). When you truncate an object, you delete the object’s associated records permanently, while preserving the empty object and its metadata. The default is false. Available in API version 47.0 and later. |
| enableCustomSidebarOnAllPages | boolean | Indicates whether custom sidebar components are available on all pages for all org users (true) or not (false). The default is false. Applies to Salesforce Classic only. |
| enableDeleteFieldHistory | boolean | Indicates whether users can delete field history and field history archive records (true) or not (false). The default is false. Available in API version 47.0 and later. |
| enableExternalObjectAsyncRelatedLists | boolean | Indicates whether related lists of external objects are loaded asynchronously ( true) or not (false). The default is true. Available in API version 48.0 and later. Salesforce Classic only. |
| enableHoverDetails | boolean | Indicates whether an interactive overlay containing record details is displayed (true) or not (false). The default is true.NoteTo view hover details for a record, users need the appropriate sharing access and field-level security access for the fields in the mini page layout. |
| enableInlineEdit | boolean | Indicates whether users are allowed to edit field values on a record’s detail page (true) or not (false). The default is true. |
| enablePersonalCanvas | boolean | Indicates whether users can install and use personal canvas apps (true) or not (false). The default is true. This setting applies to all of your Visualforce pages. |
| enableRelatedListHovers | boolean | Indicates whether related list hover links display at the top of record detail pages and custom object detail pages in Setup (true) or not (false). Users can hover over a related list link to display the list and its number of records in an interactive overlay. Users quickly view and manage the related list items from the overlay. Users can also click a related list hover link to jump to the related list without having to scroll down the page. The default is true. Available in API version 50.0 and later. |
| enableSldsV2DarkModeInCosmos (beta) | boolean | Indicates whether individual users can enable dark mode (true) or not (false) for the Salesforce Cosmos theme. The default value is false. Available for SLDS 2 themes in select editions. See Salesforce Cosmos Theme and SLDS 2 Availability. Available in API version 65.0 and later.NoteDark mode is a pilot or beta service that is subject to the Beta Services Terms at Agreements - Salesforce.com or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the Product Terms Directory. Use of this pilot or beta service is at the Customer's sole discretion. |
| enableQuickCreate | boolean | Indicates whether an area displays on a tab home page (corresponds to the Show Quick Create setting), allowing users to create a record quickly with minimal information (true) or not (false). The Quick Create area displays by default on the tab home pages for leads, accounts, contacts, and opportunities. You can control whether the Quick Create area is displayed on all relevant tab home pages. |
| multiColumnSortLv | boolean | Indicates whether users can sort list views by multiple columns (true) or not (false). The default is true. Available in API version 63.0 and later. |
| multiColumnSortRL | boolean | Indicates whether users can sort related lists by multiple columns (true) or not (false). The default is true. Available in API version 63.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a UserInterfaceSettings component.

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the user interface settings metadata for an organization:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<UserInterfaceSettings xmlns="http://soap.sforce.com/2006/04/metadata">
  <enableDeleteFieldHistory>false</enableDeleteFieldHistory>
  <enableInlineEdit>true</enableInlineEdit>
  <enableHoverDetails>false</enableHoverDetails>
  <enableQuickCreate>true</enableQuickCreate>
  <enablePersonalCanvas>false</enablePersonalCanvas>
  <enableClickjackUserPageHeaderless>true</enableClickjackUserPageHeaderless>
</UserInterfaceSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>UserInterface</members>
		<name>Settings</name>
	</types>
	<version>46.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
