---
title: "Creating an Aura Component for Use as an Action Override"
domain: lightning
topic: creating-an-aura-component-for-use-as-an-action-override
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.457Z
estimatedTokens: 1080
keywords: [Creating, Aura, Component, Action, Override, Add, lightning, actionOverride, allow, Experience, Salesforce, mobile, app, components, implement]
---

# Creating an Aura Component for Use as an Action Override

> Add the lightning:actionOverride interface to an Aura component to allow it to be used as
      an action override in Lightning Experience or the Salesforce mobile app. Only components that
      implement this interface appear in the Lightning component menu of an
      object action Override Properties panel.

# Creating an Aura Component for Use as an Action Override

Add the lightning:actionOverride interface to an Aura component to allow it to be used as an action override in Lightning Experience or the Salesforce mobile app. Only components that implement this interface appear in the **Lightning component** menu of an object action Override Properties panel.

```

```

In Lightning Experience, the standard Tab and View actions display as a page, while the standard New and Edit actions display in an overlaid panel. When used as action overrides, Aura components that implement the lightning:actionOverride interface replace the standard behavior completely. However, overridden actions always display as a page, not as a panel. Your component displays without controls, except for the main Lightning Experience navigation bar. Your component is expected to provide a complete user interface for the action, including navigation or actions beyond the navigation bar.

![In Lightning Experience, the standard Tab and View actions display as a page, while the standard New and Edit actions display in an overlaid panel. When used as action overrides, Lightning components that implement the lightning:actionOverride interface replace the standard behavior completely. However, overridden actions always display as a page, not as a panel. Your component displays without controls, except for the main Lightning Experience navigation bar. Your component is expected to provide a complete user interface for the action, including navigation or actions beyond the navigation bar.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Factions_standard_override_example_expense_view.png&folder=lightning)

One important difference from Visualforce that’s worth noting is how components are added to the **Lightning component** menu. The **Visualforce page** menu lists pages that either use the standard controller for the specific object, or that don’t use a standard controller at all. This filtering means that the menu options vary from object to object, and offer only pages that are specific to the object, or completely generic.

The **Lightning component** menu includes every component that implements the lightning:actionOverride interface. A component that implements lightning:actionOverride can’t restrict an admin to overriding only certain actions, or only for certain objects. We recommend that your organization adopt processes and component naming conventions to ensure that components are used to override only the intended actions on intended objects. Even so, it’s your responsibility as the component developer to ensure that components that implement the lightning:actionOverride interface gracefully respond to being used with any action on any object.

## Access Current Record Details

Components you plan to use as action overrides usually need details about the object type they’re working with, and often the ID of the current record. Your component can implement the following interfaces to access those object and record details.

force:hasRecordId

Add the force:hasRecordId interface to an Aura component to enable the component to be assigned the ID of the current record. The current record ID is useful if the component is used on a Lightning record page, as an object-specific custom action or action override in Lightning Experience or the Salesforce mobile app, and so on.

force:hasSObjectName

Add the force:hasSObjectName interface to an Aura component to enable the component to be assigned the API name of current record’s sObject type. The sObject name is useful if the component can be used with records of different sObject types, and needs to adapt to the specific type of the current record.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

As of Spring ’19 (API version 45.0), you can build Lightning components using two programming models: the Lightning Web Components model, and the original Aura Components model. Lightning web components are custom HTML elements built using HTML and modern JavaScript. Lightning web components and Aura components can coexist and interoperate on a page. As of API version 45.0, when we say Lightning components, we mean both Aura components and Lightning web components.

## Code Examples

```
<aura:component 
    implements="lightning:actionOverride,force:hasRecordId,force:hasSObjectName">
    
    <article class="slds-card">
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__body">
            <h2><span class="slds-text-heading_small">Expense Details</span></h2>
          </div>
        </header>
        <div class="slds-no-flex">
            <lightning:button label="Edit" onclick="{!c.handleEdit}"/>
        </div>
      </div>
      <div class="slds-card__body">(expense details go here)</div>
    </article>
</aura:component>
```
