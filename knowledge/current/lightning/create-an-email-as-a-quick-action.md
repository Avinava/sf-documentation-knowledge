---
title: "Create an Email as a Quick Action"
domain: lightning
topic: create-an-email-as-a-quick-action
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.399Z
estimatedTokens: 560
keywords: [Email, Quick, Action, custom, component, button, launch, composer, pre-populated, content, record, lightning, pageReferenceUtils, navigation, components]
---

# Create an Email as a Quick Action

> In a custom component, create a button to launch the email composer with pre-populated
        content. To launch a record create a page with pre-populated field values, use the lightning:pageReferenceUtils and lightning:navigation components together.

# Create an Email as a Quick Action

In a custom component, create a button to launch the email composer with pre-populated content. To launch a record create a page with pre-populated field values, use the lightning:pageReferenceUtils and lightning:navigation components together.

These examples show you how to do this using standard actions and override actions.

Launch the QuickAction (Global) Send Email action from a custom component. Quick/Standard Actions can be called using page references and the navigation service API in any custom Aura component.

## Define Navigation Services, pageReference Utils, and Action Button

Define the navigation services, the pageReference utils, and the action button in component markup.

```

```

## Pass Attributes in pageReference to navService

Pass in the appropriate attributes in pageReference to navService.

```

```

## Add Predefined Fields Info

Allow the user to pass action field data as part of the pageReference attributes with the fieldOverride payload.

This code is an example of what a pageReference request could look like:

```

```

## Default Email Field Values

By default, Salesforce prepopulates the To field with a contact or lead email address when you open the email action from the contact or lead record home pages. Ensure that the fields you specify in the encodeDefaultFieldValues function aren’t Read-Only in the Send Email global action’s layout. If the HTML Body and Subject fields are Read-Only, the email draft doesn’t include pre-populated text for those fields.

These fields are supported:

-   FromAddress
-   ToAddress
-   CCAddress
-   BccAddress
-   Subject
-   HTMLBody
-   RelatedToId

The FromAddress field is set to the logged in user's email address. The Subject and HTMLBody are not set by default.

Only fields that are available on the email quick action are supported. For example, AttachmentId and ContentDocumentIds aren't supported as they are not part of the email quick action layout.

For more information on the supported fields, see [Object Reference for the Salesforce Platform: EmailMessage](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_emailmessage.htm).

## Code Examples

```
<lightning:navigation aura:id="navService"/>
<lightning:pageReferenceUtils aura:id="pageRefUtil"/>
<div>
    <lightning:button label="Send an " value="Global.SendEmail" onclick="{! c.openPageRefModal}"/>
</div>
```

```
openPageRefModal: function (cmp, event, helper) {
        
    var navService = cmp.find("navService");
    var actionApiName = event.getSource().get('v.value');
    var pageRef = {
        type: "standard__quickAction",
        attributes: {
            apiName : actionApiName
        },
        state: {
            recordId : '003xx000004WhEiAAK',
        }
    };

    navService.navigate(pageRef);
}
```

```
openPageRefModal: function (cmp, event, helper) {
    var navService = cmp.find("navService");
    var actionApiName = event.getSource().get('v.value');
    var pageRef = {
        type: "standard__quickAction",
        attributes: {
            apiName : actionApiName
        },
        state: {
            recordId : '003xx000004WhTJAA0'
        }
    };
    var defaultFieldValues = {
        HtmlBody: "Monthly Review",
        Subject : "Monthly Review"
    }
    pageRef.state.defaultFieldValues = cmp.find("pageRefUtil").encodeDefaultFieldValues(defaultFieldValues);

    navService.navigate(pageRef);
}
```
