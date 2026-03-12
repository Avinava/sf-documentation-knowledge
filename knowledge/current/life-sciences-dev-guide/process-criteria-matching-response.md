---
title: "Process Criteria Matching Response"
domain: life-sciences-dev-guide
topic: process-criteria-matching-response
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.976Z
estimatedTokens: 414
keywords: [Process, Criteria, Matching, Parses, GPT-generated, JSON, evaluate, inclusion, exclusion, criterion, Research, Study, Candidate, determining, whether]
---

# Process Criteria Matching Response

> Parses a GPT-generated JSON response to evaluate each inclusion and
            exclusion criterion for a given Research Study Candidate, determining whether each
            criterion is matched or not. This action stores the GPT response in the Care Program
            Enrollment Evaluation Result entity and computes the number of matched inclusion
            criteria and exclusion criteria, returning these counts as output.

# Process Criteria Matching Response

Parses a GPT-generated JSON response to evaluate each inclusion and exclusion criterion for a given Research Study Candidate, determining whether each criterion is matched or not. This action stores the GPT response in the Care Program Enrollment Evaluation Result entity and computes the number of matched inclusion criteria and exclusion criteria, returning these counts as output.

This action is available in API version 62.0 and later.

## Special Access Rules

The Assign Candidate to Research Study Group action is available in Enterprise and Unlimited Editions with Life Sciences Cloud and the Participant Enrollment Add-On license. Additionally, the org must be enabled with Research Study Randomization.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/processCriteriaMatchingResp

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| researchStudy​CandidateId | TypestringDescriptionRequiredID of the research study candidate for which GPT response is received. |
| gptResponse | TypestringDescriptionRequiredGPT Response of PromptTemplate Invocable action will be input to this action. |

## Outputs

| Output | Details |
| --- | --- |
| matchedInclusionCount | TypestringDescriptionNumber of inclusion criteria matched. |
| matchedExclusionCount | TypestringDescriptionNumber of exclusion criteria matched. |

## Example

POST

This sample request is for the Process Criteria Matching Response action.

```

```

This sample response is for the Process Criteria Matching Response action.

```

```

## Code Examples

```
{
    "inputs": [
        {
            "researchStudyCandidateId": "7evxx0000000001AAA",
            "gptResponse": {
                "EligibilityResponse": [
                    {
                        "Id": "0bkxx0000000001AAA",
                        "EligibilityCriteria": "Adult SARI patients with 2019-ncov infection confirmed by PCR",
                        "Result": "Unknown",
                        "Reason": "No information provided"
                    },
                    {
                        "Id": "0bkxx000000001dAAA",
                        "EligibilityCriteria": "Age < 78",
                        "Result": "Match",
                        "Reason": "Patient is 50 years old."
                    },
                    {
                        "Id": "0bkxx000000003FAAQ",
                        "EligibilityCriteria": "Pregnant",
                        "Result": "Not Match",
                        "Reason": "Patient is male."
                    },
                    {
                        "Id": "0bkxx000000004rAAA",
                        "EligibilityCriteria": "Allergic to Gluten",
                        "Result": "Match",
                        "Reason": "Patient has Gluten Allergy."
                    }
                ]
            }
        }
    ]
}
```

```
{
  "inclusionCriteriaMatchCount": 1,
  "exclusionCriteriaMatchCount": 1
}
```
