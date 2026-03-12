---
title: "Security Considerations for Flow Design"
domain: secure-coding-guide
topic: security-considerations-for-flow-design
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:44.403Z
estimatedTokens: 1226
keywords: [Security, Considerations, Flow, Design, Plan, securely, implement, manage, flows, Develop, Subflows, Appropriate, Execution, Context, Apex]
---

# Security Considerations for Flow Design

> Plan for these considerations to securely design, implement, and manage
  flows.

# Security Considerations for Flow Design

Plan for these considerations to securely design, implement, and manage flows.

## Develop Flows Securely

Flows act like global classes and don’t have any IP protections for flow code. Create flow code carefully, as any code on the subscriber org can invoke the flow in any context.

## Use Subflows

Split the flows into subflows to modularise your flows and control the execution context of specific parts of the process. Using subflows allows a main flow to run in a User Mode while placing the privileged operations in subflows and running them in System Mode. For example, a flow that creates a new opportunity can run in User Mode, and the subflow that assigns ownership based on complex rules can run in System Mode with sharing enabled.

Dividing flows into privileged and unprivileged portions is recommended.

-   Unprivileged portions run in User mode.
-   Privileged portions run in System Mode and can be placed into subflows.

For example, for flows that insert leads, to avoid duplications in lead insertion, place the code that searches for all leads to detect duplicates in a privileged subflow, while the flow that inserts the leads runs in User Mode

## Use an Appropriate Execution Context

Choosing the execution context of a flow helps in determining the context of any CRUD flow element.

-   User Mode returns the records for which the user has permissions. CRUD/FLS rules are automatically applied.
-   System Mode With Sharing returns the records that are shared with the user as the sharing rules are applied. CRUD/FLS rules aren’t enforced in this mode.
-   System Mode Without Sharing returns all records. This mode is only for specific use cases, such as guest user scenarios, where additional security validations are in place.

If no context is set, the default context is used. For flows invoked via UI, the default mode is User Mode. Any other flow runs in System Mode Without Sharing by default.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=secure_coding_guide)

#### Note

Explicitly setting the execution context is recommended. The execution context is determined by the advanced 'run in mode' settings that are controlled by the flow author and by how the flow is invoked. If invoked from an Apex class, the flow always runs in System Mode Without Sharing, irrespective of the flow settings. In any other case, the process follows the configured flow settings.

## Use Apex for Custom Access Control Logic

Implement procedural access control policies in Apex. Passing control to Apex helps in implementing custom access action control logic as a number of utility functions to manage permissions are available, such as [usermode](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm) and [stripInaccessible](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_with_security_stripInaccessible.htm).

For details on how to implement procedural authorization checks for org users, see [Apex Security and Sharing](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_security_sharing_chapter.htm). For Experience Cloud site users, especially guest users, go to [Guest User Record Access Development Best Practices](https://www.learnexperiencecloud.com/article/Guest-User-Record-Access-Development-Best-Practices) for examples of custom control.

## Set User Mode for UI Flows

Screen flows must run in User Mode to ensure that the flow respects the user’s permissions and follows the org security policies.

## Validate Flow Inputs

Validate all variables marked as “available for inputs” in the same way as user input in any other code.

## Handle Record-Triggered Flows

Record-triggered flows usually run in System Mode. These flows are typically used to perform data validation and clean-up operations. These recommendations help in efficiently managing record-triggered flows.

-   Limit the functionalities performed in record-triggered flows.
-   Ensure that the flows don’t modify unrelated records in the triggered flows. If records that aren’t related to the record triggering the flow are being modified, enforce user authorization control on the unrelated record.

## Document Flow Functionality

Document flows to understand their functionalities better. As flows increase in number, it can become difficult to keep track of them. To help document flows, follow these guidelines.

-   Use clear and informative names for flows and subflows.
-   Use consistent naming conventions to identify the execution context, mode, and other details about the flow.

## Implement Regular Reviews

To ensure that security standards are consistently followed, regularly review your flows and subflows, especially after changes or when new flows are deployed .
