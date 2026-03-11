---
title: "migrate(calcProcedureId, namespace)"
domain: omnistudio
topic: migratecalcprocedureid-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.598Z
keywords: [migrate, calcProcedureId, namespace, Migrate, calculation, procedure, Vlocity, package, expression, set, Business, Rules, Engine., Signature, Parameters, Return, Value]
---

# migrate(calcProcedureId, namespace)

> Migrate a calculation procedure from the Vlocity package as an
      expression set to the Business Rules Engine.

### migrate(calcProcedureId, namespace)

Migrate a calculation procedure from the Vlocity package as an expression set to the Business Rules Engine.

#### Signature

public static Map<String,Object\> migrate(String calcProcedureId, String namespace)

#### Parameters

calcProcedureId

Type: String

The 18-character ID of the calculation procedure in the Vlocity managed package to be migrated to the Business Rules Engine as an expression set.

namespace

Type: String

The namespace in which Vlocity is deployed as a managed package. For example, vlocity\_ins. This contains the calculation procedure custom objects.

#### Return Value

Type: Map<String,Object>