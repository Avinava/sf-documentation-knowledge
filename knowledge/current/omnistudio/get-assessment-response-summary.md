---
title: "Get Assessment Response Summary"
domain: omnistudio
topic: get-assessment-response-summary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.458Z
keywords: [Get, Assessment, Response, Summary, Supported, REST, HTTP, Methods, Inputs, Outputs, Usage]
---

# Get Assessment Response Summary

# Get Assessment Response Summary

Get Assessment Response Summary makes it easy to use a flow to trigger server-side document generation using Document Generation.

In the Discovery Framework, the responses from an assessment are stored in the AssessmentQuestionResponse object and the form metadata stays in the OmniScript. You can use this invocable action to pass assessment summary data to downstream processes. This invocable action provides summary JSON code that can be consumed in Document Generation workflows to generate documents.

The Get Assessment Response Summary invocable action takes an assessment ID as input to get the OmniScript (OmniProcess) ID, which is used to retrieve the OmniScript. The assessment ID also retrieves the assessment response and merges the response with the OmniScript to create an assessment summary response in the summary JSON code.

This object is available in API version 56.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v56.0/actions/standard/getAssessmentResponseSummary

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| assessmentId | TypeIDDescriptionRequired. The ID of the assessment record for which to summarize responses. |

## Outputs

| Output | Details |
| --- | --- |
| assessmentResponseSummary | TypestringDescriptionA JSON string containing the summary assessment question texts and responses for the specified assessment record. The response summary structure follows the structure of the OmniScript. |

## Usage

Sample Input

When exposing the Get Assessment Response Summary invocable action in a REST API, you can use the following format to pass input, which includes the assessmentId and its value.

```

```

Sample Output

In this example, the first line indicates the OmniScript type, subtype, and language. For each step, there are multiple questions that appear in the OmniScript. You can use this information in a downstream process, such as PDF file rendering using Document Generation.

```

```