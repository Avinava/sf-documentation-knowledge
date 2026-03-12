---
title: "Wizard Best Practices"
domain: bi-dev-guide-wave-templates
topic: wizard-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:07.448Z
estimatedTokens: 463
keywords: [Wizard, Best, Practices, deliver, optimal, user, experience, adopt, creating]
---

# Wizard Best Practices

> To deliver an optimal user experience, adopt these best practices when creating a
  wizard.

# Wizard Best Practices

To deliver an optimal user experience, adopt these best practices when creating a wizard.

-   Strike a balance between too few questions and too many. Too few questions provide insufficient flexibility for the user creating the app, while too many questions can be daunting.
-   Strike a balance between the number of questions on each wizard page and the number of pages in the wizard. Too many questions on each wizard page require the user to scroll down, a practice to avoid. A wizard with too many pages is cumbersome. We recommend a page that contains 5-8 questions.
-   Group wizard questions by theme. For example, questions about quotas on one page and questions about products on another.
-   Use templates without a configuration wizard for testing the creation of the template object.
-   Organize like variables together. For instance, group variables about the Product dimension together.
-   Consider using the Apex WaveTemplateConfigurationModifier class to create a smart wizard that can automatically check the data in your org. See [Use the Apex WaveTemplateConfigurationModifier Class](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class.htm "The WaveTemplateConfigurationModifier class checks an org’s data. Also, to simplify app creation, it can modify the template configuration wizard accordingly.").
-   You can customize smart wizard pages using VisualForce pages and a JavaScript library.
-   For embedded apps, don’t create any questions that depend on user interaction unless you create your own user interface for installation or you add a WaveTemplateConfigurationModifier class. Auto-install requests automatically create the app in customer orgs on package install of the template, with no CRM Analytics Studio configuration wizard for users.

## Related Topics

- Use
     the Apex WaveTemplateConfigurationModifier
    Class (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class.htm)
