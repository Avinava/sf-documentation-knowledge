---
title: "SubscriberPackageVersion"
domain: tooling-api
topic: subscriberpackageversion
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-11T15:46:38.819Z
keywords: [SubscriberPackageVersion, Supported, SOAP, Calls, REST, HTTP, Methods, Fields, SubscriberPackageCspTrustedSites, SubscriberPackageCspTrustedSite, SubscriberPackageDependencies, SubscriberPackageProfiles, SubscriberPackageDestinationProfile, SubscriberPackageSourceProfile, SubscriberPackageRemoteSiteSettings, SubscriberPackageRemoteSiteSetting, Usage]
---

# SubscriberPackageVersion

# SubscriberPackageVersion

Represents a package version (first- or second-generation) across all Salesforce instances. Available in API version 41.0 and later.

## Supported SOAP Calls

describeSObjects(), query(), retrieve()

## Supported REST HTTP Methods

GET, Query

## Fields

| Field | Details |
| --- | --- |
| AppExchangeDescription | TypestringPropertiesNillable, SortDescriptionThe AppExchange description for this package.If the AppExchange listing for the package doesn’t contain a value for this field, the field’s value is null. |
| AppExchangeLogoUrl | TypestringPropertiesNillable, SortDescriptionThe URL that AppExchange uses to display the logo for this package.If the AppExchange listing for the package doesn’t contain a value for this field, the field’s value is null. |
| AppExchangePackageName | TypestringPropertiesGroup, Nillable, SortDescriptionThe AppExchange name for this package.If the AppExchange listing for the package doesn’t contain a value for this field, the field’s value is null. |
| AppExchangePublisherName | TypestringPropertiesGroup, Nillable, SortDescriptionThe AppExchange publisher name for this package.If the AppExchange listing for the package doesn’t contain a value for this field, the field’s value is null. |
| BuildNumber | TypeintPropertiesGroup, Nillable, SortDescriptionPart of the version number of a package version. The complete version number format is major.minor.patch.build—for example, in 1.2.0.5 the build number is 5. |
| CspTrustedSites | TypeSubscriberPackageCspTrustedSitesPropertiesNillableDescriptionList of new Trusted URLs (CspTrustedSite) that the user must authorize before installing the package version. Package upgrades don't include previously installed Trusted URLs. |
| Dependencies | TypeSubscriberPackageDependenciesPropertiesNillableDescriptionOther subscriber package versions that this subscriber package version depends on.Available in API version 44.0 and later. |
| Description | TypestringPropertiesNillable, SortDescriptionDescription of the package. |
| InstallationKey | TypeRAWPropertiesNot applicableDescriptionInstallation key for a key-protected package.This field is hidden. It’s not queryable, but you can include it in the WHERE clause of SOQL queries. In some queries, it’s required.To query unlocked packages that have installation keys, you must include the correct InstallationKey value in your WHERE clause. However, if the unlocked package version is already installed in your org you can query it without specifying an InstallationKey value.For managed packages, an InstallationKey value in the WHERE clause is optional. |
| InstallValidationStatus | TypepicklistPropertiesGroup, Nillable, Restricted picklist, SortDescriptionStatus of the validation tests that are run during the package version install. Valid values are:NoErrorsDetectedBetaInstallIntoProductionOrgCannotInstallEarlierVersionCannotUpgradeBetaCannotUpgradeUnmanagedDeprecatedInstallPackageExtensionsOnLocalPackagesPackageNotInstalledPackageHasInDevExtensionsInstallIntoDevOrgNoAccessPackagingDisabledPackagingNoAccessPackageUnavailableUninstallInProgressUnknownErrorNamespaceCollision |
| IsBeta | TypebooleanPropertiesDefaulted on create, Group, SortDescriptionIndicates whether the package version is released (false). |
| IsDeprecated | TypebooleanPropertiesDefaulted on create, Group, SortDescriptionSpecifies whether this package version has been marked as deprecated (true) or not (false). |
| IsManaged | TypebooleanPropertiesDefaulted on create, Group, SortDescriptionSpecifies whether this package is managed (true) or not (false). |
| IsPasswordProtected | TypebooleanPropertiesDefaulted on create, Group, SortDescriptionSpecifies whether installation of this package version requires the user to provide an installation key (true) or not (false). |
| IsSecurityReviewed | TypebooleanPropertiesDefaulted on create, Group, SortDescriptionSpecifies whether the package has passed the security review required for publishing in AppExchange. |
| MajorVersion | TypeintPropertiesGroup, Nillable, SortDescriptionPart of the version number of a package version. The complete version number format is major.minor.patch.build—for example, in 1.2.0.5 the major version is 1. |
| MinorVersion | TypeintPropertiesGroup, Nillable, SortDescriptionPart of the version number of a package version. The complete version number format is major.minor.patch.build—for example, in 1.2.0.5 the minor version is 2. |
| Name | TypestringPropertiesGroup, idLookup, SortDescriptionName of the package. |
| Package2ContainerOptions | TypepicklistPropertiesGroup, Nillable, Restricted picklist, SortDescriptionContainer options for the second-generation package. These options determine the upgrade and editability rules.Valid values are:ManagedUnlocked |
| PatchVersion | TypeintPropertiesGroup, Nillable, SortDescriptionPart of the version number of a package version. The complete version number format is major.minor.patch.build—for example, in 1.2.0.5 the patch version is 0. |
| PostInstallUrl | TypestringPropertiesNillable, SortDescriptionThe fully qualified URL of the post-installation instructions. Instructions are shown as a link after installation and are available from the package detail view. |
| Profiles | TypeSubscriberPackageProfilesPropertiesNillableDescriptionList of profiles for which the package was installed. |
| PublisherName | TypestringPropertiesGroup, Nillable, SortDescriptionThe name of the publisher of this package. |
| ReleaseNotesUrl | TypestringPropertiesNillable, SortDescriptionThe fully qualified URL of the package release notes. Release notes are shown as a link during the installation process and are available from the package detail view after installation. |
| ReleaseState | TypepicklistPropertiesGroup, Nillable, Restricted picklist, SortDescriptionIf the package version is a beta version, the value is Beta. Otherwise, the value is Released. |
| RemoteSiteSettings | TypeSubscriberPackageRemoteSiteSettingsPropertiesNillableDescriptionList of new Remote Site Settings that the user must authorize before installing the package. Package upgrades don’t include previously installed Remote Site Settings. |
| SubscriberPackageId | TypeIDPropertiesGroup, Nillable, SortDescriptionID of the parent SubscriberPackage. The ID starts with the string 033.This value is case-sensitive and must be unique. |
| IsOrgDependent | TypebooleanPropertiesDefaulted on create, Group, SortDescriptionIndicates whether the package depends on unpackaged metadata in the installation org (true) or not (false). This field applies to unlocked packages only. The default value is false. Available in API version 49.0 and later. |

## SubscriberPackageCspTrustedSites

Represents the list of new Trusted URLs that the user must authorize before installing the package version. Available in API version 41.0 and later. In API version 58.

| Field | Details |
| --- | --- |
| settings | TypeSubscriberPackageCspTrustedSiteDescriptionList of Trusted URLs (CspTrustedSite) that have been added to the package. These sites must be authorized before installation.If the AppExchange listing for the package doesn’t contain a value for this field, the field’s value is null. |

## SubscriberPackageCspTrustedSite

Represents a new Trusted URLs ([CspTrustedSite](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_csptrustedsite.htm "Represents a trusted URL. For each CspTrustedSite, you can specify Content Security Policy (CSP) directives and permissions policy directives. Each CSP directive allows Lightning components, third-party APIs, and WebSocket connections to access a resource type from the trusted URL. If the Permissions-Policy HTTP header is enabled, each permissions policy directive grants the trusted URL access to a browser feature. In API version 58.0 and earlier, CspTrustedSite included only CSP directives and was referred to as CSP Trusted Sites in Salesforce Setup. Available in API version 39.0 and later.")) that the user must authorize before installing the package version. Available in API version 41.0 and later.

| Field | Details |
| --- | --- |
| endpointUrl | TypestringDescriptionThe URL associated with the CspTrustedSite. |

## SubscriberPackageDependencies

Represents a list of subscriber package version IDs that a subscriber package version depends on. Available in API version 44.0 and later.

| Field | Details |
| --- | --- |
| ids | TypeSubscriberPackageDependencyDescriptionList of SubscriberPackageDependency IDs: 04t IDs for the package versions that a subscriber package version depends on. |

## SubscriberPackageProfiles

Represents a mapping between the profiles contained in the package and the profiles that are applied in the target subscriber org. Available in API version 41.0 and later.

| Field | Details |
| --- | --- |
| destinationProfiles | TypeSubscriberPackageDestinationProfileDescriptionThe profiles that the administrator installing the package in a target subscriber org actually applies. |
| sourceProfiles | TypeSubscriberPackageSourceProfileDescriptionThe profiles that are contained in the package that is being installed. |

## SubscriberPackageDestinationProfile

Represents the profile that an administrator applies when installing the package in a target subscriber org. Available in API version 41.0 and later.

| Field | Details |
| --- | --- |
| description | TypestringDescriptionThe description of the profile. |
| displayName | TypestringDescriptionThe display name of this profile. |
| name | TypestringDescriptionThe name of the profile. |
| noAccess | TypebooleanDescriptionReturns true if the profile is internal. |
| profileId | TypestringDescriptionThe ID of the profile. |
| type | TypestringDescriptionThe API name of the profile. |

## SubscriberPackageSourceProfile

Represents a profile contained in the package to be installed. Available in API version 41.0 and later.

| Field | Details |
| --- | --- |
| label | TypestringDescriptionThe profile label. |
| value | TypestringDescriptionThe name of the profile. |

## SubscriberPackageRemoteSiteSettings

Represents a list of Remote Site Settings (RSS) that have been added to the package since the last version. Available in API version 41.0 and later.

| Field | Details |
| --- | --- |
| settings | TypeSubscriberPackageRemoteSiteSettingSubscriberPackageRemoteSiteSettingDescriptionList of RSS added to the package since the last version. |

## SubscriberPackageRemoteSiteSetting

Defines a URL to an external service. The administrator of the subscriber org must authorize access to these services. Available in API version 41.0 and later.

| Field | Details |
| --- | --- |
| secure | TypebooleanDescriptionReturns true if the URL uses the https protocol. Applies only if protocol security is enabled. |
| url | TypestringDescriptionThe URL of the remote service. |

## Usage

Represents a version of an installable package. To query this object, include an ID (begins with 04t) in your SOQL WHERE clause.

For subscriber package versions with no installation keys, queries must include an ID value, but an InstallationKey value is not required.

```

```

For unlocked package versions that have installation keys, queries must include both an ID value and an InstallationKey value.

```

```

For managed first- and second-generation package versions that have installation keys and for unlocked package versions that are installed in your org, queries must include an ID value, but an InstallationKey value is optional.

```

```

```

```