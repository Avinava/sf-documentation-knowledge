---
title: "generate​MessagesFor​PromptTemplate​(promptTemplate​DevName,
      prompt​Template​GenerationsInput)"
domain: apex-reference
topic: generatemessagesforprompttemplateprompttemplatedevname-prompttemplategenerations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.078Z
keywords: [generate​MessagesFor​PromptTemplate​, promptTemplate​DevName, prompt​Template​GenerationsInput, Generates, response, specified, prompt, template, input, parameters., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# generate​MessagesFor​PromptTemplate​(promptTemplate​DevName,
      prompt​Template​GenerationsInput)

> Generates a response using the specified prompt template and input
    parameters.

### generate​MessagesFor​PromptTemplate​(promptTemplate​DevName, prompt​Template​GenerationsInput)

Generates a response using the specified prompt template and input parameters.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.EinsteinPromptTemplateGenerationsRepresentation generateMessagesForPromptTemplate(String promptTemplateDevName, ConnectApi.EinsteinPromptTemplateGenerationsInput promptTemplateGenerationsInput)

#### Parameters

promptTemplateDevName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name or ID of a prompt template record.

promptTemplateGenerationsInput

Type: [ConnectApi.EinsteinPromptTemplateGenerationsInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_einstein_prompt_template_generations.htm "Prompt template input parameters to use for generation.")

Input for generating a response using the specified prompt template.

#### Return Value

Type: [ConnectApi.EinsteinPromptTemplateGenerationsRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_prompt_template_generations.htm "Generated response from the LLM provider and resolved prompt template text.")

#### Example

In this example, call generateMessagesForPromptTemplate(promptTemplateDevName, promptTemplateGenerationsInput) to resolve a Sales Email prompt template. For more examples, see [Resolve a Prompt Template](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_resolve_prompt_template.htm).

```

```