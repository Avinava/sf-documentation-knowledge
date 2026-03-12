---
title: "Speech To Text Action"
domain: api-action
topic: speech-to-text-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.218Z
estimatedTokens: 205
keywords: [Speech, Text, Action, Converts, audio, file, AI-powered, recognition, REST, HTTP, Inputs, Outputs, Usage]
---

# Speech To Text Action

> Converts speech in an audio file to text using AI-powered speech
        recognition.

# Speech To Text Action

Converts speech in an audio file to text using AI-powered speech recognition.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/speechToText

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| contentDocumentId | TypestringDescriptionRequired. The ID of the audio file stored in Salesforce Files. This value is the contentDocumentId from the ContentDocument object that represents the file to be transcribed. |

## Outputs

| OUTput | Details |
| --- | --- |
| convertedText | DescriptionThe transcript of the audio file, returned as plain text in the detected language. |

## Usage

Sample Input

```

```

Sample Output

```

```

## Code Examples

```
{
    "inputs": [
        {
            "contentDocumentId": "069xx000004WhFoAAK",
        }
    ]
}
```

```
{
    "outputs": [
         {
             "convertedText": "Thank you for contacting support. How can I help you today?"
         }
    ]
}
```
