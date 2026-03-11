---
title: "Reminder Details"
domain: omnistudio
topic: reminder-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.804Z
keywords: [Reminder, Details]
---

# Reminder Details

# Reminder Details

Output representation of the reminder definition request to create or update a reminder.

JSON example

Here’s a sample response body of a created or updated reminder definition.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | String[] | Errors that indicate why the request failed. | Small, 60.0 | 60.0 |
| reminder​DefinitionId | String | ID of the reminder definition that’s created or updated. | Small, 60.0 | 60.0 |
| reminder​DefinitionName | String | Name of the reminder definition. | Small, 60.0 | 60.0 |
| status | String | Status of the reminder definition that’s created or updated. Valid values are:FailureSuccess | Small, 60.0 | 60.0 |
| warnings | String[] | Warnings that are shown when the request is processed. | Small, 60.0 | 60.0 |