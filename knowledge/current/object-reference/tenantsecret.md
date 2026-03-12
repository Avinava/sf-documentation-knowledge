---
title: "TenantSecret"
domain: object-reference
topic: tenantsecret
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.825Z
estimatedTokens: 2519
keywords: [TenantSecret, stores, encrypted, organization-specific, key, fragment, that’s, primary, secret, KDF, seed, produce, org-specific, data, encryption]
---

# TenantSecret

> This object stores an encrypted organization-specific key fragment
         that’s used with the primary secret (KDF seed) to produce org-specific data encryption
         keys. This object is available in API version 34.0 and later.

# TenantSecret

This object stores an encrypted organization-specific key fragment that’s used with the primary secret (KDF seed) to produce org-specific data encryption keys. This object is available in API version 34.0 and later.

You can rotate tenant secrets of the Data type once every four hours in a sandbox org or every 24 hours in production orgs. You can rotate tenant secrets of the SearchIndex type one time every seven days.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This information is about Shield Platform Encryption and not Classic Encryption.

## Supported Calls

create(), query(), retrieve(), update()

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the tenant secret. |
| KeyDerivationMode | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe key derivation mode applied to customer-supplied key material. Modes are:PBKDF2The customer-supplied key material is used by the Shield KMS to create a derived data encryption key.NONEThe customer-supplied key material is used by the Shield KMS as the final data encryption key to directly encrypt and decrypt data.Available in API version 43.0 and later. |
| RemoteKeyCertificate | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the certificate whose public key is used to encrypt the SecretValue during a remote key callout.Available in API version 45.0 and later. |
| RemoteKeyIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionA unique key identifier for key material fetched from a remote key service.Available in API version 45.0 and later. |
| RemoteKeyServiceID | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe named credential used to fetch remote key material from a remote key service.Available in API version 45.0 and later. |
| SecretValue | Typebase64PropertiesCreate, Nillable, UpdateDescriptionThe encrypted 256-bit secret value encoded in base64. |
| SecretValueCertificate | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe certificate needed to upload a customer-supplied tenant secret. Each certificate has a unique name. |
| SecretValueHash | Typebase64PropertiesCreateDescriptionThe matching tenant secret hash for an uploaded customer-supplied tenant secret. |
| Source | TypepicklistPropertiesCreate, Default on create, Filter, Group, Restricted picklist, SortDescriptionThe source of the encryption key material. Values are:HSMA Salesforce-generated tenant secret.UploadedA customer-supplied tenant secret or data encryption key.RemoteA tenant secret or data encryption key fetched from a key service outside of Salesforce. Available in API version 44.0 and later.Tenant secrets with a Source value of Remote are listed as Fetched on the Key Management page in Setup.Available in API version 43.0 and later. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the tenant secret. Values are:ActiveCan be used to encrypt and decrypt new or existing data.ArchivedCan’t encrypt new data. Can be used to decrypt data previously encrypted with this key when it was active.DestroyedCan’t encrypt or decrypt data. Data encrypted with this key when it was active can no longer be decrypted. Files and attachments encrypted with this key can no longer be downloaded.You can update the Status field through the API in versions 44.0 or later. |
| Type | TypepicklistPropertiesCreate, Default on create, Filter, Group, Restricted picklist, SortDescriptionThe type of tenant secret. The Type field is available in API version 39.0 and later. The following values appear in the Type picklist:Analytics—CRM Analytics data (available in API version 39.0 and later).Data—data stored in the Salesforce database. Includes data in encrypted fields, files, and attachments but not search index files. Tenant secrets created in API version 34.0 and later default to the Data type.Database—transactional database including standard and custom fields, metadata, and Apex (available in API version 62.0 and later).DeterministicData—data stored in the Salesforce database. Includes data in encrypted fields, files, and attachments, but not search index files (available in API version 39.0 and later).EventBus—Change Data Capture event data (available in API version 43.0 and later).SearchIndex—search index files (available in API version 39.0 and later).For Hyperforce orgs on API version 63.0 and later, create secrets of type SearchIndex with the DataEncryptionKey object. For Hyperforce orgs on API version 62.0 and earlier, and for all non-Hyperforce orgs, create secrets of type SearchIndex with the TenantSecret object. |
| Version | TypeintPropertiesFilter, Group, idLookup, SortDescriptionThe version number of this secret. The version number is unique within your org. |

## Usage

Use this object to create or update an org-specific tenant secret or customer-supplied key material.

Use your preferred developer environment to run the examples. Use the Salesforce developer [Introduction to REST API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/intro_rest.htm) for basic information on making REST calls into Salesforce. Also, the video [How To Use Salesforce APIs Collection With Postman](https://www.youtube.com/watch?v=DJ7_iW2B5tA) by Sudipta Deb provides step by step instructions on getting started using REST with Salesforce.

## Example 1:

Build an automated tenant secret creation and activation solution similar to the following.

1.  Start by creating an Apex class to create the tenant secret. Specify the value of the tenant secret to encrypt data of a particular type.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

    #### Note

    Type is available in API version 39.0 and later. Type is optional; all tenant secrets default to the Data type.

2.  Schedule the Apex class to run at the specified interval.

    This Apex code only needs to be run a single time to schedule the job. This code runs the job every 90 days.

    ```

    ```

3.  Validate that the job is scheduled.
4.  Validate that tenant secrets are created after the job is run.

## Example 2

Upload a customer-supplied tenant secret.

1.  Create a certificate that’s compatible with customer-supplied key material. See [Generate a BYOK-Compatible Certificate](https://help.salesforce.com/articleView?id=security_pe_byok_generate_cert.htm&language=en_US) in Salesforce Help.
2.  Then upload your matching key material and key material hash. Include the unique name of the compatible certificate. The key material is uploaded in encrypted form.

    ```

    ```

    You can use this [script to generate a customer-supplied tenant secret](https://help.salesforce.com/s/articleView?id=xcloud.security_pe_byok_script.htm&type=5&language=en_US) and tenant secret hash.

3.  Validate that the key material is uploaded.

## Example 3

Opt out of key derivation on a key-by-key basis when you upload key material. When you upload your key material, specify 'Source':Uploaded and 'KeyDerivationMode':'NONE', and set non-null values for the SecretValueCertificate, SecretValue, and SecretValueHash.

## Example 4

Import a tenant secret of the Data type.

```

```

## Example 5

Export a tenant secret by writing the secret.SecretValue to a file. Here’s an example that uses a tenant secret of the Data type.

```

```

## Example 6

Destroy a tenant secret of the Data type.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=object_reference)

#### Warning

Your tenant secret is unique to your organization and to the specific data to which it applies. When you destroy a tenant secret, related data isn’t accessible unless you previously exported the key and then import the key back into Salesforce.

```

```

## Example 7

Change the Status of a tenant secret from Archived to Destroyed. Include the SecretValue and new tenant secret Status.

```

```

Cache-Only Key Service customers can change the Status of cache-only key tenant secrets. For example, reactivate a cache-only key by changing its Status from Destroyed to Active.

## Example 8

Create a callout connection that fetches a cache-only key tenant secret from a key service outside of Salesforce.

1.  Make sure that your org has at least one active Data in Salesforce key, either Salesforce-generated or customer-supplied. Then turn on Allow Cache-Only Keys with BYOK from the Advanced Settings page in Setup.
2.  Create a certificate that’s compatible with customer-supplied key material. See [Generate a BYOK-Compatible Certificate](https://help.salesforce.com/articleView?id=security_pe_byok_generate_cert.htm&language=en_US) in Salesforce Help.
3.  [Create and assemble your key material](https://help.salesforce.com/articleView?id=security_pe_byok_cache_create.htm&language=en_US).
4.  Create a named credential to serve as your authenticated callout mechanism. You can define your named credential through Setup or [directly with Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_named_credentials.htm). Specify a BYOK-compatible certificate and an HTTPS endpoint.
5.  Configure the connection to your remote key service. This connection uses a named credential and its associated certificate to fetch a specified cache-only key tenant secret.

    ```

    ```


#### See Also

-   [System Fields](atlas.en-us.object_reference.meta/object_reference/system_fields.htm "System fields are read-only fields found on most objects. These fields are automatically updated during API operations. For example, the ID field is automatically generated during a create operation and the LastModifiedDate is automatically updated when a user modifies a record.")

## Code Examples

```apex
global class CreateNewSecret implements Schedulable {
   global void execute(SchedulableContext SC) {
      TenantSecret secret = new TenantSecret ();
      secret.description = 'Created new secret from scheduled job';
      secret.type= 'Database';
      insert secret;
   }
}
```

```
CreateNewSecret secret = new CreateNewSecret();
String schedule = '0 0 0 1 JAN,APR,JUL,OCT ?';
String jobID = system.schedule('Automated secret creation and activation', schedule, secret);
```

```
TenantSecret secret = new TenantSecret ();
      secret.description = 'New uploaded secret';
      secret.type= 'Data';
      secret.SecretValue = ...
      EncodingUtil.base64Decode('...');;
      secret.SecretValueCertificate = ...;
      secret.SecretValueHash = ...
      EncodingUtil.base64Decode('...');
      insert secret;
```

```
TenantSecret secret = [SELECT Id FROM TenantSecret WHERE Type = 'Data' AND Version = 2];
secret.SecretValue = "<previously_exported_secret_as_a_String>";
update secret;
```

```
TenantSecret secret = [SELECT SecretValue FROM TenantSecret WHERE Type = 'Data' AND Version = 2];
secret.SecretValue =...;
update secret;
```

## Related Topics

- DataEncryptionKey (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dataencryptionkey.htm)
- System Fields (atlas.en-us.object_reference.meta/object_reference/system_fields.htm)
