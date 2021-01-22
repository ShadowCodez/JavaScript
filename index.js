
let medicine_chart = {
    "problems": [
      {
        "Diabetes": [
          {
            "medications": [
              {
                "medicationsClasses": [
                  {
                    "className": [
                      {
                        "associatedDrug": [
                          {
                            "name": "asprin",
                            "dose": "",
                            "strength": "500 mg"
                          }
                        ],
                        "associatedDrug#2": [
                          {
                            "name": "somethingElse",
                            "dose": "",
                            "strength": "500 mg"
                          }
                        ]
                      }
                    ],
                    "className2": [
                      {
                        "associatedDrug": [
                          {
                            "name": "asprin",
                            "dose": "",
                            "strength": "500 mg"
                          }
                        ],
                        "associatedDrug#2": [
                          {
                            "name": "somethingElse",
                            "dose": "",
                            "strength": "500 mg"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "labs": [
              {
                "missing_field": "missing_value"
              }
            ]
          }
        ],
        "Asthma": [
          {}
        ],
        "Cancer": [
          {
            "medications": [
              {
                "medicationsClasses": [
                  {
                    "className": [
                      {
                        "associatedDrug": [
                          {
                            "name": "asprin",
                            "dose": "",
                            "strength": "500 mg"
                          }
                        ],
                        "associatedDrug#2": [
                          {
                            "name": "somethingElse",
                            "dose": "",
                            "strength": "500 mg"
                          }
                        ]
                      }
                    ],
                    "className2": [
                      {
                        "associatedDrug": [
                          {
                            "name": "asprin",
                            "dose": "",
                            "strength": "500 mg"
                          }
                        ],
                        "associatedDrug#2": [
                          {
                            "name": "somethingElse",
                            "dose": "",
                            "strength": "500 mg"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "labs": [
              {
                "missing_field": "missing_value"
              }
            ]
          }
        ]
      }
    ]
  };


  let test = {"Problems":[{"Cancer":["sample"]}]};
  // console.log(test)

  let finalDOM = diseaseDisplay(test);
  

  function diseaseDisplay(a){
  let input_data = Object.entries(a);
  let i = 0;
  var dd =input_data[0];
    //itrate arrray
    
  console.log(dd[1]);
  let output_data  = input_data.map(function(values,index){
  let disease_names = ['Diabetes', 'Asthma', 'Cancer'];
  let tags = ['medications','medicationsClasses','className','className2', 'labs'];
  let associatedDrugs = ['associatedDrug','associatedDrug#2'];
  let single_data = `
    <div class="col-3">
            <div class="card shadow">
                <div class="card-body">
                    <h3>Name: </h3>
                </div>                    
            </div>
    </div>`;
    return single_data;

  })
  console.log(output_data);
  let finalDOM = `<div class="row" style="justify-content: center;" >${output_data.join("")}</div>`
  document.getElementById("patient").innerHTML = finalDOM;
  }
  


    











