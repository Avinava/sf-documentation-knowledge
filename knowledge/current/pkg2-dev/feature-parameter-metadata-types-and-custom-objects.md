---
title: "Feature Parameter Metadata Types and Custom Objects"
domain: pkg2-dev
topic: feature-parameter-metadata-types-and-custom-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.056Z
estimatedTokens: 649
keywords: [Feature, Metadata, Custom, Objects, represented, API, package, records, LMO, hidden, subscriber’s, org, Lifecycle]
---

# Feature Parameter Metadata Types and Custom Objects

> Feature parameters are represented as Metadata API types in your package metadata, as
  records of custom objects in your LMO, and as hidden records in your subscriber’s org.

# Feature Parameter Metadata Types and Custom Objects

Feature parameters are represented as Metadata API types in your package metadata, as records of custom objects in your LMO, and as hidden records in your subscriber’s org.

## Feature Parameter Fields

Feature parameters are represented as Metadata API types and store boolean, integer, or date values.

The first time a subscriber installs your package, a FeatureParameter\_\_c record is created in your LMO for each feature parameter. The feature parameter records include these fields:

-   FullName\_\_c
-   DataType\_\_c (Boolean, Integer, or Date)
-   DataFlowDirection\_\_c
-   Package\_\_c
-   IntroducedInPackageVersion\_\_c
-   Namespace\_Prefix\_\_c

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

After a feature parameter is included and released in the package version, the data flow direction can’t be changed.

## Lifecycle of a Feature Parameter

Set Up the Feature Parameter

Start by defining your feature parameter in an XML file. [Create one XML file](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_fma_create_feature_parameters.htm "To create a feature parameter for a 2GP managed package, create an individual XML file. Here are details on the file naming convention, folder structure, and the attributes you use when creating feature parameters.") for each feature parameter.

Depending on how you’re using the feature parameter, you’ll also write code that enables you to check access rights or collect usage information after the parameter is set up.

Subscriber Installs Your Managed Package

When a subscriber installs or upgrades your package in their org, a FeatureParameter\_\_c record for each feature parameter is created in the LMO. If these records were created during a previous installation or upgrade, this step is skipped.

During package installation, junction object records are created in both the subscriber org and your LMO. A junction object is a custom object with two master-detail relationships. In this case, the relationships are between FeatureParameter\_\_c and License\_\_c in the LMO. These records store the value of their associated feature parameter for the subscriber org.

Utilize Your Feature Parameters

Use the junction objects to override the feature parameters’ default values or to collect data. Depending on the value of each feature parameter’s DataFlowDirection\_\_c field, data flows to the subscriber org (from the LMO) or to the LMO (from the subscriber org). That data is stored in the junction object records.

## Related Topics

- Create one XML file (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_fma_create_feature_parameters.htm)
