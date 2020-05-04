function change(num){
    remainder = num
    money = {
        "dollar": 0,
        "quarter": 0,
        "dime": 0,
        "nickle": 0,
        "penny": 0,
    }
    while(remainder > 0){
        if (remainder > 100){
            money["dollar"]+=1
            remainder -= 100
        }else if(remainder > 25){
            money["quarter"]+=1
            remainder-= 25
        }else if(remainder > 10){
            money["dime"]+=1
            remainder-= 10
        }else if(remainder > 5){
            money["nickle"]+=1
            remainder-= 5
        }else{
            money["penny"] = remainder
            remainder = 0
        }
    } console.log(money)
}

change(444)
change(78)