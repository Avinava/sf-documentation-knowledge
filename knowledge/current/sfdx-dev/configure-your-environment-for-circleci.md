---
title: "Configure Your Environment for CircleCI"
domain: sfdx-dev
topic: configure-your-environment-for-circleci
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.115Z
estimatedTokens: 607
keywords: [Configure, Environment, CircleCI, integrating, framework, Dev, Hub, org, project]
---

# Configure Your Environment for CircleCI

> Before integrating your existing CircleCI framework, configure your Dev Hub org and
    CircleCI project.

# Configure Your Environment for CircleCI

Before integrating your existing CircleCI framework, configure your Dev Hub org and CircleCI project.

1.  Set up your GitHub repository with CircleCI. You can follow the [sign-up steps on the CircleCI website](https://circleci.com/docs/first-steps/ "HTML (New Window)") to access your code on GitHub.
2.  [Install the Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm "HTML (New Window)"), if you haven’t already.
3.  Follow [Authorize an Org Using the JWT Flow](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm#sfdx_dev_auth_jwt_flow "Use the JWT flow to authorize an org in continuous integration (CI) environments, which are fully automated and don’t support the human interactivity of logging into a browser.") for your Dev Hub org, if you haven’t already.
4.  Encrypt your server key.
    1.  First, generate a key and initialization vector (iv) to encrypt your server.key file locally. CircleCI uses the key and iv to decrypt your server key in the build environment.

        Run the following command in the directory containing your server.key file. For the <passphrase> value, enter a word of your own choosing to create a unique key.

        ```

        ```

        The key and iv value display in the output.

        ```

        ```

    2.  Note the key and iv values, you need them later.
    3.  Encrypt the server.key file using the newly generated key and iv values. Run the following command in the directory containing your server.key file, replacing <key> and <iv> with the values from the previous step.

        ```

        ```

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

        #### Note

        Use the key and iv values only once, and don't use them to encrypt more than the server.key. While you can reuse this pair to encrypt other things, it is considered a security violation to do so.

        You generate a new key and iv value every time you run the command in step a. In other words, you can't regenerate the same pair. If you lose these values you must generate new ones and encrypt again.


Next, you’ll store the key, iv, and contents of server.key.enc as protected environment variables in the CircleCI UI. These values are considered secret, so take the appropriate precautions to protect them.

## Code Examples

```
openssl enc -aes-256-cbc -k <passphrase> -P -md sha1 -nosalt
```

```
key=****24B2
iv =****DA58
```

```
openssl enc -nosalt -aes-256-cbc -in server.key -out server.key.enc -base64 -K <key> -iv <iv>
```

## Related Topics

- Authorize an Org Using the JWT Flow (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm)
