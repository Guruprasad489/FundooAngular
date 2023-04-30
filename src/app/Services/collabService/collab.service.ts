import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class CollabService {

  constructor(private httpService: HttpService) {
  }

  addCollab(id:any, reqData: any) {
    // console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.httpService.postService('Collaborator/Add?noteID='+id, {EmailId:reqData}, true, header);
  }

  getAllCollabs(noteId:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.httpService.getService('Collaborator/GetAll?noteID='+noteId, true, header);
  }

  removeCollab(collabId: any, noteId:any) {
    // console.log(id)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.httpService.deleteService(`Collaborator/Remove?collabID=${collabId}&noteID=${noteId}`, true, header);
  }

  getCollabsList() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.httpService.getService('Collaborator/GetCollabList', true, header);
  }
}
