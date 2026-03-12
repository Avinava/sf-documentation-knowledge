---
title: "SelectOption Class"
domain: apex-reference
topic: selectoption-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.795Z
estimatedTokens: 2434
namespace: System
keywords: [SelectOption, specifies, possible, values, Visualforce, selectCheckboxes, selectList, selectRadio, component., Instantiation, Example, label, isDisabled, getDisabled, Usage, getEscapeItem, getLabel, getValue, setDisabled, setEscapeItem]
---

# SelectOption Class

> A SelectOption object specifies one of the possible values for a Visualforce selectCheckboxes, selectList, or selectRadio component.

**Namespace:** `System`

# SelectOption Class

A SelectOption object specifies one of the possible values for a Visualforce selectCheckboxes, selectList, or selectRadio component.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

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

-   **[SelectOption Constructors](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_System_SelectOption_constructors)**

-   **[SelectOption Methods](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_System_SelectOption_methods)**


## SelectOption Constructors

The following are constructors for SelectOption.

-   **[SelectOption(value, label)](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_System_SelectOption_ctor_2)**
    Creates a new instance of the SelectOption class using the specified value and label.
-   **[SelectOption(value, label, isDisabled)](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_System_SelectOption_ctor)**
    Creates a new instance of the SelectOption class using the specified value, label, and disabled setting.

### SelectOption(value, label)

Creates a new instance of the SelectOption class using the specified value and label.

#### Signature

public SelectOption(String value, String label)

#### Parameters

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The string that is returned to the Visualforce controller if the option is selected by a user.

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The string that is displayed to the user as the option choice.

### SelectOption(value, label, isDisabled)

Creates a new instance of the SelectOption class using the specified value, label, and disabled setting.

#### Signature

public SelectOption(String value, String label, Boolean isDisabled)

#### Parameters

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The string that is returned to the Visualforce controller if the option is selected by a user.

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The string that is displayed to the user as the option choice.

isDisabled

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If set to true, the option can’t be selected by the user but can still be viewed.

## SelectOption Methods

The following are methods for SelectOption. All are instance methods.

-   **[getDisabled()](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_System_SelectOption_getDisabled)**
    Returns the current value of the SelectOption object's isDisabled attribute.
-   **[getEscapeItem()](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_System_SelectOption_getEscapeItem)**
    Returns the current value of the SelectOption object's itemEscaped attribute.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_System_SelectOption_getLabel)**
    Returns the option label that is displayed to the user.
-   **[getValue()](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_System_SelectOption_getValue)**
    Returns the option value that is returned to the controller if a user selects the option.
-   **[setDisabled(isDisabled)](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_System_SelectOption_setDisabled)**
    Sets the value of the SelectOption object's isDisabled attribute.
-   **[setEscapeItem(itemsEscaped)](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_System_SelectOption_setEscapeItem)**
    Sets the value of the SelectOption object's itemEscaped attribute.
-   **[setLabel(label)](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_System_SelectOption_setLabel)**
    Sets the value of the option label that is displayed to the user.
-   **[setValue(value)](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_System_SelectOption_setValue)**
    Sets the value of the option value that is returned to the controller if a user selects the option.

### getDisabled()

Returns the current value of the SelectOption object's isDisabled attribute.

#### Signature

public Boolean getDisabled()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If isDisabled is set to true, the user can view the option, but cannot select it. If isDisabled is set to false, the user can both view and select the option.

### getEscapeItem()

Returns the current value of the SelectOption object's itemEscaped attribute.

#### Signature

public Boolean getEscapeItem()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If itemEscaped is set to true, sensitive HTML and XML characters are escaped in the HTML output generated by this component. If itemEscaped is set to false, items are rendered as written.

### getLabel()

Returns the option label that is displayed to the user.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the option value that is returned to the controller if a user selects the option.

#### Signature

public String getValue()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setDisabled(isDisabled)

Sets the value of the SelectOption object's isDisabled attribute.

#### Signature

public Void setDisabled(Boolean isDisabled)

#### Parameters

isDisabled

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void

#### Usage

If isDisabled is set to true, the user can view the option, but cannot select it. If isDisabled is set to false, the user can both view and select the option.

### setEscapeItem(itemsEscaped)

Sets the value of the SelectOption object's itemEscaped attribute.

#### Signature

public Void setEscapeItem(Boolean itemsEscaped)

#### Parameters

itemsEscaped

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void

#### Usage

If itemEscaped is set to true, sensitive HTML and XML characters are escaped in the HTML output generated by this component. If itemEscaped is set to false, items are rendered as written.

### setLabel(label)

Sets the value of the option label that is displayed to the user.

#### Signature

public Void setLabel(String label)

#### Parameters

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setValue(value)

Sets the value of the option value that is returned to the controller if a user selects the option.

#### Signature

public Void setValue(String value)

#### Parameters

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

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

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- SelectOption Constructors (atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm)
- SelectOption Methods (atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm)
- SelectOption(value, label) (atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm)
- SelectOption(value, label, isDisabled) (atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- getDisabled() (atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm)
- getEscapeItem() (atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm)
