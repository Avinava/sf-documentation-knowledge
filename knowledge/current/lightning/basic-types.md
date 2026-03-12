---
title: "Basic Types"
domain: lightning
topic: basic-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.405Z
estimatedTokens: 972
keywords: [Basic, correspond, wrapper, objects, primitives, Java, Since, framework, written, defaults, maximum, size, number, defined, Retrieving]
---

# Basic Types

> Here are the supported basic type values. Some of these types correspond to the
                wrapper objects for primitives in Java. Since the framework is written in Java,
                defaults, such as maximum size for a number, for these basic types are defined by
                the Java o

# Basic Types

Here are the supported basic type values. Some of these types correspond to the wrapper objects for primitives in Java. Since the framework is written in Java, defaults, such as maximum size for a number, for these basic types are defined by the Java objects that they map to.

| type | Example | Description |
| --- | --- | --- |
| Boolean | <aura:attribute name="showDetail" type="Boolean" /> | Valid values are true or false. To set a default value of true, add default="true". |
| Date | <aura:attribute name="startDate" type="Date" /> | A date corresponding to a calendar day in the format yyyy-mm-dd. The hh:mm:ss portion of the date isn’t stored. To include time fields, use DateTime instead. |
| DateTime | <aura:attribute name="lastModifiedDate" type="DateTime" /> | A date corresponding to a timestamp. It includes date and time details with millisecond precision. |
| Decimal | <aura:attribute name="totalPrice" type="Decimal" /> | Decimal values can contain fractional portions (digits to the right of the decimal). Maps to java.math.BigDecimal.Decimal is better than Double for maintaining precision for floating-point calculations. It’s preferable for currency fields. |
| Double | <aura:attribute name="widthInchesFractional" type="Double" /> | Double values can contain fractional portions. Maps to java.lang.Double. Use Decimal for currency fields instead. |
| Integer | <aura:attribute name="numRecords" type="Integer" /> | Integer values can contain numbers with no fractional portion. Maps to java.lang.Integer, which defines its limits, such as maximum size. |
| Long | <aura:attribute name="numSwissBankAccount" type="Long" /> | Long values can contain numbers with no fractional portion. Maps to java.lang.Long, which defines its limits, such as maximum size.Use this data type when you need a range of values wider than those provided by Integer. |
| String | <aura:attribute name="message" type="String" /> | A sequence of characters. |

You can use arrays for each of these basic types. For example:

```

```

## Retrieving Data from an Apex Controller

This example retrieves a string array of favorite colors from an Apex controller.

This component is bound to the AttributeTypes Apex controller and retrieves the string array when the Update button is clicked. The colors are displayed using a favoriteColors attribute.

```

```

The Apex controller has a getStringArray() method that returns a String\[\].

```

```

The component’s client-side controller retrieves the string array from the Apex controller by calling getStringArray(). The controller then sets the result in the favoriteColors attribute, which is refreshed in the UI.

```

```

To retrieve data from an object that’s returned by an Apex controller, create an attribute with a type corresponding to a standard or custom object.

```

```

You can access a field on the object using the {!account.fieldName} syntax. For more information, see [Using Apex to Work with Salesforce Records](atlas.en-us.lightning.meta/lightning/apex_records.htm "Use Apex only if you need to customize your user interface to do more than what Lightning Data Service allows, such as using a SOQL query to select certain records. Apex provisions data that’s not managed and you must handle data refresh on your own.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The return value from Apex is serialized if it contains a decimal value. If the decimal value has more than 15 digits of precision, the value is serialized as a JSON string to preserve exact precision. Otherwise, the value is serialized as a JSON number literal. This serialization prevents precision loss for high-precision decimal values that exceed JavaScript's double precision limits. You can handle these values as strings in JavaScript and convert the values as needed.

## Code Examples

```
<aura:attribute name="favoriteColors" type="String[]" default="['red','green','blue']" />
```

```
<aura:component controller="AttributeTypes">
    <aura:attribute name="favoriteColors" type="String[]" default="['cyan', 'yellow', 'magenta']"/>
    <aura:iteration items="{!v.favoriteColors}" var="s">
        <p>{!s}</p>
    </aura:iteration>
    <lightning:button onclick="{!c.getString}" label="Update"/>
</aura:component>
```

```apex
public class AttributeTypes {
    
 @AuraEnabled
    public static String[] getStringArray() {
        String[] arrayItems = new String[]{ 'red', 'green', 'blue' };
        return arrayItems;
    }

}
```

```
({
    getString : function(component, event) {
    var action = component.get("c.getStringArray");
     action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var stringItems = response.getReturnValue();
                component.set("v.favoriteColors", stringItems);
            }
        });
        $A.enqueueAction(action);
    }
})
```

```
<aura:attribute name="accounts" type="Account[]"/>
```

## Related Topics

- Using Apex to Work with Salesforce Records (atlas.en-us.lightning.meta/lightning/apex_records.htm)
