export const json = {
    completedHtml: "<h3>Thank you for your feedback</h3> <h5>Your thoughts and ideas will help us improve our product.</h5>",
    completedHtmlOnCondition: [{
      expression: "{nps_score} > 8",
      html: "<h3>Thank you for your feedback</h3> <h5>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h5>"
    }, {
      expression: "{nps_score} < 7",
      html: "<h3>Thank you for your feedback</h3> <h5>We are glad that you shared your ideas with us. They will help us make our product better.</h5>"
    }],
    pages: [{
      name: "page1",
      elements: [{
        type: "dropdown",
        name: "product",
        title: "Dropdown",
        isRequired: true,
        showNoneItem: true,
        colCount: 4,
        choices: [
          "Business Cards",
          "Printing Services",
          "Copying Services",
          "Passport Photos",
          "Notary Services",
          "Fax Services",
          "Shipping Services",
          "Other"
        ]
      }, {
        type: "panel",
        title: "Business Cards",
        visibleIf: "{product}='Business Cards'",
        innerIndent: 1,
        elements: [
          {
            type: "paneldynamic",
            name: "items",
            title: "Items",
            keyName: "name",
            showQuestionNumbers: "none",
            templateTitle: "item #{panelIndex}",
            templateElements: [
              {
                type: "text",
                name: "name",
                title: "Name:",
                isRequired: true
              },
              {
                type: "text",
                name: "cost",
                inputType: "number",
                title: "Item Cost:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "vendor",
                title: "Vendor:",
                isRequired: true
              },
              {
                type: "text",
                name: "quantity",
                inputType: "number",
                title: "Quantity:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "link",
                title: "Link:",
                isRequired: true
              },
              {
                type: "expression",
                name: "total",
                title: "Total Item Cost:",
                expression: "{panel.cost} * {panel.quantity}",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ],
            minPanelCount: 1,
            panelAddText: "Add another  item",
            panelRemoveText: "Remove item"
          }, 
          {
            type: "panel",
            title: "Totals",
            elements: [
              {
                type: "expression",
                name: "totalQuantity",
                title: "Total  Quantity:",
                expression: "sumInArray({items}, 'quantity'"
              },
              {
                type: "expression",
                name: "totalCost",
                title: "Total Cost:",
                expression: "sumInArray({items}, 'total'",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ]
          }
        ]
      }, {
        type: "panel",
        title: "Printing Services",
        visibleIf: "{product}='Printing Services'",
        innerIndent: 1,
        elements: [
          {
            type: "paneldynamic",
            name: "items",
            title: "Items",
            keyName: "name",
            showQuestionNumbers: "none",
            templateTitle: "item #{panelIndex}",
            templateElements: [
              {
                type: "text",
                name: "name",
                title: "Name:",
                isRequired: true
              },
              {
                type: "text",
                name: "cost",
                inputType: "number",
                title: "Item Cost:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "vendor",
                title: "Vendor:",
                isRequired: true
              },
              {
                type: "text",
                name: "quantity",
                inputType: "number",
                title: "Quantity:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "link",
                title: "Link:",
                isRequired: true
              },
              {
                type: "expression",
                name: "total",
                title: "Total Item Cost:",
                expression: "{panel.cost} * {panel.quantity}",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ],
            minPanelCount: 1,
            panelAddText: "Add another  item",
            panelRemoveText: "Remove item"
          }, 
          {
            type: "panel",
            title: "Totals",
            elements: [
              {
                type: "expression",
                name: "totalQuantity",
                title: "Total  Quantity:",
                expression: "sumInArray({items}, 'quantity'"
              },
              {
                type: "expression",
                name: "totalCost",
                title: "Total Cost:",
                expression: "sumInArray({items}, 'total'",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ]
          }
        ]
      }, {
        type: "panel",
        title: "Copying Services",
        visibleIf: "{product}='Copying Services'",
        innerIndent: 1,
        elements: [
          {
            type: "paneldynamic",
            name: "items",
            title: "Items",
            keyName: "name",
            showQuestionNumbers: "none",
            templateTitle: "item #{panelIndex}",
            templateElements: [
              {
                type: "text",
                name: "name",
                title: "Name:",
                isRequired: true
              },
              {
                type: "text",
                name: "cost",
                inputType: "number",
                title: "Item Cost:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "vendor",
                title: "Vendor:",
                isRequired: true
              },
              {
                type: "text",
                name: "quantity",
                inputType: "number",
                title: "Quantity:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "link",
                title: "Link:",
                isRequired: true
              },
              {
                type: "expression",
                name: "total",
                title: "Total Item Cost:",
                expression: "{panel.cost} * {panel.quantity}",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ],
            minPanelCount: 1,
            panelAddText: "Add another  item",
            panelRemoveText: "Remove item"
          }, 
          {
            type: "panel",
            title: "Totals",
            elements: [
              {
                type: "expression",
                name: "totalQuantity",
                title: "Total  Quantity:",
                expression: "sumInArray({items}, 'quantity'"
              },
              {
                type: "expression",
                name: "totalCost",
                title: "Total Cost:",
                expression: "sumInArray({items}, 'total'",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ]
          }
        ]
      },{
        type: "panel",
        title: "Passport Photos",
        visibleIf: "{product}='Passport Photos'",
        innerIndent: 1,
        elements: [
          {
            type: "paneldynamic",
            name: "items",
            title: "Items",
            keyName: "name",
            showQuestionNumbers: "none",
            templateTitle: "item #{panelIndex}",
            templateElements: [
              {
                type: "text",
                name: "name",
                title: "Name:",
                isRequired: true
              },
              {
                type: "text",
                name: "cost",
                inputType: "number",
                title: "Item Cost:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "vendor",
                title: "Vendor:",
                isRequired: true
              },
              {
                type: "text",
                name: "quantity",
                inputType: "number",
                title: "Quantity:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "link",
                title: "Link:",
                isRequired: true
              },
              {
                type: "expression",
                name: "total",
                title: "Total Item Cost:",
                expression: "{panel.cost} * {panel.quantity}",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ],
            minPanelCount: 1,
            panelAddText: "Add another  item",
            panelRemoveText: "Remove item"
          }, 
          {
            type: "panel",
            title: "Totals",
            elements: [
              {
                type: "expression",
                name: "totalQuantity",
                title: "Total  Quantity:",
                expression: "sumInArray({items}, 'quantity'"
              },
              {
                type: "expression",
                name: "totalCost",
                title: "Total Cost:",
                expression: "sumInArray({items}, 'total'",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ]
          }
        ]
      },{
        type: "panel",
        title: "Notary Services",
        visibleIf: "{product}='Notary Services'",
        innerIndent: 1,
        elements: [
          {
            type: "paneldynamic",
            name: "items",
            title: "Items",
            keyName: "name",
            showQuestionNumbers: "none",
            templateTitle: "item #{panelIndex}",
            templateElements: [
              {
                type: "text",
                name: "name",
                title: "Name:",
                isRequired: true
              },
              {
                type: "text",
                name: "cost",
                inputType: "number",
                title: "Item Cost:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "vendor",
                title: "Vendor:",
                isRequired: true
              },
              {
                type: "text",
                name: "quantity",
                inputType: "number",
                title: "Quantity:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "link",
                title: "Link:",
                isRequired: true
              },
              {
                type: "expression",
                name: "total",
                title: "Total Item Cost:",
                expression: "{panel.cost} * {panel.quantity}",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ],
            minPanelCount: 1,
            panelAddText: "Add another  item",
            panelRemoveText: "Remove item"
          }, 
          {
            type: "panel",
            title: "Totals",
            elements: [
              {
                type: "expression",
                name: "totalQuantity",
                title: "Total  Quantity:",
                expression: "sumInArray({items}, 'quantity'"
              },
              {
                type: "expression",
                name: "totalCost",
                title: "Total Cost:",
                expression: "sumInArray({items}, 'total'",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ]
          }
        ]
      },{
        type: "panel",
        title: "Fax Services",
        visibleIf: "{product}='Fax Services'",
        innerIndent: 1,
        elements: [
          {
            type: "paneldynamic",
            name: "items",
            title: "Items",
            keyName: "name",
            showQuestionNumbers: "none",
            templateTitle: "item #{panelIndex}",
            templateElements: [
              {
                type: "text",
                name: "name",
                title: "Name:",
                isRequired: true
              },
              {
                type: "text",
                name: "cost",
                inputType: "number",
                title: "Item Cost:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "vendor",
                title: "Vendor:",
                isRequired: true
              },
              {
                type: "text",
                name: "quantity",
                inputType: "number",
                title: "Quantity:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "link",
                title: "Link:",
                isRequired: true
              },
              {
                type: "expression",
                name: "total",
                title: "Total Item Cost:",
                expression: "{panel.cost} * {panel.quantity}",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ],
            minPanelCount: 1,
            panelAddText: "Add another  item",
            panelRemoveText: "Remove item"
          }, 
          {
            type: "panel",
            title: "Totals",
            elements: [
              {
                type: "expression",
                name: "totalQuantity",
                title: "Total  Quantity:",
                expression: "sumInArray({items}, 'quantity'"
              },
              {
                type: "expression",
                name: "totalCost",
                title: "Total Cost:",
                expression: "sumInArray({items}, 'total'",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ]
          }
        ]
      },{
        type: "panel",
        title: "Shipping Services",
        visibleIf: "{product}='Shipping Services'",
        innerIndent: 1,
        elements: [
          {
            type: "paneldynamic",
            name: "items",
            title: "Items",
            keyName: "name",
            showQuestionNumbers: "none",
            templateTitle: "item #{panelIndex}",
            templateElements: [
              {
                type: "text",
                name: "name",
                title: "Name:",
                isRequired: true
              },
              {
                type: "text",
                name: "cost",
                inputType: "number",
                title: "Item Cost:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "vendor",
                title: "Vendor:",
                isRequired: true
              },
              {
                type: "text",
                name: "quantity",
                inputType: "number",
                title: "Quantity:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "link",
                title: "Link:",
                isRequired: true
              },
              {
                type: "expression",
                name: "total",
                title: "Total Item Cost:",
                expression: "{panel.cost} * {panel.quantity}",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ],
            minPanelCount: 1,
            panelAddText: "Add another  item",
            panelRemoveText: "Remove item"
          }, 
          {
            type: "panel",
            title: "Totals",
            elements: [
              {
                type: "expression",
                name: "totalQuantity",
                title: "Total  Quantity:",
                expression: "sumInArray({items}, 'quantity'"
              },
              {
                type: "expression",
                name: "totalCost",
                title: "Total Cost:",
                expression: "sumInArray({items}, 'total'",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ]
          }
        ]
      },{
        type: "panel",
        title: "Other",
        visibleIf: "{product}='Other'",
        innerIndent: 1,
        elements: [
          {
            type: "paneldynamic",
            name: "items",
            title: "Items",
            keyName: "name",
            showQuestionNumbers: "none",
            templateTitle: "item #{panelIndex}",
            templateElements: [
              {
                type: "text",
                name: "name",
                title: "Name:",
                isRequired: true
              },
              {
                type: "text",
                name: "cost",
                inputType: "number",
                title: "Item Cost:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "vendor",
                title: "Vendor:",
                isRequired: true
              },
              {
                type: "text",
                name: "quantity",
                inputType: "number",
                title: "Quantity:",
                isRequired: true,
                startWithNewLine: false
              },
              {
                type: "text",
                name: "link",
                title: "Link:",
                isRequired: true
              },
              {
                type: "expression",
                name: "total",
                title: "Total Item Cost:",
                expression: "{panel.cost} * {panel.quantity}",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ],
            minPanelCount: 1,
            panelAddText: "Add another  item",
            panelRemoveText: "Remove item"
          }, 
          {
            type: "panel",
            title: "Totals",
            elements: [
              {
                type: "expression",
                name: "totalQuantity",
                title: "Total  Quantity:",
                expression: "sumInArray({items}, 'quantity'"
              },
              {
                type: "expression",
                name: "totalCost",
                title: "Total Cost:",
                expression: "sumInArray({items}, 'total'",
                displayStyle: "currency",
                currency: "DOLLAR",
                startWithNewLine: false
              }
            ]
          }
        ]
      },
      {
        type: "comment",
        name: "passive_experience",
        visibleIf: "{nps_score} > 6  and {nps_score} < 9",
        title: "What is the primary reason for your score?"
      }, {
        type: "comment",
        name: "disappointed_experience",
        visibleIf: "{nps_score} notempty",
        title: "What do you miss and find disappointing in your experience with our product?"
      }]
    }],
    showQuestionNumbers: "off"
  };