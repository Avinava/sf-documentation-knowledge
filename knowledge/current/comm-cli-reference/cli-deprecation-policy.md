---
title: "CLI Deprecation Policy"
domain: comm-cli-reference
topic: cli-deprecation-policy
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:23.000Z
estimatedTokens: 316
keywords: [CLI, Deprecation, Policy, Salesforce, deprecates, commands, flags, underlying, API, changes]
---

# CLI Deprecation Policy

> Salesforce deprecates CLI commands and flags when, for example, the underlying API
    changes.

# CLI Deprecation Policy

Salesforce deprecates CLI commands and flags when, for example, the underlying API changes.

The Salesforce CLI deprecation policy is:

-   Salesforce announces new and upcoming deprecations of commands and flags in the weekly Salesforce CLI release notes.
-   Salesforce can deprecate a command or flag at any time.
-   When you run the deprecated command, Salesforce provides a deprecation warning for a minimum of 4 months.
-   Salesforce removes the deprecated command or flag 4 months, or more, after the deprecation warning first appears.
-   If you use a command or flag that’s been deprecated but not yet removed, you get a warning message in stderr in the human-readable output. If you specify JSON output, the warning is presented as a property. The message includes the plugin version in which we plan to remove the command or flag. The command help also includes deprecation information when appropriate.
-   When possible, Salesforce provides a functional alternative to the deprecated command or flag.
-   For our policy on changes to a Salesforce CLI command’s JSON response, see [Support for JSON Responses](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_json_support.htm).
