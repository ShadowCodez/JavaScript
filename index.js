
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




  function diseaseDisplay(a){
  let input_data = a;
  let finalDOM = '';

  for (let j = 0; j < Object.values(medicine_chart.problems[0]).length; j++){

  let output_data  = input_data.problems.map((data) => {
                      return data.Diabetes.map(Diabetes => {
                        return Diabetes.medications.map(medications => {
                          return medications.medicationsClasses.map(medicationsClasses => {
                            return medicationsClasses.className.map(className => {
                              return className.associatedDrug.map(fuck =>{
                                let single_data = `                
                                  <div class="col-3">
                                    <div class="card shadow">
                                      <div class="card-body">
                                        <h3>Name: ${Object.values(medicine_chart.problems[0]).length} </h3><br>
                                      </div>                    
                                    </div>
                                  </div>`;
                      return single_data; 
                
                                  })
                                })
                              })
                            })

                          })          
                      })

  finalDOM +=  output_data.join("")
  document.getElementById("patient").innerHTML =`<div class="row">${finalDOM}<div>`;
  }}

  diseaseDisplay(medicine_chart);

  
  







