---
title: "Generate Research Study Blocks Action"
domain: life-sciences-dev-guide
topic: generate-research-study-blocks-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.971Z
estimatedTokens: 527
keywords: [Generate, Research, Study, Blocks, Action, randomization, block, records, link, specific, comparison, group, process, Special, Access]
---

# Generate Research Study Blocks Action

> Generate research study randomization block records to link each block
			with a specific research study comparison group by using the randomization
		process.

# Generate Research Study Blocks Action

Generate research study randomization block records to link each block with a specific research study comparison group by using the randomization process.

The Generate Research Study Blocks action generates blocks during the design time to verify the randomized assignment of groups and to test the required block multipliers.

This action is available in API version 61.0 and later.

## Special Access Rules

The Generate Research Study Blocks action is available in Enterprise and Unlimited Editions with Life Sciences Cloud and the Participant Enrollment Add-On license. Additionally, the org must be enabled with Research Study Randomization.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/generateResearchStudyBlocks

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| researchStudy​RandomizationId | TypestringDescriptionRequired.ID of the research study randomization record that you want to generate the blocks for. |
| researchStudy​TargetCandidateCount | TypeintegerDescriptionRequired.Number of candidates that you want to generate the blocks for. |

## Outputs

| Output | Details |
| --- | --- |
| researchStudy​RandomizationBlockIds | TypestringDescriptionList of generated research study randomization block IDs. |

## Example

POST

This sample request is for the Generate Research Study Blocks action.

```

```

This sample response is for the Generate Research Study Blocks action.

```

```

#### See Also

-   [*Salesforce Help*: Enable Participant Management](https://help.salesforce.com/s/articleView?id=ind.lsc_admin_enable_participant_management.htm&type=5&language=en_US "Salesforce Help: Enable Participant Management - HTML (New Window)")

-   [*Salesforce Help*: Enroll Participants Using Block Generation](https://help.salesforce.com/s/articleView?id=ind.lsc_admin_participant_management_create_using_block_generation.htm&type=5&language=en_US "Salesforce Help: Enroll Participants Using Block Generation - HTML (New Window)")

## Code Examples

```
{
  "inputs": [
    {
      "researchStudyRandomizationId": "1Rdxx0000004CguCAE",
      "researchStudyTargetCandidateCount": 10
    }
  ]
}
```

```
[
  {
    "actionName": "generateResearchStudyBlocks",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outputValues": {
      "researchStudyRandomizationBlockIds": [
        "1Mtxx0000004CLw",
        "1Mtxx0000004CLx",
        "1Mtxx0000004CLy"
      ]
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
