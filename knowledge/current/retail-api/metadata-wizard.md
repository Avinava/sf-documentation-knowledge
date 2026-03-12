---
title: "Metadata Wizard"
domain: retail-api
topic: metadata-wizard
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.646Z
estimatedTokens: 753
keywords: [Metadata, Wizard, MetadataWizard, designed, library, build, simple, pages, rendered, user, defined, document, NewPromotionWizardCallable, APEX, created]
---

# Metadata Wizard

> The MetadataWizard is designed as a library that can be used to
      build simple wizard pages that are rendered to the user based on the defined wizard metadata.
      This document describes the NewPromotionWizardCallable APEX Class created for providing data
      for the New Promotion Metadata Driven wizard.

# Metadata Wizard

The MetadataWizard is designed as a library that can be used to build simple wizard pages that are rendered to the user based on the defined wizard metadata. This document describes the NewPromotionWizardCallable APEX Class created for providing data for the New Promotion Metadata Driven wizard.

## Introduction

The MetadataWizard engine reads the wizard configuration metadata. It uses the components defined in it's repository to create the required component instances for user interaction. The MetadataWizard engine handles interactions with the wizard buttons (Submit and Cancel).

MetadataWizard execution consists of the following components:

| Components | Description |
| --- | --- |
| Wizard Metadata | The configurable part of the wizard, where the various components are defined. The components are defined to render and also to interact between each other. For more information, see Metadata Definition |
| Result Object | The final object that will be returned by the Metadata wizard after execution. Each component in the wizard sets one or more attributes into this output object. Components define where the values are set in the output object through a metadata property outputProperty. |
| Component Value | The value that the component exposes for the wizard instance is used to achieve communication between components through the use of expressions in their metadata properties. Whenever a component value changes, it notifies the new value to the other components referencing it (using expressions). It then re-renders the values to ensure that the new metadata values are reflected. |

-   **[Metadata Definition](atlas.en-us.retail_api.meta/retail_api/metadata_definition.htm)**
    This topic describes the metadata structure and the available wizard components that can be used to build wizards.
-   **[Metadata Wizard Expression](atlas.en-us.retail_api.meta/retail_api/metadata_expression.htm)**
    Expressions provide dynamic values to Wizard Components. Wizard Components accept expressions in some of their metadata properties. With expressions, you can also access instance values of other Wizard Components and dynamically set the metadata attributes, and create conditions. When a Wizard Component has an expression as a metadata attribute, the Wizard Component gets re-rendered every time the expression value changes.
-   **[Metadata Components](atlas.en-us.retail_api.meta/retail_api/metadata_components.htm)**
    This topic describes the list of available components that can be used on metadata-driven wizards.
-   **[Promotion Wizard Input Structure](atlas.en-us.retail_api.meta/retail_api/NewPromotionWizardInputStructure.htm)**
    This document describes the input that SmartUI generates when initializing the new metadata-driven promotion wizard. SmartUI extracts information on where the user clicked when launching the wizard in order to provide as much information as possible to the wizard so it can be used to provide sensible defaults.

## Related Topics

- Metadata Definition (atlas.en-us.retail_api.meta/retail_api/metadata_definition.htm)
- Metadata Wizard Expression (atlas.en-us.retail_api.meta/retail_api/metadata_expression.htm)
- Metadata Components (atlas.en-us.retail_api.meta/retail_api/metadata_components.htm)
- Promotion Wizard Input Structure (atlas.en-us.retail_api.meta/retail_api/NewPromotionWizardInputStructure.htm)
