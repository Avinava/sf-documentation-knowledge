---
title: "Create Feature Parameters for Your Second-Generation Managed Package"
domain: pkg2-dev
topic: create-feature-parameters-for-your-second-generation-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.049Z
estimatedTokens: 691
keywords: [Feature, Second-Generation, Managed, Package, 2GP, individual, XML, file, naming, convention, folder, structure, attributes, creating]
---

# Create Feature Parameters for Your Second-Generation Managed Package

> To create a feature parameter for a 2GP managed package, create an individual XML file.
    Here are details on the file naming convention, folder structure, and the attributes you use
    when creating feature parameters.

# Create Feature Parameters for Your Second-Generation Managed Package

To create a feature parameter for a 2GP managed package, create an individual XML file. Here are details on the file naming convention, folder structure, and the attributes you use when creating feature parameters.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Feature parameters for managed 1GP packages are created in the packaging org’s UI, see [Create Feature Parameters in Your Packaging Org](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_create_feature_parameters.htm) in the First-Generation Managed Packaging Developer Guide for details.

A package can include up to 200 feature parameters.

Folder Structure

Feature parameters are stored as files in your Salesforce DX project folder.

Under the root force-app folder, create a folder and name it featureParameters. Store your feature parameter files in the feature parameters folder. Each feature parameter you create must have its own separate file.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

It’s not possible to create feature parameters using a scratch org’s user interface.

File Naming Convention

The naming format for feature parameter files is <name>.featureParameter<type>-meta.xml.

The name is the API name of the feature parameter.

The type is the feature parameter type. Feature parameters can be booleans, integers, or dates.

| Type | File Name Format |
| --- | --- |
| Boolean | .featureParameterBoolean-meta.xml |
| Date | .featureParameterDate-meta.xml |
| Integer | .featureParameterInteger-meta.xml |

Feature Parameter Attributes

Feature parameters include these three fields.

| Field Name | Description |
| --- | --- |
| dataflowDirection | Indicates which direction this parameter is transferring data.Each feature parameter value gets transferred in one of two directions:From your LMO to a subscriber org (LmoToSubscriber)From a subscriber org to your LMO (SubscriberToLmo) |
| masterLabel | The label of the feature parameter. This label displays in the app. |
| value | The value of the feature parameter. Booleans, integers, and dates are all valid values. Integer values can’t exceed nine digits. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

After a feature parameter is included and released in the package version, the data flow direction can’t be changed.

Examples of Feature Parameter file

**AdvancedPricingEnabled.featureParameterBoolean-meta.xml**

```

```

**NumberofLedgers.featureParameterInteger-meta.xml**

```

```

**ProjectActivationDate.featureParameterDate-meta.xml**

```

```

## Code Examples

```
<FeatureParameterBoolean xmlns="http://soap.sforce.com/2006/04/metadata">
    <dataflowDirection>SubscriberToLmo</dataflowDirection>
    <masterLabel>Advanced Pricing Enabled</masterLabel>
    <value>true</value>
</FeatureParameterBoolean>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<FeatureParameterInteger xmlns="http://soap.sforce.com/2006/04/metadata">
    <dataflowDirection>SubscriberToLmo</dataflowDirection>
    <masterLabel>Number of Ledgers</masterLabel>
    <value>7</value>
</FeatureParameterInteger>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<FeatureParameterDate xmlns="http://soap.sforce.com/2006/04/metadata">
    <dataflowDirection>LmoToSubscriber</dataflowDirection>
    <masterLabel>Date of Activation of the Project</masterLabel>
    <value>2020-01-25</value>
</FeatureParameterDate>
```
