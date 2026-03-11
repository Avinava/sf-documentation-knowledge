---
title: "ExternalClientApplication"
domain: metadata-api
topic: externalclientapplication
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:52.454Z
keywords: [ExternalClientApplication, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ExternalClientApplication

# ExternalClientApplication

Represents the header file for an external client application configuration.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExternalClientApplication components have the suffix .eca and are stored in the externalClientApps folder.

## Version

ExternalClientApplication components are available in API version 59.0 and later.

## Special Access Rules

Access to the ExternalClientApplication type requires orgs to enable the Opt in to External Client Apps permission in Setup.

## Fields

| Field Name | Description |
| --- | --- |
| contactEmail | Field TypestringDescriptionThe email address that Salesforce uses to contact the external client app admin for the subscriber org. |
| contactPhone | Field TypestringDescriptionThe phone number that Salesforce uses to contact the external client app admin for the subscriber org. |
| description | Field TypestringDescriptionA description for the app. |
| distributionState | Field TypeExtlClntAppDistState (enumeration of type string)DescriptionThe distribution state of an external client app.Values are:AutoInstalled. For internal use only.Local.Managed. For internal use only.Packaged. |
| iconUrl | Field TypestringDescriptionThe URL for the icon image. |
| infoUrl | Field TypestringDescriptionReserved for future use. |
| isProtected | Field TypebooleanDescriptionA package construct that developers use to control the visibility of components in subscriber orgs. Default is false. |
| label | Field TypestringDescriptionThe label for the external client app. |
| logoUrl | Field TypestringDescriptionThe URL for the logo image. |
| managedType | Field TypeExtlClntAppManagedType (enumeration of type string)DescriptionFor internal use only. |
| orgScopedExternalApp | Field TypestringDescriptionA unique ID consisting of the org ID and the name of this external client app. Either defined by the developer or auto-generated during the first deployment. The expected value uses this format: [Organization_ID]:[External Client App Name]. |

## Declarative Metadata Sample Definition

This example shows an ExternalClientApplication component.

```

```

This example package.xml references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").