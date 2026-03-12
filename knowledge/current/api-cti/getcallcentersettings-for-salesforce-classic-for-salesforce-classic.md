---
title: "getCallCenterSettings() for Salesforce Classic for
                Salesforce Classic"
domain: api-cti
topic: getcallcentersettings-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.723Z
estimatedTokens: 336
keywords: [getCallCenterSettings, Salesforce, Classic, call, center, settings, definition, file, JSON, Files, Usage, Arguments, Sample, Code–JavaScript]
---

# getCallCenterSettings() for Salesforce Classic for
                Salesforce Classic

> Returns the call center settings in the call
                    center definition file as a JSON string. For more information, see Call Center Definition Files.

# getCallCenterSettings() for Salesforce Classic for Salesforce Classic

## Usage

Returns the call center settings in the call center definition file as a JSON string. For more information, see [Call Center Definition Files](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file.htm#sforce_api_cti_call_def_file "A call center definition file specifies a set of fields and values that are used to define a call center in Salesforce for a particular softphone. Salesforce uses call center definition files to support the integration of Salesforce CRM Call Center with multiple CTI system vendors.").

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–JavaScript

```

```

## Response

This method is asynchronous. The response is returned in an object passed to a callback method. The response object contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| result | string | If the API call was successful, the call center settings definition is returned as a JSON string. If the API call failed, null is returned. |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

## Code Examples

```
sforce.interaction.cti.getCallCenterSettings(callback:function)
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/25.0/interaction.js"></script>
   <script type="text/javascript">
       var callback = function (response) {
       alert(response.result);
   } 

   //Calls getCallCenterSettings
   sforce.interaction.cti.getCallCenterSettings(callback);
   </script>
</head> 
<body></body>
</html>
```

## Related Topics

- Call Center Definition Files (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file.htm)
