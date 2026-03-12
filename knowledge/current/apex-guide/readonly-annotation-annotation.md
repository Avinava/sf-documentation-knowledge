---
title: "ReadOnly Annotation Annotation"
domain: apex-guide
topic: readonly-annotation-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.488Z
estimatedTokens: 515
keywords: [ReadOnly, Annotation, @ReadOnly, perform, less, restrictive, queries, against, Lightning, Platform, database, increasing, limit, number, rows]
---

# ReadOnly Annotation Annotation

> The @ReadOnly annotation allows you to
    perform less restrictive queries against the Lightning Platform database by increasing the limit
    of the number of returned rows for a request to 1,000,000. All other limits still apply. The
    annotation blocks the following operations within the reque

# ReadOnly Annotation Annotation

The @ReadOnly annotation allows you to perform less restrictive queries against the Lightning Platform database by increasing the limit of the number of returned rows for a request to 1,000,000. All other limits still apply. The annotation blocks the following operations within the request: DML operations, calls to System.schedule, and enqueued asynchronous Apex jobs.

The @ReadOnly annotation is available for REST and SOAP Web services and the Schedulable interface. To use the @ReadOnly annotation, the top-level request must be in the schedule execution or the Web service invocation. For example, if a Visualforce page calls a Web service that contains the @ReadOnly annotation, the request fails because Visualforce is the top-level request, not the Web service.

Visualforce pages can call controller methods with the @ReadOnly annotation, and those methods run with the same relaxed restrictions. To increase other Visualforce-specific limits, such as the size of a collection that can be used by an iteration component like <apex:pageBlockTable\>, you can set the readonly attribute on the <apex:page\> tag to true. For more information, see [Working with Large Sets of Data](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_readonly_context.htm "HTML (New Window)") in the [Visualforce Developer's Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/ "HTML (New Window)").

## Versioned Behavior Changes

Prior to API version 49.0, using @ReadOnly on Apex REST methods (@HttpDelete, @HttpGet, @HttpPatch, @HttpPost, or @HttpPut) also required annotating the method with @RemoteAction. In API version 49.0 and later, you can annotate Apex REST methods with just @ReadOnly.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm "NamespaceAccessible Annotation Annotation")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_RemoteAction.htm "RemoteAction Annotation Annotation")

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_RemoteAction.htm)
