---
title: "Custom Component Controllers"
domain: pages
topic: custom-component-controllers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.035Z
estimatedTokens: 363
keywords: [Custom, Component, Controllers, Similar, standard, Visualforce, pages, components, associated, controller, written, Apex, association, made, setting]
---

# Custom Component Controllers

> Similar to standard Visualforce pages, custom components can
      be associated with a controller written in Apex. This association is made by setting the
        controller attribute on the component to your
      custom controller. You can use the controller to perform additional logic before ret

# Custom Component Controllers

Similar to standard Visualforce pages, custom components can be associated with a controller written in Apex. This association is made by setting the controller attribute on the component to your custom controller. You can use the controller to perform additional logic before returning the component's markup to the associated page.

## Accessing Custom Component Attributes in a Controller

To access the value of a custom component attribute in an associated custom component controller:

1.  Define a property in the custom component controller to store the value of the attribute.
2.  Define a getter and setter method for the property. For example:

    ```

    ```

    Notice that the setter modifies the value.
3.  In the <apex:attribute\> tag in your component definition, use the assignTo attribute to bind the attribute to the class variable you just defined. For example:

    ```

    ```

    Note that when using the assignTo attribute, getter and setter methods, or a property with get and set values, must be defined.
4.  Add the component to a page. For example,

    ```

    ```


The output of the page will look something like the following: ![Example page.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_component_controller_attributes.jpg&folder=pages)Notice that the Apex controller method changes controllerValue so that it is displayed with uppercase characters.

## Code Examples

```apex
public class myComponentController {
    
  public String controllerValue;
    
  public void setControllerValue (String s) {
    controllerValue = s.toUpperCase();
  }
    
  public String getControllerValue() {
    return controllerValue;
  } 
}
```

```
<apex:component controller="myComponentController">
  <apex:attribute name="componentValue" description="Attribute on the component."
                  type="String" required="required" assignTo="{!controllerValue}"/>
    <apex:pageBlock title="My Custom Component">
      <p>
        <code>componentValue</code> is "{!componentValue}"
        <br/>
        <code>controllerValue</code> is "{!controllerValue}"
      </p>
    </apex:pageBlock>
    Notice that the controllerValue has been upper cased using an Apex method.
</apex:component>
```

```
<apex:page>
  <c:simpleComponent componentValue="Hi there, {!$User.FirstName}"/>   
</apex:page>
```
