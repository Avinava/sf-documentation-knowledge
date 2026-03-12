---
title: "Using Custom Controllers within Visualforce Email Templates"
domain: pages
topic: using-custom-controllers-within-visualforce-email-templates
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.584Z
estimatedTokens: 719
keywords: [Custom, Controllers, Visualforce, Email, Templates, leverage, render, highly, customized, content, include, component, template, uses, controller]
---

# Using Custom Controllers within Visualforce Email Templates

> Visualforce email templates can leverage custom controllers to render highly customized
			content. To do so, include a custom component in a Visualforce email template that uses
			that custom controller.

# Using Custom Controllers within Visualforce Email Templates

Visualforce email templates can leverage custom controllers to render highly customized content. To do so, include a custom component in a Visualforce email template that uses that custom controller.

For example, suppose you want to display a list of all accounts beginning with the word “Smith” in an email template. To do this, first write a custom controller that uses a SOSL call to return a list of accounts that begin with “Smith”:

```

```

Next, create a custom component named smithAccounts that uses this controller:

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pages)

#### Tip

Remember that all custom components used in Visualforce email templates must have an access level of global.

Finally, create a Visualforce email template that includes the smithAccounts component:

```

```

Notice that although the relatedToType attribute is required by the emailTemplate component, it does not have any effect on this example. It has the value of "Opportunity" only to show that it can take an object value that is different than the object used in the custom component.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Sharing settings are enforced if your email templates use a standard controller. If your organization-wide default for the user object is set to Private and you need to access user information such as name and email address in your Visualforce email template, you can use a custom component or custom controller with the without sharing keywords.

For information about sharing for the user object, see [User Sharing and Visibility](https://help.salesforce.com/s/articleView?id=platform.security_sharing_users.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

Debug logs don’t contain information, such as System.debug() messages, from component controllers used in Visualforce email templates. This limitation occurs because of the [order of execution on the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm). Debug logs are written when Data Manipulation Language (DML) actions are committed to the database, but emails are sent after DML actions are committed to the database. In other words, writing debug logs is on-commit logic, but sending emails is post-commit logic. Therefore, if invoked from a Visualforce email template, custom components and their controllers don’t run until after the debug log is already generated, so they don’t appear in the debug log. As a workaround, use a [try-catch block](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_exception_statements.htm) to catch errors in the custom component rendering process.

## Code Examples

```apex
public class findSmithAccounts {
	private final List<Account> accounts;

	public findSmithAccounts() {
		accounts = [select Name from Account where Name LIKE 'Smith_%'];
	}

	public List<Account> getSmithAccounts() {
		return accounts;
	}
}
```

```apex
<apex:component controller="findSmithAccounts" access="global">
	<apex:dataTable value="{!SmithAccounts}" var="s_account">
		<apex:column>
			<apex:facet name="header">Account Name</apex:facet>
			{!s_account.Name}
		</apex:column>
	</apex:dataTable>
</apex:component>
```

```
<messaging:emailTemplate subject="Embedding Apex Code" recipientType="Contact" relatedToType="Opportunity">
	<messaging:htmlEmailBody>
		<p>As you requested, here's a list of all our Smith accounts:</p>
		<c:smithAccounts/>
		<p>Hope this helps with the {!relatedToType}.</p>
	</messaging:htmlEmailBody>
</messaging:emailTemplate>
```
