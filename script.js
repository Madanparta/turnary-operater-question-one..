

//  Answer solving two way 1st way normal turnary operater using...
const stevenBill = 200;


stevenBill>=50 && stevenBill <=300 ? console.log(`The bill was ${stevenBill}, the tip was ${stevenBill*15/100}, and the total value ${stevenBill+(stevenBill*15/100)}.`): console.log(`The bill was ${stevenBill}, the tip was ${(stevenBill-300)*20/100}, and the total value ${stevenBill+(stevenBill-300)*20/100}.`);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>another way 1st we creating an veriable to storing an data then executing...


const tip = stevenBill>=50 && stevenBill <=300 ? stevenBill*15/100 : (stevenBill-300)*20/100;

console.log(`The bill was ${stevenBill}, the tip was ${tip}, and the total value ${stevenBill+tip}.`);