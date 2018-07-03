import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
ans1
ans2
ans3
ans4
ans5
ans6
ans7
ans8
ans9
ans10
ans11
ans12
ans13
ans14
ans15
score = null;
score1 = null;
score3 = null;
score4 = null;
score5 = null;
totalScore =0;
correct = "Correct Answer"

// category b
slope;
percent;
equal;
number;
negative;
mathsScore1 = 0;
totScore = 0;
t1
f1
t2
f2
t3
f3
t4
f4
t5
f5
mathsScore2 = 0;
mathsScore3 = 0;
mathsScore4 = 0;
mathsScore5 = 0;
mathsTotal = 0;

//category c
geoTotal = null;
geoTrue =null;
geoFalse =null;
pacific =  null;
atlantic = null;
indian = null;
eastern = null;
mount
k2 = null;
kila = null;
ever = null;
mak = null;
four = null;
five = null;
six = null;
earth
cance = null;
cap = null;
sepScore = null;

end 
end2
timerVar;
timerValue;
timerVariable;
timerVal;
wrong = " "
  constructor(public navCtrl: NavController) {
    this. onTimer()
    this.onMaths()
  }

  onTimer() {
this.timerVar = Observable.interval(1000).subscribe( x => {
    console.log(x);
    this.timerVal = x;
    if(x == 10)
    {
      this.timerVar.unsubscribe()
      this.end =  "Time up!!";
    }
  })
  }


  onMaths() {
    this.timerVariable = Observable.interval(1000).subscribe( x => {
        console.log(x);
        this.timerValue = x;
        if(x == 10)
        {
          this.timerVariable.unsubscribe()
          this.end2 =  "Time up!!";
        }
      })
      }
  
  
  onClick(){
  if(this.ans1 == true)
  {
    this.ans1 = false;
    this.score += 1;
    this.timerVar.unsubscribe()
  }else{
    this.wrong = "Wrong Answer"
  }
  if(this.ans2 == true)
  {
    this.ans2 = false;
    this.score = 0;
    this.timerVar.unsubscribe()
  }
  if(this.ans3 == true)
  {
    this.ans3 = false;
    this.score = 0;
    this.timerVar.unsubscribe()
  }

  if(this.ans4 == true)
  {
    this.ans4 = false;
    this.score1 = 0;
    this.timerVar.unsubscribe()
  }
  if(this.ans5 == true)
  {
    this.ans5 = false;
    this.score1 += 1;
    this.timerVar.unsubscribe()
  }else{
    this.wrong = "Wrong Answer"
  }
  if(this.ans6 == true)
  {
    this.ans6 = false;
    this.score1 = 0;
    this.timerVar.unsubscribe()
  }

  if(this.ans7 == true)
  {
    this.ans7 = false;
    this.score3 = 0;
    this.timerVar.unsubscribe()
  }
  if(this.ans8 == true)
  {
    this.ans8 = false;
    this.score3 += 1;
    this.timerVar.unsubscribe()
  }else{
    this.wrong = "Wrong Answer"
  }
  if(this.ans9 == true)
  {
    this.ans9 = false;
    this.score3 = 0;
    this.timerVar.unsubscribe()
  }

  if(this.ans10 == true)
  {
    this.ans10 = false;
    this.score4 = 0;
    this.timerVar.unsubscribe()
  }
  if(this.ans11 == true)
  {
    this.ans11 = false;
    this.score4 = 0;
    this.timerVar.unsubscribe()
  }
  if(this.ans12 == true)
  {
    this.ans12 = false;
    this.score4 += 1;
    this.timerVar.unsubscribe()
  }else{
    this.wrong = "Wrong Answer"
  }

  if(this.ans13 == true)
  {
    this.ans13 = false;
    this.score5 += 1;
    this.timerVar.unsubscribe()
  }else{
    this.wrong = "Wrong Answer"
  }
  if(this.ans14 == true)
  {
    this.ans14 = false;
    this.score5 = 0;
    this.timerVar.unsubscribe()
  }
  if(this.ans15 == true)
  {
    this.ans15 = false;
    this.score5 = 0;
    this.timerVar.unsubscribe()
  }

  this.totalScore = this.score + this.score1 + this.score3 + this.score4 + this.score5;

}

onWork() {

  if(this.slope === "t1")
  {
    this.mathsScore1 = 1;
    
  }else if(this.slope === "f1")
  {
    this.mathsScore1 = 0;
  }

  if(this.percent === "t2")
  {
    this.mathsScore2 = 0;
  }else if(this.percent === "f2")
  {
    this.mathsScore2 = 1;
  }

  if(this.equal === "t3")
  {
    this.mathsScore3 = 0;
  }else if(this.equal === "f3")
  {
    this.mathsScore3 = 1;
  }

  if(this.number === "t4")
  {
    this.mathsScore4 = 1;
  }else if(this.number === "f4")
  {
    this.mathsScore4 = 0;
  }

  if(this.negative === "t5")
  {
    this.mathsScore5 = 0;
  }else if(this.negative === "f5")
  {
    this.mathsScore5 = 1;
  }

  this.mathsTotal = this.mathsScore1 + this.mathsScore2 + this.mathsScore3 + this.mathsScore4 + this.mathsScore5;
  alert("Well done your score is" + " " + "Score" + " "+ "=" + " " + this.mathsTotal);
}

onTrue() {
    this.geoTotal = this.geoTotal + this.geoTrue;
}

onFalse(){
  this.geoFalse = 1;
  this.geoTotal = this.geoTotal + this.geoFalse;
}

onPacific(){
  this.geoTotal = this.geoTotal + this.pacific;
}
onIndian(){
  this.geoTotal = this.geoTotal + this.indian;
}
onAtlantic(){
  this.atlantic = 1;
  this.geoTotal = this.geoTotal + this.atlantic;
}
onEastern(){
  this.geoTotal = this.geoTotal + this.eastern;
}

onSix(){
  this.six = this.six;
}
onFive(){
 this.five = this.five;
}
onFour(){
  this.four = this.four + 1;
  this.geoTotal = this.geoTotal + this.four;
}


onSubmit(){
  if(this.mount === "k2")
  {
    this.k2 = this.k2;
    
  }else if(this.mount === "everest")
  {
   this.ever = this.ever;
  }else if(this.mount === "kila")
  {
    this.kila = this.kila + 1;
  }else if(this.mount === "makalu")
  {
    this.mak = this.mak;
    
  }

  this.geoTotal = this.geoTotal + this.kila;
  
  if(this.earth === "Tropic of capricon")
  {
    this.cap = null;
    
  }else if(this.earth === "Tropic of cancer")
  {
    this.cance = this.cance + 1;
    
  }else{
    this.wrong = "Wrong answer";
  }
  this.geoTotal = this.geoTotal + this.cance;
  this.geoTotal = this.kila + this.cance + this.four + this.geoFalse + this.atlantic;
}



}
