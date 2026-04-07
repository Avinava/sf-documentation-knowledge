---
title: "Protect Your Application from CSRF Vulnerabilities"
domain: secure-coding-guide
topic: protect-your-application-from-csrf-vulnerabilities
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:39:22.048Z
estimatedTokens: 737
keywords: [Protect, Application, CSRF, Vulnerabilities, Secure, applications, against, Salesforce, automatically, protects, built, Apex, Visualforce, verify, protections, enabled, development, frameworks, Considerations, Limitations, Pages, Aura, LWC, Third-Party, API, Integrations]
---

> Secure your applications against CSRF vulnerabilities. While Salesforce automatically
  protects components built with Apex and Visualforce, verify that protections are enabled when
  using other development frameworks.

# Protect Your Application from CSRF Vulnerabilities

Secure your applications against CSRF vulnerabilities. While Salesforce automatically protects components built with Apex and Visualforce, verify that protections are enabled when using other development frameworks.

## CSRF Considerations and Limitations

Salesforce automatically protects most form-based requests from CSRF. Standard controllers and methods secure actions such as, insert, update, delete, and upsert when triggered by user interactions. These interactions include clicking a button or submitting a form.

However, CSRF protection doesn't apply to state-changing logic that runs automatically during page load. Examples include:

-   DML operations that execute even before the page fully renders.
-   Methods called from the action attribute in Visualforce pages.
-   Component initialization code performing DML in Aura, LWC, or Visualforce.

## Secure Visualforce Pages

Apex methods called in the action attribute on<apex:page> or in a controller’s constructor run on page load and bypass CSRF protection. To secure your data, use user-triggered DML instead of auto-triggered initialization.

-   Avoid DML during page load: Trigger DML operations only in response to explicit user actions.
-   Avoid automatic method calls: Don't call apex:actionFunction methods via JavaScript events such as onload.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=secure_coding_guide)

#### Note

If a Visualforce page load requires DML, select **Require CSRF protection on GET requests** . To know more, see [Create Visualforce Pages](https://help.salesforce.com/articleView?id=pages_creating.htm&type=5&language=en_US).

Review the following example of auto-triggered DML. Since the init method runs during page load, it bypasses platform CSRF protections.

```

```

To secure the page against CSRF attacks, require explicit user interaction to trigger state-changing logic. In this example, the deleteAccount method runs only when the user clicks **Delete**.

```

```

## Secure Aura and LWC

Don't perform DML or state-changing operations during component load. When you use init, connectedCallback, renderedCallback, or a constructor, perform only read-only operations to fetch data. State-changing actions require explicit user interaction.

Review this example of auto-triggered DML in an Aura component. Because the doInit initialization handler modifies server data on component load, it bypasses platform CSRF protections.

```

```

To secure the component against CSRF attacks, perform only read-only operations during initialization and require explicit user interaction to modify data.

```

```

## Secure Third-Party API Integrations

When you integrate a Lightning app with a third-party application via API, you can design custom anti-CSRF tokens. Add these to an XMLHttpRequest using setRequestHeader(). Here's an example.

```

```

## Code Examples

```apex
<apex:page controller="myClass" action="{!init}"/>
public class myClass {
    public void init() {
        Id id = ApexPages.currentPage().getParameters().get('id');
        Account acc = [SELECT Id FROM Account WHERE Id = :id];
        delete acc;
    }
}
```

```apex
<apex:page controller="mySafeClass">
    <apex:form>
        <apex:inputText value="{!accountId}" />
        <apex:commandButton action="{!deleteAccount}" value="Delete" />
    </apex:form>
</apex:page>

public class mySafeClass {
    public String accountId { get; set; }
    public void deleteAccount() {
        Account acc = [SELECT Id FROM Account WHERE Id = :accountId];
        delete acc;
    }
}
```

```
({
    doInit: function(cmp) {
        var action = cmp.get("c.updateField"); // Modifies server data on load
        action.setParams({
            recordId: cmp.get("v.recordId"),
            newValue: cmp.get("v.newValue")
        });
        $A.enqueueAction(action); // Runs without user action — CSRF-prone
    }
})
```

```
({
    doInit: function(cmp) {
        var action = cmp.get("c.getSomething"); // Safe: read-only fetch
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                // Safe display logic
            }
        });
        $A.enqueueAction(action);
    },

    handleClick: function(cmp, event) {
        var action = cmp.get("c.updateField"); // Safe: user-triggered
        action.setParams({
            recordId: cmp.get("v.recordId"),
            newValue: cmp.get("v.newValue")
        });
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                // Show success / update UI
            }         });
        $A.enqueueAction(action);
    }
})
```

```
var o = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(){
    var res = o.apply(this, arguments);
    var err = new Error();
    this.setRequestHeader('anti-csrf-token', csrf_token);
    return res;
};
```
