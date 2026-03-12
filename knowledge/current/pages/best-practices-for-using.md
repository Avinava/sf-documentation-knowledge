---
title: "Best Practices for Using"
domain: pages
topic: best-practices-for-using
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:24.068Z
estimatedTokens: 1494
keywords: [Best, Practices, Visualforce, Remote, Objects, effective, tool, quickly, adding, simple, data, operations, pages, easy, lightweight]
---

# Best Practices for Using

> Visualforce Remote Objects is an effective tool for quickly adding simple data
  operations to Visualforce pages. Remote Objects is easy to use, with lightweight components that
  don’t require Apex code to implement reading and writing data to the Salesforce service. Remote
  Objects isn’t always the right tool for the job, though, so it’s important to understand how
  Remote Objects works and when to use a different tool, such as JavaScript remoting.

# Best Practices for Using

Visualforce Remote Objects is an effective tool for quickly adding simple data operations to Visualforce pages. Remote Objects is easy to use, with lightweight components that don’t require Apex code to implement reading and writing data to the Salesforce service. Remote Objects isn’t always the right tool for the job, though, so it’s important to understand how Remote Objects works and when to use a different tool, such as JavaScript remoting.

## Field Level Security

Remote Objects respects your organization’s field level security settings. Keep this in mind when you create pages that use Remote Objects. Fields that aren’t accessible to the person viewing the page appear blank. Actions that modify field data (create(), update(), and upsert()) fail with an error if they include inaccessible fields in the request.

## Transaction Boundaries

Remote Objects removes control of transaction boundaries from your code. Each Remote Objects operation (create(), update(), and so on) is a separate transaction. Each operation succeeds or fails on its own, which can be a problem when you need to create or modify multiple related objects as part of a business process. For example, if you create an invoice record and related line-item records, each record is saved in a separate transaction. If some Remote Objects operations fail and some succeed, your data can be left in an inconsistent state. Note that this issue isn’t related to service reliability. In this example, if some of the line items fail a validation rule, they won’t be created, which leaves an incomplete invoice. Your code must clean up and try again.

In contrast, JavaScript remoting transaction boundaries are on the Apex @RemoteAction method. It’s easy to create the invoice and related line-item records inside one method, where [automatic Apex transactions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_transaction.htm "HTML (New Window)") ensure that all records are created together or not at all.

## Appropriate Placement and Testing of Business Logic

Consider carefully where you’re putting your application’s business logic, especially when it’s complex. When you are creating straightforward pages that enable creation, editing, and deletion of individual objects, as in [An Example of Using with jQuery Mobile with jQuery Mobile](atlas.en-us.pages.meta/pages/pages_remote_objects_example_extended.htm "Visualforce Remote Objects is designed to “blend” well with JavaScript frameworks. This extended but simple example shows how to use Remote Objects with jQuery Mobile to view a list of contacts and to add, edit, and delete them."), the business logic is minimal. Putting this business logic on the client side, in Remote Objects and JavaScript, can be entirely appropriate. When you have more complex business rules and processes, though, it might be more effective to remove that logic from the client layer and build it on the server side.

Consider the following points when you’re deciding where to put your organization’s business logic.

-   Security and consistency: Remember that users can lose their network connection in mid-transaction, or alter the way that your page’s JavaScript executes with Firebug and other tools. Remote Objects enforces your validation rules, triggers, sharing rules, field level security, and other data access restrictions, but if you put business rules in JavaScript instead of Salesforce, those can be interrupted, altered, or bypassed.
-   Testability: Business logic on the server side can use the many tools that Salesforce provides for testing. For this reason, we encourage you to put complex behavior in Apex and use the Apex test framework to verify that it works as you intend.
-   Performance: If your processing needs to look at many records as part of a transaction, but won’t display them in the browser, we recommend you avoid sending that data to the client, and instead process the data “locally” on the server. Think about what data your page needs to do its work, and make sure you’re not needlessly copying it over the wire.

## Handling Complexity

Applications need to manage complexity carefully. Simple contact manager or store locator pages don’t have much complexity to manage, but many business processes do. Remote Objects pairs well with JavaScript frameworks such as jQuery and AngularJS, and those can help with the complexity of your application’s user interface. Always consider separating the concerns of your application into multiple layers and keeping them as discrete as possible. This is called “separation of concerns,” and it’s a classic software pattern and best practice.

Consider placing your data integrity rules in triggers and validation rules. Also consider encapsulating your business process rules in Apex code that you make accessible via @RemoteAction methods that you can use with JavaScript remoting or with SOAP or REST services that you can use from anywhere.

## Alternatives to Remote Objects

Remote Objects is a useful tool for quickly creating pages with basic data operations. When the job that your page needs to do is bigger than that, consider that Salesforce offers many alternatives to Lightning Platform developers.

-   Standard Visualforce can be used to implement a wide range of application functionality. Visualforce provides much automatic functionality when using the standard controllers and supports completely custom functionality with your own Apex code.
-   JavaScript remoting also works well with third-party JavaScript frameworks and enables you to access custom business logic in Apex.
-   Salesforce mobile allows you to build mobile applications quickly and often by using declarative tools instead of code.

Think carefully about what your page or application needs to do, and then choose the right tool for the job. Sometimes that tool is Remote Objects, and sometimes it’s something else.

## Related Topics

- An Example of
     Using with jQuery Mobile with jQuery Mobile (atlas.en-us.pages.meta/pages/pages_remote_objects_example_extended.htm)
