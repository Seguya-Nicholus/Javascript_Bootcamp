let resturant = {
    name: 'Cabana',
    guestCapacity: 75,
    guestCount: 0,
    checkAvialability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize){
        this.guestCount = this.guestCount - partySize
    }
}

resturant.seatParty(72)
console.log(resturant.checkAvialability(7))
resturant.removeParty(3)
console.log(resturant.checkAvialability(7))
resturant.removeParty(4)
console.log(resturant.checkAvialability(7))
