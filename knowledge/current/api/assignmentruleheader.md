---
title: "AssignmentRuleHeader"
domain: api
topic: assignmentruleheader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.690Z
estimatedTokens: 558
keywords: [AssignmentRuleHeader, call, Case, Lead, assignment, rule, applied, Account, territory, rules, API, Calls, Sample, Code]
---

# AssignmentRuleHeader

> The AssignmentRuleHeader must be specified in the create() or update() call of a Case or Lead for the specified assignment 
  rule to be applied, and it must be specified in the update() call of an Account for the territory 
  assignment rules to be applied.

# AssignmentRuleHeader

The AssignmentRuleHeader must be specified in the create() or update() call of a Case or Lead for the specified assignment rule to be applied, and it must be specified in the update() call of an Account for the territory assignment rules to be applied.

## API Calls

[create()](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data."), [merge()](atlas.en-us.api.meta/api/sforce_api_calls_merge.htm "Combines up to three records of the same type into one record. The input is an array of MergeRequest elements, each of which specifies the records to combine. The output is a MergeResult object that contains information about the result of the merge."), [update()](atlas.en-us.api.meta/api/sforce_api_calls_update.htm "Updates one or more existing records in your organization's data."), [upsert()](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data.")

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| assignmentRuleId | ID | The ID of a specific assignment rule to run for the Case or Lead. The assignment rule can be active or inactive. The ID can be retrieved by querying the AssignmentRule object. If specified, do not specify useDefaultRule. This element is ignored for accounts, because all territory assignment rules are applied.If the value is not in the correct ID format (15-character or 18-character Salesforce ID), the call fails and a MALFORMED_ID exception is returned. |
| useDefaultRule | boolean | If true for a Case or Lead, uses the default (active) assignment rule for a Case or Lead. If specified, don’t specify an assignmentRuleId. If true for an Account, all territory assignment rules are applied. If false for an Account, no territory assignment rules are applied. |

## Sample Code

For a code example, see [Lead](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lead.htm "HTML (New Window)").

#### See Also

-   [AssignmentRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_objects_assignmentrule.htm "AssignmentRule - HTML (New Window)")

## Related Topics

- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- merge() (atlas.en-us.api.meta/api/sforce_api_calls_merge.htm)
- update() (atlas.en-us.api.meta/api/sforce_api_calls_update.htm)
- upsert() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- MALFORMED_ID (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
