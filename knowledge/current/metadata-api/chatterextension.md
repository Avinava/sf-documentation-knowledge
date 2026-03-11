---
title: "ChatterExtension"
domain: metadata-api
topic: chatterextension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.085Z
keywords: [ChatterExtension, Important, Retrieving, Version, Fields, Wildcard, Support, Manifest, File, See]
---

# ChatterExtension

# ChatterExtension

Represents the metadata used to describe a Rich Publisher App that’s integrated with the Chatter publisher.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Retrieving ChatterExtension

Using an API tool, you can get extension information from package.xml using this code.

```

```

Use the <members> tag to name a specific extension (in this example, xw1), or use the wildcard (\*) symbol to retrieve all your extensions.

Here’s an example of retrieved information.

```

```

## Version

ChatterExtension is a new feature in API version 41.0.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| compositionComponent | string | Required. The composition component of the Rich Publisher App that you provide. It’s comprised of the lightning:availableForChatterExtensionComposer interface. |
| description | string | Required. The description of your custom Rich Publisher App. |
| extensionName | string | Required. The name of your extension. That is, your Rich Publisher App. |
| headerText | string | The text to show in the header of your app composer. Header text is required for Lightning type extensions. This text can be localized. |
| hoverText | string | The text to show when a user mouses over your extension’s icon. Mouse-over text is required for Lightning type extensions. This text can be localized. |
| icon | string | Required. The icon to show in the Chatter publisher. Use an existing file asset id from your org. |
| isProtected | boolean | An auto-generated value. It currently has no impact. |
| masterLabel | string | Required. Label for the ChatterExtension object. |
| renderComponent | string | Required. The rendering component of the Rich Publisher App that you provide. It’s comprised of the lightning:availableForChatterExtensionRenderer interface. |
| type | ChatterExtensionType (enumeration of type string) | Required. Describes the type of the extension. Currently, the only value supported is Lightning. Included to allow for other possible types in the future. |

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Integrate Your Custom Apps into the Chatter Publisher](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/components_integrate_customapps_to_publisher.htm "Integrate Your Custom Apps into the Chatter
    Publisher - HTML (New Window)")