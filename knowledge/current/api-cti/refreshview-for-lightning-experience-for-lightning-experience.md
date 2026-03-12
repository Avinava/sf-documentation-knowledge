---
title: "refreshView() for Lightning Experience for Lightning
            Experience"
domain: api-cti
topic: refreshview-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.904Z
estimatedTokens: 310
keywords: [refreshView, Lightning, Experience, view, refresh, invoked, otherwise, Salesforce, console, refreshes, current, active, any, included, tab]
---

# refreshView() for Lightning Experience for Lightning
            Experience

> Returns true if view refresh is invoked,
                    false otherwise. When this method is
                called within the Salesforce console, it refreshes the current active view. If any
                related lists are included in this tab, they’re refreshed too. This method is
         

# refreshView() for Lightning Experience for Lightning Experience

## Usage

Returns true if view refresh is invoked, false otherwise. When this method is called within the Salesforce console, it refreshes the current active view. If any related lists are included in this tab, they’re refreshed too. This method is available in API version 38.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | Optional. JavaScript method executed when the API method call is completed. |

## Sample Code–HTML and JavaScript without a callback

```

```

## Sample Code–HTML and JavaScript with a callback

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
sforce.opencti.refreshView({
     callback:function
});
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/66.0/lightning/opencti_min.js"></script>
   <script type="text/javascript">
	var param = {};
       	function refreshView() {
                	sforce.opencti.refreshView(param);
        	}
</script>
</head>
<body>
       <button onclick="refreshView();">refreshView</button>
</body>
</html>
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/66.0/lightning/opencti_min.js"></script>
   <script type="text/javascript">
	var param = {};
            	var callback = function(response) {
         if (response.success) {
            console.log('API method call executed successfully! returnValue:', response.returnValue);
         } else { 
            console.error('Something went wrong! Errors:', response.errors);
         }
      	};
            param.callback = callback;
       
       function refreshView() {
                sforce.opencti.refreshView(param);
        }
</script>
</head>
<body>
       <button onclick="refreshView();">refreshView</button>
</body>
</html>
```

## Related Topics

- error
                              messages (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_error_messages_lightning.htm)
