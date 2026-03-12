---
title: "Package2VersionCreateRequest"
domain: tooling-api
topic: package2versioncreaterequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.418Z
estimatedTokens: 1565
keywords: [Package2VersionCreateRequest, second-generation, managed, package, unlocked, version, Dev, Hub, org, API, 41.0, later, SOAP, Calls, REST]
---

# Package2VersionCreateRequest

> Represents a
            request to create a second-generation managed package or an unlocked package version in
            a Dev Hub org. Available in API version 41.0 and later.

# Package2VersionCreateRequest

Represents a request to create a second-generation managed package or an unlocked package version in a Dev Hub org. Available in API version 41.0 and later.

## Supported SOAP Calls

create(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

Query, GET, POST

## Fields

| Field | Details |
| --- | --- |
| AsyncValidation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIf true, a new package version is created before package validations complete.The default value is false.For more information on async validation, see Create and Update Versions of a Second-Generation Managed Package |
| Branch | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe branch to associate with this package version. Can be used to create a tree structure of inheritance. Upon successful creation of a Package2Version, this value is copied to the package version’s Branch field.The default value is null. |
| CalculateCodeCoverage | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIf true, code coverage is calculated during package version creation. If false, code coverage isn’t calculated.For second-generation managed packages, a minimum 75% code coverage is required for package version promotion. This field is available in API version 47.0 and later. |
| CalcTransitiveDependencies | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the calculation of the package version’s indirect dependencies is enabled. A package can have multiple levels of dependencies, where pkgC depends on pkgB, and pkgB depends on pkgA, for example. By default, you list all of a package’s dependencies, including indirect (transitive) dependencies. When CalcTransitiveDependencies is set to true, you specify a package’s direct dependencies only, and the indirect dependencies are calculated for you. See Create Dependencies Between Second-Generation Managed Packages in the Second-Generation Managed Packaging Developer Guide.CalcTransitiveDependencies also enables you to generate a hierarchical graph of a package version’s dependencies. To generate the dependencies graph, run the package version displaydependencies CLI command. See package version displaydependencies in the Salesforce CLI Command Reference.The default value is false. |
| DependencyGraphJson | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionIf CalcTransitiveDependencies is set to true, DependencyGraphJson is auto-populated with information about the package’s dependencies when you create a new package version.If CalcTransitiveDependencies is false, the default value is null. |
| InstallKey | TypeencryptedstringPropertiesCreate, NillableDescriptionInstallation key for installing a key-protected package. The default is null.Used only on insert. If you query for this value, null is always returned (for security reasons).The default value is null. |
| IsConversionRequest | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, this package version is being converted from a first-generation managed package to a second-generation managed package.The default value is false.This field is available in API version 64.0 and later. |
| IsDevUsePkgZipRequested | TypebooleanPropertiesCreate, Filter, Group, Sort, UpdateDescriptionIf true, a downloadable package zip file containing package metadata is generated when a new package version is created.The default value is false. |
| IsPasswordProtected | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether installation of this package version requires the user to provide an installation key (true) or not (false).The default value is null. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language for the package. The picklist values match the Fully Supported Languages listed in Salesforce Help.If no language is specified, the language defaults to the language of the Dev Hub user who created the package. This field is available in API version 57.0 and later. |
| Package2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA reference to an ID for the Package2 to create a version of.The default value is null. |
| Package2VersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionA reference to an ID for the Package2Version that this request creates (starts with 05i).The default value is null. |
| SkipValidation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIf true, validation is skipped during package version creation. Skipping validation reduces the time it takes to create a new package version, but package versions created without validation can’t be promoted to the released state. This field is available in API version 48.0 and later.The default value is false.You can't specify both skip validation and code coverage, because code coverage is calculated during validation. |
| SourceOrg | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the org whose shape (features, settings, limits, and licenses) information is used for creating scratch orgs used to validate metadata during creation of a second-generation managed package or unlocked package. This field is available in API version 50.0 and later. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the Package2Version creation request. Valid values include:QueuedInitializingVerifying Features and SettingsVerifying DependenciesVerifying MetadataFinalizing PackageVersionErrorSuccessThe preceding values are listed in the order they appear during a Package2Version create request. The default value is null. |
| Tag | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional tags for the package version.The default value is null. |
| VersionInfo | Typebase64PropertiesCreateDescriptionThe blob that stores details about the package version.The default value is null.NoteWhen you query Package2VersionCreateRequest, data from VersionInfo isn’t returned. |
