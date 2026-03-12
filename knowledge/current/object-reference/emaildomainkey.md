---
title: "EmailDomainKey"
domain: object-reference
topic: emaildomainkey
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.342Z
estimatedTokens: 1709
keywords: [EmailDomainKey, domain, key, organization’s, authenticate, outbound, email, Salesforce, behalf, API, version, 28.0, later, Calls, Special]
---

# EmailDomainKey

> Represents a domain key for an organization’s domain, used to
      authenticate outbound email that Salesforce sends on the organization’s behalf. This
    object is available in API version 28.0 and later.

# EmailDomainKey

Represents a domain key for an organization’s domain, used to authenticate outbound email that Salesforce sends on the organization’s behalf. This object is available in API version 28.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only authenticated internal and external users can access this object.

We’ve upgraded and replaced the original DKIM (DomainKeys Identified Mail) key feature, so that you can create a DKIM key with increased email security. For more information, see [Setting Up More Secure DKIM Keys](https://help.salesforce.com/articleView?id=emailadmin_setup_dkim_key.htm&type=0&language=en_US).

## Fields

| Field Name | Details |
| --- | --- |
| AlternatePublicKey | TypetextareaPropertiesNillableDescriptionRead-only. Alternate public keys are used by Salesforce to auto-rotate domain keys. This field is available in API version 44.0 and later after activating the Critical Update. |
| AlternateSelector | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe text used to distinguish the DKIM key from any other DKIM keys your organization uses for the specified domain. This field is available in API version 44.0 and later after activating the Critical Update. |
| AlternateTxtRecordName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe alternate TXT record name is used to create the CNAME record. Refer to the Usage section for more information. This field is available in API version 44.0 and later after activating the Critical Update. |
| Domain | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe organization’s domain name that the DKIM key is generated for. |
| DomainMatch | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe specificity of match required on the sending domain name before signing with this DKIM key. Valid values are:DomainOnly—Sign if sending domain matches at the domain level only (example.com but not mail.example.com)SubdomainsOnly—Sign if sending domain matches at the subdomain level only (mail.example.com but not example.com)DomainAndSubdomains—Sign if sending domain matches at the domain and subdomain levels (example.com and mail.example.com) |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this DKIM key is active (true) or not (false). |
| KeySize | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, SortDescriptionIndicates the RSA key size, in bits. The possible values are:10242048This field is available in API version 45.0 and later. |
| PrivateKey | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionOnce you activate the Critical Update, this field is no longer visible.The private portion of the DKIM key pair used to encrypt mail headers from your domain. Salesforce generates an encrypted PrivateKey if you don’t specify a value when creating the DKIM key. If you do specify a value, it must be an existing valid PrivateKey from another EmailDomainKey object.This field doesn’t contain the actual private key, but a value that represents the key in our system. Therefore:The actual private key can’t be leaked.You can’t use the value to do your own email signing. |
| PublicKey | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionPart of the domain key pair that mail recipients retrieve to decrypt the DKIM header and verify your domain. Add the PublicKey value to your domain’s DNS records before you start signing with this domain key. |
| Selector | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionText used to distinguish the DKIM key from any other DKIM keys your organization uses for the specified domain. |
| TxtRecordName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRead-only. The TXT record name is used to create the CNAME record. Refer to the Usage section for more information. This field is available in API version 44.0 and later after activating the Critical Update. |
| TxtRecordsPublishState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe possible values are:PublishedPublishing in progressPublishing failedThis field is available in API version 44.0 and later after activating the Critical Update. |

## Usage

**Create DKIM Keys with Increased Security**

1.  If your Salesforce org was created before Winter ’19, enable the Critical Update. From Setup, enter Critical Updates in the Quick Find box, and then select **Critical Updates**. For Enable Redesigned DomainKeys Identified Mail (DKIM) Key Feature with Increased Email Security, click **Activate**.
2.  Insert Domain, DomainMatch, Selector, and AlternateSelector. Salesforce publishes your TXT record to DNS.
3.  Retrieve the TxtRecordName and AlternateTxtRecordName and use them to create and publish the CNAME and Alternate CNAME record to your domain’s DNS.
    1.  Create CNAME record using: <selector>.\_domainkey.<domain> IN CNAME txtRecordName.
    2.  Create Alternate CNAME record using: <alternateSelector>.\_domainkey.<domain> IN CNAME alternateTxtRecordName.
4.  Set the IsActive field to true.

**Create DKIM Keys (pre-Winter ‘19 Version)**

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The critical update activates for everyone on October 15, 2019. After that date, this approach to creating DKIM keys will no longer be available.

When you create a DKIM key, Salesforce generates a public and private key pair. Publish the public key in the DNS.

For each domain key you create, we recommend this sequence:

1.  Insert the Domain, DomainMatch, and Selector.
2.  Update your domain’s DNS records.

    1.  Locate the DNS record at selector.\_domainkey.domain. For example, mail.\_domainkey.mail.example.com.
    2.  Add the PublicKey value, like this: V=DKIM1; p=public\_key.

    DKIM Signing Outbound Email
    1.  In addition, you can optionally put the record in testing mode, which instructs recipients to not make decisions based on the email signature. Add parameter t=y to the DNS entry: V=DKIM1; t=y; p=public\_key.
3.  Update the key via the API or UI to be active.

#### See Also

-   [*Salesforce Help*: Considerations for Creating DKIM Keys](https://help.salesforce.com/articleView?id=emailadmin_considerations_dkim.htm&type=0&language=en_US "
    Salesforce Help: Considerations for Creating DKIM Keys - HTML (New Window)")

-   [*Salesforce Help*: Setting Up More Secure DKIM Keys](https://help.salesforce.com/articleView?id=emailadmin_setup_dkim_key.htm&type=0&language=en_US "
    Salesforce Help: Setting Up More Secure DKIM Keys - HTML (New Window)")
