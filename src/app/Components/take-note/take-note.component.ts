import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/Services/notesServices/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-take-note',
    templateUrl: './take-note.component.html',
    styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
    public takeNote: boolean = false;
    data : any;

    title: string = "";
    description: string = "";
    color: string = "";
    image: string = "";
    // reminder: Date= new Date();
    isArchive: boolean = false;
    isPin: boolean = false;
    isTrash: boolean = false;

    @Output() createNoteEvent = new EventEmitter<any>();

    constructor(private notesService: NotesService, private _snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.data = {
            title: this.title,
            description: this.description,
            color: this.color,
            image: this.image,
            // reminder: Date= new Date(),
            isArchive: this.isArchive,
            isPin: this.isPin,
            isTrash: this.isTrash
        }
    }

    clickTakeNote() {
        this.takeNote = true
    }

    createNote() {
        this.takeNote = false

        if ((this.title != null && this.title != "") || (this.description != null && this.description != "")) {
            let reqData = {
                title: this.title,
                description: this.description,
                color: this.color,
                image: this.image,
                // reminder: this.reminder,
                isArchive: this.isArchive,
                isPin: this.isPin,
                isTrash: this.isTrash
            }
            this.notesService.createNote(reqData).subscribe((response: any) => {
                console.log("Note Created successfully", response);
                this.createNoteEvent.emit(response);

                this.title = "",
                    this.description = "";
                this.color = "";
                this.image = ""
                //this.reminder=""
                this.isArchive = false;
                this.isPin = false;
                this.isTrash = false;

                this._snackBar.open('Note Created successfully', '', {
                    duration: 3000,
                    verticalPosition: 'bottom'
                })
            });
        }
        else {
            console.log("Both Title and Description should not be null or empty");
            this._snackBar.open('Both Title and Description should not be empty', '', {
                duration: 3000,
                verticalPosition: 'bottom'
            })
        }
    }

    pinUnPin() {
        this.isPin = !this.isPin;
    }
    archiveUnArchive() {
        this.isArchive = !this.isArchive;
    }

}
