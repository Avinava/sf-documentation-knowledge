---
title: "Get Member Ratings and Contributions Action"
domain: insurance-developer-guide
topic: get-member-ratings-and-contributions-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.648Z
estimatedTokens: 524
keywords: [Member, Ratings, Contributions, Action, standard, prorated, insurance, rates, group, census, members, their, selected, plan, coverages]
---

# Get Member Ratings and Contributions Action

> Get standard and prorated insurance rates for the specified group census members and
    their selected plan coverages, including contributions.

# Get Member Ratings and Contributions Action

Get standard and prorated insurance rates for the specified group census members and their selected plan coverages, including contributions.

This action retrieves member-specific coverage selections, validates them against the root plan hierarchy, and invokes the rating service to calculate premiums and contributions. The action returns pricing results with rates at member, plan, and coverage levels, along with hierarchical error information. The action is currently used in enrollment flows.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getMbrsRatingAndContribution

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| groupCensusMembers | TypesobjectDescriptionRequired.Collection of group census member records for whom rates must be calculated.This action retrieves the member IDs from these records.The maximum list size is 2000. |
| contractGroupPlanId | TypestringDescriptionRequired.ID of the root contract group plan for which the rates and contributions must be calculated. This ID represents the primary plan under which coverages are organized.The action validates that selected coverages that belong to this plan hierarchy. |
| effectiveDate | TypedateDescriptionEffective date for rating calculations in yyyy-MM-dd format. If specified, the rating service uses this date to lookup the active pricing procedure and perform proration calculations. If not specified, contract start date is used as default. |

## Outputs

| Output | Details |
| --- | --- |
| memberRatingOutputRep | TypeApex-definedDescriptionAn Apex ind_ins_grpben__MembersPlansRatingOutput record that contains pricing results for the requested members, plans, and coverages.The Apex class includes standard rates, prorated rates, contributions, and hierarchical error information at the request, member, plan, and coverage levels. |

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
          "Id": "0r6SG0000008OFjYAM",
          "Name": "John Doe",
          "FirstName": "John",
          "LastName": "Doe",
          "Email": "john.doe@example.com",
          "BirthDate": "1985-03-15"
        },
        {
          "Id": "0r6SG0000008OFjYAN",
          "Name": "Jane Smith",
          "FirstName": "Jane",
          "LastName": "Smith",
          "Email": "jane.smith@example.com",
          "BirthDate": "1990-07-22"
        }
      ],
      "contractGroupPlanId": "0rgSG0000000ef1YAA",
      "effectiveDate": "2025-10-15"
    }
  ]
}
```

```
[
  {
    "actionName": "getMbrsRatingAndContributions",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "memberRatingOutputRep": {
        "pricingResults": [
          {
            "plans": [
              {
                "rates": [
                  {
                    "value": 60,
                    "key": "NetUnitPrice"
                  }
                ],
                "proratedRates": [
                  {
                    "value": 60,
                    "key": "NetUnitPrice"
                  }
                ],
                "planId": "0rgSG0000000eezYAA",
                "errors": [],
                "coverages": [
                  {
                    "rates": [
                      {
                        "value": 20,
                        "key": "NetUnitPrice"
                      }
                    ],
                    "proratedRates": [
                      {
                        "value": 20,
                        "key": "NetUnitPrice"
                      }
                    ],
                    "errors": [],
                    "coverageId": "0rgSG0000000ef1YAA",
                    "contributions": {
                      "groupClassContributionId": "0rFSG0000000Beb2AE",
                      "errors": [],
                      "employerPremiumAmount": 2,
                      "employeePremiumAmount": 18
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
            "memberId": "0r6SG0000008R33YAE",
            "errors": []
          }
        ],
        "errors": []
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
