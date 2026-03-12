---
title: "Create a Private Key and Self-Signed Digital Certificate"
domain: sfdx-dev
topic: create-a-private-key-and-self-signed-digital-certificate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.062Z
estimatedTokens: 949
keywords: [Key, Self-Signed, Digital, Certificate, Authorizing, org, login, jwt, command, requires, sign, highly, recommend, own, issued]
---

# Create a Private Key and Self-Signed Digital Certificate

> Authorizing an org with the org login jwt command
    requires a digital certificate and the private key used to sign the certificate. We highly
    recommend that you use your own private key and certificate issued by a certification authority.
    You can also use OpenSSL to create a key and a self-signed digital certificate, just to get
    started. Using a private key and certificate is optional when you authorize an org by logging
    into a browser.

# Create a Private Key and Self-Signed Digital Certificate

Authorizing an org with the org login jwt command requires a digital certificate and the private key used to sign the certificate. We highly recommend that you use your own private key and certificate issued by a certification authority. You can also use OpenSSL to create a key and a self-signed digital certificate, just to get started. Using a private key and certificate is optional when you authorize an org by logging into a browser.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=sfdx_dev)

#### Warning

The steps in this topic are for sample purposes only. You can use the generated key and certificate to get started, but check with your company's security policies before you use either of them in a production environment.

This process produces two files:

-   server.key—The private key. You specify this file when you authorize an org with the org login jwt command.
-   server.crt—The digital certificate. You upload this file when you create the required external client app or connected app.

1.  Open a terminal (macOS and Linux) or command prompt (Windows).
2.  If necessary, install OpenSSL on your computer.

    To check whether OpenSSL is installed on your computer, run the which command on macOS or Linux or the where command on Windows.

    ```

    ```

3.  Create a directory for storing the generated files, and change to the directory.

    ```

    ```

    ```

    ```

4.  Generate a private key, and store it in a file called server.key.

    ```

    ```

    ```

    ```

5.  Generate a certificate signing request by using the server.key file. Store the certificate signing request in a file called server.csr. Enter information about your company when prompted.

    ```

    ```

6.  Generate a self-signed digital certificate from the server.key and server.csr files. Store the certificate in a file called server.crt.

    ```

    ```


Now [create a external client app and upload the digital certificate to it](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_eca.htm#sfdx_dev_auth_eca "Salesforce CLI requires an external client app in the org that you're authorizing. An external client app is a packageable framework that enables a third-party application (Salesforce CLI) to integrate with Salesforce by using APIs and security protocols. We provide a default connected app when you authorize an org with the org login web command. For extra security, you can create your own external client app in your org by using Setup and configure it with the settings of your choice. You're required to create an external client app when authorizing the org with the org login jwt command."). If you're authorizing a Dev Hub and you plan to create scratch orgs or sandboxes later with the org create scratch|sandbox commands, then you must [create a connected app](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm "Salesforce CLI requires either an external client app (preferred) or connected app in the org that you're authorizing.") instead.

#### See Also

-   [OpenSSL: Cryptography and SSL/TLS Tools](https://www.openssl.org/ "OpenSSL: Cryptography and SSL/TLS Tools - HTML (New Window)")

-   [Create a Connected App in Your Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm "Salesforce CLI requires either an external client app (preferred) or connected app in the org that you're authorizing.")

-   [Authorize an Org Using the JWT Flow](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm#sfdx_dev_auth_jwt_flow "Use the JWT flow to authorize an org in continuous integration (CI) environments, which are fully automated and don’t support the human interactivity of logging into a browser.")

## Code Examples

```
which openssl
```

```
mkdir /Users/jdoe/JWT
```

```
cd /Users/jdoe/JWT
```

```
openssl genpkey -aes-256-cbc -algorithm RSA -pass pass:SomePassword -out server.pass.key -pkeyopt rsa_keygen_bits:2048
```

```
openssl rsa -passin pass:SomePassword -in server.pass.key -out server.key
```

## Related Topics

- create a
        external client app and upload the digital certificate to it (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_eca.htm)
- create a connected
        app (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm)
- Create a Connected App in Your Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm)
- Authorize an Org Using the JWT Flow (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm)
