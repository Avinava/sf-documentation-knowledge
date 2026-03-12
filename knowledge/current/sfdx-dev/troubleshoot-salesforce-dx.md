---
title: "Troubleshoot Salesforce DX"
domain: sfdx-dev
topic: troubleshoot-salesforce-dx
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.685Z
estimatedTokens: 455
keywords: [Troubleshoot, Salesforce, tips, help, issues]
---

# Troubleshoot Salesforce DX

> Here are some tips to help you troubleshoot issues.

# Troubleshoot Salesforce DX

Here are some tips to help you troubleshoot issues.

-   **[Resolve Common Authorization Errors](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_troubleshoot_auth_errors.htm#sfdx_dev_troubleshoot_auth_errors)**
    Errors sometimes occur when you run either org login web or org login jwt to log into and authorize an org. Here are some of the more common errors, what they mean, and what you can do to try to fix them.
-   **[Error: No default dev hub found](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_troubleshoot_devhub_error.htm)**
    You see this error when you try to create a scratch org due to an authorization issue.
-   **[Unable to Work After Failed Org Authorization](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_troubleshoot_cancel_auth.htm)**
    Sometimes you try to authorize a Dev Hub org or a scratch org using the Salesforce CLI or an IDE, but you don’t successfully log in to the org. The port remains open for the stray authorization process, and you can’t use the CLI or IDE. To proceed, end the process manually.
-   **[Error: The consumer key is already taken](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_troubleshoot_consumer_key_taken.htm)**
    Let’s say you run project retrieve start on an org in which you’ve created a connected app. When you try to deploy the retrieved source to a different org, the deploy fails with the error The consumer key is already taken. What happened?
-   **[CLI Version Information](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_troubleshoot_cli_version.htm)**
    Use these commands to view version information about Salesforce CLI.

#### See Also

-   [Salesforce Trailblazer Community](https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F93A000000HTp1 "Salesforce Trailblazer Community - HTML (New Window)")

## Related Topics

- Resolve Common Authorization Errors (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_troubleshoot_auth_errors.htm)
- Error: No default dev hub found (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_troubleshoot_devhub_error.htm)
- Unable to Work After Failed Org Authorization (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_troubleshoot_cancel_auth.htm)
- Error: The consumer key is already taken (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_troubleshoot_consumer_key_taken.htm)
- CLI Version Information (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_troubleshoot_cli_version.htm)
