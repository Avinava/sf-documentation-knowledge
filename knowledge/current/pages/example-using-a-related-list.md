---
title: "Example Using a Related List"
domain: pages
topic: example-using-a-related-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.464Z
estimatedTokens: 737
keywords: [Dynamic, Visualforce, components, best, don’t, know, want, opposed, bindings, access]
---

# Example Using a Related List

> Dynamic Visualforce components are
            best used when you don’t know the type of object you want to reference, as
            opposed to dynamic Visualforce bindings,
            which are best used when you don’t know the fields you want to access.

# Example Using a Related List

Dynamic Visualforce components are best used when you don’t know the type of *object* you want to reference, as opposed to [dynamic Visualforce bindings](atlas.en-us.pages.meta/pages/pages_dynamic_vf.htm), which are best used when you don’t know the *fields* you want to access.

The following scenario for using dynamic Visualforce constructs a simple, reusable page with a known set of fields you want to access. The page and its custom object are placed into an unmanaged package and distributed throughout the same organization.

First, create a custom object called Classroom. Create two objects—one named Science 101 and another named Math 201, as this figure shows:

![Image of Recently Added Classrooms](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fdyn_vf_component_objs.png&folder=pages)

Next, create two more custom objects called Student and Teacher. After you finish creating each object:

1.  Click **New** under **Custom Fields & Relationships**.
2.  Select Master-Detail Relationship, then click **Next**.
3.  Select **Classroom** from the drop-down list, then click **Next**.
4.  Continue to click **Next**, leaving all the default values intact.

Create the following objects and matching relationships:

-   A new Student named Johnny Walker, and a new Teacher named Mister Pibb, both assigned to Science 101.
-   Another new Student named Boont Amber, and a new Teacher named Doctor Pepper, both assigned to Math 201.

Now, create a new Apex page called DynamicClassroomList and paste the following code:

```

```

After trying to save, you may be prompted about a missing Visualforce page. Click the link to create the page: the next blocks of code will populate it.

Create a Visualforce page called dynVFClassroom and paste the following code:

```

```

Finally, create a page called DynamicClassroomList. If you’ve been following this tutorial from the beginning, you should have already created this page when constructing your controller extension. Paste in the following code:

```

```

This is the page that presents the user with the option of selecting which object relationships to display. Notice that the “selected” and “unselected” lists are populated through dynamic means.

After assembling the controller extension and these pages, navigate to /apex/dynVFClassroom in your organization. You’ll see a sequence similar to the following:![Screenshot of initial Classroom object selection](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fdyn_vf_components_rel_item_prompt.png&folder=pages)![Screenshot of Classroom relationship selection](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fdyn_vf_components_rel_item_selection.png&folder=pages)![Screenshot of Classroom relationship selection](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fdyn_vf_components_rel_item_display.png&folder=pages)

## Code Examples

```apex
public class DynamicClassroomList {

    private ApexPages.StandardSetController controller;
    private PageReference savePage;
    private Set<String> unSelectedNames;
    private Set<String> selectedNames;
    
    public List<String> selected { get; set; }
    public List<String> unselected { get; set; }
    public String objId { get; set; }
    public List<String> displayObjs {
        get; private set;
    }
    
    boolean idIsSet = false;
    
    public DynamicClassroomList() {
        init();
    }

    public DynamicClassroomList(ApexPages.StandardSetController con) {
        this.controller = con;
        init();
    }

    private void init() {
        savePage = null;
        unSelectedNames = new Set<String>();
        selectedNames = new Set<String>();
         
        if (idIsSet) {
            ApexPages.CurrentPage().getParameters().put('id', objId);
            idIsSet = false;
        }
    }
    
    public PageReference show() {
        savePage = Page.dynVFClassroom;
        savePage.getParameters().put('id', objId);
        return savePage;
    }

    public List<SelectOption> displayObjsList { 
        get {
            List<SelectOption> options = new List<SelectOption>();
            List<Classroom__c> classrooms = [SELECT id, name FROM Classroom__c];
            
            for (Classroom__c c: classrooms) {
                options.add(new SelectOption(c.id, c.name)); 
            }
            
            return options;
       }
    }
    
    public PageReference customize() {
        savePage = ApexPages.CurrentPage();
        savePage.getParameters().put('id', objId);
        
        return Page.dynamicclassroomlist;
    }

    // The methods below are for constructing the select list  

    public List<SelectOption> selectedOptions { 
        get {
            List<String> sorted = new List<String>(selectedNames);
            sorted.sort();
            List<SelectOption> options = new List<SelectOption>();
            for (String s: sorted) {
                options.add(new SelectOption(s, s));
            }
            return options;
        }
    }
    
    public List<SelectOption> unSelectedOptions { 
        get {
            Schema.DescribeSObjectResult R = Classroom__c.SObjectType.getDescribe();
            List<Schema.ChildRelationship> C = R.getChildRelationships(); 
            List<SelectOption> options = new List<SelectOption>();
            
            for (Schema.ChildRelationship cr: C) {
                String relName = cr.getRelationshipName();
                // We're only interested in custom relationships
                if (relName != null && relName.contains('__r')) {
                    options.add(new SelectOption(relName, relName));
                }
            }
            return options;
        }
    }


    public void doSelect() {
        for (String s: selected) {
            selectedNames.add(s);
            unselectedNames.remove(s);
        }
    }

    public void doUnSelect() {
        for (String s: unselected) {
            unSelectedNames.add(s);
            selectedNames.remove(s);
        }
    }

    public Component.Apex.OutputPanel getClassroomRelatedLists() {
        Component.Apex.OutputPanel dynOutPanel= new Component.Apex.OutputPanel();
        
        for(String id: selectedNames) {
           Component.Apex.RelatedList dynRelList = new Component.Apex.RelatedList();
           dynRelList.list = id;
           dynOutPanel.childComponents.add(dynRelList);
        }
        
        return dynOutPanel;
    }
}
```

```
<apex:page standardController="Classroom__c" recordSetVar="classlist"
    extensions="DynamicClassroomList">
    
    <apex:dynamicComponent componentValue="{!ClassroomRelatedLists}"/>
    
    <apex:form>
        
        <apex:pageBlock title="Classrooms Available" mode="edit">
            <apex:pageMessages/>
            <apex:selectRadio value="{!objId}">
                <apex:selectOptions value="{!displayObjsList}"/>
            </apex:selectRadio>
        </apex:pageBlock>

        <apex:commandButton value="Select Related Items" action="{!Customize}"/>
    </apex:form>
    
</apex:page>
```

```
<apex:page standardController="Classroom__c" recordsetvar="listPageMarker" 
    extensions="DynamicClassroomList">
    <apex:messages/><br/>
    <apex:form>
        <apex:pageBlock title="Select Relationships to Display" id="selectionBlock">
            <apex:panelGrid columns="3">
                <apex:selectList id="unselected_list" required="false"
                    value="{!selected}" multiselect="true" size="20" 
                    style="width:250px">
                    <apex:selectOptions value="{!unSelectedOptions}"/>
                </apex:selectList>
                <apex:panelGroup>
                    <apex:commandButton value=">>" action="{!DoSelect}" 
                        reRender="selectionBlock"/>
                    <br/>
                    <apex:commandButton value="<<" action="{!DoUnselect}" 
                        reRender="selectionBlock"/>
                </apex:panelGroup>
                <apex:selectList id="selected_list" required="false"
                    value="{!unselected}" multiselect="true" size="20" 
                    style="width:250px">
                    <apex:selectOptions value="{!selectedOptions}"/>
                </apex:selectList>
            </apex:panelGrid>
        </apex:pageBlock>
        <br/>
        <apex:commandButton value="Show Related Lists" action="{!show}"/>
    </apex:form>
</apex:page>
```

## Related Topics

- dynamic Visualforce bindings (atlas.en-us.pages.meta/pages/pages_dynamic_vf.htm)
