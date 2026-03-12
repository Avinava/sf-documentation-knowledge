---
title: "Select the Salesforce Release for a Scratch Org"
domain: sfdx-dev
topic: select-the-salesforce-release-for-a-scratch-org
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.580Z
estimatedTokens: 1400
keywords: [Select, Salesforce, Release, Scratch, Org, transition, specify, preview, previous, creating, Specific, How, Transitions, Affect, Version]
---

# Select the Salesforce Release for a Scratch Org

> During the Salesforce release transition, you can specify the release (preview or
  previous) when creating a scratch org.

# Select the Salesforce Release for a Scratch Org

During the Salesforce release transition, you can specify the release (preview or previous) when creating a scratch org.

## What Is Salesforce Preview?

During every major Salesforce release, you can get early access to the upcoming release in your scratch orgs and sandboxes to test new customizations and features before your production org is upgraded. This window is called the Salesforce Preview. Scratch orgs created on the upcoming release are called preview scratch orgs.

Normally, you create scratch orgs that are the same version as the Dev Hub. However, during the major Salesforce release transition that happens three times a year, you can select the Salesforce release version Preview or Previous, based on the version of your Dev Hub.

To try out new features in an upcoming release, you no longer have to create a trial Dev Hub on the upcoming version to create preview scratch orgs. You can use your existing Dev Hub that includes your existing scratch org active and daily limits.

For example, you can select a version over the next three releases during these release transition dates. Preview start date is when sandbox instances are upgraded. Preview end date is when all instances are on the GA release.

| Release Version | Preview Start Date | Preview End Date |
| --- | --- | --- |
| Spring ’26 | January 11, 2026 | February 21, 2026 |
| Summer ’26 | May 10, 2026 | June 13, 2026 |
| Winter ’27 | August 30, 2026 | October 10, 2026 |

Because previous and preview are relative terms, your Dev Hub org version during the release transition determines their relative significance. Here’s what happens when you try to create a scratch org with one of the release values.

| Dev Hub Version | Preview | Previous |
| --- | --- | --- |
| Dev Hub has upgraded to the latest version | Error (Dev Hub is already on the latest version) | Prior Dev Hub version |
| Dev Hub is still on the GA version | Version following the Dev Hub version (newly released Salesforce version) | Error (Dev Hub is on the GA version; previous version unavailable) |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

If you don’t specify a release value, the scratch org version is the same version as the Dev Hub org.

## Create a Scratch Org for a Specific Release

You can specify the release version in the scratch org definition file or directly on the command line. Any value you set on the command line overrides what you have defined in your scratch definition file.

-   Find out which instance your Dev Hub org is on: [https://status.salesforce.com](https://status.salesforce.com).
-   Add the release option (lowercase) to your scratch org definition file.

    ```

    ```

    Alternatively, you can specify the release value directly on the command line with the \--release flag. Any value you specify on the command line overrides the value in the scratch org definition.

-   Create the scratch org by executing the org create scratch command in a terminal (macOS and Linux) or command prompt (Windows).

    In this example, we’re creating a scratch org on the preview release.

    ```

    ```


Be sure to set the apiVersion to match the scratch org version.

To set it globally for all DX projects:

```

```

To set it on the command line:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Regardless of the release version of your Dev Hub, you can use scratch org features that are available in the release (preview or previous) of the scratch org you create.

## How Release Transitions Can Affect the Scratch Org Version

During a Salesforce major release transition, the sandbox (CS) instances on which scratch orgs are created transition to the preview release before your Dev Hub org does. During this transition period, you can intend to create a scratch org on the current generally available release but unexpectedly discover that it was created on the preview release. Sandbox instances begin to transition to the preview release several days before the preview start date. If the instance on which the scratch org is created transitions to the preview release after the creation request is initiated, the scratch org is created on the preview version instead of the current version.

During this transition period, there’s no way to know when the sandbox instance will be upgraded. If the scratch org must be on the current release, you can try these options:

-   If it’s a day or two before the preview start date, recreate the scratch org. If the scratch org is again created on the preview release, contact Salesforce Customer Support and open a case.
-   Wait to create the scratch org until after the preview start date, and indicate previous as the release value in the scratch org definition file.

## What If I Want to Create a Pre-Release Scratch Org?

Pre-release is a very early build of the latest version of Salesforce that’s available before Salesforce Preview. It's not built to handle scale and doesn't come with any Salesforce Support service-level agreements (SLAs). For this reason, the only way to create a pre-release scratch org is to sign up for a [pre-release trial Dev Hub org](https://sfdc.co/RR-Pre-Release) (subject to availability).

#### See Also

-   [*VS Code Command*: SFDX: Create a Default Scratch Org](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/vscode-overview.html "VS Code Command: SFDX: Create a Default Scratch Org - HTML (New Window)")

## Code Examples

```
{
   "orgName": "Dreamhouse",
   "edition": "Developer",
   "release": "preview",
   "settings": {      
      "mobileSettings": {
          "enableS1EncryptedStoragePref2": true
      }
   }
}
```

```
sf org create scratch --definition-file config/project-scratch-def.json --alias PreviewOrg --target-dev-hub DevHub --release preview
```

```apex
sf config set org-api-version 59.0 --global
```

```
SF_ORG_API_VERSION=59.0 sf org create scratch  --definition-file config/project-scratch-def.json --alias PreviewOrg --target-dev-hub DevHub --release preview
```
