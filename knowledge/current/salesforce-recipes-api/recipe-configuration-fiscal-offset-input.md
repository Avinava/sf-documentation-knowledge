---
title: "Recipe Configuration Fiscal Offset Input"
domain: salesforce-recipes-api
topic: recipe-configuration-fiscal-offset-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:39:18.584Z
estimatedTokens: 137
keywords: [Recipe, Configuration, Fiscal, Offset, prep]
---

> The data prep recipe fiscal offset configuration data.

# Recipe Configuration Fiscal Offset Input

The data prep recipe fiscal offset configuration data.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The ID of the recipe configuration. | Required | 54.0 |
| month​Offset | String | The month offset. | Required | 54.0 |
| year​Based​On | Recipe​Configuration​Fiscal​Offset​Year​Based​On​Enum | The fiscal offset year based on for the recipe configuration. Valid values are:EndStart | Required | 54.0 |
