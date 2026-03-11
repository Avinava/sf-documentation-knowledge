---
title: "MetadataPackageVersion"
domain: tooling-api
topic: metadatapackageversion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.270Z
keywords: [MetadataPackageVersion, Supported, SOAP, Calls, REST, HTTP, Methods, Fields, Usage]
---

# MetadataPackageVersion

# MetadataPackageVersion

Represents a package version (managed or unmanaged) that has been uploaded from the org you’re logged in to. Available in Tooling API version 38.0 and later.

## Supported SOAP Calls

describeSObjects(), query(), retrieve()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| BuildNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe build number of the version. For example, if you upload two beta versions, they have build numbers 1 and 2. Then, when you upload a released build of the same version, the build number is 3. When you upload a new version, the build number resets to 1. |
| IsDeprecated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the package version is deprecated. Available in API version 46.0 and later. |
| MajorVersion | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe first number in a package version number. A version number either has an x.y format or an x.y.z format. The x represents the major version, y the minor version, and z the patch version. |
| MetadataPackageId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe 18-character package ID, which starts with 033. |
| MinorVersion | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe second number in a package version number. A version number either has an x.y format or an x.y.z format. The x represents the major version, y the minor version, and z the patch version. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the package version. |
| PatchVersion | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe third number in a package version number, if present. A version number either has an x.y format or an x.y.z format. The x represents the major version, y the minor version, and z the patch version. |
| ReleaseState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIf the package version is a beta version, the value is Beta. Otherwise, the value is Released. |

## Usage

Here are examples of the types of API queries you can perform.

| Query | String |
| --- | --- |
| Get all package versions for the package that has a MetadataPackageID of 033D00000001xQlIAI | SELECT Id, Name, ReleaseState, MajorVersion, MinorVersion, PatchVersion FROM MetadataPackageVersion WHERE MetadataPackageId = '033D00000001xQlIAI' |
| Get the package version for the package with a specific MetadataPackageID and a major version greater than 1 | SELECT Id FROM MetadataPackageVersion WHERE MetadataPackageId ='033D00000001xQlIAI' AND MajorVersion > 1 |
| Get released package versions for the package with a specific MetadataPackageID | SELECT Id FROM MetadataPackageVersion WHERE MetadataPackageId = '033D00000001xQlIAI' AND ReleaseState = 'Released' |

**Java Code Sample**

Suppose you want to push version 3.4.6 of your package to all orgs. Let’s write some code to identify the orgs eligible for the upgrade. This example demonstrates how to generate the list of subscriber orgs eligible to be upgraded to version 3.4.6 of a package.

This code sample uses the web Services Connector (WSC).

```

```

**Next Step**

Create a push request using PackagePushRequest.