---
title: "Common Error Messages for Lightning Experience Methods"
domain: api-cti
topic: common-error-messages-for-lightning-experience-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.712Z
estimatedTokens: 243
keywords: [Common, Error, Messages, Lightning, Experience, array]
---

# Common Error Messages for Lightning Experience Methods

> An error object is returned as an array for all Lightning Experience methods.

# Common Error Messages for Lightning Experience Methods

An error object is returned as an array for all Lightning Experience methods.

The following fields are contained as part of the error object.

code: string

A constant string denoting an error code.

description: string

A description of the error code.

details: object

Typically undefined. This constant can contain details about the error object for the saveLog method.

Sample error object:

```

```

Sample error object for the INVALID\_PARAM error code:

```

```

Sample error object for the GENERIC\_PARAM error code:

```

```

Sample error object for the SERVER\_ERROR code:

```

```

Sample error object for the SOFTPHONE\_CONTAINER\_ERROR code:

```

```

For the runApex method, if there is a server error, the description field provides "Could not load Apex class: apexClassName."

For the saveLog method, the details field provides information based on the type of error. For example:

```

```

## Code Examples

```
[{
   code: code1
   description: description1
   details: details1
   },{
   code: code2
   description: description2
   details: details2
}]
```

```
[{
   code: "INVALID_PARAM",
   description: "An invalid value was passed to the parameter parameterName. A numeric value was expected, but undefined was found instead."
}]
```

```
[{
   code: "GENERIC_ERROR",
   description: "An error occurred while calling the API method."
}]
```

```
[{
   code: "SERVER_ERROR",
   description: "A problem was encountered on the server."
}]
```

```
[{
   code: "SOFTPHONE_CONTAINER_ERROR",
   description: "Unable to execute sendPostMessage because the softphone container hasn’t initialized yet."
}]
```
