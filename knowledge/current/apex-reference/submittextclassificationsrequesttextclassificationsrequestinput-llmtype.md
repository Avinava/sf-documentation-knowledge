---
title: "submitTextClassificationsRequest(textClassificationsRequestInput, llmType)"
domain: apex-reference
topic: submittextclassificationsrequesttextclassificationsrequestinput-llmtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.562Z
estimatedTokens: 331
keywords: [submitTextClassificationsRequest, textClassificationsRequestInput, llmType, Submits, text, classification, request, Einstein, API, Version, Requires, Chatter, Example]
---

# submitTextClassificationsRequest(textClassificationsRequestInput, llmType)

> Submits a text classification request to Einstein

# submitTextClassificationsRequest(textClassificationsRequestInput, llmType)

Submits a text classification request to Einstein

## API Version

59.0

## Requires Chatter

No

## Signature

public static ConnectApi.TextClassificationsOutputRepresentation submitTextClassificationsRequest(ConnectApi.TextClassificationsInputRepresentation textClassificationsRequestInput, String llmType)

## Parameters

textClassificationsRequestInput

Type: [ConnectApi.TextClassificationsInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_text_classification_representation.htm "Text classification information associating classifiers and text to be classified.")

Text classification containing a list of text strings and classifiers. Each text string is classified into classifiers based on analysis.

llmType

Type: List )[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."))

The large language model that’s used for analysis. Supports Open AI only.

## Return Value

Type: [ConnectApi.TextClassificationsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_text_classifications.htm "HTTP headers containing URLs associating text strings and classifications.")

## Example

```

```

## Related Topics

- ConnectApi.TextClassificationsInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_text_classification_representation.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.TextClassificationsOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_text_classifications.htm)
