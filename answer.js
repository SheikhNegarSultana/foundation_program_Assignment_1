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