import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/business';
  versionuri = 'http://localhost:4000/getversion';

  constructor(private http: HttpClient,    private router: Router,) { }

  addBusiness(person_name, business_name, business_gst_number) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res =>{ console.log('Done')
        this.router.navigate(['business']);
  });
  }

  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }

  getVersion() {
    return this
           .http
           .get(`${this.versionuri}`);
  }

  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateBusiness(person_name, business_name, business_gst_number, id) {

    const obj = {
        person_name: person_name,
        business_name: business_name,
        business_gst_number: business_gst_number
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

 deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
