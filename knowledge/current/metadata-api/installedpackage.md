---
title: "InstalledPackage"
domain: metadata-api
topic: installedpackage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.154Z
keywords: [InstalledPackage, Note, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# InstalledPackage

# InstalledPackage

Represents a first-generation managed package to be installed or uninstalled. Deploying a newer version of a currently installed package upgrades the package. You can install up to 20 first-generation managed packages in a single deployment. To install an unlocked or second-generation managed package, use the sf package install Salesforce CLI command.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

You can’t deploy a package along with other metadata types. When you deploy InstalledPackage, it must be the only metadata type specified in the manifest file.

## File Suffix and Directory Location

The package is specified in the installedPackages directory, in a file named after the package’s namespace prefix. The file extension is .installedPackage.

## Version

InstalledPackage is available in API version 28.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| activateRSS | boolean | Required. Determines the state of Remote Site Settings (RSS) and Content Security Policy (CSP) at the time of installing the package and must be set to either of these values.trueKeep the isActive state of any RSS or CSP in the package.falseOverride the isActive state of any RSS or CSP in the package and set it to false.The default value is false. Available in API version 43.0 and later. |
| password | string | Specifies the package password. |
| securityType | string | Determines user access for the installed package.Valid values are:AdminsOnlyAllUsersThe default value is AllUsers. Available in API version 57.0 and later. |
| versionNumber | string | Required. The version number of the package. The version number has the format majorNumber.minorNumber.patchNumber (for example, 2.1.3). |

## Declarative Metadata Sample Definition

The following example specifies a sample package to be installed or uninstalled.

```

```

The securityType field is optional. If it’s not specified, the default security type is AllUsers.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").