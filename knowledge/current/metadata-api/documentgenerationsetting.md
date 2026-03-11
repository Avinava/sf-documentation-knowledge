---
title: "DocumentGenerationSetting"
domain: metadata-api
topic: documentgenerationsetting
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:52.083Z
keywords: [DocumentGenerationSetting, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# DocumentGenerationSetting

# DocumentGenerationSetting

Represents an org's settings for automatic document generation from templates. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

DocumentGenerationSetting components have the suffix documentGenerationSetting and are stored in the documentGenerationSettings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

DocumentGenerationSetting components are available in API version 52.0 and later.

## Special Access Rules

DocumentGenerationSetting is available if your org has the DocGen platform license and related addon and user licenses.

Server-side document generation isn't enabled by default, and selecting isServerSideDocGenEnabled isn't sufficient. To enable this feature, see the [Request Access to Server-Side Document Generation](https://help.salesforce.com/apex/HTViewSolution?urlname=Request-Access-to-Server-Side-Document-Generation&language=en_US) knowledge article.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| documentTemplateLibraryName | String | Required. The name of the library that stores the document templates to which this setting applies. |
| generationMechanism | GenerationMechanism (enumeration of type string) | Specifies how and where a document is generated. Valid values are:ClientSide—Generates documents in the browser with an optional preview.ServerSide—Generates documents on the server and attaches them to the objects for which they're generated.The default is ClientSide. |
| guestAccessNamedCredential | String | Specifies the named credential that lets guest users generate documents. |
| inProgDocGenRqstTmot | Integer | The time interval (in hours) after which InProgressDocumentGenerationProcess records (single point or batch request) are terminated and the request status is updated to Failed. Specify a valid whole number between 1 and 24. The default value is set to 6. |
| isInProgRqstTmotEnab | Boolean | Indicates whether the InProgress DocGen Request Time Out (hrs) is enabled (true) or not (false). |
| isServerSideDocGenEnabled | Boolean | Enables server-side document generation if the prerequisite license is present in the org. |
| masterLabel | String | Required. Specifies a name for the setting, such as DocGen. |
| previewType | PreviewType (enumeration of type string) | Specifies the format of previews of generated documents. Valid values are:PDF—Displays how the generated document looks in PDF format.Thumbnail—Displays a miniature representation of the generated document.The default is PDF. |

## Declarative Metadata Sample Definition

The following is an example of a DocumentGenerationSetting component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").