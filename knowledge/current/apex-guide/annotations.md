---
title: "Annotations"
domain: apex-guide
topic: annotations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.442Z
keywords: [Annotations]
---

# Annotations

# Annotations

An Apex annotation modifies the way that a method or class is used, similar to annotations in Java. Annotations are defined with an initial @ symbol, followed by the appropriate keyword.

To add an annotation to a method, specify it immediately before the method or class definition. For example:

```

```

Apex supports these annotations.

-   [@AuraEnabled](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_AuraEnabled.htm)
-   [@Deprecated](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_deprecated.htm)
-   [@Future](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_future.htm "Use the Future annotation to identify methods that run asynchronously. A future method runs when Salesforce has available resources.")
-   [@InvocableMethod](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "Use the InvocableMethod annotation to identify methods that can be run as invocable actions.")
-   [@InvocableVariable](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm "To identify variables used by invocable methods in custom classes, use the InvocableVariable annotation.")
-   [@IsTest](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm)
-   [@JsonAccess](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_JsonAccess.htm "The @JsonAccess annotation defined at Apex class level controls whether instances of the class can be serialized or deserialized. If the annotation restricts the JSON or XML serialization and deserialization, a runtime JSONException exception is thrown.")
-   [@NamespaceAccessible](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm)
-   [@ReadOnly](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_ReadOnly.htm)
-   [@RemoteAction](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_RemoteAction.htm)
-   [@SuppressWarnings](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_SuppressWarnings.htm "This annotation does nothing in Apex but can be used to provide information to third-party tools.")
-   [@TestSetup](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_testsetup.htm "Methods defined with the @TestSetup annotation are used for creating common test records that are available for all test methods in the class.")
-   [@TestVisible](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_testvisible.htm)
-   Apex REST annotations:
    -   [@ReadOnly](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_ReadOnly.htm)
    -   [@RestResource](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_rest_resource.htm)(urlMapping='/yourUrl')
    -   [@HttpDelete](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_http_delete.htm)
    -   [@HttpGet](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_http_get.htm)
    -   [@HttpPatch](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_http_patch.htm)
    -   [@HttpPost](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_http_post.htm)
    -   [@HttpPut](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_http_put.htm)

You can use multiple annotations for the same class or method. Specify each annotation on a separate line immediately before the class or method definition. Some annotations can’t be used together. If applicable, these limitations are documented on the page for the annotation.

1.  [AuraEnabled Annotation Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_AuraEnabled.htm)  
    
2.  [Deprecated Annotation Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_deprecated.htm)  
    
3.  [Future Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_future.htm)  
    Use the Future annotation to identify methods that run asynchronously. A future method runs when Salesforce has available resources.
4.  [InvocableMethod Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm)  
    Use the InvocableMethod annotation to identify methods that can be run as invocable actions.
5.  [InvocableVariable Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm)  
    To identify variables used by invocable methods in custom classes, use the InvocableVariable annotation.
6.  [IsTest Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm)  
    
7.  [JsonAccess Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_JsonAccess.htm)  
    The @JsonAccess annotation defined at Apex class level controls whether instances of the class can be serialized or deserialized. If the annotation restricts the JSON or XML serialization and deserialization, a runtime JSONException exception is thrown.
8.  [NamespaceAccessible Annotation Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm)  
    
9.  [ReadOnly Annotation Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_ReadOnly.htm)  
    
10.  [RemoteAction Annotation Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_RemoteAction.htm)  
     
11.  [SuppressWarnings Annotation Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_SuppressWarnings.htm)  
     This annotation does nothing in Apex but can be used to provide information to third-party tools.
12.  [TestSetup Annotation Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_testsetup.htm)  
     Methods defined with the @TestSetup annotation are used for creating common test records that are available for all test methods in the class.
13.  [TestVisible Annotation Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_testvisible.htm)  
     

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords.htm "Keywords")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_casting.htm "Classes and Casting")