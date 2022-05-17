import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  myForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(myForm: FormGroup) {
    this.submitted = true;

    if (!this.myForm.valid) return;
       
    //alert('Form Data: \n\n' + JSON.stringify(this.myForm.value, null, 4));

    console.log('Valid?', myForm.valid);
    console.log('Name', myForm.value.name);
    console.log('Email', myForm.value.email);
    console.log('Message', myForm.value.message);
  }
  get f() { return this.myForm.controls; }



}