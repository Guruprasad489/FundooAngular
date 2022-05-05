import { getLocaleEraNames } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  createNote(reqData: any) {
    // console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.postService('Notes/Create', reqData, true, header);
  }

  getAllNotes() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.getService('Notes/GetAll', true, header);
  }

  // displayNote(id: any) {
  //   // console.log(id)
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization': `Bearer ${this.token}`
  //     })
  //   }
  //   return this.httpService.getService('Notes/View/noteId?noteId=' +id, true, header);
  // }

  updateNote(reqData: any, id: any) {
    // console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.putService('Notes/Update?noteId=' +id, reqData, true, header);
    // this.batchBaseURL + `batch/search/${searchBy}/${tab}?word=${searchWord}`
  }

  deleteNote(id: any) {
    // console.log(id)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.deleteService('Notes/Delete?noteId=' +id, true, header);
  }
}
