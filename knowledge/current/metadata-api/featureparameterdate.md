---
title: "FeatureParameterDate"
domain: metadata-api
topic: featureparameterdate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:39.411Z
estimatedTokens: 839
keywords: [FeatureParameterDate, date, feature, Management, App, FMA, let, drive, behavior, track, activation, metrics, subscriber, orgs, install]
---

# FeatureParameterDate

> Represents a date feature parameter in the Feature Management App (FMA). Feature
      parameters let you drive app behavior and track activation metrics in subscriber orgs that
      install your package.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# FeatureParameterDate

Represents a date feature parameter in the Feature Management App (FMA). Feature parameters let you drive app behavior and track activation metrics in subscriber orgs that install your package. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

FeatureParameterDate components have the suffix .featureParameterDate. The components are stored in the featureParameters folder, which contains components for all the feature parameter metadata types.

## Version

FeatureParameterDate components are available in API version 41.0 and later.

## Special Access Rules

Available to package developers who have access to the Feature Management App (FMA). For details, see [Manage Features](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/fma_manage_features.htm "HTML (New Window)") in the Second-Generation Managed Packaging Developer Guide.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| dataFlowDirection | FeatureParameterDataFlowDirection | After a package containing the components is installed, indicates whether the feature parameter’s value is editable in your License Management Org (LMO) and read-only in your customer’s org or the other way around. |
| masterLabel | string | The feature parameter name that appears in the user interface. |
| value | date | The default value for this feature parameter. You can reference this value in your code, just like you reference other values in a subscriber’s org. |

## FeatureParameterDataFlowDirection

Represents the direction of the data flow between your License Management Org (LMO) and the customer’s org.

| Field Name | Field Type | Description |
| --- | --- | --- |
| FeatureParameterDataFlowDirection | string | After a package containing the components is installed, indicates whether the feature parameter’s value is editable in your License Management Org (LMO) and read-only in your customer’s org or the other way around. Valid values are:LmoToSubscriberSubscriberToLmo |

## Declarative Metadata Sample Definition

The following is an example of a FeatureParameterDate component.

```

```

The following is an example package.xml that references the previous definition (and the definitions for the other feature parameter types).

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<FeatureParameterDate xmlns="http://soap.sforce.com/2006/04/metadata">
    <dataflowDirection>SubscriberToLmo</dataflowDirection>
    <masterLabel>Activation Date</masterLabel>
    <value>2017-10-23</value>
</FeatureParameterDate>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>FeatureParameterBoolean</name>
    </types>
    <types>
        <members>*</members>
        <name>FeatureParameterDate</name>
    </types>
    <types>
        <members>*</members>
        <name>FeatureParameterInteger</name>
    </types>
    <version>41.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
