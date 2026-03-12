---
title: "UninstallHandler Interface"
domain: apex-reference
topic: uninstallhandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:31.955Z
estimatedTokens: 835
namespace: System
keywords: [UninstallHandler, custom, code, run, managed, package, uninstalled, Usage, onUninstall, context, Implementation, Uninstall, Script]
---

# UninstallHandler Interface

> Enables custom code to run after a managed package is uninstalled.

**Namespace:** `System`

# UninstallHandler Interface

Enables custom code to run after a managed package is uninstalled.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

App developers can implement this interface to specify Apex code that runs automatically after a subscriber uninstalls a managed package. This makes it possible to perform cleanup and notification tasks based on details of the subscriber’s organization.

The uninstall script is subject to default governor limits. It runs as a special system user that represents your package, so all operations performed by the script will appear to be done by your package. You can access this user by using UserInfo. You will only see this user at runtime, not while running tests.

If the script fails, the uninstall continues but none of the changes performed by the script are committed. Any errors in the script are emailed to the user specified in the **Notify on Apex Error** field of the package. If no user is specified, the uninstall details will be unavailable.

The uninstall script has the following restrictions. You can’t use it to initiate batch, scheduled, and future jobs, to access Session IDs, or to perform callouts.

The UninstallHandler interface has a single method called onUninstall, which specifies the actions to be performed on uninstall.

```

```

The onUninstall method takes a context object as its argument, which provides the following information.

-   The org ID of the organization in which the uninstall takes place.
-   The user ID of the user who initiated the uninstall.

The context argument is an object whose type is the UninstallContext interface. This interface is automatically implemented by the system. The following definition of the UninstallContext interface shows the methods you can call on the context argument.

```

```

-   **[UninstallHandler Methods](atlas.en-us.apexref.meta/apexref/apex_uninstall_handler.htm#apex_System_UninstallHandler_methods)**

-   **[UninstallHandler Example Implementation](atlas.en-us.apexref.meta/apexref/apex_uninstall_handler.htm#apex_uninstall_handler_example)**


## UninstallHandler Methods

The following are methods for UninstallHandler.

-   **[onUninstall(context)](atlas.en-us.apexref.meta/apexref/apex_uninstall_handler.htm#apex_System_UninstallHandler_onUninstall)**
    Specifies the actions to be performed on uninstall.

### onUninstall(context)

Specifies the actions to be performed on uninstall.

#### Signature

public Void onUninstall(UninstallContext context)

#### Parameters

context

Type: UninstallContext

#### Return Value

Type: Void

## UninstallHandler Example Implementation

### Example of an Uninstall Script

This sample uninstall script performs the following actions on package uninstall.

-   Inserts an entry in the feed describing which user did the uninstall and in which organization
-   Creates and sends an email message confirming the uninstall to that user

```

```

You can test an uninstall script using the testUninstall method of the Test class. This method takes as its argument a class that implements the UninstallHandler interface.

This sample shows how to test an uninstall script implemented in the UninstallClass Apex class.

```

```

## Code Examples

```apex
global interface UninstallHandler {
  void onUninstall(UninstallContext context)};
```

```apex
global interface UninstallContext { 
  ID organizationId();
  ID uninstallerId();
}
```

```apex
global class UninstallClass implements UninstallHandler {
  global void onUninstall(UninstallContext ctx) {
    FeedItem feedPost = new FeedItem();
    feedPost.parentId = ctx.uninstallerID();
    feedPost.body = 'Thank you for using our application!';
    insert feedPost;

    User u = [Select Id, Email from User where Id =:ctx.uninstallerID()];   
    String toAddress= u.Email;
    String[] toAddresses = new String[] {toAddress};
    Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
    mail.setToAddresses(toAddresses);
    mail.setReplyTo('support@package.dev');
    mail.setSenderDisplayName('My Package Support');
    mail.setSubject('Package uninstall successful');
    mail.setPlainTextBody('Thanks for uninstalling the package.');
    Messaging.sendEmail(new Messaging.Email[] { mail });
  }
}
```

```apex
@isTest
static void testUninstallScript() {
  Id UninstallerId = UserInfo.getUserId();
  List<FeedItem> feedPostsBefore = 
    [SELECT Id FROM FeedItem WHERE parentId=:UninstallerId AND CreatedDate=TODAY];
  Test.testUninstall(new UninstallClass());
  List<FeedItem> feedPostsAfter = 
    [SELECT Id FROM FeedItem WHERE parentId=:UninstallerId AND CreatedDate=TODAY];
  System.assertEquals(feedPostsBefore.size() + 1, feedPostsAfter.size(), 
    'Post to uninstaller failed.');
}
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- UninstallHandler Methods (atlas.en-us.apexref.meta/apexref/apex_uninstall_handler.htm)
- UninstallHandler Example Implementation (atlas.en-us.apexref.meta/apexref/apex_uninstall_handler.htm)
- onUninstall(context) (atlas.en-us.apexref.meta/apexref/apex_uninstall_handler.htm)
