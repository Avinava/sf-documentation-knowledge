---
title: "Future Annotation"
domain: apex-guide
topic: future-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.483Z
keywords: [Future, Annotation, Important, Method, Considerations]
---

# Future Annotation

# Future Annotation

Use the Future annotation to identify methods that run asynchronously. A future method runs when Salesforce has available resources.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

Salesforce now recommends that you use Queueable Apex instead of Apex future methods. Queueables have the same use cases as future methods but offer extra benefits, including job IDs, support for non-primitive types, and job chaining.

See [Queueable Apex](atlas.en-us.apexcode.meta/apexcode/apex_queueing_jobs.htm "Take control of your asynchronous Apex processes by using the Queueable interface. Salesforce recommends that you use Queueable Apex instead of Apex future methods. Queueables have the same use cases as future methods but offer extra benefits, including job IDs, support for non-primitive types, and job chaining.").

For example, you can use the Future annotation when making an asynchronous web service callout to an external service. Without the annotation, the web service callout is made from the same thread that is running the Apex code. Then no additional processing can occur until the callout is complete (synchronous processing).

Methods with the Future annotation must be static methods, and can only return a void type. The specified parameters must be primitive data types, arrays of primitive data types, or collections of primitive data types. Methods with the Future annotation can’t take sObjects or objects as arguments.

To make a method in a class execute asynchronously, define the method with the Future annotation. For example:

```

```

To allow callouts in a Future method, specify (callout\=true). The default is (callout\=false), which prevents a method from making callouts.

The following snippet shows how to specify that a method executes a callout:

```

```

## Future Method Considerations

-   Remember that any method that uses the Future annotation requires special consideration because the method doesn’t necessarily execute in the same order that it’s called in.
-   Methods with the Future annotation can’t be used in Visualforce controllers in either getMethodName or setMethodName methods, nor in the constructor.
-   You can’t call a method annotated with Future from a method that also has the Future annotation. Nor can you call a trigger from an annotated method that calls another annotated method.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_deprecated.htm "Deprecated Annotation Annotation")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "InvocableMethod Annotation")