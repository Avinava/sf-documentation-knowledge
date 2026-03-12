---
title: "ReferencedDashboard"
domain: metadata-api
topic: referenceddashboard
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.278Z
estimatedTokens: 572
keywords: [ReferencedDashboard, Represents, CRM, Analytics., referenced, dashboard, stores, information, externally, dashboard., Important, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules]
---

# ReferencedDashboard

> Represents the ReferencedDashboard object in CRM
      Analytics. A referenced dashboard stores information about an externally referenced
      dashboard.

# ReferencedDashboard

Represents the ReferencedDashboard object in CRM Analytics. A referenced dashboard stores information about an externally referenced dashboard.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

ReferencedDashboard components have the suffix .refdash and are stored in the wave folder.

## Version

ReferencedDashboard components are available in API version 57.0 and later.

## Special Access Rules

To view referenced dashboards, you need the Enables Tableau Dashboards in CRM Analytics permission.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| application | string | Required. The internal name of the Analytics app. |
| description | string | The dashboard description that appears in the user interface. |
| embedUrl | string | Required. The URL to the referenced dashboard. |
| masterLabel | string | Required. The dashboard name that appears in the user interface. |
| templateAssetSourceName | string | Links the dashboard to the template used to create it. Null for assets not created from a template. |
| visibility | string | The visibility of the dashboard. Valid values are: ALL and LIMITED. |

## Declarative Metadata Sample Definition

The following is an example of a WaveDashboard component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<ReferencedDashboard xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <application>my_app</application>
    <masterLabel>ReferencedDashboard1</masterLabel>
    <description>My Tableau Dashboard</description>
    <embedUrl>https://public.tableau.com/views/Superstore_24/Overview</embedUrl>
    <visibility>ALL</visibility>
</ReferencedDashboard>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
