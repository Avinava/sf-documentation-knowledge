---
title: "Create and Deploy Your Package"
domain: voice-pt-developer-guide
topic: create-and-deploy-your-package
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.018Z
estimatedTokens: 794
keywords: [Deploy, Package, commands, install, Version, Release, Scratch, Org, Open]
---

# Create and Deploy Your Package

> Use these commands to create, update, and install the package.

# Create and Deploy Your Package

Use these commands to create, update, and install the package.

## Create the Package

```

```

## Create a Package Version

```

```

The same command is used to create newer versions of the package. This command generates an installation link that can be used in customer orgs.

```

```

## Release a Package Version

Each new package version is marked as beta when created. As you develop your package, you may create several package versions before you create a version that is ready to be released and distributed. Only released package versions can be listed on AppExchange and installed in customer orgs.

Before you promote the package version, ensure that the **Promote a package version to released** user permission is enabled in the Dev Hub org associated with the package. Consider creating a permission set with this user permission, and then assigning the permission set to the appropriate user profiles.

When you’re ready to release, use sf package version promote --package "Expense Manager@1.3.0-7"

If the command is successful, a confirmation message appears. Successfully promoted the package version, ID: 04tB0000000719qIAA to released.

After the update succeeds, view the package details. sf package version report --package "Expense Manager@1.3.0.7"

Confirm that the value of the Released property is true.

```

```

You can promote and release only one time for each package version number, and you can’t undo this change.

To learn more, see [Workflow for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_workflow.htm).

## Create a Scratch Org

You can create a scratch org to test your package. This process may take a few minutes. sf org create scratch --definition-file config/project-scratch-def.json --target-org <Dev Hub Username>

## Open the Scratch Org

To find a list of scratch orgs, including the one you created, run this command.

sf org ist --verbose

To open the scratch org, run this command.

sf org open -u <scratch org username>

## Install the Package

Before installing, make sure that the org has the **Service Cloud Voice Partner Telephony** license. Then, run this command:

sf package install --package "<Package Name>@<Package Version>" --target-org <Target Org Username>

**Target Org** is the org where you want to install the package.

Or, use the installation URL that’s created when you run the Salesforce CLI command for creating or promoting a package version.

Look for an email indicating whether the package was installed. If the installation failed, review the email for details and try again. To learn more about installation methods, see [Use the CLI to Install a Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_install_pkg_cli.htm).

-   [← Previous](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sfdx_project.htm "Create a Salesforce DX Project")
-   [Next →](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_assign_permissions.htm "Assign User Permissions")

## Code Examples

```
sf package create --name "<Package Name>" --path force-app --package-type Managed --error-notification-username <Dev Hub Username>
```

```
sf package version create --package "<Package Name>" --code-coverage --installation-key-bypass --wait 20
```

```
Successfully created the package version [08cB0000000****IA0]. Subscriber Package Version Id: 04tB0000000d****IAQ
Package Installation URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB00000****DIAQ (https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB0000000d2wDIAQ)
```

```
=== Package Version
NAME VALUE
────────────────────────────── ───────────────────
Name ver 1.0
Alias Expense Manager-1.0.0.5
Package Version Id 05iB0000000CaahIAC
Package Id 0HoB0000000CabmKAC
Subscriber Package Version Id 04tB0000000NPbBIAW
Version 1.0.0.5
Description update version
Branch
Tag git commit id 08dcfsdf
Released true
Created Date 2018-05-08 09:48
Installation URL
https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB0000000NPbBIAW
```

## Related Topics

- ← Previous (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sfdx_project.htm)
- Next → (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_assign_permissions.htm)
