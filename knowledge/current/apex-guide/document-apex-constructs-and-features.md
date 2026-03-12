---
title: "Document Apex Constructs and Features"
domain: apex-guide
topic: document-apex-constructs-and-features
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.244Z
estimatedTokens: 2447
keywords: [Document, Apex, Constructs, Features, unique, constructs, platform-specific, features, require, particular, attention, documentation., guidelines, document, elements, ApexDoc., Classes, Interfaces, Enums, Variables]
---

# Document Apex Constructs and Features

> Apex has unique constructs and platform-specific features that require particular
  attention in documentation. Use these guidelines to document these elements with
  ApexDoc.

# Document Apex Constructs and Features

Apex has unique constructs and platform-specific features that require particular attention in documentation. Use these guidelines to document these elements with ApexDoc.

## Classes

When you document an [Apex class](atlas.en-us.apexcode.meta/apexcode/apex_classes_understanding.htm "As in Java, you can create classes in Apex. A class is a template or blueprint from which objects are created. An object is an instance of a class."), provide a comprehensive overview of the class’s purpose, responsibilities, and key characteristics.

In the summary sentence, describe the class’s ‌overall purpose. After the summary sentence, explain the rationale for the class’s [sharing model](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "Use the with sharing or without sharing keywords on a class to specify whether sharing rules must be enforced. Use the inherited sharing keyword on a class to run the class in the sharing mode of the class that called it.") if it’s not obvious. For example, explain why the class uses without sharing for a specific privileged operation. We also recommend using tags such as @author, @version, @since, @see, and @group, which all provide valuable metadata.

Here’s an example ApexDoc comment for the DataAggregationService class.

```

```

## Interfaces

[Apex interfaces](atlas.en-us.apexcode.meta/apexcode/apex_classes_interfaces.htm "An interface is like a class in which none of the methods have been implemented—the method signatures are there, but the body of each method is empty. To use an interface, another class must implement it by providing a body for all of the methods contained in the interface.") define a contract for what other classes can do without specifying how they do it. Focus your ApexDoc comments on this contract. In the main description, document the interface’s overall purpose and the contract that it defines. Standard metadata tags such as @author, @version, @since, and @see are also applicable.

Document each method declaration in the interface as a standard method. Clearly explain the method’s expected behavior, parameters, and return values. This documentation sets expectations for any class that implements the interface.

For an example of an interface with an ApexDoc comment, see [ApexDoc Examples](atlas.en-us.apexcode.meta/apexcode/apex_doc_examples.htm "See practical examples of ApexDoc comments applied to various Apex constructs.").

## Enums

[Enums](atlas.en-us.apexcode.meta/apexcode/langCon_apex_enums.htm "An enum is an abstract data type with values that each take on exactly one of a finite set of identifiers that you specify. Enums are typically used to define a set of possible values that don’t otherwise have a numerical order. Typical examples include the suit of a card, or a particular season of the year.") in Apex define an abstract data type with a finite set of named constant values. In the main description, document the enum’s purpose and the set of concepts that it represents. You can also use standard tags such as @author, @version, @since, and @see.

Clarify individual enum constants if their names aren’t self-explanatory. Either describe a constant’s definition in the enum type’s ApexDoc main description, or use standard block comments that directly precede the line for the constant.

Apex enums implicitly include methods such as values(), valueOf(String), name(), and ordinal(). These standard methods generally don’t require explicit documentation within each specific enum’s ApexDoc comment.

Here’s an example ApexDoc comment for the Season enum.

```

```

## Methods and Constructors

[Method](atlas.en-us.apexcode.meta/apexcode/apex_classes_defining_methods.htm "Learn how to define Apex methods. Understand the differences between passing method arguments by value and passing method arguments by reference.") and [constructor](atlas.en-us.apexcode.meta/apexcode/apex_classes_constructors.htm) documentation is critical for understanding how to use an Apex class.

When you document method and constructor parameters, use the @param block tag. Each parameter must have a corresponding @param tag. In the parameter description, describe the parameter’s name, its purpose, and any expectations regarding its type or content. Descriptions can include statements such as ‌“Cannot be null” or “A valid 18-character ID”.

For methods that return values, use the @return block tag. In the description, specify what is returned, including conditions for null values or specific data structures. Descriptions can include statements such as “A List of Account sObjects matching the filter criteria; an empty list if no matches are found.”

Use the @throws block tag to list all significant checked and unchecked exceptions that the method can explicitly throw, along with the conditions causing them. This documentation is crucial for identifying gaps in error handling.

For examples of methods and constructors with ApexDoc comments, see [ApexDoc Examples](atlas.en-us.apexcode.meta/apexcode/apex_doc_examples.htm "See practical examples of ApexDoc comments applied to various Apex constructs.").

## Properties and Variables

Document public or global properties and class member variables that form part of a class’s public API.

In the ApexDoc comment’s main description section, explain the property’s purpose, its data type if it’s unclear from the method declaration, and any important usage notes. For example, include whether the property is read-only after initialization, or its default value. Block tags such as @see, @since, and @deprecated can also be applicable.

Here’s an example ApexDoc comment for the public maxRetries variable.

```

```

## Triggers

[Apex triggers](atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm "Apex can be invoked by using triggers. Apex triggers enable you to perform custom actions before or after changes to Salesforce records, such as insertions, updates, or deletions.") are event-driven pieces of code that execute in response to specific database operations. Apex trigger definitions provide significant context, so we strongly recommend that you delegate all business logic to a separate handler class or a trigger framework. Therefore, ApexDoc doesn’t have any trigger-specific comment specifications.

However, you can still include standard ApexDoc tags such as @since and @see. For example, here’s a ApexDoc comment for the Opportunity trigger.

```

```

## Annotations

[Apex annotations](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation.htm "An Apex annotation modifies the way that a method or class is used, similar to annotations in Java. Annotations are defined with an initial @ symbol, followed by the appropriate keyword."), such as @AuraEnabled and @Future, modify the way a class or method is used by the platform and other code. For an element that has an annotation, document the implications of that annotation for the element’s behavior or usage.

Refer to this table as you write ApexDoc comments for elements with Apex annotations.

| Apex Annotation | Guidance for the ApexDoc Comment of the Annotated Element |
| --- | --- |
| @AuraEnabled | If the element is exposed to Lightning components for client-side access, document whether (cacheable=true). Describe the implications of this cache setting. |
| @InvocableMethod | If the element is callable from Flow Builder, explain the element’s function as an invocable action. Mention label and description attributes from the annotation if they provide important context. Use @param and @return for the element’s specific input and output structure. |
| @InvocableVariable | Clarify the variable’s specific role, data type, and any constraints or expectations for the action. |
| @RestResource(urlMapping=...) | Describe the overall resource. Also document the annotated Apex REST methods (@HttpDelete, @HttpGet, @HttpPatch, @HttpPost, or @HttpPut) with their specific roles. |
| @Deprecated | Include the @deprecated tag. Explain the reason for the deprecation and specify the recommended alternative. |
| @Future | Describe the implications of running the method asynchronously. For example, you can specify whether the method runs in a separate transaction, describe governor limit considerations, and explain callout behavior. |
| @IsTest | Briefly describe the scenario or functionality being tested. Test documentation is often excluded from public API docs. If seeAllData is true, explain why this setting is necessary. If onInstall is true, explain why this setting is necessary. |
| @ReadOnly | Explain if the element is used for performance with large query sets or specific APIs. |
| @TestSetup | Describe the common test data being created. |
| @TestVisible | Describe the rationale for the element’s annotation. For example, on private or protected member methods or variables, document “Visibility modified for testing purposes.” |
| @SuppressWarnings | Specify the warning that the third-party tool suppresses and briefly explain the rationale for the suppression if it’s not self-evident. |
| @NamespaceAccessible | Clarify if this annotation restricts exposure compared to global access or why this level of access is appropriate. |

#### See Also

-   [ApexDoc Comment Structure and Tags](atlas.en-us.apexcode.meta/apexcode/apex_doc_format.htm "To promote consistency and parsability, ApexDoc comments have a defined structure and syntax. Each ApexDoc comment consists of a main description and a set of block and inline tags that provide information about the documented code element.")

-   [ApexDoc Examples](atlas.en-us.apexcode.meta/apexcode/apex_doc_examples.htm "See practical examples of ApexDoc comments applied to various Apex constructs.")

## Code Examples

```apex
/**
 * This service class handles critical data aggregation tasks.
 * It operates using 'without sharing' to ensure access to all necessary
 * records for calculation, irrespective of the running user's sharing rules.
 * Care must be taken when calling methods from this class.
 * @author Jane Doe
 * @since 0.1.0
 */
public without sharing class DataAggregationService {
    //...
}
```

```apex
/**
 * Potential seasons of the year
 */
public enum Season {
  WINTER,
  SPRING,
  SUMMER,
  FALL
}
```

```apex
/**
 * Stores the maximum number of retry attempts for an operation.
 * Defaults to 3 if not explicitly set.
 * @since 0.1.1
 */
public Integer maxRetries {
  get {
    return maxRetries ?? 3;
  }
  set { maxRetries = value; }
}
```

```
/**
 * @since 1.3.2
 */
trigger OpportunityTrigger on Opportunity (
  before insert,
  after insert,
  before update,
  after update,
  before delete,
  after delete,
  after undelete
) {
  new OpportunityTriggerHandler().run();
}
```

## Related Topics

- Apex class (atlas.en-us.apexcode.meta/apexcode/apex_classes_understanding.htm)
- sharing
     model (atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm)
- Apex interfaces (atlas.en-us.apexcode.meta/apexcode/apex_classes_interfaces.htm)
- ApexDoc Examples (atlas.en-us.apexcode.meta/apexcode/apex_doc_examples.htm)
- Enums (atlas.en-us.apexcode.meta/apexcode/langCon_apex_enums.htm)
- Method (atlas.en-us.apexcode.meta/apexcode/apex_classes_defining_methods.htm)
- constructor (atlas.en-us.apexcode.meta/apexcode/apex_classes_constructors.htm)
- Apex triggers (atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm)
- Apex annotations (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation.htm)
- @AuraEnabled (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_AuraEnabled.htm)
