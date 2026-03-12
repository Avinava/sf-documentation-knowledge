---
title: "Folder Schedule Resource"
domain: bi-dev-guide-rest
topic: folder-schedule-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.748Z
estimatedTokens: 147
keywords: [Folder, Schedule, Resource, deletes, updates, Analytics, app]
---

# Folder Schedule Resource

> Returns, deletes, or updates the schedule for an Analytics app or folder
  with the specified ID.

# Folder Schedule Resource

Returns, deletes, or updates the schedule for an Analytics app or folder with the specified ID.

Resource URL



```

```

Formats

JSON

Available Version

57.0

HTTP Methods

GET DELETE PATCH

Response body for GET and PATCH

[Wave Folder Schedule](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_folder_schedule.htm "An Analytics folder schedule.")

Request body for PATCH

[Wave Folder Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_schedule_input.htm "An Analytics folder schedule.")

## Code Examples

```
/wave/folders/<folderID>/schedule
```

## Related Topics

- Wave Folder Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_folder_schedule.htm)
- Wave Folder Schedule Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_schedule_input.htm)
