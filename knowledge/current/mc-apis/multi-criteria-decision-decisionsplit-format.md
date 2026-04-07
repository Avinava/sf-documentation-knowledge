---
title: "Multi Criteria Decision (DecisionSplit) Format"
domain: mc-apis
topic: multi-criteria-decision-decisionsplit-format
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:21.329Z
estimatedTokens: 846
keywords: [Multi, Criteria, Decision, DecisionSplit, multi-criteria, activity, split, decides, branch, contact, follows, workflow, attribute, runtime, cannot]
---

# Multi Criteria Decision (DecisionSplit) Format

> The multi-criteria decision activity, also called the decision split activity, decides which branch a contact follows in a workflow based on contact attribute values at runtime. This activity type cannot be used in a custom activity.

# Multi Criteria Decision (DecisionSplit) Format

The multi-criteria decision activity, also called the decision split activity, decides which branch a contact follows in a workflow based on contact attribute values at runtime. This activity type cannot be used in a custom activity.

## [](#journey-specification-format)Journey Specification Format

The activity must be formatted as specified below. The following JSON object is included in the activities array of a journey, as defined in the Journey Specification.

## Helpful Hints

-   The outcome of this decision affects goal statistics.
-   The schemaVersionId comes from the GET /schema resource.
-   Use entry data or activity output data as configurationArguments in an outcome branch.
-   Use the schema object on a custom activity to make activity output data visible to downstream activities.

## Sample Request

```js
{
        "type": "MultiCriteriaDecision",
        "key": "MY-ACTIVITY-KEY-1",
        "name": "My Split",
        "configurationArguments": {
            "criteria": {
                "OUTCOME-1": "<Filter XML HERE>...",
                "OUTCOME-2": "<Filter XML HERE>...",
                "OUTCOME-3": "<Filter XML HERE>..."
            },
            "schemaVersionId": 47
        },
        "outcomes": [
            {
                "key": "OUTCOME-2",
                "metaData": {
                    "label": "Branch A"
                },
                "next": "<next activity key>"
            },
            {
                "key": "OUTCOME-1",
                "metaData": {
                    "label": "Branch B"
                },
                "next": "<next activity key>"
            },
            {
                "key": "OUTCOME-3",
                "metaData": {
                    "label": "Branch C"
                },
                "next": "<next activity key>"
            }
        ]
}
```

## Sample Response

```js
{
    "id": "<unique-GUID-provided-by-SFMC>",
    "type": "MultiCriteriaDecision",
    "key": "MY-ACTIVITY-KEY-1",
    "name": "My Split",
        "configurationArguments": {
            "criteria": {
                "OUTCOME-1": "<Filter XML HERE>...",
                "OUTCOME-2": "<Filter XML HERE>...",
                "OUTCOME-3": "<Filter XML HERE>..."
            },
            "schemaVersionId": 47
        },
        "outcomes": [
            {
                "key": "OUTCOME-2",
                "metaData": {
                    "label": "Branch A"
                },
                "next": "<next activity key>"
            },
            {
                "key": "OUTCOME-1",
                "metaData": {
                    "label": "Branch B"
                },
                "next": "<next activity key>"
            },
            {
                "key": "OUTCOME-3",
                "metaData": {
                    "label": "Branch C"
                },
                "next": "<next activity key>"
            }
        ]
}
```

## Related Items

-   [GET /schema Resource](atlas.en-us.noversion.mc-apis.meta/mc-apis/schemasCollection.htm)
-   [Journey Specification](atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
-   [Make Activity Output Data Visible to Downstream Activities](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/creating-activities.htm)

## Related Topics

- GET /schema Resource (atlas.en-us.noversion.mc-apis.meta/mc-apis/schemasCollection.htm)
- Journey Specification (atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
