---
title: "Resolve a Prompt Template"
domain: apex-guide
topic: resolve-a-prompt-template
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.901Z
keywords: [Resolve, Prompt, Template, Flex, Apex, Flow, Resources, Sales, Email, Field, Generation, Summary]
---

# Resolve a Prompt Template

# Resolve a Prompt Template

Call a method to resolve a prompt template.

Call [generateMessagesForPromptTemplate(promptTemplateDevName, promptTemplateGenerationsInput)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_EinsteinLLM_static_methods.htm) to resolve a prompt template.

To resolve a prompt template, create an input object, build input maps, configure additional settings, call the service, and handle the resolution and response.

To create an input object, create an instance of ConnectApi.EinsteinPromptTemplateGenerationsInput.

To store input parameters for the prompt template, build input maps using Map<String, ConnectApi.WrappedValue>. Wrap the input maps in ConnectApi.WrappedValue and add them to a ConnectApi.WrappedValue map with identifying keys. You can also wrap a string input in ConnectApi.WrappedValue and add it to a map.

To configure additional settings, create an instance of ConnectApi.EinsteinLlmAdditionalConfigInput and assign it to the additionalConfig property of the input object.

To generate messages based on the prompt template and input parameters, call the generateMessagesForPromptTemplate method of the ConnectApi.EinsteinLLM class with the prompt template ID and the input object.

To access the prompt resolution, use generationsOutput.prompt and, to access the first generated response, use generationsOutput.generations\[0\].text.

## Resolve a Flex Prompt Template with Apex and Flow Resources

```

```

## Resolve a Sales Email Prompt Template

```

```

## Resolve a Field Generation Prompt Template

```

```

## Resolve a Summary Prompt Template

```

```