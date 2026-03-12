---
title: "Authorization"
domain: sfdx-dev
topic: authorization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.013Z
estimatedTokens: 1887
keywords: [Authorization, refers, logging, org, run, commands, require, access, Creating, CLI, command, automatically, authorizes, authorize, Dev]
---

# Authorization

> Authorization refers to logging into an org so you can run commands that require access
      to the org. Creating an org with a CLI command also automatically authorizes it. For example,
      you authorize a Dev Hub org to allow you to create, delete, and manage your Salesforce scratch
      orgs. After you set up your project on your local machine, you authorize the Dev Hub org
      before you can create a scratch org. When you run the command to create the scratch org,
      Salesforce CLI automatically authorizes it.

# Authorization

Authorization refers to logging into an org so you can run commands that require access to the org. Creating an org with a CLI command also automatically authorizes it. For example, you authorize a Dev Hub org to allow you to create, delete, and manage your Salesforce scratch orgs. After you set up your project on your local machine, you authorize the Dev Hub org before you can create a scratch org. When you run the command to create the scratch org, Salesforce CLI automatically authorizes it.

| Available in: Salesforce Classic and Lightning Experience |
| --- |
| Dev Hub available in: Developer,Enterprise, Performance, and Unlimited Editions |
| Scratch orgs are available in: Developer, Enterprise, Group, and Professional Editions |


You can also authorize other existing orgs, such as sandboxes or packaging orgs, to provide more flexibility when using CLI commands.

You authorize an org only one time. To switch between orgs during development, specify the username that you used to log into the org with either the \--target-org or \--target-dev-hub flag. You can also set a default org or use an alias.

You have some options when authorizing an org, depending on what you’re trying to accomplish.

-   The easiest option is to run org login web, which opens a browser in which you enter your Salesforce credentials. This option is officially called the OAuth 2.0 web server flow.
-   For continuous integration (CI) or automated environments, use the org login jwt command. This option is officially called the OAuth 2.0 JSON Web Tokens (JWT) bearer flow. This flow is ideal for scenarios where you can’t interactively log in to a browser, such as from a CI script.

    You can also use the org login sfdx-url command in automated environments; this method uses the org’s SFDX authorization URL.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

    #### Important

    If your org is configured with high assurance (stepped up) authentication, Salesforce prompts the user to verify their identity. This verification process means that you can’t use the JWT flow or SFDX authorization URL with Salesforce CLI for headless authentication.


-   **[Authorize an Org Using a Browser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm)**
    Authorize an org with a browser by running a CLI command and entering your credentials in the browser that automatically opens. That’s it!
-   **[Authorize an Org Using the JWT Flow](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm#sfdx_dev_auth_jwt_flow)**
    Use the JWT flow to authorize an org in continuous integration (CI) environments, which are fully automated and don’t support the human interactivity of logging into a browser.
-   **[Create a Private Key and Self-Signed Digital Certificate](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm)**
    Authorizing an org with the org login jwt command requires a digital certificate and the private key used to sign the certificate. We highly recommend that you use your own private key and certificate issued by a certification authority. You can also use OpenSSL to create a key and a self-signed digital certificate, just to get started. Using a private key and certificate is optional when you authorize an org by logging into a browser.
-   **[Create an External Client App in Your Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_eca.htm#sfdx_dev_auth_eca)**
    Salesforce CLI requires an external client app in the org that you're authorizing. An external client app is a packageable framework that enables a third-party application (Salesforce CLI) to integrate with Salesforce by using APIs and security protocols. We provide a default connected app when you authorize an org with the org login web command. For extra security, you can create your own external client app in your org by using Setup and configure it with the settings of your choice. You're required to create an external client app when authorizing the org with the org login jwt command.
-   **[Create a Connected App in Your Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm)**
    Salesforce CLI requires either an external client app (preferred) or connected app in the org that you're authorizing.
-   **[Use the Default Connected App Securely](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_default_conn_app.htm)**
    If you authorize an org with the org login web command, but don't specify the \--client-id flag, Salesforce CLI creates a default connected app in the org called Salesforce CLI. However, its refresh tokens are set to never expire. As a security best practice, Salesforce recommends that refresh tokens in your org expire after 90 days or fewer. Another security best practice is to set an expiration for the access token to 15 minutes. Similar to refresh tokens, the access token in the default connected app is set to never expire. To continue using this default connected app in a secure way, configure its policies.
-   **[Use an Existing Access Token](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_existing_access_token.htm)**
    When you authorize an org using the org login commands, Salesforce CLI takes care of generating and refreshing all tokens, such as the access token. But sometimes you want to run a few CLI commands against an existing org without going through the entire authorization process. In this case, you provide the access token and URL of the Salesforce instance that hosts the org to which you want to connect.
-   **[Authorize an Org Using Its SFDX Authorization URL](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_url.htm)**
    Use an org's Salesforce DX (SFDX) authorization URL to authorize an org in continuous integration (CI) environments, which are fully automated and don’t support the human interactivity of logging into a browser.
-   **[Authorization Information for an Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_view_info.htm)**
    You can view information for all orgs that you’ve authorized and the scratch orgs that you’ve created.
-   **[Log Out of an Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_logout.htm)**
    For security purposes, you can use the Salesforce CLI to log out of any org you’ve previously authorized. This practice prevents other users from accessing your orgs if you don’t want them to.

#### See Also

-   [Authorize an Org Using a Browser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm "Authorize an org with a browser by running a CLI command and entering your credentials in the browser that automatically opens. That’s it!")

-   [Authorize an Org Using the JWT Flow](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm#sfdx_dev_auth_jwt_flow "Use the JWT flow to authorize an org in continuous integration (CI) environments, which are fully automated and don’t support the human interactivity of logging into a browser.")

-   [*Salesforce Help*: OAuth 2.0 Web Server Flow for Web App Integration](https://help.salesforce.com/articleView?id=remoteaccess_oauth_web_server_flow.htm&language=en_US "Salesforce Help: OAuth 2.0 Web Server Flow for Web App Integration - HTML (New Window)")

-   [*Salesforce Help*: OAuth 2.0 JWT Bearer Flow for Server-to-Server Integration](https://help.salesforce.com/articleView?id=remoteaccess_oauth_jwt_flow.htm&language=en_US "Salesforce Help: OAuth 2.0 JWT Bearer Flow for Server-to-Server Integration - HTML (New Window)")

## Related Topics

- Authorize an Org Using a Browser (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm)
- Authorize an Org Using the JWT Flow (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm)
- Create a Private Key and Self-Signed Digital Certificate (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm)
- Create an External Client App in Your Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_eca.htm)
- Create a Connected App in Your Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm)
- Use the Default Connected App Securely (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_default_conn_app.htm)
- Use an Existing Access Token (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_existing_access_token.htm)
- Authorize an Org Using Its SFDX Authorization URL (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_url.htm)
- Authorization Information for an Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_view_info.htm)
- Log Out of an Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_logout.htm)
