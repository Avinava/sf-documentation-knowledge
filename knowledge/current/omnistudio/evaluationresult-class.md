---
title: "EvaluationResult Class"
domain: omnistudio
topic: evaluationresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.488Z
estimatedTokens: 901
namespace: ComplianceMgmt
keywords: [EvaluationResult, Represents, contains, details, compliance, evaluation, result., three, properties—isCompliant, complianceMessage, complianceLogMessage., Example, isCompliant, complianceMessageLog, getComplianceMessage, getComplianceMessageLog, getIsCompliant]
---

# EvaluationResult Class

> Represents the object that contains the details of the compliance evaluation result. It
        contains three properties—isCompliant, complianceMessage, and
        complianceLogMessage.

**Namespace:** `ComplianceMgmt`

# EvaluationResult Class

Represents the object that contains the details of the compliance evaluation result. It contains three properties—isCompliant, complianceMessage, and complianceLogMessage.

## Namespace

[ComplianceMgmt](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_ComplianceMgmt.htm "The ComplianceMgmt namespace provides classes and methods to implement rule processors for compliance control.")

## Example

```

```

-   **[EvaluationResult Constructors](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm#apex_ComplianceMgmt_EvaluationResult_constructors)**
    Learn more about the constructors available with the EvaluationResult class.
-   **[EvaluationResult Methods](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm#apex_ComplianceMgmt_EvaluationResult_methods)**
    Learn more about the methods available with the EvaluationResult class.

## EvaluationResult Constructors

Learn more about the constructors available with the EvaluationResult class.

The EvaluationResult class includes this constructor.

-   **[EvaluationResult(isCompliant, complianceMessage, complianceMessageLog)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm#apex_ComplianceMgmt_EvaluationResult_ctor)**
    Initializes an EvaluationResult object.

### EvaluationResult(isCompliant, complianceMessage, complianceMessageLog)

Initializes an EvaluationResult object.

#### Signature

public EvaluationResult(Boolean isCompliant, String complianceMessage, String complianceMessageLog)

```

```

#### Parameters

isCompliant

Type: Boolean

Indicates whether the compliance evaluated to true or false.

complianceMessage

Type: String

Message associated with the completed evaluation. Maximum length supported for compliance message is 1024 characters.

complianceMessageLog

Type: String

Message stored in compliance logs for the evaluation done. Maximum length supported for compliance message log is 1024 characters.

## EvaluationResult Methods

Learn more about the methods available with the EvaluationResult class.

The EvaluationResult class includes these methods.

-   **[getComplianceMessage()](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm#apex_ComplianceMgmt_EvaluationResult_getComplianceMessage)**
    Gets the message associated with the completed compliance.
-   **[getComplianceMessageLog()](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm#apex_ComplianceMgmt_EvaluationResult_getComplianceMessageLog)**
    Gets the message stored in the log for the compliance evaluation done.
-   **[getIsCompliant()](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm#apex_ComplianceMgmt_EvaluationResult_getIsCompliant)**
    Gets the status of compliance for a control input.

### getComplianceMessage()

Gets the message associated with the completed compliance.

#### Signature

public String getComplianceMessage()

```

```

#### Return Value

Type: String

### getComplianceMessageLog()

Gets the message stored in the log for the compliance evaluation done.

#### Signature

public String getComplianceMessageLog()

```

```

#### Return Value

Type: String

### getIsCompliant()

Gets the status of compliance for a control input.

#### Signature

public Boolean getIsCompliant()

```

```

#### Return Value

Type: Boolean

## Code Examples

```apex
@VisibleApiVersion(minApiVersion='256')
global class EvaluationResult {
   Boolean isCompliant; // Indicates whether the evaluation was compliant (true) or not (false).
   String complianceMessage; // Message associated to compliance evaluation.
   String complianceLogMessage; // Message associated to compliance evaluation                                
                                // that's logged for compliance audits.

   global EvaluationResult(Boolean isCompliant, String complianceMessage, String complianceLogMessage) {
       this.isCompliant = isCompliant;
       this.complianceMessage = complianceMessage;
       this.complianceLogMessage = complianceLogMessage;
   }

   global Boolean getIsCompliant() {
       return this.isCompliant;
   }

   global String getComplianceMessage() {
       return this.complianceMessage;
   }

   global String getComplianceLogMessage() {
       return this.complianceLogMessage;
   }
}
```

```
ComplianceMgmt.EvaluationResult, newinstance, [Boolean, String, String], ComplianceMgmt.EvaluationResult
```

```
ComplianceMgmt.EvaluationResult, getComplianceMessage, [], String
```

```
ComplianceMgmt.EvaluationResult, getComplianceMessageLog, [], String
```

```
ComplianceMgmt.EvaluationResult, getIsCompliant, [], Boolean
```

## Related Topics

- ComplianceMgmt (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_ComplianceMgmt.htm)
- EvaluationResult Constructors (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm)
- EvaluationResult Methods (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm)
- EvaluationResult(isCompliant, complianceMessage, complianceMessageLog) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm)
- getComplianceMessage() (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm)
- getComplianceMessageLog() (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm)
- getIsCompliant() (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm)
