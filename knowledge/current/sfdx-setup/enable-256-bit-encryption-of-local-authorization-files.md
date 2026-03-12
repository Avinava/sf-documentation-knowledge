---
title: "Enable 256-Bit Encryption of Local Authorization Files"
domain: sfdx-setup
topic: enable-256-bit-encryption-of-local-authorization-files
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.111Z
estimatedTokens: 1504
keywords: [Enable, 256-Bit, Encryption, Local, Authorization, Files, Salesforce, CLI, uses, 128-bit, encrypt, internal, auth, associated, orgs]
---

# Enable 256-Bit Encryption of Local Authorization Files

> Salesforce CLI uses 128-bit encryption to encrypt its local internal files, such as the
  authorization (auth) files associated with the orgs you’ve logged into.  For increased security,
  you can enable 256-bit encryption.

# Enable 256-Bit Encryption of Local Authorization Files

Salesforce CLI uses 128-bit encryption to encrypt its local internal files, such as the authorization (auth) files associated with the orgs you’ve logged into. For increased security, you can enable 256-bit encryption.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_setup)

#### Important

This topic explains how to enable 256-bit encryption for internal files stored on your computer that are part of the Salesforce CLI installation. It doesn't cover making changes to your org.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_setup)

#### Tip

For simplicity in this document, we call 128-bit encryption v1 crypto and 256-bit encryption v2 crypto.

## Prerequisites

You must complete all these steps before you enable v2 crypto. If you don’t, your Salesforce CLI installation can be a mix of v1 crypto and v2 crypto, which can result in errors.

1.  Gather the usernames and passwords for all your existing authorized orgs, including for any scratch orgs that you want to continue using after enabling v2 crypto.

    Part of enabling v2 crypto includes reauthorizing all your existing authorized orgs.

2.  Update to the latest version of Salesforce CLI; if you use Salesforce Extensions for VS Code, be sure to update to its latest version too.

    For Salesforce CLI, read the [update](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_update_cli.htm) documentation. For Salesforce Extensions for VS Code, see the [installation](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/install.html) documentation.

3.  Ensure that all 3rd-party plugins installed on your system are ready for v2 crypto.
    1.  Open a terminal (macOS and Linux) or PowerShell command-line shell (Windows).
    2.  Run the doctor command.

        ```

        ```

    3.  In the output, make sure that the \[@salesforce/plugin-auth\] CLI supports v2 crypto test is passing, as shown in this sample output:

        ```

        ```

        If the test fails, at least one plugin in your Salesforce CLI installation is using an outdated version of the @salesforce/core library. The v2 crypto supports only plugins that use version 6.7.0 or later of @salesforce/core. All the core plugins that ship with the latest Salesforce CLI version use the supported version of @salesforce/core, so the problem is likely with one of your user-installed plugins. Work with your plugin provider to request updates.


## Enable 256-Bit Encryption (v2 Crypto)

To update your Salesforce CLI installation to use v2 crypto, complete these steps.

1.  Did you [complete all the prerequisites](#first_task "You must complete all these steps before you enable v2 crypto. If you don’t, your Salesforce CLI installation can be a mix of v1 crypto and v2 crypto, which can result in errors.")? They’re important, so be sure you finish all the steps.
2.  Make a backup copy of up the sfdx key in your key store.
    -   On Windows, your key store is a file called key.json. The file is usually in the .sfdx directory in your home directory, such as C:\\\\Users\\<username>\\.sfdx.
    -   On macOS or Linux:
        -   If the SF\_USE\_GENERIC\_UNIX\_KEYCHAIN environment variable is set, your key is in the file key.json. This file is usually in the .sfdx directory in your home directory, such as /Users/<username>/.sfdx.
        -   Otherwise, on macOS, your key store is most likely in the [Keychain Access app](https://support.apple.com/guide/keychain-access/welcome/mac). On Linux, the key store depends on the specific flavor of Linux you’re using; refer to your documentation.
3.  Rename the Salesforce CLI .sfdx directory.

    For example, open a terminal (macOS and Linux) and run this command.

    ```

    ```

4.  Set the SF\_CRYPTO\_V2 environment variable to true.

    ```

    ```

5.  Log in to one of your orgs using one of the org login commands.

    For example, run the org login web CLI command from a terminal or command prompt, and log in to your org using the browser that opens.

6.  After successfully logging into your org, confirm that you’re using the new improved encryption (v2 crypto).
    -   If you’re using key.json as your key store:
        -   Run sf doctor.
        -   Ensure that the output includes the message CLI using stable v2 crypto.
    -   If you’re not using key.json as your key store:
        -   Locate the sfdx key in your key store application.
        -   Confirm that the key is 64 characters long.
7.  Unset the SF\_CRYPTO\_V2 environment variable because you no longer need it.

    ```

    ```

8.  Log in to the rest of your orgs.

Your Salesforce CLI installation now uses 256-bit encryption for its internal files.

## Go Back to 128-Bit Encryption (v1 Crypto)

After you enable v2 crypto, there’s nothing more for you to do; auth files automatically start using 256-bit encryption. However, if you must revert to using v1 crypto due to unforeseen circumstances, follow these steps.

1.  If you haven’t already, unset the SF\_CRYPTO\_V2 environment variable.

    ```

    ```

2.  Move the renamed .sfdx-bak directory back to its original name (.sfdx).

    For example, on macOS or Linux:

    ```

    ```

3.  If you’re not using key.json as your key store, use the backup copy of the sfdx key and set it back to its original value in your password manager, such as the Keychain Access app on macOS.

    If you’re using key.json as your key store, you don’t have to do anything because the original value has been restored as part of the previous step.

4.  All your original org authentications are now restored. To check that they’re working correctly, run the org open command on one of your orgs; if the browser automatically opens to the org’s UI correctly, then the recovery was successful. If the browser doesn’t open to your org, manually log into it again.

## Code Examples

```
pass - [@salesforce/plugin-auth] CLI supports v2 crypto
```

```
mv ~/.sfdx ~/.sfdx-bak
```

```
export SF_CRYPTO_V2=true
```

```
unset SF_CRYPTO_V2
```

```
unset SF_CRYPTO_V2
```
