---
title: "Log Out of an Org"
domain: sfdx-dev
topic: log-out-of-an-org
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.066Z
estimatedTokens: 463
keywords: [Log, Org, security, purposes, Salesforce, CLI, any, you’ve, previously, authorized, practice, prevents, users, accessing, orgs]
---

# Log Out of an Org

> For security purposes, you can use the Salesforce CLI to log out of any org you’ve
  previously authorized. This practice prevents other users from accessing your orgs if you don’t
  want them to.

# Log Out of an Org

For security purposes, you can use the Salesforce CLI to log out of any org you’ve previously authorized. This practice prevents other users from accessing your orgs if you don’t want them to.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

The only way to access an org after you log out of it is with a password. By default, new scratch orgs contain one administrator with no password. Therefore, to avoid losing access to a scratch org, set a password for at least one user of a scratch org if you want to access it again after logging out. If you don’t want to access the scratch org again, delete it with org delete scratch rather than log out of it.

To log out of an org, run org logout from a terminal (macOS and Linux) or command prompt (Windows). This example uses the alias my-hub-org to log out.

```

```

To log out of all your orgs, including scratch orgs, use the \--all flag.

```

```

To access an org again, other than a scratch org, reauthorize it.

When you log out of an org, it no longer shows up in the org list output. If you log out of a Dev Hub org, the associated scratch orgs show up only if you specify the \--all flag.

#### See Also

-   [*Salesforce CLI Command Reference*: org logout](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_logout_unified "Salesforce CLI Command Reference: org logout - HTML (New Window)")

-   [*VS Code Command*: SFDX: Log Out from All Authorized Orgs, SFDX: Log Out from Default Org](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/default-org.html "VS Code Command: SFDX: Log Out from All Authorized Orgs, SFDX: Log Out from Default Org - HTML (New Window)")

## Code Examples

```
sf org logout --target-org my-hub-org
```

```
sf org logout --all
```
