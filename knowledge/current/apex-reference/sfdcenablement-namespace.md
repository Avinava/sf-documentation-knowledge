---
title: "Sfdc_Enablement Namespace"
domain: apex-reference
topic: sfdcenablement-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.203Z
keywords: [Sfdc_Enablement, Namespace, Sfdc, _Enablement]
---

# Sfdc_Enablement Namespace

# Sfdc\_Enablement Namespace

The sfdc\_enablement namespace provides classes for creating custom learning items to implement custom exercise types in Enablement programs. Lightning web components are used to render the custom exercises on Program Builder.

The following are the classes in the sfdc\_enablement namespace.

-   **[LearningEvaluation Class](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluation.htm#apex_class_sfdc_enablement_LearningEvaluation)**  
    Contains methods to retrieve and update details that are required to evaluate a learning item.
-   **[LearningEvaluationResult Class](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm#apex_class_sfdc_enablement_LearningEvaluationResult)**  
    Represents a user’s progress and progress status of a custom exercise in an Enablement program.
-   **[LearningItemEvaluationHandler Class](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemEvaluationHandler.htm#apex_class_sfdc_enablement_LearningItemEvaluationHandler)**  
    Contains methods to customize the evaluation process of a learning item.
-   **[LearningItemProgressStatus Enum](atlas.en-us.apexref.meta/apexref/apex_enum_sfdc_enablement_LearningItemProgressStatus.htm)**  
    Represents the status of a user’s progress for a learning item in an Enablement program.
-   **[LearningItemSerializeDeserializer Class](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemSerializeDeserializer.htm#apex_class_sfdc_enablement_LearningItemSerializeDeserializer)**  
    Serializes and deserializes the content associated with a custom exercise when migrating an Enablement program from one org to another.