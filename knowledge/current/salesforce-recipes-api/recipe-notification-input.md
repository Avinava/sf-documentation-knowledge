---
title: "Recipe Notification Input"
domain: salesforce-recipes-api
topic: recipe-notification-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:39:18.632Z
estimatedTokens: 125
keywords: [Recipe, Notification, prep]
---

> A notification for a data prep recipe.

# Recipe Notification Input

A notification for a data prep recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| long​Running​Alert​In​Mins | Integer | The number of minutes that a recipe can run before sending an alert. | Optional | 49.0 |
| notification​Level | Connect​Email​Notification​Level​Enum | Valid types of email notification levels. Valid values are:AlwaysFailuresNeverWarnings | Required | 49.0 |
