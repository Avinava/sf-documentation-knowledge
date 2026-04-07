---
title: "Define a Custom Split Activity with Multiple Outcomes"
domain: mc-app-development
topic: define-a-custom-split-activity-with-multiple-outcomes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.098Z
estimatedTokens: 344
keywords: [Define, Custom, Split, Activity, Multiple, Outcomes, provide, possible, activities, Journey, Builder, activity's, config.json, javascript, overrides]
---

# Define a Custom Split Activity with Multiple Outcomes

> You can provide multiple possible outcomes for your custom split activities in Journey Builder. First, define default outcomes in the activity's config.json. The activity's custom javascript then overrides these default outcomes programmatically, or based on user-supplied values.

# Define a Custom Split Activity with Multiple Outcomes

You can provide multiple possible outcomes for your custom split activities in Journey Builder. First, define default outcomes in the activity's config.json. The activity's custom javascript then overrides these default outcomes programmatically, or based on user-supplied values.

> Use the RestDecision activity type when configuring multiple outcomes.

![](/docs/resources/img/en-us/noversion?doc_id=images%2Fjb-custom-split.gif&folder=mc-app-development)

## Define Default Outcomes

To define default outcomes, include an outcomes object in the activity's config.json.

-   Each default outcome must contain an arguments object that contains a branchResult field. Journey Builder expects the custom activity's Execute REST call response to contain the { branchResult: value } object. The value matches the branchResult of one of the activity's outcomes.
-   Give the custom activity a label in the UI. Include a label field in the outcome's metaData object. Journey Builder displays the text in this field when users hover over the branch entry point.

    > If you don't define a label, it is loaded using the i18n strings from the config.json.


## Sample

## Related Items

-   [Internationalize Branch Labels](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/internationalize-branch-labels.htm)

## Related Topics

- Internationalize Branch Labels (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/internationalize-branch-labels.htm)
