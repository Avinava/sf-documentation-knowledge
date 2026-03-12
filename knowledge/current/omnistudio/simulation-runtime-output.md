---
title: "Simulation Runtime Output"
domain: omnistudio
topic: simulation-runtime-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.408Z
estimatedTokens: 140
keywords: [Simulation, Runtime, Output, representation, results, expression]
---

# Simulation Runtime Output

> Output representation of the results of an expression set from the
      simulation.

# Simulation Runtime Output

Output representation of the results of an expression set from the simulation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| aggregationResults | Map<String, String> | Aggregation results of the expression set from the simulation when the step type is Aggregation. | Small, 54.0 | 54.0 |
| calculationResults | Map<String, String>[] | Calculation results of the expression set from the simulation when the step type is Calculation. | Small, 54.0 | 54.0 |
