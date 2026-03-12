---
title: "RedirectWhitelistUrl"
domain: object-reference
topic: redirectwhitelisturl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:16.101Z
estimatedTokens: 1637
keywords: [RedirectWhitelistUrl, trusted, URL, external, user, redirections, different, Salesforce, org, including, publicly, served, pages, content, allowed]
---

# RedirectWhitelistUrl

> Represents a trusted URL for external user redirections.
    Redirections to a different Salesforce org, including its publicly served pages and content, are
    allowed from your Salesforce org only when the URL is a RedirectWhitelistUrl. For non-Salesforce
    URLs, a session setting controls whether redirections from pages and components built in
    Salesforce Classic are restricted to RedirectWhitelistUrl objects. Except for cross-org
    redirections, you can’t restrict redirections that originate from pages and components built
    with Lightning Experience. This object is available in API version 48.0 and later.

# RedirectWhitelistUrl

Represents a trusted URL for external user redirections. Redirections to a different Salesforce org, including its publicly served pages and content, are allowed from your Salesforce org only when the URL is a RedirectWhitelistUrl. For non-Salesforce URLs, a session setting controls whether redirections from pages and components built in Salesforce Classic are restricted to RedirectWhitelistUrl objects. Except for cross-org redirections, you can’t restrict redirections that originate from pages and components built with Lightning Experience. This object is available in API version 48.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Only authenticated internal and external users with the View Setup and Customize Application permissions can access or edit this object.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the custom help section in the API. This name can contain only underscores and alphanumeric characters and must be unique in your organization. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. The label corresponds to the section title in the user interface. Limit: 80 characters.When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionLanguage of the label. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label of the trusted URL. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| Url | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe trusted URL.These formats are accepted: example.com, *.example.com, and https://example.com.The host section of the URL can include an asterisk (*) as a wildcard. Otherwise, the URL cannot be malformed. Examples of malformed URLs that fail a syntax check are malformed^url.example.com, and https://{subdomain}.example.com.To add a URL to a RedirectWhitelistUrl based on parameters, build the URL before you update the Url field. |

## Usage

Only redirections are restricted to the URLs in this object. A direct anchor link to an external URL is always allowed, even if that URL isn’t in the allowlist. An example of a direct anchor link is <a href="targetUrl">linkText</a>.

Redirections include parameters that redirect the user and anchor links that include a redirection. For example, this anchor link includes a redirection: <a href="/?startURL=targetUrl">linkText</a>. And this form action redirects the user through the saveURL parameter: <form action="/xyz?saveURL=targetURL">.

If the targetUrl belongs to another Salesforce org, the redirection is permitted only when the target URL is a RedirectWhitelistUrl.

If the targetUrl isn’t a Salesforce org URL, the redirection is checked against the RedirectWhitelistUrl object only when both of these conditions are met.

-   The redirection originates from a Salesforce Classic page or component.
-   Either the redirectBlockModeEnabled or redirectionWarning SessionSettings field in the [SecuritySettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_securitysettings.htm) Metadata API is true.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Salesforce verifies the initial redirection outside of Salesforce against the RedirectWhitelistUrl object. However, Salesforce can’t verify subsequent redirections. For example, if a link on a Visualforce page takes the user to https://www.example.com, Salesforce verifies that you allowed redirections to https://www.example.com. If that URL then redirects the user to https://spam.example.com, Salesforce can’t check that redirection, because it occurs outside of Salesforce.

For non-Salesforce URLs, you can choose whether to alert users about untrusted external redirections or to block those redirections entirely via the redirectBlockModeEnabled and redirectionWarning fields on the SecuritySettings metadata API type. These restrictions apply only to redirections from pages and components built in Salesforce Classic.

There’s one last special case to cover. For Salesforce org URLs, Salesforce always allows redirections to URLs within the same org, including redirections from previous My Domain URLs. When the enableCrossOrgRedirect field on the SecuritySettings metadata API type is false, Salesforce checks user redirections to other Salesforce orgs via a direct link, a post-action URL, or a post-login URL. If the URL isn’t a RedirectWhitelistURL, the user isn’t redirected. An example of a direct link is <a href="https://www.example.com”>example.com</a>. Post-action URLs and post-login URLs use a protected URL redirect parameter, such as retURL, startURL, saveURL, cancelURL, and targetURL.
