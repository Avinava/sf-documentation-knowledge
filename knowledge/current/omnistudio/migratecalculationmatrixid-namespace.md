---
title: "migrate(calculationMatrixId, namespace)"
domain: omnistudio
topic: migratecalculationmatrixid-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.593Z
keywords: [migrate, calculationMatrixId, namespace, Migrate, calculation, matrix, Vlocity, package, decision, Business, Rules, Engine., Signature, Parameters, Return, Value]
---

# migrate(calculationMatrixId, namespace)

> Migrate a calculation matrix from the Vlocity package as a decision
      matrix to the Business Rules Engine.

### migrate(calculationMatrixId, namespace)

Migrate a calculation matrix from the Vlocity package as a decision matrix to the Business Rules Engine.

#### Signature

public static Map<String,Object\> migrate(String calculationMatrixId, String namespace)

#### Parameters

calculationMatrixId

Type: String

The 18-character ID of the calculation matrix in the Vlocity managed package to be migrated to the Business Rules Engine as a decision matrix.

namespace

Type: String

The namespace in which Vlocity is deployed as a managed package. For example, vlocity\_ins. This contains the calculation matrix custom objects.

#### Return Value

Type: Map<String,Object>