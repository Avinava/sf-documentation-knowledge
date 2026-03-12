---
title: "Feature Parameter Metadata Types and Custom Objects"
domain: pkg1-dev
topic: feature-parameter-metadata-types-and-custom-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.367Z
estimatedTokens: 533
keywords: [Feature, Metadata, Custom, Objects, represented, API, packaging, org, records, License, Management, hidden, subscriber’s, Lifecycle]
---

# Feature Parameter Metadata Types and Custom Objects

> Feature parameters are represented as Metadata API types in your packaging org, as
  records of custom objects in your License Management Org, and as hidden records in your
  subscriber’s org.

# Feature Parameter Metadata Types and Custom Objects

Feature parameters are represented as Metadata API types in your packaging org, as records of custom objects in your License Management Org, and as hidden records in your subscriber’s org.

## Feature Parameter Fields

Feature parameters are represented as Metadata API types and store boolean, integer, or date values.

The first time a subscriber installs your package, a FeatureParameter\_\_c record is created in your License Management Org (LMO) for each feature parameter. The feature parameter records include these fields:

-   FullName\_\_c
-   DataType\_\_c (Boolean, Integer, or Date)
-   DataFlowDirection\_\_c
-   Package\_\_c
-   IntroducedInPackageVersion\_\_c
-   Namespace\_Prefix\_\_c

## Lifecycle of a Feature Parameter

Set Up the Feature Parameter

Start by defining your feature parameter in the packaging org using the Feature Parameters tab on the Package detail page.

Depending on how you’re using the feature parameter, you’ll also write code that enables you to check access rights or collect usage information after the parameter is set up.

Subscriber Installs Your Managed Package

When a subscriber installs or upgrades your package in their org, a FeatureParameter\_\_c record for each feature parameter is created in the LMO. If these records were created during a previous installation or upgrade, this step is skipped.

During package installation, junction object records are created in both the subscriber org and your LMO. A junction object is a custom object with two master-detail relationships. In this case, the relationships are between FeatureParameter\_\_c and License\_\_c in the LMO. These records store the value of their associated feature parameter for that subscriber org.

Utilize Your Feature Parameters

Use the junction objects to override the feature parameters’ default values or to collect data. Depending on the value of each feature parameter’s DataFlowDirection\_\_c field, data flows to the subscriber org (from the LMO) or to the LMO (from the subscriber org). That data is stored in the junction object records.
