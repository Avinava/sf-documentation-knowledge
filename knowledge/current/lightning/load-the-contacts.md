---
title: "Load the Contacts"
domain: lightning
topic: load-the-contacts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.922Z
estimatedTokens: 1551
namespace: ContactController
keywords: [Load, Contacts, Apex, controller, bridge, connects, components, Salesforce, data]
---

# Load the Contacts

> Create an Apex controller and load your contacts. An Apex controller is the bridge
        that connects your components and your Salesforce data.

**Namespace:** `ContactController`

# Load the Contacts

Create an Apex controller and load your contacts. An Apex controller is the bridge that connects your components and your Salesforce data.

Your organization must have existing contact records for this tutorial.

1.  In the Developer Console, click **File** | **New** | **Apex Class**, and then enter ContactController in the **New Class** window. A new Apex class, ContactController.apxc, is created. Enter this code and then save.

    ```

    ```

    ContactController contains methods that return your contact data using SOQL statements. This Apex controller is wired up to your component in a later step. getContacts() returns all contacts with the selected fields.

2.  Click **File** | **New** | **Lightning Component**, and then enter contacts for the Name field in the New Lightning Bundle popup window. This creates a component, contacts.cmp. Enter this code and then save.

    ```

    ```

    This component creates the template for your contact data using the lightning:card component, which simply creates a visual container around a group of information. This template gets rendered for every contact that you have, so you have multiple instances of a component in your view with different data. The onclick event handler on the lightning:button component calls the goToRecord client-side controller action when the button is clicked. Notice the expression {!v.contact.Name}? v represents the view, which is the set of component attributes, and contact is the attribute of type Contact. Using this dot notation, you can access the fields in the contact object, like Name and Email, after you wire up the Apex controller to the component in the next step.

3.  Click **File** | **New** | **Lightning Component**, and then enter contactList for the Name field in the New Lightning Bundle popup window, which creates the contactList.cmp component. Enter this code and then save. If you’re using a namespace in your organization, replace ContactController with myNamespace.ContactController. You wire up the Apex controller to the component by using the controller="ContactController" syntax.

    ```

    ```

    Let’s dive into the code. We added the init handler to load the contact data during initialization. The handler calls the client-side controller code in the next step. We also added two attributes, contacts and totalContacts, which stores the list of contacts and a counter to display the total number of contacts respectively. Additionally, the contactList component is an attribute used to store the filtered list of contacts when an option is selected on the lead source dropdown menu. The lightning:layout components simply create grids to align your content in the view with Lightning Design System CSS classes.

    The page header contains the {!v.totalContacts} expression to dynamically display the number of contacts based on the lead source you select. For example, if you select **Referral** and there are 30 contacts whose Lead Source fields are set to Referral, then the expression evaluates to 30.

    Next, we create a dropdown menu with the lightning:select component. When you select an option in the dropdown menu, the onchange event handler calls your client-side controller to update the view with a subset of the contacts. You create the client-side logic in the next few steps.

    In case you’re wondering, the force:appHostable interface enables your component to be surfaced in Lightning Experience and the Salesforce mobile app as tabs, which we are getting into later.

4.  In the **contactList** sidebar, click **CONTROLLER** to create a resource named contactListController.js. Replace the placeholder code with the following code and then save.

    ```

    ```

    The client-side controller calls helper functions to do most of the heavy-lifting, which is a recommended pattern to promote code reuse. Helper functions also enable specialization of tasks, such as processing data and firing server-side actions, which is what we are covering next. Recall that the onchange event handler on the lightning:select component calls the handleSelect client-side controller action, which is triggered when you select an option in the dropdown menu. handleSelect checks the option value that’s passed in using event.getSource().get("v.value"). It creates a filtered list of contacts by checking that the lead source field on each contact matches the selected lead source. Finally, update the view and the total number of contacts based on the selected lead source.

5.  In the **contactList** sidebar, click **HELPER** to create a resource named contactListHelper.js. Replace the placeholder code with the following code and then save.

    ```

    ```

    During initialization, the contactList component loads the contact data by:

    -   Calling the Apex controller method getContacts, which returns the contact data via a SOQL statement
    -   Setting the return value via cmp.set("v.contacts", response.getReturnValue()) in the action callback, which updates the view with the contact data
    -   Updating the total number of contacts in the view, which is evaluated in updateTotal

    You must be wondering how your component works in Lightning Experience and the Salesforce app. Let’s find out next!

6.  Make the contactList component available via a custom tab in Lightning Experience and the Salesforce app.

    -   [Add Aura Components as Custom Tabs in a Lightning Experience App](atlas.en-us.lightning.meta/lightning/components_using_lex_tab.htm "Make your Aura components available for Lightning Experience users on desktop and in the Salesforce mobile app by displaying them in a custom tab in a Lightning Experience app.")

    For this tutorial, we recommend that you add the component as a custom tab in Lightning Experience.


When your component is loaded in Lightning Experience or the Salesforce app, a toast message indicates that your contacts are loaded successfully. Select a lead source from the dropdown menu and watch your contact list and the number of contacts update in the view.

Next, wire up an event that navigates to a contact record when you click a button in the contact list.

## Code Examples

```apex
public with sharing class ContactController {
@AuraEnabled
    public static List<Contact> getContacts() {
        List<Contact> contacts = 
                [SELECT Id, Name, MailingStreet, Phone, Email, LeadSource FROM Contact];

        //Add isAccessible() check
        return contacts;
    }
}
```

```
<aura:component>
    <aura:attribute name="contact" type="Contact" />
    
        <lightning:card variant="Narrow" title="{!v.contact.Name}" 
                        iconName="standard:contact">
            <aura:set attribute="actions">
                <lightning:button name="details" label="Details" onclick="{!c.goToRecord}" />
            </aura:set>    
            <aura:set attribute="footer">
                <lightning:badge label="{!v.contact.Email}"/>
            </aura:set>
            <p class="slds-p-horizontal_small">
                {!v.contact.Phone}
            </p>
            <p class="slds-p-horizontal_small">
                {!v.contact.MailingStreet}
            </p>
        </lightning:card>

</aura:component>
```

```
<aura:component implements="force:appHostable" controller="ContactController">
    <!-- Handle component initialization in a client-side controller -->
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
    
    <!-- Dynamically load the list of contacts -->
    <aura:attribute name="contacts" type="Contact[]"/>
    <aura:attribute name="contactList" type="Contact[]"/>
    <aura:attribute name="totalContacts" type="Integer"/>
    
    <!-- Page header with a counter that displays total number of contacts -->
    <div class="slds-page-header slds-page-header_object-home">
        <lightning:layout>
            <lightning:layoutItem>
                <lightning:icon iconName="standard:contact" />
            </lightning:layoutItem>
            <lightning:layoutItem class="slds-m-left_small">
                <p class="slds-text-title_caps slds-line-height_reset">Contacts</p>
                <h1 class="slds-page-header__title slds-p-right_x-small">Contact Viewer</h1>
            </lightning:layoutItem>
        </lightning:layout>
    
        <lightning:layout>
            <lightning:layoutItem>
                <p class="slds-text-body_small">{!v.totalContacts} Contacts • View Contacts Based on Lead Sources</p>
            </lightning:layoutItem>
        </lightning:layout>
    </div>
    
    <!-- Body with dropdown menu and list of contacts -->
    <lightning:layout>
        <lightning:layoutItem padding="horizontal-medium" >
            <!-- Create a dropdown menu with options -->
            <lightning:select aura:id="select" label="Lead Source" name="source" 
                              onchange="{!c.handleSelect}" class="slds-m-bottom_medium">
                <option value="">-- Select a Lead Source --</option>
                <option value="Referral" text="Referral"/>
                <option value="Social Media" text="Social Media"/>
                <option value="All" text="All"/>
            </lightning:select>
    
            <!-- Iterate over the list of contacts and display them -->
            <aura:iteration var="contact" items="{!v.contacts}">
                <!-- If you’re using a namespace, replace with myNamespace:contacts-->
                <c:contacts contact="{!contact}"/>
            </aura:iteration>
        </lightning:layoutItem>
    </lightning:layout>
</aura:component>
```

```
({
    doInit : function(component, event, helper) {
        // Retrieve contacts during component initialization
        helper.loadContacts(component);
    },
    
    handleSelect : function(component, event, helper) {
        var contacts = component.get("v.contacts");
        var contactList = component.get("v.contactList");

        //Get the selected option: "Referral", "Social Media", or "All"
        var selected = event.getSource().get("v.value");
    
        var filter = [];
        var k = 0;
        for (var i=0; i<contactList.length; i++){
            var c = contactList[i];
            if (selected != "All"){
                if(c.LeadSource == selected) {
                    filter[k] = c;
                    k++; 
                }
            }
            else {
                   filter = contactList;
            }       
        }
        //Set the filtered list of contacts based on the selected option
        component.set("v.contacts", filter);
        helper.updateTotal(component);
    }
})
```

```
({
   loadContacts : function(cmp) {
        // Load all contact data
        var action = cmp.get("c.getContacts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.contacts", response.getReturnValue());
                cmp.set("v.contactList", response.getReturnValue());
                this.updateTotal(cmp);
            }

            // Display toast message to indicate load status
            var toastEvent = $A.get("e.force:showToast");
            if (state === 'SUCCESS'){
                toastEvent.setParams({
                    "title": "Success!",
                    "message": " Your contacts have been loaded successfully."
                });
            }
            else {
                toastEvent.setParams({
                        "title": "Error!",
                        "message": " Something has gone wrong."
                });
            }
            toastEvent.fire();
        });
         $A.enqueueAction(action);
    },
     
    updateTotal: function(cmp) {
      var contacts = cmp.get("v.contacts");
      cmp.set("v.totalContacts", contacts.length);
    }
})
```

## Related Topics

- Add Aura Components as Custom Tabs in a Lightning Experience App (atlas.en-us.lightning.meta/lightning/components_using_lex_tab.htm)
