---
title: "MlIntentUtteranceSuggestion"
domain: object-reference
topic: mlintentutterancesuggestion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.922Z
estimatedTokens: 222
keywords: [MlIntentUtteranceSuggestion, customer, input, training, purposes, feedback, loop, process, conversation, Admins, add, inputs, intent, model, API]
---

# MlIntentUtteranceSuggestion

> Represents a customer input, used for training purposes in the
         feedback loop process of a conversation. Admins can add these inputs to the intent training
         model. This object is available in API version 51.0 and later.

# MlIntentUtteranceSuggestion

Represents a customer input, used for training purposes in the feedback loop process of a conversation. Admins can add these inputs to the intent training model. This object is available in API version 51.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ConfigId | TypereferencePropertiesFilter, Group, Nillable, Sort |
| IntentSuggestion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe recommended intent. |
| ReviewStatus | TypepicklistPropertiesFilter, Group, Restricted Picklist, SortDescriptionPossible values are: Ignore, New |
| Utterance | TypestringPropertiesFilter, Group, SortDescriptionThe text input from the end user. |
| UtteranceCount | TypeintegerPropertiesFilter, Group, SortDescriptionA count of the Utterance field. |
