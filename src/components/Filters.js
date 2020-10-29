
const filtersWorkingCats =[
    {
        targetApiField: "status",
        value:
          window.pets.petStatus ||
          console.error("You must provide a pets.petStatus."),
      },
      {
        targetApiField: "workingcat",
        value:
          window.pets.workingCats,
      },
      {
        targetApiField: "recordsPerPage",
        value: 10,
      },
      {
        targetApiField: "gender",
        displayName: "Gender",
        options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "unknown", label: "Unknown" },
        ],
      },
]

const filters = [
    {
      targetApiField: "status",
      value:
        window.pets.petStatus ||
        console.error("You must provide a pets.petStatus."),
    },
    {
      targetApiField: "recordsPerPage",
      value: 10,
    },
    {
      targetApiField: "petType",
      displayName: "Species",
      options: [
        { value: "dog", label: "Dog" },
        { value: "cat", label: "Cat" },
        { value: "other", label: "Other" },
      ],
    },
    {
      targetApiField: "gender",
      displayName: "Gender",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "unknown", label: "Unknown" },
      ],
    },
    {
      targetApiField: "weight",
      displayName: "Size",
      options: [
        { value: "small", label: "Small" },
        { value: "medium", label: "Medium" },
        { value: "large", label: "Large" },
      ],
    },
  ];

  export { filters, filtersWorkingCats}