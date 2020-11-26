/********* Template for subworkflows
{
    id: "-",
        steps: [
            {
                title: "-",
                detail: "-"
            },
            {
                title: "-",
                detail: "-"
            } 
        ],
        branch: [
            {
                condition: "-",
                targetId: "-"
            },
            {
                condition: "-",
                targetId: "-"
            }
        ]
}*/

export const test = {title: "test"};
//A test workflow
export const workflow = [
    {
        id: "001",
        steps: [
            {
                title: "Start The workflow",
                detail: "In this step you have to start the workflow and do this thing I'm doing here which is very interesting."
            },
            {
                title: "Continue The workflow",
                detail: "In this step you have to continue the workflow and do this thing I'm doing here which is very interesting."
            } 
        ],
        branch: [
            {
                condition: "Do you need to go right?",
                targetId: "002"
            },
            {
                condition: "Do you need to go left?",
                targetId: "003"
            }
        ]
    },
    {   
        id: "002",
        steps: [
            {
                title: "You went right",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "You're still right",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            } 
        ],
        branch: [
            {
                condition: "Can you finish?",
                targetId: "end"
            },
            {
                condition: "You can't?",
                targetId: "001"
            }
        ]
    },
    {
        id: "003",
        steps: [
            {
                title: "You went left",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "You're still left",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            } 
        ],
        branch: [
            {
                condition: "Do you want to go right instead?",
                targetId: "002"
            },
            {
                condition: "You want to keep going left?",
                targetId: "001"
            }
        ]
    },
    {
        id: "end",
            steps: [
                {
                    title: "Final statmentes",
                    detail: "Final blablalbblablablablablablalbbal"
                },
            ],
            branch: [
                {
                    condition: "You have finished. Go to beginning?",
                    targetId: "001"
                },
            ]
    }
];

export const pooWorkflow = [
    {
        id: "001",
        steps: [
            {
                title: "Check if Market BP already exists in C@P",
                detail: "The consultant opens C@P via PPN (if it is not already open) and searches for existing Business Partner. By the defined criteria, the customer can be clearly identified. The consultant compares the data of the customer."
            }
        ],
        branch: [
            {
                condition: "Market BP exists",
                targetId: "002"
            },
            {
                condition: "Market BP does not exist",
                targetId: "011"
            }
        ]
    },
    {   
        id: "002",
        steps: [
            {
                title: "Check in C@P if VIN is attached to respective Market BP",
                detail: "If the Market BP exists in C@P, the consultant checks if the VIN stated in the email is already attached to the respective Market BP in C@P."
            }
             
        ],
        branch: [
            {
                condition: "VIN is attached",
                targetId: "003"
            },
            {
                condition: "VIN is not attached",
                targetId: "007"
            }
        ]
    },
    {
        id: "003",
        steps: [
            {
                title: "Check if PC in email and Market BP is identical",
                detail: "If the VIN stated in the email is attached to the respective Market BP in C@P, the consultant checks if the Porsche Center stated in the email and the Porsche Center displayed in the Market BP are identical."
            } 
        ],
        branch: [
            {
                condition: "PC is identical:",
                targetId: "004"
            },
            {
                condition: "PC is not identical",
                targetId: "005"
            }
        ]
    },
    {
        id: "004",
        steps: [
            {
                title: "Trigger invitation email and inform customer",
                detail: "If the Porsche Center stated in the email and the Porsche Center displayed in the Market BP are identical, the consultant triggers the invitation email for My Porsche via the Assignment Block “Vehicles” (envelope button) in the Market BP."
            },
            {
                title: "Document as PoO Activity",
                detail: "The consultant documents all relevant information in the activity Proof of Ownership (PoO) in C@P and attaches all relevant documents. For a detailed description of the process in C@P, please refer to the corresponding training material."
            },
            {
                title: "Forward PoO Activity to TL",
                detail: "The consultant forwards the activity “Proof of Ownership” to a team leader for second approval."
            },
            {
                title: "TL fulfills 2nd check and forwards to consultant",
                detail: "This process step is carried out by a team leader. Afterwards the team leader forwards the activity Proof of Ownership to the consultant."
            },
            {
                title: "Set status in PoO Activity as completed",
                detail: "After second approval by the team leader the consultant receives the activity Proof of Ownership and sets the status as “Successful”.. The consultant deletes the documents sent by the customer in C@P, except of the Proof of Ownership request form."
            }
        ],
        branch: [
            {
                condition: "Process is complete",
                targetId: "end"
            }
        ]
    },
    {
        id: "005",
        steps: [
            {
                title: "Ask customer if a change of the PC should be performed",
                detail: "The consultant clarifies with the customer whether he wants tochange to the Porsche Center mentioned in his email or whether hewants to remain with his previous Porsche Center. Therefore theconsultant calls the customer."
            } 
        ],
        branch: [
            {
                condition: "PC should not be changed",
                targetId: "004"
            },
            {
                condition: "PC should be changed",
                targetId: "006"
            }
        ]
    },
    {
        id: "006",
        steps: [
            {
                title: "Inform customer he must do this personaly in the Porsche Center",
                detail: "If the customer requests a change of the preferred Porsche Center,the consultant explains that the customer must contact therespective Porsche Center autonomously to perform a change ofPorsche Center as stated in the email.Afterwards the consultant ends the conversation in consent with thecustomer making sure that the customer has no further questions orissues."
            },
            {
                title: "Document as PoO Activity",
                detail: "The consultant documents all relevant information in the activity Proof of Ownership (PoO) in C@P and attaches all relevant documents. For a detailed description of the process in C@P, please refer to the corresponding training material."
            },
            {
                title: "Set status in PoO Activity as denied",
                detail: "Consultant sets the activity status as “denied”. The consultant deletes the documents sent by the customer in C@P, except of the Proof of Ownership request form."
            },           
        ],
        branch: [
            {
                condition: "Process is complete",
                targetId: "end"
            }
        ]
    },
    {
        id: "007",
        steps: [
            {
                title: "Check if PC in email and Market BP is identical",
                detail: "If the VIN stated in the email is not attached to the respective Market BP in C@P, the consultant checks if the Porsche Center stated in the email and the Porsche Center displayed in the Market BP are identical."

            }
        ],
        branch: [
            {
                condition: "PC is identical",
                targetId: "012"
            },
            {
                condition: "PC is not identical",
                targetId: "008"
            }
        ]
    },
    {
        id: "008",
        steps: [
            {
                title: "Ask customer if a change of the PC should be performed",
                detail: "If the Porsche Center stated in the email is not identical with the Porsche Center displayed in the Market BP, the consultant clarifies with the customer whether the Porsche Center should be changed to the one mentioned in the email or whether the Porsche Center displayed in C@P should remain the preferred Porsche Center. Therefore the consultant calls the customer."

            }
        ],
        branch: [
            {
                condition: "PC should not be changed",
                targetId: "010"
            },
            {
                condition: "PC should be changed",
                targetId: "009"
            }
        ]
    },
    {
        id: "009",
        steps: [
            {
                title: "End conversation",
                detail: "If the customer requests a change of the preferred Porsche Center, the consultant makes sure that the customer has no further questions or issues and ends the conversation. The consultant says goodbye, wishes the customer a nice day and waits until the customer hangs up." 

            },
            {
                title: "Create a new Market BP",
                detail: "The consultant creates a new Market BP in C@P based on the given customer data and the Porsche Center stated in the email. In the Notes section of the Market BP, the consultant adds the note “BP created as part of PoO request”. This is important so that the Porsche Center understands where the BP comes from." 

            }
        ],
        branch: [
            {
                condition: "Proceed with Proof of Ownership",
                targetId: "012"
            }
        ]
    },
    {
        id: "010",
        steps: [
            {
                title: "End conversation",
                detail: "If the customer requests no change of the preferred Porsche Center, the consultant makes sure that the customer has no further questions or issues and ends the conversation. The consultant says goodbye, wishes the customer a nice day and waits until the customer hangs up. Existing BP will be used from now on." 

            }
        ],
        branch: [
            {
                condition: "Proceed with Proof of Ownership",
                targetId: "012"
            }
        ]
    },
    {
        id: "011",
        steps: [
            {
                title: "Create a new Market BP",
                detail: "The consultant creates a new Market BP in C@P based on the given customer data and the Porsche Center stated in the email. In the Notes section of the Market BP, the consultant adds the note “BP created as part of PoO request”. This is important so that the Porsche Center understands where the BP comes from." 

            }
        ],
        branch: [
            {
                condition: "Proceed with Proof of Ownership",
                targetId: "012"
            }
        ]
    },
    {
        id: "012",
        steps: [
            {
                title: "Fulfill Proof of Ownership check",
                detail: "The consultant fulfills the Proof of Ownership request by checking the completeness and the validity of all documents relevant for the corresponding market. Relevant documents are e.g.:\n" +
                            " • Proof of identity \n" +
                            " • Proof of ownership\n" +
                            " • Proof of authorization (e.g. leased vehicle)\n" + 
                        "The respective market specific information is given in the Knowledge Database. \nPlease note: If the customer already has a Porsche vehicle in his My Porsche the proof of identity is not required."
            } 
        ],
        branch: [
            {
                condition: "Documents are invalid or incomplete",
                targetId: "013"
            },
            {
                condition: "Documents are valid",
                targetId: "014"
            }
        ]
    },
    {
        id: "013",
        steps: [
            {
                title: "Inform customer and ask for missing documents",
                detail: "If the proof of the ownership are not valid, the customer is informed by the consultant about the missing or invalid documents via email. If the customer does not respond the consultant will send two more reminders (every 7 days) before the Proof of Ownership is rejected." 
            },
            {
                title: "Document as PoO Activity",
                detail: "The consultant documents all relevant information in the activity Proof of Ownership (PoO) in C@P and attaches all relevant documents. For a detailed description of the process in C@P, please refer to the corresponding training material." 

            }
        ],
        branch: [
            {
                condition: "Once Documents are presented, proceed with Proof of Ownership",
                targetId: "012"
            }
        ]
    },
    {   
        id: "014",
        steps: [
            {
                title: "Document as PoO activity",
                detail: "If the Proof of the Ownership documents was successful, the consultant documents all relevant information in the Proofof Ownership (PoO) activity in C@P and attaches all relevant documents. For a detailed description of the process in C@P, please refer to the corresponding training material."
            },
            {
                title: "Forward PoO Activity to TL",
                detail: "The consultant forwards the activity Proof of Ownership to a team leader for second approval."
            },
            {
                title: "TL fulfills 2nd check and forwards to consultant",
                detail: "This process step is carried out by a team leader. Afterwards the team leader forwards the activity Proof of Ownership to the consultant. Consultant checks if it was approved."
            }             
        ],
        branch: [
            {
                condition: "PoO not approved",
                targetId: "013"
            },
            {
                condition: "PoO approved",
                targetId: "015"
            }
        ]
    },
    {
        id: "015",
        steps: [
            {
                title: "Create or switch new customer-vehicle-relationship",
                detail: "The consultant creates the new customer-vehicle-relationship in C@P. For a detailed description of the process in C@P, please refer to the corresponding training material and market specific information."
            },
            {
                title: "Trigger invitation email and inform customer",
                detail: "The consultant triggers the invitation email for My Porsche via the Assignment Block “Vehicles” (envelope button) in the Market BP."
            },
            {
                title: "Inform PC about new customer-vehicle-relationship",
                detail: "The consultant forwards the activity Proof of Ownership to a team leader for second approval."
            },
            {
                title: "Document in the activity and delete documents.",
                detail: "This process step is carried out by a team leader. Afterwards the team leader forwards the activity “Proof of Ownership” to the consultant."
            },
            {
                title: "Set status in PoO Activity as completed",
                detail: "The consultant documents all relevant information in the activity Proof of Ownership (PoO) in C@P and attaches all relevant documents. The consultant deletes the documents sent by the customer in C@P, except of the Proof of Ownership request form."
            }
        ],
        branch: [
            {
                condition: "Process is complete",
                targetId: "end"
            }
        ]
    },
    {
        id: "end",
            steps: [
                {
                    title: "Complete",
                    detail: "You have completed the Proof of Ownership process."
                },
            ],
            branch: [
                {
                    condition: "Back to the start",
                    targetId: "001"
                },
            ]
    }
];