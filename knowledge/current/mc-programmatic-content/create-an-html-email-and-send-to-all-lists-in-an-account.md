---
title: "Create an HTML Email and Send to All Lists in an Account"
domain: mc-programmatic-content
topic: create-an-html-email-and-send-to-all-lists-in-an-account
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:22.957Z
estimatedTokens: 438
keywords: [HTML, Email, Send, Account, sample, server-side, JavaScript, demonstrates, how, message, inside, Salesforce, Marketing, Cloud, include, code, landing, application]
---

> This sample server-side JavaScript demonstrates how to create an HTML email and send that message to all lists inside of an Salesforce Marketing Cloud account. You can include this code in a landing page or application.

# Create an HTML Email and Send to All Lists in an Account

This sample server-side JavaScript demonstrates how to create an HTML email and send that message to all lists inside of an Salesforce Marketing Cloud account. You can include this code in a landing page or application.

```
<script type="text/javascript" runat="server">

    // Include SSJS Core Library
    Platform.Load("core", "1");

    // retrieve all the lists in the account
    var retrievedLists = List.Retrieve();

    // set up and add an email
    var emailData = {
        "CustomerKey" : "Cool_Email_Key",
        "Name" : "Cool Email",
        "HTMLBody" : "<body bgcolor='#ffffff' text='#000000'><table cellspacing='0' cellpadding='0' border='1' bordercolor='#000000' bgcolor='#ffffff' width='600' align='center'><tr><td align='center'><font face='verdana' size='1' color='#444444'>To view this email as a web page, click <a href='%%view_email_url%%'>here.</a></font></span><br/><br/><center><h2>Way Cool Email</h2></center><br/><br/><table cellpadding='2' cellspacing='0' width='600' ID='tblRequired' Border=0><tr><td><font face='verdana' size='1' color='#444444'>This email was sent to: %%emailaddr%% <br><br><b>Email Sent By:</b> %%Member_Busname%%<br>%%Member_Addr%% %%Member_City%%, %%Member_State%%, %%Member_PostalCode%%, %%Member_Country%%<br><br></td></tr></table><a href='%%profile_center_url%%' alias='Update Profile'>Update Profile</a><custom name='opencounter' type='tracking'></td></tr></table>",
        "Subject" : "Check out my way cool email",
        "IsHTMLPaste" : "true"
    };

    // Create the email
    newEmail = Email.Add(emailData);
    // Send the email to all the lists
    status = Send.Add("Cool_Email_Key", retrievedLists);
</script>
```
