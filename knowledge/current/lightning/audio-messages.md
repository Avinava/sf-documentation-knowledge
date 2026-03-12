---
title: "Audio Messages"
domain: lightning
topic: audio-messages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.892Z
estimatedTokens: 368
keywords: [Audio, Messages, convey, notifications, toast, lightning, notificationsLibrary, rendered, role="alert, screen, readers, announce, text, inside, any]
---

# Audio Messages

> To convey audio notifications, create a toast using lightning:notificationsLibrary. The toast is rendered with role="alert", which enables screen readers to announce
            the text inside the toast without any additional action by the user.

# Audio Messages

To convey audio notifications, create a toast using lightning:notificationsLibrary. The toast is rendered with role="alert", which enables screen readers to announce the text inside the toast without any additional action by the user.

If you’re creating your own feedback mechanism and work with multiple toasts, consider using role="status" to persist the toast in the queue. This role reduces the risk of a user missing a toast message. Contrastingly, role="alert" overrides previous toasts in the screen reader’s speech queue. For more information, see the [toast](https://lightningdesignsystem.com/components/toast/) accessibility guideline.

```

```

```

```

Alternatively, create a prompt notice to alert a user of system-related issues or updates. The notice is rendered as a modal dialog with role="dialog", and must be dismissed before you can return to the rest of the page.

```

```

```

```

lightning:notificationsLibrary implements the [prompt](https://www.lightningdesignsystem.com/components/prompt) and [toast](https://lightningdesignsystem.com/components/toast/) blueprint in the Salesforce Lightning Design System and follows its accessibility guidelines.

#### See Also

-   [*Component Library*: lightning:notificationsLibrary documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning:notificationsLibrary "Component Library: lightning:notificationsLibrary
    documentation - HTML (New Window)")

## Code Examples

```
<lightning:notificationsLibrary aura:id="notifLib"/>
<lightning:button name="toast" label="Show Toast" onclick="{!c.handleShowToast}"/>
```

```
({
    handleShowToast : function(component, event, helper) {
        component.find('notifLib').showToast({
            "title": "Success!",
            "message": "The record has been updated successfully."
        });
    }
})
```

```
<lightning:notificationsLibrary aura:id="notifLib"/>
<lightning:button name="notice" label="Show Notice" onclick="{!c.handleShowNotice}"/>
```

```
({
    handleShowNotice : function(component, event, helper) {
        component.find('notifLib').showNotice({
            "variant": "error",
            "header": "Something has gone wrong!",
            "message": "Unfortunately, there was a problem updating the record.",
            closeCallback: function() {
                alert('You closed the alert!');
            }
        });
    }
})
```
