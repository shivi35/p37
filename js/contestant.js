class Contestant{
    constructor(){
        this.index=null
        this.answer=0
        this.name=null
    }
    getCount() {
        var contestCountref=database.ref("contestCount")
        contestCountref.on("value",(data)={
            contestentCount=data.val()
        })
}
updateCount(count){
    database.ref("/").update({
        contestCount:count
        
    })
}
update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }
  static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }
}