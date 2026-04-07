---
title: "Bucket Term Input"
domain: salesforce-recipes-api
topic: bucket-term-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:39:18.181Z
estimatedTokens: 124
keywords: [Bucket, Term, recipe, node]
---

> A bucket term in a recipe node.

# Bucket Term Input

A bucket term in a recipe node.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| opType | Recipe​Data​Type | The recipe node data type. Valid recipe data types are:Date​OnlyDate​TimeMultivalueNumberText | Required | 64.0 |
| operands | Map<Object, Object> | A map of operands for the bucket term. | Required | 64.0 |
| operator | String | The operator for the bucket term. | Required | 64.0 |
