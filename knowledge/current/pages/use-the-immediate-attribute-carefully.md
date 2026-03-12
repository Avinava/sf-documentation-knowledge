---
title: "Use the immediate Attribute Carefully"
domain: pages
topic: use-the-immediate-attribute-carefully
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.886Z
estimatedTokens: 239
keywords: [immediate, Attribute, Carefully, Visualforce, components, execute, action, processing, any, validation, rules, associated, component, executes, navigates]
---

# Use the immediate Attribute Carefully

> Visualforce components with the immediate attribute
    set to true execute an action without processing any
    validation rules for the associated fields on the page. This attribute should only be used if
    the component executes an action that navigates away from the page after completion.

# Use the immediate Attribute Carefully

Visualforce components with the immediate attribute set to true execute an action without processing any validation rules for the associated fields on the page. This attribute should only be used if the component executes an action that navigates away from the page after completion.

Functional problems occur when the component behavior includes more than basic navigation functionality. Because immediate="true" doesn’t update the page's data model, the page's data model won't reflect any changes made during the action. This discrepancy can cause undefined behavior and possible data corruption.

Use of the immediate attribute is recommended only for cancellation actions. The following example shows an appropriate use of this attribute. When the user clicks **Cancel**, the <apex:CommandLink> component immediately performs cancelApplication without requiring the user to fix validation errors.

```

```

## Code Examples

```
<apex:CommandLink action="{!cancelApplication}" value="Cancel" styleClass="btn" id="btnCancel" immediate="true">
```
