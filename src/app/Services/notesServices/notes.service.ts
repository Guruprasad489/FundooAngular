import { getLocaleEraNames } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService: HttpService) {
  }

  createNote(reqData: any) {
    // console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.httpService.postService('Notes/Create', reqData, true, header);
  }

  getAllNotes() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.httpService.getService('Notes/GetAll', true, header);
  }

  // displayNote(id: any) {
  //   // console.log(id)
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization': `Bearer ${localStorage.getItem('token')}`
  //     })
  //   }
  //   return this.httpService.getService('Notes/View/noteId?noteId=' +id, true, header);
  // }

  updateNote(reqData: any, id: any) {
    // console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.httpService.putService('Notes/Update?noteId=' + id, reqData, true, header);
    // this.batchBaseURL + `batch/search/${searchBy}/${tab}?word=${searchWord}`
  }

  trashNote(id: any) {
    // console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.httpService.patchService('Notes/IsTrash?noteId=' + id, {}, true, header);
  }

  deleteNote(id: any) {
    // console.log(id)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.httpService.deleteService('Notes/Delete?noteId=' + id, true, header);
  }

  archiveNote(id: any) {
    // console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.httpService.patchService('Notes/IsArchive?noteId=' + id, {}, true, header);
  }

  pinNote(id: any) {
    // console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.httpService.patchService('Notes/IsPinned?noteId=' + id, {}, true, header);
  }

  changeColor(newColor: any, id: any) {
    //console.log(newColor, id)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.httpService.patchService('Notes/ChangeColor', { newColor: newColor, noteId: id }, true, header);
  }

  uploadImage(img: any, id: any) {
    console.log(img, id)
    let header = {
      headers: new HttpHeaders({
        //'Content-type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.httpService.patchService('Notes/UploadImage/noteId?noteId='+id, img, true, header);
  }

  removeImage(id: any) {
    //console.log(id)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.httpService.patchService('Notes/RemoveImage/noteId?noteId=' + id, {}, true, header);
  }


  TestNotes: any[]= [
    {
        "noteId": 25,
        "title": "new3",
        "description": "New note trial",
        "color": "#fdcfe8",
        "image": "http://res.cloudinary.com/guruprasad489/image/upload/v1652381735/ml8hbkcfpyrmm2lszgrc.jpg",
        "reminder": "0001-01-01T00:00:00",
        "isArchive": false,
        "isPin": true,
        "isTrash": false,
        "createdAt": "2022-05-05T13:59:23.6121959",
        "modifiedAt": "2022-05-14T13:23:14.7450694",
        "userId": 8
    },
    {
        "noteId": 27,
        "title": "Lorem Updated",
        "description": "Updated Voluptas dolorum tenetur amet quibusdam perferendis impedit provident.\nhf",
        "color": "#ccff90",
        "image": "http://res.cloudinary.com/guruprasad489/image/upload/v1652190883/cuyldy2sblvrsv2kjnqm.jpg",
        "reminder": "0001-01-01T00:00:00",
        "isArchive": false,
        "isPin": true,
        "isTrash": false,
        "createdAt": "2022-05-05T23:09:04.5661291",
        "modifiedAt": "2022-05-14T13:22:54.3636568",
        "userId": 8
    },
    {
        "noteId": 16,
        "title": "Angular",
        "description": "Fundoo Notes using angular",
        "color": "#fff475",
        "image": "http://res.cloudinary.com/guruprasad489/image/upload/v1652381735/ml8hbkcfpyrmm2lszgrc.jpg",
        "reminder": "0001-01-01T00:00:00",
        "isArchive": false,
        "isPin": true,
        "isTrash": false,
        "createdAt": "2022-05-04T19:36:23.9752957",
        "modifiedAt": "2022-05-13T11:30:51.4785072",
        "userId": 8
    },
    {
        "noteId": 26,
        "title": "Lorem",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nhjh\nhttp://localhost:4200/home/notes\n",
        "color": "#fff475",
        "image": null,
        "reminder": "0001-01-01T00:00:00",
        "isArchive": true,
        "isPin": true,
        "isTrash": false,
        "createdAt": "2022-05-05T23:04:32.1664756",
        "modifiedAt": "2022-05-12T23:38:00.2974719",
        "userId": 8
    },
    {
        "noteId": 10,
        "title": "Demo",
        "description": "Demo note jdhjhBDHBHbhbjb jbkjnjkn nbjkb bjnbjkbnjbhjbh bhbhbhbhbhbh bhbjbjbh bhbhbhbhbb hbhbhbhbhbh bhjbhjbhbhb hbhb bhbjb hbjbhbh  njjjjjjjjjjjjjj jj j j j jjjjjjj",
        "color": "#f28b82",
        "image": "",
        "reminder": "0001-01-01T00:00:00",
        "isArchive": true,
        "isPin": true,
        "isTrash": true,
        "createdAt": "2022-05-04T15:36:47.2024841",
        "modifiedAt": "2022-05-12T20:32:41.4393314",
        "userId": 8
    },
    {
        "noteId": 2,
        "title": "string3",
        "description": "Updated\nhhhhhhhhhhhhhhhhhhhhhhhhhh\nmmmmmmmmmmmmmmmmm\n",
        "color": "#a7ffeb",
        "image": "http://res.cloudinary.com/guruprasad489/image/upload/v1652361440/jlcrnu3jz44wplbtir03.jpg",
        "reminder": "0001-01-01T00:00:00",
        "isArchive": true,
        "isPin": false,
        "isTrash": false,
        "createdAt": "2022-03-31T21:58:10.9926633",
        "modifiedAt": "2023-04-30T12:21:16.4572346",
        "userId": 8
    },
    {
        "noteId": 4,
        "title": "Test",
        "description": "string",
        "color": "#f28b82",
        "image": null,
        "reminder": "0001-01-01T00:00:00",
        "isArchive": false,
        "isPin": false,
        "isTrash": false,
        "createdAt": "2022-04-04T08:12:42.340019",
        "modifiedAt": "2022-05-14T12:22:37.4305174",
        "userId": 8
    },
    {
        "noteId": 20,
        "title": "Refresh",
        "description": "Refresh d",
        "color": "#d7aefb",
        "image": "",
        "reminder": "0001-01-01T00:00:00",
        "isArchive": false,
        "isPin": false,
        "isTrash": false,
        "createdAt": "2022-05-05T09:48:46.21952",
        "modifiedAt": "2022-05-13T11:38:31.4854223",
        "userId": 8
    },
    {
        "noteId": 13,
        "title": "",
        "description": "Description demo",
        "color": "#aecbfa",
        "image": "",
        "reminder": "0001-01-01T00:00:00",
        "isArchive": false,
        "isPin": false,
        "isTrash": false,
        "createdAt": "2022-05-04T15:47:22.712525",
        "modifiedAt": "2022-05-13T11:37:41.0711815",
        "userId": 8
    },
    {
        "noteId": 23,
        "title": "Lorem",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.??",
        "color": "#fff475",
        "image": null,
        "reminder": "0001-01-01T00:00:00",
        "isArchive": false,
        "isPin": false,
        "isTrash": false,
        "createdAt": "2022-05-05T13:57:54.7640188",
        "modifiedAt": "2022-05-13T11:37:31.6747434",
        "userId": 8
    },
    {
        "noteId": 5,
        "title": "string",
        "description": "string Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "color": "#cbf0f8",
        "image": null,
        "reminder": "0001-01-01T00:00:00",
        "isArchive": false,
        "isPin": false,
        "isTrash": false,
        "createdAt": "2022-04-05T10:02:44.0768746",
        "modifiedAt": "2022-05-13T11:28:15.6890622",
        "userId": 8
    },
    {
        "noteId": 8,
        "title": "Fundoo Note",
        "description": "Testing First Fundoo Note ",
        "color": "",
        "image": "",
        "reminder": "0001-01-01T00:00:00",
        "isArchive": false,
        "isPin": false,
        "isTrash": false,
        "createdAt": "2022-05-04T15:12:50.2807819",
        "modifiedAt": "2022-05-13T01:00:25.0980188",
        "userId": 8
    },
    {
        "noteId": 17,
        "title": "Angular",
        "description": "Fundoo Notes using angular",
        "color": "#fdcfe8",
        "image": null,
        "reminder": "0001-01-01T00:00:00",
        "isArchive": false,
        "isPin": false,
        "isTrash": false,
        "createdAt": "2022-05-04T19:45:36.4539331",
        "modifiedAt": "2022-05-13T00:54:43.4431072",
        "userId": 8
    },
    {
        "noteId": 29,
        "title": "T",
        "description": "ttt??",
        "color": "#ccff90",
        "image": null,
        "reminder": "0001-01-01T00:00:00",
        "isArchive": true,
        "isPin": false,
        "isTrash": true,
        "createdAt": "2022-05-06T23:26:07.1504895",
        "modifiedAt": "2022-05-12T20:48:54.7552446",
        "userId": 8
    },
    {
        "noteId": 24,
        "title": "new2",
        "description": "\n\n",
        "color": "",
        "image": "",
        "reminder": "0001-01-01T00:00:00",
        "isArchive": true,
        "isPin": false,
        "isTrash": true,
        "createdAt": "2022-05-05T13:58:56.3769917",
        "modifiedAt": "2022-05-12T19:59:36.1505664",
        "userId": 8
    },
    {
        "noteId": 12,
        "title": "Title Demo",
        "description": "",
        "color": "#aecbfa",
        "image": "",
        "reminder": "0001-01-01T00:00:00",
        "isArchive": false,
        "isPin": false,
        "isTrash": false,
        "createdAt": "2022-05-04T15:46:49.1838801",
        "modifiedAt": "2022-05-10T19:34:50.7886992",
        "userId": 8
    }
  ]
}
