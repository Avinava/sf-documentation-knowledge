---
title: "enableClickToDial() for Lightning Experience for
         Lightning Experience"
domain: api-cti
topic: enableclicktodial-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.705Z
estimatedTokens: 402
keywords: [enableClickToDial, Lightning, Experience, click-to-dial, API, version, 38.0, later, Usage, Arguments, Sample, Code–HTML, JavaScript]
---

# enableClickToDial() for Lightning Experience for
         Lightning Experience

> Enables click-to-dial. This method is available
            in API version 38.0 or later.

# enableClickToDial() for Lightning Experience for Lightning Experience

## Usage

Enables click-to-dial. This method is available in API version 38.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

You can use this method with the Lightning web component lightning-click-to-dial. You can also use it with the Aura component lightning:clickToDial. Keep in mind that you can’t use either component in iFrames. This method can’t be used with the Visualforce component support:clickToDial.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–HTML and JavaScript

```

```

## Response

This method is asynchronous. The response is returned in an object passed to a callback method. The response object contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | Returns true if the API method call was invoked successfully, false otherwise. |
| returnValue | object | This API method doesn’t return this object. The returnValue is always null. |
| errors | array | If the API call was successful, this variable is null. If the API call failed, this variable returns an array of error messages. |

#### See Also

-   [*Lightning Components Developer Guide*: lightning:clickToDial](https://developer.salesforce.com/docs/component-library/bundle/lightning:clickToDial/documentation "Lightning Components Developer Guide: lightning:clickToDial - HTML (New Window)")

## Code Examples

```
sforce.opencti.enableClickToDial({
     callback: function //Optional
})
```

```
<html>
  <head>
    <script type="text/javascript" src="https://domain:port/support/api/66.0/lightning/opencti_min.js"></script>
    <script type="text/javascript">
      var callback = function(response) {
         if (response.success) {
            console.log('API method call executed successfully! returnValue:', response.returnValue);
         } else { 
            console.error('Something went wrong! Errors:', response.errors);
         } 
      };

      function enableClickToDial() {
          sforce.opencti.enableClickToDial({callback: callback});
      }
     </script>
  </head>
  <body>
    <button onclick="enableClickToDial();">enableClickToDial()</button>
  </body>
</html>
```

## Related Topics

- error
                              messages (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_error_messages_lightning.htm)
