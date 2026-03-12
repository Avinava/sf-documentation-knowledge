---
title: "Access Apex Examples"
domain: bi-dev-guide-wave-templates
topic: access-apex-examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.381Z
estimatedTokens: 218
keywords: [Access, Apex, Examples, include, checking, Integration, User, inside, WaveTemplateConfigurationModifier, implementation]
---

# Access Apex Examples

> Examples include checking the Integration User access inside your WaveTemplateConfigurationModifier implementation.

# Access Apex Examples

Examples include checking the Integration User access inside your WaveTemplateConfigurationModifier implementation.

## Example

**In the onConfigurationRetrival implementation, verify the Integration User access to the Account sObject. Add the access result to the template variables.**

```

```

## Example

**In the onConfigurationRetrival implementation, verify the Integration User has access more than 100 records in the Account sObject. Add the result to the template variables.**

```

```

## Example

**Before creating the app, verify Integration User access to an sObject field selected during template wizard processing:**

```

```

## Example

**Before creating the app, verify if there are any sObject fields the Integration User doesn't have access from an array of fields selected during template wizard processing:**

```

```

## Code Examples

```apex
public class ExampleWaveTemplateConfigurationModifier 
    extends wavetemplate.WaveTemplateConfigurationModifier
{
    public override void onConfigurationRetrieval(wavetemplate.WaveTemplateInfo waveTemplate)
    {
        String accessResult = null;
        if (!wavetemplate.Access.integUserHasAccessToSObjectField('Account', 'Industry')) {
           accessResult = 'No Access';
        } else {
           accessResult = 'Access found';
        }
        template.getVariables().get('accountAccess').setComputedValue(accsssResult);
    }
}
```

```apex
public class ExampleWaveTemplateConfigurationModifier 
    extends wavetemplate.WaveTemplateConfigurationModifier
{
    public override void onConfigurationRetrieval(wavetemplate.WaveTemplateInfo waveTemplate)
    {
        Boolean enoughAcctRecords = true;
        if (!wavetemplate.Access.getCountOfRecordsAsIntegUser('Account') > 100) {
            enoughAcctRecords = false;
        } 
        template.getVariables().get('sufficientAcctRecordsFound').setComputedValue(enoughAcctRecords);
    }
}
```

```apex
public class ExampleWaveTemplateConfigurationModifier 
    extends wavetemplate.WaveTemplateConfigurationModifier
{
    public override void beforeAppCreate(wavetemplate.WaveTemplateInfo waveTemplate,
        String previousAppVersion, wavetemplate.Answers answers)
    {
        Boolean access = wavetemplate.Access.integUserHasAccessToSObjectField('sObjectFieldExample', template, answers);

        if (!access) {
            throw new wavetemplate.TemplateInterruptException('Integ User doesn't have access to sObjectFieldExample');
        }
    }
}
```

```apex
public class ExampleWaveTemplateConfigurationModifier 
    extends wavetemplate.WaveTemplateConfigurationModifier
{
    public override void beforeAppCreate(wavetemplate.WaveTemplateInfo waveTemplate,
        String previousAppVersion, wavetemplate.Answers answers)
    {
        List<String> noAccessFields = wavetemplate.Access.checkIntegUserAccessToArrayOfSObjectFields('sobjectFieldArray', template, answers);
        
        if (!noAccessFields.isEmpty()) {
            throw new wavetemplate.TemplateInterruptException('Integ User doesn't have access to ' + noAccessFields.get(0));
        }
    }
}
```
