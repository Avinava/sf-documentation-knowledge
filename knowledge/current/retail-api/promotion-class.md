---
title: "Promotion Class"
domain: retail-api
topic: promotion-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.573Z
estimatedTokens: 4632
keywords: [Promotion, APEX, programmatic, access, TPM, SObject, it’s, SObjects, Implementation, _Promotion, List<TPM, _Promotion.Record>, getAttachmentLinks, API, Version]
---

# Promotion Class

> This APEX class provides programmatic access to the TPM Promotion SObject and it’s
  related SObjects.

# Promotion Class

This APEX class provides programmatic access to the TPM Promotion SObject and it’s related SObjects.

## Namespace

```

```

## Example Implementation

```

```

-   **[TPM\_Promotion Methods](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#tpm_promotion_method)**


## TPM\_Promotion Methods

The following are methods for TPM\_Promotion.

-   **[global List<TPM\_Promotion.Record> getAttachmentLinks](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#method_promotion.do.work)**
    Returns the List<TPM\_Promotion.Record> instances with the Promotion Attachment Links contents.
-   **[global TPM\_Promotion](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_1928493045)**
    This method creates an empty Promotion record.
-   **[global List<TPM\_Promotion.Record> getAttachments](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_881540763)**
    Returns the List<TPM\_Promotion.Record> instances with the Promotion Attachments contents.
-   **[global List<TPM\_Promotion.Record> getProductShares](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_595852373)**
    Returns a filtered List<TPM\_Promotion.Record> instances with the Promotion Product Share contents.
-   **[global List<TPM\_Promotion.Record> getAttachments](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_692218907)**
    Returns a filtered List<TPM\_Promotion.Record> instances with the Promotion Attachments contents.
-   **[global List<TPM\_Promotion.Record> getAttachmentLinks](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_268874394)**
    Returns a filtered List<TPM\_Promotion.Record> instances with the Promotion Attachment Links contents.
-   **[global List<TPM\_Promotion.Record> getTacticFunds](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_304991974)**
    Returns a filtered List<TPM\_Promotion.Record> instances with the Tactic Fund contents.
-   **[global List<TPM\_Promotion.Record> getTacticFunds](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_1264427164)**
    Returns the List<TPM\_Promotion.Record> instances with the Tactic Fund contents.
-   **[global List<TPM\_Promotion.TacticRecord> getTactics](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_516384378)**
    Returns the List<TPM\_Promotion.Record> instances with the Tactic contents.
-   **[global List<TPM\_Promotion.TacticRecord> getTactics](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_1540952839)**
    Returns a filtered List<TPM\_Promotion.Record> instances with the Tactic contents..
-   **[global List<TPM\_Promotion.Record> getTacticConditionCreationDefinitions](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_430899091)**
    Returns a filtered List<TPM\_Promotion.Record> instances with the Tactic Condition Creation Definitions contents.
-   **[global List<TPM\_Promotion.Record> getTacticConditionCreationDefinitions](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_1040212927)**
    Returns the List<TPM\_Promotion.Record> instances with the Tactic Condition Creation Definitions contents.
-   **[global List<TPM\_Promotion.Record> getProductShares](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_2147208403)**
    Returns the List<TPM\_Promotion.Record> instances with the Promotion Product Share contents.
-   **[global Set<Id> getEffectiveCategories](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_467820080)**
    Returns the read only list of effective categories of the promotion.
-   **[global Set<Id> getEffectiveBrands](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_492864693)**
    Returns the read only list of effective brands of the promotion.
-   **[global TPM\_ManualInputs getManualInputs](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_829903693)**
    Returns a TPM\_ManualInputs instance with the Manual Inputs Information.
-   **[global TPM\_ParticipatingCustomers getParticipatingCustomers](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_969741320)**
    Returns a TPM\_ParticipatingCustomers instance with the Participating Customers information.
-   **[global TPM\_ProductFilter getProductFilter](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_2102490435)**
    Returns the TPM\_ProductFilter instance with the Product Filter information
-   **[global TPM\_Promotion](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_1120915427)**
    If promotionId is null, throw an exception. This method loads the Promotion record referenced by the input Promotion Id along with its related SObjects.
-   **[global TPM\_Promotion.Record append](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_1994741226)**
    Appends a Custom SObject Record to the TPM\_Promotion instance. This record will be inserted/updated/deleted (depending on the TPM\_Promotion.Record instance state) during the same transaction the Promotion object is committed to the database.
-   **[global TPM\_Promotion.Record addTacticConditionCreationDefinition](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_2121033361)**
    Adds a Tactic Condition Creation Definition Record to the promotion. The returned wrapper can be used for further operations.
-   **[global TPM\_Promotion.Record addAttachment](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_1673800490)**
    Adds a Promotion Attachment Record to the promotion. The returned wrapper can be used for further operations.
-   **[global TPM\_Promotion.Record addAttachmentLink](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_656655500)**
    Adds a Promotion Attachment Link Record to the promotion. The returned wrapper can be used for further operations.
-   **[global TPM\_Promotion.Record addProductShare](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_1970000295)**
    Adds a Promotion Product Share Record to the promotion. The returned wrapper can be used for further operations.
-   **[global TPM\_Promotion.Record addTacticFund](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_1116283241)**
    Adds a Tactic Fund Record to the promotion. The returned wrapper can be used for further operations.
-   **[global TPM\_Promotion.Record getRecordById](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_1528868909)**
    Returns the wrapper object for the record identified by the parameter id. It will search among all the records associated to the promotion.
-   **[global TPM\_Promotion.TacticRecord addTactic](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_1689982962)**
    Adds a Tactic Record to the promotion. The returned wrapper can be used for further operations.
-   **[global TPM\_Scenarios getScenarios](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_525084012)**
    Returns a TPM\_Scenarios instance with the Promotion Scenarios information.
-   **[global TPM\_SubAccounts getSubAccounts](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_12973464)**
    Returns a TPM\_SubAccounts instance with the Sub Accounts information.
-   **[global void addRelationship](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_600757685)**
    Notifies the TPM\_Promotion instance about a relationship between 2 records. Avoid using direct DML manipulations for Records that are part of the transactional state of a Promotion. During the Promotion Save process, the records provided by the TPM\_Promotion instances use temporary Id’s for records that are not still in the database. Using the methods provided by TPM\_Promotion object ensures all relationships and Id’s are properly resolved before committing.
-   **[global void registerWork](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_1833334469)**
    Adds work to be executed after the promotion is committed to the database. Use this method to perform additional operations after all the Promotion related records are correctly committed to the database. See TPM\_Promotion.DoWork reference for details about the Interface methods.
-   **[global void reload](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_46794642)**
    Removes all the current values and reloads all the promotion data from the Database. This operation is disabled in the TPM\_Promotion instance during the Save Promotion Customization Hook.
-   **[global void save](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#unique_363485278)**
    Saves the all the changes contained in promotion SObject record and it’s related SObject records. This operation is disabled in the TPM\_Promotion instance during the Save Promotion Customization Hook, as this method will be automatically called when the Core business logic finish processing. The method will need to check the status of the TPM\_Promotion.Record wrapper (isDeleted(), isNew()) to determine the DB operation to perform.

### global List<TPM\_Promotion.Record> getAttachmentLinks

Returns the List<TPM\_Promotion.Record> instances with the Promotion Attachment Links contents.

#### API Version

55

#### Signature

global List<TPM\_Promotion.Record> getAttachmentLinks()

### global TPM\_Promotion

This method creates an empty Promotion record.

#### API Version

55

#### Signature

global TPM\_Promotion()

### global List<TPM\_Promotion.Record> getAttachments

Returns the List<TPM\_Promotion.Record> instances with the Promotion Attachments contents.

#### API Version

55

#### Signature

global List<TPM\_Promotion.Record> getAttachments()

### global List<TPM\_Promotion.Record> getProductShares

Returns a filtered List<TPM\_Promotion.Record> instances with the Promotion Product Share contents.

#### API Version

55

#### Signature

global List<TPM\_Promotion.Record> getProductShares(Boolean includeNew, Boolean includeDirty, Boolean includeDeleted )

### global List<TPM\_Promotion.Record> getAttachments

Returns a filtered List<TPM\_Promotion.Record> instances with the Promotion Attachments contents.

#### API Version

55

#### Signature

global List<TPM\_Promotion.Record> getAttachments(Boolean includeNew, Boolean includeDirty, Boolean includeDeleted )

### global List<TPM\_Promotion.Record> getAttachmentLinks

Returns a filtered List<TPM\_Promotion.Record> instances with the Promotion Attachment Links contents.

#### API Version

55

#### Signature

global List<TPM\_Promotion.Record> getAttachmentLinks(Boolean includeNew, Boolean includeDirty, Boolean includeDeleted )

### global List<TPM\_Promotion.Record> getTacticFunds

Returns a filtered List<TPM\_Promotion.Record> instances with the Tactic Fund contents.

#### API Version

55

#### Signature

global List<TPM\_Promotion.Record> getTacticFunds(Boolean includeNew, Boolean includeDirty, Boolean includeDeleted )

### global List<TPM\_Promotion.Record> getTacticFunds

Returns the List<TPM\_Promotion.Record> instances with the Tactic Fund contents.

#### API Version

55

#### Signature

global List<TPM\_Promotion.Record> getTacticFunds()

### global List<TPM\_Promotion.TacticRecord> getTactics

Returns the List<TPM\_Promotion.Record> instances with the Tactic contents.

#### API Version

55

#### Signature

global List<TPM\_Promotion.TacticRecord> getTactics()

### global List<TPM\_Promotion.TacticRecord> getTactics

Returns a filtered List<TPM\_Promotion.Record> instances with the Tactic contents..

#### API Version

55

#### Signature

global List<TPM\_Promotion.TacticRecord> getTactics(Boolean includeNew, Boolean includeDirty, Boolean includeDeleted)

### global List<TPM\_Promotion.Record> getTacticConditionCreationDefinitions

Returns a filtered List<TPM\_Promotion.Record> instances with the Tactic Condition Creation Definitions contents.

#### API Version

55

#### Signature

global List<TPM\_Promotion.Record> getTacticConditionCreationDefinitions(Boolean includeNew, Boolean includeDirty, Boolean includeDeleted)

### global List<TPM\_Promotion.Record> getTacticConditionCreationDefinitions

Returns the List<TPM\_Promotion.Record> instances with the Tactic Condition Creation Definitions contents.

#### API Version

55

#### Signature

global List<TPM\_Promotion.Record> getTacticConditionCreationDefinitions()

### global List<TPM\_Promotion.Record> getProductShares

Returns the List<TPM\_Promotion.Record> instances with the Promotion Product Share contents.

#### API Version

55

#### Signature

global List<TPM\_Promotion.Record> getProductShares()

### global Set<Id> getEffectiveCategories

Returns the read only list of effective categories of the promotion.

#### API Version

55

#### Signature

global Set<Id> getEffectiveCategories()

### global Set<Id> getEffectiveBrands

Returns the read only list of effective brands of the promotion.

#### API Version

55

#### Signature

global Set<Id> getEffectiveBrands()

### global TPM\_ManualInputs getManualInputs

Returns a TPM\_ManualInputs instance with the Manual Inputs Information.

#### API Version

55

#### Signature

global TPM\_ManualInputs getManualInputs()

### global TPM\_ParticipatingCustomers getParticipatingCustomers

Returns a TPM\_ParticipatingCustomers instance with the Participating Customers information.

#### API Version

55

#### Signature

global TPM\_ParticipatingCustomers getParticipatingCustomers()

### global TPM\_ProductFilter getProductFilter

Returns the TPM\_ProductFilter instance with the Product Filter information

#### API Version

55

#### Signature

global TPM\_ProductFilter getProductFilter()

### global TPM\_Promotion

If promotionId is null, throw an exception. This method loads the Promotion record referenced by the input Promotion Id along with its related SObjects.

#### API Version

55

#### Signature

global TPM\_Promotion(Id promotionId)

### global TPM\_Promotion.Record append

Appends a Custom SObject Record to the TPM\_Promotion instance. This record will be inserted/updated/deleted (depending on the TPM\_Promotion.Record instance state) during the same transaction the Promotion object is committed to the database.

#### API Version

55

#### Signature

global TPM\_Promotion.Record append(SObject record)

#### Example

```

```

### global TPM\_Promotion.Record addTacticConditionCreationDefinition

Adds a Tactic Condition Creation Definition Record to the promotion. The returned wrapper can be used for further operations.

#### API Version

55

#### Signature

global TPM\_Promotion.Record addTacticConditionCreationDefinition(Tactic\_Condition\_Creation\_Definition\_\_c tccd)

### global TPM\_Promotion.Record addAttachment

Adds a Promotion Attachment Record to the promotion. The returned wrapper can be used for further operations.

#### API Version

55

#### Signature

global TPM\_Promotion.Record addAttachment(Promotion\_Attachment\_\_c pa)

### global TPM\_Promotion.Record addAttachmentLink

Adds a Promotion Attachment Link Record to the promotion. The returned wrapper can be used for further operations.

#### API Version

55

#### Signature

global TPM\_Promotion.Record addAttachmentLink(Promotion\_Attachment\_Link\_\_c pal)

### global TPM\_Promotion.Record addProductShare

Adds a Promotion Product Share Record to the promotion. The returned wrapper can be used for further operations.

#### API Version

55

#### Signature

global TPM\_Promotion.Record addProductShare(Promotion\_Product\_Share\_\_c pps)

### global TPM\_Promotion.Record addTacticFund

Adds a Tactic Fund Record to the promotion. The returned wrapper can be used for further operations.

#### API Version

55

#### Signature

global TPM\_Promotion.Record addTacticFund(Tactic\_Fund\_\_c tf)

### global TPM\_Promotion.Record getRecordById

Returns the wrapper object for the record identified by the parameter id. It will search among all the records associated to the promotion.

#### API Version

55

#### Signature

global TPM\_Promotion.Record getRecordById(Id id)

### global TPM\_Promotion.TacticRecord addTactic

Adds a Tactic Record to the promotion. The returned wrapper can be used for further operations.

#### API Version

55

#### Signature

global TPM\_Promotion.TacticRecord addTactic(Tactic\_\_c tactic)

### global TPM\_Scenarios getScenarios

Returns a TPM\_Scenarios instance with the Promotion Scenarios information.

#### API Version

55

#### Signature

global TPM\_Scenarios getScenarios()

### global TPM\_SubAccounts getSubAccounts

Returns a TPM\_SubAccounts instance with the Sub Accounts information.

#### API Version

55

#### Signature

global TPM\_SubAccounts getSubAccounts()

### global void addRelationship

Notifies the TPM\_Promotion instance about a relationship between 2 records. Avoid using direct DML manipulations for Records that are part of the transactional state of a Promotion. During the Promotion Save process, the records provided by the TPM\_Promotion instances use temporary Id’s for records that are not still in the database. Using the methods provided by TPM\_Promotion object ensures all relationships and Id’s are properly resolved before committing.

#### API Version

55

#### Signature

(TPM\_Promotion.Record child, SObjectField relationField, TPM\_Promotion.Record parent)

#### Example

```

```

### global void registerWork

Adds work to be executed after the promotion is committed to the database. Use this method to perform additional operations after all the Promotion related records are correctly committed to the database. See TPM\_Promotion.DoWork reference for details about the Interface methods.

#### API Version

55

#### Signature

global void registerWork(TPM\_Promotion.DoWork work)

### global void reload

Removes all the current values and reloads all the promotion data from the Database. This operation is disabled in the TPM\_Promotion instance during the Save Promotion Customization Hook.

#### API Version

55

#### Signature

global void reload()

### global void save

Saves the all the changes contained in promotion SObject record and it’s related SObject records. This operation is disabled in the TPM\_Promotion instance during the Save Promotion Customization Hook, as this method will be automatically called when the Core business logic finish processing. The method will need to check the status of the TPM\_Promotion.Record wrapper (isDeleted(), isNew()) to determine the DB operation to perform.

#### API Version

55

#### Signature

global void save()

## Code Examples

```
cgcloud.TPM_Promotion tpmPromotion;

// When saving a promotion, a new MyRecord__c needs to be created
MyRecord__c myRecord = new MyRecord__c(Param1__c='Test');

// Append myRecord to the TPM_Promotion so it's committed when 
// the Promotion is commited to the DB
tpmPromotion.append(myRecord);
```

```
cgcloud.TPM_Promotion tpmPromotion;

// When saving a promotion, a new MyRecord__c needs to be created
MyRecord__c myRecord = new MyRecord__c(Param1__c='Test');

// Append myRecord to the TPM_Promotion so it's committed when 
// the Promotion is commited to the DB
tpmPromotion.append(myRecord);
```

```
cgcloud.TPM_Promotion tpmPromotion;

// When saving a promotion, a new MyRecord__c needs to be created linked to the 
// Promotion__c record by the MyRecord__c.Promotion__c field (lookup or MD field)
MyRecord__c myRecord = new MyRecord__c(Param1__c='Test');

// Append myRecord to the TPM_Promotion so it's committed when 
// the Promotion is commited to the DB
tpmPromotion.append(myRecord);

// Register the relationship to be resolved during the save
tpmPromotion.addRelationship(
    myRecord, // The child record, our new record
    MyRecord__c.Promotion__c, // The field that links both records, its a field on the child object
    tpmPromotion.getPromotion() // The parent record, in this case, the Promotion record
);
```

## Related Topics

- TPM_Promotion Methods (atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm)
- global List<TPM_Promotion.Record> getAttachmentLinks (atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm)
- global TPM_Promotion (atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm)
- global List<TPM_Promotion.Record> getAttachments (atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm)
- global List<TPM_Promotion.Record> getProductShares (atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm)
- global List<TPM_Promotion.Record> getTacticFunds (atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm)
- global List<TPM_Promotion.TacticRecord> getTactics (atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm)
- global List<TPM_Promotion.Record> getTacticConditionCreationDefinitions (atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm)
- global Set<Id> getEffectiveCategories (atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm)
- global Set<Id> getEffectiveBrands (atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm)
