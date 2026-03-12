---
title: "Create a Connected App in Your Org"
domain: sfdx-dev
topic: create-a-connected-app-in-your-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.022Z
estimatedTokens: 1997
keywords: [Connected, App, Org, Salesforce, CLI, requires, either, external, client, preferred, you're, authorizing]
---

# Create a Connected App in Your Org

> Salesforce CLI requires either an external client app (preferred) or connected app in
    the org that you're authorizing.

# Create a Connected App in Your Org

Salesforce CLI requires either an external client app (preferred) or connected app in the org that you're authorizing.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=sfdx_dev)

#### Warning

Create a connected app in your org **only** if it's your Dev Hub and you plan to later create scratch orgs or sandboxes with the org create scratch|sandbox commands. Otherwise, [create an external client app](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_eca.htm#sfdx_dev_auth_eca "Salesforce CLI requires an external client app in the org that you're authorizing. An external client app is a packageable framework that enables a third-party application (Salesforce CLI) to integrate with Salesforce by using APIs and security protocols. We provide a default connected app when you authorize an org with the org login web command. For extra security, you can create your own external client app in your org by using Setup and configure it with the settings of your choice. You're required to create an external client app when authorizing the org with the org login jwt command."), which is the preferred integration framework.

Connected apps are being deprecated. We plan to provide the information in this topic only until the requirement to use connected apps for sandbox or scratch org creation is removed.

A connected app is a framework that enables an external application, in this case Salesforce CLI, to integrate with Salesforce using APIs and standard protocols, such as OAuth. We provide a default connected app when you authorize an org with the org login web command.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

You must have the **Approve Uninstalled Connected Apps** user permission to complete this task. Org administrators have the permission by default.

In the task below, the steps marked *Required for JWT* are required only if you’re creating a connected app to use with the org login jwt command. In this case you also need a file that contains a digital certificate, such as server.crt. The steps are optional if you’re creating a connected app to use with org login web.

1.  Contact Salesforce Customer Support to enable the creation of connected apps in your org.

    Creating connected apps is now disabled by default, because connected apps are being deprecated. If you need to create a connected app, Salesforce Customer Support must enable an org perm in your org. This is a one-time process per org. See [New connected apps can no longer be created in Spring ‘26](https://help.salesforce.com/s/articleView?id=005228017&type=1&language=en_US).

2.  Log in to your org.
3.  From Setup, in the Quick Find box, enter External Client Apps, and then select **Settings**.
4.  Turn on **Allow creation of connected apps** and click **Enable**.
5.  Click **New Connected App**.
6.  Update the [basic information](https://help.salesforce.com/articleView?id=connected_app_create_basics.htm&language=en_US "HTML (New Window)") as needed, such as the connected app name and your email address.
7.  Select **Enable OAuth Settings**.
8.  For the callback URL, enter http://localhost:1717/OauthRedirect.

    If port 1717 (the default) is already in use on your local machine, specify an available one instead. Then update your sfdx-project.json file by setting the oauthLocalPort property to the new port. For example, if you set the callback URL to http://localhost:1919/OauthRedirect:

    ```

    ```

9.  (Required for JWT) Select **Use digital signatures**.
10.  (Required for JWT) Click **Choose File** and upload file that contains your digital certificate, such as server.crt.
11.  Add these OAuth scopes:
     -   **Manage user data via APIs (api)**
     -   **Manage user data via Web browsers (web)**
     -   **Perform requests at any time (refresh\_token, offline\_access)**
12.  Click **Save**, then **Continue**.
13.  Click **Manage Consumer Details**.

     If prompted, verify your identity by entering the verification code that was automatically sent to your email address.

14.  Click **Copy** next to Consumer Key because you need it later when you run an org login command. Depending on whether you specify that it's required, also copy the Consumer Secret.
15.  Click **Back to Manage Connected Apps**.
16.  Click **Manage**.
17.  Click **Edit Policies**.
18.  In the OAuth Policies section, for the Refresh Token Policy field, click **Expire refresh token after:** and enter 90 days or less.

     Setting a maximum of 90 days for the refresh token expiration is a security best practice. To continue running CLI commands against an org whose refresh tokens have expired, reauthorize it with the org login web or org login jwt command.

19.  In the Session Policies section, set **Timeout Value** to 15 minutes.

     Setting a timeout for access tokens is a security best practice. Salesforce CLI automatically handles an expired access token by referring to the refresh token.

20.  (Required for JWT) In the OAuth Policies section, select **Admin approved users are pre-authorized** for permitted users, and click **OK**.
21.  Click **Save**.
22.  (Required for JWT) Click **Manage Profiles**, select the profiles that are pre-authorized to use this connected app, and click **Save**. Similarly, click **Manage Permission Sets** to select the permission sets. Create permission sets if necessary.

To specify the consumer key, use the \--client-id flag of the org login commands. For example, if your consumer key is 04580y4051234051 and you’re authorizing a Dev Hub org by logging into it from a browser, run this command in a terminal (macOS and Linux) or command prompt (Windows):

```

```

If you specifed in the connected app that the web login flow requires a client (consumer) secret, the command prompts you for it. The command then opens the login page for you to add your org credentials.

See the reference for [org login web](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_login_web_unified) and [org login jwt](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_login_jwt_unified) for more examples.

#### See Also

-   [Create a Private Key and Self-Signed Digital Certificate](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm "Authorizing an org with the org login jwt command requires a digital certificate and the private key used to sign the certificate. We highly recommend that you use your own private key and certificate issued by a certification authority. You can also use OpenSSL to create a key and a self-signed digital certificate, just to get started. Using a private key and certificate is optional when you authorize an org by logging into a browser.")

-   [*Salesforce Help*: Connected Apps](https://help.salesforce.com/articleView?id=connected_app_overview.htm&language=en_US "Salesforce Help: Connected Apps - HTML (New Window)")

-   [Authorization](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm "Authorization refers to logging into an org so you can run commands that require access to the org. Creating an org with a CLI command also automatically authorizes it. For example, you authorize a Dev Hub org to allow you to create, delete, and manage your Salesforce scratch orgs. After you set up your project on your local machine, you authorize the Dev Hub org before you can create a scratch org. When you run the command to create the scratch org, Salesforce CLI automatically authorizes it.")

-   [*Salesforce Help*: Set Up Multi-Factor Authentication](https://help.salesforce.com/articleView?id=security_2fa_config.htm&language=en_US "Salesforce Help: Set Up Multi-Factor Authentication - HTML (New Window)")

## Code Examples

```
"oauthLocalPort" : "1919"
```

```
sf org login web --client-id 04580y4051234051 --set-default-dev-hub --alias my-hub-org
```

## Related Topics

- create an external client
          app (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_eca.htm)
- Create a Private Key and Self-Signed Digital Certificate (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm)
- Authorization (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm)
