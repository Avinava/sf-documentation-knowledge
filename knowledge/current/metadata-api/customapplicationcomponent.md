---
title: "CustomApplicationComponent"
domain: metadata-api
topic: customapplicationcomponent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:51.495Z
keywords: [CustomApplicationComponent, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# CustomApplicationComponent

# CustomApplicationComponent

Represents a custom console component (Visualforce page) assigned to a CustomApplication that is marked as a Salesforce console. Custom console components extend the capabilities of Salesforce console apps. See Customize a Console with Custom Components in Salesforce Classic in Salesforce Help.

## File Suffix and Directory Location

Custom application components have the suffix .customApplicationComponent and are stored in the customApplicationComponents folder.

## Version

Custom applications are available in API version 25.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| buttonIconUrl | string | The address of a page that hosts an icon for the button. |
| buttonStyle | string | The inline style used to define how the button looks. |
| buttonText | string | The label on the button used to launch the custom console component. |
| buttonWidth | int | The pixel width of the button displayed in the Salesforce console. |
| height | int | The pixel height of the window used to display the custom console component. |
| isHeightFixed | boolean | Required. Indicates whether users can change the custom console component height (false) or not (true). |
| isHidden | boolean | Required. Indicates whether the custom console component is hidden from users (true) or not (false). |
| isWidthFixed | boolean | Required. Indicates whether users can change the component width (false) or not (true). |
| visualforcePage | string | Required. Name of the Visualforce page that represents the custom console component. |
| width | int | The pixel width of the window used to display the custom console component. |

## Declarative Metadata Sample Definition

The following is the definition of a custom application component:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").