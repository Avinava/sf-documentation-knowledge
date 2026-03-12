---
title: "setCustomVariable"
domain: live-agent-dev
topic: setcustomvariable
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.033Z
estimatedTokens: 224
keywords: [setCustomVariable, customized, criteria, sending, rules, met, order, automated, invitation, sent, customers, Usage]
---

# setCustomVariable

> Use the setCustomVariable method to create customized criteria in your sending rules that
must be met in order for your automated invitation to be sent to customers.

# setCustomVariable

Use the setCustomVariable method to create customized criteria in your sending rules that must be met in order for your automated invitation to be sent to customers.

## Usage

Creates customized criteria in your sending rules that must be met in order for your automated invitation to be sent to customers. Specifies the comparison values for custom variables used in criteria for your sending rules. Available in API versions 28.0 and later.

## Syntax

**void** setCustomVariable(**String** variableName, **Object** value)

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| variableName | String | The name of the customized criteria for your custom sending rule. | Available in API versions 28.0 and later. |
| value | Object | The comparison value for your custom sending rule. | Available in API versions 28.0 and later. |
