---
title: "MlIntentUtteranceSuggestion"
domain: sfFieldRef
topic: mlintentutterancesuggestion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.431Z
estimatedTokens: 389
keywords: [MlIntentUtteranceSuggestion, customer, input, training, purposes, feedback, loop, process, conversation, Admins, add, inputs, intent, model, API]
---

# MlIntentUtteranceSuggestion

> Represents a customer input, used for training purposes in the
         feedback loop process of a conversation. Admins can add these inputs to the intent training
         model. This object is available in API version 51.0 and later.

# MlIntentUtteranceSuggestion

Represents a customer input, used for training purposes in the feedback loop process of a conversation. Admins can add these inputs to the intent training model. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MlIntentUtteranceSuggestion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_mlintentutterancesuggestion.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ConfigId | Bot ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Intent Utterance Suggestion ID | id |  | 18 |  |  |
| IntentSuggestion | Intent Suggestion | string |  | 80 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Language | picklist |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ReviewStatus | Review Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Utterance | Utterance | string |  | 255 |  |  |
| UtteranceCount | Utterance Count | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
