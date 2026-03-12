---
title: "getFieldIsReadOnlyMap(entityName,
        fieldNames)"
domain: omnistudio
topic: getfieldisreadonlymapentityname-fieldnames
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.859Z
estimatedTokens: 189
keywords: [getFieldIsReadOnlyMap, entityName, fieldNames, Accepts, entity's, input, indicating, whether, read-only, Usage]
---

# getFieldIsReadOnlyMap(entityName,
        fieldNames)

> Accepts an entity's name and a list of its fields as input, and returns a value
        indicating whether the fields are read-only.

# getFieldIsReadOnlyMap(entityName, fieldNames)

Accepts an entity's name and a list of its fields as input, and returns a value indicating whether the fields are read-only.

## Signature

public Map<String, Boolean\> getFieldIsReadOnlyMap(String entityName, Set<String\> fieldNames)

## Parameters

entityName

Type: String

Name of the entity to retrieve field information for.

fieldNames

Type: String

List of field names to determine if they are read-only.

## Return Value

Type:Map<String, Boolean>

Returns the fields that are read only.

## Usage

Create a set of field names to identify the Field Level Security (FLS) for, and pass this set as an argument to the method, along with the name of the entity to which the fields belong.

```

```

## Code Examples

```apex
Set<String> applicantFieldsForFLS = new Set<String> {'birthdate', 'email', 'phone', 'firstname', 'lastname'};
Map<String, Boolean> flsInfo = DigitalLendingUtils.getFieldIsReadOnlyMap('Applicant', applicantFieldsForFLS);
```
