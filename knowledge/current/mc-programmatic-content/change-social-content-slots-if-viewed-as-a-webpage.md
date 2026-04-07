---
title: "Change Social Content Slots if Viewed As A Webpage"
domain: mc-programmatic-content
topic: change-social-content-slots-if-viewed-as-a-webpage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:27.383Z
estimatedTokens: 1691
keywords: [Change, Social, Content, Slots, Viewed, Webpage, examples, require, familiarity, HTML, Paste, Emails, AMPscript, Prerequisites, Sample]
---

# Change Social Content Slots if Viewed As A Webpage

> These examples require familiarity with HTML, Paste HTML Emails, and AMPscript.

# Change Social Content Slots if Viewed As A Webpage

## Prerequisites

These examples require familiarity with HTML, Paste HTML Emails, and AMPscript.

## Change Social Content Slots if Viewed as a Webpage Example

Use AMPscript to determine whether the email displayed as a webpage. If a webpage is used to display the content, the AMPscript shown below displays the text contained in the code block.

### Sample AMPscript

```
%%[ if _MessageContext == "VAWP" then ]%%
You're reading this text because you're viewing this email as a webpage!
%%[ endif ]%%
```

### Sample Paste HTML

Use this code to share a social content slot.

```
<!-- RegionStart[ socialslot:"FacebookCustomIcon", title:"Facebook with Custom Icon", description:"Facebook with Custom Icon"] -->
        <p>Custom Facebook Icon</p>
        <p><table cellspacing="0" cellpadding="0" align="left">
            <tbody>
                <tr>
                    <td align="right">Hi!&nbsp;</td>
                </tr>
            </tbody>
        </table>
<strong>This content represents the second shared social content slot.
%%[ if _MessageContext == "VAWP" then ]%%
You're reading this text because you're viewing this email as a webpage!
%%[ endif ]%%
</strong></p>
        <p><a href="%%=GetSocialPublishURLByName('Facebook','US','FacebookCustomIcon')=%%" alias="Social Forward to Facebook - FacebookCustomIcon" title="Publish to Facebook"><img src="http://image.preview.exacttarget.com/lib/ff66157875/m/1/facebook-alt.png" border="0" alt="Facebook" title="Facebook"></a></p>
<!-- RegionEnd[ socialslot:"FacebookCustomIcon"] -->
```

## Change Social Content Slots if Viewed as a Webpage or Shared Example

Use this code to share the longer webpage version of the content instead of the shorter email version.

### Sample AMPscript

```
%%[ if _MessageContext == "VAWP" or _MessageContext == "Social" then ]%%
You're reading this text because you're viewing this email as a webpage!
%%[ endif ]%%
```

If the message is viewed as a webpage or shared, the AMPscript displays the longer text included in the code block. You can separate the \_MessageContext checks into two different If statements if you want to change how each context displays your content.

### Sample Paste HTML Email

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
 <head>
 <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
 <title>Thank you for your interest in ExactTarget Email.</title>
 <style type="text/css">
 html body { margin: 0; padding: 0; font: 0.76em normal Arial, Verdana, Helvetica, sans-serif; color: #554; }
 #cntr { width: 600px; }
 #cntr .cnt { margin: 1.0em }
 #cntr .cnt span { font-size: 1.5em; color: #000; }
 #cntr .cnt strong { font-size: 1.0em }
 </style>
 </head>
 <body bottommargin="0" leftmargin="0" rightmargin="0" marginheight="0" marginwidth="0" topmargin="0">
 <table width="600" cellpadding="0" cellspacing="0" border="0" align="center">
 <tr>
 <td valign="top" align="left"><font face="verdana" size="1" color="#444444"><p>To view this email as a web page, go <a href="%%view_email_url%%" alias="View as a Web Page"> here.</a></p></font></td>
 </tr>
 </table>
 <div align="center" style="background-color: #333;">
 <div id="cntr" align="left" style="background-color: #FFF;">
 <div class="nav" style="height: 50px; width: 600px; background: #222 url('http://image.exct.net/8c953a0c-d.jpg');">
 <table width="100%" cellpadding="0" cellspacing="4" border="0">
 <tr>
 <td valign="left"><strong>This email uses the new Social Forward feature!</strong></td>
 </tr>
 </table></div>
 <div class="cnt" style="border-bottom: 1px solid #CCC; margin: 1.0em">
 <!-- RegionStart[ socialslot:"FacebookStandardIcon", title:"Facebook Standard Icon", description:"Share to Facebook with Standard Icon"] -->
 <p>Standard Facebook Icon</p>
 <p><table cellspacing="0" cellpadding="0" align="left"><tbody><tr><td align="right">Hi!&nbsp;</td></tr></tbody></table><strong>This content represents the first shared social content slot.</strong></p>
 <p><a href="%%=GetSocialPublishURLByName('Facebook','US','FacebookStandardIcon')=%%" alias="Social Forward to Facebook - standard icon" title="Publish to Facebook"><img src="http://image.preview.exacttarget.com/lib/ffcf14/m/1/social_default_facebook_icon.jpg" border="0" alt="Facebook" title="Facebook"></a></p>
 <!-- RegionEnd[ socialslot:"FacebookStandardIcon"] -->

 <!-- RegionStart[ socialslot:"FacebookCustomIcon", title:"Facebook with Custom Icon", description:"Facebook with Custom Icon"] -->
 <p>Custom Facebook Icon</p>
 <p><table cellspacing="0" cellpadding="0" align="left"><tbody><tr><td align="right">Hi!&nbsp;</td></tr></tbody></table><strong>This content represents the second shared social content slot.
%%[ if _MessageContext == "VAWP" then ]%%
You're reading this text because you're viewing this email as a webpage!
%%[ endif ]%%
</strong></p>
 <p><a href="%%=GetSocialPublishURLByName('Facebook','US','FacebookCustomIcon')=%%" alias="Social Forward to Facebook - FacebookCustomIcon" title="Publish to Facebook"><img src="http://image.preview.exacttarget.com/lib/ff66157875/m/1/facebook-alt.png" border="0" alt="Facebook" title="Facebook"></a></p>
 <!-- RegionEnd[ socialslot:"FacebookCustomIcon"] -->
 </div>
 </div>
 </div>
 <table cellpadding="2" cellspacing="0" width="600" border="0" align="center">
 <tr>
 <td valign="top" align="left" style="line-height: 16px;">
 <p><font face="verdana" size="1" color="#777777">This email was sent to: <b>%%emailaddr%%</b><br />
 <a href="%%subscription_center_url%%" alias="Manage Subscriptions">Manage Subscriptions</a> |
 <a href="%%profile_center_url%%" alias="Update Profile">Update Profile</a> |
 <a href="%%unsub_center_url%%" alias="Unsubscribe">One-Click Unsubscribe</a></p>
 <p>This email was sent by: <b>%%Member_Busname%%</b><br />%%Member_Addr%% %%Member_City%%, %%Member_State%% %%Member_PostalCode%% %%Member_Country%%</p>
 <p>We respect your right to privacy - <a href="http://email.exacttarget.com/ETWeb/company.aspx?id=80" alias="View Privacy Policy" style="color: #0000ff">view our policy</a></p>
 </font>
 </td>
 <td width="145" align="right" valign="center"><a href="http://www.exacttarget.com" title="This email is Powered By ExactTarget" alias="Powered By"><img src="http://email.exacttarget.com/images/Powered_By_1206.jpg" width="124" height="55" alt="This email is Powered By ExactTarget" border="0" /></a></td>
 </tr>
 </table>
 </body>
 <custom name="opencounter" type="tracking">
</html>
```

This email uses AMPscript to change the displayed content depending on whether the email is being displayed in an inbox or as a webpage. The content shared is always the content from the email view.

## Code Examples

```
%%[ if _MessageContext == "VAWP" then ]%%  
You're reading this text because you're viewing this email as a webpage!
%%[ endif ]%%
```
