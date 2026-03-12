---
title: "WaveTemplateConfigurationModifier
   Methods"
domain: bi-dev-guide-wave-templates
topic: wavetemplateconfigurationmodifier-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.399Z
estimatedTokens: 254
keywords: [WaveTemplateConfigurationModifier, Extend]
---

# WaveTemplateConfigurationModifier
   Methods

> Extend WaveTemplateConfigurationModifier with the
  following methods.

# WaveTemplateConfigurationModifier Methods

Extend WaveTemplateConfigurationModifier with the following methods.

-   onConfigurationRetrieval. Runs before the wizard starts. This method is for standard apps only. If the org lacks required data or settings, you can customize the wizard (variables) based on the org data check or disable app creation. Requires WaveTemplateInfo:

    ```

    ```

-   beforeAppCreate. Runs after completion of the wizard for standard apps or on app creation for embedded apps. Use this method to avoid errors during app creation as the result of invalid user selections or org settings. Requires WaveTemplateInfo and Answers:

    ```

    ```

-   beforeAppUpdate. Runs before app updates based on new version of the template for standard and embedded apps. Use this method to validate that org data is compatible with new version. Requires WaveTemplateInfo, Answers, and the previous app version:

    ```

    ```


The methods are optional and all of them can be overridden.

## Code Examples

```
onConfigurationRetrieval(wavetemplate.WaveTemplateInfo waveTemplate)
```

```
beforeAppCreate(wavetemplate.WaveTemplateInfo template, wavetemplate.Answers answers)
```

```
beforeAppUpdate(wavetemplate.WaveTemplateInfo template, String previousAppVersion, wavetemplate.Answers answers)
```
