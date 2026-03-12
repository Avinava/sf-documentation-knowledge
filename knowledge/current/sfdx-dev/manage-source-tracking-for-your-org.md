---
title: "Manage Source Tracking for Your org"
domain: sfdx-dev
topic: manage-source-tracking-for-your-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.671Z
estimatedTokens: 654
keywords: [Manage, Source, Tracking, org, works, target, Don’t, worry, deploy, retrieve, metadata, commands, check, conflicts, specify]
---

# Manage Source Tracking for Your org

> Source tracking works only if your target org allows it. Don’t worry, you can still
        deploy or retrieve metadata to and from an org without source tracking. But the commands
        don’t check for conflicts, and you must specify exactly what you want to deploy or retrieve
        using an appropriate flag, such as --source-dir or
            --metadata.

# Manage Source Tracking for Your org

Source tracking works only if your target org allows it. Don’t worry, you can still deploy or retrieve metadata to and from an org without source tracking. But the commands don’t check for conflicts, and you must specify exactly what you want to deploy or retrieve using an appropriate flag, such as \--source-dir or \--metadata.

## Org Editions that Support Source Tracking

-   Developer Edition orgs, production orgs, Partial Copy sandboxes, and Full sandboxes—Source tracking isn’t supported.
-   Developer and Developer Pro sandboxes—Source tracking is supported if their associated production org has been enabled for source tracking.
-   Scratch orgs—Source tracking is always supported.

## Manage Source Tracking in New Orgs

Scratch Orgs have source tracking enabled by default. For Developer and Developer Pro sandboxes, source tracking is also enabled by default as long as their associated production org has been enabled for source tracking.

You can opt out of source tracking when you create the scratch org or sandbox by specifying the \--no-track-source flag of the org create scratch|sandbox command. This flag affects only your local configuration, not the org itself. Salesforce CLI sets a local configuration option trackSource: false as part of your authorization information to the org. If you log out of the org and then log back in again, source tracking is enabled again by default.

Here’s how to create a scratch org with source tracking disabled.

```

```

Here’s a sandbox example.

```

```

## Manage Source Tracking in Existing Orgs

You can change whether an existing scratch org or sandbox allows source tracking with these two commands:

-   org enable tracking: Allow Salesforce CLI to track changes in your source files between your project and an org.
-   org disable tracking: Prevent Salesforce CLI from tracking changes in your source files between your project and an org.

This example shows how to enable source tracking in an org with alias mySandbox; the command returns an error if the org doesn't support tracking, such as a Full sandbox.

```

```

Let’s say you have a sandbox that you use for integration tests, and you want to deploy source to it but not wait for tracking operations. This example shows how to disable source tracking on an org with alias mySandbox:

```

```

#### See Also

-   [*VS Code Command*: SFDX: Create a Default Scratch Org](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/vscode-overview.html "VS Code Command: SFDX: Create a Default Scratch Org - HTML (New Window)")

## Code Examples

```
sf org create scratch --target-dev-hub=MyHub --definition-file config/project-scratch-def.json --no-track-source
```

```
sf org create sandbox --definition-file config/dev-sandbox-def.json --target-org prodOrg --no-track-source
```

```
sf org enable tracking --target-org mySandbox
```

```
sf org disable tracking --target-org mySandbox
```
