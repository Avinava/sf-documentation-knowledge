---
title: "External Configurator Example"
domain: cpq-plugins
topic: external-configurator-example
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.901Z
estimatedTokens: 69
keywords: [External, Configurator, how, initialize, easyXML, library, Send, Cancel, buttons, displays, configuration, data, sent, Salesforce, CPQ]
---

# External Configurator Example

> This example shows how to initialize the easyXML library and create
            Send and Cancel buttons. It then displays
        the configuration data sent from Salesforce CPQ.

# External Configurator Example

This example shows how to initialize the easyXML library and create **Send** and **Cancel** buttons. It then displays the configuration data sent from Salesforce CPQ.

| Available in: Salesforce CPQ Winter ’16 and later |
| --- |


```

```

## Code Examples

```
<apex:page doctype="html-5.0" standardstylesheets="false" showHeader="false">
 <html>
    <head>
<!-- easyXDM.min.js compiled and minified JavaScript to communicate with Salesforce CPQ-->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/easyXDM/2.4.20/easyXDM.min.js" crossorigin="anonymous">
</script>
    </head>
    <body>
        <div>
            <button onclick="broadcastSend()">Send</button>
            <button onclick="broadcastCancel()">Cancel (Customer's Cancel Button)</button>
            <br></br>
            <textarea id="output" type="text" style="width:1400px; height:700px"></textarea>
        </div>
        <script type="text/javascript">
            // Set up the EasyXDM connection to Salesforce CPQ 
            var rpc = new easyXDM.Rpc({},{
                remote: {
                    postMessage: {}
                },
                local: {
                    //Method that receives the configuration information. 
                    postMessage: function(message) {
                        // Display the JSON received from Salesforce CPQ.
                        document.getElementById('output').value = JSON.stringify(JSON.parse(message), null, 4);
                    }
                }
            });
            function broadcastSend() {
                //Return the configuration information to Salesforce CPQ
                rpc.postMessage(document.getElementById('output').value);
            }
            function broadcastCancel() {
                rpc.postMessage(null);
            }
        </script>
    </body>
</html>
</apex:page>
```
