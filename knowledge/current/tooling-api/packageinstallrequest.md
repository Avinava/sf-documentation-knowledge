---
title: "PackageInstallRequest"
domain: tooling-api
topic: packageinstallrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.434Z
estimatedTokens: 1299
keywords: [PackageInstallRequest, install, package, first-, second-generation, target, subscriber, org, API, version, 41.0, later, SOAP, Calls, REST]
---

# PackageInstallRequest

> Represents a request to install a package (first-
            or second-generation) in a target subscriber org. Available in API version 41.0 and
        later.

# PackageInstallRequest

Represents a request to install a package (first- or second-generation) in a target subscriber org. Available in API version 41.0 and later.

## Supported SOAP Calls

create(), describeSObjects(), query(), retrieve()

## Supported REST HTTP Methods

GET, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ApexCompileType | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionFor unlocked package installs and upgrades, specifies whether to require successful compilation of all Apex in the org, or only Apex within the package.Valid values are:allpackageFor package installs into production orgs, or any org that has Apex Compile on Deploy enabled, the platform compiles all Apex in the org after the package install or upgrade operation completes. This approach assures that package installs and upgrades don’t impact the performance of an org, and is done even if --apexcompile package is specified.Available in API version 46.0 and later. |
| EnableRss | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionSpecifies whether the package can send and receive Remote Site Settings (RSS) and Content Security Policy (CSP) data from third-party websites (true) or not (false).The default value is false. Available in API version 43.0 and later. |
| Errors | TypeSubscriberPackageInstallErrorsPropertiesNillableDescriptionErrors that occurred during installation, if any. |
| NameConflictResolution | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionControls name conflicts between package members in an unmanaged package. Valid values are:Block: Throw an exception on name conflicts.RenameMetadata: Rename only those components that can be renamed, otherwise throw an exception. |
| PackageInstallSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionFor internal use only. |
| Password | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe installation key for the package. Required for packages that are protected by an installation key. |
| ProfileMappings | TypeSubscriberPackageProfileMappingsPropertiesCreate, NillableDescriptionMappings between profile settings in the package and profiles in the subscriber org.When installing a package, the admin for the subscriber org chooses which profiles in the org to map the profile settings in the package to. |
| SecurityType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionUsers for which this package is installed.Valid values are:Custom: Installed for specified custom profiles.Full: Installed for all users.None: Installed for administrators only. |
| SkipHandlers | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionSpecifies the handlers that are skipped when the package is installed.There’s only one valid value:FeatureEnforcement: For package installs in scratch orgs only. Specifying FeatureEnforcement in this field decreases the length of time a package installation takes to complete.The feature enforcement handler adds object and feature validations in the subscriber org that prevent an admin from turning off a feature that can cause your app to malfunction. This enforcement isn’t critical in scratch orgs.Available in API version 61.0 and later. |
| Status | TypepicklistPropertiesGroup, Nillable, Restricted picklist, SortDescriptionThe status of the install request. Valid values are:ErrorInProgressSuccessUnknown |
| SubscriberPackageVersionKey | TypestringPropertiesCreate, Filter, Group, SortDescriptionForeign key to the subscriber package version. |
| UpgradeType | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionFor unlocked package upgrades, specifies whether to mark all removed components as deprecated (deprecate-only, delete removed components that can be safely deleted and deprecate the others (mixed-mode), or delete all removed components (delete-only). The default is mixed-mode. Valid values are:delete-onlydeprecate-onlymixed-mode |

## SubscriberPackageInstallErrors

Represents the list of errors that occurred during package installation.

| Field | Details |
| --- | --- |
| errors | TypeSubscriberPackageInstallErrorDescriptionThe errors that occurred during package install. |

## SubscriberPackageInstallError

Represents a single error that occurred during package installation.

| Field | Details |
| --- | --- |
| message | TypestringDescriptionRequired. Describes the error that occurred. |

## SubscriberPackageProfileMappings

Represents the list of profile mappings for which this package is installed.

| Field | Details |
| --- | --- |
| profileMappings | TypeSubscriberPackageProfileMappingDescriptionName of the profile mapping. |

## SubscriberPackageProfileMapping

Represents a mapping between a profile in the package that’s being installed and the profile in the target subscriber org.

| Field | Details |
| --- | --- |
| source | TypestringDescriptionRequired. The name of the profile setting in the package that’s being installed. |
| target | TypestringDescriptionRequired. The name of the profile in the target subscriber org. |
