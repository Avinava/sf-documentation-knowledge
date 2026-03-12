---
title: "Dashboard Snapshot Item Last Run"
domain: bi-dev-guide-rest
topic: dashboard-snapshot-item-last-run
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.164Z
estimatedTokens: 154
keywords: [Dashboard, Snapshot, Item, Run, Analytics]
---

# Dashboard Snapshot Item Last Run

> The Analytics dashboard snapshot item last run information.

# Dashboard Snapshot Item Last Run

The Analytics dashboard snapshot item last run information.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| last​Run​Date | Date | The timestamp when the dashboard snapshot item was run. | Small, 48.0 | 48.0 |
| last​Run​Status | Connect​Dashboard​Snapshot​Item​Last​Run​Status​Enum | The status of the dashboard snapshot item run. Valid values are:Dashboard​Bundle​Failed​To​LoadFailed​To​Parse​ValueFailed​To​Persist​DataGeneric​ExceptionQuery​Execution​FailedSuccess | Small, 48.0 | 48.0 |
