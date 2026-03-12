---
title: "Package2"
domain: tooling-api
topic: package2
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.382Z
estimatedTokens: 1194
keywords: [Package2, second-generation, managed, package, unlocked, Dev, Hub, org, visible, subscriber, API, version, 41.0, later, SOAP]
---

# Package2

> Represents a second-generation
            managed package or an unlocked package in a Dev Hub org. Values for all fields are
            visible to the subscriber. Available in API version 41.0 and later.

# Package2

Represents a second-generation managed package or an unlocked package in a Dev Hub org. Values for all fields are visible to the subscriber. Available in API version 41.0 and later.

## Supported SOAP Calls

create(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

Query, GET, POST

## Fields

| Field | Details |
| --- | --- |
| AppAnalyticsEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIf true AppExchange App Analytics can access package usage logs and subscriber snapshots.The default value is false. |
| ContainerOptions | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionContainer options for the second-generation package. These options determine the upgrade and editability rules. The default value is Managed.Valid values include:Managed (developer-managed, subscriber-managed)Unlocked (developer-controlled, subscriber-editable) |
| ConvertedFromPackageId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe package ID (starts with 033) for the first-generation managed package that was converted. This field is available in API version 64.0 and later.This field is a relationship field.Relationship NameConvertedFromPackageRefers ToSubscriberPackage |
| DataCloudPackage | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIf true, this package contains Data 360 metadata. When creating a managed package with Data 360 metadata, you must isolate the Data 360 metadata from the other Salesforce metadata by creating a separate package that contains only Data 360 metadata.Then create a package dependency between your dedicated Data 360 package and any related packages.The default value is false. |
| Description | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the package. |
| IsDeprecated | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether this package has been marked as deprecated (true) or not (false). The default value is false.If you set IsDeprecated to true for a package, the package and all of its child package versions are deprecated.If you set IsDeprecated to false for a package, the package and all of its child package versions are undeprecated. However, if IsDeprecated is explicitly set to true for a package version after its parent package is deprecated, the child remains deprecated even if you undeprecate its parent.If you set IsDeprecated to false for a package version whose parent package is deprecated, the package version’s IsDeprecated value remains true until its parent is undeprecated.Deprecated package versions that have been installed in subscriber orgs continue to function, but new installations of deprecated package versions are blocked. |
| IsOrgDependent | TypebooleanPropertiesFilter, Group, SortDescriptionIndicates whether the package depends on unpackaged metadata in the installation org (true) or not (false). This field only applies to unlocked packages. The default value is false. Available in API version 49.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the package. Unlike a typical developer name, this value is mutable and can contain special characters. |
| NamespacePrefix | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionNamespace prefix that identifies the components of your package in the subscriber’s org. |
| PackageErrorUsername | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address for an active user in the Dev Hub org you want to receive email notification regarding package-related errors. You can set the field when creating a package and update it later. |
| SubscriberPackageID | TypereferencePropertiesFilter, Group, Sort, UniqueDescriptionID that identifies this package across all Salesforce instances (starts with 033).This value is case-sensitive and must be unique. |
| WasTransferred | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the package was previously associated with a different Dev Hub org. For details, see: Transfer a Second-Generation Managed Package to a Different Dev Hub. This field is available in API version 57.0 and later. The default value is false. |

## Usage

Subscribers install package versions ([Package2Version](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_package2version.htm#tooling_api_objects_package2version "Represents a second-generation package version in a Dev Hub org. Values for all fields except for Tag and Branch are visible to the subscriber. Available in API version 41.0 and later.")s) in their orgs.

## Related Topics

- Package2Version (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_package2version.htm)
