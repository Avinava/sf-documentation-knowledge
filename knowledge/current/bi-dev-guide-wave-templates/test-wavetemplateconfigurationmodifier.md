---
title: "Test WaveTemplateConfigurationModifier"
domain: bi-dev-guide-wave-templates
topic: test-wavetemplateconfigurationmodifier
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.413Z
estimatedTokens: 421
keywords: [Test, WaveTemplateConfigurationModifier, deploying, template, uses]
---

# Test WaveTemplateConfigurationModifier

> Test the WaveTemplateConfigurationModifier before
        deploying a template that uses it.

# Test WaveTemplateConfigurationModifier

Test the WaveTemplateConfigurationModifier before deploying a template that uses it.

Before you can deploy your template or package it for the Salesforce AppExchange that uses a WaveTemplateConfigurationModifier class, a unit test class must be present and all of the tests must complete successfully. The unit test is designed to call and run the modifier methods and nothing more. Use the following examples when creating your own unit test class.

Use the wavetemplate.Test helper methods for testing.

-   wavetemplate.Test.getWaveTemplateInfoForApexTesting. Retrieves the runtime template information object for testing. Requires templateName:

    ```

    ```

-   wavetemplate.Test.getDefaultAnswersForApexTesting. Retrieves the variable answers set by user selections and/or the configuration modifier methods. Requires templateName:

    ```

    ```


The following code examples show how to test the methods from the [Apex Examples](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class_examples.htm#bi_templatesdev_apex_class_examples "Examples include setting computed values for questions, hiding a question, managing enum values, working with array type variables, and more.") page.

## Example

**Generic Test Class Example**

```

```

## Example

**beforeAppCreate Test Method Example**

```

```

## Example

**beforeAppUpdate Test Method Example**

```

```

## Example

**onConfigurationRetrieval Test Method Example**

```

```

For complete information, see [Testing Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_testing.htm).

## Code Examples

```
getWaveTemplateInfoForApexTesting(String templateName)
```

```
getDefaultAnswersForApexTesting(String templateName)
```

```apex
@isTest
private class ExampleWaveTemplateConfigurationModifierTest
{
    @isTest
    static testMethod void testModifier()
    {
        // Test modifier methods
    }
}
```

```apex
@isTest static testMethod void testBeforeAppCreate()
{
    wavetemplate.WaveTemplateInfo template = 
            wavetemplate.Test.getWaveTemplateInfoForApexTesting('my_template');
    wavetemplate.Answers answers = 
            wavetemplate.Test.getDefaultAnswersForApexTesting('my_template');
    
    ExampleWaveTemplateConfigurationModifier mod = 
        new ExampleWaveTemplateConfigurationModifier();
    
    //Test the beforeAppCreate method in your Apex Modifier Class
    System.assertEquals('Yes', answers.get(Has_Product));
    mod.beforeAppCreate(template, answers);
    System.assertEquals('No', answers.get(Has_Product));
}
```

```apex
@isTest static testMethod void testBeforeAppUpdate()
{
    wavetemplate.WaveTemplateInfo template = 
            wavetemplate.Test.getWaveTemplateInfoForApexTesting('my_template');
    wavetemplate.Answers answers = 
            wavetemplate.Test.getDefaultAnswersForApexTesting('my_template');
    
    ExampleWaveTemplateConfigurationModifier mod = 
        new ExampleWaveTemplateConfigurationModifier();
    
    //Test the beforeAppUpdate method in your Apex Modifier Class
    System.assertEquals('No', answers.get(Has_Product));
    mod.beforeAppUpdate(template, '2.0', answers);
    System.assertEquals('Yes', answers.get(Has_Product));
}
```

## Related Topics

- Apex Examples (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class_examples.htm)
