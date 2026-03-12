---
title: "Custom Action Plugin"
domain: cpq-plugins
topic: custom-action-plugin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.914Z
estimatedTokens: 357
keywords: [Custom, Action, Plugin, lets, run, code, actions, Salesforce, CPQ, Currently, plugins, support, cloning]
---

# Custom Action Plugin

> A custom action plugin lets you run code before or after custom actions in Salesforce
  CPQ. Currently, custom action plugins support only cloning actions.

# Custom Action Plugin

A custom action plugin lets you run code before or after custom actions in Salesforce CPQ. Currently, custom action plugins support only cloning actions.

A custom action plugin can call either the onBeforeCloneLine method or the onAfterCloneLine method so that you can evaluate and modify a quote line before or immediately after the cloning process. These methods accept the following parameters.

| Parameter | Type | Definition |
| --- | --- | --- |
| quote | QuoteModel | A representation of the quote object. |
| clonedLines | Object | Properties:clonedLinesAvailable with onAfterCloneLine. An array of new QuoteLineModels created from the clone action. When using onBeforeCloneLine, this property is undefined.originalLinesAvailable with onBeforeCloneLine and onAfterCloneLine. An array of QuoteLineModels for the original quote lines that the user is cloning.You can use the cloneLines parameter to change fields on the old and new quote lines. |
| conn | Object | A jsforce connection. |

To create a custom action plugin, create a custom script record and enter your code in the Code field. Then, go to Salesforce CPQ package settings an open the plugins tab. Enter the name of your custom script in the Custom Action Plugin field and save your changes.

Here’s a basic template for the plugin, without any additional code. You can use onBeforeCloneLine or onAfterCloneLine as needed.

```

```

## Code Examples

```
export function onBeforeCloneLine(quote, clonedLines) {
   return Promise.resolve();
}
```
