---
title: "setSoftphoneItemIcon() for Lightning Experience for
         Lightning Experience"
domain: api-cti
topic: setsoftphoneitemicon-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.012Z
estimatedTokens: 405
keywords: [setSoftphoneItemIcon, Lightning, Experience, icon, softphone, item, utility, bar, function, successfully, executed, there, failure, API, version]
---

# setSoftphoneItemIcon() for Lightning Experience for
         Lightning Experience

> Sets the icon for the softphone item in the utility bar. Returns true if the function is successfully executed, and
               false when there is a failure. This method
            is available in API version 38.0 or later.

# setSoftphoneItemIcon() for Lightning Experience for Lightning Experience

## Usage

Sets the icon for the softphone item in the utility bar. Returns true if the function is successfully executed, and false when there is a failure. This method is available in API version 38.0 or later.

The softphone icon in the utility bar.![Screen shot of softphone in utility bar.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_cti%2Fimages%2Fsoftphone_item_icon_lex.png&folder=api_cti)

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| key | string | The key corresponding to the icon in the Lightning Design System you want to use for the softphone icon in the utility bar. |
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

-   [*Salesforce Lightning Design System*: Utility Icons](https://www.lightningdesignsystem.com/icons/#utility "Salesforce Lightning Design System: Utility Icons - html (New Window)")

## Code Examples

```
sforce.opencti.setSoftphoneItemIcon({
     key:key, 
     callback:function  //Optional
});
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

      function setSoftphoneItemIcon() {
          sforce.opencti.setSoftphoneItemIcon({key:"call", callback: callback});
      }
     </script>
  </head>
  <body>
    <button onclick="setSoftphoneItemIcon();">setSoftphoneItemIcon()</button>
  </body>
</html>
```

## Related Topics

- error
                              messages (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_error_messages_lightning.htm)
