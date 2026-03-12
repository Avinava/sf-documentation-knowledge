---
title: "PaymentGatewayProvider"
domain: metadata-api
topic: paymentgatewayprovider
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.666Z
estimatedTokens: 614
keywords: [PaymentGatewayProvider, Represents, metadata, associated, payment, gateway, provider., extends, Metadata, inherits, its, fullName, field., Important, File, Suffix, Directory, Location, Version, Special]
---

# PaymentGatewayProvider

> Represents the metadata associated with a payment
      gateway provider. This type extends the Metadata metadata type and inherits its
                        fullName field.

# PaymentGatewayProvider

Represents the metadata associated with a payment gateway provider. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

PaymentGatewayProvider components have the suffix paymentGatewayProvider and are stored in the paymentGatewayProviders folder.

## Version

PaymentGatewayProvider components are available in API version 48.0 and later.

## Special Access Rules

To access PaymentGatewayProvider, you must have a Salesforce Order Management license with the PaymentPlatform org permission activated.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| apexAdapter | string | The Apex adapter class name for your payment gateway. This field is unique within your organization. |
| comments | string | Users can add comments to provide additional details about a record. Maximum of 1000 characters. |
| idempotencySupported | IdempotencySupportStatus (enumeration of type String) | Required. Defines whether the payment gateway ignores duplicate payment gateway calls (Yes) or whether it processes duplicate gateway calls (No).YesNo |
| masterLabel | string | Required. The label of this payment gateway provider record. |

## Declarative Metadata Sample Definition

The following is an example of a PaymentGatewayProvider component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<PaymentGatewayProvider xmlns="http://soap.sforce.com/2006/04/metadata">
    <apexAdapter>SalesforceAdapter</apexAdapter>
    <idempotencySupported>Yes</idempotencySupported>
    <masterLabel>SalesforceAdapter</masterLabel>
    <comments>Comments</comments>
</PaymentGatewayProvider>
```

```
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>PaymentGatewayProvider</name>
    </types>
    <version>48.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
