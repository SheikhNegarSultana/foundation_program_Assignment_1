// Question 1: Value Detective

function describeValue(value){
    return `${typeof(value)} | ${value? "truthy" : "falsy"}`;
}

console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));
console.log(describeValue("0"));
console.log(describeValue(NaN));
console.log(describeValue(null));

// Question 2: Bangladesh Weekend Machine

function getDayType(day_name){
    day_name = day_name.toLowerCase();

    switch (true) {
        case day_name === "friday" || day_name === "saturday":
            return "Weekend";
            break;

        case day_name === "sunday" || day_name === "monday" || day_name === "tuesday" || day_name === "wednesday" || day_name === "thursday":
            return "Working Day";  
            break;      

        default:
            return "Invalid Day";
            
    }
}

console.log(getDayType("Friday"))	
console.log(getDayType("friday"))	
console.log(getDayType("MONDAY"))	
console.log(getDayType("Bandarban"))


// Question 3: Username Gatekeeper
function validateUsername(username){
    const len = username.length;
    if(len < 4){
        return "Too Short";
    } else if(username.includes(' ')){
        return "No Space Allowed";
    } else if(username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }
    else{
        return "Available";
    }
}

console.log(validateUsername("rahim123"))	
console.log(validateUsername("ab"))	
console.log(validateUsername("a b"))	
console.log(validateUsername("abcd"))	
console.log(validateUsername("rahim islam"))		
console.log(validateUsername("superadmin99"))
console.log(validateUsername("Admin_Rahim"))


// Question 4: Dhaka CNG Fare Meter
function getCngFare(distance, isNight = false, waitingMinutes = 0){
    let fare = 50;

    if(distance >2 ){
       fare = fare + (distance - 2) * 15;
    }

    fare = fare + (waitingMinutes*2);

    if(isNight){
        fare = fare*1.2;
    }

    return fare;

}

console.log(getCngFare(2))	
console.log(getCngFare(1))	
console.log(getCngFare(5))	
console.log(getCngFare(10))	
console.log(getCngFare(5, false, 10))	
console.log(getCngFare(5, true))	
console.log(getCngFare(5, true, 10))



// Question 5: Run Chase Commentator

