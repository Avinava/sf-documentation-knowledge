---
title: "Med Statement Input Payload"
domain: health-cloud-object-reference
topic: med-statement-input-payload
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.088Z
estimatedTokens: 106
keywords: [Med, Statement, Input, Payload, representation, patient’s, medication]
---

# Med Statement Input Payload

> Input representation of the request to create a patient’s medication
            statement.

# Med Statement Input Payload

Input representation of the request to create a patient’s medication statement.

Root XML tag

<MedStatementInputPayload>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| medicationStatement | FHIR Medication Statement | Represents a record of a patient’s medication statement. | Required | 54.0 |

## Code Examples

```
{
   "medicationStatement":{
      "identifier":[
         {
            "assigner":{
               "referenceResource":"Organization",
               "salesforceId":"001RM000005EBfKYAW"
            },
            "type":{
               "text":"Passport number",
               "coding":[
                  {
                     "display":"Passport number",
                     "code":"PPN",
                     "isActive":true,
                     "use":"Identifier"
                  }
               ]
            },
            "value":"ABCD5678",
            "use":"Official",
            "periodStart":"1998-05-26T15:40:30.000Z",
            "periodEnd":"2021-08-09T15:40:30.000Z",
            "sourceSystem":"http://sfdc.co",
            "sourceSystemId":"567890",
            "sourceSystemModifiedDate":"2012-07-26T15:40:30.000Z"
         },
         {
            "assigner":{
               "referenceResource":"Organization",
               "salesforceId":"001RM000005EBfKYAW"
            },
            "type":{
               "text":"Passport number1",
               "coding":[
                  {
                     "display":"Passport number",
                     "code":"PPN",
                     "isActive":true,
                     "use":"Identifier"
                  }
               ]
            },
            "value":"ABCD5678B",
            "use":"Official",
            "periodStart":"1998-05-26T15:40:30.000Z",
            "periodEnd":"2021-08-09T15:40:30.000Z",
            "sourceSystem":"http://sfdc.co",
            "sourceSystemId":"567890",
            "sourceSystemModifiedDate":"2012-07-26T15:40:30.000Z"
         }
      ],
      "basedOn":[
         {
            "referenceResource":"MedicationRequest",
            "referenceId":"",
            "salesforceId":"0kmRM0000004CHMYA2",
            "relationship":""
         },
         {
            "referenceResource":"MedicationRequest",
            "referenceId":"",
            "salesforceId":"0kmRM0000004CHMYA2",
            "relationship":""
         }
      ],
      "partOf":[
         {
            "referenceResource":"MedicationStatement",
            "salesforceId":"0juRM00000000PzYAI",
            "relationship":""
         },
         {
            "referenceResource":"Procedure",
            "referenceId":"",
            "salesforceId":"0jQRM0000004CNU2A2",
            "relationship":""
         },
         {
            "referenceResource":"Observation",
            "referenceId":"",
            "salesforceId":"0hIRM0000004CsM2AU",
            "relationship":""
         },
         {
            "referenceResource":"MedicationDispense",
            "referenceId":"",
            "salesforceId":"0NBRM0000004CGx4AM",
            "relationship":""
         },
         {
            "referenceResource":"MedicationDispense",
            "referenceId":"",
            "salesforceId":"0NBRM00000000Jz4AI",
            "relationship":""
         },
         {
            "referenceResource":"MedicationDispense",
            "referenceId":"",
            "salesforceId":"0NBRM0000004CGx4AM",
            "relationship":""
         }
      ],
      "status":"active",
      "statusReason":[
         {
            "codeableConcept":{
               "text":"Burn of Ear status reason",
               "coding":[
                  {
                     "display":"Burn of status reasonn ear",
                     "code":"1234995607",
                     "system":"http://sfdc.co",
                     "version":"2.16.840.1.113883.6.96",
                     "isActive":true,
                     "isPrimary":true,
                     "use":"Clinical",
                     "userSelected":true,
                     "startDate":"1993-11-09T15:40:30.000Z",
                     "endDate":"2021-08-24T17:00:00.000Z"
                  }
               ]
            }
         },
         {
            "codeableConcept":{
               "text":"Burn of Ear status reason",
               "coding":[
                  {
                     "display":"Burn of status reasonn ear",
                     "code":"1234785607",
                     "system":"http://sfdc.co",
                     "version":"2.16.840.1.113883.6.96",
                     "isActive":true,
                     "isPrimary":true,
                     "use":"Clinical",
                     "userSelected":true,
                     "startDate":"1993-11-09T15:40:30.000Z",
                     "endDate":"2021-08-24T17:00:00.000Z"
                  }
               ]
            }
         }
      ],
      "category":"Inpatient",
      "medication":{
         "medicationReference":{
            "referenceResource":"Medication",
            "referenceId":"",
            "salesforceId":"0itRM0000004CUkYAM",
            "relationship":""
         }
      },
      "context":{
         "referenceResource":"Encounter",
         "referenceId":"",
         "salesforceId":"0kGRM0000004CWZ2A2",
         "relationship":""
      },
      "effectiveStartDateTime":"2012-07-26T15:40:30.000Z",
      "effectiveEndDateTime":"2012-07-27T15:40:30.000Z",
      "dateAsserted":"2012-07-26T15:40:30.000Z",
      "informationSource":{
         "referenceResource":"Patient",
         "referenceId":"",
         "relationship":"",
         "salesforceId":"001RM000005EBfKYAW"
      },
      "derivedFrom":[
         {
            "referenceResource":"MedicationRequest",
            "referenceId":"",
            "salesforceId":"0kmRM0000004CHMYA2",
            "relationship":""
         },
         {
            "referenceResource":"MedicationRequest",
            "referenceId":"",
            "salesforceId":"0kmRM0000004CHMYA2",
            "relationship":""
         },
         {
            "referenceResource":"Procedure",
            "referenceId":"",
            "salesforceId":"0jQRM0000004CNU2A2",
            "relationship":""
         },
         {
            "referenceResource":"ServiceRequest",
            "referenceId":"",
            "salesforceId":"0jyRM000000000aYAA",
            "relationship":""
         },
         {
            "referenceResource":"MedicationDispense",
            "referenceId":"",
            "salesforceId":"0NBRM0000004CGx4AM",
            "relationship":""
         },
         {
            "referenceResource":"MedicationStatement",
            "referenceId":"",
            "salesforceId":"0juRM00000000TSYAY",
            "relationship":""
         },
         {
            "referenceResource":"Observation",
            "referenceId":"",
            "salesforceId":"0hIRM0000004CsM2AU",
            "relationship":""
         },
         {
            "referenceResource":"Condition",
            "salesforceId":"0j4RM0000004CJXYA2",
            "relationship":""
         },
         {
            "referenceResource":"DiagnosticReport",
            "salesforceId":"0lQRM000000000k2AA",
            "relationship":""
         }
      ],
      "reasonCode":[
         {
            "salesforceId":"0iPRM0000004CuR2AU"
         },
         {
            "codeableConcept":{
               "text":"Burn of Ear sdfstatus reason",
               "coding":[
                  {
                     "display":"Burn of status reasonn ear",
                     "code":"12345dsn607",
                     "system":"http://sfdc.co",
                     "version":"2.16.840.1.113883.6.96",
                     "isActive":true,
                     "isPrimary":true,
                     "use":"Clinical",
                     "userSelected":true,
                     "startDate":"1993-11-09T15:40:30.000Z",
                     "endDate":"2021-08-24T17:00:00.000Z"
                  }
               ]
            }
         }
      ],
      "reasonReference":[
         {
            "referenceResource":"Condition",
            "salesforceId":"0j4RM0000004CJXYA2",
            "relationship":""
         },
         {
            "referenceResource":"Observation",
            "salesforceId":"0hIRM0000004CsM2AU",
            "relationship":""
         },
         {
            "referenceResource":"DiagnosticReport",
            "salesforceId":"0lQRM000000000k2AA",
            "relationship":""
         }
      ],
      "sourceSystem":"http://sfdc.co",
      "sourceSystemId":"567890",
      "sourceSystemModified":"2012-07-26T15:40:30.000Z",
      "dosage":[
         {
            "sequence":"10.0",
            "text":"commentsText",
            "additionalInstruction":"Additioanl Instructions",
            "patientInstruction":"Patient Instructions",
            "asNeeded":"true",
            "site":{
               "codeableConcept":{
                  "text":"Burn of Ear route2",
                  "coding":[
                     {
                        "display":"Burn of ear route2",
                        "code":"61234567002",
                        "system":"http://sfdc.co",
                        "version":"2.16.840.1.113883.6.96",
                        "isActive":true,
                        "isPrimary":true,
                        "use":"Clinical",
                        "userSelected":true,
                        "startDate":"1993-11-09T15:40:30.000Z",
                        "endDate":"2021-08-24T17:00:00.000Z"
                     }
                  ]
               }
            },
            "route":{
               "codeableConcept":{
                  "text":"Burn of Ear route",
                  "coding":[
                     {
                        "display":"Burn of ear route",
                        "code":"12344456700",
                        "system":"http://sfdc.co",
                        "version":"2.16.840.1.113883.6.96",
                        "isActive":true,
                        "isPrimary":true,
                        "use":"Clinical",
                        "userSelected":true,
                        "startDate":"1993-11-09T15:40:30.000Z",
                        "endDate":"2021-08-24T17:00:00.000Z"
                     }
                  ]
               }
            },
            "method":{
               "codeableConcept":{
                  "text":"Burn of Ear Method",
                  "coding":[
                     {
                        "display":"Burn of ear",
                        "code":"12345637777",
                        "system":"http://sfdc.co",
                        "version":"2.16.840.1.113883.6.96",
                        "isActive":true,
                        "isPrimary":true,
                        "use":"Clinical",
                        "userSelected":true,
                        "startDate":"1993-11-09T15:40:30.000Z",
                        "endDate":"2021-08-24T17:00:00.000Z"
                     }
                  ]
               }
            },
            "doseAndRate":{
               "type":"Ordered",
               "dose":{
                  "dosageQuantityType":"Dose",
                  "dosageQuantityNumerator":"10",
                  "dosageQuantityDenominator":"20",
                  "dosageUnit":{
                     "unitOfMeasure":{
                        "unitCode":"MGTttest",
                        "description":"MG description",
                        "type":"Custom"
                     }
                  }
               },
               "rate":{
                  "dosageRateType":"Frequency Ratio",
                  "dosageRateNumerator":"2",
                  "dosageRateDenominator":"3",
                  "dosageRateUnit":{
                     "unitOfMeasure":{
                        "unitCode":"MGTeste2",
                        "description":"MG description2",
                        "type":"Custom"
                     }
                  }
               }
            },
            "sourceSystem":"http://sfdc.co",
            "sourceSystemId":"567890",
            "sourceSystemModified":"2012-07-26T15:40:30.000Z"
         },
         {
            "sequence":"100.0",
            "text":"commentsText2",
            "additionalInstruction":"Additioanl Instructions2",
            "patientInstruction":"Patient Instructions2",
            "asNeeded":"false",
            "site":{
               "codeableConcept":{
                  "text":"Burn of Ear route2",
                  "coding":[
                     {
                        "display":"Burn of ear route2",
                        "code":"12345674002",
                        "system":"http://sfdc.co",
                        "version":"2.16.840.1.113883.6.96",
                        "isActive":true,
                        "isPrimary":true,
                        "use":"Clinical",
                        "userSelected":true,
                        "startDate":"1993-11-09T15:40:30.000Z",
                        "endDate":"2021-08-24T17:00:00.000Z"
                     }
                  ]
               }
            },
            "route":{
               "codeableConcept":{
                  "text":"Burn of Ear route2",
                  "coding":[
                     {
                        "display":"Burn of ear route2",
                        "code":"12345670032",
                        "system":"http://sfdc.co",
                        "version":"2.16.840.1.113883.6.96",
                        "isActive":true,
                        "isPrimary":true,
                        "use":"Clinical",
                        "userSelected":true,
                        "startDate":"1993-11-09T15:40:30.000Z",
                        "endDate":"2021-08-24T17:00:00.000Z"
                     }
                  ]
               }
            },
            "method":{
               "codeableConcept":{
                  "text":"Burn of Ear Method2",
                  "coding":[
                     {
                        "display":"Burn of ear Method2",
                        "code":"1234567777577",
                        "system":"http://sfdc.co",
                        "version":"2.16.840.1.113883.6.96",
                        "isActive":true,
                        "isPrimary":true,
                        "use":"Clinical",
                        "userSelected":true,
                        "startDate":"1993-11-09T15:40:30.000Z",
                        "endDate":"2021-08-24T17:00:00.000Z"
                     }
                  ]
               }
            },
            "doseAndRate":{
               "type":"Ordered",
               "dose":{
                  "dosageQuantityType":"Dose",
                  "dosageQuantityNumerator":"100",
                  "dosageQuantityDenominator":"200",
                  "dosageUnit":{
                     "unitOfMeasure":{
                        "unitCode":"MGTest23",
                        "description":"MG description2",
                        "type":"Custom"
                     }
                  }
               },
               "rate":{
                  "dosageRateType":"Frequency Ratio",
                  "dosageRateNumerator":"200",
                  "dosageRateDenominator":"300",
                  "dosageRateUnit":{
                     "unitOfMeasure":{
                        "unitCode":"MGTest24",
                        "description":"MG description2",
                        "type":"Custom"
                     }
                  }
               }
            },
            "sourceSystem":"http://sfdc.co",
            "sourceSystemId":"567890",
            "sourceSystemModified":"2012-07-26T15:40:30.000Z"
         }
      ]
   }
}
```

## Related Topics

- FHIR Medication Statement (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_fhir_medication_statemen.htm)
