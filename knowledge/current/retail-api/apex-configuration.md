---
title: "APEX Configuration"
domain: retail-api
topic: apex-configuration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.656Z
estimatedTokens: 209
keywords: [APEX, Configuration, order, customize, Promotion, Save, process, layer, introduce, callable, customization, hook]
---

# APEX Configuration

> In order to customize the Promotion Save process in
    APEX layer, you must introduce a callable APEX class as a customization hook.

# APEX Configuration

In order to customize the Promotion Save process in APEX layer, you must introduce a callable APEX class as a customization hook.

In order to setup the hook, go to Setup → Custom Metadata Types → CGCloud Process Customization , and add the following records:

-   Label: TPM\_Promotion\_Save
-   DeveloperName: TPM\_Promotion\_Save
-   Class: <Your Callable APEX Class>
-   Enabled: checked
-   Method: save

APEX class structure

```

```

The call method is called during the Promotion Save Process. At this method, you can add your customizations to the process:

-   Create additional records
-   Modify TPM records

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

The TPM\_Promotion instance contains an object with all the Managed Package Promotion data.

## Code Examples

```apex
global class <Your Callable APEX Class> implements System.Callable {

    global Object call(String action, Map<String, Object> args) {
        // Get the TPM_Promotion instance from the arguments
        TPM_Promotion promotion = (TPM_Promotion) args.get('promotion');
        // Retrieve your custom state sent to UI
        String payload = (String) args.get('customState');
        // Read Transaction Id
        String txId = (String) args.get('txId');
        
        // Your custom logic goes here
    }
}
```
