---
title: "Serialize Hierarchical Context Data"
domain: life-sciences-dev-guide
topic: serialize-hierarchical-context-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:43.829Z
estimatedTokens: 236
keywords: [Serialize, Hierarchical, Context, Data, Serializes, Apex, embeddedai__RecordApexRepresentation, records, passed, input, prompt, template, generates, summary, REST]
---

# Serialize Hierarchical Context Data

> Serializes the hierarchical context data from the Apex embeddedai__RecordApexRepresentation records that
            are passed as input to a prompt template that generates a summary of the
        data.

# Serialize Hierarchical Context Data

Serializes the hierarchical context data from the Apex embeddedai\_\_RecordApexRepresentation records that are passed as input to a prompt template that generates a summary of the data.

This action is available in API version 62.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/serializeHierarchicalContextData

Formats

JSON, XML

HTTP Methods

GET

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| recordApexRepresentation | TypeApex typeDescriptionRequiredA collection of Apex embeddedai__RecordApexRepresentation records that contain the details of the hierarchical data to serialize context data |

## Outputs

| Output | Details |
| --- | --- |
| serializedContextData | TypeStringDescriptionA JSON string of serialized hierarchical context data. |

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
            "recordApexRepresentation": {
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
        }
    ]
}
```

```
{
        "serializedContextData": {
            "CareProgram": {
                "Name": "Drug Use Satisfaction Improvement Program",
                "Outcome": [
                    {
                        "Name": "Reduced Symptoms",
                        "IndicatorAssignment": [
                            {
                                "IndicatorDefinitionName": "Symptom Monitoring",
                                "UnitOfMeasureName": "Percentage"
                            }
                        ]
                    }
                ]
            }
        }
    }
```
