---
title: "Introducing the Salesforce Shield Platform Encryption REST API"
domain: platform-encryption-rest-api-guide
topic: introducing-the-salesforce-shield-platform-encryption-rest-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.660Z
estimatedTokens: 2525
keywords: [Introducing, Salesforce, Shield, Platform, Encryption, REST, API, bring, own, key, BYOK, —that, control, tenant, secrets]
---

# Introducing the Salesforce Shield Platform Encryption REST API

> The Salesforce Shield Platform Encryption API enables you to bring your own key
        (BYOK)—that is, to control your own tenant secrets on your own premises. Use the
        POST, GET, and PUT operations to create your tenant secrets, import them into Salesforce,
        and rotate them as needed. The Encryption REST API is available in API versions 38.0 and
        later.

# Introducing the Salesforce Shield Platform Encryption REST API

The Salesforce Shield Platform Encryption API enables you to bring your own key (BYOK)—that is, to control your own tenant secrets on your own premises. Use the POST, GET, and PUT operations to create your tenant secrets, import them into Salesforce, and rotate them as needed. The Encryption REST API is available in API versions 38.0 and later.

The API provides powerful and simple web services for interacting with Lightning Platform. This API is customized for use with Shield Platform Encryption features and gives you easy access to the special objects and functionality it provides.

## Getting Started

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_encryption_rest_api_guide)

#### Note

If you plan to work with many records, you may also need the Bulk API. Using Bulk API 2.0 or Bulk API requires basic familiarity with software development, web services, and the Salesforce user interface. Because both Bulk APIs are asynchronous, Salesforce doesn’t guarantee a service level agreement.

To get set up to use the Salesforce REST API, see the [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/intro_rest.htm "HTML (New Window)"). The guide explains the API’s characteristics and architecture and how to set up your development environment.

Run some sample REST requests in your development org to learn the API basics. Trying out the examples now makes it easier to build your applications later.

Start with a development platform with authorization set up on it. The REST API client needs a valid sessionId to use. If you don’t have a platform, see the [REST API Developers Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/ "HTML (New Window)") for information about creating one.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_encryption_rest_api_guide)

#### Note

To use the encryption API calls, you must have the Manage Encryption Keys permission and have Shield Platform Encryption enabled in your org. If you don’t have both, nothing is returned.

The Encryption API isn’t part of the regular Lightning Platform REST API. It’s available with the Salesforce Shield or Shield Platform Encryption add-on licenses.

#### See Also

-   [Authorization Through Connected Apps and OAuth 2.0](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/intro_understanding_authentication.htm)


## Use the Platform Encryption API

Use the Platform Encryption API to manage tenant secrets. You can complete most key management and auditing tasks via the API that you can do in the user interface.

### Set Up Your REST Client

To work through these examples, we'll use Python to prepare a Simple Salesforce REST API client.

To initialize a Simple Salesforce REST API client named sf, use this sample code to create a Salesforce instance called sf.

```

```

Now you can use the Salesforce instance sf to issue REST API calls, like this:

```

```

Or you can use the equivalent calls provided by the Simple Salesforce module, like this:

```

```

### Create a Tenant Secret

Use the POST method to create a tenant secret. Usually, you can create one tenant secret every 24 hours in production orgs, and once every 4 hours in sandbox orgs. You can generate tenant secrets for the Search Index and Event Bus types once every 7 days.

-   Use the POST method to create a tenant secret, using the TenantSecret specific URL.

    ```

    ```

-   To generate a new tenant secret, use a REST POST command, without parameters.

    ```

    ```

-   Or use the Simple Salesforce equivalent.

    ```

    ```

    Tenant secrets default to the Data in Salesforce type. Tenant secrets of this type encrypt data in fields, attachments, and files other than search index files. Specify a Type other than Data if you want to use a different type of tenant secret. For more information, see [https://help.salesforce.com/s/articleView?id=xcloud.security\_pe\_ts\_types.htm&type=5](https://help.salesforce.com/s/articleView?id=xcloud.security_pe_ts_types.htm&type=5&language=en_US) in Salesforce Help or the [TenantSecret](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_tenantsecret.htm#!) entry in the API Object Reference Guide.


The complete response contains an ordered dictionary that looks like this:

```

```

You can also use the POST method to create a callout connection that fetches a cache-only key tenant secret from a key service outside of Salesforce.

-   Make sure that Bring Your Own Key (BYOK) is enabled in your org. Then turn on Allow Cache-Only Keys with BYOK from the Advanced Settings page in Setup.
-   Create a certificate that’s compatible with customer-supplied key material. See [Generate a BYOK-Compatible Certificate](https://help.salesforce.com/s/articleView?id=xcloud.security_pe_byok_generate_cert.htm&type=5&language=en_US) in Salesforce Help.
-   [Create and assemble your key material](https://help.salesforce.com/s/articleView?id=xcloud.security_pe_byok_cache_create.htm&type=5&language=en_US).
-   Create a named credential to serve as your authenticated callout mechanism. You can define your named credential through Setup or directly with Apex. Specify a BYOK-compatible certificate and an HTTPS endpoint.
-   Configure the connection to your remote key service. This connection uses a named credential and its associated certificate to fetch a specified cache-only key tenant secret.

    ```

    ```


### Upload a Tenant Secret

Use the POST method to upload a tenant secret to your org.

1.  Find your tenant secret's encrypted form, hash and the name of the BYOK-specific certificate name used to encrypt the plain text form of the original tenant secret.

    (The original tenant secret is never sent to Salesforce.)

    Here's a sample of code you might use to get this information.

    ```

    ```

2.  Upload your tenant secret by sending a POST call specifying the encrypted secret, secret hash, and certificate name.

    ```

    ```


The actual parameters for this create request will look like this:

```

```

### Retrieve a Tenant Secret

Use the GET method to read information about a tenant secret that's been uploaded to your org.

Retrieve all the available information about your tenant secret by sending a GET command specifying the tenant secret ID.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=platform_encryption_rest_api_guide)

#### Tip

A tenant secret ID looks like this: u'02G41000000HLXrEAO'

```

```

All attributes of the tenant secret are returned in a JSON dictionary that looks like this:

```

```

### Export a Tenant Secret

Use the GET method to export a tenant secret to a file.

1.  Export your tenant secret by sending a GET command specifying the ID of the secret and the secret value, in its encrypted form.

    ```

    ```

    The secret is written out to a file that looks like this:

    ```

    ```

2.  Save this in case you want to re-import your secret.

    ```

    ```


### Destroy a Tenant Secret

You can use the PATCH method to destroy a tenant secret when you are certain you don’t need it.

(Technically, you can't really destroy a tenant secret. Instead, you update it with an empty value or change its status.)

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=platform_encryption_rest_api_guide)

#### Important

After you destroy a tenant secret, related data is not accessible unless you reimport a previously exported secret.

In version 43.0 and earlier, destroy a tenant secret by passing in the SecretValue with an empty string.

```

```

In version 44.0 and later, destroy a tenant secret by passing in the new Status value instead of a SecretValue.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_encryption_rest_api_guide)

#### Note

You can change a Salesforce-generated or customer-supplied tenant secret’s Status from Archived to Destroyed or Destroyed to Archived.

In version 44.0 and later, you can change the Status of the most recent version of a cache-only key tenant secret from Destroyed to Active or Active to Destroyed. For example, if you have two versions of a cache-only key tenant secret, you can update version 2 but not version 1.

The secret is destroyed, but its hash is preserved to support validation in case you need to reimport a copy of the secret.

### Import a Tenant Secret

You can reimport an HSM or customer-supplied tenant secret that you have exported using the PATCH method. If you use the Cache-Only Key Service, you can reactivate a cache-only key tenant secret instead of importing it.

1.  In API version 43.0 and earlier, import an HSM or customer-supplied tenant secret by passing in the SecretValue with the string you saved when you exported the tenant secret.

    ```

    ```

    In API version 44.0 and later, import an HSM or customer-supplied tenant secret by passing in the new Status along with the SecretValue.

    ```

    ```

    You can’t import cache-only tenant secrets, but you can reactivate them. To reactivate a cache-only key tenant secret, update its Status without referencing the SecretValue.

    ```

    ```

    You can reactivate cache-only tenant secret in versions 44.0 and later.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_encryption_rest_api_guide)

    #### Note

    You can change a Salesforce-generated or customer-supplied tenant secret’s Status from Archived to Destroyed or Destroyed to Archived.

    In version 44.0 and later, you can change the Status of the most recent version of a cache-only key tenant secret from Destroyed to Active or Active to Destroyed. For example, if you have two versions of a cache-only key tenant secret, you can update version 2 but not version 1.

## Code Examples

```
from simple_salesforce import Salesforce
URL ='https://{SF_SERVER}/services/Soap/u/37.0'
sf = Salesforce(session_id={sessionId}, instance_url=URL, version='44.0')
```

```
sf.restful({TS_URL}, {request_params}, method = ‘GET’|'POST'|’PATCH’|’DELETE’)
```

```
sf.TenantSecret.[get|create|update]({parameters})
```

```
# extract TenantSecret endpoint URL, e.g. 
# https://myorg.salesforce.com/services/data/v44.0/sobjects/TenantSecret/
TS_URL = sf.TenantSecret.base_url
```

```
sf.restful(TS_URL, {}, method = 'POST')
```
