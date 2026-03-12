---
title: "Expose Component Attributes in Experience Builder"
domain: communities-dev
topic: expose-component-attributes-in-experience-builder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.239Z
estimatedTokens: 438
keywords: [Expose, Component, Attributes, Experience, Builder, design, resource, control, exposed, lives, folder, design-time, behavior, Aura, component—information]
---

# Expose Component Attributes in Experience Builder

> You use a design resource to control which attributes are exposed in Experience
    Builder. A design resource lives in the same folder as your component. It describes the
    design-time behavior of the Aura component—information that visual tools need to display the
    component in a page or app.

# Expose Component Attributes in Experience Builder

You use a design resource to control which attributes are exposed in Experience Builder. A design resource lives in the same folder as your component. It describes the design-time behavior of the Aura component—information that visual tools need to display the component in a page or app.

To make an Aura component attribute available for administrators to edit in Experience Builder, add a design:attribute node for the attribute in the design resource. When you mark an attribute as required, it automatically appears in Experience Builder, unless it has a default value assigned to it.

You must specify required attributes with default values and attributes not marked as required in the component definition in the design resource to make them appear for users. A design resource supports attributes only of type int, string, or boolean.

For drag-and-drop components, exposed attributes appear in the component’s properties panel.

![Properties panel](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fdesign_resources1.png&folder=communities_dev)

For theme layout components, exposed attributes appear when the theme layout is selected in the **Settings** | **Theme** area.

![Theme area](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fdesign_resources2.png&folder=communities_dev)

#### See Also

-   [*Lightning Aura Components Developer Guide*: Aura Component Bundle Design Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/components_config_for_app_builder_design_files.htm "Lightning Aura Components Developer Guide: Aura Component Bundle Design
    Resources - HTML (New Window)")
