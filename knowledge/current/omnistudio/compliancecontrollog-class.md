---
title: "ComplianceControlLog Class"
domain: omnistudio
topic: compliancecontrollog-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.502Z
estimatedTokens: 534
namespace: ComplianceMgmt
keywords: [ComplianceControlLog, map, business, context, evidence, that's, logged, evaluate, compliance, control, addLog, attributeName, attributeValue, getBusinessContextEvidenceMap]
---

# ComplianceControlLog Class

> Represents a map of business context and evidence that's logged to evaluate compliance
        for the control.

**Namespace:** `ComplianceMgmt`

# ComplianceControlLog Class

Represents a map of business context and evidence that's logged to evaluate compliance for the control.

## Namespace

[ComplianceMgmt](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_ComplianceMgmt.htm "The ComplianceMgmt namespace provides classes and methods to implement rule processors for compliance control.")

## Example

```

```

-   **[ComplianceControlLog Methods](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceControlLog.htm#apex_ComplianceMgmt_ComplianceControlLog_methods)**
    Learn more about the methods available with the ComplianceControlLog class.

## ComplianceControlLog Methods

Learn more about the methods available with the ComplianceControlLog class.

The ComplianceControlLog class includes these methods.

-   **[addLog(attributeName, attributeValue)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceControlLog.htm#apex_ComplianceMgmt_ComplianceControlLog_addLog)**
    Add a log entry with a name and value. Maximum number of log entries is 25.
-   **[getBusinessContextEvidenceMap()](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceControlLog.htm#apex_ComplianceMgmt_ComplianceControlLog_getBusinessContextEvidenceMap)**
    Gets the business context and evidence map.

### addLog(attributeName, attributeValue)

Add a log entry with a name and value. Maximum number of log entries is 25.

#### Signature

public void addLog(String attributeName, String attributeValue)

```

```

#### Parameters

attributeName

Type: String

Name of the log entry. The maximum size is 100 characters.

attributeValue

Type: String

Value of the log entry. The maximum size is 1024 characters.

#### Return Value

Type: void

### getBusinessContextEvidenceMap()

Gets the business context and evidence map.

#### Signature

public Map<String,String> getBusinessContextEvidenceMap()

```

```

#### Return Value

Type: Map<String,String>

Map of attributes and their values that must be logged for compliance coverage.

## Code Examples

```apex
@VisibleApiVersion(minApiVersion='256')
global class ComplianceControlLog {
   Map<String,String> businessContextEvidenceMap; // Map of attributes and their values that must be logged for compliance coverage.

   global ComplianceControlLog() {
       this.businessContextEvidenceMap = new Map<String,String>();
   }

   global void addLog(String attrName, String attrValue) {
       this.businessContextEvidenceMap.put(attrName, attrValue);
   }

   global Map<String,String> getBusinessContextEvidenceMap() {
       return this.businessContextEvidenceMap;
   }

}
```

```
ComplianceMgmt.ComplianceControlLog, addLog, [String, String], void
```

```apex
ComplianceMgmt.ComplianceControlLog, getBusinessContextEvidenceMap, [], Map<String,String>
```

## Related Topics

- ComplianceMgmt (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_ComplianceMgmt.htm)
- ComplianceControlLog Methods (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceControlLog.htm)
- addLog(attributeName, attributeValue) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceControlLog.htm)
- getBusinessContextEvidenceMap() (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceControlLog.htm)
