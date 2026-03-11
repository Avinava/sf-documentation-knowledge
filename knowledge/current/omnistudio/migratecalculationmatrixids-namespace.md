---
title: "migrate(calculationMatrixIds, namespace)"
domain: omnistudio
topic: migratecalculationmatrixids-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.593Z
keywords: [migrate, calculationMatrixIds, namespace, Migrate, calculation, matrices, Vlocity, package, Business, Rules, Engine, decision, matrices., Signature, Parameters, Return, Value]
---

# migrate(calculationMatrixIds, namespace)

> Migrate calculation matrices from the Vlocity package to the Business
      Rules Engine as decision matrices.

### migrate(calculationMatrixIds, namespace)

Migrate calculation matrices from the Vlocity package to the Business Rules Engine as decision matrices.

#### Signature

public static Map<String,Object\> migrate(List<String\> calculationMatrixIds, String namespace)

#### Parameters

calculationMatrixIds

Type: List<String>

The 18-character IDs of the calculation matrices in the Vlocity managed package to be migrated to the Business Rules Engine as decision matrices.

namespace

Type: String

The namespace in which Vlocity is deployed as a managed package. For example, vlocity\_ins. This contains the calculation matrix custom objects.

#### Return Value

Type: Map<String,Object>