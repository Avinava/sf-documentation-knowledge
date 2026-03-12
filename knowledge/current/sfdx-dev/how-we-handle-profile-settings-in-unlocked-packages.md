---
title: "How We Handle Profile Settings in Unlocked Packages"
domain: sfdx-dev
topic: how-we-handle-profile-settings-in-unlocked-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.837Z
estimatedTokens: 954
keywords: [How, Handle, Profile, Settings, Unlocked, Packages, package, version, creation, second-generation, managed, build, system, inspects, contents]
---

# How We Handle Profile Settings in Unlocked Packages

> During package version creation for unlocked or second-generation managed
  packages, the build system inspects the contents of all profiles in the DX project directory, not
  just the directory specified in the path, and preserves only the profile settings that are
  directly related to the metadata in the package. The profile itself, and any profile settings
  unrelated to the package’s metadata are discarded from the package.

# How We Handle Profile Settings in Unlocked Packages

During package version creation for unlocked or second-generation managed packages, the build system inspects the contents of all profiles in the DX project directory, not just the directory specified in the path, and preserves only the profile settings that are directly related to the metadata in the package. The profile itself, and any profile settings unrelated to the package’s metadata are discarded from the package.

During package installation, the preserved profile settings are applied only to existing profiles in the subscriber org. The profile itself isn’t installed in the subscriber org.

To control which profile settings are included, use the scopeProfiles parameter in the [project configuration file](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_config_file.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Packages that contain only profiles and no additional metadata aren’t allowed and fail during package version creation.

| When you select… | The packaged profile settings are applied to... | This installation option is available via… |
| --- | --- | --- |
| Install for Admins Only | The System Administrator profile in the subscriber org.CRUD access to custom objects is granted automatically to the System Administration profile. | The package installer pageSalesforce CLI sf package install commandThe default behavior for CLI-based package installs is to install for admins only. |
| Install for All Users | The System Administrator profile and all cloned profiles in the subscriber org.CRUD access to custom objects is granted automatically to the System Administration profile, and all cloned profiles.Standard profiles can’t be modified. | The package installer pageSalesforce CLI sf package install commandTo install for all users via the CLI, include the security type parameter.sf package install --security-type AllUsers |
| Install for Specific Profiles | Specific profiles in the subscriber org. This selection lets the person installing your package determine how to map the profile settings you packaged to specific profiles in their org. | The package installer pageNot available for CLI-based package installations. |

To test the behavior of your packaged profile, install your package in a scratch org.

1.  From Setup, enter Profile in the Quick Find box, and then locate and inspect the profiles you selected during package installation.
2.  Check whether your profile settings have been applied to that profile.

    Repeat this step for any other profile you expect to contain your profile settings. Don’t look for the profile name you created; we apply profile settings to existing profiles in the subscriber org.


Whenever possible, use package permission sets instead of profile settings. Subscribers who install your package can easily assign your permission set to their users.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

During a push upgrade, some profile settings related to Apex classes and field-level security aren’t automatically assigned to the System Admin profile. To ensure that user access is set up correctly after a push upgrade, communicate with your customer. Make sure they review and update their profile settings after a push upgrade.

## Retain License Settings in Unlocked Packages

By default, license settings in profiles are removed during package creation. To retain these settings, specify the includeProfileUserLicenses parameter in your sfdx-project.json file. In this scenario, the license settings are retained and applied to the profiles in the subscriber org that are selected during package installation.

```

```

## Code Examples

```
"packageDirectories": [
    {
        "package": "PackageA",
        "path": "common",
       "versionName": "ver 0.1",
       "versionNumber": "0.1.0.NEXT",
       "default": false,
       includeProfileUserLicenses: true
    }
]
```
