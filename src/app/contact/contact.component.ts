import { Component, OnInit, ViewChild, Input, Inject, ElementRef ,AfterViewInit} from '@angular/core';

import { FeedbackService } from '../services/feedback.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { Feedback, ContactType } from '../shared/feedback';

import { flyInOut, visibility, expand } from '../animations/app.animation';

//import { } from '@types/googlemaps';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    visibility(),
    expand()
  ]
})
export class ContactComponent implements OnInit {
  //latitude:number;
  //longitude:number;

  //iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

  visibility = 'shown';

  feedbackForm: FormGroup;
  feedback: Feedback;
  feedbackcopy: Feedback;
  contactType = ContactType;

  errMess: string;

  isLoading: boolean;
  isShowingResponse: boolean;


  @ViewChild('fform') feedbackFormDirective;
  //@ViewChild('gmap') gmapElement: any;
  //map: google.maps.Map;

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };

  constructor(private fb: FormBuilder,
    private feedbackservice: FeedbackService,
      private route: ActivatedRoute,
      //private location: Location,

      @Inject('BaseURL') private BaseURL) {
    this.createForm();
    this.isLoading = false;
    this.isShowingResponse = false;
   }

   ngOnInit() {
     /*var mapProp = {
       center: new google.maps.LatLng(19.1231776, 72.8339267),
       zoom: 15,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     var marker = new google.maps.Marker({
               position: new google.maps.LatLng(19.123992, 72.836484),
               //map: map,
               title: 'Enactus S.P.I.T!',
            });

     this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
     marker.setMap(this.map);  */
   }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email] ],
      agree: false,
      contacttype: 'None',
      message: ''
    });


    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }



  onSubmit() {
    this.isLoading = true;
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    //this.feedbackcopy.feedback.push(this.feedback);
    this.feedbackservice.submitFeedback(this.feedback)
     .subscribe(feedback => {
       this.feedback = feedback; this.feedbackcopy = feedback;
     },
     errmess => { this.feedback = null; this.feedbackcopy = null; this.errMess = <any>errmess; },
     () => {
       this.isShowingResponse = true;
       setTimeout(() => {
           this.isShowingResponse = false;
           this.isLoading = false;
         } , 5000
       );
     });
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
    //https://github.com/prabeshb/Front-End-JavaScript-Frameworks-Angular/blob/master/src/app/contact/contact.component.html
    //https://github.com/cuiziang/Front-End-JavaScript-Frameworks-Overview-Angular/blob/master/src/app/contact/contact.component.html

  }




}
