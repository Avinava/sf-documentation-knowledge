---
title: "Recipe Notification"
domain: salesforce-recipes-api
topic: recipe-notification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.951Z
estimatedTokens: 149
keywords: [Recipe, Notification, data, prep]
---

# Recipe Notification

> A notification for a data prep recipe.

# Recipe Notification

A notification for a data prep recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| long​Running​Alert​In​Mins | Integer | The number of minutes that a recipe can run before sending an alert. | Small, 49.0 | 49.0 |
| notification​Level | Connect​Email​Notification​Level​Enum | Valid types of email notification levels. Valid values are:AlwaysFailuresNeverWarnings | Small, 49.0 | 49.0 |
| recipe | Asset​Reference | The recipe this notification belongs to. | Small, 54.0 | 54.0 |
