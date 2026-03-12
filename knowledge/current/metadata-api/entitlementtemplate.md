---
title: "EntitlementTemplate"
domain: metadata-api
topic: entitlementtemplate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:38.989Z
estimatedTokens: 615
keywords: [EntitlementTemplate, entitlement, template, templates, predefined, terms, customer, support, quickly, add, products, Web, phone, users, easily]
---

# EntitlementTemplate

> Represents an entitlement template.
            Entitlement templates are predefined terms of customer support that you can quickly add
            to products. For example, you can create entitlement templates for Web or phone support
            so that users can easily add entitlements to products offered to
        customers.

# EntitlementTemplate

Represents an entitlement template. Entitlement templates are predefined terms of customer support that you can quickly add to products. For example, you can create entitlement templates for Web or phone support so that users can easily add entitlements to products offered to customers.

EntitlementTemplate extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## Declarative Metadata File Suffix and Directory Location

EntitlementTemplate components are stored in the entitlementTemplates directory of the corresponding package directory. The file name matches the unique name of the entitlement template, and the extension is .entitlementTemplate.

## Version

Lightning Platform EntitlementTemplate components are available in API version 18.0 and higher.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| businessHours | string | The entitlement's supported business hours. |
| casesPerEntitlement | int | The total number of cases the entitlement supports. |
| entitlementProcess | string | The entitlement process associated with the entitlement. Entitlement processes are timelines that include all the steps (milestones) that your support team must complete to resolve cases. Each process includes logic to determine how to enforce the correct service level for your customers. |
| isPerIncident | boolean | true if entitlements created from this template service a limited number of cases; false otherwise. |
| term | int | The number of days the entitlement is in effect. |
| type | string | The type of entitlement, such as Web or phone support. |

## Declarative Metadata Sample Definition

A sample XML definition of an entitlement template is shown below.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EntitlementTemplate xmlns="http://soap.sforce.com/2006/04/metadata">
    <businessHours>AlternateBusinessHours</businessHours>
    <casesPerEntitlement>12</casesPerEntitlement>
    <entitlementProcess>Process1</entitlementProcess>
    <isPerIncident>true</isPerIncident>
    <term>33</term>
    <type>Phone Support</type>
</EntitlementTemplate>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
