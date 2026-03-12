---
title: "Process Member Enrollment Action"
domain: insurance-developer-guide
topic: process-member-enrollment-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.682Z
estimatedTokens: 542
keywords: [Process, Member, Enrollment, Action, insurance, policies, group, census, members, per, their, selected, plans, REST, HTTP]
---

# Process Member Enrollment Action

> Create insurance policies for specified group census members as per their selected
        plans.

# Process Member Enrollment Action

Create insurance policies for specified group census members as per their selected plans.

The action retrieves member-specific coverage selections, validates them against the plan selection and checks for duplicate policies if specified in action parameter, and generates insurance policies, coverages, participants and related objects. The action returns list of insurance policy IDs that are generated or error if they occur during the processing.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/processMemberEnrollment

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| contractGroupPlanId | TypestringDescriptionRequiredID of the Contract Group Plan that's used to retrieve associated product and coverage details. |
| createRelatedObjectRecords | TypebooleanDescriptionIndicates whether to create related records for each insurance policy participant (true) or not (false).If set to true, two insurance policy participant related object records are created per participant. The first record maps the participant to the associated Group Census Member, and the second record links the participant to either a Person Account or a Contact, based on their participant type. |
| duplicateCheckRequired | TypebooleanDescriptionIndicates whether to check for duplicate policies (true) or not (false).The default value is true.If set to true and a policy already exists for the same member and product category, this invocable action shows an error. |
| groupCensusMembers | TypesobjectDescriptionCollection of group census member records that represent the members that must be enrolled. |
| pricingResult | TypeApex-definedDescriptionCollection of Apex ConnectApi.MembersPlansRatingOutput records that contain pricing results for the requested members. |

## Outputs

| Output | Details |
| --- | --- |
| insurancePolicyIds | TypestringDescriptionIDs of the insurance policy records that are created. |

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
      "groupCensusMembers": [
        {
          "Id": "0r6SG00000093MrYAI",
          "Name": "John Doe",
          "FirstName": "John",
          "LastName": "Doe",
          "Email": "john.doe@example.com",
          "BirthDate": "1998-03-15"
        }
      ],
      "contractGroupPlanId": "0rgSG0000000iaXYAQ",
      "pricingResult": {
        "pricingResults": [
          {
            "plans": [
              {
                "rates": [
                  {
                    "value": 60,
                    "key": "NetUnitPrice"
                  },
                  {
                    "value": 0,
                    "key": "StandardQLITaxAmount"
                  }
                ],
                "proratedRates": [
                  {
                    "value": 60,
                    "key": "NetUnitPrice"
                  },
                  {
                    "value": 0,
                    "key": "StandardQLITaxAmount"
                  }
                ],
                "planId": "0rgSG0000000iaXYAQ",
                "errors": [],
                "coverages": [
                  {
                    "rates": [
                      {
                        "value": 0,
                        "key": "StandardQLITaxAmount"
                      },
                      {
                        "value": 20,
                        "key": "NetUnitPrice"
                      }
                    ],
                    "proratedRates": [
                      {
                        "value": 0,
                        "key": "StandardQLITaxAmount"
                      },
                      {
                        "value": 20,
                        "key": "NetUnitPrice"
                      }
                    ],
                    "errors": [],
                    "coverageId": "0rgSG0000000iaZYAQ",
                    "contributions": {
                      "groupClassContributionId": "0rFSG0000000Beb2AE",
                      "errors": [],
                      "employerPremiumAmount": 2,
                      "employeePremiumAmount": 18
                    }
                  },
                  {
                    "rates": [
                      {
                        "value": 0,
                        "key": "StandardQLITaxAmount"
                      },
                      {
                        "value": 40,
                        "key": "NetUnitPrice"
                      }
                    ],
                    "proratedRates": [
                      {
                        "value": 0,
                        "key": "StandardQLITaxAmount"
                      },
                      {
                        "value": 40,
                        "key": "NetUnitPrice"
                      }
                    ],
                    "errors": [],
                    "coverageId": "0rgSG0000000iaaYAA",
                    "contributions": {
                      "groupClassContributionId": null,
                      "errors": [],
                      "employerPremiumAmount": 0,
                      "employeePremiumAmount": 40
                    }
                  }
                ],
                "contributions": {
                  "groupClassContributionId": null,
                  "errors": [],
                  "employerPremiumAmount": 2,
                  "employeePremiumAmount": 58
                }
              }
            ],
            "memberId": "0r6SG00000093MrYAI",
            "errors": []
          }
        ],
        "errors": []
      }
    }
  ]
}
```

```
[
  {
    "actionName": "processMemberEnrollment",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "insurancePolicyIds": ["0YTSG000000QzO14AK"]
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
