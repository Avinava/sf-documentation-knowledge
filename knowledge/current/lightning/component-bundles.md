---
title: "Component Bundles"
domain: lightning
topic: component-bundles
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.066Z
estimatedTokens: 504
keywords: [Component, Bundles, bundle, app, resources, File-Size, Limits]
---

# Component Bundles

> A component bundle contains a component or an app and all its related
    resources.

# Component Bundles

A component bundle contains a component or an app and all its related resources.

| Resource | Resource Name | Usage | See Also |
| --- | --- | --- | --- |
| Component or Application | sample.cmp or sample.app | The only required resource in a bundle. Contains markup for the component or app. Each bundle contains only one component or app resource. | Creating Componentsaura:application |
| CSS Styles | sample.css | Contains styles for the component. | CSS in Components |
| Controller | sampleController.js | Contains client-side controller methods to handle events in the component. | Handling Events with Client-Side Controllers |
| Design | sample.design | File required for components used in Lightning App Builder, Lightning pages, Experience Builder, or Flow Builder. | Aura Component Bundle Design Resources |
| Documentation | sample.auradoc | A description, sample code, and one or multiple references to example components | Writing Documentation for the Component Library |
| Renderer | sampleRenderer.js | Client-side renderer to override default rendering for a component. | Create a Custom Renderer |
| Helper | sampleHelper.js | JavaScript functions that can be called from any JavaScript code in a component’s bundle | Sharing JavaScript Code in a Component Bundle |
| SVG File | sample.svg | Custom icon resource for components used in the Lightning App Builder or Experience Builder. | Configure Components for Lightning Pages and the Lightning App Builder |

All resources in the component bundle follow the naming convention and are auto-wired. For example, a controller <componentName>Controller.js is auto-wired to its component, which means that you can use the controller within the scope of that component.

## File-Size Limits

Each resource, such as a cmp, css, or js file, in an Aura component bundle has a maximum file size of 1,000,000 bytes. However, for performance reasons, we recommend that you don’t exceed a maximum file size of 128 KB (131,072 bytes).

## Related Topics

- Creating
                  Components (atlas.en-us.lightning.meta/lightning/components_overview.htm)
- aura:application (atlas.en-us.lightning.meta/lightning/ref_aura_application.htm)
- CSS in
                  Components (atlas.en-us.lightning.meta/lightning/components_css.htm)
- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
- Aura Component Bundle Design Resources (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_design_files.htm)
- Writing Documentation for the Component Library (atlas.en-us.lightning.meta/lightning/docs_intro.htm)
- Create a Custom
                  Renderer (atlas.en-us.lightning.meta/lightning/js_renderers.htm)
- Sharing JavaScript
                  Code in a Component Bundle (atlas.en-us.lightning.meta/lightning/js_helper.htm)
- Configure Components for Lightning Pages and the Lightning App
                Builder (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm)
