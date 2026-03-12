---
title: "Defining Templates with  <apex:composition>"
domain: pages
topic: defining-templates-with-apexcomposition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.238Z
estimatedTokens: 753
keywords: [Defining, Templates, <apex, composition>, defined, child, insert>, tags, tag, pages, import, template, needs, definition, Any]
---

# Defining Templates with  <apex:composition>

> All templates defined using <apex:composition> must have one or more child <apex:insert> tags. An <apex:insert> tag indicates to pages that import the template that a section needs
a definition. Any Visualforce page that imports a template using <apex:composition> must use <apex:define> to specify t

# Defining Templates with <apex:composition>

All templates defined using <apex:composition\> must have one or more child <apex:insert\> tags. An <apex:insert\> tag indicates to pages that import the template that a section needs a definition. Any Visualforce page that imports a template using <apex:composition\> must use <apex:define\> to specify the content of each <apex:insert\> section of the template.

You can create a skeleton template that allows subsequent Visualforce pages to implement different content within the same standard structure. To do so, create a template page with the <apex:composition\> tag.

The following example shows how you can use <apex:composition\>, <apex:insert\>, and <apex:define\> to implement a skeleton template.

First, create an empty page called myFormComposition that uses a controller called compositionExample:

```

```

After saving the page, a prompt appears that asks you to create compositionExample. Use the following code to define that custom controller:

```

```

Next, return to myFormComposition and create a skeleton template:

```

```

Notice the two <apex:insert\> fields requiring the age and meal content. The markup for these fields is defined in whichever page calls this composition template.

Next, create a page called myFullForm, which defines the <apex:insert\> tags in myFormComposition:

```

```

Notice the following about the markup:

-   When you save myFullForm, the previously defined <apex:inputText\> tags and **Save** button appear.
-   Since the composition page requires age and meal fields, myFullForm defines them as text input fields. The order in which they appear on the page does not matter; myFormComposition specifies that the age field is always displayed before the meal field.
-   The name field is still imported, even without a matching <apex:define\> field.
-   The color field is disregarded, even though controller code exists for the field. This is because the composition template does not require any field named color.
-   The age and meal fields do not need to be text inputs. The components within an <apex:define\> tag can be any valid Visualforce tag.

To show how you can use any valid Visualforce in an <apex:define\> tag, create a new Visualforce page called myAgelessForm and use the following markup:

```

```

Notice that the composition template only requires an <apex:define\> tag to exist. In this example, age is defined as text.

## Dynamic Templates

A dynamic template allows you to assign a template through a PageReference. The template name is assigned to a controller method that returns a PageReference containing the template you want to use.

For example, create a page called myAppliedTemplate that defines the skeleton template:

```

```

Next, create a controller called dynamicComposition with a method that will return a reference to this page:

```

```

Last, create a page called myDynamicComposition that implements this controller and the dynamic template:

```

```

## Code Examples

```
<apex:page controller="compositionExample">

</apex:page>
```

```apex
public class compositionExample{

    String name;
    Integer age;
    String meal;
    String color;
    
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
    
    public void setAgeField(Integer ageField) {
        age= ageField;
    }
    
    public Integer getAgeField() {
        return age;
    }
    
    public void setMealField(String mealField) {
        meal= mealField;
    }
    
    public String getMealField() {
        return meal;
    }   
         
    public void setColorField(String colorField) {
        color = colorField;
    }
    
    public String getColorField() {
        return color;
    }       
    
    public Boolean getShowGreeting() {
        return showGreeting;
    }
}
```

```
<apex:page controller="compositionExample">
    <apex:form >
        <apex:outputLabel value="Enter your name: " for="nameField"/>
        <apex:inputText id="nameField" value="{!nameField}"/>
        <br />
        <apex:insert name="age" />
        <br />
        <apex:insert name="meal" />
        <br />      
        <p>That's everything, right?</p>
        <apex:commandButton action="{!save}" value="Save" id="saveButton"/>
    </apex:form>
</apex:page>
```

```
<apex:page controller="compositionExample">
    <apex:messages/>
    <apex:composition template="myFormComposition">
    
    <apex:define name="meal">
        <apex:outputLabel value="Enter your favorite meal: " for="mealField"/>
        <apex:inputText id="mealField" value="{!mealField}"/>
    </apex:define>

    <apex:define name="age">
        <apex:outputLabel value="Enter your age: " for="ageField"/>
        <apex:inputText id="ageField" value="{!ageField}"/>
    </apex:define>
    
   <apex:outputLabel value="Enter your favorite color: " for="colorField"/>
   <apex:inputText id="colorField" value="{!colorField}"/>
    
    </apex:composition>
    
    <apex:outputText id="greeting" rendered="{!showGreeting}" value="Hello {!nameField}. 
    You look {!ageField} years old. Would you like some {!colorField} {!mealField}?"/>
</apex:page>
```

```
<apex:page controller="compositionExample">
    <apex:messages/>
    <apex:composition template="myFormComposition">
    
    <apex:define name="meal">
        <apex:outputLabel value="Enter your favorite meal: " for="mealField"/>
        <apex:inputText id="mealField" value="{!mealField}"/>
    </apex:define>

    <apex:define name="age">
        <p>You look great for your age!</p>
    </apex:define>

    </apex:composition>
    
    <apex:outputText id="greeting" rendered="{!showGreeting}" value="Hello {!nameField}. 
    Would you like some delicious {!mealField}?"/>
</apex:page>
```
