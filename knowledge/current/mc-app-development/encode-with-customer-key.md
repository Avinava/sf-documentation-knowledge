---
title: "Encode with Customer Key"
domain: mc-app-development
topic: encode-with-customer-key
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:21.305Z
estimatedTokens: 972
keywords: [Encode, Customer, Key, Convert, Salt, keys, hexidecimal, e.g, Hello, world, becomes, 0x48656c6c6f20776f726c64, save, encryption, unix-like, systems, pipe, command, xxd, add, leading, How, JWT, Activity, Decode, Sample, Journey, Items]
---

> Convert Salt keys to hexidecimal in the 0x... format (e.g. Hello world becomes 0x48656c6c6f20776f726c64), and save that value in the Salt encryption field. On unix-like systems you can pipe your value into the command xxd -p then just add the leading 0x.

# Encode with Customer Key

## How to Get a JWT

1.  To get a JWT, create an External Key in Marketing Cloud
2.  Select **Salt** for the Encryption Type. This is the only recommended encryption type for Journey Builder.
3.  When creating the **External Key**, only use characters from the lower ASCII set (space through tilde).
4.  Enter the hexidecimal salt into the **Salt** field.

Convert Salt keys to hexidecimal in the 0x... format (e.g. Hello world becomes 0x48656c6c6f20776f726c64), and save that value in the Salt encryption field. On unix-like systems you can pipe your value into the command xxd -p then just add the leading 0x.

## How to Add a JWT to an Activity

When "useJwt": true in the activity's arguments, the External Key is required and is passed in to the customerKey string. If your application is only registered for a single stack, and you wish to use your application's signature as the signing key, then customerKey is optional.

Within your activity, for each call (save, validate, publish, execute) for which you wish to receive a JWT.

-   Set "useJwt": true
-   Set "customerKey": "your-encryption-customer-key-here"

## How to Decode a JWT

For Salt keys, use the original set of bytes (prior to conversion to hexidecimal). Pass the JWT and the key (the original bytes, not hex encoded) into your HS256 JWT validation library.

## Sample Journey

```
var ixn = {
    "id": "...",
    "key": "...",
    "name": "My journey",
    "version": 1,
    "workflowApiVersion": 1,
    "activities": [
        {
            "key": "REST-1",
            "name": "Custom REST Activity",
            "type": "REST",
            "outcomes": [
                {
                    "next": null
                }
            ],
            "arguments": {
                "execute": {
                    "inArguments": [
                        {
                            "message": "someMessage"
                        }
                    ],
                    "outArguments": [],
                    "url": "https://example.com/post.php?dir=et_rest_activity_execute",
                    "body": "{email-body}",
                    "header": "",
                    "useJwt": true,
                    "customerKey": "your-encryption-customer-key-here",
                    "timeout": 10000
                }
            },
            "configurationArguments": {
                "save": {
                    "url": "https://example.com/post.php?dir=et_rest_activity_save",
                    "body": "",
                    "header": "",
                    "useJwt": true,
                    "customerKey": "your-encryption-customer-key-here"
                },
                "validate": {
                    "url": "https://example.com/post.php?dir=et_rest_activity_validate",
                    "body": "",
                    "header": "",
                    "useJwt": true,
                    "customerKey": "your-encryption-customer-key-here"
                },
                "publish": {
                    "url": "https://example.com/post.php?dir=et_rest_activity_publish",
                    "body": "",
                    "header": "",
                    "useJwt": true,
                    "customerKey": "your-encryption-customer-key-here"
                }
            },
            "metaData": {
                "isConfigured": true
            }
        }
    ],
    "triggers": [],
    "goals": [],
    "entryMode": "SingleEntryAcrossAllVersions",
    "executionMode": "Production",
    "status": "Draft"
};
```

## Related Items

-   [Create an External Key in Marketing Cloud](http://help.marketingcloud.com/en/documentation/exacttarget/admin/encryption_key_management/)
-   [Encode with JWT Signing Secret](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/encode-custom-activities-using-jwt-app-signature.htm)

## Related Topics

- Encode with JWT Signing Secret (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/encode-custom-activities-using-jwt-app-signature.htm)
