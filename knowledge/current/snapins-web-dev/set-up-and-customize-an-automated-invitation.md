---
title: "Set Up and Customize an Automated Invitation"
domain: snapins-web-dev
topic: set-up-and-customize-an-automated-invitation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.346Z
estimatedTokens: 1056
keywords: [Customize, Automated, Invitation, Connect, chat, Embedded, Service, deployment, proactively, invite, customers, start, agent, slide, fade]
---

# Set Up and Customize an Automated Invitation

> Connect an automated chat invitation with your Embedded Service deployment to proactively
        invite your customers to start a chat with an agent. Your invitation can slide, fade, or
        appear anywhere on the page based on the criteria you selected in setup. You can also use
        your own HTML and CSS to make it match your company’s branding. Upgrade your code snippet to
        version 4.0 to use invitations.

# Set Up and Customize an Automated Invitation

Connect an automated chat invitation with your Embedded Service deployment to proactively invite your customers to start a chat with an agent. Your invitation can slide, fade, or appear anywhere on the page based on the criteria you selected in setup. You can also use your own HTML and CSS to make it match your company’s branding. Upgrade your code snippet to version 4.0 to use invitations.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

Before you write any code, set up your invitation and Embedded Service deployment in Setup. From Salesforce Classic Setup, enter Chat Buttons in the Quick Find box, then select **Chat Buttons & Invitations**. Connect the invitation to the Chat deployment that you plan to use for your Embedded Service deployment. Then create or edit a Embedded Service deployment and select the Chat deployment and invitation for your Chat Settings.

Keep in mind that there are some differences to how invitations work in Embedded Chat versus a regular Chat deployment:

-   The position and animation don’t apply to customers using a mobile browser. They see the invitation above the chat button with the “fade” animation type.
-   Custom animations aren’t supported.
-   The same fields that aren’t supported for Embedded Chat buttons aren’t supported for Embedded Chat invitations: Pre-Chat Form Page, Pre-Chat Form URL, Custom Chat Page, Invitation Image, and Site for Resources.
-   You can’t use invitations with the Embedded Chat component in your Experience site.

When you have an invitation in your deployment and a 4.0 code snippet, there’s a section of the code snippet that begins with <!-- Invitations - Static HTML/CSS/JS -->. This is where you define some behavior for the invitation and add your own HTML and CSS (if you want to).

If you use your own HTML and CSS, remember the following:

-   Wrap the HTML properly: <div id=”snapins\_invite></div\>. The <div> must also have a CSS property of visibility: hidden to ensure that the animations and rules work as you specified in Setup.
-   We generate the default HTML and CSS for you when you add an invitation to your Embedded Chat deployment and regenerate the snippet. The default invitation uses the font, primary color, and secondary color that you selected in Embedded Service setup.
-   When you set an avatar image (set by defining embedded\_svc.settings.avatarImgURL in your code snippet), the image appears in the top left of the invitation with the default HTML and CSS.

When you use invitations, there are two JavaScript functions to override in the Embedded Service code snippet:

-   embedded\_svc.inviteAPI.inviteButton.acceptInvite()
-   embedded\_svc.inviteAPI.inviteButton.rejectInvite()

If you’re using custom variable rules, also use this function:

-   embedded\_svc.inviteAPI.inviteButton.setCustomVariable()

## Automated Invitation Code Example

The following code example shows the default HTML, CSS, and JavaScript functions in the code snippet. This code is included in your version 4.0 and later code snippet when you add an invitation to an Embedded Chat deployment and regenerate the code snippet.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

The provided code sample uses object field names, org IDs, button IDs, and stylesheets that possibly don’t work in your Embedded Service implementation. Make sure that you replace the information with your own when you use this sample.

```

```

## Code Examples

```
<!-- Start of Invitations -->
<div class="embeddedServiceInvitation" id="snapins_invite" aria-live="assertive" role="dialog" aria-atomic="true">
    <div class="embeddedServiceInvitationHeader" aria-labelledby="snapins_titletext" aria-describedby="snapins_bodytext">
        <img id="embeddedServiceAvatar">
        <span class="embeddedServiceTitleText" id="snapins_titletext">Need help?</span>
        <button type="button" id="closeInvite" class="embeddedServiceCloseIcon" aria-label="Exit invitation">&times;</button>
    </div>
    <div class="embeddedServiceInvitationBody">
        <p id="snapins_bodytext">How can we help you?</p>
    </div>
    <div class="embeddedServiceInvitationFooter" aria-describedby="snapins_bodytext">
        <button type="button" class="embeddedServiceActionButton" id="rejectInvite">Close</button>
        <button type="button" class="embeddedServiceActionButton" id="acceptInvite">Start Chat</button>
    </div>
</div>

<style type='text/css'>
    #snapins_invite { background-color: #FFFFFF; font-family: "Salesforce Sans", sans-serif; overflow: visible; border-radius: 8px; visibility: hidden; }
    .embeddedServiceInvitation { background-color: transparent; max-width: 290px; max-height: 210px; -webkit-box-shadow: 0 7px 12px rgba(0,0,0,0.28); -moz-box-shadow: 0 7px 12px rgba(0,0,0,0.28); box-shadow: 0 7px 12px rgba(0,0,0,0.28); }
    @media only screen and (min-width: 48em) { /*mobile*/ .embeddedServiceInvitation { max-width: 332px; max-height: 210px; } }
    .embeddedServiceInvitation > .embeddedServiceInvitationHeader { width: inherit; height: 32px; line-height: 32px; padding: 10px; color: #FFFFFF; background-color: #222222; overflow: initial; display: flex; justify-content: space-between; align-items: stretch; border-top-left-radius: 8px; border-top-right-radius: 8px; }
    .embeddedServiceInvitationHeader #embeddedServiceAvatar { width: 32px; height: 32px; border-radius: 50%; }
    .embeddedServiceInvitationHeader .embeddedServiceTitleText { font-size: 18px; color: #FFFFFF; overflow: hidden; word-wrap: normal; white-space: nowrap; text-overflow: ellipsis; align-self: stretch; flex-grow: 1; max-width: 100%; margin: 0 12px; }
    .embeddedServiceInvitationHeader .embeddedServiceCloseIcon { border: none; border-radius: 3px; cursor: pointer; position: relative; bottom: 3%; background-color: transparent; width: 32px; height: 32px; font-size: 23px; color: #FFFFFF; }
    .embeddedServiceInvitationHeader .embeddedServiceCloseIcon:focus { outline: none; }
    .embeddedServiceInvitationHeader .embeddedServiceCloseIcon:focus::before { content: " "; position: absolute; top: 11%; left: 7%; width: 85%; height: 85%; background-color: rgba(255, 255, 255, 0.2); border-radius: 4px; pointer-events: none; }
    .embeddedServiceInvitationHeader .embeddedServiceCloseIcon:active, .embeddedServiceCloseIcon:hover { background-color: #FFFFFF; color: rgba(0,0,0,0.7); opacity: 0.7; }
    .embeddedServiceInvitation > .embeddedServiceInvitationBody { background-color: #FFFFFF; max-height: 110px; min-width: 260px; margin: 0 8px; font-size: 14px; line-height: 20px; overflow: auto; }
    .embeddedServiceInvitationBody p { color: #333333; padding: 8px; margin: 12px 0; }
    .embeddedServiceInvitation > .embeddedServiceInvitationFooter { width: inherit; color: #FFFFFF; text-align: right; background-color: #FFFFFF; padding: 10px; max-height: 50px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; }
    .embeddedServiceInvitationFooter > .embeddedServiceActionButton { font-size: 14px; max-height: 40px; border: none; border-radius: 4px; padding: 10px; margin: 4px; text-align: center; text-decoration: none; display: inline-block; cursor: pointer; }
    .embeddedServiceInvitationFooter > #acceptInvite { background-color: #005290; color: #FFFFFF; }
    .embeddedServiceInvitationFooter > #rejectInvite { background-color: #FFFFFF; color: #005290; }
</style>

<script type='text/javascript'>
    (function() {
        document.getElementById('closeInvite').onclick = function() { embedded_svc.inviteAPI.inviteButton.rejectInvite(); };
        document.getElementById('rejectInvite').onclick = function() { embedded_svc.inviteAPI.inviteButton.rejectInvite(); }; // use this API call to reject invitations
        document.getElementById('acceptInvite').onclick = function() { embedded_svc.inviteAPI.inviteButton.acceptInvite(); }; // use this API call to start chat from invitations
        document.addEventListener('keyup', function(event) { if (event.keyCode == 27) { embedded_svc.inviteAPI.inviteButton.rejectInvite(); }})
    })();
</script>
<!-- End of Invitations -->
```
