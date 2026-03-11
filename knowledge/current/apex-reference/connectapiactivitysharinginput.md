---
title: "ConnectApi.ActivitySharingInput"
domain: apex-reference
topic: connectapiactivitysharinginput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.747Z
keywords: [ConnectApi.ActivitySharingInput]
---

# ConnectApi.ActivitySharingInput

# ConnectApi.ActivitySharingInput

Defines who a captured email or event is shared with.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| groupsTo​ShareWith | List<String> | List of IDs for the groups that you share the activity with. Valid only if sharingType is MyGroups. | Optional | 39.0 |
| sharingType | ConnectApi.​Activity​SharingType | Type of sharing operation. Values are:Everyone—The activity is shared with everyone.MyGroups—The activity is shared only with a selection of the context user’s groups.OnlyMe—The activity is private. | Required | 39.0 |