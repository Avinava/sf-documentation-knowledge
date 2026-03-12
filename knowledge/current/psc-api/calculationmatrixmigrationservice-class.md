---
title: "CalculationMatrixMigrationService Class"
domain: psc-api
topic: calculationmatrixmigrationservice-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.456Z
estimatedTokens: 750
namespace: BusinessRule
keywords: [CalculationMatrixMigrationService, migrating, calculation, matrices, Vlocity, package, Business, Rules, Engine, decision, migrate, calculationMatrixIds, calculationMatrixId]
---

# CalculationMatrixMigrationService Class

> Contains methods for migrating calculation matrices from the Vlocity
      package to the Business Rules Engine as decision matrices.

**Namespace:** `BusinessRule`

# CalculationMatrixMigrationService Class

Contains methods for migrating calculation matrices from the Vlocity package to the Business Rules Engine as decision matrices.

## Namespace

[BusinessRule](atlas.en-us.psc_api.meta/psc_api/apex_namespace_BusinessRule.htm "The BusinessRule namespace provides classes for migrating calculation matrices and calculation procedures from Vlocity to the Business Rules Engine in Salesforce.")

## Example

This example converts a list of calculation matrix IDs to decision matrix IDs and logs the result in the debug log.

```

```

This example converts a calculation matrix ID to a decision matrix ID and logs the result in the debug log.

```

```

-   **[CalculationMatrixMigrationService Methods](atlas.en-us.psc_api.meta/psc_api/apex_class_BusinessRule_CalculationMatrixMigrationService.htm#apex_BusinessRule_CalculationMatrixMigrationService_methods)**


## CalculationMatrixMigrationService Methods

The following are methods for CalculationMatrixMigrationService.

-   **[migrate(calculationMatrixIds, namespace)](atlas.en-us.psc_api.meta/psc_api/apex_class_BusinessRule_CalculationMatrixMigrationService.htm#apex_BusinessRule_CalculationMatrixMigrationService_migrate)**
    Migrate calculation matrices from the Vlocity package to the Business Rules Engine as decision matrices.
-   **[migrate(calculationMatrixId, namespace)](atlas.en-us.psc_api.meta/psc_api/apex_class_BusinessRule_CalculationMatrixMigrationService.htm#apex_BusinessRule_CalculationMatrixMigrationService_migrate_2)**
    Migrate a calculation matrix from the Vlocity package as a decision matrix to the Business Rules Engine.

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

## Code Examples

```apex
List<String> ids = new List<String>();
ids.add('a03xx000004WhvkAAC');
ids.add('a03xx000004WhxMAAS');
ids.add('a03xx000004WhyyAAC');

System.debug('TO MIGRATE A LIST OF CALCULATION MATRICES');
System.debug(BusinessRule.CalculationMatrixMigrationService.migrate(ids, 'vlocity_ins'));
```

```apex
System.debug('TO MIGRATE A CALCULATION MATRIX');
System.debug(BusinessRule.CalculationMatrixMigrationService.migrate('a03xx000004Wi0aAAC', 'vlocity_ins'));
```

## Related Topics

- BusinessRule (atlas.en-us.psc_api.meta/psc_api/apex_namespace_BusinessRule.htm)
- CalculationMatrixMigrationService Methods (atlas.en-us.psc_api.meta/psc_api/apex_class_BusinessRule_CalculationMatrixMigrationService.htm)
- migrate(calculationMatrixIds, namespace) (atlas.en-us.psc_api.meta/psc_api/apex_class_BusinessRule_CalculationMatrixMigrationService.htm)
- migrate(calculationMatrixId, namespace) (atlas.en-us.psc_api.meta/psc_api/apex_class_BusinessRule_CalculationMatrixMigrationService.htm)
