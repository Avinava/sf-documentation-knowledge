---
title: "setSoftphonePanelWidth() for Lightning Experience for
         Lightning Experience"
domain: api-cti
topic: setsoftphonepanelwidth-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.044Z
estimatedTokens: 284
keywords: [setSoftphonePanelWidth, Lightning, Experience, softphone, panel, width, utility, bar, pixels, API, version, 38.0, later, Usage, Arguments]
---

# setSoftphonePanelWidth() for Lightning Experience for
         Lightning Experience

> Sets the softphone panel width in the utility bar. The width must be specified in
            pixels. This method is available in API version 38.0 or later.

# setSoftphonePanelWidth() for Lightning Experience for Lightning Experience

## Usage

Sets the softphone panel width in the utility bar. The width must be specified in pixels. This method is available in API version 38.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| widthPX | number | The softphone panel width in pixels. The height must be a number from 200 through 1,920. |
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

## Code Examples

```
sforce.opencti.setSoftphonePanelWidth({
   widthPX:width, 
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

      function setSoftphonePanelWidth() {
          sforce.opencti.setSoftphonePanelWidth({widthPX: 400, callback: callback});
      }
     </script>
  </head>
  <body>
    <button onclick="setSoftphonePanelWidth();">setSoftphonePanelWidth()</button>
  </body>
</html>
```

## Related Topics

- error
                              messages (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_error_messages_lightning.htm)
