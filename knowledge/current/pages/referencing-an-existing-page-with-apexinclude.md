---
title: "Referencing an Existing Page with  <apex:include>"
domain: pages
topic: referencing-an-existing-page-with-apexinclude
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.243Z
estimatedTokens: 418
keywords: [Referencing, <apex, include>, duplicating, components, Custom, better, suited, reusable, segments, code]
---

# Referencing an Existing Page with  <apex:include>

> You should not use <apex:include> if you are only duplicating components. Custom
components are better suited for reusable segments of code.

# Referencing an Existing Page with <apex:include>

Use the <apex:include\> tag when you want to duplicate the entire content of another page without making any changes. You can use this technique to reference existing markup that will be used the same way in several locations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

You should not use <apex:include\> if you are only duplicating components. [Custom components](atlas.en-us.pages.meta/pages/pages_comp_cust.htm) are better suited for reusable segments of code.

For example, suppose you want to create a form that takes a user's name and displays it back to them. First, create a page called formTemplate that represents a reusable form and uses a controller called templateExample:

```

```

After you receive the prompt about templateExample not existing, use the following code to define that custom controller:

```

```

Next, return to formTemplate and add the following markup:

```

```

Note that nothing should happen if you click **Save**. This is expected behavior.

Next, create a page called displayName, which includes formTemplate:

```

```

When you save this page, the entire formTemplate page is imported. When you enter a name and click **Save** the form passes a true value to the showGreeting field, which then renders the <apex:outputText\> and displays the user's name.

You can create another Visualforce page that uses formTemplate to display a different greeting. Create a page called displayBoldName and use the following markup:

```

```

Notice that although the displayed text changes, the templateExample logic remains the same.

## Code Examples

```
<apex:page controller="templateExample">

</apex:page>
```

```apex
public class templateExample{

    String name;
    Boolean showGreeting = false;
    
    public PageReference save() {
        showGreeting = true;
        return null;
    }
    
    public void setNameField(String nameField) {
        name = nameField;
    }
    
    public String getNameField() {
        return name;
    }
    
    public Boolean getShowGreeting() {
        return showGreeting;
    }
}
```

```
<apex:page controller="templateExample">
    <apex:form>
        <apex:outputLabel value="Enter your name: " for="nameField"/>
        <apex:inputText id="nameField" value="{!nameField}"/>
        <apex:commandButton action="{!save}" value="Save" id="saveButton"/>
    </apex:form>
</apex:page>
```

```
<apex:page controller="templateExample">
    <apex:include pageName="formTemplate"/>
    <apex:actionSupport event="onClick" 
                        action="{!save}"
                        rerender="greeting"/>
    <apex:outputText id="greeting" rendered="{!showGreeting}" value="Hello {!nameField}"/>
</apex:page>
```

```
<apex:page controller="templateExample">    
    <style type="text/css">
    .boldify { font-weight: bolder; }
    </style>
    <apex:include pageName="formTemplate"/>
    <apex:actionSupport event="onClick" 
                        action="{!save}"
                        rerender="greeting"/>
    <apex:outputText id="greeting" rendered="{!showGreeting}" 
                     styleClass="boldify" 
                     value="I hope you are well, {!nameField}."/>
</apex:page>
```

## Related Topics

- Custom
components (atlas.en-us.pages.meta/pages/pages_comp_cust.htm)
