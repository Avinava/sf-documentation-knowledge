---
title: "Create an External Client App in Your Org"
domain: sfdx-dev
topic: create-an-external-client-app-in-your-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.038Z
estimatedTokens: 1703
keywords: [External, Client, App, Org, Salesforce, CLI, requires, you're, authorizing, packageable, framework, third-party, application, integrate, APIs]
---

# Create an External Client App in Your Org

> Salesforce CLI requires an external client app in the org that you're authorizing. An
    external client app is a packageable framework that enables a third-party application
    (Salesforce CLI) to integrate with Salesforce by using APIs and security protocols. We provide a
    default connected app when you authorize an org with the org login
      web command. For extra security, you can create your own external client app in your
    org by using Setup and configure it with the settings of your choice. You're required to create
    an external client app when authorizing the org with the org login
      jwt command.

# Create an External Client App in Your Org

Salesforce CLI requires an external client app in the org that you're authorizing. An external client app is a packageable framework that enables a third-party application (Salesforce CLI) to integrate with Salesforce by using APIs and security protocols. We provide a default connected app when you authorize an org with the org login web command. For extra security, you can create your own external client app in your org by using Setup and configure it with the settings of your choice. You're required to create an external client app when authorizing the org with the org login jwt command.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

If you're authoring a Dev Hub org and plan to create scratch orgs or sandboxes with the org create scratch|sandbox commands, then you [create a connected app instead](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm "Salesforce CLI requires either an external client app (preferred) or connected app in the org that you're authorizing.").

In the next task, the steps marked *(Required for JWT)* are required only if you’re creating an external client app to use with the org login jwt command. In this case, you also need a file that contains a digital certificate, such as server.crt. You can use your own private key and certificate issued by a certification authority. Or you can use OpenSSL to create a key and a self-signed digital certificate. See [Create a Private Key and Self-Signed Digital Certificate](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm "Authorizing an org with the org login jwt command requires a digital certificate and the private key used to sign the certificate. We highly recommend that you use your own private key and certificate issued by a certification authority. You can also use OpenSSL to create a key and a self-signed digital certificate, just to get started. Using a private key and certificate is optional when you authorize an org by logging into a browser.").

The steps marked *(Required for JWT)* are optional if you’re creating an external client app to use with org login web.

1.  Log in to your org.
2.  From the Quick Find box in Setup, enter App Manager, then click **App Manager**.
3.  Click **New External Client App**.
4.  Update the [basic information](https://help.salesforce.com/s/articleView?id=xcloud.create_a_local_external_client_app.htm&language=en_US "HTML (New Window)") as needed, such as the external client app name and your contact email address.
5.  Under **API (Enable OAuth Settings)**, click **Enable OAuth**.
6.  Under **App Settings**, in the **Callback URL** box, enter http://localhost:1717/OauthRedirect.

    If port 1717 (the default) is already in use on your local machine, specify an available one instead. Then update your sfdx-project.json file by setting the oauthLocalPort property to the new port. For example, if you set the callback URL to http://localhost:1919/OauthRedirect:

    ```

    ```

7.  In the **OAuth Scopes** section, select these scopes:
    -   **Manage user data via APIs (api)**
    -   **Manage user data via Web browsers (web)**
    -   **Perform requests at any time (refresh\_token, offline\_access)**
8.  *(Required for JWT)* In the **Flow Enablement** section, select **Enable JWT Bearer Flow**.
9.  *(Required for JWT)* Click **Upload Files** and upload the file that contains your digital certificate, such as server.crt.
10.  Click **Create**.

     The basic external client app is created and enabled, and you see the page to manage your new external client app. However, you must further configure the external client app to use it with Salesforce CLI.

11.  Click **Edit**.
12.  *(Required for JWT, including substeps)* Click the **Policies** tab.
     1.  Open **OAuth Policies**.
     2.  In the **Plugin Policies** section, set **Permitted Users** to Admin approved users are pre-authorized.
     3.  Click **OK**.
     4.  In the **App Policies** section, select the profiles that are pre-authorized to use this external client app. Similarly, select the permission sets. Create the profiles or permission sets if necessary.
13.  If not currently there, click the **Policies** tab.
14.  In the **App Authorization** section, under **OAuth Policies**, click **Expire refresh token after a specific time**.
15.  In the **Refresh Token Validity Period** box, enter 90. For **Refresh Token Validity Unit**, select Day(s).

     Setting a maximum of 90 days for the refresh token expiration is a security best practice. To continue running CLI commands against an org whose refresh tokens have expired, reauthorize it with the org login web or org login jwt command.

16.  In the **Session Timeout in Minutes** box, enter 15.

     Setting a timeout for access tokens is a security best practice. Salesforce CLI automatically handles an expired access token by referring to the refresh token.

17.  Click **Save**.

     Your external client app is ready to use.


## Get and Use the Consumer Key and Secret

When you're ready to run one of the org login commands that uses this external client app, follow these steps to get the consumer key and secret:

1.  Log in to your org.
2.  From the Quick Find box in Setup, enter App Manager, and then click **External Client App Manager**.
3.  Click your external client app.
4.  Click the **Settings** tab.
5.  Open **OAuth Settings** and click **Consumer Key and Secret**.

    The **Verify Your Identiy** web page opens.

6.  Check your email for a verification code, and then copy and paste the code in the **Verify Your Identity** web page.
7.  Click **Verify**.
8.  Click **Copy** next to **Consumer Key**.

    Depending on whether you've specified that it's required, also copy the **Consumer Secret**.


To use the consumer key, use the \--client-id flag of the org login commands. For example, if your consumer key is 04580y4051234051 and you’re authorizing a Dev Hub org by logging into it from a browser, run this command in a terminal (macOS and Linux) or command prompt (Windows):

```

```

If you specified in the external client app that the Web Server Flow requires a client (consumer) secret, the command prompts you for it. The command then opens the login page for you to add your org credentials.

See the reference for [org login web](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_login_web_unified) and [org login jwt](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_login_jwt_unified) for more examples.

## Code Examples

```
"oauthLocalPort" : "1919"
```

```
sf org login web --client-id 04580y4051234051 --set-default-dev-hub --alias my-hub-org
```

## Related Topics

- create a connected app
        instead (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm)
- Create a Private Key and Self-Signed Digital Certificate (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm)
