---
title: "Loyalty Process Input Options"
domain: loyalty
topic: loyalty-process-input-options
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.936Z
estimatedTokens: 143
keywords: [Loyalty, Process, Input, Options, representation, execution]
---

# Loyalty Process Input Options

> Input representation of the execution options for the loyalty
      process.

# Loyalty Process Input Options

Input representation of the execution options for the loyalty process.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| executionType | Enum | Specifies the Rules Engine execution type. Possible values are:Explainability—If the execution type is Explainability, the process is executed and the output parameters are returned in the response.Simulation— If the execution type is Simulation, only the simulation details are returned in the response. | Required | 56.0 |
