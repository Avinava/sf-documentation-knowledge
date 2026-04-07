---
title: "Internationalize Branch Labels"
domain: mc-app-development
topic: internationalize-branch-labels
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:21.432Z
estimatedTokens: 233
keywords: [Sample, Internationalize, Branch, Labels, split, activity, support, internationalization]
---

> Custom split activity branch labels support internationalization.

# Internationalize Branch Labels

Custom split activity branch labels support internationalization.

![](/docs/resources/img/en-us/noversion?doc_id=images%2Fjb-custom-split.gif&folder=mc-app-development)

To internationalize branch labels, map branchResult to an i18n key defined in the activity's config.json under the lang object. The outcomes are mapped to keys in an object map called outcomeLabelLanguageMap.

## Sample

The JSON object in this lang object uses the outcomes from the sample in [Define Custom Split Activity with Multiple Outcomes](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/extending-activities.htm), which defines branches with Buy, Sell, and Hold outcomes.

Map each outcome to its associated i18n key by defining a label map. Each entry is branchResult: i18n key:

If no mapping is found and metaData.label is not defined, Journey Builder displays the outcome's arguments.branchResult.

## Related Topics

- Define Custom Split Activity with Multiple Outcomes (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/extending-activities.htm)
