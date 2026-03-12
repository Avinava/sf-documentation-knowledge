---
title: "Get Context Data Action"
domain: life-sciences-dev-guide
topic: get-context-data-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:43.819Z
estimatedTokens: 255
keywords: [Context, Data, Action, Retrieves, passed, input, prompt, template, generates, summary, REST, HTTP, Inputs, Outputs]
---

# Get Context Data Action

> Retrieves the context data that is passed as an input to a prompt
            template that generates a summary of the data.

# Get Context Data Action

Retrieves the context data that is passed as an input to a prompt template that generates a summary of the data.

This action is available in API version 62.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getContextData

Formats

JSON, XML

HTTP Methods

GET

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| contextInputRepresentation | TypeList<Apex>DescriptionRequiredA collection of Apex embeddedai__ContextInputRep records that contain details of the hierarchical data of the sObjects to get the context data for. |
| contextDefinitionName | TypeStringDescriptionRequiredThe name of the context definition to use to get the context data. |

## Outputs

| Output | Details |
| --- | --- |
| recordApexRepresentation | TypeList<Apex>DescriptionA collection of Apex embeddedai__RecordApexRepresentationrecords that contain the context data. |

## Example

Sample Request

```

```

Sample Response

```

```

## Code Examples

```
{
    "inputs": [
        {
            "contextInputRepresentation": [
                {
                    "mappingName": "OutcomeSummaryMapping",
                    "ids": [
                        "9OCxx0000004C92GAE"
                    ],
                    "objectName": "Outcome",
                    "nodeName": "SummaryContext"
                }
            ],
            "contextDefinitionName": "CareProgramOutcomeSummary__stdctx"
        }
    ]
}
```

```
[
    {
        "recordApexRepresentation": [
            {
                "relatedRecordData": [
                    {
                        "relatedRecordData": [
                            {
                                "recordData": [
                                    {
                                        "value": "Percentage",
                                        "key": "UnitOfMeasureName"
                                    },
                                    {
                                        "value": "Symptom Monitoring",
                                        "key": "IndicatorDefinitionName"
                                    }
                                ],
                                "objectType": "IndicatorAssignment"
                            }
                        ],
                        "recordData": [
                            {
                                "value": "Reduced Symptoms",
                                "key": "Name"
                            }
                        ],
                        "objectType": "Outcome"
                    }
                ],
                "recordData": [
                    {
                        "value": "Drug Use Satisfaction Improvement Program",
                        "key": "Name"
                    }
                ],
                "objectType": "CareProgram"
            }
        ]
    }
]
```
