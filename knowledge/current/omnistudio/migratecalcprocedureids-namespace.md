---
title: "migrate(calcProcedureIds, namespace)"
domain: omnistudio
topic: migratecalcprocedureids-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.598Z
keywords: [migrate, calcProcedureIds, namespace, Migrate, calculation, procedures, Vlocity, package, expression, sets, Business, Rules, Engine., Signature, Parameters, Return, Value]
---

# migrate(calcProcedureIds, namespace)

> Migrate calculation procedures from the Vlocity package as expression
      sets to the Business Rules Engine.

### migrate(calcProcedureIds, namespace)

Migrate calculation procedures from the Vlocity package as expression sets to the Business Rules Engine.

#### Signature

public static Map<String,Object\> migrate(List<String\> calcProcedureIds, String namespace)

#### Parameters

calcProcedureIds

Type: List<String>

The 18-character IDs of the calculation procedures in the Vlocity managed package to be migrated to the Business Rules Engine as expression sets.

18 character ID.

namespace

Type: String

The namespace in which Vlocity is deployed as a managed package. For example, vlocity\_ins. This contains the calculation procedure custom objects.

#### Return Value

Type: Map<String,Object>