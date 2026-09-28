// Question 1: Value Detective

function describeValue(value){
    console.log(`${typeof(value)} | ${value? "truthy" : "falsy"}`);
}

describeValue("hello");
describeValue("");
describeValue(25);
describeValue(0);
describeValue(true);
describeValue(null);
describeValue(undefined);
describeValue("0");
describeValue(NaN);
describeValue(null);

// Question 2: Bangladesh Weekend Machine

function getDayType(day_name){
    day_name = day_name.toLowerCase();

    switch (true) {
        case day_name === "friday" || day_name === "saturday":
            console.log("Weekend");
            break;

        case day_name === "sunday" || day_name === "monday" || day_name === "tuesday" || day_name === "wednesday" || day_name === "thursday":
            console.log("Working Day");  
            break;      

        default:
            console.log("Invalid Day");
            
    }
}

getDayType("Friday")	
getDayType("friday")	
getDayType("MONDAY")	
getDayType("Bandarban")


// Question 3: Username Gatekeeper
function validateUsername(username){
    const len = username.length;
    if(len < 4){
        console.log("Too Short");
    } else if(username.includes(' ')){
        console.log("No Space Allowed");
    } else if(username.toLowerCase().includes("admin")){
        console.log("Reserved Word");
    }
    else{
        console.log("Available");
    }
}

validateUsername("rahim123")	
validateUsername("ab")	
validateUsername("a b")	
validateUsername("abcd")	
validateUsername("rahim islam")		
validateUsername("superadmin99")
validateUsername("Admin_Rahim")