---
title: "Node Path and Tag Values Input"
domain: omnistudio
topic: node-path-and-tag-values-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.370Z
keywords: [Node, Path, Tag, Values, Input]
---

# Node Path and Tag Values Input

# Node Path and Tag Values Input

Input representation of the node path which needs to update with tag details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| nodePath | String | Path of Context Data Record. | Required | 63.0 |
| tagValues | List<Context​TagValueInput​Representation | List of Tag Names to be updated and their values. | Required | 63.0 |