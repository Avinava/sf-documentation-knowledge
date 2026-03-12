---
title: "Identifying Parent and Child Relationships"
domain: soql-sosl
topic: identifying-parent-and-child-relationships
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.582Z
estimatedTokens: 440
keywords: [Identifying, Parent, Child, Relationships, Identify, parent-child, viewing, Entity, Relationship, Diagrams, ERD, examining, enterprise, WSDL, organization]
---

# Identifying Parent and Child Relationships

> Identify parent-child relationships by viewing Entity Relationship Diagrams (ERD) or by
    examining the enterprise WSDL for your organization.

# Identifying Parent and Child Relationships

Identify parent-child relationships by viewing Entity Relationship Diagrams (ERD) or by examining the enterprise WSDL for your organization.

You can identify parent-child relationships by viewing a diagram in the [Salesforce Architect Diagram Gallery](https://architect.salesforce.com/diagrams). However, not all parent-child relationships are exposed in SOQL, so to be sure you can query on a parent-child relationship by issuing the appropriate describe call. The results contain parent-child relationship information.

You can also examine the enterprise WSDL for your organization:

-   To find the names of child relationships, look for entries that contain the plural form of a child object and end with type="tns:QueryResult". For example, from Account:

    ```

    ```

    In the example above, the child relationship name Contacts is in the entry for its parent Account.

-   For the parent of an object, look for a pair of entries, such as AccountId and Account, where the ID field represents the parent object referenced by the ID, and the other represents the contents of the record. The parent entry has a non-primitive type, type="ens:Account".

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

    #### Note

    Not all relationships are exposed in the API. The most reliable method for identifying relationships is to execute a describeSObjects() call. You can use the [AJAX Toolkit](https://developer.salesforce.com/docs/atlas.en-us.260.0.ajax.meta/ajax/ "HTML (New Window)") to quickly execute test calls.

-   For custom objects, look for a pair of entries with the relationship suffix \_\_r:

    ```

    ```

    ```

    ```

## Code Examples

```
<complexType name="Account">
                <complexContent>
                  <extension base="ens:sObject">
                    <sequence>
                      ...
                      <element name="Contacts" nillable="true" minOccurs="0"
                                     type="tns:QueryResult"/>
                      ...
                    </sequence>
                  </extension>
                </complexContent>
              </complexType>
```

```
<complexType name="Opportunity">
                <complexContent>
                  <extension base="ens:sObject">
                    <sequence>
                      ...
                      <element name="Account" nillable="true" minOccurs="0"   
                              type="ens:Account"/>
                      <element name="AccountId" nillable="true" minOccurs="0" 
                              type="tns:ID"/>
                      ...
                    </sequence>
                  </extension>
                 </complexContent>
               </complexType>
```

```
<complexType name="Mother__c">
           <complexContent>
            <extension base="ens:sObject">
             <sequence>
               ...
               <element name="Daughters__r" nillable="true" minOccurs="0" 
                     type="tns:QueryResult"/>
               <element name="FirstName__c" nillable="true" minOccurs="0" 
                     type="xsd:string"/>
               <element name="LastName__c" nillable="true" minOccurs="0" 
                     type="xsd:string"/>
               ...
              </sequence>
             </extension>
            </complexContent>
            </complexType>
```

```
<complexType name="Daughter__c">
           <complexContent>
            <extension base="ens:sObject">
             <sequence>
               ...
               <element name="Mother_of_Child__c" nillable="true" minOccurs="0" 
                     type="tns:ID"/>
               <element name="Mother_of_Child__r" nillable="true" minOccurs="0" 
                     type="xsd:string"/>
               <element name="LastName__c" nillable="true" minOccurs="0" 
                     type="ens:Mother__c"/>
               ...
              </sequence>
             </extension>
            </complexContent>
           </complexType>
```
