clearselection()
clearlistener()
criteriaSelected = undefined
criteriaCustom= undefined

try(DestroyDialog introDialog)catch()
rollout introDialog "Group Revit items" width:360
	(
    listbox lbx_A "Select grouping criteria" items:#("Category_Name","Family_Name","Type_Name","ProductBreakdownStructure","Custom property (enter below...)")	width:280
    edittext edt_A "Enter your custom code:"
	button btn_A "Group Items" width:240 height:24
		
		on btn_A pressed do
		(
		criteriaSelected = lbx_A.selected 
		criteriaCustom = edt_A.text
		actionMan.executeAction 0 "40021"
		if ((criteriaCustom != undefined) and (criteriaSelected == "Custom property (enter below...)")) then PBS = criteriaCustom else PBS = criteriaSelected
		for Obj in Geometry do
			(
					arStrObjPropertyValues = #()
					objCustAttrubs = custAttributes.get Obj 1 baseobject:false
					if (objCustAttrubs != undefined) do
					(
						PropertyToExtract = PBS
						if (hasProperty objCustAttrubs PropertyToExtract) do
							(
							PropertyValue = getProperty Obj PropertyToExtract
							format "% % \n" m PropertyValue
							theNode = undefined
							theNode = getNodeByName PropertyValue
							if (theNode == undefined) then
								(
									Obj.parent = Dummy name:PropertyValue pos:[0,0,0]
								)
								else
								(
									Obj.parent = theNode
								)	
							)
					)
			)
		clearselection()
		DestroyDialog introDialog
		)
)
Createdialog introDialog
