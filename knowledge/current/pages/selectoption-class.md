---
title: "SelectOption Class"
domain: pages
topic: selectoption-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.769Z
estimatedTokens: 493
namespace: System
keywords: [SelectOption, possible, Visualforce, selectCheckboxes, selectList, selectRadio, component, Instantiation]
---

# SelectOption Class

> A SelectOption object specifies one of the possible values for a Visualforce selectCheckboxes, selectList, or selectRadio component.

**Namespace:** `System`

# SelectOption Class

A SelectOption object specifies one of the possible values for a Visualforce selectCheckboxes, selectList, or selectRadio component.

## Namespace

System

SelectOption consists of a label that is displayed to the end user, and a value that is returned to the controller if the option is selected. A SelectOption can also be displayed in a disabled state, so that a user cannot select it as an option, but can still view it.

## Instantiation

In a custom controller or controller extension, you can instantiate a SelectOption in one of the following ways:

-   ```

    ```

    where value is the String that is returned to the controller if the option is selected by a user, label is the String that is displayed to the user as the option choice, and isDisabled is a Boolean that, if true, specifies that the user cannot select the option, but can still view it.

-   ```

    ```

    where value is the String that is returned to the controller if the option is selected by a user, and label is the String that is displayed to the user as the option choice. Because a value for isDisabled is not specified, the user can both view and select the option.


## Example

The following example shows how a list of SelectOptions objects can be used to provide possible values for a selectCheckboxes component on a Visualforce page. In the following custom controller, the getItems method defines and returns the list of possible SelectOption objects:

```

```

In the following page markup, the <apex:selectOptions\> tag uses the getItems method from the controller above to retrieve the list of possible values. Because <apex:selectOptions\> is a child of the <apex:selectCheckboxes\> tag, the options are displayed as checkboxes:

```

```

-   **[SelectOption Constructors](atlas.en-us.pages.meta/pages/apex_System_SelectOption_constructors.htm)**

-   **[SelectOption Methods](atlas.en-us.pages.meta/pages/apex_System_SelectOption_methods.htm)**

## Code Examples

```
SelectOption option = new SelectOption(value, label, isDisabled);
```

```
SelectOption option = new SelectOption(value, label);
```

```apex
public class sampleCon {

 	String[] countries = new String[]{};

 	public PageReference test() {
 	 	return null;
 	}

 	public List<SelectOption> getItems() {
 	 	List<SelectOption> options = new List<SelectOption>();
 	 	options.add(new SelectOption('US','US'));
 	 	options.add(new SelectOption('CANADA','Canada'));
 	 	options.add(new SelectOption('MEXICO','Mexico'));
 	 	return options;
  	}

 	public String[] getCountries() {
  	 	return countries;
 	}

 	public void setCountries(String[] countries) {
 	 	this.countries = countries;
 	}

}
```

```
<apex:page controller="sampleCon">
 	<apex:form>
 	 	<apex:selectCheckboxes value="{!countries}">
 	 	 	<apex:selectOptions value="{!items}"/>
 	 	</apex:selectCheckboxes><br/>
 	 	<apex:commandButton value="Test" action="{!test}" rerender="out" status="status"/>
 	</apex:form>
 	<apex:outputPanel id="out">
 	 	<apex:actionstatus id="status" startText="testing...">
 	 	 	<apex:facet name="stop">
 	 	 	 	<apex:outputPanel>
 	 	 	 	 	<p>You have selected:</p>
 	 	 	 	 	<apex:dataList value="{!countries}" var="c">{!c}</apex:dataList>
 	 	 	 	</apex:outputPanel>
 	 	 	</apex:facet>
 	 	</apex:actionstatus>
 	</apex:outputPanel>
</apex:page>
```

## Related Topics

- SelectOption Constructors (atlas.en-us.pages.meta/pages/apex_System_SelectOption_constructors.htm)
- SelectOption Methods (atlas.en-us.pages.meta/pages/apex_System_SelectOption_methods.htm)
