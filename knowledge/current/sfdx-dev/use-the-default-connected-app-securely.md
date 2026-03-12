---
title: "Use the Default Connected App Securely"
domain: sfdx-dev
topic: use-the-default-connected-app-securely
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.029Z
estimatedTokens: 634
keywords: [Connected, App, Securely, authorize, org, login, web, command, don't, specify, --client-id, flag, Salesforce, CLI, creates]
---

# Use the Default Connected App Securely

> If you authorize an org with the org login web
    command, but don't specify the --client-id flag, Salesforce
    CLI creates a default connected app in the org called Salesforce
      CLI. However, its refresh tokens are set to never expire. As a security best
    practice, Salesforce recommends that refresh tokens in your org expire after 90 days or fewer.
    Another security best practice is to set an expiration for the access token to 15 minutes.
    Similar to refresh tokens, the access token in the default connected app is set to never expire.
    To continue using this default connected app in a secure way, configure its policies.

# Use the Default Connected App Securely

If you authorize an org with the org login web command, but don't specify the \--client-id flag, Salesforce CLI creates a default connected app in the org called Salesforce CLI. However, its refresh tokens are set to never expire. As a security best practice, Salesforce recommends that refresh tokens in your org expire after 90 days or fewer. Another security best practice is to set an expiration for the access token to 15 minutes. Similar to refresh tokens, the access token in the default connected app is set to never expire. To continue using this default connected app in a secure way, configure its policies.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

You must be the org administrator to install the default Salesforce CLI connected app, which is one of the steps of this task.

1.  Log in to your org.
2.  From Setup, enter OAuth in the Quick Find box, then select **Connected Apps OAuth Usage**.
3.  Select the Salesforce CLI app and click **Install**. Confirm by clicking **Install** again.
4.  Click **Edit Policies**.
5.  In the OAuth Policies section, for the Refresh Token Policy field, click **Expire refresh token after:** and enter 90 Days or less.
6.  In the Session Policies section, set **Timeout Value** to 15 minutes.
7.  Click **Save**.

If you run a CLI command against an org whose refresh token has expired, you get an error. For example:

```

```

The org list command also displays expired refresh token information in the CONNECTED STATUS column. To continue using the org, reauthorize it with the org login web or org login jwt command.

Salesforce CLI automatically handles an expired access token by referring to the refresh token.

#### See Also

-   [*Salesforce Help*: Connected Apps](https://help.salesforce.com/articleView?id=connected_app_overview.htm&language=en_US "Salesforce Help: Connected Apps - HTML (New Window)")

-   [Authorize an Org Using a Browser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm "Authorize an org with a browser by running a CLI command and entering your credentials in the browser that automatically opens. That’s it!")

-   [Authorize an Org Using the JWT Flow](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm#sfdx_dev_auth_jwt_flow "Use the JWT flow to authorize an org in continuous integration (CI) environments, which are fully automated and don’t support the human interactivity of logging into a browser.")

## Code Examples

```
ERROR running org open: Error authenticating with the refresh token due to: expired access/refresh token
```

## Related Topics

- Authorize an Org Using a Browser (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm)
- Authorize an Org Using the JWT Flow (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm)
