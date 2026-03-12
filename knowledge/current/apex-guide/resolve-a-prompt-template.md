---
title: "Resolve a Prompt Template"
domain: apex-guide
topic: resolve-a-prompt-template
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.440Z
estimatedTokens: 415
keywords: [Resolve, Prompt, Template, Call, resolve, prompt, template., Flex, Apex, Flow, Resources, Sales, Email, Field, Generation, Summary]
---

# Resolve a Prompt Template

> Call a method to resolve a prompt
        template.

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

## Code Examples

```apex
// Create input
ConnectApi.EinsteinPromptTemplateGenerationsInput promptGenerationsInput = new ConnectApi.EinsteinPromptTemplateGenerationsInput();
promptGenerationsInput.isPreview = false;
                
// Build input map
Map<String,ConnectApi.WrappedValue> valueMap = new 
Map<String,ConnectApi.WrappedValue>();

Map<String, String> account1RecordIdMap = new Map<String, String>();
account1RecordIdMap.put('id', '001xx000003H9cuAAC'); // Account ID
                        
Map<String, String> account2RecordIdMap = new Map<String, String>();
account2RecordIdMap.put('id', '001xx000003H9ctAAC'); // Account ID
                            
Map<String, String> case1RecordIdMap = new Map<String, String>();
case1RecordIdMap.put('id', '500xx000000cJ7rAAE'); // Case ID 
                                
// Add wrapped values to map
ConnectApi.WrappedValue account1WrappedValue = new ConnectApi.WrappedValue();
account1WrappedValue.value = account1RecordIdMap;
                                
ConnectApi.WrappedValue account2WrappedValue = new ConnectApi.WrappedValue();
account2WrappedValue.value = account2RecordIdMap;
                                
ConnectApi.WrappedValue case1WrappedValue = new ConnectApi.WrappedValue();
case1WrappedValue.value = case1RecordIdMap;
                                
valueMap.put('Input:Account_1', account1WrappedValue);
valueMap.put('Input:Account_2', account2WrappedValue);
valueMap.put('Input:Case_1', case1WrappedValue);
                                
// Add string input
ConnectApi.WrappedValue strWrappedValue = new ConnectApi.WrappedValue();
strWrappedValue.value = 'My string input';
                                
valueMap.put('Input:My_Free_Text1', strWrappedValue); 
                                
promptGenerationsInput.inputParams = valueMap;
                                
// Set additional configuration values
promptGenerationsInput.additionalConfig = new ConnectApi.EinsteinLlmAdditionalConfigInput();
promptGenerationsInput.additionalConfig.applicationName = 'PromptTemplateGenerationsInvocable';
                                
// Call the service using the prompt template ID
ConnectApi.EinsteinPromptTemplateGenerationsRepresentation generationsOutput = 
ConnectApi.EinsteinLLM.generateMessagesForPromptTemplate('0hfxx0000000KQ9AAM', promptGenerationsInput); 
                                
// Consume resolution
System.debug('Prompt resolution: ' + generationsOutput.prompt);
                                
// Consume response
System.debug('Prompt response: ' + generationsOutput.generations[0].text);
```

```apex
// Create input
ConnectApi.EinsteinPromptTemplateGenerationsInput promptGenerationsInput = new ConnectApi.EinsteinPromptTemplateGenerationsInput();
promptGenerationsInput.isPreview = false;

// Build input map
Map<String,ConnectApi.WrappedValue> valueMap = new Map<String,ConnectApi.WrappedValue>();

Map<String, String> recipientEntityRecordIdMap = new Map<String, String>();
recipientEntityRecordIdMap.put('id', '00Qxx000002ToPvEAK');

Map<String, String> senderEntityRecordIdMap = new Map<String, String>();
senderEntityRecordIdMap.put('id', '005xx000001XiWLAA0');

ConnectApi.WrappedValue recipientEntityWrappedValue = new ConnectApi.WrappedValue();
recipientEntityWrappedValue.value = recipientEntityRecordIdMap;

ConnectApi.WrappedValue senderEntityWrappedValue = new ConnectApi.WrappedValue();
senderEntityWrappedValue.value = senderEntityRecordIdMap;

valueMap.put('Input:Account', recipientEntityWrappedValue);
valueMap.put('Input:Recipient', recipientEntityWrappedValue);
valueMap.put('Input:Sender', senderEntityWrappedValue);

promptGenerationsInput.inputParams = valueMap;

// Set additional configuration values
promptGenerationsInput.additionalConfig = new ConnectApi.EinsteinLlmAdditionalConfigInput();
promptGenerationsInput.additionalConfig.applicationName = 'PromptTemplateGenerationsInvocable';

// Call the service
ConnectApi.EinsteinPromptTemplateGenerationsRepresentation generationsOutput = 
ConnectApi.EinsteinLLM.generateMessagesForPromptTemplate('0hfxx0000000KTNAA2', promptGenerationsInput);

// Consume response
System.debug('Prompt Testing: ' + generationsOutput.prompt);
```

```apex
// Create input
ConnectApi.EinsteinPromptTemplateGenerationsInput promptGenerationsInput = new ConnectApi.EinsteinPromptTemplateGenerationsInput();
promptGenerationsInput.isPreview = false;

// Build input map
Map<String,ConnectApi.WrappedValue> valueMap = new Map<String,ConnectApi.WrappedValue>();

Map<String, String> relatedEntityRecordIdMap = new Map<String, String>();
relatedEntityRecordIdMap.put('id', '001xx000003H9cuAAC');

ConnectApi.WrappedValue relatedEntityWrappedValue = new ConnectApi.WrappedValue();
relatedEntityWrappedValue.value = relatedEntityRecordIdMap;

valueMap.put('Input:Account', relatedEntityWrappedValue);

promptGenerationsInput.inputParams = valueMap;

// Set additional configuration values
promptGenerationsInput.additionalConfig = new ConnectApi.EinsteinLlmAdditionalConfigInput();
promptGenerationsInput.additionalConfig.applicationName = 'PromptTemplateGenerationsInvocable';

// Call the service
ConnectApi.EinsteinPromptTemplateGenerationsRepresentation generationsOutput = 
ConnectApi.EinsteinLLM.generateMessagesForPromptTemplate('0hfxx0000000KRlAAM', promptGenerationsInput);

// Consume response
System.debug('Prompt Testing: ' + generationsOutput.prompt);
```

```apex
// Create input
ConnectApi.EinsteinPromptTemplateGenerationsInput promptGenerationsInput = new ConnectApi.EinsteinPromptTemplateGenerationsInput();
promptGenerationsInput.isPreview = false;

// Build input map
Map<String,ConnectApi.WrappedValue> valueMap = new Map<String,ConnectApi.WrappedValue>();

Map<String, String> recipientEntityRecordIdMap = new Map<String, String>();
recipientEntityRecordIdMap.put('id', '00Qxx000002ToPvEAK');

ConnectApi.WrappedValue recipientEntityWrappedValue = new ConnectApi.WrappedValue();
recipientEntityWrappedValue.value = recipientEntityRecordIdMap;

valueMap.put('Input:Account', recipientEntityWrappedValue);

promptGenerationsInput.inputParams = valueMap;

// Set additional configuration values
promptGenerationsInput.additionalConfig = new ConnectApi.EinsteinLlmAdditionalConfigInput();
promptGenerationsInput.additionalConfig.applicationName = 'PromptTemplateGenerationsInvocable';

// Call the service
ConnectApi.EinsteinPromptTemplateGenerationsRepresentation generationsOutput = 
ConnectApi.EinsteinLLM.generateMessagesForPromptTemplate('0hfxx0000000KUzAAM', promptGenerationsInput);

// Consume response
System.debug('Prompt Testing: ' + generationsOutput.prompt);
```
