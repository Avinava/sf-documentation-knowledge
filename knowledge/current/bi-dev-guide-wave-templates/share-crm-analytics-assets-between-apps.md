---
title: "Share CRM Analytics Assets Between Apps"
domain: bi-dev-guide-wave-templates
topic: share-crm-analytics-assets-between-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.649Z
estimatedTokens: 760
keywords: [Share, CRM, Analytics, Assets, Apps, Template, Dependencies, feature, reuse, dashboards, datasets, lenses, across]
---

# Share CRM Analytics Assets Between Apps

> Use the Template Dependencies feature to reuse CRM Analytics dashboards, datasets, and
  lenses across apps.

# Share CRM Analytics Assets Between Apps

Use the Template Dependencies feature to reuse CRM Analytics dashboards, datasets, and lenses across apps.

Create dependencies between app templates with Template Dependencies. Create the dependency from one app template (the dependent app template, Template D in the image) to assets in another (the supporting app template, Template A in the image) that reside in the same org. Apps created from the dependent template can include dashboards, datasets, and lenses from the supporting template. A template (Template B) can be both a dependent template and a supporting template at the same time.

![Template D has a dependency on Templates B and C. Template B has a dependency on Template A](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templates_share_assets2.png&folder=bi_dev_guide_wave_templates)

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=bi_dev_guide_wave_templates)

#### Important

Template dependencies can’t be used with templates packaged for automatic install. The creation of auto-install requests can’t guarantee dependent templates are installed in the correct order.

While a template declares dependencies on other templates, it is really the apps that get created from the templates that have dependencies on each other. If Template B declares a dependency on Template A, it means that to create an app from Template B, you must first create one or more apps from Template A. The dependent and supporting apps must both reside in the same org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

You can only create dependencies on apps created from templates. That’s because the dependency refers to the template. There is template-to-template dependency in creating token references and app-to-app dependency when app assets are created from the dependent template.

-   **[Create Dependent Templates](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_create_dependency.htm)**
    Follow these steps to create templates with dependencies.
-   **[Template Dependency Syntax](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_dependency_version_syntax.htm)**
    The syntax you use to specify dependencies in the template-info.json file for templateVersion is flexible. The value can take on any of the following.
-   **[Best Practices](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_dependency_best_practices.htm)**
    When creating template dependencies, follow these guidelines.
-   **[Creating a Template from a Dependent App](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_dependency_app_to_template.htm)**
    Apps with dependencies on assets on other apps can be templatized using the same template creation process as standalone templates.

## Related Topics

- Create Dependent Templates (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_create_dependency.htm)
- Template Dependency Syntax (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_dependency_version_syntax.htm)
- Best Practices (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_dependency_best_practices.htm)
- Creating a Template from a Dependent App (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_dependency_app_to_template.htm)
