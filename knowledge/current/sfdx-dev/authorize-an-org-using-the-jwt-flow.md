---
title: "Authorize an Org Using the JWT Flow"
domain: sfdx-dev
topic: authorize-an-org-using-the-jwt-flow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.057Z
estimatedTokens: 2662
keywords: [Authorize, Org, JWT, Flow, continuous, integration, environments, fully, automated, don’t, support, human, interactivity, logging, browser]
---

# Authorize an Org Using the JWT Flow

> Use the JWT flow to authorize an org in continuous integration (CI) environments, which
    are fully automated and don’t support the human interactivity of logging into a
    browser.

# Authorize an Org Using the JWT Flow

Use the JWT flow to authorize an org in continuous integration (CI) environments, which are fully automated and don’t support the human interactivity of logging into a browser.

The JWT flow requires a digital certificate, also called a digital signature, to sign the JWT request. You can use your own certificate or create a self-signed certificate using OpenSSL.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

If your org is configured with high assurance (stepped up) authentication, Salesforce prompts the user to verify their identity. This verification process means that you can’t use the JWT flow and Salesforce CLI for headless authentication.

1.  If you don’t have your own private key and digital certificate, you can use [OpenSSL to create the key and a self-signed certificate](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm "Authorizing an org with the org login jwt command requires a digital certificate and the private key used to sign the certificate. We highly recommend that you use your own private key and certificate issued by a certification authority. You can also use OpenSSL to create a key and a self-signed digital certificate, just to get started. Using a private key and certificate is optional when you authorize an org by logging into a browser.").

    It’s assumed in this task that your private key file is named server.key and your digital certificate is named server.crt.

2.  [Create an external client app and configure it for Salesforce DX](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_eca.htm#sfdx_dev_auth_eca "Salesforce CLI requires an external client app in the org that you're authorizing. An external client app is a packageable framework that enables a third-party application (Salesforce CLI) to integrate with Salesforce by using APIs and security protocols. We provide a default connected app when you authorize an org with the org login web command. For extra security, you can create your own external client app in your org by using Setup and configure it with the settings of your choice. You're required to create an external client app when authorizing the org with the org login jwt command.").

    This task includes uploading the server.crt digital certificate file. Make note of the consumer key when you finish configuring the external client app because you need it later.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

    #### Important

    If you're authoring a Dev Hub org and plan to create scratch orgs or sandboxes with the org create scratch|sandbox commands, then you must [create a connected app instead](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm "Salesforce CLI requires either an external client app (preferred) or connected app in the org that you're authorizing.") of an external client app.

3.  Open a terminal (macOS and Linux) or command prompt (Windows).
4.  Run the org login jwt CLI command. We recommend using the \--alias flag to make it easy to refer to the org later.

    Specify the consumer key from your external client app or connected app with the \--client-id flag, the path to the private JWT key file (server.key), and the username for your org. For example:

    ```

    ```

    Use the \--set-default flag if you want the org to be the default for commands that accept the \--target-org flag. If you’re authorizing a Dev Hub org, use the \--set-default-dev-hub flag instead. See the [org login jwt command](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_login_jwt_unified) for examples.


You can authorize a scratch org using the same consumer key and private key file that you used to authorize its associated Dev Hub org. See [Authorize a Scratch Org Using the JWT Flow](#sfdx_dev_auth_jwt_scratch "If you authorized your Dev Hub org using the org login jwt command, you can use the same digital certificate and private key to authorize an associated scratch org. This method is useful for continuous integration (CI) systems that must authorize scratch orgs after creating them, but don’t have access to the scratch org’s access token.")

If the URL that you use to log in to your org isn’t the default (login.salesforce.com), update your project configuration file (sfdx-project.json). Set the sfdcLoginUrl option to your enhanced My Domain login URL. For example:

```

```

This example is for a sandbox.

```

```

Alternatively, you can use the \--instance-url flag of the org login jwt command to specify the URL. This value overrides the login URL you specified in the sfdx-project.json file. For example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

We recommend that you use your My Domain login URL, because it isn’t affected by org migrations that change your org’s Salesforce instance. Be sure you use the version that ends in my.salesforce.com instead of the URL you see in Lightning Experience (.lightning.force.com). To verify the valid My Domain URL, from Setup, enter My Domain in the Quick Find box, then select **My Domain**.

#### See Also

-   [*Salesforce CLI Command Reference*: org login jwt](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_login_jwt_unified "Salesforce CLI Command Reference: org login jwt - HTML (New Window)")

-   [Create a Private Key and Self-Signed Digital Certificate](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm "Authorizing an org with the org login jwt command requires a digital certificate and the private key used to sign the certificate. We highly recommend that you use your own private key and certificate issued by a certification authority. You can also use OpenSSL to create a key and a self-signed digital certificate, just to get started. Using a private key and certificate is optional when you authorize an org by logging into a browser.")

-   [Create a Connected App in Your Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm "Salesforce CLI requires either an external client app (preferred) or connected app in the org that you're authorizing.")

-   [Salesforce DX Project Configuration](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm "The project configuration file sfdx-project.json indicates that the directory is a Salesforce DX project. The configuration file contains project information and facilitates the authorization of orgs and the creation of second-generation packages. It also tells Salesforce CLI where to put files when syncing between the project and org.")

-   [*Salesforce Help*: Enhanced Domains](https://help.salesforce.com/s/articleView?id=products.domain_name_enhanced.htm&type=5&language=en_US "Salesforce Help: Enhanced Domains - HTML (New Window)")

-   [*Salesforce Help*: Set Up Multi-Factor Authentication](https://help.salesforce.com/articleView?id=security_2fa_config.htm&language=en_US "Salesforce Help: Set Up Multi-Factor Authentication - HTML (New Window)")


## Authorize a Scratch Org Using the JWT Flow

If you authorized your Dev Hub org using the org login jwt command, you can use the same digital certificate and private key to authorize an associated scratch org. This method is useful for continuous integration (CI) systems that must authorize scratch orgs after creating them, but don’t have access to the scratch org’s access token.

Before you begin, we assume that:

-   You previously authorized your Dev Hub org with the org login jwt command.
-   The private key file you used when authorizing your Dev Hub org is accessible and in /Users/jdoe/JWT/server.key.
-   You’ve created a scratch org and have its administration user’s username, such as test-wvkpnfm5z113@example.com.
-   You know the scratch org’s instance URL. If you don’t know it, you can query your Dev Hub org. For example:

    ```

    ```


1.  Copy the consumer key from the external client app (or connected app) that you created in your Dev Hub org.
    1.  Log in to your Dev Hub org.
    2.  From Setup, enter App Manager in the Quick Find box to get to the Lightning Experience App Manager.
    3.  Locate the external client app (or connected app) in the apps list, then click the dropdown menu on the right side, and select **View**.
    4.  In the API (Enable OAuth Settings) section, click **Manage Consumer Details**

        If prompted, verify your identity by entering the verification code that was automatically sent to your email address.

    5.  Copy the Consumer Key to your clipboard. The consumer key is a long string of numbers, letters, and characters, such as 3MVG9szVa2Rx\_sqBb444p50Yj (example shortened for clarity.)
2.  Open a terminal (macOS and Linux) or command prompt (Windows).
3.  Run the org login jwt CLI command. The \--client-id and \--jwt-key-file flag values are the same as when you ran the command to authorize a Dev Hub org. Set \--username to the scratch org’s admin username and set \--instance-url to the scratch org’s instance URL, such as https://energy-enterprise-2539-dev-ed.scratch.my.salesforce.com. For example:

    ```

    ```

    If you get an error that the user isn’t approved, it means that the scratch org information hasn’t yet been replicated. Wait a short time and try again.


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

If your scratch org is running on Hyperforce and the \--username value of org login jwt is a non-admin scratch org user, you can’t use your Dev Hub’s digital certificate and private key. To authorize the scratch org in this scenario, follow the standard JWT flow steps.

#### See Also

-   [Authorize an Org Using the JWT Flow](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm#sfdx_dev_auth_jwt_flow "Use the JWT flow to authorize an org in continuous integration (CI) environments, which are fully automated and don’t support the human interactivity of logging into a browser.")

-   [*Salesforce Help*: Connected Apps](https://help.salesforce.com/articleView?id=connected_app_overview.htm&language=en_US "Salesforce Help: Connected Apps - HTML (New Window)")

-   [Create Scratch Orgs](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm "Easily spin up a scratch org and open it directly from the command line.")

## Code Examples

```
sf org login jwt --client-id 04580y4051234051 --jwt-key-file /Users/jdoe/JWT/server.key --username jdoe@myorg.com --alias my-hub-org
```

```
"sfdcLoginUrl" : "https://MyDomainName.my.salesforce.com"
```

```
"sfdcLoginUrl" : "https://MyDomainName--SandboxName.sandbox.my.salesforce.com"
```

```
sf org login jwt --client-id 04580y4051234051 --jwt-key-file /Users/jdoe/JWT/server.key --username jdoe@myorg.com --alias my-hub-org --instance-url https://mydomain--mysandbox.sandbox.my.salesforce.com
```

```
sf data query --target-org my-dev-hub --query "SELECT SignupUsername,LoginUrl FROM ScratchOrgInfo WHERE SignupUsername='test-wvkpnfm5z113@example.com'"
```

## Related Topics

- OpenSSL to create the key and a self-signed certificate (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm)
- Create an external client app and configure it for
          Salesforce DX (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_eca.htm)
- create a connected app instead (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm)
- Create a Private Key and Self-Signed Digital Certificate (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm)
- Create a Connected App in Your Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm)
- Salesforce DX Project Configuration (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm)
- Authorize an Org Using the JWT Flow (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm)
- Create Scratch Orgs (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm)
