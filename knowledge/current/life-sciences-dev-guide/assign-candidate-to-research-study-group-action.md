---
title: "Assign Candidate to Research Study Group Action"
domain: life-sciences-dev-guide
topic: assign-candidate-to-research-study-group-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.966Z
estimatedTokens: 582
keywords: [Assign, Candidate, Research, Study, Group, Action, candidates, enrolled, clinical, trials, randomization, comparison, groups, Special, Access]
---

# Assign Candidate to Research Study Group Action

> Assign candidates, enrolled in the clinical trials through
			randomization to research study comparison groups.

# Assign Candidate to Research Study Group Action

Assign candidates, enrolled in the clinical trials through randomization to research study comparison groups.

This action is available in API version 61.0 and later.

## Special Access Rules

The Assign Candidate to Research Study Group action is available in Enterprise and Unlimited Editions with Life Sciences Cloud and the Participant Enrollment Add-On license. Additionally, the org must be enabled with Research Study Randomization.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/assignCndtToResearchStudyGroup

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| researchStudy​CandidateId | TypestringDescriptionRequired.ID of the research study candidate record that’s randomly assigned to a research study comparison group. |

## Outputs

The researchStudyComparisonGroupId parameter is shown in the response body only if one of these conditions is met.

-   The DoesAsgnCandidatesToGroups field on the ResearchStdyRandomization object is set to false.
-   The DoesAsgnCandidatesToGroups field is set to true and the user has access to the ResearchStdyCmprGroupCndt object.

| Output | Details |
| --- | --- |
| candidateAllocation​SourceId | TypestringDescriptionID of the context object or process that’s used to determine the group to assign a candidate to. |
| researchStudy​ComparisonGroupId | TypestringDescriptionID of the research study comparison group that’s assigned to a candidate. |

## Example

POST

This sample request is for the Assign Candidate to Research Study Group action.

```

```

This sample response is for the Assign Candidate to Research Study Group action.

```

```

#### See Also

-   [*Salesforce Help*: Enable Participant Management](https://help.salesforce.com/s/articleView?id=ind.lsc_admin_enable_participant_management.htm&type=5&language=en_US "Salesforce Help: Enable Participant Management - HTML (New Window)")

-   [*Salesforce Help*: Anonymize Participant Allocation Using Randomization](https://help.salesforce.com/s/articleView?id=ind.lsc_admin_participant_management_using_randomization.htm&type=5&language=en_US "Salesforce Help: Anonymize Participant Allocation Using
    Randomization - HTML (New Window)")

## Code Examples

```
{
  "inputs": [
    {
      "researchStudyCandidateId": "7evxx00000000cjAAA"
    }
  ]
}
```

```
[
  {
    "actionName": "assignCndtToResearchStudyGroup",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outputValues": {
      "researchStudyComparisonGroupId": "1F0xx0000004CSPCA2",
      "candidateAllocationSourceId": "1LtSG0000002P8n"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
