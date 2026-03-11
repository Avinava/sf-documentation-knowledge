---
title: "MobileSecurityAssignment"
domain: metadata-api
topic: mobilesecurityassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.603Z
keywords: [MobileSecurityAssignment, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# MobileSecurityAssignment

# MobileSecurityAssignment

Represents the assignment of mobile app security policies to a profile. The policies apply to the Salesforce mobile app with Enhanced Mobile App Security enabled.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

MobileSecurityAssignment components have the suffix .mobileSecurityAssignment and are stored in the mobileSecurityAssignments folder.

## Version

MobileSecurityAssignment components are available in API version 54.0 and later.

## Special Access Rules

The Enhanced Mobile App Security add-on subscription and the Enforce Enhanced Mobile App Security user permission are required to use this metadata type.

## Fields

| Field Name | Description |
| --- | --- |
| connectedApplication | Field TypestringDescriptionThe name of the connected app that’s associated with the mobile security policies assignment. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type. The default is false. |
| masterLabel | Field TypestringDescriptionRequired. A user-friendly name for MobileSecurityAssignment, which is defined when the MobileSecurityAssignment component is created. |
| profile | Field TypestringDescriptionThe profile that the mobile security policies are assigned to. |

## Declarative Metadata Sample Definition

The following is an example of a MobileSecurityAssignment component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").