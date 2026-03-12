---
title: "WaveTemplateConfigurationModifier Apex Examples"
domain: bi-dev-guide-wave-templates
topic: wavetemplateconfigurationmodifier-apex-examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.396Z
estimatedTokens: 267
keywords: [WaveTemplateConfigurationModifier, Apex, Examples, include, setting, computed, questions, hiding, question, managing, working, array, variables]
---

# WaveTemplateConfigurationModifier Apex Examples

> Examples include setting computed values for questions, hiding a question, managing enum
  values, working with array type variables, and more.

# WaveTemplateConfigurationModifier Apex Examples

Examples include setting computed values for questions, hiding a question, managing enum values, working with array type variables, and more.

## Example

**Create your class:**

```

```

## Example

**Set the computed value for one of the questions:**

```

```

## Example

**Hide one of the questions:**

```

```

## Example

**Remove an enum value from the dropdown list box using the specified array index:**

```

```

## Example

**Populate the enum values in the dropdown list box (StringType variable):**

```

```

## Example

**Given the following ArrayType variable:**

```

```

**Add more values to the ArrayType variable enums:**

```

```

## Example

**Reduce the possible answers via the excludes:**

```

```

## Example

**Set a variable answer before the app creates. Updating answers overwrites any value the user selected in the wizard:**

```

```

## Example

**Set a variable answer before the app updates. Updating answers overwrites any value the user selected in the wizard:**

```

```

## Code Examples

```apex
public class ExampleWaveTemplateConfigurationModifier
    extends wavetemplate.WaveTemplateConfigurationModifier
{
    public override void onConfigurationRetrieval(wavetemplate.WaveTemplateInfo template)
    {
        // Method implementation
    }
}
```

```apex
public override void onConfigurationRetrieval(wavetemplate.WaveTemplateInfo template)
{
    Map<string, wavetemplate.VariableDefinition> variables = template.getVariables();
    variables.get('Has_Product').setComputedValue('No');
}
```

```apex
public override void onConfigurationRetrieval(wavetemplate.WaveTemplateInfo template)
{
    template.getUI().getPages().get(0).getVariables()
        .get('Has_Product').setVisibility(wavetemplate.VisibilityEnum.Hidden);
}
```

```apex
public override void onConfigurationRetrieval(wavetemplate.WaveTemplateInfo template)
{
    Map<string, wavetemplate.VariableDefinition> variables = template.getVariables();
    wavetemplate.VariableDefinition hasProduct = variables.get('Has_Product');
    List<object> enums = hasProduct.getVariableType().getEnums();
    enums.remove(1);
    hasProduct.getVariableType().setEnums(enums);
}
```

```apex
public override void onConfigurationRetrieval(wavetemplate.WaveTemplateInfo template)
{
    Map<string, wavetemplate.VariableDefinition> variables = template.getVariables();
    wavetemplate.VariableDefinition caseRecordTypes = 
        variables.get('IncludeCaseRecordTypes');
    List<object> enums = caseRecordTypes.getVariableType().getEnums();
    RecordType [] results = [SELECT Name FROM RecordType where sobjectType = 'Case'];
    for (RecordType record : results){
        //adds the record type names to the drop down list
        enums.add((string)record.get('Name'));
    }
    caseRecordTypes.getVariableType().setEnums(enums);
}
```
