---
title: "Get Assessment Response Summary"
domain: financial-services-cloud-object-reference
topic: get-assessment-response-summary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.875Z
estimatedTokens: 518
keywords: [Assessment, Summary, easy, flow, trigger, server-side, document, generation, REST, HTTP, Inputs, Outputs, Usage]
---

# Get Assessment Response Summary

> Get Assessment Response Summary makes it easy to use a flow to trigger
      server-side document generation using Document Generation.

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

## Code Examples

```
{
  "inputs" : [ {"assessmentId" : "0U3RO00000005FN0AY"} ]
}
```

```
"KYC_Individual_English": {
    "Step1": {
      "label": "Identity Details",
      "value": {
        "LC_Survey_Question_2": {
          "label": "Full Name",
          "value": "Joe Smith"
        },
        "DateofBirth_m": {
          "label": "Date of Birth",
          "value": "Thu Jul 27 00:00:00 GMT 2000"
        },
        "Gender_m": {
          "label": "Gender",
          "value": "Female"
        },
        "EmailAddress_m": {
          "label": "Email Address",
          "value": "Joe.Smith@company.com"
        },
        "PAN": {
          "label": "PAN",
          "value": "QWEASDZXC"
        }
      }
    },
    "Step2": {
      "label": "Address Details",
      "value": {
        "Address_CorrespondenceAdd_Corporate": {
          "label": "Address of Correspondence",
          "value": "100 Some St, San Francisco, CA 12345, United States"
        },
        "Address_ContactDetails_Corporate": {
          "label": "Telephone/Mobile",
          "value": "1616111233"
        },
        "Alternate_Contact": {
          "label": "Alternate Mobile Number",
          "value": "1911212123"
        }
      }
    },
    "Step3": {
      "label": "Account Declaration",
      "value": {
        "Account_declaration": {
          "label": "I declare that I have following deposit accounts with your/
other bank's branches :",
          "value": [
            {
              "Bank": {
                "label": "Bank",
                "value": "Acme1"
              },
              "Branch": {
                "label": "Branch",
                "value": "Mission St"
              },
              "Type_of_Account": {
                "label": "Type of Account",
                "value": "Checking"
              },
              "Account_Number": {
                "label": "Account Number",
                "value": "12345678"
              }
            },
            {
              "Bank": {
                "label": "Bank",
                "value": "Acme2"
              },
              "Branch": {
                "label": "Branch",
                "value": "Mission St"
              },
              "Type_of_Account": {
                "label": "Type of Account",
                "value": "Savings"
              },
              "Account_Number": {
                "label": "Account Number",
                "value": "1234567890"
              }
            }
          ]
        }
      }
    },
    "Step4": {
      "label": "Declaration",
      "value": {
        "Declaration_m": {
          "label": "The customer declares and certifies that the information in this 
form is true and correct. Any pre-filled sections of this form must be reviewed prior
 to signing and submitting, to ensure the information accurately conveys the new 
account details.",
          "value": "true"
        }
      }
    }
  }
}
```
