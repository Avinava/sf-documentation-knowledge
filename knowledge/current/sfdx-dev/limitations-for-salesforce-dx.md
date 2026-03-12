---
title: "Limitations for Salesforce DX"
domain: sfdx-dev
topic: limitations-for-salesforce-dx
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.165Z
estimatedTokens: 1471
namespace: Description
keywords: [Limitations, Salesforce, known, issues, run, CLI, Dev, Hub, Scratch, Orgs, Source, Management, Deployment, Managed, First-Generation]
---

# Limitations for Salesforce DX

> Here are some known issues you could run into while using Salesforce DX.

**Namespace:** `Description`

# Limitations for Salesforce DX

Here are some known issues you could run into while using Salesforce DX.

For the latest known issues, visit the Trailblazer Community’s [Known Issues](https://success.salesforce.com/issues_index?tag=Salesforce%20DX) page and the [issues tab in the Salesforce CLI’s main GitHub repo](https://github.com/forcedotcom/cli/issues).

## Salesforce CLI

Can’t Import Record Types Using Salesforce CLI

**Description:** We don't support RecordType when running the data tree import command.

**Workaround:** None.

Limited Support for Shell Environments on Windows

**Description:** Salesforce CLI is tested on the Command Prompt (cmd.exe) and Powershell. There are known issues in the Cygwin and Min-GW environments, and with Windows Subsystem for Linux (WSL). Until these environments are tested and supported in a future release, we recommend that you use a supported shell.

**Workaround:** None.

## Dev Hub and Scratch Orgs

Salesforce CLI Sometimes Doesn’t Recognize Scratch Orgs with Communities

**Description:** Sometimes, but not in all cases, the Salesforce CLI doesn’t acknowledge the creation of scratch orgs with the Communities feature. You can’t open the scratch org using the CLI, even though the scratch org is listed in Dev Hub.

**Workaround:** You can try this workaround, although it doesn’t fix the issue in all cases. Delete the scratch org in Dev Hub, then create a new scratch org using the CLI. Deleting and recreating scratch orgs counts against your daily scratch org limits.

Error Occurs If You Pull a Community and Deploy It

**Description:** The error occurs because the scratch org doesn’t have the required guest license.

**Workaround:** In your scratch org definition file, if you specify the Communities feature, also specify the Sites feature.

## Source Management

ERROR: Entity of type 'RecordType' named 'Account.PersonAccount' cannot be found

**Description:** Although you can turn on Person Accounts in your scratch org by adding the feature to your scratch org definition, running project deploy start or project deploy retrieve results in an error.

**Workaround:** None.

project convert source Doesn’t Add Post-Install Scripts to package.xml

**Description:** If you run project convert source, package.xml doesn’t include the post install script.

**Workaround:** To fix this issue, choose one of these methods:

-   Manually add the <postInstallClass> element to the package.xml in the metadata directory that project convert source produces.
-   Manually add the element to the package in the release org or org to which you are deploying the package.

Must Manually Enable Feed Tracking in an Object's Metadata File

**Description:** If you enable feed tracking on a standard or custom object, then run project retrieve start, feed tracking doesn't get enabled.

**Workaround:** In your Salesforce DX project, manually enable feed tracking on the standard or custom object in its metadata file (\-meta.xml) by adding <enableFeeds>true</enableFeeds>.

Unable to Push Lookup Filters to a Scratch Org

**Description:** When you execute the project deploy start command to deploy the source of a relationship field that has a lookup filter, you sometimes get this error:

duplicate value found: <unknown> duplicates value on record with id: <unknown> at line num, col num.

**Workaround:** None.

## Deployment

Compile on Deploy Can Increase Deployment Times in Scratch Orgs

**Description:** If your deployment times for Apex code are slow, your scratch org might have the enableCompileOnDeploy setting set to true.

**Workaround:**To turn it off, set it to false (the default) or delete the setting from the scratch org definition.

```

```

## Managed First-Generation Packages

When You Install a Package in a Scratch Org, No Tests Are Performed

**Description:** If you include tests as part of your continuous integration process, those tests don’t run when you install a package in a scratch org.

**Workaround:** You can manually execute tests after the package is installed.

New Terminology in CLI for Managed Package Password

**Description:** When you use the CLI to add an installation key to a package version or to install a key-protected package version, the flag name of the key is \--installationkey. When you view a managed package version in the Salesforce user interface, the same package attribute is called “Password”. In the API, the corresponding field name, “password”, is unchanged.

**Workaround:** None.

## Managed Second-Generation Packages

Protected Custom Metadata and Custom Settings are Visible to Developers in a Scratch Org If Installed Packages Share a Namespace

**Description:** Use caution when you store secrets in your second-generation packages using protected custom metadata or protected custom settings. You can create multiple second-generation packages with the same namespace. However, when you install these packages in a scratch org, these secrets are visible to any of your developers that are working in a scratch org with a shared namespace. In the future, we might add a “package-protected” keyword to prevent access to package secrets in these situations.

**Workaround:** None.

## Unlocked Packages

Protected Custom Metadata and Custom Settings are Visible to Developers in a Scratch Org If Installed Packages Share a Namespace

**Description:** Use caution when you store secrets in your unlocked packages using protected custom metadata or protected custom settings. You can create multiple unlocked packages with the same namespace. However, when you install these packages in a scratch org, these secrets are visible to any of your developers that are working in a scratch org with a shared namespace. In the future, we might add a “package-protected” keyword to prevent access to package secrets in these situations.

**Workaround:** None.

## Code Examples

```
{
  "orgName": "My Company",
  "edition": "Developer",
  "features": [],
  "settings": {
    "lightningExperienceSettings": {
          "enableS1DesktopEnabled": true
      },
      "apexSettings": {
          "enableCompileOnDeploy": false
      }
  }
}
```
