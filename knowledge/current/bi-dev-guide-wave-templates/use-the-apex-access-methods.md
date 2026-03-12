---
title: "Use the Apex Access
  Methods"
domain: bi-dev-guide-wave-templates
topic: use-the-apex-access-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.378Z
estimatedTokens: 406
keywords: [Apex, Access, utility, check, Integration, User, sObjects, sObjectFields, WaveTemplateConfigurationModifier, implementation]
---

# Use the Apex Access
  Methods

> The Access class provides utility methods to check
  Integration User access to sObjects and sObjectFields. Use these methods in your WaveTemplateConfigurationModifier implementation.

# Use the Apex Access Methods

The Access class provides utility methods to check Integration User access to sObjects and sObjectFields. Use these methods in your WaveTemplateConfigurationModifier implementation.

Apex is the object-oriented Salesforce programming language that allows developers to execute flow and transaction control statements on the Lightning Platform server along with calls to the API.

Using Access in a smart wizard simplifies standard app creation in these ways:

-   Checks if the Integration User has access to sObjects.
-   Checks if the Integration User has access to sObjectFields.
-   Checks if the Integration User has access to enough records in an sObject to continue with template processing.

The Access methods can also be used with embedded apps to check if the org has given access to the Integration User for the necessary sObjects and sObjectFields. In this use case, you can fail app creation with a clear message for the Auto-Install request.

For complete details about Apex, see [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm).

-   **[Access Methods](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_access_class_methods.htm)**
    Use the Access features with the following methods.
-   **[Access Apex Examples](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_access_class_examples.htm)**
    Examples include checking the Integration User access inside your WaveTemplateConfigurationModifier implementation.

## Related Topics

- Access Methods (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_access_class_methods.htm)
- Access Apex Examples (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_access_class_examples.htm)
