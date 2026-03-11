---
title: "ComplianceMgmt Namespace"
domain: omnistudio
topic: compliancemgmt-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.915Z
keywords: [ComplianceMgmt, Namespace]
---

# ComplianceMgmt Namespace

# ComplianceMgmt Namespace

The ComplianceMgmt namespace provides classes and methods to implement rule processors for compliance control.

The ComplianceMgmt namespace includes these classes.

-   **[ComplianceEvaluation Interface](atlas.en-us.industries_reference.meta/industries_reference/apex_interface_ComplianceMgmt_ComplianceEvaluation.htm#apex_interface_ComplianceMgmt_ComplianceEvaluation)**  
    Contains a method to evaluate compliance control. Add logic to compute compliance in the evaluate(var1) method by using the data from ControlEvaluationInput class.
-   **[ControlEvaluationInput Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlEvaluationInput.htm#apex_class_ComplianceMgmt_ControlEvaluationInput)**  
    Represents the input object used by the ComplianceEvaluation interface's evaluate method. It contains a map of ControlInput class that stores the business context value required to evaluate compliance.
-   **[ControlInput Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlInput.htm#apex_class_ComplianceMgmt_ControlInput)**  
    Represents a control input that's used in the evaluation of compliance. It includes two main properties: parameterName and parameterType.
-   **[ControlInputType Enum](atlas.en-us.industries_reference.meta/industries_reference/apex_enum_ComplianceMgmt_ControlInputType.htm)**  
    The type of the control input parameter that’s business context.
-   **[ComplianceEvaluationResponse Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceEvaluationResponse.htm#apex_class_ComplianceMgmt_ComplianceEvaluationResponse)**  
    Represents the compliance evaluation response from a control evaluation. It's the output of the ComplianceEvaluation interface's evaluate method and includes two properties—evaluationResult and complianceControlLog.
-   **[EvaluationResult Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm#apex_class_ComplianceMgmt_EvaluationResult)**  
    Represents the object that contains the details of the compliance evaluation result. It contains three properties—isCompliant, complianceMessage, and complianceLogMessage.
-   **[ComplianceControlLog Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceControlLog.htm#apex_class_ComplianceMgmt_ComplianceControlLog)**  
    Represents a map of business context and evidence that's logged to evaluate compliance for the control.