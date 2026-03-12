---
title: "ExternalEncryptionRootKey"
domain: object-reference
topic: externalencryptionrootkey
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.927Z
estimatedTokens: 1297
keywords: [ExternalEncryptionRootKey, metadata, root, keys, stored, third-party, key, stores, generate, secure, encrypt, Salesforce, data, API, version]
---

# ExternalEncryptionRootKey

> Represents metadata about root keys stored in third-party key stores
         that are used to generate and secure keys that encrypt Salesforce data. This object is
      available in API version 58.0 and later.

# ExternalEncryptionRootKey

Represents metadata about root keys stored in third-party key stores that are used to generate and secure keys that encrypt Salesforce data. This object is available in API version 58.0 and later.

Root keys are used to generate data encryption keys (DEKs) in Salesforce, which are in turn used to encrypt and decrypt data. Root keys are also used as wrapping keys to secure DEKs in the Salesforce database.

## Supported Calls

describeSObjects(), query(), update()

## Special Access Rules

This object is available as part of the Shield and Salesforce Platform Encryption add-on subscriptions. Access to this object also requires the Cache-Only Key Service add-on subscription.

## Fields

| Field | Details |
| --- | --- |
| ActivatedDate | TypedateTimePropertiesFilter, Nillable, Sort, UpdateDescriptionThe date the key was activated in Salesforce. |
| CreatedBy | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe email address of the user who created the root key. For example, user@example.com. |
| Description | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe user-defined description of the root key. |
| LastModifiedBy | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe email address of the user who most recently modified the key. For example, user@example.com. |
| Region | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe region for the customer managed key. For example, if the RootKeyService is AWS, the region is an Amazon Web Services (AWS) region such as us-east1. |
| RootKeyIdentifier | TypestringPropertiesFilter, Nillable, Sort, UpdateDescriptionThe unique key identifier from the external KMS, such as an AWS Amazon Resource Name (ARN). For example, arn:aws:kms:us-west-2:123456789000:key/123ab456-7cd8-9012-3e4f-5gh678i901j2 |
| RootKeyService | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe external key management service connected to Salesforce. For example, AWS. |
| Status | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe status of the key. This is the only value that can be changed using update(). You can only change the status from Active to Inactive, or from Inactive to Active.Possible values are:Activation Pending—Salesforce is waiting for confirmation of a valid key policy in the external key store.Active—Can be used to encrypt new DEKs and decrypt existing DEKs.Archived—Can’t encrypt new DEKs. Can be used to decrypt previously created DEKs.Canceled—Root key activation canceled by a user.Inactive—The root key, and the DEKs that it encrypts, are inaccessible. Inaccessible DEKs can’t be used to decrypt data, which renders that data also inaccessible.Unavailable—The root key, and the DEKs that it encrypts, cannot be accessed. The root key has been removed or deactivated by the managing KMS. |

## Usage

Three functions are available: describeSObjects(),query(), and update()

Use your preferred developer environment to run the examples. Use the Salesforce developer [Introduction to REST API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/intro_rest.htm) for basic information on making REST calls into Salesforce. Also, [Introducing the Salesforce Shield Platform Encryption REST API](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_encryption_rest_api_guide.meta/platform_encryption_rest_api_guide/api_rest_encryption.htm) gives you starter information on using REST to work with Shield Platform Encryption.

Describe an external root key with describeSObjects()

To get information about the ExternalEncryptionRootKey sObject, use describe.

curl --location 'https://DOMAIN.my.salesforce.com/services/data/v62.0/sobjects/'\\ ExternalEncryptionRootKey/describe' --header 'Content-Type: application/json' \\ --header 'Authorization: Bearer TOKEN'

On success, the response is the full JSON description of the ExternalEncryptionRootKey sObject.

Get info on an external root key with query()

To get information about a specific root key, use query on the ExternalEncryptionRootKey sObject. Use the Identifier value as listed on the Key Management Page for the root key Id in the WHERE clause.

curl --location 'https://DOMAIN.my.salesforce.com/services/data/v62.0/query?' \\ ?q=SELECT+FIELDS(ALL)+FROM+ExternalEncryptionRootKey+WHERE+Id='48q001t5ddzbucnAAA'+\\ --header 'Content-Type: application/json' \\ --header 'Authorization: Bearer TOKEN'

On success, the response is be similar to

```

```

Update Status on an external root key with update()

To update the status of an ExternalEncryptionRootKey from Active to Inactive, or from Inactive to Active, use PATCH on the specific key object. Use the vaule for Identifier as listed on the Key Management Page for the root key identifier.

curl --location --request PATCH 'https://DOMAIN.my.salesforce.com/services/data/v62.0/sobjects/ExternalEncryptionRootKey/ROOTKEYIDENTIFIER' \\ --header 'Content-Type: application/json' \\ --header 'Authorization: Bearer TOKEN'\\ --data '{ "Status": "Active" }'

On success, the response is be similar to I SEE NO RESPONSE.

## Code Examples

```
{
    "totalSize": 1,
    "done": true,
    "records": [
        {
            "attributes": {
                "type": "ExternalEncryptionRootKey",
                "url": "/services/data/v62.0/sobjects/ExternalEncryptionRootKey/48q001t5ddzbucnAAA"
            },
            "Id": "48q001t5ddzbucnAAA",
            "RootKeyIdentifier": "97ee8238-c5ac-4320-a2d0-a728aaefd567",
            "CreatedDate": "2024-08-05T17:32:11.841+0000",
            "CreatedBy": "charley.t.pulasky@wise-raccoon-od1ly6.com",
            "LastModifiedDate": "2025-02-12T18:36:11.063+0000",
            "LastModifiedBy": "charley.t.pulasky@wise-raccoon-od1ly6.com",
            "RootKeyService": "SF",
            "Region": "KEY REGION",
            "Status": "Active",
            "Description": null,
            "ActivatedDate": null
        }
    ]
}
```
