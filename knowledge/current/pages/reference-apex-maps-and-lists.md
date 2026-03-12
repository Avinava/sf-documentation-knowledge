---
title: "Reference Apex Maps and Lists"
domain: pages
topic: reference-apex-maps-and-lists
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.505Z
estimatedTokens: 413
keywords: [Apex, Maps, Visualforce, pages, dynamic, bindings, Map, data, their, markup, Unresolved, References]
---

# Reference Apex Maps and Lists

> Visualforce pages that use dynamic bindings can reference the Apex Map and List
        data types in their markup.

# Reference Apex Maps and Lists

Visualforce pages that use dynamic bindings can reference the Apex Map and List data types in their markup.

For example, if an Apex List is defined as:

```

```

You can access the list values in a Visualforce page using {!object} syntax and array notation.

```

```

Similarly, if you have this Apex Map:

```

```

You can access the map’s keys and values in a Visualforce page using {!object} syntax and array notation.

```

```

Use dynamic references to lists and maps in an <apex:inputText\> tag to create forms using data that isn’t in your organization’s custom objects. Working with a single map can be much simpler than creating a series of instance variables in an Apex controller or creating a custom object just for the form data.

Here’s a Visualforce page that uses a map to hold form data for processing by a custom controller.

```

```

And here’s a simple controller that works with the form.

```

```

A Map can contain references to sObjects or sObject fields. To update those items, reference a field name in the input field.

```

```

```

```

## Unresolved Dynamic References

Keep in mind the following issues that can arise at run time if a dynamic reference doesn’t resolve:

-   If there isn’t a value mapped to a particular key or the value is null, the Visualforce page returns an error message. For example, with this controller:

    ```

    ```

    This page causes an error at run time.

    ```

    ```

-   If the key is null, the Visualforce page renders an empty string. For example, using the same controller as above, this page shows an empty space.

    ```

    ```

## Code Examples

```apex
public List<String> people {
    get { 
        return new List<String>{'Winston', 'Julia', 'Brien'};
    }
    set;
}

public List<Integer> iter {
    get { 
        return new List<Integer>{0, 1, 2};
    }
    set;
}
```

```
<apex:repeat value="{!iter}" var="pos">
    <apex:outputText value="{!people[pos]}" /><br/>
</apex:repeat>
```

```apex
public Map<String,String> directors {
    get {
        return new Map<String, String> {
            'Kieslowski' => 'Poland', 
            'del Toro' => 'Mexico', 
            'Gondry' => 'France'
        };
    }
    set;
}
```

```
<apex:repeat value="{!directors}" var="dirKey">
        <apex:outputText value="{!dirKey}" /> -- 
        <apex:outputText value="{!directors[dirKey]}" /><br/>
</apex:repeat>
```

```
<apex:page controller="ListsMapsController">
    <apex:outputPanel id="box" layout="block">
        <apex:pageMessages/>
        <apex:form >

            <apex:repeat value="{!inputFields}" var="fieldKey">
                <apex:outputText value="{!fieldKey}"/>: 
                <apex:inputText value="{!inputFields[fieldKey]}"/><br/>
            </apex:repeat>

            <apex:commandButton action="{!submitFieldData}" 
                value="Submit" id="button" rerender="box"/>

        </apex:form>
    </apex:outputPanel>
</apex:page>
```
