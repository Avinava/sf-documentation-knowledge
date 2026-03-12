---
title: "onClickToDial() for Lightning Experience for Lightning Experience"
domain: api-cti
topic: onclicktodial-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.869Z
estimatedTokens: 516
keywords: [onClickToDial, Lightning, Experience, Registers, function, call, user, clicks, enabled, phone, number, API, version, 38.0, later]
---

# onClickToDial() for Lightning Experience for Lightning Experience

> Registers a function to call when a user clicks an
               enabled phone number. This method is available in API version 38.0 or later.

# onClickToDial() for Lightning Experience for Lightning Experience

## Usage

Registers a function to call when a user clicks an enabled phone number. This method is available in API version 38.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

You can use this method with the Lightning web component lightning-click-to-dial. You can also use it with the Aura component lightning:clickToDial. Keep in mind that you can’t use either component in iFrames. This method can’t be used with the Visualforce component support:clickToDial.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| listener | function | JavaScript method called when the user clicks an enabled phone number. |

## Sample Code–HTML and JavaScript

```

```

## Payload

The payload object passed to each call to the listener method contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| number | number | Provides the phone number clicked by the user. |
| recordId | string | Provides the ID of the record associated with the clicked phone number. |
| recordName | string | Provides the name of the record for the clicked phone number. |
| objectType | string | Provides the type of record associated with the clicked phone number. |
| accountId or contactId | string | If the clicked phone number belongs to a person account, the associated account or contact ID is provided. |
| personAccount | boolean | If the clicked phone number belongs to a person account, this property is true.If person accounts aren’t enabled in your org, this field isn’t included in the payload object. |
| params | string | Comma-separated list of parameters associated with the phone number passed into the component. |

#### See Also

-   [*Lightning Components Developer Guide*: lightning:clickToDial](https://developer.salesforce.com/docs/component-library/bundle/lightning:clickToDial/documentation "Lightning Components Developer Guide: lightning:clickToDial - HTML (New Window)")

## Code Examples

```
sforce.opencti.onClickToDial({
     listener: function
})
```

```
<html>
  <head>
    <script type="text/javascript" src="https://domain:port/support/api//lightning/opencti_min.js"></script>
    <script type="text/javascript">
      var listener = function(payload) {
        console.log('Clicked phone number: ' + payload.number);
      };

      // Register the listener.
      window.addEventListener('load', function() {
        sforce.opencti.onClickToDial({listener: listener});
      });
   </script>
  </head>
</html>
```
