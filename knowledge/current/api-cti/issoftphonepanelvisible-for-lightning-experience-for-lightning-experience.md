---
title: "isSoftphonePanelVisible() for Lightning Experience for Lightning Experience"
domain: api-cti
topic: issoftphonepanelvisible-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.820Z
estimatedTokens: 298
keywords: [isSoftphonePanelVisible, Lightning, Experience, visibility, status, softphone, panel, visible, it’s, minimized, API, version, 38.0, later, Usage]
---

# isSoftphonePanelVisible() for Lightning Experience for Lightning Experience

> Use this method to return the visibility status of the softphone panel. Returns true if the softphone panel is visible and false if it’s minimized. This method is available in
            API version 38.0 or later.

# isSoftphonePanelVisible() for Lightning Experience for Lightning Experience

## Usage

Use this method to return the visibility status of the softphone panel. Returns true if the softphone panel is visible and false if it’s minimized. This method is available in API version 38.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–HTML and JavaScript with a callback

```

```

## Response

This method is asynchronous. The response is returned in an object passed to a callback method. The response object contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | Returns true if the API method call was invoked successfully, false otherwise. |
| returnValue | object | Contains the boolean property visible which indicates the visibility status of the softphone panel. It’s true if the softphone is visible and false if it’s minimized. |
| errors | array | If the API call was successful, this variable is null. If the API call failed, this variable returns an array of error messages. |

## Code Examples

```
sforce.opencti.isSoftphonePanelVisible({
     callback: function
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

      function isSoftphonePanelVisible() {
          sforce.opencti.isSoftphonePanelVisible({callback: callback});
      }
     </script>
  </head>
  <body>
    <button onclick="isSoftphonePanelVisible();">isSoftphonePanelVisible()</button>
  </body>
</html>
```

## Related Topics

- error
                              messages (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_error_messages_lightning.htm)
