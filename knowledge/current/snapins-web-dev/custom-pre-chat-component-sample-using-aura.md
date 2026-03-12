---
title: "Custom Pre-Chat Component Sample Using Aura"
domain: snapins-web-dev
topic: custom-pre-chat-component-sample-using-aura
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.385Z
estimatedTokens: 356
keywords: [Custom, Pre-Chat, Component, Sample, Aura, code, examples, controller, helper]
---

# Custom Pre-Chat Component Sample Using Aura

> The following code sample contains examples of the component, controller, and helper
        code for a custom pre-chat component using Aura.

# Custom Pre-Chat Component Sample Using Aura

The following code sample contains examples of the component, controller, and helper code for a custom pre-chat component using Aura.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

This component:

-   Uses Aura to create the pre-chat fields and start a chat.
-   Uses an initialize function that fetches the pre-chat fields from setup and dynamically creates the pre-chat field components using $A.createComponents.
-   Creates an array when the user clicks the **Start Chat** button. The array contains pre-chat field information to pass to the startChat method on the prechatAPI component.

## Component Code

```

```

## Controller Code

```

```

## Helper Code

```

```

## Code Examples

```
<aura:component implements="lightningsnapin:prechatUI" description="Sample custom pre-chat component for Embedded Chat. Implemented using Aura.">
    <!-- You must implement "lightningsnapin:prechatUI" for this component to appear in the "Pre-chat Component" customization dropdown in the Embedded Service setup -->

    <!-- Pre-chat field components to render -->
    <aura:attribute name="prechatFieldComponents" type="List" description="An array of objects representing the pre-chat fields specified in pre-chat setup."/>
    
    <!-- Handler for when this component is initialized -->
    <aura:handler name="init" value="{!this}" action="{!c.onInit}" />

    <!-- For Aura performance -->
    <aura:locator target="startButton" description="Pre-chat form submit button."/>
    
    <!-- Contains methods for getting pre-chat fields, starting a chat, and validating fields -->
    <lightningsnapin:prechatAPI aura:id="prechatAPI"/>
    
    <h2>Prechat form</h2>
    <div class="prechatUI">
        <div class="prechatContent">
            <ul class="fieldsList">
                <!-- Look in the controller's onInit function. This component dynamically creates the pre-chat field components -->
                {!v.prechatFieldComponents}
            </ul>
        </div>
        <div class="startButtonWrapper">
            <ui:button aura:id="startButton" class="startButton" label="{!$Label.LiveAgentPrechat.StartChat}" press="{!c.handleStartButtonClick}"/>
        </div>
    </div>

</aura:component>
```

```
({
    /**
     * On initialization of this component, set the prechatFields attribute and render pre-chat fields.
     * 
     * @param cmp - The component for this state.
     * @param evt - The Aura event.
     * @param hlp - The helper for this state.
     */
	onInit: function(cmp, evt, hlp) {
        // Get pre-chat fields defined in setup using the prechatAPI component
		var prechatFields = cmp.find("prechatAPI").getPrechatFields();
        // Get pre-chat field types and attributes to be rendered
        var prechatFieldComponentsArray = hlp.getPrechatFieldAttributesArray(prechatFields);
        
        // Make asynchronous Aura call to create pre-chat field components
        $A.createComponents(
            prechatFieldComponentsArray,
            function(components, status, errorMessage) {
                if(status === "SUCCESS") {
                    cmp.set("v.prechatFieldComponents", components);
                }
            }
        );
    },
    
    /**
     * Event which fires when start button is clicked in pre-chat
     * 
     * @param cmp - The component for this state.
     * @param evt - The Aura event.
     * @param hlp - The helper for this state.
     */
    handleStartButtonClick: function(cmp, evt, hlp) {
        hlp.onStartButtonClick(cmp);
    }
});
```

```
({
	/**
	 * Map of pre-chat field label to pre-chat field name (can be found in Setup)
	 */
	fieldLabelToName: {
        "First Name": "FirstName",
        "Last Name": "LastName",
        "Email": "Email",
        "Phone": "Phone",
        "Fax": "Fax",
        "Mobile": "MobilePhone",
        "Home Phone": "HomePhone",
        "Other Phone": "OtherPhone",
        "Asst. Phone": "AssistantPhone",
        "Title": "Title",
        "Lead Source": "LeadSource",
        "Assistant": "AssistantName",
        "Department": "Department",
        "Subject": "Subject",
        "Case Reason": "Reason",
        "Type": "Type",
        "Web Company": "SuppliedCompany",
        "Web Phone": "SuppliedPhone",
        "Priority": "Priority",
        "Web Name": "SuppliedName",
        "Web Email": "SuppliedEmail",
        "Company": "Company",
        "Industry": "Industry",
        "Rating": "Rating"
    },

	/**
	 * Event which fires the function to start a chat request (by accessing the chat API component)
	 *
	 * @param cmp - The component for this state.
	 */
	onStartButtonClick: function(cmp) {
		var prechatFieldComponents = cmp.find("prechatField");
		var fields;

        // Make an array of field objects for the library
        fields = this.createFieldsArray(prechatFieldComponents);
        
        // If the pre-chat fields pass validation, start a chat
        if(cmp.find("prechatAPI").validateFields(fields).valid) {
            cmp.find("prechatAPI").startChat(fields);
        } else {
            console.warn("Prechat fields did not pass validation!");
        }
	},

	/**
	 * Create an array of field objects to start a chat from an array of pre-chat fields
	 * 
	 * @param fields - Array of pre-chat field Objects.
	 * @returns An array of field objects.
	 */
	createFieldsArray: function(fields) {
		if(fields.length) {
			return fields.map(function(fieldCmp) {
				return {
					label: fieldCmp.get("v.label"),
					value: fieldCmp.get("v.value"),
					name: this.fieldLabelToName[fieldCmp.get("v.label")]
				};
			}.bind(this));
		} else {
			return [];
		}
	},
    
    /**
     * Create an array in the format $A.createComponents expects
     * 
     * Example:
     * [["componentType", {attributeName: "attributeValue", ...}]]
     * 
	 * @param prechatFields - Array of pre-chat field Objects.
	 * @returns Array that can be passed to $A.createComponents
     */
    getPrechatFieldAttributesArray: function(prechatFields) {
        // $A.createComponents first parameter is an array of arrays. Each array contains the type of component being created, and an Object defining the attributes.
        var prechatFieldsInfoArray = [];

        // For each field, prepare the type and attributes to pass to $A.createComponents
        prechatFields.forEach(function(field) {
            var componentName = (field.type === "inputSplitName") ? "inputText" : field.type;
            var componentInfoArray = ["ui:" + componentName];
            var attributes = {
                "aura:id": "prechatField",
                required: field.required,
                label: field.label,
                disabled: field.readOnly,
                maxlength: field.maxLength,
                class: field.className,
                value: field.value
            };
            
            // Special handling for options for an input:select (picklist) component
            if(field.type === "inputSelect" && field.picklistOptions) attributes.options = field.picklistOptions;
            
            // Append the attributes Object containing the required attributes to render this pre-chat field
            componentInfoArray.push(attributes);
            
            // Append this componentInfoArray to the fieldAttributesArray
            prechatFieldsInfoArray.push(componentInfoArray);
        });

        return prechatFieldsInfoArray;
    }
});
```
