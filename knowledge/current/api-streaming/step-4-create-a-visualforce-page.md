---
title: "Step 4: Create a Visualforce Page"
domain: api-streaming
topic: step-4-create-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.224Z
estimatedTokens: 112
keywords: [Step, Visualforce]
---

# Step 4: Create a Visualforce Page

# Step 4: Create a Visualforce Page

Create a Visualforce page to display the channel notifications.

1.  From Setup, enter Visualforce Pages in the Quick Find box, then select **Visualforce Pages**.
2.  Click **New**.
3.  In the **Label** field, enter the name of the page StreamingAPIDemo.
4.  Replace the code in the page with the code from the StreamingApiDemo file that you downloaded.

    ```

    ```

5.  Click **Save** to save the page.

## Code Examples

```
<apex:page >
<apex:includeScript value="{!$Resource.json2_js}"/>
<script type="text/javascript" src="{!URLFOR($Resource.cometd_zip, 'dojo/dojo.js')}" data-dojo-config="async: 1"></script>
<apex:stylesheet value="{!$Resource.demo_css}"/>
<script>var token = '{!$Api.Session_ID}';</script>
        <div id="demo">
            <div id="datastream"></div>
        <script type="text/javascript" src="{!$Resource.demo_js}">
</script>

            <div id="input">
                <div id="join">
                    <table>
                        <tbody>
                            <tr>
                                <td>&nbsp;</td>
                                <td> Enter Topic Name </td>
                                <td>
                                    <input id="topic" type="text" />
                                </td>
                                <td>
                                    <button id="subscribeButton" 
                                        class="button">Subscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="joined">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <button id="leaveButton" 
                                        class="button">Unsubscribe</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</apex:page>
```
