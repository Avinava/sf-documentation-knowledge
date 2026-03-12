---
title: "notifyInitializationComplete() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: notifyinitializationcomplete-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.852Z
estimatedTokens: 177
keywords: [notifyInitializationComplete, Salesforce, Classic, Notifies, softphone, initialization, switch, standby, URL, initializes, loading, icon, displays, Usage, Arguments]
---

# notifyInitializationComplete() for Salesforce Classic for Salesforce Classic

> Notifies Salesforce that the
                                        softphone initialization is complete and that Salesforce
                                        should not switch to a standby URL. While the softphone
                                        initializes, a loading icon displays i

# notifyInitializationComplete() for Salesforce Classic for Salesforce Classic

## Usage

Notifies Salesforce that the softphone initialization is complete and that Salesforce should not switch to a standby URL. While the softphone initializes, a loading icon displays in the SoftPhone area. To use a standby URL, you must specify it in the call center’s definition file. For more information, see [Optional Call Center Elements and Attributes](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_optional.htm "The call center definition file can include optional <item> elements in the <section> element.").

## Syntax

```

```

## Arguments

None.

## Sample Code

```

```

## Response

None.

## Code Examples

```
sforce.interaction.cti.notifyInitializationComplete()
```

```
<html>
<head>
<script src="http://domain:port/support/api/29.0/interaction.js"></script>
<script type="text/javascript">
        // Invokes API method
sforce.interaction.cti.notifyInitializationComplete();
</script>
</head>
<body>
The interaction framework has been notified that the CTI initialization is complete.
</body>
</html>
```

## Related Topics

- Optional Call Center Elements and Attributes (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_optional.htm)
