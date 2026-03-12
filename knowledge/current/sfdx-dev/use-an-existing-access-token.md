---
title: "Use an Existing Access Token"
domain: sfdx-dev
topic: use-an-existing-access-token
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.043Z
estimatedTokens: 614
keywords: [Access, Token, authorize, org, login, commands, Salesforce, CLI, care, generating, refreshing, tokens, sometimes, want, run]
---

# Use an Existing Access Token

> When you authorize an org using the org login
    commands, Salesforce CLI takes care of generating and refreshing all tokens, such as the access
    token. But sometimes you want to run a few CLI commands against an existing org without going
    through the entire authorization process. In this case, you provide the access token and URL of
    the Salesforce instance that hosts the org to which you want to connect.

# Use an Existing Access Token

When you authorize an org using the org login commands, Salesforce CLI takes care of generating and refreshing all tokens, such as the access token. But sometimes you want to run a few CLI commands against an existing org without going through the entire authorization process. In this case, you provide the access token and URL of the Salesforce instance that hosts the org to which you want to connect.

Almost all CLI commands that have the \--target-org | -o flag accept an access token. The only exception is org display user.

1.  Open a terminal (macOS and Linux) or command prompt (Windows).
2.  To get the instance URL and access token for the org to connect to, run the org display command. See the values for the Access Token and Instance Url keys.

    ```

    ```

3.  Use config set to set the org-instance-url configuration variable. To set it locally, run the command from a Salesforce DX project; to set it globally, use the \--global flag.

    ```

    ```

4.  When you run the CLI command, use the org’s access token as the value for the \--target-org flag rather than the org’s username. For example:

    ```

    ```

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

    #### Tip

    If your access token contains a ! character, you must sometimes escape it with a backslash (\\). For example, if your access token is 00007wpr!AQkAQA, specify it this way: \--target-org 00007wpr\\!AQkAQA


Salesforce CLI doesn’t store the access token in its internal files. It uses it only for this CLI command run.

#### See Also

-   [Authorization Information for an Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_view_info.htm "You can view information for all orgs that you’ve authorized and the scratch orgs that you’ve created.")

-   [*Salesforce CLI Command Reference*: config set](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_config_commands_unified.htm#cli_reference_config_set_unified "Salesforce CLI Command Reference: config set - HTML (New Window)")

-   [*Salesforce CLI Command Reference*: project deploy start](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_start_unified "Salesforce CLI Command Reference: project deploy start - HTML (New Window)")

## Code Examples

```
sf org display --target-org myorg
=== Org Description

 KEY             VALUE                                           
 ─────────────── ───────────────────────────────────────────────
 Access Token    00D8H0000007wprAQkAQAlOT5H (truncated for security) 
...
 Instance Url    https://creative-impala-20hx3-dev-ed.my.salesforce.com  
...
```

```apex
sf config set org-instance-url=https://creative-impala-20hx3-dev-ed.my.salesforce.com --global
```

```
sf project deploy start --source-dir <source-dir> --target-org 00D8H0000007wprAQkAQAlOT5H
```

## Related Topics

- Authorization Information for an Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_view_info.htm)
