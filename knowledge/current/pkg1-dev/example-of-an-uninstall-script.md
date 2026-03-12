---
title: "Example of an Uninstall Script"
domain: pkg1-dev
topic: example-of-an-uninstall-script
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.667Z
estimatedTokens: 146
keywords: [Uninstall, Script, sample, performs, actions, package]
---

# Example of an Uninstall Script

> This sample uninstall script performs the following actions on package
    uninstall.

# Example of an Uninstall Script

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
