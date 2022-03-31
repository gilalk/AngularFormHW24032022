import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  readonly RES_KEY = 'Results';
  showForm: boolean = true
  secQuest: boolean = false
  thirdQuest: boolean = false
  fourthQuest:boolean = false
  showButton: boolean = false
  imageSrc: string = ''
  result: string = ''
  results: any[] = [];

  formData = {
    firstQuest: '0',
    secondQuest: '0',
    thirdQuest: '0',
    fourthQuest: '0'
  }
  finalVal: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(value: any) {
    this.formData = value;
    let num1 = parseInt(this.formData.firstQuest);
    let num2 = parseInt(this.formData.secondQuest);
    let num3 = parseInt(this.formData.thirdQuest);
    let num4 = parseInt(this.formData.fourthQuest);
    this.finalVal = num1 + num2 + num3 + num4;
    this.showForm = false;
    this.getResult();
    this.results.push(this.finalVal);
    this.results.push(this.result);
    // console.log(this.formData , this.finalVal);
  }

  onFirstClick() {
    this.secQuest = true;
  }
  onSecClick() {
    this.thirdQuest = true;
  }
  onthirdClick(){
    this.fourthQuest = true;
  }
  onButtonClick() {
    this.showButton = true;
  }

  getResult() {
    try {
      if (this.finalVal > 0 && this.finalVal <= 50) {
        this.imageSrc = 'https://www.photo-art.co.il/wp-content/uploads/2015/06/BY1A93521.jpg'
        this.result = 'חמניה! יש לך עוד לאן להשתפר ברמה החברתית';
      } else if (this.finalVal > 50 && this.finalVal <= 75) {
        this.imageSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Rakefet001.jpg/1200px-Rakefet001.jpg';
        this.result = 'רקפת! אתם בכיוון הנכון!';
      } else if (this.finalVal > 75 && this.finalVal <= 100) {
        this.imageSrc = 'http://avivanursery.com/wp-content/uploads/2020/05/bird-of-paradise-flower-1359718-scaled.jpg';
        this.result = 'ציפור גן עדן! אין מה לומר, חיה חברתית!';
      }
    } catch (error) {
      this.imageSrc = 'https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png width=250px';
      this.result = 'משהו לא עבד';
    }
  }

  handleSave() : void {
    localStorage.setItem(this.RES_KEY, JSON.stringify(this.results));
  }

  onRestart() {
    this.showForm = true;
    this.secQuest= false;
    this.thirdQuest = false;
    this.fourthQuest = false;
    this.showButton = false;
  }
}
