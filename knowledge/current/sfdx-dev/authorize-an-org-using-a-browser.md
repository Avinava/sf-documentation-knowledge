---
title: "Authorize an Org Using a Browser"
domain: sfdx-dev
topic: authorize-an-org-using-a-browser
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.079Z
estimatedTokens: 1448
keywords: [Authorize, Org, Browser, running, CLI, command, entering, credentials, automatically, opens, That’s]
---

# Authorize an Org Using a Browser

> Authorize an org with a browser by running a CLI command and entering your credentials
    in the browser that automatically opens. That’s it!

# Authorize an Org Using a Browser

Authorize an org with a browser by running a CLI command and entering your credentials in the browser that automatically opens. That’s it!

Use this authorization method when multi-factor authentication (MFA) is enabled on your org, either directly with a username and password or via single sign-on (SSO).

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

You must have the **Approve Uninstalled Connected Apps** user permission to complete this task. Org administrators have the permission by default.

1.  Open a terminal (macOS and Linux) or command prompt (Windows).
2.  Run the org login web CLI command. We recommend using the \--alias flag to make it easy to refer to the org later.

    ```

    ```

    Use the \--set-default flag if you want the org to be the default for commands that accept the \--target-org flag. If you’re authorizing a Dev Hub org, use the \--set-default-dev-hub flag instead. See the [org login web command](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_login_web_unified) for examples.

3.  In the browser window that opens, sign in to your org with your Salesforce login credentials. Click **Allow**, which allows Salesforce CLI to access to your org.
4.  Close the browser window. Your org is now authorized!

If the URL that you use to log in to your org isn’t the default (login.salesforce.com), update your project configuration file (sfdx-project.json). Set the sfdcLoginUrl option to your My Domain login URL. For example:

```

```

This example is for a sandbox.

```

```

Alternatively, you can use the \--instance-url flag of org login web to specify the URL. This value overrides the login URL you specified in the sfdx-project.json file. For example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

We recommend that you use your enhanced My Domain login URL, as it isn’t affected by org migrations that change your org’s Salesforce instance. Be sure you use the version that ends in my.salesforce.com instead of the URL you see in Lightning Experience (.lightning.force.com). To verify the valid My Domain URL, from Setup, enter My Domain in the Quick Find box, then select **My Domain**.

The orgs you authorize for Salesforce CLI are required to have either an external client app (preferred) or a connected app. We provide a default connected app called Salesforce CLI. If you need more security or control, such as setting the refresh token timeout or specifying IP ranges, create your own external client app or connected app (only if you need to create scratch orgs or sandboxes). You can also configure the default connected app to be more secure.

#### See Also

-   [*Salesforce CLI Command Reference*: org login web](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_login_web_unified "Salesforce CLI Command Reference: org login web - HTML (New Window)")

-   [Create an External Client App in Your Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_eca.htm#sfdx_dev_auth_eca "Salesforce CLI requires an external client app in the org that you're authorizing. An external client app is a packageable framework that enables a third-party application (Salesforce CLI) to integrate with Salesforce by using APIs and security protocols. We provide a default connected app when you authorize an org with the org login web command. For extra security, you can create your own external client app in your org by using Setup and configure it with the settings of your choice. You're required to create an external client app when authorizing the org with the org login jwt command.")

-   [Create a Connected App in Your Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm "Salesforce CLI requires either an external client app (preferred) or connected app in the org that you're authorizing.")

-   [Use the Default Connected App Securely](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_default_conn_app.htm "If you authorize an org with the org login web command, but don't specify the --client-id flag, Salesforce CLI creates a default connected app in the org called Salesforce CLI. However, its refresh tokens are set to never expire. As a security best practice, Salesforce recommends that refresh tokens in your org expire after 90 days or fewer. Another security best practice is to set an expiration for the access token to 15 minutes. Similar to refresh tokens, the access token in the default connected app is set to never expire. To continue using this default connected app in a secure way, configure its policies.")

-   [Salesforce DX Project Configuration](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm "The project configuration file sfdx-project.json indicates that the directory is a Salesforce DX project. The configuration file contains project information and facilitates the authorization of orgs and the creation of second-generation packages. It also tells Salesforce CLI where to put files when syncing between the project and org.")

-   [*Salesforce Help*: Enhanced Domains](https://help.salesforce.com/s/articleView?id=products.domain_name_enhanced.htm&type=5&language=en_US "Salesforce Help: Enhanced Domains - HTML (New Window)")

-   [*VS Code Command*: SFDX: Authorize an Org, SFDX: Authorize a Dev Hub](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/default-org.html "VS Code Command: SFDX: Authorize an Org, SFDX: Authorize a Dev Hub - HTML (New Window)")

## Code Examples

```
sf org login web --alias my-org
```

```
"sfdcLoginUrl" : "https://MyDomainName.my.salesforce.com"
```

```
"sfdcLoginUrl" : "https://MyDomainName--SandboxName.sandbox.my.salesforce.com"
```

```
sf org login web --alias my-hub-org --instance-url https://exciting.sandbox.my.salesforce.com
```

## Related Topics

- Create an External Client App in Your Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_eca.htm)
- Create a Connected App in Your Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm)
- Use the Default Connected App Securely (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_default_conn_app.htm)
- Salesforce DX Project Configuration (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm)
