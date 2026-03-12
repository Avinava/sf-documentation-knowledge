---
title: "Hide Deep Linking Security Dialog"
domain: field-service
topic: hide-deep-linking-security-dialog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.778Z
estimatedTokens: 843
keywords: [Hide, Deep, Linking, Security, Dialog, time, user, opens, link, action, Service, mobile, app, prompts, confirm]
---

# Hide Deep Linking Security Dialog

> Each time a user opens a deep link to an action from the Field Service mobile app, a
  security dialog prompts the user to confirm the action. You can hide this Launch action? dialog by
  configuring the deep link URL with a security key.

# Hide Deep Linking Security Dialog

Each time a user opens a deep link to an action from the Field Service mobile app, a security dialog prompts the user to confirm the action. You can hide this Launch action? dialog by configuring the deep link URL with a security key.

![Launch Action dialog](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Ffsl_dev_deep_linking.png&folder=field_service_dev)

Complete these steps to configure the security key.

**Step 1: Create a private and public key**

1.  For Linux/Mac, run these commands in the terminal to create a private and public key. The .pem key files are created in the folder where you execute the commands.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

    #### Note

    We don’t officially support Apex for signing the keys, but if you’re signing deep links in Apex, try using the ECDSA-SHA256 algorithm.

    ```

    ```

2.  Keep a copy of the private.pem and public.pem files so that you can sign URLs in the future without generating new key pairs. The private.pem file contains the security key.
3.  Open the public.pem file, and copy the public key, excluding the header and footer and without spaces or a new line. Here’s a sample public key.

    ```

    ```

4.  Copy the public key into the Advanced Permissions section of the Field Service Settings UI. This step is required to turn on this feature.

    ![Advanced Permissions in the Field Service Settings UI](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Ffsl_dev_advancedpermissions.png&folder=field_service_dev)


**Step 2: Sign the deep link URL**

1.  In the terminal, change the directory to the folder containing the private.pem file.
2.  Generate the deep link URL, and copy it to your clipboard.

    ```

    ```

3.  To create a signature using the private key, run this command.

    ```

    ```

    The command creates a signature using OpenSSL and Base64 encoding. Here’s a breakdown of the command parts.

    -   The pbpaste command pastes from the pasteboard.
    -   The openssl dgst command creates a hash with the sha256 algorithm signed by the private key.
    -   The openssl command makes that the output base64 encoded.
    -   The tr command replaces "/+" characters with "\_-", and then deletes all "=" characters and new line characters “ ”.
    -   The pbcopy command copies the output back to the pasteboard.

    If you’re using a dynamic deep link URL, generate a new signature for each unique set of URL parameter values. The signature is unique for a URL string. For example, if the <id> parameter is dynamic, generate a new signature when the <id> value changes.

4.  Sign the deep link URL by adding the query parameter \_\_signature=<sig> to the end of the URL. Replace <sig> with the signature, which you can paste from your clipboard. If you have additional query parameters, place the signature parameter after them.

    ```

    ```


Now you can send the deep link URL with the signature as before. When the technician clicks the URL, the deep link opens in the Field Service app. The app verifies the signature using the public key. If the public key hash matches, the URL is loaded without the Launch action? dialog. If the public key hash doesn’t match, the user must confirm the action.

## Code Examples

```apex
openssl ecparam -genkey -name prime256v1 -noout -out private.pem
openssl ec -in private.pem -pubout -out public.pem
```

```
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEkvkDcFieJenYABN8wOLlE2VomNt2
9/tcTyj+B06ZndRkTjs7+XwrjHe/wOZvjkdYvewhIByLI6uDTYZixDhO1A==
```

```
// Base URL.
com.salesforce.fieldservice://v1/sObject/<id>/<action>

// URL with additional query parameters.
com.salesforce.fieldservice://v1/sobject/<id>/<action>?param1=value1&param1=value2
```

```apex
pbpaste | openssl dgst -sha256 -sign private.pem | openssl base64 | tr '/+' '_-' | tr -d '=' | tr -d '
' | pbcopy
```

```
// Signed URL.
com.salesforce.fieldservice://v1/sObject/<id>/<action>?__signature=<sig>

// Signed URL with additional query parameters.
com.salesforce.fieldservice://v1/sobject/<id>/<action>?param1=value1&param1=value2&__signature=<sig>
```
