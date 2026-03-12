---
title: "Collection Types"
domain: lightning
topic: collection-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.414Z
estimatedTokens: 681
keywords: [Collection, Checking, Setting, Items, Working, Map]
---

# Collection Types

> Here are the supported collection type values.

# Collection Types

Here are the supported collection type values.

| type | Example | Description |
| --- | --- | --- |
| type[] (Array) | <aura:attribute name="colorPalette" type="String[]" default="['red', 'green', 'blue']" /> | An array of items of a defined type.NoteTo set a default value, surround comma-separated values with []; for example default="['red', 'green', 'blue']". Setting a default value without square brackets is deprecated and can lead to unexpected behavior. |
| List | <aura:attribute name="colorPalette" type="List" default="['red', 'green', 'blue']" /> | An ordered collection of items.NoteTo set a default value, surround comma-separated values with []; for example default="['red', 'green', 'blue']". Setting a default value without square brackets is deprecated and can lead to unexpected behavior. |
| Map | <aura:attribute name="sectionLabels" type="Map" default="{ a: 'label1', b: 'label2' }" /> | A collection that maps keys to values. A map can’t contain duplicate keys. Each key can map to at most one value.An attribute with no default value defaults to null in JavaScript. If you want to set map values in JavaScript, use default="{}" in markup for an empty map. |
| Set | <aura:attribute name="collection" type="Set" default="['red', 'green', 'blue']" /> | A collection that contains no duplicate elements. The order for set items is not guaranteed. For example, "['red', 'green', 'blue']" might be returned as blue,green,red.NoteTo set a default value, surround comma-separated values with []; for example default="['red', 'green', 'blue']". Setting a default value without square brackets is deprecated and can lead to unexpected behavior. |

## Checking for Types

To determine a variable type, use typeof or a standard JavaScript method, such as Array.isArray(), instead. The instanceof operator is unreliable due to the potential presence of multiple windows or frames.

## Setting List Items

There are several ways to set items in a list. To use a client-side controller, create an attribute of type List and set the items using component.set().

This example retrieves a list of numbers from a client-side controller when a button is clicked.

```

```

```

```

## Working with Map Items

To add a key and value pair to a map, use the syntax myMap\['myNewKey'\] = myNewValue.

```

```

To retrieve a value, use cmp.get("v.sectionLabels")\['a'\].

Here’s a controller with a function that adds a value, retrieves a value, and iterates over a map.

```

```

#### See Also

-   [Passing Data to an Apex Controller](atlas.en-us.lightning.meta/lightning/controllers_server_apex_pass_data.htm "Use action.setParams() in JavaScript to set data to pass to an Apex controller.")

## Code Examples

```
<aura:attribute name="numbers" type="List"/>
<lightning:button onclick="{!c.getNumbers}" label="Display Numbers" />
<aura:iteration var="num" items="{!v.numbers}">
  {!num.value}
</aura:iteration>
```

```
/** Client-side Controller **/
({
  getNumbers: function(component, event, helper) {
    var numbers = [];
    for (var i = 0; i < 20; i++) {
      numbers.push({
        value: i
      });
    }
    component.set("v.numbers", numbers); 
    }
})
```

```
var myMap = cmp.get("v.sectionLabels");
myMap['c'] = 'label3';
```

```
({
    addToMap : function(cmp, event, helper) {
        var myMap = cmp.get("v.sectionLabels");
        myMap['c'] = 'label3';
        console.log("myMap: " + JSON.stringify(myMap));
        
        // get map entry
        var entryA = myMap['a'];
        console.log("entryA: " + entryA);
        
        // iterate map
        for (var key in myMap){
            console.log("key: " + key + ", value: " + myMap[key]);
        }
    }
})
```

## Related Topics

- Passing Data to an Apex Controller (atlas.en-us.lightning.meta/lightning/controllers_server_apex_pass_data.htm)
