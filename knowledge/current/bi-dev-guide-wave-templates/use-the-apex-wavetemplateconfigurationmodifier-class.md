---
title: "Use the Apex WaveTemplateConfigurationModifier Class"
domain: bi-dev-guide-wave-templates
topic: use-the-apex-wavetemplateconfigurationmodifier-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.388Z
estimatedTokens: 935
keywords: [Apex, WaveTemplateConfigurationModifier, checks, org’s, data, simplify, app, creation, modify, template, configuration, wizard, accordingly]
---

# Use the Apex WaveTemplateConfigurationModifier Class

> The WaveTemplateConfigurationModifier class checks
  an org’s data. Also, to simplify app creation, it can modify the template configuration wizard
  accordingly.

# Use the Apex WaveTemplateConfigurationModifier Class

The WaveTemplateConfigurationModifier class checks an org’s data. Also, to simplify app creation, it can modify the template configuration wizard accordingly.

Apex is the object-oriented Salesforce programming language that allows developers to execute flow and transaction control statements on the Lightning Platform server along with calls to the API.

Using WaveTemplateConfigurationModifier in a smart wizard simplifies standard app creation in these ways:

-   Checks if the org has data required to create the app.
-   Checks if security settings enable app creation. For example, it determines if the Analytics Integration User has access to all fields required to create the app.
-   Checks the org’s fiscal year start date. Based on the outcome, the wizard can use a default setting, such as January 1, or require the user to choose a fiscal year start date for use in the app.
-   Hides or exposes a wizard question (variable) based on the org data. For example, say that your wizard includes a question about opportunities. The smart wizard can check an org for the Opportunity object and, if it detects use of the object., display the question.
-   Sets the values included in a wizard question’s answer field. The smart wizard can include or exclude specific fields and expand or limit the number of values displayed.

The WaveTemplateConfigurationModifier can also be used with embedded apps to check the org’s data and security settings. In this use case, you can fail app creation with a clear message for the Auto-Install request. You can also set template variables based on org settings to be used in app creation.

Declare the class in template-info.json.

If you implement the modifier and unit test classes in your Visual Studio project, include your classes in the classes directory along with the class metadata files.

For complete details about Apex, see [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm).

-   **[WaveTemplateConfigurationModifier Interfaces](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class_overview.htm)**
    The main class is WaveTemplateConfigurationModifier with these supporting classes and their methods.
-   **[WaveTemplateConfigurationModifier Methods](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class_methods.htm)**
    Extend WaveTemplateConfigurationModifier with the following methods.
-   **[WaveTemplateConfigurationModifier Apex Examples](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class_examples.htm)**
    Examples include setting computed values for questions, hiding a question, managing enum values, working with array type variables, and more.
-   **[TemplateApexException Apex Examples](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class_error_examples.htm)**
    Use the TemplateApexException class to handle errors cleanly and provide clear information to template users.
-   **[TemplateInterruptException Apex Example](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class_error_examples2.htm)**
    Use the TemplateInterruptException class to handle template runtime errors cleanly and provide clear information to template users.
-   **[Test WaveTemplateConfigurationModifier](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class_testing_examples.htm)**
    Test the WaveTemplateConfigurationModifier before deploying a template that uses it.

## Related Topics

- WaveTemplateConfigurationModifier Interfaces (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class_overview.htm)
- WaveTemplateConfigurationModifier Methods (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class_methods.htm)
- WaveTemplateConfigurationModifier Apex Examples (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class_examples.htm)
- TemplateApexException Apex Examples (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class_error_examples.htm)
- TemplateInterruptException Apex Example (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class_error_examples2.htm)
- Test WaveTemplateConfigurationModifier (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class_testing_examples.htm)
