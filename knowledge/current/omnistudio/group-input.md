---
title: "Group Input"
domain: omnistudio
topic: group-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.325Z
keywords: [Group, Input]
---

# Group Input

# Group Input

Input representation of a party relationship group.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| category | String | Category of the party relationship group. | Optional | 58.0 |
| custom​Fields | Map<String, Object> | Custom fields associated with the party relationship group. | Optional | 58.0 |
| description | String | Description of the party relationship group. | Optional | 58.0 |
| endDate | String | End date associated with the party relationship group. | Optional | 58.0 |
| group​Income | String | Total income of the party relationship group. | Optional | 58.0 |
| group​Size | String | Number of active members associated with the party relationship group. | Optional | 58.0 |
| name | String | Name of the party relationship group. | Required | 58.0 |
| party​Relation​GroupId | String | Record ID of the party relationship group. Record ID is optional when creating a group and required when merging groups. | Required | 58.0 |
| primary​Address | Address Input | Primary address of the party relationship group. | Required | 58.0 |
| start​Date | String | Start date associated with the party relationship group. | Optional | 58.0 |
| status | String | Status of the party relationship group. Valid values are:ActiveInactive | Optional | 58.0 |
| subtype | String | Subclassification of the party relationship group type. | Optional | 58.0 |
| type | String | Type of the party relationship group. Valid values are:GroupHousehold | Required | 58.0 |