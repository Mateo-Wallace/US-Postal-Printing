export const surveyJson = {
  completedHtml:
    "<h3>Thank you for your order</h3> <h5>Navigate to your Dashboard to view all orders.</h5>",
  completedHtmlOnCondition: [
    {
      expression: "{nps_score} > 8",
      html: "<h3>Thank you for your feedback</h3> <h5>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h5>",
    },
    {
      expression: "{nps_score} < 7",
      html: "<h3>Thank you for your feedback</h3> <h5>We are glad that you shared your ideas with us. They will help us make our product better.</h5>",
    },
  ],
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "dropdown",
          name: "product",
          title: "Product",
          isRequired: true,
          showNoneItem: false,
          colCount: 4,
          choices: [
            "Business Cards",
            "Printing Services",
            "Copying Services",
            "Passport Photos",
            "Notary Services",
          ],
        },
        {
          type: "text",
          name: "name",
          title: "Name:",
          isRequired: true,
        },
        {
          type: "text",
          name: "phone",
          title: "Phone Number:",
          isRequired: true,
        },
        {
          type: "text",
          name: "address",
          title: "Address:",
          isRequired: true,
        },
        {
          type: "text",
          name: "cost",
          inputType: "number",
          title: "Item Cost:",
          isRequired: true,
          startWithNewLine: false,
        },
        {
          type: "text",
          name: "message",
          title: "Message:",
          isRequired: true,
        },
        {
          type: "text",
          name: "quantity",
          inputType: "number",
          title: "Quantity:",
          isRequired: true,
          startWithNewLine: false,
        },
        {
          type: "expression",
          name: "total",
          title: "Total Item Cost:",
          expression: "{cost} * {quantity}",
          displayStyle: "currency",
          currency: "DOLLAR",
          startWithNewLine: false,
        },
        {
          type: "comment",
          name: "passive_experience",
          visibleIf: "{nps_score} > 6  and {nps_score} < 9",
          title: "What is the primary reason for your score?",
        },
        {
          type: "comment",
          name: "disappointed_experience",
          visibleIf: "{nps_score} notempty",
          title:
            "What do you miss and find disappointing in your experience with our product?",
        },
      ],
    },
  ],
  showQuestionNumbers: "off",
};
