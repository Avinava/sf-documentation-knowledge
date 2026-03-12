---
title: "Share Release Notes and Post-Install Instructions for Second-Generation Managed
    Packages"
domain: pkg2-dev
topic: share-release-notes-and-post-install-instructions-for-second-generation-managed-
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:35:27.136Z
estimatedTokens: 276
keywords: [Share, Release, Notes, Post-Install, Instructions, Second-Generation, Managed, Packages, subscribers, what’s, new, changed, released, package]
---

# Share Release Notes and Post-Install Instructions for Second-Generation Managed
    Packages

> Share details with your subscribers about what’s new and changed in a released
    second-generation managed package.

# Share Release Notes and Post-Install Instructions for Second-Generation Managed Packages

Share details with your subscribers about what’s new and changed in a released second-generation managed package.

You can specify a release notes URL to display on the package detail page in the subscriber’s org. And you can share instructions about using your package by specifying a post install URL. The release notes and post install URLs display on the Installed Packages page in Setup, after a successful package installation. For subscribers who install packages using an installation URL, the package installer page displays a link to release notes. And subscribers are redirected to your post install URL following a successful package installation or upgrade.

Specify the postInstallUrl and releaseNotesUrl attributes in the packageDirectories section for the package.

```

```

You can also use the \--post-install-url and the \--release-notes-url Salesforce CLI parameters with the sf package version create command. The CLI parameters override the URLs specified in the sfdx-project.json file.

## Code Examples

```
"packageDirectories": [
      {
         "path": "expenser-schema",
         "default": true,
         "package": "Expense Schema",
         "versionName": ""ver 0.3.2"",
         "versionNumber": "0.3.2.NEXT",
         "postInstallScript": "PostInstallScript",
         "uninstallScript": "UninstallScript",
         "postInstallUrl": "https://expenser.com/post-install-instructions.html",
         "releaseNotesUrl": "https://expenser.com/winter-2020-release-notes.html"
        },
        ],
       {
         "namespace": "db_exp_manager",
         "sfdcLoginUrl": "https://login.salesforce.com",
         "sourceApiVersion": "47.0",
         "packageAliases": {
             "Expenser Schema": "0HoB00000004CzHKAU",
             "Expenser Schema@0.1.0-1": "04tB0000000719qIAA"
         }
```
