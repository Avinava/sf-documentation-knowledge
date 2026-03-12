---
title: "Package2Version"
domain: tooling-api
topic: package2version
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.405Z
estimatedTokens: 2046
keywords: [Package2Version, second-generation, package, version, Dev, Hub, org, except, Tag, Branch, visible, subscriber, API, 41.0, later]
---

# Package2Version

> Represents a
            second-generation package version in a Dev Hub org. Values for all fields except for
                Tag and Branch are visible to the
            subscriber. Available in API version 41.0 and later.

# Package2Version

Represents a second-generation package version in a Dev Hub org. Values for all fields except for Tag and Branch are visible to the subscriber. Available in API version 41.0 and later.

## Supported SOAP Calls

query(), retrieve(), update()

## Supported REST HTTP Methods

Query, GET, POST

## Fields

| Field | Details |
| --- | --- |
| AncestorId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the immediate parent of the package version in the package ancestry tree. |
| Branch | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe branch associated with this package version. Can be used to create a tree structure of inheritance.This value is auto-populated from Package2VersionCreateRequest, but you can update it. |
| BuildDurationInSeconds | TypeintPropertiesFilter, Group, Nillable, Sort,DescriptionMeasured in seconds, this field indicates how long the build for this package version took. This field is new in API version 51.0. |
| BuildNumber | TypeintPropertiesFilter, Group, SortDescriptionPart of the version number of a package version. The complete version number format is major.minor.patch (Beta build)—for example, 1.2.0 (Beta 5). For released packages, version numbers contain only major.minor.patch, or, if patch is 0, major.minor—for example, 1.2. |
| CodeCoverage | TypecomplexvaluePropertiesNillableDescriptionPercentage of lines of Apex code in the package version that are covered by tests. The value is null if code coverage wasn’t run when the package version was created.For second-generation managed packages, a minimum 75% code coverage is required for package version promotion. |
| CodeCoveragePercentages | TypecomplexvaluePropertiesNillableDescriptionProvides code coverage details for each Apex class in the package version.The value is null if code coverage wasn’t run when the package version was created, or if there’s no Apex code in the package. |
| ConvertedFromVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe subscriber package version ID (starts with 04t) of the first-generation managed package version that was converted. This field is available in API version 64.0 and later.This field is a relationship field.Relationship NameConvertedFromVersionRefers ToSubscriberPackageVersion |
| Description | TypestringPropertiesFilter, Nillable, Sort, UpdateDescriptionDescription of the package. |
| DeveloperUsePkgZip | Typebase64PropertiesNillableDescriptionThe zip file of package metadata for the package version. For converted second-generation managed packages only. |
| HasMetadataRemoved | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionFor managed packages only, this field returns true when one or more managed metadata components included in the package version’s ancestor aren’t included in this package version. This field doesn’t apply to unlocked packages. Available in API version 51.0. |
| HasPassedCodeCoverageCheck | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionReturns true if code coverage tests were run when the package version was created, and the resulting code coverage percentage is 75% or greater. Otherwise, returns false.For second-generation managed packages, a minimum 75% code coverage is required for package version promotion. |
| InstallKey | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionInstallation key for creating the key-protected package. The default is null.If you query for this value, the returned value is always null (for security reasons). The value can be set and reset but not read. |
| IsDeprecated | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether this package version has been marked as deprecated (true) or not (false). The default value is false.If you set IsDeprecated to true for a package, the package and all of its child package versions are deprecated.If you set IsDeprecated to false for a package, the package and all of its child package versions are undeprecated. However, if IsDeprecated is explicitly set to true for a package version after its parent package is deprecated, the child remains deprecated even if you undeprecate its parent.If you set IsDeprecated to false for a package version whose parent package is deprecated, the package version’s IsDeprecated value remains true until its parent is undeprecated.Deprecated package versions that have been installed in subscriber orgs continue to function, but new installations of deprecated package versions are blocked. |
| IsPasswordProtected | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether installation of this package version requires the user to provide an installation key (true) or not (false). The default value is false. |
| IsReleased | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the package version is released (true) or in beta (false). |
| Language | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language for the package.If a language wasn’t specified, the language defaults to the language of the Dev Hub user who created the package. This field is available in API version 57.0 and later. |
| MajorVersion | TypeintPropertiesFilter, Group, SortDescriptionPart of the version number of a package version. The complete version number format is major.minor.patch (Beta build)—for example, 1.2.0 (Beta 5). For released packages, version numbers contain only major.minor.patch, or, if patch is 0, major.minor—for example, 1.2. |
| MinorVersion | TypeintPropertiesFilter, Group, SortDescriptionPart of the version number of a package version. The complete version number format is major.minor.patch (Beta build)—for example, 1.2.0 (Beta 5). For released packages, version numbers contain only major.minor.patch, or, if patch is 0, major.minor—for example, 1.2. |
| Name | TypestringPropertiesFilter, Group, Sort, UpdateDescriptionName of the package. |
| Package2Id | TypereferencePropertiesFilter, Group, SortDescriptionID of the parent package (starts with 0Ho). |
| PatchVersion | TypeintPropertiesFilter, Group, SortDescriptionPart of the version number of a package version. The complete version number format is major.minor.patch (Beta build)—for example, 1.2.0 (Beta 5). For released packages, version numbers contain only major.minor.patch, or, if patch is 0, major.minor—for example, 1.2.Currently, the only valid value is 0. |
| ReleaseVersion | TypedoublePropertiesFilter, Group, SortDescriptionIndicates the Salesforce release version used to create the package version. The value is in the format of a Salesforce API version number, for example, “51.0.” This field is new in API version 51.0. |
| SnapshotName | DescriptionThe name of the scratch org snapshot used when creating this package version. |
| SubscriberPackageVersionId | TypereferencePropertiesFilter, Group, Sort, UniqueDescriptionID that subscribers use to install the package version (starts with 04t).This value is read-only. |
| Tag | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe package version’s tag.This value is auto-populated from Package2VersionCreateRequest, but you can update it. |
| ValidatedAsync | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, a new package version is created before package validations complete.The default value is false.For more information on async validation, see Create and Update Versions of a Second-Generation Managed Package |
| ValidationSkipped | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIf true, validation is skipped during package version creation. Skipping validation reduces the time it takes to create a new package version, but package versions created without validation can’t be promoted to the released state. This field is available in API version 48.0 and later.The default value is false.You can't specify both skip validation and code coverage, because code coverage is calculated during validation. |
