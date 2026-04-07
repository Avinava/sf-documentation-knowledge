---
title: "WAT and WATP"
domain: mc-programmatic-content
topic: wat-and-watp
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:24.405Z
estimatedTokens: 352
keywords: [WAT, WATP, Function, Ordinal, perform, match, against, replace, **Overview**, **Syntax**]
---

> WAT and WATP(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    String to perform the match against



    2
    string
    Required
    Value used to replace the WATP function tracking parameter

# WAT and WATP

## **Overview**

returns the values of the Web Analytics Tracking (WAT) parameter with the specified external key. Contact Marketing Cloud Support to set the external key values in the Web Analytics Connector. The function substitutes optional parameters for calls to the WATP function within the tracking parameter set in the Sender Profile. The WAT call parameters must use constant or numeric values. Variable, attribute, field, and faction values don't allow job-level resolution to the desired link query string parameters.

### **Syntax**

WAT and WATP(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | String to perform the match against |
| 2 | string | Required | Value used to replace the WATP function tracking parameter |

### Usage

```
WAT('Omniture','1234')
```

Returns the value of the Omniture tracking parameter with 1234 substituted for references to WATP(1) within the tracking parameter. The parameter for the WAT function specifies the ordinal of the parameter inside the tracking parameter set in the Sender Profile Analytics Profile.

```
WAT('Omniture','1234','5678')
```

Returns the value of the Omniture tracking parameter with 1234 substituted for references to WATP(1) within the tracking parameter. This call also substitutes 5678 for references to WATP(2) within the tracking parameter.

Last Updated: Jun 8, 2021
