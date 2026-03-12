---
title: "Encrypt from the Command Line"
domain: dataLoader
topic: encrypt-from-the-command-line
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.273Z
estimatedTokens: 327
keywords: [Encrypt, Command, Line, Data, Loader, offers, encryption, utility, secure, passwords, configuration, files, handle, directly, transit]
---

# Encrypt from the Command Line

> Data Loader offers an encryption utility to secure passwords specified in configuration
    files. While Data Loader does not handle encryption directly, data in transit is encrypted when
    using a secure connection such as HTTPS.

# Encrypt from the Command Line

Data Loader offers an encryption utility to secure passwords specified in configuration files. While Data Loader does not handle encryption directly, data in transit is encrypted when using a secure connection such as HTTPS.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

When running Data Loader in batch mode from the command line, you must encrypt the following configuration parameters:

-   sfdc.password
-   sfdc.proxyPassword

1.  Open a command prompt, and navigate to the bin subfolder of your Data Loader installation folder.
2.  Run encrypt.bat.
3.  At the command line, follow the prompts provided to execute the following actions.
    -   Generate a key: \-k \[path to key file\]

        Generates a key file, and saves it in %userprofile%\\.dataloader\\dataLoader.key if the path is not specified. Store this file with care as you use it for encryption and decryption.

    -   Encrypt text: \-e <plain text\> <path to key file\>

        Generates an encrypted version of the text. Provide a key file for the encryption.

    -   Decrypt text: \-d <encrypted text\> <path to key file\>

        Decrypts the text using the key file.
