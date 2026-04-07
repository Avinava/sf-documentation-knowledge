---
title: "Encode with JWT Signing Secret"
domain: mc-app-development
topic: encode-with-jwt-signing-secret
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:26.019Z
estimatedTokens: 656
keywords: [Encode, JWT, Signing, Secret, Journey, Builder, uses, package, containing, activity, key, How, Add, Sample, Items]
---

# Encode with JWT Signing Secret

> Journey Builder uses the JWT Signing Secret from the package containing the activity as the default signing key for the JWT.

# Encode with JWT Signing Secret

## How to Get a JWT

Journey Builder uses the JWT Signing Secret from the package containing the activity as the default signing key for the JWT.

## How to Add a JWT to an Activity

Set "useJwt": true in the activity's arguments for each call (save, validate, publish, execute) for which you wish to receive a JWT. If you don't include a customerKey, Journey Builder uses the JWT Signing Secret to verify the JWT.

If you are using the External Key as the signing key, then customerKey is required.

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
                    "timeout": 10000
                }
            },
            "configurationArguments": {
                "save": {
                    "url": "https://example.com/post.php?dir=et_rest_activity_save",
                    "body": "",
                    "header": "",
                    "useJwt": true,
                },
                "validate": {
                    "url": "https://example.com/post.php?dir=et_rest_activity_validate",
                    "body": "",
                    "header": "",
                    "useJwt": true,
                },
                "publish": {
                    "url": "https://example.com/post.php?dir=et_rest_activity_publish",
                    "body": "",
                    "header": "",
                    "useJwt": true,
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

[Encode with Customer Key](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/encode-custom-activities-using-jwt-customer-key.htm)

## Related Topics

- Encode with Customer Key (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/encode-custom-activities-using-jwt-customer-key.htm)
